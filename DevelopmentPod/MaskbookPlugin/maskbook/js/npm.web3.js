(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8019],{

/***/ 10592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Web3 = __webpack_require__(24373);

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
    window.Web3 = Web3;
}

module.exports = Web3;


/***/ }),

/***/ 54489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

/**
 * SolidityTypeAddress is a prootype that represents address type
 * It matches:
 * address
 * address[]
 * address[4]
 * address[][]
 * address[3][]
 * address[][6][], ...
 */
var SolidityTypeAddress = function () {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputAddress;
};

SolidityTypeAddress.prototype = new SolidityType({});
SolidityTypeAddress.prototype.constructor = SolidityTypeAddress;

SolidityTypeAddress.prototype.isType = function (name) {
    return !!name.match(/address(\[([0-9]*)\])?/);
};

module.exports = SolidityTypeAddress;


/***/ }),

/***/ 83734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

/**
 * SolidityTypeBool is a prootype that represents bool type
 * It matches:
 * bool
 * bool[]
 * bool[4]
 * bool[][]
 * bool[3][]
 * bool[][6][], ...
 */
var SolidityTypeBool = function () {
    this._inputFormatter = f.formatInputBool;
    this._outputFormatter = f.formatOutputBool;
};

SolidityTypeBool.prototype = new SolidityType({});
SolidityTypeBool.prototype.constructor = SolidityTypeBool;

SolidityTypeBool.prototype.isType = function (name) {
    return !!name.match(/^bool(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeBool;


/***/ }),

/***/ 3000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

/**
 * SolidityTypeBytes is a prototype that represents the bytes type.
 * It matches:
 * bytes
 * bytes[]
 * bytes[4]
 * bytes[][]
 * bytes[3][]
 * bytes[][6][], ...
 * bytes32
 * bytes8[4]
 * bytes[3][]
 */
var SolidityTypeBytes = function () {
    this._inputFormatter = f.formatInputBytes;
    this._outputFormatter = f.formatOutputBytes;
};

SolidityTypeBytes.prototype = new SolidityType({});
SolidityTypeBytes.prototype.constructor = SolidityTypeBytes;

SolidityTypeBytes.prototype.isType = function (name) {
    return !!name.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeBytes;


/***/ }),

/***/ 61928:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file coder.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var f = __webpack_require__(19474);

var SolidityTypeAddress = __webpack_require__(54489);
var SolidityTypeBool = __webpack_require__(83734);
var SolidityTypeInt = __webpack_require__(1925);
var SolidityTypeUInt = __webpack_require__(2496);
var SolidityTypeDynamicBytes = __webpack_require__(17700);
var SolidityTypeString = __webpack_require__(34567);
var SolidityTypeReal = __webpack_require__(53502);
var SolidityTypeUReal = __webpack_require__(81739);
var SolidityTypeBytes = __webpack_require__(3000);

var isDynamic = function (solidityType, type) {
   return solidityType.isDynamicType(type) ||
          solidityType.isDynamicArray(type);
};

/**
 * SolidityCoder prototype should be used to encode/decode solidity params of any type
 */
var SolidityCoder = function (types) {
    this._types = types;
};

/**
 * This method should be used to transform type to SolidityType
 *
 * @method _requireType
 * @param {String} type
 * @returns {SolidityType}
 * @throws {Error} throws if no matching type is found
 */
SolidityCoder.prototype._requireType = function (type) {
    var solidityType = this._types.filter(function (t) {
        return t.isType(type);
    })[0];

    if (!solidityType) {
        throw Error('invalid solidity type!: ' + type);
    }

    return solidityType;
};

/**
 * Should be used to encode plain param
 *
 * @method encodeParam
 * @param {String} type
 * @param {Object} plain param
 * @return {String} encoded plain param
 */
SolidityCoder.prototype.encodeParam = function (type, param) {
    return this.encodeParams([type], [param]);
};

/**
 * Should be used to encode list of params
 *
 * @method encodeParams
 * @param {Array} types
 * @param {Array} params
 * @return {String} encoded list of params
 */
SolidityCoder.prototype.encodeParams = function (types, params) {
    var solidityTypes = this.getSolidityTypes(types);

    var encodeds = solidityTypes.map(function (solidityType, index) {
        return solidityType.encode(params[index], types[index]);
    });

    var dynamicOffset = solidityTypes.reduce(function (acc, solidityType, index) {
        var staticPartLength = solidityType.staticPartLength(types[index]);
        var roundedStaticPartLength = Math.floor((staticPartLength + 31) / 32) * 32;

        return acc + (isDynamic(solidityTypes[index], types[index]) ?
            32 :
            roundedStaticPartLength);
    }, 0);

    var result = this.encodeMultiWithOffset(types, solidityTypes, encodeds, dynamicOffset);

    return result;
};

SolidityCoder.prototype.encodeMultiWithOffset = function (types, solidityTypes, encodeds, dynamicOffset) {
    var result = "";
    var self = this;

    types.forEach(function (type, i) {
        if (isDynamic(solidityTypes[i], types[i])) {
            result += f.formatInputInt(dynamicOffset).encode();
            var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
            dynamicOffset += e.length / 2;
        } else {
            // don't add length to dynamicOffset. it's already counted
            result += self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
        }

        // TODO: figure out nested arrays
    });

    types.forEach(function (type, i) {
        if (isDynamic(solidityTypes[i], types[i])) {
            var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
            dynamicOffset += e.length / 2;
            result += e;
        }
    });
    return result;
};

SolidityCoder.prototype.encodeWithOffset = function (type, solidityType, encoded, offset) {
    /* jshint maxcomplexity: 17 */
    /* jshint maxdepth: 5 */

    var self = this;
    var encodingMode={dynamic:1,static:2,other:3};

    var mode=(solidityType.isDynamicArray(type)?encodingMode.dynamic:(solidityType.isStaticArray(type)?encodingMode.static:encodingMode.other));

    if(mode !== encodingMode.other){
        var nestedName = solidityType.nestedName(type);
        var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
        var result = (mode === encodingMode.dynamic ? encoded[0] : '');

        if (solidityType.isDynamicArray(nestedName)) {
            var previousLength = (mode === encodingMode.dynamic ? 2 : 0);

            for (var i = 0; i < encoded.length; i++) {
                // calculate length of previous item
                if(mode === encodingMode.dynamic){
                    previousLength += +(encoded[i - 1])[0] || 0;
                }
                else if(mode === encodingMode.static){
                    previousLength += +(encoded[i - 1] || [])[0] || 0;
                }
                result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
            }
        }

        var len= (mode === encodingMode.dynamic ? encoded.length-1 : encoded.length);
        for (var c = 0; c < len; c++) {
            var additionalOffset = result / 2;
            if(mode === encodingMode.dynamic){
                result += self.encodeWithOffset(nestedName, solidityType, encoded[c + 1], offset +  additionalOffset);
            }
            else if(mode === encodingMode.static){
                result += self.encodeWithOffset(nestedName, solidityType, encoded[c], offset + additionalOffset);
            }
        }

        return result;
    }

    return encoded;
};


/**
 * Should be used to decode bytes to plain param
 *
 * @method decodeParam
 * @param {String} type
 * @param {String} bytes
 * @return {Object} plain param
 */
SolidityCoder.prototype.decodeParam = function (type, bytes) {
    return this.decodeParams([type], bytes)[0];
};

/**
 * Should be used to decode list of params
 *
 * @method decodeParam
 * @param {Array} types
 * @param {String} bytes
 * @return {Array} array of plain params
 */
SolidityCoder.prototype.decodeParams = function (types, bytes) {
    var solidityTypes = this.getSolidityTypes(types);
    var offsets = this.getOffsets(types, solidityTypes);

    return solidityTypes.map(function (solidityType, index) {
        return solidityType.decode(bytes, offsets[index],  types[index], index);
    });
};

SolidityCoder.prototype.getOffsets = function (types, solidityTypes) {
    var lengths =  solidityTypes.map(function (solidityType, index) {
        return solidityType.staticPartLength(types[index]);
    });

    for (var i = 1; i < lengths.length; i++) {
         // sum with length of previous element
        lengths[i] += lengths[i - 1];
    }

    return lengths.map(function (length, index) {
        // remove the current length, so the length is sum of previous elements
        var staticPartLength = solidityTypes[index].staticPartLength(types[index]);
        return length - staticPartLength;
    });
};

SolidityCoder.prototype.getSolidityTypes = function (types) {
    var self = this;
    return types.map(function (type) {
        return self._requireType(type);
    });
};

var coder = new SolidityCoder([
    new SolidityTypeAddress(),
    new SolidityTypeBool(),
    new SolidityTypeInt(),
    new SolidityTypeUInt(),
    new SolidityTypeDynamicBytes(),
    new SolidityTypeBytes(),
    new SolidityTypeString(),
    new SolidityTypeReal(),
    new SolidityTypeUReal()
]);

module.exports = coder;


/***/ }),

/***/ 17700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

var SolidityTypeDynamicBytes = function () {
    this._inputFormatter = f.formatInputDynamicBytes;
    this._outputFormatter = f.formatOutputDynamicBytes;
};

SolidityTypeDynamicBytes.prototype = new SolidityType({});
SolidityTypeDynamicBytes.prototype.constructor = SolidityTypeDynamicBytes;

SolidityTypeDynamicBytes.prototype.isType = function (name) {
    return !!name.match(/^bytes(\[([0-9]*)\])*$/);
};

SolidityTypeDynamicBytes.prototype.isDynamicType = function () {
    return true;
};

module.exports = SolidityTypeDynamicBytes;


/***/ }),

/***/ 19474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file formatters.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var BigNumber = __webpack_require__(49387);
var utils = __webpack_require__(70472);
var c = __webpack_require__(66433);
var SolidityParam = __webpack_require__(17590);


/**
 * Formats input value to byte representation of int
 * If value is negative, return it's two's complement
 * If the value is floating point, round it down
 *
 * @method formatInputInt
 * @param {String|Number|BigNumber} value that needs to be formatted
 * @returns {SolidityParam}
 */
var formatInputInt = function (value) {
    BigNumber.config(c.ETH_BIGNUMBER_ROUNDING_MODE);
    var result = utils.padLeft(utils.toTwosComplement(value).toString(16), 64);
    return new SolidityParam(result);
};

/**
 * Formats input bytes
 *
 * @method formatInputBytes
 * @param {String}
 * @returns {SolidityParam}
 */
var formatInputBytes = function (value) {
    var result = utils.toHex(value).substr(2);
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(result);
};

/**
 * Formats input bytes
 *
 * @method formatDynamicInputBytes
 * @param {String}
 * @returns {SolidityParam}
 */
var formatInputDynamicBytes = function (value) {
    var result = utils.toHex(value).substr(2);
    var length = result.length / 2;
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(formatInputInt(length).value + result);
};

/**
 * Formats input value to byte representation of string
 *
 * @method formatInputString
 * @param {String}
 * @returns {SolidityParam}
 */
var formatInputString = function (value) {
    var result = utils.fromUtf8(value).substr(2);
    var length = result.length / 2;
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(formatInputInt(length).value + result);
};

/**
 * Formats input value to byte representation of bool
 *
 * @method formatInputBool
 * @param {Boolean}
 * @returns {SolidityParam}
 */
var formatInputBool = function (value) {
    var result = '000000000000000000000000000000000000000000000000000000000000000' + (value ?  '1' : '0');
    return new SolidityParam(result);
};

/**
 * Formats input value to byte representation of real
 * Values are multiplied by 2^m and encoded as integers
 *
 * @method formatInputReal
 * @param {String|Number|BigNumber}
 * @returns {SolidityParam}
 */
var formatInputReal = function (value) {
    return formatInputInt(new BigNumber(value).times(new BigNumber(2).pow(128)));
};

/**
 * Check if input value is negative
 *
 * @method signedIsNegative
 * @param {String} value is hex format
 * @returns {Boolean} true if it is negative, otherwise false
 */
var signedIsNegative = function (value) {
    return (new BigNumber(value.substr(0, 1), 16).toString(2).substr(0, 1)) === '1';
};

/**
 * Formats right-aligned output bytes to int
 *
 * @method formatOutputInt
 * @param {SolidityParam} param
 * @returns {BigNumber} right-aligned output bytes formatted to big number
 */
var formatOutputInt = function (param) {
    var value = param.staticPart() || "0";

    // check if it's negative number
    // it it is, return two's complement
    if (signedIsNegative(value)) {
        return new BigNumber(value, 16).minus(new BigNumber('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)).minus(1);
    }
    return new BigNumber(value, 16);
};

/**
 * Formats right-aligned output bytes to uint
 *
 * @method formatOutputUInt
 * @param {SolidityParam}
 * @returns {BigNumeber} right-aligned output bytes formatted to uint
 */
var formatOutputUInt = function (param) {
    var value = param.staticPart() || "0";
    return new BigNumber(value, 16);
};

/**
 * Formats right-aligned output bytes to real
 *
 * @method formatOutputReal
 * @param {SolidityParam}
 * @returns {BigNumber} input bytes formatted to real
 */
var formatOutputReal = function (param) {
    return formatOutputInt(param).dividedBy(new BigNumber(2).pow(128));
};

/**
 * Formats right-aligned output bytes to ureal
 *
 * @method formatOutputUReal
 * @param {SolidityParam}
 * @returns {BigNumber} input bytes formatted to ureal
 */
var formatOutputUReal = function (param) {
    return formatOutputUInt(param).dividedBy(new BigNumber(2).pow(128));
};

/**
 * Should be used to format output bool
 *
 * @method formatOutputBool
 * @param {SolidityParam}
 * @returns {Boolean} right-aligned input bytes formatted to bool
 */
var formatOutputBool = function (param) {
    return param.staticPart() === '0000000000000000000000000000000000000000000000000000000000000001' ? true : false;
};

/**
 * Should be used to format output bytes
 *
 * @method formatOutputBytes
 * @param {SolidityParam} left-aligned hex representation of string
 * @param {String} name type name
 * @returns {String} hex string
 */
var formatOutputBytes = function (param, name) {
    var matches = name.match(/^bytes([0-9]*)/);
    var size = parseInt(matches[1]);
    return '0x' + param.staticPart().slice(0, 2 * size);
};

/**
 * Should be used to format output bytes
 *
 * @method formatOutputDynamicBytes
 * @param {SolidityParam} left-aligned hex representation of string
 * @returns {String} hex string
 */
var formatOutputDynamicBytes = function (param) {
    var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
    return '0x' + param.dynamicPart().substr(64, length);
};

/**
 * Should be used to format output string
 *
 * @method formatOutputString
 * @param {SolidityParam} left-aligned hex representation of string
 * @returns {String} ascii string
 */
var formatOutputString = function (param) {
    var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
    return utils.toUtf8(param.dynamicPart().substr(64, length));
};

/**
 * Should be used to format output address
 *
 * @method formatOutputAddress
 * @param {SolidityParam} right-aligned input bytes
 * @returns {String} address
 */
var formatOutputAddress = function (param) {
    var value = param.staticPart();
    return "0x" + value.slice(value.length - 40, value.length);
};

module.exports = {
    formatInputInt: formatInputInt,
    formatInputBytes: formatInputBytes,
    formatInputDynamicBytes: formatInputDynamicBytes,
    formatInputString: formatInputString,
    formatInputBool: formatInputBool,
    formatInputReal: formatInputReal,
    formatOutputInt: formatOutputInt,
    formatOutputUInt: formatOutputUInt,
    formatOutputReal: formatOutputReal,
    formatOutputUReal: formatOutputUReal,
    formatOutputBool: formatOutputBool,
    formatOutputBytes: formatOutputBytes,
    formatOutputDynamicBytes: formatOutputDynamicBytes,
    formatOutputString: formatOutputString,
    formatOutputAddress: formatOutputAddress
};


/***/ }),

/***/ 1925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

/**
 * SolidityTypeInt is a prootype that represents int type
 * It matches:
 * int
 * int[]
 * int[4]
 * int[][]
 * int[3][]
 * int[][6][], ...
 * int32
 * int64[]
 * int8[4]
 * int256[][]
 * int[3][]
 * int64[][6][], ...
 */
var SolidityTypeInt = function () {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputInt;
};

SolidityTypeInt.prototype = new SolidityType({});
SolidityTypeInt.prototype.constructor = SolidityTypeInt;

SolidityTypeInt.prototype.isType = function (name) {
    return !!name.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeInt;


/***/ }),

/***/ 17590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file param.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var utils = __webpack_require__(70472);

/**
 * SolidityParam object prototype.
 * Should be used when encoding, decoding solidity bytes
 */
