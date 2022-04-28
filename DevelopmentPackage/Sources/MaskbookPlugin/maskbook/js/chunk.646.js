"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[646],{

/***/ 20646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ./src/plugins/Pets/base.tsx
var base = __webpack_require__(39594);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/plugins/Pets/hooks/index.ts + 3 modules
var hooks = __webpack_require__(61046);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/Drag.tsx


const contentWidth = 150;
const contentHeight = 150;
const startPosition = {
    x: 50,
    y: 150
};
var _PureComponent;
// TODO: move to function components
class Draggable extends (_PureComponent = react.PureComponent) {
    onMouseDown(e) {
        if (e.button !== 0) return;
        if (!this.ref?.current) return;
        const divDom = this.ref.current;
        const left = divDom.offsetLeft;
        const top = divDom.offsetTop;
        this.setState({
            dragging: true,
            rel: {
                x: e.pageX - left,
                y: e.pageY - top
            }
        });
        e.stopPropagation();
        e.preventDefault();
    }
    onMouseUp(e) {
        this.setState({
            dragging: false
        });
        e.stopPropagation();
        e.preventDefault();
    }
    onMouseMove(e) {
        if (!this.state.dragging) return;
        this.setState({
            pos: {
                x: window.innerWidth - (this.props.baseWidth || contentWidth) - (e.pageX - this.state.rel.x),
                y: window.innerHeight - (this.props.baseHeight || contentHeight) - (e.pageY - this.state.rel.y)
            }
        });
        if (this.props.moveHandle) {
            this.props.moveHandle(this.state.pos.x, this.state.pos.y);
        }
        e.stopPropagation();
        e.preventDefault();
    }
    componentDidUpdate(_props, state) {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.mouseMoveFuc);
            document.addEventListener('mouseup', this.mouseUpFuc);
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.mouseMoveFuc);
            document.removeEventListener('mouseup', this.mouseUpFuc);
        }
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this.mouseMoveFuc);
        document.removeEventListener('mouseup', this.mouseUpFuc);
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            // @ts-ignore
            ref: this.ref,
            onMouseDown: this.onMouseDown.bind(this),
            style: {
                position: 'fixed',
                right: this.state.pos.x,
                bottom: this.state.pos.y,
                width: this.props.baseWidth || contentWidth,
                height: this.props.baseHeight || contentHeight
            },
            children: this.props.children || null
        });
    }
    constructor(...args){
        super(...args);
        this.ref = /*#__PURE__*/ react.createRef();
        this.mouseMoveFuc = this.onMouseMove.bind(this);
        this.mouseUpFuc = this.onMouseUp.bind(this);
        this.state = {
            pos: {
                x: startPosition.x,
                y: startPosition.y
            },
            dragging: false,
            rel: null
        };
    }
}
Draggable.defaultProps = {
    transferMsg: (x, y)=>{}
};
/* harmony default export */ const Drag = (Draggable);

// EXTERNAL MODULE: ./src/plugins/Pets/SNSAdaptor/ModelView.tsx
var ModelView = __webpack_require__(36429);
// EXTERNAL MODULE: ./src/plugins/Pets/SNSAdaptor/PreviewBox.tsx
var PreviewBox = __webpack_require__(97035);
// EXTERNAL MODULE: ./src/plugins/Pets/constants.ts
var constants = __webpack_require__(98817);
;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/ModelNFT.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        dragContent: {
            position: 'absolute',
            bottom: -25,
            right: 0
        },
        dragImg: {
            width: 15,
            height: 15
        },
        wordContent: {
            position: 'absolute',
            left: 12,
            bottom: 150
        },
        word: {
            width: '152px !important',
            maxHeight: 85
        },
        glbView: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
        }
    })
);
function ModelNFT(props) {
    const { start , showMeta  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), {});
    const boxClasses = (0,entry/* useStylesExtends */.Bc)((0,PreviewBox/* useStyles */.y)(), {});
    const [position, setPosition] = (0,react.useState)({
        x: 50,
        y: 150
    });
    const moveHandle = (x, y)=>{
        setPosition({
            x,
            y
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'fixed',
                    right: position.x,
                    bottom: position.y,
                    zIndex: 100,
                    width: 200,
                    height: 150
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.glbView,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ModelView/* default */.Z, {
                        className: classes.glbView,
                        source: showMeta?.image ?? ''
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Drag, {
                moveHandle: moveHandle,
                baseWidth: 200,
                baseHeight: 150,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.dragContent,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.dragImg,
                            src: constants/* DragIcon */.Vn
                        })
                    }),
                    start && showMeta?.word ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.wordContent,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classnames_default()(classes.word, boxClasses.msgBox, boxClasses.wordShow),
                            children: showMeta?.word
                        })
                    }) : null
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/NormalNFT.tsx







