"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3708],{

/***/ 78077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const convert = __webpack_require__(35849)
const protocols = __webpack_require__(16483)
const varint = __webpack_require__(80233)
const { concat: uint8ArrayConcat } = __webpack_require__(84871)
const { toString: uint8ArrayToString } = __webpack_require__(90453)

// export codec
module.exports = {
  stringToStringTuples,
  stringTuplesToString,

  tuplesToStringTuples,
  stringTuplesToTuples,

  bytesToTuples,
  tuplesToBytes,

  bytesToString,
  stringToBytes,

  fromString,
  fromBytes,
  validateBytes,
  isValidBytes,
  cleanPath,

  ParseError,
  protoFromTuple,

  sizeForAddr
}

// string -> [[str name, str addr]... ]
/**
 * @param {string} str
 */
function stringToStringTuples (str) {
  const tuples = []
  const parts = str.split('/').slice(1) // skip first empty elem
  if (parts.length === 1 && parts[0] === '') {
    return []
  }

  for (let p = 0; p < parts.length; p++) {
    const part = parts[p]
    const proto = protocols(part)

    if (proto.size === 0) {
      tuples.push([part])
      continue
    }

    p++ // advance addr part
    if (p >= parts.length) {
      throw ParseError('invalid address: ' + str)
    }

    // if it's a path proto, take the rest
    if (proto.path) {
      tuples.push([
        part,
        // TODO: should we need to check each path part to see if it's a proto?
        // This would allow for other protocols to be added after a unix path,
        // however it would have issues if the path had a protocol name in the path
        cleanPath(parts.slice(p).join('/'))
      ])
      break
    }

    tuples.push([part, parts[p]])
  }

  return tuples
}

// [[str name, str addr]... ] -> string
/**
 * @param {[number, string?][]} tuples
 */
function stringTuplesToString (tuples) {
  /** @type {Array<string | undefined>} */
  const parts = []
  tuples.map((tup) => {
    const proto = protoFromTuple(tup)
    parts.push(proto.name)
    if (tup.length > 1) {
      parts.push(tup[1])
    }
    return null
  })

  return cleanPath(parts.join('/'))
}

// [[str name, str addr]... ] -> [[int code, Uint8Array]... ]
/**
 * @param {Array<string[] | string >} tuples
 * @returns {[number , Uint8Array?][]}
 */
function stringTuplesToTuples (tuples) {
  return tuples.map((tup) => {
    if (!Array.isArray(tup)) {
      tup = [tup]
    }
    const proto = protoFromTuple(tup)
    if (tup.length > 1) {
      return [proto.code, convert.toBytes(proto.code, tup[1])]
    }
    return [proto.code]
  })
}

/**
 * Convert tuples to string tuples
 *
 * [[int code, Uint8Array]... ] -> [[int code, str addr]... ]
 *
 * @param {Array<[number, Uint8Array?]>} tuples
 * @returns {Array<[number, string?]>}
 */

function tuplesToStringTuples (tuples) {
  return tuples.map(tup => {
    const proto = protoFromTuple(tup)
    if (tup[1]) {
      return [proto.code, convert.toString(proto.code, tup[1])]
    }
    return [proto.code]
  })
}

// [[int code, Uint8Array ]... ] -> Uint8Array
/**
 * @param {[number, Uint8Array?][]} tuples
 */
function tuplesToBytes (tuples) {
  return fromBytes(uint8ArrayConcat(tuples.map((/** @type {any[]} */ tup) => {
    const proto = protoFromTuple(tup)
    let buf = Uint8Array.from(varint.encode(proto.code))

    if (tup.length > 1) {
      buf = uint8ArrayConcat([buf, tup[1]]) // add address buffer
    }

    return buf
  })))
}

/**
 * @param {import("./types").Protocol} p
 * @param {Uint8Array | number[]} addr
 */
function sizeForAddr (p, addr) {
  if (p.size > 0) {
    return p.size / 8
  } else if (p.size === 0) {
    return 0
  } else {
    const size = varint.decode(addr)
    return size + varint.decode.bytes
  }
}

/**
 *
 * @param {Uint8Array} buf
 * @returns {Array<[number, Uint8Array?]>}
 */
