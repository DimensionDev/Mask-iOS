(function () {
    'use strict';

    const CustomEventId = 'c8a6c18e-f6a3-472a-adf3-5335deb80db6';

    const apply



     = Reflect.apply;
    const { error, warn } = console;

    const { defineProperties } = Object;
    //#region document.activeElement
    const DocumentActiveElementGetter = Object.getOwnPropertyDescriptors(
        Object.getPrototypeOf(Object.getPrototypeOf(document)),
    ).activeElement.get;
    const getDocumentActiveElement = () => apply(DocumentActiveElementGetter, document, []);
    //#endregion
    //#region CustomEvent.prototype.detail
    const CustomEventDetailGetter = Object.getOwnPropertyDescriptor(CustomEvent.prototype, 'detail').get;
    const getCustomEventDetail = (e) => apply(CustomEventDetailGetter, e, []);
    //#endregion
    //#region new Map()
    const { Map: _xray_Map } = globalThis;
    const XRayMapOriginalProtoDesc = Object.getOwnPropertyDescriptors(_xray_Map.prototype);
    function xray_Map() {
        const map = new _xray_Map();
        defineProperties(map, XRayMapOriginalProtoDesc);
        return map
    }
    //#endregion
    const {
        Proxy: no_xray_Proxy,
        Event: no_xray_Event,
        dispatchEvent: dispatchEvent$1,
        DataTransfer: no_xray_DataTransfer,
        ClipboardEvent: no_xray_ClipboardEvent,
        // The "window."" here is used to create a no-xray version on Firefox
    } = globalThis.window;
    const _XPCNativeWrapper = typeof XPCNativeWrapper === 'undefined' ? undefined : XPCNativeWrapper;

    const { Uint8Array: no_xray_Uint8Array, Blob: no_xray_Blob, File: no_xray_File } = globalThis.window;
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

    /** get the xray-unwrapped version of a _DOM_ object */
    function unwrapXRay_DOMObject(x) {
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
        const binary = no_xray_Uint8Array.from(xray_fileContent);
        const blob = new no_xray_Blob([binary], { type: format });
        const file = new no_xray_File([blob], fileName, {
            lastModified: now(),
            type: format,
        });
        return file
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
                const raw = unwrapXRay_DOMObject(input);
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
    const CapturingEvents = new Set(['keyup', 'input', 'paste'] );


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
            const target = unwrapXRay_DOMObject(currentTarget());
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
                        if (key === 'currentTarget') return unwrapXRay_DOMObject(currentTarget())
                        return _nullishCoalesce((source )[key], () => ( (unwrapXRay_DOMObject(target) )[key]))
                    },
                }),
            )
        }
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

    const { parse } = JSON;
    document.addEventListener(CustomEventId, (e) => {
        const result = parse(getCustomEventDetail(e ));
        // Do not use deconstruct syntax. Avoid invoking @@iterator on Array.
        const f = result[0];
        const param = result[1]; 

        if (param.length < 1) return

        if (f === 'input') return apply(dispatchInput, null, param)
        if (f === 'paste') return apply(dispatchPaste, null, param)
        if (f === 'instagramUpload') return apply(instagramUpload, null, param)
        if (f === 'pasteImage') return apply(dispatchPasteImage, null, param)

        const neverEvent = f;
        warn('[@masknet/injected-script]', neverEvent, 'not handled');
    });

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

    const data = {
        // @ts-ignore
        __proto__: null,
        appVersion:
            '5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
        platform: 'Linux armv8l',
        userAgent:
            'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
        vendor: 'Google Inc.',
        vendorSub: '',
        // navigator.userAgentData
    };
    if (location.hostname.endsWith('instagram.com')) {
        const proto = Object.getPrototypeOf(window.navigator);
        const desc = Object.getOwnPropertyDescriptors(proto);
        for (const key in desc) {
            // TODO: should this function f being xray-unwrapped?
            const f = () => data[key ];
            if (key in data) desc[key].get = f;
            else delete desc[key];
        }
        delete proto.userAgentData;
        Object.defineProperties(proto, desc);
    }

    if (document.currentScript) document.currentScript.remove();

}());