var SolidityParam = function (value, offset) {
    this.value = value || '';
    this.offset = offset; // offset in bytes
};

/**
 * This method should be used to get length of params's dynamic part
 * 
 * @method dynamicPartLength
 * @returns {Number} length of dynamic part (in bytes)
 */
SolidityParam.prototype.dynamicPartLength = function () {
    return this.dynamicPart().length / 2;
};

/**
 * This method should be used to create copy of solidity param with different offset
 *
 * @method withOffset
 * @param {Number} offset length in bytes
 * @returns {SolidityParam} new solidity param with applied offset
 */
SolidityParam.prototype.withOffset = function (offset) {
    return new SolidityParam(this.value, offset);
};

/**
 * This method should be used to combine solidity params together
 * eg. when appending an array
 *
 * @method combine
 * @param {SolidityParam} param with which we should combine
 * @param {SolidityParam} result of combination
 */
SolidityParam.prototype.combine = function (param) {
    return new SolidityParam(this.value + param.value); 
};

/**
 * This method should be called to check if param has dynamic size.
 * If it has, it returns true, otherwise false
 *
 * @method isDynamic
 * @returns {Boolean}
 */
SolidityParam.prototype.isDynamic = function () {
    return this.offset !== undefined;
};

/**
 * This method should be called to transform offset to bytes
 *
 * @method offsetAsBytes
 * @returns {String} bytes representation of offset
 */
SolidityParam.prototype.offsetAsBytes = function () {
    return !this.isDynamic() ? '' : utils.padLeft(utils.toTwosComplement(this.offset).toString(16), 64);
};

/**
 * This method should be called to get static part of param
 *
 * @method staticPart
 * @returns {String} offset if it is a dynamic param, otherwise value
 */
SolidityParam.prototype.staticPart = function () {
    if (!this.isDynamic()) {
        return this.value; 
    } 
    return this.offsetAsBytes();
};

/**
 * This method should be called to get dynamic part of param
 *
 * @method dynamicPart
 * @returns {String} returns a value if it is a dynamic param, otherwise empty string
 */
SolidityParam.prototype.dynamicPart = function () {
    return this.isDynamic() ? this.value : '';
};

/**
 * This method should be called to encode param
 *
 * @method encode
 * @returns {String}
 */
SolidityParam.prototype.encode = function () {
    return this.staticPart() + this.dynamicPart();
};

/**
 * This method should be called to encode array of params
 *
 * @method encodeList
 * @param {Array[SolidityParam]} params
 * @returns {String}
 */
SolidityParam.encodeList = function (params) {
    
    // updating offsets
    var totalOffset = params.length * 32;
    var offsetParams = params.map(function (param) {
        if (!param.isDynamic()) {
            return param;
        }
        var offset = totalOffset;
        totalOffset += param.dynamicPartLength();
        return param.withOffset(offset);
    });

    // encode everything!
    return offsetParams.reduce(function (result, param) {
        return result + param.dynamicPart();
    }, offsetParams.reduce(function (result, param) {
        return result + param.staticPart();
    }, ''));
};



module.exports = SolidityParam;



/***/ }),

/***/ 53502:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

/**
 * SolidityTypeReal is a prootype that represents real type
 * It matches:
 * real
 * real[]
 * real[4]
 * real[][]
 * real[3][]
 * real[][6][], ...
 * real32
 * real64[]
 * real8[4]
 * real256[][]
 * real[3][]
 * real64[][6][], ...
 */
var SolidityTypeReal = function () {
    this._inputFormatter = f.formatInputReal;
    this._outputFormatter = f.formatOutputReal;
};

SolidityTypeReal.prototype = new SolidityType({});
SolidityTypeReal.prototype.constructor = SolidityTypeReal;

SolidityTypeReal.prototype.isType = function (name) {
    return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);
};

module.exports = SolidityTypeReal;


/***/ }),

/***/ 34567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

var SolidityTypeString = function () {
    this._inputFormatter = f.formatInputString;
    this._outputFormatter = f.formatOutputString;
};

SolidityTypeString.prototype = new SolidityType({});
SolidityTypeString.prototype.constructor = SolidityTypeString;

SolidityTypeString.prototype.isType = function (name) {
    return !!name.match(/^string(\[([0-9]*)\])*$/);
};

SolidityTypeString.prototype.isDynamicType = function () {
    return true;
};

module.exports = SolidityTypeString;


/***/ }),

/***/ 29215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityParam = __webpack_require__(17590);

/**
 * SolidityType prototype is used to encode/decode solidity params of certain type
 */
var SolidityType = function (config) {
    this._inputFormatter = config.inputFormatter;
    this._outputFormatter = config.outputFormatter;
};

/**
 * Should be used to determine if this SolidityType do match given name
 *
 * @method isType
 * @param {String} name
 * @return {Bool} true if type match this SolidityType, otherwise false
 */
SolidityType.prototype.isType = function (name) {
    throw "this method should be overrwritten for type " + name;
};

/**
 * Should be used to determine what is the length of static part in given type
 *
 * @method staticPartLength
 * @param {String} name
 * @return {Number} length of static part in bytes
 */
SolidityType.prototype.staticPartLength = function (name) {
    // If name isn't an array then treat it like a single element array.
    return (this.nestedTypes(name) || ['[1]'])
        .map(function (type) {
            // the length of the nested array
            return parseInt(type.slice(1, -1), 10) || 1;
        })
        .reduce(function (previous, current) {
            return previous * current;
        // all basic types are 32 bytes long
        }, 32);
};

/**
 * Should be used to determine if type is dynamic array
 * eg:
 * "type[]" => true
 * "type[4]" => false
 *
 * @method isDynamicArray
 * @param {String} name
 * @return {Bool} true if the type is dynamic array
 */
SolidityType.prototype.isDynamicArray = function (name) {
    var nestedTypes = this.nestedTypes(name);
    return !!nestedTypes && !nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
};

/**
 * Should be used to determine if type is static array
 * eg:
 * "type[]" => false
 * "type[4]" => true
 *
 * @method isStaticArray
 * @param {String} name
 * @return {Bool} true if the type is static array
 */
SolidityType.prototype.isStaticArray = function (name) {
    var nestedTypes = this.nestedTypes(name);
    return !!nestedTypes && !!nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
};

/**
 * Should return length of static array
 * eg.
 * "int[32]" => 32
 * "int256[14]" => 14
 * "int[2][3]" => 3
 * "int" => 1
 * "int[1]" => 1
 * "int[]" => 1
 *
 * @method staticArrayLength
 * @param {String} name
 * @return {Number} static array length
 */
SolidityType.prototype.staticArrayLength = function (name) {
    var nestedTypes = this.nestedTypes(name);
    if (nestedTypes) {
       return parseInt(nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g) || 1);
    }
    return 1;
};

/**
 * Should return nested type
 * eg.
 * "int[32]" => "int"
 * "int256[14]" => "int256"
 * "int[2][3]" => "int[2]"
 * "int" => "int"
 * "int[]" => "int"
 *
 * @method nestedName
 * @param {String} name
 * @return {String} nested name
 */
SolidityType.prototype.nestedName = function (name) {
    // remove last [] in name
    var nestedTypes = this.nestedTypes(name);
    if (!nestedTypes) {
        return name;
    }

    return name.substr(0, name.length - nestedTypes[nestedTypes.length - 1].length);
};

/**
 * Should return true if type has dynamic size by default
 * such types are "string", "bytes"
 *
 * @method isDynamicType
 * @param {String} name
 * @return {Bool} true if is dynamic, otherwise false
 */
SolidityType.prototype.isDynamicType = function () {
    return false;
};

/**
 * Should return array of nested types
 * eg.
 * "int[2][3][]" => ["[2]", "[3]", "[]"]
 * "int[] => ["[]"]
 * "int" => null
 *
 * @method nestedTypes
 * @param {String} name
 * @return {Array} array of nested types
 */
SolidityType.prototype.nestedTypes = function (name) {
    // return list of strings eg. "[]", "[3]", "[]", "[2]"
    return name.match(/(\[[0-9]*\])/g);
};

/**
 * Should be used to encode the value
 *
 * @method encode
 * @param {Object} value
 * @param {String} name
 * @return {String} encoded value
 */
SolidityType.prototype.encode = function (value, name) {
    var self = this;
    if (this.isDynamicArray(name)) {

        return (function () {
            var length = value.length;                          // in int
            var nestedName = self.nestedName(name);

            var result = [];
            result.push(f.formatInputInt(length).encode());

            value.forEach(function (v) {
                result.push(self.encode(v, nestedName));
            });

            return result;
        })();

    } else if (this.isStaticArray(name)) {

        return (function () {
            var length = self.staticArrayLength(name);          // in int
            var nestedName = self.nestedName(name);

            var result = [];
            for (var i = 0; i < length; i++) {
                result.push(self.encode(value[i], nestedName));
            }

            return result;
        })();

    }

    return this._inputFormatter(value, name).encode();
};

/**
 * Should be used to decode value from bytes
 *
 * @method decode
 * @param {String} bytes
 * @param {Number} offset in bytes
 * @param {String} name type name
 * @returns {Object} decoded value
 */
SolidityType.prototype.decode = function (bytes, offset, name) {
    var self = this;

    if (this.isDynamicArray(name)) {

        return (function () {
            var arrayOffset = parseInt('0x' + bytes.substr(offset * 2, 64)); // in bytes
            var length = parseInt('0x' + bytes.substr(arrayOffset * 2, 64)); // in int
            var arrayStart = arrayOffset + 32; // array starts after length; // in bytes

            var nestedName = self.nestedName(name);
            var nestedStaticPartLength = self.staticPartLength(nestedName);  // in bytes
            var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
            var result = [];

            for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
                result.push(self.decode(bytes, arrayStart + i, nestedName));
            }

            return result;
        })();

    } else if (this.isStaticArray(name)) {

        return (function () {
            var length = self.staticArrayLength(name);                      // in int
            var arrayStart = offset;                                        // in bytes

            var nestedName = self.nestedName(name);
            var nestedStaticPartLength = self.staticPartLength(nestedName); // in bytes
            var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
            var result = [];

            for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
                result.push(self.decode(bytes, arrayStart + i, nestedName));
            }

            return result;
        })();
    } else if (this.isDynamicType(name)) {

        return (function () {
            var dynamicOffset = parseInt('0x' + bytes.substr(offset * 2, 64));      // in bytes
            var length = parseInt('0x' + bytes.substr(dynamicOffset * 2, 64));      // in bytes
            var roundedLength = Math.floor((length + 31) / 32);                     // in int
            var param = new SolidityParam(bytes.substr(dynamicOffset * 2, ( 1 + roundedLength) * 64), 0);
            return self._outputFormatter(param, name);
        })();
    }

    var length = this.staticPartLength(name);
    var param = new SolidityParam(bytes.substr(offset * 2, length * 2));
    return this._outputFormatter(param, name);
};

module.exports = SolidityType;


/***/ }),

/***/ 2496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

/**
 * SolidityTypeUInt is a prootype that represents uint type
 * It matches:
 * uint
 * uint[]
 * uint[4]
 * uint[][]
 * uint[3][]
 * uint[][6][], ...
 * uint32
 * uint64[]
 * uint8[4]
 * uint256[][]
 * uint[3][]
 * uint64[][6][], ...
 */
var SolidityTypeUInt = function () {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputUInt;
};

SolidityTypeUInt.prototype = new SolidityType({});
SolidityTypeUInt.prototype.constructor = SolidityTypeUInt;

SolidityTypeUInt.prototype.isType = function (name) {
    return !!name.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeUInt;


/***/ }),

/***/ 81739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var f = __webpack_require__(19474);
var SolidityType = __webpack_require__(29215);

/**
 * SolidityTypeUReal is a prootype that represents ureal type
 * It matches:
 * ureal
 * ureal[]
 * ureal[4]
 * ureal[][]
 * ureal[3][]
 * ureal[][6][], ...
 * ureal32
 * ureal64[]
 * ureal8[4]
 * ureal256[][]
 * ureal[3][]
 * ureal64[][6][], ...
 */
var SolidityTypeUReal = function () {
    this._inputFormatter = f.formatInputReal;
    this._outputFormatter = f.formatOutputUReal;
};

SolidityTypeUReal.prototype = new SolidityType({});
SolidityTypeUReal.prototype.constructor = SolidityTypeUReal;

SolidityTypeUReal.prototype.isType = function (name) {
    return !!name.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeUReal;


/***/ }),

/***/ 72787:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// go env doesn't have and need XMLHttpRequest
if (typeof XMLHttpRequest === 'undefined') {
    exports.h = {};
} else {
    exports.h = XMLHttpRequest; // jshint ignore:line
}



/***/ }),

/***/ 66433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file config.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

/**
 * Utils
 * 
 * @module utils
 */

/**
 * Utility functions
 * 
 * @class [utils] config
 * @constructor
 */


/// required to define ETH_BIGNUMBER_ROUNDING_MODE
var BigNumber = __webpack_require__(49387);

var ETH_UNITS = [
    'wei',
    'kwei',
    'Mwei',
    'Gwei',
    'szabo',
    'finney',
    'femtoether',
    'picoether',
    'nanoether',
    'microether',
    'milliether',
    'nano',
    'micro',
    'milli',
    'ether',
    'grand',
    'Mether',
    'Gether',
    'Tether',
    'Pether',
    'Eether',
    'Zether',
    'Yether',
    'Nether',
    'Dether',
    'Vether',
    'Uether'
];

module.exports = {
    ETH_PADDING: 32,
    ETH_SIGNATURE_LENGTH: 4,
    ETH_UNITS: ETH_UNITS,
    ETH_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: BigNumber.ROUND_DOWN },
    ETH_POLLING_TIMEOUT: 1000/2,
    defaultBlock: 'latest',
    defaultAccount: undefined
};



/***/ }),

/***/ 50224:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file sha3.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var CryptoJS = __webpack_require__(17090);
var sha3 = __webpack_require__(98063);

module.exports = function (value, options) {
    if (options && options.encoding === 'hex') {
        if (value.length > 2 && value.substr(0, 2) === '0x') {
            value = value.substr(2);
        }
        value = CryptoJS.enc.Hex.parse(value);
    }

    return sha3(value, {
        outputLength: 256
    }).toString();
};



/***/ }),

/***/ 70472:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file utils.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

/**
 * Utils
 *
 * @module utils
 */

/**
 * Utility functions
 *
 * @class [utils] utils
 * @constructor
 */


var BigNumber = __webpack_require__(49387);
var sha3 = __webpack_require__(50224);
var utf8 = __webpack_require__(57078);

var unitMap = {
    'noether':      '0',
    'wei':          '1',
    'kwei':         '1000',
    'Kwei':         '1000',
    'babbage':      '1000',
    'femtoether':   '1000',
    'mwei':         '1000000',
    'Mwei':         '1000000',
    'lovelace':     '1000000',
    'picoether':    '1000000',
    'gwei':         '1000000000',
    'Gwei':         '1000000000',
    'shannon':      '1000000000',
    'nanoether':    '1000000000',
    'nano':         '1000000000',
    'szabo':        '1000000000000',
    'microether':   '1000000000000',
    'micro':        '1000000000000',
    'finney':       '1000000000000000',
    'milliether':   '1000000000000000',
    'milli':        '1000000000000000',
    'ether':        '1000000000000000000',
    'kether':       '1000000000000000000000',
    'grand':        '1000000000000000000000',
    'mether':       '1000000000000000000000000',
    'gether':       '1000000000000000000000000000',
    'tether':       '1000000000000000000000000000000'
};

/**
 * Should be called to pad string to expected length
 *
 * @method padLeft
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
var padLeft = function (string, chars, sign) {
    return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
};

/**
 * Should be called to pad string to expected length
 *
 * @method padRight
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */
var padRight = function (string, chars, sign) {
    return string + (new Array(chars - string.length + 1).join(sign ? sign : "0"));
};

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
var toUtf8 = function(hex) {
// Find termination
    var str = "";
    var i = 0, l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i+=2) {
        var code = parseInt(hex.substr(i, 2), 16);
        if (code === 0)
            break;
        str += String.fromCharCode(code);
    }

    return utf8.decode(str);
};

/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
var toAscii = function(hex) {
// Find termination
    var str = "";
    var i = 0, l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i+=2) {
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }

    return str;
};

/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Boolean} allowZero to convert code point zero to 00 instead of end of string
 * @returns {String} hex representation of input string
 */
var fromUtf8 = function(str, allowZero) {
    str = utf8.encode(str);
    var hex = "";
    for(var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code === 0) {
            if (allowZero) {
                hex += '00';
            } else {
                break;
            }
        } else {
            var n = code.toString(16);
            hex += n.length < 2 ? '0' + n : n;
        }
    }

    return "0x" + hex;
};

