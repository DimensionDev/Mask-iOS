/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 59377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zu": () => (/* binding */ JsonParser),
/* harmony export */   "uj": () => (/* binding */ JsonProp),
/* harmony export */   "bx": () => (/* binding */ JsonPropTypes),
/* harmony export */   "HE": () => (/* binding */ JsonSerializer)
/* harmony export */ });
/* unused harmony exports JsonError, KeyError, ParserError, SerializerError, TransformError, ValidationError */
/**
 * Copyright (c) 2020, Peculiar Ventures, All rights reserved.
 */

class JsonError extends Error {
    constructor(message, innerError) {
        super(innerError
            ? `${message}. See the inner exception for more details.`
            : message);
        this.message = message;
        this.innerError = innerError;
    }
}

class TransformError extends JsonError {
    constructor(schema, message, innerError) {
        super(message, innerError);
        this.schema = schema;
    }
}

class ParserError extends TransformError {
    constructor(schema, message, innerError) {
        super(schema, `JSON doesn't match to '${schema.target.name}' schema. ${message}`, innerError);
    }
}

class ValidationError extends JsonError {
}

class SerializerError extends JsonError {
    constructor(schemaName, message, innerError) {
        super(`Cannot serialize by '${schemaName}' schema. ${message}`, innerError);
        this.schemaName = schemaName;
    }
}

class KeyError extends ParserError {
    constructor(schema, keys, errors = {}) {
        super(schema, "Some keys doesn't match to schema");
        this.keys = keys;
        this.errors = errors;
    }
}

var JsonPropTypes;
(function (JsonPropTypes) {
    JsonPropTypes[JsonPropTypes["Any"] = 0] = "Any";
    JsonPropTypes[JsonPropTypes["Boolean"] = 1] = "Boolean";
    JsonPropTypes[JsonPropTypes["Number"] = 2] = "Number";
    JsonPropTypes[JsonPropTypes["String"] = 3] = "String";
})(JsonPropTypes || (JsonPropTypes = {}));

function checkType(value, type) {
    switch (type) {
        case JsonPropTypes.Boolean:
            return typeof value === "boolean";
        case JsonPropTypes.Number:
            return typeof value === "number";
        case JsonPropTypes.String:
            return typeof value === "string";
    }
    return true;
}
function throwIfTypeIsWrong(value, type) {
    if (!checkType(value, type)) {
        throw new TypeError(`Value must be ${JsonPropTypes[type]}`);
    }
}
function isConvertible(target) {
    if (target && target.prototype) {
        if (target.prototype.toJSON && target.prototype.fromJSON) {
            return true;
        }
        else {
            return isConvertible(target.prototype);
        }
    }
    else {
        return !!(target && target.toJSON && target.fromJSON);
    }
}

class JsonSchemaStorage {
    constructor() {
        this.items = new Map();
    }
    has(target) {
        return this.items.has(target) || !!this.findParentSchema(target);
    }
    get(target) {
        const schema = this.items.get(target) || this.findParentSchema(target);
        if (!schema) {
            throw new Error("Cannot get schema for current target");
        }
        return schema;
    }
    create(target) {
        const schema = { names: {} };
        const parentSchema = this.findParentSchema(target);
        if (parentSchema) {
            Object.assign(schema, parentSchema);
            schema.names = {};
            for (const name in parentSchema.names) {
                schema.names[name] = Object.assign({}, parentSchema.names[name]);
            }
        }
        schema.target = target;
        return schema;
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

const DEFAULT_SCHEMA = "default";
const schemaStorage = new JsonSchemaStorage();

class PatternValidation {
    constructor(pattern) {
        this.pattern = new RegExp(pattern);
    }
    validate(value) {
        const pattern = new RegExp(this.pattern.source, this.pattern.flags);
        if (typeof value !== "string") {
            throw new ValidationError("Incoming value must be string");
        }
        if (!pattern.exec(value)) {
            throw new ValidationError(`Value doesn't match to pattern '${pattern.toString()}'`);
        }
    }
}

class InclusiveValidation {
    constructor(min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
        this.min = min;
        this.max = max;
    }
    validate(value) {
        throwIfTypeIsWrong(value, JsonPropTypes.Number);
        if (!(this.min <= value && value <= this.max)) {
            const min = this.min === Number.MIN_VALUE ? "MIN" : this.min;
            const max = this.max === Number.MAX_VALUE ? "MAX" : this.max;
            throw new ValidationError(`Value doesn't match to diapason [${min},${max}]`);
        }
    }
}

class ExclusiveValidation {
    constructor(min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
        this.min = min;
        this.max = max;
    }
    validate(value) {
        throwIfTypeIsWrong(value, JsonPropTypes.Number);
        if (!(this.min < value && value < this.max)) {
            const min = this.min === Number.MIN_VALUE ? "MIN" : this.min;
            const max = this.max === Number.MAX_VALUE ? "MAX" : this.max;
            throw new ValidationError(`Value doesn't match to diapason (${min},${max})`);
        }
    }
}

class LengthValidation {
    constructor(length, minLength, maxLength) {
        this.length = length;
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
    validate(value) {
        if (this.length !== undefined) {
            if (value.length !== this.length) {
                throw new ValidationError(`Value length must be exactly ${this.length}.`);
            }
            return;
        }
        if (this.minLength !== undefined) {
            if (value.length < this.minLength) {
                throw new ValidationError(`Value length must be more than ${this.minLength}.`);
            }
        }
        if (this.maxLength !== undefined) {
            if (value.length > this.maxLength) {
                throw new ValidationError(`Value length must be less than ${this.maxLength}.`);
            }
        }
    }
}

class EnumerationValidation {
    constructor(enumeration) {
        this.enumeration = enumeration;
    }
    validate(value) {
        throwIfTypeIsWrong(value, JsonPropTypes.String);
        if (!this.enumeration.includes(value)) {
            throw new ValidationError(`Value must be one of ${this.enumeration.map((v) => `'${v}'`).join(", ")}`);
        }
    }
}

class JsonTransform {
    static checkValues(data, schemaItem) {
        const values = Array.isArray(data) ? data : [data];
        for (const value of values) {
            for (const validation of schemaItem.validations) {
                if (validation instanceof LengthValidation && schemaItem.repeated) {
                    validation.validate(data);
                }
                else {
                    validation.validate(value);
                }
            }
        }
    }
    static checkTypes(value, schemaItem) {
        if (schemaItem.repeated && !Array.isArray(value)) {
            throw new TypeError("Value must be Array");
        }
        if (typeof schemaItem.type === "number") {
            const values = Array.isArray(value) ? value : [value];
            for (const v of values) {
                throwIfTypeIsWrong(v, schemaItem.type);
            }
        }
    }
    static getSchemaByName(schema, name = DEFAULT_SCHEMA) {
        return { ...schema.names[DEFAULT_SCHEMA], ...schema.names[name] };
    }
}

class JsonSerializer extends JsonTransform {
    static serialize(obj, options, replacer, space) {
        const json = this.toJSON(obj, options);
        return JSON.stringify(json, replacer, space);
    }
    static toJSON(obj, options = {}) {
        let res;
        let targetSchema = options.targetSchema;
        const schemaName = options.schemaName || DEFAULT_SCHEMA;
        if (isConvertible(obj)) {
            return obj.toJSON();
        }
        if (Array.isArray(obj)) {
            res = [];
            for (const item of obj) {
                res.push(this.toJSON(item, options));
            }
        }
        else if (typeof obj === "object") {
            if (targetSchema && !schemaStorage.has(targetSchema)) {
                throw new JsonError("Cannot get schema for `targetSchema` param");
            }
            targetSchema = (targetSchema || obj.constructor);
            if (schemaStorage.has(targetSchema)) {
                const schema = schemaStorage.get(targetSchema);
                res = {};
                const namedSchema = this.getSchemaByName(schema, schemaName);
                for (const key in namedSchema) {
                    try {
                        const item = namedSchema[key];
                        const objItem = obj[key];
                        let value;
                        if ((item.optional && objItem === undefined)
                            || (item.defaultValue !== undefined && objItem === item.defaultValue)) {
                            continue;
                        }
                        if (!item.optional && objItem === undefined) {
                            throw new SerializerError(targetSchema.name, `Property '${key}' is required.`);
                        }
                        if (typeof item.type === "number") {
                            if (item.converter) {
                                if (item.repeated) {
                                    value = objItem.map((el) => item.converter.toJSON(el, obj));
                                }
                                else {
                                    value = item.converter.toJSON(objItem, obj);
                                }
                            }
                            else {
                                value = objItem;
                            }
                        }
                        else {
                            if (item.repeated) {
                                value = objItem.map((el) => this.toJSON(el, { schemaName }));
                            }
                            else {
                                value = this.toJSON(objItem, { schemaName });
                            }
                        }
                        this.checkTypes(value, item);
                        this.checkValues(value, item);
                        res[item.name || key] = value;
                    }
                    catch (e) {
                        if (e instanceof SerializerError) {
                            throw e;
                        }
                        else {
                            throw new SerializerError(schema.target.name, `Property '${key}' is wrong. ${e.message}`, e);
                        }
                    }
                }
            }
            else {
                res = {};
                for (const key in obj) {
                    res[key] = this.toJSON(obj[key], { schemaName });
                }
            }
        }
        else {
            res = obj;
        }
        return res;
    }
}

class JsonParser extends JsonTransform {
    static parse(data, options) {
        const obj = JSON.parse(data);
        return this.fromJSON(obj, options);
    }
    static fromJSON(target, options) {
        const targetSchema = options.targetSchema;
        const schemaName = options.schemaName || DEFAULT_SCHEMA;
        const obj = new targetSchema();
        if (isConvertible(obj)) {
            return obj.fromJSON(target);
        }
        const schema = schemaStorage.get(targetSchema);
        const namedSchema = this.getSchemaByName(schema, schemaName);
        const keyErrors = {};
        if (options.strictProperty && !Array.isArray(target)) {
            JsonParser.checkStrictProperty(target, namedSchema, schema);
        }
        for (const key in namedSchema) {
            try {
                const item = namedSchema[key];
                const name = item.name || key;
                const value = target[name];
                if (value === undefined && (item.optional || item.defaultValue !== undefined)) {
                    continue;
                }
                if (!item.optional && value === undefined) {
                    throw new ParserError(schema, `Property '${name}' is required.`);
                }
                this.checkTypes(value, item);
                this.checkValues(value, item);
                if (typeof (item.type) === "number") {
                    if (item.converter) {
                        if (item.repeated) {
                            obj[key] = value.map((el) => item.converter.fromJSON(el, obj));
                        }
                        else {
                            obj[key] = item.converter.fromJSON(value, obj);
                        }
                    }
                    else {
                        obj[key] = value;
                    }
                }
                else {
                    const newOptions = {
                        ...options,
                        targetSchema: item.type,
                        schemaName,
                    };
                    if (item.repeated) {
                        obj[key] = value.map((el) => this.fromJSON(el, newOptions));
                    }
                    else {
                        obj[key] = this.fromJSON(value, newOptions);
                    }
                }
            }
            catch (e) {
                if (!(e instanceof ParserError)) {
                    e = new ParserError(schema, `Property '${key}' is wrong. ${e.message}`, e);
                }
                if (options.strictAllKeys) {
                    keyErrors[key] = e;
                }
                else {
                    throw e;
                }
            }
        }
        const keys = Object.keys(keyErrors);
        if (keys.length) {
            throw new KeyError(schema, keys, keyErrors);
        }
        return obj;
    }
    static checkStrictProperty(target, namedSchema, schema) {
        const jsonProps = Object.keys(target);
        const schemaProps = Object.keys(namedSchema);
        const keys = [];
        for (const key of jsonProps) {
            if (schemaProps.indexOf(key) === -1) {
                keys.push(key);
            }
        }
        if (keys.length) {
            throw new KeyError(schema, keys);
        }
    }
}

function getValidations(item) {
    const validations = [];
    if (item.pattern) {
        validations.push(new PatternValidation(item.pattern));
    }
    if (item.type === JsonPropTypes.Number || item.type === JsonPropTypes.Any) {
        if (item.minInclusive !== undefined || item.maxInclusive !== undefined) {
            validations.push(new InclusiveValidation(item.minInclusive, item.maxInclusive));
        }
        if (item.minExclusive !== undefined || item.maxExclusive !== undefined) {
            validations.push(new ExclusiveValidation(item.minExclusive, item.maxExclusive));
        }
        if (item.enumeration !== undefined) {
            validations.push(new EnumerationValidation(item.enumeration));
        }
    }
    if (item.type === JsonPropTypes.String || item.repeated || item.type === JsonPropTypes.Any) {
        if (item.length !== undefined || item.minLength !== undefined || item.maxLength !== undefined) {
            validations.push(new LengthValidation(item.length, item.minLength, item.maxLength));
        }
    }
    return validations;
}
const JsonProp = (options = {}) => (target, propertyKey) => {
    const errorMessage = `Cannot set type for ${propertyKey} property of ${target.constructor.name} schema`;
    let schema;
    if (!schemaStorage.has(target.constructor)) {
        schema = schemaStorage.create(target.constructor);
        schemaStorage.set(target.constructor, schema);
    }
    else {
        schema = schemaStorage.get(target.constructor);
        if (schema.target !== target.constructor) {
            schema = schemaStorage.create(target.constructor);
            schemaStorage.set(target.constructor, schema);
        }
    }
    const defaultSchema = {
        type: JsonPropTypes.Any,
        validations: [],
    };
    const copyOptions = Object.assign(defaultSchema, options);
    copyOptions.validations = getValidations(copyOptions);
    if (typeof copyOptions.type !== "number") {
        if (!schemaStorage.has(copyOptions.type) && !isConvertible(copyOptions.type)) {
            throw new Error(`${errorMessage}. Assigning type doesn't have schema.`);
        }
    }
    let schemaNames;
    if (Array.isArray(options.schema)) {
        schemaNames = options.schema;
    }
    else {
        schemaNames = [options.schema || DEFAULT_SCHEMA];
    }
    for (const schemaName of schemaNames) {
        if (!schema.names[schemaName]) {
            schema.names[schemaName] = {};
        }
        const namedSchema = schema.names[schemaName];
        namedSchema[propertyKey] = copyOptions;
    }
};




/***/ }),

/***/ 77224:
/***/ ((module) => {

(function() {
	// The random number is a js implementation of the Xorshift PRNG
	var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

	function seedrand(seed) {
		for (var i = 0; i < randseed.length; i++) {
			randseed[i] = 0;
		}
		for (var i = 0; i < seed.length; i++) {
			randseed[i%4] = ((randseed[i%4] << 5) - randseed[i%4]) + seed.charCodeAt(i);
		}
	}

	function rand() {
		// based on Java's String.hashCode(), expanded to 4 32bit values
		var t = randseed[0] ^ (randseed[0] << 11);

		randseed[0] = randseed[1];
		randseed[1] = randseed[2];
		randseed[2] = randseed[3];
		randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

		return (randseed[3]>>>0) / ((1 << 31)>>>0);
	}

	function createColor() {
		//saturation is the whole color spectrum
		var h = Math.floor(rand() * 360);
		//saturation goes from 40 to 100, it avoids greyish colors
		var s = ((rand() * 60) + 40) + '%';
		//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
		var l = ((rand()+rand()+rand()+rand()) * 25) + '%';

		var color = 'hsl(' + h + ',' + s + ',' + l + ')';
		return color;
	}

	function createImageData(size) {
		var width = size; // Only support square icons for now
		var height = size;

		var dataWidth = Math.ceil(width / 2);
		var mirrorWidth = width - dataWidth;

		var data = [];
		for(var y = 0; y < height; y++) {
			var row = [];
			for(var x = 0; x < dataWidth; x++) {
				// this makes foreground and background color to have a 43% (1/2.3) probability
				// spot color has 13% chance
				row[x] = Math.floor(rand()*2.3);
			}
			var r = row.slice(0, mirrorWidth);
			r.reverse();
			row = row.concat(r);

			for(var i = 0; i < row.length; i++) {
				data.push(row[i]);
			}
		}

		return data;
	}

  function buildOpts(opts) {
    var newOpts = {};

		newOpts.size = opts.size || 8;
		newOpts.scale = opts.scale || 4;
		newOpts.seed = opts.seed || Math.floor((Math.random()*Math.pow(10,16))).toString(16);
		newOpts.color = opts.color || createColor();
		newOpts.bgcolor = opts.bgcolor || createColor();
		newOpts.spotcolor = opts.spotcolor || createColor();

		seedrand(newOpts.seed);

    return newOpts;
  }

  function renderIcon(opts, canvas) {
    var opts = buildOpts(opts || {});

		var imageData = createImageData(opts.size);
		var width = Math.sqrt(imageData.length);

		canvas.width = canvas.height = opts.size * opts.scale;

		var cc = canvas.getContext('2d');
		cc.fillStyle = opts.bgcolor;
		cc.fillRect(0, 0, canvas.width, canvas.height);
		cc.fillStyle = opts.color;

		for(var i = 0; i < imageData.length; i++) {

			// if data is 0, leave the background
			if(imageData[i]) {
				var row = Math.floor(i / width);
				var col = i % width;

				// if data is 2, choose spot color, if 1 choose foreground
			  cc.fillStyle = (imageData[i] == 1) ? opts.color : opts.spotcolor;

				cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
			}
		}
    return canvas;
  }

	function createIcon(opts) {
    var opts = buildOpts(opts || {});
		var canvas = document.createElement('canvas');

    renderIcon(opts, canvas);

		return canvas;
	}

	var api = {
    create: createIcon,
    render: renderIcon
  };

  if (true) {
    module.exports = api;
  }
  if (typeof window !== "undefined") {
    window.blockies = api;
  }

})();


/***/ }),

/***/ 34987:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/**
 * Copyright (c) 2020, Peculiar Ventures, All rights reserved.
 */

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

