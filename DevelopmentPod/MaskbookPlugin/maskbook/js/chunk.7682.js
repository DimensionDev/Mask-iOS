"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7682],{

/***/ 11877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48591);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()(({ palette  })=>({
        textField: {
            width: '100%'
        },
        textFieldInput: {
            backgroundColor: palette.mode === 'light' ? '#F7F9FA' : palette.background.default,
            borderRadius: 6
        },
        inputFocused: {
            backgroundColor: `${palette.mode === 'light' ? '#FFFFFF' : palette.background.default} !important`,
            boxShadow: `0 0 0 2px ${palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
        },
        input: {
            padding: '11px 9px',
            fontSize: 12,
            borderRadius: 6
        }
    })
);
const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props,
        inputRef: ref,
        variant: "filled",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.textField, props.className),
        autoComplete: "off",
        inputProps: {
            className: classes.input,
            'aria-autocomplete': 'none',
            ...props.inputProps
        },
        InputProps: {
            ...props.InputProps,
            disableUnderline: true,
            classes: {
                root: classes.textFieldInput,
                focused: classes.inputFocused,
                ...props.InputProps?.classes
            }
        },
        FormHelperTextProps: {
            ...props.FormHelperTextProps,
            style: {
                marginLeft: 0,
                color: '#ff5f5f'
            }
        }
    });
}));


/***/ }),

/***/ 43240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75068);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96724);



function useTitle(title) {
    const { setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .PageTitleContext */ .I);
    (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        setTitle(title);
    });
}


/***/ }),

/***/ 68777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11877);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80875);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93455);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18271);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32588);
/* harmony import */ var _hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78066);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78778);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44451);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43240);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    header: {
        padding: '10px 16px',
        backgroundColor: '#EFF5FF',
        color: '#1C68F3'
    },
    title: {
        fontSize: 14,
        lineHeight: '20px'
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16
    },
    button: {
        fontWeight: 600,
        padding: '9px 0',
        borderRadius: 20
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: '#1C68F3!important',
        color: '#ffffff!important'
    }
});
const PERSONA_NAME_MAX_LENGTH = 24;
const PersonaRename = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .s0)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { selectedPersona  } = _hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_5__/* .PersonaContext.useContainer */ .m.useContainer();
    const { classes  } = useStyles();
    const [{ loading  }, renamePersona] = (0,react_use__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(async ()=>{
        if (!name || !selectedPersona) return;
        if (name.length > PERSONA_NAME_MAX_LENGTH) {
            setError(t('popups_rename_error_tip', {
                length: PERSONA_NAME_MAX_LENGTH
            }));
            return;
        }
        try {
            await _service__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Identity.renamePersona */ .ZP.Identity.renamePersona(selectedPersona.identifier, name);
        } catch (error) {
            setError(t('popups_persona_persona_name_exists'));
            return;
        }
        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.Personas */ .mZ.Personas, {
            replace: true
        });
    }, [
        selectedPersona,
        name
    ]);
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_8__/* .useTitle */ .Z)(t('popups_rename'));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_3__/* .StyledInput */ .F, {
                    onChange: (e)=>setName(e.target.value)
                    ,
                    defaultValue: selectedPersona?.nickname,
                    error: !!error,
                    helperText: error
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    fullWidth: true,
                    loading: loading,
                    variant: "contained",
                    disabled: !name,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabled
                    },
                    onClick: renamePersona,
                    children: t('confirm')
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonaRename);


/***/ })

}]);