/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
var fromAscii = function(str, num) {
    var hex = "";
    for(var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
    }

    return "0x" + hex.padEnd(num,'0');
};

/**
 * Should be used to create full function/event name from json abi
 *
 * @method transformToFullName
 * @param {Object} json-abi
 * @return {String} full fnction/event name
 */
var transformToFullName = function (json) {
    if (json.name.indexOf('(') !== -1) {
        return json.name;
    }

    var typeName = json.inputs.map(function(i){return i.type; }).join();
    return json.name + '(' + typeName + ')';
};

/**
 * Should be called to get display name of contract function
 *
 * @method extractDisplayName
 * @param {String} name of function/event
 * @returns {String} display name for function/event eg. multiply(uint256) -> multiply
 */
var extractDisplayName = function (name) {
    var stBracket = name.indexOf('(');
    var endBracket = name.indexOf(')');
    return (stBracket !== -1 && endBracket !== -1) ? name.substr(0, stBracket) : name;
};

/**
 * Should be called to get type name of contract function
 *
 * @method extractTypeName
 * @param {String} name of function/event
 * @returns {String} type name for function/event eg. multiply(uint256) -> uint256
 */
var extractTypeName = function (name) {
    var stBracket = name.indexOf('(');
    var endBracket = name.indexOf(')');
    return (stBracket !== -1 && endBracket !== -1) ? name.substr(stBracket + 1, endBracket - stBracket - 1).replace(' ', '') : "";
};

/**
 * Converts value to it's decimal representation in string
 *
 * @method toDecimal
 * @param {String|Number|BigNumber}
 * @return {String}
 */
var toDecimal = function (value) {
    return toBigNumber(value).toNumber();
};

/**
 * Converts value to it's hex representation
 *
 * @method fromDecimal
 * @param {String|Number|BigNumber}
 * @return {String}
 */
var fromDecimal = function (value) {
    var number = toBigNumber(value);
    var result = number.toString(16);

    return number.lessThan(0) ? '-0x' + result.substr(1) : '0x' + result;
};

/**
 * Auto converts any given value into it's hex representation.
 *
 * And even stringifys objects before.
 *
 * @method toHex
 * @param {String|Number|BigNumber|Object}
 * @return {String}
 */
var toHex = function (val) {
    /*jshint maxcomplexity: 8 */

    if (isBoolean(val))
        return fromDecimal(+val);

    if (isBigNumber(val))
        return fromDecimal(val);

    if (typeof val === 'object')
        return fromUtf8(JSON.stringify(val));

    // if its a negative number, pass it through fromDecimal
    if (isString(val)) {
        if (val.indexOf('-0x') === 0)
            return fromDecimal(val);
        else if(val.indexOf('0x') === 0)
            return val;
        else if (!isFinite(val))
            return fromUtf8(val,1);
    }

    return fromDecimal(val);
};

/**
 * Returns value of unit in Wei
 *
 * @method getValueOfUnit
 * @param {String} unit the unit to convert to, default ether
 * @returns {BigNumber} value of the unit (in Wei)
 * @throws error if the unit is not correct:w
 */
var getValueOfUnit = function (unit) {
    unit = unit ? unit.toLowerCase() : 'ether';
    var unitValue = unitMap[unit];
    if (unitValue === undefined) {
        throw new Error('This unit doesn\'t exists, please use the one of the following units' + JSON.stringify(unitMap, null, 2));
    }
    return new BigNumber(unitValue, 10);
};

/**
 * Takes a number of wei and converts it to any other ether unit.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method fromWei
 * @param {Number|String} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert to, default ether
 * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
*/
var fromWei = function(number, unit) {
    var returnValue = toBigNumber(number).dividedBy(getValueOfUnit(unit));

    return isBigNumber(number) ? returnValue : returnValue.toString(10);
};

/**
 * Takes a number of a unit and converts it to wei.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method toWei
 * @param {Number|String|BigNumber} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert from, default ether
 * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
*/
var toWei = function(number, unit) {
    var returnValue = toBigNumber(number).times(getValueOfUnit(unit));

    return isBigNumber(number) ? returnValue : returnValue.toString(10);
};

/**
 * Takes an input and transforms it into an bignumber
 *
 * @method toBigNumber
 * @param {Number|String|BigNumber} a number, string, HEX string or BigNumber
 * @return {BigNumber} BigNumber
*/
var toBigNumber = function(number) {
    /*jshint maxcomplexity:5 */
    number = number || 0;
    if (isBigNumber(number))
        return number;

    if (isString(number) && (number.indexOf('0x') === 0 || number.indexOf('-0x') === 0)) {
        return new BigNumber(number.replace('0x',''), 16);
    }

    return new BigNumber(number.toString(10), 10);
};

/**
 * Takes and input transforms it into bignumber and if it is negative value, into two's complement
 *
 * @method toTwosComplement
 * @param {Number|String|BigNumber}
 * @return {BigNumber}
 */
var toTwosComplement = function (number) {
    var bigNumber = toBigNumber(number).round();
    if (bigNumber.lessThan(0)) {
        return new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16).plus(bigNumber).plus(1);
    }
    return bigNumber;
};

/**
 * Checks if the given string is strictly an address
 *
 * @method isStrictAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isStrictAddress = function (address) {
    return /^0x[0-9a-f]{40}$/i.test(address);
};

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isAddress = function (address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    } else {
        // Otherwise check each case
        return isChecksumAddress(address);
    }
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isChecksumAddress = function (address) {
    // Check each case
    address = address.replace('0x','');
    var addressHash = sha3(address.toLowerCase());

    for (var i = 0; i < 40; i++ ) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
};



/**
 * Makes a checksum address
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX adress
 * @return {String}
*/
var toChecksumAddress = function (address) {
    if (typeof address === 'undefined') return '';

    address = address.toLowerCase().replace('0x','');
    var addressHash = sha3(address);
    var checksumAddress = '0x';

    for (var i = 0; i < address.length; i++ ) {
        // If ith character is 9 to f then make it uppercase
        if (parseInt(addressHash[i], 16) > 7) {
          checksumAddress += address[i].toUpperCase();
        } else {
            checksumAddress += address[i];
        }
    }
    return checksumAddress;
};

/**
 * Transforms given string to valid 20 bytes-length addres with 0x prefix
 *
 * @method toAddress
 * @param {String} address
 * @return {String} formatted address
 */
var toAddress = function (address) {
    if (isStrictAddress(address)) {
        return address;
    }

    if (/^[0-9a-f]{40}$/.test(address)) {
        return '0x' + address;
    }

    return '0x' + padLeft(toHex(address).substr(2), 40);
};

/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 * @param {Object}
 * @return {Boolean}
 */
var isBigNumber = function (object) {
    return object instanceof BigNumber ||
        (object && object.constructor && object.constructor.name === 'BigNumber');
};

/**
 * Returns true if object is string, otherwise false
 *
 * @method isString
 * @param {Object}
 * @return {Boolean}
 */
var isString = function (object) {
    return typeof object === 'string' ||
        (object && object.constructor && object.constructor.name === 'String');
};

/**
 * Returns true if object is function, otherwise false
 *
 * @method isFunction
 * @param {Object}
 * @return {Boolean}
 */
var isFunction = function (object) {
    return typeof object === 'function';
};

/**
 * Returns true if object is Objet, otherwise false
 *
 * @method isObject
 * @param {Object}
 * @return {Boolean}
 */
var isObject = function (object) {
    return object !== null && !(Array.isArray(object)) && typeof object === 'object';
};

/**
 * Returns true if object is boolean, otherwise false
 *
 * @method isBoolean
 * @param {Object}
 * @return {Boolean}
 */
var isBoolean = function (object) {
    return typeof object === 'boolean';
};

/**
 * Returns true if object is array, otherwise false
 *
 * @method isArray
 * @param {Object}
 * @return {Boolean}
 */
var isArray = function (object) {
    return Array.isArray(object);
};

/**
 * Returns true if given string is valid json object
 *
 * @method isJson
 * @param {String}
 * @return {Boolean}
 */
var isJson = function (str) {
    try {
        return !!JSON.parse(str);
    } catch (e) {
        return false;
    }
};

/**
 * Returns true if given string is a valid Ethereum block header bloom.
 *
 * @method isBloom
 * @param {String} hex encoded bloom filter
 * @return {Boolean}
 */
var isBloom = function (bloom) {
    if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
        return true;
    }
    return false;
};

/**
 * Returns true if given string is a valid log topic.
 *
 * @method isTopic
 * @param {String} hex encoded topic
 * @return {Boolean}
 */
var isTopic = function (topic) {
    if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
        return true;
    }
    return false;
};

module.exports = {
    padLeft: padLeft,
    padRight: padRight,
    toHex: toHex,
    toDecimal: toDecimal,
    fromDecimal: fromDecimal,
    toUtf8: toUtf8,
    toAscii: toAscii,
    fromUtf8: fromUtf8,
    fromAscii: fromAscii,
    transformToFullName: transformToFullName,
    extractDisplayName: extractDisplayName,
    extractTypeName: extractTypeName,
    toWei: toWei,
    fromWei: fromWei,
    toBigNumber: toBigNumber,
    toTwosComplement: toTwosComplement,
    toAddress: toAddress,
    isBigNumber: isBigNumber,
    isStrictAddress: isStrictAddress,
    isAddress: isAddress,
    isChecksumAddress: isChecksumAddress,
    toChecksumAddress: toChecksumAddress,
    isFunction: isFunction,
    isString: isString,
    isObject: isObject,
    isBoolean: isBoolean,
    isArray: isArray,
    isJson: isJson,
    isBloom: isBloom,
    isTopic: isTopic,
};


/***/ }),

/***/ 24373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * web3.js - Ethereum JavaScript API
 *
 * @license lgpl-3.0
 * @see https://github.com/ethereum/web3.js
*/

/*
 * This file is part of web3.js.
 * 
 * web3.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * web3.js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @file web3.js
 * @authors:
 *   Jeffrey Wilcke <jeff@ethdev.com>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 *   Gav Wood <g@ethdev.com>
 * @date 2014
 */

var RequestManager = __webpack_require__(62768);
var Iban = __webpack_require__(29995);
var Eth = __webpack_require__(53444);
var DB = __webpack_require__(87419);
var Shh = __webpack_require__(39034);
var Net = __webpack_require__(92941);
var Personal = __webpack_require__(72601);
var Swarm = __webpack_require__(955);
var Settings = __webpack_require__(94923);
var version = __webpack_require__(74853);
var utils = __webpack_require__(70472);
var sha3 = __webpack_require__(50224);
var extend = __webpack_require__(28924);
var Batch = __webpack_require__(79379);
var Property = __webpack_require__(67130);
var HttpProvider = __webpack_require__(3086);
var IpcProvider = __webpack_require__(79369);
var BigNumber = __webpack_require__(49387);



function Web3 (provider) {
    this._requestManager = new RequestManager(provider);
    this.currentProvider = provider;
    this.eth = new Eth(this);
    this.db = new DB(this);
    this.shh = new Shh(this);
    this.net = new Net(this);
    this.personal = new Personal(this);
    this.bzz = new Swarm(this);
    this.settings = new Settings();
    this.version = {
        api: version.version
    };
    this.providers = {
        HttpProvider: HttpProvider,
        IpcProvider: IpcProvider
    };
    this._extend = extend(this);
    this._extend({
        properties: properties()
    });
}

// expose providers on the class
Web3.providers = {
    HttpProvider: HttpProvider,
    IpcProvider: IpcProvider
};

Web3.prototype.setProvider = function (provider) {
    this._requestManager.setProvider(provider);
    this.currentProvider = provider;
};

Web3.prototype.reset = function (keepIsSyncing) {
    this._requestManager.reset(keepIsSyncing);
    this.settings = new Settings();
};

Web3.prototype.BigNumber = BigNumber;
Web3.prototype.toHex = utils.toHex;
Web3.prototype.toAscii = utils.toAscii;
Web3.prototype.toUtf8 = utils.toUtf8;
Web3.prototype.fromAscii = utils.fromAscii;
Web3.prototype.fromUtf8 = utils.fromUtf8;
Web3.prototype.toDecimal = utils.toDecimal;
Web3.prototype.fromDecimal = utils.fromDecimal;
Web3.prototype.toBigNumber = utils.toBigNumber;
Web3.prototype.toWei = utils.toWei;
Web3.prototype.fromWei = utils.fromWei;
Web3.prototype.isAddress = utils.isAddress;
Web3.prototype.isChecksumAddress = utils.isChecksumAddress;
Web3.prototype.toChecksumAddress = utils.toChecksumAddress;
Web3.prototype.isIBAN = utils.isIBAN;
Web3.prototype.padLeft = utils.padLeft;
Web3.prototype.padRight = utils.padRight;


Web3.prototype.sha3 = function(string, options) {
    return '0x' + sha3(string, options);
};

/**
 * Transforms direct icap to address
 */
Web3.prototype.fromICAP = function (icap) {
    var iban = new Iban(icap);
    return iban.address();
};

var properties = function () {
    return [
        new Property({
            name: 'version.node',
            getter: 'web3_clientVersion'
        }),
        new Property({
            name: 'version.network',
            getter: 'net_version',
            inputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'version.ethereum',
            getter: 'eth_protocolVersion',
            inputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'version.whisper',
            getter: 'shh_version',
            inputFormatter: utils.toDecimal
        })
    ];
};

Web3.prototype.isConnected = function(){
    return (this.currentProvider && this.currentProvider.isConnected());
};

Web3.prototype.createBatch = function () {
    return new Batch(this);
};

module.exports = Web3;



/***/ }),

/***/ 19960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file allevents.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2014
 */

var sha3 = __webpack_require__(50224);
var SolidityEvent = __webpack_require__(4778);
var formatters = __webpack_require__(95096);
var utils = __webpack_require__(70472);
var Filter = __webpack_require__(91023);
var watches = __webpack_require__(94995);

var AllSolidityEvents = function (requestManager, json, address) {
    this._requestManager = requestManager;
    this._json = json;
    this._address = address;
};

AllSolidityEvents.prototype.encode = function (options) {
    options = options || {};
    var result = {};

    ['fromBlock', 'toBlock'].filter(function (f) {
        return options[f] !== undefined;
    }).forEach(function (f) {
        result[f] = formatters.inputBlockNumberFormatter(options[f]);
    });

    result.address = this._address;

    return result;
};

AllSolidityEvents.prototype.decode = function (data) {
    data.data = data.data || '';


    var eventTopic = (utils.isArray(data.topics) && utils.isString(data.topics[0])) ? data.topics[0].slice(2) : '';
    var match = this._json.filter(function (j) {
        return eventTopic === sha3(utils.transformToFullName(j));
    })[0];

    if (!match) { // cannot find matching event?
        return formatters.outputLogFormatter(data);
    }

    var event = new SolidityEvent(this._requestManager, match, this._address);
    return event.decode(data);
};

AllSolidityEvents.prototype.execute = function (options, callback) {

    if (utils.isFunction(arguments[arguments.length - 1])) {
        callback = arguments[arguments.length - 1];
        if(arguments.length === 1)
            options = null;
    }

    var o = this.encode(options);
    var formatter = this.decode.bind(this);
    return new Filter(o, 'eth', this._requestManager, watches.eth(), formatter, callback);
};

AllSolidityEvents.prototype.attachToContract = function (contract) {
    var execute = this.execute.bind(this);
    contract.allEvents = execute;
};

module.exports = AllSolidityEvents;



/***/ }),

/***/ 79379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file batch.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var Jsonrpc = __webpack_require__(85262);
var errors = __webpack_require__(48048);

var Batch = function (web3) {
    this.requestManager = web3._requestManager;
    this.requests = [];
};

/**
 * Should be called to add create new request to batch request
 *
 * @method add
 * @param {Object} jsonrpc requet object
 */
Batch.prototype.add = function (request) {
    this.requests.push(request);
};

/**
 * Should be called to execute batch request
 *
 * @method execute
 */
Batch.prototype.execute = function () {
    var requests = this.requests;
    this.requestManager.sendBatch(requests, function (err, results) {
        results = results || [];
        requests.map(function (request, index) {
            return results[index] || {};
        }).forEach(function (result, index) {
            if (requests[index].callback) {

                if (!Jsonrpc.isValidResponse(result)) {
                    return requests[index].callback(errors.InvalidResponse(result));
                }

                requests[index].callback(null, (requests[index].format ? requests[index].format(result.result) : result.result));
            }
        });
    }); 
};

