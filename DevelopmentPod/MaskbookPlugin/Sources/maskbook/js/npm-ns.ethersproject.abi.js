"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[187],{

/***/ 27090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RQ": () => (/* reexport */ AbiCoder),
  "_R": () => (/* reexport */ fragments_ParamType)
});

// UNUSED EXPORTS: ConstructorFragment, EventFragment, FormatTypes, Fragment, FunctionFragment, Indexed, Interface, LogDescription, TransactionDescription, checkResultErrors, defaultAbiCoder

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.6.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(86133);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/_version.js
const version = "abi/5.0.7";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/fragments.js





const logger = new logger_lib_esm/* Logger */.Yd(version);
;
const _constructorGuard = {};
let ModifiersBytes = { calldata: true, memory: true, storage: true };
let ModifiersNest = { calldata: true, memory: true };
function checkModifier(type, name) {
    if (type === "bytes" || type === "string") {
        if (ModifiersBytes[name]) {
            return true;
        }
    }
    else if (type === "address") {
        if (name === "payable") {
            return true;
        }
    }
    else if (type.indexOf("[") >= 0 || type === "tuple") {
        if (ModifiersNest[name]) {
            return true;
        }
    }
    if (ModifiersBytes[name] || name === "payable") {
        logger.throwArgumentError("invalid modifier", "name", name);
    }
    return false;
}
// @TODO: Make sure that children of an indexed tuple are marked with a null indexed
function parseParamType(param, allowIndexed) {
    let originalParam = param;
    function throwError(i) {
        logger.throwArgumentError(`unexpected character at position ${i}`, "param", param);
    }
    param = param.replace(/\s/g, " ");
    function newNode(parent) {
        let node = { type: "", name: "", parent: parent, state: { allowType: true } };
        if (allowIndexed) {
            node.indexed = false;
        }
        return node;
    }
    let parent = { type: "", name: "", state: { allowType: true } };
    let node = parent;
    for (let i = 0; i < param.length; i++) {
        let c = param[i];
        switch (c) {
            case "(":
                if (node.state.allowType && node.type === "") {
                    node.type = "tuple";
                }
                else if (!node.state.allowParams) {
                    throwError(i);
                }
                node.state.allowType = false;
                node.type = verifyType(node.type);
                node.components = [newNode(node)];
                node = node.components[0];
                break;
            case ")":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let child = node;
                node = node.parent;
                if (!node) {
                    throwError(i);
                }
                delete child.parent;
                node.state.allowParams = false;
                node.state.allowName = true;
                node.state.allowArray = true;
                break;
            case ",":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let sibling = newNode(node.parent);
                //{ type: "", name: "", parent: node.parent, state: { allowType: true } };
                node.parent.components.push(sibling);
                delete node.parent;
                node = sibling;
                break;
            // Hit a space...
            case " ":
                // If reading type, the type is done and may read a param or name
                if (node.state.allowType) {
                    if (node.type !== "") {
                        node.type = verifyType(node.type);
                        delete node.state.allowType;
                        node.state.allowName = true;
                        node.state.allowParams = true;
                    }
                }
                // If reading name, the name is done
                if (node.state.allowName) {
                    if (node.name !== "") {
                        if (node.name === "indexed") {
                            if (!allowIndexed) {
                                throwError(i);
                            }
                            if (node.indexed) {
                                throwError(i);
                            }
                            node.indexed = true;
                            node.name = "";
                        }
                        else if (checkModifier(node.type, node.name)) {
                            node.name = "";
                        }
                        else {
                            node.state.allowName = false;
                        }
                    }
                }
                break;
            case "[":
                if (!node.state.allowArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.allowArray = false;
                node.state.allowName = false;
                node.state.readArray = true;
                break;
            case "]":
                if (!node.state.readArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.readArray = false;
                node.state.allowArray = true;
                node.state.allowName = true;
                break;
            default:
                if (node.state.allowType) {
                    node.type += c;
                    node.state.allowParams = true;
                    node.state.allowArray = true;
                }
                else if (node.state.allowName) {
                    node.name += c;
                    delete node.state.allowArray;
                }
                else if (node.state.readArray) {
                    node.type += c;
                }
                else {
                    throwError(i);
                }
        }
    }
    if (node.parent) {
        logger.throwArgumentError("unexpected eof", "param", param);
    }
    delete parent.state;
    if (node.name === "indexed") {
        if (!allowIndexed) {
            throwError(originalParam.length - 7);
        }
        if (node.indexed) {
            throwError(originalParam.length - 7);
        }
        node.indexed = true;
        node.name = "";
    }
    else if (checkModifier(node.type, node.name)) {
        node.name = "";
    }
    parent.type = verifyType(parent.type);
    return parent;
}
function populate(object, params) {
    for (let key in params) {
        (0,lib_esm/* defineReadOnly */.zG)(object, key, params[key]);
    }
}
const fragments_FormatTypes = Object.freeze({
    // Bare formatting, as is needed for computing a sighash of an event or function
    sighash: "sighash",
    // Human-Readable with Minimal spacing and without names (compact human-readable)
    minimal: "minimal",
    // Human-Readble with nice spacing, including all names
    full: "full",
    // JSON-format a la Solidity
    json: "json"
});
const paramTypeArray = new RegExp(/^(.*)\[([0-9]*)\]$/);
class fragments_ParamType {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use fromString", logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "new ParamType()"
            });
        }
        populate(this, params);
        let match = this.type.match(paramTypeArray);
        if (match) {
            populate(this, {
                arrayLength: parseInt(match[2] || "-1"),
                arrayChildren: fragments_ParamType.fromObject({
                    type: match[1],
                    components: this.components
                }),
                baseType: "array"
            });
        }
        else {
            populate(this, {
                arrayLength: null,
                arrayChildren: null,
                baseType: ((this.components != null) ? "tuple" : this.type)
            });
        }
        this._isParamType = true;
        Object.freeze(this);
    }
    // Format the parameter fragment
    //   - sighash: "(uint256,address)"
    //   - minimal: "tuple(uint256,address) indexed"
    //   - full:    "tuple(uint256 foo, addres bar) indexed baz"
    format(format) {
        if (!format) {
            format = fragments_FormatTypes.sighash;
        }
        if (!fragments_FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === fragments_FormatTypes.json) {
            let result = {
                type: ((this.baseType === "tuple") ? "tuple" : this.type),
                name: (this.name || undefined)
            };
            if (typeof (this.indexed) === "boolean") {
                result.indexed = this.indexed;
            }
            if (this.components) {
                result.components = this.components.map((comp) => JSON.parse(comp.format(format)));
            }
            return JSON.stringify(result);
        }
        let result = "";
        // Array
        if (this.baseType === "array") {
            result += this.arrayChildren.format(format);
            result += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]";
        }
        else {
            if (this.baseType === "tuple") {
                if (format !== fragments_FormatTypes.sighash) {
                    result += this.type;
                }
                result += "(" + this.components.map((comp) => comp.format(format)).join((format === fragments_FormatTypes.full) ? ", " : ",") + ")";
            }
            else {
                result += this.type;
            }
        }
        if (format !== fragments_FormatTypes.sighash) {
            if (this.indexed === true) {
                result += " indexed";
            }
            if (format === fragments_FormatTypes.full && this.name) {
                result += " " + this.name;
            }
        }
        return result;
    }
    static from(value, allowIndexed) {
        if (typeof (value) === "string") {
            return fragments_ParamType.fromString(value, allowIndexed);
        }
        return fragments_ParamType.fromObject(value);
    }
    static fromObject(value) {
        if (fragments_ParamType.isParamType(value)) {
            return value;
        }
        return new fragments_ParamType(_constructorGuard, {
            name: (value.name || null),
            type: verifyType(value.type),
            indexed: ((value.indexed == null) ? null : !!value.indexed),
            components: (value.components ? value.components.map(fragments_ParamType.fromObject) : null)
        });
    }
    static fromString(value, allowIndexed) {
        function ParamTypify(node) {
            return fragments_ParamType.fromObject({
                name: node.name,
                type: node.type,
                indexed: node.indexed,
                components: node.components
            });
        }
        return ParamTypify(parseParamType(value, !!allowIndexed));
    }
    static isParamType(value) {
        return !!(value != null && value._isParamType);
    }
}
;
function parseParams(value, allowIndex) {
    return splitNesting(value).map((param) => fragments_ParamType.fromString(param, allowIndex));
}
class fragments_Fragment {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use a static from method", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new Fragment()"
            });
        }
        populate(this, params);
        this._isFragment = true;
        Object.freeze(this);
    }
    static from(value) {
        if (fragments_Fragment.isFragment(value)) {
            return value;
        }
        if (typeof (value) === "string") {
            return fragments_Fragment.fromString(value);
        }
        return fragments_Fragment.fromObject(value);
    }
    static fromObject(value) {
        if (fragments_Fragment.isFragment(value)) {
            return value;
        }
        switch (value.type) {
            case "function":
                return fragments_FunctionFragment.fromObject(value);
            case "event":
                return fragments_EventFragment.fromObject(value);
            case "constructor":
                return fragments_ConstructorFragment.fromObject(value);
            case "fallback":
            case "receive":
                // @TODO: Something? Maybe return a FunctionFragment? A custom DefaultFunctionFragment?
                return null;
        }
        return logger.throwArgumentError("invalid fragment object", "value", value);
    }
    static fromString(value) {
        // Make sure the "returns" is surrounded by a space and all whitespace is exactly one space
        value = value.replace(/\s/g, " ");
        value = value.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ");
        value = value.trim();
        if (value.split(" ")[0] === "event") {
            return fragments_EventFragment.fromString(value.substring(5).trim());
        }
        else if (value.split(" ")[0] === "function") {
            return fragments_FunctionFragment.fromString(value.substring(8).trim());
        }
        else if (value.split("(")[0].trim() === "constructor") {
            return fragments_ConstructorFragment.fromString(value.trim());
        }
        return logger.throwArgumentError("unsupported fragment", "value", value);
    }
    static isFragment(value) {
        return !!(value && value._isFragment);
    }
}
class fragments_EventFragment extends (/* unused pure expression or super */ null && (fragments_Fragment)) {
    format(format) {
        if (!format) {
            format = fragments_FormatTypes.sighash;
        }
        if (!fragments_FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === fragments_FormatTypes.json) {
            return JSON.stringify({
                type: "event",
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        let result = "";
        if (format !== fragments_FormatTypes.sighash) {
            result += "event ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === fragments_FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== fragments_FormatTypes.sighash) {
            if (this.anonymous) {
                result += "anonymous ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return fragments_EventFragment.fromString(value);
        }
        return fragments_EventFragment.fromObject(value);
    }
    static fromObject(value) {
        if (fragments_EventFragment.isEventFragment(value)) {
            return value;
        }
        if (value.type !== "event") {
            logger.throwArgumentError("invalid event object", "value", value);
        }
        const params = {
            name: verifyIdentifier(value.name),
            anonymous: value.anonymous,
            inputs: (value.inputs ? value.inputs.map(fragments_ParamType.fromObject) : []),
            type: "event"
        };
        return new fragments_EventFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let match = value.match(regexParen);
        if (!match) {
            logger.throwArgumentError("invalid event string", "value", value);
        }
        let anonymous = false;
        match[3].split(" ").forEach((modifier) => {
            switch (modifier.trim()) {
                case "anonymous":
                    anonymous = true;
                    break;
                case "":
                    break;
                default:
                    logger.warn("unknown modifier: " + modifier);
            }
        });
        return fragments_EventFragment.fromObject({
            name: match[1].trim(),
            anonymous: anonymous,
            inputs: parseParams(match[2], true),
            type: "event"
        });
    }
    static isEventFragment(value) {
        return (value && value._isFragment && value.type === "event");
    }
}
function parseGas(value, params) {
    params.gas = null;
    let comps = value.split("@");
    if (comps.length !== 1) {
        if (comps.length > 2) {
            logger.throwArgumentError("invalid human-readable ABI signature", "value", value);
        }
        if (!comps[1].match(/^[0-9]+$/)) {
            logger.throwArgumentError("invalid human-readable ABI signature gas", "value", value);
        }
        params.gas = BigNumber.from(comps[1]);
        return comps[0];
    }
    return value;
}
function parseModifiers(value, params) {
    params.constant = false;
    params.payable = false;
    params.stateMutability = "nonpayable";
    value.split(" ").forEach((modifier) => {
        switch (modifier.trim()) {
            case "constant":
                params.constant = true;
                break;
            case "payable":
                params.payable = true;
                params.stateMutability = "payable";
                break;
            case "nonpayable":
                params.payable = false;
                params.stateMutability = "nonpayable";
                break;
            case "pure":
                params.constant = true;
                params.stateMutability = "pure";
                break;
            case "view":
                params.constant = true;
                params.stateMutability = "view";
                break;
            case "external":
            case "public":
            case "":
                break;
            default:
                console.log("unknown modifier: " + modifier);
        }
    });
}
function verifyState(value) {
    let result = {
        constant: false,
        payable: true,
        stateMutability: "payable"
    };
    if (value.stateMutability != null) {
        result.stateMutability = value.stateMutability;
        // Set (and check things are consistent) the constant property
        result.constant = (result.stateMutability === "view" || result.stateMutability === "pure");
        if (value.constant != null) {
            if ((!!value.constant) !== result.constant) {
                logger.throwArgumentError("cannot have constant function with mutability " + result.stateMutability, "value", value);
            }
        }
        // Set (and check things are consistent) the payable property
        result.payable = (result.stateMutability === "payable");
        if (value.payable != null) {
            if ((!!value.payable) !== result.payable) {
                logger.throwArgumentError("cannot have payable function with mutability " + result.stateMutability, "value", value);
            }
        }
    }
    else if (value.payable != null) {
        result.payable = !!value.payable;
        // If payable we can assume non-constant; otherwise we can't assume
        if (value.constant == null && !result.payable && value.type !== "constructor") {
            logger.throwArgumentError("unable to determine stateMutability", "value", value);
        }
        result.constant = !!value.constant;
        if (result.constant) {
            result.stateMutability = "view";
        }
        else {
            result.stateMutability = (result.payable ? "payable" : "nonpayable");
        }
        if (result.payable && result.constant) {
            logger.throwArgumentError("cannot have constant payable function", "value", value);
        }
    }
    else if (value.constant != null) {
        result.constant = !!value.constant;
        result.payable = !result.constant;
        result.stateMutability = (result.constant ? "view" : "payable");
    }
    else if (value.type !== "constructor") {
        logger.throwArgumentError("unable to determine stateMutability", "value", value);
    }
    return result;
}
class fragments_ConstructorFragment extends (/* unused pure expression or super */ null && (fragments_Fragment)) {
    format(format) {
        if (!format) {
            format = fragments_FormatTypes.sighash;
        }
        if (!fragments_FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === fragments_FormatTypes.json) {
            return JSON.stringify({
                type: "constructor",
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payble: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        if (format === fragments_FormatTypes.sighash) {
            logger.throwError("cannot format a constructor for sighash", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "format(sighash)"
            });
        }
        let result = "constructor(" + this.inputs.map((input) => input.format(format)).join((format === fragments_FormatTypes.full) ? ", " : ",") + ") ";
        if (this.stateMutability && this.stateMutability !== "nonpayable") {
            result += this.stateMutability + " ";
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return fragments_ConstructorFragment.fromString(value);
        }
        return fragments_ConstructorFragment.fromObject(value);
    }
    static fromObject(value) {
        if (fragments_ConstructorFragment.isConstructorFragment(value)) {
            return value;
        }
        if (value.type !== "constructor") {
            logger.throwArgumentError("invalid constructor object", "value", value);
        }
        let state = verifyState(value);
        if (state.constant) {
            logger.throwArgumentError("constructor cannot be constant", "value", value);
        }
        const params = {
            name: null,
            type: value.type,
            inputs: (value.inputs ? value.inputs.map(fragments_ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? BigNumber.from(value.gas) : null)
        };
        return new fragments_ConstructorFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "constructor" };
        value = parseGas(value, params);
        let parens = value.match(regexParen);
        if (!parens || parens[1].trim() !== "constructor") {
            logger.throwArgumentError("invalid constructor string", "value", value);
        }
        params.inputs = parseParams(parens[2].trim(), false);
        parseModifiers(parens[3].trim(), params);
        return fragments_ConstructorFragment.fromObject(params);
    }
    static isConstructorFragment(value) {
        return (value && value._isFragment && value.type === "constructor");
    }
}
class fragments_FunctionFragment extends (/* unused pure expression or super */ null && (fragments_ConstructorFragment)) {
    format(format) {
        if (!format) {
            format = fragments_FormatTypes.sighash;
        }
        if (!fragments_FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === fragments_FormatTypes.json) {
            return JSON.stringify({
                type: "function",
                name: this.name,
                constant: this.constant,
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payble: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format))),
                ouputs: this.outputs.map((output) => JSON.parse(output.format(format))),
            });
        }
        let result = "";
        if (format !== fragments_FormatTypes.sighash) {
            result += "function ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === fragments_FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== fragments_FormatTypes.sighash) {
            if (this.stateMutability) {
                if (this.stateMutability !== "nonpayable") {
                    result += (this.stateMutability + " ");
                }
            }
            else if (this.constant) {
                result += "view ";
            }
            if (this.outputs && this.outputs.length) {
                result += "returns (" + this.outputs.map((output) => output.format(format)).join(", ") + ") ";
            }
            if (this.gas != null) {
                result += "@" + this.gas.toString() + " ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return fragments_FunctionFragment.fromString(value);
        }
        return fragments_FunctionFragment.fromObject(value);
    }
    static fromObject(value) {
        if (fragments_FunctionFragment.isFunctionFragment(value)) {
            return value;
        }
        if (value.type !== "function") {
            logger.throwArgumentError("invalid function object", "value", value);
        }
        let state = verifyState(value);
        const params = {
            type: value.type,
            name: verifyIdentifier(value.name),
            constant: state.constant,
            inputs: (value.inputs ? value.inputs.map(fragments_ParamType.fromObject) : []),
            outputs: (value.outputs ? value.outputs.map(fragments_ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? BigNumber.from(value.gas) : null)
        };
        return new fragments_FunctionFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "function" };
        value = parseGas(value, params);
        let comps = value.split(" returns ");
        if (comps.length > 2) {
            logger.throwArgumentError("invalid function string", "value", value);
        }
        let parens = comps[0].match(regexParen);
        if (!parens) {
            logger.throwArgumentError("invalid function signature", "value", value);
        }
        params.name = parens[1].trim();
        if (params.name) {
            verifyIdentifier(params.name);
        }
        params.inputs = parseParams(parens[2], false);
        parseModifiers(parens[3].trim(), params);
        // We have outputs
        if (comps.length > 1) {
            let returns = comps[1].match(regexParen);
            if (returns[1].trim() != "" || returns[3].trim() != "") {
                logger.throwArgumentError("unexpected tokens", "value", value);
            }
            params.outputs = parseParams(returns[2], false);
        }
        else {
            params.outputs = [];
        }
        return fragments_FunctionFragment.fromObject(params);
    }
    static isFunctionFragment(value) {
        return (value && value._isFragment && value.type === "function");
    }
}
//export class ErrorFragment extends Fragment {
//}
//export class StructFragment extends Fragment {
//}
function verifyType(type) {
    // These need to be transformed to their full description
    if (type.match(/^uint($|[^1-9])/)) {
        type = "uint256" + type.substring(4);
    }
    else if (type.match(/^int($|[^1-9])/)) {
        type = "int256" + type.substring(3);
    }
    // @TODO: more verification
    return type;
}
const regexIdentifier = (/* unused pure expression or super */ null && (new RegExp("^[A-Za-z_][A-Za-z0-9_]*$")));
function verifyIdentifier(value) {
    if (!value || !value.match(regexIdentifier)) {
        logger.throwArgumentError(`invalid identifier "${value}"`, "value", value);
    }
    return value;
}
const regexParen = (/* unused pure expression or super */ null && (new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")));
function splitNesting(value) {
    value = value.trim();
    let result = [];
    let accum = "";
    let depth = 0;
    for (let offset = 0; offset < value.length; offset++) {
        let c = value[offset];
        if (c === "," && depth === 0) {
            result.push(accum);
            accum = "";
        }
        else {
            accum += c;
            if (c === "(") {
                depth++;
            }
            else if (c === ")") {
                depth--;
                if (depth === -1) {
                    logger.throwArgumentError("unbalanced parenthesis", "value", value);
                }
            }
        }
    }
    if (accum) {
        result.push(accum);
    }
    return result;
}
//# sourceMappingURL=fragments.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.6.1/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var bytes_lib_esm = __webpack_require__(99376);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.6.0/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js + 1 modules
var bignumber = __webpack_require__(39554);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js






const abstract_coder_logger = new logger_lib_esm/* Logger */.Yd(version);
function checkResultErrors(result) {
    // Find the first error (if any)
    const errors = [];
    const checkErrors = function (path, object) {
        if (!Array.isArray(object)) {
            return;
        }
        for (let key in object) {
            const childPath = path.slice();
            childPath.push(key);
            try {
                checkErrors(childPath, object[key]);
            }
            catch (error) {
                errors.push({ path: childPath, error: error });
            }
        }
    };
    checkErrors([], result);
    return errors;
}
class Coder {
    constructor(name, type, localName, dynamic) {
        // @TODO: defineReadOnly these
        this.name = name;
        this.type = type;
        this.localName = localName;
        this.dynamic = dynamic;
    }
    _throwError(message, value) {
        abstract_coder_logger.throwArgumentError(message, this.localName, value);
    }
}
class Writer {
    constructor(wordSize) {
        (0,lib_esm/* defineReadOnly */.zG)(this, "wordSize", wordSize || 32);
        this._data = [];
        this._dataLength = 0;
        this._padding = new Uint8Array(wordSize);
    }
    get data() {
        return (0,bytes_lib_esm/* hexConcat */.xs)(this._data);
    }
    get length() { return this._dataLength; }
    _writeData(data) {
        this._data.push(data);
        this._dataLength += data.length;
        return data.length;
    }
    appendWriter(writer) {
        return this._writeData((0,bytes_lib_esm/* concat */.zo)(writer._data));
    }
    // Arrayish items; padded on the right to wordSize
    writeBytes(value) {
        let bytes = (0,bytes_lib_esm/* arrayify */.lE)(value);
        const paddingOffset = bytes.length % this.wordSize;
        if (paddingOffset) {
            bytes = (0,bytes_lib_esm/* concat */.zo)([bytes, this._padding.slice(paddingOffset)]);
        }
        return this._writeData(bytes);
    }
    _getValue(value) {
        let bytes = (0,bytes_lib_esm/* arrayify */.lE)(bignumber/* BigNumber.from */.O$.from(value));
        if (bytes.length > this.wordSize) {
            abstract_coder_logger.throwError("value out-of-bounds", logger_lib_esm/* Logger.errors.BUFFER_OVERRUN */.Yd.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: bytes.length
            });
        }
        if (bytes.length % this.wordSize) {
            bytes = (0,bytes_lib_esm/* concat */.zo)([this._padding.slice(bytes.length % this.wordSize), bytes]);
        }
        return bytes;
    }
    // BigNumberish items; padded on the left to wordSize
    writeValue(value) {
        return this._writeData(this._getValue(value));
    }
    writeUpdatableValue() {
        const offset = this._data.length;
        this._data.push(this._padding);
        this._dataLength += this.wordSize;
        return (value) => {
            this._data[offset] = this._getValue(value);
        };
    }
}
class Reader {
    constructor(data, wordSize, coerceFunc, allowLoose) {
        (0,lib_esm/* defineReadOnly */.zG)(this, "_data", (0,bytes_lib_esm/* arrayify */.lE)(data));
        (0,lib_esm/* defineReadOnly */.zG)(this, "wordSize", wordSize || 32);
        (0,lib_esm/* defineReadOnly */.zG)(this, "_coerceFunc", coerceFunc);
        (0,lib_esm/* defineReadOnly */.zG)(this, "allowLoose", allowLoose);
        this._offset = 0;
    }
    get data() { return (0,bytes_lib_esm/* hexlify */.Dv)(this._data); }
    get consumed() { return this._offset; }
    // The default Coerce function
    static coerce(name, value) {
        let match = name.match("^u?int([0-9]+)$");
        if (match && parseInt(match[1]) <= 48) {
            value = value.toNumber();
        }
        return value;
    }
    coerce(name, value) {
        if (this._coerceFunc) {
            return this._coerceFunc(name, value);
        }
        return Reader.coerce(name, value);
    }
    _peekBytes(offset, length, loose) {
        let alignedLength = Math.ceil(length / this.wordSize) * this.wordSize;
        if (this._offset + alignedLength > this._data.length) {
            if (this.allowLoose && loose && this._offset + length <= this._data.length) {
                alignedLength = length;
            }
            else {
                abstract_coder_logger.throwError("data out-of-bounds", logger_lib_esm/* Logger.errors.BUFFER_OVERRUN */.Yd.errors.BUFFER_OVERRUN, {
                    length: this._data.length,
                    offset: this._offset + alignedLength
                });
            }
        }
        return this._data.slice(this._offset, this._offset + alignedLength);
    }
    subReader(offset) {
        return new Reader(this._data.slice(this._offset + offset), this.wordSize, this._coerceFunc, this.allowLoose);
    }
    readBytes(length, loose) {
        let bytes = this._peekBytes(0, length, !!loose);
        this._offset += bytes.length;
        // @TODO: Make sure the length..end bytes are all 0?
        return bytes.slice(0, length);
    }
    readValue() {
        return bignumber/* BigNumber.from */.O$.from(this.readBytes(this.wordSize));
    }
}
//# sourceMappingURL=abstract-coder.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+address@5.4.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var address_lib_esm = __webpack_require__(99747);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/address.js




class AddressCoder extends Coder {
    constructor(localName) {
        super("address", "address", localName, false);
    }
    encode(writer, value) {
        try {
            (0,address_lib_esm.getAddress)(value);
        }
        catch (error) {
            this._throwError(error.message, value);
        }
        return writer.writeValue(value);
    }
    decode(reader) {
        return (0,address_lib_esm.getAddress)((0,bytes_lib_esm/* hexZeroPad */.$m)(reader.readValue().toHexString(), 20));
    }
}
//# sourceMappingURL=address.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js


// Clones the functionality of an existing Coder, but without a localName
class AnonymousCoder extends Coder {
    constructor(coder) {
        super(coder.name, coder.type, undefined, coder.dynamic);
        this.coder = coder;
    }
    encode(writer, value) {
        return this.coder.encode(writer, value);
    }
    decode(reader) {
        return this.coder.decode(reader);
    }
}
//# sourceMappingURL=anonymous.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/array.js



const array_logger = new logger_lib_esm/* Logger */.Yd(version);


function pack(writer, coders, values) {
    let arrayValues = null;
    if (Array.isArray(values)) {
        arrayValues = values;
    }
    else if (values && typeof (values) === "object") {
        let unique = {};
        arrayValues = coders.map((coder) => {
            const name = coder.localName;
            if (!name) {
                array_logger.throwError("cannot encode object for signature with missing names", logger_lib_esm/* Logger.errors.INVALID_ARGUMENT */.Yd.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            if (unique[name]) {
                array_logger.throwError("cannot encode object for signature with duplicate names", logger_lib_esm/* Logger.errors.INVALID_ARGUMENT */.Yd.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            unique[name] = true;
            return values[name];
        });
    }
    else {
        array_logger.throwArgumentError("invalid tuple value", "tuple", values);
    }
    if (coders.length !== arrayValues.length) {
        array_logger.throwArgumentError("types/value length mismatch", "tuple", values);
    }
    let staticWriter = new Writer(writer.wordSize);
    let dynamicWriter = new Writer(writer.wordSize);
    let updateFuncs = [];
    coders.forEach((coder, index) => {
        let value = arrayValues[index];
        if (coder.dynamic) {
            // Get current dynamic offset (for the future pointer)
            let dynamicOffset = dynamicWriter.length;
            // Encode the dynamic value into the dynamicWriter
            coder.encode(dynamicWriter, value);
            // Prepare to populate the correct offset once we are done
            let updateFunc = staticWriter.writeUpdatableValue();
            updateFuncs.push((baseOffset) => {
                updateFunc(baseOffset + dynamicOffset);
            });
        }
        else {
            coder.encode(staticWriter, value);
        }
    });
    // Backfill all the dynamic offsets, now that we know the static length
    updateFuncs.forEach((func) => { func(staticWriter.length); });
    let length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
}
function unpack(reader, coders) {
    let values = [];
    // A reader anchored to this base
    let baseReader = reader.subReader(0);
    coders.forEach((coder) => {
        let value = null;
        if (coder.dynamic) {
            let offset = reader.readValue();
            let offsetReader = baseReader.subReader(offset.toNumber());
            try {
                value = coder.decode(offsetReader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === logger_lib_esm/* Logger.errors.BUFFER_OVERRUN */.Yd.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        else {
            try {
                value = coder.decode(reader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === logger_lib_esm/* Logger.errors.BUFFER_OVERRUN */.Yd.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        if (value != undefined) {
            values.push(value);
        }
    });
    // We only output named properties for uniquely named coders
    const uniqueNames = coders.reduce((accum, coder) => {
        const name = coder.localName;
        if (name) {
            if (!accum[name]) {
                accum[name] = 0;
            }
            accum[name]++;
        }
        return accum;
    }, {});
    // Add any named parameters (i.e. tuples)
    coders.forEach((coder, index) => {
        let name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
            return;
        }
        if (name === "length") {
            name = "_length";
        }
        if (values[name] != null) {
            return;
        }
        const value = values[index];
        if (value instanceof Error) {
            Object.defineProperty(values, name, {
                get: () => { throw value; }
            });
        }
        else {
            values[name] = value;
        }
    });
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (value instanceof Error) {
            Object.defineProperty(values, i, {
                get: () => { throw value; }
            });
        }
    }
    return Object.freeze(values);
}
class ArrayCoder extends Coder {
    constructor(coder, length, localName) {
        const type = (coder.type + "[" + (length >= 0 ? length : "") + "]");
        const dynamic = (length === -1 || coder.dynamic);
        super("array", type, localName, dynamic);
        this.coder = coder;
        this.length = length;
    }
    encode(writer, value) {
        if (!Array.isArray(value)) {
            this._throwError("expected array value", value);
        }
        let count = this.length;
        if (count === -1) {
            count = value.length;
            writer.writeValue(value.length);
        }
        array_logger.checkArgumentCount(value.length, count, "coder array" + (this.localName ? (" " + this.localName) : ""));
        let coders = [];
        for (let i = 0; i < value.length; i++) {
            coders.push(this.coder);
        }
        return pack(writer, coders, value);
    }
    decode(reader) {
        let count = this.length;
        if (count === -1) {
            count = reader.readValue().toNumber();
        }
        let coders = [];
        for (let i = 0; i < count; i++) {
            coders.push(new AnonymousCoder(this.coder));
        }
        return reader.coerce(this.name, unpack(reader, coders));
    }
}
//# sourceMappingURL=array.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/boolean.js


class BooleanCoder extends Coder {
    constructor(localName) {
        super("bool", "bool", localName, false);
    }
    encode(writer, value) {
        return writer.writeValue(value ? 1 : 0);
    }
    decode(reader) {
        return reader.coerce(this.type, !reader.readValue().isZero());
    }
}
//# sourceMappingURL=boolean.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/bytes.js



class DynamicBytesCoder extends Coder {
    constructor(type, localName) {
        super(type, type, localName, true);
    }
    encode(writer, value) {
        value = (0,bytes_lib_esm/* arrayify */.lE)(value);
        let length = writer.writeValue(value.length);
        length += writer.writeBytes(value);
        return length;
    }
    decode(reader) {
        return reader.readBytes(reader.readValue().toNumber(), true);
    }
}
class BytesCoder extends DynamicBytesCoder {
    constructor(localName) {
        super("bytes", localName);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,bytes_lib_esm/* hexlify */.Dv)(super.decode(reader)));
    }
}
//# sourceMappingURL=bytes.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js



// @TODO: Merge this with bytes
class FixedBytesCoder extends Coder {
    constructor(size, localName) {
        let name = "bytes" + String(size);
        super(name, name, localName, false);
        this.size = size;
    }
    encode(writer, value) {
        let data = (0,bytes_lib_esm/* arrayify */.lE)(value);
        if (data.length !== this.size) {
            this._throwError("incorrect data length", value);
        }
        return writer.writeBytes(data);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,bytes_lib_esm/* hexlify */.Dv)(reader.readBytes(this.size)));
    }
}
//# sourceMappingURL=fixed-bytes.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/null.js


class NullCoder extends Coder {
    constructor(localName) {
        super("null", "", localName, false);
    }
    encode(writer, value) {
        if (value != null) {
            this._throwError("not null", value);
        }
        return writer.writeBytes([]);
    }
    decode(reader) {
        reader.readBytes(0);
        return reader.coerce(this.name, null);
    }
}
//# sourceMappingURL=null.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.6.0/node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(21121);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/number.js




class NumberCoder extends Coder {
    constructor(size, signed, localName) {
        const name = ((signed ? "int" : "uint") + (size * 8));
        super(name, name, localName, false);
        this.size = size;
        this.signed = signed;
    }
    encode(writer, value) {
        let v = bignumber/* BigNumber.from */.O$.from(value);
        // Check bounds are safe for encoding
        let maxUintValue = bignumbers/* MaxUint256.mask */.Bz.mask(writer.wordSize * 8);
        if (this.signed) {
            let bounds = maxUintValue.mask(this.size * 8 - 1);
            if (v.gt(bounds) || v.lt(bounds.add(bignumbers/* One */.fh).mul(bignumbers/* NegativeOne */.tL))) {
                this._throwError("value out-of-bounds", value);
            }
        }
        else if (v.lt(bignumbers/* Zero */._Y) || v.gt(maxUintValue.mask(this.size * 8))) {
            this._throwError("value out-of-bounds", value);
        }
        v = v.toTwos(this.size * 8).mask(this.size * 8);
        if (this.signed) {
            v = v.fromTwos(this.size * 8).toTwos(8 * writer.wordSize);
        }
        return writer.writeValue(v);
    }
    decode(reader) {
        let value = reader.readValue().mask(this.size * 8);
        if (this.signed) {
            value = value.fromTwos(this.size * 8);
        }
        return reader.coerce(this.name, value);
    }
}
//# sourceMappingURL=number.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+strings@5.6.0/node_modules/@ethersproject/strings/lib.esm/utf8.js + 1 modules
var utf8 = __webpack_require__(75276);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/string.js



class StringCoder extends DynamicBytesCoder {
    constructor(localName) {
        super("string", localName);
    }
    encode(writer, value) {
        return super.encode(writer, (0,utf8/* toUtf8Bytes */.Y0)(value));
    }
    decode(reader) {
        return (0,utf8/* toUtf8String */.ZN)(super.decode(reader));
    }
}
//# sourceMappingURL=string.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/coders/tuple.js



class TupleCoder extends Coder {
    constructor(coders, localName) {
        let dynamic = false;
        const types = [];
        coders.forEach((coder) => {
            if (coder.dynamic) {
                dynamic = true;
            }
            types.push(coder.type);
        });
        const type = ("tuple(" + types.join(",") + ")");
        super("tuple", type, localName, dynamic);
        this.coders = coders;
    }
    encode(writer, value) {
        return pack(writer, this.coders, value);
    }
    decode(reader) {
        return reader.coerce(this.name, unpack(reader, this.coders));
    }
}
//# sourceMappingURL=tuple.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/abi-coder.js

// See: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI




const abi_coder_logger = new logger_lib_esm/* Logger */.Yd(version);











const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
class AbiCoder {
    constructor(coerceFunc) {
        abi_coder_logger.checkNew(new.target, AbiCoder);
        (0,lib_esm/* defineReadOnly */.zG)(this, "coerceFunc", coerceFunc || null);
    }
    _getCoder(param) {
        switch (param.baseType) {
            case "address":
                return new AddressCoder(param.name);
            case "bool":
                return new BooleanCoder(param.name);
            case "string":
                return new StringCoder(param.name);
            case "bytes":
                return new BytesCoder(param.name);
            case "array":
                return new ArrayCoder(this._getCoder(param.arrayChildren), param.arrayLength, param.name);
            case "tuple":
                return new TupleCoder((param.components || []).map((component) => {
                    return this._getCoder(component);
                }), param.name);
            case "":
                return new NullCoder(param.name);
        }
        // u?int[0-9]*
        let match = param.type.match(paramTypeNumber);
        if (match) {
            let size = parseInt(match[2] || "256");
            if (size === 0 || size > 256 || (size % 8) !== 0) {
                abi_coder_logger.throwArgumentError("invalid " + match[1] + " bit length", "param", param);
            }
            return new NumberCoder(size / 8, (match[1] === "int"), param.name);
        }
        // bytes[0-9]+
        match = param.type.match(paramTypeBytes);
        if (match) {
            let size = parseInt(match[1]);
            if (size === 0 || size > 32) {
                abi_coder_logger.throwArgumentError("invalid bytes length", "param", param);
            }
            return new FixedBytesCoder(size, param.name);
        }
        return abi_coder_logger.throwArgumentError("invalid type", "type", param.type);
    }
    _getWordSize() { return 32; }
    _getReader(data, allowLoose) {
        return new Reader(data, this._getWordSize(), this.coerceFunc, allowLoose);
    }
    _getWriter() {
        return new Writer(this._getWordSize());
    }
    encode(types, values) {
        if (types.length !== values.length) {
            abi_coder_logger.throwError("types/values length mismatch", logger_lib_esm/* Logger.errors.INVALID_ARGUMENT */.Yd.errors.INVALID_ARGUMENT, {
                count: { types: types.length, values: values.length },
                value: { types: types, values: values }
            });
        }
        const coders = types.map((type) => this._getCoder(fragments_ParamType.from(type)));
        const coder = (new TupleCoder(coders, "_"));
        const writer = this._getWriter();
        coder.encode(writer, values);
        return writer.data;
    }
    decode(types, data, loose) {
        const coders = types.map((type) => this._getCoder(fragments_ParamType.from(type)));
        const coder = new TupleCoder(coders, "_");
        return coder.decode(this._getReader((0,bytes_lib_esm/* arrayify */.lE)(data), loose));
    }
}
const abi_coder_defaultAbiCoder = new AbiCoder();
//# sourceMappingURL=abi-coder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/interface.js












const interface_logger = new logger_lib_esm/* Logger */.Yd(version);

class LogDescription extends (/* unused pure expression or super */ null && (Description)) {
}
class TransactionDescription extends (/* unused pure expression or super */ null && (Description)) {
}
class Indexed extends (/* unused pure expression or super */ null && (Description)) {
    static isIndexed(value) {
        return !!(value && value._isIndexed);
    }
}
function wrapAccessError(property, error) {
    const wrap = new Error(`deferred error during ABI decoding triggered accessing ${property}`);
    wrap.error = error;
    return wrap;
}
/*
function checkNames(fragment: Fragment, type: "input" | "output", params: Array<ParamType>): void {
    params.reduce((accum, param) => {
        if (param.name) {
            if (accum[param.name]) {
                logger.throwArgumentError(`duplicate ${ type } parameter ${ JSON.stringify(param.name) } in ${ fragment.format("full") }`, "fragment", fragment);
            }
            accum[param.name] = true;
        }
        return accum;
    }, <{ [ name: string ]: boolean }>{ });
}
*/
class Interface {
    constructor(fragments) {
        interface_logger.checkNew(new.target, Interface);
        let abi = [];
        if (typeof (fragments) === "string") {
            abi = JSON.parse(fragments);
        }
        else {
            abi = fragments;
        }
        defineReadOnly(this, "fragments", abi.map((fragment) => {
            return Fragment.from(fragment);
        }).filter((fragment) => (fragment != null)));
        defineReadOnly(this, "_abiCoder", getStatic((new.target), "getAbiCoder")());
        defineReadOnly(this, "functions", {});
        defineReadOnly(this, "errors", {});
        defineReadOnly(this, "events", {});
        defineReadOnly(this, "structs", {});
        // Add all fragments by their signature
        this.fragments.forEach((fragment) => {
            let bucket = null;
            switch (fragment.type) {
                case "constructor":
                    if (this.deploy) {
                        interface_logger.warn("duplicate definition - constructor");
                        return;
                    }
                    //checkNames(fragment, "input", fragment.inputs);
                    defineReadOnly(this, "deploy", fragment);
                    return;
                case "function":
                    //checkNames(fragment, "input", fragment.inputs);
                    //checkNames(fragment, "output", (<FunctionFragment>fragment).outputs);
                    bucket = this.functions;
                    break;
                case "event":
                    //checkNames(fragment, "input", fragment.inputs);
                    bucket = this.events;
                    break;
                default:
                    return;
            }
            let signature = fragment.format();
            if (bucket[signature]) {
                interface_logger.warn("duplicate definition - " + signature);
                return;
            }
            bucket[signature] = fragment;
        });
        // If we do not have a constructor add a default
        if (!this.deploy) {
            defineReadOnly(this, "deploy", ConstructorFragment.from({
                payable: false,
                type: "constructor"
            }));
        }
        defineReadOnly(this, "_isInterface", true);
    }
    format(format) {
        if (!format) {
            format = FormatTypes.full;
        }
        if (format === FormatTypes.sighash) {
            interface_logger.throwArgumentError("interface does not support formatting sighash", "format", format);
        }
        const abi = this.fragments.map((fragment) => fragment.format(format));
        // We need to re-bundle the JSON fragments a bit
        if (format === FormatTypes.json) {
            return JSON.stringify(abi.map((j) => JSON.parse(j)));
        }
        return abi;
    }
    // Sub-classes can override these to handle other blockchains
    static getAbiCoder() {
        return defaultAbiCoder;
    }
    static getAddress(address) {
        return getAddress(address);
    }
    static getSighash(functionFragment) {
        return hexDataSlice(id(functionFragment.format()), 0, 4);
    }
    static getEventTopic(eventFragment) {
        return id(eventFragment.format());
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    getFunction(nameOrSignatureOrSighash) {
        if (isHexString(nameOrSignatureOrSighash)) {
            for (const name in this.functions) {
                if (nameOrSignatureOrSighash === this.getSighash(name)) {
                    return this.functions[name];
                }
            }
            interface_logger.throwArgumentError("no matching function", "sighash", nameOrSignatureOrSighash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrSighash.indexOf("(") === -1) {
            const name = nameOrSignatureOrSighash.trim();
            const matching = Object.keys(this.functions).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                interface_logger.throwArgumentError("no matching function", "name", name);
            }
            else if (matching.length > 1) {
                interface_logger.throwArgumentError("multiple matching functions", "name", name);
            }
            return this.functions[matching[0]];
        }
        // Normlize the signature and lookup the function
        const result = this.functions[FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
        if (!result) {
            interface_logger.throwArgumentError("no matching function", "signature", nameOrSignatureOrSighash);
        }
        return result;
    }
    // Find an event definition by any means necessary (unless it is ambiguous)
    getEvent(nameOrSignatureOrTopic) {
        if (isHexString(nameOrSignatureOrTopic)) {
            const topichash = nameOrSignatureOrTopic.toLowerCase();
            for (const name in this.events) {
                if (topichash === this.getEventTopic(name)) {
                    return this.events[name];
                }
            }
            interface_logger.throwArgumentError("no matching event", "topichash", topichash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrTopic.indexOf("(") === -1) {
            const name = nameOrSignatureOrTopic.trim();
            const matching = Object.keys(this.events).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                interface_logger.throwArgumentError("no matching event", "name", name);
            }
            else if (matching.length > 1) {
                interface_logger.throwArgumentError("multiple matching events", "name", name);
            }
            return this.events[matching[0]];
        }
        // Normlize the signature and lookup the function
        const result = this.events[EventFragment.fromString(nameOrSignatureOrTopic).format()];
        if (!result) {
            interface_logger.throwArgumentError("no matching event", "signature", nameOrSignatureOrTopic);
        }
        return result;
    }
    // Get the sighash (the bytes4 selector) used by Solidity to identify a function
    getSighash(functionFragment) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return getStatic(this.constructor, "getSighash")(functionFragment);
    }
    // Get the topic (the bytes32 hash) used by Solidity to identify an event
    getEventTopic(eventFragment) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        return getStatic(this.constructor, "getEventTopic")(eventFragment);
    }
    _decodeParams(params, data) {
        return this._abiCoder.decode(params, data);
    }
    _encodeParams(params, values) {
        return this._abiCoder.encode(params, values);
    }
    encodeDeploy(values) {
        return this._encodeParams(this.deploy.inputs, values || []);
    }
    // Decode the data for a function call (e.g. tx.data)
    decodeFunctionData(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        const bytes = arrayify(data);
        if (hexlify(bytes.slice(0, 4)) !== this.getSighash(functionFragment)) {
            interface_logger.throwArgumentError(`data signature does not match function ${functionFragment.name}.`, "data", hexlify(bytes));
        }
        return this._decodeParams(functionFragment.inputs, bytes.slice(4));
    }
    // Encode the data for a function call (e.g. tx.data)
    encodeFunctionData(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return hexlify(concat([
            this.getSighash(functionFragment),
            this._encodeParams(functionFragment.inputs, values || [])
        ]));
    }
    // Decode the result from a function call (e.g. from eth_call)
    decodeFunctionResult(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        let bytes = arrayify(data);
        let reason = null;
        let errorSignature = null;
        switch (bytes.length % this._abiCoder._getWordSize()) {
            case 0:
                try {
                    return this._abiCoder.decode(functionFragment.outputs, bytes);
                }
                catch (error) { }
                break;
            case 4:
                if (hexlify(bytes.slice(0, 4)) === "0x08c379a0") {
                    errorSignature = "Error(string)";
                    reason = this._abiCoder.decode(["string"], bytes.slice(4))[0];
                }
                break;
        }
        return interface_logger.throwError("call revert exception", Logger.errors.CALL_EXCEPTION, {
            method: functionFragment.format(),
            errorSignature: errorSignature,
            errorArgs: [reason],
            reason: reason
        });
    }
    // Encode the result for a function call (e.g. for eth_call)
    encodeFunctionResult(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return hexlify(this._abiCoder.encode(functionFragment.outputs, values || []));
    }
    // Create the filter for the event with search criteria (e.g. for eth_filterLog)
    encodeFilterTopics(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (values.length > eventFragment.inputs.length) {
            interface_logger.throwError("too many arguments for " + eventFragment.format(), Logger.errors.UNEXPECTED_ARGUMENT, {
                argument: "values",
                value: values
            });
        }
        let topics = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        const encodeTopic = (param, value) => {
            if (param.type === "string") {
                return id(value);
            }
            else if (param.type === "bytes") {
                return keccak256(hexlify(value));
            }
            // Check addresses are valid
            if (param.type === "address") {
                this._abiCoder.encode(["address"], [value]);
            }
            return hexZeroPad(hexlify(value), 32);
        };
        values.forEach((value, index) => {
            let param = eventFragment.inputs[index];
            if (!param.indexed) {
                if (value != null) {
                    interface_logger.throwArgumentError("cannot filter non-indexed parameters; must be null", ("contract." + param.name), value);
                }
                return;
            }
            if (value == null) {
                topics.push(null);
            }
            else if (param.baseType === "array" || param.baseType === "tuple") {
                interface_logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
            }
            else if (Array.isArray(value)) {
                topics.push(value.map((value) => encodeTopic(param, value)));
            }
            else {
                topics.push(encodeTopic(param, value));
            }
        });
        // Trim off trailing nulls
        while (topics.length && topics[topics.length - 1] === null) {
            topics.pop();
        }
        return topics;
    }
    encodeEventLog(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        const topics = [];
        const dataTypes = [];
        const dataValues = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        if (values.length !== eventFragment.inputs.length) {
            interface_logger.throwArgumentError("event arguments/values mismatch", "values", values);
        }
        eventFragment.inputs.forEach((param, index) => {
            const value = values[index];
            if (param.indexed) {
                if (param.type === "string") {
                    topics.push(id(value));
                }
                else if (param.type === "bytes") {
                    topics.push(keccak256(value));
                }
                else if (param.baseType === "tuple" || param.baseType === "array") {
                    // @TOOD
                    throw new Error("not implemented");
                }
                else {
                    topics.push(this._abiCoder.encode([param.type], [value]));
                }
            }
            else {
                dataTypes.push(param);
                dataValues.push(value);
            }
        });
        return {
            data: this._abiCoder.encode(dataTypes, dataValues),
            topics: topics
        };
    }
    // Decode a filter for the event and the search criteria
    decodeEventLog(eventFragment, data, topics) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (topics != null && !eventFragment.anonymous) {
            let topicHash = this.getEventTopic(eventFragment);
            if (!isHexString(topics[0], 32) || topics[0].toLowerCase() !== topicHash) {
                interface_logger.throwError("fragment/topic mismatch", Logger.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: topicHash, value: topics[0] });
            }
            topics = topics.slice(1);
        }
        let indexed = [];
        let nonIndexed = [];
        let dynamic = [];
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
                    indexed.push(ParamType.fromObject({ type: "bytes32", name: param.name }));
                    dynamic.push(true);
                }
                else {
                    indexed.push(param);
                    dynamic.push(false);
                }
            }
            else {
                nonIndexed.push(param);
                dynamic.push(false);
            }
        });
        let resultIndexed = (topics != null) ? this._abiCoder.decode(indexed, concat(topics)) : null;
        let resultNonIndexed = this._abiCoder.decode(nonIndexed, data, true);
        let result = [];
        let nonIndexedIndex = 0, indexedIndex = 0;
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (resultIndexed == null) {
                    result[index] = new Indexed({ _isIndexed: true, hash: null });
                }
                else if (dynamic[index]) {
                    result[index] = new Indexed({ _isIndexed: true, hash: resultIndexed[indexedIndex++] });
                }
                else {
                    try {
                        result[index] = resultIndexed[indexedIndex++];
                    }
                    catch (error) {
                        result[index] = error;
                    }
                }
            }
            else {
                try {
                    result[index] = resultNonIndexed[nonIndexedIndex++];
                }
                catch (error) {
                    result[index] = error;
                }
            }
            // Add the keyword argument if named and safe
            if (param.name && result[param.name] == null) {
                const value = result[index];
                // Make error named values throw on access
                if (value instanceof Error) {
                    Object.defineProperty(result, param.name, {
                        get: () => { throw wrapAccessError(`property ${JSON.stringify(param.name)}`, value); }
                    });
                }
                else {
                    result[param.name] = value;
                }
            }
        });
        // Make all error indexed values throw on access
        for (let i = 0; i < result.length; i++) {
            const value = result[i];
            if (value instanceof Error) {
                Object.defineProperty(result, i, {
                    get: () => { throw wrapAccessError(`index ${i}`, value); }
                });
            }
        }
        return Object.freeze(result);
    }
    // Given a transaction, find the matching function fragment (if any) and
    // determine all its properties and call parameters
    parseTransaction(tx) {
        let fragment = this.getFunction(tx.data.substring(0, 10).toLowerCase());
        if (!fragment) {
            return null;
        }
        return new TransactionDescription({
            args: this._abiCoder.decode(fragment.inputs, "0x" + tx.data.substring(10)),
            functionFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            sighash: this.getSighash(fragment),
            value: BigNumber.from(tx.value || "0"),
        });
    }
    // Given an event log, find the matching event fragment (if any) and
    // determine all its properties and values
    parseLog(log) {
        let fragment = this.getEvent(log.topics[0]);
        if (!fragment || fragment.anonymous) {
            return null;
        }
        // @TODO: If anonymous, and the only method, and the input count matches, should we parse?
        //        Probably not, because just because it is the only event in the ABI does
        //        not mean we have the full ABI; maybe jsut a fragment?
        return new LogDescription({
            eventFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            topic: this.getEventTopic(fragment),
            args: this.decodeEventLog(fragment, log.data, log.topics)
        });
    }
    /*
    static from(value: Array<Fragment | string | JsonAbi> | string | Interface) {
        if (Interface.isInterface(value)) {
            return value;
        }
        if (typeof(value) === "string") {
            return new Interface(JSON.parse(value));
        }
        return new Interface(value);
    }
    */
    static isInterface(value) {
        return !!(value && value._isInterface);
    }
}
//# sourceMappingURL=interface.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.0.7/node_modules/@ethersproject/abi/lib.esm/index.js





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 73037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ version)
/* harmony export */ });
const version = "abi/5.4.0";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ 78223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ AbiCoder),
  "$": () => (/* binding */ defaultAbiCoder)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.4.0/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(5241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var properties_lib_esm = __webpack_require__(27930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.4.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/_version.js
var _version = __webpack_require__(73037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js
var abstract_coder = __webpack_require__(58304);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+address@5.4.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var address_lib_esm = __webpack_require__(99747);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/address.js




class AddressCoder extends abstract_coder/* Coder */.XI {
    constructor(localName) {
        super("address", "address", localName, false);
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, value) {
        try {
            (0,address_lib_esm.getAddress)(value);
        }
        catch (error) {
            this._throwError(error.message, value);
        }
        return writer.writeValue(value);
    }
    decode(reader) {
        return (0,address_lib_esm.getAddress)((0,lib_esm.hexZeroPad)(reader.readValue().toHexString(), 20));
    }
}
//# sourceMappingURL=address.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js


// Clones the functionality of an existing Coder, but without a localName
class AnonymousCoder extends abstract_coder/* Coder */.XI {
    constructor(coder) {
        super(coder.name, coder.type, undefined, coder.dynamic);
        this.coder = coder;
    }
    defaultValue() {
        return this.coder.defaultValue();
    }
    encode(writer, value) {
        return this.coder.encode(writer, value);
    }
    decode(reader) {
        return this.coder.decode(reader);
    }
}
//# sourceMappingURL=anonymous.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/array.js



const logger = new logger_lib_esm/* Logger */.Yd(_version/* version */.i);


function pack(writer, coders, values) {
    let arrayValues = null;
    if (Array.isArray(values)) {
        arrayValues = values;
    }
    else if (values && typeof (values) === "object") {
        let unique = {};
        arrayValues = coders.map((coder) => {
            const name = coder.localName;
            if (!name) {
                logger.throwError("cannot encode object for signature with missing names", logger_lib_esm/* Logger.errors.INVALID_ARGUMENT */.Yd.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            if (unique[name]) {
                logger.throwError("cannot encode object for signature with duplicate names", logger_lib_esm/* Logger.errors.INVALID_ARGUMENT */.Yd.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            unique[name] = true;
            return values[name];
        });
    }
    else {
        logger.throwArgumentError("invalid tuple value", "tuple", values);
    }
    if (coders.length !== arrayValues.length) {
        logger.throwArgumentError("types/value length mismatch", "tuple", values);
    }
    let staticWriter = new abstract_coder/* Writer */.QV(writer.wordSize);
    let dynamicWriter = new abstract_coder/* Writer */.QV(writer.wordSize);
    let updateFuncs = [];
    coders.forEach((coder, index) => {
        let value = arrayValues[index];
        if (coder.dynamic) {
            // Get current dynamic offset (for the future pointer)
            let dynamicOffset = dynamicWriter.length;
            // Encode the dynamic value into the dynamicWriter
            coder.encode(dynamicWriter, value);
            // Prepare to populate the correct offset once we are done
            let updateFunc = staticWriter.writeUpdatableValue();
            updateFuncs.push((baseOffset) => {
                updateFunc(baseOffset + dynamicOffset);
            });
        }
        else {
            coder.encode(staticWriter, value);
        }
    });
    // Backfill all the dynamic offsets, now that we know the static length
    updateFuncs.forEach((func) => { func(staticWriter.length); });
    let length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
}
function unpack(reader, coders) {
    let values = [];
    // A reader anchored to this base
    let baseReader = reader.subReader(0);
    coders.forEach((coder) => {
        let value = null;
        if (coder.dynamic) {
            let offset = reader.readValue();
            let offsetReader = baseReader.subReader(offset.toNumber());
            try {
                value = coder.decode(offsetReader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === logger_lib_esm/* Logger.errors.BUFFER_OVERRUN */.Yd.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        else {
            try {
                value = coder.decode(reader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === logger_lib_esm/* Logger.errors.BUFFER_OVERRUN */.Yd.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        if (value != undefined) {
            values.push(value);
        }
    });
    // We only output named properties for uniquely named coders
    const uniqueNames = coders.reduce((accum, coder) => {
        const name = coder.localName;
        if (name) {
            if (!accum[name]) {
                accum[name] = 0;
            }
            accum[name]++;
        }
        return accum;
    }, {});
    // Add any named parameters (i.e. tuples)
    coders.forEach((coder, index) => {
        let name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
            return;
        }
        if (name === "length") {
            name = "_length";
        }
        if (values[name] != null) {
            return;
        }
        const value = values[index];
        if (value instanceof Error) {
            Object.defineProperty(values, name, {
                get: () => { throw value; }
            });
        }
        else {
            values[name] = value;
        }
    });
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (value instanceof Error) {
            Object.defineProperty(values, i, {
                get: () => { throw value; }
            });
        }
    }
    return Object.freeze(values);
}
class ArrayCoder extends abstract_coder/* Coder */.XI {
    constructor(coder, length, localName) {
        const type = (coder.type + "[" + (length >= 0 ? length : "") + "]");
        const dynamic = (length === -1 || coder.dynamic);
        super("array", type, localName, dynamic);
        this.coder = coder;
        this.length = length;
    }
    defaultValue() {
        // Verifies the child coder is valid (even if the array is dynamic or 0-length)
        const defaultChild = this.coder.defaultValue();
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(defaultChild);
        }
        return result;
    }
    encode(writer, value) {
        if (!Array.isArray(value)) {
            this._throwError("expected array value", value);
        }
        let count = this.length;
        if (count === -1) {
            count = value.length;
            writer.writeValue(value.length);
        }
        logger.checkArgumentCount(value.length, count, "coder array" + (this.localName ? (" " + this.localName) : ""));
        let coders = [];
        for (let i = 0; i < value.length; i++) {
            coders.push(this.coder);
        }
        return pack(writer, coders, value);
    }
    decode(reader) {
        let count = this.length;
        if (count === -1) {
            count = reader.readValue().toNumber();
            // Check that there is *roughly* enough data to ensure
            // stray random data is not being read as a length. Each
            // slot requires at least 32 bytes for their value (or 32
            // bytes as a link to the data). This could use a much
            // tighter bound, but we are erroring on the side of safety.
            if (count * 32 > reader._data.length) {
                logger.throwError("insufficient data length", logger_lib_esm/* Logger.errors.BUFFER_OVERRUN */.Yd.errors.BUFFER_OVERRUN, {
                    length: reader._data.length,
                    count: count
                });
            }
        }
        let coders = [];
        for (let i = 0; i < count; i++) {
            coders.push(new AnonymousCoder(this.coder));
        }
        return reader.coerce(this.name, unpack(reader, coders));
    }
}
//# sourceMappingURL=array.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/boolean.js


class BooleanCoder extends abstract_coder/* Coder */.XI {
    constructor(localName) {
        super("bool", "bool", localName, false);
    }
    defaultValue() {
        return false;
    }
    encode(writer, value) {
        return writer.writeValue(value ? 1 : 0);
    }
    decode(reader) {
        return reader.coerce(this.type, !reader.readValue().isZero());
    }
}
//# sourceMappingURL=boolean.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/bytes.js



class DynamicBytesCoder extends abstract_coder/* Coder */.XI {
    constructor(type, localName) {
        super(type, type, localName, true);
    }
    defaultValue() {
        return "0x";
    }
    encode(writer, value) {
        value = (0,lib_esm.arrayify)(value);
        let length = writer.writeValue(value.length);
        length += writer.writeBytes(value);
        return length;
    }
    decode(reader) {
        return reader.readBytes(reader.readValue().toNumber(), true);
    }
}
class BytesCoder extends DynamicBytesCoder {
    constructor(localName) {
        super("bytes", localName);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,lib_esm.hexlify)(super.decode(reader)));
    }
}
//# sourceMappingURL=bytes.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js



// @TODO: Merge this with bytes
class FixedBytesCoder extends abstract_coder/* Coder */.XI {
    constructor(size, localName) {
        let name = "bytes" + String(size);
        super(name, name, localName, false);
        this.size = size;
    }
    defaultValue() {
        return ("0x0000000000000000000000000000000000000000000000000000000000000000").substring(0, 2 + this.size * 2);
    }
    encode(writer, value) {
        let data = (0,lib_esm.arrayify)(value);
        if (data.length !== this.size) {
            this._throwError("incorrect data length", value);
        }
        return writer.writeBytes(data);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,lib_esm.hexlify)(reader.readBytes(this.size)));
    }
}
//# sourceMappingURL=fixed-bytes.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/null.js


class NullCoder extends abstract_coder/* Coder */.XI {
    constructor(localName) {
        super("null", "", localName, false);
    }
    defaultValue() {
        return null;
    }
    encode(writer, value) {
        if (value != null) {
            this._throwError("not null", value);
        }
        return writer.writeBytes([]);
    }
    decode(reader) {
        reader.readBytes(0);
        return reader.coerce(this.name, null);
    }
}
//# sourceMappingURL=null.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.4.1/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js + 1 modules
var bignumber = __webpack_require__(84757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(98648);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/number.js




class NumberCoder extends abstract_coder/* Coder */.XI {
    constructor(size, signed, localName) {
        const name = ((signed ? "int" : "uint") + (size * 8));
        super(name, name, localName, false);
        this.size = size;
        this.signed = signed;
    }
    defaultValue() {
        return 0;
    }
    encode(writer, value) {
        let v = bignumber/* BigNumber.from */.O$.from(value);
        // Check bounds are safe for encoding
        let maxUintValue = bignumbers/* MaxUint256.mask */.Bz.mask(writer.wordSize * 8);
        if (this.signed) {
            let bounds = maxUintValue.mask(this.size * 8 - 1);
            if (v.gt(bounds) || v.lt(bounds.add(bignumbers/* One */.fh).mul(bignumbers/* NegativeOne */.tL))) {
                this._throwError("value out-of-bounds", value);
            }
        }
        else if (v.lt(bignumbers/* Zero */._Y) || v.gt(maxUintValue.mask(this.size * 8))) {
            this._throwError("value out-of-bounds", value);
        }
        v = v.toTwos(this.size * 8).mask(this.size * 8);
        if (this.signed) {
            v = v.fromTwos(this.size * 8).toTwos(8 * writer.wordSize);
        }
        return writer.writeValue(v);
    }
    decode(reader) {
        let value = reader.readValue().mask(this.size * 8);
        if (this.signed) {
            value = value.fromTwos(this.size * 8);
        }
        return reader.coerce(this.name, value);
    }
}
//# sourceMappingURL=number.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+strings@5.4.0/node_modules/@ethersproject/strings/lib.esm/utf8.js + 1 modules
var utf8 = __webpack_require__(42716);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/string.js



class StringCoder extends DynamicBytesCoder {
    constructor(localName) {
        super("string", localName);
    }
    defaultValue() {
        return "";
    }
    encode(writer, value) {
        return super.encode(writer, (0,utf8/* toUtf8Bytes */.Y0)(value));
    }
    decode(reader) {
        return (0,utf8/* toUtf8String */.ZN)(super.decode(reader));
    }
}
//# sourceMappingURL=string.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/coders/tuple.js



class TupleCoder extends abstract_coder/* Coder */.XI {
    constructor(coders, localName) {
        let dynamic = false;
        const types = [];
        coders.forEach((coder) => {
            if (coder.dynamic) {
                dynamic = true;
            }
            types.push(coder.type);
        });
        const type = ("tuple(" + types.join(",") + ")");
        super("tuple", type, localName, dynamic);
        this.coders = coders;
    }
    defaultValue() {
        const values = [];
        this.coders.forEach((coder) => {
            values.push(coder.defaultValue());
        });
        // We only output named properties for uniquely named coders
        const uniqueNames = this.coders.reduce((accum, coder) => {
            const name = coder.localName;
            if (name) {
                if (!accum[name]) {
                    accum[name] = 0;
                }
                accum[name]++;
            }
            return accum;
        }, {});
        // Add named values
        this.coders.forEach((coder, index) => {
            let name = coder.localName;
            if (!name || uniqueNames[name] !== 1) {
                return;
            }
            if (name === "length") {
                name = "_length";
            }
            if (values[name] != null) {
                return;
            }
            values[name] = values[index];
        });
        return Object.freeze(values);
    }
    encode(writer, value) {
        return pack(writer, this.coders, value);
    }
    decode(reader) {
        return reader.coerce(this.name, unpack(reader, this.coders));
    }
}
//# sourceMappingURL=tuple.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/fragments.js
var fragments = __webpack_require__(73547);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/abi-coder.js

// See: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI




const abi_coder_logger = new logger_lib_esm/* Logger */.Yd(_version/* version */.i);











const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
class AbiCoder {
    constructor(coerceFunc) {
        abi_coder_logger.checkNew(new.target, AbiCoder);
        (0,properties_lib_esm/* defineReadOnly */.zG)(this, "coerceFunc", coerceFunc || null);
    }
    _getCoder(param) {
        switch (param.baseType) {
            case "address":
                return new AddressCoder(param.name);
            case "bool":
                return new BooleanCoder(param.name);
            case "string":
                return new StringCoder(param.name);
            case "bytes":
                return new BytesCoder(param.name);
            case "array":
                return new ArrayCoder(this._getCoder(param.arrayChildren), param.arrayLength, param.name);
            case "tuple":
                return new TupleCoder((param.components || []).map((component) => {
                    return this._getCoder(component);
                }), param.name);
            case "":
                return new NullCoder(param.name);
        }
        // u?int[0-9]*
        let match = param.type.match(paramTypeNumber);
        if (match) {
            let size = parseInt(match[2] || "256");
            if (size === 0 || size > 256 || (size % 8) !== 0) {
                abi_coder_logger.throwArgumentError("invalid " + match[1] + " bit length", "param", param);
            }
            return new NumberCoder(size / 8, (match[1] === "int"), param.name);
        }
        // bytes[0-9]+
        match = param.type.match(paramTypeBytes);
        if (match) {
            let size = parseInt(match[1]);
            if (size === 0 || size > 32) {
                abi_coder_logger.throwArgumentError("invalid bytes length", "param", param);
            }
            return new FixedBytesCoder(size, param.name);
        }
        return abi_coder_logger.throwArgumentError("invalid type", "type", param.type);
    }
    _getWordSize() { return 32; }
    _getReader(data, allowLoose) {
        return new abstract_coder/* Reader */.Ej(data, this._getWordSize(), this.coerceFunc, allowLoose);
    }
    _getWriter() {
        return new abstract_coder/* Writer */.QV(this._getWordSize());
    }
    getDefaultValue(types) {
        const coders = types.map((type) => this._getCoder(fragments/* ParamType.from */._R.from(type)));
        const coder = new TupleCoder(coders, "_");
        return coder.defaultValue();
    }
    encode(types, values) {
        if (types.length !== values.length) {
            abi_coder_logger.throwError("types/values length mismatch", logger_lib_esm/* Logger.errors.INVALID_ARGUMENT */.Yd.errors.INVALID_ARGUMENT, {
                count: { types: types.length, values: values.length },
                value: { types: types, values: values }
            });
        }
        const coders = types.map((type) => this._getCoder(fragments/* ParamType.from */._R.from(type)));
        const coder = (new TupleCoder(coders, "_"));
        const writer = this._getWriter();
        coder.encode(writer, values);
        return writer.data;
    }
    decode(types, data, loose) {
        const coders = types.map((type) => this._getCoder(fragments/* ParamType.from */._R.from(type)));
        const coder = new TupleCoder(coders, "_");
        return coder.decode(this._getReader((0,lib_esm.arrayify)(data), loose));
    }
}
const defaultAbiCoder = new AbiCoder();
//# sourceMappingURL=abi-coder.js.map

/***/ }),

/***/ 58304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BR": () => (/* binding */ checkResultErrors),
/* harmony export */   "Ej": () => (/* binding */ Reader),
/* harmony export */   "QV": () => (/* binding */ Writer),
/* harmony export */   "XI": () => (/* binding */ Coder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5241);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27930);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73037);






const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);
function checkResultErrors(result) {
    // Find the first error (if any)
    const errors = [];
    const checkErrors = function (path, object) {
        if (!Array.isArray(object)) {
            return;
        }
        for (let key in object) {
            const childPath = path.slice();
            childPath.push(key);
            try {
                checkErrors(childPath, object[key]);
            }
            catch (error) {
                errors.push({ path: childPath, error: error });
            }
        }
    };
    checkErrors([], result);
    return errors;
}
class Coder {
    constructor(name, type, localName, dynamic) {
        // @TODO: defineReadOnly these
        this.name = name;
        this.type = type;
        this.localName = localName;
        this.dynamic = dynamic;
    }
    _throwError(message, value) {
        logger.throwArgumentError(message, this.localName, value);
    }
}
class Writer {
    constructor(wordSize) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "wordSize", wordSize || 32);
        this._data = [];
        this._dataLength = 0;
        this._padding = new Uint8Array(wordSize);
    }
    get data() {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(this._data);
    }
    get length() { return this._dataLength; }
    _writeData(data) {
        this._data.push(data);
        this._dataLength += data.length;
        return data.length;
    }
    appendWriter(writer) {
        return this._writeData((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)(writer._data));
    }
    // Arrayish items; padded on the right to wordSize
    writeBytes(value) {
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value);
        const paddingOffset = bytes.length % this.wordSize;
        if (paddingOffset) {
            bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([bytes, this._padding.slice(paddingOffset)]);
        }
        return this._writeData(bytes);
    }
    _getValue(value) {
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__/* .BigNumber.from */ .O$.from(value));
        if (bytes.length > this.wordSize) {
            logger.throwError("value out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.BUFFER_OVERRUN */ .Yd.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: bytes.length
            });
        }
        if (bytes.length % this.wordSize) {
            bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([this._padding.slice(bytes.length % this.wordSize), bytes]);
        }
        return bytes;
    }
    // BigNumberish items; padded on the left to wordSize
    writeValue(value) {
        return this._writeData(this._getValue(value));
    }
    writeUpdatableValue() {
        const offset = this._data.length;
        this._data.push(this._padding);
        this._dataLength += this.wordSize;
        return (value) => {
            this._data[offset] = this._getValue(value);
        };
    }
}
class Reader {
    constructor(data, wordSize, coerceFunc, allowLoose) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "_data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "wordSize", wordSize || 32);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "_coerceFunc", coerceFunc);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "allowLoose", allowLoose);
        this._offset = 0;
    }
    get data() { return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(this._data); }
    get consumed() { return this._offset; }
    // The default Coerce function
    static coerce(name, value) {
        let match = name.match("^u?int([0-9]+)$");
        if (match && parseInt(match[1]) <= 48) {
            value = value.toNumber();
        }
        return value;
    }
    coerce(name, value) {
        if (this._coerceFunc) {
            return this._coerceFunc(name, value);
        }
        return Reader.coerce(name, value);
    }
    _peekBytes(offset, length, loose) {
        let alignedLength = Math.ceil(length / this.wordSize) * this.wordSize;
        if (this._offset + alignedLength > this._data.length) {
            if (this.allowLoose && loose && this._offset + length <= this._data.length) {
                alignedLength = length;
            }
            else {
                logger.throwError("data out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.BUFFER_OVERRUN */ .Yd.errors.BUFFER_OVERRUN, {
                    length: this._data.length,
                    offset: this._offset + alignedLength
                });
            }
        }
        return this._data.slice(this._offset, this._offset + alignedLength);
    }
    subReader(offset) {
        return new Reader(this._data.slice(this._offset + offset), this.wordSize, this._coerceFunc, this.allowLoose);
    }
    readBytes(length, loose) {
        let bytes = this._peekBytes(0, length, !!loose);
        this._offset += bytes.length;
        // @TODO: Make sure the length..end bytes are all 0?
        return bytes.slice(0, length);
    }
    readValue() {
        return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__/* .BigNumber.from */ .O$.from(this.readBytes(this.wordSize));
    }
}
//# sourceMappingURL=abstract-coder.js.map

