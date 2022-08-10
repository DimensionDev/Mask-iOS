"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9141],{

/***/ 16978:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalStyles = void 0;
const jsx_runtime_1 = __webpack_require__(35667);
const reactEmotion = __importStar(__webpack_require__(2078));
function GlobalStyles(props) {
    const { styles } = props;
    return (0, jsx_runtime_1.jsx)(reactEmotion.Global, { styles: reactEmotion.css(styles) });
}
exports.GlobalStyles = GlobalStyles;


/***/ }),

/***/ 5447:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TssCacheProvider = exports.useTssEmotionCache = exports.getTssDefaultEmotionCache = exports.getDoExistsTssDefaultEmotionCacheMemoizedValue = void 0;
const jsx_runtime_1 = __webpack_require__(35667);
const react_1 = __webpack_require__(58757);
const cache_1 = __importDefault(__webpack_require__(20227));
const { getDoExistsTssDefaultEmotionCacheMemoizedValue, getTssDefaultEmotionCache, reactContext, } = (() => {
    const propertyKey = "__tss-react_context";
    const peerDepObj = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    react_1.createContext;
    let sharedContext = peerDepObj["__tss-react_context"];
    if (sharedContext === undefined) {
        const { getTssDefaultEmotionCache, getDoExistsTssDefaultEmotionCacheMemoizedValue, } = (() => {
            let cache = undefined;
            /**
             * Lazily initialized singleton
             * If doReset is set to true the memoized instance will be
             * discarded and a new one created.
             * */
            function getTssDefaultEmotionCache(params) {
                const { doReset = false } = params !== null && params !== void 0 ? params : {};
                if (doReset) {
                    cache = undefined;
                }
                if (cache === undefined) {
                    cache = (0, cache_1.default)({ "key": "tss" });
                }
                return cache;
            }
            return {
                getTssDefaultEmotionCache,
                "getDoExistsTssDefaultEmotionCacheMemoizedValue": () => cache !== undefined,
            };
        })();
        sharedContext = {
            getTssDefaultEmotionCache,
            getDoExistsTssDefaultEmotionCacheMemoizedValue,
            "reactContext": (0, react_1.createContext)(undefined),
        };
        Object.defineProperty(peerDepObj, propertyKey, {
            "configurable": false,
            "enumerable": false,
            "writable": false,
            "value": sharedContext,
        });
    }
    return sharedContext;
})();
exports.getDoExistsTssDefaultEmotionCacheMemoizedValue = getDoExistsTssDefaultEmotionCacheMemoizedValue;
exports.getTssDefaultEmotionCache = getTssDefaultEmotionCache;
function useTssEmotionCache() {
    const cacheExplicitlyProvidedForTss = (0, react_1.useContext)(reactContext);
    return cacheExplicitlyProvidedForTss !== null && cacheExplicitlyProvidedForTss !== void 0 ? cacheExplicitlyProvidedForTss : getTssDefaultEmotionCache();
}
exports.useTssEmotionCache = useTssEmotionCache;
function TssCacheProvider(props) {
    const { children, value } = props;
    return ((0, jsx_runtime_1.jsx)(reactContext.Provider, Object.assign({ value: value }, { children: children })));
}
exports.TssCacheProvider = TssCacheProvider;


/***/ }),

