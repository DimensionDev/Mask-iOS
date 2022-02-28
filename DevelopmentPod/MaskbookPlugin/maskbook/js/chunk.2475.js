"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2475],{

/***/ 32475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "po": () => (/* reexport */ Flatten_FlattenTypedMessage),
  "al": () => (/* reexport */ ParseLinkTransformer),
  "gO": () => (/* reexport */ composed/* composeTransformers */.g),
  "mC": () => (/* reexport */ createRenderWithMetadata),
  "Bi": () => (/* reexport */ createTypedMessageMetadataReader),
  "r1": () => (/* reexport */ editTypedMessageMeta),
  "vg": () => (/* reexport */ emptyTransformationContext),
  "Vc": () => (/* reexport */ extractTextFromTypedMessage),
  "ss": () => (/* reexport */ forEachChild_forEachTypedMessageChild),
  "b5": () => (/* reexport */ getKnownMetadataKeys),
  "SJ": () => (/* reexport */ getMetadataSchema),
  "Jp": () => (/* reexport */ isDataMatchJSONSchema),
  "bj": () => (/* reexport */ anchor_isTypedMessageAnchor),
  "YN": () => (/* reexport */ isTypedMessageEmpty),
  "Hz": () => (/* reexport */ isTypedMessageEqual),
  "Rz": () => (/* reexport */ text_isTypedMessageText),
  "Jv": () => (/* reexport */ makeTypedMessageAnchor),
  "WM": () => (/* reexport */ makeTypedMessageEmpty),
  "as": () => (/* reexport */ makeTypedMessageImage),
  "Ng": () => (/* reexport */ makeTypedMessagePromise),
  "P": () => (/* reexport */ text_makeTypedMessageText),
  "Zw": () => (/* reexport */ tuple_makeTypedMessageTuple),
  "n_": () => (/* reexport */ makeTypedMessageTupleFromList),
  "IJ": () => (/* reexport */ visitEachChild_visitEachTypedMessageChild)
});

// UNUSED EXPORTS: createMaskPayloadTransform, createTransformationContext, decodeTypedMessageFromDocument, decodeTypedMessageV38ToV40Format, editMetadata, encodeTypedMessageToDocument, encodeTypedMessageV38Format, extractImageFromTypedMessage, isCoreTypedMessages, isNonSerializableTypedMessageWithAlt, isSerializableTypedMessage, isTypedMessageImage, isTypedMessageMaskPayload, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownExtensionTypedMessages, isWellKnownTypedMessages, makeTypedMessageMaskPayload, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

;// CONCATENATED MODULE: ../typed-message/base/utils/internal.ts
/** @internal */ function createIsType(x, version) {
    return (y)=>{
        if (version !== undefined && y.version !== version) return false;
        return y.type === x;
    };
}
/** @internal */ function composeSome(...fns) {
    return (...args)=>fns.some((f)=>f(...args)
        )
    ;
}
/** @internal */ function composeEvery(...fns) {
    return (...args)=>fns.every((f)=>f(...args)
        )
    ;
}

;// CONCATENATED MODULE: ../typed-message/base/core/empty.ts

const isTypedMessageEmpty = createIsType('empty');
const empty = {
    type: 'empty',
    serializable: true,
    version: 1,
    meta: undefined
};
Object.setPrototypeOf(empty, null);
Object.freeze(empty);
function makeTypedMessageEmpty() {
    return empty;
}

;// CONCATENATED MODULE: ../typed-message/base/core/unknown.ts

