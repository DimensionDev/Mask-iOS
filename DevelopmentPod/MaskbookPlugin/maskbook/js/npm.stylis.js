"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9697],{

/***/ 36978:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* binding */ MS),
/* harmony export */   "uj": () => (/* binding */ MOZ),
/* harmony export */   "G$": () => (/* binding */ WEBKIT),
/* harmony export */   "Ab": () => (/* binding */ COMMENT),
/* harmony export */   "Fr": () => (/* binding */ RULESET),
/* harmony export */   "h5": () => (/* binding */ DECLARATION),
/* harmony export */   "K$": () => (/* binding */ IMPORT),
/* harmony export */   "lK": () => (/* binding */ KEYFRAMES)
/* harmony export */ });
/* unused harmony exports PAGE, MEDIA, CHARSET, VIEWPORT, SUPPORTS, DOCUMENT, NAMESPACE, FONT_FACE, COUNTER_STYLE, FONT_FEATURE_VALUES */
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'


/***/ }),

/***/ 48973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qR": () => (/* binding */ middleware),
  "Ji": () => (/* binding */ prefixer),
  "cD": () => (/* binding */ rulesheet)
});

// UNUSED EXPORTS: namespace

// EXTERNAL MODULE: ../../node_modules/.pnpm/stylis@4.0.13/node_modules/stylis/src/Enum.js
var Enum = __webpack_require__(36978);
// EXTERNAL MODULE: ../../node_modules/.pnpm/stylis@4.0.13/node_modules/stylis/src/Utility.js
var Utility = __webpack_require__(7975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/stylis@4.0.13/node_modules/stylis/src/Tokenizer.js
var Tokenizer = __webpack_require__(72933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/stylis@4.0.13/node_modules/stylis/src/Serializer.js
var Serializer = __webpack_require__(81380);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/stylis@4.0.13/node_modules/stylis/src/Prefixer.js



/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch ((0,Utility/* hash */.vp)(value, length)) {
		// color-adjust
		case 5103:
			return Enum/* WEBKIT */.G$ + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return Enum/* WEBKIT */.G$ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return Enum/* WEBKIT */.G$ + value + Enum/* MOZ */.uj + value + Enum.MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return Enum/* WEBKIT */.G$ + value + Enum.MS + value + value
		// order
		case 6165:
			return Enum/* WEBKIT */.G$ + value + Enum.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return Enum/* WEBKIT */.G$ + value + (0,Utility/* replace */.gx)(value, /(\w+).+(:[^]+)/, Enum/* WEBKIT */.G$ + 'box-$1$2' + Enum.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return Enum/* WEBKIT */.G$ + value + Enum.MS + 'flex-item-' + (0,Utility/* replace */.gx)(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return Enum/* WEBKIT */.G$ + value + Enum.MS + 'flex-line-pack' + (0,Utility/* replace */.gx)(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return Enum/* WEBKIT */.G$ + value + Enum.MS + (0,Utility/* replace */.gx)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return Enum/* WEBKIT */.G$ + value + Enum.MS + (0,Utility/* replace */.gx)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return Enum/* WEBKIT */.G$ + 'box-' + (0,Utility/* replace */.gx)(value, '-grow', '') + Enum/* WEBKIT */.G$ + value + Enum.MS + (0,Utility/* replace */.gx)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return Enum/* WEBKIT */.G$ + (0,Utility/* replace */.gx)(value, /([^-])(transform)/g, '$1' + Enum/* WEBKIT */.G$ + '$2') + value
		// cursor
		case 6187:
			return (0,Utility/* replace */.gx)((0,Utility/* replace */.gx)((0,Utility/* replace */.gx)(value, /(zoom-|grab)/, Enum/* WEBKIT */.G$ + '$1'), /(image-set)/, Enum/* WEBKIT */.G$ + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,Utility/* replace */.gx)(value, /(image-set\([^]*)/, Enum/* WEBKIT */.G$ + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,Utility/* replace */.gx)((0,Utility/* replace */.gx)(value, /(.+:)(flex-)?(.*)/, Enum/* WEBKIT */.G$ + 'box-pack:$3' + Enum.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + Enum/* WEBKIT */.G$ + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,Utility/* replace */.gx)(value, /(.+)-inline(.+)/, Enum/* WEBKIT */.G$ + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,Utility/* strlen */.to)(value) - 1 - length > 6)
				switch ((0,Utility/* charat */.uO)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,Utility/* charat */.uO)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,Utility/* replace */.gx)(value, /(.+:)(.+)-([^]+)/, '$1' + Enum/* WEBKIT */.G$ + '$2-$3' + '$1' + Enum/* MOZ */.uj + ((0,Utility/* charat */.uO)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,Utility/* indexof */.Cw)(value, 'stretch') ? prefix((0,Utility/* replace */.gx)(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if ((0,Utility/* charat */.uO)(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch ((0,Utility/* charat */.uO)(value, (0,Utility/* strlen */.to)(value) - 3 - (~(0,Utility/* indexof */.Cw)(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return (0,Utility/* replace */.gx)(value, ':', ':' + Enum/* WEBKIT */.G$) + value
				// (inline-)?fl(e)x
				case 101:
					return (0,Utility/* replace */.gx)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + Enum/* WEBKIT */.G$ + ((0,Utility/* charat */.uO)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + Enum/* WEBKIT */.G$ + '$2$3' + '$1' + Enum.MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch ((0,Utility/* charat */.uO)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return Enum/* WEBKIT */.G$ + value + Enum.MS + (0,Utility/* replace */.gx)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return Enum/* WEBKIT */.G$ + value + Enum.MS + (0,Utility/* replace */.gx)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return Enum/* WEBKIT */.G$ + value + Enum.MS + (0,Utility/* replace */.gx)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return Enum/* WEBKIT */.G$ + value + Enum.MS + value + value
	}

	return value
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/stylis@4.0.13/node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,Utility/* sizeof */.Ei)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case Enum/* DECLARATION */.h5: element.return = prefix(element.value, element.length)
					break
				case Enum/* KEYFRAMES */.lK:
					return (0,Serializer/* serialize */.q)([(0,Tokenizer/* copy */.JG)(element, {value: (0,Utility/* replace */.gx)(element.value, '@', '@' + Enum/* WEBKIT */.G$)})], callback)
				case Enum/* RULESET */.Fr:
					if (element.length)
						return (0,Utility/* combine */.$e)(element.props, function (value) {
							switch ((0,Utility/* match */.EQ)(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return (0,Serializer/* serialize */.q)([(0,Tokenizer/* copy */.JG)(element, {props: [(0,Utility/* replace */.gx)(value, /:(read-\w+)/, ':' + Enum/* MOZ */.uj + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return (0,Serializer/* serialize */.q)([
										(0,Tokenizer/* copy */.JG)(element, {props: [(0,Utility/* replace */.gx)(value, /:(plac\w+)/, ':' + Enum/* WEBKIT */.G$ + 'input-$1')]}),
										(0,Tokenizer/* copy */.JG)(element, {props: [(0,Utility/* replace */.gx)(value, /:(plac\w+)/, ':' + Enum/* MOZ */.uj + '$1')]}),
										(0,Tokenizer/* copy */.JG)(element, {props: [(0,Utility/* replace */.gx)(value, /:(plac\w+)/, Enum.MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ 76235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY": () => (/* binding */ compile)
/* harmony export */ });
/* unused harmony exports parse, ruleset, comment, declaration */
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36978);
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7975);
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72933);




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .dealloc */ .cE)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .alloc */ .un)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)()) {
			// (
			case 40:
				if (previous != 108 && characters.charCodeAt(length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .indexof */ .Cw)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .whitespace */ .Qb)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .escaping */ .kq)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .commenter */ .q6)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .prev */ .mp)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .from */ .Dp)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .identifier */ .QU)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .sizeof */ .Ei)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .abs */ .Wn)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .trim */ .fy)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .RULESET */ .Fr : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .COMMENT */ .Ab, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .from */ .Dp)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .char */ .Tb)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .DECLARATION */ .h5, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, length + 1, -1), length)
}


/***/ }),

/***/ 81380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ serialize),
/* harmony export */   "P": () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36978);
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7975);



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .sizeof */ .Ei)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .IMPORT */ .K$: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .DECLARATION */ .h5: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .COMMENT */ .Ab: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .KEYFRAMES */ .lK: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .RULESET */ .Fr: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .strlen */ .to)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ 72933:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FK": () => (/* binding */ position),
/* harmony export */   "dH": () => (/* binding */ node),
/* harmony export */   "JG": () => (/* binding */ copy),
/* harmony export */   "Tb": () => (/* binding */ char),
/* harmony export */   "mp": () => (/* binding */ prev),
/* harmony export */   "lp": () => (/* binding */ next),
/* harmony export */   "fj": () => (/* binding */ peek),
/* harmony export */   "Ud": () => (/* binding */ caret),
/* harmony export */   "tP": () => (/* binding */ slice),
/* harmony export */   "r": () => (/* binding */ token),
/* harmony export */   "un": () => (/* binding */ alloc),
/* harmony export */   "cE": () => (/* binding */ dealloc),
/* harmony export */   "iF": () => (/* binding */ delimit),
/* harmony export */   "Qb": () => (/* binding */ whitespace),
/* harmony export */   "kq": () => (/* binding */ escaping),
/* harmony export */   "q6": () => (/* binding */ commenter),
/* harmony export */   "QU": () => (/* binding */ identifier)
/* harmony export */ });
/* unused harmony exports line, column, length, character, characters, tokenize, tokenizer, delimiter */
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7975);


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .assign */ .f0)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .substr */ .tb)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .strlen */ .to)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .trim */ .fy)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .from */ .Dp)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ 7975:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wn": () => (/* binding */ abs),
/* harmony export */   "Dp": () => (/* binding */ from),
/* harmony export */   "f0": () => (/* binding */ assign),
/* harmony export */   "vp": () => (/* binding */ hash),
/* harmony export */   "fy": () => (/* binding */ trim),
/* harmony export */   "EQ": () => (/* binding */ match),
/* harmony export */   "gx": () => (/* binding */ replace),
/* harmony export */   "Cw": () => (/* binding */ indexof),
/* harmony export */   "uO": () => (/* binding */ charat),
/* harmony export */   "tb": () => (/* binding */ substr),
/* harmony export */   "to": () => (/* binding */ strlen),
/* harmony export */   "Ei": () => (/* binding */ sizeof),
/* harmony export */   "R3": () => (/* binding */ append),
/* harmony export */   "$e": () => (/* binding */ combine)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ })

}]);