/***/ 36353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCssAndCx = exports.createCssAndCx = void 0;
const classnames_1 = __webpack_require__(88559);
const serialize_1 = __webpack_require__(37961);
const utils_1 = __webpack_require__(45477);
const useGuaranteedMemo_1 = __webpack_require__(74944);
const cache_1 = __webpack_require__(5447);
const types_1 = __webpack_require__(47363);
exports.createCssAndCx = (() => {
    function merge(registered, css, className) {
        const registeredStyles = [];
        const rawClassName = (0, utils_1.getRegisteredStyles)(registered, registeredStyles, className);
        if (registeredStyles.length < 2) {
            return className;
        }
        return rawClassName + css(registeredStyles);
    }
    function createCssAndCx(params) {
        const { cache } = params;
        const css = (...args) => {
            const serialized = (0, serialize_1.serializeStyles)(args, cache.registered);
            (0, utils_1.insertStyles)(cache, serialized, false);
            const className = `${cache.key}-${serialized.name}`;
            scope: {
                const arg = args[0];
                if (!(0, types_1.matchCSSObject)(arg)) {
                    break scope;
                }
                increaseSpecificityToTakePrecedenceOverMediaQuerries.saveClassNameCSSObjectMapping(cache, className, arg);
            }
            return className;
        };
        const cx = (...args) => {
            const className = (0, classnames_1.classnames)(args);
            const feat27FixedClassnames = increaseSpecificityToTakePrecedenceOverMediaQuerries.fixClassName(cache, className, css);
            return merge(cache.registered, css, feat27FixedClassnames);
            //return merge(cache.registered, css, className);
        };
        return { css, cx };
    }
    return { createCssAndCx };
})().createCssAndCx;
/** Will pickup the contextual cache if any */
function useCssAndCx() {
    const cache = (0, cache_1.useTssEmotionCache)();
    const { css, cx } = (0, useGuaranteedMemo_1.useGuaranteedMemo)(() => (0, exports.createCssAndCx)({ cache }), [cache]);
    return { css, cx };
}
exports.useCssAndCx = useCssAndCx;
// https://github.com/garronej/tss-react/issues/27
const increaseSpecificityToTakePrecedenceOverMediaQuerries = (() => {
    const cssObjectMapByCache = new WeakMap();
    return {
        "saveClassNameCSSObjectMapping": (cache, className, cssObject) => {
            let cssObjectMap = cssObjectMapByCache.get(cache);
            if (cssObjectMap === undefined) {
                cssObjectMap = new Map();
                cssObjectMapByCache.set(cache, cssObjectMap);
            }
            cssObjectMap.set(className, cssObject);
        },
        "fixClassName": (() => {
            function fix(classNameCSSObjects) {
                let isThereAnyMediaQueriesInPreviousClasses = false;
                return classNameCSSObjects.map(([className, cssObject]) => {
                    if (cssObject === undefined) {
                        return className;
                    }
                    let out;
                    if (!isThereAnyMediaQueriesInPreviousClasses) {
                        out = className;
                        for (const key in cssObject) {
                            if (key.startsWith("@media")) {
                                isThereAnyMediaQueriesInPreviousClasses = true;
                                break;
                            }
                        }
                    }
                    else {
                        out = {
                            "&&": cssObject,
                        };
                    }
                    return out;
                });
            }
            return (cache, className, css) => {
                const cssObjectMap = cssObjectMapByCache.get(cache);
                return (0, classnames_1.classnames)(fix(className
                    .split(" ")
                    .map(className => [
                    className,
                    cssObjectMap === null || cssObjectMap === void 0 ? void 0 : cssObjectMap.get(className),
                ])).map(classNameOrCSSObject => typeof classNameOrCSSObject === "string"
                    ? classNameOrCSSObject
                    : css(classNameOrCSSObject)));
            };
        })(),
    };
})();


/***/ }),

