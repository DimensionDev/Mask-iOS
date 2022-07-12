(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[121],{

/***/ 58277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(43147);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 69480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(58277)();
}


/***/ }),

/***/ 43147:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 48111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ EditIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const EditIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('EditIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M10 17.596h7.5M13.75 3.846a1.768 1.768 0 012.5 2.5L5.833 16.763l-3.333.833.833-3.333L13.75 3.846z",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');


/***/ }),

/***/ 55486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Personas_SelectPersona)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(836);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../icons/general/Masks.tsx
var Masks = __webpack_require__(87169);
// EXTERNAL MODULE: ../icons/general/Edit.tsx
var Edit = __webpack_require__(48111);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Tick.tsx


const TickIcon = (0,utils/* createIcon */.I)('TickIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M14.7 6.80005L6.44995 15.05L2.69995 11.3",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 18 19');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useHover.js
var useHover = __webpack_require__(2911);
// EXTERNAL MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx + 1 modules
var CopyIconButton = __webpack_require__(22825);
// EXTERNAL MODULE: ./src/extension/popups/pages/Personas/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(78066);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(5971);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/components/PersonaList/index.tsx

// ! We're going to SSR this UI, so DO NOT import anything new!











const useStyles = (0,entry/* makeStyles */.ZL)()({
    list: {
        padding: 0,
        overflow: 'auto'
    },
    item: {
        padding: '14px 16px',
        marginBottom: 1,
        backgroundColor: '#ffffff',
        '& > svg': {
            fontSize: 20,
            marginRight: 15
        }
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '4px'
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500
    },
    identifier: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center',
        wordBreak: 'break-all'
    },
    trashIcon: {
        fontSize: 12,
        marginLeft: 6,
        cursor: 'pointer',
        width: 12,
        height: 12
    },
    tick: {
        fill: 'none',
        fontSize: 18
    },
    edit: {
        fontSize: 16,
        stroke: '#1C68F3',
        fill: 'none',
        marginLeft: 10,
        cursor: 'pointer'
    },
    copy: {
        fontSize: 12,
        fill: '#1C68F3',
        marginLeft: 4,
        cursor: 'pointer'
    },
    setting: {
        fontSize: 12,
        cursor: 'pointer',
        fill: 'none',
        stroke: '#1C68F3',
        marginLeft: 4
    }
});
const PersonaList = /*#__PURE__*/ (0,react.memo)(()=>{
    const { personas , setSelectedPersona , currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const onLogout = (0,react.useCallback)((persona)=>{
        setSelectedPersona(persona);
        navigate(src/* PopupRoutes.Logout */.mZ.Logout);
    }, [
        setSelectedPersona
    ]);
    const onChangeCurrentPersonas = (0,react.useCallback)((identifier)=>{
        service/* default.Settings.setCurrentPersonaIdentifier */.ZP.Settings.setCurrentPersonaIdentifier(identifier).then(()=>navigate(src/* PopupRoutes.Personas */.mZ.Personas)
        );
    }, []);
    const onEdit = (0,react.useCallback)((persona)=>{
        setSelectedPersona(persona);
        navigate(src/* PopupRoutes.PersonaRename */.mZ.PersonaRename);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaListUI, {
        currentPersona: currentPersona,
        personas: personas,
        onLogout: onLogout,
        onChangeCurrentPersona: onChangeCurrentPersonas,
        onEdit: onEdit
    });
});
const PersonaListUI = /*#__PURE__*/ (0,react.memo)(({ personas , onLogout , onChangeCurrentPersona , currentPersona , onEdit  })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        dense: true,
        className: classes.list,
        children: personas?.map((persona, index)=>{
            const { identifier , nickname  } = persona;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaListItem, {
                onChange: ()=>onChangeCurrentPersona(identifier)
                ,
                onEdit: ()=>onEdit(persona)
                ,
                onLogout: ()=>onLogout(persona)
                ,
                identifier: identifier,
                isCurrent: currentPersona?.identifier === identifier,
                nickname: nickname
            }, index);
        })
    });
});
const PersonaListItem = /*#__PURE__*/ (0,react.memo)(({ onChange , nickname , identifier , isCurrent , onLogout , onEdit  })=>{
    const { classes  } = useStyles();
    const [element] = (0,useHover/* default */.Z)((isHovering)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
            className: classes.item,
            onClick: ()=>onChange()
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.iconContainer,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        flex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.name,
                            children: [
                                nickname,
                                isHovering ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Edit/* EditIcon */.d, {
                                    className: classes.edit,
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onEdit();
                                    }
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.identifier,
                            children: [
                                (0,src/* formatPersonaFingerprint */.Nb)(identifier.rawPublicKey ?? '', 10),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton/* CopyIconButton */.m, {
                                    className: classes.copy,
                                    text: identifier.toText()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* default */.Z, {
                                    className: classes.trashIcon,
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onLogout();
                                    }
                                })
                            ]
                        })
                    ]
                }),
                isCurrent ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TickIcon, {
                    className: classes.tick
                }) : null
            ]
        })
    );
    return element;
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/SelectPersona/index.tsx










const SelectPersona_useStyles = (0,entry/* makeStyles */.ZL)()({
    content: {
        flex: 1,
        backgroundColor: '#F7F9FA',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 72
    },
    controller: {
        padding: 16,
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 20,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    button: {
        fontWeight: 600,
        padding: '10px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    },
    editIcon: {
        fontSize: 16,
        stroke: '#1C68F3',
        fill: 'none',
        marginLeft: 10,
        cursor: 'pointer'
    },
    secondaryButton: {
        backgroundColor: '#F7F9FA',
        color: '#1C68F3',
        '&: hover': {
            backgroundColor: '#dee0e1'
        }
    }
});
const SelectPersona = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = SelectPersona_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { personas  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaList, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classnames_default()(classes.button, classes.secondaryButton),
                        disabled: personas && personas.length >= src/* MAX_PERSONA_LIMIT */.LM,
                        onClick: ()=>{
                            browser.tabs.create({
                                active: true,
                                url: browser.runtime.getURL('/dashboard.html#/sign-up')
                            });
                        },
                        children: t('create')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>{
                            browser.tabs.create({
                                active: true,
                                url: browser.runtime.getURL(dist_default()('/dashboard.html#/sign-in', {
                                    from: 'popups'
                                }))
                            });
                        },
                        children: t('import')
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Personas_SelectPersona = (SelectPersona);


/***/ })

}]);