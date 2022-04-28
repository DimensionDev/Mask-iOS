"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7856],{

/***/ 58353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const table = __webpack_require__(5662)

// map for codecConstant -> code
const constants = {}

for (const [name, code] of Object.entries(table)) {
  constants[name.toUpperCase().replace(/-/g, '_')] = code
}

module.exports = Object.freeze(constants)


/***/ }),

/***/ 59103:
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/**
 * Implementation of the multicodec specification.
 *
 * @module multicodec
 * @example
 * const multicodec = require('multicodec')
 *
 * const prefixedProtobuf = multicodec.addPrefix('protobuf', protobufBuffer)
 * // prefixedProtobuf 0x50...
 *
 */


const varint = __webpack_require__(29364)
const intTable = __webpack_require__(13503)
const codecNameToCodeVarint = __webpack_require__(44617)
const util = __webpack_require__(30709)

exports = module.exports

/**
 * Prefix a buffer with a multicodec-packed.
 *
 * @param {string|number} multicodecStrOrCode
 * @param {Buffer} data
 * @returns {Buffer}
 */
exports.addPrefix = (multicodecStrOrCode, data) => {
  let prefix

  if (Buffer.isBuffer(multicodecStrOrCode)) {
    prefix = util.varintBufferEncode(multicodecStrOrCode)
  } else {
    if (codecNameToCodeVarint[multicodecStrOrCode]) {
      prefix = codecNameToCodeVarint[multicodecStrOrCode]
    } else {
      throw new Error('multicodec not recognized')
    }
  }
  return Buffer.concat([prefix, data])
}

/**
 * Decapsulate the multicodec-packed prefix from the data.
 *
 * @param {Buffer} data
 * @returns {Buffer}
 */
exports.rmPrefix = (data) => {
  varint.decode(data)
  return data.slice(varint.decode.bytes)
}

/**
 * Get the codec of the prefixed data.
 * @param {Buffer} prefixedData
 * @returns {string}
 */
exports.getCodec = (prefixedData) => {
  const code = varint.decode(prefixedData)
  const codecName = intTable.get(code)
  if (codecName === undefined) {
    throw new Error(`Code ${code} not found`)
  }
  return codecName
}

/**
 * Get the name of the codec.
 * @param {number} codec
 * @returns {string}
 */
exports.getName = (codec) => {
  return intTable.get(codec)
}

/**
 * Get the code of the codec
 * @param {string} name
 * @returns {number}
 */
exports.getNumber = (name) => {
  const code = codecNameToCodeVarint[name]
  if (code === undefined) {
    throw new Error('Codec `' + name + '` not found')
  }
  return util.varintBufferDecode(code)[0]
}

/**
 * Get the code of the prefixed data.
 * @param {Buffer} prefixedData
 * @returns {number}
 */
exports.getCode = (prefixedData) => {
  return varint.decode(prefixedData)
}

/**
 * Get the code as varint of a codec name.
 * @param {string} codecName
 * @returns {Buffer}
 */
exports.getCodeVarint = (codecName) => {
  const code = codecNameToCodeVarint[codecName]
  if (code === undefined) {
    throw new Error('Codec `' + codecName + '` not found')
  }
  return code
}

/**
 * Get the varint of a code.
 * @param {Number} code
 * @returns {Array.<number>}
 */
exports.getVarint = (code) => {
  return varint.encode(code)
}

// Make the constants top-level constants
const constants = __webpack_require__(58353)
Object.assign(exports, constants)

// Human friendly names for printing, e.g. in error messages
exports.print = __webpack_require__(36100)


/***/ }),

/***/ 13503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const baseTable = __webpack_require__(5662)

// map for hexString -> codecName
const nameTable = new Map()

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  nameTable.set(code, encodingName)
}

module.exports = Object.freeze(nameTable)


/***/ }),

/***/ 36100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const table = __webpack_require__(5662)

// map for code -> print friendly name
const tableByCode = {}

for (const [name, code] of Object.entries(table)) {
  if (tableByCode[code] === undefined) tableByCode[code] = name
}

module.exports = Object.freeze(tableByCode)


/***/ }),

/***/ 30709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

const varint = __webpack_require__(29364)

module.exports = {
  numberToBuffer,
  bufferToNumber,
  varintBufferEncode,
  varintBufferDecode,
  varintEncode
}

function bufferToNumber (buf) {
  return parseInt(buf.toString('hex'), 16)
}

function numberToBuffer (num) {
  let hexString = num.toString(16)
  if (hexString.length % 2 === 1) {
    hexString = '0' + hexString
  }
  return Buffer.from(hexString, 'hex')
}

function varintBufferEncode (input) {
  return Buffer.from(varint.encode(bufferToNumber(input)))
}

function varintBufferDecode (input) {
  return numberToBuffer(varint.decode(input))
}