/***/ 82737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = exports.LW = __webpack_unused_export__ = __webpack_unused_export__ = exports.F4 = __webpack_unused_export__ = exports.a0 = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
/** @see <https://docs.tss-react.dev/api-references> */
var cssAndCx_1 = __webpack_require__(36353);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return cssAndCx_1.useCssAndCx; } });
var mergeClasses_1 = __webpack_require__(78743);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mergeClasses_1.useMergedClasses; } });
const makeStyles_1 = __webpack_require__(44768);
Object.defineProperty(exports, "a0", ({ enumerable: true, get: function () { return makeStyles_1.createMakeStyles; } }));
const withStyles_1 = __webpack_require__(27855);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return withStyles_1.createWithStyles; } });
/** @see <https://docs.tss-react.dev/api-references/keyframes> */
var react_1 = __webpack_require__(2078);
Object.defineProperty(exports, "F4", ({ enumerable: true, get: function () { return react_1.keyframes; } }));
/** @see <https://docs.tss-react.dev/api-references/globalstyles> */
var GlobalStyles_1 = __webpack_require__(16978);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return GlobalStyles_1.GlobalStyles; } });
/** @see <https://docs.tss-react.dev/cache> */
var cache_1 = __webpack_require__(5447);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return cache_1.getTssDefaultEmotionCache; } });
Object.defineProperty(exports, "LW", ({ enumerable: true, get: function () { return cache_1.TssCacheProvider; } }));
/** @see <https://docs.tss-react.dev/api-references/makestyles-usestyles> */
function createMakeAndWithStyles(params) {
    return Object.assign(Object.assign({}, (0, makeStyles_1.createMakeStyles)(params)), (0, withStyles_1.createWithStyles)(params));
}
__webpack_unused_export__ = createMakeAndWithStyles;


/***/ }),

/***/ 44768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMakeStyles = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = __webpack_require__(58757);
const Object_fromEntries_1 = __webpack_require__(11815);
const objectKeys_1 = __webpack_require__(11970);
const cssAndCx_1 = __webpack_require__(36353);
const getDependencyArrayRef_1 = __webpack_require__(45725);
const typeGuard_1 = __webpack_require__(33824);
const cache_1 = __webpack_require__(5447);
const assert_1 = __webpack_require__(61852);
const mergeClasses_1 = __webpack_require__(78743);
const getCounter = (() => {
    let counter = 0;
    return () => counter++;
})();
function createMakeStyles(params) {
    const { useTheme } = params;
    /** returns useStyle. */
    function makeStyles(params) {
        const { name: nameOrWrappedName } = params !== null && params !== void 0 ? params : {};
        const name = typeof nameOrWrappedName !== "object"
            ? nameOrWrappedName
            : Object.keys(nameOrWrappedName)[0];
        return function (cssObjectByRuleNameOrGetCssObjectByRuleName) {
            const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName ===
                "function"
                ? cssObjectByRuleNameOrGetCssObjectByRuleName
                : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
            const outerCounter = getCounter();
            return function useStyles(params, styleOverrides) {
                var _a, _b;
                const theme = useTheme();
                const { css, cx } = (0, cssAndCx_1.useCssAndCx)();
                const cache = (0, cache_1.useTssEmotionCache)();
                let classes = (0, react_1.useMemo)(() => {
                    const refClassesCache = {};
                    const refClasses = typeof Proxy !== "undefined" &&
                        new Proxy({}, {
                            "get": (_target, propertyKey) => {
                                if (typeof propertyKey === "symbol") {
                                    (0, assert_1.assert)(false);
                                }
                                return (refClassesCache[propertyKey] = `${cache.key}-${outerCounter}${name !== undefined ? `-${name}` : ""}-${propertyKey}-ref`);
                            },
                        });
                    const cssObjectByRuleName = getCssObjectByRuleName(theme, params, refClasses || {});
                    const classes = (0, Object_fromEntries_1.objectFromEntries)((0, objectKeys_1.objectKeys)(cssObjectByRuleName).map(ruleName => {
                        const cssObject = cssObjectByRuleName[ruleName];
                        if (!cssObject.label) {
                            cssObject.label = `${name !== undefined ? `${name}-` : ""}${ruleName}`;
                        }
                        return [
                            ruleName,
                            `${css(cssObject)}${(0, typeGuard_1.typeGuard)(ruleName, ruleName in refClassesCache)
                                ? ` ${refClassesCache[ruleName]}`
                                : ""}`,
                        ];
                    }));
                    (0, objectKeys_1.objectKeys)(refClassesCache).forEach(ruleName => {
                        if (ruleName in classes) {
                            return;
                        }
                        classes[ruleName] =
                            refClassesCache[ruleName];
                    });
                    return classes;
                }, [cache, css, cx, theme, (0, getDependencyArrayRef_1.getDependencyArrayRef)(params)]);
                const propsClasses = styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.props.classes;
                {
                    classes = (0, react_1.useMemo)(() => (0, mergeClasses_1.mergeClasses)(classes, propsClasses, cx), [classes, (0, getDependencyArrayRef_1.getDependencyArrayRef)(propsClasses), cx]);
                }
                {
                    let cssObjectByRuleNameOrGetCssObjectByRuleName = undefined;
                    try {
                        cssObjectByRuleNameOrGetCssObjectByRuleName =
                            name !== undefined
                                ? (_b = (_a = theme.components) === null || _a === void 0 ? void 0 : _a[name]) === null || _b === void 0 ? void 0 : _b.styleOverrides
                                : undefined;
                        // eslint-disable-next-line no-empty
                    }
                    catch (_c) { }
                    const themeClasses = (0, react_1.useMemo)(() => {
                        if (!cssObjectByRuleNameOrGetCssObjectByRuleName) {
                            return undefined;
                        }
                        const themeClasses = {};
                        for (const ruleName in cssObjectByRuleNameOrGetCssObjectByRuleName) {
                            const cssObjectOrGetCssObject = cssObjectByRuleNameOrGetCssObjectByRuleName[ruleName];
                            if (!(cssObjectOrGetCssObject instanceof Object)) {
                                continue;
                            }
                            themeClasses[ruleName] = css(typeof cssObjectOrGetCssObject === "function"
                                ? cssObjectOrGetCssObject(Object.assign({ theme, "ownerState": styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.ownerState }, styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.props))
                                : cssObjectOrGetCssObject);
                        }
                        return themeClasses;
                    }, [
                        cssObjectByRuleNameOrGetCssObjectByRuleName ===
                            undefined
                            ? undefined
                            : JSON.stringify(cssObjectByRuleNameOrGetCssObjectByRuleName),
                        (0, getDependencyArrayRef_1.getDependencyArrayRef)(styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.props),
                        (0, getDependencyArrayRef_1.getDependencyArrayRef)(styleOverrides === null || styleOverrides === void 0 ? void 0 : styleOverrides.ownerState),
                        css,
                    ]);
                    classes = (0, react_1.useMemo)(() => (0, mergeClasses_1.mergeClasses)(classes, themeClasses, cx), [classes, themeClasses, cx]);
                }
                return {
                    classes,
                    theme,
                    css,
                    cx,
                };
            };
        };
    }
    function useStyles() {
        const theme = useTheme();
        const { css, cx } = (0, cssAndCx_1.useCssAndCx)();
        return { theme, css, cx };
    }
    return { makeStyles, useStyles };
}
exports.createMakeStyles = createMakeStyles;