  class BufferSourceConverter {
      static isArrayBuffer(data) {
          return Object.prototype.toString.call(data) === '[object ArrayBuffer]';
      }
      static toArrayBuffer(data) {
          const buf = this.toUint8Array(data);
          if (buf.byteOffset || buf.length) {
              return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
          }
          return buf.buffer;
      }
      static toUint8Array(data) {
          return this.toView(data, Uint8Array);
      }
      static toView(data, type) {
          if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
              return new type(data.buffer, data.byteOffset, data.byteLength);
          }
          if (this.isArrayBuffer(data)) {
              return new type(data);
          }
          if (this.isArrayBufferView(data)) {
              return new type(data.buffer, data.byteOffset, data.byteLength);
          }
          throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
      }
      static isBufferSource(data) {
          return this.isArrayBufferView(data)
              || this.isArrayBuffer(data);
      }
      static isArrayBufferView(data) {
          return ArrayBuffer.isView(data)
              || (data && this.isArrayBuffer(data.buffer));
      }
  }

  class Convert {
      static isHex(data) {
          return typeof data === "string"
              && /^[a-z0-9]+$/i.test(data);
      }
      static isBase64(data) {
          return typeof data === "string"
              && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(data);
      }
      static isBase64Url(data) {
          return typeof data === "string"
              && /^[a-zA-Z0-9-_]+$/i.test(data);
      }
      static ToString(buffer, enc = "utf8") {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          switch (enc.toLowerCase()) {
              case "utf8":
                  return this.ToUtf8String(buf);
              case "binary":
                  return this.ToBinary(buf);
              case "hex":
                  return this.ToHex(buf);
              case "base64":
                  return this.ToBase64(buf);
              case "base64url":
                  return this.ToBase64Url(buf);
              default:
                  throw new Error(`Unknown type of encoding '${enc}'`);
          }
      }
      static FromString(str, enc = "utf8") {
          if (!str) {
              return new ArrayBuffer(0);
          }
          switch (enc.toLowerCase()) {
              case "utf8":
                  return this.FromUtf8String(str);
              case "binary":
                  return this.FromBinary(str);
              case "hex":
                  return this.FromHex(str);
              case "base64":
                  return this.FromBase64(str);
              case "base64url":
                  return this.FromBase64Url(str);
              default:
                  throw new Error(`Unknown type of encoding '${enc}'`);
          }
      }
      static ToBase64(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          if (typeof btoa !== "undefined") {
              const binary = this.ToString(buf, "binary");
              return btoa(binary);
          }
          else {
              return Buffer.from(buf).toString("base64");
          }
      }
      static FromBase64(base64) {
          const formatted = this.formatString(base64);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isBase64(formatted)) {
              throw new TypeError("Argument 'base64Text' is not Base64 encoded");
          }
          if (typeof atob !== "undefined") {
              return this.FromBinary(atob(formatted));
          }
          else {
              return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
          }
      }
      static FromBase64Url(base64url) {
          const formatted = this.formatString(base64url);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isBase64Url(formatted)) {
              throw new TypeError("Argument 'base64url' is not Base64Url encoded");
          }
          return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
      }
      static ToBase64Url(data) {
          return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
      }
      static FromUtf8String(text) {
          const s = unescape(encodeURIComponent(text));
          const uintArray = new Uint8Array(s.length);
          for (let i = 0; i < s.length; i++) {
              uintArray[i] = s.charCodeAt(i);
          }
          return uintArray.buffer;
      }
      static ToUtf8String(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          let encodedString = "";
          for (let i = 0; i < buf.length; i++) {
              encodedString += String.fromCharCode(buf[i]);
          }
          const decodedString = decodeURIComponent(escape(encodedString));
          return decodedString;
      }
      static FromBinary(text) {
          const stringLength = text.length;
          const resultView = new Uint8Array(stringLength);
          for (let i = 0; i < stringLength; i++) {
              resultView[i] = text.charCodeAt(i);
          }
          return resultView.buffer;
      }
      static ToBinary(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          let res = "";
          for (let i = 0; i < buf.length; i++) {
              res += String.fromCharCode(buf[i]);
          }
          return res;
      }
      static ToHex(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          const splitter = "";
          const res = [];
          const len = buf.length;
          for (let i = 0; i < len; i++) {
              const char = buf[i].toString(16).padStart(2, "0");
              res.push(char);
          }
          return res.join(splitter);
      }
      static FromHex(hexString) {
          let formatted = this.formatString(hexString);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isHex(formatted)) {
              throw new TypeError("Argument 'hexString' is not HEX encoded");
          }
          if (formatted.length % 2) {
              formatted = `0${formatted}`;
          }
          const res = new Uint8Array(formatted.length / 2);
          for (let i = 0; i < formatted.length; i = i + 2) {
              const c = formatted.slice(i, i + 2);
              res[i / 2] = parseInt(c, 16);
          }
          return res.buffer;
      }
      static Base64Padding(base64) {
          const padCount = 4 - (base64.length % 4);
          if (padCount < 4) {
              for (let i = 0; i < padCount; i++) {
                  base64 += "=";
              }
          }
          return base64;
      }
      static formatString(data) {
          return (data === null || data === void 0 ? void 0 : data.replace(/[\n\r\t ]/g, "")) || "";
      }
  }

  function assign(target, ...sources) {
      const res = arguments[0];
      for (let i = 1; i < arguments.length; i++) {
          const obj = arguments[i];
          for (const prop in obj) {
              res[prop] = obj[prop];
          }
      }
      return res;
  }
  function combine(...buf) {
      const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);
      const res = new Uint8Array(totalByteLength);
      let currentPos = 0;
      buf.map((item) => new Uint8Array(item)).forEach((arr) => {
          for (const item2 of arr) {
              res[currentPos++] = item2;
          }
      });
      return res.buffer;
  }
  function isEqual(bytes1, bytes2) {
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

  exports.BufferSourceConverter = BufferSourceConverter;
  exports.Convert = Convert;
  exports.assign = assign;
  exports.combine = combine;
  exports.isEqual = isEqual;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 53331:
/***/ (() => {

/** Add this to background scripts */

const hasBrowser = typeof browser !== 'undefined'

;(hasBrowser ? browser : chrome).runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.type === 'WTW_INJECT' && sender && sender.tab && sender.tab.id != null) {
    let file = message.file
    try {
      file = new URL(file).pathname
    } catch {}
    if (file) {
      const details = {
        frameId: sender.frameId,
        file,
      }
      const callback = () => sendResponse()
      if (hasBrowser) {
        browser.tabs.executeScript(sender.tab.id, details).then(callback)
      } else {
        chrome.tabs.executeScript(sender.tab.id, details, callback)
      }
      return true
    }
  }
})


/***/ }),

/***/ 2104:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/IsolatedDashboardBridge.ts
var IsolatedDashboardBridge_namespaceObject = {};
__webpack_require__.r(IsolatedDashboardBridge_namespaceObject);
__webpack_require__.d(IsolatedDashboardBridge_namespaceObject, {
  "default": () => (IsolatedDashboardBridge)
});

// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/InjectContentScripts.ts
var InjectContentScripts_namespaceObject = {};
__webpack_require__.r(InjectContentScripts_namespaceObject);
__webpack_require__.d(InjectContentScripts_namespaceObject, {
  "default": () => (InjectContentScripts)
});

// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/NewInstalled.ts
var NewInstalled_namespaceObject = {};
__webpack_require__.r(NewInstalled_namespaceObject);
__webpack_require__.d(NewInstalled_namespaceObject, {
  "default": () => (NewInstalled)
});

// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/StartPluginWorker.ts
var StartPluginWorker_namespaceObject = {};
__webpack_require__.r(StartPluginWorker_namespaceObject);
__webpack_require__.d(StartPluginWorker_namespaceObject, {
  "default": () => (StartPluginWorker)
});

// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/SettingListeners.ts
var SettingListeners_namespaceObject = {};
__webpack_require__.r(SettingListeners_namespaceObject);
__webpack_require__.d(SettingListeners_namespaceObject, {
  "default": () => (SettingListeners)
});

// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/DatabaseCleanup/CleanProfileAndAvatar.ts
var CleanProfileAndAvatar_namespaceObject = {};
__webpack_require__.r(CleanProfileAndAvatar_namespaceObject);
__webpack_require__.d(CleanProfileAndAvatar_namespaceObject, {
  "default": () => (cleanProfileWithNoLinkedPersona)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/webpack-target-webextension@0.4.4_webpack@5.50.0/node_modules/webpack-target-webextension/lib/background.js
var background = __webpack_require__(53331);
// EXTERNAL MODULE: ./src/polyfill/index.ts + 6 modules
var polyfill = __webpack_require__(2735);
// EXTERNAL MODULE: ../../node_modules/.pnpm/webcrypto-liner@1.2.4/node_modules/webcrypto-liner/build/index.es.js
var index_es = __webpack_require__(83089);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(76898);
// EXTERNAL MODULE: ./src/utils/native-rpc/index.ts + 2 modules
var native_rpc = __webpack_require__(16994);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 4 modules
var social_network_adaptor = __webpack_require__(58451);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(81949);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/IsolatedDashboardBridge.ts


let disconnected = false;
/* harmony default export */ function IsolatedDashboardBridge(signal) {
    // Listen to API request from dashboard
    if (false) {}
    signal.addEventListener('abort', ()=>disconnected = true
    );
};

// EXTERNAL MODULE: ./src/utils/flags.ts
var flags = __webpack_require__(80773);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/InjectContentScripts.ts

/* harmony default export */ function InjectContentScripts(signal) {
    const injectedScript = fetchInjectedScript();
    const contentScripts = fetchInjectContentScript('/generated__content__script.html');
    async function onCommittedListener(arg) {
        if (arg.url === 'about:blank') return;
        if (!arg.url.startsWith('http')) return;
        const contains = await browser.permissions.contains({
            origins: [
                arg.url
            ]
        });
        if (!contains) return;
        /**
         * For iOS App, there is a special way to do it in the manifest.json
         * A `iOS-injected-scripts` field is used to add extra scripts
         */ if (!flags/* Flags.support_native_injected_script_declaration */.vU.support_native_injected_script_declaration && !flags/* Flags.requires_injected_script_run_directly */.vU.requires_injected_script_run_directly) {
            browser.tabs.executeScript(arg.tabId, {
                runAt: 'document_start',
                frameId: arg.frameId,
                // Refresh the injected script every time in the development mode.
                code:  false ? 0 : await injectedScript
            }).catch(HandleError(arg));
        }
        if (flags/* Flags.requires_injected_script_run_directly */.vU.requires_injected_script_run_directly) {
            browser.tabs.executeScript(arg.tabId, {
                runAt: 'document_start',
                frameId: arg.frameId,
                file: '/injected-script.js'
            });
        }
        contentScripts(arg.tabId, arg.frameId).catch(HandleError(arg));
    }
    browser.webNavigation.onCommitted.addListener(onCommittedListener);
    signal.addEventListener('abort', ()=>browser.webNavigation.onCommitted.removeListener(onCommittedListener)
    );
};
function fetchInjectContentScript(entryHTML) {
    const contentScripts = [];
    const task = fetch(entryHTML).then((x)=>x.text()
    ).then((html)=>{
        const parser = new DOMParser();
        const root = parser.parseFromString(html, 'text/html');
        for (const script of root.querySelectorAll('script')){
            if (script.innerText) contentScripts.push({
                code: script.innerText
            });
            else if (script.src) contentScripts.push({
                file: new URL(script.src, browser.runtime.getURL('')).pathname
            });
        }
    });
    return async (tabID, frameId)=>{
        await task;
        for (const script of contentScripts){
            const option = {
                runAt: 'document_idle',
                frameId,
                ...script
            };
            await browser.tabs.executeScript(tabID, option);
        }
    };
}
async function fetchInjectedScript() {
    try {
        return `{
    const script = document.createElement('script')
    script.innerHTML = ${await fetch('/injected-script.js').then((x)=>x.text()
        ).then(JSON.stringify)}
    document.documentElement.appendChild(script)
}`;
    } catch (error) {
        console.error(error);
        return `console.log('Injected script failed to load.')`;
    }
}
function HandleError(arg) {
    return (error)=>{
        const ignoredErrorMessages = [
            'non-structured-clonable data',
            'No tab with id'
        ];
        if (ignoredErrorMessages.some((x)=>error.message.includes(x)
        )) {
        // It's okay we don't need the result, happened on Firefox
        } else {
            console.error('Inject error', error.message, arg, ...Object.entries(error));
        }
    };
}

// EXTERNAL MODULE: ./src/extension/options-page/Welcome/getWelcomePageURL.tsx
var getWelcomePageURL = __webpack_require__(83404);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/NewInstalled.ts
// No meaning for this module to support hmr but I don't want to invalidate dependencies module by this reason.


/* harmony default export */ function NewInstalled() {
    browser.runtime.onInstalled.addListener((detail)=>{
        if (flags/* Flags.has_native_welcome_ui */.vU.has_native_welcome_ui) return;
        if (detail.reason === 'install') {
            browser.tabs.create({
                url: (0,getWelcomePageURL/* getWelcomePageURL */.t)()
            });
        }
    });
};

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(47713);
// EXTERNAL MODULE: ./src/plugin-infra/host.ts + 16 modules
var host = __webpack_require__(22920);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/StartPluginWorker.ts


/* harmony default export */ function StartPluginWorker(signal) {
    (0,src/* startPluginWorker */.Ht)((0,host/* createPluginHost */.R)(signal));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var Wallet_settings = __webpack_require__(6621);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var Trader_settings = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/settings/listener.ts



function ToBeListened() {
    return {
        allPostReplacementSettings: settings/* allPostReplacementSettings */.zs,
        appearanceSettings: settings/* appearanceSettings */.OF,
        languageSettings: settings/* languageSettings */.pQ,
        debugModeSetting: settings/* debugModeSetting */.vv,
        currentChainIdSettings: Wallet_settings/* currentChainIdSettings */.wU,
        currentBalanceSettings: Wallet_settings/* currentBalanceSettings */.NH,
        currentBlockNumberSettings: Wallet_settings/* currentBlockNumberSettings */.gi,
        currentEtherPriceSettings: Wallet_settings/* currentEtherPriceSettings */.cK,
        currentTrendingDataProviderSettings: Trader_settings/* currentDataProviderSettings */.gG,
        currentProviderSettings: Wallet_settings/* currentProviderSettings */.t1,
        currentNetworkSettings: Wallet_settings/* currentNetworkSettings */.fX,
        currentAccountSettings: Wallet_settings/* currentAccountSettings */.aK,
        currentPortfolioDataProviderSettings: Wallet_settings/* currentPortfolioDataProviderSettings */.a4,
        currentCollectibleDataProviderSettings: Wallet_settings/* currentCollectibleDataProviderSettings */.Ki,
        currentPersonaIdentifier: settings/* currentPersonaIdentifier */.cn,
        ethereumNetworkTradeProviderSettings: Trader_settings/* ethereumNetworkTradeProviderSettings */.SN,
        polygonNetworkTradeProviderSettings: Trader_settings/* polygonNetworkTradeProviderSettings */.hn,
        binanceNetworkTradeProviderSettings: Trader_settings/* binanceNetworkTradeProviderSettings */.gk
    };
}

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/SettingListeners.ts



/* harmony default export */ function SettingListeners(signal) {
    if (!(0,umd.isEnvironment)(umd.Environment.ManifestBackground)) return;
    const obj = ToBeListened();
    for(const _key in obj){
        const key = _key;
        signal.addEventListener('abort', obj[key].addListener((data)=>utils/* MaskMessage.events */.yV.events[key].sendToAll(data)
        ));
    }
};

// EXTERNAL MODULE: ./src/database/avatar.ts
var avatar = __webpack_require__(18109);
// EXTERNAL MODULE: ./src/database/helpers/openDB.ts
var openDB = __webpack_require__(18362);
// EXTERNAL MODULE: ./src/database/Persona/Persona.db.ts + 1 modules
var Persona_db = __webpack_require__(1153);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(80594);
// EXTERNAL MODULE: ./src/database/IdentifierMap.ts
var IdentifierMap = __webpack_require__(55346);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/DatabaseCleanup/CleanProfileAndAvatar.ts






async function cleanAvatarDB(anotherList) {
    const t = (0,openDB/* createTransaction */._X)(await (0,avatar/* createAvatarDBAccess */.Hm)(), 'readwrite')('avatars', 'metadata');
    const outdated = await (0,avatar/* queryAvatarOutdatedDB */.yo)('lastAccessTime', t);
    for (const each of outdated){
        anotherList.set(each, undefined);
    }
    await (0,avatar/* deleteAvatarsDB */.ft)(Array.from(anotherList.keys()), t);
}
async function cleanProfileWithNoLinkedPersona(signal) {
    await (0,utils/* untilDocumentReady */.Hx)();
    const timeout = setTimeout(cleanProfileWithNoLinkedPersona, 1000 * 60 * 60 * 24 /** 1 day */ );
    signal.addEventListener('abort', ()=>clearTimeout(timeout)
    );
    const cleanedList = new IdentifierMap/* IdentifierMap */.q(new Map(), type/* ProfileIdentifier */.WO);
    const expired = new Date(Date.now() - 1000 * 60 * 60 * 24 * 14 /** days */ );
    await (0,Persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        if (signal.aborted) throw new Error('Abort');
        for await (const x of t.objectStore('profiles')){
            if (x.value.linkedPersona) continue;
            if (expired < x.value.updatedAt) continue;
            const id = type/* Identifier.fromString */.xb.fromString(x.value.identifier, type/* ProfileIdentifier */.WO);
            if (id.ok) cleanedList.set(id.val, undefined);
            await x.delete();
        }
    }, false);
    await cleanAvatarDB(cleanedList);
};

;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/index_hmr.ts






const CancelableJobs = [
    InjectContentScripts_namespaceObject,
    NewInstalled_namespaceObject,
    IsolatedDashboardBridge_namespaceObject,
    StartPluginWorker_namespaceObject,
    SettingListeners_namespaceObject,
    CleanProfileAndAvatar_namespaceObject, 
];
const abort = new AbortController();
CancelableJobs.map((x)=>x.default(abort.signal)
);
if (false) {}

// EXTERNAL MODULE: ./src/extension/background-script/Jobs/PrintBuildFlags.ts
var PrintBuildFlags = __webpack_require__(10339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@5.0.8/node_modules/idb/build/esm/index.js
var esm = __webpack_require__(57145);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/DatabaseCleanup/DropOldDatabase.ts


try {
    (0,esm/* deleteDB */.Lj)('maskbook-user-groups').catch(lodash.noop);
} catch  {
}
try {
    (0,esm/* deleteDB */.Lj)('maskbook-people-v2').catch(lodash.noop);
} catch  {
}

;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/index.ts

// Add and execute your non-cancelable jobs here. It won't compatible to HMR.



// EXTERNAL MODULE: ./src/utils/debug/general.ts
var general = __webpack_require__(91561);
;// CONCATENATED MODULE: ./src/background-service.ts
//#region Polyfills
 // Dynamic import and chunk splitting

// @ts-ignore WebCrypto

//#endregion
 // setup Services.*
 // setup Android and iOS API server
 // setup social network providers
 // start jobs

Object.defineProperty(globalThis, 'crypto', {
    configurable: true,
    enumerable: true,
    get: ()=>index_es/* crypto */.eL
});


/***/ }),

/***/ 18362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

function createDBAccess(opener) {
    let db = undefined;
    return async ()=>{
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if (db) return db;
        db = await opener();
        db.addEventListener('close', ()=>db = undefined
        );
        db.addEventListener('error', ()=>db = undefined
        );
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    let pendingOpen = undefined;
    async function open() {
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if ((db === null || db === void 0 ? void 0 : db.version) === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            }
            currentVersion += 1;
            db === null || db === void 0 ? void 0 : db.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined
        );
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return ()=>{
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined
        );
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


/***/ }),

/***/ 86941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SetupStep)
/* harmony export */ });
var SetupStep;
(function(SetupStep1) {
    SetupStep1["ConsentDataCollection"] = 'consent-data-collection';
    SetupStep1["CreatePersona"] = 'create-persona';
    SetupStep1["ConnectNetwork"] = 'connect-network';
    SetupStep1["RestoreDatabase"] = 'restore-database';
    SetupStep1["RestoreDatabaseAdvance"] = 'restore-database-advance';
    SetupStep1["RestoreDatabaseConfirmation"] = 'restore-database-confirmation';
})(SetupStep || (SetupStep = {
}));


/***/ }),

/***/ 83404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getWelcomePageURL)
/* harmony export */ });
/* harmony import */ var _utils_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80773);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67099);
/* harmony import */ var _SetupStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86941);



function getWelcomePageURL() {
    if (false) {} else if (_utils_flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags.has_no_browser_tab_ui */ .vU.has_no_browser_tab_ui) {
        return browser.runtime.getURL(`index.html#${_Route__WEBPACK_IMPORTED_MODULE_1__/* .DashboardRoute.Nav */ .q.Nav}`);
    } else {
        return browser.runtime.getURL(`index.html#${_Route__WEBPACK_IMPORTED_MODULE_1__/* .DashboardRoute.Setup */ .q.Setup}/${_SetupStep__WEBPACK_IMPORTED_MODULE_2__/* .SetupStep.ConsentDataCollection */ .d.ConsentDataCollection}`);
    }
}


/***/ }),

/***/ 5692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings),
/* harmony export */   "de": () => (/* binding */ currentTradeProviderSettings),
/* harmony export */   "SN": () => (/* binding */ ethereumNetworkTradeProviderSettings),
/* harmony export */   "hn": () => (/* binding */ polygonNetworkTradeProviderSettings),
/* harmony export */   "gk": () => (/* binding */ binanceNetworkTradeProviderSettings),
/* harmony export */   "We": () => (/* binding */ arbitrumNetworkTradeProviderSettings),
/* harmony export */   "Aj": () => (/* binding */ getCurrentTradeProviderGeneralSettings),
/* harmony export */   "rn": () => (/* binding */ getCurrentDataProviderGeneralSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "EG": () => (/* binding */ approvedTokensFromUniSwap)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37131);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34513);