module.exports = Batch;



/***/ }),

/***/ 65809:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file contract.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2014
 */

var utils = __webpack_require__(70472);
var coder = __webpack_require__(61928);
var SolidityEvent = __webpack_require__(4778);
var SolidityFunction = __webpack_require__(27100);
var AllEvents = __webpack_require__(19960);

/**
 * Should be called to encode constructor params
 *
 * @method encodeConstructorParams
 * @param {Array} abi
 * @param {Array} constructor params
 */
var encodeConstructorParams = function (abi, params) {
    return abi.filter(function (json) {
        return json.type === 'constructor' && json.inputs.length === params.length;
    }).map(function (json) {
        return json.inputs.map(function (input) {
            return input.type;
        });
    }).map(function (types) {
        return coder.encodeParams(types, params);
    })[0] || '';
};

/**
 * Should be called to add functions to contract object
 *
 * @method addFunctionsToContract
 * @param {Contract} contract
 * @param {Array} abi
 */
var addFunctionsToContract = function (contract) {
    contract.abi.filter(function (json) {
        return json.type === 'function';
    }).map(function (json) {
        return new SolidityFunction(contract._eth, json, contract.address);
    }).forEach(function (f) {
        f.attachToContract(contract);
    });
};

/**
 * Should be called to add events to contract object
 *
 * @method addEventsToContract
 * @param {Contract} contract
 * @param {Array} abi
 */
var addEventsToContract = function (contract) {
    var events = contract.abi.filter(function (json) {
        return json.type === 'event';
    });

    var All = new AllEvents(contract._eth._requestManager, events, contract.address);
    All.attachToContract(contract);

    events.map(function (json) {
        return new SolidityEvent(contract._eth._requestManager, json, contract.address);
    }).forEach(function (e) {
        e.attachToContract(contract);
    });
};


/**
 * Should be called to check if the contract gets properly deployed on the blockchain.
 *
 * @method checkForContractAddress
 * @param {Object} contract
 * @param {Function} callback
 * @returns {Undefined}
 */
var checkForContractAddress = function(contract, callback){
    var count = 0,
        callbackFired = false;

    // wait for receipt
    var filter = contract._eth.filter('latest', function(e){
        if (!e && !callbackFired) {
            count++;

            // stop watching after 50 blocks (timeout)
            if (count > 50) {

                filter.stopWatching(function() {});
                callbackFired = true;

                if (callback)
                    callback(new Error('Contract transaction couldn\'t be found after 50 blocks'));
                else
                    throw new Error('Contract transaction couldn\'t be found after 50 blocks');


            } else {

                contract._eth.getTransactionReceipt(contract.transactionHash, function(e, receipt){
                    if(receipt && receipt.blockHash && !callbackFired) {

                        contract._eth.getCode(receipt.contractAddress, function(e, code){
                            /*jshint maxcomplexity: 6 */

                            if(callbackFired || !code)
                                return;

                            filter.stopWatching(function() {});
                            callbackFired = true;

                            if(code.length > 3) {

                                // console.log('Contract code deployed!');

                                contract.address = receipt.contractAddress;

                                // attach events and methods again after we have
                                addFunctionsToContract(contract);
                                addEventsToContract(contract);

                                // call callback for the second time
                                if(callback)
                                    callback(null, contract);

                            } else {
                                if(callback)
                                    callback(new Error('The contract code couldn\'t be stored, please check your gas amount.'));
                                else
                                    throw new Error('The contract code couldn\'t be stored, please check your gas amount.');
                            }
                        });
                    }
                });
            }
        }
    });
};

/**
 * Should be called to create new ContractFactory instance
 *
 * @method ContractFactory
 * @param {Array} abi
 */
var ContractFactory = function (eth, abi) {
    this.eth = eth;
    this.abi = abi;

    /**
     * Should be called to create new contract on a blockchain
     *
     * @method new
     * @param {Any} contract constructor param1 (optional)
     * @param {Any} contract constructor param2 (optional)
     * @param {Object} contract transaction object (required)
     * @param {Function} callback
     * @returns {Contract} returns contract instance
     */
    this.new = function () {
        /*jshint maxcomplexity: 7 */

        var contract = new Contract(this.eth, this.abi);

        // parse arguments
        var options = {}; // required!
        var callback;

        var args = Array.prototype.slice.call(arguments);
        if (utils.isFunction(args[args.length - 1])) {
            callback = args.pop();
        }

        var last = args[args.length - 1];
        if (utils.isObject(last) && !utils.isArray(last)) {
            options = args.pop();
        }

        if (options.value > 0) {
            var constructorAbi = abi.filter(function (json) {
                return json.type === 'constructor' && json.inputs.length === args.length;
            })[0] || {};

            if (!constructorAbi.payable) {
                throw new Error('Cannot send value to non-payable constructor');
            }
        }

        var bytes = encodeConstructorParams(this.abi, args);
        options.data += bytes;

        if (callback) {

            // wait for the contract address and check if the code was deployed
            this.eth.sendTransaction(options, function (err, hash) {
                if (err) {
                    callback(err);
                } else {
                    // add the transaction hash
                    contract.transactionHash = hash;

                    // call callback for the first time
                    callback(null, contract);

                    checkForContractAddress(contract, callback);
                }
            });
        } else {
            var hash = this.eth.sendTransaction(options);
            // add the transaction hash
            contract.transactionHash = hash;
            checkForContractAddress(contract);
        }

        return contract;
    };

    this.new.getData = this.getData.bind(this);
};

/**
 * Should be called to create new ContractFactory
 *
 * @method contract
 * @param {Array} abi
 * @returns {ContractFactory} new contract factory
 */
//var contract = function (abi) {
    //return new ContractFactory(abi);
//};



/**
 * Should be called to get access to existing contract on a blockchain
 *
 * @method at
 * @param {Address} contract address (required)
 * @param {Function} callback {optional)
 * @returns {Contract} returns contract if no callback was passed,
 * otherwise calls callback function (err, contract)
 */
ContractFactory.prototype.at = function (address, callback) {
    var contract = new Contract(this.eth, this.abi, address);

    // this functions are not part of prototype,
    // because we dont want to spoil the interface
    addFunctionsToContract(contract);
    addEventsToContract(contract);

    if (callback) {
        callback(null, contract);
    }
    return contract;
};

/**
 * Gets the data, which is data to deploy plus constructor params
 *
 * @method getData
 */
ContractFactory.prototype.getData = function () {
    var options = {}; // required!
    var args = Array.prototype.slice.call(arguments);

    var last = args[args.length - 1];
    if (utils.isObject(last) && !utils.isArray(last)) {
        options = args.pop();
    }

    var bytes = encodeConstructorParams(this.abi, args);
    options.data += bytes;

    return options.data;
};

/**
 * Should be called to create new contract instance
 *
 * @method Contract
 * @param {Array} abi
 * @param {Address} contract address
 */
var Contract = function (eth, abi, address) {
    this._eth = eth;
    this.transactionHash = null;
    this.address = address;
    this.abi = abi;
};

module.exports = ContractFactory;


/***/ }),

/***/ 48048:
/***/ ((module) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file errors.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

module.exports = {
    InvalidNumberOfSolidityArgs: function () {
        return new Error('Invalid number of arguments to Solidity function');
    },
    InvalidNumberOfRPCParams: function () {
        return new Error('Invalid number of input parameters to RPC method');
    },
    InvalidConnection: function (host){
        return new Error('CONNECTION ERROR: Couldn\'t connect to node '+ host +'.');
    },
    InvalidProvider: function () {
        return new Error('Provider not set or invalid');
    },
    InvalidResponse: function (result){
        var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + JSON.stringify(result);
        return new Error(message);
    },
    ConnectionTimeout: function (ms){
        return new Error('CONNECTION TIMEOUT: timeout of ' + ms + ' ms achived');
    }
};


/***/ }),

/***/ 4778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file event.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2014
 */

var utils = __webpack_require__(70472);
var coder = __webpack_require__(61928);
var formatters = __webpack_require__(95096);
var sha3 = __webpack_require__(50224);
var Filter = __webpack_require__(91023);
var watches = __webpack_require__(94995);

/**
 * This prototype should be used to create event filters
 */
var SolidityEvent = function (requestManager, json, address) {
    this._requestManager = requestManager;
    this._params = json.inputs;
    this._name = utils.transformToFullName(json);
    this._address = address;
    this._anonymous = json.anonymous;
};

/**
 * Should be used to get filtered param types
 *
 * @method types
 * @param {Bool} decide if returned typed should be indexed
 * @return {Array} array of types
 */
SolidityEvent.prototype.types = function (indexed) {
    return this._params.filter(function (i) {
        return i.indexed === indexed;
    }).map(function (i) {
        return i.type;
    });
};

/**
 * Should be used to get event display name
 *
 * @method displayName
 * @return {String} event display name
 */
SolidityEvent.prototype.displayName = function () {
    return utils.extractDisplayName(this._name);
};

/**
 * Should be used to get event type name
 *
 * @method typeName
 * @return {String} event type name
 */
SolidityEvent.prototype.typeName = function () {
    return utils.extractTypeName(this._name);
};

/**
 * Should be used to get event signature
 *
 * @method signature
 * @return {String} event signature
 */
SolidityEvent.prototype.signature = function () {
    return sha3(this._name);
};

/**
 * Should be used to encode indexed params and options to one final object
 *
 * @method encode
 * @param {Object} indexed
 * @param {Object} options
 * @return {Object} everything combined together and encoded
 */
SolidityEvent.prototype.encode = function (indexed, options) {
    indexed = indexed || {};
    options = options || {};
    var result = {};

    ['fromBlock', 'toBlock'].filter(function (f) {
        return options[f] !== undefined;
    }).forEach(function (f) {
        result[f] = formatters.inputBlockNumberFormatter(options[f]);
    });

    result.topics = [];

    result.address = this._address;
    if (!this._anonymous) {
        result.topics.push('0x' + this.signature());
    }

    var indexedTopics = this._params.filter(function (i) {
        return i.indexed === true;
    }).map(function (i) {
        var value = indexed[i.name];
        if (value === undefined || value === null) {
            return null;
        }

        if (utils.isArray(value)) {
            return value.map(function (v) {
                return '0x' + coder.encodeParam(i.type, v);
            });
        }
        return '0x' + coder.encodeParam(i.type, value);
    });

    result.topics = result.topics.concat(indexedTopics);

    return result;
};

/**
 * Should be used to decode indexed params and options
 *
 * @method decode
 * @param {Object} data
 * @return {Object} result object with decoded indexed && not indexed params
 */
SolidityEvent.prototype.decode = function (data) {

    data.data = data.data || '';
    data.topics = data.topics || [];


    var argTopics = this._anonymous ? data.topics : data.topics.slice(1);
    var indexedData = argTopics.map(function (topics) { return topics.slice(2); }).join("");
    var indexedParams = coder.decodeParams(this.types(true), indexedData);

    var notIndexedData = data.data.slice(2);
    var notIndexedParams = coder.decodeParams(this.types(false), notIndexedData);

    var result = formatters.outputLogFormatter(data);
    result.event = this.displayName();
    result.address = data.address;

    result.args = this._params.reduce(function (acc, current) {
        acc[current.name] = current.indexed ? indexedParams.shift() : notIndexedParams.shift();
        return acc;
    }, {});

    delete result.data;
    delete result.topics;

    return result;
};

/**
 * Should be used to create new filter object from event
 *
 * @method execute
 * @param {Object} indexed
 * @param {Object} options
 * @return {Object} filter object
 */
SolidityEvent.prototype.execute = function (indexed, options, callback) {

    if (utils.isFunction(arguments[arguments.length - 1])) {
        callback = arguments[arguments.length - 1];
        if(arguments.length === 2)
            options = null;
        if(arguments.length === 1) {
            options = null;
            indexed = {};
        }
    }

    var o = this.encode(indexed, options);
    var formatter = this.decode.bind(this);
    return new Filter(o, 'eth', this._requestManager, watches.eth(), formatter, callback);
};

/**
 * Should be used to attach event to contract object
 *
 * @method attachToContract
 * @param {Contract}
 */
SolidityEvent.prototype.attachToContract = function (contract) {
    var execute = this.execute.bind(this);
    var displayName = this.displayName();
    if (!contract[displayName]) {
        contract[displayName] = execute;
    }
    contract[displayName][this.typeName()] = this.execute.bind(this, contract);
};

module.exports = SolidityEvent;



/***/ }),

/***/ 28924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var formatters = __webpack_require__(95096);
var utils = __webpack_require__(70472);
var Method = __webpack_require__(43161);
var Property = __webpack_require__(67130);

// TODO: refactor, so the input params are not altered.
// it's necessary to make same 'extension' work with multiple providers
var extend = function (web3) {
    /* jshint maxcomplexity:5 */
    var ex = function (extension) {

        var extendedObject;
        if (extension.property) {
            if (!web3[extension.property]) {
                web3[extension.property] = {};
            }
            extendedObject = web3[extension.property];
        } else {
            extendedObject = web3;
        }

        if (extension.methods) {
            extension.methods.forEach(function (method) {
                method.attachToObject(extendedObject);
                method.setRequestManager(web3._requestManager);
            });
        }

        if (extension.properties) {
            extension.properties.forEach(function (property) {
                property.attachToObject(extendedObject);
                property.setRequestManager(web3._requestManager);
            });
        }
    };

    ex.formatters = formatters; 
    ex.utils = utils;
    ex.Method = Method;
    ex.Property = Property;

    return ex;
};



module.exports = extend;



/***/ }),

/***/ 91023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file filter.js
 * @authors:
 *   Jeffrey Wilcke <jeff@ethdev.com>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 *   Gav Wood <g@ethdev.com>
 * @date 2014
 */

var formatters = __webpack_require__(95096);
var utils = __webpack_require__(70472);

/**
* Converts a given topic to a hex string, but also allows null values.
*
* @param {Mixed} value
* @return {String}
*/
var toTopic = function(value){

    if(value === null || typeof value === 'undefined')
        return null;

    value = String(value);

    if(value.indexOf('0x') === 0)
        return value;
    else
        return utils.fromUtf8(value);
};

/// This method should be called on options object, to verify deprecated properties && lazy load dynamic ones
/// @param should be string or object
/// @returns options string or object
var getOptions = function (options, type) {
    /*jshint maxcomplexity: 6 */

    if (utils.isString(options)) {
        return options;
    }

    options = options || {};


    switch(type) {
        case 'eth':

            // make sure topics, get converted to hex
            options.topics = options.topics || [];
            options.topics = options.topics.map(function(topic){
                return (utils.isArray(topic)) ? topic.map(toTopic) : toTopic(topic);
            });

            return {
                topics: options.topics,
                from: options.from,
                to: options.to,
                address: options.address,
                fromBlock: formatters.inputBlockNumberFormatter(options.fromBlock),
                toBlock: formatters.inputBlockNumberFormatter(options.toBlock)
            };
        case 'shh':
            return options;
    }
};

/**
Adds the callback and sets up the methods, to iterate over the results.

@method getLogsAtStart
@param {Object} self
@param {function} callback
*/
var getLogsAtStart = function(self, callback){
    // call getFilterLogs for the first watch callback start
    if (!utils.isString(self.options)) {
        self.get(function (err, messages) {
            // don't send all the responses to all the watches again... just to self one
            if (err) {
                callback(err);
            }

            if(utils.isArray(messages)) {
                messages.forEach(function (message) {
                    callback(null, message);
                });
            }
        });
    }
};

/**
Adds the callback and sets up the methods, to iterate over the results.

@method pollFilter
@param {Object} self
*/
var pollFilter = function(self) {

    var onMessage = function (error, messages) {
        if (error) {
            return self.callbacks.forEach(function (callback) {
                callback(error);
            });
        }

        if(utils.isArray(messages)) {
            messages.forEach(function (message) {
                message = self.formatter ? self.formatter(message) : message;
                self.callbacks.forEach(function (callback) {
                    callback(null, message);
                });
            });
        }
    };

    self.requestManager.startPolling({
        method: self.implementation.poll.call,
        params: [self.filterId],
    }, self.filterId, onMessage, self.stopWatching.bind(self));

};