/***/ }),

/***/ 78743:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMergedClasses = exports.mergeClasses = void 0;
const objectKeys_1 = __webpack_require__(11970);
const getDependencyArrayRef_1 = __webpack_require__(45725);
const cssAndCx_1 = __webpack_require__(36353);
const react_1 = __webpack_require__(58757);
function mergeClasses(classesFromUseStyles, classesFromProps, cx) {
    //NOTE: We use this test to be resilient in case classesFromProps is not of the expected type.
    if (!(classesFromProps instanceof Object)) {
        return classesFromUseStyles;
    }
    const out = {};
    (0, objectKeys_1.objectKeys)(classesFromUseStyles).forEach(ruleName => (out[ruleName] = cx(classesFromUseStyles[ruleName], classesFromProps[ruleName])));
    (0, objectKeys_1.objectKeys)(classesFromProps).forEach(ruleName => {
        if (ruleName in classesFromUseStyles) {
            return;
        }
        const className = classesFromProps[ruleName];
        //...Same here, that why we don't do className === undefined
        if (typeof className !== "string") {
            return;
        }
        out[ruleName] = className;
    });
    return out;
}
exports.mergeClasses = mergeClasses;
function useMergedClasses(classes, classesOv) {
    const { cx } = (0, cssAndCx_1.useCssAndCx)();
    return (0, react_1.useMemo)(() => mergeClasses(classes, classesOv, cx), [classes, (0, getDependencyArrayRef_1.getDependencyArrayRef)(classesOv), cx]);
}
exports.useMergedClasses = useMergedClasses;