function bytesToTuples (buf) {
  /** @type {Array<[number, Uint8Array?]>} */
  const tuples = []
  let i = 0
  while (i < buf.length) {
    const code = varint.decode(buf, i)
    const n = varint.decode.bytes

    const p = protocols(code)

    const size = sizeForAddr(p, buf.slice(i + n))

    if (size === 0) {
      tuples.push([code])
      i += n
      continue
    }

    const addr = buf.slice(i + n, i + n + size)

    i += (size + n)

    if (i > buf.length) { // did not end _exactly_ at buffer.length
      throw ParseError('Invalid address Uint8Array: ' + uint8ArrayToString(buf, 'base16'))
    }

    // ok, tuple seems good.
    tuples.push([code, addr])
  }

  return tuples
}

// Uint8Array -> String
/**
 * @param {Uint8Array} buf
 */
function bytesToString (buf) {
  const a = bytesToTuples(buf)
  const b = tuplesToStringTuples(a)
  return stringTuplesToString(b)
}

// String -> Uint8Array
/**
 * @param {string} str
 */
function stringToBytes (str) {
  str = cleanPath(str)
  const a = stringToStringTuples(str)
  const b = stringTuplesToTuples(a)

  return tuplesToBytes(b)
}

// String -> Uint8Array
/**
 * @param {string} str
 */
function fromString (str) {
  return stringToBytes(str)
}

// Uint8Array -> Uint8Array
/**
 * @param {Uint8Array} buf
 */
function fromBytes (buf) {
  const err = validateBytes(buf)
  if (err) throw err
  return Uint8Array.from(buf) // copy
}

/**
 * @param {Uint8Array} buf
 */
function validateBytes (buf) {
  try {
    bytesToTuples(buf) // try to parse. will throw if breaks
  } catch (err) {
    return err
  }
}

/**
 * @param {Uint8Array} buf
 */
function isValidBytes (buf) {
  return validateBytes(buf) === undefined
}

/**
 * @param {string} str
 */
function cleanPath (str) {
  return '/' + str.trim().split('/').filter((/** @type {any} */ a) => a).join('/')
}

/**
 * @param {string} str
 */
function ParseError (str) {
  return new Error('Error parsing address: ' + str)
}

/**
 * @param {any[]} tup
 */
function protoFromTuple (tup) {
  const proto = protocols(tup[0])
  return proto
}


/***/ }),

/***/ 35849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const ip = __webpack_require__(12606)
const protocols = __webpack_require__(16483)
const { CID } = __webpack_require__(2758)
const { base32 } = __webpack_require__(18721)
const { base58btc } = __webpack_require__(19616)
const Digest = __webpack_require__(42640)
const varint = __webpack_require__(80233)
const { toString: uint8ArrayToString } = __webpack_require__(90453)
const { fromString: uint8ArrayFromString } = __webpack_require__(31216)
const { concat: uint8ArrayConcat } = __webpack_require__(84871)

module.exports = Convert

// converts (serializes) addresses
/**
 * @param {string} proto
 * @param {string | Uint8Array} a
 */
function Convert (proto, a) {
  if (a instanceof Uint8Array) {
    return Convert.toString(proto, a)
  } else {
    return Convert.toBytes(proto, a)
  }
}

/**
 * Convert [code,Uint8Array] to string
 *
 * @param {number|string} proto
 * @param {Uint8Array} buf
 * @returns {string}
 */
Convert.toString = function convertToString (proto, buf) {
  const protocol = protocols(proto)
  switch (protocol.code) {
    case 4: // ipv4
    case 41: // ipv6
      return bytes2ip(buf)

    case 6: // tcp
    case 273: // udp
    case 33: // dccp
    case 132: // sctp
      return bytes2port(buf).toString()

    case 53: // dns
    case 54: // dns4
    case 55: // dns6
    case 56: // dnsaddr
    case 400: // unix
    case 777: // memory
      return bytes2str(buf)

    case 421: // ipfs
      return bytes2mh(buf)
    case 444: // onion
      return bytes2onion(buf)
    case 445: // onion3
      return bytes2onion(buf)
    default:
      return uint8ArrayToString(buf, 'base16') // no clue. convert to hex
  }
}

Convert.toBytes = function convertToBytes (/** @type {string | number } */ proto, /** @type {string} */ str) {
  const protocol = protocols(proto)
  switch (protocol.code) {
    case 4: // ipv4
      return ip2bytes(str)
    case 41: // ipv6
      return ip2bytes(str)

    case 6: // tcp
    case 273: // udp
    case 33: // dccp
    case 132: // sctp
      return port2bytes(parseInt(str, 10))

    case 53: // dns
    case 54: // dns4
    case 55: // dns6
    case 56: // dnsaddr
    case 400: // unix
    case 777: // memory
      return str2bytes(str)

    case 421: // ipfs
      return mh2bytes(str)
    case 444: // onion
      return onion2bytes(str)
    case 445: // onion3
      return onion32bytes(str)
    default:
      return uint8ArrayFromString(str, 'base16') // no clue. convert from hex
  }
}

