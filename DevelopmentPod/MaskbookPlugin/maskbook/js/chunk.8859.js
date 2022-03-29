"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8859],{

/***/ 18859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ./src/plugins/FindTruman/base.ts
var base = __webpack_require__(69541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(92093);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(65631);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/plugins/FindTruman/context.ts
var context = __webpack_require__(69507);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(22234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(4834);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(70008);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTrumanCard.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
            boxSizing: 'border-box'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function FindTrumanCard(props) {
    const { title , children  } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/LoadingFailCard.tsx




class LoadingFailCard extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return this.props.isFullPluginDown ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to FindTruman API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(FindTrumanCard, {
                title: this.props.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to FindTruman API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CardMedia/CardMedia.js + 1 modules
var CardMedia = __webpack_require__(62810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(72753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(63190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(70644);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(39402);
// EXTERNAL MODULE: ./src/plugins/FindTruman/types.ts
var types = __webpack_require__(73764);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx
var ResultCard = __webpack_require__(84548);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx
var OptionsCard = __webpack_require__(39527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(13152);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/Footer.tsx





const Footer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            minHeight: '48px',
            flexWrap: 'wrap',
            rowGap: '8px'
        },
        chip: {
            ':not(:last-child)': {
                marginRight: '8px'
            }
        }
    };
});
function Footer() {
    const { const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const { classes  } = Footer_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.footer,
        children: [
            consts && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                rel: "noopener noreferrer",
                component: "a",
                target: "_blank",
                href: consts.faqUrl,
                variant: "body2",
                sx: {
                    fontWeight: 'bold',
                    fontSize: '12px'
                },
                children: consts.faqLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flexWrap: "wrap",
                rowGap: 1,
                direction: "row",
                children: consts === null || consts === void 0 ? void 0 : consts.icons.map((e)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        className: classes.chip,
                        size: "small",
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            alt: "FindTruman",
                            src: e.icon
                        }),
                        label: e.label,
                        variant: "outlined",
                        clickable: true,
                        component: "a",
                        target: "_blank",
                        href: e.url
                    }, e.label)
                )
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/StageCard.tsx
var StageCard = __webpack_require__(66925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(11784);
// EXTERNAL MODULE: ./src/plugins/FindTruman/Worker/apis/index.ts
var apis = __webpack_require__(53504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FlipCard.tsx


var FlipCardChildType;
(function(FlipCardChildType) {
    FlipCardChildType[FlipCardChildType["FRONT"] = 0] = "FRONT";
    FlipCardChildType[FlipCardChildType["BACK"] = 1] = "BACK";
})(FlipCardChildType || (FlipCardChildType = {}));
const FlipCardRotateDegree = {
    noFlipped: 0,
    frontRotate: 180,
    backRotate: -180
};
const FlipCard = (props)=>{
    const { cardStyles , cardZIndex , containerStyle , flipDirection , flipSpeedFrontToBack , flipSpeedBackToFront , infinite ,  } = props;
    const [isFlipped, setFlipped] = (0,react.useState)(props.isFlipped);
    const [rotation, setRotation] = (0,react.useState)(FlipCardRotateDegree.noFlipped);
    (0,react.useEffect)(()=>{
        if (props.isFlipped === isFlipped) return;
        setFlipped(props.isFlipped);
        setRotation((c)=>c + FlipCardRotateDegree.frontRotate
        );
    }, [
        props.isFlipped
    ]);
    const getComponent = (key)=>{
        return props.children[key];
    };
    const frontRotateY = `rotateY(${infinite ? rotation : isFlipped ? FlipCardRotateDegree.frontRotate : FlipCardRotateDegree.noFlipped}deg)`;
    const backRotateY = `rotateY(${infinite ? rotation + FlipCardRotateDegree.frontRotate : isFlipped ? FlipCardRotateDegree.noFlipped : FlipCardRotateDegree.backRotate}deg)`;
    const frontRotateX = `rotateX(${infinite ? rotation : isFlipped ? FlipCardRotateDegree.frontRotate : FlipCardRotateDegree.noFlipped}deg)`;
    const backRotateX = `rotateX(${infinite ? rotation + FlipCardRotateDegree.frontRotate : isFlipped ? FlipCardRotateDegree.noFlipped : FlipCardRotateDegree.backRotate}deg)`;
    const styles = {
        back: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            height: '100%',
            left: '0',
            position: isFlipped ? 'relative' : 'absolute',
            top: '0',
            transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedFrontToBack}s`,
            width: '100%',
            ...cardStyles === null || cardStyles === void 0 ? void 0 : cardStyles.back
        },
        container: {
            perspective: '1000px',
            zIndex: cardZIndex
        },
        flipper: {
            height: '100%',
            position: 'relative',
            width: '100%'
        },
        front: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            height: '100%',
            left: '0',
            position: isFlipped ? 'absolute' : 'relative',
            top: '0',
            transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedBackToFront}s`,
            width: '100%',
            zIndex: '2',
            ...cardStyles === null || cardStyles === void 0 ? void 0 : cardStyles.front
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            ...styles.container,
            ...containerStyle
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: styles.flipper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: styles.front,
                    children: getComponent(FlipCardChildType.FRONT)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: styles.back,
                    children: getComponent(FlipCardChildType.BACK)
                })
            ]
        })
    }));
};
FlipCard.defaultProps = {
    cardStyles: {
        back: {},
        front: {}
    },
    cardZIndex: 'auto',
    containerStyle: {},
    flipDirection: 'horizontal',
    flipSpeedBackToFront: 0.6,
    flipSpeedFrontToBack: 0.6,
    infinite: false,
    isFlipped: false
};
/* harmony default export */ const SNSAdaptor_FlipCard = (FlipCard);

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/EncryptionCard.tsx









const EncryptionCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p': {
                margin: 0
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        },
        card: {
            borderRadius: '6px',
            ':not(:last-child)': {
                marginBottom: '8px'
            },
            display: 'flex',
            flexDirection: 'column'
        }
    };
});
function EncryptionCard(props) {
    const { clueId  } = props;
    const { classes  } = EncryptionCard_useStyles();
    const { address , t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const [flipped, setFlipped] = (0,react.useState)(false);
    const [backImgHeight, setBackImgHeight] = (0,react.useState)(0);
    const { value: clue , error  } = (0,useAsync/* default */.Z)(async ()=>{
        return clueId ? (0,apis/* fetchClue */.aE)(clueId, address) : {
            decrypted: false,
            conditions: undefined,
            frontImg: '',
            backImg: ''
        };
    }, [
        clueId,
        address
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        children: [
            clue && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "text.secondary",
                        children: t('plugin_find_truman_decrypted_by')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                        sx: {
                            margin: '8px 0'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            style: {
                                width: 250
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SNSAdaptor_FlipCard, {
                                isFlipped: flipped,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        onLoad: ({ currentTarget  })=>{
                                            var ref;
                                            setBackImgHeight(((ref = currentTarget.parentElement) === null || ref === void 0 ? void 0 : ref.offsetHeight) || 0);
                                        },
                                        onClick: ({ currentTarget  })=>{
                                            var ref;
                                            setBackImgHeight(((ref = currentTarget.parentElement) === null || ref === void 0 ? void 0 : ref.offsetHeight) || 0);
                                            backImgHeight && setFlipped(true);
                                        },
                                        src: clue.backImg,
                                        style: {
                                            width: '100%',
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }
                                    }),
                                    clue.decrypted ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        onClick: ()=>setFlipped(false)
                                        ,
                                        src: clue.frontImg,
                                        style: {
                                            width: '100%',
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }
                                    }) : clue.conditions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClueConditionCard, {
                                        cardHeight: backImgHeight,
                                        onClick: ()=>setFlipped(false)
                                        ,
                                        conditions: clue.conditions
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "info",
                children: t('plugin_find_truman_decrypt_error_clue_id')
            })
        ]
    }));
};
function ClueConditionCard(props) {
    var ref;
    const { cardHeight , onClick , conditions  } = props;
    const { classes  } = EncryptionCard_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.card,
        variant: "outlined",
        onClick: onClick,
        sx: {
            height: cardHeight || 'auto',
            cursor: 'pointer'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    component: "div",
                    children: t('plugin_find_truman_decrypt_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                    sx: {
                        margin: '8px 0'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: (ref = conditions.conditions) === null || ref === void 0 ? void 0 : ref.map((condition, index)=>{
                        switch(condition.type){
                            case types/* ClueConditionType.Erc721 */.Ym.Erc721:
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        variant: "body1",
                                        fontWeight: "bold",
                                        color: "text.primary",
                                        gutterBottom: true,
                                        children: [
                                            index + 1,
                                            ". ",
                                            condition.minAmount,
                                            " ",
                                            condition.name
                                        ]
                                    })
                                }, index));
                            case types/* ClueConditionType.Or */.Ym.Or:
                                return condition.conditions && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            variant: "body1",
                                            fontWeight: "bold",
                                            color: "text.primary",
                                            children: [
                                                index + 1,
                                                ". ",
                                                t('plugin_find_truman_decrypt_tip_community')
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            children: condition.conditions.map((c, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        variant: "body2",
                                                        color: "text.primary",
                                                        children: [
                                                            c.minAmount,
                                                            " ",
                                                            c.name
                                                        ]
                                                    }, c.name)
                                                }, c.name)
                                            )
                                        })
                                    ]
                                }, index);
                            default:
                                return null;
                        }
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/CompletionCard.tsx
var CompletionCard = __webpack_require__(42408);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTruman.tsx