function varintEncode (num) {
  return Buffer.from(varint.encode(num))
}


/***/ }),

/***/ 44617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const baseTable = __webpack_require__(5662)
const varintEncode = (__webpack_require__(30709).varintEncode)

// map for codecName -> codeVarintBuffer
const varintTable = {}

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  varintTable[encodingName] = varintEncode(code)
}

module.exports = Object.freeze(varintTable)


/***/ }),

/***/ 99901:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const table = __webpack_require__(64297)

// map for codecConstant -> code
const constants = {}

for (const [name, code] of Object.entries(table)) {
  constants[name.toUpperCase().replace(/-/g, '_')] = code
}

module.exports = Object.freeze(constants)


/***/ }),

/***/ 55313:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Implementation of the multicodec specification.
 *
 * @module multicodec
 * @example
 * const multicodec = require('multicodec')
 *
 * const prefixedProtobuf = multicodec.addPrefix('protobuf', protobufBuffer)
 * // prefixedProtobuf 0x50...
 *
 */


const { Buffer } = __webpack_require__(57861)
const varint = __webpack_require__(29364)
const intTable = __webpack_require__(42123)
const codecNameToCodeVarint = __webpack_require__(22590)
const util = __webpack_require__(41013)

exports = module.exports

/**
 * Prefix a buffer with a multicodec-packed.
 *
 * @param {string|number} multicodecStrOrCode
 * @param {Buffer} data
 * @returns {Buffer}
 */
exports.addPrefix = (multicodecStrOrCode, data) => {
  let prefix

  if (Buffer.isBuffer(multicodecStrOrCode)) {
    prefix = util.varintBufferEncode(multicodecStrOrCode)
  } else {
    if (codecNameToCodeVarint[multicodecStrOrCode]) {
      prefix = codecNameToCodeVarint[multicodecStrOrCode]
    } else {
      throw new Error('multicodec not recognized')
    }
  }
  return Buffer.concat([prefix, data])
}

/**
 * Decapsulate the multicodec-packed prefix from the data.
 *
 * @param {Buffer} data
 * @returns {Buffer}
 */
exports.rmPrefix = (data) => {
  varint.decode(data)
  return data.slice(varint.decode.bytes)
}

/**
 * Get the codec of the prefixed data.
 * @param {Buffer} prefixedData
 * @returns {string}
 */
exports.getCodec = (prefixedData) => {
  const code = varint.decode(prefixedData)
  const codecName = intTable.get(code)
  if (codecName === undefined) {
    throw new Error(`Code ${code} not found`)
  }
  return codecName
}

/**
 * Get the name of the codec.
 * @param {number} codec
 * @returns {string}
 */
exports.getName = (codec) => {
  return intTable.get(codec)
}

/**
 * Get the code of the codec
 * @param {string} name
 * @returns {number}
 */
exports.getNumber = (name) => {
  const code = codecNameToCodeVarint[name]
  if (code === undefined) {
    throw new Error('Codec `' + name + '` not found')
  }
  return util.varintBufferDecode(code)[0]
}

/**
 * Get the code of the prefixed data.
 * @param {Buffer} prefixedData
 * @returns {number}
 */
exports.getCode = (prefixedData) => {
  return varint.decode(prefixedData)
}

/**
 * Get the code as varint of a codec name.
 * @param {string} codecName
 * @returns {Buffer}
 */
exports.getCodeVarint = (codecName) => {
  const code = codecNameToCodeVarint[codecName]
  if (code === undefined) {
    throw new Error('Codec `' + codecName + '` not found')
  }
  return code
}

/**
 * Get the varint of a code.
 * @param {Number} code
 * @returns {Array.<number>}
 */
exports.getVarint = (code) => {
  return varint.encode(code)
}

// Make the constants top-level constants
const constants = __webpack_require__(99901)
Object.assign(exports, constants)

// Human friendly names for printing, e.g. in error messages
exports.print = __webpack_require__(27217)


/***/ }),

/***/ 42123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const baseTable = __webpack_require__(64297)

// map for hexString -> codecName
const nameTable = new Map()

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  nameTable.set(code, encodingName)
}

module.exports = Object.freeze(nameTable)


/***/ }),

/***/ 27217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const table = __webpack_require__(64297)

// map for code -> print friendly name
const tableByCode = {}

for (const [name, code] of Object.entries(table)) {
  if (tableByCode[code] === undefined) tableByCode[code] = name
}

module.exports = Object.freeze(tableByCode)


/***/ }),

/***/ 41013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const varint = __webpack_require__(29364)
const { Buffer } = __webpack_require__(57861)

module.exports = {
  numberToBuffer,
  bufferToNumber,
  varintBufferEncode,
  varintBufferDecode,
  varintEncode
}

function bufferToNumber (buf) {
  return parseInt(buf.toString('hex'), 16)
}