/**
 * @param {string} ipString
 */
function ip2bytes (ipString) {
  if (!ip.isIP(ipString)) {
    throw new Error('invalid ip address')
  }
  return ip.toBytes(ipString)
}

/**
 * @param {Uint8Array} ipBuff
 */
function bytes2ip (ipBuff) {
  const ipString = ip.toString(ipBuff)
  if (!ipString || !ip.isIP(ipString)) {
    throw new Error('invalid ip address')
  }
  return ipString
}

/**
 * @param {number} port
 */
function port2bytes (port) {
  const buf = new ArrayBuffer(2)
  const view = new DataView(buf)
  view.setUint16(0, port)

  return new Uint8Array(buf)
}

/**
 * @param {Uint8Array} buf
 */
function bytes2port (buf) {
  const view = new DataView(buf.buffer)
  return view.getUint16(buf.byteOffset)
}

/**
 * @param {string} str
 */
function str2bytes (str) {
  const buf = uint8ArrayFromString(str)
  const size = Uint8Array.from(varint.encode(buf.length))
  return uint8ArrayConcat([size, buf], size.length + buf.length)
}

/**
 * @param {Uint8Array} buf
 */
function bytes2str (buf) {
  const size = varint.decode(buf)
  buf = buf.slice(varint.decode.bytes)

  if (buf.length !== size) {
    throw new Error('inconsistent lengths')
  }

  return uint8ArrayToString(buf)
}

/**
 * @param {string} hash - base58btc string
 */
function mh2bytes (hash) {
  let mh

  if (hash[0] === 'Q' || hash[0] === '1') {
    mh = Digest.decode(base58btc.decode(`z${hash}`)).bytes
  } else {
    mh = CID.parse(hash).multihash.bytes
  }

  // the address is a varint prefixed multihash string representation
  const size = Uint8Array.from(varint.encode(mh.length))
  return uint8ArrayConcat([size, mh], size.length + mh.length)
}

/**
 * Converts bytes to bas58btc string
 *
 * @param {Uint8Array} buf
 * @returns {string} base58btc string
 */
function bytes2mh (buf) {
  const size = varint.decode(buf)
  const address = buf.slice(varint.decode.bytes)

  if (address.length !== size) {
    throw new Error('inconsistent lengths')
  }

  return uint8ArrayToString(address, 'base58btc')
}

/**
 * @param {string} str
 */
function onion2bytes (str) {
  const addr = str.split(':')
  if (addr.length !== 2) {
    throw new Error('failed to parse onion addr: ' + addr + ' does not contain a port number')
  }
  if (addr[0].length !== 16) {
    throw new Error('failed to parse onion addr: ' + addr[0] + ' not a Tor onion address.')
  }

  // onion addresses do not include the multibase prefix, add it before decoding
  const buf = base32.decode('b' + addr[0])

  // onion port number
  const port = parseInt(addr[1], 10)
  if (port < 1 || port > 65536) {
    throw new Error('Port number is not in range(1, 65536)')
  }
  const portBuf = port2bytes(port)
  return uint8ArrayConcat([buf, portBuf], buf.length + portBuf.length)
}

/**
 * @param {string} str
 */
function onion32bytes (str) {
  const addr = str.split(':')
  if (addr.length !== 2) {
    throw new Error('failed to parse onion addr: ' + addr + ' does not contain a port number')
  }
  if (addr[0].length !== 56) {
    throw new Error('failed to parse onion addr: ' + addr[0] + ' not a Tor onion3 address.')
  }
  // onion addresses do not include the multibase prefix, add it before decoding
  const buf = base32.decode('b' + addr[0])

  // onion port number
  const port = parseInt(addr[1], 10)
  if (port < 1 || port > 65536) {
    throw new Error('Port number is not in range(1, 65536)')
  }
  const portBuf = port2bytes(port)
  return uint8ArrayConcat([buf, portBuf], buf.length + portBuf.length)
}

/**
 * @param {Uint8Array} buf
 */
function bytes2onion (buf) {
  const addrBytes = buf.slice(0, buf.length - 2)
  const portBytes = buf.slice(buf.length - 2)
  const addr = uint8ArrayToString(addrBytes, 'base32')
  const port = bytes2port(portBytes)
  return addr + ':' + port
}