const isTypedMessageUnknown = createIsType('unknown');
function unknown_makeTypedMessageUnknown(raw) {
    return {
        type: 'unknown',
        serializable: false,
        meta: undefined,
        raw
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js
if (1711 != __webpack_require__.j) {
var isEqual = __webpack_require__(23587);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ../../node_modules/.pnpm/z-schema@5.0.2/node_modules/z-schema/src/ZSchema.js
var ZSchema = __webpack_require__(32002);
var ZSchema_default = /*#__PURE__*/__webpack_require__.n(ZSchema);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
;// CONCATENATED MODULE: ../typed-message/base/utils/metadata.ts



(0,immer_esm/* enableMapSet */.MD)();
const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? (0,esm/* Some */.bD)(metadataSchemaStore.get(key)) : esm/* None */.Hq;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
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
    if (!meta) return esm/* Err.EMPTY */.UG.EMPTY;
    if (!meta.has(key)) return esm/* Err.EMPTY */.UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return esm/* Err.EMPTY */.UG.EMPTY;
        }
    }
    return (0,esm.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (ZSchema_default())({});
    if (!validator.validate(data, jsonSchema)) return (0,esm/* Err */.UG)(validator.getLastErrors());
    return esm.Ok.EMPTY;
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
    return (0,immer_esm/* default */.ZP)(metadata || new Map(), (e)=>void edit(e)
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

;// CONCATENATED MODULE: ../typed-message/base/extension/anchor.ts


const anchor_isTypedMessageAnchor = createIsType('x-anchor');
function makeTypedMessageAnchor(category, href, content) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: text_makeTypedMessageText(`[${content}](${href})`)
    };
}

;// CONCATENATED MODULE: ../typed-message/base/extension/MaskPayload.ts

const MaskPayload_isTypedMessageMaskPayload = createIsType('x-mask-payload');
function makeTypedMessageMaskPayload(message, meta) {
    return {
        type: 'x-mask-payload',
        message,
        meta
    };
}

;// CONCATENATED MODULE: ../typed-message/base/extension/index.ts





const isWellKnownExtensionTypedMessages = composeSome(anchor_isTypedMessageAnchor, MaskPayload_isTypedMessageMaskPayload);

;// CONCATENATED MODULE: ../typed-message/base/visitor/visitEachChild.ts



function visitEachChild_visitEachTypedMessageChild(node, visitor, context) {
    if (tuple_isTypedMessageTuple(node)) {
        const after = node.items.flatMap((x)=>{
            const next = visitor(x, context);
            if (tuple_isTypedMessageTuple(next)) return next.items;
            return next;
        });
        if (after.every(isSerializableTypedMessage)) {
            return makeTypedMessageTupleSerializable(after, node.meta);
        }
        return tuple_makeTypedMessageTuple(after, node.meta);
    } else if (isTypedMessagePromise(node)) {
        // we ignore alt if promise is resolved.
        if (node.promise.value) return visitor(node.promise.value, context);
        else if (node.alt) return makeTypedMessagePromise(node.promise, visitor(node.alt, context));
        return node;
    } else if (MaskPayload_isTypedMessageMaskPayload(node)) {
        const next = visitor(node.message, context);
        return makeTypedMessageMaskPayload(next, node.meta);
    } else if (isNonSerializableTypedMessageWithAlt(node)) {
        const alt = visitor(node.alt, context);
        if (!isSerializableTypedMessage(alt)) {
            console.warn('[@masknet/typed-message] You must return a serializable message in this position. Original:', node, 'Transformed child "alt":', alt);
            // ignore the transform result
            return node;
        }
        return {
            ...node,
            alt
        };
    } else {
        // return node with no child
        return node;
    }
}

;// CONCATENATED MODULE: ../typed-message/base/visitor/forEachChild.ts



function forEachChild_forEachTypedMessageChild(node, visitor) {
    let stop;
    if (tuple_isTypedMessageTuple(node)) {
        for (const each of node.items){
            stop = visitor(each);
            if (stop) return;
        }
    } else if (isTypedMessagePromise(node)) {
        // if Promise has a resolved value, we ignore it's alt.
        if (node.promise.value) visitor(node.promise.value);
        else if (node.alt) visitor(node.alt);
    } else if (MaskPayload_isTypedMessageMaskPayload(node)) {
        visitor(node.message);
    } else if (isNonSerializableTypedMessageWithAlt(node)) {
        visitor(node.alt);
    }
}

;// CONCATENATED MODULE: ../typed-message/base/visitor/index.ts



;// CONCATENATED MODULE: ../typed-message/base/utils/extract.ts




/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message1, options) {
    if (!message1) return esm/* None */.Hq;
    const text = [];
    function visitor(message) {
        if (text_isTypedMessageText(message)) text.push(message.content);
        else if (anchor_isTypedMessageAnchor(message)) {
            text.push(message.content);
            if (options === null || options === void 0 ? void 0 : options.linkAsText) text.push(`(${message.href})`);
        } else forEachChild_forEachTypedMessageChild(message, visitor);
    }
    visitor(message1);
    forEachChild_forEachTypedMessageChild(message1, visitor);
    if (text.length) return (0,esm/* Some */.bD)(text.join(' '));
    return esm/* None */.Hq;
}
function extractImageFromTypedMessage(message2) {
    if (!message2) return [];
    const image = [];
    function visitor(message) {
        if (isTypedMessageImage(message)) return void image.push(message.image);
        return forEachTypedMessageChild(message, visitor);
    }
    visitor(message2);
    forEachTypedMessageChild(message2, visitor);
    return image;
}