function numberToBuffer (num) {
  let hexString = num.toString(16)
  if (hexString.length % 2 === 1) {
    hexString = '0' + hexString
  }
  return Buffer.from(hexString, 'hex')
}

function varintBufferEncode (input) {
  return Buffer.from(varint.encode(bufferToNumber(input)))
}

function varintBufferDecode (input) {
  return numberToBuffer(varint.decode(input))
}

function varintEncode (num) {
  return Buffer.from(varint.encode(num))
}


/***/ }),

/***/ 22590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const baseTable = __webpack_require__(64297)
const varintEncode = (__webpack_require__(41013).varintEncode)

// map for codecName -> codeVarintBuffer
const varintTable = {}

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  varintTable[encodingName] = varintEncode(code)
}

module.exports = Object.freeze(varintTable)


/***/ }),

/***/ 54645:
/***/ ((module) => {

// DO NOT CHANGE THIS FILE. IT IS GENERATED BY tools/update-table.js
/* eslint quote-props: off */


/**
 * @type {import('./generated-types').NameCodeMap}
 */
const baseTable = Object.freeze({
  'identity': 0x00,
  'cidv1': 0x01,
  'cidv2': 0x02,
  'cidv3': 0x03,
  'ip4': 0x04,
  'tcp': 0x06,
  'sha1': 0x11,
  'sha2-256': 0x12,
  'sha2-512': 0x13,
  'sha3-512': 0x14,
  'sha3-384': 0x15,
  'sha3-256': 0x16,
  'sha3-224': 0x17,
  'shake-128': 0x18,
  'shake-256': 0x19,
  'keccak-224': 0x1a,
  'keccak-256': 0x1b,
  'keccak-384': 0x1c,
  'keccak-512': 0x1d,
  'blake3': 0x1e,
  'dccp': 0x21,
  'murmur3-128': 0x22,
  'murmur3-32': 0x23,
  'ip6': 0x29,
  'ip6zone': 0x2a,
  'path': 0x2f,
  'multicodec': 0x30,
  'multihash': 0x31,
  'multiaddr': 0x32,
  'multibase': 0x33,
  'dns': 0x35,
  'dns4': 0x36,
  'dns6': 0x37,
  'dnsaddr': 0x38,
  'protobuf': 0x50,
  'cbor': 0x51,
  'raw': 0x55,
  'dbl-sha2-256': 0x56,
  'rlp': 0x60,
  'bencode': 0x63,
  'dag-pb': 0x70,
  'dag-cbor': 0x71,
  'libp2p-key': 0x72,
  'git-raw': 0x78,
  'torrent-info': 0x7b,
  'torrent-file': 0x7c,
  'leofcoin-block': 0x81,
  'leofcoin-tx': 0x82,
  'leofcoin-pr': 0x83,
  'sctp': 0x84,
  'dag-jose': 0x85,
  'dag-cose': 0x86,
  'eth-block': 0x90,
  'eth-block-list': 0x91,
  'eth-tx-trie': 0x92,
  'eth-tx': 0x93,
  'eth-tx-receipt-trie': 0x94,
  'eth-tx-receipt': 0x95,
  'eth-state-trie': 0x96,
  'eth-account-snapshot': 0x97,
  'eth-storage-trie': 0x98,
  'eth-receipt-log-trie': 0x99,
  'eth-reciept-log': 0x9a,
  'bitcoin-block': 0xb0,
  'bitcoin-tx': 0xb1,
  'bitcoin-witness-commitment': 0xb2,
  'zcash-block': 0xc0,
  'zcash-tx': 0xc1,
  'caip-50': 0xca,
  'streamid': 0xce,
  'stellar-block': 0xd0,
  'stellar-tx': 0xd1,
  'md4': 0xd4,
  'md5': 0xd5,
  'bmt': 0xd6,
  'decred-block': 0xe0,
  'decred-tx': 0xe1,
  'ipld-ns': 0xe2,
  'ipfs-ns': 0xe3,
  'swarm-ns': 0xe4,
  'ipns-ns': 0xe5,
  'zeronet': 0xe6,
  'secp256k1-pub': 0xe7,
  'bls12_381-g1-pub': 0xea,
  'bls12_381-g2-pub': 0xeb,
  'x25519-pub': 0xec,
  'ed25519-pub': 0xed,
  'bls12_381-g1g2-pub': 0xee,
  'dash-block': 0xf0,
  'dash-tx': 0xf1,
  'swarm-manifest': 0xfa,
  'swarm-feed': 0xfb,
  'udp': 0x0111,
  'p2p-webrtc-star': 0x0113,
  'p2p-webrtc-direct': 0x0114,
  'p2p-stardust': 0x0115,
  'p2p-circuit': 0x0122,
  'dag-json': 0x0129,
  'udt': 0x012d,
  'utp': 0x012e,
  'unix': 0x0190,
  'thread': 0x0196,
  'p2p': 0x01a5,
  'ipfs': 0x01a5,
  'https': 0x01bb,
  'onion': 0x01bc,
  'onion3': 0x01bd,
  'garlic64': 0x01be,
  'garlic32': 0x01bf,
  'tls': 0x01c0,
  'noise': 0x01c6,
  'quic': 0x01cc,
  'ws': 0x01dd,
  'wss': 0x01de,
  'p2p-websocket-star': 0x01df,
  'http': 0x01e0,
  'swhid-1-snp': 0x01f0,
  'json': 0x0200,
  'messagepack': 0x0201,
  'libp2p-peer-record': 0x0301,
  'libp2p-relay-rsvp': 0x0302,
  'car-index-sorted': 0x0400,
  'sha2-256-trunc254-padded': 0x1012,
  'ripemd-128': 0x1052,
  'ripemd-160': 0x1053,
  'ripemd-256': 0x1054,
  'ripemd-320': 0x1055,
  'x11': 0x1100,
  'p256-pub': 0x1200,
  'p384-pub': 0x1201,
  'p521-pub': 0x1202,
  'ed448-pub': 0x1203,
  'x448-pub': 0x1204,
  'ed25519-priv': 0x1300,
  'secp256k1-priv': 0x1301,
  'x25519-priv': 0x1302,
  'kangarootwelve': 0x1d01,
  'sm3-256': 0x534d,
  'blake2b-8': 0xb201,
  'blake2b-16': 0xb202,
  'blake2b-24': 0xb203,
  'blake2b-32': 0xb204,
  'blake2b-40': 0xb205,
  'blake2b-48': 0xb206,
  'blake2b-56': 0xb207,
  'blake2b-64': 0xb208,
  'blake2b-72': 0xb209,
  'blake2b-80': 0xb20a,
  'blake2b-88': 0xb20b,
  'blake2b-96': 0xb20c,
  'blake2b-104': 0xb20d,
  'blake2b-112': 0xb20e,
  'blake2b-120': 0xb20f,
  'blake2b-128': 0xb210,
  'blake2b-136': 0xb211,
  'blake2b-144': 0xb212,
  'blake2b-152': 0xb213,
  'blake2b-160': 0xb214,
  'blake2b-168': 0xb215,
  'blake2b-176': 0xb216,
  'blake2b-184': 0xb217,
  'blake2b-192': 0xb218,
  'blake2b-200': 0xb219,
  'blake2b-208': 0xb21a,
  'blake2b-216': 0xb21b,
  'blake2b-224': 0xb21c,
  'blake2b-232': 0xb21d,
  'blake2b-240': 0xb21e,
  'blake2b-248': 0xb21f,
  'blake2b-256': 0xb220,
  'blake2b-264': 0xb221,
  'blake2b-272': 0xb222,
  'blake2b-280': 0xb223,
  'blake2b-288': 0xb224,
  'blake2b-296': 0xb225,
  'blake2b-304': 0xb226,
  'blake2b-312': 0xb227,
  'blake2b-320': 0xb228,
  'blake2b-328': 0xb229,
  'blake2b-336': 0xb22a,
  'blake2b-344': 0xb22b,
  'blake2b-352': 0xb22c,
  'blake2b-360': 0xb22d,
  'blake2b-368': 0xb22e,
  'blake2b-376': 0xb22f,
  'blake2b-384': 0xb230,
  'blake2b-392': 0xb231,
  'blake2b-400': 0xb232,
  'blake2b-408': 0xb233,
  'blake2b-416': 0xb234,
  'blake2b-424': 0xb235,
  'blake2b-432': 0xb236,
  'blake2b-440': 0xb237,
  'blake2b-448': 0xb238,
  'blake2b-456': 0xb239,
  'blake2b-464': 0xb23a,
  'blake2b-472': 0xb23b,
  'blake2b-480': 0xb23c,
  'blake2b-488': 0xb23d,
  'blake2b-496': 0xb23e,
  'blake2b-504': 0xb23f,
  'blake2b-512': 0xb240,
  'blake2s-8': 0xb241,
  'blake2s-16': 0xb242,
  'blake2s-24': 0xb243,
  'blake2s-32': 0xb244,
  'blake2s-40': 0xb245,
  'blake2s-48': 0xb246,
  'blake2s-56': 0xb247,
  'blake2s-64': 0xb248,
  'blake2s-72': 0xb249,
  'blake2s-80': 0xb24a,
  'blake2s-88': 0xb24b,
  'blake2s-96': 0xb24c,
  'blake2s-104': 0xb24d,
  'blake2s-112': 0xb24e,
  'blake2s-120': 0xb24f,
  'blake2s-128': 0xb250,
  'blake2s-136': 0xb251,
  'blake2s-144': 0xb252,
  'blake2s-152': 0xb253,
  'blake2s-160': 0xb254,
  'blake2s-168': 0xb255,
  'blake2s-176': 0xb256,
  'blake2s-184': 0xb257,
  'blake2s-192': 0xb258,
  'blake2s-200': 0xb259,
  'blake2s-208': 0xb25a,
  'blake2s-216': 0xb25b,
  'blake2s-224': 0xb25c,
  'blake2s-232': 0xb25d,
  'blake2s-240': 0xb25e,
  'blake2s-248': 0xb25f,
  'blake2s-256': 0xb260,
  'skein256-8': 0xb301,
  'skein256-16': 0xb302,
  'skein256-24': 0xb303,
  'skein256-32': 0xb304,
  'skein256-40': 0xb305,
  'skein256-48': 0xb306,
  'skein256-56': 0xb307,
  'skein256-64': 0xb308,
  'skein256-72': 0xb309,
  'skein256-80': 0xb30a,
  'skein256-88': 0xb30b,
  'skein256-96': 0xb30c,
  'skein256-104': 0xb30d,
  'skein256-112': 0xb30e,
  'skein256-120': 0xb30f,
  'skein256-128': 0xb310,
  'skein256-136': 0xb311,
  'skein256-144': 0xb312,
  'skein256-152': 0xb313,
  'skein256-160': 0xb314,
  'skein256-168': 0xb315,
  'skein256-176': 0xb316,
  'skein256-184': 0xb317,
  'skein256-192': 0xb318,
  'skein256-200': 0xb319,
  'skein256-208': 0xb31a,
  'skein256-216': 0xb31b,
  'skein256-224': 0xb31c,
  'skein256-232': 0xb31d,
  'skein256-240': 0xb31e,
  'skein256-248': 0xb31f,
  'skein256-256': 0xb320,
  'skein512-8': 0xb321,
  'skein512-16': 0xb322,
  'skein512-24': 0xb323,
  'skein512-32': 0xb324,
  'skein512-40': 0xb325,
  'skein512-48': 0xb326,
  'skein512-56': 0xb327,
  'skein512-64': 0xb328,
  'skein512-72': 0xb329,
  'skein512-80': 0xb32a,
  'skein512-88': 0xb32b,
  'skein512-96': 0xb32c,
  'skein512-104': 0xb32d,
  'skein512-112': 0xb32e,
  'skein512-120': 0xb32f,
  'skein512-128': 0xb330,
  'skein512-136': 0xb331,
  'skein512-144': 0xb332,
  'skein512-152': 0xb333,
  'skein512-160': 0xb334,
  'skein512-168': 0xb335,
  'skein512-176': 0xb336,
  'skein512-184': 0xb337,
  'skein512-192': 0xb338,
  'skein512-200': 0xb339,
  'skein512-208': 0xb33a,
  'skein512-216': 0xb33b,
  'skein512-224': 0xb33c,
  'skein512-232': 0xb33d,
  'skein512-240': 0xb33e,
  'skein512-248': 0xb33f,
  'skein512-256': 0xb340,
  'skein512-264': 0xb341,
  'skein512-272': 0xb342,
  'skein512-280': 0xb343,
  'skein512-288': 0xb344,
  'skein512-296': 0xb345,
  'skein512-304': 0xb346,
  'skein512-312': 0xb347,
  'skein512-320': 0xb348,
  'skein512-328': 0xb349,
  'skein512-336': 0xb34a,
  'skein512-344': 0xb34b,
  'skein512-352': 0xb34c,
  'skein512-360': 0xb34d,
  'skein512-368': 0xb34e,
  'skein512-376': 0xb34f,
  'skein512-384': 0xb350,
  'skein512-392': 0xb351,
  'skein512-400': 0xb352,
  'skein512-408': 0xb353,
  'skein512-416': 0xb354,
  'skein512-424': 0xb355,
  'skein512-432': 0xb356,
  'skein512-440': 0xb357,
  'skein512-448': 0xb358,
  'skein512-456': 0xb359,
  'skein512-464': 0xb35a,
  'skein512-472': 0xb35b,
  'skein512-480': 0xb35c,
  'skein512-488': 0xb35d,
  'skein512-496': 0xb35e,
  'skein512-504': 0xb35f,
  'skein512-512': 0xb360,
  'skein1024-8': 0xb361,
  'skein1024-16': 0xb362,
  'skein1024-24': 0xb363,
  'skein1024-32': 0xb364,
  'skein1024-40': 0xb365,
  'skein1024-48': 0xb366,
  'skein1024-56': 0xb367,
  'skein1024-64': 0xb368,
  'skein1024-72': 0xb369,
  'skein1024-80': 0xb36a,
  'skein1024-88': 0xb36b,
  'skein1024-96': 0xb36c,
  'skein1024-104': 0xb36d,
  'skein1024-112': 0xb36e,
  'skein1024-120': 0xb36f,
  'skein1024-128': 0xb370,
  'skein1024-136': 0xb371,
  'skein1024-144': 0xb372,
  'skein1024-152': 0xb373,
  'skein1024-160': 0xb374,
  'skein1024-168': 0xb375,
  'skein1024-176': 0xb376,
  'skein1024-184': 0xb377,
  'skein1024-192': 0xb378,
  'skein1024-200': 0xb379,
  'skein1024-208': 0xb37a,
  'skein1024-216': 0xb37b,
  'skein1024-224': 0xb37c,
  'skein1024-232': 0xb37d,
  'skein1024-240': 0xb37e,
  'skein1024-248': 0xb37f,
  'skein1024-256': 0xb380,
  'skein1024-264': 0xb381,
  'skein1024-272': 0xb382,
  'skein1024-280': 0xb383,
  'skein1024-288': 0xb384,
  'skein1024-296': 0xb385,
  'skein1024-304': 0xb386,
  'skein1024-312': 0xb387,
  'skein1024-320': 0xb388,
  'skein1024-328': 0xb389,
  'skein1024-336': 0xb38a,
  'skein1024-344': 0xb38b,
  'skein1024-352': 0xb38c,
  'skein1024-360': 0xb38d,
  'skein1024-368': 0xb38e,
  'skein1024-376': 0xb38f,
  'skein1024-384': 0xb390,
  'skein1024-392': 0xb391,
  'skein1024-400': 0xb392,
  'skein1024-408': 0xb393,
  'skein1024-416': 0xb394,
  'skein1024-424': 0xb395,
  'skein1024-432': 0xb396,
  'skein1024-440': 0xb397,
  'skein1024-448': 0xb398,
  'skein1024-456': 0xb399,
  'skein1024-464': 0xb39a,
  'skein1024-472': 0xb39b,
  'skein1024-480': 0xb39c,
  'skein1024-488': 0xb39d,
  'skein1024-496': 0xb39e,
  'skein1024-504': 0xb39f,
  'skein1024-512': 0xb3a0,
  'skein1024-520': 0xb3a1,
  'skein1024-528': 0xb3a2,
  'skein1024-536': 0xb3a3,
  'skein1024-544': 0xb3a4,
  'skein1024-552': 0xb3a5,
  'skein1024-560': 0xb3a6,
  'skein1024-568': 0xb3a7,
  'skein1024-576': 0xb3a8,
  'skein1024-584': 0xb3a9,
  'skein1024-592': 0xb3aa,
  'skein1024-600': 0xb3ab,
  'skein1024-608': 0xb3ac,
  'skein1024-616': 0xb3ad,
  'skein1024-624': 0xb3ae,
  'skein1024-632': 0xb3af,
  'skein1024-640': 0xb3b0,
  'skein1024-648': 0xb3b1,
  'skein1024-656': 0xb3b2,
  'skein1024-664': 0xb3b3,
  'skein1024-672': 0xb3b4,
  'skein1024-680': 0xb3b5,
  'skein1024-688': 0xb3b6,
  'skein1024-696': 0xb3b7,
  'skein1024-704': 0xb3b8,
  'skein1024-712': 0xb3b9,
  'skein1024-720': 0xb3ba,
  'skein1024-728': 0xb3bb,
  'skein1024-736': 0xb3bc,
  'skein1024-744': 0xb3bd,
  'skein1024-752': 0xb3be,
  'skein1024-760': 0xb3bf,
  'skein1024-768': 0xb3c0,
  'skein1024-776': 0xb3c1,
  'skein1024-784': 0xb3c2,
  'skein1024-792': 0xb3c3,
  'skein1024-800': 0xb3c4,
  'skein1024-808': 0xb3c5,
  'skein1024-816': 0xb3c6,
  'skein1024-824': 0xb3c7,
  'skein1024-832': 0xb3c8,
  'skein1024-840': 0xb3c9,
  'skein1024-848': 0xb3ca,
  'skein1024-856': 0xb3cb,
  'skein1024-864': 0xb3cc,
  'skein1024-872': 0xb3cd,
  'skein1024-880': 0xb3ce,
  'skein1024-888': 0xb3cf,
  'skein1024-896': 0xb3d0,
  'skein1024-904': 0xb3d1,
  'skein1024-912': 0xb3d2,
  'skein1024-920': 0xb3d3,
  'skein1024-928': 0xb3d4,
  'skein1024-936': 0xb3d5,
  'skein1024-944': 0xb3d6,
  'skein1024-952': 0xb3d7,
  'skein1024-960': 0xb3d8,
  'skein1024-968': 0xb3d9,
  'skein1024-976': 0xb3da,
  'skein1024-984': 0xb3db,
  'skein1024-992': 0xb3dc,
  'skein1024-1000': 0xb3dd,
  'skein1024-1008': 0xb3de,
  'skein1024-1016': 0xb3df,
  'skein1024-1024': 0xb3e0,
  'poseidon-bls12_381-a2-fc1': 0xb401,
  'poseidon-bls12_381-a2-fc1-sc': 0xb402,
  'zeroxcert-imprint-256': 0xce11,
  'fil-commitment-unsealed': 0xf101,
  'fil-commitment-sealed': 0xf102,
  'holochain-adr-v0': 0x807124,
  'holochain-adr-v1': 0x817124,
  'holochain-key-v0': 0x947124,
  'holochain-key-v1': 0x957124,
  'holochain-sig-v0': 0xa27124,
  'holochain-sig-v1': 0xa37124,
  'skynet-ns': 0xb19910,
  'arweave-ns': 0xb29910
})

module.exports = { baseTable }


/***/ }),