/***/ }),

/***/ 13695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const codec = __webpack_require__(78077)
const protocols = __webpack_require__(16483)
const varint = __webpack_require__(80233)
const { CID } = __webpack_require__(2758)
const { base58btc } = __webpack_require__(19616)
const errCode = __webpack_require__(70963)
const inspect = Symbol.for('nodejs.util.inspect.custom')
const { toString: uint8ArrayToString } = __webpack_require__(90453)
const { equals: uint8ArrayEquals } = __webpack_require__(37488)

/**
 * @typedef {(addr: Multiaddr) => Promise<string[]>} Resolver
 * @typedef {string | Multiaddr | Uint8Array | null} MultiaddrInput
 * @typedef {import('./types').MultiaddrObject} MultiaddrObject
 * @typedef {import('./types').Protocol} Protocol
 */

/** @type {Map<string, Resolver>} */
const resolvers = new Map()
const symbol = Symbol.for('@multiformats/js-multiaddr/multiaddr')

/**
 * Creates a [multiaddr](https://github.com/multiformats/multiaddr) from
 * a Uint8Array, String or another Multiaddr instance
 * public key.
 *
 */
class Multiaddr {
  /**
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * ```
   *
   * @param {MultiaddrInput} [addr] - If String or Uint8Array, needs to adhere to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
   */
  constructor (addr) {
    // default
    if (addr == null) {
      addr = ''
    }

    // Define symbol
    Object.defineProperty(this, symbol, { value: true })

    if (addr instanceof Uint8Array) {
      /** @type {Uint8Array} - The raw bytes representing this multiaddress */
      this.bytes = codec.fromBytes(addr)
    } else if (typeof addr === 'string') {
      if (addr.length > 0 && addr.charAt(0) !== '/') {
        throw new Error(`multiaddr "${addr}" must start with a "/"`)
      }
      this.bytes = codec.fromString(addr)
    } else if (Multiaddr.isMultiaddr(addr)) { // Multiaddr
      this.bytes = codec.fromBytes(addr.bytes) // validate + copy buffer
    } else {
      throw new Error('addr must be a string, Buffer, or another Multiaddr')
    }
  }

  /**
   * Returns Multiaddr as a String
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toString()
   * // '/ip4/127.0.0.1/tcp/4001'
   * ```
   */
  toString () {
    return codec.bytesToString(this.bytes)
  }

  /**
   * Returns Multiaddr as a JSON encoded object
   *
   * @example
   * ```js
   * JSON.stringify(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // '/ip4/127.0.0.1/tcp/4001'
   * ```
   */
  toJSON () {
    return this.toString()
  }

  /**
   * Returns Multiaddr as a convinient options object to be used with net.createConnection
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toOptions()
   * // { family: 4, host: '127.0.0.1', transport: 'tcp', port: 4001 }
   * ```
   */
  toOptions () {
    /** @type {MultiaddrObject} */
    const opts = {}
    const parsed = this.toString().split('/')
    opts.family = parsed[1] === 'ip4' ? 4 : 6
    opts.host = parsed[2]
    opts.transport = parsed[3]
    opts.port = parseInt(parsed[4])
    return opts
  }

  /**
   * Returns the protocols the Multiaddr is defined with, as an array of objects, in
   * left-to-right order. Each object contains the protocol code, protocol name,
   * and the size of its address space in bits.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protos()
   * // [ { code: 4, size: 32, name: 'ip4' },
   * //   { code: 6, size: 16, name: 'tcp' } ]
   * ```
   *
   * @returns {Protocol[]} protocols - All the protocols the address is composed of
   */
  protos () {
    return this.protoCodes().map(code => Object.assign({}, protocols(code)))
  }

  /**
   * Returns the codes of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').protoCodes()
   * // [ 4, 6 ]
   * ```
   *
   * @returns {number[]} protocol codes
   */
  protoCodes () {
    const codes = []
    const buf = this.bytes
    let i = 0
    while (i < buf.length) {
      const code = varint.decode(buf, i)
      const n = varint.decode.bytes

      const p = protocols(code)
      const size = codec.sizeForAddr(p, buf.slice(i + n))

      i += (size + n)
      codes.push(code)
    }

    return codes
  }

  /**
   * Returns the names of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protoNames()
   * // [ 'ip4', 'tcp' ]
   * ```
   *
   * @returns {string[]} protocol names
   */
  protoNames () {
    return this.protos().map(proto => proto.name)
  }

