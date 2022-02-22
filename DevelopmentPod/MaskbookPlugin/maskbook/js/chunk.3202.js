"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3202],{

/***/ 78336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(11178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(32824);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(57787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(33351);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(23887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(52350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(35229);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(45279);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(45181);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: {
            ...snsId === base/* MINDS_ID */.fN || snsId === facebook_com_base/* FACEBOOK_ID */.Iz ? {
                width: 'auto',
                backgroundImage: 'none'
            } : {}
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network/* activatedSocialNetworkUI.customization.componentOverwrite */.LM.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , disableTitleBorder , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,src/* useDialogStackActor */.tE)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container)=>{
        /*#__PURE__*/ return (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t('post_dialog__dismiss_aria'),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        });
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,src/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 33188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uE": () => (/* binding */ PermissionAwareRedirectOf),
  "km": () => (/* reexport */ constructRequestPermissionURL)
});

// UNUSED EXPORTS: getRouteURLWithNoParam

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/extension/popups/utils/index.ts
var utils = __webpack_require__(90845);
;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/utils.ts


function constructRequestPermissionURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${(0,utils/* getRouteURLWithNoParam */.W)(src/* PopupRoutes.RequestPermission */.mZ.RequestPermission)}?${params.toString()}`;
}

;// CONCATENATED MODULE: ./src/extension/popups/index.tsx


function PermissionAwareRedirectOf(url, context) {
    return (0,utils/* getRouteURLWithNoParam */.W)(src/* PopupRoutes.PermissionAwareRedirect */.mZ.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}




/***/ }),

/***/ 90845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getRouteURLWithNoParam)
/* harmony export */ });
function getRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}


/***/ }),

/***/ 43202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// NAMESPACE OBJECT: ../external-plugin-previewer/src/Components/index.tsx
var Components_namespaceObject = {};
__webpack_require__.r(Components_namespaceObject);
__webpack_require__.d(Components_namespaceObject, {
  "MaskCard": () => (MaskCard),
  "MaskCodeBlock": () => (MaskBlockQuote),
  "Translate": () => (Translate),
  "br": () => (br),
  "div": () => (div),
  "span": () => (span)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(20978);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(19149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(20235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(81337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js
var List = __webpack_require__(26271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(85925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(90056);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(36122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(17060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardActions/CardActions.js
var CardActions = __webpack_require__(81539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(52867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useMap.js
var useMap = __webpack_require__(92899);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
;// CONCATENATED MODULE: ./src/plugins/External/components/UnknownPluginLoadRequest.tsx





function UnknownPluginLoadRequestUI({ plugins , onConfirm  }) {
    const [_selected, { get , set  }] = (0,useMap/* default */.Z)({});
    const confirmAll = ()=>onConfirm(plugins)
    ;
    const selected = plugins.filter((x)=>_selected[x.url]
    );
    const confirmSelected = ()=>onConfirm(selected)
    ;
    const { t  } = (0,utils/* useI18N */.M1)();
    if (plugins.length === 0) return null;
    if (plugins.length === 1) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
        message: `Do you want to load an external plugin from ${plugins[0].url}?`,
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            onClick: confirmAll,
            children: "Load"
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                sx: {
                    paddingBottom: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    dense: true,
                    subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubheader/* default */.Z, {
                        children: t('plugin_external_unknown_plugin')
                    }),
                    children: plugins.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                            dense: true,
                            onClick: ()=>set(x.url, !get(x.url))
                            ,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                        disableRipple: true,
                                        edge: "start",
                                        tabIndex: -1,
                                        checked: !!get(x.url)
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                    primary: x.url
                                })
                            ]
                        }, x.url)
                    )
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                disableSpacing: true,
                sx: {
                    flexDirection: 'row-reverse'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        disabled: selected.length === 0,
                        onClick: confirmSelected,
                        children: t('load')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: confirmAll,
                        children: t('load_all')
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(61733);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/eft-parser@0.13.5/node_modules/eft-parser/src/escape-parser.js
// Set the escape character
const escapeChar = '&'
const doubleEscapeChar = escapeChar + escapeChar

// Initlize RegExp
const oct = new RegExp(`\\${escapeChar}[0-7]{1,3}`, 'g')
const ucp = new RegExp(`\\${escapeChar}u\\[.*?\\]`, 'g')
const uni = new RegExp(`\\${escapeChar}u.{0,4}`, 'g')
const hex = new RegExp(`\\${escapeChar}x.{0,2}`, 'g')
const esc = new RegExp(`\\${escapeChar}`, 'g')
const b = new RegExp(`\\${escapeChar}b`, 'g')
const t = new RegExp(`\\${escapeChar}t`, 'g')
const n = new RegExp(`\\${escapeChar}n`, 'g')
const v = new RegExp(`\\${escapeChar}v`, 'g')
const f = new RegExp(`\\${escapeChar}f`, 'g')
const r = new RegExp(`\\${escapeChar}r`, 'g')

// Escape octonary sequence
const O2C = () => {
	throw new SyntaxError('Octal escape sequences are not allowed in EFML.')
}

// Escape unicode code point sequence
const UC2C = (val) => {
	val = val.substr(3, val.length - 4)
	val = parseInt(val, 16)
	if (!val) throw new SyntaxError('Invalid Unicode escape sequence')
	try {
		return String.fromCodePoint(val)
	} catch (err) {
		throw new SyntaxError('Undefined Unicode code-point')
	}
}

// Escape unicode sequence
const U2C = (val) => {
	val = val.substring(2)
	val = parseInt(val, 16)
	if (!val) throw new SyntaxError('Invalid Unicode escape sequence')
	return String.fromCharCode(val)
}

// Escape hexadecimal sequence
const X2C = (val) => {
	val = `00${val.substring(2)}`
	val = parseInt(val, 16)
	if (!val) throw new SyntaxError('Invalid hexadecimal escape sequence')
	return String.fromCharCode(val)
}

const efEscape = (string) => {
	// Split strings
	const splitArr = string.split(doubleEscapeChar)
	const escaped = []

	// Escape all known escape characters
	for (let i of splitArr) {
		const escapedStr = i
			.replace(oct, O2C)
			.replace(ucp, UC2C)
			.replace(uni, U2C)
			.replace(hex, X2C)
			.replace(b, '\b')
			.replace(t, '\t')
			.replace(n, '\n')
			.replace(v, '\v')
			.replace(f, '\f')
			.replace(r, '\r')
			// Remove all useless escape characters
			.replace(esc, '')
		escaped.push(escapedStr)
	}
	// Return escaped string
	return escaped.join(escapeChar)
}

const checkEscape = string => string[string.length - 1] === escapeChar

const splitWith = (string, char) => {
	const splitArr = string.split(char)
	const escapedSplit = []
	let escaped = false
	for (let i of splitArr) {
		if (escaped) escapedSplit[escapedSplit.length - 1] += `${char}${i}`
		else escapedSplit.push(i)
		escaped = checkEscape(i)
	}
	return escapedSplit
}

const splitBy = (string, char) => {
	const splitArr = string.split(doubleEscapeChar)
	const escaped = splitWith(splitArr.shift(), char)
	for (let i of splitArr) {
		const escapedSplit = splitWith(i, char)
		escaped[escaped.length - 1] += `${doubleEscapeChar}${escapedSplit.shift()}`
		escaped.push(...escapedSplit)
	}
	return escaped
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/eft-parser@0.13.5/node_modules/eft-parser/src/eft-parser.js


const typeSymbols = '>#%@.-+'
const reserved = [
	'$ctx', '$refs', '$data', '$methods', '$mount', '$umount', '$subscribe', '$unsubscribe', '$update',
	'$dispatch', '$emit', '$on', '$off', '$destroy', '__DIRECTMOUNT__'
]
const mustache = /\{\{.+?\}\}/g
const spaceIndent = /^(\t*)( *).*/
const hashref = /#([^}]|}[^}])*$/

const getErrorMsg = (msg, line = -2) => `Failed to parse eft template: ${msg}. at line ${line + 1}`

const isEmpty = string => !string.replace(/\s/, '')

const checkValidType = obj => ['number', 'boolean', 'string'].indexOf(typeof obj) > -1

const ESCAPE = (string) => {
	if (!string) return [string, false]
	try {
		const parsed = JSON.parse(string)
		if (['number', 'boolean'].indexOf(typeof parsed) === -1) return [efEscape(string), true]
		return [parsed, false]
	} catch (e) {
		return [efEscape(string), true]
	}
}

const getOffset = (string, parsingInfo) => {
	if (parsingInfo.offset !== null) return
	parsingInfo.offset = string.match(/\s*/)[0]
	if (parsingInfo.offset) parsingInfo.offsetReg = parsingInfo.offset
}

const removeOffset = (string, parsingInfo, i) => {
	if (parsingInfo.offsetReg) {
		let removed = false
		string = string.replace(parsingInfo.offsetReg, () => {
			removed = true
			return ''
		})
		if (!removed) throw new SyntaxError(getErrorMsg(`Expected indent to be grater than 0 and less than ${parsingInfo.prevDepth + 1}, but got -1`, i))
	}
	return string
}

const getIndent = (string, parsingInfo) => {
	if (parsingInfo.indentReg) return
	const spaces = string.match(spaceIndent)[2]
	if (spaces) {
		parsingInfo.indentReg = new RegExp(spaces, 'g')
	}
}

const getDepth = (string, parsingInfo, i) => {
	let depth = 0
	if (parsingInfo.indentReg) string = string.replace(/^\s*/, str => str.replace(parsingInfo.indentReg, '\t'))
	const content = string.replace(/^\t*/, (str) => {
		depth = str.length
		return ''
	})
	if ((/^\s/).test(content)) throw new SyntaxError(getErrorMsg('Bad indent', i))
	return { depth, content }
}

const resolveDepth = (ast, depth) => {
	let currentNode = ast
	for (let i = 0; i < depth; i++) currentNode = currentNode[currentNode.length - 1]
	return currentNode
}

const splitDefault = (string) => {
	string = string.slice(2, string.length - 2)
	const [_path, ..._default] = splitBy(string, '=')
	const pathArr = splitBy(_path.trim(), '.').map(efEscape)
	const [defaultVal, escaped] = ESCAPE(_default.join('=').trim())
	if (checkValidType(defaultVal) && (escaped || (!escaped && defaultVal !== ''))) return [pathArr, defaultVal]
	return [pathArr]
}

const splitLiterals = (string) => {
	const strs = string.split(mustache)
	if (strs.length === 1) return ESCAPE(string)[0]
	const tmpl = []
	if (strs.length === 2 && !strs[0] && !strs[1]) tmpl.push(0)
	else tmpl.push(strs.map(efEscape))
	const mustaches = string.match(mustache)
	if (mustaches) tmpl.push(...mustaches.map(splitDefault))
	return tmpl
}

const pushStr = (textArr, str) => {
	if (str) textArr.push(str)
}

const parseText = (string) => {
	const result = splitLiterals(string)
	if (checkValidType(result)) return [`${result}`]
	const [strs, ...exprs] = result
	const textArr = []
	for (let i = 0; i < exprs.length; i++) {
		pushStr(textArr, strs[i])
		textArr.push(exprs[i])
	}
	pushStr(textArr, strs[strs.length - 1])
	return textArr
}

const dotToSpace = val => val.replace(/\./g, ' ')

const parseTag = (string) => {
	const tagInfo = {}
	const [tag, ...content] = splitBy(string.replace(hashref, (val) => {
		tagInfo.ref = val.slice(1)
		return ''
	}), '.')
	tagInfo.tag = efEscape(tag)
	tagInfo.class = splitLiterals(content.join('.'))
	if (typeof tagInfo.class === 'string') tagInfo.class = dotToSpace(tagInfo.class).trim()
	else if (tagInfo.class[0]) tagInfo.class[0] = tagInfo.class[0].map(dotToSpace)
	return tagInfo
}

const parseEvent = (string) => {
	const splitted = splitBy(string, '=')
	return {
		name: splitted.shift().trim(),
		value: splitted.join('=').trim()
	}
}

const setOption = (options, option) => {
	switch (option) {
		case 'stop': {
			options.s = 1
			break
		}
		case 'stopImmediate': {
			options.i = 1
			break
		}
		case 'prevent': {
			options.p = 1
			break
		}
		case 'shift': {
			options.h = 1
			break
		}
		case 'alt': {
			options.a = 1
			break
		}
		case 'ctrl': {
			options.c = 1
			break
		}
		case 'meta': {
			options.t = 1
			break
		}
		case 'capture': {
			options.u = 1
			break
		}
		case 'passive': {
			options.e = 1
			delete options.p
			break
		}
		case '!passive': {
			options.e = 0
			break
		}
		case 'once': {
			options.o = 1
			break
		}
		default: {
			console.warn(`Unsupported event option '${option}' will be dropped.`)
		}
	}
}

const getOption = (options, keys, option) => {
	const keyCode = parseInt(option, 10)
	if (isNaN(keyCode)) return setOption(options, efEscape(option))
	keys.push(keyCode)
}

const getEventOptions = (name) => {
	const options = {}
	const keys = []
	const [listener, ...ops] = splitBy(name, '.')
	options.l = efEscape(listener)
	for (let i of ops) getOption(options, keys, i)
	if (keys.length > 0) options.k = keys
	return options
}

const splitEvents = (string) => {
	const [name, ...value] = splitBy(string, ':')
	const content = value.join(':')
	const escapedName = efEscape(name.trim())
	if (content) return [escapedName, splitLiterals(content)]
	return [escapedName]
}

const parseNodeProps = (string) => {
	const splitted = splitBy(string, '=')
	const propDef = splitted.shift().trim()
	const [propPathStrRaw, syncTriggerStr] = splitBy(propDef, '@')
	const [propPathStr, updateOnly] = splitBy(propPathStrRaw, '!')
	const syncTrigger = syncTriggerStr && getEventOptions(syncTriggerStr)
	return {
		propPath: splitBy(propPathStr, '.').map(efEscape),
		value: splitLiterals(splitted.join('=').trim()),
		updateOnly,
		syncTrigger
	}
}

const parseNodeAttrs = (string) => {
	const splitted = splitBy(string, '=')
	return {
		name: efEscape(splitted.shift().trim()),
		value: splitLiterals(splitted.join('=').trim())
	}
}

const parseLine = ({line, ast, parsingInfo, i}) => {
	if (isEmpty(line)) return
	getOffset(line, parsingInfo)

	const trimmedLine = removeOffset(line, parsingInfo, i)
	getIndent(trimmedLine, parsingInfo)

	let { depth, content } = getDepth(trimmedLine, parsingInfo, i)

	if (content) {
		if (depth < 0 || depth - parsingInfo.prevDepth > 1 || (depth - parsingInfo.prevDepth === 1 && ['comment', 'tag'].indexOf(parsingInfo.prevType) === -1) || (parsingInfo.prevType !== 'comment' && depth === 0 && parsingInfo.topExists)) throw new SyntaxError(getErrorMsg(`Expected indent to be grater than 0 and less than ${parsingInfo.prevDepth + 1}, but got ${depth}`, i))
		const type = content[0]
		content = content.slice(1)
		if (!content && typeSymbols.indexOf(type) >= 0) throw new SyntaxError(getErrorMsg('Empty content', i))
		// Jump back to upper level
		if (depth < parsingInfo.prevDepth || (depth === parsingInfo.prevDepth && parsingInfo.prevType === 'tag')) parsingInfo.currentNode = resolveDepth(ast, depth)
		parsingInfo.prevDepth = depth

		switch (type) {
			case '>': {
				const info = parseTag(content)
				const newNode = [{
					t: info.tag
				}]
				if (info.class) {
					newNode[0].a = {}
					newNode[0].a.class = info.class
				}
				if (info.ref) newNode[0].r = info.ref
				parsingInfo.currentNode.push(newNode)
				parsingInfo.currentNode = newNode
				parsingInfo.prevType = 'tag'
				break
			}
			case '#': {
				const { name, value } = parseNodeAttrs(content)
				if (!parsingInfo.currentNode[0].a) parsingInfo.currentNode[0].a = {}
				parsingInfo.currentNode[0].a[name] = value
				parsingInfo.prevType = 'attr'
				break
			}
			case '%': {
				const { propPath, value, updateOnly, syncTrigger } = parseNodeProps(content)
				const propInfo = [propPath, value]
				if (syncTrigger) {
					propInfo.push(syncTrigger)
					if (updateOnly === '') {
						propInfo.push(1)
					}
				} else if (updateOnly === '') {
					propInfo.push(0, 1)
				}
				if (!parsingInfo.currentNode[0].p) parsingInfo.currentNode[0].p = []
				parsingInfo.currentNode[0].p.push(propInfo)
				parsingInfo.prevType = 'prop'
				break
			}
			case '@': {
				const { name, value } = parseEvent(content)
				if (!parsingInfo.currentNode[0].e) parsingInfo.currentNode[0].e = []
				const options = getEventOptions(name)
				const [method, _value] = splitEvents(value)
				options.m = method
				if (_value) options.v = _value
				parsingInfo.currentNode[0].e.push(options)
				parsingInfo.prevType = 'event'
				break
			}
			case '.': {
				parsingInfo.currentNode.push(...parseText(content))
				parsingInfo.prevType = 'text'
				break
			}
			case '|': {
				if (parsingInfo.currentNode.length > 1) content = `\n${content}`
				parsingInfo.currentNode.push(...parseText(content))
				parsingInfo.prevType = 'multiline-text'
				break
			}
			case '-': {
				if (reserved.indexOf(content) !== -1) throw new SyntaxError(getErrorMsg(`Reserved name '${content}' should not be used`, i))
				parsingInfo.currentNode.push({
					n: content,
					t: 0
				})
				parsingInfo.prevType = 'node'
				break
			}
			case '+': {
				parsingInfo.currentNode.push({
					n: content,
					t: 1
				})
				parsingInfo.prevType = 'list'
				break
			}
			default: {
				parsingInfo.prevType = 'comment'
			}
		}
	}
}

const parseEft = (template) => {
	if (!template) throw new TypeError(getErrorMsg('Template required, but nothing given'))
	const tplType = typeof template
	if (tplType !== 'string') throw new TypeError(getErrorMsg(`Expected a string, but got a(n) ${tplType}`))
	const lines = template.split(/\r?\n/)
	const ast = [{t: 0}]
	const parsingInfo = {
		indentReg: null,
		prevDepth: 0,
		offset: null,
		offsetReg: null,
		prevType: 'comment',
		currentNode: ast,
		topExists: false,
	}
	for (let i = 0; i < lines.length; i++) parseLine({line: lines[i], ast, parsingInfo, i})

	if (ast.length <= 1) throw new SyntaxError(getErrorMsg('Nothing to be parsed', lines.length - 1))
	if (ast.length === 2 && Array.isArray(ast[1]) && Object.hasOwnProperty.call(ast[1][0], 't')) return ast[1]
	return ast
}

/* harmony default export */ const eft_parser = (parseEft);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef.js@0.14.2/node_modules/ef.js/src/lib/parser.js


const parse = (template, parser) => {
	if (!parser) parser = eft_parser
	return parser(template)
}

/* harmony default export */ const parser = (parse);

// EXTERNAL MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/type-of.js
var type_of = __webpack_require__(89918);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/ef-core.js + 22 modules
var ef_core = __webpack_require__(83231);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef.js@0.14.2/node_modules/ef.js/src/ef.js
// Import everything




// Import core components


// Set parser
let ef_parser = eft_parser

/**
 * @typedef {import('ef-core/src/ef-core.js').EFMountOption} EFMountOption
 * @typedef {import('ef-core/src/ef-core.js').EFMountConfig} EFMountConfig
 * @typedef {import('ef-core/src/ef-core.js').EFAST} EFAST
 * @typedef {import('ef-core/src/ef-core.js').EFBaseClass} EFBaseClass
 * @typedef {import('ef-core/src/ef-core.js').EFEventHandlerArg} EFEventHandlerArg
 * @typedef {import('ef-core/src/ef-core.js').EFEventHandlerMethod} EFEventHandlerMethod
 * @typedef {import('ef-core/src/ef-core.js').EFSubscriberHandlerArg} EFSubscriberHandlerArg
 * @typedef {import('ef-core/src/ef-core.js').EFSubscriberHandlerMethod} EFSubscriberHandlerMethod
 * @typedef {import('ef-core/src/ef-core.js').EFTemplateScope} EFTemplateScope
 * @typedef {import('ef-core/src/ef-core.js').Fragment} Fragment
 * @typedef {import('ef-core/src/ef-core.js').EFNodeWrapper} EFNodeWrapper
 * @typedef {import('ef-core/src/ef-core.js').EFTextFragment} EFTextFragment
 * @typedef {import('ef-core/src/ef-core.js').EFEventOptions} EFEventOptions
 */

// eslint-disable-next-line valid-jsdoc
/**
 * Return a brand new class for the new component
 * @param {string|EFAST} value - Template or AST for the component
 */
const create = (value) => {
	const valType = (0,type_of/* default */.Z)(value)
	if (valType === 'string') value = parser(value, ef_parser)
	else if (valType !== 'array') throw new TypeError('Cannot create new component without proper template or AST!')

	return (0,ef_core/* create */.Ue)(value)
}

/**
 * Change parser
 * @param {Function} newParser - Parser you want to change with
 * @returns {void}
 */
const setParser = (newParser) => {
	ef_parser = newParser
}

// eslint-disable-next-line valid-jsdoc
/**
 * Tagged template to quickly create an inline ef component class
 * @param {...*} args - String literal
 */
const ef_t = (...args) => create(mixStr(...args))

let coreVersion = '0.14.2'

if (false) {}



if (false) {}

// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
;// CONCATENATED MODULE: ../external-plugin-previewer/src/RenderContext.ts

const RenderContext = (0,react.createContext)(null);

;// CONCATENATED MODULE: ../external-plugin-previewer/src/Components/MaskCard.tsx




const MaskCard = (props)=>{
    const context = (0,react.useContext)(RenderContext);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        gutterBottom: true,
                        children: String(props.caption)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h5",
                        component: "div",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {
                            name: "title"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        component: "p",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: ()=>{
                        const base = context.baseURL;
                        const url = base ? new URL(props.href, base) : new URL(props.href);
                        context.permissionAwareOpen(url.toString());
                    },
                    size: "small",
                    children: String(props.button)
                })
            })
        ]
    }));
};
MaskCard.displayName = 'mask-card';

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(84879);
;// CONCATENATED MODULE: ../external-plugin-previewer/src/Components/BlockQuote.tsx


const BlockQuote = (0,styled/* default */.ZP)('blockquote')`
    margin-inline-start: 0;
    border-left: 4px solid orange;
    padding-inline-start: 1.5em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    opacity: 0.9;
`;
const MaskBlockQuote = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(BlockQuote, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {})
    }));
};
MaskBlockQuote.displayName = 'blockquote';

;// CONCATENATED MODULE: ../external-plugin-previewer/src/Components/Translate.tsx

const Translate = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        children: [
            "i18n: ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {})
        ]
    }));
};
Translate.displayName = 'i18n-translate';

;// CONCATENATED MODULE: ../external-plugin-previewer/src/Components/index.tsx






const span = createNativeTagDelegate('span');
const div = createNativeTagDelegate('div');
const br = createNativeTagDelegate('br', {
    children: false
});
function createNativeTagDelegate(tag, acceptProps) {
    const C = ()=>{
        // TODO: implement acceptProps
        if ((acceptProps === null || acceptProps === void 0 ? void 0 : acceptProps.children) === false) return(/*#__PURE__*/ (0,react.createElement)(tag));
        return(/*#__PURE__*/ (0,react.createElement)(tag, {}, /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {})));
    };
    C.displayName = tag;
    return C;
}

;// CONCATENATED MODULE: ../external-plugin-previewer/src/DOMImpl.tsx





const createReactRootShadowed = (0,src/* createReactRootShadowedPartial */.zV)({
    preventEventPropagationList: []
});
(0,ef_core/* setDOMImpl */.Uq)({
    Node,
    document: new Proxy(document, {
        get (doc, key) {
            if (key === 'createElement') return createElement;
            const val = doc[key];
            if (typeof val === 'function') return val.bind(doc);
            return val;
        }
    })
});
function createElement(element, options) {
    element = options.is || element;
    const _ = shouldRender(element);
    const isValid = _ !== unknown;
    const [nativeTag, Component] = _;
    const DOM = document.createElement(nativeTag);
    DOM.dataset.kind = element;
    const shadow = DOM.attachShadow({
        mode: 'open'
    });
    const props = {
        __proto__: null
    };
    isValid && render(Component, props, shadow);
    // No attributes allowed
    DOM.setAttribute = ()=>{};
    // No need to hook event listeners
    // Hook property access
    const proto = Object.getPrototypeOf(DOM);
    Object.setPrototypeOf(DOM, new Proxy(proto, {
        set (target, prop, value, receiver) {
            // Forward them instead.
            props[prop] = value;
            isValid && render(Component, props, shadow);
            return true;
        }
    }));
    return DOM;
}
function render(f, props, shadow) {
    const root = shadow.__root || (shadow.__root = createReactRootShadowed(shadow, {
        tag: 'span'
    }));
    root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(RenderContext.Provider, {
        value: createRenderContextProxy(shadow),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HooksContainer, {
            f: ()=>f(props, (event)=>void shadow.host.dispatchEvent(event)
                )
        })
    }));
}
// Need use a JSX component to hold hooks
function HooksContainer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.f()
    }));
}
function createRenderContextProxy(dom) {
    return new Proxy({}, {
        get: (_, key)=>getContext(dom)[key]
    });
}
function getContext(node) {
    if (!node) return null;
    if (node instanceof Element && node.__mask__context__) {
        return node.__mask__context__;
    }
    if (node instanceof ShadowRoot) return getContext(node.host);
    if (node.parentNode) return getContext(node.parentNode);
    return null;
}
const unknown = [
    'span',
    ()=>null
];
function shouldRender(element) {
    for (const F of Object.values(Components_namespaceObject)){
        if (F.displayName === element) return [
            'span',
            F
        ];
    }
    return unknown;
}

;// CONCATENATED MODULE: ../external-plugin-previewer/src/index.tsx

/// <reference path="./global.d.ts" />





function MaskExternalPluginPreviewRenderer({ pluginBase , payload , script , template , onError  }) {
    const [dom, setDOM] = (0,react.useState)(null);
    const context = (0,react.useContext)(RenderContext);
    (0,react.useEffect)(()=>{
        if (!dom) return;
        Reflect.set(dom, '__mask__context__', context);
    }, [
        dom,
        context
    ]);
    (0,react.useEffect)(()=>{
        if (!dom) return;
        dom.dataset.plugin = pluginBase;
        // This is safe. ef template does not allow any form of dynamic code execute in the template.
        try {
            const RemoteContent = create(template);
            const instance = new RemoteContent({
                $data: {
                    payload
                }
            });
            instance.$mount({
                target: dom
            });
            return ()=>instance.$destroy()
            ;
        } catch (error) {
            onError === null || onError === void 0 ? void 0 : onError(error);
        }
        return;
    }, [
        dom,
        onError,
        payload,
        template,
        pluginBase
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: (ref)=>setDOM(ref)
    }));
}

// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 1 modules
var popups = __webpack_require__(33188);
;// CONCATENATED MODULE: ./src/plugins/External/sns-context.ts
const bindingContext = new Set();
/**
 * Generate a new random Third Party popup Context identifier.
 *
 * Most of the API calls in the Third Party popup need this identifier,
 * otherwise we don't know where should we connect the context to.
 *
 * The context will be invalidated if this page is lost.
 */ function createThirdPartyPopupContext() {
    const id = Math.random().toString(16).slice(2);
    bindingContext.add(id);
    return id;
}
function isLocalContext(x) {
    return bindingContext.has(x);
}

;// CONCATENATED MODULE: ./src/plugins/External/loader/index.ts


// TODO: support suspense
function useExternalPluginManifest(url) {
    return (0,useAsyncRetry/* default */.Z)(()=>service/* default.ThirdPartyPlugin.fetchManifest */.ZP.ThirdPartyPlugin.fetchManifest(url)
    , [
        url
    ]);
}
function useExternalPluginTemplate(url, manifest, metaKey) {
    var ref;
    const target = manifest === null || manifest === void 0 ? void 0 : (ref = manifest.metadata) === null || ref === void 0 ? void 0 : ref[metaKey];
    // TODO: the final URL must inside/same directory of the manifest
    const u = target ? new URL(target.preview, url).toString() : null;
    return (0,useAsyncRetry/* default */.Z)(()=>fetchTemplate(u)
    , [
        u
    ]);
}
// TODO: support suspense, cache
async function fetchTemplate(url) {
    var ref, ref1;
    if (!url) return;
    const blob = await service/* default.Helper.fetch */.ZP.Helper.fetch(url);
    const text = await blob.text();
    const parser = new DOMParser();
    const dom = (ref = parser.parseFromString(text, 'text/html').querySelector('template')) === null || ref === void 0 ? void 0 : ref.innerHTML;
    if (!dom) return null;
    const template = (ref1 = parser.parseFromString(dom, 'text/html').querySelector('body')) === null || ref1 === void 0 ? void 0 : ref1.childNodes;
    if (!template) return null;
    console.log(htmlToTemplate(template));
    return htmlToTemplate(template);
}
const indentLevel = 2;
function htmlToTemplate(top) {
    function* text1(indent, text) {
        var ref;
        for (const line of ((ref = text.textContent) === null || ref === void 0 ? void 0 : ref.split('\n')) || ''){
            yield `${getIndent(indent)}. ${line}`;
        }
    }
    function* html(indent, node) {
        yield `${getIndent(indent)}>${node.tagName.toLowerCase()}`;
        for (const attr of node.attributes){
            yield `${getIndent(indent + indentLevel)}%${attr.name} = ${attr.value}`;
        }
        yield* convertList(indent + indentLevel, node.childNodes);
    }
    function* convertList(indent, nodes) {
        for (const node of nodes){
            if (isText(node)) yield* text1(indent, node);
            else if (node instanceof HTMLElement) yield* html(indent, node);
        }
    }
    function getIndent(x) {
        return ' '.repeat(x);
    }
    function isText(node) {
        return node.nodeType === document.TEXT_NODE;
    }
    return [
        ...convertList(0, top)
    ].join('\n');
}

;// CONCATENATED MODULE: ./src/plugins/External/components/ExternalPluginRenderer.tsx








function ExternalPluginRenderer(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const manifest = useExternalPluginManifest(props.url);
    const template = useExternalPluginTemplate(props.url, manifest.value, props.metaKey);
    const retry = /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        variant: "contained",
        size: "small",
        sx: {
            float: 'right'
        },
        onClick: ()=>{
            manifest.retry();
            template.retry();
        },
        children: "Retry"
    });
    if (!manifest.value || !template.value) return retry;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        sx: {
            border: '1px solid orange',
            marginTop: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        t('plugin_external_name'),
                        ": ",
                        manifest.value.name,
                        retry
                    ]
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "caption",
                            sx: {
                                display: 'block'
                            },
                            children: t('plugin_external_unverified_publisher', {
                                publisher: manifest.value.publisher
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "caption",
                            sx: {
                                display: 'block'
                            },
                            children: [
                                t('plugin_external_plugin_url'),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: props.url,
                                    target: "_blank",
                                    children: props.url
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderContext.Provider, {
                    value: {
                        permissionAwareOpen (url) {
                            const context = createThirdPartyPopupContext();
                            service/* default.ThirdPartyPlugin.openPluginPopup */.ZP.ThirdPartyPlugin.openPluginPopup((0,popups/* PermissionAwareRedirectOf */.uE)(url, context), [
                                context,
                                props.metaKey,
                                props.meta, 
                            ]);
                        },
                        baseURL: props.url
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskExternalPluginPreviewRenderer, {
                        pluginBase: props.url,
                        onError: console.warn,
                        script: "",
                        payload: props.meta,
                        template: template.value
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/External/components/Container.tsx






function ExternalPluginLoader(props) {
    // TODO: this section should use suspense and it will more nature
    const { loading , value , retry  } = (0,useAsyncRetry/* default */.Z)(()=>filterPlugin(props.plugins)
    , [
        props.plugins.join('@')
    ]);
    const ref = (0,react.useRef)(value);
    if (!ref.current && loading) return null;
    ref.current = value;
    if (!ref.current) return null;
    //
    const { known , unknown  } = ref.current;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnknownPluginLoadRequestUI, {
                plugins: unknown,
                onConfirm: (list)=>{
                    list.forEach((x)=>allowed.add(x.url)
                    );
                    retry();
                }
            }),
            known.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                    fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
                        message: `Plugin "${x.url}" is still loading...`
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalPluginRenderer, {
                        ...x
                    })
                }, x.url)
            )
        ]
    }));
}
const allowed = new Set();
/** This function should query which plugin can be loaded directly. */ async function filterPlugin(plugins) {
    return {
        unknown: plugins.filter((x)=>!allowed.has(x.url)
        ),
        known: plugins.filter((x)=>allowed.has(x.url)
        )
    };
}

// EXTERNAL MODULE: ./src/plugins/External/base.ts
var base = __webpack_require__(99322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(33351);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(66709);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(47238);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(18465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Autocomplete/Autocomplete.js + 1 modules
var Autocomplete = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js
var TextField = __webpack_require__(95763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Skeleton/Skeleton.js + 1 modules
var Skeleton = __webpack_require__(7708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(91719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(42042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(58639);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(49719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/Link.js
var esm_Link = __webpack_require__(57358);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/Person.js
var Person = __webpack_require__(506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/Description.js
var Description = __webpack_require__(59);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.4_881b2a51613eca9a23c14f7ecef9122a/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(61460);
;// CONCATENATED MODULE: ./src/plugins/External/components/PluginLoader.tsx











function PluginLoader() {
    const [input, setInput] = (0,react.useState)( false ? 0 : 'https://dimensiondev.github.io/Mask-Plugin-Example/');
    const [url, setURL] = (0,react.useState)(null);
    const invalidURL = esm/* Result.wrap */.x4.wrap(()=>new URL(input)
    ).err;
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        sx: {
            minHeight: 400
        },
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
                severity: "warning",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                        children: t('plugin_external_loader_alert_title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: t('plugin_external_loader_intro')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_external_loader_example_github",
                            components: {
                                terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    target: "_blank",
                                    href: "https://github.com/DimensionDev/Mask-Plugin-Example"
                                })
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: t('plugin_external_loader_alert')
                    })
                ]
            }),
            url ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {
                url: url
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        children: t('plugin_external_loader_search_holder')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: t('plugin_external_loader_search_sub_title')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete/* default */.Z, {
                disablePortal: true,
                options: [
                    'http://localhost:4242/',
                    'https://dimensiondev.github.io/Mask-Plugin-Example/'
                ],
                freeSolo: true,
                value: input,
                inputValue: input,
                onInputChange: (_, val)=>setInput(val)
                ,
                renderInput: (params)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        ...params,
                        fullWidth: true,
                        label: "Plugin URL",
                        variant: "standard",
                        error: invalidURL,
                        helperText: invalidURL ? 'URL seems invalid' : undefined
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'row-reverse'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    disabled: invalidURL,
                    onClick: ()=>setURL(input)
                    ,
                    children: t('plugin_external_loader_search_button')
                })
            })
        ]
    }));
}
function Loader(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { loading , retry , error , value  } = useExternalPluginManifest(props.url);
    if (error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
        message: 'Failed to load the plugin from ' + props.url
    }));
    const contribution = value === null || value === void 0 ? void 0 : (ref = value.contribution) === null || ref === void 0 ? void 0 : ref.composition;
    const skeleton = /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
        variant: "text",
        sx: {
            display: 'inline-block'
        },
        width: 150
    });
    const manifestURL = `${props.url}mask-manifest.json`;
    var ref1, ref2, ref3;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                variant: "h6",
                children: [
                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        sx: {
                            marginRight: 1
                        },
                        size: 16
                    }) : null,
                    t('plugin_external_name'),
                    ": ",
                    loading ? skeleton : (ref1 = value === null || value === void 0 ? void 0 : value.name) !== null && ref1 !== void 0 ? ref1 : 'Unknown name'
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                dense: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        secondaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: retry,
                            children: t('reload')
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Link/* default */.Z, {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                primary: "Plugin Manifest",
                                secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    target: "_blank",
                                    href: manifestURL,
                                    children: manifestURL
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Person/* default */.Z, {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                primary: "Publisher",
                                secondary: loading ? skeleton : (ref2 = value === null || value === void 0 ? void 0 : value.publisher) !== null && ref2 !== void 0 ? ref2 : ''
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Description/* default */.Z, {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                primary: "Description",
                                secondary: loading ? skeleton : (ref3 = value === null || value === void 0 ? void 0 : value.description) !== null && ref3 !== void 0 ? ref3 : ''
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'row-reverse'
                },
                children: contribution ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    onClick: ()=>{
                        service/* default.ThirdPartyPlugin.openPluginPopup */.ZP.ThirdPartyPlugin.openPluginPopup((0,popups/* PermissionAwareRedirectOf */.uE)(new URL(contribution.href, props.url).toString(), createThirdPartyPopupContext()));
                    },
                    children: t('plugin_external_get_started')
                }) : null
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
;// CONCATENATED MODULE: ./src/plugins/External/components/CompositionEntry.tsx







function ThirdPartyPluginCompositionEntry(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    (0,react.useEffect)(()=>utils/* MaskMessages.events.replaceComposition.on */.ql.events.replaceComposition.on(()=>{
            props.onClose();
        })
    , [
        props.onClose
    ]);
    return (0,src/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: props.open,
            title: t('plugin_external_entry_title'),
            onClose: props.onClose,
            container: container,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                sx: {
                    minHeight: 200,
                    minWidth: 400
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginLoader, {})
            })
        })
    );
}

// EXTERNAL MODULE: ./src/plugins/External/messages.ts
var messages = __webpack_require__(21069);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
;// CONCATENATED MODULE: ./src/plugins/External/SNSAdaptor/index.tsx









const sns = {
    ...base/* base */.u,
    init (signal) {
        const a = messages/* ExternalPluginMessages.ping.on */.M.ping.on((data)=>{
            if (!isLocalContext(data.context)) return;
            messages/* ExternalPluginMessages.pong.sendToContentScripts */.M.pong.sendToContentScripts(data.challenge);
        });
        const b = messages/* ExternalPluginMessages.appendComposition.on */.M.appendComposition.on((data)=>{
            if (!isLocalContext(data.context)) return;
            // TODO: should ask for user.
            utils/* MaskMessages.events.replaceComposition.sendToLocal */.ql.events.replaceComposition.sendToLocal((0,shared_base_src/* makeTypedMessageText */.P)(data.appendText, data.payload));
        });
        signal.addEventListener('abort', a);
        signal.addEventListener('abort', b);
    },
    DecryptedInspector: function Comp(props) {
        const tm = props.message;
        if (!tm.meta) return null;
        const JSX = [];
        for (const [key, meta] of tm.meta){
            if (!key.startsWith('plugin:')) continue;
            const [url, metaKey] = SNSAdaptor_parse(key);
            JSX.push({
                meta,
                metaKey,
                url
            });
        }
        // Loader itself has some async work and no need to display loading fallback
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: null,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalPluginLoader, {
                plugins: JSX
            })
        }));
    },
    CompositionDialogEntry: {
        label: '\u{1F9E9} Third party plugins',
        dialog: ThirdPartyPluginCompositionEntry
    },
    CompositionDialogMetadataBadgeRender: (key, val)=>key.startsWith('plugin:') ? {
            text: `External plugin (${key.slice('plugin:'.length)})`,
            tooltip: `It's inner content: ${JSON.stringify(val)}`
        } : null
};
/* harmony default export */ const SNSAdaptor = (sns);
// plugin:dimensiondev.github.io/Mask-Plugin-Example/@v1
function SNSAdaptor_parse(x) {
    // eslint-disable-next-line prefer-const
    let [address, ...key] = x.slice('plugin:'.length).split('@');
    if (!address.endsWith('/')) address += '/';
    const isLocalhost = new URL('https://' + address).hostname;
    return [
        (isLocalhost ? 'http://' : 'https://') + address,
        key.join('@')
    ];
}


/***/ }),

/***/ 21069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ExternalPluginMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86716);


const ExternalPluginMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)('io.mask.external', _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM);


/***/ }),

/***/ 45279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
const MINDS_ID = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: MINDS_ID,
    name: 'minds',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === MINDS_ID;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ })

}]);