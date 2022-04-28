"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1240],{

/***/ 82036:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gv": () => (/* reexport */ Bee)
});

// UNUSED EXPORTS: ADDRESS_HEX_LENGTH, BATCH_ID_HEX_LENGTH, BRANCHES, BeeArgumentError, BeeDebug, BeeError, BeeModes, BeeNotAJsonError, BeeRequestError, BeeResponseError, CHUNK_SIZE, ENCRYPTED_REFERENCE_BYTES_LENGTH, ENCRYPTED_REFERENCE_HEX_LENGTH, PSS_TARGET_HEX_LENGTH_MAX, PUBKEY_HEX_LENGTH, REFERENCE_BYTES_LENGTH, REFERENCE_HEX_LENGTH, SECTION_SIZE, SIGNATURE_BYTES_LENGTH, SIGNATURE_HEX_LENGTH, SPAN_SIZE, STAMPS_DEPTH_MAX, STAMPS_DEPTH_MIN, SUPPORTED_BEE_VERSION, SUPPORTED_BEE_VERSION_EXACT, TAGS_LIMIT_MAX, TAGS_LIMIT_MIN, TOPIC_BYTES_LENGTH, TOPIC_HEX_LENGTH, Utils

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/error.js
class BeeError extends Error {
  constructor(message) {
    super(message);
  }

}
class error_BeeArgumentError extends BeeError {
  value;

  constructor(message, value) {
    super(message);
    this.value = value;
  }

}
class BeeRequestError extends BeeError {
  requestOptions;
  /**
   * @param message
   * @param requestOptions KyOptions that were used to assemble the request. THIS MIGHT NOT BE COMPLETE! If custom Ky instance was used that has set defaults then these defaults are not visible in this object!
   */

  constructor(message, requestOptions) {
    super(message);
    this.requestOptions = requestOptions;
  }

}
class BeeResponseError extends BeeError {
  status;
  response;
  responseBody;
  requestOptions;
  /**
   * @param status HTTP status code number
   * @param response Response returned from the server
   * @param responseBody Response body as string which is returned from response.text() call
   * @param requestOptions KyOptions that were used to assemble the request. THIS MIGHT NOT BE COMPLETE! If custom Ky instance was used that has set defaults then these defaults are not visible in this object!
   * @param message
   */

  constructor(status, response, responseBody, requestOptions, message) {
    super(message);
    this.status = status;
    this.response = response;
    this.responseBody = responseBody;
    this.requestOptions = requestOptions;
  }

}
class BeeNotAJsonError extends BeeError {
  constructor() {
    super(`Received response is not valid JSON.`);
  }

}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/headers.js

/**
 * Read the filename from the content-disposition header
 * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
 *
 * @param header the content-disposition header value
 *
 * @returns the filename
 */

