"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6265],{

/***/ 33780:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.getEncryptionPublicKey = exports.decryptSafely = exports.decrypt = exports.encryptSafely = exports.encrypt = void 0;
const nacl = __importStar(__webpack_require__(5548));
const naclUtil = __importStar(__webpack_require__(54328));
const utils_1 = __webpack_require__(85836);
/**
 * Encrypt a message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */
function encrypt({ publicKey, data, version, }) {
    if (utils_1.isNullish(publicKey)) {
        throw new Error('Missing publicKey parameter');
    }
    else if (utils_1.isNullish(data)) {
        throw new Error('Missing data parameter');
    }
    else if (utils_1.isNullish(version)) {
        throw new Error('Missing version parameter');
    }
    switch (version) {
        case 'x25519-xsalsa20-poly1305': {
            if (typeof data !== 'string') {
                throw new Error('Message data must be given as a string');
            }
            // generate ephemeral keypair
            const ephemeralKeyPair = nacl.box.keyPair();
            // assemble encryption parameters - from string to UInt8
            let pubKeyUInt8Array;
            try {
                pubKeyUInt8Array = naclUtil.decodeBase64(publicKey);
            }
            catch (err) {
                throw new Error('Bad public key');
            }
            const msgParamsUInt8Array = naclUtil.decodeUTF8(data);
            const nonce = nacl.randomBytes(nacl.box.nonceLength);
            // encrypt
            const encryptedMessage = nacl.box(msgParamsUInt8Array, nonce, pubKeyUInt8Array, ephemeralKeyPair.secretKey);
            // handle encrypted data
            const output = {
                version: 'x25519-xsalsa20-poly1305',
                nonce: naclUtil.encodeBase64(nonce),
                ephemPublicKey: naclUtil.encodeBase64(ephemeralKeyPair.publicKey),
                ciphertext: naclUtil.encodeBase64(encryptedMessage),
            };
            // return encrypted msg data
            return output;
        }
        default:
            throw new Error('Encryption type/version not supported');
    }
}
exports.encrypt = encrypt;
/**
 * Encrypt a message in a way that obscures the message length.
 *
 * The message is padded to a multiple of 2048 before being encrypted so that the length of the
 * resulting encrypted message can't be used to guess the exact length of the original message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */
function encryptSafely({ publicKey, data, version, }) {
    if (utils_1.isNullish(publicKey)) {
        throw new Error('Missing publicKey parameter');
    }
    else if (utils_1.isNullish(data)) {
        throw new Error('Missing data parameter');
    }
    else if (utils_1.isNullish(version)) {
        throw new Error('Missing version parameter');
    }
    const DEFAULT_PADDING_LENGTH = 2 ** 11;
    const NACL_EXTRA_BYTES = 16;
    if (typeof data === 'object' && 'toJSON' in data) {
        // remove toJSON attack vector
        // TODO, check all possible children
        throw new Error('Cannot encrypt with toJSON property.  Please remove toJSON property');
    }
    // add padding
    const dataWithPadding = {
        data,
        padding: '',
    };
    // calculate padding
    const dataLength = Buffer.byteLength(JSON.stringify(dataWithPadding), 'utf-8');
    const modVal = dataLength % DEFAULT_PADDING_LENGTH;
    let padLength = 0;
    // Only pad if necessary
    if (modVal > 0) {
        padLength = DEFAULT_PADDING_LENGTH - modVal - NACL_EXTRA_BYTES; // nacl extra bytes
    }
    dataWithPadding.padding = '0'.repeat(padLength);
    const paddedMessage = JSON.stringify(dataWithPadding);
    return encrypt({ publicKey, data: paddedMessage, version });
}
exports.encryptSafely = encryptSafely;
/**
 * Decrypt a message.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */
function decrypt({ encryptedData, privateKey, }) {
    if (utils_1.isNullish(encryptedData)) {
        throw new Error('Missing encryptedData parameter');
    }
    else if (utils_1.isNullish(privateKey)) {
        throw new Error('Missing privateKey parameter');
    }
    switch (encryptedData.version) {
        case 'x25519-xsalsa20-poly1305': {
            // string to buffer to UInt8Array
            const recieverPrivateKeyUint8Array = nacl_decodeHex(privateKey);
            const recieverEncryptionPrivateKey = nacl.box.keyPair.fromSecretKey(recieverPrivateKeyUint8Array).secretKey;
            // assemble decryption parameters
            const nonce = naclUtil.decodeBase64(encryptedData.nonce);
            const ciphertext = naclUtil.decodeBase64(encryptedData.ciphertext);
            const ephemPublicKey = naclUtil.decodeBase64(encryptedData.ephemPublicKey);
            // decrypt
            const decryptedMessage = nacl.box.open(ciphertext, nonce, ephemPublicKey, recieverEncryptionPrivateKey);
            // return decrypted msg data
            let output;
            try {
                output = naclUtil.encodeUTF8(decryptedMessage);
            }
            catch (err) {
                throw new Error('Decryption failed.');
            }
            if (output) {
                return output;
            }
            throw new Error('Decryption failed.');
        }
        default:
            throw new Error('Encryption type/version not supported.');
    }
}
exports.decrypt = decrypt;
/**
 * Decrypt a message that has been encrypted using `encryptSafely`.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */
function decryptSafely({ encryptedData, privateKey, }) {
    if (utils_1.isNullish(encryptedData)) {
        throw new Error('Missing encryptedData parameter');
    }
    else if (utils_1.isNullish(privateKey)) {
        throw new Error('Missing privateKey parameter');
    }
    const dataWithPadding = JSON.parse(decrypt({ encryptedData, privateKey }));
    return dataWithPadding.data;
}
exports.decryptSafely = decryptSafely;
/**
 * Get the encryption public key for the given key.
 *
 * @param privateKey - The private key to generate the encryption public key with.
 * @returns The encryption public key.
 */
function getEncryptionPublicKey(privateKey) {
    const privateKeyUint8Array = nacl_decodeHex(privateKey);
    const encryptionPublicKey = nacl.box.keyPair.fromSecretKey(privateKeyUint8Array).publicKey;
    return naclUtil.encodeBase64(encryptionPublicKey);
}
exports.getEncryptionPublicKey = getEncryptionPublicKey;
/**
 * Convert a hex string to the UInt8Array format used by nacl.
 *
 * @param msgHex - The string to convert.
 * @returns The converted string.
 */
function nacl_decodeHex(msgHex) {
    const msgBase64 = Buffer.from(msgHex, 'hex').toString('base64');
    return naclUtil.decodeBase64(msgBase64);
}
//# sourceMappingURL=encryption.js.map

/***/ }),