/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd, {
    primary: ()=>''
});
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+singleHopOnly`, false, {
    primary: ()=>''
});
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_secondary')
});
/**
 * The default trader provider
 */ const currentTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_secondary')
});
const ethereumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+ethereum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>''
});
const polygonNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+polygon+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP, {
    primary: ()=>''
});
const binanceNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+binance+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP, {
    primary: ()=>''
});
const arbitrumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+arbitrum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3, {
    primary: ()=>''
});
const uniswapV2Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v2`, '');
const uniswapV3Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v3`, '');
const zrxSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+zrx`, '');
const sushiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sushiswap`, '');
const sashimiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sashimiswap`, '');
const qucikswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+quickswap`, '');
const pancakeswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+pancakeswap`, '');
const balancerSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+balancer`, '');
const dodoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+dodo`, '');
/**
 * The general settings of specific tarde provider
 */ function getCurrentTradeProviderGeneralSettings(tradeProvider) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return uniswapV2Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return uniswapV3Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.ZRX */ .z4.ZRX:
            return zrxSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            return sushiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return sashimiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return qucikswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return pancakeswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return balancerSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.DODO */ .z4.DODO:
            return dodoSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(tradeProvider);
    }
}
//#endregion
//#region data provider general settings
const coinGeckoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoSettings`, '');
const coinMarketCapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapSettings`, '');
const coinUniswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapSettings`, '');
/**
 * The general settings of specific data provider
 */ function getCurrentDataProviderGeneralSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
//#region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapPreferredCoinId`, '{}');
function getCurrentPreferredCoinIdSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapPreferredCoinId;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniSwap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+approvedTokens`, '[]');


/***/ }),

/***/ 61893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ft": () => (/* binding */ untilElementAvailable),
/* harmony export */   "Up": () => (/* binding */ untilDomLoaded),
/* harmony export */   "Hx": () => (/* binding */ untilDocumentReady),
/* harmony export */   "vv": () => (/* binding */ nthChild)
/* harmony export */ });
/* unused harmony export isDocument */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);


const isDocument = (node)=>node.nodeType === Node.DOCUMENT_NODE
;
const untilElementAvailable = async (ls, timeout = 5000)=>{
    const w = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.IntervalWatcher(ls);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>reject()
        , timeout);
        w.useForeach(()=>{
            w.stopWatch();
            resolve();
        }).startWatch(500);
    });
};
function untilDomLoaded() {
    if (document.readyState !== 'loading') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState !== 'loading') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
function untilDocumentReady() {
    if (document.readyState === 'complete') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState === 'complete') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
const nthChild = (n, ...childrenIndex)=>{
    let r = n;
    for (const v of childrenIndex){
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(r)) break;
        r = r.children[v];
    }
    return r;
};


/***/ }),

/***/ 80773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony exports is_iOSApp, isAndroidApp */
var ref, ref1;
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp = (/* unused pure expression or super */ null && ( true && "safari" === 'firefox'));
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    __raw__: {
        target: "safari",
        architecture: "app"
    },
    /** The Mask Network v2 main switch. */ v2_enabled: betaOrInsiderOnly,
    /** There is no "tabs" to navigate to. We must be careful with this. */ has_no_browser_tab_ui: appOnly,
    has_no_connected_user_link: appOnly,
    has_native_nav_bar: appOnly,
    /** In E2E, prefer open shadow root so we can test it. */ using_ShadowDOM_attach_mode:  false ? 0 : 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_native_injected_script_declaration: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ requires_injected_script_run_directly: "safari" === 'firefox',
    support_eth_network_switch: betaOrInsiderOnly,
    //#region Experimental features
    image_payload_marked_as_beta: appOnly,
    transak_enabled: webOnly,
    trader_zrx_enabled: webOnly,
    trader_all_api_cached_enabled: devOnly,
    metamask_support_enabled: webOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    wallet_mnemonic_words_backup_enabled: false,
    wallet_private_key_backup_enabled: true,
    wallet_gas_price_dialog_enable: true,
    /* construct LBP for all ERC20 tokens */ LBP_enabled: false,
    LBP_whitelist_enabled: "production" === 'production',
    plugin_switch_enabled: betaOrInsiderOnly,
    //#endregion
    EIP1159_enabled: false,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    //#region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     * - E2E: Cannot click the "allow" button (maybe a bug) in the Puppeteer
     */ no_web_extension_dynamic_permission_request: is_iOSApp || "safari" === 'E2E',
    has_no_WebRTC:  true || 0,
    //#endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 77287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qE": () => (/* reexport safe */ _components___WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "IN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.IN),
/* harmony export */   "H9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "eD": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.eD),
/* harmony export */   "MN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.MN),
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "p_": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.p_),
/* harmony export */   "ou": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ou),
/* harmony export */   "ad": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "$I": () => (/* reexport safe */ _suspends__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "PN": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.PN),
/* harmony export */   "qX": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.qX),
/* harmony export */   "Qn": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.Qn),
/* harmony export */   "ll": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.ll),
/* harmony export */   "YT": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.YT),
/* harmony export */   "YU": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.Y),
/* harmony export */   "Hx": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_9__.Hx),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_11__.vU),
/* harmony export */   "c_": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   "cc": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.L),
/* harmony export */   "M1": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.M),
/* harmony export */   "ZK": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "ag": () => (/* reexport safe */ _i18n_next__WEBPACK_IMPORTED_MODULE_14__.a),
/* harmony export */   "J3": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_16__.J),
/* harmony export */   "yV": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_17__.y),
/* harmony export */   "uM": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.u),
/* harmony export */   "b5": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.b),
/* harmony export */   "CU": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.CU),
/* harmony export */   "Wu": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.Wu),
/* harmony export */   "Ql": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Ql),
/* harmony export */   "Uk": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Uk),
/* harmony export */   "Cw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Cw),
/* harmony export */   "Se": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Se),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.gw),
/* harmony export */   "Yu": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Yu),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Vs),
/* harmony export */   "fy": () => (/* reexport safe */ _watcher__WEBPACK_IMPORTED_MODULE_24__.f),
/* harmony export */   "aW": () => (/* reexport safe */ _collectNodeText__WEBPACK_IMPORTED_MODULE_25__.a)
/* harmony export */ });
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5638);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7879);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33059);
/* harmony import */ var _native_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16994);
/* harmony import */ var _shadow_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99515);
/* harmony import */ var _suspends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20148);
/* harmony import */ var _type_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88066);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84934);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12139);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61893);
/* harmony import */ var _equality__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50970);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80773);
/* harmony import */ var _getTextUILength__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67552);
/* harmony import */ var _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35071);
/* harmony import */ var _i18n_next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95001);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61298);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61046);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13017);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50023);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27411);
/* harmony import */ var _side_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21920);
/* harmony import */ var _createNormalReactRoot__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37904);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8325);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(98621);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59851);
/* harmony import */ var _collectNodeText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84497);































/***/ }),

/***/ 47713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.D4),
/* harmony export */   "mF": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.mF),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.Pz),
/* harmony export */   "Ht": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_3__.H),
/* harmony export */   "EK": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.EK),
/* harmony export */   "I4": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.I4),
/* harmony export */   "V8": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.V8),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.Sc),
/* harmony export */   "eT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.oQ),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.FT),
/* harmony export */   "Hq": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.Hq),
/* harmony export */   "x4": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.x4),
/* harmony export */   "bD": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.bD),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fo),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fg),
/* harmony export */   "Je": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_3__.J)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61182);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87509);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11555);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50586);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93363);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76575);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64614);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63046);











/***/ }),

/***/ 63046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i1": () => (/* binding */ registeredPlugins),
/* harmony export */   "fg": () => (/* binding */ registeredPluginIDs),
/* harmony export */   "_W": () => (/* binding */ getPluginDefine),
/* harmony export */   "fo": () => (/* binding */ registerPlugin)
/* harmony export */ });
/* unused harmony export useRegisteredPlugins */
const __registered = new Map();
const registeredPlugins = {
    [Symbol.iterator]: ()=>__registered.values()
};
const registeredPluginIDs = {
    [Symbol.iterator]: ()=>__registered.keys()
};
function getPluginDefine(id) {
    return __registered.get(id);
}
function registerPlugin(def) {
    if (__registered.has(def.ID)) return;
    if (!__meetRegisterRequirement(def)) return;
    __registered.set(def.ID, def);
}
function useRegisteredPlugins() {
    return [
        ...__registered.values()
    ];
}
function __meetRegisterRequirement(def) {
    // arch check
    if ( true && !def.enableRequirement.architecture.app) return false;
    if (false) {}
    // build variant check
    if (true) {
        if ( true && def.enableRequirement.target !== 'stable') {
            return false;
        } else if (false) {}
    }
    return true;
}


/***/ }),

/***/ 50586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ startPluginWorker),
/* harmony export */   "J": () => (/* binding */ activatedPluginsWorker)
/* harmony export */ });
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9284);

const { startDaemon , activated  } = (0,_manage__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)({
    getLoader: (plugin)=>plugin.Worker
});
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


/***/ }),

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ CurrentSNSNetwork)
/* harmony export */ });
var CurrentSNSNetwork;
(function(CurrentSNSNetwork1) {
    CurrentSNSNetwork1[CurrentSNSNetwork1["Unknown"] = 0] = "Unknown";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Facebook"] = 1] = "Facebook";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Twitter"] = 2] = "Twitter";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Instagram"] = 3] = "Instagram";
})(CurrentSNSNetwork || (CurrentSNSNetwork = {
}));


/***/ }),

/***/ 35930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ IdentifierMap),
/* harmony export */   "d": () => (/* binding */ ReadonlyIdentifierMap)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20786);
/* harmony import */ var _serializer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76117);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53408);



var _key;
var tmp = (_key = immer__WEBPACK_IMPORTED_MODULE_2__/* .immerable */ .sc, Symbol.iterator);
/**
 * The IdentifierMap is like a built-in Map<Identifier, T>.
 *
 * Because Identifier is not a value-type record so to make it behave like a value-type,
 * please use this class instead of Map<Identifier, T>.
 */ class IdentifierMap {
    get(key) {
        return this.__raw_map__.get(key.toText());
    }
    set(key, data) {
        if (!key) return this;
        if (this.constructorName.length) {
            if (!this.constructorName.includes(key.constructor.name)) {
                console.warn(`IdentifierMap found a invalid write try which violates the constraint ${this.constructorName}`, key);
                return this;
            }
        }
        this.__raw_map__.set(key.toText(), data);
        return this;
    }
    clear() {
        this.__raw_map__.clear();
    }
    delete(data) {
        return this.__raw_map__.delete(data.toText());
    }
    _identifierFromString(key) {
        const identifier = _type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(key);
        if (identifier.err) {
            console.warn('IdentifierMap found a key which cannot be converted into Identifier: ', identifier.val.message);
        } else {
            if (this.constructorName.length === 0) return identifier.val;
            if (this.constructorName.includes(identifier.val.constructor.name)) return identifier.val;
            console.warn(`IdentifierMap found a key which is not compatible with it constraint(${this.constructorName}), ${key}`);
        }
        return null;
    }
    *entries() {
        const iter = this.__raw_map__.entries();
        for (const [key, data] of iter){
            const identifier = this._identifierFromString(key);
            if (!identifier) continue;
            yield [
                identifier,
                data
            ];
        }
    }
    forEach(callbackfn, thisArg) {
        this.__raw_map__.forEach((value, key)=>{
            const i = this._identifierFromString(key);
            if (!i) return;
            callbackfn.call(thisArg, value, i, this);
        });
    }
    has(key) {
        return this.__raw_map__.has(key.toText());
    }
    *keys() {
        const iter = this.__raw_map__.keys();
        for (const key of iter){
            const i = this._identifierFromString(key);
            if (i) yield i;
            else continue;
        }
    }
    get size() {
        return [
            ...this.keys()
        ].length;
    }
    *values() {
        for (const [k, v] of this.entries())yield v;
    }
    [tmp]() {
        return this.entries();
    }
    /**
     *
     * @param __raw_map__ The origin data.
     * @param constructor The Identifier constructor. If provided, IdentifierMap will try to do a runtime check to make sure the identifier type is correct.
     */ constructor(__raw_map__, ...constructor){
        this.__raw_map__ = __raw_map__;
        this[_key] = true;
        this.constructorName = [];
        if (constructor) {
            this.constructorName = constructor.map((x)=>x.name
            );
        }
    }
}
(0,_serializer_index__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .q)('IdentifierMap')(IdentifierMap);
IdentifierMap.prototype[Symbol.toStringTag] = 'IdentifierMap';
// eslint-disable-next-line no-redeclare
const ReadonlyIdentifierMap = IdentifierMap;


/***/ }),

/***/ 20786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xb": () => (/* binding */ Identifier),
/* harmony export */   "WO": () => (/* binding */ ProfileIdentifier),
/* harmony export */   "xI": () => (/* binding */ GroupIdentifier),
/* harmony export */   "_P": () => (/* binding */ PostIdentifier),
/* harmony export */   "bb": () => (/* binding */ PostIVIdentifier),
/* harmony export */   "ob": () => (/* binding */ ECKeyIdentifier),
/* harmony export */   "Np": () => (/* binding */ PersonaIdentifier)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76117);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);


/**
 * @internal symbol that used to construct this type from the Identifier
 */ const $fromString = Symbol();
const fromStringCache = new Map();
const fromString = (id, constructor)=>{
    let result = null;
    // the third overload
    if (id instanceof Identifier) result = id;
    else {
        const [type, ...rest] = id.split(':');
        // the second overload
        if (fromStringCache.has(id)) result = fromStringCache.get(id);
        else if (type === 'person') result = ProfileIdentifier[$fromString](rest.join(':'));
        else if (type === 'group') result = GroupIdentifier[$fromString](rest.join(':'));
        else if (type === 'post') result = PostIdentifier[$fromString](rest.join(':'));
        else if (type === 'post_iv') result = PostIVIdentifier[$fromString](rest.join(':'));
        else if (type === 'ec_key') result = ECKeyIdentifier[$fromString](rest.join(':'));
        else return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError('Unreachable case:' + type));
        fromStringCache.set(id, result);
    }
    const err = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(`Can't cast to Identifier. Expected: ${(constructor === null || constructor === void 0 ? void 0 : constructor.name) || 'Any Identifier'}, Try to convert from string: ${id}`));
    if (!constructor) return result ? (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(result) : err;
    else if (result instanceof constructor) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(result);
    else return err;
};
class Identifier {
    static equals(a, b) {
        return !!(a === null || a === void 0 ? void 0 : a.equals(b));
    }
    equals(other) {
        if (!other) return false;
        return this === other || this.toText() === other.toText();
    }
    static IdentifiersToString(a, isOrderImportant = false) {
        const ax = a.map((x)=>x.toText()
        );
        if (!isOrderImportant) {
            ax.sort();
        }
        return ax.join(',');
    }
}
Identifier.fromString = fromString;
var tmp = $fromString;
class ProfileIdentifier extends Identifier {
    static getUserName(x) {
        if (typeof x === 'string') {
            if ([
                '',
                '$unknown'
            ].includes(x)) return null;
            return x;
        } else {
            if (x.isUnknown) return null;
            return x.userId;
        }
    }
    get isUnknown() {
        return this.equals(ProfileIdentifier.unknown);
    }
    toText() {
        return `person:${this.network}/${this.userId}`;
    }
    friendlyToText() {
        return `${this.userId}@${this.network}`;
    }
    static [tmp](str) {
        const [network, userId] = str.split('/');
        if (!network || !userId) return null;
        return new ProfileIdentifier(network, userId);
    }
    /**
     * @param network - Network belongs to
     * @param userId - User ID
     */ constructor(network, userId){
        super();
        this.network = network;
        this.userId = userId;
        noSlash(network);
        noSlash(userId);
    }
}
ProfileIdentifier.unknown = new ProfileIdentifier('localhost', '$unknown');
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('ProfileIdentifier')(ProfileIdentifier);
var tmp1 = $fromString;
class GroupIdentifier extends Identifier {
    static getFriendsGroupIdentifier(who, groupId) {
        return new GroupIdentifier(who.network, who.userId, groupId);
    }
    get ownerIdentifier() {
        if (this.virtualGroupOwner === null) return null;
        return new ProfileIdentifier(this.network, this.virtualGroupOwner);
    }
    toText() {
        return 'group:' + [
            this.network,
            this.virtualGroupOwner,
            this.groupID
        ].join('/');
    }
    get isReal() {
        return !this.virtualGroupOwner;
    }
    get isVirtual() {
        return !!this.virtualGroupOwner;
    }
    static [tmp1](str) {
        const [network1, belongs, groupID] = str.split('/');
        if (!network1 || !groupID) return null;
        return new GroupIdentifier(network1, belongs, groupID);
    }
    constructor(network1, virtualGroupOwner, groupID){
        super();
        this.network = network1;
        this.virtualGroupOwner = virtualGroupOwner;
        this.groupID = groupID;
        noSlash(network1);
        noSlash(groupID);
        if (virtualGroupOwner === '') this.virtualGroupOwner = null;
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('GroupIdentifier')(GroupIdentifier);
var tmp2 = $fromString;
class PostIdentifier extends Identifier {
    get isUnknown() {
        return this.equals(PostIdentifier.unknown);
    }
    toText() {
        return `post:${this.postId}/${this.identifier.toText()}`;
    }
    static [tmp2](str) {
        const [postId, ...identifier] = str.split('/');
        const id = Identifier.fromString(identifier.join('/'));
        if (id.err || !postId) return null;
        return new PostIdentifier(id.val, postId);
    }
    /**
     * If identifier is a PostIdentifier, that means this post is binded with other post in some kind
     * e.g. a comment.
     */ constructor(identifier, postId){
        super();
        this.identifier = identifier;
        this.postId = postId;
        noSlash(postId);
    }
}
PostIdentifier.unknown = new PostIdentifier(ProfileIdentifier.unknown, '$unknown');
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('PostIdentifier')(PostIdentifier);
var tmp3 = $fromString;
class PostIVIdentifier extends Identifier {
    toText() {
        return `post_iv:${this.network}/${this.postIV.replace(/\//g, '|')}`;
    }
    static [tmp3](str) {
        const [network2, iv] = str.split('/');
        if (!network2 || !iv) return null;
        return new PostIVIdentifier(network2, iv);
    }
    constructor(network2, postIV){
        super();
        this.network = network2;
        this.postIV = postIV;
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('PostIVIdentifier')(PostIVIdentifier);
var tmp4 = $fromString;
/**
 * This class identify the point on an EC curve.
 * ec_key:secp256k1/CompressedPoint
 */ class ECKeyIdentifier extends Identifier {
    toText() {
        var _encodedCompressedKey;
        const normalized = (_encodedCompressedKey = this.encodedCompressedKey) !== null && _encodedCompressedKey !== void 0 ? _encodedCompressedKey : this.compressedPoint.replace(/\//g, '|');
        return `ec_key:${this.curve}/${normalized}`;
    }
    static [tmp4](str) {
        const [curve, point] = str.split('/');
        if (curve !== 'secp256k1') return null;
        return new ECKeyIdentifier(curve, point);
    }
    constructor(curve, compressedPoint){
        super();
        this.curve = curve;
        this.compressedPoint = compressedPoint;
        this.type = 'ec_key';
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('ECKeyIdentifier')(ECKeyIdentifier);
// eslint-disable-next-line no-redeclare
const PersonaIdentifier = [
    ECKeyIdentifier
];
/**
 * Because "/" is used to split parts in identifier
 * we should reject the "/"
 *
 * If you want to use it, you must first convert to something other
 */ function noSlash(str) {
    if (!str) return;
    if (str.includes('/')) throw new TypeError('Cannot contain / in a part of identifier');
}


/***/ }),

/***/ 55322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ PayloadVersions)
/* harmony export */ });
var PayloadVersions;
(function(PayloadVersions1) {
    PayloadVersions1[PayloadVersions1['2/4'] = -40] = '2/4';
    PayloadVersions1[PayloadVersions1['3/4'] = -39] = '3/4';
    PayloadVersions1[PayloadVersions1['4/4'] = -38] = '4/4';
})(PayloadVersions || (PayloadVersions = {
}));


/***/ }),