/***/ 83214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Implementation of the multicodec specification.
 *
 * @module multicodec
 * @example
 * const multicodec = require('multicodec')
 *
 * const prefixedProtobuf = multicodec.addPrefix('protobuf', protobufBuffer)
 * // prefixedProtobuf 0x50...
 *
 */


/** @typedef {import('./generated-types').CodecName} CodecName */
/** @typedef {import('./generated-types').CodecCode} CodecCode */

const varint = __webpack_require__(80233)
const { concat: uint8ArrayConcat } = __webpack_require__(84871)
const util = __webpack_require__(33234)
const { nameToVarint, constantToCode, nameToCode, codeToName } = __webpack_require__(68009)

/**
 * Prefix a buffer with a multicodec-packed.
 *
 * @param {CodecName|Uint8Array} multicodecStrOrCode
 * @param {Uint8Array} data
 * @returns {Uint8Array}
 */
function addPrefix (multicodecStrOrCode, data) {
  let prefix

  if (multicodecStrOrCode instanceof Uint8Array) {
    prefix = util.varintUint8ArrayEncode(multicodecStrOrCode)
  } else {
    if (nameToVarint[multicodecStrOrCode]) {
      prefix = nameToVarint[multicodecStrOrCode]
    } else {
      throw new Error('multicodec not recognized')
    }
  }

  return uint8ArrayConcat([prefix, data], prefix.length + data.length)
}