/***/ 66058:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalize = exports.concatSig = void 0;
__exportStar(__webpack_require__(67716), exports);
__exportStar(__webpack_require__(14769), exports);
__exportStar(__webpack_require__(33780), exports);
var utils_1 = __webpack_require__(85836);
Object.defineProperty(exports, "concatSig", ({ enumerable: true, get: function () { return utils_1.concatSig; } }));
Object.defineProperty(exports, "normalize", ({ enumerable: true, get: function () { return utils_1.normalize; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 67716:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractPublicKey = exports.recoverPersonalSignature = exports.personalSign = void 0;
const ethereumjs_util_1 = __webpack_require__(62194);
const utils_1 = __webpack_require__(85836);
/**
 * Create an Ethereum-specific signature for a message.
 *
 * This function is equivalent to the `eth_sign` Ethereum JSON-RPC method as specified in EIP-1417,
 * as well as the MetaMask's `personal_sign` method.
 *
 * @param options - The personal sign options.
 * @param options.privateKey - The key to sign with.
 * @param options.data - The hex data to sign.
 * @returns The '0x'-prefixed hex encoded signature.
 */
function personalSign({ privateKey, data, }) {
    if (utils_1.isNullish(data)) {
        throw new Error('Missing data parameter');
    }
    else if (utils_1.isNullish(privateKey)) {
        throw new Error('Missing privateKey parameter');
    }
    const message = utils_1.legacyToBuffer(data);
    const msgHash = ethereumjs_util_1.hashPersonalMessage(message);
    const sig = ethereumjs_util_1.ecsign(msgHash, privateKey);
    const serialized = utils_1.concatSig(ethereumjs_util_1.toBuffer(sig.v), sig.r, sig.s);
    return serialized;
}
exports.personalSign = personalSign;
/**
 * Recover the address of the account used to create the given Ethereum signature. The message
 * must have been signed using the `personalSign` function, or an equivalent function.
 *
 * @param options - The signature recovery options.
 * @param options.data - The hex data that was signed.
 * @param options.signature - The '0x'-prefixed hex encoded message signature.
 * @returns The '0x'-prefixed hex encoded address of the message signer.
 */
function recoverPersonalSignature({ data, signature, }) {
    if (utils_1.isNullish(data)) {
        throw new Error('Missing data parameter');
    }
    else if (utils_1.isNullish(signature)) {
        throw new Error('Missing signature parameter');
    }
    const publicKey = getPublicKeyFor(data, signature);
    const sender = ethereumjs_util_1.publicToAddress(publicKey);
    const senderHex = ethereumjs_util_1.bufferToHex(sender);
    return senderHex;
}
exports.recoverPersonalSignature = recoverPersonalSignature;
/**
 * Recover the public key of the account used to create the given Ethereum signature. The message
 * must have been signed using the `personalSign` function, or an equivalent function.
 *
 * @param options - The public key recovery options.
 * @param options.data - The hex data that was signed.
 * @param options.signature - The '0x'-prefixed hex encoded message signature.
 * @returns The '0x'-prefixed hex encoded public key of the message signer.
 */
function extractPublicKey({ data, signature, }) {
    if (utils_1.isNullish(data)) {
        throw new Error('Missing data parameter');
    }
    else if (utils_1.isNullish(signature)) {
        throw new Error('Missing signature parameter');
    }
    const publicKey = getPublicKeyFor(data, signature);
    return `0x${publicKey.toString('hex')}`;
}
exports.extractPublicKey = extractPublicKey;
/**
 * Get the public key for the given signature and message.
 *
 * @param message - The message that was signed.
 * @param signature - The '0x'-prefixed hex encoded message signature.
 * @returns The public key of the signer.
 */
function getPublicKeyFor(message, signature) {
    const messageHash = ethereumjs_util_1.hashPersonalMessage(utils_1.legacyToBuffer(message));
    return utils_1.recoverPublicKey(messageHash, signature);
}
//# sourceMappingURL=personal-sign.js.map

/***/ }),

/***/ 14769:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.recoverTypedSignature = exports.signTypedData = exports.typedSignatureHash = exports.TypedDataUtils = exports.TYPED_MESSAGE_SCHEMA = exports.SignTypedDataVersion = void 0;
const ethereumjs_util_1 = __webpack_require__(62194);
const ethereumjs_abi_1 = __webpack_require__(80848);
const utils_1 = __webpack_require__(85836);
/**
 * Represents the version of `signTypedData` being used.
 *
 * V1 is based upon [an early version of EIP-712](https://github.com/ethereum/EIPs/pull/712/commits/21abe254fe0452d8583d5b132b1d7be87c0439ca)
 * that lacked some later security improvements, and should generally be neglected in favor of
 * later versions.
 *
 * V3 is based on EIP-712, except that arrays and recursive data structures are not supported.
 *
 * V4 is based on EIP-712, and includes full support of arrays and recursive data structures.
 */
var SignTypedDataVersion;
(function (SignTypedDataVersion) {
    SignTypedDataVersion["V1"] = "V1";
    SignTypedDataVersion["V3"] = "V3";
    SignTypedDataVersion["V4"] = "V4";
})(SignTypedDataVersion = exports.SignTypedDataVersion || (exports.SignTypedDataVersion = {}));
exports.TYPED_MESSAGE_SCHEMA = {
    type: 'object',
    properties: {
        types: {
            type: 'object',
            additionalProperties: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        type: { type: 'string', enum: getSolidityTypes() },
                    },
                    required: ['name', 'type'],
                },
            },
        },
        primaryType: { type: 'string' },
        domain: { type: 'object' },
        message: { type: 'object' },
    },
    required: ['types', 'primaryType', 'domain', 'message'],
};
/**
 * Get a list of all Solidity types.
 *
 * @returns A list of all Solidity types.
 */