/***/ 96859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Po": () => (/* binding */ isTypedMessageTextV1),
/* harmony export */   "Rz": () => (/* binding */ isTypedMessageText),
/* harmony export */   "P": () => (/* binding */ makeTypedMessageText),
/* harmony export */   "No": () => (/* binding */ isTypedMessageImageV1),
/* harmony export */   "c0": () => (/* binding */ isTypedMessageImage),
/* harmony export */   "as": () => (/* binding */ makeTypedMessageImage),
/* harmony export */   "bZ": () => (/* binding */ isTypedMessageTuple),
/* harmony export */   "qT": () => (/* binding */ isTypedMessageTupleSerializable),
/* harmony export */   "Zw": () => (/* binding */ makeTypedMessageTuple),
/* harmony export */   "n_": () => (/* binding */ makeTypedMessageTupleFromList),
/* harmony export */   "kT": () => (/* binding */ makeTypedMessageTupleSerializable),
/* harmony export */   "h6": () => (/* binding */ makeTypedMessageSerializableTupleFromList),
/* harmony export */   "bt": () => (/* binding */ isTypedMessageUnknown),
/* harmony export */   "mv": () => (/* binding */ makeTypedMessageUnknown),
/* harmony export */   "YN": () => (/* binding */ isTypedMessageEmpty),
/* harmony export */   "WM": () => (/* binding */ makeTypedMessageEmpty),
/* harmony export */   "KV": () => (/* binding */ isTypedMessagePromise),
/* harmony export */   "Ng": () => (/* binding */ makeTypedMessagePromise),
/* harmony export */   "q$": () => (/* binding */ isWellKnownCoreTypedMessages)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34596);
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69584);


const isTypedMessageTextV1 = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('text', 1);
const isTypedMessageText = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageTextV1);
function makeTypedMessageText(text, meta) {
    return {
        type: 'text',
        version: 1,
        serializable: true,
        content: text,
        meta
    };
}
const isTypedMessageImageV1 = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('image', 1);
const isTypedMessageImage = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageImageV1);
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
const isTypedMessageTuple = (x)=>x.type === 'tuple'
;
const isTypedMessageTupleSerializable = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeEvery */ .mo)(isTypedMessageTuple, _utils__WEBPACK_IMPORTED_MODULE_0__/* .isSerializableTypedMessage */ .fV);
function makeTypedMessageTuple(items, meta) {
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
const isTypedMessageUnknown = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('unknown');
function makeTypedMessageUnknown(raw, meta) {
    return {
        type: 'unknown',
        serializable: false,
        meta,
        raw
    };
}
const isTypedMessageEmpty = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('empty');
function makeTypedMessageEmpty(meta) {
    return {
        type: 'empty',
        serializable: true,
        version: 1,
        meta
    };
}
const isTypedMessagePromise = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('promise');
function makeTypedMessagePromise(promise, meta) {
    return {
        type: 'promise',
        serializable: false,
        promise,
        meta
    };
}
//#endregion
const isWellKnownCoreTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageText, isTypedMessageImage, isTypedMessageTuple, isTypedMessageUnknown, isTypedMessagePromise);


/***/ }),

/***/ 94628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bj": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.bj),
/* harmony export */   "SY": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.SY),
/* harmony export */   "Jv": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.Jv),
/* harmony export */   "Vc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Vc),
/* harmony export */   "fV": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.fV),
/* harmony export */   "Hz": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Hz),
/* harmony export */   "r6": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.r6),
/* harmony export */   "YN": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.YN),
/* harmony export */   "c0": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.c0),
/* harmony export */   "No": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.No),
/* harmony export */   "KV": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.KV),
/* harmony export */   "Rz": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Rz),
/* harmony export */   "Po": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Po),
/* harmony export */   "bZ": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bZ),
/* harmony export */   "qT": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.qT),
/* harmony export */   "bt": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bt),
/* harmony export */   "q$": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.q$),
/* harmony export */   "WM": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.WM),
/* harmony export */   "as": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.as),
/* harmony export */   "Ng": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Ng),
/* harmony export */   "h6": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.h6),
/* harmony export */   "P": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   "Zw": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Zw),
/* harmony export */   "n_": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.n_),
/* harmony export */   "kT": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.kT),
/* harmony export */   "mv": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.mv),
/* harmony export */   "rK": () => (/* binding */ isWellKnownTypedMessages)
/* harmony export */ });
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44030);
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69584);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96859);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34596);







const isWellKnownTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_3__/* .composeSome */ .Vm)(_core__WEBPACK_IMPORTED_MODULE_1__/* .isWellKnownCoreTypedMessages */ .q$, _extension__WEBPACK_IMPORTED_MODULE_0__/* .isWellKnownExtensionTypedMessages */ .SY);


/***/ }),

/***/ 34596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fV": () => (/* binding */ isSerializableTypedMessage),
/* harmony export */   "r6": () => (/* binding */ normalizeTypedMessage),
/* harmony export */   "Hz": () => (/* binding */ isTypedMessageEqual),
/* harmony export */   "Vc": () => (/* binding */ extractTextFromTypedMessage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94628);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28782);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);



function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    const y = x;
    if (y.serializable === false && y.toJSON) return true;
    return false;
}
function normalizeTypedMessage(x) {
    return x;
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(message1)) {
        const msg1 = message1;
        const msg2 = message2;
        if (msg1.items.length !== msg2.items.length) return false;
        return msg1.items.every((item, index)=>isTypedMessageEqual(item, msg2.items[index])
        );
    }
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(message1, message2);
}
/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message) {
    if (message === null) return ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err.EMPTY */ .UG.EMPTY;
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(message.content);
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageAnchor */ .bj)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(message.content);
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(message)) {
        const str = [];
        for (const item of message.items){
            const text = extractTextFromTypedMessage(item);
            if (text.ok) str.push(text.val);
        }
        if (str.length) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(str.join(' '));
        return ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err.EMPTY */ .UG.EMPTY;
    }
    return ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err.EMPTY */ .UG.EMPTY;
}


/***/ }),

/***/ 76802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ko": () => (/* reexport safe */ _servie_events__WEBPACK_IMPORTED_MODULE_0__.Ko),
/* harmony export */   "$f": () => (/* binding */ ObservableWeakMap),
/* harmony export */   "vP": () => (/* binding */ ObservableMap),
/* harmony export */   "n7": () => (/* binding */ ObservableSet)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69260);


// Consider switch to libraries like Mobx if this file become too complex.
class ObservableWeakMap extends WeakMap {
    delete(key) {
        const _ = super.delete(key);
        this.event.emit('delete', key);
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        this.event.emit('set', key, value);
        return _;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableMap extends Map {
    clear() {
        super.clear();
        this.event.emit('clear');
    }
    delete(key) {
        const _ = super.delete(key);
        this.event.emit('delete', key);
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        this.event.emit('set', key, value);
        return _;
    }
    constructor(...args1){
        super(...args1);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableSet extends Set {
    clear() {
        super.clear();
        this.event.emit('clear');
    }
    delete(key) {
        const _ = super.delete(key);
        this.event.emit('delete', key);
        return _;
    }
    add(...value) {
        value.forEach((x)=>super.add(x)
        );
        this.event.emit('add', value);
        return this;
    }
    constructor(...args2){
        super(...args2);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}


/***/ }),

/***/ 55465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ fallbackLng)
/* harmony export */ });
const fallbackLng = {
    'zh-CN': [
        'zh-TW',
        'en'
    ],
    'zh-TW': [
        'zh-CN',
        'en'
    ],
    default: [
        'en'
    ]
};


/***/ }),

/***/ 47290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "N_": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55465);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39271);




/***/ }),