const FindTruman_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            '--contentHeight': '400px',
            '--tabHeight': '35px',
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0,
            position: 'relative'
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
        title: {
            fontSize: '1.25rem'
        },
        subheader: {
            fontSize: '0.875rem'
        },
        tip: {
            padding: theme.spacing(1),
            backgroundColor: '#fff'
        },
        tipArrow: {
            color: '#fff'
        },
        critical: {
            color: 'rgba(255,255,255,.9)',
            fontWeight: 500,
            fontSize: 14,
            width: 24,
            height: 24,
            backgroundImage: 'linear-gradient( 135deg, #FDD819 10%, #E80505 100%)',
            cursor: 'pointer'
        },
        nonCritical: {
            color: 'rgba(255,255,255,.9)',
            fontWeight: 500,
            fontSize: 14,
            width: 24,
            height: 24,
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            cursor: 'pointer'
        },
        chip: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        }
    };
});
function getPostTypeTitle(t, postType) {
    switch(postType){
        case types/* PostType.Poll */.hQ.Poll:
            return t('plugin_find_truman_status_poll');
        case types/* PostType.Puzzle */.hQ.Puzzle:
            return t('plugin_find_truman_status_puzzle');
        case types/* PostType.Completion */.hQ.Completion:
            return t('plugin_find_truman_status_completion');
        case types/* PostType.PuzzleResult */.hQ.PuzzleResult:
            return t('plugin_find_truman_status_puzzle_result');
        case types/* PostType.PollResult */.hQ.PollResult:
            return t('plugin_find_truman_status_poll_result');
        case types/* PostType.Status */.hQ.Status:
            return t('plugin_find_truman_status_result');
        default:
            return '';
    }
}
function FindTruman(props) {
    const { classes  } = FindTruman_useStyles();
    const { address , t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const { postType , clueId , storyInfo , userStoryStatus , userPuzzleStatus , userPollStatus , userCompletionStatus , puzzleResult , pollResult , onSubmitPoll , onSubmitCompletion ,  } = props;
    const [loadImg, setLoadImg] = (0,react.useState)(true);
    const isCritical = (userPuzzleStatus === null || userPuzzleStatus === void 0 ? void 0 : userPuzzleStatus.critical) || (userPollStatus === null || userPollStatus === void 0 ? void 0 : userPollStatus.critical) || (userCompletionStatus === null || userCompletionStatus === void 0 ? void 0 : userCompletionStatus.critical);
    const isNoncritical = userPuzzleStatus && !userPuzzleStatus.critical || userPollStatus && !userPollStatus.critical || userCompletionStatus && !userCompletionStatus.critical;
    const renderCard = ()=>{
        if (postType === types/* PostType.Status */.hQ.Status) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StageCard/* default */.Z, {
                userStoryStatus: userStoryStatus
            }));
        } else if (postType === types/* PostType.Puzzle */.hQ.Puzzle && userPuzzleStatus) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard/* default */.Z, {
                onSubmit: onSubmitPoll,
                userStatus: userPuzzleStatus
            }));
        } else if (postType === types/* PostType.Poll */.hQ.Poll && userPollStatus) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard/* default */.Z, {
                onSubmit: onSubmitPoll,
                userStatus: userPollStatus
            }));
        } else if (postType === types/* PostType.Completion */.hQ.Completion) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CompletionCard/* default */.Z, {
                onSubmit: (_, answers)=>onSubmitCompletion(answers)
                ,
                completionStatus: userCompletionStatus
            }));
        } else if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult && puzzleResult) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard/* default */.Z, {
                type: types/* PostType.PuzzleResult */.hQ.PuzzleResult,
                userStatus: userPuzzleStatus,
                result: puzzleResult
            }));
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult && pollResult) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard/* default */.Z, {
                type: types/* PostType.PollResult */.hQ.PollResult,
                userStatus: userPollStatus,
                result: pollResult
            }));
        }
        return null;
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: [
            postType !== types/* PostType.Encryption */.hQ.Encryption ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia/* default */.Z, {
                        onLoad: ()=>{
                            setLoadImg(false);
                        },
                        alt: "",
                        component: "img",
                        height: 140,
                        sx: {
                            visibility: loadImg ? 'hidden' : 'unset'
                        },
                        image: storyInfo === null || storyInfo === void 0 ? void 0 : storyInfo.img
                    }),
                    loadImg && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            height: 140,
                            width: "100%"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        title: storyInfo && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    component: "b",
                                    sx: {
                                        marginRight: 0.5
                                    },
                                    children: storyInfo.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    display: "flex",
                                    columnGap: 1,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                                            PopperProps: {
                                                disablePortal: true
                                            },
                                            arrow: true,
                                            placement: "top",
                                            title: isCritical ? t('plugin_find_truman_status_critical') : isNoncritical ? t('plugin_find_truman_status_noncritical') : '',
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                children: [
                                                    isCritical && /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                                        className: classes.critical,
                                                        children: "C"
                                                    }),
                                                    isNoncritical && /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                                        className: classes.nonCritical,
                                                        children: "N"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                            className: classes.chip,
                                            color: "primary",
                                            size: "small",
                                            label: getPostTypeTitle(t, postType)
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    renderCard()
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptionCard, {
                clueId: clueId
            }),
            !address && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    padding: '0 16px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    severity: "info",
                    children: t('plugin_find_truman_connect_wallet_tip')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
        ]
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/hooks/useConst.ts
var useConst = __webpack_require__(98982);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PostInspector.tsx