function getSolidityTypes() {
    const types = ['bool', 'address', 'string', 'bytes'];
    const ints = Array.from(new Array(32)).map((_, index) => `int${(index + 1) * 8}`);
    const uints = Array.from(new Array(32)).map((_, index) => `uint${(index + 1) * 8}`);
    const bytes = Array.from(new Array(32)).map((_, index) => `bytes${index + 1}`);
    return [...types, ...ints, ...uints, ...bytes];
}
/**
 * Validate that the given value is a valid version string.
 *
 * @param version - The version value to validate.
 * @param allowedVersions - A list of allowed versions. If omitted, all versions are assumed to be
 * allowed.
 */
function validateVersion(version, allowedVersions) {
    if (!Object.keys(SignTypedDataVersion).includes(version)) {
        throw new Error(`Invalid version: '${version}'`);
    }
    else if (allowedVersions && !allowedVersions.includes(version)) {
        throw new Error(`SignTypedDataVersion not allowed: '${version}'. Allowed versions are: ${allowedVersions.join(', ')}`);
    }
}
/**
 * Encode a single field.
 *
 * @param types - All type definitions.
 * @param name - The name of the field to encode.
 * @param type - The type of the field being encoded.
 * @param value - The value to encode.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns Encoded representation of the field.
 */
function encodeField(types, name, type, value, version) {
    validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);
    if (types[type] !== undefined) {
        return [
            'bytes32',
            version === SignTypedDataVersion.V4 && value == null // eslint-disable-line no-eq-null
                ? '0x0000000000000000000000000000000000000000000000000000000000000000'
                : ethereumjs_util_1.keccak(encodeData(type, value, types, version)),
        ];
    }
    if (value === undefined) {
        throw new Error(`missing value for field ${name} of type ${type}`);
    }
    if (type === 'bytes') {
        return ['bytes32', ethereumjs_util_1.keccak(value)];
    }
    if (type === 'string') {
        // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
        if (typeof value === 'string') {
            value = Buffer.from(value, 'utf8');
        }
        return ['bytes32', ethereumjs_util_1.keccak(value)];
    }
    if (type.lastIndexOf(']') === type.length - 1) {
        if (version === SignTypedDataVersion.V3) {
            throw new Error('Arrays are unimplemented in encodeData; use V4 extension');
        }
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item) => encodeField(types, name, parsedType, item, version));
        return [
            'bytes32',
            ethereumjs_util_1.keccak(ethereumjs_abi_1.rawEncode(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v))),
        ];
    }
    return [type, value];
}
/**
 * Encodes an object by encoding and concatenating each of its members.
 *
 * @param primaryType - The root type.
 * @param data - The object to encode.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns An encoded representation of an object.
 */