/***/ 58515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* reexport safe */ _serializer__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "qD": () => (/* reexport safe */ _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "dM": () => (/* reexport safe */ _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__.d),
/* harmony export */   "Ko": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.Ko),
/* harmony export */   "vP": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.vP),
/* harmony export */   "n7": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.n7),
/* harmony export */   "$f": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.$f),
/* harmony export */   "eL": () => (/* reexport safe */ _MaskPayload__WEBPACK_IMPORTED_MODULE_3__.e),
/* harmony export */   "ob": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.ob),
/* harmony export */   "xI": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.xI),
/* harmony export */   "xb": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.xb),
/* harmony export */   "Np": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.Np),
/* harmony export */   "bb": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.bb),
/* harmony export */   "_P": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__._P),
/* harmony export */   "WO": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.WO),
/* harmony export */   "N_": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.N_),
/* harmony export */   "C9": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.C9),
/* harmony export */   "A9": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.A9),
/* harmony export */   "Vc": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Vc),
/* harmony export */   "fV": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.fV),
/* harmony export */   "bj": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bj),
/* harmony export */   "YN": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.YN),
/* harmony export */   "Hz": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Hz),
/* harmony export */   "c0": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.c0),
/* harmony export */   "No": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.No),
/* harmony export */   "KV": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.KV),
/* harmony export */   "Rz": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Rz),
/* harmony export */   "Po": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Po),
/* harmony export */   "bZ": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bZ),
/* harmony export */   "qT": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.qT),
/* harmony export */   "bt": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bt),
/* harmony export */   "q$": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.q$),
/* harmony export */   "SY": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.SY),
/* harmony export */   "rK": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.rK),
/* harmony export */   "Jv": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Jv),
/* harmony export */   "WM": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.WM),
/* harmony export */   "as": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.as),
/* harmony export */   "Ng": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Ng),
/* harmony export */   "h6": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.h6),
/* harmony export */   "P": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.P),
/* harmony export */   "Zw": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Zw),
/* harmony export */   "n_": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.n_),
/* harmony export */   "kT": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.kT),
/* harmony export */   "mv": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.mv),
/* harmony export */   "r6": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.r6),
/* harmony export */   "Hd": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Hd),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.gw),
/* harmony export */   "Y0": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Y0),
/* harmony export */   "Lk": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Lk),
/* harmony export */   "s_": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.s_),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Vs)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76117);
/* harmony import */ var _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35930);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76802);
/* harmony import */ var _MaskPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55322);
/* harmony import */ var _Identifier_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20786);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47290);
/* harmony import */ var _TypedMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94628);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39874);













/***/ }),

/***/ 39874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lk": () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "gw": () => (/* reexport safe */ _delay__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "Vs": () => (/* reexport safe */ _timeout__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "Y0": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_3__.Y),
/* harmony export */   "s_": () => (/* reexport safe */ _pollingTask__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "Hd": () => (/* reexport safe */ _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__.H)
/* harmony export */ });
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38075);
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69460);
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58442);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6884);
/* harmony import */ var _pollingTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48967);
/* harmony import */ var _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61440);








/***/ }),

/***/ 38075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseURL(text) {
    return anchorme__WEBPACK_IMPORTED_MODULE_0__/* .default.list */ .Z.list(text).map((x)=>x.string
    ).filter((y)=>{
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        try {
            new URL(y);
            return true;
        } catch  {
            return false;
        }
    });
}


/***/ }),

/***/ 61440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SessionStorageCache)
/* harmony export */ });
const SessionStorageCache = {
    get (scope, key) {
        return sessionStorage.getItem(`${scope}:${key}`);
    },
    set (scope, key, value) {
        return sessionStorage.setItem(`${scope}:${key}`, value);
    },
    remove (scope, key) {
        return sessionStorage.removeItem(`${scope}:${key}`);
    }
};


/***/ }),

/***/ 67899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ CrashUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27768);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8236);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13325);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76814);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78103);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5484);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88448);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21282);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80234);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62558);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80310);









function CrashUI({ onRetry , subject , ...error }) {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundaryBuildInfoContext */ .N);
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_3__/* .useSharedI18N */ .B_)();
    const [showStack, setShowStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // crash report, will send to GitHub
    const reportTitle = `[Crash] ${error.type}: ${error.message}`;
    const reportBody = `<!--Thanks for the crash report!
Please write down what you're doing when the crash happened, that will help us to fix it easier!-->

I was *doing something...*, then Mask reports an error.

> ${error.message}

Error stack:

<pre>${error.stack}</pre>\n\n${context || ''}`;
    const githubLink = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const url = new URLSearchParams();
        url.set('title', reportTitle);
        url.set('body', reportBody);
        return `https://github.com/DimensionDev/Maskbook/issues/new?` + url.toString();
    }, [
        reportBody,
        reportTitle
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Root, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            severity: "error",
            variant: "outlined",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    children: t.error_boundary_crash_title({
                        subject
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ErrorTitle, {
                    children: [
                        error.type,
                        ": ",
                        error.message
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ActionArea, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                            variant: "contained",
                            color: "primary",
                            onClick: onRetry,
                            children: t.error_boundary_try_to_recover()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                            href: githubLink,
                            color: "primary",
                            target: "_blank",
                            children: t.error_boundary_report_github()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                            sx: {
                                flex: 1
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                            color: "inherit",
                            size: "small",
                            onClick: ()=>setShowStack((x)=>!x
                                )
                            ,
                            children: showStack ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            })
                        })
                    ]
                }),
                showStack ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorStack, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                        component: "pre",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                            children: error.stack
                        })
                    })
                }) : null
            ]
        })
    }));
}
const Root = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    overflow-x: auto;
    flex: 1;
    width: 100%;
    contain: paint;
    margin-top: 16px;
`;
const ErrorTitle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    user-select: text;
    margin-bottom: 8px;
`;
const ErrorStack = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    user-select: text;
    overflow-x: auto;
    contain: strict;
    height: 300px;
`;
const ActionArea = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    display: flex;
    gap: 8px;
`;


/***/ }),

/***/ 62558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ErrorBoundaryBuildInfoContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

/**
 * Please provide the build info text
 */ const ErrorBoundaryBuildInfoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)('');


/***/ }),

/***/ 97331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ProviderIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5726);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22209);
/* harmony import */ var _UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70322);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52403);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35283);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    icon: {
    }
});
function ProviderIcon(props) {
    const { size =40 , providerType  } = props;
    const classes = (0,_UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_3__/* .useStylesExtends */ .B)(useStyles(), props);
    switch(providerType){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.Maskbook */ .lP_.Maskbook:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MaskBlueIcon */ .I, {
                classes: {
                    root: classes.icon
                },
                sx: {
                    fontSize: size
                }
            }));
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.MetaMask */ .lP_.MetaMask:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .MetaMaskIcon */ .n, {
                classes: {
                    root: classes.icon
                },
                sx: {
                    fontSize: size
                }
            }));
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.WalletConnect */ .lP_.WalletConnect:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .WalletConnectIcon */ .J, {
                classes: {
                    root: classes.icon
                },
                sx: {
                    fontSize: size
                }
            }));
        default:
            return null;
    }
}


/***/ }),

/***/ 56752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ QRCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5726);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95191);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76814);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54929);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68573);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58515);








const CACHE_SCOPE = 'qrcode';
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        text: {
            paddingTop: 50
        },
        info: {
            color: theme.palette.mode === 'dark' ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__/* .default[800] */ .Z[800],
            extDecoration: 'underline',
            cursor: 'pointer'
        }
    })
);
function QRCode({ text , options ={
} , canvasProps  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const image = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SessionStorageCache.get */ .Hd.get(CACHE_SCOPE, text);
    const { classes  } = useStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!ref.current || error) return;
        qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(ref.current, text, options, (err)=>{
            var ref1;
            if (err) {
                setError(true);
                _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SessionStorageCache.remove */ .Hd.remove(CACHE_SCOPE, text);
                throw err;
            }
            const dataURL = (ref1 = ref.current) === null || ref1 === void 0 ? void 0 : ref1.toDataURL();
            if (dataURL) {
                _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SessionStorageCache.set */ .Hd.set(CACHE_SCOPE, text, dataURL);
            }
        });
    }, [
        options,
        text,
        error
    ]);
    return error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                color: "textPrimary",
                variant: "body1",
                className: classes.text,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .Trans */ .c, {
                    i18nKey: "backup_qrcode_error",
                    components: {
                        again: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            onClick: ()=>{
                                setError(false);
                            },
                            className: classes.info
                        })
                    }
                })
            })
        ]
    }) : image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: image,
        ...canvasProps
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ...canvasProps,
        ref: ref
    });
}


/***/ }),

/***/ 72972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ TokenIcon),
  "v": () => (/* binding */ TokenIconUI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(22209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(19392);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(5726);
// EXTERNAL MODULE: ../shared/src/UI/index.ts + 2 modules
var UI = __webpack_require__(43267);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenIcon/TokenIconSpecialIconList.json
const TokenIconSpecialIconList_namespaceObject = JSON.parse('[{"name":"MASK","address":"0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3","logo_url":"https://dimensiondev.github.io/Maskbook-VI/assets/Logo/MB--Logo--Geo--ForceCircle--Blue.svg"},{"name":"MASK","address":"0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7","logo_url":"https://dimensiondev.github.io/Maskbook-VI/assets/Logo/MB--Logo--Geo--ForceCircle--Blue.svg"},{"name":"NEST","address":"0x04abEdA201850aC0124161F037Efd70c74ddC74C","logo_url":"https://s2.coinmarketcap.com/static/img/coins/64x64/5841.png"},{"name":"Yes KYC","address":"0x14de81C71B3F73874659082b971433514E201B27","logo_url":"https://etherscan.io/token/images/ykyctoken_32.png"},{"name":"cWBTC","address":"0xC11b1268C1A384e55C48c2391d8d480264A3A7F4","logo_url":"https://etherscan.io/token/images/compoundwrappedbtc_32.png"},{"name":"DANK","address":"0x0cB8D0B37C7487b11d57F1f33dEfA2B1d3cFccfE","logo_url":"https://etherscan.io/token/images/dank_32.png"},{"name":"DSCP","address":"0x03e3f0c25965f13DbbC58246738C183E27b26a56","logo_url":"https://etherscan.io/token/images/disciplina_28.png"},{"name":"GEE","address":"0x4F4f0Db4de903B88f2B1a2847971E231D54F8fd3","logo_url":"https://etherscan.io/token/images/geens_28.png"},{"name":"FKX","address":"0x009e864923b49263c7F10D19B7f8Ab7a9A5AAd33","logo_url":"https://etherscan.io/token/images/knoxstertoken_32.png?v=2"},{"name":"N0031","address":"0x075190c6130EA0a3A7E40802F1D77F4Ea8f38fE2","logo_url":"https://etherscan.io/token/images/nestyfi_32.png"},{"name":"NFC","address":"0xb0866289e870D2efc282406cF4123Df6E5BcB652","logo_url":"https://etherscan.io/token/images/nofaketoday_28.png"},{"name":"O3Swap","address":"0xEe9801669C6138E84bD50dEB500827b776777d28","logo_url":"https://etherscan.io/token/images/o3swaptoken_32.png"},{"name":"QTUM","address":"0x9a642d6b3368ddc662CA244bAdf32cDA716005BC","logo_url":"https://etherscan.io/token/images/qtum_28.png"},{"name":"REMI","address":"0x13cb85823f78Cff38f0B0E90D3e975b8CB3AAd64","logo_url":"https://etherscan.io/token/images/remiit_28.png"},{"name":"REDC","address":"0xB563300A3BAc79FC09B93b6F84CE0d4465A2AC27","logo_url":"https://etherscan.io/token/images/redcab_28.png"},{"name":"SBTC","address":"0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6","logo_url":"https://etherscan.io/token/images/Synthetixsbtc_32.png"},{"name":"TPT","address":"0xC596bD09d652827b0106292D3e378D5938df4B12","logo_url":"https://etherscan.io/token/images/009-TPT-Teleport-Token-Coin-Logo.png"},{"name":"TRL","address":"0xCed1A8529125D1bD06B54a7B01210df357D00885","logo_url":"https://etherscan.io/token/images/giraffage_28.png"},{"name":"UPX","address":"0x5f778ec4B31a506c1Dfd8b06F131E9B451a61D39","logo_url":"https://etherscan.io/token/images/udap_28.png"},{"name":"WYV","address":"0x056017c55aE7AE32d12AeF7C679dF83A85ca75Ff","logo_url":"https://etherscan.io/token/images/wyvern_28.png"},{"name":"VDOC","address":"0x82BD526bDB718C6d4DD2291Ed013A5186cAE2DCa","logo_url":"https://etherscan.io/token/images/vdoc_28.png"},{"name":"rSAI","address":"0xea8b224eDD3e342DEb514C4176c2E72Bcce6fFF9","logo_url":"https://etherscan.io/token/images/redeemabledai_32.png?v=2"},{"name":"ALICE","address":"0xAC51066d7bEC65Dc4589368da368b212745d63E8","logo_url":"https://bscscan.com/token/images/alicetoken_32.png"},{"name":"BP","address":"0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1","logo_url":"https://bscscan.com/token/images/bunnypark_32.png"},{"name":"DOGGY","address":"0x74926B3d118a63F6958922d3DC05eB9C6E6E00c6","logo_url":"https://bscscan.com/token/images/doggy_32.png"},{"name":"DCH","address":"0x14ACe3d3429408bFA8562099A253172913AD71bd","logo_url":"https://bscscan.com/token/images/dechart_32.png"},{"name":"FRANK","address":"0x129e6d84c6CAb9b0c2F37aD1D14a9fe2E59DAb09","logo_url":"https://bscscan.com/token/images/frankenstein_32.png"},{"name":"RFOX","address":"0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5","logo_url":"https://bscscan.com/token/images/redfoxlabs_32.png"},{"name":"FOR","address":"0x658A109C5900BC6d2357c87549B651670E5b0539","logo_url":"https://bscscan.com/token/images/forceprotocol_32.png"},{"name":"TPT","address":"0xECa41281c24451168a37211F0bc2b8645AF45092","logo_url":"https://bscscan.com/token/images/tokenpocket_32.png"},{"name":"UNCL","address":"0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb","logo_url":"https://bscscan.com/token/images/unicrypt-uncl_32.png"},{"name":"UNCX","address":"0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506","logo_url":"https://bscscan.com/token/images/unicrypt_32.png"},{"name":"WOOP","address":"0x8b303d5BbfBbf46F1a4d9741E491e06986894e18","logo_url":"https://bscscan.com/token/images/woonkly_32.png"},{"name":"ZIL","address":"0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787","logo_url":"https://bscscan.com/token/images/zilliqa_32.png"},{"name":"PBTC","address":"0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C","logo_url":"https://bscscan.com/token/images/ptokenbtc_32.png"}]');
// EXTERNAL MODULE: ../shared/src/UI/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(70322);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenIcon/index.tsx








function getFallbackIcons(address, baseURIs) {
    const checkSummedAddress = (0,src/* formatEthereumAddress */.j8w)(address);
    if ((0,src/* isSameAddress */.Wr$)((0,src/* getTokenConstants */.aV4)().NATIVE_TOKEN_ADDRESS, checkSummedAddress)) {
        return baseURIs.map((x)=>`${x}/info/logo.png`
        );
    }
    const specialIcon = TokenIconSpecialIconList_namespaceObject.find((0,src/* currySameAddress */.DC3)(address));
    if (specialIcon) return [
        specialIcon.logo_url
    ];
    // load from remote
    return baseURIs.map((x)=>`${x}/assets/${checkSummedAddress}/logo.png`
    );
}
const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 16,
            height: 16,
            backgroundColor: theme.palette.common.white,
            margin: 0
        }
    })
);
function TokenIcon(props) {
    const { address , logoURI , name , chainId , AvatarProps , classes  } = props;
    const _chainId = (0,src/* useChainId */.xxU)();
    let _logoURI = logoURI;
    if (!logoURI && (0,src/* isSameAddress */.Wr$)((0,src/* getTokenConstants */.aV4)().NATIVE_TOKEN_ADDRESS, (0,src/* formatEthereumAddress */.j8w)(address))) {
        const nativeToken = (0,src/* getChainDetailed */.$Gt)(chainId !== null && chainId !== void 0 ? chainId : _chainId);
        _logoURI = nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.nativeCurrency.logoURI;
    }
    const { TOKEN_ASSET_BASE_URI  } = (0,src/* useTokenAssetBaseURLConstants */.hyB)(chainId !== null && chainId !== void 0 ? chainId : _chainId);
    const fallbackLogos = getFallbackIcons(address, TOKEN_ASSET_BASE_URI !== null && TOKEN_ASSET_BASE_URI !== void 0 ? TOKEN_ASSET_BASE_URI : []);
    const tokenBlockie = (0,src/* useBlockie */.YTs)(address);
    const images = _logoURI ? Array.isArray(_logoURI) ? [
        ..._logoURI,
        ...fallbackLogos
    ] : [
        _logoURI,
        ...fallbackLogos
    ] : fallbackLogos;
    const { value: trustedLogoURI , loading  } = (0,UI/* useImageFailOver */.jt)(images, '');
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIconUI, {
        logoURL: loading || trustedLogoURI ? trustedLogoURI : tokenBlockie,
        AvatarProps: AvatarProps,
        classes: classes,
        name: name
    }));
}
const TokenIconUI = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { logoURL , AvatarProps , name  } = props;
    const classes = (0,custom_ui_helper/* useStylesExtends */.B)(useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: classes.icon,
        src: logoURL,
        ...AvatarProps,
        children: name === null || name === void 0 ? void 0 : name.substr(0, 1).toLocaleUpperCase()
    }));
});