/***/ }),

/***/ 61852:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = void 0;
/** https://docs.tsafe.dev/assert */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
exports.assert = assert;


/***/ }),

/***/ 50998:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.capitalize = void 0;
/** @see <https://docs.tsafe.dev/capitalize> */
function capitalize(str) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (str.charAt(0).toUpperCase() + str.slice(1));
}
exports.capitalize = capitalize;


/***/ }),

/***/ 88559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.classnames = void 0;
const assert_1 = __webpack_require__(61852);
const typeGuard_1 = __webpack_require__(33824);
/** Copy pasted from
 * https://github.com/emotion-js/emotion/blob/23f43ab9f24d44219b0b007a00f4ac681fe8712e/packages/react/src/class-names.js#L17-L63
 **/
const classnames = (args) => {
    const len = args.length;
    let i = 0;
    let cls = "";
    for (; i < len; i++) {
        const arg = args[i];
        if (arg == null)
            continue;
        let toAdd;
        switch (typeof arg) {
            case "boolean":
                break;
            case "object": {
                if (Array.isArray(arg)) {
                    toAdd = (0, exports.classnames)(arg);
                }
                else {
                    (0, assert_1.assert)(!(0, typeGuard_1.typeGuard)(arg, false));
                    if (false) {}
                    toAdd = "";
                    for (const k in arg) {
                        if (arg[k] && k) {
                            toAdd && (toAdd += " ");
                            toAdd += k;
                        }
                    }
                }
                break;
            }
            default: {
                toAdd = arg;
            }
        }
        if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
        }
    }
    return cls;
};
exports.classnames = classnames;


/***/ }),

/***/ 45725:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDependencyArrayRef = void 0;
/**
 * useEffect(
 *    ()=> { ... },
 *    [ { "foo": "bar" } ]
 * )
 * => The callback will be invoked every render.
 * because { "foo": "bar" } is a new instance every render.
 *
 * useEffect(
 *    ()=> { ... },
 *    [ getDependencyArrayRef({ "foo": "bar" }) ]
 * );
 * => The callback will only be invoked once.
 *
 * The optimization will be enabled only if obj is
 * of the form Record<string, string | number | undefined | null>
 * overwise the object is returned (the function is the identity function).
 */
function getDependencyArrayRef(obj) {
    if (!(obj instanceof Object) || typeof obj === "function") {
        return obj;
    }
    const arr = [];
    for (const key in obj) {
        const value = obj[key];
        const typeofValue = typeof value;
        if (!(typeofValue === "string" ||
            (typeofValue === "number" && !isNaN(value)) ||
            typeofValue === "boolean" ||
            value === undefined ||
            value === null)) {
            return obj;
        }
        arr.push(`${key}:${typeofValue}_${value}`);
    }
    return "xSqLiJdLMd9s" + arr.join("|");
}
exports.getDependencyArrayRef = getDependencyArrayRef;


/***/ }),

/***/ 11970:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.objectKeys = void 0;
/** Object.keys() with types */
function objectKeys(o) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(o);
}
exports.objectKeys = objectKeys;


/***/ }),

/***/ 11815:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.objectFromEntries = void 0;
exports.objectFromEntries = !Object
    .fromEntries
    ? (entries) => {
        if (!entries || !entries[Symbol.iterator]) {
            throw new Error("Object.fromEntries() requires a single iterable argument");
        }
        const o = {};
        Object.keys(entries).forEach(key => {
            const [k, v] = entries[key];
            o[k] = v;
        });
        return o;
    }
    : Object.fromEntries;


/***/ }),

/***/ 33824:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeGuard = void 0;
/** https://docs.tsafe.dev/typeguard */
function typeGuard(_value, isMatched) {
    return isMatched;
}
exports.typeGuard = typeGuard;


/***/ }),