/**
 * Decapsulate the multicodec-packed prefix from the data.
 *
 * @param {Uint8Array} data
 * @returns {Uint8Array}
 */
function rmPrefix (data) {
  varint.decode(/** @type {Buffer} */(data))
  return data.slice(varint.decode.bytes)
}

/**
 * Get the codec name of the prefixed data.
 *
 * @param {Uint8Array} prefixedData
 * @returns {CodecName}
 */
function getNameFromData (prefixedData) {
  const code = /** @type {CodecCode} */(varint.decode(/** @type {Buffer} */(prefixedData)))
  const name = codeToName[code]
  if (name === undefined) {
    throw new Error(`Code "${code}" not found`)
  }
  return name
}

/**
 * Get the codec name from a code.
 *
 * @param {CodecCode} codec
 * @returns {CodecName}
 */
function getNameFromCode (codec) {
  return codeToName[codec]
}

/**
 * Get the code of the codec
 *
 * @param {CodecName} name
 * @returns {CodecCode}
 */
function getCodeFromName (name) {
  const code = nameToCode[name]
  if (code === undefined) {
    throw new Error(`Codec "${name}" not found`)
  }
  return code
}

/**
 * Get the code of the prefixed data.
 *
 * @param {Uint8Array} prefixedData
 * @returns {CodecCode}
 */