/***/ }),

/***/ 73547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HY": () => (/* binding */ Fragment),
/* harmony export */   "IC": () => (/* binding */ ErrorFragment),
/* harmony export */   "QV": () => (/* binding */ EventFragment),
/* harmony export */   "Xg": () => (/* binding */ ConstructorFragment),
/* harmony export */   "YW": () => (/* binding */ FunctionFragment),
/* harmony export */   "_R": () => (/* binding */ ParamType),
/* harmony export */   "pc": () => (/* binding */ FormatTypes)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27930);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73037);





const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);
;
const _constructorGuard = {};
let ModifiersBytes = { calldata: true, memory: true, storage: true };
let ModifiersNest = { calldata: true, memory: true };
function checkModifier(type, name) {
    if (type === "bytes" || type === "string") {
        if (ModifiersBytes[name]) {
            return true;
        }
    }
    else if (type === "address") {
        if (name === "payable") {
            return true;
        }
    }
    else if (type.indexOf("[") >= 0 || type === "tuple") {
        if (ModifiersNest[name]) {
            return true;
        }
    }
    if (ModifiersBytes[name] || name === "payable") {
        logger.throwArgumentError("invalid modifier", "name", name);
    }
    return false;
}
// @TODO: Make sure that children of an indexed tuple are marked with a null indexed
function parseParamType(param, allowIndexed) {
    let originalParam = param;
    function throwError(i) {
        logger.throwArgumentError(`unexpected character at position ${i}`, "param", param);
    }
    param = param.replace(/\s/g, " ");
    function newNode(parent) {
        let node = { type: "", name: "", parent: parent, state: { allowType: true } };
        if (allowIndexed) {
            node.indexed = false;
        }
        return node;
    }
    let parent = { type: "", name: "", state: { allowType: true } };
    let node = parent;
    for (let i = 0; i < param.length; i++) {
        let c = param[i];
        switch (c) {
            case "(":
                if (node.state.allowType && node.type === "") {
                    node.type = "tuple";
                }
                else if (!node.state.allowParams) {
                    throwError(i);
                }
                node.state.allowType = false;
                node.type = verifyType(node.type);
                node.components = [newNode(node)];
                node = node.components[0];
                break;
            case ")":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let child = node;
                node = node.parent;
                if (!node) {
                    throwError(i);
                }
                delete child.parent;
                node.state.allowParams = false;
                node.state.allowName = true;
                node.state.allowArray = true;
                break;
            case ",":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let sibling = newNode(node.parent);
                //{ type: "", name: "", parent: node.parent, state: { allowType: true } };
                node.parent.components.push(sibling);
                delete node.parent;
                node = sibling;
                break;
            // Hit a space...
            case " ":
                // If reading type, the type is done and may read a param or name
                if (node.state.allowType) {
                    if (node.type !== "") {
                        node.type = verifyType(node.type);
                        delete node.state.allowType;
                        node.state.allowName = true;
                        node.state.allowParams = true;
                    }
                }
                // If reading name, the name is done
                if (node.state.allowName) {
                    if (node.name !== "") {
                        if (node.name === "indexed") {
                            if (!allowIndexed) {
                                throwError(i);
                            }
                            if (node.indexed) {
                                throwError(i);
                            }
                            node.indexed = true;
                            node.name = "";
                        }
                        else if (checkModifier(node.type, node.name)) {
                            node.name = "";
                        }
                        else {
                            node.state.allowName = false;
                        }
                    }
                }
                break;
            case "[":
                if (!node.state.allowArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.allowArray = false;
                node.state.allowName = false;
                node.state.readArray = true;
                break;
            case "]":
                if (!node.state.readArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.readArray = false;
                node.state.allowArray = true;
                node.state.allowName = true;
                break;
            default:
                if (node.state.allowType) {
                    node.type += c;
                    node.state.allowParams = true;
                    node.state.allowArray = true;
                }
                else if (node.state.allowName) {
                    node.name += c;
                    delete node.state.allowArray;
                }
                else if (node.state.readArray) {
                    node.type += c;
                }
                else {
                    throwError(i);
                }
        }
    }
    if (node.parent) {
        logger.throwArgumentError("unexpected eof", "param", param);
    }
    delete parent.state;
    if (node.name === "indexed") {
        if (!allowIndexed) {
            throwError(originalParam.length - 7);
        }
        if (node.indexed) {
            throwError(originalParam.length - 7);
        }
        node.indexed = true;
        node.name = "";
    }
    else if (checkModifier(node.type, node.name)) {
        node.name = "";
    }
    parent.type = verifyType(parent.type);
    return parent;
}
function populate(object, params) {
    for (let key in params) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(object, key, params[key]);
    }
}
const FormatTypes = Object.freeze({
    // Bare formatting, as is needed for computing a sighash of an event or function
    sighash: "sighash",
    // Human-Readable with Minimal spacing and without names (compact human-readable)
    minimal: "minimal",
    // Human-Readble with nice spacing, including all names
    full: "full",
    // JSON-format a la Solidity
    json: "json"
});
const paramTypeArray = new RegExp(/^(.*)\[([0-9]*)\]$/);
class ParamType {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use fromString", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.UNSUPPORTED_OPERATION */ .Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "new ParamType()"
            });
        }
        populate(this, params);
        let match = this.type.match(paramTypeArray);
        if (match) {
            populate(this, {
                arrayLength: parseInt(match[2] || "-1"),
                arrayChildren: ParamType.fromObject({
                    type: match[1],
                    components: this.components
                }),
                baseType: "array"
            });
        }
        else {
            populate(this, {
                arrayLength: null,
                arrayChildren: null,
                baseType: ((this.components != null) ? "tuple" : this.type)
            });
        }
        this._isParamType = true;
        Object.freeze(this);
    }
    // Format the parameter fragment
    //   - sighash: "(uint256,address)"
    //   - minimal: "tuple(uint256,address) indexed"
    //   - full:    "tuple(uint256 foo, addres bar) indexed baz"
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            let result = {
                type: ((this.baseType === "tuple") ? "tuple" : this.type),
                name: (this.name || undefined)
            };
            if (typeof (this.indexed) === "boolean") {
                result.indexed = this.indexed;
            }
            if (this.components) {
                result.components = this.components.map((comp) => JSON.parse(comp.format(format)));
            }
            return JSON.stringify(result);
        }
        let result = "";
        // Array
        if (this.baseType === "array") {
            result += this.arrayChildren.format(format);
            result += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]";
        }
        else {
            if (this.baseType === "tuple") {
                if (format !== FormatTypes.sighash) {
                    result += this.type;
                }
                result += "(" + this.components.map((comp) => comp.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ")";
            }
            else {
                result += this.type;
            }
        }
        if (format !== FormatTypes.sighash) {
            if (this.indexed === true) {
                result += " indexed";
            }
            if (format === FormatTypes.full && this.name) {
                result += " " + this.name;
            }
        }
        return result;
    }
    static from(value, allowIndexed) {
        if (typeof (value) === "string") {
            return ParamType.fromString(value, allowIndexed);
        }
        return ParamType.fromObject(value);
    }
    static fromObject(value) {
        if (ParamType.isParamType(value)) {
            return value;
        }
        return new ParamType(_constructorGuard, {
            name: (value.name || null),
            type: verifyType(value.type),
            indexed: ((value.indexed == null) ? null : !!value.indexed),
            components: (value.components ? value.components.map(ParamType.fromObject) : null)
        });
    }
    static fromString(value, allowIndexed) {
        function ParamTypify(node) {
            return ParamType.fromObject({
                name: node.name,
                type: node.type,
                indexed: node.indexed,
                components: node.components
            });
        }
        return ParamTypify(parseParamType(value, !!allowIndexed));
    }
    static isParamType(value) {
        return !!(value != null && value._isParamType);
    }
}
;
function parseParams(value, allowIndex) {
    return splitNesting(value).map((param) => ParamType.fromString(param, allowIndex));
}
class Fragment {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use a static from method", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.UNSUPPORTED_OPERATION */ .Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "new Fragment()"
            });
        }
        populate(this, params);
        this._isFragment = true;
        Object.freeze(this);
    }
    static from(value) {
        if (Fragment.isFragment(value)) {
            return value;
        }
        if (typeof (value) === "string") {
            return Fragment.fromString(value);
        }
        return Fragment.fromObject(value);
    }
    static fromObject(value) {
        if (Fragment.isFragment(value)) {
            return value;
        }
        switch (value.type) {
            case "function":
                return FunctionFragment.fromObject(value);
            case "event":
                return EventFragment.fromObject(value);
            case "constructor":
                return ConstructorFragment.fromObject(value);
            case "error":
                return ErrorFragment.fromObject(value);
            case "fallback":
            case "receive":
                // @TODO: Something? Maybe return a FunctionFragment? A custom DefaultFunctionFragment?
                return null;
        }
        return logger.throwArgumentError("invalid fragment object", "value", value);
    }
    static fromString(value) {
        // Make sure the "returns" is surrounded by a space and all whitespace is exactly one space
        value = value.replace(/\s/g, " ");
        value = value.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ");
        value = value.trim();
        if (value.split(" ")[0] === "event") {
            return EventFragment.fromString(value.substring(5).trim());
        }
        else if (value.split(" ")[0] === "function") {
            return FunctionFragment.fromString(value.substring(8).trim());
        }
        else if (value.split("(")[0].trim() === "constructor") {
            return ConstructorFragment.fromString(value.trim());
        }
        else if (value.split(" ")[0] === "error") {
            return ErrorFragment.fromString(value.substring(5).trim());
        }
        return logger.throwArgumentError("unsupported fragment", "value", value);
    }
    static isFragment(value) {
        return !!(value && value._isFragment);
    }
}
class EventFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "event",
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "event ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== FormatTypes.sighash) {
            if (this.anonymous) {
                result += "anonymous ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return EventFragment.fromString(value);
        }
        return EventFragment.fromObject(value);
    }
    static fromObject(value) {
        if (EventFragment.isEventFragment(value)) {
            return value;
        }
        if (value.type !== "event") {
            logger.throwArgumentError("invalid event object", "value", value);
        }
        const params = {
            name: verifyIdentifier(value.name),
            anonymous: value.anonymous,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            type: "event"
        };
        return new EventFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let match = value.match(regexParen);
        if (!match) {
            logger.throwArgumentError("invalid event string", "value", value);
        }
        let anonymous = false;
        match[3].split(" ").forEach((modifier) => {
            switch (modifier.trim()) {
                case "anonymous":
                    anonymous = true;
                    break;
                case "":
                    break;
                default:
                    logger.warn("unknown modifier: " + modifier);
            }
        });
        return EventFragment.fromObject({
            name: match[1].trim(),
            anonymous: anonymous,
            inputs: parseParams(match[2], true),
            type: "event"
        });
    }
    static isEventFragment(value) {
        return (value && value._isFragment && value.type === "event");
    }
}
function parseGas(value, params) {
    params.gas = null;
    let comps = value.split("@");
    if (comps.length !== 1) {
        if (comps.length > 2) {
            logger.throwArgumentError("invalid human-readable ABI signature", "value", value);
        }
        if (!comps[1].match(/^[0-9]+$/)) {
            logger.throwArgumentError("invalid human-readable ABI signature gas", "value", value);
        }
        params.gas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__/* .BigNumber.from */ .O$.from(comps[1]);
        return comps[0];
    }
    return value;
}
function parseModifiers(value, params) {
    params.constant = false;
    params.payable = false;
    params.stateMutability = "nonpayable";
    value.split(" ").forEach((modifier) => {
        switch (modifier.trim()) {
            case "constant":
                params.constant = true;
                break;
            case "payable":
                params.payable = true;
                params.stateMutability = "payable";
                break;
            case "nonpayable":
                params.payable = false;
                params.stateMutability = "nonpayable";
                break;
            case "pure":
                params.constant = true;
                params.stateMutability = "pure";
                break;
            case "view":
                params.constant = true;
                params.stateMutability = "view";
                break;
            case "external":
            case "public":
            case "":
                break;
            default:
                console.log("unknown modifier: " + modifier);
        }
    });
}
function verifyState(value) {
    let result = {
        constant: false,
        payable: true,
        stateMutability: "payable"
    };
    if (value.stateMutability != null) {
        result.stateMutability = value.stateMutability;
        // Set (and check things are consistent) the constant property
        result.constant = (result.stateMutability === "view" || result.stateMutability === "pure");
        if (value.constant != null) {
            if ((!!value.constant) !== result.constant) {
                logger.throwArgumentError("cannot have constant function with mutability " + result.stateMutability, "value", value);
            }
        }
        // Set (and check things are consistent) the payable property
        result.payable = (result.stateMutability === "payable");
        if (value.payable != null) {
            if ((!!value.payable) !== result.payable) {
                logger.throwArgumentError("cannot have payable function with mutability " + result.stateMutability, "value", value);
            }
        }
    }
    else if (value.payable != null) {
        result.payable = !!value.payable;
        // If payable we can assume non-constant; otherwise we can't assume
        if (value.constant == null && !result.payable && value.type !== "constructor") {
            logger.throwArgumentError("unable to determine stateMutability", "value", value);
        }
        result.constant = !!value.constant;
        if (result.constant) {
            result.stateMutability = "view";
        }
        else {
            result.stateMutability = (result.payable ? "payable" : "nonpayable");
        }
        if (result.payable && result.constant) {
            logger.throwArgumentError("cannot have constant payable function", "value", value);
        }
    }
    else if (value.constant != null) {
        result.constant = !!value.constant;
        result.payable = !result.constant;
        result.stateMutability = (result.constant ? "view" : "payable");
    }
    else if (value.type !== "constructor") {
        logger.throwArgumentError("unable to determine stateMutability", "value", value);
    }
    return result;
}
class ConstructorFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "constructor",
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payable: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        if (format === FormatTypes.sighash) {
            logger.throwError("cannot format a constructor for sighash", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.UNSUPPORTED_OPERATION */ .Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "format(sighash)"
            });
        }
        let result = "constructor(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (this.stateMutability && this.stateMutability !== "nonpayable") {
            result += this.stateMutability + " ";
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return ConstructorFragment.fromString(value);
        }
        return ConstructorFragment.fromObject(value);
    }
    static fromObject(value) {
        if (ConstructorFragment.isConstructorFragment(value)) {
            return value;
        }
        if (value.type !== "constructor") {
            logger.throwArgumentError("invalid constructor object", "value", value);
        }
        let state = verifyState(value);
        if (state.constant) {
            logger.throwArgumentError("constructor cannot be constant", "value", value);
        }
        const params = {
            name: null,
            type: value.type,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__/* .BigNumber.from */ .O$.from(value.gas) : null)
        };
        return new ConstructorFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "constructor" };
        value = parseGas(value, params);
        let parens = value.match(regexParen);
        if (!parens || parens[1].trim() !== "constructor") {
            logger.throwArgumentError("invalid constructor string", "value", value);
        }
        params.inputs = parseParams(parens[2].trim(), false);
        parseModifiers(parens[3].trim(), params);
        return ConstructorFragment.fromObject(params);
    }
    static isConstructorFragment(value) {
        return (value && value._isFragment && value.type === "constructor");
    }
}
class FunctionFragment extends ConstructorFragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "function",
                name: this.name,
                constant: this.constant,
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payable: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format))),
                outputs: this.outputs.map((output) => JSON.parse(output.format(format))),
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "function ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== FormatTypes.sighash) {
            if (this.stateMutability) {
                if (this.stateMutability !== "nonpayable") {
                    result += (this.stateMutability + " ");
                }
            }
            else if (this.constant) {
                result += "view ";
            }
            if (this.outputs && this.outputs.length) {
                result += "returns (" + this.outputs.map((output) => output.format(format)).join(", ") + ") ";
            }
            if (this.gas != null) {
                result += "@" + this.gas.toString() + " ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return FunctionFragment.fromString(value);
        }
        return FunctionFragment.fromObject(value);
    }
    static fromObject(value) {
        if (FunctionFragment.isFunctionFragment(value)) {
            return value;
        }
        if (value.type !== "function") {
            logger.throwArgumentError("invalid function object", "value", value);
        }
        let state = verifyState(value);
        const params = {
            type: value.type,
            name: verifyIdentifier(value.name),
            constant: state.constant,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            outputs: (value.outputs ? value.outputs.map(ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__/* .BigNumber.from */ .O$.from(value.gas) : null)
        };
        return new FunctionFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "function" };
        value = parseGas(value, params);
        let comps = value.split(" returns ");
        if (comps.length > 2) {
            logger.throwArgumentError("invalid function string", "value", value);
        }
        let parens = comps[0].match(regexParen);
        if (!parens) {
            logger.throwArgumentError("invalid function signature", "value", value);
        }
        params.name = parens[1].trim();
        if (params.name) {
            verifyIdentifier(params.name);
        }
        params.inputs = parseParams(parens[2], false);
        parseModifiers(parens[3].trim(), params);
        // We have outputs
        if (comps.length > 1) {
            let returns = comps[1].match(regexParen);
            if (returns[1].trim() != "" || returns[3].trim() != "") {
                logger.throwArgumentError("unexpected tokens", "value", value);
            }
            params.outputs = parseParams(returns[2], false);
        }
        else {
            params.outputs = [];
        }
        return FunctionFragment.fromObject(params);
    }
    static isFunctionFragment(value) {
        return (value && value._isFragment && value.type === "function");
    }
}
//export class StructFragment extends Fragment {
//}
function checkForbidden(fragment) {
    const sig = fragment.format();
    if (sig === "Error(string)" || sig === "Panic(uint256)") {
        logger.throwArgumentError(`cannot specify user defined ${sig} error`, "fragment", fragment);
    }
    return fragment;
}
class ErrorFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "error",
                name: this.name,
                inputs: this.inputs.map((input) => JSON.parse(input.format(format))),
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "error ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return ErrorFragment.fromString(value);
        }
        return ErrorFragment.fromObject(value);
    }
    static fromObject(value) {
        if (ErrorFragment.isErrorFragment(value)) {
            return value;
        }
        if (value.type !== "error") {
            logger.throwArgumentError("invalid error object", "value", value);
        }
        const params = {
            type: value.type,
            name: verifyIdentifier(value.name),
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : [])
        };
        return checkForbidden(new ErrorFragment(_constructorGuard, params));
    }
    static fromString(value) {
        let params = { type: "error" };
        let parens = value.match(regexParen);
        if (!parens) {
            logger.throwArgumentError("invalid error signature", "value", value);
        }
        params.name = parens[1].trim();
        if (params.name) {
            verifyIdentifier(params.name);
        }
        params.inputs = parseParams(parens[2], false);
        return checkForbidden(ErrorFragment.fromObject(params));
    }
    static isErrorFragment(value) {
        return (value && value._isFragment && value.type === "error");
    }
}
function verifyType(type) {
    // These need to be transformed to their full description
    if (type.match(/^uint($|[^1-9])/)) {
        type = "uint256" + type.substring(4);
    }
    else if (type.match(/^int($|[^1-9])/)) {
        type = "int256" + type.substring(3);
    }
    // @TODO: more verification
    return type;
}
// See: https://github.com/ethereum/solidity/blob/1f8f1a3db93a548d0555e3e14cfc55a10e25b60e/docs/grammar/SolidityLexer.g4#L234
const regexIdentifier = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function verifyIdentifier(value) {
    if (!value || !value.match(regexIdentifier)) {
        logger.throwArgumentError(`invalid identifier "${value}"`, "value", value);
    }
    return value;
}
const regexParen = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function splitNesting(value) {
    value = value.trim();
    let result = [];
    let accum = "";
    let depth = 0;
    for (let offset = 0; offset < value.length; offset++) {
        let c = value[offset];
        if (c === "," && depth === 0) {
            result.push(accum);
            accum = "";
        }
        else {
            accum += c;
            if (c === "(") {
                depth++;
            }
            else if (c === ")") {
                depth--;
                if (depth === -1) {
                    logger.throwArgumentError("unbalanced parenthesis", "value", value);
                }
            }
        }
    }
    if (accum) {
        result.push(accum);
    }
    return result;
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ 39861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbiCoder": () => (/* reexport safe */ _abi_coder__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "ConstructorFragment": () => (/* reexport safe */ _fragments__WEBPACK_IMPORTED_MODULE_0__.Xg),
/* harmony export */   "ErrorFragment": () => (/* reexport safe */ _fragments__WEBPACK_IMPORTED_MODULE_0__.IC),
/* harmony export */   "EventFragment": () => (/* reexport safe */ _fragments__WEBPACK_IMPORTED_MODULE_0__.QV),
/* harmony export */   "FormatTypes": () => (/* reexport safe */ _fragments__WEBPACK_IMPORTED_MODULE_0__.pc),
/* harmony export */   "Fragment": () => (/* reexport safe */ _fragments__WEBPACK_IMPORTED_MODULE_0__.HY),
/* harmony export */   "FunctionFragment": () => (/* reexport safe */ _fragments__WEBPACK_IMPORTED_MODULE_0__.YW),
/* harmony export */   "Indexed": () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.Hk),
/* harmony export */   "Interface": () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.vU),
/* harmony export */   "LogDescription": () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.CC),
/* harmony export */   "ParamType": () => (/* reexport safe */ _fragments__WEBPACK_IMPORTED_MODULE_0__._R),
/* harmony export */   "TransactionDescription": () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.vk),
/* harmony export */   "checkResultErrors": () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_3__.BR),
/* harmony export */   "defaultAbiCoder": () => (/* reexport safe */ _abi_coder__WEBPACK_IMPORTED_MODULE_1__.$)
/* harmony export */ });
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73547);
/* harmony import */ var _abi_coder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78223);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58528);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58304);





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CC": () => (/* binding */ LogDescription),
/* harmony export */   "Hk": () => (/* binding */ Indexed),
/* harmony export */   "vU": () => (/* binding */ Interface),
/* harmony export */   "vk": () => (/* binding */ TransactionDescription)
/* harmony export */ });
/* unused harmony export ErrorDescription */
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99747);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5241);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39125);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27930);
/* harmony import */ var _abi_coder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78223);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73547);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73037);