  /**
   * Returns a tuple of parts
   *
   * @example
   * ```js
   * new Multiaddr("/ip4/127.0.0.1/tcp/4001").tuples()
   * // [ [ 4, <Buffer 7f 00 00 01> ], [ 6, <Buffer 0f a1> ] ]
   * ```
   */
  tuples () {
    return codec.bytesToTuples(this.bytes)
  }

  /**
   * Returns a tuple of string/number parts
   * - tuples[][0] = code of protocol
   * - tuples[][1] = contents of address
   *
   * @example
   * ```js
   * new Multiaddr("/ip4/127.0.0.1/tcp/4001").stringTuples()
   * // [ [ 4, '127.0.0.1' ], [ 6, '4001' ] ]
   * ```
   */
  stringTuples () {
    const t = codec.bytesToTuples(this.bytes)
    return codec.tuplesToStringTuples(t)
  }

  /**
   * Encapsulates a Multiaddr in another Multiaddr
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.toString()
   * // '/ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001'
   * ```
   *
   * @param {MultiaddrInput} addr - Multiaddr to add into this Multiaddr
   */
  encapsulate (addr) {
    addr = new Multiaddr(addr)
    return new Multiaddr(this.toString() + addr.toString())
  }

  /**
   * Decapsulates a Multiaddr from another Multiaddr
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.decapsulate(mh2).toString()
   * // '/ip4/8.8.8.8/tcp/1080'
   * ```
   *
   * @param {Multiaddr | string} addr - Multiaddr to remove from this Multiaddr
   * @returns {Multiaddr}
   */
  decapsulate (addr) {
    const addrString = addr.toString()
    const s = this.toString()
    const i = s.lastIndexOf(addrString)
    if (i < 0) {
      throw new Error('Address ' + this + ' does not contain subaddress: ' + addr)
    }
    return new Multiaddr(s.slice(0, i))
  }

  /**
   * A more reliable version of `decapsulate` if you are targeting a
   * specific code, such as 421 (the `p2p` protocol code). The last index of the code
   * will be removed from the `Multiaddr`, and a new instance will be returned.
   * If the code is not present, the original `Multiaddr` is returned.
   *
   * @example
   * ```js
   * const addr = new Multiaddr('/ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC')
   * // <Multiaddr 0400... - /ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC>
   *
   * addr.decapsulateCode(421).toString()
   * // '/ip4/0.0.0.0/tcp/8080'
   *
   * new Multiaddr('/ip4/127.0.0.1/tcp/8080').decapsulateCode(421).toString()
   * // '/ip4/127.0.0.1/tcp/8080'
   * ```
   *
   * @param {number} code - The code of the protocol to decapsulate from this Multiaddr
   * @returns {Multiaddr}
   */
  decapsulateCode (code) {
    const tuples = this.tuples()
    for (let i = tuples.length - 1; i >= 0; i--) {
      if (tuples[i][0] === code) {
        return new Multiaddr(codec.tuplesToBytes(tuples.slice(0, i)))
      }
    }
    return this
  }

  /**
   * Extract the peerId if the multiaddr contains one
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string>
   *
   * // should return QmValidBase58string or null if the id is missing or invalid
   * const peerId = mh1.getPeerId()
   * ```
   *
   * @returns {string | null} peerId - The id of the peer or null if invalid or missing from the ma
   */
  getPeerId () {
    try {
      const tuples = this.stringTuples().filter((tuple) => {
        if (tuple[0] === protocols.names.ipfs.code) {
          return true
        }
        return false
      })

      // Get the last ipfs tuple ['ipfs', 'peerid string']
      const tuple = tuples.pop()
      if (tuple && tuple[1]) {
        const peerIdStr = tuple[1]

        // peer id is base58btc encoded string but not multibase encoded so add the `z`
        // prefix so we can validate that it is correctly encoded
        if (peerIdStr[0] === 'Q' || peerIdStr[0] === '1') {
          return uint8ArrayToString(base58btc.decode(`z${peerIdStr}`), 'base58btc')
        }

        // try to parse peer id as CID
        return uint8ArrayToString(CID.parse(peerIdStr).multihash.bytes, 'base58btc')
      }

      return null
    } catch (e) {
      return null
    }
  }

  /**
   * Extract the path if the multiaddr contains one
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock>
   *
   * // should return utf8 string or null if the id is missing or invalid
   * const path = mh1.getPath()
   * ```js
   *
   * @returns {string | null} path - The path of the multiaddr, or null if no path protocol is present
   */
  getPath () {
    let path = null
    try {
      path = this.stringTuples().filter((tuple) => {
        const proto = protocols(tuple[0])
        if (proto.path) {
          return true
        }
        return false
      })[0][1]

      if (!path) {
        path = null
      }
    } catch (e) {
      path = null
    }
    return path
  }