function encodeData(primaryType, data, types, version) {
    validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);
    const encodedTypes = ['bytes32'];
    const encodedValues = [hashType(primaryType, types)];
    for (const field of types[primaryType]) {
        if (version === SignTypedDataVersion.V3 && data[field.name] === undefined) {
            continue;
        }
        const [type, value] = encodeField(types, field.name, field.type, data[field.name], version);
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return ethereumjs_abi_1.rawEncode(encodedTypes, encodedValues);
}
/**
 * Encodes the type of an object by encoding a comma delimited list of its members.
 *
 * @param primaryType - The root type to encode.
 * @param types - Type definitions for all types included in the message.
 * @returns An encoded representation of the primary type.
 */
function encodeType(primaryType, types) {
    let result = '';
    const unsortedDeps = findTypeDependencies(primaryType, types);
    unsortedDeps.delete(primaryType);
    const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
    for (const type of deps) {
        const children = types[type];
        if (!children) {
            throw new Error(`No type definition specified: ${type}`);
        }
        result += `${type}(${types[type]
            .map(({ name, type: t }) => `${t} ${name}`)
            .join(',')})`;
    }
    return result;
}
/**
 * Finds all types within a type definition object.
 *
 * @param primaryType - The root type.
 * @param types - Type definitions for all types included in the message.
 * @param results - The current set of accumulated types.
 * @returns The set of all types found in the type definition.
 */
function findTypeDependencies(primaryType, types, results = new Set()) {
    [primaryType] = primaryType.match(/^\w*/u);
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]) {
        findTypeDependencies(field.type, types, results);
    }
    return results;
}
/**
 * Hashes an object.
 *
 * @param primaryType - The root type.
 * @param data - The object to hash.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the object.
 */
function hashStruct(primaryType, data, types, version) {
    validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);
    return ethereumjs_util_1.keccak(encodeData(primaryType, data, types, version));
}
/**
 * Hashes the type of an object.
 *
 * @param primaryType - The root type to hash.
 * @param types - Type definitions for all types included in the message.
 * @returns The hash of the object type.
 */
function hashType(primaryType, types) {
    return ethereumjs_util_1.keccak(encodeType(primaryType, types));
}
/**
 * Removes properties from a message object that are not defined per EIP-712.
 *
 * @param data - The typed message object.
 * @returns The typed message object with only allowed fields.
 */
function sanitizeData(data) {
    const sanitizedData = {};
    for (const key in exports.TYPED_MESSAGE_SCHEMA.properties) {
        if (data[key]) {
            sanitizedData[key] = data[key];
        }
    }
    if ('types' in sanitizedData) {
        sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
    }
    return sanitizedData;
}
/**
 * Hash a typed message according to EIP-712. The returned message starts with the EIP-712 prefix,
 * which is "1901", followed by the hash of the domain separator, then the data (if any).
 * The result is hashed again and returned.
 *
 * This function does not sign the message. The resulting hash must still be signed to create an
 * EIP-712 signature.
 *
 * @param typedData - The typed message to hash.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the typed message.
 */
function eip712Hash(typedData, version) {
    validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);
    const sanitizedData = sanitizeData(typedData);
    const parts = [Buffer.from('1901', 'hex')];
    parts.push(hashStruct('EIP712Domain', sanitizedData.domain, sanitizedData.types, version));
    if (sanitizedData.primaryType !== 'EIP712Domain') {
        parts.push(hashStruct(
        // TODO: Validate that this is a string, so this type cast can be removed.
        sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, version));
    }
    return ethereumjs_util_1.keccak(Buffer.concat(parts));
}
/**
 * A collection of utility functions used for signing typed data.
 */
exports.TypedDataUtils = {
    encodeData,
    encodeType,
    findTypeDependencies,
    hashStruct,
    hashType,
    sanitizeData,
    eip712Hash,
};
/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The '0x'-prefixed hex encoded hash representing the type of the provided message.
 */
function typedSignatureHash(typedData) {
    const hashBuffer = _typedSignatureHash(typedData);
    return ethereumjs_util_1.bufferToHex(hashBuffer);
}
exports.typedSignatureHash = typedSignatureHash;
/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The hash representing the type of the provided message.
 */