var Filter = function (options, type, requestManager, methods, formatter, callback, filterCreationErrorCallback) {
    var self = this;
    var implementation = {};
    methods.forEach(function (method) {
        method.setRequestManager(requestManager);
        method.attachToObject(implementation);
    });
    this.requestManager = requestManager;
    this.options = getOptions(options, type);
    this.implementation = implementation;
    this.filterId = null;
    this.callbacks = [];
    this.getLogsCallbacks = [];
    this.pollFilters = [];
    this.formatter = formatter;
    this.implementation.newFilter(this.options, function(error, id){
        if(error) {
            self.callbacks.forEach(function(cb){
                cb(error);
            });
            if (typeof filterCreationErrorCallback === 'function') {
              filterCreationErrorCallback(error);
            }
        } else {
            self.filterId = id;

            // check if there are get pending callbacks as a consequence
            // of calling get() with filterId unassigned.
            self.getLogsCallbacks.forEach(function (cb){
                self.get(cb);
            });
            self.getLogsCallbacks = [];

            // get filter logs for the already existing watch calls
            self.callbacks.forEach(function(cb){
                getLogsAtStart(self, cb);
            });
            if(self.callbacks.length > 0)
                pollFilter(self);

            // start to watch immediately
            if(typeof callback === 'function') {
                return self.watch(callback);
            }
        }
    });

    return this;
};

Filter.prototype.watch = function (callback) {
    this.callbacks.push(callback);

    if(this.filterId) {
        getLogsAtStart(this, callback);
        pollFilter(this);
    }

    return this;
};

Filter.prototype.stopWatching = function (callback) {
    this.requestManager.stopPolling(this.filterId);
    this.callbacks = [];
    // remove filter async
    if (callback) {
        this.implementation.uninstallFilter(this.filterId, callback);
    } else {
        return this.implementation.uninstallFilter(this.filterId);
    }
};

Filter.prototype.get = function (callback) {
    var self = this;
    if (utils.isFunction(callback)) {
        if (this.filterId === null) {
            // If filterId is not set yet, call it back
            // when newFilter() assigns it.
            this.getLogsCallbacks.push(callback);
        } else {
            this.implementation.getLogs(this.filterId, function(err, res){
                if (err) {
                    callback(err);
                } else {
                    callback(null, res.map(function (log) {
                        return self.formatter ? self.formatter(log) : log;
                    }));
                }
            });
        }
    } else {
        if (this.filterId === null) {
            throw new Error('Filter ID Error: filter().get() can\'t be chained synchronous, please provide a callback for the get() method.');
        }
        var logs = this.implementation.getLogs(this.filterId);
        return logs.map(function (log) {
            return self.formatter ? self.formatter(log) : log;
        });
    }

    return this;
};

module.exports = Filter;



/***/ }),

/***/ 95096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file formatters.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */




var utils = __webpack_require__(70472);
var config = __webpack_require__(66433);
var Iban = __webpack_require__(29995);

/**
 * Should the format output to a big number
 *
 * @method outputBigNumberFormatter
 * @param {String|Number|BigNumber}
 * @returns {BigNumber} object
 */
var outputBigNumberFormatter = function (number) {
    return utils.toBigNumber(number);
};

var isPredefinedBlockNumber = function (blockNumber) {
    return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
};

var inputDefaultBlockNumberFormatter = function (blockNumber) {
    if (blockNumber === undefined) {
        return config.defaultBlock;
    }
    return inputBlockNumberFormatter(blockNumber);
};

var inputBlockNumberFormatter = function (blockNumber) {
    if (blockNumber === undefined) {
        return undefined;
    } else if (isPredefinedBlockNumber(blockNumber)) {
        return blockNumber;
    }
    return utils.toHex(blockNumber);
};

/**
 * Formats the input of a transaction and converts all values to HEX
 *
 * @method inputCallFormatter
 * @param {Object} transaction options
 * @returns object
*/
var inputCallFormatter = function (options){

    options.from = options.from || config.defaultAccount;

    if (options.from) {
        options.from = inputAddressFormatter(options.from);
    }

    if (options.to) { // it might be contract creation
        options.to = inputAddressFormatter(options.to);
    }

    ['gasPrice', 'gas', 'value', 'nonce'].filter(function (key) {
        return options[key] !== undefined;
    }).forEach(function(key){
        options[key] = utils.fromDecimal(options[key]);
    });

    return options;
};

/**
 * Formats the input of a transaction and converts all values to HEX
 *
 * @method inputTransactionFormatter
 * @param {Object} transaction options
 * @returns object
*/
var inputTransactionFormatter = function (options){

    options.from = options.from || config.defaultAccount;
    options.from = inputAddressFormatter(options.from);

    if (options.to) { // it might be contract creation
        options.to = inputAddressFormatter(options.to);
    }

    ['gasPrice', 'gas', 'value', 'nonce'].filter(function (key) {
        return options[key] !== undefined;
    }).forEach(function(key){
        options[key] = utils.fromDecimal(options[key]);
    });

    return options;
};

/**
 * Formats the output of a transaction to its proper values
 *
 * @method outputTransactionFormatter
 * @param {Object} tx
 * @returns {Object}
*/
var outputTransactionFormatter = function (tx){
    if(tx.blockNumber !== null)
        tx.blockNumber = utils.toDecimal(tx.blockNumber);
    if(tx.transactionIndex !== null)
        tx.transactionIndex = utils.toDecimal(tx.transactionIndex);
    tx.nonce = utils.toDecimal(tx.nonce);
    tx.gas = utils.toDecimal(tx.gas);
    tx.gasPrice = utils.toBigNumber(tx.gasPrice);
    tx.value = utils.toBigNumber(tx.value);
    return tx;
};

/**
 * Formats the output of a transaction receipt to its proper values
 *
 * @method outputTransactionReceiptFormatter
 * @param {Object} receipt
 * @returns {Object}
*/
var outputTransactionReceiptFormatter = function (receipt){
    if(receipt.blockNumber !== null)
        receipt.blockNumber = utils.toDecimal(receipt.blockNumber);
    if(receipt.transactionIndex !== null)
        receipt.transactionIndex = utils.toDecimal(receipt.transactionIndex);
    receipt.cumulativeGasUsed = utils.toDecimal(receipt.cumulativeGasUsed);
    receipt.gasUsed = utils.toDecimal(receipt.gasUsed);

    if(utils.isArray(receipt.logs)) {
        receipt.logs = receipt.logs.map(function(log){
            return outputLogFormatter(log);
        });
    }

    return receipt;
};

/**
 * Formats the output of a block to its proper values
 *
 * @method outputBlockFormatter
 * @param {Object} block
 * @returns {Object}
*/
var outputBlockFormatter = function(block) {

    // transform to number
    block.gasLimit = utils.toDecimal(block.gasLimit);
    block.gasUsed = utils.toDecimal(block.gasUsed);
    block.size = utils.toDecimal(block.size);
    block.timestamp = utils.toDecimal(block.timestamp);
    if(block.number !== null)
        block.number = utils.toDecimal(block.number);

    block.difficulty = utils.toBigNumber(block.difficulty);
    block.totalDifficulty = utils.toBigNumber(block.totalDifficulty);

    if (utils.isArray(block.transactions)) {
        block.transactions.forEach(function(item){
            if(!utils.isString(item))
                return outputTransactionFormatter(item);
        });
    }

    return block;
};

/**
 * Formats the output of a log
 *
 * @method outputLogFormatter
 * @param {Object} log object
 * @returns {Object} log
*/
var outputLogFormatter = function(log) {
    if(log.blockNumber)
        log.blockNumber = utils.toDecimal(log.blockNumber);
    if(log.transactionIndex)
        log.transactionIndex = utils.toDecimal(log.transactionIndex);
    if(log.logIndex)
        log.logIndex = utils.toDecimal(log.logIndex);

    return log;
};

/**
 * Formats the input of a whisper post and converts all values to HEX
 *
 * @method inputPostFormatter
 * @param {Object} transaction object
 * @returns {Object}
*/
var inputPostFormatter = function(post) {

    // post.payload = utils.toHex(post.payload);
    post.ttl = utils.fromDecimal(post.ttl);
    post.workToProve = utils.fromDecimal(post.workToProve);
    post.priority = utils.fromDecimal(post.priority);

    // fallback
    if (!utils.isArray(post.topics)) {
        post.topics = post.topics ? [post.topics] : [];
    }

    // format the following options
    post.topics = post.topics.map(function(topic){
        // convert only if not hex
        return (topic.indexOf('0x') === 0) ? topic : utils.fromUtf8(topic);
    });

    return post;
};

/**
 * Formats the output of a received post message
 *
 * @method outputPostFormatter
 * @param {Object}
 * @returns {Object}
 */
var outputPostFormatter = function(post){

    post.expiry = utils.toDecimal(post.expiry);
    post.sent = utils.toDecimal(post.sent);
    post.ttl = utils.toDecimal(post.ttl);
    post.workProved = utils.toDecimal(post.workProved);
    // post.payloadRaw = post.payload;
    // post.payload = utils.toAscii(post.payload);

    // if (utils.isJson(post.payload)) {
    //     post.payload = JSON.parse(post.payload);
    // }

    // format the following options
    if (!post.topics) {
        post.topics = [];
    }
    post.topics = post.topics.map(function(topic){
        return utils.toAscii(topic);
    });

    return post;
};

var inputAddressFormatter = function (address) {
    var iban = new Iban(address);
    if (iban.isValid() && iban.isDirect()) {
        return '0x' + iban.address();
    } else if (utils.isStrictAddress(address)) {
        return address;
    } else if (utils.isAddress(address)) {
        return '0x' + address;
    }
    throw new Error('invalid address');
};


var outputSyncingFormatter = function(result) {
    if (!result) {
        return result;
    }

    result.startingBlock = utils.toDecimal(result.startingBlock);
    result.currentBlock = utils.toDecimal(result.currentBlock);
    result.highestBlock = utils.toDecimal(result.highestBlock);
    if (result.knownStates) {
        result.knownStates = utils.toDecimal(result.knownStates);
        result.pulledStates = utils.toDecimal(result.pulledStates);
    }

    return result;
};

module.exports = {
    inputDefaultBlockNumberFormatter: inputDefaultBlockNumberFormatter,
    inputBlockNumberFormatter: inputBlockNumberFormatter,
    inputCallFormatter: inputCallFormatter,
    inputTransactionFormatter: inputTransactionFormatter,
    inputAddressFormatter: inputAddressFormatter,
    inputPostFormatter: inputPostFormatter,
    outputBigNumberFormatter: outputBigNumberFormatter,
    outputTransactionFormatter: outputTransactionFormatter,
    outputTransactionReceiptFormatter: outputTransactionReceiptFormatter,
    outputBlockFormatter: outputBlockFormatter,
    outputLogFormatter: outputLogFormatter,
    outputPostFormatter: outputPostFormatter,
    outputSyncingFormatter: outputSyncingFormatter
};



/***/ }),

/***/ 27100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file function.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var coder = __webpack_require__(61928);
var utils = __webpack_require__(70472);
var errors = __webpack_require__(48048);
var formatters = __webpack_require__(95096);
var sha3 = __webpack_require__(50224);

/**
 * This prototype should be used to call/sendTransaction to solidity functions
 */
var SolidityFunction = function (eth, json, address) {
    this._eth = eth;
    this._inputTypes = json.inputs.map(function (i) {
        return i.type;
    });
    this._outputTypes = json.outputs.map(function (i) {
        return i.type;
    });
    this._constant = (json.stateMutability === "view" || json.stateMutability === "pure" || json.constant);
    this._payable = (json.stateMutability === "payable" || json.payable);
    this._name = utils.transformToFullName(json);
    this._address = address;
};

SolidityFunction.prototype.extractCallback = function (args) {
    if (utils.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
    }
};

SolidityFunction.prototype.extractDefaultBlock = function (args) {
    if (args.length > this._inputTypes.length && !utils.isObject(args[args.length -1])) {
        return formatters.inputDefaultBlockNumberFormatter(args.pop()); // modify the args array!
    }
};

/**
 * Should be called to check if the number of arguments is correct
 *
 * @method validateArgs
 * @param {Array} arguments
 * @throws {Error} if it is not
 */
SolidityFunction.prototype.validateArgs = function (args) {
    var inputArgs = args.filter(function (a) {
      // filter the options object but not arguments that are arrays
      return !( (utils.isObject(a) === true) &&
                (utils.isArray(a) === false) &&
                (utils.isBigNumber(a) === false)
              );
    });
    if (inputArgs.length !== this._inputTypes.length) {
        throw errors.InvalidNumberOfSolidityArgs();
    }
};

/**
 * Should be used to create payload from arguments
 *
 * @method toPayload
 * @param {Array} solidity function params
 * @param {Object} optional payload options
 */
SolidityFunction.prototype.toPayload = function (args) {
    var options = {};
    if (args.length > this._inputTypes.length && utils.isObject(args[args.length -1])) {
        options = args[args.length - 1];
    }
    this.validateArgs(args);
    options.to = this._address;
    options.data = '0x' + this.signature() + coder.encodeParams(this._inputTypes, args);
    return options;
};

/**
 * Should be used to get function signature
 *
 * @method signature
 * @return {String} function signature
 */
SolidityFunction.prototype.signature = function () {
    return sha3(this._name).slice(0, 8);
};


SolidityFunction.prototype.unpackOutput = function (output) {
    if (!output) {
        return;
    }

    output = output.length >= 2 ? output.slice(2) : output;
    var result = coder.decodeParams(this._outputTypes, output);
    return result.length === 1 ? result[0] : result;
};

/**
 * Calls a contract function.
 *
 * @method call
 * @param {...Object} Contract function arguments
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {String} output bytes
 */
SolidityFunction.prototype.call = function () {
    var args = Array.prototype.slice.call(arguments).filter(function (a) {return a !== undefined; });
    var callback = this.extractCallback(args);
    var defaultBlock = this.extractDefaultBlock(args);
    var payload = this.toPayload(args);


    if (!callback) {
        var output = this._eth.call(payload, defaultBlock);
        return this.unpackOutput(output);
    }

    var self = this;
    this._eth.call(payload, defaultBlock, function (error, output) {
        if (error) return callback(error, null);

        var unpacked = null;
        try {
            unpacked = self.unpackOutput(output);
        }
        catch (e) {
            error = e;
        }

        callback(error, unpacked);
    });
};

/**
 * Should be used to sendTransaction to solidity function
 *
 * @method sendTransaction
 */
SolidityFunction.prototype.sendTransaction = function () {
    var args = Array.prototype.slice.call(arguments).filter(function (a) {return a !== undefined; });
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);

    if (payload.value > 0 && !this._payable) {
        throw new Error('Cannot send value to non-payable function');
    }

    if (!callback) {
        return this._eth.sendTransaction(payload);
    }

    this._eth.sendTransaction(payload, callback);
};

/**
 * Should be used to estimateGas of solidity function
 *
 * @method estimateGas
 */
SolidityFunction.prototype.estimateGas = function () {
    var args = Array.prototype.slice.call(arguments);
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);

    if (!callback) {
        return this._eth.estimateGas(payload);
    }

    this._eth.estimateGas(payload, callback);
};

/**
 * Return the encoded data of the call
 *
 * @method getData
 * @return {String} the encoded data
 */
SolidityFunction.prototype.getData = function () {
    var args = Array.prototype.slice.call(arguments);
    var payload = this.toPayload(args);

    return payload.data;
};

/**
 * Should be used to get function display name
 *
 * @method displayName
 * @return {String} display name of the function
 */
SolidityFunction.prototype.displayName = function () {
    return utils.extractDisplayName(this._name);
};

/**
 * Should be used to get function type name
 *
 * @method typeName
 * @return {String} type name of the function
 */
SolidityFunction.prototype.typeName = function () {
    return utils.extractTypeName(this._name);
};

/**
 * Should be called to get rpc requests from solidity function
 *
 * @method request
 * @returns {Object}
 */
SolidityFunction.prototype.request = function () {
    var args = Array.prototype.slice.call(arguments);
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);
    var format = this.unpackOutput.bind(this);

    return {
        method: this._constant ? 'eth_call' : 'eth_sendTransaction',
        callback: callback,
        params: [payload],
        format: format
    };
};

/**
 * Should be called to execute function
 *
 * @method execute
 */
SolidityFunction.prototype.execute = function () {
    var transaction = !this._constant;

    // send transaction
    if (transaction) {
        return this.sendTransaction.apply(this, Array.prototype.slice.call(arguments));
    }

    // call
    return this.call.apply(this, Array.prototype.slice.call(arguments));
};

/**
 * Should be called to attach function to contract
 *
 * @method attachToContract
 * @param {Contract}
 */
SolidityFunction.prototype.attachToContract = function (contract) {
    var execute = this.execute.bind(this);
    execute.request = this.request.bind(this);
    execute.call = this.call.bind(this);
    execute.sendTransaction = this.sendTransaction.bind(this);
    execute.estimateGas = this.estimateGas.bind(this);
    execute.getData = this.getData.bind(this);
    var displayName = this.displayName();
    if (!contract[displayName]) {
        contract[displayName] = execute;
    }
    contract[displayName][this.typeName()] = execute; // circular!!!!
};