/***/ }),

/***/ 51041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ TokenList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(30392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(39052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(11949);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(72972);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenList/TokenListItem.tsx






// todo: change Typography from global theme
const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        list: {
            paddingLeft: theme.spacing(1)
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        primary: {
            flex: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingRight: theme.spacing(1)
        },
        name: {
            display: 'block',
            lineHeight: '20px',
            fontSize: 14
        },
        secondary: {
            fontSize: 14,
            textAlign: 'right'
        },
        symbol: {
            lineHeight: '20px',
            fontSize: 14
        },
        importButton: {
            borderRadius: '30px'
        }
    })
);
function TokenListItem({ data , onSelect  }) {
    const { classes  } = useStyles();
    const token = data.token;
    if (!token) return null;
    const { address , name , symbol , logoURI  } = token;
    const handleTokenSelect = (e)=>{
        e.stopPropagation();
        onSelect(data);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        className: classes.list,
        onClick: handleTokenSelect,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                    classes: {
                        icon: classes.icon
                    },
                    address: address,
                    name: name,
                    logoURI: logoURI
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.text
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.primary,
                        color: "textPrimary",
                        component: "span",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.symbol,
                                children: symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.name,
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.secondary,
                        color: "textSecondary",
                        component: "span",
                        children: data.isAddedToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: (0,web3_shared_src/* formatBalance */.azF)(data.balance, token.decimals)
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.importButton,
                            color: "primary",
                            onClick: handleTokenSelect,
                            size: "small",
                            children: "Import"
                        })
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/some.js + 1 modules
var some = __webpack_require__(55916);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenList/index.tsx






const checkAddedToken = (token, tokens)=>token.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native || (0,some/* default */.Z)(tokens, (t)=>(0,web3_shared_src/* isSameAddress */.Wr$)(token.address, t.address)
    )
;
const TokenList = /*#__PURE__*/ (0,react.memo)(({ onSelect , placeholder , assets , loading  })=>{
    const tokens = (0,web3_shared_src/* useERC20Tokens */.mP2)();
    const renderAsset = assets.map((x)=>({
            ...x,
            isAddedToken: checkAddedToken(x.token, tokens)
        })
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* SearchableList */.xV, {
        onSelect: onSelect,
        data: renderAsset,
        searchKey: [
            'token.address',
            'token.symbol',
            'token.name'
        ],
        itemRender: TokenListItem,
        placeholder: loading ? placeholder : undefined
    }));
});


/***/ }),

/***/ 85942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OZ": () => (/* reexport */ CrashUI/* CrashUI */.O),
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N),
  "LC": () => (/* reexport */ ProviderIcon/* ProviderIcon */.L),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "vT": () => (/* reexport */ TokenIcon/* TokenIconUI */.v),
  "no": () => (/* reexport */ TokenList/* TokenList */.n),
  "Pf": () => (/* reexport */ withErrorBoundary)
});

// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(72972);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenList/index.tsx + 1 modules
var TokenList = __webpack_require__(51041);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(56752);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var CrashUI = __webpack_require__(67899);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(62558);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorBoundary, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        }));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        }));
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replace(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replace(/webpack-internal:\/{3}/g, '');
        } catch  {
        }
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {
        }
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {
        }
        return {
            stack,
            type,
            message
        };
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/index.ts




// EXTERNAL MODULE: ../shared/src/UI/components/ProviderIcon/index.tsx
var ProviderIcon = __webpack_require__(97331);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts







/***/ }),

/***/ 43267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OZ": () => (/* reexport */ components/* CrashUI */.OZ),
  "SV": () => (/* reexport */ components/* ErrorBoundary */.SV),
  "N3": () => (/* reexport */ components/* ErrorBoundaryBuildInfoContext */.N3),
  "LC": () => (/* reexport */ components/* ProviderIcon */.LC),
  "s_": () => (/* reexport */ components/* QRCode */.s_),
  "T1": () => (/* reexport */ components/* TokenIcon */.T1),
  "vT": () => (/* reexport */ components/* TokenIconUI */.vT),
  "no": () => (/* reexport */ components/* TokenList */.no),
  "ze": () => (/* reexport */ custom_ui_helper/* mergeClasses */.z),
  "or": () => (/* reexport */ custom_ui_helper.or),
  "jt": () => (/* reexport */ useImageFailOver),
  "Bc": () => (/* reexport */ custom_ui_helper/* useStylesExtends */.B),
  "Pf": () => (/* reexport */ components/* withErrorBoundary */.Pf)
});

// EXTERNAL MODULE: ../shared/src/UI/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(70322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(43402);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210630045432-e05621c/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(24982);
;// CONCATENATED MODULE: ../shared/src/UI/hooks/useImageFailOver.ts


/**
 * Request images from different sources and get the image's url of the loaded
 * @param urls the url of different image sources
 * @param suffix the image file path suffix
 */ function useImageFailOver(urls, suffix) {
    return (0,useAsync/* default */.Z)(async ()=>{
        try {
            const imgs = urls.map((v)=>v + suffix
            );
            const img = await (0,esm/* findAvailableImageURL */.ky)(imgs);
            return urls[imgs.indexOf(img)];
        } catch  {
            return '';
        }
    }, [
        urls.join(''),
        suffix
    ]);
}

;// CONCATENATED MODULE: ../shared/src/UI/hooks/index.ts


// EXTERNAL MODULE: ../shared/src/UI/components/index.ts + 2 modules
var components = __webpack_require__(85942);
;// CONCATENATED MODULE: ../shared/src/UI/index.ts





/***/ }),

/***/ 39326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ createGlobalState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

/**
 * Create a new global state.
 *
 * This is compatible with concurrent mode.
 *
 * @param f The async function that return the data needed.
 * @param subscribe
 * The subscribe function that call the callback when the data changed.
 * It will call the f again to revalidate the data.
 *
 * @returns
 * It returns a tuple.
 *
 * The first item is the react hooks for this resource.
 * The hooks receive a argument "checked".
 * If checked is true, it will return a status object so you can handle the error by yourself.
 *
 * The second item is the revalidation function. It can be called anywhere and returns a Promise.
 * It will resolves regardless the f itself fullfilled or rejected.
 *
 * The third item is the data itself in case you're not in a React context.
 */ function createGlobalState(f, subscribe) {
    const data = {
        version: -1,
        data: null,
        error: null
    };
    const source = (0,react__WEBPACK_IMPORTED_MODULE_0__.unstable_createMutableSource)(data, ()=>data.version
    );
    function snap(x) {
        return {
            ...x
        };
    }
    const event = new EventTarget();
    function revalidate(callback = ()=>void event.dispatchEvent(new Event('update'))
    ) {
        return f().then((val)=>{
            data.version += 1;
            data.data = val;
            data.error = undefined;
        }, (error)=>{
            data.version += 1;
            data.error = error;
        }).finally(callback);
    }
    function subscriber(x, callback) {
        const undo = subscribe(()=>revalidate(callback)
        );
        event.addEventListener('update', callback);
        return ()=>{
            event.removeEventListener('update', callback);
            undo();
        };
    }
    function useData(checked = false) {
        const val = (0,react__WEBPACK_IMPORTED_MODULE_0__.unstable_useMutableSource)(source, snap, subscriber);
        if (val.version === -1) throw revalidate();
        // there is no any stale data available. considered as not recoverable.
        if (checked) return {
            error: val.error,
            data: val.data
        };
        if (val.error && val.version === 0) throw val.error;
        return val.data;
    }
    return [
        useData,
        ()=>revalidate()
        ,
        {
            value: data.data,
            error: data.error
        }
    ];
}


/***/ }),

/***/ 3078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y_": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Y_),
/* harmony export */   "Jf": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Jf),
/* harmony export */   "$P": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "UK": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.UK),
/* harmony export */   "pv": () => (/* reexport safe */ _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "_X": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__._X),
/* harmony export */   "Xh": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.Xh),
/* harmony export */   "F$": () => (/* reexport safe */ _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__.F),
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__.i),
/* harmony export */   "S8": () => (/* reexport safe */ _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "r8": () => (/* reexport safe */ _createGlobalState__WEBPACK_IMPORTED_MODULE_6__.r)
/* harmony export */ });
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22466);
/* harmony import */ var _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56753);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7082);
/* harmony import */ var _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30246);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54957);
/* harmony import */ var _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99058);
/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39326);









/***/ }),

/***/ 7082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xh": () => (/* binding */ useMenuContext),
/* harmony export */   "H9": () => (/* binding */ useMenu),
/* harmony export */   "_X": () => (/* binding */ useMenuConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58610);



/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {
    });
}
function useMenuConfig(elements, config) {
    const anchorEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [status, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((anchorElOrEvent)=>{
        let element;
        if (anchorElOrEvent instanceof HTMLElement) {
            element = anchorElOrEvent;
        } else {
            element = anchorElOrEvent.currentTarget;
        }
        anchorEl.current = element;
        setOpen(true);
    }, []);
    const close = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setOpen(false)
    , []);
    const Menu1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(useMenuContext);
    return [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl.current,
            children: elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
                    ...element.props,
                    key
                }) : element
            )
        }),
        open,
        close, 
    ];
}


/***/ }),

/***/ 56753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);


function useObservableValues(map) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>[
                    ...map.values()
                ]
            ,
            subscribe: (callback)=>{
                // @ts-ignore
                return map.event.on(ALL_EVENTS, callback);
            }
        })
    , [
        map
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}


/***/ }),