function readContentDispositionFilename(header) {
  if (!header) {
    throw new BeeError('missing content-disposition header');
  } // Regex was found here
  // https://stackoverflow.com/questions/23054475/javascript-regex-for-extracting-filename-from-content-disposition-header


  const dispositionMatch = header.match(/filename\*?=['"]?(?:UTF-\d['"]*)?([^;\r\n"']*)['"]?;?/i);

  if (dispositionMatch && dispositionMatch.length > 0) {
    return dispositionMatch[1];
  }

  throw new BeeError('invalid content-disposition header');
}

function readTagUid(header) {
  if (!header) {
    return undefined;
  }

  return parseInt(header, 10);
}

function readFileHeaders(headers) {
  const name = readContentDispositionFilename(headers.get('content-disposition'));
  const tagUid = readTagUid(headers.get('swarm-tag-uid'));
  const contentType = headers.get('content-type') || undefined;
  return {
    name,
    tagUid,
    contentType
  };
}
function extractUploadHeaders(postageBatchId, options) {
  if (!postageBatchId) {
    throw new BeeError('Postage BatchID has to be specified!');
  }

  const headers = {
    'swarm-postage-batch-id': postageBatchId
  };
  if (options?.pin) headers['swarm-pin'] = String(options.pin);
  if (options?.encrypt) headers['swarm-encrypt'] = String(options.encrypt);
  if (options?.tag) headers['swarm-tag'] = String(options.tag);
  if (typeof options?.deferred === 'boolean') headers['swarm-deferred-upload'] = options.deferred.toString();
  return headers;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/ky@0.25.1/node_modules/ky/index.js
var ky = __webpack_require__(88960);
// EXTERNAL MODULE: stream (ignored)
var stream_ignored_ = __webpack_require__(88619);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/types/debug.js
var BeeModes;

(function (BeeModes) {
  BeeModes["FULL"] = "full";
  BeeModes["LIGHT"] = "light";
  BeeModes["DEV"] = "dev";
})(BeeModes || (BeeModes = {}));
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/types/index.js

const SPAN_SIZE = 8;
const SECTION_SIZE = 32;
const BRANCHES = 128;
const CHUNK_SIZE = SECTION_SIZE * BRANCHES;
const ADDRESS_HEX_LENGTH = 64;
const types_PSS_TARGET_HEX_LENGTH_MAX = 6;
const PUBKEY_HEX_LENGTH = 66;
const BATCH_ID_HEX_LENGTH = 64;
const REFERENCE_HEX_LENGTH = 64;
const ENCRYPTED_REFERENCE_HEX_LENGTH = 128;
const REFERENCE_BYTES_LENGTH = 32;
const ENCRYPTED_REFERENCE_BYTES_LENGTH = 64;
/**
 * Minimal depth that can be used for creation of postage batch
 */

const types_STAMPS_DEPTH_MIN = 17;
/**
 * Maximal depth that can be used for creation of postage batch
 */

const types_STAMPS_DEPTH_MAX = 255;
const TAGS_LIMIT_MIN = 1;
const TAGS_LIMIT_MAX = 1000;
/*********************************************************
 * Writers and Readers interfaces
 */

const TOPIC_BYTES_LENGTH = 32;
const TOPIC_HEX_LENGTH = 64;
/*********************************************************
 * Ethereum compatible signing interfaces and definitions
 */

const SIGNATURE_HEX_LENGTH = 130;
const SIGNATURE_BYTES_LENGTH = 65;
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/file.js
/**
 * Compatibility functions for working with File API objects
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/File
 */
function isFile(file) {
  // browser
  if (typeof File === 'function') {
    return file instanceof File;
  } // node.js


  const f = file;
  return typeof f === 'object' && typeof f.name === 'string' && (typeof f.stream === 'function' || typeof f.arrayBuffer === 'function');
}
/**
 * Compatibility helper for browsers where the `arrayBuffer function is
 * missing from `File` objects.
 *
 * @param file A File object
 */

async function fileArrayBuffer(file) {
  if (file.arrayBuffer) {
    return file.arrayBuffer();
  } // workaround for Safari where arrayBuffer is not supported on Files


  return new Promise(resolve => {
    const fr = new FileReader();

    fr.onload = () => resolve(fr.result);

    fr.readAsArrayBuffer(file);
  });
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/bytes.js

/**
 * Type guard for `Bytes<T>` type
 *
 * @param b       The byte array
 * @param length  The length of the byte array
 */

function isBytes(b, length) {
  return b instanceof Uint8Array && b.length === length;
}
/**
 * Verifies if a byte array has a certain length
 *
 * @param b       The byte array
 * @param length  The specified length
 */

function assertBytes(b, length) {
  if (!isBytes(b, length)) {
    throw new TypeError(`Parameter is not valid Bytes of length: ${length} !== ${b.length}`);
  }
}
/**
 * Type guard for FlexBytes<Min,Max> type
 *
 * @param b       The byte array
 * @param min     Minimum size of the array
 * @param max     Maximum size of the array
 */

function isFlexBytes(b, min, max) {
  return b instanceof Uint8Array && b.length >= min && b.length <= max;
}
/**
 * Verifies if a byte array has a certain length between min and max
 *
 * @param b       The byte array
 * @param min     Minimum size of the array
 * @param max     Maximum size of the array
 */

function assertFlexBytes(b, min, max) {
  if (!isFlexBytes(b, min, max)) {
    throw new TypeError(`Parameter is not valid FlexBytes of  min: ${min}, max: ${max}, length: ${b.length}`);
  }
}
/**
 * Return `length` bytes starting from `offset`
 *
 * @param data   The original data
 * @param offset The offset to start from
 * @param length The length of data to be returned
 */

function bytes_bytesAtOffset(data, offset, length) {
  const offsetBytes = data.slice(offset, offset + length); // We are returning strongly typed Bytes so we have to verify that length is really what we claim

  assertBytes(offsetBytes, length);
  return offsetBytes;
}
/**
 * Return flex bytes starting from `offset`
 *
 * @param data   The original data
 * @param offset The offset to start from
 * @param _min   The minimum size of the data
 * @param _max   The maximum size of the data
 */

function flexBytesAtOffset(data, offset, // eslint-disable-next-line @typescript-eslint/no-unused-vars
_min, // eslint-disable-next-line @typescript-eslint/no-unused-vars
_max) {
  return data.slice(offset);
}
/**
 * Returns true if two byte arrays are equal
 *
 * @param a Byte array to compare
 * @param b Byte array to compare
 */

function bytesEqual(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}
/**
 * Returns a new byte array filled with zeroes with the specified length
 *
 * @param length The length of data to be returned
 */

function bytes_makeBytes(length) {
  return new Uint8Array(length);
}
function wrapBytesWithHelpers(data) {
  return Object.assign(data, {
    text: () => new TextDecoder('utf-8').decode(data),
    json: () => JSON.parse(new TextDecoder('utf-8').decode(data)),
    hex: () => hex_bytesToHex(data)
  });
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/hex.js

/**
 * Creates unprefixed hex string from wide range of data.
 *
 * TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208
 *
 * @param input
 * @param len of the resulting HexString WITHOUT prefix!
 */

function hex_makeHexString(input, len) {
  if (typeof input === 'number') {
    return hex_intToHex(input, len);
  }

  if (input instanceof Uint8Array) {
    return hex_bytesToHex(input, len);
  }

  if (typeof input === 'string') {
    if (isPrefixedHexString(input)) {
      const hex = input.slice(2);

      if (len && hex.length !== len) {
        throw new TypeError(`Length mismatch for valid hex string. Expecting length ${len}: ${hex}`);
      }

      return hex;
    } else {
      // We use assertHexString() as there might be more reasons why a string is not valid hex string
      // and usage of isHexString() would not give enough information to the user on what is going
      // wrong.
      hex_assertHexString(input, len);
      return input;
    }
  }

  throw new TypeError('Not HexString compatible type!');
}
/**
 * Converts a hex string to Uint8Array
 *
 * @param hex string input without 0x prefix!
 */

function hex_hexToBytes(hex) {
  hex_assertHexString(hex);
  const bytes = bytes_makeBytes(hex.length / 2);

  for (let i = 0; i < bytes.length; i++) {
    const hexByte = hex.substr(i * 2, 2);
    bytes[i] = parseInt(hexByte, 16);
  }

  return bytes;
}
/**
 * Converts array of number or Uint8Array to HexString without prefix.
 *
 * @param bytes   The input array
 * @param len     The length of the non prefixed HexString
 */

function hex_bytesToHex(bytes, len) {
  const hexByte = n => n.toString(16).padStart(2, '0');

  const hex = Array.from(bytes, hexByte).join(''); // TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

  if (len && hex.length !== len) {
    throw new TypeError(`Resulting HexString does not have expected length ${len}: ${hex}`);
  }

  return hex;
}
/**
 * Converts integer number to hex string.
 *
 * Optionally provides '0x' prefix or padding
 *
 * @param int         The positive integer to be converted
 * @param len     The length of the non prefixed HexString
 */

function hex_intToHex(int, len) {
  if (!Number.isInteger(int)) throw new TypeError('the value provided is not integer');
  if (int > Number.MAX_SAFE_INTEGER) throw new TypeError('the value provided exceeds safe integer');
  if (int < 0) throw new TypeError('the value provided is a negative integer');
  const hex = int.toString(16); // TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

  if (len && hex.length !== len) {
    throw new TypeError(`Resulting HexString does not have expected length ${len}: ${hex}`);
  }

  return hex;
}
/**
 * Type guard for HexStrings.
 * Requires no 0x prefix!
 *
 * TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208
 *
 * @param s string input
 * @param len expected length of the HexString
 */

function isHexString(s, len) {
  return typeof s === 'string' && /^[0-9a-f]+$/i.test(s) && (!len || s.length === len);
}
/**
 * Type guard for PrefixedHexStrings.
 * Does enforce presence of 0x prefix!
 *
 * @param s string input
 */

function isPrefixedHexString(s) {
  return typeof s === 'string' && /^0x[0-9a-f]+$/i.test(s);
}
/**
 * Verifies if the provided input is a HexString.
 *
 * TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208
 *
 * @param s string input
 * @param len expected length of the HexString
 * @param name optional name for the asserted value
 * @returns HexString or throws error
 */

function hex_assertHexString(s, len, name = 'value') {
  if (!isHexString(s, len)) {
    if (isPrefixedHexString(s)) {
      throw new TypeError(`${name} not valid non prefixed hex string (has 0x prefix): ${s}`);
    } // Don't display length error if no length specified in order not to confuse user


    const lengthMsg = len ? ` of length ${len}` : '';
    throw new TypeError(`${name} not valid hex string${lengthMsg}: ${s}`);
  }
}
/**
 * Verifies if the provided input is a PrefixedHexString.
 *
 * @param s string input
 * @param len expected length of the HexString
 * @param name optional name for the asserted value
 * @returns HexString or throws error
 */

function hex_assertPrefixedHexString(s, name = 'value') {
  if (!isPrefixedHexString(s)) {
    throw new TypeError(`${name} not valid prefixed hex string: ${s}`);
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/type.js





function isUint8Array(obj) {
  return obj instanceof Uint8Array;
}
function isInteger(value) {
  return typeof value === 'string' && /^-?(0|[1-9][0-9]*)$/g.test(value) || typeof value === 'number' && value > Number.MIN_SAFE_INTEGER && value < Number.MAX_SAFE_INTEGER && Number.isInteger(value);
}
function isObject(value) {
  return value !== null && typeof value === 'object';
}
/**
 * Generally it is discouraged to use `object` type, but in this case I think
 * it is best to do so as it is possible to easily convert from `object`to other
 * types, which will be usually the case after asserting that the object is
 * strictly object. With for example Record<string, unknown> you have to first
 * cast it to `unknown` which I think bit defeat the purpose.
 *
 * @param value
 */
// eslint-disable-next-line @typescript-eslint/ban-types

function isStrictlyObject(value) {
  return isObject(value) && !Array.isArray(value);
}
/**
 * Asserts if object is Error
 *
 * @param e
 */

function isError(e) {
  return e instanceof Error;
} // eslint-disable-next-line @typescript-eslint/ban-types

function assertStrictlyObject(value, name = 'value') {
  if (!isStrictlyObject(value)) {
    throw new TypeError(`${name} has to be an object that is not null nor array!`);
  }
}
function type_assertBoolean(value, name = 'value') {
  if (value !== true && value !== false) throw new TypeError(`${name} is not boolean`);
}
function assertInteger(value, name = 'value') {
  if (!isInteger(value)) throw new TypeError(`${name} is not integer`);
}
function type_assertNonNegativeInteger(value, name = 'Value') {
  assertInteger(value, name);
  if (Number(value) < 0) throw new error_BeeArgumentError(`${name} has to be bigger or equal to zero`, value);
}
function assertReference(value) {
  try {
    hex_assertHexString(value, REFERENCE_HEX_LENGTH);
  } catch (e) {
    hex_assertHexString(value, ENCRYPTED_REFERENCE_HEX_LENGTH);
  }
}
function type_assertAddress(value) {
  hex_assertHexString(value, ADDRESS_HEX_LENGTH, 'Address');
}
function type_assertBatchId(value) {
  hex_assertHexString(value, BATCH_ID_HEX_LENGTH, 'BatchId');
}
function type_assertRequestOptions(value, name = 'RequestOptions') {
  if (value === undefined) {
    return;
  }

  if (!isStrictlyObject(value)) {
    throw new TypeError(`${name} has to be an object!`);
  }

  const options = value;

  if (options.retry) {
    type_assertNonNegativeInteger(options.retry, `${name}.retry`);
  }

  if (options.timeout) {
    type_assertNonNegativeInteger(options.timeout, `${name}.timeout`);
  }

  if (options.fetch && typeof options.fetch !== 'function') {
    throw new TypeError(`${name}.fetch has to be a function or undefined!`);
  }
}
function assertUploadOptions(value, name = 'UploadOptions') {
  if (!isStrictlyObject(value)) {
    throw new TypeError(`${name} has to be an object!`);
  }

  type_assertRequestOptions(value, name);
  const options = value;

  if (options.pin && typeof options.pin !== 'boolean') {
    throw new TypeError(`options.pin property in ${name} has to be boolean or undefined!`);
  }

  if (options.encrypt && typeof options.encrypt !== 'boolean') {
    throw new TypeError(`options.encrypt property in ${name} has to be boolean or undefined!`);
  }

  if (options.tag) {
    if (typeof options.tag !== 'number') {
      throw new TypeError(`options.tag property in ${name} has to be number or undefined!`);
    }

    type_assertNonNegativeInteger(options.tag, 'options.tag');
  }
}
function assertFileUploadOptions(value) {
  assertUploadOptions(value, 'FileUploadOptions');
  const options = value;

  if (options.size) {
    if (typeof options.size !== 'number') {
      throw new TypeError('tag property in FileUploadOptions has to be number or undefined!');
    }

    type_assertNonNegativeInteger(options.size, 'options.size');
  }

  if (options.contentType && typeof options.contentType !== 'string') {
    throw new TypeError('contentType property in FileUploadOptions has to be string or undefined!');
  }
}
function assertCollectionUploadOptions(value) {
  assertUploadOptions(value, 'CollectionUploadOptions');
  const options = value;

  if (options.indexDocument && typeof options.indexDocument !== 'string') {
    throw new TypeError('indexDocument property in CollectionUploadOptions has to be string or undefined!');
  }

  if (options.errorDocument && typeof options.errorDocument !== 'string') {
    throw new TypeError('errorDocument property in CollectionUploadOptions has to be string or undefined!');
  }
}
function type_isTag(value) {
  if (!isStrictlyObject(value)) {
    return false;
  }

  const tag = value;
  const numberProperties = ['total', 'processed', 'synced', 'uid'];
  const correctNumberProperties = numberProperties.every(numberProperty => typeof tag[numberProperty] === 'number');

  if (!correctNumberProperties || !tag.startedAt || typeof tag.startedAt !== 'string') {
    return false;
  }

  return true;
}
function assertTag(value) {
  if (!isStrictlyObject(value)) {
    throw new TypeError('Tag is not an object!');
  }

  const tag = value;
  const numberProperties = ['total', 'processed', 'synced', 'uid'];

  for (const numberProperty of numberProperties) {
    if (!tag[numberProperty]) {
      throw new TypeError(`Tag's property '${numberProperty}' has to be specified!`);
    }

    if (typeof tag[numberProperty] !== 'number') {
      throw new TypeError(`Tag's property '${numberProperty}' has to be number!`);
    }
  }

  if (!tag.startedAt) {
    throw new TypeError("Tag's property 'startedAt' has to be specified!");
  }

  if (typeof tag.startedAt !== 'string') {
    throw new TypeError("Tag's property 'startedAt' has to be string!");
  }
}
function assertAddressPrefix(value) {
  hex_assertHexString(value, undefined, 'AddressPrefix');

  if (value.length > types_PSS_TARGET_HEX_LENGTH_MAX) {
    throw new error_BeeArgumentError(`AddressPrefix must have length of ${types_PSS_TARGET_HEX_LENGTH_MAX} at most! Got string with ${value.length}`, value);
  }
}
function assertPssMessageHandler(value) {
  if (!isStrictlyObject(value)) {
    throw new TypeError('PssMessageHandler has to be object!');
  }

  const handler = value;

  if (typeof handler.onMessage !== 'function') {
    throw new TypeError('onMessage property of PssMessageHandler has to be function!');
  }

  if (typeof handler.onError !== 'function') {
    throw new TypeError('onError property of PssMessageHandler has to be function!');
  }
}
function assertPublicKey(value) {
  hex_assertHexString(value, PUBKEY_HEX_LENGTH, 'PublicKey');
}
function assertPostageBatchOptions(value) {
  if (value === undefined) {
    return;
  }

  assertStrictlyObject(value);
  const options = value;
  type_assertRequestOptions(options, 'PostageBatchOptions');

  if (options?.gasPrice) {
    type_assertNonNegativeInteger(options.gasPrice);
  }

  if (options?.immutableFlag !== undefined) {
    type_assertBoolean(options.immutableFlag);
  }
}
function type_assertCashoutOptions(value) {
  if (value === undefined) {
    return;
  }

  assertStrictlyObject(value);
  const options = value;
  type_assertRequestOptions(options, 'PostageBatchOptions');

  if (options?.gasLimit) {
    type_assertNonNegativeInteger(options.gasLimit);
  }

  if (options?.gasPrice) {
    type_assertNonNegativeInteger(options.gasPrice);
  }
}
/**
 * Check whether the given parameter is valid data to upload
 * @param value
 * @throws TypeError if not valid
 */

function assertData(value) {
  if (typeof value !== 'string' && !(value instanceof Uint8Array)) {
    throw new TypeError('Data must be either string or Uint8Array!');
  }
}
/**
 * Check whether the given parameter is a correct file representation to file upload.
 * @param value
 * @throws TypeError if not valid
 */

function assertFileData(value) {
  if (typeof value !== 'string' && !(value instanceof Uint8Array) && !isFile(value) && !isReadable(value)) {
    throw new TypeError('Data must be either string, Readable, Uint8Array or File!');
  }
}
/**
 * Checks whether optional options for AllTags query are valid
 * @param options
 */

function assertAllTagsOptions(entry) {
  if (entry !== undefined && !isStrictlyObject(entry)) {
    throw new TypeError('options has to be an object or undefined!');
  }

  type_assertRequestOptions(entry, 'AllTagsOptions');
  const options = entry;

  if (options?.limit !== undefined) {
    if (typeof options.limit !== 'number') {
      throw new TypeError('AllTagsOptions.limit has to be a number or undefined!');
    }

    if (options.limit < TAGS_LIMIT_MIN) {
      throw new error_BeeArgumentError(`AllTagsOptions.limit has to be at least ${TAGS_LIMIT_MIN}`, options.limit);
    }

    if (options.limit > TAGS_LIMIT_MAX) {
      throw new error_BeeArgumentError(`AllTagsOptions.limit has to be at most ${TAGS_LIMIT_MAX}`, options.limit);
    }
  }

  if (options?.offset !== undefined) {
    type_assertNonNegativeInteger(options.offset, 'AllTagsOptions.offset');
  }
}
/**
 * Utility functions that return Tag UID
 * @param tagUid
 */

function makeTagUid(tagUid) {
  if (tagUid === undefined || tagUid === null) {
    throw new TypeError('TagUid was expected but got undefined or null instead!');
  }

  if (type_isTag(tagUid)) {
    return tagUid.uid;
  } else if (typeof tagUid === 'number') {
    type_assertNonNegativeInteger(tagUid, 'UID');
    return tagUid;
  } else if (typeof tagUid === 'string') {
    const int = parseInt(tagUid);

    if (isNaN(int)) {
      throw new TypeError('Passed tagUid string is not valid integer!');
    }

    if (int < 0) {
      throw new TypeError(`TagUid was expected to be positive non-negative integer! Got ${int}`);
    }

    return int;
  }

  throw new TypeError('tagUid has to be either Tag or a number (UID)!');
}
function type_assertTransactionHash(transactionHash) {
  if (typeof transactionHash !== 'string') {
    throw new TypeError('TransactionHash has to be a string!');
  }

  assertPrefixedHexString(transactionHash, 'TransactionHash'); // Hash is 64 long + '0x' prefix = 66

  if (transactionHash.length !== 66) {
    throw new TypeError('TransactionHash has to be prefixed hex string with total length 66 (prefix including)');
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/web-streams-polyfill@3.2.0/node_modules/web-streams-polyfill/dist/ponyfill.js
var ponyfill = __webpack_require__(33714);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/stream.js
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];



const NodeReadable = stream_ignored_.Readable || class {};
/**
 * Validates if passed object is either browser's ReadableStream
 * or Node's Readable.
 *
 * @param entry
 */

function isReadable(entry) {
  return isReadableStream(entry) || isNodeReadable(entry);
}
function isReadableStream(entry) {
  if (!isStrictlyObject(entry)) {
    return false;
  }

  const browserReadable = entry;

  if (typeof browserReadable.getReader === 'function' && browserReadable.locked !== undefined && typeof browserReadable.cancel === 'function' && typeof browserReadable.pipeTo === 'function' && typeof browserReadable.pipeThrough === 'function') {
    return true;
  }

  return false;
}
function isNodeReadable(entry) {
  if (!isStrictlyObject(entry)) {
    return false;
  }

  const nodeReadable = entry;

  if (typeof nodeReadable.pipe === 'function' && nodeReadable.readable && typeof nodeReadable._read === 'function') {
    return true;
  }

  return false;
}
/**
 * Function that converts Node's Readable into WHATWG ReadableStream
 *
 * Taken over from https://github.com/gwicke/node-web-streams/blob/master/lib/conversions.js
 * Because it uses forked web-streams-polyfill that are outdated.
 *
 * @author https://github.com/gwicke
 * @licence Apache License 2.0 https://github.com/gwicke/node-web-streams/blob/master/LICENSE
 * @param nodeStream
 */

function readableNodeToWeb(nodeStream) {
  return new ponyfill.ReadableStream({
    start(controller) {
      nodeStream.pause();
      nodeStream.on('data', chunk => {
        if (Buffer.isBuffer(chunk)) {
          controller.enqueue(new Uint8Array(chunk.buffer));
        } else {
          controller.enqueue(chunk);
        }

        nodeStream.pause();
      });
      nodeStream.on('end', () => controller.close());
      nodeStream.on('error', e => controller.error(e));
    },

    pull() {
      nodeStream.resume();
    },

    cancel() {
      nodeStream.pause();
    }

  });
}
/**
 * Taken over from https://github.com/gwicke/node-web-streams/blob/master/lib/conversions.js
 * Because it uses forked web-streams-polyfill that are outdated.
 *
 * @author https://github.com/gwicke
 * @licence Apache License 2.0 https://github.com/gwicke/node-web-streams/blob/master/LICENSE
 */

class NodeReadableWrapper extends (/* unused pure expression or super */ null && (NodeReadable)) {
  _webStream;
  _reader;
  _reading;

  constructor(webStream, options) {
    super(options);
    this._webStream = webStream;
    this._reader = webStream.getReader();
    this._reading = false;
  }

  _read() {
    if (this._reading) {
      return;
    }

    this._reading = true;

    const doRead = () => {
      this._reader.read().then(res => {
        if (res.done) {
          this.push(null);
          return;
        }

        if (this.push(res.value)) {
          return doRead();
        } else {
          this._reading = false;
        }
      });
    };

    doRead();
  }

}
/**
 * Function that converts WHATWG ReadableStream into Node's Readable
 *
 * Taken over from https://github.com/gwicke/node-web-streams/blob/master/lib/conversions.js
 * Because it uses forked web-streams-polyfill that is outdated.
 *
 * **Warning!**
 * If you want to use this function in browser you have to polyfill `stream` package with your bundler.
 *
 * @author https://github.com/gwicke
 * @licence Apache License 2.0 https://github.com/gwicke/node-web-streams/blob/master/LICENSE
 * @param webStream
 * @param options
 */


function readableWebToNode(webStream, options) {
  if (!NodeReadableNative) {
    throw new Error("The Node's Readable is not available! If you are running this in browser you have to polyfill 'stream' package!");
  }

  return new NodeReadableWrapper(webStream, options);
}
function normalizeToReadableStream(stream) {
  if (isNodeReadable(stream)) {
    return readableNodeToWeb(stream);
  } else if (isReadableStream(stream)) {
    return stream;
  }

  throw new TypeError('Passed stream is not Node Readable nor ReadableStream!');
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/merge.js

/**
 * Function that deep merges objects
 *
 * @copyright https://github.com/sindresorhus/ky/blob/b3c9e88fa49d50150dbb6e6b771b4af56cb40c98/source/utils/merge.ts
 * @licence MIT
 * @param sources
 */

function deepMerge(...sources) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let returnValue = {};

  for (const source of sources) {
    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }

      returnValue = [...returnValue, ...source];
    } else if (isObject(source)) {
      // eslint-disable-next-line prefer-const
      for (let [key, value] of Object.entries(source)) {
        if (isObject(value) && key in returnValue) {
          value = deepMerge(returnValue[key], value);
        }

        returnValue = { ...returnValue,
          [key]: value
        };
      }
    }
  }

  return returnValue;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/http.js





const DEFAULT_KY_CONFIG = {
  headers: {
    accept: 'application/json, text/plain, */*',
    'user-agent': `bee-js`
  }
};

function isHttpError(e) {
  return isObject(e) && typeof e.response !== 'undefined';
}

function isHttpRequestError(e) {
  return isObject(e) && typeof e.request !== 'undefined';
}

function headersToObject(header) {
  return [...header.entries()].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
}

function wrapRequest(request) {
  return {
    url: request.url,
    method: request.method.toUpperCase(),
    headers: headersToObject(request.headers)
  };
}

function http_wrapRequestClosure(cb) {
  return async request => {
    await cb(wrapRequest(request));
  };
}
function http_wrapResponseClosure(cb) {
  return async (request, options, response) => {
    await cb({
      headers: headersToObject(response.headers),
      status: response.status,
      statusText: response.statusText,
      request: wrapRequest(request)
    });
  };
}
/**
 * Filters out entries that has undefined value from headers object.
 * Modifies the original object!
 *
 * @param obj
 */
// eslint-disable-next-line @typescript-eslint/ban-types

function filterHeaders(obj) {
  if (obj === undefined) {
    return undefined;
  }

  isStrictlyObject(obj);
  const typedObj = obj;

  for (const key in typedObj) {
    if (typedObj[key] === undefined) {
      delete typedObj[key];
    }
  }

  if (Object.keys(typedObj).length === 0) {
    return undefined;
  }

  return typedObj;
}
/**
 * Main utility function to make HTTP requests.
 * @param ky
 * @param config
 */

async function http_http(ky, config) {
  try {
    const {
      path,
      responseType,
      ...kyConfig
    } = config;
    const response = await ky(path, { ...kyConfig,
      searchParams: filterHeaders(kyConfig.searchParams)
    });

    switch (responseType) {
      case 'stream':
        if (!response.body) {
          throw new BeeError('Response was expected to get data but did not get any!');
        }

        response.data = normalizeToReadableStream(response.body);
        break;

      case 'arraybuffer':
        response.data = await response.arrayBuffer();
        break;

      case 'json':
        try {
          response.data = await response.json();
        } catch (e) {
          throw new BeeNotAJsonError();
        }

        break;

      default:
        break;
      // If responseType is not set, then no data are expected
    }

    return response;
  } catch (e) {
    // Passthrough thrown errors
    if (e instanceof BeeNotAJsonError) {
      throw e;
    }

    if (isHttpError(e)) {
      let message; // We store the response body here as it can be read only once in Response's lifecycle so to make it exposed
      // to the user in the BeeResponseError, for further analysis.

      const body = await e.response.text();

      try {
        // The response can be Bee's JSON with structure `{code, message}` lets try to parse it
        message = JSON.parse(body).message;
      } catch (e) {}

      if (message) {
        throw new BeeResponseError(e.response.status, e.response, body, config, `${e.response.statusText}: ${message}`);
      } else {
        throw new BeeResponseError(e.response.status, e.response, body, config, e.response.statusText);
      }
    } else if (isHttpRequestError(e)) {
      throw new BeeRequestError(e.message, config);
    } else {
      throw new BeeError(e.message);
    }
  }
}
function http_makeDefaultKy(kyConfig) {
  return ky/* default.create */.Z.create(deepMerge(DEFAULT_KY_CONFIG, kyConfig));
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/cross-blob@2.0.1/node_modules/cross-blob/browser.js
var browser = __webpack_require__(61145);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/data.browser.js


/**
 * Validates input and converts to Uint8Array
 *
 * @param data any string, ArrayBuffer or Uint8Array
 */

async function prepareData(data) {
  if (typeof data === 'string') return new browser([data], {
    type: 'text/plain'
  });

  if (data instanceof Uint8Array || data instanceof ArrayBuffer) {
    return new browser([data], {
      type: 'application/octet-stream'
    });
  }

  if (data instanceof browser) {
    return data;
  } // Currently it is not possible to stream requests from browsers
  // there are already first experiments on this field (Chromium)
  // but till it is fully implemented across browsers-land we have to
  // buffer the data before sending the requests.


  if (isNodeReadable(data)) {
    return new Promise(resolve => {
      const buffers = [];
      data.on('data', d => {
        buffers.push(d);
      });
      data.on('end', () => {
        resolve(new browser(buffers, {
          type: 'application/octet-stream'
        }));
      });
    });
  }

  if (isReadableStream(data)) {
    return new Promise(async resolve => {
      const reader = data.getReader();
      const buffers = [];
      let done, value;

      do {
        ;
        ({
          done,
          value
        } = await reader.read());

        if (!done) {
          buffers.push(value);
        }
      } while (!done);

      resolve(new browser(buffers, {
        type: 'application/octet-stream'
      }));
    });
  }

  throw new TypeError('unknown data type');
}
async function prepareWebsocketData(data) {
  if (typeof data === 'string') return new TextEncoder().encode(data);
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (data instanceof browser) return new Uint8Array(await new Response(data).arrayBuffer());
  throw new TypeError('unknown websocket data type');
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/tar-js@0.3.0/node_modules/tar-js/lib/tar.js
var lib_tar = __webpack_require__(43352);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/tar.js
 // converts a string to utf8 Uint8Array and returns it as a string-like
// object that `tar.append` accepts as path

function fixUnicodePath(path) {
  const codes = new TextEncoder().encode(path);
  return {
    length: codes.length,
    charCodeAt: index => codes[index]
  };
}

function makeTar(data) {
  const tar = new lib_tar();

  for (const entry of data) {
    const path = fixUnicodePath(entry.path);
    tar.append(path, entry.data);
  }

  return tar.out;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/collection.js



function isCollection(data) {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.every(entry => typeof entry === 'object' && entry.data && entry.path && isUint8Array(entry.data));
}
function assertCollection(data) {
  if (!isCollection(data)) {
    throw new error_BeeArgumentError('invalid collection', data);
  }
}

function makeFilePath(file) {
  if (file.webkitRelativePath && file.webkitRelativePath !== '') {
    return file.webkitRelativePath.replace(/.*?\//i, '');
  }

  if (file.name) {
    return file.name;
  }

  throw new TypeError('file is not valid File object');
}

async function makeCollectionFromFileList(fileList) {
  const collection = [];

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];

    if (file) {
      collection.push({
        path: makeFilePath(file),
        data: new Uint8Array(await fileArrayBuffer(file))
      });
    }
  }

  return collection;
}
/**
 * Calculate cumulative size of files
 *
 * @param fileList list of files to check
 * @returns size in bytes
 */

function getCollectionSize(fileList) {
  let sum = 0;

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];

    if (file) {
      sum += file.size;
    }
  }

  return sum;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/bzz.js








const bzzEndpoint = 'bzz';

function extractFileUploadHeaders(postageBatchId, options) {
  const headers = extractUploadHeaders(postageBatchId, options);
  if (options?.size) headers['content-length'] = String(options.size);
  if (options?.contentType) headers['content-type'] = options.contentType;
  return headers;
}
/**
 * Upload single file
 *
 * @param ky
 * @param data Files data
 * @param postageBatchId  Postage BatchId that will be assigned to uploaded data
 * @param name Name that will be attached to the uploaded file. Wraps the data into manifest with set index document.
 * @param options
 */


async function uploadFile(ky, data, postageBatchId, name, options) {
  if (isReadable(data) && !options?.contentType) {
    if (!options) options = {};
    options.contentType = 'application/octet-stream';
  }

  const response = await http_http(ky, {
    method: 'post',
    path: bzzEndpoint,
    body: await prepareData(data),
    headers: { ...extractFileUploadHeaders(postageBatchId, options)
    },
    searchParams: {
      name
    },
    responseType: 'json'
  });
  return {
    reference: response.data.reference,
    tagUid: makeTagUid(response.headers.get('swarm-tag'))
  };
}
/**
 * Download single file as a buffer
 *
 * @param ky Ky instance for given Bee class instance
 * @param hash Bee file or collection hash
 * @param path If hash is collection then this defines path to a single file in the collection
 */

async function downloadFile(ky, hash, path = '') {
  const response = await http_http(ky, {
    method: 'GET',
    responseType: 'arraybuffer',
    path: `${bzzEndpoint}/${hash}/${path}`
  });
  const file = { ...readFileHeaders(response.headers),
    data: wrapBytesWithHelpers(new Uint8Array(response.data))
  };
  return file;
}
/**
 * Download single file as a readable stream
 *
 * @param ky Ky instance for given Bee class instance
 * @param hash Bee file or collection hash
 * @param path If hash is collection then this defines path to a single file in the collection
 */

async function downloadFileReadable(ky, hash, path = '') {
  const response = await http_http(ky, {
    method: 'GET',
    responseType: 'stream',
    path: `${bzzEndpoint}/${hash}/${path}`
  });
  const file = { ...readFileHeaders(response.headers),
    data: response.data
  };
  return file;
}

function extractCollectionUploadHeaders(postageBatchId, options) {
  const headers = extractUploadHeaders(postageBatchId, options);
  if (options?.indexDocument) headers['swarm-index-document'] = options.indexDocument;
  if (options?.errorDocument) headers['swarm-error-document'] = options.errorDocument;
  return headers;
}
/**
 * Upload collection
 * @param ky Ky instance for given Bee class instance
 * @param collection Collection of Uint8Array buffers to upload
 * @param postageBatchId  Postage BatchId that will be assigned to uploaded data
 * @param options
 */


async function uploadCollection(ky, collection, postageBatchId, options) {
  assertCollection(collection);
  const tarData = makeTar(collection);
  const response = await http_http(ky, {
    method: 'post',
    path: bzzEndpoint,
    body: tarData,
    responseType: 'json',
    headers: {
      'content-type': 'application/x-tar',
      'swarm-collection': 'true',
      ...extractCollectionUploadHeaders(postageBatchId, options)
    }
  });
  return {
    reference: response.data.reference,
    tagUid: makeTagUid(response.headers.get('swarm-tag'))
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/stewardship.js

const stewardshipEndpoint = 'stewardship';
/**
 * Reupload locally pinned data
 * @param ky Ky instance
 * @param reference
 * @param options
 * @throws BeeResponseError if not locally pinned or invalid data
 */

async function reupload(ky, reference) {
  await http_http(ky, {
    method: 'put',
    path: `${stewardshipEndpoint}/${reference}`
  });
}
async function isRetrievable(ky, reference) {
  const response = await http_http(ky, {
    method: 'get',
    responseType: 'json',
    path: `${stewardshipEndpoint}/${reference}`
  });
  return response.data.isRetrievable;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/tag.js

const endpoint = 'tags';
/**
 * Create new tag on the Bee node
 *
 * @param url Bee tag URL
 */

async function createTag(ky) {
  const response = await http_http(ky, {
    method: 'post',
    path: endpoint,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Retrieve tag information from Bee node
 *
 * @param url Bee tag URL
 * @param uid UID of tag to be retrieved
 */

async function retrieveTag(ky, uid) {
  const response = await http_http(ky, {
    path: `${endpoint}/${uid}`,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get limited listing of all tags.
 *
 * @param url
 * @param offset
 * @param limit
 */

async function getAllTags(ky, offset, limit) {
  const response = await http_http(ky, {
    path: `${endpoint}`,
    searchParams: {
      offset,
      limit
    },
    responseType: 'json'
  });
  return response.data.tags;
}
/**
 * Removes tag from the Bee node.
 * @param url
 * @param uid
 */

async function deleteTag(ky, uid) {
  await http_http(ky, {
    method: 'delete',
    path: `${endpoint}/${uid}`
  });
}
/**
 * Updates tag
 * @param url
 * @param uid
 * @param reference
 */

async function updateTag(ky, uid, reference) {
  await http_http(ky, {
    method: 'patch',
    path: `${endpoint}/${uid}`,
    json: {
      reference
    }
  });
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/pinning.js

const PINNING_ENDPOINT = 'pins';
/**
 * Pin data with given reference
 *
 * @param ky Ky instance for given Bee class instance
 * @param reference Bee data reference
 */

async function pin(ky, reference) {
  await http_http(ky, {
    method: 'post',
    responseType: 'json',
    path: `${PINNING_ENDPOINT}/${reference}`
  });
}
/**
 * Unpin data with given reference
 *
 * @param ky Ky instance for given Bee class instance
 * @param reference Bee data reference
 */

async function unpin(ky, reference) {
  await http_http(ky, {
    method: 'delete',
    responseType: 'json',
    path: `${PINNING_ENDPOINT}/${reference}`
  });
}
/**
 * Get pin status for specific address.
 *
 * @param ky Ky instance
 * @param reference
 * @throws Error if given address is not pinned
 */

async function getPin(ky, reference) {
  const response = await http_http(ky, {
    method: 'get',
    responseType: 'json',
    path: `${PINNING_ENDPOINT}/${reference}`
  });
  return response.data;
}
/**
 * Get list of all pins
 *
 * @param ky Ky instance
 */

async function getAllPins(ky) {
  const response = await http_http(ky, {
    method: 'get',
    responseType: 'json',
    path: `${PINNING_ENDPOINT}`
  });
  const result = response.data.references;

  if (result === null) {
    return [];
  }

  return result;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/bytes.js





const bytes_endpoint = 'bytes';
/**
 * Upload data to a Bee node
 *
 * @param ky              Ky instance
 * @param data            Data to be uploaded
 * @param postageBatchId  Postage BatchId that will be assigned to uploaded data
 * @param options         Additional options like tag, encryption, pinning
 */

async function upload(ky, data, postageBatchId, options) {
  const response = await http_http(ky, {
    path: bytes_endpoint,
    method: 'post',
    responseType: 'json',
    body: await prepareData(data),
    headers: {
      'content-type': 'application/octet-stream',
      ...extractUploadHeaders(postageBatchId, options)
    }
  });
  return {
    reference: response.data.reference,
    tagUid: makeTagUid(response.headers.get('swarm-tag'))
  };
}
/**
 * Download data as a byte array
 *
 * @param ky
 * @param hash Bee content reference
 */

async function download(ky, hash) {
  const response = await http_http(ky, {
    responseType: 'arraybuffer',
    path: `${bytes_endpoint}/${hash}`
  });
  return wrapBytesWithHelpers(new Uint8Array(response.data));
}
/**
 * Download data as a readable stream
 *
 * @param ky
 * @param hash Bee content reference
 */

async function downloadReadable(ky, hash) {
  const response = await http_http(ky, {
    responseType: 'stream',
    path: `${bytes_endpoint}/${hash}`
  });
  return response.data;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/chunk.js



const chunk_endpoint = 'chunks';
/**
 * Upload chunk to a Bee node
 *
 * The chunk data consists of 8 byte span and up to 4096 bytes of payload data.
 * The span stores the length of the payload in uint64 little endian encoding.
 * Upload expects the chuck data to be set accordingly.
 *
 * @param ky Ky instance
 * @param data    Chunk data to be uploaded
 * @param postageBatchId  Postage BatchId that will be assigned to uploaded data
 * @param options Additional options like tag, encryption, pinning
 */

async function chunk_upload(ky, data, postageBatchId, options) {
  const response = await http_http(ky, {
    method: 'post',
    path: `${chunk_endpoint}`,
    body: data,
    headers: {
      'content-type': 'application/octet-stream',
      ...extractUploadHeaders(postageBatchId, options)
    },
    responseType: 'json'
  });
  return response.data.reference;
}
/**
 * Download chunk data as a byte array
 *
 * @param ky Ky instance for given Bee class instance
 * @param hash Bee content reference
 *
 */

async function chunk_download(ky, hash) {
  const response = await http_http(ky, {
    responseType: 'arraybuffer',
    path: `${chunk_endpoint}/${hash}`
  });
  return wrapBytesWithHelpers(new Uint8Array(response.data));
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/isomorphic-ws@4.0.1_ws@8.5.0/node_modules/isomorphic-ws/browser.js
var isomorphic_ws_browser = __webpack_require__(81254);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/pss.js




const pss_endpoint = 'pss';
/**
 * Send to recipient or target with Postal Service for Swarm
 *
 * @param ky Ky instance for given Bee class instance
 * @param topic Topic name
 * @param target Target message address prefix
 * @param data
 * @param postageBatchId Postage BatchId that will be assigned to sent message
 * @param recipient Recipient public key
 *
 */

async function send(ky, topic, target, data, postageBatchId, recipient) {
  await http_http(ky, {
    method: 'post',
    path: `${pss_endpoint}/send/${topic}/${target}`,
    body: await prepareData(data),
    responseType: 'json',
    searchParams: {
      recipient
    },
    headers: extractUploadHeaders(postageBatchId)
  });
}
/**
 * Subscribe for messages on the given topic
 *
 * @param url Bee node URL
 * @param topic Topic name
 */

function subscribe(url, topic) {
  const wsUrl = url.replace(/^http/i, 'ws');
  return new isomorphic_ws_browser(`${wsUrl}/${pss_endpoint}/subscribe/${topic}`);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/status.js

/**
 * Ping the base bee URL. If connection was not successful throw error
 *
 * @param ky Ky instance for given Bee class instance
 */

async function checkConnection(ky) {
  await http_http(ky, {
    path: ''
  });
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/js-sha3@0.8.0/node_modules/js-sha3/src/sha3.js
var sha3 = __webpack_require__(94474);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/hash.js
// For ESM compatibility

const {
  keccak256
} = sha3;
/**
 * Helper function for calculating the keccak256 hash with
 * correct types.
 *
 * @param messages Any number of messages (strings, byte arrays etc.)
 */

function hash_keccak256Hash(...messages) {
  const hasher = keccak256.create();
  messages.forEach(bytes => hasher.update(bytes));
  return Uint8Array.from(hasher.digest());
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/chunk/serialize.js
/**
 * Helper function for serialize byte arrays
 *
 * @param arrays Any number of byte array arguments
 */
function serializeBytes(...arrays) {
  const length = arrays.reduce((prev, curr) => prev + curr.length, 0);
  const buffer = new Uint8Array(length);
  let offset = 0;
  arrays.forEach(arr => {
    buffer.set(arr, offset);
    offset += arr.length;
  });
  return buffer;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/chunk/bmt.js
// For ESM compatibility

const {
  keccak256: bmt_keccak256
} = sha3;


const MAX_CHUNK_PAYLOAD_SIZE = 4096;
const SEGMENT_SIZE = 32;
const SEGMENT_PAIR_SIZE = 2 * SEGMENT_SIZE;
const HASH_SIZE = 32;
/**
 * Calculate a Binary Merkle Tree hash for a chunk
 *
 * The BMT chunk address is the hash of the 8 byte span and the root
 * hash of a binary Merkle tree (BMT) built on the 32-byte segments
 * of the underlying data.
 *
 * If the chunk content is less than 4k, the hash is calculated as
 * if the chunk was padded with all zeros up to 4096 bytes.
 *
 * @param chunkContent Chunk data including span and payload as well
 *
 * @returns the keccak256 hash in a byte array
 */

function bmtHash(chunkContent) {
  const span = chunkContent.slice(0, 8);
  const payload = chunkContent.slice(8);
  const rootHash = bmtRootHash(payload);
  const chunkHashInput = new Uint8Array([...span, ...rootHash]);
  const chunkHash = hash_keccak256Hash(chunkHashInput);
  return chunkHash;
}

function bmtRootHash(payload) {
  if (payload.length > MAX_CHUNK_PAYLOAD_SIZE) {
    throw new error_BeeArgumentError('invalid data length', payload);
  } // create an input buffer padded with zeros


  let input = new Uint8Array([...payload, ...new Uint8Array(MAX_CHUNK_PAYLOAD_SIZE - payload.length)]);

  while (input.length !== HASH_SIZE) {
    const output = new Uint8Array(input.length / 2); // in each round we hash the segment pairs together

    for (let offset = 0; offset < input.length; offset += SEGMENT_PAIR_SIZE) {
      const hashNumbers = bmt_keccak256.array(input.slice(offset, offset + SEGMENT_PAIR_SIZE));
      output.set(hashNumbers, offset / 2);
    }

    input = output;
  }

  return input;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(75367);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/chunk/signer.js
// For ESM compatibility

const {
  ec
} = elliptic;






const UNCOMPRESSED_RECOVERY_ID = 27;

function hashWithEthereumPrefix(data) {
  const ethereumSignedMessagePrefix = `\x19Ethereum Signed Message:\n${data.length}`;
  const prefixBytes = new TextEncoder().encode(ethereumSignedMessagePrefix);
  return hash_keccak256Hash(prefixBytes, data);
}
/**
 * The default signer function that can be used for integrating with
 * other applications (e.g. wallets).
 *
 * @param data      The data to be signed
 * @param privateKey  The private key used for signing the data
 */


function defaultSign(data, privateKey) {
  const curve = new ec('secp256k1');
  const keyPair = curve.keyFromPrivate(privateKey);
  const hashedDigest = hashWithEthereumPrefix(data);
  const sigRaw = curve.sign(hashedDigest, keyPair, {
    canonical: true,
    pers: undefined
  });

  if (sigRaw.recoveryParam === null) {
    throw new BeeError('signDigest recovery param was null');
  }

  const signature = new Uint8Array([...sigRaw.r.toArray('be', 32), ...sigRaw.s.toArray('be', 32), sigRaw.recoveryParam + UNCOMPRESSED_RECOVERY_ID]);
  return signature;
}

function publicKeyToAddress(pubKey) {
  const pubBytes = pubKey.encode('array', false);
  return hash_keccak256Hash(pubBytes.slice(1)).slice(12);
}
/**
 * Recovers the ethereum address from a given signature.
 *
 * Can be used for verifying a piece of data when the public key is
 * known.
 *
 * @param signature The signature
 * @param digest    The digest of the data
 *
 * @returns the recovered address
 */


function recoverAddress(signature, digest) {
  const curve = new ec('secp256k1');
  const sig = {
    r: signature.slice(0, 32),
    s: signature.slice(32, 64)
  };
  const recoveryParam = signature[64] - UNCOMPRESSED_RECOVERY_ID;
  const hash = hashWithEthereumPrefix(digest);
  const recPubKey = curve.recoverPubKey(hash, sig, recoveryParam);
  return publicKeyToAddress(recPubKey);
}
/**
 * Creates a singer object that can be used when the private key is known.
 *
 * @param privateKey The private key
 */

function makePrivateKeySigner(privateKey) {
  const curve = new ec('secp256k1');
  const keyPair = curve.keyFromPrivate(privateKey);
  const address = publicKeyToAddress(keyPair.getPublic());
  return {
    sign: digest => defaultSign(digest, privateKey),
    address
  };
}
function assertSigner(signer) {
  if (!isStrictlyObject(signer)) {
    throw new TypeError('Signer must be an object!');
  }

  const typedSigner = signer;

  if (!isBytes(typedSigner.address, 20)) {
    throw new TypeError("Signer's address must be Uint8Array with 20 bytes!");
  }

  if (typeof typedSigner.sign !== 'function') {
    throw new TypeError('Signer sign property needs to be function!');
  }
}
function makeSigner(signer) {
  if (typeof signer === 'string') {
    const hexKey = hex_makeHexString(signer, 64);
    const keyBytes = hex_hexToBytes(hexKey); // HexString is verified for 64 length => 32 is guaranteed

    return makePrivateKeySigner(keyBytes);
  } else if (signer instanceof Uint8Array) {
    assertBytes(signer, 32);
    return makePrivateKeySigner(signer);
  }

  assertSigner(signer);
  return signer;
}
async function sign(signer, data) {
  const result = await signer.sign(wrapBytesWithHelpers(data));

  if (typeof result === 'string') {
    const hexString = hex_makeHexString(result, SIGNATURE_HEX_LENGTH);
    return hex_hexToBytes(hexString);
  }

  if (result instanceof Uint8Array) {
    assertBytes(result, SIGNATURE_BYTES_LENGTH);
    return result;
  }

  throw new TypeError('Invalid output of sign function!');
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/chunk/span.js

const span_SPAN_SIZE = 8; // we limit the maximum span size in 32 bits to avoid BigInt compatibility issues

const MAX_SPAN_LENGTH = 2 ** 32 - 1;
/**
 * Create a span for storing the length of the chunk
 *
 * The length is encoded in 64-bit little endian.
 *
 * @param length The length of the span
 */

function makeSpan(length) {
  if (length <= 0) {
    throw new error_BeeArgumentError('invalid length for span', length);
  }

  if (length > MAX_SPAN_LENGTH) {
    throw new error_BeeArgumentError('invalid length (> MAX_SPAN_LENGTH)', length);
  }

  const span = new Uint8Array(span_SPAN_SIZE);
  const dataView = new DataView(span.buffer);
  const littleEndian = true;
  const lengthLower32 = length & 0xffffffff;
  dataView.setUint32(0, lengthLower32, littleEndian);
  return span;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/chunk/cac.js





const MIN_PAYLOAD_SIZE = 1;
const MAX_PAYLOAD_SIZE = 4096;
const CAC_SPAN_OFFSET = 0;
const CAC_PAYLOAD_OFFSET = CAC_SPAN_OFFSET + span_SPAN_SIZE;
/**
 * Creates a content addressed chunk and verifies the payload size.
 *
 * @param payloadBytes the data to be stored in the chunk
 */

function makeContentAddressedChunk(payloadBytes) {
  const span = makeSpan(payloadBytes.length);
  assertFlexBytes(payloadBytes, MIN_PAYLOAD_SIZE, MAX_PAYLOAD_SIZE);
  const data = serializeBytes(span, payloadBytes);
  return {
    data,
    span: () => span,
    payload: () => flexBytesAtOffset(data, CAC_PAYLOAD_OFFSET, MIN_PAYLOAD_SIZE, MAX_PAYLOAD_SIZE),
    address: () => bmtHash(data)
  };
}
/**
 * Type guard for valid content addressed chunk data
 *
 * @param data          The chunk data
 * @param chunkAddress  The address of the chunk
 */

function isValidChunkData(data, chunkAddress) {
  if (!(data instanceof Uint8Array)) return false;
  const address = bmtHash(data);
  return bytesEqual(address, chunkAddress);
}
/**
 * Asserts if data are representing given address of its chunk.
 *
 * @param data          The chunk data
 * @param chunkAddress  The address of the chunk
 *
 * @returns a valid content addressed chunk or throws error
 */

function assertValidChunkData(data, chunkAddress) {
  if (!isValidChunkData(data, chunkAddress)) {
    throw new BeeError('Address of content address chunk does not match given data!');
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/soc.js


const socEndpoint = 'soc';
/**
 * Upload single owner chunk (SOC) to a Bee node
 *
 * @param ky Ky instance
 * @param owner           Owner's ethereum address in hex
 * @param identifier      Arbitrary identifier in hex
 * @param signature       Signature in hex
 * @param data            Content addressed chunk data to be uploaded
 * @param postageBatchId  Postage BatchId that will be assigned to uploaded data
 * @param options         Additional options like tag, encryption, pinning
 */

async function soc_upload(ky, owner, identifier, signature, data, postageBatchId, options) {
  const response = await http_http(ky, {
    method: 'post',
    path: `${socEndpoint}/${owner}/${identifier}`,
    body: data,
    headers: {
      'content-type': 'application/octet-stream',
      ...extractUploadHeaders(postageBatchId, options)
    },
    responseType: 'json',
    searchParams: {
      sig: signature
    }
  });
  return response.data.reference;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/chunk/soc.js












const IDENTIFIER_SIZE = 32;
const SIGNATURE_SIZE = 65;
const SOC_IDENTIFIER_OFFSET = 0;
const SOC_SIGNATURE_OFFSET = SOC_IDENTIFIER_OFFSET + IDENTIFIER_SIZE;
const SOC_SPAN_OFFSET = SOC_SIGNATURE_OFFSET + SIGNATURE_SIZE;
const SOC_PAYLOAD_OFFSET = SOC_SPAN_OFFSET + span_SPAN_SIZE;

function recoverChunkOwner(data) {
  const cacData = data.slice(SOC_SPAN_OFFSET);
  const chunkAddress = bmtHash(cacData);
  const signature = bytes_bytesAtOffset(data, SOC_SIGNATURE_OFFSET, SIGNATURE_SIZE);
  const identifier = bytes_bytesAtOffset(data, SOC_IDENTIFIER_OFFSET, IDENTIFIER_SIZE);
  const digest = hash_keccak256Hash(identifier, chunkAddress);
  const ownerAddress = recoverAddress(signature, digest);
  return ownerAddress;
}
/**
 * Verifies if the data is a valid single owner chunk
 *
 * @param data    The chunk data
 * @param address The address of the single owner chunk
 *
 * @returns a single owner chunk or throws error
 */


function soc_makeSingleOwnerChunkFromData(data, address) {
  const ownerAddress = recoverChunkOwner(data);
  const identifier = bytes_bytesAtOffset(data, SOC_IDENTIFIER_OFFSET, IDENTIFIER_SIZE);
  const socAddress = hash_keccak256Hash(identifier, ownerAddress);

  if (!bytesEqual(address, socAddress)) {
    throw new BeeError('SOC Data does not match given address!');
  }

  const signature = () => bytes_bytesAtOffset(data, SOC_SIGNATURE_OFFSET, SIGNATURE_SIZE);

  const span = () => bytes_bytesAtOffset(data, SOC_SPAN_OFFSET, span_SPAN_SIZE);

  const payload = () => flexBytesAtOffset(data, SOC_PAYLOAD_OFFSET, MIN_PAYLOAD_SIZE, MAX_PAYLOAD_SIZE);

  return {
    data,
    identifier: () => identifier,
    signature,
    span,
    payload,
    address: () => socAddress,
    owner: () => ownerAddress
  };
}
function makeSOCAddress(identifier, address) {
  return hash_keccak256Hash(identifier, address);
}
/**
 * Creates a single owner chunk object
 *
 * @param chunk       A chunk object used for the span and payload
 * @param identifier  The identifier of the chunk
 * @param signer      The singer interface for signing the chunk
 */

async function makeSingleOwnerChunk(chunk, identifier, signer) {
  const chunkAddress = chunk.address();
  assertValidChunkData(chunk.data, chunkAddress);
  const digest = hash_keccak256Hash(identifier, chunkAddress);
  const signature = await sign(signer, digest);
  const data = serializeBytes(identifier, signature, chunk.span(), chunk.payload());
  const address = makeSOCAddress(identifier, signer.address);
  return {
    data,
    identifier: () => identifier,
    signature: () => signature,
    span: () => chunk.span(),
    payload: () => chunk.payload(),
    address: () => address,
    owner: () => signer.address
  };
}
/**
 * Helper function to upload a chunk.
 *
 * It uses the Chunk API and calculates the address before uploading.
 *
 * @param ky              Ky instance
 * @param chunk           A chunk object
 * @param postageBatchId  Postage BatchId that will be assigned to uploaded data
 * @param options         Upload options
 */

async function uploadSingleOwnerChunk(ky, chunk, postageBatchId, options) {
  const owner = hex_bytesToHex(chunk.owner());
  const identifier = hex_bytesToHex(chunk.identifier());
  const signature = hex_bytesToHex(chunk.signature());
  const data = serializeBytes(chunk.span(), chunk.payload());
  return soc_upload(ky, owner, identifier, signature, data, postageBatchId, options);
}
/**
 * Helper function to create and upload SOC.
 *
 * @param ky              Ky instance
 * @param signer          The singer interface for signing the chunk
 * @param postageBatchId
 * @param identifier      The identifier of the chunk
 * @param data            The chunk data
 * @param options
 */

async function uploadSingleOwnerChunkData(ky, signer, postageBatchId, identifier, data, options) {
  type_assertAddress(postageBatchId);
  const cac = makeContentAddressedChunk(data);
  const soc = await makeSingleOwnerChunk(cac, identifier, signer);
  return uploadSingleOwnerChunk(ky, soc, postageBatchId, options);
}
/**
 * Helper function to download SOC.
 *
 * @param url           The url of the Bee service
 * @param ownerAddress  The singer interface for signing the chunk
 * @param identifier    The identifier of the chunk
 */

async function downloadSingleOwnerChunk(ky, ownerAddress, identifier) {
  const address = makeSOCAddress(identifier, ownerAddress);
  const data = await chunk_download(ky, hex_bytesToHex(address));
  return soc_makeSingleOwnerChunkFromData(data, address);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/feed.js



const feedEndpoint = 'feeds';
/**
 * Create an initial feed root manifest
 *
 * @param ky Ky instance
 * @param owner           Owner's ethereum address in hex
 * @param topic           Topic in hex
 * @param postageBatchId  Postage BatchId to be used to create the Feed Manifest
 * @param options         Additional options, like type (default: 'sequence')
 */

async function createFeedManifest(ky, owner, topic, postageBatchId, options) {
  const response = await http_http(ky, {
    method: 'post',
    responseType: 'json',
    path: `${feedEndpoint}/${owner}/${topic}`,
    searchParams: filterHeaders(options),
    headers: extractUploadHeaders(postageBatchId)
  });
  return response.data.reference;
}

function readFeedUpdateHeaders(headers) {
  const feedIndex = headers.get('swarm-feed-index');
  const feedIndexNext = headers.get('swarm-feed-index-next');

  if (!feedIndex) {
    throw new BeeError('Response did not contain expected swarm-feed-index!');
  }

  if (!feedIndexNext) {
    throw new BeeError('Response did not contain expected swarm-feed-index-next!');
  }

  return {
    feedIndex,
    feedIndexNext
  };
}
/**
 * Find and retrieve feed update
 *
 * The feed consists of updates. This endpoint looks up an
 * update that matches the provided parameters and returns
 * the reference it contains along with its index and the
 * index of the subsequent update.
 *
 * @param ky Ky instance
 * @param owner       Owner's ethereum address in hex
 * @param topic       Topic in hex
 * @param options     Additional options, like index, at, type
 */


async function fetchFeedUpdate(ky, owner, topic, options) {
  const response = await http_http(ky, {
    responseType: 'json',
    path: `${feedEndpoint}/${owner}/${topic}`,
    searchParams: filterHeaders(options)
  });
  return { ...response.data,
    ...readFeedUpdateHeaders(response.headers)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/uint64.js
 // TODO handle bigger values than 32 bit
// For now it's good enough because we only use these functions
// sequential feed indexes.

function writeUint64LittleEndian(value, bytes = makeBytes(8)) {
  const dataView = new DataView(bytes.buffer);
  const valueLower32 = value & 0xffffffff;
  const littleEndian = true;
  dataView.setUint32(0, valueLower32, littleEndian);
  dataView.setUint32(4, 0, littleEndian);
  return bytes;
}
function writeUint64BigEndian(value, bytes = bytes_makeBytes(8)) {
  const dataView = new DataView(bytes.buffer);
  const valueLower32 = value & 0xffffffff;
  dataView.setUint32(0, 0);
  dataView.setUint32(4, valueLower32);
  return bytes;
}
function uint64_readUint64BigEndian(bytes) {
  const dataView = new DataView(bytes.buffer);
  return dataView.getUint32(4);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/eth.js
// For ESM compatibility

const {
  keccak256: eth_keccak256,
  sha3_256
} = sha3;


const ETH_ADDR_BYTES_LENGTH = 20;
const ETH_ADDR_HEX_LENGTH = 40;
function makeEthAddress(address) {
  if (typeof address === 'string') {
    const hexAddr = hex_makeHexString(address, ETH_ADDR_HEX_LENGTH);
    const ownerBytes = hex_hexToBytes(hexAddr);
    assertBytes(ownerBytes, ETH_ADDR_BYTES_LENGTH);
    return ownerBytes;
  } else if (address instanceof Uint8Array) {
    assertBytes(address, ETH_ADDR_BYTES_LENGTH);
    return address;
  }

  throw new TypeError('Invalid EthAddress');
}
function makeHexEthAddress(address) {
  try {
    return hex_makeHexString(address, ETH_ADDR_HEX_LENGTH);
  } catch (e) {
    if (e instanceof TypeError) {
      e.message = `Invalid HexEthAddress: ${e.message}`;
    }

    throw e;
  }
}
/**
 * Check if this is all caps or small caps eth address (=address without checksum)
 *
 * @param address Ethereum address as hex string
 */

function isEthAddrCaseIns(address) {
  // Check it's string, all small caps or all all caps hex and 40 chars long without the `0x` prefix
  return typeof address === 'string' && (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address));
}
/**
 * Check if this is checksummed ethereum address
 *
 * @param address Ethereum address as hex string
 */


function isValidChecksummedEthAddress(address) {
  try {
    // Check for valid case insensitive hex type string, 40 chars
    const addr = makeHexString(address, ETH_ADDR_HEX_LENGTH); // Check the checksum

    const addressHash = eth_keccak256(addr.toLowerCase());

    for (let i = 0; i < 40; i += 1) {
      // the nth letter should be uppercase if the nth digit of casemap is 1
      if (parseInt(addressHash[i], 16) > 7 && addr[i].toUpperCase() !== addr[i] || parseInt(addressHash[i], 16) <= 7 && addr[i].toLowerCase() !== addr[i]) {
        return false;
      }
    }

    return true;
  } catch (e) {
    if (e instanceof TypeError) {
      return false;
    }

    throw e;
  }
}
/**
 * Check if is valid ethereum address
 *
 * Pretty much typed version from web3js
 * https://github.com/ChainSafe/web3.js/blob/1.x/packages/web3-utils/src/utils.js
 *
 * @param address  Ethereum address as hex string
 *
 * @return True if is valid eth address
 */


function isHexEthAddress(address) {
  return isEthAddrCaseIns(address) || isValidChecksummedEthAddress(address);
}
/**
 * Convert big-endian hex or number to little-endian.
 * Note: Before conversion it is automatically padded to even length hexstring
 *
 * @param bigEndian Big-endian hex string or number to convert
 * @param pad       Length to which the string should be padded before conversion (defaul: 2)
 *
 * @return little-endian encoded hexstring
 */

function toLittleEndian(bigEndian, pad = 2) {
  if (!(Number.isInteger(pad) && pad >= 2 && pad % 2 === 0)) {
    throw new TypeError('minimal padding for conversion needs to be positive even integer');
  }

  let hexRep;
  if (typeof bigEndian === 'string') hexRep = makeHexString(bigEndian);else if (typeof bigEndian === 'number') hexRep = intToHex(bigEndian);else throw new TypeError('incorrect input type');
  hexRep = hexRep.padStart(pad, '0'); // Extend to an even length hexstring

  if (hexRep.length % 2 !== 0) hexRep = hexRep.padStart(hexRep.length + 1, '0'); // Match all two pairs in the hexstring, reverse the pairs and join it again

  const littleEndian = hexRep.match(/../g)?.reverse().join('');
  if (littleEndian) return littleEndian;
  throw new Error('failed to convert');
}
/**
 * Convert little-endian hex or number to big-endian
 * Note: Before conversion it is automatically padded to even length hexstring
 *
 * @param littleEndian Little-endian hex string or number to convert
 * @param pad          Length to which the string should be padded before conversion (defaul: 2)
 *
 * @return big-endian encoded hexstring
 */

function fromLittleEndian(littleEndian, pad = 2) {
  // It's a reversible function
  return toLittleEndian(littleEndian, pad);
}

function assertEthAddress(ethAddress) {
  if (!isHexEthAddress(ethAddress)) throw new TypeError('invalid ETH address');
}

function assertSwarmNetworkId(networkId) {
  if (Number.isInteger(networkId && networkId > 0 && networkId < Number.MAX_SAFE_INTEGER)) {
    throw new TypeError('swarm network id must be positive integer');
  }
}
/**
 * Get swarm overlay address from public ethereum address and swarm network id
 *
 * @param ethAddress  Public ethereum address
 * @param networkId   Swarm network id
 *
 * @return Swarm overlay address
 */


function ethToSwarmAddress(ethAddress, networkId = 1) {
  assertEthAddress(ethAddress);
  assertSwarmNetworkId(networkId);
  const hex = `${makeHexString(ethAddress)}${toLittleEndian(networkId, 16)}`;
  assertHexString(hex);
  const overlayAddress = sha3_256(hexToBytes(hex));
  return overlayAddress;
}
/**
 * Function that takes Ethereum EIP-1193 compatible provider and create an Signer instance that
 * uses `personal_sign` method to sign requested data.
 *
 * @param provider Injected web3 provider like window.ethereum or other compatible with EIP-1193
 * @param ethAddress Optional address of the account which the data should be signed with. If not specified `eth_requestAccounts` request is used to get the account address.
 */

async function makeEthereumWalletSigner(provider, ethAddress) {
  let executorFnc;

  if (typeof provider !== 'object' || provider === null) {
    throw new TypeError('We need JsonRPC provider object!');
  }

  if (provider.request) {
    executorFnc = provider.request;
  } else if (provider.sendAsync) {
    executorFnc = provider.sendAsync;
  } else {
    throw new Error('Incompatible interface of given provider!');
  }

  if (!ethAddress) {
    ethAddress = (await executorFnc({
      method: 'eth_requestAccounts'
    }))[0];
  }

  const bytesEthAddress = makeEthAddress(ethAddress);
  const hexEthAddress = makeHexEthAddress(ethAddress);
  return {
    address: bytesEthAddress,
    sign: async data => {
      const result = await executorFnc({
        jsonrpc: '2.0',
        method: 'personal_sign',
        params: ['0x' + data.hex(), '0x' + hexEthAddress]
      });
      return result;
    }
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/feed/index.js












const TIMESTAMP_PAYLOAD_OFFSET = 0;
const TIMESTAMP_PAYLOAD_SIZE = 8;
const REFERENCE_PAYLOAD_OFFSET = (/* unused pure expression or super */ null && (TIMESTAMP_PAYLOAD_SIZE));
const REFERENCE_PAYLOAD_MIN_SIZE = 32;
const REFERENCE_PAYLOAD_MAX_SIZE = 64;
const INDEX_HEX_LENGTH = 16;
function isEpoch(epoch) {
  return typeof epoch === 'object' && epoch !== null && 'time' in epoch && 'level' in epoch;
}

function hashFeedIdentifier(topic, index) {
  return hash_keccak256Hash(hex_hexToBytes(topic), index);
}

function makeSequentialFeedIdentifier(topic, index) {
  const indexBytes = writeUint64BigEndian(index);
  return hashFeedIdentifier(topic, indexBytes);
}
function makeFeedIndexBytes(s) {
  const hex = hex_makeHexString(s, INDEX_HEX_LENGTH);
  return hex_hexToBytes(hex);
}
function makeFeedIdentifier(topic, index) {
  if (typeof index === 'number') {
    return makeSequentialFeedIdentifier(topic, index);
  } else if (typeof index === 'string') {
    const indexBytes = makeFeedIndexBytes(index);
    return hashFeedIdentifier(topic, indexBytes);
  } else if (isEpoch(index)) {
    throw new TypeError('epoch is not yet implemented');
  }

  return hashFeedIdentifier(topic, index);
}
async function uploadFeedUpdate(ky, signer, topic, index, reference, postageBatchId, options) {
  const identifier = makeFeedIdentifier(topic, index);
  const at = options?.at ?? Date.now() / 1000.0;
  const timestamp = writeUint64BigEndian(at);
  const payloadBytes = serializeBytes(timestamp, reference);
  return uploadSingleOwnerChunkData(ky, signer, postageBatchId, identifier, payloadBytes, options);
}
async function findNextIndex(ky, owner, topic, options) {
  try {
    const feedUpdate = await fetchFeedUpdate(ky, owner, topic, options);
    return hex_makeHexString(feedUpdate.feedIndexNext, INDEX_HEX_LENGTH);
  } catch (e) {
    if (e instanceof BeeResponseError && e.status === 404) {
      return hex_bytesToHex(bytes_makeBytes(8));
    }

    throw e;
  }
}
async function updateFeed(ky, signer, topic, reference, postageBatchId, options) {
  const ownerHex = makeHexEthAddress(signer.address);
  const nextIndex = await findNextIndex(ky, ownerHex, topic, options);
  return uploadFeedUpdate(ky, signer, topic, nextIndex, reference, postageBatchId, options);
}

function verifyChunkReferenceAtOffset(offset, data) {
  try {
    return bytes_bytesAtOffset(data, offset, REFERENCE_PAYLOAD_MAX_SIZE);
  } catch (e) {
    return bytes_bytesAtOffset(data, offset, REFERENCE_PAYLOAD_MIN_SIZE);
  }
}

function verifyChunkReference(data) {
  return verifyChunkReferenceAtOffset(0, data);
}
async function downloadFeedUpdate(ky, owner, topic, index) {
  const identifier = makeFeedIdentifier(topic, index);
  const address = keccak256Hash(identifier, owner);
  const addressHex = bytesToHex(address);
  const data = await chunkAPI.download(ky, addressHex);
  const soc = makeSingleOwnerChunkFromData(data, address);
  const payload = soc.payload();
  const timestampBytes = bytesAtOffset(payload, TIMESTAMP_PAYLOAD_OFFSET, TIMESTAMP_PAYLOAD_SIZE);
  const timestamp = readUint64BigEndian(timestampBytes);
  const reference = verifyChunkReferenceAtOffset(REFERENCE_PAYLOAD_OFFSET, payload);
  return {
    timestamp,
    reference
  };
}
function makeFeedReader(ky, type, topic, owner) {
  const download = async options => fetchFeedUpdate(ky, owner, topic, { ...options,
    type
  });

  return {
    type,
    owner,
    topic,
    download
  };
}

function makeChunkReference(reference) {
  if (typeof reference === 'string') {
    try {
      // Non-encrypted chunk hex string reference
      const hexReference = hex_makeHexString(reference, REFERENCE_HEX_LENGTH);
      return hex_hexToBytes(hexReference);
    } catch (e) {
      if (!(e instanceof TypeError)) {
        throw e;
      } // Encrypted chunk hex string reference


      const hexReference = hex_makeHexString(reference, ENCRYPTED_REFERENCE_HEX_LENGTH);
      return hex_hexToBytes(hexReference);
    }
  } else if (reference instanceof Uint8Array) {
    return verifyChunkReference(reference);
  }

  throw new TypeError('invalid chunk reference');
}

function makeFeedWriter(ky, type, topic, signer) {
  const upload = async (postageBatchId, reference, options) => {
    type_assertAddress(postageBatchId);
    const canonicalReference = makeChunkReference(reference);
    return updateFeed(ky, signer, topic, canonicalReference, postageBatchId, { ...options,
      type
    });
  };

  return { ...makeFeedReader(ky, type, topic, makeHexEthAddress(signer.address)),
    upload
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/feed/type.js
const feedTypes = ['sequence', 'epoch'];
const DEFAULT_FEED_TYPE = 'sequence';
function isFeedType(type) {
  return typeof type === 'string' && feedTypes.includes(type);
}
function assertFeedType(type) {
  if (!isFeedType(type)) {
    throw new TypeError('invalid feed type');
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/feed/topic.js




function makeTopic(topic) {
  if (typeof topic === 'string') {
    return hex_makeHexString(topic, TOPIC_HEX_LENGTH);
  } else if (topic instanceof Uint8Array) {
    assertBytes(topic, TOPIC_BYTES_LENGTH);
    return hex_bytesToHex(topic, TOPIC_HEX_LENGTH);
  }

  throw new TypeError('invalid topic');
}
function makeTopicFromString(s) {
  if (typeof s !== 'string') {
    throw new TypeError('topic has to be string!');
  }

  return hex_bytesToHex(hash_keccak256Hash(s), TOPIC_HEX_LENGTH);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/url.js



function isNodeJsError(e) {
  return isObject(e) && typeof e.code === 'string';
}
/**
 * Validates that passed string is valid URL of Bee.
 * We support only HTTP and HTTPS protocols.
 *
 * @param url
 */


function isValidBeeUrl(url) {
  try {
    if (typeof url !== 'string') {
      return false;
    }

    const urlObject = new URL(url); // There can be wide range of protocols passed.

    return urlObject.protocol === 'http:' || urlObject.protocol === 'https:';
  } catch (e) {
    // URL constructor throws TypeError if not valid URL
    // TODO: Drop the `.code` hack for NodeJS environment: https://github.com/ethersphere/bee-js/issues/204
    if (e instanceof TypeError || isNodeJsError(e) && e.code === 'ERR_INVALID_URL') {
      return false;
    }

    throw e;
  }
}
/**
 * Validates that passed string is valid URL of Bee, if not it throws BeeArgumentError.
 * We support only HTTP and HTTPS protocols.
 * @param url
 * @throws BeeArgumentError if non valid URL
 */

function url_assertBeeUrl(url) {
  if (!isValidBeeUrl(url)) {
    throw new error_BeeArgumentError('URL is not valid!', url);
  }
}
/**
 * Removes trailing slash out of the given string.
 * @param url
 */

function url_stripLastSlash(url) {
  if (url.endsWith('/')) {
    return url.slice(0, -1);
  }

  return url;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/feed/json.js


function serializeJson(data) {
  try {
    const jsonString = JSON.stringify(data);
    return new TextEncoder().encode(jsonString);
  } catch (e) {
    if (isError(e)) {
      e.message = `JsonFeed: ${e.message}`;
    }

    throw e;
  }
}

async function getJsonData(bee, reader) {
  const feedUpdate = await reader.download();
  const retrievedData = await bee.downloadData(feedUpdate.reference);
  return retrievedData.json();
}
async function setJsonData(bee, writer, postageBatchId, data, options) {
  const serializedData = serializeJson(data);
  const {
    reference
  } = await bee.uploadData(postageBatchId, serializedData, options);
  return writer.upload(postageBatchId, reference);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/collection.browser.js
/**
 * Creates array in the format of Collection with data loaded from directory on filesystem.
 * The function loads all the data into memory!
 *
 * @param dir path to the directory
 */
async function makeCollectionFromFS(dir) {
  throw new Error('Creating Collection from File System is not supported in browsers!');
}
/**
 * Calculate folder size recursively
 *
 * @param dir the path to the folder to check
 * @returns size in bytes
 */

async function getFolderSize(dir) {
  throw new Error('Creating Collection from File System is not supported in browsers!');
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/bee.js



























/**
 * The main component that abstracts operations available on the main Bee API.
 *
 * Not all methods are always available as it depends in what mode is Bee node launched in.
 * For example gateway mode and light node mode has only limited set of endpoints enabled.
 */

class Bee {
  /**
   * URL on which is the main API of Bee node exposed
   */
  url;
  /**
   * Default Signer object used for signing operations, mainly Feeds.
   */

  signer;
  /**
   * Ky instance that defines connection to Bee node
   * @private
   */

  ky;
  /**
   * @param url URL on which is the main API of Bee node exposed
   * @param options
   */

  constructor(url, options) {
    url_assertBeeUrl(url); // Remove last slash if present, as our endpoint strings starts with `/...`
    // which could lead to double slash in URL to which Bee responds with
    // unnecessary redirects.

    this.url = url_stripLastSlash(url);

    if (options?.signer) {
      this.signer = makeSigner(options.signer);
    }

    const kyOptions = {
      prefixUrl: this.url,
      timeout: options?.timeout ?? false,
      retry: options?.retry,
      fetch: options?.fetch,
      hooks: {
        beforeRequest: [],
        afterResponse: []
      }
    };

    if (options?.defaultHeaders) {
      kyOptions.headers = options.defaultHeaders;
    }

    if (options?.onRequest) {
      kyOptions.hooks.beforeRequest.push(http_wrapRequestClosure(options.onRequest));
    }

    if (options?.onResponse) {
      kyOptions.hooks.afterResponse.push(http_wrapResponseClosure(options.onResponse));
    }

    this.ky = http_makeDefaultKy(kyOptions);
  }
  /**
   * Upload data to a Bee node
   *
   * @param postageBatchId Postage BatchId to be used to upload the data with
   * @param data    Data to be uploaded
   * @param options Additional options like tag, encryption, pinning, content-type and request options
   *
   * @returns reference is a content hash of the data
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `POST /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes/post)
   */


  async uploadData(postageBatchId, data, options) {
    type_assertBatchId(postageBatchId);
    assertData(data);
    if (options) assertUploadOptions(options);
    return upload(this.getKy(options), data, postageBatchId, options);
  }
  /**
   * Download data as a byte array
   *
   * @param reference Bee data reference
   * @param options Options that affects the request behavior
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `GET /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1{reference}/get)
   */


  async downloadData(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return download(this.getKy(options), reference);
  }
  /**
   * Download data as a Readable stream
   *
   * @param reference Bee data reference
   * @param options Options that affects the request behavior
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `GET /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1{reference}/get)
   */


  async downloadReadableData(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return downloadReadable(this.getKy(options), reference);
  }
  /**
   * Upload chunk to a Bee node
   *
   * @param postageBatchId Postage BatchId to be used to upload the chunk with
   * @param data    Raw chunk to be uploaded
   * @param options Additional options like tag, encryption, pinning, content-type and request options
   *
   * @returns reference is a content hash of the data
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `POST /chunks`](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks/post)
   */


  async uploadChunk(postageBatchId, data, options) {
    type_assertBatchId(postageBatchId);

    if (!(data instanceof Uint8Array)) {
      throw new TypeError('Data has to be Uint8Array instance!');
    }

    if (data.length < SPAN_SIZE) {
      throw new error_BeeArgumentError(`Chunk has to have size of at least ${SPAN_SIZE}.`, data);
    }

    if (data.length > CHUNK_SIZE + SPAN_SIZE) {
      throw new error_BeeArgumentError(`Chunk has to have size of at most ${CHUNK_SIZE}.`, data);
    }

    if (options) assertUploadOptions(options);
    return chunk_upload(this.getKy(options), data, postageBatchId, options);
  }
  /**
   * Download chunk as a byte array
   *
   * @param reference Bee chunk reference
   * @param options Options that affects the request behavior
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `GET /chunks`](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks~1{reference}/get)
   */


  async downloadChunk(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return chunk_download(this.getKy(options), reference);
  }
  /**
   * Upload single file to a Bee node.
   *
   * **To make sure that you won't loose critical data it is highly recommended to also
   * locally pin the data with `options.pin = true`**
   *
   * @param postageBatchId Postage BatchId to be used to upload the data with
   * @param data    Data or file to be uploaded
   * @param name    Optional name of the uploaded file
   * @param options Additional options like tag, encryption, pinning, content-type and request options
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File/paths/~1bzz/post)
   * @returns reference is a content hash of the file
   */


  async uploadFile(postageBatchId, data, name, options) {
    type_assertBatchId(postageBatchId);
    assertFileData(data);
    if (options) assertFileUploadOptions(options);

    if (name && typeof name !== 'string') {
      throw new TypeError('name has to be string or undefined!');
    }

    if (isFile(data)) {
      const fileData = await fileArrayBuffer(data);
      const fileName = name ?? data.name;
      const contentType = data.type;
      const fileOptions = {
        contentType,
        ...options
      };
      return uploadFile(this.getKy(options), fileData, postageBatchId, fileName, fileOptions);
    } else if (isReadable(data) && options?.tag && !options.size) {
      // TODO: Needed until https://github.com/ethersphere/bee/issues/2317 is resolved
      const result = await uploadFile(this.getKy(options), data, postageBatchId, name, options);
      await this.updateTag(options.tag, result.reference);
      return result;
    } else {
      return uploadFile(this.getKy(options), data, postageBatchId, name, options);
    }
  }
  /**
   * Download single file.
   *
   * @param reference Bee file reference
   * @param path If reference points to manifest, then this parameter defines path to the file
   * @param options Options that affects the request behavior
   *
   * @see Data
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `GET /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz~1{reference}~1{path}/get)
   */


  async downloadFile(reference, path = '', options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return downloadFile(this.getKy(options), reference, path);
  }
  /**
   * Download single file as a readable stream
   *
   * @param reference Hash reference to file
   * @param path If reference points to manifest / collections, then this parameter defines path to the file
   * @param options Options that affects the request behavior
   *
   * @see [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)
   * @see [Bee API reference - `GET /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz~1{reference}~1{path}/get)
   */


  async downloadReadableFile(reference, path = '', options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return downloadFileReadable(this.getKy(options), reference, path);
  }
  /**
   * Upload collection of files to a Bee node
   *
   * Uses the FileList API from the browser.
   *
   * The returned `UploadResult.tag` might be undefined if called in CORS-enabled environment.
   * This will be fixed upon next Bee release. https://github.com/ethersphere/bee-js/issues/406
   *
   * @param postageBatchId Postage BatchId to be used to upload the data with
   * @param fileList list of files to be uploaded
   * @param options Additional options like tag, encryption, pinning and request options
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee docs - Upload directory](https://docs.ethswarm.org/docs/access-the-swarm/upload-a-directory/)
   * @see [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post)
   */


  async uploadFiles(postageBatchId, fileList, options) {
    type_assertBatchId(postageBatchId);
    if (options) assertCollectionUploadOptions(options);
    const data = await makeCollectionFromFileList(fileList);
    return uploadCollection(this.getKy(options), data, postageBatchId, options);
  }
  /**
   * Upload Collection that you can assembly yourself.
   *
   * The returned `UploadResult.tag` might be undefined if called in CORS-enabled environment.
   * This will be fixed upon next Bee release. https://github.com/ethersphere/bee-js/issues/406
   *
   * @param postageBatchId
   * @param collection
   * @param options Collections and request options
   */


  async uploadCollection(postageBatchId, collection, options) {
    type_assertBatchId(postageBatchId);
    assertCollection(collection);
    if (options) assertCollectionUploadOptions(options);
    return uploadCollection(this.ky, collection, postageBatchId, options);
  }
  /**
   * Upload collection of files.
   *
   * Available only in Node.js as it uses the `fs` module.
   *
   * The returned `UploadResult.tag` might be undefined if called in CORS-enabled environment.
   * This will be fixed upon next Bee release. https://github.com/ethersphere/bee-js/issues/406
   *
   * @param postageBatchId Postage BatchId to be used to upload the data with
   * @param dir the path of the files to be uploaded
   * @param options Additional options like tag, encryption, pinning and request options
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee docs - Upload directory](https://docs.ethswarm.org/docs/access-the-swarm/upload-a-directory/)
   * @see [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post)
   */


  async uploadFilesFromDirectory(postageBatchId, dir, options) {
    type_assertBatchId(postageBatchId);
    if (options) assertCollectionUploadOptions(options);
    const data = await makeCollectionFromFS(dir);
    return uploadCollection(this.getKy(options), data, postageBatchId, options);
  }
  /**
   * Create a new Tag which is meant for tracking progres of syncing data across network.
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param options Options that affects the request behavior
   * @see [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)
   * @see [Bee API reference - `POST /tags`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags/post)
   */


  async createTag(options) {
    type_assertRequestOptions(options);
    return createTag(this.getKy(options));
  }
  /**
   * Fetches all tags.
   *
   * The listing is limited by options.limit. So you have to iterate using options.offset to get all tags.
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param options Options that affects the request behavior
   * @throws TypeError if limit or offset are not numbers or undefined
   * @throws BeeArgumentError if limit or offset have invalid options
   *
   * @see [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)
   * @see [Bee API reference - `GET /tags`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags/get)
   */


  async getAllTags(options) {
    type_assertRequestOptions(options);
    assertAllTagsOptions(options);
    return getAllTags(this.getKy(options), options?.offset, options?.limit);
  }
  /**
   * Retrieve tag information from Bee node
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param tagUid UID or tag object to be retrieved
   * @param options Options that affects the request behavior
   * @throws TypeError if tagUid is in not correct format
   *
   * @see [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)
   * @see [Bee API reference - `GET /tags/{uid}`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1{uid}/get)
   *
   */


  async retrieveTag(tagUid, options) {
    type_assertRequestOptions(options);
    tagUid = makeTagUid(tagUid);
    return retrieveTag(this.getKy(options), tagUid);
  }
  /**
   * Delete Tag
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param tagUid UID or tag object to be retrieved
   * @param options Options that affects the request behavior
   * @throws TypeError if tagUid is in not correct format
   * @throws BeeResponse error if something went wrong on the Bee node side while deleting the tag.
   *
   * @see [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)
   * @see [Bee API reference - `DELETE /tags/{uid}`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1{uid}/delete)
   */


  async deleteTag(tagUid, options) {
    type_assertRequestOptions(options);
    tagUid = makeTagUid(tagUid);
    return deleteTag(this.getKy(options), tagUid);
  }
  /**
   * Update tag's total chunks count.
   *
   * This is important if you are uploading individual chunks with a tag. Then upon finishing the final root chunk,
   * you can use this method to update the total chunks count for the tag.
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param tagUid UID or tag object to be retrieved
   * @param reference The root reference that contains all the chunks to be counted
   * @param options Options that affects the request behavior
   * @throws TypeError if tagUid is in not correct format
   * @throws BeeResponse error if something went wrong on the Bee node side while deleting the tag.
   *
   * @see [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)
   * @see [Bee API reference - `PATCH /tags/{uid}`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1{uid}/patch)
   */


  async updateTag(tagUid, reference, options) {
    assertReference(reference);
    type_assertRequestOptions(options);
    tagUid = makeTagUid(tagUid);
    return updateTag(this.getKy(options), tagUid, reference);
  }
  /**
   * Pin local data with given reference
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param reference Data reference
   * @param options Options that affects the request behavior
   * @throws TypeError if reference is in not correct format
   *
   * @see [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)
   */


  async pin(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return pin(this.getKy(options), reference);
  }
  /**
   * Unpin local data with given reference
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param reference Data reference
   * @param options Options that affects the request behavior
   * @throws TypeError if reference is in not correct format
   *
   * @see [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)
   */


  async unpin(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return unpin(this.getKy(options), reference);
  }
  /**
   * Get list of all locally pinned references
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param options Options that affects the request behavior
   * @see [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)
   */


  async getAllPins(options) {
    type_assertRequestOptions(options);
    return getAllPins(this.getKy(options));
  }
  /**
   * Get pinning status of chunk with given reference
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * @param reference Bee data reference
   * @param options Options that affects the request behavior
   * @throws TypeError if reference is in not correct format
   *
   * @see [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)
   */


  async getPin(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return getPin(this.getKy(options), reference);
  }
  /**
   * Instructs the Bee node to reupload a locally pinned data into the network.
   *
   * @param reference
   * @param options Options that affects the request behavior
   * @throws BeeArgumentError if the reference is not locally pinned
   * @throws TypeError if reference is in not correct format
   *
   * @see [Bee API reference - `PUT /stewardship`](https://docs.ethswarm.org/api/#tag/Stewardship/paths/~1stewardship~1{reference}/put)
   */


  async reuploadPinnedData(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    await reupload(this.getKy(options), reference);
  }
  /**
   * Checks if content specified by reference is retrievable from the network.
   *
   * @param reference The checked content
   * @param options Options that affects the request behavior
   *
   * @see [Bee API reference - `GET /stewardship`](https://docs.ethswarm.org/api/#tag/Stewardship/paths/~1stewardship~1{reference}/get)
   */


  async isReferenceRetrievable(reference, options) {
    type_assertRequestOptions(options);
    assertReference(reference);
    return isRetrievable(this.getKy(options), reference);
  }
  /**
   * Send data to recipient or target with Postal Service for Swarm.
   *
   * Because sending a PSS message is slow and CPU intensive,
   * it is not supposed to be used for general messaging but
   * most likely for setting up an encrypted communication
   * channel by sending an one-off message.
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * **Warning! If the recipient Bee node is a light node, then he will never receive the message!**
   * This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.
   *
   * @param postageBatchId Postage BatchId that will be assigned to sent message
   * @param topic Topic name
   * @param target Target message address prefix. Has a limit on length. Recommend to use `Utils.Pss.makeMaxTarget()` to get the most specific target that Bee node will accept.
   * @param data Message to be sent
   * @param recipient Recipient public key
   * @param options Options that affects the request behavior
   * @throws TypeError if `data`, `batchId`, `target` or `recipient` are in invalid format
   *
   * @see [Bee docs - PSS](https://docs.ethswarm.org/docs/dapps-on-swarm/pss)
   * @see [Bee API reference - `POST /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1send~1{topic}~1{targets}/post)
   */


  async pssSend(postageBatchId, topic, target, data, recipient, options) {
    type_assertRequestOptions(options);
    assertData(data);
    type_assertBatchId(postageBatchId);
    assertAddressPrefix(target);

    if (typeof topic !== 'string') {
      throw new TypeError('topic has to be an string!');
    }

    if (recipient) {
      assertPublicKey(recipient);
      return send(this.getKy(options), topic, target, data, postageBatchId, recipient);
    } else {
      return send(this.getKy(options), topic, target, data, postageBatchId);
    }
  }
  /**
   * Subscribe to messages for given topic with Postal Service for Swarm
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * **Warning! If connected Bee node is a light node, then he will never receive any message!**
   * This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.
   *
   * @param topic Topic name
   * @param handler Message handler interface
   *
   * @returns Subscription to a given topic
   *
   * @see [Bee docs - PSS](https://docs.ethswarm.org/docs/dapps-on-swarm/pss)
   * @see [Bee API reference - `GET /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1{topic}/get)
   */


  pssSubscribe(topic, handler) {
    assertPssMessageHandler(handler);

    if (typeof topic !== 'string') {
      throw new TypeError('topic has to be an string!');
    }

    const ws = subscribe(this.url, topic);
    let cancelled = false;

    const cancel = () => {
      if (cancelled === false) {
        cancelled = true; // although the WebSocket API offers a `close` function, it seems that
        // with the library that we are using (isomorphic-ws) it doesn't close
        // the websocket properly, whereas `terminate` does

        if (ws.terminate) ws.terminate();else ws.close(); // standard Websocket in browser does not have terminate function
      }
    };

    const subscription = {
      topic,
      cancel
    };

    ws.onmessage = async ev => {
      const data = await prepareWebsocketData(ev.data); // ignore empty messages

      if (data.length > 0) {
        handler.onMessage(wrapBytesWithHelpers(data), subscription);
      }
    };

    ws.onerror = ev => {
      // ignore errors after subscription was cancelled
      if (!cancelled) {
        handler.onError(new BeeError(ev.message), subscription);
      }
    };

    return subscription;
  }
  /**
   * Receive message with Postal Service for Swarm
   *
   * Because sending a PSS message is slow and CPU intensive,
   * it is not supposed to be used for general messaging but
   * most likely for setting up an encrypted communication
   * channel by sending an one-off message.
   *
   * This is a helper function to wait for exactly one message to
   * arrive and then cancel the subscription. Additionally a
   * timeout can be provided for the message to arrive or else
   * an error will be thrown.
   *
   * **Warning! Not allowed when node is in Gateway mode!**
   *
   * **Warning! If connected Bee node is a light node, then he will never receive any message!**
   * This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.
   *
   * @param topic Topic name
   * @param timeoutMsec Timeout in milliseconds
   *
   * @returns Message in byte array
   *
   * @see [Bee docs - PSS](https://docs.ethswarm.org/docs/dapps-on-swarm/pss)
   * @see [Bee API reference - `GET /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1{topic}/get)
   */


  async pssReceive(topic, timeoutMsec = 0) {
    if (typeof topic !== 'string') {
      throw new TypeError('topic has to be an string!');
    }

    if (typeof timeoutMsec !== 'number') {
      throw new TypeError('timeoutMsc parameter has to be a number!');
    }

    return new Promise((resolve, reject) => {
      let timeout;
      const subscription = this.pssSubscribe(topic, {
        onError: error => {
          clearTimeout(timeout);
          subscription.cancel();
          reject(error.message);
        },
        onMessage: message => {
          clearTimeout(timeout);
          subscription.cancel();
          resolve(message);
        }
      });

      if (timeoutMsec > 0) {
        // we need to cast the type because Typescript is getting confused with Node.js'
        // alternative type definitions
        timeout = setTimeout(() => {
          subscription.cancel();
          reject(new BeeError('pssReceive timeout'));
        }, timeoutMsec);
      }
    });
  }
  /**
   * Create feed manifest chunk and return the reference to it.
   *
   * Feed manifest chunk allows for a feed to be able to be resolved through `/bzz` endpoint.
   *
   * @param postageBatchId  Postage BatchId to be used to create the Feed Manifest
   * @param type            The type of the feed, can be 'epoch' or 'sequence'
   * @param topic           Topic in hex or bytes
   * @param owner           Owner's ethereum address in hex or bytes
   * @param options Options that affects the request behavior
   *
   * @see [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)
   * @see [Bee API reference - `POST /feeds`](https://docs.ethswarm.org/api/#tag/Feed/paths/~1feeds~1{owner}~1{topic}/post)
   */


  async createFeedManifest(postageBatchId, type, topic, owner, options) {
    type_assertRequestOptions(options);
    assertFeedType(type);
    type_assertBatchId(postageBatchId);
    const canonicalTopic = makeTopic(topic);
    const canonicalOwner = makeHexEthAddress(owner);
    return createFeedManifest(this.getKy(options), canonicalOwner, canonicalTopic, postageBatchId, {
      type
    });
  }
  /**
   * Make a new feed reader for downloading feed updates.
   *
   * @param type    The type of the feed, can be 'epoch' or 'sequence'
   * @param topic   Topic in hex or bytes
   * @param owner   Owner's ethereum address in hex or bytes
   * @param options Options that affects the request behavior
   *
   * @see [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)
   */


  makeFeedReader(type, topic, owner, options) {
    type_assertRequestOptions(options);
    assertFeedType(type);
    const canonicalTopic = makeTopic(topic);
    const canonicalOwner = makeHexEthAddress(owner);
    return makeFeedReader(this.getKy(options), type, canonicalTopic, canonicalOwner);
  }
  /**
   * Make a new feed writer for updating feeds
   *
   * @param type    The type of the feed, can be 'epoch' or 'sequence'
   * @param topic   Topic in hex or bytes
   * @param signer  The signer's private key or a Signer instance that can sign data
   * @param options Options that affects the request behavior
   *
   * @see [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)
   */


  makeFeedWriter(type, topic, signer, options) {
    type_assertRequestOptions(options);
    assertFeedType(type);
    const canonicalTopic = makeTopic(topic);
    const canonicalSigner = this.resolveSigner(signer);
    return makeFeedWriter(this.getKy(options), type, canonicalTopic, canonicalSigner);
  }
  /**
   * High-level function that allows you to easily set JSON data to feed.
   * JSON-like data types are supported.
   *
   * The default Signer of Bee instance is used if `options.signer` is not specified.
   * If none of those two is set error is thrown.
   *
   * @param postageBatchId Postage BatchId to be used to upload the data with
   * @param topic Human readable string, that is internally hashed so there are no constrains there.
   * @param data JSON compatible data
   * @param options
   * @param options.signer Custom instance of Signer or string with private key.
   * @param options.type Type of Feed
   *
   * @throws BeeError if `options.signer` is not specified nor the default Signer on Bee's instance is specified.
   *
   * @see [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)
   */


  async setJsonFeed(postageBatchId, topic, data, options) {
    type_assertRequestOptions(options, 'JsonFeedOptions');
    type_assertBatchId(postageBatchId);
    const hashedTopic = this.makeFeedTopic(topic);
    const feedType = options?.type ?? DEFAULT_FEED_TYPE;
    const writer = this.makeFeedWriter(feedType, hashedTopic, options?.signer, options);
    return setJsonData(this, writer, postageBatchId, data, options);
  }
  /**
   * High-level function that allows you to easily get data from feed.
   * Returned data are parsed using JSON.parse().
   *
   * This method also supports specification of `signer` object passed to constructor. The order of evaluation is:
   *  - `options.address`
   *  - `options.signer`
   *  - `this.signer`
   *
   * At least one of these has to be specified!
   *
   * @param topic Human readable string, that is internally hashed so there are no constrains there.
   * @param options
   * @param options.signer Custom instance of Signer or string with private key. This option is exclusive with `address` option.
   * @param options.address Ethereum address of owner of the feed that signed it. This option is exclusive with `signer` option.
   * @param options.type Type of Feed
   *
   * @see [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)
   */


  async getJsonFeed(topic, options) {
    type_assertRequestOptions(options, 'JsonFeedOptions');
    const hashedTopic = this.makeFeedTopic(topic);
    const feedType = options?.type ?? DEFAULT_FEED_TYPE;

    if (options?.signer && options?.address) {
      throw new BeeError('Both options "signer" and "address" can not be specified at one time!');
    }

    let address;

    if (options?.address) {
      address = makeEthAddress(options?.address);
    } else {
      try {
        address = this.resolveSigner(options?.signer).address;
      } catch (e) {
        if (e instanceof BeeError) {
          throw new BeeError('Either address, signer or default signer has to be specified!');
        } else {
          throw e;
        }
      }
    }

    const reader = this.makeFeedReader(feedType, hashedTopic, address, options);
    return getJsonData(this, reader);
  }
  /**
   * Make a new feed topic from a string
   *
   * Because the topic has to be 32 bytes long this function
   * hashes the input string to create a topic string of arbitrary length.
   *
   * @param topic The input string
   */


  makeFeedTopic(topic) {
    return makeTopicFromString(topic);
  }
  /**
   * Returns an object for reading single owner chunks
   *
   * @param ownerAddress The ethereum address of the owner
   * @param options Options that affects the request behavior
   * @see [Bee docs - Chunk Types](https://docs.ethswarm.org/docs/dapps-on-swarm/chunk-types#single-owner-chunks)
   */


  makeSOCReader(ownerAddress, options) {
    type_assertRequestOptions(options);
    const canonicalOwner = makeEthAddress(ownerAddress);
    return {
      owner: makeHexEthAddress(canonicalOwner),
      download: downloadSingleOwnerChunk.bind(null, this.getKy(options), canonicalOwner)
    };
  }
  /**
   * Returns an object for reading and writing single owner chunks
   *
   * @param signer The signer's private key or a Signer instance that can sign data
   * @param options Options that affects the request behavior
   * @see [Bee docs - Chunk Types](https://docs.ethswarm.org/docs/dapps-on-swarm/chunk-types#single-owner-chunks)
   */


  makeSOCWriter(signer, options) {
    type_assertRequestOptions(options);
    const canonicalSigner = this.resolveSigner(signer);
    return { ...this.makeSOCReader(canonicalSigner.address, options),
      upload: uploadSingleOwnerChunkData.bind(null, this.getKy(options), canonicalSigner)
    };
  }
  /**
   * Ping the Bee node to see if there is a live Bee node on the given URL.
   *
   * @param options Options that affects the request behavior
   * @throws If connection was not successful throw error
   */


  async checkConnection(options) {
    type_assertRequestOptions(options, 'PostageBatchOptions');
    return checkConnection(this.getKy(options));
  }
  /**
   * Ping the Bee node to see if there is a live Bee node on the given URL.
   *
   * @param options Options that affects the request behavior
   * @returns true if successful, false on error
   */


  async isConnected(options) {
    type_assertRequestOptions(options, 'PostageBatchOptions');

    try {
      await checkConnection(this.getKy(options));
    } catch (e) {
      return false;
    }

    return true;
  }
  /**
   * @param signer
   * @private
   * @throws BeeError if either no Signer was passed or no default Signer was specified for the instance
   */


  resolveSigner(signer) {
    if (signer) {
      return makeSigner(signer);
    }

    if (this.signer) {
      return this.signer;
    }

    throw new BeeError('You have to pass Signer as property to either the method call or constructor! Non found.');
  }

  getKy(options) {
    if (!options) {
      return this.ky;
    }

    return this.ky.extend(options);
  }

}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/connectivity.js

async function getNodeAddresses(ky) {
  const response = await http(ky, {
    path: 'addresses',
    responseType: 'json'
  });
  return response.data;
}
async function getPeers(ky) {
  const response = await http(ky, {
    path: 'peers',
    responseType: 'json'
  });
  return response.data.peers || [];
}
async function getBlocklist(ky) {
  const response = await http(ky, {
    path: 'blocklist',
    responseType: 'json'
  });
  return response.data.peers || [];
}
async function removePeer(ky, peer) {
  const response = await http(ky, {
    path: `peers/${peer}`,
    responseType: 'json',
    method: 'DELETE'
  });
  return response.data;
}
async function getTopology(ky) {
  const response = await http(ky, {
    path: `topology`,
    responseType: 'json'
  });
  return response.data;
}
async function pingPeer(ky, peer) {
  const response = await http(ky, {
    path: `pingpong/${peer}`,
    responseType: 'json',
    method: 'POST'
  });
  return response.data;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/balance.js

const balancesEndpoint = 'balances';
const consumedEndpoint = 'consumed';
/**
 * Get the balances with all known peers including prepaid services
 *
 * @param ky Ky debug instance
 */

async function getAllBalances(ky) {
  const response = await http(ky, {
    path: balancesEndpoint,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get the balances with a specific peer including prepaid services
 *
 * @param ky Ky debug instance
 * @param address Swarm address of peer
 */

async function getPeerBalance(ky, address) {
  const response = await http(ky, {
    path: `${balancesEndpoint}/${address}`,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get the past due consumption balances with all known peers
 *
 * @param ky Ky debug instance
 */

async function getPastDueConsumptionBalances(ky) {
  const response = await http(ky, {
    path: consumedEndpoint,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get the past due consumption balance with a specific peer
 *
 * @param ky Ky debug instance
 * @param address Swarm address of peer
 */

async function getPastDueConsumptionPeerBalance(ky, address) {
  const response = await http(ky, {
    path: `${consumedEndpoint}/${address}`,
    responseType: 'json'
  });
  return response.data;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/chequebook.js

const chequebookEndpoint = 'chequebook';
/**
 * Get the address of the chequebook contract used
 *
 * @param ky Ky debug instance
 */

async function getChequebookAddress(ky) {
  const response = await http(ky, {
    path: chequebookEndpoint + '/address',
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get the balance of the chequebook
 *
 * @param ky Ky debug instance
 */

async function getChequebookBalance(ky) {
  const response = await http(ky, {
    path: chequebookEndpoint + '/balance',
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get last cashout action for the peer
 *
 * @param ky Ky debug instance
 * @param peer  Swarm address of peer
 */

async function getLastCashoutAction(ky, peer) {
  const response = await http(ky, {
    path: chequebookEndpoint + `/cashout/${peer}`,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Cashout the last cheque for the peer
 *
 * @param ky Ky debug instance
 * @param peer  Swarm address of peer
 * @param options
 */

async function cashoutLastCheque(ky, peer, options) {
  const headers = {};

  if (options?.gasPrice) {
    headers['gas-price'] = options.gasPrice.toString();
  }

  if (options?.gasLimit) {
    headers['gas-limit'] = options.gasLimit.toString();
  }

  const response = await http(ky, {
    method: 'post',
    path: chequebookEndpoint + `/cashout/${peer}`,
    responseType: 'json',
    headers
  });
  return response.data.transactionHash;
}
/**
 * Get last cheques for the peer
 *
 * @param ky Ky debug instance
 * @param peer  Swarm address of peer
 */

async function getLastChequesForPeer(ky, peer) {
  const response = await http(ky, {
    path: chequebookEndpoint + `/cheque/${peer}`,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get last cheques for all peers
 *
 * @param ky Ky debug instance
 */

async function getLastCheques(ky) {
  const response = await http(ky, {
    path: chequebookEndpoint + '/cheque',
    responseType: 'json'
  });
  return response.data;
}
/**
 * Deposit tokens from overlay address into chequebook
 *
 * @param ky Ky debug instance
 * @param amount   Amount of tokens to deposit
 * @param gasPrice Gas Price in WEI for the transaction call
 * @return string  Hash of the transaction
 */

async function depositTokens(ky, amount, gasPrice) {
  const headers = {};

  if (gasPrice) {
    headers['gas-price'] = gasPrice.toString();
  }

  const response = await http(ky, {
    method: 'post',
    path: chequebookEndpoint + '/deposit',
    responseType: 'json',
    searchParams: {
      amount: amount.toString(10)
    },
    headers
  });
  return response.data.transactionHash;
}
/**
 * Withdraw tokens from the chequebook to the overlay address
 *
 * @param ky Ky debug instance
 * @param amount   Amount of tokens to withdraw
 * @param gasPrice Gas Price in WEI for the transaction call
 * @return string  Hash of the transaction
 */

async function withdrawTokens(ky, amount, gasPrice) {
  const headers = {};

  if (gasPrice) {
    headers['gas-price'] = gasPrice.toString();
  }

  const response = await http(ky, {
    method: 'post',
    path: chequebookEndpoint + '/withdraw',
    responseType: 'json',
    searchParams: {
      amount: amount.toString(10)
    },
    headers
  });
  return response.data.transactionHash;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/settlements.js

const settlementsEndpoint = 'settlements';
/**
 * Get amount of sent and received from settlements with a peer
 *
 * @param ky Ky debug instance
 * @param peer  Swarm address of peer
 */

async function getSettlements(ky, peer) {
  const response = await http(ky, {
    path: `${settlementsEndpoint}/${peer}`,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get settlements with all known peers and total amount sent or received
 *
 * @param ky Ky debug instance
 */

async function getAllSettlements(ky) {
  const response = await http(ky, {
    path: settlementsEndpoint,
    responseType: 'json'
  });
  return response.data;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/semver@7.3.5/node_modules/semver/functions/major.js
var major = __webpack_require__(43277);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/status.js

 // Following lines bellow are automatically updated with GitHub Action when Bee version is updated
// so if you are changing anything about them change the `update_bee` action accordingly!

const SUPPORTED_BEE_VERSION_EXACT = '1.4.3-1213e063';
const SUPPORTED_API_VERSION = '2.0.0';
const SUPPORTED_DEBUG_API_VERSION = '1.2.1';
const SUPPORTED_BEE_VERSION = SUPPORTED_BEE_VERSION_EXACT.substring(0, SUPPORTED_BEE_VERSION_EXACT.indexOf('-'));
const NODE_INFO_URL = 'node';
const HEALTH_URL = 'health';
/**
 * Get health of node
 *
 * @param ky Ky debug instance
 */

async function getHealth(ky) {
  const response = await http(ky, {
    method: 'get',
    path: HEALTH_URL,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get information about Bee node
 *
 * @param ky Ky debug instance
 */

async function getNodeInfo(ky) {
  const response = await http(ky, {
    method: 'get',
    path: NODE_INFO_URL,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Connects to a node and checks if it is a supported Bee version by the bee-js
 *
 * @param ky Ky debug instance
 *
 * @returns true if the Bee node version is supported
 * @deprecated Use `isSupportedExactVersion` instead
 */

async function isSupportedVersion(ky) {
  return isSupportedExactVersion(ky);
}
/**
 * Connects to a node and checks if its version matches with the one that bee-js supports.
 *
 * Be aware that this is the most strict version check and most probably
 * you will want to use more relaxed API-versions based checks like
 * `isSupportedApiVersion`, `isSupportedMainApiVersion` or `isSupportedDebugApiVersion`
 * based on your use-case.
 *
 * @param ky
 */

async function isSupportedExactVersion(ky) {
  const {
    version
  } = await getHealth(ky);
  return version === SUPPORTED_BEE_VERSION_EXACT;
}
/**
 * Connects to a node and checks if its main's API version matches with the one that bee-js supports.
 *
 * This is useful if you are not using `BeeDebug` class (for anything else then this check)
 * and want to make sure about compatibility.
 *
 * @param ky
 */

async function isSupportedMainApiVersion(ky) {
  const {
    apiVersion
  } = await getHealth(ky);
  return getMajorSemver(apiVersion) === getMajorSemver(SUPPORTED_API_VERSION);
}
/**
 * Connects to a node and checks if its Debug API version matches with the one that bee-js supports.
 *
 * This is useful if you are not using `Bee` class in your application and want to make sure
 * about compatibility.
 *
 * @param ky
 */

async function isSupportedDebugApiVersion(ky) {
  const {
    debugApiVersion
  } = await getHealth(ky);
  return getMajorSemver(debugApiVersion) === getMajorSemver(SUPPORTED_DEBUG_API_VERSION);
}
/**
 * Connects to a node and checks if its Main and Debug API versions matches with the one that bee-js supports.
 *
 * This should be the main way how to check compatibility for your app and Bee node.
 *
 * @param ky
 */

async function isSupportedApiVersion(ky) {
  const {
    apiVersion,
    debugApiVersion
  } = await getHealth(ky);
  return getMajorSemver(apiVersion) === getMajorSemver(SUPPORTED_API_VERSION) && getMajorSemver(debugApiVersion) === getMajorSemver(SUPPORTED_DEBUG_API_VERSION);
}
/**
 * Returns object with all versions specified by the connected Bee node (properties prefixed with `bee*`)
 * and versions that bee-js supports (properties prefixed with `supported*`).
 *
 * @param ky
 */

async function getVersions(ky) {
  const {
    version,
    apiVersion,
    debugApiVersion
  } = await getHealth(ky);
  return {
    supportedBeeVersion: SUPPORTED_BEE_VERSION_EXACT,
    supportedBeeApiVersion: SUPPORTED_API_VERSION,
    supportedBeeDebugApiVersion: SUPPORTED_DEBUG_API_VERSION,
    beeVersion: version,
    beeApiVersion: apiVersion,
    beeDebugApiVersion: debugApiVersion
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/transactions.js

const transactionsEndpoint = 'transactions';
/**
 * Get list of all pending transactions
 *
 * @param ky   Debug Ky instance
 */

async function getAllTransactions(ky) {
  const response = await http(ky, {
    path: transactionsEndpoint,
    responseType: 'json'
  });
  return response.data.pendingTransactions;
}
/**
 * Get information for specific pending transactions
 *
 * @param ky   Debug Ky instance
 * @param transactionHash Hash of the transaction
 */

async function getTransaction(ky, transactionHash) {
  const response = await http(ky, {
    path: `${transactionsEndpoint}/${transactionHash}`,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Rebroadcast existing transaction
 *
 * @param ky   Debug Ky instance
 * @param transactionHash Hash of the transaction
 */

async function rebroadcastTransaction(ky, transactionHash) {
  const response = await http(ky, {
    method: 'post',
    path: `${transactionsEndpoint}/${transactionHash}`,
    responseType: 'json'
  });
  return response.data.transactionHash;
}
/**
 * Cancel existing transaction
 *
 * @param ky   Debug Ky instance
 * @param transactionHash Hash of the transaction
 * @param gasPrice Optional gas price
 */

async function cancelTransaction(ky, transactionHash, gasPrice) {
  const response = await http(ky, {
    method: 'delete',
    headers: {
      'gas-price': gasPrice
    },
    path: `${transactionsEndpoint}/${transactionHash}`,
    responseType: 'json'
  });
  return response.data.transactionHash;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/states.js

const RESERVE_STATE_ENDPOINT = 'reservestate';
const CHAIN_STATE_ENDPOINT = 'chainstate';
/**
 * Get state of reserve
 *
 * @param ky Ky debug instance
 */

async function getReserveState(ky) {
  const response = await http(ky, {
    method: 'get',
    path: `${RESERVE_STATE_ENDPOINT}`,
    responseType: 'json'
  });
  return response.data;
}
/**
 * Get state of reserve
 *
 * @param ky Ky debug instance
 */

async function getChainState(ky) {
  const response = await http(ky, {
    method: 'get',
    path: `${CHAIN_STATE_ENDPOINT}`,
    responseType: 'json'
  });
  return response.data;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/tag.js

const tag_endpoint = 'tags';
/**
 * Retrieve tag with extended information from Bee node
 *
 * @param ky Ky debug instance
 * @param uid UID of tag to be retrieved
 */

async function retrieveExtendedTag(ky, uid) {
  const response = await http(ky, {
    path: `${tag_endpoint}/${uid}`,
    responseType: 'json'
  });
  return response.data;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/modules/debug/stamps.js

const STAMPS_ENDPOINT = 'stamps';
async function getAllPostageBatches(ky) {
  const response = await http(ky, {
    method: 'get',
    path: `${STAMPS_ENDPOINT}`,
    responseType: 'json'
  });
  return response.data.stamps || [];
}
async function getPostageBatch(ky, postageBatchId) {
  const response = await http(ky, {
    method: 'get',
    path: `${STAMPS_ENDPOINT}/${postageBatchId}`,
    responseType: 'json'
  });
  return response.data;
}
async function getPostageBatchBuckets(ky, postageBatchId) {
  const response = await http(ky, {
    method: 'get',
    path: `${STAMPS_ENDPOINT}/${postageBatchId}/buckets`,
    responseType: 'json'
  });
  return response.data;
}
async function createPostageBatch(ky, amount, depth, options) {
  const headers = {};

  if (options?.gasPrice) {
    headers['gas-price'] = options.gasPrice.toString();
  }

  if (options?.immutableFlag !== undefined) {
    headers.immutable = String(options.immutableFlag);
  }

  const response = await http(ky, {
    method: 'post',
    path: `${STAMPS_ENDPOINT}/${amount}/${depth}`,
    responseType: 'json',
    searchParams: {
      label: options?.label
    },
    headers
  });
  return response.data.batchID;
}
async function topUpBatch(ky, id, amount) {
  const response = await http(ky, {
    method: 'patch',
    path: `${STAMPS_ENDPOINT}/topup/${id}/${amount}`,
    responseType: 'json'
  });
  return response.data.batchID;
}
async function diluteBatch(ky, id, depth) {
  const response = await http(ky, {
    method: 'patch',
    path: `${STAMPS_ENDPOINT}/dilute/${id}/${depth}`,
    responseType: 'json'
  });
  return response.data.batchID;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/bee-debug.js














class BeeDebug {
  /**
   * URL on which is the Debug API of Bee node exposed
   */
  url;
  /**
   * Ky instance that defines connection to Bee node
   * @private
   */

  ky;

  constructor(url, options) {
    assertBeeUrl(url); // Remove last slash if present, as our endpoint strings starts with `/...`
    // which could lead to double slash in URL to which Bee responds with
    // unnecessary redirects.

    this.url = stripLastSlash(url);
    const kyOptions = {
      prefixUrl: this.url,
      timeout: options?.timeout ?? false,
      retry: options?.retry,
      fetch: options?.fetch,
      hooks: {
        beforeRequest: [],
        afterResponse: []
      }
    };

    if (options?.defaultHeaders) {
      kyOptions.headers = options.defaultHeaders;
    }

    if (options?.onRequest) {
      kyOptions.hooks.beforeRequest.push(wrapRequestClosure(options.onRequest));
    }

    if (options?.onResponse) {
      kyOptions.hooks.afterResponse.push(wrapResponseClosure(options.onResponse));
    }

    this.ky = makeDefaultKy(kyOptions);
  }

  async getNodeAddresses(options) {
    assertRequestOptions(options);
    return connectivity.getNodeAddresses(this.getKy(options));
  }

  async getBlocklist(options) {
    assertRequestOptions(options);
    return connectivity.getBlocklist(this.getKy(options));
  }
  /**
   * Retrieve tag extended information from Bee node
   *
   * @param tagUid UID or tag object to be retrieved
   * @throws TypeError if tagUid is in not correct format
   *
   * @see [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)
   * @see [Bee API reference - `GET /tags/{uid}`](https://docs.ethswarm.org/debug-api/#tag/Tag)
   *
   */


  async retrieveExtendedTag(tagUid, options) {
    assertRequestOptions(options);

    if (isTag(tagUid)) {
      tagUid = tagUid.uid;
    } else if (typeof tagUid === 'number') {
      assertNonNegativeInteger(tagUid, 'UID');
    } else {
      throw new TypeError('tagUid has to be either Tag or a number (UID)!');
    }

    return tag.retrieveExtendedTag(this.getKy(options), tagUid);
  }
  /**
   * Get list of peers for this node
   */


  async getPeers(options) {
    assertRequestOptions(options);
    return connectivity.getPeers(this.getKy(options));
  }

  async removePeer(peer, options) {
    assertRequestOptions(options);
    assertAddress(peer);
    return connectivity.removePeer(this.getKy(options), peer);
  }

  async getTopology(options) {
    assertRequestOptions(options);
    return connectivity.getTopology(this.getKy(options));
  }

  async pingPeer(peer, options) {
    assertRequestOptions(options);
    assertAddress(peer);
    return connectivity.pingPeer(this.getKy(options), peer);
  }
  /*
   * Balance endpoints
   */

  /**
   * Get the balances with all known peers including prepaid services
   */


  async getAllBalances(options) {
    assertRequestOptions(options);
    return balance.getAllBalances(this.getKy(options));
  }
  /**
   * Get the balances with a specific peer including prepaid services
   *
   * @param address Swarm address of peer
   */


  async getPeerBalance(address, options) {
    assertRequestOptions(options);
    assertAddress(address);
    return balance.getPeerBalance(this.getKy(options), address);
  }
  /**
   * Get the past due consumption balances with all known peers
   */


  async getPastDueConsumptionBalances(options) {
    assertRequestOptions(options);
    return balance.getPastDueConsumptionBalances(this.getKy(options));
  }
  /**
   * Get the past due consumption balance with a specific peer
   *
   * @param address Swarm address of peer
   */


  async getPastDueConsumptionPeerBalance(address, options) {
    assertRequestOptions(options);
    assertAddress(address);
    return balance.getPastDueConsumptionPeerBalance(this.getKy(options), address);
  }
  /*
   * Chequebook endpoints
   */

  /**
   * Get the address of the chequebook contract used.
   *
   * **Warning:** The address is returned with 0x prefix unlike all other calls.
   * https://github.com/ethersphere/bee/issues/1443
   */


  async getChequebookAddress(options) {
    assertRequestOptions(options);
    return chequebook.getChequebookAddress(this.getKy(options));
  }
  /**
   * Get the balance of the chequebook
   */


  async getChequebookBalance(options) {
    assertRequestOptions(options);
    return chequebook.getChequebookBalance(this.getKy(options));
  }
  /**
   * Get last cheques for all peers
   */


  async getLastCheques(options) {
    assertRequestOptions(options);
    return chequebook.getLastCheques(this.getKy(options));
  }
  /**
   * Get last cheques for the peer
   *
   * @param address  Swarm address of peer
   */


  async getLastChequesForPeer(address, options) {
    assertRequestOptions(options);
    assertAddress(address);
    return chequebook.getLastChequesForPeer(this.getKy(options), address);
  }
  /**
   * Get last cashout action for the peer
   *
   * @param address  Swarm address of peer
   */


  async getLastCashoutAction(address, options) {
    assertRequestOptions(options);
    assertAddress(address);
    return chequebook.getLastCashoutAction(this.getKy(options), address);
  }
  /**
   * Cashout the last cheque for the peer
   *
   * @param address  Swarm address of peer
   * @param options
   * @param options.gasPrice Gas price for the cashout transaction in WEI
   * @param options.gasLimit Gas limit for the cashout transaction in WEI
   */


  async cashoutLastCheque(address, options) {
    assertCashoutOptions(options);
    assertAddress(address);
    return chequebook.cashoutLastCheque(this.getKy(options), address, options);
  }
  /**
   * Deposit tokens from overlay address into chequebook
   *
   * @param amount  Amount of tokens to deposit (must be positive integer)
   * @param gasPrice Gas Price in WEI for the transaction call
   * @return string  Hash of the transaction
   */


  async depositTokens(amount, gasPrice, options) {
    assertRequestOptions(options);
    assertNonNegativeInteger(amount);

    if (gasPrice) {
      assertNonNegativeInteger(gasPrice);
    }

    return chequebook.depositTokens(this.getKy(options), amount, gasPrice);
  }
  /**
   * Withdraw tokens from the chequebook to the overlay address
   *
   * @param amount  Amount of tokens to withdraw (must be positive integer)
   * @param gasPrice Gas Price in WEI for the transaction call
   * @return string  Hash of the transaction
   */


  async withdrawTokens(amount, gasPrice, options) {
    assertRequestOptions(options);
    assertNonNegativeInteger(amount);

    if (gasPrice) {
      assertNonNegativeInteger(gasPrice);
    }

    return chequebook.withdrawTokens(this.getKy(options), amount, gasPrice);
  }
  /*
   * Settlements endpoint
   */

  /**
   * Get amount of sent and received from settlements with a peer
   *
   * @param address  Swarm address of peer
   */


  async getSettlements(address, options) {
    assertRequestOptions(options);
    assertAddress(address);
    return settlements.getSettlements(this.getKy(options), address);
  }
  /**
   * Get settlements with all known peers and total amount sent or received
   */


  async getAllSettlements(options) {
    assertRequestOptions(options);
    return settlements.getAllSettlements(this.getKy(options));
  }
  /**
   * Get health of node
   */


  async getHealth(options) {
    assertRequestOptions(options);
    return status.getHealth(this.getKy(options));
  }
  /**
   * Get mode information of node
   */


  async getNodeInfo(options) {
    assertRequestOptions(options);
    return status.getNodeInfo(this.getKy(options));
  }
  /**
   * Connnects to a node and checks if it is a supported Bee version by the bee-js
   *
   * @returns true if the Bee node version is supported
   * @deprecated Use `BeeDebug.isSupportedExactVersion()` instead
   */


  async isSupportedVersion(options) {
    assertRequestOptions(options);
    return status.isSupportedVersion(this.getKy(options));
  }
  /**
   * Connects to a node and checks if its version matches with the one that bee-js supports.
   *
   * Be aware that this is the most strict version check and most probably
   * you will want to use more relaxed API-versions based checks like
   * `BeeDebug.isSupportedApiVersion()`, `BeeDebug.isSupportedMainApiVersion()` or `BeeDebug.isSupportedDebugApiVersion()`
   * based on your use-case.
   *
   * @param options
   */


  async isSupportedExactVersion(options) {
    assertRequestOptions(options);
    return status.isSupportedExactVersion(this.getKy(options));
  }
  /**
   * Connects to a node and checks if its main's API version matches with the one that bee-js supports.
   *
   * This is useful if you are not using `BeeDebug` class (for anything else then this check)
   * and want to make sure about compatibility.
   *
   * @param options
   */


  async isSupportedMainApiVersion(options) {
    assertRequestOptions(options);
    return status.isSupportedMainApiVersion(this.getKy(options));
  }
  /**
   * Connects to a node and checks if its Debug API version matches with the one that bee-js supports.
   *
   * This is useful if you are not using `Bee` class in your application and want to make sure
   * about compatibility.
   *
   * @param options
   */


  async isSupportedDebugApiVersion(options) {
    assertRequestOptions(options);
    return status.isSupportedDebugApiVersion(this.getKy(options));
  }
  /**
   *
   * Connects to a node and checks if its Main and Debug API versions matches with the one that bee-js supports.
   *
   * This should be the main way how to check compatibility for your app and Bee node.
   *
   * @param options
   */


  async isSupportedApiVersion(options) {
    assertRequestOptions(options);
    return status.isSupportedDebugApiVersion(this.getKy(options));
  }
  /**
   * Returns object with all versions specified by the connected Bee node (properties prefixed with `bee*`)
   * and versions that bee-js supports (properties prefixed with `supported*`).
   *
   * @param options
   */


  async getVersions(options) {
    assertRequestOptions(options);
    return status.getVersions(this.getKy(options));
  }
  /**
   * Get reserve state
   */


  async getReserveState(options) {
    assertRequestOptions(options);
    return states.getReserveState(this.getKy(options));
  }
  /**
   * Get chain state
   */


  async getChainState(options) {
    assertRequestOptions(options);
    return states.getChainState(this.getKy(options));
  }
  /**
   * Creates new postage batch from the funds that the node has available in its Ethereum account.
   *
   * For better understanding what each parameter means and what are the optimal values please see
   * [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).
   *
   * **WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**
   *
   * @param amount Amount that represents the value per chunk, has to be greater or equal zero.
   * @param depth Logarithm of the number of chunks that can be stamped with the batch.
   * @param options Options for creation of postage batch
   * @throws BeeArgumentError when negative amount or depth is specified
   * @throws TypeError if non-integer value is passed to amount or depth
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee Debug API reference - `POST /stamps`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{amount}~1{depth}/post)
   */


  async createPostageBatch(amount, depth, options) {
    assertRequestOptions(options);
    assertNonNegativeInteger(amount);
    assertNonNegativeInteger(depth);

    if (depth < STAMPS_DEPTH_MIN) {
      throw new BeeArgumentError(`Depth has to be at least ${STAMPS_DEPTH_MIN}`, depth);
    }

    if (depth > STAMPS_DEPTH_MAX) {
      throw new BeeArgumentError(`Depth has to be at most ${STAMPS_DEPTH_MAX}`, depth);
    }

    if (options?.gasPrice) {
      assertNonNegativeInteger(options.gasPrice);
    }

    if (options?.immutableFlag !== undefined) {
      assertBoolean(options.immutableFlag);
    }

    return stamps.createPostageBatch(this.getKy(options), amount, depth, options);
  }
  /**
   * Topup a fresh amount of BZZ to given Postage Batch.
   *
   * For better understanding what each parameter means and what are the optimal values please see
   * [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).
   *
   * **WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**
   *
   * @param postageBatchId Batch ID
   * @param amount Amount to be added to the batch
   * @param options Request options
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee Debug API reference - `PATCH /stamps/topup/${id}/${amount}`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1topup~1{id}~1{amount}/patch)
   */


  async topUpBatch(postageBatchId, amount, options) {
    assertRequestOptions(options);
    assertNonNegativeInteger(amount, 'Amount');
    assertBatchId(postageBatchId);
    await stamps.topUpBatch(this.getKy(options), postageBatchId, amount);
  }
  /**
   * Dilute given Postage Batch with new depth (that has to be bigger then the original depth), which allows
   * the Postage Batch to be used for more chunks.
   *
   * For better understanding what each parameter means and what are the optimal values please see
   * [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).
   *
   * **WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**
   *
   * @param postageBatchId Batch ID
   * @param depth Amount to be added to the batch
   * @param options Request options
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee Debug API reference - `PATCH /stamps/topup/${id}/${amount}`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1topup~1{id}~1{amount}/patch)
   */


  async diluteBatch(postageBatchId, depth, options) {
    assertRequestOptions(options);
    assertNonNegativeInteger(depth, 'Depth');
    assertBatchId(postageBatchId);
    await stamps.diluteBatch(this.getKy(options), postageBatchId, depth);
  }
  /**
   * Return details for specific postage batch.
   *
   * @param postageBatchId Batch ID
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee Debug API reference - `GET /stamps/${id}`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{id}/get)
   */


  async getPostageBatch(postageBatchId, options) {
    assertRequestOptions(options);
    assertBatchId(postageBatchId);
    return stamps.getPostageBatch(this.getKy(options), postageBatchId);
  }
  /**
   * Return detailed information related to buckets for specific postage batch.
   *
   * @param postageBatchId Batch ID
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee Debug API reference - `GET /stamps/${id}/buckets`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{id}~1buckets/get)
   */


  async getPostageBatchBuckets(postageBatchId, options) {
    assertRequestOptions(options);
    assertBatchId(postageBatchId);
    return stamps.getPostageBatchBuckets(this.getKy(options), postageBatchId);
  }
  /**
   * Return all postage batches that has the node available.
   *
   * @see [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)
   * @see [Bee Debug API reference - `GET /stamps`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps/get)
   */


  async getAllPostageBatch(options) {
    assertRequestOptions(options);
    return stamps.getAllPostageBatches(this.getKy(options));
  }
  /**
   * Return lists of all current pending transactions that the Bee made
   */


  async getAllPendingTransactions(options) {
    assertRequestOptions(options);
    return transactions.getAllTransactions(this.getKy(options));
  }
  /**
   * Return transaction information for specific transaction
   * @param transactionHash
   */


  async getPendingTransaction(transactionHash, options) {
    assertRequestOptions(options);
    assertTransactionHash(transactionHash);
    return transactions.getTransaction(this.getKy(options), transactionHash);
  }
  /**
   * Rebroadcast already created transaction.
   * This is mainly needed when your transaction fall off mempool from other reason is not incorporated into block.
   *
   * @param transactionHash
   */


  async rebroadcastPendingTransaction(transactionHash, options) {
    assertRequestOptions(options);
    assertTransactionHash(transactionHash);
    return transactions.rebroadcastTransaction(this.getKy(options), transactionHash);
  }
  /**
   * Cancel currently pending transaction
   * @param transactionHash
   * @param gasPrice
   */


  async cancelPendingTransaction(transactionHash, gasPrice, options) {
    assertRequestOptions(options);
    assertTransactionHash(transactionHash);

    if (gasPrice) {
      assertNonNegativeInteger(gasPrice);
    }

    return transactions.cancelTransaction(this.getKy(options), transactionHash, gasPrice);
  }

  getKy(options) {
    if (!options) {
      return this.ky;
    }

    return this.ky.extend(options);
  }

}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/pss.js

/**
 * Utility function that for given strings/reference takes the most specific
 * target that Bee node will except.
 *
 * @param target is a non-prefixed hex string Bee address
 * @see [Bee docs - PSS](https://docs.ethswarm.org/docs/dapps-on-swarm/pss)
 */

function makeMaxTarget(target) {
  if (typeof target !== 'string') {
    throw new TypeError('target has to be an string!');
  }

  return target.slice(0, PSS_TARGET_HEX_LENGTH_MAX);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/utils/expose.js









;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/index.js








/***/ })

}]);