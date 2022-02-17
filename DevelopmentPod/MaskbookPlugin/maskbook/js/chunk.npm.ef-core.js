"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[313],{

/***/ 83231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ue": () => (/* binding */ ef_core_create),
  "Uq": () => (/* reexport */ setDOMImpl)
});

// UNUSED EXPORTS: EFNodeWrapper, EFTextFragment, Fragment, bundle, createElement, declareNamespace, exec, inform, isPaused, mapAttrs, mountOptions, onNextRender, scoped, toEFComponent, version

// EXTERNAL MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/array-helper.js
var array_helper = __webpack_require__(84895);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/render-queue.js


const modificationQueue = []
const domQueue = []
const userQueue = []
let count = 0

const queue = handlers => modificationQueue.push(...handlers)
const queueDom = handler => domQueue.push(handler)
const onNextRender = handler => userQueue.push(handler)

/**
 * @returns {boolean} - Is render paused
 */
const isPaused = () => count > 0

/**
 * Add 1 to render count down.
 * When countdown becomes 0, render will be triggered.
 * @returns {number} - Render count down
 */
const inform = () => {
	count += 1
	return count
}

const execModifications = () => {
	if (modificationQueue.length === 0) return
	const renderQueue = array_helper/* default.unique */.Z.unique(modificationQueue)
	array_helper/* default.empty */.Z.empty(modificationQueue)
	for (let i of renderQueue) i()
}

const execDomModifications = () => {
	if (domQueue.length === 0) return
	const domRenderQueue = array_helper/* default.rightUnique */.Z.rightUnique(domQueue)
	array_helper/* default.empty */.Z.empty(domQueue)
	for (let i of domRenderQueue) i()
}

const execUserQueue = () => {
	if (userQueue.length === 0) return
	const userFnQueue = array_helper/* default.unique */.Z.unique(userQueue)
	array_helper/* default.empty */.Z.empty(userQueue)
	for (let i of userFnQueue) i()
}

/**
 * Minus 1 to render count down.
 * When countdown becomes 0, render will be triggered.
 * @param {boolean} immediate - Render immediately, will force countdown become 0
 * @returns {number} - Render count down
 */
const exec = (immediate) => {
	if (!immediate && (count -= 1) > 0) return count
	count = 0

	if (modificationQueue.length > 0) execModifications()

	if (domQueue.length > 0) execDomModifications()

	// Execute user queue after DOM update
	if (userQueue.length > 0) setTimeout(execUserQueue, 0)

	return count
}

/**
 * Run callback in a safe way, without worrying about unhandled errors may break rendering.
 * @param {Function} cb - Callback function to be executed safly
 * @returns {(void|Error)} - Error that happens when executing callback
 */