function _typedSignatureHash(typedData) {
    const error = new Error('Expect argument to be non-empty array');
    if (typeof typedData !== 'object' ||
        !('length' in typedData) ||
        !typedData.length) {
        throw error;
    }
    const data = typedData.map(function (e) {
        if (e.type !== 'bytes') {
            return e.value;
        }
        return utils_1.legacyToBuffer(e.value);
    });
    const types = typedData.map(function (e) {
        return e.type;
    });
    const schema = typedData.map(function (e) {
        if (!e.name) {
            throw error;
        }
        return `${e.type} ${e.name}`;
    });
    return ethereumjs_abi_1.soliditySHA3(['bytes32', 'bytes32'], [
        ethereumjs_abi_1.soliditySHA3(new Array(typedData.length).fill('string'), schema),
        ethereumjs_abi_1.soliditySHA3(types, data),
    ]);
}
/**
 * Sign typed data according to EIP-712. The signing differs based upon the `version`.
 *
 * V1 is based upon [an early version of EIP-712](https://github.com/ethereum/EIPs/pull/712/commits/21abe254fe0452d8583d5b132b1d7be87c0439ca)
 * that lacked some later security improvements, and should generally be neglected in favor of
 * later versions.
 *
 * V3 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), except that arrays and
 * recursive data structures are not supported.
 *
 * V4 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), and includes full support of
 * arrays and recursive data structures.
 *
 * @param options - The signing options.
 * @param options.privateKey - The private key to sign with.
 * @param options.data - The typed data to sign.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex encoded signature.
 */
function signTypedData({ privateKey, data, version, }) {
    validateVersion(version);
    if (utils_1.isNullish(data)) {
        throw new Error('Missing data parameter');
    }
    else if (utils_1.isNullish(privateKey)) {
        throw new Error('Missing private key parameter');
    }
    const messageHash = version === SignTypedDataVersion.V1
        ? _typedSignatureHash(data)
        : exports.TypedDataUtils.eip712Hash(data, version);
    const sig = ethereumjs_util_1.ecsign(messageHash, privateKey);
    return utils_1.concatSig(ethereumjs_util_1.toBuffer(sig.v), sig.r, sig.s);
}
exports.signTypedData = signTypedData;
/**
 * Recover the address of the account that created the given EIP-712
 * signature. The version provided must match the version used to
 * create the signature.
 *
 * @param options - The signature recovery options.
 * @param options.data - The typed data that was signed.
 * @param options.signature - The '0x-prefixed hex encoded message signature.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex address of the signer.
 */
function recoverTypedSignature({ data, signature, version, }) {
    validateVersion(version);
    if (utils_1.isNullish(data)) {
        throw new Error('Missing data parameter');
    }
    else if (utils_1.isNullish(signature)) {
        throw new Error('Missing signature parameter');
    }
    const messageHash = version === SignTypedDataVersion.V1
        ? _typedSignatureHash(data)
        : exports.TypedDataUtils.eip712Hash(data, version);
    const publicKey = utils_1.recoverPublicKey(messageHash, signature);
    const sender = ethereumjs_util_1.publicToAddress(publicKey);
    return ethereumjs_util_1.bufferToHex(sender);
}
exports.recoverTypedSignature = recoverTypedSignature;
//# sourceMappingURL=sign-typed-data.js.map

/***/ }),

/***/ 85836:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalize = exports.recoverPublicKey = exports.concatSig = exports.legacyToBuffer = exports.isNullish = exports.padWithZeroes = void 0;
const ethereumjs_util_1 = __webpack_require__(62194);
const ethjs_util_1 = __webpack_require__(45479);
/**
 * Pads the front of the given hex string with zeroes until it reaches the
 * target length. If the input string is already longer than or equal to the
 * target length, it is returned unmodified.
 *
 * If the input string is "0x"-prefixed or not a hex string, an error will be
 * thrown.
 *
 * @param hexString - The hexadecimal string to pad with zeroes.
 * @param targetLength - The target length of the hexadecimal string.
 * @returns The input string front-padded with zeroes, or the original string
 * if it was already greater than or equal to to the target length.
 */
