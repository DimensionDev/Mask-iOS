"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7201],{

/***/ 77183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zc": () => (/* reexport */ AsnConvert),
  "A6": () => (/* reexport */ AsnIntegerConverter),
  "qw": () => (/* reexport */ AsnProp),
  "gZ": () => (/* reexport */ AsnPropTypes),
  "xg": () => (/* reexport */ AsnSerializer),
  "Ve": () => (/* reexport */ AsnType),
  "cN": () => (/* reexport */ AsnTypeTypes),
  "fi": () => (/* reexport */ OctetString)
});

// UNUSED EXPORTS: AsnAnyConverter, AsnArray, AsnBitStringConverter, AsnBmpStringConverter, AsnBooleanConverter, AsnCharacterStringConverter, AsnEnumeratedConverter, AsnGeneralStringConverter, AsnGeneralizedTimeConverter, AsnGraphicStringConverter, AsnIA5StringConverter, AsnIntegerArrayBufferConverter, AsnNullConverter, AsnNumericStringConverter, AsnObjectIdentifierConverter, AsnOctetStringConverter, AsnParser, AsnPrintableStringConverter, AsnSchemaValidationError, AsnTeletexStringConverter, AsnUTCTimeConverter, AsnUniversalStringConverter, AsnUtf8StringConverter, AsnVideotexStringConverter, AsnVisibleStringConverter, BitString, defaultConverter

// EXTERNAL MODULE: ../../node_modules/.pnpm/asn1js@2.1.1/node_modules/asn1js/src/asn1.js
var asn1 = __webpack_require__(74269);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/enums.js
var AsnTypeTypes;
(function (AsnTypeTypes) {
    AsnTypeTypes[AsnTypeTypes["Sequence"] = 0] = "Sequence";
    AsnTypeTypes[AsnTypeTypes["Set"] = 1] = "Set";
    AsnTypeTypes[AsnTypeTypes["Choice"] = 2] = "Choice";
})(AsnTypeTypes || (AsnTypeTypes = {}));
var AsnPropTypes;
(function (AsnPropTypes) {
    AsnPropTypes[AsnPropTypes["Any"] = 1] = "Any";
    AsnPropTypes[AsnPropTypes["Boolean"] = 2] = "Boolean";
    AsnPropTypes[AsnPropTypes["OctetString"] = 3] = "OctetString";
    AsnPropTypes[AsnPropTypes["BitString"] = 4] = "BitString";
    AsnPropTypes[AsnPropTypes["Integer"] = 5] = "Integer";
    AsnPropTypes[AsnPropTypes["Enumerated"] = 6] = "Enumerated";
    AsnPropTypes[AsnPropTypes["ObjectIdentifier"] = 7] = "ObjectIdentifier";
    AsnPropTypes[AsnPropTypes["Utf8String"] = 8] = "Utf8String";
    AsnPropTypes[AsnPropTypes["BmpString"] = 9] = "BmpString";
    AsnPropTypes[AsnPropTypes["UniversalString"] = 10] = "UniversalString";
    AsnPropTypes[AsnPropTypes["NumericString"] = 11] = "NumericString";
    AsnPropTypes[AsnPropTypes["PrintableString"] = 12] = "PrintableString";
    AsnPropTypes[AsnPropTypes["TeletexString"] = 13] = "TeletexString";
    AsnPropTypes[AsnPropTypes["VideotexString"] = 14] = "VideotexString";
    AsnPropTypes[AsnPropTypes["IA5String"] = 15] = "IA5String";
    AsnPropTypes[AsnPropTypes["GraphicString"] = 16] = "GraphicString";
    AsnPropTypes[AsnPropTypes["VisibleString"] = 17] = "VisibleString";
    AsnPropTypes[AsnPropTypes["GeneralString"] = 18] = "GeneralString";
    AsnPropTypes[AsnPropTypes["CharacterString"] = 19] = "CharacterString";
    AsnPropTypes[AsnPropTypes["UTCTime"] = 20] = "UTCTime";
    AsnPropTypes[AsnPropTypes["GeneralizedTime"] = 21] = "GeneralizedTime";
    AsnPropTypes[AsnPropTypes["DATE"] = 22] = "DATE";
    AsnPropTypes[AsnPropTypes["TimeOfDay"] = 23] = "TimeOfDay";
    AsnPropTypes[AsnPropTypes["DateTime"] = 24] = "DateTime";
    AsnPropTypes[AsnPropTypes["Duration"] = 25] = "Duration";
    AsnPropTypes[AsnPropTypes["TIME"] = 26] = "TIME";
    AsnPropTypes[AsnPropTypes["Null"] = 27] = "Null";
})(AsnPropTypes || (AsnPropTypes = {}));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/converters.js