;// CONCATENATED MODULE: ../typed-message/base/utils/index.ts



function isNonSerializableTypedMessageWithAlt(x) {
    const y = x;
    if (y.serializable !== false) return false;
    if (!y.alt) return false;
    return isSerializableTypedMessage(y.alt);
}
function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    return isNonSerializableTypedMessageWithAlt(x);
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    // perform a deep equal
    return (0,isEqual/* default */.Z)(message1, message2);
}

;// CONCATENATED MODULE: ../typed-message/base/core/tuple.ts


const tuple_isTypedMessageTuple = (x)=>x.type === 'tuple'
;
const tuple_isTypedMessageTupleSerializable = composeEvery(tuple_isTypedMessageTuple, isSerializableTypedMessage);
function tuple_makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}

;// CONCATENATED MODULE: ../typed-message/base/core/text.ts

const isTypedMessageTextV1 = createIsType('text', 1);
const text_isTypedMessageText = isTypedMessageTextV1;
function text_makeTypedMessageText(text, meta) {
    return {
        type: 'text',
        version: 1,
        serializable: true,
        content: text,
        meta
    };
}

;// CONCATENATED MODULE: ../typed-message/base/core/image.ts

const image_isTypedMessageImage = createIsType('image');
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size === null || size === void 0 ? void 0 : size.width,
        height: size === null || size === void 0 ? void 0 : size.height,
        meta
    };
}

;// CONCATENATED MODULE: ../typed-message/base/core/promise.ts

const isTypedMessagePromise = createIsType('promise');
function makeTypedMessagePromise(promise, alt) {
    const x = {
        type: 'promise',
        serializable: false,
        promise: promise.then((y)=>x.promise.value = y
        ),
        alt,
        meta: undefined
    };
    return x;
}

;// CONCATENATED MODULE: ../typed-message/base/core/index.ts













const isCoreTypedMessages = composeSome(isTypedMessageEmpty, text_isTypedMessageText, image_isTypedMessageImage, tuple_isTypedMessageTuple, isTypedMessageUnknown, isTypedMessagePromise);

;// CONCATENATED MODULE: ../typed-message/base/binary-encode/type.ts
var type_TypedMessageBinaryEncodingTypeEnum;
(function(TypedMessageBinaryEncodingTypeEnum) {
    TypedMessageBinaryEncodingTypeEnum[TypedMessageBinaryEncodingTypeEnum["Tuple"] = 0] = "Tuple";
    TypedMessageBinaryEncodingTypeEnum[TypedMessageBinaryEncodingTypeEnum["Text"] = 1] = "Text";
})(type_TypedMessageBinaryEncodingTypeEnum || (type_TypedMessageBinaryEncodingTypeEnum = {}));

;// CONCATENATED MODULE: ../typed-message/base/binary-encode/decode.ts




const HEAD = '[@masknet/typed-message] ';
function decodeTypedMessageFromDocument(bin) {
    return Result.wrap(()=>{
        const doc = decode(bin);
        if (!Array.isArray(doc)) throw new Error(`${HEAD}Invalid document`);
        const [docVer, message] = doc;
        if (typeof docVer !== 'number') throw new Error(`${HEAD}Invalid document`);
        if (docVer !== 0) throw new Error(`${HEAD}Unknown document version`);
        const result = decodeTypedMessage(message);
        fixU8Array(result);
        return result;
    });
}
function decodeTypedMessage(tm) {
    const [type] = tm;
    if (typeof type !== 'string' && typeof type !== 'number') throw new TypeError(`${HEAD}Invalid TypedMessage`);
    if (type === TypedMessageBinaryEncodingTypeEnum.Text) return decodeTypedMessageText(tm);
    if (type === TypedMessageBinaryEncodingTypeEnum.Tuple) return decodeTypedMessageTuple(tm);
    return makeTypedMessageUnknown(tm);
}
function decodeTypedMessageText([, version, meta, text, format]) {
    assertNumber(version);
    assertString(text);
    return makeTypedMessageText(text, decodeMetadata(meta));
}
function decodeTypedMessageTuple([, version, meta, items]) {
    assertNumber(version);
    if (!Array.isArray(items)) throw new TypeError(`${HEAD}Invalid TypedMessageTuple`);
    return makeTypedMessageTuple(items.map(decodeTypedMessage), decodeMetadata(meta));
}
function decodeMetadata(meta) {
    if (meta === null) return undefined;
    if (typeof meta !== 'object') throw new TypeError(`${HEAD}Invalid TypedMessage`);
    if (Object.getPrototypeOf(meta) !== Object.prototype) throw new TypeError(`${HEAD}Invalid TypedMessage`);
    return meta;
}
function assertNumber(x) {
    if (typeof x !== 'number') throw new TypeError(`${HEAD}Invalid TypedMessage`);
}
function assertString(x) {
    if (typeof x !== 'string') throw new TypeError(`${HEAD}Invalid TypedMessage`);
}
// Detach Uint8Array from it's underlying buffer
function fixU8Array(obj) {
    // for Array and object
    if (typeof obj === 'object' && obj !== null) {
        for(const key in obj){
            const val = obj[key];
            if (val instanceof Uint8Array) obj[key] = val.slice();
            else fixU8Array(val);
        }
    }
}