function padWithZeroes(hexString, targetLength) {
    if (hexString !== '' && !/^[a-f0-9]+$/iu.test(hexString)) {
        throw new Error(`Expected an unprefixed hex string. Received: ${hexString}`);
    }
    if (targetLength < 0) {
        throw new Error(`Expected a non-negative integer target length. Received: ${targetLength}`);
    }
    return String.prototype.padStart.call(hexString, targetLength, '0');
}
exports.padWithZeroes = padWithZeroes;
/**
 * Returns `true` if the given value is nullish.
 *
 * @param value - The value being checked.
 * @returns Whether the value is nullish.
 */
function isNullish(value) {
    return value === null || value === undefined;
}
exports.isNullish = isNullish;
/**
 * Convert a value to a Buffer. This function should be equivalent to the `toBuffer` function in
 * `ethereumjs-util@5.2.1`.
 *
 * @param value - The value to convert to a Buffer.
 * @returns The given value as a Buffer.
 */
function legacyToBuffer(value) {
    return typeof value === 'string' && !ethjs_util_1.isHexString(value)
        ? Buffer.from(value)
        : ethereumjs_util_1.toBuffer(value);
}
exports.legacyToBuffer = legacyToBuffer;
/**
 * Concatenate an extended ECDSA signature into a single '0x'-prefixed hex string.
 *
 * @param v - The 'v' portion of the signature.
 * @param r - The 'r' portion of the signature.
 * @param s - The 's' portion of the signature.
 * @returns The concatenated ECDSA signature as a '0x'-prefixed string.
 */
function concatSig(v, r, s) {
    const rSig = ethereumjs_util_1.fromSigned(r);
    const sSig = ethereumjs_util_1.fromSigned(s);
    const vSig = ethereumjs_util_1.bufferToInt(v);
    const rStr = padWithZeroes(ethereumjs_util_1.toUnsigned(rSig).toString('hex'), 64);
    const sStr = padWithZeroes(ethereumjs_util_1.toUnsigned(sSig).toString('hex'), 64);
    const vStr = ethjs_util_1.stripHexPrefix(ethjs_util_1.intToHex(vSig));
    return ethereumjs_util_1.addHexPrefix(rStr.concat(sStr, vStr));
}
exports.concatSig = concatSig;
/**
 * Recover the public key from the given signature and message hash.
 *
 * @param messageHash - The hash of the signed message.
 * @param signature - The signature.
 * @returns The public key of the signer.
 */
function recoverPublicKey(messageHash, signature) {
    const sigParams = ethereumjs_util_1.fromRpcSig(signature);
    return ethereumjs_util_1.ecrecover(messageHash, sigParams.v, sigParams.r, sigParams.s);
}
exports.recoverPublicKey = recoverPublicKey;
/**
 * Normalize the input to a lower-cased '0x'-prefixed hex string.
 *
 * @param input - The value to normalize.
 * @returns The normalized value.
 */
function normalize(input) {
    if (!input) {
        return undefined;
    }
    if (typeof input === 'number') {
        const buffer = ethereumjs_util_1.toBuffer(input);
        input = ethereumjs_util_1.bufferToHex(buffer);
    }
    if (typeof input !== 'string') {
        let msg = 'eth-sig-util.normalize() requires hex string or integer input.';
        msg += ` received ${typeof input}: ${input}`;
        throw new Error(msg);
    }
    return ethereumjs_util_1.addHexPrefix(input.toLowerCase());
}
exports.normalize = normalize;
//# sourceMappingURL=utils.js.map

/***/ })

}]);