module.exports = SolidityFunction;


/***/ }),

/***/ 3086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file httpprovider.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */

var errors = __webpack_require__(48048);

// workaround to use httpprovider in different envs

// browser
if (typeof window !== 'undefined' && window.XMLHttpRequest) {
  XMLHttpRequest = window.XMLHttpRequest; // jshint ignore: line
// node
} else {
  XMLHttpRequest = (__webpack_require__(72787)/* .XMLHttpRequest */ .h); // jshint ignore: line
}

var XHR2 = (__webpack_require__(60527)/* .XMLHttpRequest */ .h); // jshint ignore: line

/**
 * HttpProvider should be used to send rpc calls over http
 */
var HttpProvider = function (host, timeout, user, password, headers) {
  this.host = host || 'http://localhost:8545';
  this.timeout = timeout || 0;
  this.user = user;
  this.password = password;
  this.headers = headers;
};

/**
 * Should be called to prepare new XMLHttpRequest
 *
 * @method prepareRequest
 * @param {Boolean} true if request should be async
 * @return {XMLHttpRequest} object
 */
HttpProvider.prototype.prepareRequest = function (async) {
  var request;

  if (async) {
    request = new XHR2();
    request.timeout = this.timeout;
  } else {
    request = new XMLHttpRequest();
  }
  request.withCredentials = true;

  request.open('POST', this.host, async);
  if (this.user && this.password) {
    var auth = 'Basic ' + new Buffer(this.user + ':' + this.password).toString('base64');
    request.setRequestHeader('Authorization', auth);
  } request.setRequestHeader('Content-Type', 'application/json');
  if(this.headers) {
      this.headers.forEach(function(header) {
          request.setRequestHeader(header.name, header.value);
      });
  }
  return request;
};

/**
 * Should be called to make sync request
 *
 * @method send
 * @param {Object} payload
 * @return {Object} result
 */
HttpProvider.prototype.send = function (payload) {
  var request = this.prepareRequest(false);

  try {
    request.send(JSON.stringify(payload));
  } catch (error) {
    throw errors.InvalidConnection(this.host);
  }

  var result = request.responseText;

  try {
    result = JSON.parse(result);
  } catch (e) {
    throw errors.InvalidResponse(request.responseText);
  }

  return result;
};

/**
 * Should be used to make async request
 *
 * @method sendAsync
 * @param {Object} payload
 * @param {Function} callback triggered on end with (err, result)
 */
HttpProvider.prototype.sendAsync = function (payload, callback) {
  var request = this.prepareRequest(true);

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.timeout !== 1) {
      var result = request.responseText;
      var error = null;

      try {
        result = JSON.parse(result);
      } catch (e) {
        error = errors.InvalidResponse(request.responseText);
      }

      callback(error, result);
    }
  };

  request.ontimeout = function () {
    callback(errors.ConnectionTimeout(this.timeout));
  };

  try {
    request.send(JSON.stringify(payload));
  } catch (error) {
    callback(errors.InvalidConnection(this.host));
  }
};

/**
 * Synchronously tries to make Http request
 *
 * @method isConnected
 * @return {Boolean} returns true if request haven't failed. Otherwise false
 */
HttpProvider.prototype.isConnected = function () {
  try {
    this.send({
      id: 9999999999,
      jsonrpc: '2.0',
      method: 'net_listening',
      params: []
    });
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = HttpProvider;


/***/ }),

/***/ 29995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file iban.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var BigNumber = __webpack_require__(49387);

var padLeft = function (string, bytes) {
    var result = string;
    while (result.length < bytes * 2) {
        result = '0' + result;
    }
    return result;
};

/**
 * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
 * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
 *
 * @method iso13616Prepare
 * @param {String} iban the IBAN
 * @returns {String} the prepared IBAN
 */
var iso13616Prepare = function (iban) {
    var A = 'A'.charCodeAt(0);
    var Z = 'Z'.charCodeAt(0);

    iban = iban.toUpperCase();
    iban = iban.substr(4) + iban.substr(0,4);

    return iban.split('').map(function(n){
        var code = n.charCodeAt(0);
        if (code >= A && code <= Z){
            // A = 10, B = 11, ... Z = 35
            return code - A + 10;
        } else {
            return n;
        }
    }).join('');
};

/**
 * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
 *
 * @method mod9710
 * @param {String} iban
 * @returns {Number}
 */
var mod9710 = function (iban) {
    var remainder = iban,
        block;

    while (remainder.length > 2){
        block = remainder.slice(0, 9);
        remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
    }

    return parseInt(remainder, 10) % 97;
};

/**
 * This prototype should be used to create iban object from iban correct string
 *
 * @param {String} iban
 */
var Iban = function (iban) {
    this._iban = iban;
};

/**
 * This method should be used to create iban object from ethereum address
 *
 * @method fromAddress
 * @param {String} address
 * @return {Iban} the IBAN object
 */
Iban.fromAddress = function (address) {
    var asBn = new BigNumber(address, 16);
    var base36 = asBn.toString(36);
    var padded = padLeft(base36, 15);
    return Iban.fromBban(padded.toUpperCase());
};

/**
 * Convert the passed BBAN to an IBAN for this country specification.
 * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
 * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
 *
 * @method fromBban
 * @param {String} bban the BBAN to convert to IBAN
 * @returns {Iban} the IBAN object
 */
Iban.fromBban = function (bban) {
    var countryCode = 'XE';

    var remainder = mod9710(iso13616Prepare(countryCode + '00' + bban));
    var checkDigit = ('0' + (98 - remainder)).slice(-2);

    return new Iban(countryCode + checkDigit + bban);
};

/**
 * Should be used to create IBAN object for given institution and identifier
 *
 * @method createIndirect
 * @param {Object} options, required options are "institution" and "identifier"
 * @return {Iban} the IBAN object
 */
Iban.createIndirect = function (options) {
    return Iban.fromBban('ETH' + options.institution + options.identifier);
};

/**
 * Thos method should be used to check if given string is valid iban object
 *
 * @method isValid
 * @param {String} iban string
 * @return {Boolean} true if it is valid IBAN
 */
Iban.isValid = function (iban) {
    var i = new Iban(iban);
    return i.isValid();
};

/**
 * Should be called to check if iban is correct
 *
 * @method isValid
 * @returns {Boolean} true if it is, otherwise false
 */
Iban.prototype.isValid = function () {
    return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) &&
        mod9710(iso13616Prepare(this._iban)) === 1;
};

/**
 * Should be called to check if iban number is direct
 *
 * @method isDirect
 * @returns {Boolean} true if it is, otherwise false
 */
Iban.prototype.isDirect = function () {
    return this._iban.length === 34 || this._iban.length === 35;
};

/**
 * Should be called to check if iban number if indirect
 *
 * @method isIndirect
 * @returns {Boolean} true if it is, otherwise false
 */
Iban.prototype.isIndirect = function () {
    return this._iban.length === 20;
};

/**
 * Should be called to get iban checksum
 * Uses the mod-97-10 checksumming protocol (ISO/IEC 7064:2003)
 *
 * @method checksum
 * @returns {String} checksum
 */
Iban.prototype.checksum = function () {
    return this._iban.substr(2, 2);
};

/**
 * Should be called to get institution identifier
 * eg. XREG
 *
 * @method institution
 * @returns {String} institution identifier
 */
Iban.prototype.institution = function () {
    return this.isIndirect() ? this._iban.substr(7, 4) : '';
};

/**
 * Should be called to get client identifier within institution
 * eg. GAVOFYORK
 *
 * @method client
 * @returns {String} client identifier
 */
Iban.prototype.client = function () {
    return this.isIndirect() ? this._iban.substr(11) : '';
};

/**
 * Should be called to get client direct address
 *
 * @method address
 * @returns {String} client direct address
 */
Iban.prototype.address = function () {
    if (this.isDirect()) {
        var base36 = this._iban.substr(4);
        var asBn = new BigNumber(base36, 36);
        return padLeft(asBn.toString(16), 20);
    } 

    return '';
};

Iban.prototype.toString = function () {
    return this._iban;
};

module.exports = Iban;



/***/ }),

/***/ 79369:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file ipcprovider.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */



var utils = __webpack_require__(70472);
var errors = __webpack_require__(48048);


var IpcProvider = function (path, net) {
    var _this = this;
    this.responseCallbacks = {};
    this.path = path;
    
    this.connection = net.connect({path: this.path});

    this.connection.on('error', function(e){
        console.error('IPC Connection Error', e);
        _this._timeout();
    });

    this.connection.on('end', function(){
        _this._timeout();
    }); 


    // LISTEN FOR CONNECTION RESPONSES
    this.connection.on('data', function(data) {
        /*jshint maxcomplexity: 6 */

        _this._parseResponse(data.toString()).forEach(function(result){

            var id = null;

            // get the id which matches the returned id
            if(utils.isArray(result)) {
                result.forEach(function(load){
                    if(_this.responseCallbacks[load.id])
                        id = load.id;
                });
            } else {
                id = result.id;
            }

            // fire the callback
            if(_this.responseCallbacks[id]) {
                _this.responseCallbacks[id](null, result);
                delete _this.responseCallbacks[id];
            }
        });
    });
};

/**
Will parse the response and make an array out of it.

@method _parseResponse
@param {String} data
*/
IpcProvider.prototype._parseResponse = function(data) {
    var _this = this,
        returnValues = [];
    
    // DE-CHUNKER
    var dechunkedData = data
        .replace(/\}[\n\r]?\{/g,'}|--|{') // }{
        .replace(/\}\][\n\r]?\[\{/g,'}]|--|[{') // }][{
        .replace(/\}[\n\r]?\[\{/g,'}|--|[{') // }[{
        .replace(/\}\][\n\r]?\{/g,'}]|--|{') // }]{
        .split('|--|');

    dechunkedData.forEach(function(data){

        // prepend the last chunk
        if(_this.lastChunk)
            data = _this.lastChunk + data;

        var result = null;

        try {
            result = JSON.parse(data);

        } catch(e) {

            _this.lastChunk = data;

            // start timeout to cancel all requests
            clearTimeout(_this.lastChunkTimeout);
            _this.lastChunkTimeout = setTimeout(function(){
                _this._timeout();
                throw errors.InvalidResponse(data);
            }, 1000 * 15);

            return;
        }

        // cancel timeout and set chunk to null
        clearTimeout(_this.lastChunkTimeout);
        _this.lastChunk = null;

        if(result)
            returnValues.push(result);
    });

    return returnValues;
};


/**
Get the adds a callback to the responseCallbacks object,
which will be called if a response matching the response Id will arrive.

@method _addResponseCallback
*/
IpcProvider.prototype._addResponseCallback = function(payload, callback) {
    var id = payload.id || payload[0].id;
    var method = payload.method || payload[0].method;

    this.responseCallbacks[id] = callback;
    this.responseCallbacks[id].method = method;
};

/**
Timeout all requests when the end/error event is fired

@method _timeout
*/
IpcProvider.prototype._timeout = function() {
    for(var key in this.responseCallbacks) {
        if(this.responseCallbacks.hasOwnProperty(key)){
            this.responseCallbacks[key](errors.InvalidConnection('on IPC'));
            delete this.responseCallbacks[key];
        }
    }
};


/**
Check if the current connection is still valid.

@method isConnected
*/
IpcProvider.prototype.isConnected = function() {
    var _this = this;

    // try reconnect, when connection is gone
    if(!_this.connection.writable)
        _this.connection.connect({path: _this.path});

    return !!this.connection.writable;
};

IpcProvider.prototype.send = function (payload) {

    if(this.connection.writeSync) {
        var result;

        // try reconnect, when connection is gone
        if(!this.connection.writable)
            this.connection.connect({path: this.path});

        var data = this.connection.writeSync(JSON.stringify(payload));

        try {
            result = JSON.parse(data);
        } catch(e) {
            throw errors.InvalidResponse(data);                
        }

        return result;

    } else {
        throw new Error('You tried to send "'+ payload.method +'" synchronously. Synchronous requests are not supported by the IPC provider.');
    }
};

IpcProvider.prototype.sendAsync = function (payload, callback) {
    // try reconnect, when connection is gone
    if(!this.connection.writable)
        this.connection.connect({path: this.path});


    this.connection.write(JSON.stringify(payload));
    this._addResponseCallback(payload, callback);
};

module.exports = IpcProvider;



/***/ }),

/***/ 85262:
/***/ ((module) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file jsonrpc.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 *   Aaron Kumavis <aaron@kumavis.me>
 * @date 2015
 */

// Initialize Jsonrpc as a simple object with utility functions.
var Jsonrpc = {
    messageId: 0
};

/**
 * Should be called to valid json create payload object
 *
 * @method toPayload
 * @param {Function} method of jsonrpc call, required
 * @param {Array} params, an array of method params, optional
 * @returns {Object} valid jsonrpc payload object
 */
Jsonrpc.toPayload = function (method, params) {
    if (!method)
        console.error('jsonrpc method should be specified!');

    // advance message ID
    Jsonrpc.messageId++;

    return {
        jsonrpc: '2.0',
        id: Jsonrpc.messageId,
        method: method,
        params: params || []
    };
};

/**
 * Should be called to check if jsonrpc response is valid
 *
 * @method isValidResponse
 * @param {Object}
 * @returns {Boolean} true if response is valid, otherwise false
 */
Jsonrpc.isValidResponse = function (response) {
    return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);

    function validateSingleMessage(message){
      return !!message &&
        !message.error &&
        message.jsonrpc === '2.0' &&
        typeof message.id === 'number' &&
        message.result !== undefined; // only undefined is not valid json object
    }
};

/**
 * Should be called to create batch payload object
 *
 * @method toBatchPayload
 * @param {Array} messages, an array of objects with method (required) and params (optional) fields
 * @returns {Array} batch payload
 */
Jsonrpc.toBatchPayload = function (messages) {
    return messages.map(function (message) {
        return Jsonrpc.toPayload(message.method, message.params);
    });
};

module.exports = Jsonrpc;



/***/ }),

/***/ 43161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file method.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var utils = __webpack_require__(70472);
var errors = __webpack_require__(48048);

var Method = function (options) {
    this.name = options.name;
    this.call = options.call;
    this.params = options.params || 0;
    this.inputFormatter = options.inputFormatter;
    this.outputFormatter = options.outputFormatter;
    this.requestManager = null;
};

Method.prototype.setRequestManager = function (rm) {
    this.requestManager = rm;
};

/**
 * Should be used to determine name of the jsonrpc method based on arguments
 *
 * @method getCall
 * @param {Array} arguments
 * @return {String} name of jsonrpc method
 */
Method.prototype.getCall = function (args) {
    return utils.isFunction(this.call) ? this.call(args) : this.call;
};

/**
 * Should be used to extract callback from array of arguments. Modifies input param
 *
 * @method extractCallback
 * @param {Array} arguments
 * @return {Function|Null} callback, if exists
 */
Method.prototype.extractCallback = function (args) {
    if (utils.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
    }
};

/**
 * Should be called to check if the number of arguments is correct
 * 
 * @method validateArgs
 * @param {Array} arguments
 * @throws {Error} if it is not
 */
Method.prototype.validateArgs = function (args) {
    if (args.length !== this.params) {
        throw errors.InvalidNumberOfRPCParams();
    }
};

/**
 * Should be called to format input args of method
 * 
 * @method formatInput
 * @param {Array}
 * @return {Array}
 */
Method.prototype.formatInput = function (args) {
    if (!this.inputFormatter) {
        return args;
    }

    return this.inputFormatter.map(function (formatter, index) {
        return formatter ? formatter(args[index]) : args[index];
    });
};

/**
 * Should be called to format output(result) of method
 *
 * @method formatOutput
 * @param {Object}
 * @return {Object}
 */
Method.prototype.formatOutput = function (result) {
    return this.outputFormatter && result ? this.outputFormatter(result) : result;
};

/**
 * Should create payload from given input args
 *
 * @method toPayload
 * @param {Array} args
 * @return {Object}
 */
Method.prototype.toPayload = function (args) {
    var call = this.getCall(args);
    var callback = this.extractCallback(args);
    var params = this.formatInput(args);
    this.validateArgs(params);

    return {
        method: call,
        params: params,
        callback: callback
    };
};