;// CONCATENATED MODULE: ../typed-message/base/binary-encode/encode.ts



const encode_HEAD = '[@masknet/typed-message] ';
function encodeTypedMessageToDocument(tm) {
    const doc = [
        0,
        encodeTypedMessage(tm)
    ];
    return encode(doc);
}
function encodeTypedMessage(tm) {
    if (tm.serializable === false) {
        if (tm.alt) return encodeTypedMessage(tm.alt);
        throw new TypeError(`${encode_HEAD}TypedMessage ${tm.type} does not support serialization.`);
    }
    if (isTypedMessageText(tm)) return encodeTypedMessageText(tm);
    if (isTypedMessageTupleSerializable(tm)) return encodeTypedMessageTuple(tm);
    throw new TypeError(`${encode_HEAD}Unsupported TypedMessage ${tm.type} to be serialized.`);
}
function encodeTypedMessageText(tm) {
    // TODO: TextFormat
    return [
        TypedMessageBinaryEncodingTypeEnum.Text,
        tm.version,
        encodeMeta(tm),
        tm.content
    ];
}
function encodeTypedMessageTuple(tm) {
    return [
        TypedMessageBinaryEncodingTypeEnum.Tuple,
        tm.version,
        encodeMeta(tm),
        tm.items.map(encodeTypedMessage)
    ];
}
function encodeMeta(tm) {
    if (!tm.meta) return null;
    const record = {
        __proto__: null
    };
    for (const [key, val] of tm.meta){
        if (typeof key !== 'string') continue;
        if (typeof val === 'undefined') continue;
        try {
            record[key] = collectValue(val);
        } catch (err) {
            console.warn(`${encode_HEAD}key ${key} is dropped due to the error`, err);
        }
    }
    return record;
}
function collectValue(val) {
    try {
        const type = typeof val;
        if (val === undefined) {
            console.warn(`${encode_HEAD}undefined converted to null.`);
            return null;
        }
        if (type === 'number' || val === null || type === 'boolean' || type === 'string') return val;
        if (type === 'bigint' || type === 'function' || type === 'symbol') {
            throw new TypeError(`${encode_HEAD}Unsupported type ${type}`);
        }
        if (val instanceof Uint8Array) return new Uint8Array(val);
        if (val instanceof ArrayBuffer) {
            throw new TypeError(`${encode_HEAD}ArrayBuffer must be Uint8Array.`);
        }
        if (Array.isArray(val)) return Array.from(val).map(collectValue);
        const proto = Object.getPrototypeOf(val);
        if (proto !== Object.prototype && proto !== null) {
            throw new TypeError(`${encode_HEAD}unsupported value with a non trivial prototype.`);
        }
        const result = {};
        for(const key in val){
            if (typeof key !== 'string') throw new TypeError(`${encode_HEAD}Unsupported type symbol.`);
            const v = val[key];
            result[key] = collectValue(v);
        }
        return result;
    } catch (err) {
        console.warn(encode_HEAD, 'When converting value', val, ', an error occurred', err);
        throw err;
    }
}

;// CONCATENATED MODULE: ../typed-message/base/binary-encode/index.ts



;// CONCATENATED MODULE: ../typed-message/base/deprecated-encode/index.ts