/***/ 74944:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGuaranteedMemo = void 0;
const react_1 = __webpack_require__(58757);
/** Like react's useMemo but with guarantee that the fn
 * won't be invoked again if deps hasn't change */
function useGuaranteedMemo(fn, deps) {
    const ref = (0, react_1.useRef)();
    if (!ref.current ||
        deps.length !== ref.current.prevDeps.length ||
        ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0) {
        ref.current = {
            "v": fn(),
            "prevDeps": [...deps],
        };
    }
    return ref.current.v;
}
exports.useGuaranteedMemo = useGuaranteedMemo;


/***/ }),

/***/ 47363:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.matchCSSObject = void 0;
function matchCSSObject(arg) {
    return (arg instanceof Object &&
        !("styles" in arg) &&
        !("length" in arg) &&
        !("__emotion_styles" in arg));
}
exports.matchCSSObject = matchCSSObject;


/***/ }),

/***/ 27855:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createWithStyles = void 0;
const jsx_runtime_1 = __webpack_require__(35667);
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = __webpack_require__(58757);
const makeStyles_1 = __webpack_require__(44768);
const capitalize_1 = __webpack_require__(50998);
function createWithStyles(params) {
    const { useTheme } = params;
    const { makeStyles } = (0, makeStyles_1.createMakeStyles)({ useTheme });
    function withStyles(Component, cssObjectByRuleNameOrGetCssObjectByRuleName, params) {
        const Component_ = typeof Component === "string"
            ? (() => {
                const tag = Component;
                const Out = function (_a) {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    return (0, react_1.createElement)(tag, props, children);
                };
                Object.defineProperty(Out, "name", {
                    "value": (0, capitalize_1.capitalize)(tag),
                });
                return Out;
            })()
            : Component;
        const name = (() => {
            const { name } = Component_;
            return typeof name === "string" ? name : undefined;
        })();
        const useStyles = makeStyles((params === null || params === void 0 ? void 0 : params.name) !== undefined ? params : { name })(typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function"
            ? (theme, props, classes) => incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName(theme, props, classes))
            : incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Out = (0, react_1.forwardRef)(function (props, ref) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { className, classes: _classes } = props, rest = __rest(props, ["className", "classes"]);
            const { classes, cx } = useStyles(props, { props });
            return ((0, jsx_runtime_1.jsx)(Component_, Object.assign({ ref: ref, className: cx(classes.root, className) }, (typeof Component === "string" ? {} : { classes }), rest)));
        });
        if (name !== undefined) {
            Object.defineProperty(Out, "name", {
                "value": `${name}WithStyles`,
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Out;
    }
    return { withStyles };
}
exports.createWithStyles = createWithStyles;
function incorporateMediaQueries(cssObjectByRuleNameWithMediaQueries) {
    const cssObjectByRuleName = {};
    const cssObjectByRuleNameWithMediaQueriesByMediaQuery = {};
    Object.keys(cssObjectByRuleNameWithMediaQueries).forEach(ruleNameOrMediaQuery => ((ruleNameOrMediaQuery.startsWith("@media")
        ? cssObjectByRuleNameWithMediaQueriesByMediaQuery
        : cssObjectByRuleName)[ruleNameOrMediaQuery] =
        cssObjectByRuleNameWithMediaQueries[ruleNameOrMediaQuery]));
    Object.keys(cssObjectByRuleNameWithMediaQueriesByMediaQuery).forEach(mediaQuery => {
        const cssObjectByRuleNameBis = cssObjectByRuleNameWithMediaQueriesByMediaQuery[mediaQuery];
        Object.keys(cssObjectByRuleNameBis).forEach(ruleName => {
            var _a;
            return (cssObjectByRuleName[ruleName] = Object.assign(Object.assign({}, ((_a = cssObjectByRuleName[ruleName]) !== null && _a !== void 0 ? _a : {})), { [mediaQuery]: cssObjectByRuleNameBis[ruleName] }));
        });
    });
    return cssObjectByRuleName;
}


/***/ })

}]);