const bundle = (cb) => {
	inform()
	try {
		// eslint-disable-next-line callback-return
		exec(cb(inform, exec))
	} catch (e) {
		exec()
		return e
	}
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/polyfills.js
// Enough for ef's usage, so no need for a full polyfill
const legacyAssign = (ee, er) => {
	for (let i in er) ee[i] = er[i]
	return ee
}

const polyfills_assign = Object.assign || legacyAssign



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/resolver.js



const resolveAllPath = ({_path, handlers, subscribers, innerData}) => {
	for (let i of _path) {
		if (!handlers[i]) handlers[i] = {}
		if (!subscribers[i]) subscribers[i] = {}
		if (!innerData[i]) innerData[i] = {}
		handlers = handlers[i]
		subscribers = subscribers[i]
		innerData = innerData[i]
	}
	return {
		handlerNode: handlers,
		subscriberNode: subscribers,
		dataNode: innerData
	}
}

// Workaround for the third bug of buble:
// https://github.com/bublejs/buble/issues/106
const defineNode = (key, obj) => {
	const node = {}
	Object.defineProperty(obj, key, {
		get() {
			return node
		},
		set(data) {
			inform()
			polyfills_assign(node, data)
			exec()
		},
		configurable: false,
		enumerable: true
	})
	return node
}

const resolveReactivePath = (_path, obj) => {
	for (let i of _path) {
		if (obj[i]) obj = obj[i]
		else obj = defineNode(i, obj)
	}
	return obj
}

const resolvePath = (_path, obj) => {
	for (let i of _path) {
		if (!obj[i]) obj[i] = {}
		obj = obj[i]
	}
	return obj
}

const resolve = ({_path, _key, data, handlers, subscribers, innerData}) => {
	const parentNode = resolveReactivePath(_path, data)
	const {handlerNode, subscriberNode, dataNode} = resolveAllPath({_path, handlers, subscribers, innerData})
	if (!handlerNode[_key]) handlerNode[_key] = []
	if (!subscriberNode[_key]) subscriberNode[_key] = []
	/* eslint no-undefined: "off" */
	if (!Object.prototype.hasOwnProperty.call(dataNode, _key)) dataNode[_key] = undefined
	return {parentNode, handlerNode: handlerNode[_key], subscriberNode: subscriberNode[_key], dataNode}
}

const resolveSubscriber = (_path, subscribers) => {
	const pathArr = _path.split('.')
	const key = pathArr.pop()
	for (let i of pathArr) {
		if (!subscribers[i]) subscribers[i] = {}
		subscribers = subscribers[i]
	}
	return subscribers[key]
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/isnan.js
/* eslint-disable no-self-compare */
const isnan = obj => obj !== obj

/* harmony default export */ const utils_isnan = (isnan);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/debug.js
const getDbg = () => {
	if (typeof console === 'undefined') {
		if (typeof print === 'undefined') {
			// eslint-disable-next-line no-empty-function
			const emptyFn = () => {}
			return {
				log: emptyFn,
				info: emptyFn,
				warn: emptyFn,
				error: emptyFn
			}
		}

		const assemblePrintContent = (type, args) => `[EF][${type}] ${args.join(' ')}`

		return {
			log: (...args) => print(assemblePrintContent('LOG ', args)),
			info: (...args) => print(assemblePrintContent('INFO', args)),
			warn: (...args) => print(assemblePrintContent('WARN', args)),
			error: (...args) => print(assemblePrintContent('ERROR', args))
		}
	}

	// Wrap console functions for `[EF]` prefix
	const strTpl = '[EF] %s'
	return {
		log: console.log.bind(console, strTpl),
		info: console.info.bind(console, strTpl),
		warn: console.warn.bind(console, strTpl),
		error: console.error.bind(console, strTpl)
	}
}

const dbg = getDbg()

/* harmony default export */ const debug = (dbg);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/binding.js






const initDataNode = ({parentNode, dataNode, handlerNode, subscriberNode, ctx, _key}) => {
	let updatingInProgress = false
	Object.defineProperty(parentNode, _key, {
		get() {
			return dataNode[_key]
		},
		set(value) {
			if (updatingInProgress) return
			updatingInProgress = true
			// Comparing NaN is like eating a cake and suddenly encounter a grain of sand
			if (dataNode[_key] === value || (utils_isnan(dataNode[_key]) && utils_isnan(value))) {
				updatingInProgress = false
				return
			}
			dataNode[_key] = value
			inform()
			queue(handlerNode)
			exec()
			if (subscriberNode.length > 0) {
				inform()
				try {
					for (const subscriber of subscriberNode) subscriber({state: ctx.state, value})
				} catch (e) {
					debug.error('Error caught when executing subscribers:\n', e)
				}
				exec()
			}
			updatingInProgress = false
		},
		enumerable: true
	})
}

const initBinding = ({bind, ctx, handlers, subscribers, innerData}) => {
	const _path = array_helper/* default.copy */.Z.copy(bind[0])
	const _key = _path.pop()
	const {parentNode, handlerNode, subscriberNode, dataNode} = resolve({
		_path,
		_key,
		data: ctx.data,
		handlers,
		subscribers,
		innerData
	})

	// Initlize data binding node if not exist
	if (!Object.prototype.hasOwnProperty.call(parentNode, _key)) initDataNode({parentNode, dataNode, handlerNode, subscriberNode, ctx, _key})
	// Update default value
	// bind[1] is the default value for this node
	if (bind.length > 1) parentNode[_key] = bind[1]

	return {dataNode, parentNode, handlerNode, subscriberNode, _key}
}

/* harmony default export */ const binding = (initBinding);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/fast-instance-of.js
const isInstance = (er, ee) => er.constructor === ee

/* harmony default export */ const fast_instance_of = (isInstance);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/buble-fix.js


// https://github.com/bublejs/buble/issues/197
const enumerableFalse = (classObj, keys) => {
	for (let i of keys) Object.defineProperty(classObj.prototype, i, {enumerable: false})
	return classObj
}

// https://github.com/bublejs/buble/issues/131
const prepareArgs = (self, node) => {
	const args = array_helper/* default.copy */.Z.copy(self)
	array_helper/* default.unshift */.Z.unshift(args, node)
	return args
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/is-browser.js


const isBrowser = typeof document !== 'undefined' && typeof Node !== 'undefined'

if (false) {}

/* harmony default export */ const is_browser = (isBrowser);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/global-shared.js
const shared = {}

/* harmony default export */ const global_shared = (shared);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/dom-helper.js
// import ARR from './array-helper.js'










// Will require a weakmap polyfill for IE10 and below
const mountingPointStore = new WeakMap()

const DOM = {}

const EFFragment = class {
	constructor() {
		this.$children = []
		this.$safeZone = DOM.document.createDocumentFragment()
	}

	append(...args) {
		DOM.append.apply(null, prepareArgs(args, this.$safeZone))
		return this.$children.push(...args)
	}

	appendTo(node) {
		DOM.append.apply(null, prepareArgs(this.$children, node))
	}

	removeChild(node) {
		DOM.remove(node)
		array_helper/* default.remove */.Z.remove(this.$children, node)
	}

	remove() {
		for (let i of this.$children) DOM.append(this.$safeZone, i)
	}
}

const appendNode = (node, tempFragment) => {
	const {element, placeholder} = node.$ctx.nodeInfo
	DOM.append(tempFragment, element, placeholder)
}

const handleMountingPoint = (element, tempFragment) => {
	if (element.nodeType !== 3) return

	const mountingPoint = mountingPointStore.get(element)
	if (!mountingPoint) return

	const {node} = mountingPoint
	if (!node) return
	if (array_helper/* default.isArray */.Z.isArray(node)) {
		for (let i of node) appendNode(i, tempFragment)
	} else appendNode(node, tempFragment)
}

DOM.before = (node, ...nodes) => {
	const tempFragment = DOM.document.createDocumentFragment()
	inform()
	for (let i of nodes) {
		if (i instanceof global_shared.EFBaseComponent) {
			i.$mount({target: tempFragment})
		} else if (fast_instance_of(i, EFFragment)) i.appendTo(tempFragment)
		else {
			DOM.Node.prototype.appendChild.call(tempFragment, i)
			handleMountingPoint(i, tempFragment)
		}
	}
	DOM.Node.prototype.insertBefore.call(node.parentNode, tempFragment, node)
	exec()
}

DOM.after = (node, ...nodes) => {
	const tempFragment = DOM.document.createDocumentFragment()
	inform()
	for (let i of nodes) {
		if (i instanceof global_shared.EFBaseComponent) {
			i.$mount({target: tempFragment})
		} else if (fast_instance_of(i, EFFragment)) i.appendTo(tempFragment)
		else DOM.Node.prototype.appendChild.call(tempFragment, i)
	}
	if (node.nextSibling) DOM.Node.prototype.insertBefore.call(node.parentNode, tempFragment, node.nextSibling)
	else DOM.Node.prototype.appendChild.call(node.parentNode, tempFragment)
	exec()
}

DOM.append = (node, ...nodes) => {
	// Handle fragment
	if (fast_instance_of(node, EFFragment)) return node.append(...nodes)
	// Handle EFComponent
	if (node instanceof global_shared.EFBaseComponent) {
		if (!(array_helper/* default.isArray */.Z.isArray(node.children))) {
			if (false) {}
			return
		}

		inform()
		for (let i of nodes) {
			i = global_shared.toEFComponent(i)
			node.children.push(i)
		}
		exec()

		return
	}

	if ([1,9,11].indexOf(node.nodeType) === -1) return
	const tempFragment = DOM.document.createDocumentFragment()
	for (let i of nodes) {
		if (fast_instance_of(i, EFFragment)) i.appendTo(tempFragment)
		else if (i instanceof DOM.Node) {
			DOM.Node.prototype.appendChild.call(tempFragment, i)
			handleMountingPoint(i, tempFragment)
		} else if (i instanceof global_shared.EFBaseComponent) {
			i.$mount({target: tempFragment})
		}
	}
	DOM.Node.prototype.appendChild.call(node, tempFragment)
}

DOM.remove = (node) => {
	if (fast_instance_of(node, EFFragment)) node.remove()
	else if (node instanceof global_shared.EFBaseComponent) node.$umount()
	else DOM.Node.prototype.removeChild.call(node.parentNode, node)
}

// addClass(node, className) {
// 	const classes = className.split(' ')
// 	node.classList.add(...classes)
// },

// removeClass(node, className) {
// 	const classes = className.split(' ')
// 	node.classList.remove(...classes)
// },

// toggleClass(node, className) {
// 	const classes = className.split(' ')
// 	const classArr = node.className.split(' ')
// 	for (let i of classes) {
// 		const classIndex = classArr.indexOf(i)
// 		if (classIndex > -1) {
// 			classArr.splice(classIndex, 1)
// 		} else {
// 			classArr.push(i)
// 		}
// 	}
// 	node.className = classArr.join(' ').trim()
// },

// replaceWith(node, newNode) {
// 	const parent = node.parentNode
// 	if (parent) DOM.Node.prototype.replaceChild.call(parent, newNode, node)
// },

// swap(node, newNode) {
// 	const nodeParent = node.parentNode
// 	const newNodeParent = newNode.parentNode
// 	const nodeSibling = node.nextSibling
// 	const newNodeSibling = newNode.nextSibling
// 	if (nodeParent && newNodeParent) {
// 		DOM.Node.prototype.insertBefore.call(nodeParent, newNode, nodeSibling)
// 		DOM.Node.prototype.insertBefore.call(newNodeParent, node, newNodeSibling)
// 	}
// },

// prepend(node, ...nodes) {
// 	if ([1,9,11].indexOf(node.nodeType) === -1) {
// 		return
// 	}
// 	const tempFragment = DOM.document.createDocumentFragment()
// 	nodes.reverse()
// 	for (let i of nodes) {
// 		DOM.Node.prototype.appendChild.call(tempFragment, i)
// 	}
// 	if (node.firstChild) {
// 		DOM.Node.prototype.insertBefore.call(node, tempFragment, node.firstChild)
// 	} else {
// 		DOM.Node.prototype.appendChild.call(node, tempFragment)
// 	}
// },

// appendTo(node, newNode) {
// 	DOM.Node.prototype.appendChild.call(newNode, node)
// },

// prependTo(node, newNode) {
// 	if (newNode.firstChild) {
// 		DOM.Node.prototype.insertBefore.call(newNode, node, node.firstChild)
// 	} else {
// 		DOM.Node.prototype.appendChild.call(newNode, node)
// 	}
// },

// empty(node) {
// 	node.innerHTML = ''
// },

// eslint-disable-next-line no-empty-function
const noop = () => {}

const setDOMImpl = (impl) => {
	polyfills_assign(DOM, impl)

	DOM.passiveSupported = false
	DOM.onceSupported = false

	try {
		const options = Object.create({}, {
			passive: {
				get: () => {
					DOM.passiveSupported = true
				}
			},
			once: {
				get: () => {
					DOM.onceSupported = true
				}
			}
		})
		DOM.document.addEventListener('__ef_event_option_test__', noop, options)
		DOM.document.removeEventListener('__ef_event_option_test__', noop, options)
	} catch (e) {

		/* do nothing */
	}
}

if (is_browser) setDOMImpl({Node, document})



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/event-helper.js


/**
 * @typedef {{bubbles: boolean, cancelable: boolean}} EFEventOptions
 */

/* Get new events that works in all target browsers
 * though a little bit old-fashioned
 */
const getEvent = (name, {bubbles, cancelable} = {
	bubbles: false,
	cancelable: false
}) => {
	const event = DOM.document.createEvent('CustomEvent')
	event.initEvent(name, bubbles, cancelable)
	return event
}

/* harmony default export */ const event_helper = (getEvent);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/literals-mix.js
const mixStr = (strs, ...exprs) => {
	let string = ''
	for (let i = 0; i < exprs.length; i++) {
		if (typeof exprs[i] === 'undefined') string += strs[i]
		else string += (strs[i] + exprs[i])
	}
	return string + strs[strs.length - 1]
}

const getVal = ({dataNode, _key}) => {
	const data = dataNode[_key]
	if (typeof data === 'undefined') return ''
	return data
}

const mixVal = (strs, ...exprs) => {
	if (!strs) return getVal(exprs[0])
	const template = [strs]
	template.push(...exprs.map(getVal))
	return mixStr(...template)
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/namespaces.js
const namespaces = {
	xml: 'http://www.w3.org/XML/1998/namespace',
	html: 'http://www.w3.org/1999/xhtml',
	svg: 'http://www.w3.org/2000/svg',
	math: 'http://www.w3.org/1998/Math/MathML',
	xlink: 'http://www.w3.org/1999/xlink'
}

/**
 * Get declared namespaceURI using it's prefix
 * @param {string} prefix - Perfix for the namespaceURI
 * @returns {string} NamespaceURI defined by the prefix
 */
const getNamespace = (prefix) => {
	if (namespaces[prefix]) return namespaces[prefix]

	throw new Error(`[EF] Namespace "${prefix}" has not been declared.`)
}

/**
 * Declare namespaceURI with a prefix
 * @param {string} prefix - Perfix for the namespaceURI
 * @param {string} namespaceURI - NamespaceURI associated with the prefix
 * @returns {void}
 */
const declareNamespace = (prefix, namespaceURI) => {
	if (namespaces[prefix]) {
		throw new Error(`[EF] Namespace "${prefix}" has already been declared as "${namespaces[prefix]}".`)
	}

	namespaces[prefix] = namespaceURI
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/element-creator.js











const typeValid = obj => ['number', 'boolean', 'string'].indexOf(typeof obj) > -1

const createByTag = ({tagName, tagContent, attrs, namespace}) => {
	const tagType = typeof tagContent

	switch (tagType) {
		case 'string': {
			const creationOption = {}
			if (tagName === tagContent && attrs && attrs.is && typeof attrs.is === 'string') creationOption.is = attrs.is
			// if (tagContent.indexOf(':') > -1) [, tagContent] = tagContent.split(':')
			// Namespaced
			if (namespace) return DOM.document.createElementNS(namespace, tagContent, creationOption)
			// Then basic HTMLElements
			return DOM.document.createElement(tagContent, creationOption)
		}
		case 'function': {
			// Then custom component or class based custom component
			return new tagContent()
		}
		default: {
			// Then overriden basic element
			if (tagContent.tag) tagName = tagContent.tag
			// if (tagName.indexOf(':') > -1) [, tagName] = tagName.split(':')
			if (namespace) {
				return DOM.document.createElementNS(namespace, tagName, {is: tagContent.is})
			}

			return DOM.document.createElement(tagName, {is: tagContent.is})
		}
	}
}

const getElement = ({tagName, tagContent, attrs, ref, refs, namespace}) => {
	const element = createByTag({tagName, tagContent, attrs, namespace})
	if (ref) Object.defineProperty(refs, ref, {
		value: element,
		enumerable: true
	})
	return element
}

const regTmpl = ({val, ctx, handlers, subscribers, innerData, handler}) => {
	if (array_helper/* default.isArray */.Z.isArray(val)) {
		const [strs, ...exprs] = val
		const tmpl = [strs]

		const _handler = () => handler(mixVal(...tmpl))

		tmpl.push(...exprs.map((item) => {
			const {dataNode, handlerNode, _key} = binding({bind: item, ctx, handlers, subscribers, innerData})
			handlerNode.push(_handler)
			return {dataNode, _key}
		}))

		return _handler
	}
	return () => val
}

const applyEventListener = ({element, custom, handler, trigger: {l, s, i, p, h, a, c, t, u, e, o, k}}) => {

	/*
	 *  l: listener                 : string
	 *  s: stopPropagation          : number/undefined
	 *  i: stopImmediatePropagation : number/undefined
	 *  p: preventDefault           : number/undefined
	 *  h: shiftKey                 : number/undefined
	 *  a: altKey                   : number/undefined
	 *  c: ctrlKey                  : number/undefined
	 *  t: metaKey                  : number/undefined
	 *  u: capture                  : number/undefined
	 *  e: passive                  : number/undefined
	 *  o: once                     : number/undefined
	 *  k: keyCodes                 : array<number>/undefined
	 */

	const checkEventProps = (event) => {
		if (!!h !== !!event.shiftKey ||
			!!a !== !!event.altKey ||
			!!c !== !!event.ctrlKey ||
			!!t !== !!event.metaKey ||
			(k && k.indexOf(event.which) === -1)) return false
		return true
	}

	const handleStopOptions = (event) => {
		if (s) event.stopPropagation()
		if (i) event.stopImmediatePropagation()
	}

	let eventOptions = !!u

	let baseEventHandler = (event) => {
		handleStopOptions(event)
		if (p) event.preventDefault()
		handler(event)
	}

	let eventHandler = (event) => {
		if (!checkEventProps(event)) return
		baseEventHandler(event)
	}

	const makePassiveEventHandler = () => {
		baseEventHandler = (event) => {
			handleStopOptions(event)
			setTimeout(() => handler(event), 0)
		}
		eventHandler = (event) => {
			if (!checkEventProps(event)) return
			baseEventHandler(event)
		}
	}

	const makeOnceEventHandler = () => {
		const removeListener = custom && '$off' || 'removeEventListener'
		eventHandler = (event) => {
			if (!checkEventProps(event)) return
			element[removeListener](l, eventHandler, eventOptions)
			baseEventHandler(event)
		}
	}

	if (e || o) {
		if (DOM.passiveSupported || DOM.onceSupported) {
			eventOptions = {
				capture: !!u
			}

			if (e === 0 && DOM.passiveSupported) {
				eventOptions.passive = false
			} else if (e) {
				if (DOM.passiveSupported) eventOptions.passive = true
				else makePassiveEventHandler()
			}

			if (o) {
				if (DOM.onceSupported) eventOptions.once = true
				else makeOnceEventHandler(eventOptions)
			}

		} else {
			if (e) makePassiveEventHandler()
			if (o) makeOnceEventHandler()
		}
	}

	const addListener = custom && '$on' || 'addEventListener'
	element[addListener](l, eventHandler, eventOptions)
}

const addValListener = ({ctx, trigger, updateLock, handlers, subscribers, innerData, element, lastNode, key, expr, custom}) => {
	const addListener = custom && '$on' || 'addEventListener'
	const {parentNode, _key} = binding({bind: expr, ctx, handlers, subscribers, innerData})

	const handler = () => {
		updateLock.locked = true
		inform()
		parentNode[_key] = lastNode[key]
		exec()
	}

	if (trigger) {
		applyEventListener({element, custom, handler, trigger})
	} else if (key === 'value') {
		// Listen to input, keyup and change events in order to work in most browsers.
		element[addListener]('input', handler, true)
		element[addListener]('keyup', handler, true)
		element[addListener]('change', handler, true)
	} else {
		const dispatch = custom && '$dispatch' || 'dispatchEvent'
		element[addListener]('change', () => {
			// Trigger change to the element it-self
			element[dispatch](event_helper('__ef_change_event__'), {bubbles: true, canceoable: false})
			if (element.tagName === 'INPUT' && element.type === 'radio' && element.name !== '') {
				// Trigger change to the the same named radios
				const radios = DOM.document.querySelectorAll(`input[name=${element.name}][type=radio]`)
				if (radios) {
					const selected = array_helper/* default.copy */.Z.copy(radios)
					array_helper/* default.remove */.Z.remove(selected, element)

					/* Event triggering could cause unwanted render triggers
					 * no better ways came up at the moment
					 */
					for (let i of selected) i.dispatchEvent(event_helper('__ef_change_event__'))
				}
			}
		}, true)
		// Use custom event to avoid loops and conflicts
		element[addListener]('__ef_change_event__', handler)
	}
}

const getAttrHandler = ({element, key, custom, ctx}) => {
	// Pass directly to custom component
	if (custom) return (val) => {
		element[key] = val
	}

	// Beautify class name
	if (key === 'class') return (val) => {
		val = `${val}`.replace(/\s+/g, ' ').trim()
		// Remove attribute when value is empty
		if (!val) return element.removeAttribute(key)
		element.setAttribute(key, val)
	}

	// Handle namespace
	if (key.indexOf(':') > -1) {
		const [prefix] = key.split(':')
		const namespace = ctx.localNamespaces[prefix] || getNamespace(prefix)
		return (val) => {
			// Remove attribute when value is empty
			if (val === '') return element.removeAttributeNS(namespace, key)
			element.setAttributeNS(namespace, key, val)
		}
	}

	return (val) => {
		// Remove attribute when value is empty
		if (val === '') return element.removeAttribute(key)
		element.setAttribute(key, val)
	}
}

const addAttr = ({element, attr, key, ctx, handlers, subscribers, innerData, custom}) => {
	if (typeValid(attr)) {
		if (custom) {
			if (attr === '') element[key] = true
			else element[key] = attr
			return
		}
		// Do not set or update `is` again
		if (key === 'is') return
		// Handle namespaces
		if (key.indexOf(':') > -1) {
			const [prefix] = key.split(':')
			if (prefix !== 'xmlns') return element.setAttributeNS(ctx.localNamespaces[prefix] || getNamespace(prefix), key, attr)
		}
		return element.setAttribute(key, attr)
	}

	const handler = getAttrHandler({element, key, custom, ctx})
	queue([regTmpl({val: attr, ctx, handlers, subscribers, innerData, handler})])
}

const addProp = ({element, propPath, value, trigger, updateOnly, ctx, handlers, subscribers, innerData, custom}) => {
	const keyPath = array_helper/* default.copy */.Z.copy(propPath)
	const lastKey = keyPath.pop()
	if (custom) keyPath.unshift('$data')
	const lastNode = resolvePath(keyPath, element)
	if (typeValid(value)) lastNode[lastKey] = value
	else {
		const updateLock = {locked: false}
		let handler = (val) => {
			if (!updateLock.locked && lastNode[lastKey] !== val) {
				lastNode[lastKey] = val
			}
			updateLock.locked = false
		}

		if (updateOnly) handler = () => {
			updateLock.locked = false
		}
		const _handler = regTmpl({val: value, ctx, handlers, subscribers, innerData, handler})
		if (trigger ||
			(propPath.length === 1 && (lastKey === 'value' || lastKey === 'checked')) &&
			!value[0]) addValListener({ctx, trigger, updateLock, handlers, subscribers, innerData, element, lastNode, key: lastKey, expr: value[1], custom})
		queue([_handler])
	}
}

const rawHandler = val => val

const addEvent = ({element, trigger, ctx, handlers, subscribers, innerData, custom}) => {

	/*
	 *  m: method                   : string
	 *  v: value                    : string/array/undefined
	 */
	const {m, v} = trigger
	const _handler = regTmpl({val: v, ctx, handlers, subscribers, innerData, handler: rawHandler})

	const callEventHandler = (event) => {
		if (ctx.methods[m]) ctx.methods[m]({e: event, event, value: _handler(), state: ctx.state})
		else if (false) {}
	}

	applyEventListener({element, custom, handler: callEventHandler, trigger})
}

const createElement = ({info, ctx, innerData, refs, handlers, subscribers, namespace, fragment, custom}) => {
	if (fragment) return new EFFragment()

	/*
	 *  t: tag           : class | string | int, 0 means fragment
	 *  a: attr          : object
	 *  p: prop          : object
	 *  e: event trigger : array
	 *  r: reference     : string
	 */
	const {t, a, p, e, r} = info
	const tagName = t
	const tagContent = ctx.scope[t] || t
	const element = getElement({tagName, tagContent, attrs: a, ref: r, refs, namespace})
	if (a) for (let key in a) addAttr({element, custom, attr: a[key], key, ctx, handlers, subscribers, innerData})
	if (p) for (let [propPath, value, trigger, updateOnly] of p) addProp({element, custom, value, propPath, trigger, updateOnly, ctx, handlers, subscribers, innerData})
	if (e) for (let trigger of e) addEvent({element, custom, trigger, ctx, handlers, subscribers, innerData})

	return element
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/dom-arr-helper.js





const DOMARR = {
	empty() {
		inform()
		for (let i of array_helper/* default.copy */.Z.copy(this)) i.$destroy()
		exec()
		array_helper/* default.empty */.Z.empty(this)
	},
	clear() {
		inform()
		for (let i of array_helper/* default.copy */.Z.copy(this)) i.$umount()
		exec()
		array_helper/* default.empty */.Z.empty(this)
	},
	pop() {
		if (this.length === 0) return
		const poped = array_helper/* default.pop */.Z.pop(this)
		poped.$umount()
		return poped
	},
	push({ctx, key, anchor}, ...items) {
		items = items.map(global_shared.toEFComponent)
		const elements = []
		inform()
		for (let i of items) array_helper/* default.push */.Z.push(elements, i.$mount({parent: ctx.state, key}))
		if (this.length === 0) DOM.after(anchor, ...elements)
		else DOM.after(this[this.length - 1].$ctx.nodeInfo.placeholder, ...elements)
		exec()
		return array_helper/* default.push */.Z.push(this, ...items)
	},
	remove(item) {
		if (this.indexOf(item) === -1) return
		item.$umount()
		return item
	},
	reverse({ctx, key, anchor}) {
		if (this.length === 0) return this
		const tempArr = array_helper/* default.copy */.Z.copy(this)
		const elements = []
		inform()
		for (let i = tempArr.length - 1; i >= 0; i--) {
			tempArr[i].$umount()
			array_helper/* default.push */.Z.push(elements, tempArr[i].$mount({parent: ctx.state, key}))
		}
		array_helper/* default.push */.Z.push(this, ...array_helper/* default.reverse */.Z.reverse(tempArr))
		DOM.after(anchor, ...elements)
		exec()
		return this
	},
	shift() {
		if (this.length === 0) return
		const shifted = array_helper/* default.shift */.Z.shift(this)
		shifted.$umount()
		return shifted
	},
	sort({ctx, key, anchor}, fn) {
		if (this.length === 0) return this
		const sorted = array_helper/* default.copy */.Z.copy(array_helper/* default.sort */.Z.sort(this, fn))
		const elements = []
		inform()
		for (let i of sorted) {
			i.$umount()
			array_helper/* default.push */.Z.push(elements, i.$mount({parent: ctx.state, key}))
		}
		array_helper/* default.push */.Z.push(this, ...sorted)
		DOM.after(anchor, ...elements)
		exec()
		return this
	},
	splice({ctx, key, anchor}, ...args) {
		if (this.length === 0) return this
		const spliced = array_helper/* default.splice */.Z.splice(array_helper/* default.copy */.Z.copy(this), ...args)
		inform()
		for (let i of spliced) i.$umount()
		if (args[2]) {
			const idx = args[0]
			if (idx > 0) anchor = this[idx].$ctx.nodeInfo.placeholder
			const insertItem = global_shared.toEFComponent(args[2])
			insertItem.$mount({parent: ctx.state, key})
			DOM.after(anchor, insertItem.$ctx.nodeInfo.placeholder)
			array_helper/* default.splice */.Z.splice(this, idx, 0, insertItem)
		}
		exec()
		return spliced
	},
	unshift({ctx, key, anchor}, ...items) {
		if (this.length === 0) return this.push(...items).length
		items = items.map(global_shared.toEFComponent)
		const elements = []
		inform()
		for (let i of items) array_helper/* default.push */.Z.push(elements, i.$mount({parent: ctx.state, key}))
		DOM.after(anchor, ...elements)
		exec()
		return array_helper/* default.unshift */.Z.unshift(this, ...items)
	}
}

const defineArr = (arr, info) => {
	Object.defineProperties(arr, {
		empty: {value: DOMARR.empty},
		clear: {value: DOMARR.clear},
		pop: {value: DOMARR.pop},
		push: {value: DOMARR.push.bind(arr, info)},
		remove: {value: DOMARR.remove},
		reverse: {value: DOMARR.reverse.bind(arr, info)},
		shift: {value: DOMARR.shift},
		sort: {value: DOMARR.sort.bind(arr, info)},
		splice: {value: DOMARR.splice.bind(arr, info)},
		unshift: {value: DOMARR.unshift.bind(arr, info)}
	})
	return arr
}

/* harmony default export */ const dom_arr_helper = (defineArr);

// EXTERNAL MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/type-of.js
var type_of = __webpack_require__(89918);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/mount-options.js
/**
 * @typedef {string} EFMountOption
 * @typedef {{BEFORE: EFMountOption, AFTER: EFMountOption, APPEND: EFMountOption, REPLACE: EFMountOption}} EFMountConfig
 */

/**
 * @type {EFMountConfig}
 */
const mountOptions = {
	BEFORE: 'before',
	AFTER: 'after',
	APPEND: 'append',
	REPLACE: 'replace'
}

/* harmony default export */ const mount_options = (mountOptions);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/creator.js












const svgNS = getNamespace('svg')
const mathNS = getNamespace('math')
const htmlNS = getNamespace('html')

const nullComponent = Object.create(null)

const checkDestroyed = (state) => {
	if (!state.$ctx) throw new Error('[EF] This component has been destroyed!')
}

const bindTextNode = ({node, ctx, handlers, subscribers, innerData, element}) => {
	// Data binding text node
	const textNode = DOM.document.createTextNode('')
	const { dataNode, handlerNode, _key } = binding({bind: node, ctx, handlers, subscribers, innerData})
	const handler = () => {
		const value = dataNode[_key]
		if (typeof value === 'undefined') {
			textNode.textContent = ''
			return
		}
		textNode.textContent = value
	}
	handlerNode.push(handler)
	queue([handler])

	// Append element to the component
	DOM.append(element, textNode)
}

const updateMountingNode = ({ctx, key, value}) => {
	const {children} = ctx
	const child = children[key]
	const {anchor, node} = child
	if (node === value) return

	value = global_shared.toEFComponent(value)

	inform()
	// Update component
	if (node) {
		if (value === nullComponent) value = null
		else node.$umount()
	}
	// Update stored value
	child.node = value
	if (value) value.$mount({target: anchor, parent: ctx.state, option: mount_options.BEFORE, key})
	exec()
}

const updateMountingList = ({ctx, key, value}) => {
	const {children} = ctx
	const {anchor, node} = children[key]
	if (array_helper/* default.equals */.Z.equals(node, value)) return
	if (value) value = array_helper/* default.copy */.Z.copy(value)
	else value = []
	const fragment = DOM.document.createDocumentFragment()
	// Update components
	inform()
	if (node) {
		node.clear()
		for (let item of value) {
			item = global_shared.toEFComponent(item)

			if (item.$ctx.nodeInfo.parent) item.$umount()
			DOM.append(fragment, item.$mount({parent: ctx.state, key}))
		}
	} else for (let item of value) DOM.append(fragment, item.$mount({parent: ctx.state, key}))
	// Update stored value
	node.length = 0
	array_helper/* default.push */.Z.push(node, ...value)
	// Append to current component
	DOM.after(anchor, fragment)
	exec()
}

const mountingPointUpdaters = [
	updateMountingNode,
	updateMountingList
]

const applyMountingPoint = (type, key, tpl) => {
	Object.defineProperty(tpl.prototype, key, {
		get() {
			if (false) {}
			return this.$ctx.children[key].node
		},
		set(value) {
			if (false) {}
			const ctx = this.$ctx
			mountingPointUpdaters[type]({ctx, key, value})
		},
		enumerable: true
	})
}

const bindMountingNode = ({ctx, key, anchor}) => {
	const {children, isFragment} = ctx
	children[key] = {anchor}
	mountingPointStore.set(anchor, children[key])
	if (isFragment) DOM.append(ctx.safeZone, anchor)
}

const bindMountingList = ({ctx, key, anchor}) => {
	const {children, isFragment} = ctx
	children[key] = {
		node: dom_arr_helper([], {ctx, key, anchor}),
		anchor
	}
	mountingPointStore.set(anchor, children[key])
	if (isFragment) DOM.append(ctx.safeZone, anchor)
}

// Walk through the AST to perform proper actions
const resolveAST = ({node, nodeType, element, ctx, innerData, refs, handlers, subscribers, namespace, create}) => {
	if (node instanceof DOM.Node) {
		DOM.append(element, node)
		return
	}
	switch (nodeType) {
		// Static text node
		case 'string': {
			DOM.append(element, DOM.document.createTextNode(node))
			break
		}
		// Child element or a dynamic text node
		case 'array': {
			// Recursive call for child element
			if ((0,type_of/* default */.Z)(node[0]) === 'object') DOM.append(element, create({node, ctx, innerData, refs, handlers, subscribers, namespace}))
			// Dynamic text node
			else bindTextNode({node, ctx, handlers, subscribers, innerData, element})
			break
		}
		// Mounting points
		case 'object': {
			const anchor = DOM.document.createTextNode('')
			// Single node mounting point
			if (node.t === 0) bindMountingNode({ctx, key: node.n, anchor})
			// Multi node mounting point
			else bindMountingList({ctx, key: node.n, anchor})
			// Append anchor
			if (false) {}
			DOM.append(element, anchor)
			if (false) {}
			break
		}
		default:
	}
}

// Create elements based on description from AST
/* eslint {"complexity": "off"} */
const create = ({node, ctx, innerData, refs, handlers, subscribers, namespace}) => {
	const [info, ...childNodes] = node
	const previousNamespace = namespace

	let tagName = info.t
	let isLocalPrefix = false

	const fragment = tagName === 0
	const custom = Object.isPrototypeOf.call(global_shared.EFBaseComponent, ctx.scope[tagName] || tagName)

	// Check if element needs a namespace
	if (!fragment && !custom) {
		if (ctx.scope[tagName]) {
			const scoped = ctx.scope[tagName]
			if (typeof scoped === 'string') tagName = scoped
			else if (scoped.tag) {
				tagName = scoped.tag
				if (scoped.namespaceURI) namespace = scoped.namespaceURI
			}
		}
		if (tagName.indexOf(':') > -1) {
			const [prefix, unprefixedTagName] = tagName.split(':')
			if (ctx.localNamespaces[prefix]) {
				namespace = ctx.localNamespaces[prefix]
				isLocalPrefix = true
			} else {
				namespace = getNamespace(prefix)
			}
			tagName = unprefixedTagName
		} else if (info.a && info.a.xmlns && typeValid(info.a.xmlns)) {
			namespace = info.a.xmlns
		} else if (!namespace) {
			tagName = tagName.toLowerCase()
			switch (tagName) {
				case 'svg': {
					namespace = svgNS
					break
				}
				case 'math': {
					namespace = mathNS
					break
				}
				default:
			}
		}
	}

	if (namespace === htmlNS) namespace = ''

	// First create an element according to the description
	const element = createElement({info, ctx, innerData, refs, handlers, subscribers, namespace, fragment, custom})
	if (fragment && "production" !== 'production') {}

	// Leave SVG mode if tag is `foreignObject`
	if (namespace && namespace === svgNS && ['foreignobject', 'desc', 'title'].indexOf(tagName.toLowerCase()) > -1) namespace = ''

	// restore previous namespace if namespace is defined locally
	if (isLocalPrefix) namespace = previousNamespace

	// Append child nodes
	for (let node of childNodes) {
		if (node instanceof global_shared.EFBaseComponent) node.$mount({target: element})
		else resolveAST({node, nodeType: (0,type_of/* default */.Z)(node), element, ctx, innerData, refs, handlers, subscribers, namespace, create})
	}
	if (fragment && "production" !== 'production') {}

	return element
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/map-attrs.js
const getGetter = ({base, key}, {checkTrue, get, set}) => {
	if (get) {
		if (!set) throw new Error('[EF] Setter must be defined when getter exists')
		return get
	}

	if (checkTrue) return function() {
		return checkTrue(base(this)[key], this)
	}

	return function() {
		return base(this)[key]
	}
}

const getSetter = ({base, key}, {checkTrue, trueVal, falseVal, get, set}) => {
	if (set) {
		if (!get) throw new Error('[EF] Getter must be defined when setter exists')
		return set
	}

	if (checkTrue) return function(val) {
		const baseNode = base(this)
		const _trueVal = trueVal
		const _falseVal = falseVal

		if (typeof trueVal !== 'function') trueVal = () => _trueVal
		if (typeof falseVal !== 'function') falseVal = () => _falseVal

		if (val) baseNode[key] = trueVal(this)
		else baseNode[key] = falseVal(this)
	}

	return function(val) {
		base(this)[key] = val
	}
}

const defaultRoot = state => state.$data
const getBase = (root) => {
	if (!root) return defaultRoot
	if (typeof root === 'function') return root
	if (typeof root === 'string') root = root.split('.')
	return (base) => {
		for (let key of root) base = base[key]
		return base
	}
}

/**
 * @typedef {import('./renderer.js').EFBaseClass} EFBaseClass
 */

/**
 * Definition of an attribute mapping
 * @typedef {Object} AttrDef
 * @property {string=} key - key to be accessed on base, default to `attr`
 * @property {Function=} base - a function that returns the base of the key, default returns $data
 * @property {bool=} checkTrue - a function returns true or false based on input value
 * @property {*=} trueVal - value when true, only used when checkTrue is set
 * @property {*=} falseVal - value when false, only used when checkTrue is set
 * @property {Function=} get - getter, will ignore all other settings except set
 * @property {Function=} set - setter, will ignore all other settings except get
 */

/**
 * Data to attribute mapping helper
 * @template {EFBaseClass} T
 * @param {T} tpl - Component class to be mapped
 * @param {Object.<string,AttrDef>} attrMap - Attributes to be mapped
 * @returns {T} - Mapped component class
 */
const mapAttrs = (tpl, attrMap) => {
	for (let attr in attrMap) {
		const options = attrMap[attr]

		const base = getBase(options.base)
		const key = options.key || attr

		const basicProperty = {base, key}

		const get = getGetter(basicProperty, options)
		const set = getSetter(basicProperty, options)

		Object.defineProperty(tpl.prototype, attr, {
			get,
			set,
			enumerable: true,
			configurable: false
		})
	}

	return tpl
}

/* harmony default export */ const map_attrs = (mapAttrs);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/renderer.js

















const unsubscribe = (pathStr, fn, subscribers) => {
	const subscriberNode = resolveSubscriber(pathStr, subscribers)
	array_helper/* default.remove */.Z.remove(subscriberNode, fn)
}

/**
 * @typedef {Array} EFAST
 * @typedef {Object.<string,EFBaseComponent>} EFTemplateScope
 */

/**
 * @typedef {Object} EFSubscriberHandlerArg
 * @property {EFBaseComponent} ctx - The component who calls the handler
 * @property {*} value - Value been subscribed
 */

/**
 * @event Event
 */

/**
 * @typedef {Object} EFEventHandlerArg
 * @property {EFBaseComponent} ctx - The component who calls the handler
 * @property {*} value - Value been passed to the event handler
 * @property {Event} event - Event object that has been triggered
 */

/**
 * @typedef {Function} EFSubscriberHandlerMethod
 * @param {EFSubscriberHandlerArg} arg
 * @returns {void}
 */

/**
 * @typedef {Function} EFEventHandlerMethod
 * @param {EFEventHandlerArg} arg
 * @returns {void}
 */

/**
 * The very basic ef component
 * @class EFBaseComponent
 * @param {EFAST} ast - ast for the component
 * @param {EFTemplateScope} scope - scope which contains custom components
 * @private {Object} $ctx - Inner component data, DO NOT TOUCH
 * @property {Object} $data - Data on component
 * @property {Object.<string,EFEventHandlerMethod>} $methods - Methods on component
 * @property {Object.<string,(EFBaseComponent|Node)>} $refs - References on component
 */
const renderer_EFBaseComponent = class {

	/**
	 * Create an EFBaseComponent with ef AST
	 * @param {EFAST} ast - ast for the component
	 * @param {EFTemplateScope=} scope - scope which contains custom components
	 */
	constructor(ast, scope = {}) {
		const children = {}
		const refs = {}
		const data = {}
		const innerData = {}
		const methods = {}
		const handlers = {}
		const subscribers = {}
		const nodeInfo = {
			placeholder: null,
			replace: [],
			parent: null,
			key: null
		}

		/* Detatched components will be put in the safe zone.
		 * Split safe zone to each component in order to make
		 * the component memory recycleable when lost reference
		 */
		const safeZone = DOM.document.createDocumentFragment()

		if (true) nodeInfo.placeholder = DOM.document.createTextNode('')
		else {}

		const mount = () => {
			if (nodeInfo.replace.length > 0) {
				for (let i of nodeInfo.replace) DOM.remove(i)
				array_helper/* default.empty */.Z.empty(nodeInfo.replace)
			}
			DOM.before(nodeInfo.placeholder, nodeInfo.element)
		}

		const ctx = {
			scope, mount, refs, data, innerData, methods,
			handlers, subscribers, nodeInfo, safeZone,
			children, state: this, isFragment: ast[0].t === 0,
			localNamespaces: this.constructor.__local_namespaces
		}

		Object.defineProperty(this, '$ctx', {
			value: ctx,
			enumerable: false,
			configurable: true
		})

		inform()

		nodeInfo.element = create({node: ast, ctx, innerData, refs, handlers, subscribers, namespace: ''})
		DOM.append(safeZone, nodeInfo.placeholder)
		queueDom(mount)
		exec()
	}

	get $data() {
		if (false) {}
		return this.$ctx.data
	}

	set $data(newData) {
		if (false) {}
		inform()
		polyfills_assign(this.$ctx.data, newData)
		exec()
	}

	get $methods() {
		if (false) {}
		return this.$ctx.methods
	}


	set $methods(newMethods) {
		if (false) {}
		this.$ctx.methods = newMethods
	}

	get $refs() {
		if (false) {}
		return this.$ctx.refs
	}

	/**
	 * @typedef {import('../mount-options.js').EFMountConfig} EFMountConfig
	 */

	/**
	 * Mount component to a specitic position
	 * @param {EFMountConfig} config - Mount contigurations
	 * @returns {number} - Render count down
	 */
	$mount({target, option, parent, key}) {
		if (false) {}
		const { nodeInfo, mount } = this.$ctx
		if (typeof target === 'string') target = document.querySelector(target)

		inform()
		if (nodeInfo.parent) {
			this.$umount()
			if (false) {}
		}

		if (!parent) parent = target
		if (!key) key = '__DIRECTMOUNT__'
		nodeInfo.parent = parent
		nodeInfo.key = key
		queueDom(mount)

		if (!target) {
			exec()
			return nodeInfo.placeholder
		}

		switch (option) {
			case mount_options.BEFORE: {
				DOM.before(target, nodeInfo.placeholder)
				break
			}
			case mount_options.AFTER: {
				DOM.after(target, nodeInfo.placeholder)
				break
			}
			case mount_options.REPLACE: {
				DOM.before(target, nodeInfo.placeholder)
				nodeInfo.replace.push(target)
				break
			}
			case mount_options.APPEND:
			default: {
				// Parent is EFFragment should only happen when using jsx
				if (fast_instance_of(parent, EFFragment)) DOM.append(target, nodeInfo.element)
				else DOM.append(target, nodeInfo.placeholder)
			}
		}
		return exec()
	}

	/**
	 * @returns {number} - Render count down
	 */
	$umount() {
		if (false) {}
		const { nodeInfo, safeZone, mount } = this.$ctx
		const { parent, key } = nodeInfo
		nodeInfo.parent = null
		nodeInfo.key = null

		inform()
		if (parent) {
			if (key !== '__DIRECTMOUNT__') {
				if (parent[key]) {
					if (array_helper/* default.isArray */.Z.isArray(parent[key])) {
						// Remove self from parent list mounting point
						array_helper/* default.remove */.Z.remove(parent[key], this)
					} else parent[key] = nullComponent
				}
			// Else Remove elements from fragment parent
			} else if (fast_instance_of(parent, EFFragment)) parent.$ctx.nodeInfo.element.removeChild(nodeInfo.element)
		}
		DOM.append(safeZone, nodeInfo.placeholder)
		queueDom(mount)
		return exec()
	}

	/**
	 * Subscribe a value's changing
	 * @param {string} pathStr - Path string to the subribed value based on `$data`, splitted by `.`
	 * @param {EFSubscriberHandlerMethod} subscriber - Subscription event handler to be added
	 * @returns {void}
	 */
	$subscribe(pathStr, subscriber) {
		if (false) {}
		const ctx = this.$ctx
		const { handlers, subscribers, innerData } = ctx
		const _path = pathStr.split('.')
		const { dataNode, subscriberNode, _key } = binding({bind: [_path], ctx, handlers, subscribers, innerData})
		inform()
		// Execute the subscriber function immediately
		try {
			subscriber({state: this, value: dataNode[_key]})
			// Put the subscriber inside the subscriberNode
			subscriberNode.push(subscriber)
		} catch (e) {
			debug.error('Error caught when registering subscriber:\n', e)
		}
		exec()
	}

	/**
	 * Unsubscribe a value's changing
	 * @param {string} pathStr - Path string to the subribed value based on `$data`, splitted by `.`
	 * @param {EFSubscriberHandlerMethod} subscriber - Subscription event handler to be removed
	 * @returns {void}
	 */
	$unsubscribe(pathStr, subscriber) {
		if (false) {}
		const { subscribers } = this.$ctx
		unsubscribe(pathStr, subscriber, subscribers)
	}

	/**
	 * Update the component's state with a new state
	 * @param {Object} newState - New state to be set on this component
	 * @returns {void}
	 */
	$update(newState) {
		if (false) {}
		inform()
		legacyAssign(this, newState)
		exec()
	}

	/**
	 * Fire a custom event using an Event object on this component
	 * @param {Event} event - Event object to be dispatched on this component
	 * @returns {*} - Same as the return of Node.dispatchEvent
	 */
	$dispatch(event) {
		if (false) {}
		return this.$ctx.nodeInfo.placeholder.dispatchEvent(event)
	}

	/**
	 * @typedef {import('./utils/event-helper.js').EFEventOptions} EFEventOptions
	 */

	/**
	 * Fire a custom event using event name on this component
	 * @param {string} eventName - Name of the custom event
	 * @param {EFEventOptions} options - Event Options
	 * @returns {*} - Same as the return of Node.dispatchEvent
	 */
	$emit(eventName, options) {
		if (false) {}
		return this.$dispatch(event_helper(eventName, options))
	}

	/**
	 * Add custom event listener on this component
	 * @param {...*} args - Same as Node.addEventListener
	 * @returns {*} - Same as the return of Node.addEventListener
	 */
	$on(...args) {
		if (false) {}
		return this.$ctx.nodeInfo.placeholder.addEventListener(...args)
	}

	/**
	 * Remove custom event listener on this component
	 * @param {...*} args - Same as Node.removeEventListener
	 * @returns {*} - Same as the return of Node.removeEventListener
	 */
	$off(...args) {
		if (false) {}
		return this.$ctx.nodeInfo.placeholder.removeEventListener(...args)
	}

	/**
	 * Destroy this component
	 * @returns {number} - Render count down
	 */
	$destroy() {
		if (false) {}
		const { nodeInfo, children } = this.$ctx
		inform()
		this.$umount()
		for (let i in children) mountingPointStore["delete"](children[i].anchor)
		// Detatch all mounted components
		for (let i in this) {
			if ((0,type_of/* default */.Z)(this[i]) === 'array') this[i].clear()
			else this[i] = null
		}
		// Remove context
		delete this.$ctx
		// Push DOM removement operation to query
		queueDom(() => {
			DOM.remove(nodeInfo.element)
			DOM.remove(nodeInfo.placeholder)
		})
		// Render
		return exec()
	}
}

/**
 * @typedef {typeof EFBaseComponent} EFBaseClass
 */

const fragmentAST = [{t: 0}]

/**
 * ef component node wrapper
 * Better using this than Fragments if wrapping only HTML elements.
 * @class EFNodeWrapper
 * @extends EFBaseComponent
 * @param {...Node} nodes - Nodes to be wrapped
 * @property {Array<Node>} - Nodes that are wrapped
 */
const EFNodeWrapper = class extends renderer_EFBaseComponent {

	/**
	 * Wrap given nodes into an ef component
	 * @param  {...Node} nodes - Nodes to be wrapped
	 */
	constructor(...nodes) {
		super(fragmentAST)

		const element = this.$ctx.nodeInfo.element
		const childrenArr = element.$children
		element.append(...nodes)

		if (false) {}

		this.$ctx.elements = nodes
	}

	get $el() {
		return this.$ctx.elements
	}
}

/**
 * Component fragment wrapper
 * @class Fragment
 * @extends EFBaseComponent
 * @param {...*} children - Things to be wrapped into an ef component
 */
const renderer_Fragment = class extends (/* unused pure expression or super */ null && (renderer_EFBaseComponent)) {
	constructor(...children) {
		super([{t: 0}, ...children])
	}
}

const textFragmentAst = [{t: 0},[['text']]]

/**
 * ef component text wrapper
 * @class EFTextFragment
 * @extends EFBaseComponent
 * @param {string} text - String to be wrapped
 * @property {string} text - Text on the fragment component
 */
const EFTextFragment = class extends renderer_EFBaseComponent {

	/**
	 * Wrap given text into an ef component
	 * @param {string} text - String to be wrapped
	 */
	constructor(text) {
		inform()
		super(textFragmentAst)
		this.text = text
		exec()
	}
}
map_attrs(EFTextFragment, {text: {}})

enumerableFalse(renderer_EFBaseComponent, ['$mount', '$umount', '$subscribe', '$unsubscribe', '$update', '$dispatch', '$emit', '$on', '$off', '$destroy'])
enumerableFalse(EFNodeWrapper, ['$el'])

/**
 * Transform almost anyting into ef component
 * @template {value} T
 * @param {T} value - Things to be transformed into ef component
 * @returns {(EFNodeWrapper|EFTextFragment|T)} - Wrapped component or value it self if not supports converting
 */
const renderer_toEFComponent = (value) => {
	if (value === null || typeof value === 'undefined' || value instanceof renderer_EFBaseComponent) return value

	if (value !== nullComponent) {
		if (value instanceof DOM.Node) return new EFNodeWrapper(value)
		else if (typeof value === 'string') return new EFTextFragment(value)
		else return new EFTextFragment(JSON.stringify(value))
	}
}

global_shared.EFBaseComponent = renderer_EFBaseComponent
global_shared.toEFComponent = renderer_toEFComponent



;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/jsx-create-element.js




const flatten = (prev, item) => {
	if (ARR.isArray(item)) prev.push(...item.map(toEFComponent))
	else prev.push(toEFComponent(item))

	return prev
}

/**
 * @typedef {import('./renderer.js').EFBaseComponent} EFBaseComponent
 * @typedef {import('./renderer.js').EFBaseClass} EFBaseClass
 */

// eslint-disable-next-line valid-jsdoc
/**
 * Create ef component from JSX
 * @template {EFBaseClass} T
 * @param {(string|T)} tag - JSX tag
 * @param {Object.<string,*>} attrs - JSX attributes
 * @param  {...*} children - JSX children
 * @returns {(EFBaseComponent|T extends {new (...args: any): infer R} ? R : never)} ef component created from JSX
 */
const jsx_create_element_createElement = (tag, attrs, ...children) => {
	// Create special component for fragment
	if (tag === Fragment) return new Fragment(...children)

	// Create an instance if tag is an ef class
	if (Object.isPrototypeOf.call(EFBaseComponent, tag)) {
		if (children.length <= 0) return new tag(attrs)
		return new tag(assign({children: children.reduce(flatten, [])}, attrs || {}))
	}

	// Else return the generated basic component
	// Transform all label only attributes to ef-supported style
	const transformedAttrs = assign({}, attrs)
	for (let i in transformedAttrs) {
		if (transformedAttrs[i] === true) transformedAttrs[i] = ''
	}

	return new EFBaseComponent([
		{
			t: tag,
			a: transformedAttrs
		},
		...children
	])
}

/* harmony default export */ const jsx_create_element = ((/* unused pure expression or super */ null && (jsx_create_element_createElement)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/lib/utils/scoped-component.js


/**
 * @typedef {import('../renderer.js').EFBaseClass} EFBaseClass
 * @typedef {import('../renderer.js').EFTemplateScope} EFTemplateScope
 */

/**
 * Attach a default scope to the component class
 * @template {component} T
 * @param {EFBaseClass} component - Component class to be scoped
 * @param {EFTemplateScope} initScope - Scope to be bond on the component class
 * @returns {T} - Scoped component class
 */
const scoped = (component, initScope) => class extends component {
	constructor(state, scope = {}) {
		const _scope = assign({}, initScope)
		super(state, assign(_scope, scope))
	}
}

/* harmony default export */ const scoped_component = ((/* unused pure expression or super */ null && (scoped)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ef-core@0.14.2/node_modules/ef-core/src/ef-core.js
// Import everything












const registerNS = (attrs, component) => {
	for (let i in attrs) {
		if (i.indexOf('xmlns:') === 0) {
			const [, prefix] = i.split(':')
			component.__local_namespaces[prefix] = attrs[i]
		}
	}
}

// Iintialize components
const initComponent = (component, node) => {
	const nodeType = (0,type_of/* default */.Z)(node)
	switch (nodeType) {
		case 'array': {
			const [info, ...childNodes] = node
			if ((0,type_of/* default */.Z)(info) === 'object') {
				if (info.a) registerNS(info.a, component)
				for (let i of childNodes) initComponent(component, i)
			}
			break
		}
		case 'object': {
			if (node.t > 1) throw new TypeError(`[EF] Not a standard ef.js AST: Unknown mounting point type '${node.t}'`)
			applyMountingPoint(node.t, node.n, component)
			break
		}
		case 'string': {
			break
		}
		default: {
			throw new TypeError(`[EF] Not a standard ef.js AST: Unknown node type '${nodeType}'`)
		}
	}
}

/**
 * @typedef {import('./mount-options.js').EFMountOption} EFMountOption
 * @typedef {import('./mount-options.js').EFMountConfig} EFMountConfig
 * @typedef {import('./lib/renderer.js').EFAST} EFAST
 * @typedef {import('./lib/renderer.js').EFBaseClass} EFBaseClass
 * @typedef {import('./lib/renderer.js').EFEventHandlerArg} EFEventHandlerArg
 * @typedef {import('./lib/renderer.js').EFEventHandlerMethod} EFEventHandlerMethod
 * @typedef {import('./lib/renderer.js').EFSubscriberHandlerArg} EFSubscriberHandlerArg
 * @typedef {import('./lib/renderer.js').EFSubscriberHandlerMethod} EFSubscriberHandlerMethod
 * @typedef {import('./lib/renderer.js').EFTemplateScope} EFTemplateScope
 * @typedef {import('./lib/renderer.js').Fragment} Fragment
 * @typedef {import('./lib/renderer.js').EFNodeWrapper} EFNodeWrapper
 * @typedef {import('./lib/renderer.js').EFTextFragment} EFTextFragment
 * @typedef {import('./lib/utils/event-helper.js').EFEventOptions} EFEventOptions
 */

// eslint-disable-next-line valid-jsdoc
/**
 * Create a brand new component class for the new component
 * @param {EFAST} ast - AST for the component
 */
const ef_core_create = (ast) => {

	/**
	 * The very basic component which users can use
	 * @class EFComponent
	 * @param {Object=} initState - Initial state for the component to create with
	 * @param {EFTemplateScope=} scope - Scope for the component to render template with
	 */
	const EFComponent = class extends renderer_EFBaseComponent {

		/**
		 * Create an EFComponent with initial state
		 * @param {Object=} initState - Initial state for the component to create with
		 * @param {EFTemplateScope=} scope - Scope for the component to render template with
		 */
		constructor(initState, scope) {
			inform()
			super(ast, scope)
			if (initState) this.$update(initState)
			exec()
		}
	}

	// Workaround for a bug of buble
	// https://github.com/bublejs/buble/issues/197
	Object.defineProperty(EFComponent.prototype, 'constructor', {enumerable: false})

	Object.defineProperty(EFComponent, '__local_namespaces', {enumerable: false, value: {}})
	initComponent(EFComponent, ast)
	return EFComponent
}

let coreVersion = '0.14.2'

if (false) {}



if (false) {}


/***/ }),

/***/ 84895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SavedArray = Array
const proto = SavedArray.prototype

const ARR = {
	copy(arr) {
		return proto.slice.call(arr, 0)
	},
	empty(arr) {
		arr.length = 0
		return arr
	},
	equals(left, right) {
		if (!SavedArray.isArray(right)) return false
		if (left === right) return true
		if (left.length !== right.length) return false
		for (let i = 0, l = left.length; i < l; i++) {
			if (left[i] !== right[i]) return false
		}
		return true
	},
	pop(arr) {
		return proto.pop.call(arr)
	},
	push(arr, ...items) {
		return proto.push.apply(arr, items)
	},
	remove(arr, item) {
		const index = proto.indexOf.call(arr, item)
		if (index > -1) {
			proto.splice.call(arr, index, 1)
			return item
		}
	},
	reverse(arr) {
		return proto.reverse.call(arr)
	},
	rightUnique(arr) {
		const newArr = []
		for (let i = 0; i < arr.length; i++) {
			for (let j = i + 1; j < arr.length; j++) if (arr[i] === arr[j]) j = i += 1
			newArr.push(arr[i])
		}
		return newArr
	},
	shift(arr) {
		return proto.shift.call(arr)
	},
	slice(arr, index, length) {
		return proto.slice.call(arr, index, length)
	},
	sort(arr, fn) {
		return proto.sort.call(arr, fn)
	},
	splice(arr, ...args) {
		return proto.splice.apply(arr, args)
	},
	unshift(arr, ...items) {
		return proto.unshift.apply(arr, items)
	},
	isArray(arr) {
		return SavedArray.isArray(arr)
	}
}

if (typeof Set !== 'undefined' && SavedArray.from) ARR.unique = arr => SavedArray.from(new Set(arr))
else ARR.unique = ARR.rightUnique

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ARR);


/***/ }),

/***/ 89918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84895);


const typeOf = (obj) => {
	if (_array_helper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isArray */ .Z.isArray(obj)) return 'array'
	return typeof obj
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeOf);


/***/ })

}]);