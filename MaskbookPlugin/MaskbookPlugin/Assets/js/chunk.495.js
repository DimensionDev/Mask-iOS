"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[240],{

/***/ 37146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uE": () => (/* binding */ PermissionAwareRedirectOf),
  "mZ": () => (/* binding */ PopupRoutes),
  "km": () => (/* reexport */ constructRequestPermissionURL),
  "qy": () => (/* reexport */ constructSignRequestURL),
  "WQ": () => (/* binding */ getRouteURLWithNoParam)
});

;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/utils.ts

function constructRequestPermissionURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${getRouteURLWithNoParam(PopupRoutes.RequestPermission)}?${params.toString()}`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/popups/SignRequest/utils.ts


function constructSignRequestURL(request) {
    return dist_default()(getRouteURLWithNoParam(PopupRoutes.SignRequest), {
        message: request.message,
        id: request.requestID
    });
}

;// CONCATENATED MODULE: ./src/extension/popups/index.tsx
var PopupRoutes;
(function(PopupRoutes1) {
    PopupRoutes1["Root"] = '/';
    PopupRoutes1["Wallet"] = '/wallet';
    PopupRoutes1["ImportWallet"] = '/wallet/import';
    PopupRoutes1["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes1["WalletSettings"] = '/wallet/settings';
    PopupRoutes1["WalletRename"] = '/wallet/rename';
    PopupRoutes1["DeleteWallet"] = '/wallet/delete';
    PopupRoutes1["CreateWallet"] = '/wallet/create';
    PopupRoutes1["SelectWallet"] = '/wallet/select';
    PopupRoutes1["BackupWallet"] = '/wallet/backup';
    PopupRoutes1["AddToken"] = '/wallet/addToken';
    PopupRoutes1["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes1["GasSetting"] = '/wallet/gas';
    PopupRoutes1["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes1["Personas"] = '/personas';
    PopupRoutes1["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes1["RequestPermission"] = '/request-permission';
    PopupRoutes1["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes1["SignRequest"] = '/sign-request';
})(PopupRoutes || (PopupRoutes = {
}));
function getRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}
function PermissionAwareRedirectOf(url, context) {
    return getRouteURLWithNoParam(PopupRoutes.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}




/***/ }),

/***/ 91522:
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
  "Translate": () => (Translate),
  "br": () => (br),
  "div": () => (div),
  "span": () => (span)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(57343);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListSubheader/ListSubheader.js + 1 modules
var ListSubheader = __webpack_require__(77602);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(54819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(98569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(86126);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useMap.js
var useMap = __webpack_require__(68910);
;// CONCATENATED MODULE: ./src/plugins/External/components/UnknownPluginLoadRequest.tsx




function UnknownPluginLoadRequestUI({ plugins , onConfirm  }) {
    const [_selected, { get , set  }] = (0,useMap/* default */.Z)({
    });
    const confirmAll = ()=>onConfirm(plugins)
    ;
    const selected = plugins.filter((x)=>_selected[x.url]
    );
    const confirmSelected = ()=>onConfirm(selected)
    ;
    if (plugins.length === 0) return null;
    if (plugins.length === 1) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
        message: `Do you want to load a new plugin from ${plugins[0].url}?`,
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
                        children: "New unknown Mask plugins found. Do you want to load them?"
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
                        children: "Load"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: confirmAll,
                        children: "Load All"
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(29135);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
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

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef.js@0.13.12/node_modules/ef.js/src/lib/parser.js


const parse = (template, parser) => {
	if (!parser) parser = eft_parser
	return parser(template)
}

/* harmony default export */ const parser = (parse);

// EXTERNAL MODULE: ../../node_modules/.pnpm/ef-core@0.13.12/node_modules/ef-core/src/lib/utils/type-of.js
var type_of = __webpack_require__(15992);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ef-core@0.13.12/node_modules/ef-core/src/ef-core.js + 22 modules
var ef_core = __webpack_require__(49661);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef.js@0.13.12/node_modules/ef.js/src/ef.js
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

let coreVersion = '0.13.12'

if (false) {}



if (false) {}

// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
;// CONCATENATED MODULE: ../external-plugin-previewer/src/host.ts
/** @internal */ const hostConfig = {
    permissionAwareOpen (url) {
        return url;
    }
};
function setHostConfig(host) {
    hostConfig.permissionAwareOpen = host.permissionAwareOpen;
}

;// CONCATENATED MODULE: ../external-plugin-previewer/src/Components/MaskCard.tsx




const MaskCard = (props)=>{
    const ref = (0,react.useRef)(null);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        ref: ref,
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: ()=>{
                        var ref1;
                        const base = (ref1 = getContext(ref.current)) === null || ref1 === void 0 ? void 0 : ref1.trim();
                        const url = base ? new URL(props.href, base) : new URL(props.href);
                        hostConfig.permissionAwareOpen(url.toString());
                    },
                    size: "small",
                    children: String(props.button)
                })
            })
        ]
    }));
};
MaskCard.displayName = 'mask-card';
function getContext(node) {
    if (!node) return null;
    if (node instanceof Element && node.hasAttribute('data-plugin')) {
        return node.getAttribute('data-plugin');
    }
    if (node instanceof ShadowRoot) return getContext(node.host);
    if (node.parentNode) return getContext(node.parentNode);
    return null;
}

;// CONCATENATED MODULE: ../external-plugin-previewer/src/Components/Translate.tsx

const Translate = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        children: [
            "i18n: ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {
            })
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
function createNativeTagDelegate(tag, accpetProps) {
    const C = ()=>{
        // TODO: implement acceptProps
        if ((accpetProps === null || accpetProps === void 0 ? void 0 : accpetProps.children) === false) return(/*#__PURE__*/ (0,react.createElement)(tag));
        return(/*#__PURE__*/ (0,react.createElement)(tag, {
        }, /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {
        })));
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
    DOM.setAttribute = ()=>{
    };
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
    root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(HooksContainer, {
        f: ()=>f(props, (event)=>void shadow.host.dispatchEvent(event)
            )
    }));
}
// Need use a JSX component to hold hooks
function HooksContainer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.f()
    }));
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

// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(37146);
// EXTERNAL MODULE: ./src/plugins/External/popup-context.ts
var popup_context = __webpack_require__(6036);
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
    function* text(indent, text1) {
        var ref;
        for (const line of ((ref = text1.textContent) === null || ref === void 0 ? void 0 : ref.split('\n')) || ''){
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
            if (isText(node)) yield* text(indent, node);
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







setHostConfig({
    permissionAwareOpen (url) {
        service/* default.ThirdPartyPlugin.openPluginPopup */.ZP.ThirdPartyPlugin.openPluginPopup((0,popups/* PermissionAwareRedirectOf */.uE)(url, (0,popup_context/* createThirdPartyPopupContext */.J)()));
    }
});
function ExternalPluginRenderer(props) {
    const manifest = useExternalPluginManifest(props.url);
    const template = useExternalPluginTemplate(props.url, manifest.value, props.metaKey);
    const retry = /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        onClick: ()=>{
            manifest.retry();
            template.retry();
        },
        children: "Retry"
    });
    if (!manifest.value || !template.value) return retry;
    console.log(props.meta, template.value);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        sx: {
            border: '1px solid red'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                title: `Mask plugin (3rd party): ${manifest.value.name}`,
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "caption",
                        children: [
                            "Publisher: ",
                            manifest.value.publisher,
                            " (⚠ Unverified)",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                            }),
                            "Plugin URL: ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: props.url,
                                children: props.url
                            }),
                            retry
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                style: {
                    background: 'red',
                    height: 200
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskExternalPluginPreviewRenderer, {
                    pluginBase: props.url,
                    onError: console.warn,
                    script: "",
                    payload: props.meta,
                    template: template.value
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
var base = __webpack_require__(83471);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(52259);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(64614);
;// CONCATENATED MODULE: ./src/plugins/External/components/PluginLoader.tsx








function PluginLoader() {
    const [input, setInput] = (0,react.useState)( false ? 0 : 'http://dimensiondev.github.io/Mask-Plugin-Example/');
    const [url, setURL] = (0,react.useState)(null);
    const invalidURL = esm/* Result.wrap */.x4.wrap(()=>new URL(input)
    ).err;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                label: "URL of the plugin",
                fullWidth: true,
                value: input,
                onChange: (e)=>setInput(e.currentTarget.value)
                ,
                error: invalidURL,
                helperText: invalidURL ? 'URL seems invalid' : undefined
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                disabled: invalidURL,
                onClick: ()=>setURL(input)
                ,
                children: "Load plugin"
            }),
            url ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {
                url: url
            }) : null
        ]
    }));
}
function Loader(props) {
    var ref;
    const load = useExternalPluginManifest(props.url);
    if (load.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
        variant: "indeterminate"
    }));
    if (load.error || !load.value) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
        message: 'Failed to load the plugin from ' + props.url
    }));
    const contribution = (ref = load.value.contribution) === null || ref === void 0 ? void 0 : ref.composition;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "h5",
                    children: [
                        "External plugin: ",
                        load.value.name
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body1",
                    children: [
                        "Description: ",
                        load.value.description
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body1",
                    children: [
                        "Publisher: ",
                        load.value.publisher
                    ]
                }),
                contribution ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: ()=>{
                        service/* default.ThirdPartyPlugin.openPluginPopup */.ZP.ThirdPartyPlugin.openPluginPopup((0,popups/* PermissionAwareRedirectOf */.uE)(new URL(contribution.href, props.url).toString(), (0,popup_context/* createThirdPartyPopupContext */.J)()));
                    },
                    children: "始まるよ～"
                }) : null
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/External/components/CompositionEntry.tsx





function ThirdPartyPluginCompositionEntry(props) {
    return (0,src/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
            open: props.open,
            title: "🧩 Use third party plugins",
            onClose: props.onClose,
            DialogProps: {
                container
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginLoader, {
                })
            })
        })
    );
}

;// CONCATENATED MODULE: ./src/plugins/External/SNSAdaptor/index.tsx





const sns = {
    ...base/* base */.u,
    init (signal) {
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
        label: '🧩 Third party plugins',
        dialog: ThirdPartyPluginCompositionEntry
    },
    CompositionDialogMetadataBadgeRender: (key, val)=>key.startsWith('plugin:') ? {
            text: `A 3rd party plugin (${key})`,
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

/***/ 6036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ createThirdPartyPopupContext),
/* harmony export */   "A": () => (/* binding */ isLocalContext)
/* harmony export */ });
/* harmony import */ var _reactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89193);

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


/***/ }),

/***/ 89193:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _protocols_typed_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65570);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37186);
/* harmony import */ var _popup_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6036);
/* module decorator */ module = __webpack_require__.hmd(module);



(0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .startEffect */ .CU)(module.hot, ()=>_utils__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.thirdPartyPing.on */ .yV.events.thirdPartyPing.on((data)=>{
        if (!(0,_popup_context__WEBPACK_IMPORTED_MODULE_2__/* .isLocalContext */ .A)(data.context)) return;
        _utils__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.thirdPartyPong.sendToContentScripts */ .yV.events.thirdPartyPong.sendToContentScripts(data.challenge);
    })
);
(0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .startEffect */ .CU)(module.hot, ()=>_utils__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.thirdPartySetPayload.on */ .yV.events.thirdPartySetPayload.on((data)=>{
        if (!(0,_popup_context__WEBPACK_IMPORTED_MODULE_2__/* .isLocalContext */ .A)(data.context)) return;
        const meta = new Map();
        for (const [key, value] of Object.entries(data.payload)){
            meta.set(key, value);
        }
        _utils__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.requestComposition.sendToLocal */ .yV.events.requestComposition.sendToLocal({
            open: true,
            reason: 'popup',
            content: (0,_protocols_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(data.appendText, meta)
        });
    })
);


/***/ }),

/***/ 65570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ metadata/* createTypedMessageMetadataReader */.Bi),
  "r1": () => (/* reexport */ metadata/* editTypedMessageMeta */.r1),
  "Vc": () => (/* reexport */ src.extractTextFromTypedMessage),
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "Jp": () => (/* reexport */ metadata/* isDataMatchJSONSchema */.Jp),
  "bj": () => (/* reexport */ src.isTypedMessageAnchor),
  "YN": () => (/* reexport */ src.isTypedMessageEmpty),
  "Rz": () => (/* reexport */ src.isTypedMessageText),
  "Jv": () => (/* reexport */ src.makeTypedMessageAnchor),
  "WM": () => (/* reexport */ src.makeTypedMessageEmpty),
  "as": () => (/* reexport */ src.makeTypedMessageImage),
  "Ng": () => (/* reexport */ src.makeTypedMessagePromise),
  "P": () => (/* reexport */ src.makeTypedMessageText),
  "Zw": () => (/* reexport */ src.makeTypedMessageTuple),
  "n_": () => (/* reexport */ src.makeTypedMessageTupleFromList),
  "fG": () => (/* reexport */ metadata/* metadataSchemaStoreReadonly */.fG),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// UNUSED EXPORTS: editMetadata, isSerializableTypedMessage, isTypedMessageEqual, isTypedMessageImage, isTypedMessageImageV1, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownCoreTypedMessages, isWellKnownTypedMessages, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/protocols/typed-message/helpers.ts


// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts


function getTypedMessageContent(message) {
    if ((0,src.isTypedMessageText)(message)) return message.content;
    if ((0,src.isTypedMessageAnchor)(message)) return message.href;
    return '';
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/render-registry.tsx
const registry = new Map();
// TODO: before metadata, after metadata, ...
function registerTypedMessageRenderer(matching, config) {
    const set = registry.get(matching) || new Set();
    // No overwrite in production
    if (false) {}
    set.add(config);
    registry.set(matching, set);
}
// TODO: add settings for "selected" renderer
function getRendererOfTypedMessage(message) {
    const list = [
        ...registry.get(message.type) || [],
        ...registry.get('*') || []
    ].sort((x, y)=>x.priority - y.priority
    );
    return list;
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/index.ts






/***/ }),

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ metadataSchemaStoreReadonly),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64614);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20391);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98723);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
const metadataSchemaStoreReadonly = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (metadataSchemaStore) : null);
/**
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({
    });
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}


/***/ })

}]);