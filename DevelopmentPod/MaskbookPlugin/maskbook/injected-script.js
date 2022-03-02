(function () {
    'use strict';

    const CustomEventId = 'c8a6c18e-f6a3-472a-adf3-5335deb80db6';





















































































    const { parse, stringify } = JSON;
    const { isArray } = Array;
    function encodeEvent(key, args) {
        return stringify([key, args])
    }
    function decodeEvent(data) {
        const result = parse(data);
        // Do not throw new Error cause it requires a global lookup.
        // eslint-disable-next-line
        if (!isEventItemBeforeSerialization(result)) throw null
        return result
    }

    function isEventItemBeforeSerialization(data) {
        if (!isArray(data)) return false
        if (data.length !== 2) return false
        if (typeof data[0] !== 'string') return false
        if (!isArray(data[1])) return false
        return true
    }

    const apply



     = Reflect.apply;
    const { error, warn } = console;

    const { defineProperties } = Object;
    // #region document.activeElement
    const DocumentActiveElementGetter = Object.getOwnPropertyDescriptors(
        Object.getPrototypeOf(Object.getPrototypeOf(document)),
    ).activeElement.get;
    const getDocumentActiveElement = () => apply(DocumentActiveElementGetter, document, []);
    // #endregion
    // #region CustomEvent.prototype.detail
    const CustomEventDetailGetter = Object.getOwnPropertyDescriptor(CustomEvent.prototype, 'detail').get;
    const getCustomEventDetail = (e) => apply(CustomEventDetailGetter, e, []);
    // #endregion
    // #region new Map()
    const { Map: _xray_Map } = globalThis;
    const XRayMapOriginalProtoDesc = Object.getOwnPropertyDescriptors(_xray_Map.prototype);
    function xray_Map() {
        const map = new _xray_Map();
        defineProperties(map, XRayMapOriginalProtoDesc);
        return map
    }
    // #endregion
    const {
        Proxy: no_xray_Proxy,
        Event: no_xray_Event,
        dispatchEvent: dispatchEvent$1,
        DataTransfer: no_xray_DataTransfer,
        ClipboardEvent: no_xray_ClipboardEvent,
        CustomEvent: no_xray_CustomEvent,
        // The "window."" here is used to create a no-xray version on Firefox
    } = globalThis.window;
    const _XPCNativeWrapper = typeof XPCNativeWrapper === 'undefined' ? undefined : XPCNativeWrapper;

    const { Blob: no_xray_Blob, File: no_xray_File } = globalThis.window;
    const EventTargetPrototype = globalThis.window.EventTarget.prototype;
    const { now } = Date;
    // Firefox magics!
    function overwriteFunctionOnXRayObject(
        xray_object,
        defineAs,
        apply,
    ) {
        try {
            if (_XPCNativeWrapper) {
                const rawObject = _XPCNativeWrapper.unwrap(xray_object);
                const rawFunction = rawObject[defineAs];
                exportFunction(
                    function () {
                        return apply(rawFunction, this, arguments)
                    },
                    rawObject,
                    { defineAs },
                );
                return
            }
        } catch (e) {
            error('Redefine failed. Try to use Proxy as fallback.');
        }
        xray_object[defineAs] = new no_xray_Proxy(xray_object[defineAs], { apply });
    }

    function redefineEventTargetPrototype(
        defineAs,
        apply,
    ) {
        overwriteFunctionOnXRayObject(EventTargetPrototype, defineAs, apply);
    }

    /** get the xray-unwrapped version of a C++ binding object */
    function unwrapXRay_CPPBindingObject(x) {
        if (_XPCNativeWrapper) return _XPCNativeWrapper.unwrap(x)
        return x
    }

    /** Clone a object into the page realm */
    function clone_into(x) {
        if (_XPCNativeWrapper && typeof cloneInto === 'function') return cloneInto(x, window, { cloneFunctions: true })
        return x
    }

    function constructXrayUnwrappedDataTransferProxy(xrayUnwrappedFile) {
        return new no_xray_Proxy(
            new no_xray_DataTransfer(),
            clone_into({
                get(target, key) {
                    if (key === 'files') return clone_into([xrayUnwrappedFile])
                    if (key === 'types') return clone_into(['Files'])
                    if (key === 'items')
                        return clone_into([
                            {
                                kind: 'file',
                                type: 'image/png',
                                getAsFile() {
                                    return xrayUnwrappedFile
                                },
                            },
                        ])
                    if (key === 'getData') return clone_into(() => '')
                    return target[key]
                },
            }),
        )
    }

    function constructXrayUnwrappedFilesFromUintLike(
        format,
        fileName,
        xray_fileContent,
    ) {
        const binary = unwrapXRay_CPPBindingObject(Uint8Array.from(xray_fileContent));
        const blob = new no_xray_Blob([binary], { type: format });
        const file = new no_xray_File([blob], fileName, {
            lastModified: now(),
            type: format,
        });
        return file
    }
    async function handlePromise(id, promise) {
        try {
            const data = await promise();
            sendEvent('resolvePromise', id, data);
        } catch (error) {
            // TODO:
            sendEvent('rejectPromise', id, {});
        }
    }

    function sendEvent(event, ...args) {
        const detail = encodeEvent(event, args);
        apply(dispatchEvent$1, document, [new no_xray_CustomEvent(CustomEventId, { detail })]);
    }

    // TODO: This file is not audited
    async function instagramUpload(url) {
        const result = await window.fetch(url).then((x) => x.arrayBuffer());
        const file = constructXrayUnwrappedFilesFromUintLike('image/jpeg', 'image.jpg', new Uint8Array(result));

        const target = document.querySelectorAll('input');
        const postButton = document.querySelector('[data-testid="new-post-button"]');
        if (!postButton || target.length === 0) return
        const done = false;
        for (const input of target) {
            overwriteFunctionOnXRayObject(input, 'click', (_target, thisArg, args) => {
                if (done) ;
                const raw = unwrapXRay_CPPBindingObject(input);
                for (const x of Object.keys(raw)) {
                    // Old react for __reactEventHandlers, new for __reactProps
                    if (x.startsWith('__reactEventHandlers') || x.startsWith('__reactProps')) {
                        ;(raw )[x].onChange({ target: { files: [file] } });
                    }
                }
            });
        }
        postButton.click();
    }

    function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }
    const CapturingEvents = new Set(['keyup', 'input', 'paste', 'change'] );


    const CapturedListeners = new WeakMap();
    // saving intrinsic of WeakMap, covert it from prototype method to own property.
    CapturedListeners.get = CapturedListeners.get;
    CapturedListeners.set = CapturedListeners.set;
    CapturedListeners.delete = CapturedListeners.delete;
    CapturedListeners.has = CapturedListeners.has;

    redefineEventTargetPrototype(
        'addEventListener',
        (raw, currentEventTarget, args) => {
            const result = apply(raw, currentEventTarget, args);
            if (!CapturingEvents.has(args[0])) return result
            const { f, type, ...desc } = normalizeAddEventListenerArgs(args);
            if (CapturingEvents.has(type)) {
                if (!CapturedListeners.has(currentEventTarget)) CapturedListeners.set(currentEventTarget, xray_Map());
                const listenerMap = CapturedListeners.get(currentEventTarget);

                if (!listenerMap.has(type)) listenerMap.set(type, xray_Map());
                const descriptorMap = listenerMap.get(type);
                descriptorMap.set(f, desc);
            }
            return result
        },
    );
    redefineEventTargetPrototype(
        'removeEventListener',
        (raw, _this, args) => {
            const result = apply(raw, _this, args);
            if (!CapturingEvents.has(args[0])) return result
            const { type, f } = normalizeAddEventListenerArgs(args);
            block: {
                // Avoid ?. here because the transform result contains unsafe intrinsic access to Array.prototype.@@iterator
                const _a = CapturedListeners.get(_this);
                if (!_a) break block
                const _b = _a.get(type);
                if (!_b) break block
                _b.delete(f);
            }
            return result
        },
    );

    function normalizeAddEventListenerArgs(
        args,
    ) {
        // Do not use deconstruct syntax. It might invoke Array.prototype[Symbol.iterator]
        const type = args[0];
        const listener = args[1];
        const options = args[2];

        let f = () => {};
        if (typeof listener === 'function') f = listener;
        else if (typeof listener === 'object' && listener !== null) {
            const _f = listener.handleEvent;
            f = (e) => apply(_f, listener, [e]);
        }

        let capture = false;
        let passive = false;
        let once = false;

        if (typeof options === 'boolean') capture = options;
        else if (typeof options === 'object' && listener !== null) {
            // We can trigger getter here. It's safe because we're following the spec here.
            capture = options.capture || false;
            passive = options.passive || false;
            once = options.once || false;
        }
        return { type, f, once, capture, passive }
    }

    function dispatchEventRaw(
        target,
        eventBase,
        overwrites = {},
    ) {
        let currentTarget = target;
        const event = getMockedEvent(eventBase, () => currentTarget, overwrites);
        // Note: in firefox, "event" is "Opaque". Displayed as an empty object.
        const type = eventBase.type;
        if (!CapturingEvents.has(type)) return warn("[@masknet/injected-script] Trying to send event didn't captured.")

        const bubblingNode = bubble();
        // TODO: save intrinsic of %GeneratorPrototype.next%
        for (const Node of bubblingNode) {
            // TODO: implement
            // Event.prototype.stopPropagation
            // Event.prototype.stopImmediatePropagation
            // Event.prototype.composedPath
            // capture event
            // once event
            // passive event
            // Avoid using ?. here.
            const _a = CapturedListeners.get(Node);
            if (!_a) continue
            const listeners = _a.get(type);
            if (!listeners) continue
            // TODO: save intrinsic of %ArrayPrototype.@@iterator%
            for (const [fn, { capture }] of listeners) {
                if (capture) continue
                try {
                    fn(event);
                } catch (err) {
                    error(err);
                }
            }
        }
        function* bubble() {
            while (currentTarget) {
                yield currentTarget;
                // TODO: save intrinsic of %NodePrototype.parentNode%
                currentTarget = currentTarget.parentNode;
            }
            yield document;
            yield window; 
        }
        function getMockedEvent(event, currentTarget, overwrites = {}) {
            const target = unwrapXRay_CPPBindingObject(currentTarget());
            const source = {
                target,
                srcElement: target,
                // ? Why? It doesn't work without this property.
                _inherits_from_prototype: true,
                defaultPrevented: false,
                preventDefault: clone_into(() => {}),
                ...overwrites,
            };
            return new no_xray_Proxy(
                event,
                clone_into({
                    get(target, key) {
                        // HACK: https://github.com/DimensionDev/Maskbook/pull/4970/
                        if (key === 'currentTarget' || (key === 'target' && isTwitter()))
                            return unwrapXRay_CPPBindingObject(currentTarget())
                        return _nullishCoalesce((source )[key], () => ( (unwrapXRay_CPPBindingObject(target) )[key]))
                    },
                }),
            )
        }
    }

    const { includes } = String.prototype;
    function isTwitter() {
        return apply(includes, window.location.href, ['twitter.com'])
    }

    const { InputEvent } = globalThis.window;
    const input_value_setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    const textarea_value_setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
    function dispatchInput(text) {
        // Cause react hooks the input.value getter & setter, set hooked version will notify react **not** call the onChange callback.
        const element = getDocumentActiveElement();
        try {
            apply(input_value_setter, element, [text]);
        } catch (e) {}
        try {
            apply(textarea_value_setter, element, [text]);
        } catch (e2) {}
        dispatchEventRaw(element, new InputEvent('input', clone_into({ inputType: 'insertText', data: text })));
    }

    function dispatchPaste(text) {
        const data = new no_xray_DataTransfer();
        const e = new no_xray_ClipboardEvent('paste', {
            clipboardData: data,
            // @ts-ignore Firefox only API
            dataType: 'text/plain',
            data: text,
            bubbles: true,
            cancelable: true,
        });
        // TODO: save intrinsic of %DataTransfer.prototype.setData%
        data.setData('text/plain', text);
        apply(dispatchEvent, getDocumentActiveElement(), [e]);
    }

    function dispatchPasteImage(image) {
        const data = new no_xray_DataTransfer();
        const e = new no_xray_ClipboardEvent('paste', {
            clipboardData: data,
            bubbles: true,
            cancelable: true,
        });
        const file = constructXrayUnwrappedFilesFromUintLike('image/png', 'image.png', image);
        const dt = constructXrayUnwrappedDataTransferProxy(file);
        dispatchEventRaw(getDocumentActiveElement(), e, { clipboardData: dt });
    }

    const hasListened = { __proto__: null };
    const { has } = Reflect;
    const { Promise: Promise$1, setTimeout: setTimeout$1 } = window;
    const { resolve } = Promise$1;
    const { split } = String.prototype;
    const { shift } = Array.prototype;

    function read(path) {
        const fragments = apply(split, path, ['.' ]);
        let result = window;
        while (fragments.length !== 0) {
            const key = apply(shift, fragments, []);
            result = key ? result[key] : result;
        }
        return result
    }

    function access(path, id, property) {
        handlePromise(id, () => read(path)[property]);
    }

    function callRequest(path, id, request) {
        handlePromise(id, () => read(path).request(request));
    }

    function execute(path, id) {
        handlePromise(id, () => read(path)());
    }

    function bindEvent(path, bridgeEvent, event) {
        if (hasListened[event]) return
        hasListened[event] = true;
        read(path).on(
            event,
            clone_into((...args) => {
                sendEvent(bridgeEvent, event, args);
            }),
        );
    }

    function untilInner(name) {
        if (has(window, name)) return apply(resolve, Promise$1, [true])
        return new Promise$1((r) => {
            function check() {
                if (has(window, name)) return r(true)
                apply(setTimeout$1, window, [check, 200]);
            }
            check();
        })
    }

    function until(path, id) {
        handlePromise(id, () => untilInner(path));
    }

    function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

    const proto = HTMLInputElement.prototype;
    const { defineProperty, deleteProperty } = Reflect;
    const setTimeoutCaptured = setTimeout.bind(window);
    const clearTimeoutCaptured = clearTimeout.bind(window);

    /**
     * This API can mock a file upload in React applications when injected script has been injected into the page.
     *
     * If the <input type='file' /> element is available, you can use the API like this:
     *     input.focus()
     *     hookInputUploadOnce(format, fileName, file, true)
     *
     * If the <input type='file' /> is dynamically generated after the user clicks "Upload" button on the web page, you can use the API like this:
     *     hookInputUploadOnce(format, fileName, file, false)
     *     uploadButton.click()
     * @param format
     * @param fileName
     * @param fileArray
     * @param triggerOnActiveElementNow
     */
    function hookInputUploadOnce(
        ...[format, fileName, fileArray, triggerOnActiveElementNow]
    ) {
        let timer = null;
        const e = new no_xray_Event('change', {
            bubbles: true,
            cancelable: true,
        });
        const file = constructXrayUnwrappedFilesFromUintLike(format, fileName, fileArray);

        const old = proto.click;
        proto.click = function () {
            const fileList = clone_into({
                item: clone_into((i) => {
                    if (i === 0) return file
                    return null
                }),
                length: 1,
                [0]: file,
            });
            defineProperty(this, 'files', {
                configurable: true,
                value: fileList,
            });
            if (timer !== null) clearTimeoutCaptured(timer);
            timer = setTimeoutCaptured(() => {
                dispatchEventRaw(this, e, {});
                proto.click = old;
                deleteProperty(this, 'files');
            }, 200);
        };

        if (triggerOnActiveElementNow && document.activeElement instanceof HTMLInputElement) {
            _optionalChain([document, 'access', _ => _.activeElement, 'optionalAccess', _2 => _2.click, 'call', _3 => _3()]);
        }
    }

    document.addEventListener(CustomEventId, (e) => {
        const r = decodeEvent(getCustomEventDetail(e ));

        if (r[1].length < 1) return

        switch (r[0]) {
            case 'input':
                return apply(dispatchInput, null, r[1])
            case 'paste':
                return apply(dispatchPaste, null, r[1])
            case 'instagramUpload':
                return apply(instagramUpload, null, r[1])
            case 'pasteImage':
                return apply(dispatchPasteImage, null, r[1])
            case 'hookInputUploadOnce':
                return apply(hookInputUploadOnce, null, r[1])
            case 'rejectPromise':
            case 'resolvePromise':
                return

            // solana
            case 'solanaBridgeRequestListen':
                return apply(bindEvent, null, ['solana', 'solanaBridgeOnEvent', ...r[1]])
            case 'solanaBridgeExecute':
                return apply(execute, null, [...r[1]])
            case 'solanaBridgeSendRequest':
                return apply(callRequest, null, ['solana', ...r[1]])
            case 'solanaBridgePrimitiveAccess':
                return apply(access, null, ['solana', ...r[1]])
            case 'untilSolanaBridgeOnline':
                return apply(until, null, ['solana', ...r[1]])
            case 'solanaBridgeOnEvent':
                return

            // ethereum
            case 'ethBridgeRequestListen':
                return apply(bindEvent, null, ['ethereum', 'ethBridgeOnEvent', ...r[1]])
            case 'ethBridgeSendRequest':
                return apply(callRequest, null, ['ethereum', ...r[1]])
            case 'ethBridgePrimitiveAccess':
                return apply(access, null, ['ethereum', ...r[1]])
            case 'untilEthBridgeOnline':
                return apply(until, null, ['ethereum', ...r[1]])
            case 'ethBridgeOnEvent':
                return

            // coin98
            case 'coin98BridgeRequestListen':
                return apply(bindEvent, null, ['coin98.provider', 'coin98BridgeOnEvent', ...r[1]])
            case 'coin98BridgeSendRequest':
                return apply(callRequest, null, ['coin98.provider', ...r[1]])
            case 'coin98BridgePrimitiveAccess':
                return apply(access, null, ['coin98.provider', ...r[1]])
            case 'untilCoin98BridgeOnline':
                return apply(until, null, ['coin98', ...r[1]])
            case 'coin98BridgeOnEvent':
                return

            default:
                const neverEvent = r[0];
                warn('[@masknet/injected-script]', neverEvent, 'not handled');
        }
    });

    function setupChromium() {
        // Learn more about this hack from https://stackoverflow.com/a/52809105/1986338
        window.history.pushState = new no_xray_Proxy(history.pushState, {
            apply(target, thisArg, params) {
                const val = apply(target, thisArg, params);
                apply(dispatchEvent$1, window, [new no_xray_Event('pushstate')]);
                apply(dispatchEvent$1, window, [new no_xray_Event('locationchange')]);
                return val
            },
        });
        window.history.replaceState = new no_xray_Proxy(history.replaceState, {
            apply(target, thisArg, params) {
                const val = apply(target, thisArg, params);
                apply(dispatchEvent$1, window, [new no_xray_Event('replacestate')]);
                apply(dispatchEvent$1, window, [new no_xray_Event('locationchange')]);
                return val
            },
        });

        window.addEventListener('popstate', () => {
            apply(dispatchEvent$1, window, [new no_xray_Event('locationchange')]);
        });
    }

    function setupGecko() {
        let lastURL = location.href;

        new MutationObserver(() => {
            const url = location.href;
            if (url !== lastURL) {
                lastURL = url;
                onLocationChange();
            }
        }).observe(document, { subtree: true, childList: true });

        function onLocationChange() {
            apply(dispatchEvent$1, window, [new no_xray_Event('locationchange')]);
        }
    }
    (() => {
        const isFF = navigator.userAgent.toLowerCase().includes('firefox');
        if (isFF) setupGecko();
        setupChromium();
    })();

    if (document.currentScript) document.currentScript.remove();

})();