function getCodeFromData (prefixedData) {
  return /** @type {CodecCode} */(varint.decode(/** @type {Buffer} */(prefixedData)))
}

/**
 * Get the code as varint of a codec name.
 *
 * @param {CodecName} name
 * @returns {Uint8Array}
 */
function getVarintFromName (name) {
  const code = nameToVarint[name]
  if (code === undefined) {
    throw new Error(`Codec "${name}" not found`)
  }
  return code
}

/**
 * Get the varint of a code.
 *
 * @param {CodecCode} code
 * @returns {Uint8Array}
 */
function getVarintFromCode (code) {
  return util.varintEncode(code)
}

/**
 * Get the codec name of the prefixed data.
 *
 * @deprecated use getNameFromData instead.
 * @param {Uint8Array} prefixedData
 * @returns {CodecName}
 */
function getCodec (prefixedData) {
  return getNameFromData(prefixedData)
}

/**
 * Get the codec name from a code.
 *
 * @deprecated use getNameFromCode instead.
 * @param {CodecCode} codec
 * @returns {CodecName}
 */
function getName (codec) {
  return getNameFromCode(codec)
}

/**
 * Get the code of the codec
 *
 * @deprecated use getCodeFromName instead.
 * @param {CodecName} name
 * @returns {CodecCode}
 */