Method.prototype.attachToObject = function (obj) {
    var func = this.buildCall();
    func.call = this.call; // TODO!!! that's ugly. filter.js uses it
    var name = this.name.split('.');
    if (name.length > 1) {
        obj[name[0]] = obj[name[0]] || {};
        obj[name[0]][name[1]] = func;
    } else {
        obj[name[0]] = func; 
    }
};

Method.prototype.buildCall = function() {
    var method = this;
    var send = function () {
        var payload = method.toPayload(Array.prototype.slice.call(arguments));
        if (payload.callback) {
            return method.requestManager.sendAsync(payload, function (err, result) {
                payload.callback(err, method.formatOutput(result));
            });
        }
        return method.formatOutput(method.requestManager.send(payload));
    };
    send.request = this.request.bind(this);
    return send;
};

/**
 * Should be called to create pure JSONRPC request which can be used in batch request
 *
 * @method request
 * @param {...} params
 * @return {Object} jsonrpc request
 */
Method.prototype.request = function () {
    var payload = this.toPayload(Array.prototype.slice.call(arguments));
    payload.format = this.formatOutput.bind(this);
    return payload;
};

module.exports = Method;


/***/ }),

/***/ 87419:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file db.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var Method = __webpack_require__(43161);

var DB = function (web3) {
    this._requestManager = web3._requestManager;

    var self = this;
    
    methods().forEach(function(method) { 
        method.attachToObject(self);
        method.setRequestManager(web3._requestManager);
    });
};

var methods = function () {
    var putString = new Method({
        name: 'putString',
        call: 'db_putString',
        params: 3
    });

    var getString = new Method({
        name: 'getString',
        call: 'db_getString',
        params: 2
    });

    var putHex = new Method({
        name: 'putHex',
        call: 'db_putHex',
        params: 3
    });

    var getHex = new Method({
        name: 'getHex',
        call: 'db_getHex',
        params: 2
    });

    return [
        putString, getString, putHex, getHex
    ];
};

module.exports = DB;


/***/ }),

/***/ 53444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file eth.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */



var formatters = __webpack_require__(95096);
var utils = __webpack_require__(70472);
var Method = __webpack_require__(43161);
var Property = __webpack_require__(67130);
var c = __webpack_require__(66433);
var Contract = __webpack_require__(65809);
var watches = __webpack_require__(94995);
var Filter = __webpack_require__(91023);
var IsSyncing = __webpack_require__(36300);
var namereg = __webpack_require__(35949);
var Iban = __webpack_require__(29995);
var transfer = __webpack_require__(62544);

var blockCall = function (args) {
    return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? "eth_getBlockByHash" : "eth_getBlockByNumber";
};

var transactionFromBlockCall = function (args) {
    return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getTransactionByBlockHashAndIndex' : 'eth_getTransactionByBlockNumberAndIndex';
};

var uncleCall = function (args) {
    return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleByBlockHashAndIndex' : 'eth_getUncleByBlockNumberAndIndex';
};

var getBlockTransactionCountCall = function (args) {
    return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getBlockTransactionCountByHash' : 'eth_getBlockTransactionCountByNumber';
};

var uncleCountCall = function (args) {
    return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleCountByBlockHash' : 'eth_getUncleCountByBlockNumber';
};

function Eth(web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });


    this.iban = Iban;
    this.sendIBANTransaction = transfer.bind(null, this);
}

Object.defineProperty(Eth.prototype, 'defaultBlock', {
    get: function () {
        return c.defaultBlock;
    },
    set: function (val) {
        c.defaultBlock = val;
        return val;
    }
});

Object.defineProperty(Eth.prototype, 'defaultAccount', {
    get: function () {
        return c.defaultAccount;
    },
    set: function (val) {
        c.defaultAccount = val;
        return val;
    }
});

var methods = function () {
    var getBalance = new Method({
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: formatters.outputBigNumberFormatter
    });

    var getStorageAt = new Method({
        name: 'getStorageAt',
        call: 'eth_getStorageAt',
        params: 3,
        inputFormatter: [null, utils.toHex, formatters.inputDefaultBlockNumberFormatter]
    });

    var getCode = new Method({
        name: 'getCode',
        call: 'eth_getCode',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter]
    });

    var getBlock = new Method({
        name: 'getBlock',
        call: blockCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, function (val) { return !!val; }],
        outputFormatter: formatters.outputBlockFormatter
    });

    var getUncle = new Method({
        name: 'getUncle',
        call: uncleCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
        outputFormatter: formatters.outputBlockFormatter,

    });

    var getCompilers = new Method({
        name: 'getCompilers',
        call: 'eth_getCompilers',
        params: 0
    });

    var getBlockTransactionCount = new Method({
        name: 'getBlockTransactionCount',
        call: getBlockTransactionCountCall,
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter],
        outputFormatter: utils.toDecimal
    });

    var getBlockUncleCount = new Method({
        name: 'getBlockUncleCount',
        call: uncleCountCall,
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter],
        outputFormatter: utils.toDecimal
    });

    var getTransaction = new Method({
        name: 'getTransaction',
        call: 'eth_getTransactionByHash',
        params: 1,
        outputFormatter: formatters.outputTransactionFormatter
    });

    var getTransactionFromBlock = new Method({
        name: 'getTransactionFromBlock',
        call: transactionFromBlockCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
        outputFormatter: formatters.outputTransactionFormatter
    });

    var getTransactionReceipt = new Method({
        name: 'getTransactionReceipt',
        call: 'eth_getTransactionReceipt',
        params: 1,
        outputFormatter: formatters.outputTransactionReceiptFormatter
    });

    var getTransactionCount = new Method({
        name: 'getTransactionCount',
        call: 'eth_getTransactionCount',
        params: 2,
        inputFormatter: [null, formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: utils.toDecimal
    });

    var sendRawTransaction = new Method({
        name: 'sendRawTransaction',
        call: 'eth_sendRawTransaction',
        params: 1,
        inputFormatter: [null]
    });

    var sendTransaction = new Method({
        name: 'sendTransaction',
        call: 'eth_sendTransaction',
        params: 1,
        inputFormatter: [formatters.inputTransactionFormatter]
    });

    var signTransaction = new Method({
        name: 'signTransaction',
        call: 'eth_signTransaction',
        params: 1,
        inputFormatter: [formatters.inputTransactionFormatter]
    });

    var sign = new Method({
        name: 'sign',
        call: 'eth_sign',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, null]
    });

    var call = new Method({
        name: 'call',
        call: 'eth_call',
        params: 2,
        inputFormatter: [formatters.inputCallFormatter, formatters.inputDefaultBlockNumberFormatter]
    });

    var estimateGas = new Method({
        name: 'estimateGas',
        call: 'eth_estimateGas',
        params: 1,
        inputFormatter: [formatters.inputCallFormatter],
        outputFormatter: utils.toDecimal
    });

    var compileSolidity = new Method({
        name: 'compile.solidity',
        call: 'eth_compileSolidity',
        params: 1
    });

    var compileLLL = new Method({
        name: 'compile.lll',
        call: 'eth_compileLLL',
        params: 1
    });

    var compileSerpent = new Method({
        name: 'compile.serpent',
        call: 'eth_compileSerpent',
        params: 1
    });

    var submitWork = new Method({
        name: 'submitWork',
        call: 'eth_submitWork',
        params: 3
    });

    var getWork = new Method({
        name: 'getWork',
        call: 'eth_getWork',
        params: 0
    });

    return [
        getBalance,
        getStorageAt,
        getCode,
        getBlock,
        getUncle,
        getCompilers,
        getBlockTransactionCount,
        getBlockUncleCount,
        getTransaction,
        getTransactionFromBlock,
        getTransactionReceipt,
        getTransactionCount,
        call,
        estimateGas,
        sendRawTransaction,
        signTransaction,
        sendTransaction,
        sign,
        compileSolidity,
        compileLLL,
        compileSerpent,
        submitWork,
        getWork
    ];
};


var properties = function () {
    return [
        new Property({
            name: 'coinbase',
            getter: 'eth_coinbase'
        }),
        new Property({
            name: 'mining',
            getter: 'eth_mining'
        }),
        new Property({
            name: 'hashrate',
            getter: 'eth_hashrate',
            outputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'syncing',
            getter: 'eth_syncing',
            outputFormatter: formatters.outputSyncingFormatter
        }),
        new Property({
            name: 'gasPrice',
            getter: 'eth_gasPrice',
            outputFormatter: formatters.outputBigNumberFormatter
        }),
        new Property({
            name: 'accounts',
            getter: 'eth_accounts'
        }),
        new Property({
            name: 'blockNumber',
            getter: 'eth_blockNumber',
            outputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'protocolVersion',
            getter: 'eth_protocolVersion'
        })
    ];
};

Eth.prototype.contract = function (abi) {
    var factory = new Contract(this, abi);
    return factory;
};

Eth.prototype.filter = function (options, callback, filterCreationErrorCallback) {
    return new Filter(options, 'eth', this._requestManager, watches.eth(), formatters.outputLogFormatter, callback, filterCreationErrorCallback);
};

Eth.prototype.namereg = function () {
    return this.contract(namereg.global.abi).at(namereg.global.address);
};

Eth.prototype.icapNamereg = function () {
    return this.contract(namereg.icap.abi).at(namereg.icap.address);
};

Eth.prototype.isSyncing = function (callback) {
    return new IsSyncing(this._requestManager, callback);
};

module.exports = Eth;


/***/ }),

/***/ 92941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file eth.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var utils = __webpack_require__(70472);
var Property = __webpack_require__(67130);

var Net = function (web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    properties().forEach(function(p) { 
        p.attachToObject(self);
        p.setRequestManager(web3._requestManager);
    });
};

/// @returns an array of objects describing web3.eth api properties
var properties = function () {
    return [
        new Property({
            name: 'listening',
            getter: 'net_listening'
        }),
        new Property({
            name: 'peerCount',
            getter: 'net_peerCount',
            outputFormatter: utils.toDecimal
        })
    ];
};

module.exports = Net;


/***/ }),

/***/ 72601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file eth.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */



var Method = __webpack_require__(43161);
var Property = __webpack_require__(67130);
var formatters = __webpack_require__(95096);

function Personal(web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });
}

var methods = function () {
    var newAccount = new Method({
        name: 'newAccount',
        call: 'personal_newAccount',
        params: 1,
        inputFormatter: [null]
    });

    var importRawKey = new Method({
        name: 'importRawKey',
		call: 'personal_importRawKey',
		params: 2
    });

    var sign = new Method({
        name: 'sign',
		call: 'personal_sign',
		params: 3,
		inputFormatter: [null, formatters.inputAddressFormatter, null]
    });

    var ecRecover = new Method({
        name: 'ecRecover',
		call: 'personal_ecRecover',
		params: 2
    });

    var unlockAccount = new Method({
        name: 'unlockAccount',
        call: 'personal_unlockAccount',
        params: 3,
        inputFormatter: [formatters.inputAddressFormatter, null, null]
    });

    var sendTransaction = new Method({
        name: 'sendTransaction',
        call: 'personal_sendTransaction',
        params: 2,
        inputFormatter: [formatters.inputTransactionFormatter, null]
    });

    var lockAccount = new Method({
        name: 'lockAccount',
        call: 'personal_lockAccount',
        params: 1,
        inputFormatter: [formatters.inputAddressFormatter]
    });

    return [
        newAccount,
        importRawKey,
        unlockAccount,
        ecRecover,
        sign,
        sendTransaction,
        lockAccount
    ];
};

var properties = function () {
    return [
        new Property({
            name: 'listAccounts',
            getter: 'personal_listAccounts'
        })
    ];
};


module.exports = Personal;


/***/ }),

/***/ 39034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file shh.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Marek Kotewicz <marek@ethcore.io>
 * @date 2017
 */

var Method = __webpack_require__(43161);
var Filter = __webpack_require__(91023);
var watches = __webpack_require__(94995);

var Shh = function (web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
};

Shh.prototype.newMessageFilter = function (options, callback, filterCreationErrorCallback) {
    return new Filter(options, 'shh', this._requestManager, watches.shh(), null, callback, filterCreationErrorCallback);
};

var methods = function () {

    return [
        new Method({
            name: 'version',
            call: 'shh_version',
            params: 0
        }),
        new Method({
            name: 'info',
            call: 'shh_info',
            params: 0
        }),
        new Method({
            name: 'setMaxMessageSize',
            call: 'shh_setMaxMessageSize',
            params: 1
        }),
        new Method({
            name: 'setMinPoW',
            call: 'shh_setMinPoW',
            params: 1
        }),
        new Method({
            name: 'markTrustedPeer',
            call: 'shh_markTrustedPeer',
            params: 1
        }),
        new Method({
            name: 'newKeyPair',
            call: 'shh_newKeyPair',
            params: 0
        }),
        new Method({
            name: 'addPrivateKey',
            call: 'shh_addPrivateKey',
            params: 1
        }),
        new Method({
            name: 'deleteKeyPair',
            call: 'shh_deleteKeyPair',
            params: 1
        }),
        new Method({
            name: 'hasKeyPair',
            call: 'shh_hasKeyPair',
            params: 1
        }),
        new Method({
            name: 'getPublicKey',
            call: 'shh_getPublicKey',
            params: 1
        }),
        new Method({
            name: 'getPrivateKey',
            call: 'shh_getPrivateKey',
            params: 1
        }),
        new Method({
            name: 'newSymKey',
            call: 'shh_newSymKey',
            params: 0
        }),
        new Method({
            name: 'addSymKey',
            call: 'shh_addSymKey',
            params: 1
        }),
        new Method({
            name: 'generateSymKeyFromPassword',
            call: 'shh_generateSymKeyFromPassword',
            params: 1
        }),
        new Method({
            name: 'hasSymKey',
            call: 'shh_hasSymKey',
            params: 1
        }),
        new Method({
            name: 'getSymKey',
            call: 'shh_getSymKey',
            params: 1
        }),
        new Method({
            name: 'deleteSymKey',
            call: 'shh_deleteSymKey',
            params: 1
        }),

        // subscribe and unsubscribe missing

        new Method({
            name: 'post',
            call: 'shh_post',
            params: 1,
            inputFormatter: [null]
        })
    ];
};

module.exports = Shh;



/***/ }),

/***/ 955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file bzz.js
 * @author Alex Beregszaszi <alex@rtfs.hu>
 * @date 2016
 *
 * Reference: https://github.com/ethereum/go-ethereum/blob/swarm/internal/web3ext/web3ext.go#L33
 */



var Method = __webpack_require__(43161);
var Property = __webpack_require__(67130);

function Swarm(web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });
}

var methods = function () {
    var blockNetworkRead = new Method({
        name: 'blockNetworkRead',
        call: 'bzz_blockNetworkRead',
        params: 1,
        inputFormatter: [null]
    });

    var syncEnabled = new Method({
        name: 'syncEnabled',
        call: 'bzz_syncEnabled',
        params: 1,
        inputFormatter: [null]
    });

    var swapEnabled = new Method({
        name: 'swapEnabled',
        call: 'bzz_swapEnabled',
        params: 1,
        inputFormatter: [null]
    });

    var download = new Method({
        name: 'download',
        call: 'bzz_download',
        params: 2,
        inputFormatter: [null, null]
    });

    var upload = new Method({
        name: 'upload',
        call: 'bzz_upload',
        params: 2,
        inputFormatter: [null, null]
    });

    var retrieve = new Method({
        name: 'retrieve',
        call: 'bzz_retrieve',
        params: 1,
        inputFormatter: [null]
    });

    var store = new Method({
        name: 'store',
        call: 'bzz_store',
        params: 2,
        inputFormatter: [null, null]
    });

    var get = new Method({
        name: 'get',
        call: 'bzz_get',
        params: 1,
        inputFormatter: [null]
    });

    var put = new Method({
        name: 'put',
        call: 'bzz_put',
        params: 2,
        inputFormatter: [null, null]
    });

    var modify = new Method({
        name: 'modify',
        call: 'bzz_modify',
        params: 4,
        inputFormatter: [null, null, null, null]
    });

    return [
        blockNetworkRead,
        syncEnabled,
        swapEnabled,
        download,
        upload,
        retrieve,
        store,
        get,
        put,
        modify
    ];
};

var properties = function () {
    return [
        new Property({
            name: 'hive',
            getter: 'bzz_hive'
        }),
        new Property({
            name: 'info',
            getter: 'bzz_info'
        })
    ];
};


module.exports = Swarm;


/***/ }),

/***/ 94995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file watches.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var Method = __webpack_require__(43161);