function encodeTypedMessageV38Format(message) {
    var ref;
    const encoder = new TextEncoder();
    if ((ref = message.meta) === null || ref === void 0 ? void 0 : ref.size) {
        const rec = Object.fromEntries(message.meta.entries());
        return encoder.encode(`${JSON.stringify(rec)}\u{1F9E9}${message.content}`);
    }
    return encoder.encode(message.content);
}
function decodeTypedMessageV38ToV40Format(raw, version) {
    const decoder = new TextDecoder();
    const text = Result.wrap(()=>decoder.decode(raw)
    );
    const { val: val1 , err  } = text;
    if (err) return text;
    if (version === -38) {
        const maybeMetadata = (()=>{
            if (!val1.includes('\u{1F9E9}')) return None;
            const [maybeJSON] = val1.split('\u{1F9E9}');
            return Result.wrap(()=>JSON.parse(maybeJSON)
            ).toOption().map((val)=>{
                if (typeof val !== 'object' || Array.isArray(val)) return new Map();
                return new Map(Object.entries(val));
            });
        })();
        return Ok(maybeMetadata.some ? makeTypedMessageText(val1.replace(/.+\u{1F9E9}/u, ''), maybeMetadata.val) : makeTypedMessageText(val1));
    }
    return Ok(makeTypedMessageText(val1));
}

// EXTERNAL MODULE: ../typed-message/base/transformer/composed.ts
if (1711 != __webpack_require__.j) {
var composed = __webpack_require__(93727);
}
;// CONCATENATED MODULE: ../typed-message/base/transformer/context.ts
function createTransformationContext() {
    return Object.freeze({});
}
const emptyTransformationContext = createTransformationContext();

;// CONCATENATED MODULE: ../typed-message/base/transformer/Flatten.ts




function Flatten_FlattenTypedMessage(message, context) {
    if (isTypedMessagePromise(message) && message.promise.value) return message.promise.value;
    if (tuple_isTypedMessageTuple(message)) {
        const next = message.items.map((x)=>Flatten_FlattenTypedMessage(x, context)
        ).flatMap((x)=>tuple_isTypedMessageTuple(x) ? x.meta ? x : x.items : x
        ).filter((x)=>!isTypedMessageEmpty(x)
        ).reduce((result, current)=>{
            const lastItem = result.at(-1);
            if (!lastItem || lastItem.meta || current.meta) return result.concat(current);
            if (!text_isTypedMessageText(current) || !text_isTypedMessageText(lastItem)) return result.concat(current);
            // Only concat when last one and current one are both text and have no meta.
            result.pop();
            result.push(text_makeTypedMessageText(`${lastItem.content} ${current.content}`));
            return result;
        }, []);
        if (!message.meta) {
            if (next.length === 0) return makeTypedMessageEmpty();
            if (next.length === 1) return next[0];
        }
        if (next.every(isSerializableTypedMessage)) return makeTypedMessageTupleSerializable(next, message.meta);
        return tuple_makeTypedMessageTuple(next, message.meta);
    }
    return visitEachChild_visitEachTypedMessageChild(message, Flatten_FlattenTypedMessage, context);
}
Flatten_FlattenTypedMessage.NoContext = (message)=>Flatten_FlattenTypedMessage(message, emptyTransformationContext)
;

// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var parseLink = __webpack_require__(2063);
;// CONCATENATED MODULE: ../typed-message/base/transformer/ParseLink.ts




function ParseLinkTransformer(message, context) {
    if (text_isTypedMessageText(message)) {
        const parsed = (0,parseLink/* parseLink */.V)(message.content);
        if (parsed.length === 1 && parsed[0].type === 'text') return message;
        return makeTypedMessageTupleSerializable(parsed.map((i)=>{
            if (i.type === 'text') return text_makeTypedMessageText(i.content);
            return makeTypedMessageAnchor(i.category, i.content, i.content);
        }), message.meta);
    }
    return visitEachChild_visitEachTypedMessageChild(message, ParseLinkTransformer, context);
}

;// CONCATENATED MODULE: ../typed-message/base/transformer/MaskPayload/index.ts