function getNumber (name) {
  return getCodeFromName(name)
}

/**
 * Get the code of the prefixed data.
 *
 * @deprecated use getCodeFromData instead.
 * @param {Uint8Array} prefixedData
 * @returns {CodecCode}
 */
function getCode (prefixedData) {
  return getCodeFromData(prefixedData)
}

/**
 * Get the code as varint of a codec name.
 *
 * @deprecated use getVarintFromName instead.
 * @param {CodecName} name
 * @returns {Uint8Array}
 */
function getCodeVarint (name) {
  return getVarintFromName(name)
}

/**
 * Get the varint of a code.
 *
 * @deprecated use getVarintFromCode instead.
 * @param {CodecCode} code
 * @returns {Array.<number>}
 */
function getVarint (code) {
  return Array.from(getVarintFromCode(code))
}

module.exports = {
  addPrefix,
  rmPrefix,
  getNameFromData,
  getNameFromCode,
  getCodeFromName,
  getCodeFromData,
  getVarintFromName,
  getVarintFromCode,
  // Deprecated
  getCodec,
  getName,
  getNumber,
  getCode,
  getCodeVarint,
  getVarint,
  // Make the constants top-level constants
  ...constantToCode,
  // Export the maps
  nameToVarint,
  nameToCode,
  codeToName
}