const AsnAnyConverter = {
    fromASN: (value) => value instanceof asn1.Null ? null : value.valueBeforeDecode,
    toASN: (value) => {
        if (value === null) {
            return new asn1.Null();
        }
        const schema = asn1.fromBER(value);
        if (schema.result.error) {
            throw new Error(schema.result.error);
        }
        return schema.result;
    },
};
const AsnIntegerConverter = {
    fromASN: (value) => value.valueBlock.valueHex.byteLength > 4
        ? value.valueBlock.toString()
        : value.valueBlock.valueDec,
    toASN: (value) => new asn1.Integer({ value: value }),
};
const AsnEnumeratedConverter = {
    fromASN: (value) => value.valueBlock.valueDec,
    toASN: (value) => new asn1.Enumerated({ value }),
};
const AsnIntegerArrayBufferConverter = {
    fromASN: (value) => value.valueBlock.valueHex,
    toASN: (value) => new asn1.Integer({ valueHex: value }),
};
const AsnBitStringConverter = {
    fromASN: (value) => value.valueBlock.valueHex,
    toASN: (value) => new asn1.BitString({ valueHex: value }),
};
const AsnObjectIdentifierConverter = {
    fromASN: (value) => value.valueBlock.toString(),
    toASN: (value) => new asn1.ObjectIdentifier({ value }),
};
const AsnBooleanConverter = {
    fromASN: (value) => value.valueBlock.value,
    toASN: (value) => new asn1.Boolean({ value }),
};
const AsnOctetStringConverter = {
    fromASN: (value) => value.valueBlock.valueHex,
    toASN: (value) => new asn1.OctetString({ valueHex: value }),
};
function createStringConverter(Asn1Type) {
    return {
        fromASN: (value) => value.valueBlock.value,
        toASN: (value) => new Asn1Type({ value }),
    };
}
const AsnUtf8StringConverter = createStringConverter(asn1.Utf8String);
const AsnBmpStringConverter = createStringConverter(asn1.BmpString);
const AsnUniversalStringConverter = createStringConverter(asn1.UniversalString);
const AsnNumericStringConverter = createStringConverter(asn1.NumericString);
const AsnPrintableStringConverter = createStringConverter(asn1.PrintableString);
const AsnTeletexStringConverter = createStringConverter(asn1.TeletexString);
const AsnVideotexStringConverter = createStringConverter(asn1.VideotexString);
const AsnIA5StringConverter = createStringConverter(asn1.IA5String);
const AsnGraphicStringConverter = createStringConverter(asn1.GraphicString);
const AsnVisibleStringConverter = createStringConverter(asn1.VisibleString);
const AsnGeneralStringConverter = createStringConverter(asn1.GeneralString);
const AsnCharacterStringConverter = createStringConverter(asn1.CharacterString);
const AsnUTCTimeConverter = {
    fromASN: (value) => value.toDate(),
    toASN: (value) => new asn1.UTCTime({ valueDate: value }),
};
const AsnGeneralizedTimeConverter = {
    fromASN: (value) => value.toDate(),
    toASN: (value) => new asn1.GeneralizedTime({ valueDate: value }),
};
const AsnNullConverter = {
    fromASN: (value) => null,
    toASN: (value) => {
        return new asn1.Null();
    },
};
function converters_defaultConverter(type) {
    switch (type) {
        case AsnPropTypes.Any:
            return AsnAnyConverter;
        case AsnPropTypes.BitString:
            return AsnBitStringConverter;
        case AsnPropTypes.BmpString:
            return AsnBmpStringConverter;
        case AsnPropTypes.Boolean:
            return AsnBooleanConverter;
        case AsnPropTypes.CharacterString:
            return AsnCharacterStringConverter;
        case AsnPropTypes.Enumerated:
            return AsnEnumeratedConverter;
        case AsnPropTypes.GeneralString:
            return AsnGeneralStringConverter;
        case AsnPropTypes.GeneralizedTime:
            return AsnGeneralizedTimeConverter;
        case AsnPropTypes.GraphicString:
            return AsnGraphicStringConverter;
        case AsnPropTypes.IA5String:
            return AsnIA5StringConverter;
        case AsnPropTypes.Integer:
            return AsnIntegerConverter;
        case AsnPropTypes.Null:
            return AsnNullConverter;
        case AsnPropTypes.NumericString:
            return AsnNumericStringConverter;
        case AsnPropTypes.ObjectIdentifier:
            return AsnObjectIdentifierConverter;
        case AsnPropTypes.OctetString:
            return AsnOctetStringConverter;
        case AsnPropTypes.PrintableString:
            return AsnPrintableStringConverter;
        case AsnPropTypes.TeletexString:
            return AsnTeletexStringConverter;
        case AsnPropTypes.UTCTime:
            return AsnUTCTimeConverter;
        case AsnPropTypes.UniversalString:
            return AsnUniversalStringConverter;
        case AsnPropTypes.Utf8String:
            return AsnUtf8StringConverter;
        case AsnPropTypes.VideotexString:
            return AsnVideotexStringConverter;
        case AsnPropTypes.VisibleString:
            return AsnVisibleStringConverter;
        default:
            return null;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/pvtsutils@1.1.7/node_modules/pvtsutils/build/index.js
var build = __webpack_require__(34987);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/types/bit_string.js


class BitString {
    constructor(params, unusedBits = 0) {
        this.unusedBits = 0;
        this.value = new ArrayBuffer(0);
        if (params) {
            if (typeof params === "number") {
                this.fromNumber(params);
            }
            else if (BufferSourceConverter.isBufferSource(params)) {
                this.unusedBits = unusedBits;
                this.value = BufferSourceConverter.toArrayBuffer(params);
            }
            else {
                throw TypeError("Unsupported type of 'params' argument for BitString");
            }
        }
    }
    fromASN(asn) {
        if (!(asn instanceof AsnBitString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");
        }
        this.unusedBits = asn.valueBlock.unusedBits;
        this.value = asn.valueBlock.valueHex;
        return this;
    }
    toASN() {
        return new AsnBitString({ unusedBits: this.unusedBits, valueHex: this.value });
    }
    toSchema(name) {
        return new AsnBitString({ name });
    }
    toNumber() {
        let res = "";
        const uintArray = new Uint8Array(this.value);
        for (const octet of uintArray) {
            res += octet.toString(2).padStart(8, "0");
        }
        res = res.split("").reverse().join("");
        if (this.unusedBits) {
            res = res.slice(this.unusedBits).padStart(this.unusedBits, "0");
        }
        return parseInt(res, 2);
    }
    fromNumber(value) {
        let bits = value.toString(2);
        const octetSize = (bits.length + 7) >> 3;
        this.unusedBits = (octetSize << 3) - bits.length;
        const octets = new Uint8Array(octetSize);
        bits = bits.padStart(octetSize << 3, "0").split("").reverse().join("");
        let index = 0;
        while (index < octetSize) {
            octets[index] = parseInt(bits.slice(index << 3, (index << 3) + 8), 2);
            index++;
        }
        this.value = octets.buffer;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/types/octet_string.js


class OctetString {
    constructor(param) {
        if (typeof param === "number") {
            this.buffer = new ArrayBuffer(param);
        }
        else {
            if (build.BufferSourceConverter.isBufferSource(param)) {
                this.buffer = build.BufferSourceConverter.toArrayBuffer(param);
            }
            else if (Array.isArray(param)) {
                this.buffer = new Uint8Array(param);
            }
            else {
                this.buffer = new ArrayBuffer(0);
            }
        }
    }
    get byteLength() {
        return this.buffer.byteLength;
    }
    get byteOffset() {
        return 0;
    }
    fromASN(asn) {
        if (!(asn instanceof asn1.OctetString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
        }
        this.buffer = asn.valueBlock.valueHex;
        return this;
    }
    toASN() {
        return new asn1.OctetString({ valueHex: this.buffer });
    }
    toSchema(name) {
        return new asn1.OctetString({ name });
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/types/index.js



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/helper.js
function isConvertible(target) {
    if (target && target.prototype) {
        if (target.prototype.toASN && target.prototype.fromASN) {
            return true;
        }
        else {
            return isConvertible(target.prototype);
        }
    }
    else {
        return !!(target && target.toASN && target.fromASN);
    }
}
function isTypeOfArray(target) {
    var _a;
    if (target) {
        const proto = Object.getPrototypeOf(target);
        if (((_a = proto === null || proto === void 0 ? void 0 : proto.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === Array) {
            return true;
        }
        return isTypeOfArray(proto);
    }
    return false;
}
function isArrayEqual(bytes1, bytes2) {
    if (!(bytes1 && bytes2)) {
        return false;
    }
    if (bytes1.byteLength !== bytes2.byteLength) {
        return false;
    }
    const b1 = new Uint8Array(bytes1);
    const b2 = new Uint8Array(bytes2);
    for (let i = 0; i < bytes1.byteLength; i++) {
        if (b1[i] !== b2[i]) {
            return false;
        }
    }
    return true;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/schema.js



class AsnSchemaStorage {
    constructor() {
        this.items = new WeakMap();
    }
    has(target) {
        return this.items.has(target);
    }
    get(target) {
        var _a, _b, _c, _d;
        const schema = this.items.get(target);
        if (!schema) {
            throw new Error(`Cannot get schema for '${(_d = (_c = (_b = (_a = target) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b.constructor) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : target}' target`);
        }
        return schema;
    }
    cache(target) {
        const schema = this.get(target);
        if (!schema.schema) {
            schema.schema = this.create(target, true);
        }
    }
    createDefault(target) {
        const schema = {
            type: AsnTypeTypes.Sequence,
            items: {},
        };
        const parentSchema = this.findParentSchema(target);
        if (parentSchema) {
            Object.assign(schema, parentSchema);
            schema.items = Object.assign({}, schema.items, parentSchema.items);
        }
        return schema;
    }
    create(target, useNames) {
        const schema = this.items.get(target) || this.createDefault(target);
        const asn1Value = [];
        for (const key in schema.items) {
            const item = schema.items[key];
            const name = useNames ? key : "";
            let asn1Item;
            if (typeof (item.type) === "number") {
                const Asn1TypeName = AsnPropTypes[item.type];
                const Asn1Type = asn1[Asn1TypeName];
                if (!Asn1Type) {
                    throw new Error(`Cannot get ASN1 class by name '${Asn1TypeName}'`);
                }
                asn1Item = new Asn1Type({ name });
            }
            else if (isConvertible(item.type)) {
                const instance = new item.type();
                asn1Item = instance.toSchema(name);
            }
            else if (item.optional) {
                const itemSchema = this.get(item.type);
                if (itemSchema.type === AsnTypeTypes.Choice) {
                    asn1Item = new asn1.Any({ name });
                }
                else {
                    asn1Item = this.create(item.type, false);
                    asn1Item.name = name;
                }
            }
            else {
                asn1Item = new asn1.Any({ name });
            }
            const optional = !!item.optional || item.defaultValue !== undefined;
            if (item.repeated) {
                asn1Item.name = "";
                const Container = item.repeated === "set"
                    ? asn1.Set
                    : asn1.Sequence;
                asn1Item = new Container({
                    name: "",
                    value: [
                        new asn1.Repeated({
                            name,
                            value: asn1Item,
                        }),
                    ],
                });
            }
            if (item.context !== null && item.context !== undefined) {
                if (item.implicit) {
                    if (typeof item.type === "number" || isConvertible(item.type)) {
                        const Container = item.repeated
                            ? asn1.Constructed
                            : asn1.Primitive;
                        asn1Value.push(new Container({
                            name,
                            optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: item.context,
                            },
                        }));
                    }
                    else {
                        this.cache(item.type);
                        const isRepeated = !!item.repeated;
                        let value = !isRepeated
                            ? this.get(item.type).schema
                            : asn1Item;
                        value = value.valueBlock ? value.valueBlock.value : value.value;
                        asn1Value.push(new asn1.Constructed({
                            name: !isRepeated ? name : "",
                            optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: item.context,
                            },
                            value,
                        }));
                    }
                }
                else {
                    asn1Value.push(new asn1.Constructed({
                        optional,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: item.context,
                        },
                        value: [asn1Item],
                    }));
                }
            }
            else {
                asn1Item.optional = optional;
                asn1Value.push(asn1Item);
            }
        }
        switch (schema.type) {
            case AsnTypeTypes.Sequence:
                return new asn1.Sequence({ value: asn1Value, name: "" });
            case AsnTypeTypes.Set:
                return new asn1.Set({ value: asn1Value, name: "" });
            case AsnTypeTypes.Choice:
                return new asn1.Choice({ value: asn1Value, name: "" });
            default:
                throw new Error(`Unsupported ASN1 type in use`);
        }
    }
    set(target, schema) {
        this.items.set(target, schema);
        return this;
    }
    findParentSchema(target) {
        const parent = target.__proto__;
        if (parent) {
            const schema = this.items.get(parent);
            return schema || this.findParentSchema(parent);
        }
        return null;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/storage.js

const schemaStorage = new AsnSchemaStorage();

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/decorators.js


const AsnType = (options) => (target) => {
    let schema;
    if (!schemaStorage.has(target)) {
        schema = schemaStorage.createDefault(target);
        schemaStorage.set(target, schema);
    }
    else {
        schema = schemaStorage.get(target);
    }
    Object.assign(schema, options);
};
const AsnProp = (options) => (target, propertyKey) => {
    let schema;
    if (!schemaStorage.has(target.constructor)) {
        schema = schemaStorage.createDefault(target.constructor);
        schemaStorage.set(target.constructor, schema);
    }
    else {
        schema = schemaStorage.get(target.constructor);
    }
    const copyOptions = Object.assign({}, options);
    if (typeof copyOptions.type === "number" && !copyOptions.converter) {
        const defaultConverter = converters_defaultConverter(options.type);
        if (!defaultConverter) {
            throw new Error(`Cannot get default converter for property '${propertyKey}' of ${target.constructor.name}`);
        }
        copyOptions.converter = defaultConverter;
    }
    schema.items[propertyKey] = copyOptions;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/errors/schema_validation.js
class AsnSchemaValidationError extends Error {
    constructor() {
        super(...arguments);
        this.schemas = [];
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/errors/index.js


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/parser.js
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];






class AsnParser {
    static parse(data, target) {
        let buf;
        if (data instanceof ArrayBuffer) {
            buf = data;
        }
        else if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
            buf = new Uint8Array(data).buffer;
        }
        else if (ArrayBuffer.isView(data) || data.buffer instanceof ArrayBuffer) {
            buf = data.buffer;
        }
        else {
            throw new TypeError("Wrong type of 'data' argument");
        }
        const asn1Parsed = asn1.fromBER(buf);
        if (asn1Parsed.result.error) {
            throw new Error(asn1Parsed.result.error);
        }
        const res = this.fromASN(asn1Parsed.result, target);
        return res;
    }
    static fromASN(asn1Schema, target) {
        var _a;
        try {
            if (isConvertible(target)) {
                const value = new target();
                return value.fromASN(asn1Schema);
            }
            const schema = schemaStorage.get(target);
            schemaStorage.cache(target);
            let targetSchema = schema.schema;
            if (asn1Schema.constructor === asn1.Constructed && schema.type !== AsnTypeTypes.Choice) {
                targetSchema = new asn1.Constructed({
                    idBlock: {
                        tagClass: 3,
                        tagNumber: asn1Schema.idBlock.tagNumber,
                    },
                    value: schema.schema.valueBlock.value,
                });
                for (const key in schema.items) {
                    delete asn1Schema[key];
                }
            }
            const asn1ComparedSchema = asn1.compareSchema(asn1Schema, asn1Schema, targetSchema);
            if (!asn1ComparedSchema.verified) {
                throw new AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema. ${asn1ComparedSchema.result.error}`);
            }
            const res = new target();
            if (isTypeOfArray(target)) {
                if (typeof schema.itemType === "number") {
                    const converter = converters_defaultConverter(schema.itemType);
                    if (!converter) {
                        throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
                    }
                    return target.from(asn1Schema.valueBlock.value, (element) => converter.fromASN(element));
                }
                else {
                    return target.from(asn1Schema.valueBlock.value, (element) => this.fromASN(element, schema.itemType));
                }
            }
            for (const key in schema.items) {
                if (!asn1Schema[key]) {
                    continue;
                }
                const schemaItem = schema.items[key];
                if (typeof (schemaItem.type) === "number" || isConvertible(schemaItem.type)) {
                    const converter = (_a = schemaItem.converter) !== null && _a !== void 0 ? _a : (isConvertible(schemaItem.type)
                        ? new schemaItem.type()
                        : null);
                    if (!converter) {
                        throw new Error("Converter is empty");
                    }
                    if (schemaItem.repeated) {
                        if (schemaItem.implicit) {
                            const Container = schemaItem.repeated === "sequence"
                                ? asn1.Sequence
                                : asn1.Set;
                            const newItem = new Container();
                            newItem.valueBlock = asn1Schema[key].valueBlock;
                            const value = asn1.fromBER(newItem.toBER(false)).result.valueBlock.value;
                            res[key] = Array.from(value, (element) => converter.fromASN(element));
                        }
                        else {
                            res[key] = Array.from(asn1Schema[key], (element) => converter.fromASN(element));
                        }
                    }
                    else {
                        let value = asn1Schema[key];
                        if (schemaItem.implicit) {
                            let newItem;
                            if (isConvertible(schemaItem.type)) {
                                newItem = new schemaItem.type().toSchema("");
                            }
                            else {
                                const Asn1TypeName = AsnPropTypes[schemaItem.type];
                                const Asn1Type = asn1[Asn1TypeName];
                                if (!Asn1Type) {
                                    throw new Error(`Cannot get '${Asn1TypeName}' class from asn1js module`);
                                }
                                newItem = new Asn1Type();
                            }
                            newItem.valueBlock = value.valueBlock;
                            value = asn1.fromBER(newItem.toBER(false)).result;
                        }
                        res[key] = converter.fromASN(value);
                    }
                }
                else {
                    if (schemaItem.repeated) {
                        res[key] = Array.from(asn1Schema[key], (element) => this.fromASN(element, schemaItem.type));
                    }
                    else {
                        res[key] = this.fromASN(asn1Schema[key], schemaItem.type);
                    }
                }
            }
            return res;
        }
        catch (error) {
            if (error instanceof AsnSchemaValidationError) {
                error.schemas.push(target.name);
            }
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/serializer.js





class AsnSerializer {
    static serialize(obj) {
        if (obj instanceof asn1.BaseBlock) {
            return obj.toBER(false);
        }
        return this.toASN(obj).toBER(false);
    }
    static toASN(obj) {
        if (obj && isConvertible(obj.constructor)) {
            return obj.toASN();
        }
        const target = obj.constructor;
        const schema = schemaStorage.get(target);
        schemaStorage.cache(target);
        let asn1Value = [];
        if (schema.itemType) {
            if (typeof schema.itemType === "number") {
                const converter = converters_defaultConverter(schema.itemType);
                if (!converter) {
                    throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
                }
                asn1Value = obj.map((o) => converter.toASN(o));
            }
            else {
                asn1Value = obj.map((o) => this.toAsnItem({ type: schema.itemType }, "[]", target, o));
            }
        }
        else {
            for (const key in schema.items) {
                const schemaItem = schema.items[key];
                const objProp = obj[key];
                if (objProp === undefined
                    || schemaItem.defaultValue === objProp
                    || (typeof schemaItem.defaultValue === "object" && typeof objProp === "object"
                        && isArrayEqual(this.serialize(schemaItem.defaultValue), this.serialize(objProp)))) {
                    continue;
                }
                let asn1Item = AsnSerializer.toAsnItem(schemaItem, key, target, objProp);
                if (typeof schemaItem.context === "number") {
                    if (schemaItem.implicit) {
                        if (!schemaItem.repeated
                            && (typeof schemaItem.type === "number" || isConvertible(schemaItem.type))) {
                            const value = {};
                            value.valueHex = asn1Item instanceof asn1.Null ? asn1Item.valueBeforeDecode : asn1Item.valueBlock.toBER();
                            asn1Value.push(new asn1.Primitive(Object.assign({ optional: schemaItem.optional, idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context,
                                } }, value)));
                        }
                        else {
                            asn1Value.push(new asn1.Constructed({
                                optional: schemaItem.optional,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context,
                                },
                                value: asn1Item.valueBlock.value,
                            }));
                        }
                    }
                    else {
                        asn1Value.push(new asn1.Constructed({
                            optional: schemaItem.optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: schemaItem.context,
                            },
                            value: [asn1Item],
                        }));
                    }
                }
                else if (schemaItem.repeated) {
                    asn1Value = asn1Value.concat(asn1Item);
                }
                else {
                    asn1Value.push(asn1Item);
                }
            }
        }
        let asnSchema;
        switch (schema.type) {
            case AsnTypeTypes.Sequence:
                asnSchema = new asn1.Sequence({ value: asn1Value });
                break;
            case AsnTypeTypes.Set:
                asnSchema = new asn1.Set({ value: asn1Value });
                break;
            case AsnTypeTypes.Choice:
                if (!asn1Value[0]) {
                    throw new Error(`Schema '${target.name}' has wrong data. Choice cannot be empty.`);
                }
                asnSchema = asn1Value[0];
                break;
        }
        return asnSchema;
    }
    static toAsnItem(schemaItem, key, target, objProp) {
        let asn1Item;
        if (typeof (schemaItem.type) === "number") {
            const converter = schemaItem.converter;
            if (!converter) {
                throw new Error(`Property '${key}' doesn't have converter for type ${AsnPropTypes[schemaItem.type]} in schema '${target.name}'`);
            }
            if (schemaItem.repeated) {
                const items = Array.from(objProp, (element) => converter.toASN(element));
                const Container = schemaItem.repeated === "sequence"
                    ? asn1.Sequence
                    : asn1.Set;
                asn1Item = new Container({
                    value: items,
                });
            }
            else {
                asn1Item = converter.toASN(objProp);
            }
        }
        else {
            if (schemaItem.repeated) {
                const items = Array.from(objProp, (element) => this.toASN(element));
                const Container = schemaItem.repeated === "sequence"
                    ? asn1.Sequence
                    : asn1.Set;
                asn1Item = new Container({
                    value: items,
                });
            }
            else {
                asn1Item = this.toASN(objProp);
            }
        }
        return asn1Item;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/objects.js
class AsnArray extends Array {
    constructor(items = []) {
        if (typeof items === "number") {
            super(items);
        }
        else {
            super();
            for (const item of items) {
                this.push(item);
            }
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/convert.js




class AsnConvert {
    static serialize(obj) {
        return AsnSerializer.serialize(obj);
    }
    static parse(data, target) {
        return AsnParser.parse(data, target);
    }
    static toString(data) {
        const buf = build.BufferSourceConverter.isBufferSource(data)
            ? build.BufferSourceConverter.toArrayBuffer(data)
            : AsnConvert.serialize(data);
        const asn = asn1.fromBER(buf);
        if (asn.offset === -1) {
            throw new Error(`Cannot decode ASN.1 data. ${asn.result.error}`);
        }
        return asn.result.toString();
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@peculiar+asn1-schema@2.0.37/node_modules/@peculiar/asn1-schema/build/es2015/index.js











/***/ })

}]);