function createMaskPayloadTransform(options) {
    return function MaskPayloadTransform(message, context) {
        if (context.skipMaskPayloadTransform) return message;
        message = FlattenTypedMessage(message, context);
        if (isTypedMessageMaskPayload(message)) return message;
        // We don't transform nested message
        // Note: there maybe more than 1 payload in the message. Make sure both of them are handled.
        if (isTypedMessageAnchor(message)) {
            if (message.content.match(linkPayload)) return options.transformText(message.content, context);
            if (message.href.match(linkPayload)) return options.transformText(message.href, context);
        } else if (isTypedMessageImage(message)) {
            return options.transformImage(message, context);
        } else if (isTypedMessageText(message)) {
            // TODO: there maybe more than 1 payload to parse.
            // Not detect link form here. Only detect raw form (used on FB) in this branch.
            if (message.content.match(textPayload)) {
                return options.transformText(message.content, context);
            }
        } else if (isTypedMessageTuple(message)) {
        // TODO: there maybe more than 1 payload to parse.
        // Visit each child here, when a raw form or link form is detected,
        // we should check if the before/after is the text need to be removed.
        // For example:
        // Tuple(
        //      Text("Keep this text! This post is encrypted by")
        //      Anchor("@mask.io"),
        //      Text(" . Install to decrypt!"),
        //      Anchor(payload here),
        //      Text(" more text to be removed! But keep this one!")
        // )
        // it should be transformed into
        // Tuple(
        //      Text("Keep this text! "),
        //      MaskPayload(pending...),
        //      Text(" But keep this one!"),
        // )
        }
        return visitEachTypedMessageChild(message, MaskPayloadTransform, context);
    };
}
// match the link version payload
/* cspell:disable-next-line */ const linkPayload = /^https?:\/\/mask(\.io|book\.com)\/\?postdata_v/i;
// match the text version payload
const textPayload = /(\u{1F3BC}[\w+/=|]+:\|\|)/giu;

;// CONCATENATED MODULE: ../typed-message/base/transformer/index.ts






;// CONCATENATED MODULE: ../typed-message/base/index.ts











const isWellKnownTypedMessages = composeSome(isCoreTypedMessages, isWellKnownExtensionTypedMessages);


/***/ }),

/***/ 93727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ composeTransformers)
/* harmony export */ });
function composeTransformers() {
    const event = new EventTarget();
    const onUpdate = ()=>event.dispatchEvent(new Event('update'))
    ;
    const transformers = new Set();
    function composed(message, context) {
        return [
            ...transformers
        ].sort((a, b)=>a[1] - b[1]
        ).reduce((p, [c])=>c(p, context)
        , message);
    }
    const subscription = {
        getCurrentValue: ()=>(message, context)=>composed(message, context)
        ,
        subscribe (f) {
            event.addEventListener('update', f);
            return ()=>{
                event.removeEventListener('update', f);
            };
        }
    };
    return {
        subscription,
        addTransformer (t, priority, signal) {
            const f_priority = [
                typeof t === 'function' ? t : (message, context)=>t.getCurrentValue()(message, context)
                ,
                priority, 
            ];
            transformers.add(f_priority);
            onUpdate();
            const cancelSubscription = typeof t === 'function' ? ()=>{} : t.subscribe(onUpdate);
            const remove = ()=>{
                transformers.delete(f_priority);
                cancelSubscription();
                onUpdate();
            };
            signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', remove);
            return remove;
        }
    };
}


/***/ }),

/***/ 2063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ parseLink)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

// ESM/CJS compat
const anchorme = anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
function parseLink(text) {
    const parsed = anchorme.list(text);
    const result = [];
    let start = 0;
    for (const x1 of parsed){
        if (x1.isURL) {
            result.push({
                type: 'text',
                content: text.slice(start, x1.start)
            });
            result.push({
                type: 'link',
                content: x1.string,
                category: 'normal'
            });
        } else {
            result.push({
                type: 'text',
                content: text.slice(start, x1.end)
            });
        }
        start = x1.end;
    }
    result.push({
        type: 'text',
        content: text.slice(start, text.length)
    });
    return result.filter((x)=>x.content
    ).flatMap((x)=>x.type === 'text' ? parseTag(x.content) : x
    );
}
const TagLike = /([#$@][\w\-]+)/g;
const map = {
    '@': 'user',
    '#': 'hash',
    $: 'cash'
};
function parseTag(x2) {
    return x2.split(TagLike).map((x)=>TagLike.test(x) ? {
            type: 'link',
            content: x,
            category: map[x[0]] || 'normal'
        } : {
            type: 'text',
            content: x
        }
    );
}


/***/ })

}]);