/// @returns an array of objects describing web3.eth.filter api methods
var eth = function () {
    var newFilterCall = function (args) {
        var type = args[0];

        switch(type) {
            case 'latest':
                args.shift();
                this.params = 0;
                return 'eth_newBlockFilter';
            case 'pending':
                args.shift();
                this.params = 0;
                return 'eth_newPendingTransactionFilter';
            default:
                return 'eth_newFilter';
        }
    };

    var newFilter = new Method({
        name: 'newFilter',
        call: newFilterCall,
        params: 1
    });

    var uninstallFilter = new Method({
        name: 'uninstallFilter',
        call: 'eth_uninstallFilter',
        params: 1
    });

    var getLogs = new Method({
        name: 'getLogs',
        call: 'eth_getFilterLogs',
        params: 1
    });

    var poll = new Method({
        name: 'poll',
        call: 'eth_getFilterChanges',
        params: 1
    });

    return [
        newFilter,
        uninstallFilter,
        getLogs,
        poll
    ];
};

/// @returns an array of objects describing web3.shh.watch api methods
var shh = function () {

    return [
        new Method({
            name: 'newFilter',
            call: 'shh_newMessageFilter',
            params: 1
        }),
        new Method({
            name: 'uninstallFilter',
            call: 'shh_deleteMessageFilter',
            params: 1
        }),
        new Method({
            name: 'getLogs',
            call: 'shh_getFilterMessages',
            params: 1
        }),
        new Method({
            name: 'poll',
            call: 'shh_getFilterMessages',
            params: 1
        })
    ];
};

module.exports = {
    eth: eth,
    shh: shh
};



/***/ }),

/***/ 35949:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file namereg.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var globalRegistrarAbi = __webpack_require__(20849);
var icapRegistrarAbi= __webpack_require__(5293);

var globalNameregAddress = '0xc6d9d2cd449a754c494264e1809c50e34d64562b';
var icapNameregAddress = '0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00';

module.exports = {
    global: {
        abi: globalRegistrarAbi,
        address: globalNameregAddress
    },
    icap: {
        abi: icapRegistrarAbi,
        address: icapNameregAddress
    }
};



/***/ }),

/***/ 67130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file property.js
 * @author Fabian Vogelsteller <fabian@frozeman.de>
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var utils = __webpack_require__(70472);

var Property = function (options) {
    this.name = options.name;
    this.getter = options.getter;
    this.setter = options.setter;
    this.outputFormatter = options.outputFormatter;
    this.inputFormatter = options.inputFormatter;
    this.requestManager = null;
};

Property.prototype.setRequestManager = function (rm) {
    this.requestManager = rm;
};

/**
 * Should be called to format input args of method
 *
 * @method formatInput
 * @param {Array}
 * @return {Array}
 */
Property.prototype.formatInput = function (arg) {
    return this.inputFormatter ? this.inputFormatter(arg) : arg;
};

/**
 * Should be called to format output(result) of method
 *
 * @method formatOutput
 * @param {Object}
 * @return {Object}
 */
Property.prototype.formatOutput = function (result) {
    return this.outputFormatter && result !== null && result !== undefined ? this.outputFormatter(result) : result;
};

/**
 * Should be used to extract callback from array of arguments. Modifies input param
 *
 * @method extractCallback
 * @param {Array} arguments
 * @return {Function|Null} callback, if exists
 */
Property.prototype.extractCallback = function (args) {
    if (utils.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
    }
};


/**
 * Should attach function to method
 *
 * @method attachToObject
 * @param {Object}
 * @param {Function}
 */
Property.prototype.attachToObject = function (obj) {
    var proto = {
        get: this.buildGet(),
        enumerable: true
    };

    var names = this.name.split('.');
    var name = names[0];
    if (names.length > 1) {
        obj[names[0]] = obj[names[0]] || {};
        obj = obj[names[0]];
        name = names[1];
    }

    Object.defineProperty(obj, name, proto);
    obj[asyncGetterName(name)] = this.buildAsyncGet();
};

var asyncGetterName = function (name) {
    return 'get' + name.charAt(0).toUpperCase() + name.slice(1);
};

Property.prototype.buildGet = function () {
    var property = this;
    return function get() {
        return property.formatOutput(property.requestManager.send({
            method: property.getter
        }));
    };
};

Property.prototype.buildAsyncGet = function () {
    var property = this;
    var get = function (callback) {
        property.requestManager.sendAsync({
            method: property.getter
        }, function (err, result) {
            callback(err, property.formatOutput(result));
        });
    };
    get.request = this.request.bind(this);
    return get;
};

/**
 * Should be called to create pure JSONRPC request which can be used in batch request
 *
 * @method request
 * @param {...} params
 * @return {Object} jsonrpc request
 */
Property.prototype.request = function () {
    var payload = {
        method: this.getter,
        params: [],
        callback: this.extractCallback(Array.prototype.slice.call(arguments))
    };
    payload.format = this.formatOutput.bind(this);
    return payload;
};

module.exports = Property;



/***/ }),

/***/ 62768:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file requestmanager.js
 * @author Jeffrey Wilcke <jeff@ethdev.com>
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Marian Oancea <marian@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @author Gav Wood <g@ethdev.com>
 * @date 2014
 */

var Jsonrpc = __webpack_require__(85262);
var utils = __webpack_require__(70472);
var c = __webpack_require__(66433);
var errors = __webpack_require__(48048);

/**
 * It's responsible for passing messages to providers
 * It's also responsible for polling the ethereum node for incoming messages
 * Default poll timeout is 1 second
 * Singleton
 */
var RequestManager = function (provider) {
    this.provider = provider;
    this.polls = {};
    this.timeout = null;
};

/**
 * Should be used to synchronously send request
 *
 * @method send
 * @param {Object} data
 * @return {Object}
 */
RequestManager.prototype.send = function (data) {
    if (!this.provider) {
        console.error(errors.InvalidProvider());
        return null;
    }

    var payload = Jsonrpc.toPayload(data.method, data.params);
    var result = this.provider.send(payload);

    if (!Jsonrpc.isValidResponse(result)) {
        throw errors.InvalidResponse(result);
    }

    return result.result;
};

/**
 * Should be used to asynchronously send request
 *
 * @method sendAsync
 * @param {Object} data
 * @param {Function} callback
 */
RequestManager.prototype.sendAsync = function (data, callback) {
    if (!this.provider) {
        return callback(errors.InvalidProvider());
    }

    var payload = Jsonrpc.toPayload(data.method, data.params);
    this.provider.sendAsync(payload, function (err, result) {
        if (err) {
            return callback(err);
        }
        
        if (!Jsonrpc.isValidResponse(result)) {
            return callback(errors.InvalidResponse(result));
        }

        callback(null, result.result);
    });
};

/**
 * Should be called to asynchronously send batch request
 *
 * @method sendBatch
 * @param {Array} batch data
 * @param {Function} callback
 */
RequestManager.prototype.sendBatch = function (data, callback) {
    if (!this.provider) {
        return callback(errors.InvalidProvider());
    }

    var payload = Jsonrpc.toBatchPayload(data);

    this.provider.sendAsync(payload, function (err, results) {
        if (err) {
            return callback(err);
        }

        if (!utils.isArray(results)) {
            return callback(errors.InvalidResponse(results));
        }

        callback(err, results);
    }); 
};

/**
 * Should be used to set provider of request manager
 *
 * @method setProvider
 * @param {Object}
 */
RequestManager.prototype.setProvider = function (p) {
    this.provider = p;
};

/**
 * Should be used to start polling
 *
 * @method startPolling
 * @param {Object} data
 * @param {Number} pollId
 * @param {Function} callback
 * @param {Function} uninstall
 *
 * @todo cleanup number of params
 */
RequestManager.prototype.startPolling = function (data, pollId, callback, uninstall) {
    this.polls[pollId] = {data: data, id: pollId, callback: callback, uninstall: uninstall};


    // start polling
    if (!this.timeout) {
        this.poll();
    }
};

/**
 * Should be used to stop polling for filter with given id
 *
 * @method stopPolling
 * @param {Number} pollId
 */
RequestManager.prototype.stopPolling = function (pollId) {
    delete this.polls[pollId];

    // stop polling
    if(Object.keys(this.polls).length === 0 && this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
    }
};

/**
 * Should be called to reset the polling mechanism of the request manager
 *
 * @method reset
 */
RequestManager.prototype.reset = function (keepIsSyncing) {
    /*jshint maxcomplexity:5 */

    for (var key in this.polls) {
        // remove all polls, except sync polls,
        // they need to be removed manually by calling syncing.stopWatching()
        if(!keepIsSyncing || key.indexOf('syncPoll_') === -1) {
            this.polls[key].uninstall();
            delete this.polls[key];
        }
    }

    // stop polling
    if(Object.keys(this.polls).length === 0 && this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
    }
};

/**
 * Should be called to poll for changes on filter with given id
 *
 * @method poll
 */
RequestManager.prototype.poll = function () {
    /*jshint maxcomplexity: 6 */
    this.timeout = setTimeout(this.poll.bind(this), c.ETH_POLLING_TIMEOUT);

    if (Object.keys(this.polls).length === 0) {
        return;
    }

    if (!this.provider) {
        console.error(errors.InvalidProvider());
        return;
    }

    var pollsData = [];
    var pollsIds = [];
    for (var key in this.polls) {
        pollsData.push(this.polls[key].data);
        pollsIds.push(key);
    }

    if (pollsData.length === 0) {
        return;
    }

    var payload = Jsonrpc.toBatchPayload(pollsData);
    
    // map the request id to they poll id
    var pollsIdMap = {};
    payload.forEach(function(load, index){
        pollsIdMap[load.id] = pollsIds[index];
    });


    var self = this;
    this.provider.sendAsync(payload, function (error, results) {


        // TODO: console log?
        if (error) {
            return;
        }

        if (!utils.isArray(results)) {
            throw errors.InvalidResponse(results);
        }
        results.map(function (result) {
            var id = pollsIdMap[result.id];

            // make sure the filter is still installed after arrival of the request
            if (self.polls[id]) {
                result.callback = self.polls[id].callback;
                return result;
            } else
                return false;
        }).filter(function (result) {
            return !!result; 
        }).filter(function (result) {
            var valid = Jsonrpc.isValidResponse(result);
            if (!valid) {
                result.callback(errors.InvalidResponse(result));
            }
            return valid;
        }).forEach(function (result) {
            result.callback(null, result.result);
        });
    });
};

module.exports = RequestManager;



/***/ }),

/***/ 94923:
/***/ ((module) => {



var Settings = function () {
    this.defaultBlock = 'latest';
    this.defaultAccount = undefined;
};

module.exports = Settings;



/***/ }),

/***/ 36300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file syncing.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */

var formatters = __webpack_require__(95096);
var utils = __webpack_require__(70472);

var count = 1;

/**
Adds the callback and sets up the methods, to iterate over the results.

@method pollSyncing
@param {Object} self
*/
var pollSyncing = function(self) {

    var onMessage = function (error, sync) {
        if (error) {
            return self.callbacks.forEach(function (callback) {
                callback(error);
            });
        }

        if(utils.isObject(sync) && sync.startingBlock)
            sync = formatters.outputSyncingFormatter(sync);

        self.callbacks.forEach(function (callback) {
            if (self.lastSyncState !== sync) {
                
                // call the callback with true first so the app can stop anything, before receiving the sync data
                if(!self.lastSyncState && utils.isObject(sync))
                    callback(null, true);
                
                // call on the next CPU cycle, so the actions of the sync stop can be processes first
                setTimeout(function() {
                    callback(null, sync);
                }, 0);
                
                self.lastSyncState = sync;
            }
        });
    };

    self.requestManager.startPolling({
        method: 'eth_syncing',
        params: [],
    }, self.pollId, onMessage, self.stopWatching.bind(self));

};

var IsSyncing = function (requestManager, callback) {
    this.requestManager = requestManager;
    this.pollId = 'syncPoll_'+ count++;
    this.callbacks = [];
    this.addCallback(callback);
    this.lastSyncState = false;
    pollSyncing(this);

    return this;
};

IsSyncing.prototype.addCallback = function (callback) {
    if(callback)
        this.callbacks.push(callback);
    return this;
};

IsSyncing.prototype.stopWatching = function () {
    this.requestManager.stopPolling(this.pollId);
    this.callbacks = [];
};

module.exports = IsSyncing;



/***/ }),

/***/ 62544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file transfer.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var Iban = __webpack_require__(29995);
var exchangeAbi = __webpack_require__(92805);

/**
 * Should be used to make Iban transfer
 *
 * @method transfer
 * @param {String} from
 * @param {String} to iban
 * @param {Value} value to be tranfered
 * @param {Function} callback, callback
 */
var transfer = function (eth, from, to, value, callback) {
    var iban = new Iban(to); 
    if (!iban.isValid()) {
        throw new Error('invalid iban address');
    }

    if (iban.isDirect()) {
        return transferToAddress(eth, from, iban.address(), value, callback);
    }
    
    if (!callback) {
        var address = eth.icapNamereg().addr(iban.institution());
        return deposit(eth, from, address, value, iban.client());
    }

    eth.icapNamereg().addr(iban.institution(), function (err, address) {
        return deposit(eth, from, address, value, iban.client(), callback);
    });
    
};

/**
 * Should be used to transfer funds to certain address
 *
 * @method transferToAddress
 * @param {String} from
 * @param {String} to
 * @param {Value} value to be tranfered
 * @param {Function} callback, callback
 */
var transferToAddress = function (eth, from, to, value, callback) {
    return eth.sendTransaction({
        address: to,
        from: from,
        value: value
    }, callback);
};

/**
 * Should be used to deposit funds to generic Exchange contract (must implement deposit(bytes32) method!)
 *
 * @method deposit
 * @param {String} from
 * @param {String} to
 * @param {Value} value to be transfered
 * @param {String} client unique identifier
 * @param {Function} callback, callback
 */
var deposit = function (eth, from, to, value, client, callback) {
    var abi = exchangeAbi;
    return eth.contract(abi).at(to).deposit(client, {
        from: from,
        value: value
    }, callback);
};

module.exports = transfer;



/***/ }),

/***/ 90582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Gav Wood <gav@parity.io>
 *   Jeffrey Wilcke <jeffrey.wilcke@ethereum.org>
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea <marian@ethereum.org>
 * @date 2017
 */

var version = (__webpack_require__(18168)/* .version */ .i8);
var core = __webpack_require__(10833);
var Eth = __webpack_require__(72395);
var Net = __webpack_require__(76932);
var Personal = __webpack_require__(33513);
var Shh = __webpack_require__(63182);
var Bzz = __webpack_require__(32007);
var utils = __webpack_require__(83317);
var Web3 = function Web3() {
    var _this = this;
    // sets _requestmanager etc
    core.packageInit(this, arguments);
    this.version = version;
    this.utils = utils;
    this.eth = new Eth(this);
    this.shh = new Shh(this);
    this.bzz = new Bzz(this);
    // overwrite package setProvider
    var setProvider = this.setProvider;
    this.setProvider = function (provider, net) {
        /*jshint unused: false */
        setProvider.apply(_this, arguments);
        _this.eth.setRequestManager(_this._requestManager);
        _this.shh.setRequestManager(_this._requestManager);
        _this.bzz.setProvider(provider);
        return true;
    };
};
Web3.version = version;
Web3.utils = utils;
Web3.modules = {
    Eth: Eth,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};
core.addProviders(Web3);
module.exports = Web3;


/***/ }),

/***/ 20849:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"name","outputs":[{"name":"o_name","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"content","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"subRegistrar","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_registrar","type":"address"}],"name":"setSubRegistrar","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"Registrar","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"},{"name":"_primary","type":"bool"}],"name":"setAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_content","type":"bytes32"}],"name":"setContent","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"disown","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"bytes32"},{"indexed":false,"name":"_winner","type":"address"}],"name":"AuctionEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"bytes32"},{"indexed":false,"name":"_bidder","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"},{"indexed":true,"name":"addr","type":"address"}],"name":"PrimaryChanged","type":"event"}]');

/***/ }),

/***/ 5293:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_refund","type":"address"}],"name":"disown","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"}],"name":"setAddr","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"}]');

/***/ }),

/***/ 92805:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":false,"inputs":[{"name":"from","type":"bytes32"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"bytes32"},{"name":"to","type":"address"},{"name":"indirectId","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"icapTransfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"bytes32"}],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"AnonymousDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"bytes32"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"bytes32"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"indirectId","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"IcapTransfer","type":"event"}]');

/***/ }),

/***/ 74853:
/***/ ((module) => {

"use strict";
module.exports = {"version":"0.20.7"};

/***/ }),

/***/ 18168:
/***/ ((module) => {

"use strict";
module.exports = {"i8":"1.5.2"};

/***/ })

}]);