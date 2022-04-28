(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[12],{

/***/ 85646:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    var __rest = ( false) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
    /// <reference path="./global.d.ts" />
    /**
     * @see: https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
     */
    //#region Internal Symbols
    const JSX_Symbol = Symbol.for('JSON ML <=> JSX internal Symbol');
    /**
     * Install a Custom Object Formatter
     * @param formatter The formatter
     */
    function installCustomObjectFormatter(formatter) {
        try {
            const old = new Set(window.devtoolsFormatters || []);
            old.add(formatter);
            window.devtoolsFormatters = Array.from(old);
        }
        catch (e) {
            console.error('Install custom object formatter failed.', e);
        }
    }
    function isJSXElement(x) {
        return Array.isArray(x) && Reflect.get(x, JSX_Symbol);
    }
    function createElementTyped(tag, _props, ..._) {
        if (typeof tag === 'function')
            return tag(Object.assign({}, _props, { children: _ }));
        // If object has children, Chrome will not render it normally
        if (tag === 'object')
            _ = [];
        const props = (_props || {});
        if (customElements.has(tag)) {
            const handler = customElements.get(tag);
            if (typeof handler === 'function')
                return handler(props, ..._);
            else {
                const _a = props, { style } = _a, rest = __rest(_a, ["style"]);
                return createElementTyped(handler[0], Object.assign({ style: normalizeStyle(handler[1]) + normalizeStyle(style) }, rest), ..._);
            }
        }
        // Handle themes
        if ('variant' in props && props.variant) {
            const theme = matchMedia(`(prefers-color-scheme: dark)`).matches ? darkTheme : lightTheme;
            const presetStyles = props.variant.map((type) => theme[type]);
            props.style = Object.assign({}, ...presetStyles, props.style);
        }
        // Transform CSS.PropertiesHyphen into string
        if ('style' in props) {
            props.style = normalizeStyle(props.style);
        }
        // Transform onClick
        if ('onClick' in props) {
            installCustomObjectFormatter(new onClickHandler());
            const { onClick } = props, nextProps = __rest(props, ["onClick"]);
            const specObject = onClickHandler.make(createElementTyped(tag, nextProps, ..._), onClick);
            return createElementTyped(tag, null, createElementTyped('object', { object: specObject }));
        }
        const children = [];
        for (const child of _) {
            // If child is null, omit it.
            if (child === null)
                continue;
            // Add primitive values and JSX.Element as a child
            if (isRenderableJSONML(child)) {
                children.push(child);
                continue;
            }
            // If child is an Array, and every of its child is JSX.Element
            // though it as pattern like {arr.map(x => <div />)}
            if (Array.isArray(child)) {
                if (child.every((x) => isRenderableJSONML(x))) {
                    children.push(...child);
                    continue;
                }
            }
            // Else, display non-primitive values as devtools raw formatter
            children.push(['object', { object: child }]);
        }
        // <object> cannot have children, or it will not render normally.
        if (children.length === 0 && tag !== 'object')
            children.push('');
        // @ts-ignore
        if (tag === 'object' && props.object === undefined) {
            return createElementTyped('span', { variant: ['propertyPreviewName'] }, 'undefined');
        }
        return makeArrayToJSXElement([tag, props, ...children]);
    }
    const createElement = createElementTyped;
    //#endregion
    //#region Non-standard elements and attributes
    /**
     * Handler for onClick event
     */
    const clickable = new WeakMap();
    class onClickHandler {
        constructor() {
            if (onClickHandler.instance)
                return onClickHandler.instance;
            onClickHandler.instance = this;
        }
        static make(jsx, onClick) {
            const self = {};
            clickable.set(self, () => [jsx, onClick, self]);
            return self;
        }
        hasBody(obj) {
            return clickable.has(obj);
        }
        body(obj, config) {
            const [jsx, f, ref] = clickable.get(obj)();
            f();
            return createElementTyped('div', {}, createElementTyped('object', { object: ref }));
        }
        header(obj) {
            if (this.hasBody(obj)) {
                const [jsx] = clickable.get(obj)();
                return jsx;
            }
            return null;
        }
    }
    //#endregion
    //#region Helper
    function makeArrayToJSXElement(x) {
        Reflect.set(x, JSX_Symbol, true);
        return x;
    }
    function isRenderableJSONML(x) {
        if (isJSXElement(x))
            return true;
        // We will ignore the `null` value
        if (x === null)
            return true;
        if (typeof x === 'object')
            return false;
        return true;
    }
    function normalizeStyle(style) {
        if (style === undefined)
            return '';
        if (typeof style === 'string')
            return style + ';';
        return (Object.keys(style)
            .map((k) => 
        // Transform propertyName to property-name
        k.replace(/([a-z][A-Z])/g, function (g) {
            return g[0] + '-' + g[1].toLowerCase();
        }) +
            ': ' +
            style[k])
            .join(';') + ';');
    }
    //#endregion
    //#region Keep states
    const objectMap = new WeakMap();
    function useState(bindingObject, initialState) {
        if (typeof bindingObject !== 'object' || bindingObject === null) {
            throw new Error('Can not bind state to a non-object');
        }
        let state;
        if (objectMap.has(bindingObject))
            state = objectMap.get(bindingObject);
        else
            state = initialState ? initialState(bindingObject) : {};
        objectMap.set(bindingObject, state);
        return [
            state,
            function setState(nextState) {
                state = Object.assign(state, nextState);
                objectMap.set(bindingObject, state);
            },
            function forceRender() {
                console.clear();
                console.log(bindingObject);
            },
        ];
    }
    //#endregion
    //#region Common CSS
    const codeBlock = { fontStyle: 'italic', fontFamily: 'monospace' };
    const dimmed = { opacity: 0.6 };
    const darkTheme = {
        propertyPreviewName: { color: 'rgb(169, 169, 169)' },
        functionPrefix: { color: 'rgb(85, 106, 242)' },
        propertyName: { color: 'rgb(227, 110, 236)' },
        null: { color: 'rgb(127, 127, 127)' },
        bigint: { color: 'rgb(158, 255, 158)' },
        number: { color: 'hsl(252, 100%, 75%)' },
        string: { color: 'rgb(233, 63, 59)', whiteSpace: 'pre', 'unicode-bidi': '-webkit-isolate' },
        quote: { color: 'rgb(213, 213, 213)' },
        node: { color: 'rgb(189, 198, 207)' },
        fade: dimmed,
        code: codeBlock,
    };
    const lightTheme = {
        propertyPreviewName: { color: '#565656' },
        functionPrefix: { color: 'rgb(13, 34, 170)' },
        propertyName: { color: 'rgb(136, 19, 145)' },
        null: { color: 'rgb(128, 128, 128)' },
        bigint: { color: 'rgb(0, 93, 0)' },
        number: { color: 'rgb(28, 0, 207)' },
        string: { color: 'rgb(196, 26, 22)', whiteSpace: 'pre', 'unicode-bidi': '-webkit-isolate' },
        quote: { color: '#222' },
        node: { color: 'rgb(48, 57, 66)' },
        fade: dimmed,
        code: codeBlock,
    };
    //#endregion
    //#region custom elements
    const customElements = new Map();
    customElements.set('code', ['span', codeBlock]);
    customElements.set('br', ['div', { display: 'block', marginTop: '0.5em' }]);
    customElements.set('img', (_props = {}, ...children) => {
        const { height = 'initial', src, width = 'initial', style } = _props, props = __rest(_props, ["height", "src", "width", "style"]);
        try {
            const url = new URL(src, location.href);
            return createElement('span', Object.assign({ style: Object.assign({ content: `url("${url.toJSON()}")`, width: typeof width === 'number' ? width + 'px' : width, height: typeof height === 'number' ? height + 'px' : height }, (style || {})) }, props));
        }
        catch (e) {
            console.error(e, src);
            return createElement('span', {}, e && e.message);
        }
    });
    //#endregion

    class LiveSelectorDevtoolsEnhancer$1 {
        hasBody(obj) {
            if (obj instanceof LiveSelector)
                return true;
            return false;
        }
        body(obj) {
            const priv = LiveSelectorDevtoolsEnhancer$1.getPrivateItems(obj);
            return (createElement("div", null,
                this.displayInitialElements(obj),
                this.displaySelectorChain(obj),
                createElement("br", null),
                createElement("span", { variant: ['bigint'] }, "Actions:"),
                createElement("div", { onClick: () => console.log(priv.stack) }, "\uD83D\uDC40 See who created this LiveSelector"),
                createElement("div", { onClick: () => console.log(obj.evaluate()) }, "\uD83E\uDDEE Evaluate this LiveSelector")));
        }
        header(obj) {
            if (!(obj instanceof LiveSelector))
                return null;
            return (createElement("div", null,
                "LiveSelector",
                ' ',
                createElement("code", { variant: ['fade'] }, LiveSelectorDevtoolsEnhancer$1.getPrivateItems(obj).single ? ' (SingleMode)' : null)));
        }
        displayInitialElements(obj) {
            const maxDisplayItems = 7;
            const priv = LiveSelectorDevtoolsEnhancer$1.getPrivateItems(obj);
            const jsx = [];
            for (const i in priv.initialElements) {
                const index = parseInt(i);
                const _ = priv.initialElements[i];
                if (index === maxDisplayItems && priv.initialElements.length > maxDisplayItems) {
                    jsx.push(createElement("span", { style: { opacity: 0.7 } },
                        "and ",
                        priv.initialElements.length - maxDisplayItems,
                        " more"));
                    break;
                }
                jsx.push(createElement("span", null,
                    createElement("object", { object: _ }),
                    index === priv.initialElements.length - 1 ? '' : createElement("span", { style: { opacity: 0.7 } }, ", ")));
            }
            return (createElement("span", null,
                createElement("span", null, "["),
                jsx,
                createElement("span", null, "]"),
                createElement("span", { style: { marginLeft: '0.5em', opacity: 0.7, fontStyle: 'italic' } },
                    "(initial elements",
                    priv.initialElements.length > maxDisplayItems ? createElement("object", { object: priv.initialElements }) : '',
                    ")")));
        }
        displaySelectorChain(obj) {
            const priv = LiveSelectorDevtoolsEnhancer$1.getPrivateItems(obj);
            return (createElement("table", { style: { marginLeft: '1em' } }, priv.selectorChain.map(chain => (createElement("tr", null,
                createElement("td", null, "|"),
                createElement("td", { variant: ['propertyName'] }, chain.type),
                createElement("td", null, Array.isArray(chain.param) ? (chain.param.map((paramI, index, params) => (createElement("span", null,
                    createElement("object", { object: paramI }),
                    index === params.length - 1 ? '' : createElement("span", { style: { opacity: 0.7 } }, ", "))))) : (createElement("object", { object: chain.param }))))))));
        }
        static getPrivateItems(obj) {
            var _a;
            return {
                // @ts-ignore
                single: obj.isSingleMode,
                // @ts-ignore
                initialElements: obj.initialElements,
                // @ts-ignore
                stack: (_a = obj.stack) !== null && _a !== void 0 ? _a : '',
                // @ts-ignore
                selectorChain: obj.selectorChain,
            };
        }
    }

    /**
     * Create a live selector that can continuously select the element you want.
     *
     * @remarks
     * Call {@link LiveSelector.evaluate | #evaluate} to evaluate the element. Falsy value will be ignored.
     *
     * @param T - Type of Element that LiveSelector contains
     *
     * @example
     * ```ts
     * const ls = new LiveSelector().querySelectorAll('a').map(x => x.href)
     * ls.evaluate() // returns all urls at the current time.
     * ```
     */
    class LiveSelector {
        /**
         * Create a new LiveSelector.
         *
         * @param initialElements - provides initial results, equals to `.replace(() => initialElements)`
         */
        constructor(initialElements = []) {
            this.initialElements = initialElements;
            /**
             * Let developer knows where does this LiveSelector created.
             */
            this.stack = new Error().stack;
            /**
             * Is this LiveSelector run in the SingleMode
             */
            this.isSingleMode = false;
            /**
             * Record a method call into {@link LiveSelector.selectorChain}
             */
            this.appendSelectorChain = (type) => (param) => {
                this.selectorChain.push({ type: type, param: param });
                return this;
            };
            /**
             * Records of previous calls on LiveSelector
             */
            this.selectorChain = [];
        }
        /**
         * Enable single mode. Only 1 result will be emitted.
         */
        enableSingleMode() {
            this.isSingleMode = true;
            return this;
        }
        /**
         * Clone this LiveSelector and return a new LiveSelector.
         * @returns a new LiveSelector with same action
         * @example
         * ```ts
         * ls.clone()
         * ```
         */
        clone() {
            const ls = new LiveSelector(this.initialElements);
            ls.selectorChain.push(...this.selectorChain);
            ls.isSingleMode = this.isSingleMode;
            return ls;
        }
        querySelector(selector) {
            return this.appendSelectorChain('querySelector')(selector);
        }
        querySelectorAll(selector) {
            return this.appendSelectorChain('querySelectorAll')(selector);
        }
        getElementsByClassName(className) {
            return this.appendSelectorChain('getElementsByClassName')(className);
        }
        getElementsByTagName(tag) {
            return this.appendSelectorChain('getElementsByTagName')(tag);
        }
        closest(selectors) {
            return this.appendSelectorChain('closest')(selectors);
        }
        filter(f) {
            return this.appendSelectorChain('filter')(f);
        }
        /**
         * Calls a defined callback function on each element of a LiveSelector, and continues with the results.
         *
         * @param callbackfn - Map function
         * @example
         * ```ts
         * ls.map(x => x.parentElement)
         * ```
         */
        map(callbackfn) {
            return this.appendSelectorChain('map')(callbackfn);
        }
        /**
         * Combines two LiveSelector.
         * @param newEle - Additional LiveSelector to combine.
         * @param NextType - Next type generic for LiveSelector
         *
         * @example
         * ```ts
         * ls.concat(new LiveSelector().querySelector('#root'))
         * ```
         */
        concat(newEle) {
            return this.appendSelectorChain('concat')(newEle);
        }
        /**
         * Reverses the elements in an Array.
         *
         * @example
         * ```ts
         * ls.reverse()
         * ```
         */
        reverse() {
            return this.appendSelectorChain('reverse')(undefined);
        }
        /**
         * Returns a section of an array.
         * @param start - The beginning of the specified portion of the array.
         * @param end - The end of the specified portion of the array.
         *
         * @example
         * ```ts
         * ls.slice(2, 4)
         * ```
         */
        slice(start, end) {
            return this.appendSelectorChain('slice')([start, end]);
        }
        /**
         * Sorts an array.
         * @param compareFn - The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
         *
         * @example
         * ```ts
         * ls.sort((a, b) => a.innerText.length - b.innerText.length)
         * ```
         */
        sort(compareFn) {
            return this.appendSelectorChain('sort')(compareFn);
        }
        /**
         * Flat T[][] to T[]
         *
         * @example
         * ```ts
         * ls.flat()
         * ```
         */
        flat() {
            return this.appendSelectorChain('flat')(undefined);
        }
        /**
         * Select only nth element
         *
         * @param n - Select only nth element, allow negative number.
         * @example
         * ```ts
         * ls.at(-1)
         * ```
         */
        at(n) {
            if (typeof n !== 'number')
                throw new Error('n must be a number');
            if (this.isSingleMode)
                throw new Error('LiveSelector.nth() is not available in SingleMode');
            return this.appendSelectorChain('at')(n);
        }
        /**
         * Replace the whole array.
         *
         * @example
         * ```ts
         * ls.replace(x => lodash.dropRight(x, 2))
         * ```
         *
         * @param f - returns new array.
         */
        replace(f) {
            return this.appendSelectorChain('replace')(f);
        }
        //#endregion
        //#region Build
        /**
         * Evaluate selector expression
         */
        evaluate() {
            let arr = this.initialElements;
            function isElementArray(x) {
                // Do a simple check
                return x[0] instanceof Element;
            }
            function nonNull(x) {
                return x !== null && x !== undefined;
            }
            function unique(x) {
                return Array.from(new Set(x));
            }
            let previouslyNulled = false;
            for (const op of this.selectorChain) {
                // if in single mode, drop other results.
                if (this.isSingleMode && arr.length > 1)
                    arr = [arr[0]];
                switch (op.type) {
                    case 'querySelector': {
                        if (!previouslyNulled) {
                            if (arr.length === 0) {
                                const e = document.querySelector(op.param);
                                if (e)
                                    arr = unique(arr.concat(e));
                                else
                                    previouslyNulled = true;
                            }
                            else if (isElementArray(arr)) {
                                arr = unique(arr.map((e) => e.querySelector(op.param)).filter(nonNull));
                                if (arr.length === 0)
                                    previouslyNulled = true;
                            }
                            else
                                throw new TypeError('Call querySelector on non-Element item!');
                        }
                        break;
                    }
                    case 'getElementsByTagName':
                    case 'getElementsByClassName':
                    case 'querySelectorAll': {
                        if (!previouslyNulled) {
                            if (arr.length === 0) {
                                const e = document[op.type](op.param);
                                arr = unique(arr.concat(...e));
                                if (e.length === 0)
                                    previouslyNulled = true;
                            }
                            else if (isElementArray(arr)) {
                                let newArr = [];
                                for (const e of arr) {
                                    newArr = newArr.concat(Array.from(e[op.type](op.param)));
                                }
                                arr = unique(newArr.filter(nonNull));
                                if (arr.length === 0)
                                    previouslyNulled = true;
                            }
                            else
                                throw new TypeError(`Call ${op.type} on non-Element item!`);
                        }
                        break;
                    }
                    case 'closest':
                        if (arr.length === 0) {
                            break;
                        }
                        else if (isElementArray(arr)) {
                            const newArr = arr;
                            const selector = op.param;
                            function findParent(node, y) {
                                if (y < 0)
                                    throw new TypeError('Cannot use `.closet` with a negative number');
                                if (y === 0)
                                    return node;
                                if (!node.parentElement)
                                    return null;
                                return findParent(node.parentElement, y - 1);
                            }
                            if (typeof selector === 'number') {
                                arr = unique(newArr.map((e) => findParent(e, selector)).filter(nonNull));
                            }
                            else {
                                arr = unique(newArr.map((x) => x.closest(selector)).filter(nonNull));
                            }
                        }
                        else {
                            throw new TypeError('Cannot use `.closet on non-Element`');
                        }
                        break;
                    case 'filter':
                        arr = arr.filter((e, i, a) => op.param(e, i, [...a])).filter(nonNull);
                        break;
                    case 'map':
                        arr = arr.map((e, i, a) => op.param(e, i, [...a])).filter(nonNull);
                        break;
                    case 'concat':
                        arr = arr.concat(op.param.evaluate());
                        break;
                    case 'reverse':
                        arr = Array.from(arr).reverse();
                        break;
                    case 'slice': {
                        const [start, end] = op.param;
                        arr = arr.slice(start, end);
                        break;
                    }
                    case 'sort':
                        arr = Array.from(arr).sort(op.param);
                        break;
                    case 'at': {
                        arr = [at(arr, op.param)].filter(nonNull);
                        break;
                    }
                    case 'flat':
                        arr = [].concat(...arr);
                        break;
                    case 'replace':
                        arr = op.param(Array.from(arr));
                        break;
                    default:
                        throw new TypeError('Unknown operation type');
                }
            }
            if (this.isSingleMode)
                return arr.filter(nonNull)[0];
            return arr.filter(nonNull);
        }
        //#endregion
        /**
         * Call this function to enhance the debug experience in the Chrome DevTools
         *
         * You need to open "Enable custom formatters" in your DevTools settings.
         */
        static enhanceDebugger() {
            installCustomObjectFormatter(new LiveSelectorDevtoolsEnhancer$1());
            this.enhanceDebugger = () => { };
        }
    }
    // https://github.com/tc39/proposal-relative-indexing-method
    function at(arr, n) {
        n = Math.trunc(n) || 0;
        if (n < 0)
            n += arr.length;
        if (n < 0 || n >= arr.length)
            return undefined;
        return arr[n];
    }

    const x = () => ({ refreshed: false });
    class DOMProxyDevtoolsEnhancer {
        isDOMProxy(obj) {
            return DOMProxyDevtoolsEnhancer.allDOMProxy.has(obj);
        }
        hasBody(obj) {
            if (this.isDOMProxy(obj) && obj.destroyed === false) {
                if (obj.destroyed)
                    return false;
                const [state] = useState(obj, x);
                if (state.refreshed)
                    return false;
                return true;
            }
            return false;
        }
        showObject(name, obj, obj2, obj3) {
            return (createElement("tr", null,
                createElement("td", { variant: ['propertyName'] }, name),
                createElement("td", null, obj),
                obj2 !== undefined ? createElement("td", null, obj2) : null,
                obj3 !== undefined ? createElement("td", null, obj3) : null));
        }
        decorateShadow(obj) {
            return createElement("span", null, `#shadow-root (${obj.mode})`);
        }
        body(obj, clearState) {
            const [state, setState, render] = useState(obj, x);
            if (clearState)
                setState({ refreshed: false });
            const before = obj.has('before') ? this.showObject('::before', obj.before) : null;
            const beforeShadow = obj.has('beforeShadow')
                ? this.showObject('::before', obj.beforeShadow, '', this.decorateShadow(obj.beforeShadow))
                : null;
            const after = obj.has('after') ? this.showObject('::after', obj.after) : null;
            const afterShadow = obj.has('afterShadow')
                ? this.showObject('::after', obj.afterShadow, '', this.decorateShadow(obj.afterShadow))
                : null;
            return (createElement("div", null,
                createElement("table", null,
                    createElement("tr", null,
                        createElement("td", null),
                        createElement("td", { variant: ['propertyPreviewName'] }, "Element"),
                        createElement("td", null),
                        createElement("td", { variant: ['propertyPreviewName'] }, "Real Current")),
                    this.showObject('current', obj.current, '->', obj.realCurrent),
                    before,
                    beforeShadow,
                    after,
                    afterShadow),
                createElement("br", null),
                createElement("span", null,
                    "Changes on the ",
                    createElement("span", { variant: ['propertyName'] }, "current"),
                    " Proxy",
                    createElement("object", { object: DOMProxyDevtoolsEnhancer.allDOMProxy.get(obj) })),
                createElement("div", { onClick: () => {
                        setState({ refreshed: true });
                        render();
                    } }, "Refresh")));
        }
        header(obj) {
            if (!this.isDOMProxy(obj))
                return null;
            const [state] = useState(obj, x);
            return (createElement("div", null,
                "DOMProxy",
                obj.destroyed ? createElement("span", { variant: ['string'] }, " (destroyed)") : null,
                state.refreshed ? this.body(obj, true) : null));
        }
        displaySelectorChain(obj) {
            // @ts-ignore
            const priv = LiveSelectorDevtoolsEnhancer.getPrivateItems(obj);
            return (createElement("table", { style: { marginLeft: '1em' } }, priv.selectorChain.map((chain) => (createElement("tr", null,
                createElement("td", null, "|"),
                createElement("td", { variant: ['propertyName'] }, chain.type),
                createElement("td", null, Array.isArray(chain.param) ? (chain.param.map((paramI, index, params) => (createElement("span", null,
                    createElement("object", { object: paramI }),
                    index === params.length - 1 ? '' : createElement("span", { style: { opacity: 0.7 } }, ", "))))) : (createElement("object", { object: chain.param }))))))));
        }
    }
    DOMProxyDevtoolsEnhancer.allDOMProxy = new WeakMap();

    var dist = {};

    Object.defineProperty(dist, "__esModule", { value: true });
    /**
     * Type-safe event emitter.
     */
    class Emitter {
        constructor() {
            this._ = [];
            this.$ = Object.create(null);
        }
        on(type, callback) {
            (this.$[type] = this.$[type] || []).push(callback);
        }
        off(type, callback) {
            const stack = this.$[type];
            if (stack)
                stack.splice(stack.indexOf(callback) >>> 0, 1);
        }
        each(callback) {
            this._.push(callback);
        }
        none(callback) {
            this._.splice(this._.indexOf(callback) >>> 0, 1);
        }
        emit(type, ...args) {
            const stack = this.$[type];
            if (stack)
                stack.slice().forEach(fn => fn(...args));
            this._.slice().forEach(fn => fn({ type, args }));
        }
    }
    var Emitter_1 = dist.Emitter = Emitter;
    /**
     * Helper to listen to an event once only.
     */
    function once(events, type, callback) {
        function self(...args) {
            events.off(type, self);
            return callback(...args);
        }
        events.on(type, self);
        return self;
    }
    dist.once = once;

    /**
     * DOMProxy provide an interface that be stable even dom is changed.
     *
     * @remarks
     *
     * DOMProxy provide 3 nodes. `before`, `current` and `after`.
     * `current` is a fake dom node powered by Proxy,
     * it will forward all your operations to the `realCurrent`.
     *
     * `before` and `after` is a true `span` that always point to before and after of `realCurrent`
     *
     * Special Handlers:
     *
     * *forward*: forward to current `realCurrent`
     *
     * *undo*: undo effect when `realCurrent` changes
     *
     * *move*: move effect to new `realCurrent`
     *
     * - style (forward, undo, move)
     * - addEventListener (forward, undo, move)
     * - appendChild (forward, undo, move)
     */
    function DOMProxy(options = {}) {
        const event = new Emitter_1();
        // Options
        const { createAfter, createBefore, afterShadowRootInit, beforeShadowRootInit } = {
            ...{
                createAfter: () => document.createElement('span'),
                createBefore: () => document.createElement('span'),
                afterShadowRootInit: { mode: 'open' },
                beforeShadowRootInit: { mode: 'open' },
            },
            ...options,
        };
        //
        let isDestroyed = false;
        // Nodes
        let virtualBefore = null;
        let virtualBeforeShadow = null;
        const defaultCurrent = document.createElement('div');
        let current = defaultCurrent;
        let virtualAfter = null;
        let virtualAfterShadow = null;
        /** All changes applied on the `proxy` */
        const changes = [];
        /** Read Traps */
        const readonlyTraps = {
            ownKeys: () => {
                changes.push({ type: 'ownKeys', op: undefined });
                return Object.getOwnPropertyNames(current);
            },
            get: (t, key, r) => {
                changes.push({ type: 'get', op: key });
                const current_ = current;
                if (typeof current_[key] === 'function')
                    return new Proxy(current_[key], {
                        apply: (target, thisArg, args) => {
                            changes.push({ type: 'callMethods', op: { name: key, param: args, thisArg } });
                            return current_[key](...args);
                        },
                    });
                else if (key === 'style')
                    return new Proxy(current.style, {
                        set: (t, styleKey, styleValue, r) => {
                            changes.push({
                                type: 'modifyStyle',
                                op: { name: styleKey, value: styleValue, originalValue: current_.style[styleKey] },
                            });
                            current_.style[styleKey] = styleValue;
                            return true;
                        },
                    });
                return current_[key];
            },
            has: (t, key) => {
                changes.push({ type: 'has', op: key });
                return key in current;
            },
            getOwnPropertyDescriptor: (t, key) => {
                changes.push({ type: 'getOwnPropertyDescriptor', op: key });
                return Reflect.getOwnPropertyDescriptor(current, key);
            },
            isExtensible: t => {
                changes.push({ type: 'isExtensible', op: undefined });
                return Reflect.isExtensible(current);
            },
            getPrototypeOf: t => {
                changes.push({ type: 'getPrototypeOf', op: undefined });
                return Reflect.getPrototypeOf(current);
            },
        };
        /** Write Traps */
        const modifyTraps = record => ({
            deleteProperty: (t, key) => {
                record && changes.push({ type: 'delete', op: key });
                return Reflect.deleteProperty(current, key);
            },
            set: (t, key, value, r) => {
                record && changes.push({ type: 'set', op: [key, value] });
                return (current[key] = value);
            },
            defineProperty: (t, key, attributes) => {
                record && changes.push({ type: 'defineProperty', op: [key, attributes] });
                return Reflect.defineProperty(current, key, attributes);
            },
            preventExtensions: t => {
                record && changes.push({ type: 'preventExtensions', op: undefined });
                return Reflect.preventExtensions(current);
            },
            setPrototypeOf: (t, prototype) => {
                record && changes.push({ type: 'setPrototypeOf', op: prototype });
                return Reflect.setPrototypeOf(current, prototype);
            },
        });
        const modifyTrapsWrite = modifyTraps(true);
        const modifyTrapsNotWrite = modifyTraps(false);
        const proxy = Proxy.revocable(defaultCurrent, { ...readonlyTraps, ...modifyTrapsWrite });
        function hasStyle(e) {
            return 'style' in e;
        }
        /** Call before realCurrent change */
        function undoEffects(nextCurrent) {
            for (const change of changes) {
                if (change.type === 'callMethods') {
                    const attr = change.op.name;
                    if (attr === 'addEventListener') {
                        current.removeEventListener(...change.op.param);
                    }
                    else if (attr === 'appendChild') {
                        if (!nextCurrent) {
                            const node = change.op.thisArg[0];
                            if (node !== undefined)
                                current.removeChild(node);
                        }
                    }
                }
                else if (change.type === 'modifyStyle') {
                    const { name, value, originalValue } = change.op;
                    if (hasStyle(current)) {
                        current.style[name] = originalValue;
                    }
                }
            }
        }
        /** Call after realCurrent change */
        function redoEffects() {
            if (current === defaultCurrent)
                return;
            const t = {};
            for (const change of changes) {
                if (change.type === 'setPrototypeOf')
                    modifyTrapsNotWrite.setPrototypeOf(t, change.op);
                else if (change.type === 'preventExtensions')
                    modifyTrapsNotWrite.preventExtensions(t);
                else if (change.type === 'defineProperty')
                    modifyTrapsNotWrite.defineProperty(t, change.op[0], change.op[1]);
                else if (change.type === 'set')
                    modifyTrapsNotWrite.set(t, change.op[0], change.op[1], t);
                else if (change.type === 'delete')
                    modifyTrapsNotWrite.deleteProperty(t, change.op);
                else if (change.type === 'callMethods') {
                    const replayable = ['appendChild', 'addEventListener', 'before', 'after'];
                    const key = change.op.name;
                    if (replayable.indexOf(key) !== -1) {
                        if (current[key] !== undefined) {
                            current[key](...change.op.param);
                        }
                        else {
                            console.warn(current, `doesn't have method "${key}", replay failed.`);
                        }
                    }
                }
                else if (change.type === 'modifyStyle') {
                    current.style[change.op.name] = change.op.value;
                }
            }
        }
        // MutationObserver
        const noop = () => { };
        let observerCallback = noop;
        let mutationObserverInit = undefined;
        let observer = null;
        function reObserve(reinit) {
            observer && observer.disconnect();
            if (observerCallback === noop || current === defaultCurrent)
                return;
            if (reinit || !observer)
                observer = new MutationObserver(observerCallback);
            observer.observe(current, mutationObserverInit);
        }
        const DOMProxyObject = {
            observer: {
                set callback(v) {
                    if (v === undefined)
                        v = noop;
                    observerCallback = v;
                    reObserve(true);
                },
                get callback() {
                    return observerCallback;
                },
                get init() {
                    return mutationObserverInit;
                },
                set init(v) {
                    mutationObserverInit = v;
                    reObserve(false);
                },
                get observer() {
                    return observer;
                },
            },
            get destroyed() {
                return isDestroyed;
            },
            get before() {
                if (isDestroyed)
                    throw new TypeError('Try to access `before` node after DOMProxy is destroyed');
                if (!virtualBefore) {
                    virtualBefore = createBefore();
                    if (current instanceof Element)
                        current.before(virtualBefore);
                }
                return virtualBefore;
            },
            get beforeShadow() {
                if (!virtualBeforeShadow)
                    virtualBeforeShadow = this.before.attachShadow(beforeShadowRootInit);
                return virtualBeforeShadow;
            },
            get current() {
                if (isDestroyed)
                    throw new TypeError('Try to access `current` node after DOMProxy is destroyed');
                return proxy.proxy;
            },
            get after() {
                if (isDestroyed)
                    throw new TypeError('Try to access `after` node after DOMProxy is destroyed');
                if (!virtualAfter) {
                    virtualAfter = createAfter();
                    if (current instanceof Element)
                        current.after(virtualAfter);
                }
                return virtualAfter;
            },
            get afterShadow() {
                if (!virtualAfterShadow)
                    virtualAfterShadow = this.after.attachShadow(afterShadowRootInit);
                return virtualAfterShadow;
            },
            has(type) {
                if (type === 'before')
                    return virtualBefore;
                else if (type === 'after')
                    return virtualAfter;
                else if (type === 'afterShadow')
                    return virtualAfterShadow;
                else if (type === 'beforeShadow')
                    return virtualBeforeShadow;
                else
                    return null;
            },
            get realCurrent() {
                if (isDestroyed)
                    return null;
                if (current === defaultCurrent)
                    return null;
                return current;
            },
            set realCurrent(node) {
                const old = current;
                if (isDestroyed)
                    throw new TypeError('You can not set current for a destroyed proxy');
                if (node === current)
                    return;
                if ((node === virtualAfter || node === virtualBefore) && node !== null) {
                    console.warn("In the DOMProxy, you're setting .realCurrent to this DOMProxy's virtualAfter or virtualBefore. Doing this may cause bugs. If you're confused with this warning, check your rules for LiveSelector.", this);
                }
                undoEffects(node);
                reObserve(false);
                if (node === null || node === undefined) {
                    current = defaultCurrent;
                    if (virtualBefore)
                        virtualBefore.remove();
                    if (virtualAfter)
                        virtualAfter.remove();
                }
                else {
                    current = node;
                    if (virtualAfter && current instanceof Element)
                        current.after(virtualAfter);
                    if (virtualBefore && current instanceof Element)
                        current.before(virtualBefore);
                    redoEffects();
                }
                event.emit('currentChanged', { new: node, old });
            },
            destroy() {
                observer && observer.disconnect();
                isDestroyed = true;
                proxy.revoke();
                virtualBeforeShadow = null;
                virtualAfterShadow = null;
                if (virtualBefore)
                    virtualBefore.remove();
                if (virtualAfter)
                    virtualAfter.remove();
                virtualBefore = null;
                virtualAfter = null;
                current = defaultCurrent;
            },
        };
        DOMProxyDevtoolsEnhancer.allDOMProxy.set(event, changes);
        Object.defineProperties(event, Object.getOwnPropertyDescriptors(DOMProxyObject));
        return event;
    }
    DOMProxy.enhanceDebugger = function enhanceDebugger() {
        installCustomObjectFormatter(new DOMProxyDevtoolsEnhancer());
        DOMProxy.enhanceDebugger = () => { };
    };

    /**
     * @internal
     * @param fn function to execute
     * @param timeout timeout
     */
    function requestIdleCallback(fn, timeout) {
        if ('requestIdleCallback' in window) {
            return window.requestIdleCallback(fn);
        }
        const start = Date.now();
        return setTimeout(() => {
            fn({
                didTimeout: false,
                timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - start));
                },
            });
        }, 1);
    }

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Built-in value references. */
    var Symbol$1 = root.Symbol;

    /** Used for built-in method references. */
    var objectProto$5 = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString$1 = objectProto$5.toString;

    /** Built-in value references. */
    var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty$4.call(value, symToStringTag$1),
          tag = value[symToStringTag$1];

      try {
        value[symToStringTag$1] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString$1.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag$1] = tag;
        } else {
          delete value[symToStringTag$1];
        }
      }
      return result;
    }

    /** Used for built-in method references. */
    var objectProto$4 = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto$4.toString;

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /** `Object#toString` result references. */
    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';

    /** Built-in value references. */
    var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /** `Object#toString` result references. */
    var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /** Used to detect overreaching core-js shims. */
    var coreJsData = root['__core-js_shared__'];

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /** Used for built-in method references. */
    var funcProto$1 = Function.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString$1 = funcProto$1.toString;

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString$1.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used for built-in method references. */
    var funcProto = Function.prototype,
        objectProto$3 = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A faster alternative to `Function#apply`, this function invokes `func`
     * with the `this` binding of `thisArg` and the arguments of `args`.
     *
     * @private
     * @param {Function} func The function to invoke.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} args The arguments to invoke `func` with.
     * @returns {*} Returns the result of `func`.
     */
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0: return func.call(thisArg);
        case 1: return func.call(thisArg, args[0]);
        case 2: return func.call(thisArg, args[0], args[1]);
        case 3: return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /** Used to detect hot functions by number of calls within a span of milliseconds. */
    var HOT_COUNT = 800,
        HOT_SPAN = 16;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeNow = Date.now;

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant$1(value) {
      return function() {
        return value;
      };
    }

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant$1(string),
        'writable': true
      });
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length,
          index = fromIndex + (fromRight ? 1 : -1);

      while ((fromRight ? index-- : ++index < length)) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * The base implementation of `_.isNaN` without support for number objects.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     */
    function baseIsNaN(value) {
      return value !== value;
    }

    /**
     * A specialized version of `_.indexOf` which performs strict equality
     * comparisons of values, i.e. `===`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1,
          length = array.length;

      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
      return value === value
        ? strictIndexOf(array, value, fromIndex)
        : baseFindIndex(array, baseIsNaN, fromIndex);
    }

    /**
     * A specialized version of `_.includes` for arrays without support for
     * specifying an index to search from.
     *
     * @private
     * @param {Array} [array] The array to inspect.
     * @param {*} target The value to search for.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max;

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]';

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /** Used for built-in method references. */
    var objectProto$2 = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

    /** Built-in value references. */
    var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }

    /* Built-in method references that are verified to be native. */
    var nativeCreate = getNative(Object, 'create');

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

    /** Used for built-in method references. */
    var objectProto$1 = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED$2 ? undefined : result;
      }
      return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
    }

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
      return this;
    }

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /** Used for built-in method references. */
    var arrayProto = Array.prototype;

    /** Built-in value references. */
    var splice = arrayProto.splice;

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /* Built-in method references that are verified to be native. */
    var Map$1 = getNative(root, 'Map');

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map$1 || ListCache),
        'string': new Hash
      };
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }

    /** Built-in value references. */
    var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /* Built-in method references that are verified to be native. */
    var Set$1 = getNative(root, 'Set');

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
      return cache.has(key);
    }

    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);

      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * This function is like `arrayIncludes` except that it accepts a comparator.
     *
     * @private
     * @param {Array} [array] The array to inspect.
     * @param {*} target The value to search for.
     * @param {Function} comparator The comparator invoked per element.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */
    function arrayIncludesWith(array, value, comparator) {
      var index = -1,
          length = array == null ? 0 : array.length;

      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE$1 = 200;

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE$1) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMin = Math.min;

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0;

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set$1 && (1 / setToArray(new Set$1([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set$1(values);
    };

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * Accept a promise and then set a timeout on it. After `time` ms, it will reject.
     * @param promise - The promise that you want to set time limit on.
     * @param time - Time before timeout. In `ms`.
     * @param rejectReason - When reject, show a reason. Defaults to `"timeout"`
     *
     * @internal
     */
    const timeout = (promise, time, rejectReason) => {
        if (!Number.isFinite(time))
            return (async () => promise)();
        let timer;
        const race = Promise.race([
            promise,
            new Promise((r, reject) => {
                timer = setTimeout(() => reject(new Error(rejectReason !== null && rejectReason !== void 0 ? rejectReason : 'timeout')), time);
            }),
        ]);
        race.finally(() => clearTimeout(timer));
        return race;
    };

    const WatcherMapNotReady = Symbol('Not available now (WatcherMapNotReady)');
    const initState = (obj) => {
        const everythingMap = new Map();
        const newMap = new Map([[WatcherMapNotReady, 0]]);
        const removedMap = new Map([[WatcherMapNotReady, 0]]);
        const priv = WatcherDevtoolsEnhancer.prototype.getPrivateItems(obj);
        const find = priv.findNodeFromListByKey(priv.lastNodeList, priv.lastKeyList);
        priv.lastKeyList.forEach(key => {
            everythingMap.set(key, {
                value: find(key),
                DOMProxy: priv.lastDOMProxyMap.get(key),
                hooks: priv.lastCallbackMap.get(key),
            });
        });
        obj.on('onIteration', iter => {
            const priv = WatcherDevtoolsEnhancer.prototype.getPrivateItems(obj);
            everythingMap.clear();
            newMap.clear();
            removedMap.clear();
            Array.from(iter.current.entries()).forEach(([key, value]) => {
                everythingMap.set(key, {
                    value,
                    DOMProxy: priv.lastDOMProxyMap.get(key),
                    hooks: priv.lastCallbackMap.get(key),
                });
            });
            iter.new.forEach((v, k) => newMap.set(v, k));
            iter.removed.forEach((v, k) => removedMap.set(v, k));
        });
        return {
            refreshed: false,
            everything: everythingMap,
            new: newMap,
            removed: removedMap,
        };
    };
    class WatcherDevtoolsEnhancer {
        header(obj) {
            if (obj instanceof Watcher) {
                const [state] = useState(obj, initState);
                const watcher = this.getPrivateItems(obj);
                const ls = LiveSelectorDevtoolsEnhancer$1.getPrivateItems(watcher.liveSelector);
                return (createElement("span", null,
                    obj.constructor.name,
                    createElement("code", { variant: ['fade'] }, ls.single ? ' (SingleMode)' : null),
                    createElement("code", { variant: ['bigint'] }, watcher.isWatching ? ' Running' : ' Not running'),
                    state.refreshed ? this.body(obj) : null));
            }
            return null;
        }
        hasBody(obj) {
            if (obj instanceof Watcher) {
                const [state, setState] = useState(obj, initState);
                if (state.refreshed === true) {
                    setState({ refreshed: false });
                    return false;
                }
                return true;
            }
            return false;
        }
        body(obj) {
            const [state, setState, forceRender] = useState(obj, initState);
            const priv = this.getPrivateItems(obj);
            const test = Symbol('used to test equality');
            const valueTag = 'Values';
            const removeTag = 'Removed in the last check';
            const newTag = 'New in the last check';
            const refresh = () => {
                setState({ refreshed: true });
                forceRender();
            };
            function isNil(x) {
                if (x === null || x === undefined)
                    return false;
                return true;
            }
            return (createElement("div", null,
                createElement("span", { variant: ['fade'] }, "Last values:"),
                createElement("table", null,
                    this.dataDisplayRow(valueTag, state.everything),
                    state.removed.has(WatcherMapNotReady) ? null : this.dataDisplayRow(removeTag, state.removed),
                    state.new.has(WatcherMapNotReady) ? null : this.dataDisplayRow(newTag, state.new)),
                createElement("br", null),
                createElement("span", { variant: ['fade'] }, "Other:"),
                createElement("table", null,
                    this.optionsRow('LiveSelector', priv.liveSelector, () => false),
                    this.optionsRow('ConsistentWatchRoot', priv.consistentWatchRoot, x => x === document.body || isNil(x)),
                    this.optionsRow('DomProxyOptions', priv.domProxyOption, x => Object.keys(x).length === 0),
                    this.optionsRow('KeyComparer', priv.keyComparer, x => x(test, test)),
                    this.optionsRow('ValueComparer', priv.valueComparer, x => x(test, test)),
                    this.optionsRow('MapNodeToKey', priv.mapNodeToKey, x => x(test, 0, []) === test),
                    this.optionsRow('FirstDOMProxy', obj.firstDOMProxy, x => true),
                    this.optionsRow('stopWatchOnDisconnected', priv.stopWatchOnDisconnected, isNil)),
                createElement("br", null),
                createElement("div", { variant: ['bigint'] }, "Actions:"),
                createElement("div", { onClick: () => console.log(priv.stack) }, "\uD83D\uDC40 See who created this Watcher"),
                createElement("div", { onClick: refresh }, "\uD83D\uDD03 Refresh the data"),
                createElement("div", { onClick: () => {
                        // @ts-ignore
                        obj.watcherChecker();
                        setTimeout(refresh, 50);
                    } }, "\uD83D\uDD28 Manually run the watcher's checker")));
        }
        optionsRow(name, object, isEmpty) {
            try {
                if (isEmpty(object))
                    return null;
            }
            catch (_a) { }
            return (createElement("tr", null,
                createElement("td", { variant: ['propertyName'] }, name),
                createElement("td", null,
                    createElement("object", { object: object }))));
        }
        dataDisplayRow(name, object) {
            return (createElement("tr", null,
                createElement("td", { style: { float: 'right' }, variant: ['propertyName'] }, name),
                createElement("td", null,
                    createElement("object", { object: object }))));
        }
        getPrivateItems(obj) {
            return {
                // @ts-ignore
                liveSelector: obj.liveSelector,
                // @ts-ignore
                isWatching: obj.isWatching,
                // @ts-ignore
                consistentWatchRoot: obj.consistentWatchRoot,
                // @ts-ignore
                domProxyOption: obj.domProxyOption,
                // @ts-ignore
                keyComparer: obj.keyComparer,
                // @ts-ignore
                valueComparer: obj.valueComparer,
                // @ts-ignore
                mapNodeToKey: obj.mapNodeToKey,
                // @ts-ignore
                lastCallbackMap: obj.lastCallbackMap,
                // @ts-ignore
                lastDOMProxyMap: obj.lastDOMProxyMap,
                // @ts-ignore
                lastKeyList: obj.lastKeyList,
                // @ts-ignore
                lastNodeList: obj.lastNodeList,
                // @ts-ignore
                liveSelector: obj.liveSelector,
                // @ts-ignore
                singleModeHasLastValue: obj.singleModeHasLastValue,
                // @ts-ignore
                singleModeLastValue: obj.singleModeLastValue,
                // @ts-ignore
                singleModeCallback: obj.singleModeCallback,
                // @ts-ignore
                stack: obj.stack,
                // @ts-ignore
                findNodeFromListByKey: obj.findNodeFromListByKey,
                // @ts-ignore
                stopWatchOnDisconnected: obj.stopWatchOnDisconnected,
            };
        }
    }

    /**
     * WatcherClass provides an abstract implementation of a watcher to the LiveSelector
     *
     * You should extend it and implement your own watch logic.
     *
     * Built-in watcher:
     *
     * - Mutation Observer watcher (based on MutationObserver api, watch DOM changes)
     * - Interval watcher (based on time interval)
     * - Event watcher (based on addEventListener)
     */
    /**
     * Use LiveSelector to watch dom change
     */
    class Watcher extends Emitter_1 {
        constructor(liveSelector) {
            var _a;
            super();
            /** Is the watcher running */
            this.isWatching = false;
            //#endregion
            //#region Multiple mode
            /** Found key list of last watch */
            this.lastKeyList = [];
            /** Found Node list of last watch */
            this.lastNodeList = [];
            /** Saved callback map of last watch */
            this.lastCallbackMap = new Map();
            /** Saved DOMProxy of last watch */
            this.lastDOMProxyMap = new Map();
            /** Find node from the given list by key */
            this.findNodeFromListByKey = (list, keys) => (key) => {
                const i = keys.findIndex((x) => this.keyComparer(x, key));
                if (i === -1)
                    return null;
                return list[i];
            };
            /** Does it has a last iteration value in single mode? */
            this.singleModeHasLastValue = false;
            //#endregion
            //#region Watcher callback
            /** Should be called every watch */
            this.watcherChecker = (deadline) => {
                if (!this.isWatching)
                    return;
                setTimeout(() => {
                    const thisNodes = this.liveSelector.evaluate();
                    if (this.singleMode)
                        return this.singleModeWatcherCallback(thisNodes);
                    else
                        return this.normalModeWatcherCallback(thisNodes);
                }, 0);
            };
            //#endregion
            //#region LiveSelector settings
            /**
             * The dom proxy option used in DOMProxy()
             */
            this.domProxyOption = {};
            //#endregion
            //#region firstDOMProxy
            /** The first DOMProxy */
            this._firstDOMProxy = DOMProxy(this.domProxyOption);
            //#endregion
            //#region Watcher settings
            /**
             * Map `Node -> Key`, in case of you don't want the default behavior
             */
            this.mapNodeToKey = defaultMapNodeToKey;
            /**
             * Compare between `key` and `key`, in case of you don't want the default behavior
             */
            this.keyComparer = defaultEqualityComparer;
            /**
             * Compare between `value` and `value`, in case of you don't want the default behavior
             */
            this.valueComparer = defaultEqualityComparer;
            //#endregion
            //#region Schedule a watcher callback run
            this.isWatcherCheckerRunning = false;
            this.needCheckerRunAgainAfterCurrentSchedule = false;
            /**
             * Schedule a watcher check
             */
            this.scheduleWatcherCheck = () => {
                if (this.isWatcherCheckerRunning) {
                    this.needCheckerRunAgainAfterCurrentSchedule = true;
                    return;
                }
                this.isWatcherCheckerRunning = true;
                this.watcherChecker();
                // Now watcherChecker is sync so this path will run at most once.
                while (this.needCheckerRunAgainAfterCurrentSchedule) {
                    this.watcherChecker();
                    this.needCheckerRunAgainAfterCurrentSchedule = false;
                }
                this.isWatcherCheckerRunning = false;
            };
            /** window.requestIdleCallback, or polyfill. */
            this.requestIdleCallback = requestIdleCallback;
            /** For debug usage. Just keep it. */
            this.stack = (_a = new Error().stack) !== null && _a !== void 0 ? _a : '';
            //#endregion
            //#region Warnings
            /**
             * Warning to remember if developer forget to call the startWatch.
             */
            this._warning_forget_watch_ = warning({
                fn: (stack) => console.warn('Did you forget to call `.startWatch()`?\n', stack),
            });
            this._warning_repeated_keys = warning({ once: true });
            this._warning_single_mode = warning({
                once: 15,
                fn(stack) {
                    console.warn(`Your watcher seems like only watching 1 node.
If you can make sure there is only 1 node to watch, call \`.enableSingleMode()\` on the watcher.
Or to ignore this message, call \`.dismissSingleModeWarning()\` on the watcher.\n`, stack);
                },
            });
            this._warning_mutation_ = warning({
                fn(stack) {
                    console.warn('When watcher is watching LiveSelector<not Node>, onNodeMutation will not be ignored\n', stack);
                },
            });
            this.liveSelector = liveSelector.clone();
        }
        //#region How to start and stop the watcher
        /** Let the watcher start to watching */
        startWatch(...args) {
            this.isWatching = true;
            this._warning_forget_watch_.ignored = true;
            this.watcherChecker();
            return this;
        }
        /** Stop the watcher */
        stopWatch(...args) {
            this.isWatching = false;
        }
        /**
         * Just like React hooks. Provide callbacks for each node changes.
         *
         * @param forEachFunction - You can return a set of functions that will be called on changes.
         *
         * @remarks
         *
         * Return value of `fn`
         *
         * - `void`: No-op
         *
         * - `((oldNode: T) => void)`: it will be called when the node is removed.
         *
         * - `{ onRemove?: (old: T) => void; onTargetChanged?: (newNode: T, oldNode: T) => void; onNodeMutation?: (node: T) => void }`,
         *
         * - - `onRemove` will be called when node is removed.
         *
         * - - `onTargetChanged` will be called when the node is still existing but target has changed.
         *
         * - - `onNodeMutation` will be called when the node is the same, but it inner content or attributes are modified.
         *
         * @example
         * ```
         * // ? if your LiveSelector return Element
         * watcher.useForeach((node, key, meta) => {
         *     console.log(node.innerHTML) // when a new key is found
         *     return {
         *         onRemove() { console.log('The node is gone!') },
         *         onTargetChanged() {
         *             console.log('Key is the same, but the node has changed!')
         *             console.log(node.innerHTML) // `node` is still the latest node!
         *             // appendChild, addEventListener will not lost too!
         *         },
         *         onNodeMutation() {
         *             console.log('Key and node are both the same, but node has been mutated.')
         *         }
         *     }
         * })
         *
         * // ? if your LiveSelector does not return Element but something else
         * watcher.useForeach((value, key) => {
         *     console.log(value) // your value here.
         *     return {
         *         onRemove() { console.log('The value is gone!') },
         *         onTargetChanged(value) {
         *             console.log('Key is the same, but the value has changed!')
         *             console.log(value) // New value
         *         }
         *     }
         * })
         *
         * ```
         */
        useForeach(forEach) {
            if (this.useForeachFn) {
                console.warn("You can't chain useForeach currently. The old one will be replaced.");
            }
            this.useForeachFn = forEach;
            return this;
        }
        //#endregion
        //#region .then()
        defaultStarterForThen() {
            this.startWatch();
        }
        /**
         * Start the watcher, once it emitted data, stop watching.
         * @param map - Map function transform T to Result
         * @param options - Options for watcher
         *
         * @remarks This is an implementation of `PromiseLike`
         *
         * @example
         * ```ts
         * const value = await watcher
         * const value2 = await watcher(undefined, undefined, { minimalResultsRequired: 5 })
         * ```
         */
        // The PromiseLike<T> interface
        then(onfulfilled, onrejected, options = {}) {
            this.defaultStarterForThen();
            const { minimalResultsRequired, timeout: timeoutTime } = {
                ...{
                    minimalResultsRequired: 1,
                    timeout: Infinity,
                },
                ...options,
            };
            let done = () => { };
            const then = async () => {
                if (minimalResultsRequired < 1)
                    throw new TypeError('Invalid minimalResultsRequired, must equal to or bigger than 1');
                if (this.singleMode && minimalResultsRequired > 1) {
                    console.warn('In single mode, the watcher will ignore the option minimalResultsRequired');
                }
                const result = this.liveSelector.evaluate();
                if (Array.isArray(result) && result.length >= minimalResultsRequired) {
                    // If we get the value now, return it
                    return result;
                }
                else if (this.singleMode) {
                    // If in single mode, return the value now
                    return result;
                }
                // Or return a promise to wait the value
                return new Promise((resolve, reject) => {
                    done = (state, val) => {
                        this.stopWatch();
                        this.off('onIteration', f);
                        if (state)
                            resolve(val);
                        else
                            reject(val);
                    };
                    const f = (v) => {
                        const nodes = Array.from(v.current.values());
                        if (this.singleMode && nodes.length >= 1) {
                            return done(true, nodes[0]);
                        }
                        if (nodes.length < minimalResultsRequired)
                            return;
                        return done(true, nodes);
                    };
                    this.on('onIteration', f);
                });
            };
            const withTimeout = timeout(then(), timeoutTime);
            withTimeout.finally(() => done(false, new Error('timeout')));
            return withTimeout.then(onfulfilled, onrejected);
        }
        /** Watcher callback with single mode is off */
        normalModeWatcherCallback(currentIteration) {
            /** Key list in this iteration */
            const thisKeyList = this.mapNodeToKey === defaultMapNodeToKey ? currentIteration : currentIteration.map(this.mapNodeToKey);
            //#region Warn about repeated keys
            {
                const uniq = uniqWith(thisKeyList, this.keyComparer);
                if (uniq.length < thisKeyList.length) {
                    this._warning_repeated_keys.warn(() => console.warn('There are repeated keys in your watcher. uniqKeys:', uniq, 'allKeys:', thisKeyList, ', to omit this warning, call `.omitWarningForRepeatedKeys()`'));
                }
            }
            //#endregion
            // New maps for the next generation
            /** Next generation Callback map */
            const nextCallbackMap = new Map();
            /** Next generation DOMProxy map */
            const nextDOMProxyMap = new Map();
            //#region Key is gone
            // Do: Delete node
            const findFromLast = this.findNodeFromListByKey(this.lastNodeList, this.lastKeyList);
            const goneKeys = differenceWith(this.lastKeyList, thisKeyList, this.keyComparer);
            {
                for (const oldKey of goneKeys) {
                    const proxy = this.lastDOMProxyMap.get(oldKey);
                    const callbacks = this.lastCallbackMap.get(oldKey);
                    const node = findFromLast(oldKey);
                    this.requestIdleCallback(() => {
                        applyUseForeachCallback(callbacks)('remove')(node);
                        if (proxy)
                            proxy.destroy();
                    }, 
                    // Delete node don't need a short timeout.
                    { timeout: 2000 });
                }
            }
            //#endregion
            //#region Key is new
            // Do: Add node
            const findFromNew = this.findNodeFromListByKey(currentIteration, thisKeyList);
            const newKeys = differenceWith(thisKeyList, this.lastKeyList, this.keyComparer);
            {
                for (const newKey of newKeys) {
                    if (!this.useForeachFn)
                        break;
                    const value = findFromNew(newKey);
                    if (value instanceof Node) {
                        const proxy = DOMProxy(this.domProxyOption);
                        proxy.realCurrent = value;
                        // This step must be sync.
                        const callbacks = this.useForeachFn(proxy.current, newKey, proxy);
                        if (hasMutationCallback(callbacks) && !proxy.observer.callback) {
                            proxy.observer.init = {
                                subtree: true,
                                childList: true,
                                characterData: true,
                                attributes: true,
                            };
                            proxy.observer.callback = (m) => { var _a; return (_a = callbacks.onNodeMutation) === null || _a === void 0 ? void 0 : _a.call(callbacks, value, m); };
                        }
                        nextCallbackMap.set(newKey, callbacks);
                        nextDOMProxyMap.set(newKey, proxy);
                    }
                    else {
                        const callbacks = this.useForeachFn(value, newKey, undefined);
                        applyUseForeachCallback(callbacks)('warn mutation')(this._warning_mutation_);
                        nextCallbackMap.set(newKey, callbacks);
                    }
                }
            }
            //#endregion
            //#region Key is the same, but node is changed
            // Do: Change reference
            const oldSameKeys = intersectionWith(this.lastKeyList, thisKeyList, this.keyComparer);
            const newSameKeys = intersectionWith(thisKeyList, this.lastKeyList, this.keyComparer);
            const changedNodes = oldSameKeys
                .map((x) => [findFromLast(x), findFromNew(x), x, newSameKeys.find((newK) => this.keyComparer(newK, x))])
                .filter(([a, b]) => this.valueComparer(a, b) === false);
            for (const [oldNode, newNode, oldKey, newKey] of changedNodes) {
                const fn = this.lastCallbackMap.get(oldKey);
                if (newNode instanceof Node) {
                    const proxy = this.lastDOMProxyMap.get(oldKey);
                    proxy.realCurrent = newNode;
                }
                // This should be ordered. So keep it sync now.
                applyUseForeachCallback(fn)('target change')(newNode, oldNode);
            }
            //#endregion
            // Key is the same, node is the same
            // Do: nothing
            // #region Final: Copy the same keys
            for (const newKey of newSameKeys) {
                const oldKey = oldSameKeys.find((oldKey) => this.keyComparer(newKey, oldKey));
                nextCallbackMap.set(newKey, this.lastCallbackMap.get(oldKey));
                nextDOMProxyMap.set(newKey, this.lastDOMProxyMap.get(oldKey));
            }
            this.lastCallbackMap = nextCallbackMap;
            this.lastDOMProxyMap = nextDOMProxyMap;
            this.lastKeyList = thisKeyList;
            this.lastNodeList = currentIteration;
            const has = (item) => Boolean(item === null || item === void 0 ? void 0 : item.length);
            if (has(this.$.onIteration) && changedNodes.length + goneKeys.length + newKeys.length > 0) {
                // Make a copy to prevent modifications
                const newMap = new Map(newKeys.map((key) => [key, findFromNew(key)]));
                const removedMap = new Map(goneKeys.map((key) => [key, findFromLast(key)]));
                const currentMap = new Map(thisKeyList.map((key) => [key, findFromNew(key)]));
                this.emit('onIteration', {
                    new: newMap,
                    removed: removedMap,
                    current: currentMap,
                });
            }
            if (has(this.$.onChange))
                for (const [oldNode, newNode, oldKey, newKey] of changedNodes) {
                    this.emit('onChange', { oldValue: oldNode, newValue: newNode, oldKey, newKey });
                }
            if (has(this.$.onRemove))
                for (const key of goneKeys) {
                    this.emit('onRemove', { key, value: findFromLast(key) });
                }
            if (has(this.$.onAdd))
                for (const key of newKeys) {
                    this.emit('onAdd', { key, value: findFromNew(key) });
                }
            // For firstDOMProxy
            const first = currentIteration[0];
            if (first instanceof Node) {
                this._firstDOMProxy.realCurrent = first;
            }
            else if (first === undefined || first === null) {
                this._firstDOMProxy.realCurrent = null;
            }
            //#endregion
            //#region Prompt developer to open single mode
            if (currentIteration.length > 1)
                this._warning_single_mode.ignored = true;
            if (currentIteration.length === 1)
                this._warning_single_mode.warn();
            //#endregion
        }
        //#endregion
        //#region Single mode
        /**
         * Is the single mode is on.
         */
        get singleMode() {
            // @ts-ignore
            return this.liveSelector.isSingleMode;
        }
        /** Watcher callback for single mode */
        singleModeWatcherCallback(firstValue) {
            if (firstValue === undefined) {
                this.firstDOMProxy.realCurrent = null;
            }
            if (firstValue instanceof Node) {
                this.firstDOMProxy.realCurrent = firstValue;
            }
            if (hasMutationCallback(this.singleModeCallback) && !this._firstDOMProxy.observer.callback) {
                this._firstDOMProxy.observer.init = { attributes: true, characterData: true, subtree: true };
                this._firstDOMProxy.observer.callback = (e) => hasMutationCallback(this.singleModeCallback) &&
                    this.singleModeCallback.onNodeMutation(this._firstDOMProxy.current, e);
            }
            // ? Case: value is gone
            if (this.singleModeHasLastValue && isNil(firstValue)) {
                applyUseForeachCallback(this.singleModeCallback)('remove')(this.singleModeLastValue);
                if (this.singleModeLastValue instanceof Node) {
                    this._firstDOMProxy.realCurrent = null;
                }
                this.emit('onRemove', { key: undefined, value: this.singleModeLastValue });
                this.singleModeLastValue = undefined;
                this.singleModeHasLastValue = false;
            }
            // ? Case: value is new
            else if (!this.singleModeHasLastValue && Boolean(firstValue)) {
                if (this.useForeachFn) {
                    if (firstValue instanceof Node) {
                        this.singleModeCallback = this.useForeachFn(this.firstDOMProxy.current, undefined, this.firstDOMProxy);
                    }
                    else {
                        this.singleModeCallback = this.useForeachFn(firstValue, undefined, undefined);
                        applyUseForeachCallback(this.singleModeCallback)('warn mutation')(this._warning_mutation_);
                    }
                }
                this.emit('onAdd', { key: undefined, value: firstValue });
                this.singleModeLastValue = firstValue;
                this.singleModeHasLastValue = true;
            }
            // ? Case: value has changed
            else if (this.singleModeHasLastValue && !this.valueComparer(this.singleModeLastValue, firstValue)) {
                applyUseForeachCallback(this.singleModeCallback)('target change')(firstValue, this.singleModeLastValue);
                this.emit('onChange', {
                    newKey: undefined,
                    oldKey: undefined,
                    newValue: firstValue,
                    oldValue: this.singleModeLastValue,
                });
                this.singleModeLastValue = firstValue;
                this.singleModeHasLastValue = true;
            }
            // ? Case: value is not changed
            else ;
            return;
        }
        /**
         * Set option for DOMProxy
         * @param option - DOMProxy options
         */
        setDOMProxyOption(option) {
            this.domProxyOption = option;
            const oldProxy = this._firstDOMProxy;
            if (oldProxy.has('after') ||
                oldProxy.has('before') ||
                oldProxy.has('afterShadow') ||
                oldProxy.has('beforeShadow') ||
                oldProxy.realCurrent) {
                console.warn("Don't set DOMProxy before using it.");
            }
            this._firstDOMProxy = DOMProxy(option);
            return this;
        }
        //#endregion
        //#region events
        addListener(type, callback) {
            this.on(type, callback);
            return this;
        }
        removeListener(type, callback) {
            this.off(type, callback);
            return this;
        }
        /**
         * This DOMProxy always point to the first node in the LiveSelector
         */
        get firstDOMProxy() {
            return this._firstDOMProxy;
        }
        /**
         * To help identify same nodes in different iteration,
         * you need to implement a map function that map `node` to `key`
         *
         * If the key is changed, the same node will call through `forEachRemove` then `forEach`
         *
         * @param keyAssigner - map `node` to `key`, defaults to `node => node`
         *
         * @example
         * ```ts
         * watcher.assignKeys(node => node.innerText)
         * ```
         */
        assignKeys(keyAssigner) {
            this.noNeedInSingleMode(this.assignKeys.name);
            this.mapNodeToKey = keyAssigner;
            return this;
        }
        /**
         * To help identify same nodes in different iteration,
         * you need to implement a map function to compare `node` and `key`
         *
         * You probably don't need this.
         *
         * @param keyComparer - compare between two keys, defaults to `===`
         * @param valueComparer - compare between two value, defaults to `===`
         *
         * @example
         * ```ts
         * watcher.setComparer(
         *     (a, b) => JSON.stringify(a) === JSON.stringify(b),
         *     (a, b) => a.equals(b)
         * )
         * ```
         */
        setComparer(keyComparer, valueComparer) {
            if (keyComparer)
                this.noNeedInSingleMode(this.setComparer.name);
            if (keyComparer)
                this.keyComparer = keyComparer;
            if (valueComparer)
                this.valueComparer = valueComparer;
            return this;
        }
        //#endregion
        //#region Utils
        /**
         * Get DOMProxy by key.
         * DOMProxy will be unavailable if it is deleted
         * @param key - Key used to find DOMProxy
         */
        getDOMProxyByKey(key) {
            this.noNeedInSingleMode(this.getDOMProxyByKey.name);
            return this.lastDOMProxyMap.get([...this.lastDOMProxyMap.keys()].find((_) => this.keyComparer(_, key))) || null;
        }
        /**
         * If you're expecting Watcher may not be called, call this function, this will omit the warning.
         */
        omitWarningForForgetWatch() {
            this._warning_forget_watch_.ignored = true;
            return this;
        }
        /**
         * If you're expecting repeating keys, call this function, this will omit the warning.
         */
        omitWarningForRepeatedKeys() {
            this.noNeedInSingleMode(this.omitWarningForRepeatedKeys.name);
            this._warning_repeated_keys.ignored = true;
            return this;
        }
        /**
         * Dismiss the warning that let you enable single mode but the warning is false positive.
         */
        dismissSingleModeWarning() {
            this._warning_single_mode.ignored = true;
            return this;
        }
        noNeedInSingleMode(method) {
            if (this.singleMode)
                console.warn(`Method ${method} has no effect in SingleMode watcher`);
        }
        //#endregion
        /**
         * Call this function to enhance the debug experience in the Chrome DevTools
         *
         * You need to open "Enable custom formatters" in your DevTools settings.
         */
        static enhanceDebugger() {
            installCustomObjectFormatter(new WatcherDevtoolsEnhancer());
            this.enhanceDebugger = () => { };
        }
    }
    //#region Default implementations
    function defaultEqualityComparer(a, b) {
        return a === b;
    }
    function defaultMapNodeToKey(node) {
        return node;
    }
    function hasMutationCallback(x) {
        if (typeof x !== 'object' || x === null)
            return false;
        if ('onNodeMutation' in x && typeof x.onNodeMutation === 'function')
            return true;
        return false;
    }
    function applyUseForeachCallback(callback) {
        const cb = callback;
        let remove, change, mutation;
        if (typeof cb === 'function')
            remove = cb;
        else if (cb !== undefined) {
            const { onNodeMutation, onRemove, onTargetChanged } = cb;
            [remove, change, mutation] = [onRemove, onTargetChanged, onNodeMutation];
        }
        return ((type) => (...args) => {
            if (type === 'remove')
                remove && remove(...args);
            else if (type === 'target change')
                change && change(...args);
            else if (type === 'warn mutation')
                mutation && args[0]();
        });
    }
    function warning(_ = {}) {
        var _a;
        const { dev, once, fn } = { ...{ dev: false, once: true, fn: () => { } }, ..._ };
        if (dev)
            return { warn(f = fn) { }, ignored: true, stack: '' };
        const [_0, _1, _2, ...lines] = ((_a = new Error().stack) !== null && _a !== void 0 ? _a : '').split('\n');
        const stack = lines.join('\n');
        let warned = 0;
        const obj = {
            ignored: false,
            stack,
            warn(f = fn) {
                if (obj.ignored)
                    return;
                if (warned > 0 && Boolean(once))
                    return;
                if (typeof once === 'number' && warned <= once)
                    return;
                warned = warned + 1;
                f(stack);
            },
        };
        return obj;
    }
    //#endregion

    /**
     * A watcher based on MutationObserver
     *
     * @example
     * ```ts
     * new MutationObserverWatcher(ls)
     *     .useForeach(node => {
     *         console.log(node)
     *     })
     *     .startWatch()
     * ```
     */
    class MutationObserverWatcher extends Watcher {
        constructor(
        /** LiveSelector that this object holds */
        liveSelector, 
        /**
         * If you know the element is always inside of a node, set this option.
         * This may improve performance.
         */
        consistentWatchRoot = document.body, 
        /**
         * Call stopWatch() when the consistentWatchRoot disconnected.
         */
        stopWatchOnDisconnected = false) {
            super(liveSelector);
            this.liveSelector = liveSelector;
            this.consistentWatchRoot = consistentWatchRoot;
            this.stopWatchOnDisconnected = stopWatchOnDisconnected;
            /** Observe whole document change */
            this.observer = new MutationObserver((mutations, observer) => {
                if (this.consistentWatchRoot.isConnected === false && this.stopWatchOnDisconnected === true) {
                    return this.stopWatch();
                }
                this.requestIdleCallback(this.scheduleWatcherCheck);
            });
            setTimeout(this._warning_forget_watch_.warn, 5000);
        }
        /**
         * Start an MutationObserverWatcher.
         *
         * @remarks
         * You must provide a reasonable MutationObserverInit to reduce dom events.
         *
         * https://mdn.io/MutationObserverInit
         */
        startWatch(options) {
            super.startWatch();
            this.isWatching = true;
            const watch = (root) => {
                this.observer.observe(root || document.body, options);
                this.scheduleWatcherCheck();
            };
            if (document.readyState !== 'complete' && this.consistentWatchRoot === null) {
                document.addEventListener('readystatechange', () => document.readyState !== 'complete' && watch());
            }
            else
                watch(this.consistentWatchRoot);
            return this;
        }
        defaultStarterForThen() {
            if (!this.isWatching)
                this.startWatch({ subtree: true, childList: true, characterData: true });
        }
        /**
         * {@inheritdoc Watcher.stopWatch}
         */
        stopWatch() {
            super.stopWatch();
            this.observer.disconnect();
        }
    }

    /**
     * A watcher based on time interval.
     *
     * @example
     * ```ts
     * new IntervalWatcher(ls)
     * .useForeach(node => {
     *     console.log(node)
     * })
     * .startWatch(1000)
     * ```
     */
    class IntervalWatcher extends Watcher {
        /** Start to watch the LiveSelector at a interval(ms). */
        startWatch(interval) {
            super.startWatch();
            this.timer = setInterval(this.scheduleWatcherCheck, interval);
            return this;
        }
        /**
         * {@inheritdoc Watcher.stopWatch}
         */
        stopWatch() {
            super.stopWatch();
            if (this.timer)
                clearInterval(this.timer);
        }
    }

    /**
     * A Watcher based on event handlers.
     *
     * @example
     * ```ts
     * const e = new EventWatcher(ls).useForeach(node => console.log(node))
     * document.addEventListener('event', e.eventListener)
     * ```
     */
    class EventWatcher extends Watcher {
        constructor(liveSelector) {
            super(liveSelector);
            /**
             * Use this function as event listener to invoke watcher.
             */
            this.eventListener = () => {
                this.requestIdleCallback(this.scheduleWatcherCheck, { timeout: 500 });
            };
            this.startWatch();
        }
    }

    /** Current running environment of Web Extension */
    exports.Environment = void 0;
    (function (Environment) {
        /** has browser as a global variable */ Environment[Environment["HasBrowserAPI"] = 2] = "HasBrowserAPI";
        /** URL protocol ends with "-extension:" */ Environment[Environment["ExtensionProtocol"] = 4] = "ExtensionProtocol";
        /** Current running context is Content Script */ Environment[Environment["ContentScript"] = 8] = "ContentScript";
        // userScript = 1 << 4,
        /** URL of the manifest.background, generated background page, or manifest v3 service worker */
        Environment[Environment["ManifestBackground"] = 64] = "ManifestBackground";
        /** URL is listed in the manifest.options_ui */ Environment[Environment["ManifestOptions"] = 128] = "ManifestOptions";
        /**
         * URL is listed in the manifest.browser_action
         * @deprecated It will be removed in manifest v3. Use ManifestAction instead */ Environment[Environment["ManifestBrowserAction"] = 256] = "ManifestBrowserAction";
        /** URL is listed in the manifest.action */ Environment[Environment["ManifestAction"] = 256] = "ManifestAction";
        /**
         * URL is listed in the manifest.page_action
         * @deprecated Suggest to define browser_action instead.
         */ Environment[Environment["ManifestPageAction"] = 512] = "ManifestPageAction";
        /** URL is listed in the manifest.devtools_page */ Environment[Environment["ManifestDevTools"] = 1024] = "ManifestDevTools";
        /** URL is listed in the manifest.sidebar_action. Firefox Only */ Environment[Environment["ManifestSidebar"] = 2048] = "ManifestSidebar";
        /** URL is listed in the manifest.chrome_url_overrides.newtab */ Environment[Environment["ManifestOverridesNewTab"] = 4096] = "ManifestOverridesNewTab";
        /** URL is listed in the manifest.chrome_url_overrides.bookmarks */ Environment[Environment["ManifestOverridesBookmarks"] = 8192] = "ManifestOverridesBookmarks";
        /** URL is listed in the manifest.chrome_url_overrides.history */ Environment[Environment["ManifestOverridesHistory"] = 16384] = "ManifestOverridesHistory";
        // DO NOT USE value that bigger than 1 << 20
    })(exports.Environment || (exports.Environment = {}));
    let result;
    /**
     * Get the current running environment
     * @remarks You can use the global variable `__holoflows_kit_get_environment_debug__` to overwrite the return value if the current hostname is localhost or 127.0.0.1
     */
    function getEnvironment() {
        var _a, _b, _c, _d, _e, _f;
        if (result !== undefined)
            return result;
        try {
            if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
                const val = __holoflows_kit_get_environment_debug__;
                if (val !== undefined)
                    return Number(val);
            }
        }
        catch (_g) { }
        let flag = 0;
        // Scheme test
        try {
            const scheme = location.protocol;
            if (scheme.endsWith('-extension:'))
                flag |= exports.Environment.ExtensionProtocol;
        }
        catch (_h) { }
        // @ts-ignore
        const chromeLike = isChromeLike();
        if (!isBrowserLike() && chromeLike) {
            console.error([
                "Cannot find 'browser'. This library does not work with 'chrome' namespace.",
                'Please use the polyfill (https://www.npmjs.com/package/webextension-polyfill)',
            ].join('\n'));
        }
        const browser = getBrowserLikeNS();
        // Browser API test
        if (browser) {
            flag |= exports.Environment.HasBrowserAPI;
            if (!(flag & exports.Environment.ExtensionProtocol))
                flag |= exports.Environment.ContentScript;
            else {
                try {
                    const manifest = browser.runtime.getManifest();
                    const current = location.pathname;
                    const background = 
                    // @ts-expect-error Manifest V3
                    ((_a = manifest.background) === null || _a === void 0 ? void 0 : _a.service_worker) ||
                        ((_b = manifest.background) === null || _b === void 0 ? void 0 : _b.page) ||
                        manifest.background_page ||
                        '/_generated_background_page.html';
                    const options = ((_c = manifest.options_ui) === null || _c === void 0 ? void 0 : _c.page) || manifest.options_page;
                    if (current === normalize(background))
                        flag |= exports.Environment.ManifestBackground;
                    // TODO: this property support i18n. What will I get when call browser.runtime.getManifest()?
                    if (current === normalize((_d = manifest.browser_action) === null || _d === void 0 ? void 0 : _d.default_popup))
                        flag |= exports.Environment.ManifestAction;
                    if (current === normalize((_e = manifest.sidebar_action) === null || _e === void 0 ? void 0 : _e.default_panel))
                        flag |= exports.Environment.ManifestSidebar;
                    if (current === normalize(options))
                        flag |= exports.Environment.ManifestOptions;
                    if (current === normalize(manifest.devtools_page))
                        flag |= exports.Environment.ManifestDevTools;
                    if (current === normalize((_f = manifest.page_action) === null || _f === void 0 ? void 0 : _f.default_popup))
                        flag |= exports.Environment.ManifestPageAction;
                    // TODO: this property support i18n.
                    const { bookmarks, history, newtab } = manifest.chrome_url_overrides || {};
                    if (current === normalize(bookmarks))
                        flag |= exports.Environment.ManifestOverridesBookmarks;
                    if (current === normalize(history))
                        flag |= exports.Environment.ManifestOverridesHistory;
                    if (current === normalize(newtab))
                        flag |= exports.Environment.ManifestOverridesNewTab;
                }
                catch (_j) { }
            }
        }
        return (result = flag);
        function normalize(x) {
            if (x === undefined)
                return '_';
            try {
                // on firefox it is a full qualified URL
                return new URL(x).pathname;
            }
            catch (_a) {
                // on chrome it is unmodified
                if (x[0] !== '/')
                    return '/' + x;
                return x;
            }
        }
    }
    function isChromeLike() {
        try {
            return !!chrome.runtime.getURL;
        }
        catch (_a) { }
        return false;
    }
    function isBrowserLike() {
        try {
            return !!browser.runtime.getURL;
        }
        catch (_a) { }
        return false;
    }
    function getBrowserLikeNS() {
        try {
            if (typeof browser.runtime.getURL === 'function')
                return browser;
        }
        catch (_a) { }
        try {
            if (typeof chrome.runtime.getURL === 'function')
                return chrome;
        }
        catch (_b) { }
        return undefined;
    }
    /**
     * Print the Environment bit flag in a human-readable format
     * @param e - Printing environment bit flag
     */
    function printEnvironment(e = getEnvironment()) {
        const flag = [];
        if (exports.Environment.ContentScript & e)
            flag.push('ContentScript');
        if (exports.Environment.ExtensionProtocol & e)
            flag.push('ExtensionProtocol');
        if (exports.Environment.HasBrowserAPI & e)
            flag.push('HasBrowserAPI');
        if (exports.Environment.ManifestBackground & e)
            flag.push('ManifestBackground');
        if (exports.Environment.ManifestDevTools & e)
            flag.push('ManifestDevTools');
        if (exports.Environment.ManifestOptions & e)
            flag.push('ManifestOptions');
        if (exports.Environment.ManifestPageAction & e)
            flag.push('ManifestPageAction');
        if (exports.Environment.ManifestOverridesBookmarks & e)
            flag.push('ManifestOverridesBookmarks');
        if (exports.Environment.ManifestOverridesHistory & e)
            flag.push('ManifestOverridesHistory');
        if (exports.Environment.ManifestOverridesNewTab & e)
            flag.push('ManifestOverridesNewTab');
        if (exports.Environment.ManifestAction & e)
            flag.push('ManifestBrowserAction');
        if (exports.Environment.ManifestSidebar & e)
            flag.push('ManifestSidebar');
        return flag.join('|');
    }
    /**
     * Assert the current environment satisfy the expectation
     * @param env - The expected environment
     */
    function assertEnvironment(env) {
        if (!isEnvironment(env))
            throw new TypeError(`Running in the wrong context, (expected ${printEnvironment(env)}, actually ${printEnvironment()})`);
    }
    assertEnvironment.oneOf = (...args) => {
        return assertEnvironment(args.reduce((p, c) => p | c));
    };
    assertEnvironment.allOf = (...args) => {
        return args.map(assertEnvironment);
    };
    /**
     * Assert the current environment NOT satisfy the rejected flags
     * @param env - The rejected environment
     */
    function assertNotEnvironment(env) {
        if (getEnvironment() & env)
            throw new TypeError(`Running in wrong context, (expected not match ${printEnvironment(env)}, actually ${printEnvironment()})`);
    }
    assertNotEnvironment.oneOf = (...args) => {
        return assertNotEnvironment(args.reduce((p, c) => p | c));
    };
    assertNotEnvironment.allOf = (...args) => {
        return args.map(assertNotEnvironment);
    };
    /**
     * Check if the current environment satisfy the expectation
     * @param env - The expectation environment
     */
    function isEnvironment(env) {
        const now = getEnvironment();
        return Boolean(env & now);
    }
    isEnvironment.oneOf = (...args) => {
        return isEnvironment(args.reduce((p, c) => p | c));
    };
    isEnvironment.allOf = (...args) => {
        return args.map(isEnvironment);
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var dom = {};

    var eventIterator = {};

    Object.defineProperty(eventIterator, "__esModule", { value: true });
    class EventQueue {
        constructor() {
            this.pullQueue = [];
            this.pushQueue = [];
            this.eventHandlers = {};
            this.isPaused = false;
            this.isStopped = false;
        }
        push(value) {
            if (this.isStopped)
                return;
            const resolution = { value, done: false };
            if (this.pullQueue.length) {
                const placeholder = this.pullQueue.shift();
                if (placeholder)
                    placeholder.resolve(resolution);
            }
            else {
                this.pushQueue.push(Promise.resolve(resolution));
                if (this.highWaterMark !== undefined &&
                    this.pushQueue.length >= this.highWaterMark &&
                    !this.isPaused) {
                    this.isPaused = true;
                    if (this.eventHandlers.highWater) {
                        this.eventHandlers.highWater();
                    }
                    else if (console) {
                        console.warn(`EventIterator queue reached ${this.pushQueue.length} items`);
                    }
                }
            }
        }
        stop() {
            if (this.isStopped)
                return;
            this.isStopped = true;
            this.remove();
            for (const placeholder of this.pullQueue) {
                placeholder.resolve({ value: undefined, done: true });
            }
            this.pullQueue.length = 0;
        }
        fail(error) {
            if (this.isStopped)
                return;
            this.isStopped = true;
            this.remove();
            if (this.pullQueue.length) {
                for (const placeholder of this.pullQueue) {
                    placeholder.reject(error);
                }
                this.pullQueue.length = 0;
            }
            else {
                const rejection = Promise.reject(error);
                /* Attach error handler to avoid leaking an unhandled promise rejection. */
                rejection.catch(() => { });
                this.pushQueue.push(rejection);
            }
        }
        remove() {
            Promise.resolve().then(() => {
                if (this.removeCallback)
                    this.removeCallback();
            });
        }
        [Symbol.asyncIterator]() {
            return {
                next: (value) => {
                    const result = this.pushQueue.shift();
                    if (result) {
                        if (this.lowWaterMark !== undefined &&
                            this.pushQueue.length <= this.lowWaterMark &&
                            this.isPaused) {
                            this.isPaused = false;
                            if (this.eventHandlers.lowWater) {
                                this.eventHandlers.lowWater();
                            }
                        }
                        return result;
                    }
                    else if (this.isStopped) {
                        return Promise.resolve({ value: undefined, done: true });
                    }
                    else {
                        return new Promise((resolve, reject) => {
                            this.pullQueue.push({ resolve, reject });
                        });
                    }
                },
                return: () => {
                    this.isStopped = true;
                    this.pushQueue.length = 0;
                    this.remove();
                    return Promise.resolve({ value: undefined, done: true });
                },
            };
        }
    }
    class EventIterator$1 {
        constructor(listen, { highWaterMark = 100, lowWaterMark = 1 } = {}) {
            const queue = new EventQueue();
            queue.highWaterMark = highWaterMark;
            queue.lowWaterMark = lowWaterMark;
            queue.removeCallback =
                listen({
                    push: value => queue.push(value),
                    stop: () => queue.stop(),
                    fail: error => queue.fail(error),
                    on: (event, fn) => {
                        queue.eventHandlers[event] = fn;
                    },
                }) || (() => { });
            this[Symbol.asyncIterator] = () => queue[Symbol.asyncIterator]();
            Object.freeze(this);
        }
    }
    eventIterator.EventIterator = EventIterator$1;
    eventIterator.default = EventIterator$1;

    Object.defineProperty(dom, "__esModule", { value: true });
    const event_iterator_1 = eventIterator;
    var EventIterator = dom.EventIterator = event_iterator_1.EventIterator;
    function subscribe(event, options, evOptions) {
        return new event_iterator_1.EventIterator(({ push }) => {
            this.addEventListener(event, push, options);
            return () => this.removeEventListener(event, push, options);
        }, evOptions);
    }
    dom.subscribe = subscribe;
    dom.default = event_iterator_1.EventIterator;

    var _WebExtensionMessage_domain, _WebExtensionMessage_events, _WebExtensionMessage_eventRegistry;
    exports.MessageTarget = void 0;
    (function (MessageTarget) {
        /** Current execution context */ MessageTarget[MessageTarget["IncludeLocal"] = 1048576] = "IncludeLocal";
        MessageTarget[MessageTarget["LocalOnly"] = 2097152] = "LocalOnly";
        /** Visible page, maybe have more than 1 page. */ MessageTarget[MessageTarget["VisiblePageOnly"] = 4194304] = "VisiblePageOnly";
        /** Page that has focus (devtools not included), 0 or 1 page. */ MessageTarget[MessageTarget["FocusedPageOnly"] = 8388608] = "FocusedPageOnly";
        /** Send to external. */ MessageTarget[MessageTarget["External"] = 16777216] = "External";
        /** Externals not included */ MessageTarget[MessageTarget["Broadcast"] = 2] = "Broadcast";
        MessageTarget[MessageTarget["All"] = 1048578] = "All";
    })(exports.MessageTarget || (exports.MessageTarget = {}));
    const throwSetter = () => {
        throw new TypeError();
    };
    // Only available in background page
    const backgroundOnlyLivingPorts = new Map();
    // Only be set in other pages
    let currentTabID = -1;
    let externalMode = false;
    // Shared global
    let postMessage = undefined;
    const domainRegistry = new Emitter_1();
    const constant = '@holoflows/kit/WebExtensionMessage/setup';
    class WebExtensionMessage {
        /**
         * @param options - WebExtensionMessage options
         */
        constructor(options) {
            var _a;
            _WebExtensionMessage_domain.set(this, void 0);
            //#region Simple API
            _WebExtensionMessage_events.set(this, new Proxy({ __proto__: null }, {
                get: (cache, event) => {
                    if (typeof event !== 'string')
                        throw new Error('Only string can be event keys');
                    if (cache[event])
                        return cache[event];
                    const registry = UnboundedRegistry(this, event, __classPrivateFieldGet(this, _WebExtensionMessage_eventRegistry, "f"));
                    Object.defineProperty(cache, event, { value: registry });
                    return registry;
                },
                defineProperty: () => false,
                setPrototypeOf: () => false,
                set: throwSetter,
            })
            /** Event listeners */
            );
            //#endregion
            // declare readonly eventTarget: { readonly [key in keyof Message]: UnboundedRegister<Message[key], EventTargetRegister<Message>> }
            // declare readonly eventEmitter: { readonly [key in keyof Message]: UnboundedRegister<Message[key], EventEmitterRegister<Message>> }
            /**
             * Watch new tabs created and get event listener register of that tab.
             *
             * This API only works in the BackgroundPage.
             */
            this.serialization = { deserialization: (x) => x, serialization: (x) => x };
            this.logFormatter = (instance, key, data) => {
                return [
                    `%cReceive%c %c${String(key)}`,
                    'background: rgba(0, 255, 255, 0.6); color: black; padding: 0px 6px; border-radius: 4px;',
                    '',
                    'text-decoration: underline',
                    data,
                ];
            };
            this.enableLog = false;
            this.log = console.log;
            _WebExtensionMessage_eventRegistry.set(this, new Emitter_1());
            // invoke the warning if needed
            getEnvironment();
            try {
                if (options === null || options === void 0 ? void 0 : options.externalExtensionID) {
                    WebExtensionMessage.setup(options.externalExtensionID);
                }
                else {
                    typeof browser === 'object' && browser && WebExtensionMessage.setup(undefined);
                }
            }
            catch (e) {
                console.error('Setup failed', e);
            }
            const domain = (__classPrivateFieldSet(this, _WebExtensionMessage_domain, (_a = options === null || options === void 0 ? void 0 : options.domain) !== null && _a !== void 0 ? _a : '', "f"));
            domainRegistry.on(domain, async (payload) => {
                if (!isInternalMessageType(payload))
                    return;
                let { event, data, target } = payload;
                if (!shouldAcceptThisMessage(target))
                    return;
                data = await this.serialization.deserialization(data);
                if (this.enableLog) {
                    this.log(...this.logFormatter(this, event, data));
                }
                __classPrivateFieldGet(this, _WebExtensionMessage_eventRegistry, "f").emit(event, data);
            });
        }
        // Only execute once.
        static setup(id) {
            if (id)
                externalMode = true;
            if (isEnvironment(exports.Environment.ManifestBackground)) {
                // Wait for other pages to connect
                browser.runtime.onConnect.addListener((port) => {
                    if (port.name !== constant)
                        return; // not for ours
                    const sender = port.sender;
                    backgroundOnlyLivingPorts.set(port, { sender });
                    backgroundPortBoarding(port, sender);
                });
                WebExtensionMessage.setup = () => { };
                postMessage = backgroundPageMessageHandler;
            }
            else {
                function reconnect() {
                    const port = id
                        ? // @ts-ignore
                            chrome.runtime.connect(id, { name: constant })
                        : browser.runtime.connect({ name: constant });
                    postMessage = otherEnvMessageHandler.bind(port);
                    // don't reconnect when external connect
                    otherEnvPortBoarding(port, id ? () => { } : reconnect);
                }
                reconnect();
                WebExtensionMessage.setup = () => { };
            }
        }
        /** If the connection is not accepted, it will be passed to the next handler until it is handled or no more handlers */
        static acceptExternalConnect(acceptExternalConnectFn) {
            this.acceptExternalConnectFns.add(acceptExternalConnectFn);
            if (!isEnvironment(exports.Environment.ManifestBackground))
                return;
            // Wait for other pages to connect
            // @ts-ignore
            const c = chrome;
            c.runtime.onConnectExternal.addListener((port) => {
                if (port.name !== constant)
                    return; // not for ours
                const sender = port.sender;
                if (!sender)
                    return port.disconnect();
                let accepted = false;
                for (const each of this.acceptExternalConnectFns) {
                    const result = each(sender);
                    if (!result)
                        continue;
                    if (result === true)
                        backgroundOnlyLivingPorts.set(port, { sender, external: true, environment: 0 });
                    else
                        backgroundOnlyLivingPorts.set(port, { sender, environment: result.acceptAs });
                    accepted = true;
                    break;
                }
                if (!accepted)
                    return port.disconnect();
                backgroundPortBoarding(port, sender);
            });
            this.acceptExternalConnect = (f) => void this.acceptExternalConnectFns.add(f);
            postMessage = backgroundPageMessageHandler;
        }
        /** Same message name within different domain won't collide with each other. */
        get domain() {
            return __classPrivateFieldGet(this, _WebExtensionMessage_domain, "f");
        }
        /** Event listeners */
        get events() {
            return __classPrivateFieldGet(this, _WebExtensionMessage_events, "f");
        }
        get eventRegistry() {
            return __classPrivateFieldGet(this, _WebExtensionMessage_eventRegistry, "f");
        }
    }
    _WebExtensionMessage_domain = new WeakMap(), _WebExtensionMessage_events = new WeakMap(), _WebExtensionMessage_eventRegistry = new WeakMap();
    WebExtensionMessage.acceptExternalConnectFns = new Set();
    function isInternalMessageType(e) {
        if (typeof e !== 'object' || e === null)
            return false;
        const { domain, event, target } = e;
        // Message is not for us
        if (typeof domain !== 'string')
            return false;
        if (typeof event !== 'string')
            return false;
        if (typeof target !== 'object' || target === null)
            return false;
        return true;
    }
    function shouldAcceptThisMessage(target) {
        var _a;
        if (target.kind === 'tab')
            return target.id === currentTabID && currentTabID !== -1;
        if (target.kind === 'port')
            return true;
        const flag = target.target;
        if (flag & (exports.MessageTarget.IncludeLocal | exports.MessageTarget.LocalOnly))
            return true;
        const here = getEnvironment();
        if (flag & exports.MessageTarget.FocusedPageOnly)
            return typeof document === 'object' && ((_a = document === null || document === void 0 ? void 0 : document.hasFocus) === null || _a === void 0 ? void 0 : _a.call(document));
        if (flag & exports.MessageTarget.VisiblePageOnly) {
            // background page has document.visibilityState === 'visible' for reason I don't know why
            if (here & exports.Environment.ManifestBackground)
                return false;
            return typeof document === 'object' && (document === null || document === void 0 ? void 0 : document.visibilityState) === 'visible';
        }
        if (externalMode)
            return true; // skip mode checking for external connection
        return Boolean(here & flag);
    }
    //#endregion
    function UnboundedRegistry(instance, eventName, eventListener) {
        //#region Batch message
        let pausing = false;
        const pausingMap = new Map();
        //#endregion
        async function send(target, data) {
            if (typeof target !== 'number')
                throw new TypeError('target must be a bit flag of MessageTarget | Environment');
            if (pausing) {
                const list = pausingMap.get(target) || [];
                pausingMap.set(target, list);
                list.push(data);
                return;
            }
            postMessage({
                data: await instance.serialization.serialization(data),
                domain: instance.domain,
                event: eventName,
                target: { kind: 'target', target },
            });
        }
        let binder;
        function on(cb, options) {
            eventListener.on(eventName, cb);
            const off = () => eventListener.off(eventName, cb);
            if (options === null || options === void 0 ? void 0 : options.once)
                eventListener.on(eventName, off);
            if (options === null || options === void 0 ? void 0 : options.signal)
                options.signal.addEventListener('abort', off);
            return off;
        }
        function off(cb) {
            eventListener.off(eventName, cb);
        }
        function pause() {
            pausing = true;
            return async (reducer = (x) => x) => {
                pausing = false;
                for (const [target, list] of pausingMap) {
                    try {
                        await Promise.all(reducer(list).map((x) => send(target, x)));
                    }
                    finally {
                        pausingMap.clear();
                    }
                }
            };
        }
        const self = {
            send,
            sendToLocal: send.bind(null, exports.MessageTarget.LocalOnly),
            sendToBackgroundPage: send.bind(null, exports.Environment.ManifestBackground),
            sendToContentScripts: send.bind(null, exports.Environment.ContentScript),
            sendToVisiblePages: send.bind(null, exports.MessageTarget.VisiblePageOnly),
            sendToFocusedPage: send.bind(null, exports.MessageTarget.FocusedPageOnly),
            sendByBroadcast: send.bind(null, exports.MessageTarget.Broadcast),
            sendToAll: send.bind(null, exports.MessageTarget.All),
            bind(target) {
                if (typeof binder === 'undefined') {
                    binder = { on, off, send: (data) => send(target, data), pause };
                }
                return binder;
            },
            on,
            off,
            pause,
            async *[Symbol.asyncIterator]() {
                yield* new EventIterator(({ push }) => this.on(push));
            },
        };
        return self;
    }
    function backgroundPageMessageHandler(data) {
        var _a;
        // receive payload from the other side
        if (!isInternalMessageType(data))
            return;
        if (data.target.kind === 'tab') {
            for (const [port, { sender }] of backgroundOnlyLivingPorts) {
                if (data.target.id !== ((_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.id))
                    continue;
                return port.postMessage(data);
            }
        }
        else if (data.target.kind === 'port') {
            data.target.port.postMessage(data);
        }
        else {
            const flag = data.target.target;
            // Also dispatch this message to background page itself. shouldAcceptThisMessage will help us to filter the message
            domainRegistry.emit(data.domain, data);
            if (flag & exports.MessageTarget.LocalOnly)
                return;
            for (const [port, { environment }] of backgroundOnlyLivingPorts) {
                if (port === this)
                    continue; // Not sending to the source.
                if (environment === undefined)
                    continue;
                try {
                    if (environment & flag)
                        port.postMessage(data);
                    // they will handle this by thyself
                    else if (flag & (exports.MessageTarget.FocusedPageOnly | exports.MessageTarget.VisiblePageOnly))
                        port.postMessage(data);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
    }
    function otherEnvMessageHandler(payload) {
        if (typeof payload !== 'object')
            return this.postMessage(payload);
        const bound = payload.target;
        if (bound.kind === 'tab')
            return this.postMessage(payload);
        if (bound.kind === 'port')
            throw new Error('Unreachable case: bound type = port in non-background script');
        const target = bound.target;
        if (target & (exports.MessageTarget.IncludeLocal | exports.MessageTarget.LocalOnly)) {
            domainRegistry.emit(payload.domain, payload);
            if (target & exports.MessageTarget.LocalOnly)
                return;
            bound.target &= ~exports.MessageTarget.IncludeLocal; // unset IncludeLocal
        }
        this.postMessage(payload);
    }
    /** The port need to be initialized before use. */
    function backgroundPortBoarding(port, sender) {
        var _a, _b;
        // let the client know it's tab id
        // sender.tab might be undefined if it is a popup
        port.postMessage((_b = (_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : -1);
        // Client will report it's environment flag on connection
        port.onMessage.addListener(function environmentListener(x) {
            const obj = backgroundOnlyLivingPorts.get(port);
            if (typeof obj.environment === 'undefined')
                obj.environment = Number(x);
            port.onMessage.removeListener(environmentListener);
        });
        port.onMessage.addListener(backgroundPageMessageHandler.bind(port));
        port.onDisconnect.addListener(() => backgroundOnlyLivingPorts.delete(port));
    }
    function otherEnvPortBoarding(port, reconnect) {
        // report self environment
        port.postMessage(getEnvironment());
        // server will send self tab ID on connected
        port.onMessage.addListener(function tabIDListener(x) {
            currentTabID = Number(x);
            port.onMessage.removeListener(tabIDListener);
        });
        port.onMessage.addListener((data) => {
            if (!isInternalMessageType(data))
                return;
            domainRegistry.emit(data.domain, data);
        });
        // ? Will it cause infinite loop?
        port.onDisconnect.addListener(reconnect);
    }

    /**
     * This file is published by MIT License.
     */
    /**
     * A `ref` object with `addListener`
     *
     * @example
     * ```ts
     * const ref = new ValueRef(64)
     * function useValueRef<T>(ref: ValueRef<T>) {
     *   const { useState, useEffect } = React
     *
     *   const [value, setValue] = useState<T>(ref.value)
     *   useEffect(() => {
     *       if (ref.isEqual(value, ref.value) === false) {
     *           // The state is outdated before the useEffect runs
     *           setValue(ref.value)
     *       }
     *       return ref.addListener(v => setValue(v))
     *   }, [ref, value])
     *   return value
     * }
     * ref.value = 42 // useRef will receive the new value
     * ```
     * @eventProperty
     */
    class ValueRef {
        /**
         *
         * @param _value - The internal value
         * @param isEqual - The comparer function
         */
        constructor(_value, isEqual = (a, b) => a === b) {
            this._value = _value;
            /** All watchers */
            this.watcher = new Set();
            this.isEqual = isEqual;
        }
        /** Get current value */
        get value() {
            return this._value;
        }
        set value(newVal) {
            const oldVal = this._value;
            if (this.isEqual(newVal, oldVal))
                return;
            this._value = newVal;
            for (const fn of this.watcher) {
                try {
                    fn(newVal, oldVal);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        /**
         * Add a listener. This will return a remover.
         * @example
         * ```ts
         * React.useEffect(() => ref.addListener(setState))
         * ```
         */
        addListener(fn) {
            this.watcher.add(fn);
            return () => this.removeListener(fn);
        }
        /**
         * Remove a listener
         */
        removeListener(fn) {
            this.watcher.delete(fn);
        }
        /**
         * Remove all listeners
         */
        removeAllListener() {
            this.watcher = new Set();
        }
    }

    exports.DOMProxy = DOMProxy;
    exports.EventWatcher = EventWatcher;
    exports.IntervalWatcher = IntervalWatcher;
    exports.LiveSelector = LiveSelector;
    exports.MutationObserverWatcher = MutationObserverWatcher;
    exports.ValueRef = ValueRef;
    exports.Watcher = Watcher;
    exports.WebExtensionMessage = WebExtensionMessage;
    exports.assertEnvironment = assertEnvironment;
    exports.assertNotEnvironment = assertNotEnvironment;
    exports.getEnvironment = getEnvironment;
    exports.isEnvironment = isEnvironment;
    exports.printEnvironment = printEnvironment;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.cjs.map


/***/ })

}]);