function PostInspector(props) {
    const { url  } = props;
    const account = (0,useAccount/* useAccount */.m)().toLowerCase();
    const { consts , t  } = (0,useConst/* useConst */.B)();
    const [, , , _storyId, , _targetId] = new URL(url).hash.split('/');
    const storyId = _storyId ? _storyId : '';
    const targetId = _targetId ? _targetId : '';
    const postType = url.includes('/encryption?') ? types/* PostType.Encryption */.hQ.Encryption : url.includes('/puzzles/') ? types/* PostType.Puzzle */.hQ.Puzzle : url.includes('/polls/') ? types/* PostType.Poll */.hQ.Poll : url.includes('/completions/') ? types/* PostType.Completion */.hQ.Completion : url.includes('/puzzle_result') ? types/* PostType.PuzzleResult */.hQ.PuzzleResult : url.includes('/poll_result/') ? types/* PostType.PollResult */.hQ.PollResult : types/* PostType.Status */.hQ.Status;
    const [storyInfo, setStoryInfo] = (0,react.useState)();
    const [userStoryStatus, setUserStoryStatus] = (0,react.useState)();
    const [userPuzzleStatus, setUserPuzzleStatus] = (0,react.useState)();
    const [userPollStatus, setUserPollStatus] = (0,react.useState)();
    const [userCompletionStatus, setUserCompletionStatus] = (0,react.useState)();
    const [puzzleResult, setPuzzleResult] = (0,react.useState)();
    const [pollResult, setPollResult] = (0,react.useState)();
    const [clueId, setClueId] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        fetchData();
    }, [
        account
    ]);
    const fetchData = async ()=>{
        if (postType === types/* PostType.Encryption */.hQ.Encryption) {
            const searchParams = new URLSearchParams(url.split('?')[1]);
            const payload = searchParams.get('clueId') || '';
            setClueId(payload);
            return;
        }
        setStoryInfo(await (0,apis/* fetchStoryInfo */.dr)(storyId));
        if (!account) return;
        if (postType === types/* PostType.Status */.hQ.Status) {
            setUserStoryStatus(await (0,apis/* fetchUserStoryStatus */.cz)(storyId, account));
        } else if (postType === types/* PostType.Puzzle */.hQ.Puzzle || postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult) {
            setUserPuzzleStatus(await (0,apis/* fetchUserPuzzleStatus */.JJ)(targetId, account));
        } else if (postType === types/* PostType.Poll */.hQ.Poll || postType === types/* PostType.PollResult */.hQ.PollResult) {
            setUserPollStatus(await (0,apis/* fetchUserPollStatus */.K1)(targetId, account));
        } else if (postType === types/* PostType.Completion */.hQ.Completion) {
            setUserCompletionStatus(await (0,apis/* fetchUserCompletionStatus */.$G)(targetId, account));
        }
        if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult) {
            setPuzzleResult(await (0,apis/* fetchPuzzleResult */.He)(targetId));
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult) {
            setPollResult(await (0,apis/* fetchPollResult */.mf)(targetId));
        }
    };
    const handleSubmitPoll = async (choice)=>{
        const from = account;
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        if (postType === types/* PostType.Puzzle */.hQ.Puzzle) {
            var ref;
            const target = (ref = userPuzzleStatus === null || userPuzzleStatus === void 0 ? void 0 : userPuzzleStatus.id) !== null && ref !== void 0 ? ref : '';
            await (0,apis/* submitPuzzle */.yR)(account, {
                target,
                from,
                timestamp,
                choice
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll) {
            var ref1;
            const target = (ref1 = userPollStatus === null || userPollStatus === void 0 ? void 0 : userPollStatus.id) !== null && ref1 !== void 0 ? ref1 : '';
            await (0,apis/* submitPoll */.LP)(account, {
                target,
                from,
                timestamp,
                choice
            });
        }
        await fetchData();
    };
    const handleSubmitCompletion = async (answers)=>{
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        var ref;
        const quesId = (ref = userCompletionStatus === null || userCompletionStatus === void 0 ? void 0 : userCompletionStatus.id) !== null && ref !== void 0 ? ref : '';
        await (0,apis/* submitCompletion */.$F)(account, {
            quesId,
            answers,
            timestamp
        });
        await fetchData();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(context/* FindTrumanContext.Provider */.c.Provider, {
        value: {
            address: account,
            const: consts,
            t
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
            title: "",
            isFullPluginDown: true,
            retry: ()=>{
                fetchData();
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTruman, {
                storyInfo: storyInfo,
                clueId: clueId,
                userStoryStatus: userStoryStatus,
                userPuzzleStatus: userPuzzleStatus,
                userPollStatus: userPollStatus,
                userCompletionStatus: userCompletionStatus,
                puzzleResult: puzzleResult,
                pollResult: pollResult,
                postType: postType,
                onSubmitPoll: handleSubmitPoll,
                onSubmitCompletion: handleSubmitCompletion
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/index.tsx









const SNSAdaptor_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
/**
 * https://findtruman.io/#/encryption?clueId={clueId}
 * https://findtruman.io/#/findtruman/stories/{storyId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/puzzles/{puzzleId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/polls/{pollId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/completions/{completionId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/puzzle_result/{pollId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/poll_result/{pollId}
 */ const isFindTrumanURL = (input)=>{
    if (!input.startsWith('https://findtruman.io')) {
        return false;
    }
    const { pathname , hash  } = new URL(input);
    if (pathname !== '/') {
        return false;
    }
    if (hash.startsWith('#/encryption')) {
        return /^#\/encryption\?clueid=[\da-z]+$/i.test(hash);
    }
    if (hash.startsWith('#/findtruman/stories')) {
        return /^#\/findtruman\/stories\/[\da-z]+(\/|\/(puzzle|poll|completion)(s|_result)\/[\da-z]+\/?)?$/i.test(hash);
    }
    return false;
};
function Renderer({ url  }) {
    const { classes  } = SNSAdaptor_useStyles();
    (0,plugin_infra_src/* usePluginWrapper */.fI)(true);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: fallbackUI,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            url: url
        })
    }));
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isFindTrumanURL);
        }, [
            props.message
        ]);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component() {
        const links = plugin_infra_src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isFindTrumanURL);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);