  /**
   * Checks if two Multiaddrs are the same
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * mh1.equals(mh1)
   * // true
   *
   * mh1.equals(mh2)
   * // false
   * ```
   *
   * @param {Multiaddr} addr
   * @returns {boolean}
   */
  equals (addr) {
    return uint8ArrayEquals(this.bytes, addr.bytes)
  }

  /**
   * Resolve multiaddr if containing resolvable hostname.
   *
   * @example
   * ```js
   * Multiaddr.resolvers.set('dnsaddr', resolverFunction)
   * const mh1 = new Multiaddr('/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb')
   * const resolvedMultiaddrs = await mh1.resolve()
   * // [
   * //   <Multiaddr 04934b5353060fa1a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/4001/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
   * //   <Multiaddr 04934b53530601bbde03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/443/wss/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
   * //   <Multiaddr 04934b535391020fa1cc03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/udp/4001/quic/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>
   * // ]
   * ```
   *
   * @returns {Promise<Array<Multiaddr>>}
   */
  async resolve () {
    const resolvableProto = this.protos().find((p) => p.resolvable)

    // Multiaddr is not resolvable?
    if (!resolvableProto) {
      return [this]
    }

    const resolver = resolvers.get(resolvableProto.name)
    if (!resolver) {
      throw errCode(new Error(`no available resolver for ${resolvableProto.name}`), 'ERR_NO_AVAILABLE_RESOLVER')
    }

    const addresses = await resolver(this)
    return addresses.map((a) => new Multiaddr(a))
  }

  /**
   * Gets a Multiaddrs node-friendly address object. Note that protocol information
   * is left out: in Node (and most network systems) the protocol is unknowable
   * given only the address.
   *
   * Has to be a ThinWaist Address, otherwise throws error
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').nodeAddress()
   * // {family: 4, address: '127.0.0.1', port: 4001}
   * ```
   *
   * @returns {{family: 4 | 6, address: string, port: number}}
   * @throws {Error} Throws error if Multiaddr is not a Thin Waist address
   */
  nodeAddress () {
    const codes = this.protoCodes()
    const names = this.protoNames()
    const parts = this.toString().split('/').slice(1)

    if (parts.length < 4) {
      throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6}/{address}/{tcp, udp}/{port}".')
    } else if (codes[0] !== 4 && codes[0] !== 41 && codes[0] !== 54 && codes[0] !== 55) {
      throw new Error(`no protocol with name: "'${names[0]}'". Must have a valid family name: "{ip4, ip6, dns4, dns6}".`)
    } else if (parts[2] !== 'tcp' && parts[2] !== 'udp') {
      throw new Error(`no protocol with name: "'${names[1]}'". Must have a valid transport protocol: "{tcp, udp}".`)
    }