const NormalNFT_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        root: {
            position: 'fixed',
            top: 0,
            left: 0
        },
        imgContent: {
            zIndex: 999,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        imgBox: {
            width: '80%',
            height: '80%',
            textAlign: 'center'
        },
        close: {
            width: 15,
            height: 15,
            cursor: 'pointer',
            backgroundSize: 'contain',
            position: 'absolute',
            top: 0,
            right: 0
        },
        wordContent: {
            display: 'flex',
            justifyContent: 'center'
        },
        wordBox: {
            position: 'absolute',
            maxWidth: 150,
            bottom: 150
        },
        dragImg: {
            width: 15,
            height: 15
        }
    })
);
function NormalNFT(props) {
    const { start , infoShow , showMeta , handleClose  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(NormalNFT_useStyles(), {});
    const boxClasses = (0,entry/* useStylesExtends */.Bc)((0,PreviewBox/* useStyles */.y)(), {});
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Drag, {
        baseWidth: 150,
        baseHeight: 150,
        children: [
            start && showMeta?.word ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.wordContent,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classnames_default()({
                        [boxClasses.msgBox]: true,
                        [boxClasses.wordShow]: true
                    }, classes.wordBox),
                    children: showMeta?.word
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.imgContent,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.imgBox,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: showMeta?.image,
                        style: {
                            objectFit: 'contain',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            borderRadius: 10,
                            alignSelf: 'center'
                        }
                    })
                })
            }),
            infoShow ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.close,
                onClick: handleClose,
                style: {
                    backgroundImage: `url(${constants/* CloseIcon */.Tw})`
                }
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./src/plugins/Pets/types.ts
var types = __webpack_require__(22041);
// EXTERNAL MODULE: ./src/plugins/Pets/messages.ts
var messages = __webpack_require__(86763);
// EXTERNAL MODULE: ./src/plugins/Pets/settings.ts
var settings = __webpack_require__(82775);
;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/Animate.tsx










const Animate_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        root: {
            position: 'fixed',
            top: 0,
            left: 0
        }
    })
);
const AnimatePic = ()=>{
    const classes = (0,entry/* useStylesExtends */.Bc)(Animate_useStyles(), {});
    const petShow = (0,src/* useValueRef */.E)(settings/* petShowSettings */.v);
    const [start, setStart] = (0,react.useState)(true);
    const [refresh, setRefresh] = (0,react.useState)(0);
    const visitor = (0,hooks/* useCurrentVisitingUser */.qT)(refresh);
    const visitorMeta = (0,hooks/* useEssay */.$n)(visitor, refresh);
    const defMeta = (0,hooks/* useDefaultEssay */.Lo)(visitor);
    const showMeta = visitorMeta ?? defMeta;
    const [infoShow, setInfoShow] = (0,react.useState)(false);
    const handleClose = ()=>settings/* petShowSettings.value */.v.value = false
    ;
    const handleMouseEnter = ()=>setInfoShow(true)
    ;
    const handleMouseLeave = ()=>setInfoShow(false)
    ;
    (0,react.useEffect)(()=>{
        const refreshHandle = async (data)=>setRefresh(data)
        ;
        messages/* PluginPetMessages.events.setResult.on */.s.events.setResult.on(refreshHandle);
        let count = 0;
        const timer = setInterval(()=>{
            const check = count % 9 < 5;
            setStart(check);
            count += 1;
        }, 1000);
        return ()=>{
            clearInterval(timer);
            messages/* PluginPetMessages.events.setResult.off */.s.events.setResult.off(refreshHandle);
        };
    }, []);
    if (!petShow || !visitor.userId || visitor.userId === '$unknown' || !showMeta?.image) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: showMeta.type === types/* ImageType.GLB */._.GLB ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ModelNFT, {
            start: start,
            showMeta: showMeta
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalNFT, {
            start: start,
            infoShow: infoShow,
            showMeta: showMeta,
            handleClose: handleClose
        })
    }, visitor.userId);
};
/* harmony default export */ const Animate = (AnimatePic);

// EXTERNAL MODULE: ./src/plugins/Pets/SNSAdaptor/PetDialog.tsx + 3 modules
var PetDialog = __webpack_require__(38624);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
;// CONCATENATED MODULE: ./src/plugins/Pets/SNSAdaptor/index.tsx







const sns = {
    ...base/* base */.u,
    init () {},
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Animate, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PetDialog/* PetDialog */.g, {})
            ]
        });
    },
    ApplicationEntries: [
        {
            RenderEntryComponent ({ disabled  }) {
                const { openDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* PluginPetMessages.events.essayDialogUpdated */.s.events.essayDialogUpdated);
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                    disabled: disabled,
                    title: "Non-F Friends",
                    icon: new URL(/* asset import */ __webpack_require__(59622), __webpack_require__.b).toString(),
                    onClick: openDialog
                });
            },
            defaultSortingPriority: 10
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 59622:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4948ee35a4630775a9dd.png";

/***/ })

}]);