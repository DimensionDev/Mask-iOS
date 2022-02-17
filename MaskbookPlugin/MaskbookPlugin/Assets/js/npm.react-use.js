"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9759],{

/***/ 45997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZT": () => (/* binding */ noop),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "S1": () => (/* binding */ off),
/* harmony export */   "jU": () => (/* binding */ isBrowser),
/* harmony export */   "ae": () => (/* binding */ isNavigator)
/* harmony export */ });
var noop = function () { };
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ 43402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36198);


function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = (0,_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        callback();
    }, [callback]);
    return state;
}


/***/ }),

/***/ 36198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAsyncFn)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64873);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68320);



function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    var isMounted = (0,_useMountedState__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), state = _a[0], set = _a[1];
    var callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        set(function (prevState) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, prevState), { loading: true })); });
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}


/***/ }),

/***/ 17952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64873);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43402);



var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), attempt = _a[0], setAttempt = _a[1];
    var state = (0,_useAsync__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(fn, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        if (stateLoading) {
            if (false) {}
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(deps, [stateLoading]));
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, state), { retry: retry });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAsyncRetry);


/***/ }),

/***/ 13696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ esm_useCopyToClipboard)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/copy-to-clipboard@3.3.1/node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(35886);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useMountedState.js
var useMountedState = __webpack_require__(68320);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useSetState.js

var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = (0,react.useState)(initialState), state = _a[0], set = _a[1];
    var setState = (0,react.useCallback)(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
/* harmony default export */ const esm_useSetState = (useSetState);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js




var useCopyToClipboard = function () {
    var isMounted = (0,useMountedState/* default */.Z)();
    var _a = esm_useSetState({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = (0,react.useCallback)(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard_default()(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
/* harmony default export */ const esm_useCopyToClipboard = (useCopyToClipboard);


/***/ }),

/***/ 16145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31275);


function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = (0,_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(reset, deps);
    return [isReady, cancel];
}


/***/ }),

/***/ 79932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68320);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45997);



/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || _misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = (0,_useMountedState__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), over = _a[0], setOver = _a[1];
    var process = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDropArea);


/***/ }),

/***/ 73374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

var useEffectOnce = function (effect) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEffectOnce);


/***/ }),

/***/ 89008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

var useInterval = function (callback, delay) {
    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () { });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        savedCallback.current = callback;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);


/***/ }),

/***/ 87218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ esm_useList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(65069);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/misc/hookState.js
function resolveHookState(nextState, currentState) {
    if (typeof nextState === 'function') {
        return nextState.length ? nextState(currentState) : nextState();
    }
    return nextState;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useList.js



function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = (0,react.useRef)(resolveHookState(initialList));
    var update = (0,useUpdate/* default */.Z)();
    var actions = (0,react.useMemo)(function () {
        var a = {
            set: function (newList) {
                list.current = resolveHookState(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(resolveHookState(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
/* harmony default export */ const esm_useList = (useList);


/***/ }),

/***/ 16292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45997);


var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .jU) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buildState('load')), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(window, 'popstate', onPopstate);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(window, 'pushstate', onPushstate);
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(window, 'replacestate', onReplacestate);
        return function () {
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(window, 'popstate', onPopstate);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(window, 'pushstate', onPushstate);
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .jU && hasEventConstructor ? useLocationBrowser : useLocationServer);


/***/ }),

/***/ 28826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64873);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialMap), map = _a[0], set = _a[1];
    var stableActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return ((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ get: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMap);


/***/ }),

/***/ 56119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45997);


var useMediaDevices = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({
                                deviceId: deviceId,
                                groupId: groupId,
                                kind: kind,
                                label: label,
                            });
                        }),
                    });
                }
            })
                .catch(_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT);
        };
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .isNavigator */ .ae && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock);


/***/ }),

/***/ 4125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73374);
}

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (useMount) : null));


/***/ }),

/***/ 68320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMountedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

function useMountedState() {
    var mountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var get = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () { return mountedRef.current; }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}


/***/ }),

/***/ 80663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
if (462 == __webpack_require__.j) {
	/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45997);
}


var usePermission = function (permissionDesc) {
    var mounted = true;
    var permissionStatus = null;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), state = _a[0], setState = _a[1];
    var onChange = function () {
        if (mounted && permissionStatus) {
            setState(permissionStatus.state);
        }
    };
    var changeState = function () {
        onChange();
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(permissionStatus, 'change', onChange);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            changeState();
        })
            .catch(_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT);
        return function () {
            mounted = false;
            permissionStatus && (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__/* .off */ .S1)(permissionStatus, 'change', onChange);
        };
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 462 == __webpack_require__.j ? (usePermission) : null));


/***/ }),

/***/ 78056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ esm_useRafState)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useEffectOnce.js
var useEffectOnce = __webpack_require__(73374);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUnmount.js


var useUnmount = function (fn) {
    var fnRef = (0,react.useRef)(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    (0,useEffectOnce/* default */.Z)(function () { return function () { return fnRef.current(); }; });
};
/* harmony default export */ const esm_useUnmount = (useUnmount);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useRafState.js


var useRafState = function (initialState) {
    var frame = (0,react.useRef)(0);
    var _a = (0,react.useState)(initialState), state = _a[0], setState = _a[1];
    var setRafState = (0,react.useCallback)(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    esm_useUnmount(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ const esm_useRafState = (useRafState);


/***/ }),

/***/ 31275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTimeoutFn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
    var isReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () { return ready.current; }, []);
    var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}


/***/ }),

/***/ 65069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

var updateReducer = function (num) { return (num + 1) % 1000000; };
function useUpdate() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(updateReducer, 0), update = _a[1];
    return update;
}


/***/ }),

/***/ 74750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ esm_useUpdateEffect)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useFirstMountState.js

function useFirstMountState() {
    var isFirst = (0,react.useRef)(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdateEffect.js


var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState();
    (0,react.useEffect)(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
/* harmony default export */ const esm_useUpdateEffect = (useUpdateEffect);


/***/ }),

/***/ 17719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45997);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78056);



var useWindowScroll = function () {
    var _a = (0,_useRafState__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function () { return ({
        x: _misc_util__WEBPACK_IMPORTED_MODULE_2__/* .isBrowser */ .jU ? window.pageXOffset : 0,
        y: _misc_util__WEBPACK_IMPORTED_MODULE_2__/* .isBrowser */ .jU ? window.pageYOffset : 0,
    }); }), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var handler = function () {
            setState(function (state) {
                var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
                //Check state for change, return same state if no change happened to prevent rerender
                //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset,
                    }
                    : state;
            });
        };
        //We have to update window scroll at mount, before subscription.
        //Window scroll may be changed between render and effect handler.
        handler();
        (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__/* .off */ .S1)(window, 'scroll', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowScroll);


/***/ }),

/***/ 11072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78056);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45997);



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = (0,_useRafState__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
        width: _misc_util__WEBPACK_IMPORTED_MODULE_2__/* .isBrowser */ .jU ? window.innerWidth : initialWidth,
        height: _misc_util__WEBPACK_IMPORTED_MODULE_2__/* .isBrowser */ .jU ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (_misc_util__WEBPACK_IMPORTED_MODULE_2__/* .isBrowser */ .jU) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', handler_1);
            return function () {
                (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__/* .off */ .S1)(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);


/***/ })

}]);