/***/ 30246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90335);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)()) // create a id for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return event.on((_ev)=>{
            const event1 = _ev;
            // ignore the event from the same hook
            if (event1.hookId === HOOK_ID) return;
            setOpen(event1.open);
            onUpdateByRemote === null || onUpdateByRemote === void 0 ? void 0 : onUpdateByRemote(_ev);
        });
    }, [
        onUpdateByRemote,
        event,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event.sendToLocal(payload) : event.sendToVisiblePages(payload);
        }, 100);
    }, [
        event,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 99058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useScrollBottomEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73698);


function useScrollBottomEvent(ref, cb) {
    const onScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function(_ev) {
        // ev.currentTarget is always null when applies debounce().
        const ev = _ev;
        const element = ev.path[0];
        // On some device, there's a slight deviation between `scrollHeight` and `offsetHeight + scrollTop`
        const isBottomArrived = Math.abs(element.scrollHeight - element.offsetHeight - element.scrollTop) < 2;
        if (isBottomArrived) cb();
    }, 300), [
        cb
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        if (!ref.current) return;
        ref.current.addEventListener('scroll', onScroll);
        // useLayoutEffect() to remove the listener before changes painted on screen.
        return ()=>ref.current.removeEventListener('scroll', onScroll)
        ;
    }, [
        onScroll,
        ref.current
    ]);
}


/***/ }),

/***/ 54957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useSnackbarCallback)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5726);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80310);



function useSnackbarCallback(opts, deps, onSuccess, onError, key, successText) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useSharedI18N */ .B_)();
    const { enqueueSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .useSnackbar */ .Ds)();
    const executor = typeof opts === 'function' ? opts : opts.executor;
    if (typeof opts === 'object') {
        [deps, onSuccess, onError, key, successText] = [
            opts.deps,
            opts.onSuccess,
            opts.onError,
            opts.key,
            opts.successText, 
        ];
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((...args)=>{
        return executor(...args).then((res)=>{
            enqueueSnackbar(successText !== null && successText !== void 0 ? successText : t.snackbar_done(), {
                key,
                variant: 'success',
                preventDuplicate: true
            });
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(res);
            return res;
        }, (error)=>{
            enqueueSnackbar(`Error: ${error.message || error}`, {
                key,
                preventDuplicate: true,
                variant: 'error'
            });
            onError === null || onError === void 0 ? void 0 : onError(error);
            throw error;
        });
    }, [
        ...deps,
        enqueueSnackbar,
        executor,
        onError,
        onSuccess,
        key,
        successText
    ]);
}


/***/ }),

/***/ 22466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useValueRef),
/* harmony export */   "UK": () => (/* binding */ useValueRefDelayed),
/* harmony export */   "Jf": () => (/* binding */ SubscriptionFromValueRef),
/* harmony export */   "Y_": () => (/* binding */ SubscriptionDebug),
/* harmony export */   "$P": () => (/* binding */ ValueRefFromSubscription)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);



function useValueRef(ref) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>ref.addListener(callback)
        })
    , [
        ref
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useValueRefDelayed(ref, latency = 500) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>{
                return ref.addListener((newVal, oldVal)=>{
                    setTimeout(()=>callback(newVal, oldVal)
                    , latency);
                });
            }
        })
    , [
        ref,
        latency
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function SubscriptionFromValueRef(ref) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value
        ,
        subscribe: (sub)=>ref.addListener(sub)
    });
}
function SubscriptionDebug(x) {
    Object.defineProperty(x, '_value', {
        configurable: true,
        get: ()=>x.getCurrentValue()
    });
    return x;
}
function ValueRefFromSubscription(sub, eq) {
    const ref = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(sub.getCurrentValue(), eq);
    sub.subscribe(()=>ref.value = sub.getCurrentValue()
    );
    return ref;
}


/***/ }),

/***/ 80310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$M": () => (/* reexport */ SharedTrans),
  "zr": () => (/* binding */ addSharedI18N),
  "Mj": () => (/* binding */ languages),
  "B_": () => (/* reexport */ useSharedI18N)
});

// EXTERNAL MODULE: ../shared/src/locales/en-US.json
var en_US = __webpack_require__(75961);
// EXTERNAL MODULE: ../shared/src/locales/es-ES.json
var es_ES = __webpack_require__(54048);
// EXTERNAL MODULE: ../shared/src/locales/fa-IR.json
var fa_IR = __webpack_require__(43094);
// EXTERNAL MODULE: ../shared/src/locales/fr-FR.json
var fr_FR = __webpack_require__(76061);
// EXTERNAL MODULE: ../shared/src/locales/it-IT.json
var it_IT = __webpack_require__(53020);
// EXTERNAL MODULE: ../shared/src/locales/ja-JP.json
var ja_JP = __webpack_require__(45558);
// EXTERNAL MODULE: ../shared/src/locales/ko-KR.json
var ko_KR = __webpack_require__(93495);
// EXTERNAL MODULE: ../shared/src/locales/qya-AA.json
var qya_AA = __webpack_require__(88807);
// EXTERNAL MODULE: ../shared/src/locales/ru-RU.json
var ru_RU = __webpack_require__(23250);
// EXTERNAL MODULE: ../shared/src/locales/zh-CN.json
var zh_CN = __webpack_require__(83055);
// EXTERNAL MODULE: ../shared/src/locales/zh-TW.json
var zh_TW = __webpack_require__(47359);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(58515);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_60622d171f398e74ebbb8933ef6c3c06/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(54929);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_60622d171f398e74ebbb8933ef6c3c06/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(77268);
;// CONCATENATED MODULE: ../shared/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "shared", ...props })
function useSharedI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("shared")
    return (0,react.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const SharedTrans = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ../shared/src/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback langauge in a family of langauges are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts













const languages = {
    en: en_US,
    es: es_ES,
    fa: fa_IR,
    fr: fr_FR,
    it: it_IT,
    ja: ja_JP,
    ko: ko_KR,
    qy: qya_AA,
    ru: ru_RU,
    'zh-CN': zh_CN,
    zh: zh_TW
};
const addSharedI18N = (0,src/* createI18NBundle */.C9)('shared', languages);


/***/ }),

/***/ 34462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Kv": () => (/* reexport */ FormattedAddress),
  "BV": () => (/* reexport */ FormattedBalance),
  "bO": () => (/* reexport */ FormattedCurrency)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ../shared/src/UI/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(70322);
;// CONCATENATED MODULE: ../shared/src/wallet/components.tsx





const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        balance: {
            marginRight: theme.spacing(0.5)
        }
    })
);
const FormattedBalance = (props)=>{
    const { value , decimals , significant , symbol  } = props;
    const formatted = (0,web3_shared_src/* formatBalance */.azF)(value, decimals, significant);
    const classes = (0,custom_ui_helper/* useStylesExtends */.B)(useStyles(), props);
    if (symbol) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.balance,
                children: formatted
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes === null || classes === void 0 ? void 0 : classes.symbol,
                children: symbol
            })
        ]
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: formatted
    }));
};
const FormattedCurrency = ({ value , sign , symbol  })=>{
    const formatted = (0,web3_shared_src/* formatCurrency */.xGv)(value, sign);
    if (symbol) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: `${formatted} ${symbol}`
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: formatted
    }));
};
const FormattedAddress = ({ address , size  })=>{
    if (!address) return null;
    const formatted = (0,web3_shared_src/* formatEthereumAddress */.j8w)(address, size);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: formatted
    }));
};

;// CONCATENATED MODULE: ../shared/src/wallet/index.ts



/***/ }),

/***/ 53377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ SearchableList)
});

// UNUSED EXPORTS: MaskSearchableItemInList

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(90882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.4.6/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(9614);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(30255);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(43801);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../theme/src/makeStyles.ts
var makeStyles = __webpack_require__(15497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/esm/Search.js
var Search = __webpack_require__(17917);
// EXTERNAL MODULE: ../theme/src/constants.ts
var constants = __webpack_require__(10525);
// EXTERNAL MODULE: ../theme/src/Components/SearchableList/MaskSearchableItemInList.tsx
var MaskSearchableItemInList = __webpack_require__(81312);
;// CONCATENATED MODULE: ../theme/src/Components/SearchableList/SearchableList.tsx










/**
 * This component is used to provide a searchable list in Mask design.
 *
 * @example
 * interface IListDate { name: string }
 * const ListItem = ({ name }: IListDate) => <div>{ name }</div>
 * const onSelect = () => {}
 *
 * return (
 *      <SearchableList<IListDate>
 *           onSelect={onSelect}
 *           data={ListData}
 *           searchKey={['name']}
 *           itemRender={ListItem}
 *      />
 * )
 */ function SearchableList({ itemKey , data , placeholder , onSelect , onSearch , searchKey , itemRender , FixedSizeListProps  }) {
    const [keyword, setKeyword] = (0,react.useState)('');
    const { classes  } = useStyles();
    //#region fuse
    const fuse = (0,react.useMemo)(()=>new fuse_esm/* default */.Z(data, {
            shouldSort: true,
            threshold: 0.45,
            minMatchCharLength: 1,
            keys: searchKey !== null && searchKey !== void 0 ? searchKey : Object.keys(data.length > 0 ? data[0] : [])
        })
    , [
        data
    ]);
    //#endregion
    //#region create searched data
    const readyToRenderData = (0,react.useMemo)(()=>{
        if (!keyword) return data;
        const filtered = [
            ...onSearch ? onSearch(data, keyword) : [],
            ...fuse.search(keyword).map((x)=>x.item
            )
        ];
        return itemKey ? (0,uniqBy/* default */.Z)(filtered, (x)=>x[itemKey]
        ) : filtered;
    }, [
        keyword,
        fuse,
        data
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                className: classes.textField,
                placeholder: "Search",
                autoFocus: true,
                fullWidth: true,
                InputProps: {
                    startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                        position: "start",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* default */.Z, {
                        })
                    })
                },
                onChange: (e)=>setKeyword(e.currentTarget.value)
            }),
            placeholder && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                color: "textSecondary",
                children: placeholder
            }),
            !placeholder && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.list,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
                    width: "100%",
                    height: 300,
                    overscanCount: 5,
                    itemSize: 60,
                    itemData: {
                        dataSet: readyToRenderData,
                        onSelect: onSelect
                    },
                    itemCount: readyToRenderData.length,
                    ...FixedSizeListProps,
                    children: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskSearchableItemInList/* MaskSearchableItemInList */.r, {
                            ...props,
                            children: itemRender
                        })
                })
            })
        ]
    }));
}
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            paddingBottom: theme.spacing(4)
        },
        textField: {
            '&>div': {
                borderRadius: theme.spacing(1),
                background: constants/* MaskColorVar.normalBackground */.ZN.normalBackground
            }
        },
        list: {
            marginTop: theme.spacing(1),
            '& > div::-webkit-scrollbar': {
                width: '7px'
            },
            '& > div::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '& > div::-webkit-scrollbar-thumb': {
                borderRadius: '4px',
                backgroundColor: constants/* MaskColorVar.normalBackground */.ZN.normalBackground
            }
        },
        placeholder: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            fontSize: 16
        }
    })
);

;// CONCATENATED MODULE: ../theme/src/Components/SearchableList/index.ts




/***/ }),

/***/ 95197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77224);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__);


function useBlockie(address, options) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const defaultOptions = {
            seed: address,
            color: '#dfe',
            bgcolor: '#aaa'
        };
        try {
            return (0,ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__.create)({
                ...defaultOptions,
                ...options
            }).toDataURL();
        } catch  {
            return '';
        }
    }, [
        address
    ]);
}


/***/ }),

/***/ 64873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			if (chunkId === 1440) return "js/npm.validator.js";
/******/ 			if (chunkId === 2162) return "js/npm.z-schema.js";
/******/ 			if (chunkId === 8000) return "js/npm.lodash.isequal.js";
/******/ 			if (chunkId === 8393) return "js/npm.lodash.get.js";
/******/ 			if (chunkId === 3906) return "js/3906.js";
/******/ 			if (chunkId === 405) return "js/npm.react-feather.js";
/******/ 			if (chunkId === 23) return "js/23.js";
/******/ 			if (chunkId === 404) return "js/404.js";
/******/ 			if (chunkId === 3148) return "js/3148.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","313":"npm.ef-core","855":"npm.json2csv","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1902":"npm-ns.dimensiondev.snapshot.js","2245":"npm.react-highlight-words","2261":"npm.wyvern-js","2598":"npm.react-hook-form","2939":"npm-ns.uniswap.v3-sdk","3294":"npm.date-fns","3322":"npm.color","3850":"npm.arweave","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4462":"npm.text-encoding","4477":"npm.gun","4554":"Plugin/Poll","5049":"Gun","5678":"npm.d3-voronoi","6230":"npm.zod","6316":"npm-ns.msgpack.msgpack","6912":"npm.react-draggable","6948":"ShapeDetection","7015":"npm.d3-transition","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","9278":"npm.axios","9714":"npm.wyvern-schemas"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = typeof browser === 'object'
/******/ 		var runtime = isBrowser ? browser : typeof chrome === 'object' ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var send = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		
/******/ 		var contentScriptLoader = (url, done, chunkId) => {
/******/ 			send({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var normalLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : normalLoader
/******/ 		else if (!isWorker) __webpack_require__.l = contentScriptLoader
/******/ 		else { throw new TypeError('Unreachable loader: content script + Worker') }
/******/ 		
/******/ 	
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 9095;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = typeof browser === 'object'
/******/ 		var runtime = isBrowser ? browser : typeof chrome === 'object' ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			9095: 0,
/******/ 			5519: 0,
/******/ 			3137: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6739,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,2943,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,5732,7201,8894,9340,9166,4655,9632,8883,8405,7367,7988,3193,5629,4194,9443], () => (__webpack_require__(2104)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6739,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,2943,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,5732,7201,8894,9340,9166,4655,9632,8883,8405,7367,7988,3193,5629,4194,9443], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;