const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);

class LogDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk {
}
class TransactionDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk {
}
class ErrorDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk {
}
class Indexed extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk {
    static isIndexed(value) {
        return !!(value && value._isIndexed);
    }
}
const BuiltinErrors = {
    "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: true },
    "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] }
};
function wrapAccessError(property, error) {
    const wrap = new Error(`deferred error during ABI decoding triggered accessing ${property}`);
    wrap.error = error;
    return wrap;
}
/*
function checkNames(fragment: Fragment, type: "input" | "output", params: Array<ParamType>): void {
    params.reduce((accum, param) => {
        if (param.name) {
            if (accum[param.name]) {
                logger.throwArgumentError(`duplicate ${ type } parameter ${ JSON.stringify(param.name) } in ${ fragment.format("full") }`, "fragment", fragment);
            }
            accum[param.name] = true;
        }
        return accum;
    }, <{ [ name: string ]: boolean }>{ });
}
*/
class Interface {
    constructor(fragments) {
        logger.checkNew(new.target, Interface);
        let abi = [];
        if (typeof (fragments) === "string") {
            abi = JSON.parse(fragments);
        }
        else {
            abi = fragments;
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "fragments", abi.map((fragment) => {
            return _fragments__WEBPACK_IMPORTED_MODULE_3__/* .Fragment.from */ .HY.from(fragment);
        }).filter((fragment) => (fragment != null)));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "_abiCoder", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .getStatic */ .tu)((new.target), "getAbiCoder")());
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "functions", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "errors", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "events", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "structs", {});
        // Add all fragments by their signature
        this.fragments.forEach((fragment) => {
            let bucket = null;
            switch (fragment.type) {
                case "constructor":
                    if (this.deploy) {
                        logger.warn("duplicate definition - constructor");
                        return;
                    }
                    //checkNames(fragment, "input", fragment.inputs);
                    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "deploy", fragment);
                    return;
                case "function":
                    //checkNames(fragment, "input", fragment.inputs);
                    //checkNames(fragment, "output", (<FunctionFragment>fragment).outputs);
                    bucket = this.functions;
                    break;
                case "event":
                    //checkNames(fragment, "input", fragment.inputs);
                    bucket = this.events;
                    break;
                case "error":
                    bucket = this.errors;
                    break;
                default:
                    return;
            }
            let signature = fragment.format();
            if (bucket[signature]) {
                logger.warn("duplicate definition - " + signature);
                return;
            }
            bucket[signature] = fragment;
        });
        // If we do not have a constructor add a default
        if (!this.deploy) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "deploy", _fragments__WEBPACK_IMPORTED_MODULE_3__/* .ConstructorFragment.from */ .Xg.from({
                payable: false,
                type: "constructor"
            }));
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .defineReadOnly */ .zG)(this, "_isInterface", true);
    }
    format(format) {
        if (!format) {
            format = _fragments__WEBPACK_IMPORTED_MODULE_3__/* .FormatTypes.full */ .pc.full;
        }
        if (format === _fragments__WEBPACK_IMPORTED_MODULE_3__/* .FormatTypes.sighash */ .pc.sighash) {
            logger.throwArgumentError("interface does not support formatting sighash", "format", format);
        }
        const abi = this.fragments.map((fragment) => fragment.format(format));
        // We need to re-bundle the JSON fragments a bit
        if (format === _fragments__WEBPACK_IMPORTED_MODULE_3__/* .FormatTypes.json */ .pc.json) {
            return JSON.stringify(abi.map((j) => JSON.parse(j)));
        }
        return abi;
    }
    // Sub-classes can override these to handle other blockchains
    static getAbiCoder() {
        return _abi_coder__WEBPACK_IMPORTED_MODULE_4__/* .defaultAbiCoder */ .$;
    }
    static getAddress(address) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_5__.getAddress)(address);
    }
    static getSighash(fragment) {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexDataSlice)((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__.id)(fragment.format()), 0, 4);
    }
    static getEventTopic(eventFragment) {
        return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__.id)(eventFragment.format());
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    getFunction(nameOrSignatureOrSighash) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(nameOrSignatureOrSighash)) {
            for (const name in this.functions) {
                if (nameOrSignatureOrSighash === this.getSighash(name)) {
                    return this.functions[name];
                }
            }
            logger.throwArgumentError("no matching function", "sighash", nameOrSignatureOrSighash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrSighash.indexOf("(") === -1) {
            const name = nameOrSignatureOrSighash.trim();
            const matching = Object.keys(this.functions).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching function", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching functions", "name", name);
            }
            return this.functions[matching[0]];
        }
        // Normlize the signature and lookup the function
        const result = this.functions[_fragments__WEBPACK_IMPORTED_MODULE_3__/* .FunctionFragment.fromString */ .YW.fromString(nameOrSignatureOrSighash).format()];
        if (!result) {
            logger.throwArgumentError("no matching function", "signature", nameOrSignatureOrSighash);
        }
        return result;
    }
    // Find an event definition by any means necessary (unless it is ambiguous)
    getEvent(nameOrSignatureOrTopic) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(nameOrSignatureOrTopic)) {
            const topichash = nameOrSignatureOrTopic.toLowerCase();
            for (const name in this.events) {
                if (topichash === this.getEventTopic(name)) {
                    return this.events[name];
                }
            }
            logger.throwArgumentError("no matching event", "topichash", topichash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrTopic.indexOf("(") === -1) {
            const name = nameOrSignatureOrTopic.trim();
            const matching = Object.keys(this.events).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching event", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching events", "name", name);
            }
            return this.events[matching[0]];
        }
        // Normlize the signature and lookup the function
        const result = this.events[_fragments__WEBPACK_IMPORTED_MODULE_3__/* .EventFragment.fromString */ .QV.fromString(nameOrSignatureOrTopic).format()];
        if (!result) {
            logger.throwArgumentError("no matching event", "signature", nameOrSignatureOrTopic);
        }
        return result;
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    getError(nameOrSignatureOrSighash) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(nameOrSignatureOrSighash)) {
            const getSighash = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .getStatic */ .tu)(this.constructor, "getSighash");
            for (const name in this.errors) {
                const error = this.errors[name];
                if (nameOrSignatureOrSighash === getSighash(error)) {
                    return this.errors[name];
                }
            }
            logger.throwArgumentError("no matching error", "sighash", nameOrSignatureOrSighash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrSighash.indexOf("(") === -1) {
            const name = nameOrSignatureOrSighash.trim();
            const matching = Object.keys(this.errors).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching error", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching errors", "name", name);
            }
            return this.errors[matching[0]];
        }
        // Normlize the signature and lookup the function
        const result = this.errors[_fragments__WEBPACK_IMPORTED_MODULE_3__/* .FunctionFragment.fromString */ .YW.fromString(nameOrSignatureOrSighash).format()];
        if (!result) {
            logger.throwArgumentError("no matching error", "signature", nameOrSignatureOrSighash);
        }
        return result;
    }
    // Get the sighash (the bytes4 selector) used by Solidity to identify a function
    getSighash(fragment) {
        if (typeof (fragment) === "string") {
            try {
                fragment = this.getFunction(fragment);
            }
            catch (error) {
                try {
                    fragment = this.getError(fragment);
                }
                catch (_) {
                    throw error;
                }
            }
        }
        return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .getStatic */ .tu)(this.constructor, "getSighash")(fragment);
    }
    // Get the topic (the bytes32 hash) used by Solidity to identify an event
    getEventTopic(eventFragment) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__/* .getStatic */ .tu)(this.constructor, "getEventTopic")(eventFragment);
    }
    _decodeParams(params, data) {
        return this._abiCoder.decode(params, data);
    }
    _encodeParams(params, values) {
        return this._abiCoder.encode(params, values);
    }
    encodeDeploy(values) {
        return this._encodeParams(this.deploy.inputs, values || []);
    }
    decodeErrorResult(fragment, data) {
        if (typeof (fragment) === "string") {
            fragment = this.getError(fragment);
        }
        const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.arrayify)(data);
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(fragment)) {
            logger.throwArgumentError(`data signature does not match error ${fragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytes));
        }
        return this._decodeParams(fragment.inputs, bytes.slice(4));
    }
    encodeErrorResult(fragment, values) {
        if (typeof (fragment) === "string") {
            fragment = this.getError(fragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.concat)([
            this.getSighash(fragment),
            this._encodeParams(fragment.inputs, values || [])
        ]));
    }
    // Decode the data for a function call (e.g. tx.data)
    decodeFunctionData(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.arrayify)(data);
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(functionFragment)) {
            logger.throwArgumentError(`data signature does not match function ${functionFragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytes));
        }
        return this._decodeParams(functionFragment.inputs, bytes.slice(4));
    }
    // Encode the data for a function call (e.g. tx.data)
    encodeFunctionData(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.concat)([
            this.getSighash(functionFragment),
            this._encodeParams(functionFragment.inputs, values || [])
        ]));
    }
    // Decode the result from a function call (e.g. from eth_call)
    decodeFunctionResult(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.arrayify)(data);
        let reason = null;
        let errorArgs = null;
        let errorName = null;
        let errorSignature = null;
        switch (bytes.length % this._abiCoder._getWordSize()) {
            case 0:
                try {
                    return this._abiCoder.decode(functionFragment.outputs, bytes);
                }
                catch (error) { }
                break;
            case 4: {
                const selector = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytes.slice(0, 4));
                const builtin = BuiltinErrors[selector];
                if (builtin) {
                    errorArgs = this._abiCoder.decode(builtin.inputs, bytes.slice(4));
                    errorName = builtin.name;
                    errorSignature = builtin.signature;
                    if (builtin.reason) {
                        reason = errorArgs[0];
                    }
                }
                else {
                    try {
                        const error = this.getError(selector);
                        errorArgs = this._abiCoder.decode(error.inputs, bytes.slice(4));
                        errorName = error.name;
                        errorSignature = error.format();
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                break;
            }
        }
        return logger.throwError("call revert exception", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.CALL_EXCEPTION */ .Yd.errors.CALL_EXCEPTION, {
            method: functionFragment.format(),
            errorArgs, errorName, errorSignature, reason
        });
    }
    // Encode the result for a function call (e.g. for eth_call)
    encodeFunctionResult(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(this._abiCoder.encode(functionFragment.outputs, values || []));
    }
    // Create the filter for the event with search criteria (e.g. for eth_filterLog)
    encodeFilterTopics(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (values.length > eventFragment.inputs.length) {
            logger.throwError("too many arguments for " + eventFragment.format(), _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.UNEXPECTED_ARGUMENT */ .Yd.errors.UNEXPECTED_ARGUMENT, {
                argument: "values",
                value: values
            });
        }
        let topics = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        const encodeTopic = (param, value) => {
            if (param.type === "string") {
                return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__.id)(value);
            }
            else if (param.type === "bytes") {
                return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_8__/* .keccak256 */ .w)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(value));
            }
            // Check addresses are valid
            if (param.type === "address") {
                this._abiCoder.encode(["address"], [value]);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexZeroPad)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(value), 32);
        };
        values.forEach((value, index) => {
            let param = eventFragment.inputs[index];
            if (!param.indexed) {
                if (value != null) {
                    logger.throwArgumentError("cannot filter non-indexed parameters; must be null", ("contract." + param.name), value);
                }
                return;
            }
            if (value == null) {
                topics.push(null);
            }
            else if (param.baseType === "array" || param.baseType === "tuple") {
                logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
            }
            else if (Array.isArray(value)) {
                topics.push(value.map((value) => encodeTopic(param, value)));
            }
            else {
                topics.push(encodeTopic(param, value));
            }
        });
        // Trim off trailing nulls
        while (topics.length && topics[topics.length - 1] === null) {
            topics.pop();
        }
        return topics;
    }
    encodeEventLog(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        const topics = [];
        const dataTypes = [];
        const dataValues = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        if (values.length !== eventFragment.inputs.length) {
            logger.throwArgumentError("event arguments/values mismatch", "values", values);
        }
        eventFragment.inputs.forEach((param, index) => {
            const value = values[index];
            if (param.indexed) {
                if (param.type === "string") {
                    topics.push((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__.id)(value));
                }
                else if (param.type === "bytes") {
                    topics.push((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_8__/* .keccak256 */ .w)(value));
                }
                else if (param.baseType === "tuple" || param.baseType === "array") {
                    // @TOOD
                    throw new Error("not implemented");
                }
                else {
                    topics.push(this._abiCoder.encode([param.type], [value]));
                }
            }
            else {
                dataTypes.push(param);
                dataValues.push(value);
            }
        });
        return {
            data: this._abiCoder.encode(dataTypes, dataValues),
            topics: topics
        };
    }
    // Decode a filter for the event and the search criteria
    decodeEventLog(eventFragment, data, topics) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (topics != null && !eventFragment.anonymous) {
            let topicHash = this.getEventTopic(eventFragment);
            if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(topics[0], 32) || topics[0].toLowerCase() !== topicHash) {
                logger.throwError("fragment/topic mismatch", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger.errors.INVALID_ARGUMENT */ .Yd.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: topicHash, value: topics[0] });
            }
            topics = topics.slice(1);
        }
        let indexed = [];
        let nonIndexed = [];
        let dynamic = [];
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
                    indexed.push(_fragments__WEBPACK_IMPORTED_MODULE_3__/* .ParamType.fromObject */ ._R.fromObject({ type: "bytes32", name: param.name }));
                    dynamic.push(true);
                }
                else {
                    indexed.push(param);
                    dynamic.push(false);
                }
            }
            else {
                nonIndexed.push(param);
                dynamic.push(false);
            }
        });
        let resultIndexed = (topics != null) ? this._abiCoder.decode(indexed, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.concat)(topics)) : null;
        let resultNonIndexed = this._abiCoder.decode(nonIndexed, data, true);
        let result = [];
        let nonIndexedIndex = 0, indexedIndex = 0;
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (resultIndexed == null) {
                    result[index] = new Indexed({ _isIndexed: true, hash: null });
                }
                else if (dynamic[index]) {
                    result[index] = new Indexed({ _isIndexed: true, hash: resultIndexed[indexedIndex++] });
                }
                else {
                    try {
                        result[index] = resultIndexed[indexedIndex++];
                    }
                    catch (error) {
                        result[index] = error;
                    }
                }
            }
            else {
                try {
                    result[index] = resultNonIndexed[nonIndexedIndex++];
                }
                catch (error) {
                    result[index] = error;
                }
            }
            // Add the keyword argument if named and safe
            if (param.name && result[param.name] == null) {
                const value = result[index];
                // Make error named values throw on access
                if (value instanceof Error) {
                    Object.defineProperty(result, param.name, {
                        get: () => { throw wrapAccessError(`property ${JSON.stringify(param.name)}`, value); }
                    });
                }
                else {
                    result[param.name] = value;
                }
            }
        });
        // Make all error indexed values throw on access
        for (let i = 0; i < result.length; i++) {
            const value = result[i];
            if (value instanceof Error) {
                Object.defineProperty(result, i, {
                    get: () => { throw wrapAccessError(`index ${i}`, value); }
                });
            }
        }
        return Object.freeze(result);
    }
    // Given a transaction, find the matching function fragment (if any) and
    // determine all its properties and call parameters
    parseTransaction(tx) {
        let fragment = this.getFunction(tx.data.substring(0, 10).toLowerCase());
        if (!fragment) {
            return null;
        }
        return new TransactionDescription({
            args: this._abiCoder.decode(fragment.inputs, "0x" + tx.data.substring(10)),
            functionFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            sighash: this.getSighash(fragment),
            value: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__/* .BigNumber.from */ .O$.from(tx.value || "0"),
        });
    }
    // @TODO
    //parseCallResult(data: BytesLike): ??
    // Given an event log, find the matching event fragment (if any) and
    // determine all its properties and values
    parseLog(log) {
        let fragment = this.getEvent(log.topics[0]);
        if (!fragment || fragment.anonymous) {
            return null;
        }
        // @TODO: If anonymous, and the only method, and the input count matches, should we parse?
        //        Probably not, because just because it is the only event in the ABI does
        //        not mean we have the full ABI; maybe jsut a fragment?
        return new LogDescription({
            eventFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            topic: this.getEventTopic(fragment),
            args: this.decodeEventLog(fragment, log.data, log.topics)
        });
    }
    parseError(data) {
        const hexData = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(data);
        let fragment = this.getError(hexData.substring(0, 10).toLowerCase());
        if (!fragment) {
            return null;
        }
        return new ErrorDescription({
            args: this._abiCoder.decode(fragment.inputs, "0x" + hexData.substring(10)),
            errorFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            sighash: this.getSighash(fragment),
        });
    }
    /*
    static from(value: Array<Fragment | string | JsonAbi> | string | Interface) {
        if (Interface.isInterface(value)) {
            return value;
        }
        if (typeof(value) === "string") {
            return new Interface(JSON.parse(value));
        }
        return new Interface(value);
    }
    */
    static isInterface(value) {
        return !!(value && value._isInterface);
    }
}
//# sourceMappingURL=interface.js.map

/***/ })

}]);