/***/ }),

/***/ 68009:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/** @typedef {import('./generated-types').ConstantCodeMap} ConstantCodeMap */
/** @typedef {import('./generated-types').NameUint8ArrayMap} NameUint8ArrayMap */
/** @typedef {import('./generated-types').CodeNameMap} CodeNameMap */
/** @typedef {import('./generated-types').CodecName} CodecName */
/** @typedef {import('./generated-types').CodecConstant} CodecConstant */

const { baseTable } = __webpack_require__(54645)
const varintEncode = (__webpack_require__(33234).varintEncode)

const nameToVarint = /** @type {NameUint8ArrayMap} */ ({})
const constantToCode = /** @type {ConstantCodeMap} */({})
const codeToName = /** @type {CodeNameMap} */({})

// eslint-disable-next-line guard-for-in
for (const name in baseTable) {
  const codecName = /** @type {CodecName} */(name)
  const code = baseTable[codecName]
  nameToVarint[codecName] = varintEncode(code)

  const constant = /** @type {CodecConstant} */(codecName.toUpperCase().replace(/-/g, '_'))
  constantToCode[constant] = code

  if (!codeToName[code]) {
    codeToName[code] = codecName
  }
}

Object.freeze(nameToVarint)
Object.freeze(constantToCode)
Object.freeze(codeToName)
const nameToCode = Object.freeze(baseTable)
module.exports = {
  nameToVarint,
  constantToCode,
  nameToCode,
  codeToName
}


/***/ }),

/***/ 33234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const varint = __webpack_require__(80233)
const { toString: uint8ArrayToString } = __webpack_require__(90453)
const { fromString: uint8ArrayFromString } = __webpack_require__(31216)

module.exports = {
  numberToUint8Array,
  uint8ArrayToNumber,
  varintUint8ArrayEncode,
  varintEncode
}

/**
 * @param {Uint8Array} buf
 */
function uint8ArrayToNumber (buf) {
  return parseInt(uint8ArrayToString(buf, 'base16'), 16)
}

/**
 * @param {number} num
 */
function numberToUint8Array (num) {
  let hexString = num.toString(16)
  if (hexString.length % 2 === 1) {
    hexString = '0' + hexString
  }
  return uint8ArrayFromString(hexString, 'base16')
}

/**
 * @param {Uint8Array} input
 */
function varintUint8ArrayEncode (input) {
  return Uint8Array.from(varint.encode(uint8ArrayToNumber(input)))
}

/**
 * @param {number} num
 */
function varintEncode (num) {
  return Uint8Array.from(varint.encode(num))
}


/***/ }),

/***/ 5662:
/***/ ((module) => {

module.exports = JSON.parse('{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"x11":4352,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}');

/***/ }),

/***/ 64297:
/***/ ((module) => {

module.exports = JSON.parse('{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"blake3":30,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"dag-jose":133,"dag-cose":134,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"bitcoin-witness-commitment":178,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"secp256k1-pub":231,"bls12_381-g1-pub":234,"bls12_381-g2-pub":235,"x25519-pub":236,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"libp2p-peer-record":769,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,"x11":4352,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082,"zeroxcert-imprint-256":52753,"fil-commitment-unsealed":61697,"fil-commitment-sealed":61698,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}');

/***/ })

}]);