    return {
      family: (codes[0] === 41 || codes[0] === 55) ? 6 : 4,
      address: parts[1],
      port: parseInt(parts[3]) // tcp or udp port
    }
  }

  /**
   * Returns if a Multiaddr is a Thin Waist address or not.
   *
   * Thin Waist is if a Multiaddr adheres to the standard combination of:
   *
   * `{IPv4, IPv6}/{TCP, UDP}`
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * const mh2 = new Multiaddr('/ip4/192.168.2.1/tcp/5001')
   * // <Multiaddr 04c0a80201061389 - /ip4/192.168.2.1/tcp/5001>
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 047f000001060fa104c0a80201061389 - /ip4/127.0.0.1/tcp/4001/ip4/192.168.2.1/tcp/5001>
   * const mh4 = new Multiaddr('/ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a')
   * // <Multiaddr 047f0000010607d0de039302a503221220d52ebb89d85b02a284948203a62ff28389c57c9f42beec4ec20db76a64835843 - /ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a>
   * mh1.isThinWaistAddress()
   * // true
   * mh2.isThinWaistAddress()
   * // true
   * mh3.isThinWaistAddress()
   * // false
   * mh4.isThinWaistAddress()
   * // false
   * ```
   *
   * @param {Multiaddr} [addr] - Defaults to using `this` instance
   */
  isThinWaistAddress (addr) {
    const protos = (addr || this).protos()

    if (protos.length !== 2) {
      return false
    }

    if (protos[0].code !== 4 && protos[0].code !== 41) {
      return false
    }
    if (protos[1].code !== 6 && protos[1].code !== 273) {
      return false
    }
    return true
  }

  /**
   * Creates a Multiaddr from a node-friendly address object
   *
   * @example
   * ```js
   * Multiaddr.fromNodeAddress({address: '127.0.0.1', port: '4001'}, 'tcp')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * ```
   *
   * @param {{family: 4 | 6, address: string, port: number}} addr
   * @param {string} transport
   */
  static fromNodeAddress (addr, transport) {
    if (!addr) { throw new Error('requires node address object') }
    if (!transport) { throw new Error('requires transport protocol') }
    let ip
    switch (addr.family) {
      case 4:
        ip = 'ip4'
        break
      case 6:
        ip = 'ip6'
        break
      default:
        throw Error(`Invalid addr family. Got '${addr.family}' instead of 4 or 6`)
    }
    return new Multiaddr('/' + [ip, addr.address, transport, addr.port].join('/'))
  }

  /**
   * Returns if something is a Multiaddr that is a name
   *
   * @param {Multiaddr} addr
   * @returns {boolean} isName
   */
  static isName (addr) {
    if (!Multiaddr.isMultiaddr(addr)) {
      return false
    }

    // if a part of the multiaddr is resolvable, then return true
    return addr.protos().some((proto) => proto.resolvable)
  }

  /**
   * Check if object is a CID instance
   *
   * @param {any} value
   * @returns {value is Multiaddr}
   */
  static isMultiaddr (value) {
    return value instanceof Multiaddr || Boolean(value && value[symbol])
  }

  /**
   * Returns Multiaddr as a human-readable string.
   * For post Node.js v10.0.0.
   * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
   *
   * @example
   * ```js
   * console.log(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
   * ```
   *
   * @returns {string}
   */
  [inspect] () {
    return '<Multiaddr ' +
    uint8ArrayToString(this.bytes, 'base16') + ' - ' +
    codec.bytesToString(this.bytes) + '>'
  }

  /**
   * Returns Multiaddr as a human-readable string.
   * Fallback for pre Node.js v10.0.0.
   * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').inspect()
   * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
   * ```
   *
   * @returns {string}
   */
  inspect () {
    return '<Multiaddr ' +
      uint8ArrayToString(this.bytes, 'base16') + ' - ' +
      codec.bytesToString(this.bytes) + '>'
  }
}

/**
 * Object containing table, names and codes of all supported protocols.
 * To get the protocol values from a Multiaddr, you can use
 * [`.protos()`](#multiaddrprotos),
 * [`.protoCodes()`](#multiaddrprotocodes) or
 * [`.protoNames()`](#multiaddrprotonames)
 *
 * @returns {{table: Array, names: Object, codes: Object}}
 */
Multiaddr.protocols = protocols

Multiaddr.resolvers = resolvers

/**
 * Static factory
 *
 * @param {MultiaddrInput} addr
 */
function multiaddr (addr) {
  return new Multiaddr(addr)
}

module.exports = { Multiaddr, multiaddr, protocols, resolvers }


/***/ }),

/***/ 12606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const isIp = __webpack_require__(46565)
const { toString: uint8ArrayToString } = __webpack_require__(90453)

const isIP = isIp
const isV4 = isIp.v4
const isV6 = isIp.v6

// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L7
// @ts-ignore - this is copied from the link above better to keep it the same
const toBytes = function (ip, buff, offset) {
  offset = ~~offset

  let result

  if (isV4(ip)) {
    result = buff || new Uint8Array(offset + 4)
    // @ts-ignore
    // eslint-disable-next-line array-callback-return
    ip.split(/\./g).map(function (byte) {
      result[offset++] = parseInt(byte, 10) & 0xff
    })
  } else if (isV6(ip)) {
    const sections = ip.split(':', 8)

    let i
    for (i = 0; i < sections.length; i++) {
      const isv4 = isV4(sections[i])
      let v4Buffer

      if (isv4) {
        v4Buffer = toBytes(sections[i])
        sections[i] = uint8ArrayToString(v4Buffer.slice(0, 2), 'base16')
      }

      if (v4Buffer && ++i < 8) {
        sections.splice(i, 0, uint8ArrayToString(v4Buffer.slice(2, 4), 'base16'))
      }
    }

    if (sections[0] === '') {
      while (sections.length < 8) sections.unshift('0')
    } else if (sections[sections.length - 1] === '') {
      while (sections.length < 8) sections.push('0')
    } else if (sections.length < 8) {
      for (i = 0; i < sections.length && sections[i] !== ''; i++);
      const argv = [i, '1']
      for (i = 9 - sections.length; i > 0; i--) {
        argv.push('0')
      }
      sections.splice.apply(sections, argv)
    }

    result = buff || new Uint8Array(offset + 16)
    for (i = 0; i < sections.length; i++) {
      const word = parseInt(sections[i], 16)
      result[offset++] = (word >> 8) & 0xff
      result[offset++] = word & 0xff
    }
  }

  if (!result) {
    throw Error('Invalid ip address: ' + ip)
  }

  return result
}

// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L63
// @ts-ignore - this is copied from the link above better to keep it the same
const toString = function (buff, offset, length) {
  offset = ~~offset
  length = length || (buff.length - offset)

  const result = []
  let string
  const view = new DataView(buff.buffer)
  if (length === 4) {
    // IPv4
    for (let i = 0; i < length; i++) {
      result.push(buff[offset + i])
    }
    string = result.join('.')
  } else if (length === 16) {
    // IPv6
    for (let i = 0; i < length; i += 2) {
      result.push(view.getUint16(offset + i).toString(16))
    }
    string = result.join(':')
    string = string.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3')
    string = string.replace(/:{3,4}/, '::')
  }

  return string
}

module.exports = {
  isIP,
  isV4,
  isV6,
  toBytes,
  toString
}


/***/ }),

/***/ 16483:
/***/ ((module) => {


/** @typedef {import("./types").Protocol} Protocol */

/**
 * Protocols
 *
 * @param {number | string} proto
 * @returns {Protocol}
 */
function Protocols (proto) {
  if (typeof (proto) === 'number') {
    if (Protocols.codes[proto]) {
      return Protocols.codes[proto]
    }

    throw new Error('no protocol with code: ' + proto)
  } else if (typeof (proto) === 'string') {
    if (Protocols.names[proto]) {
      return Protocols.names[proto]
    }

    throw new Error('no protocol with name: ' + proto)
  }

  throw new Error('invalid protocol id type: ' + proto)
}

const V = -1
Protocols.lengthPrefixedVarSize = V
Protocols.V = V

/** @type {Array<[number, number, string, (string|boolean)?, string?]>} */
Protocols.table = [
  [4, 32, 'ip4'],
  [6, 16, 'tcp'],
  [33, 16, 'dccp'],
  [41, 128, 'ip6'],
  [42, V, 'ip6zone'],
  [53, V, 'dns', 'resolvable'],
  [54, V, 'dns4', 'resolvable'],
  [55, V, 'dns6', 'resolvable'],
  [56, V, 'dnsaddr', 'resolvable'],
  [132, 16, 'sctp'],
  [273, 16, 'udp'],
  [275, 0, 'p2p-webrtc-star'],
  [276, 0, 'p2p-webrtc-direct'],
  [277, 0, 'p2p-stardust'],
  [290, 0, 'p2p-circuit'],
  [301, 0, 'udt'],
  [302, 0, 'utp'],
  [400, V, 'unix', false, 'path'],
  // `ipfs` is added before `p2p` for legacy support.
  // All text representations will default to `p2p`, but `ipfs` will
  // still be supported
  [421, V, 'ipfs'],
  // `p2p` is the preferred name for 421, and is now the default
  [421, V, 'p2p'],
  [443, 0, 'https'],
  [444, 96, 'onion'],
  [445, 296, 'onion3'],
  [446, V, 'garlic64'],
  [460, 0, 'quic'],
  [477, 0, 'ws'],
  [478, 0, 'wss'],
  [479, 0, 'p2p-websocket-star'],
  [480, 0, 'http'],
  [777, V, 'memory']
]
/** @type {Record<string,Protocol>} */
Protocols.names = {}
/** @type {Record<number,Protocol>} */
Protocols.codes = {}

// populate tables
Protocols.table.map(row => {
  const proto = p.apply(null, row)
  Protocols.codes[proto.code] = proto
  Protocols.names[proto.name] = proto
  return null
})

Protocols.object = p

/**
 *
 * Create a protocol
 *
 * @param {number} code
 * @param {number} size
 * @param {string} name
 * @param {any} [resolvable]
 * @param {any} [path]
 * @returns {Protocol}
 */
function p (code, size, name, resolvable, path) {
  return {
    code,
    size,
    name,
    resolvable: Boolean(resolvable),
    path: Boolean(path)
  }
}

module.exports = Protocols


/***/ })

}]);