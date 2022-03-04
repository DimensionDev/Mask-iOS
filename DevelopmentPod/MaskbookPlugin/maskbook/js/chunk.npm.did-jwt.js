(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2917],{

/***/ 60108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
var u8a = __webpack_require__(79088);
var basics = __webpack_require__(19261);
var sha256$1 = __webpack_require__(58161);
var sha3 = __webpack_require__(94474);
var elliptic = __webpack_require__(75367);
var ed25519 = __webpack_require__(96068);
var canonicalizeData = __webpack_require__(56899);
var bech32 = __webpack_require__(23685);
var x25519 = __webpack_require__(87620);
var xchacha20poly1305 = __webpack_require__(29014);
var random = __webpack_require__(1651);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return n;
}

var u8a__namespace = /*#__PURE__*/_interopNamespace(u8a);
var sha3__default = /*#__PURE__*/_interopDefaultLegacy(sha3);
var elliptic__default = /*#__PURE__*/_interopDefaultLegacy(elliptic);
var canonicalizeData__default = /*#__PURE__*/_interopDefaultLegacy(canonicalizeData);

function bytesToBase64url(b) {
  return u8a__namespace.toString(b, 'base64url');
}
function base64ToBytes(s) {
  const inputBase64Url = s.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  return u8a__namespace.fromString(inputBase64Url, 'base64url');
}
function base58ToBytes(s) {
  return u8a__namespace.fromString(s, 'base58btc');
}
function bytesToBase58(b) {
  return u8a__namespace.toString(b, 'base58btc');
}
function hexToBytes(s) {
  const input = s.startsWith('0x') ? s.substring(2) : s;
  return u8a__namespace.fromString(input.toLowerCase(), 'base16');
}
function encodeBase64url(s) {
  return bytesToBase64url(u8a__namespace.fromString(s));
}
function decodeBase64url(s) {
  return u8a__namespace.toString(base64ToBytes(s));
}
function bytesToHex(b) {
  return u8a__namespace.toString(b, 'base16');
}
function stringToBytes(s) {
  return u8a__namespace.fromString(s);
}
function toJose({
  r,
  s,
  recoveryParam
}, recoverable) {
  const jose = new Uint8Array(recoverable ? 65 : 64);
  jose.set(u8a__namespace.fromString(r, 'base16'), 0);
  jose.set(u8a__namespace.fromString(s, 'base16'), 32);

  if (recoverable) {
    if (typeof recoveryParam === 'undefined') {
      throw new Error('Signer did not return a recoveryParam');
    }

    jose[64] = recoveryParam;
  }

  return bytesToBase64url(jose);
}
function fromJose(signature) {
  const signatureBytes = base64ToBytes(signature);

  if (signatureBytes.length < 64 || signatureBytes.length > 65) {
    throw new TypeError(`Wrong size for signature. Expected 64 or 65 bytes, but got ${signatureBytes.length}`);
  }

  const r = bytesToHex(signatureBytes.slice(0, 32));
  const s = bytesToHex(signatureBytes.slice(32, 64));
  const recoveryParam = signatureBytes.length === 65 ? signatureBytes[64] : undefined;
  return {
    r,
    s,
    recoveryParam
  };
}
function toSealed(ciphertext, tag) {
  return u8a__namespace.concat([base64ToBytes(ciphertext), base64ToBytes(tag)]);
}
const hexMatcher = /^(0x)?([a-fA-F0-9]{64}|[a-fA-F0-9]{128})$/;
const base58Matcher = /^([1-9A-HJ-NP-Za-km-z]{44}|[1-9A-HJ-NP-Za-km-z]{88})$/;
const base64Matcher = /^([0-9a-zA-Z=\-_+/]{43}|[0-9a-zA-Z=\-_+/]{86})(={0,2})$/;
/**
 * Parses a private key and returns the Uint8Array representation.
 * This method uses an heuristic to determine the key encoding to then be able to parse it into 32 or 64 bytes.
 *
 * @param input a 32 or 64 byte key presented either as a Uint8Array or as a hex, base64, or base58btc encoded string
 *
 * @throws TypeError('Invalid private key format') if the key doesn't match any of the accepted formats or length
 */

function parseKey(input) {
  if (typeof input === 'string') {
    if (hexMatcher.test(input)) {
      return hexToBytes(input);
    } else if (base58Matcher.test(input)) {
      return base58ToBytes(input);
    } else if (base64Matcher.test(input)) {
      return base64ToBytes(input);
    } else {
      throw TypeError('bad_key: Invalid private key format');
    }
  } else if (input instanceof Uint8Array) {
    return input;
  } else {
    throw TypeError('bad_key: Invalid private key format');
  }
}
function leftpad(data, size = 64) {
  if (data.length === size) return data;
  return '0'.repeat(size - data.length) + data;
}

function sha256(payload) {
  const data = typeof payload === 'string' ? u8a__namespace.fromString(payload) : payload;
  return sha256$1.hash(data);
}
function keccak(data) {
  return new Uint8Array(sha3__default['default'].keccak_256.arrayBuffer(data));
}
function toEthereumAddress(hexPublicKey) {
  const hashInput = u8a__namespace.fromString(hexPublicKey.slice(2), 'base16');
  return `0x${u8a__namespace.toString(keccak(hashInput).slice(-20), 'base16')}`;
}

function writeUint32BE(value, array = new Uint8Array(4)) {
  const encoded = u8a__namespace.fromString(value.toString(), 'base10');
  array.set(encoded, 4 - encoded.length);
  return array;
}

const lengthAndInput = input => u8a__namespace.concat([writeUint32BE(input.length), input]); // This implementation of concatKDF was inspired by these two implementations:
// https://github.com/digitalbazaar/minimal-cipher/blob/master/algorithms/ecdhkdf.js
// https://github.com/panva/jose/blob/master/lib/jwa/ecdh/derive.js


function concatKDF(secret, keyLen, alg, producerInfo, consumerInfo) {
  if (keyLen !== 256) throw new Error(`Unsupported key length: ${keyLen}`);
  const value = u8a__namespace.concat([lengthAndInput(u8a__namespace.fromString(alg)), lengthAndInput(typeof producerInfo === 'undefined' ? new Uint8Array(0) : producerInfo), lengthAndInput(typeof consumerInfo === 'undefined' ? new Uint8Array(0) : consumerInfo), writeUint32BE(keyLen)]); // since our key lenght is 256 we only have to do one round

  const roundNumber = 1;
  return sha256$1.hash(u8a__namespace.concat([writeUint32BE(roundNumber), secret, value]));
}

const secp256k1$1 = new elliptic__default['default'].ec('secp256k1');
/**
 *  Creates a configured signer function for signing data using the ES256K (secp256k1 + sha256) algorithm.
 *
 *  The signing function itself takes the data as a `Uint8Array` or `string` and returns a `base64Url`-encoded signature
 *
 *  @example
 *  ```typescript
 *  const sign: Signer = ES256KSigner(process.env.PRIVATE_KEY)
 *  const signature: string = await sign(data)
 *  ```
 *
 *  @param    {String}    privateKey   a private key as `Uint8Array` or encoded as `base64`, `base58`, or `hex` string
 *  @param    {Boolean}   recoverable  an optional flag to add the recovery param to the generated signatures
 *  @return   {Function}               a configured signer function `(data: string | Uint8Array): Promise<string>`
 */

function ES256KSigner(privateKey, recoverable = false) {
  const privateKeyBytes = parseKey(privateKey);

  if (privateKeyBytes.length !== 32) {
    throw new Error(`bad_key: Invalid private key format. Expecting 32 bytes, but got ${privateKeyBytes.length}`);
  }

  const keyPair = secp256k1$1.keyFromPrivate(privateKeyBytes);
  return function (data) {
    try {
      const {
        r,
        s,
        recoveryParam
      } = keyPair.sign(sha256(data));
      return Promise.resolve(toJose({
        r: leftpad(r.toString('hex')),
        s: leftpad(s.toString('hex')),
        recoveryParam
      }, recoverable));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * @deprecated Please use ES256KSigner
 *  The SimpleSigner returns a configured function for signing data.
 *
 *  @example
 *  const signer = SimpleSigner(process.env.PRIVATE_KEY)
 *  signer(data, (err, signature) => {
 *    ...
 *  })
 *
 *  @param    {String}         hexPrivateKey    a hex encoded private key
 *  @return   {Function}                     a configured signer function
 */

function SimpleSigner(hexPrivateKey) {
  const signer = ES256KSigner(hexPrivateKey, true);
  return function (data) {
    try {
      return Promise.resolve(signer(data)).then(fromJose);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * @deprecated Please use ES256KSigner
 *  The EllipticSigner returns a configured function for signing data.
 *
 *  @example
 *  ```typescript
 *  const signer = EllipticSigner(process.env.PRIVATE_KEY)
 *  signer(data).then( (signature: string) => {
 *    ...
 *  })
 *  ```
 *
 *  @param    {String}         hexPrivateKey    a hex encoded private key
 *  @return   {Function}                        a configured signer function
 */

function EllipticSigner(hexPrivateKey) {
  return ES256KSigner(hexPrivateKey);
}

/**
 *  Creates a configured signer function for signing data using the EdDSA (Ed25519) algorithm.
 *
 *  The signing function itself takes the data as a `Uint8Array` or `string` and returns a `base64Url`-encoded signature
 *
 *  @example
 *  ```typescript
 *  const sign: Signer = EdDSASigner(process.env.PRIVATE_KEY)
 *  const signature: string = await sign(data)
 *  ```
 *
 *  @param    {String}    secretKey   a 64 byte secret key as `Uint8Array` or encoded as `base64`, `base58`, or `hex` string
 *  @return   {Function}              a configured signer function `(data: string | Uint8Array): Promise<string>`
 */

function EdDSASigner(secretKey) {
  const privateKeyBytes = parseKey(secretKey);

  if (privateKeyBytes.length !== 64) {
    throw new Error(`bad_key: Invalid private key format. Expecting 64 bytes, but got ${privateKeyBytes.length}`);
  }

  return function (data) {
    try {
      const dataBytes = typeof data === 'string' ? stringToBytes(data) : data;
      const sig = ed25519.sign(privateKeyBytes, dataBytes);
      return Promise.resolve(bytesToBase64url(sig));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * @deprecated Please use EdDSASigner
 *
 *  The NaclSigner returns a configured function for signing data using the Ed25519 algorithm.
 *
 *  The signing function itself takes the data as a `string` or `Uint8Array` parameter and returns a `base64Url`-encoded signature.
 *
 *  @example
 *  const signer = NaclSigner(process.env.PRIVATE_KEY)
 *  const data: string = '...'
 *  signer(data).then( (signature: string) => {
 *    ...
 *  })
 *
 *  @param    {String}   base64PrivateKey    a 64 byte base64 encoded private key
 *  @return   {Function}                     a configured signer function
 */

function NaclSigner(base64PrivateKey) {
  return EdDSASigner(base64PrivateKey);
}

function instanceOfEcdsaSignature(object) {
  return typeof object === 'object' && 'r' in object && 's' in object;
}

function ES256KSignerAlg(recoverable) {
  return function sign(payload, signer) {
    try {
      return Promise.resolve(signer(payload)).then(function (signature) {
        if (instanceOfEcdsaSignature(signature)) {
          return toJose(signature, recoverable);
        } else {
          if (recoverable && typeof fromJose(signature).recoveryParam === 'undefined') {
            throw new Error(`not_supported: ES256K-R not supported when signer doesn't provide a recovery param`);
          }

          return signature;
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function Ed25519SignerAlg() {
  return function sign(payload, signer) {
    try {
      return Promise.resolve(signer(payload)).then(function (signature) {
        if (!instanceOfEcdsaSignature(signature)) {
          return signature;
        } else {
          throw new Error('invalid_config: expected a signer function that returns a string instead of signature object');
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
const algorithms$1 = {
  ES256K: ES256KSignerAlg(),
  // This is a non-standard algorithm but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/146
  'ES256K-R': ES256KSignerAlg(true),
  // This is actually incorrect but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/130
  Ed25519: Ed25519SignerAlg(),
  EdDSA: Ed25519SignerAlg()
};

function SignerAlg(alg) {
  const impl = algorithms$1[alg];
  if (!impl) throw new Error(`not_supported: Unsupported algorithm ${alg}`);
  return impl;
}

// https://github.com/crypto-browserify/ripemd160/blob/master/index.js
const zl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
const zr = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
const sl = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
const sr = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
const hl = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e];
const hr = [0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000];

function rotl(x, n) {
  return x << n | x >>> 32 - n;
}

function fn1(a, b, c, d, e, m, k, s) {
  return rotl(a + (b ^ c ^ d) + m + k | 0, s) + e | 0;
}

function fn2(a, b, c, d, e, m, k, s) {
  return rotl(a + (b & c | ~b & d) + m + k | 0, s) + e | 0;
}

function fn3(a, b, c, d, e, m, k, s) {
  return rotl(a + ((b | ~c) ^ d) + m + k | 0, s) + e | 0;
}

function fn4(a, b, c, d, e, m, k, s) {
  return rotl(a + (b & d | c & ~d) + m + k | 0, s) + e | 0;
}

function fn5(a, b, c, d, e, m, k, s) {
  return rotl(a + (b ^ (c | ~d)) + m + k | 0, s) + e | 0;
}

class Ripemd160 {
  // state
  constructor(blockSize = 64) {
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
    this._blockOffset = 0;
    this._block = void 0;
    this._blockSize = void 0;
    this._length = [0, 0, 0, 0];
    this._finalized = void 0;

    this.update = data => {
      if (this._finalized) throw new Error('Digest already called'); // consume data

      const block = this._block;
      let offset = 0;

      while (this._blockOffset + data.length - offset >= this._blockSize) {
        for (let i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++];

        this._update();

        this._blockOffset = 0;
      }

      while (offset < data.length) block[this._blockOffset++] = data[offset++]; // update length


      for (let j = 0, carry = data.length * 8; carry > 0; ++j) {
        this._length[j] += carry;
        carry = this._length[j] / 0x0100000000 | 0;
        if (carry > 0) this._length[j] -= 0x0100000000 * carry;
      }

      return this;
    };

    this.digest = () => {
      if (this._finalized) throw new Error('Digest already called');
      this._finalized = true;

      const digest = this._digest(); // reset state


      this._block.fill(0);

      this._blockOffset = 0;

      for (let i = 0; i < 4; ++i) this._length[i] = 0;

      return digest;
    };

    this._update = () => {
      const words = new Array(16);
      const temp = new DataView(this._block.buffer);

      for (let j = 0; j < 16; ++j) words[j] = words[j] = temp.getInt32(j * 4, true);

      let al = this._a | 0;
      let bl = this._b | 0;
      let cl = this._c | 0;
      let dl = this._d | 0;
      let el = this._e | 0;
      let ar = this._a | 0;
      let br = this._b | 0;
      let cr = this._c | 0;
      let dr = this._d | 0;
      let er = this._e | 0; // computation

      for (let i = 0; i < 80; i += 1) {
        let tl;
        let tr;

        if (i < 16) {
          tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i]);
          tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i]);
        } else if (i < 32) {
          tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i]);
          tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i]);
        } else if (i < 48) {
          tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i]);
          tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i]);
        } else if (i < 64) {
          tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i]);
          tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i]);
        } else {
          // if (i<80) {
          tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i]);
          tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i]);
        }

        al = el;
        el = dl;
        dl = rotl(cl, 10);
        cl = bl;
        bl = tl;
        ar = er;
        er = dr;
        dr = rotl(cr, 10);
        cr = br;
        br = tr;
      } // update state


      const t = this._b + cl + dr | 0;
      this._b = this._c + dl + er | 0;
      this._c = this._d + el + ar | 0;
      this._d = this._e + al + br | 0;
      this._e = this._a + bl + cr | 0;
      this._a = t;
    };

    this._digest = () => {
      // create padding and handle blocks
      this._block[this._blockOffset++] = 0x80;

      if (this._blockOffset > 56) {
        this._block.fill(0, this._blockOffset, 64);

        this._update();

        this._blockOffset = 0;
      }

      this._block.fill(0, this._blockOffset, 56);

      const temp = new DataView(this._block.buffer);
      temp.setUint32(56, this._length[0], true);
      temp.setUint32(60, this._length[1], true);
      this._block = new Uint8Array(temp.buffer);

      this._update(); // produce result


      const buffer = new DataView(new Uint8Array(20).buffer);
      buffer.setInt32(0, this._a, true);
      buffer.setInt32(4, this._b, true);
      buffer.setInt32(8, this._c, true);
      buffer.setInt32(12, this._d, true);
      buffer.setInt32(16, this._e, true);
      return new Uint8Array(buffer.buffer);
    };

    this._block = new Uint8Array(blockSize);
    this._blockSize = blockSize;
    this._blockOffset = 0;
    this._length = [0, 0, 0, 0];
    this._finalized = false;
  }

}

const publicKeyToAddress$1 = (publicKey, otherAddress) => {
  // Use the same version/prefix byte as the given address.
  const version = u8a__namespace.toString(base58ToBytes(otherAddress).slice(0, 1), 'hex');
  const publicKeyBuffer = u8a__namespace.fromString(publicKey, 'hex');
  const publicKeyHash = new Ripemd160().update(sha256(publicKeyBuffer)).digest();
  const step1 = version + u8a__namespace.toString(publicKeyHash, 'hex');
  const step2 = sha256(u8a__namespace.fromString(step1, 'hex'));
  const step3 = sha256(step2);
  const checksum = u8a__namespace.toString(step3, 'hex').substring(0, 8);
  const step4 = step1 + checksum;
  return bytesToBase58(u8a__namespace.fromString(step4, 'hex'));
};

const EC = elliptic__default['default'].ec;
const publicKeyToAddress = (publicKey, prefix) => {
  const ec = new EC('secp256k1');
  const compressedPublicKey = ec.keyFromPublic(publicKey, 'hex').getPublic().encode('hex', true);
  const publicKeyBuffer = u8a__namespace.fromString(compressedPublicKey, 'hex');
  const hash = new Ripemd160().update(sha256(publicKeyBuffer)).digest();
  const words = bech32.bech32.toWords(hash);
  return bech32.bech32.encode(prefix, words).replace(prefix, '');
};

const verifyBlockchainAccountId = (publicKey, blockchainAccountId) => {
  if (blockchainAccountId) {
    const chain = blockchainAccountId.split(':');

    switch (chain[0]) {
      case 'bip122':
        chain[chain.length - 1] = publicKeyToAddress$1(publicKey, chain[chain.length - 1]);
        break;

      case 'cosmos':
        chain[chain.length - 1] = publicKeyToAddress(publicKey, chain[1]);
        break;

      case 'eip155':
        chain[chain.length - 1] = toEthereumAddress(publicKey);
        break;

      default:
        return false;
    }

    return chain.join(':') === blockchainAccountId;
  }

  return false;
};

const secp256k1 = new elliptic__default['default'].ec('secp256k1'); // converts a JOSE signature to it's components

function toSignatureObject(signature, recoverable = false) {
  const rawSig = base64ToBytes(signature);

  if (rawSig.length !== (recoverable ? 65 : 64)) {
    throw new Error('wrong signature length');
  }

  const r = bytesToHex(rawSig.slice(0, 32));
  const s = bytesToHex(rawSig.slice(32, 64));
  const sigObj = {
    r,
    s
  };

  if (recoverable) {
    sigObj.recoveryParam = rawSig[64];
  }

  return sigObj;
}

function extractPublicKeyBytes(pk) {
  if (pk.publicKeyBase58) {
    return base58ToBytes(pk.publicKeyBase58);
  } else if (pk.publicKeyBase64) {
    return base64ToBytes(pk.publicKeyBase64);
  } else if (pk.publicKeyHex) {
    return hexToBytes(pk.publicKeyHex);
  } else if (pk.publicKeyJwk && pk.publicKeyJwk.crv === 'secp256k1' && pk.publicKeyJwk.x && pk.publicKeyJwk.y) {
    return hexToBytes(secp256k1.keyFromPublic({
      x: bytesToHex(base64ToBytes(pk.publicKeyJwk.x)),
      y: bytesToHex(base64ToBytes(pk.publicKeyJwk.y))
    }).getPublic('hex'));
  } else if (pk.publicKeyMultibase) {
    const {
      base16,
      base58btc,
      base64,
      base64url
    } = basics.bases;
    const baseDecoder = base16.decoder.or(base58btc.decoder.or(base64.decoder.or(base64url.decoder)));
    return baseDecoder.decode(pk.publicKeyMultibase);
  }

  return new Uint8Array();
}

function verifyES256K(data, signature, authenticators) {
  const hash = sha256(data);
  const sigObj = toSignatureObject(signature);
  const fullPublicKeys = authenticators.filter(({
    ethereumAddress,
    blockchainAccountId
  }) => {
    return typeof ethereumAddress === 'undefined' && typeof blockchainAccountId === 'undefined';
  });
  const blockchainAddressKeys = authenticators.filter(({
    ethereumAddress,
    blockchainAccountId
  }) => {
    return typeof ethereumAddress !== 'undefined' || typeof blockchainAccountId !== 'undefined';
  });
  let signer = fullPublicKeys.find(pk => {
    try {
      const pubBytes = extractPublicKeyBytes(pk);
      return secp256k1.keyFromPublic(pubBytes).verify(hash, sigObj);
    } catch (err) {
      return false;
    }
  });

  if (!signer && blockchainAddressKeys.length > 0) {
    signer = verifyRecoverableES256K(data, signature, blockchainAddressKeys);
  }

  if (!signer) throw new Error('invalid_signature: Signature invalid for JWT');
  return signer;
}
function verifyRecoverableES256K(data, signature, authenticators) {
  let signatures;

  if (signature.length > 86) {
    signatures = [toSignatureObject(signature, true)];
  } else {
    const so = toSignatureObject(signature, false);
    signatures = [{ ...so,
      recoveryParam: 0
    }, { ...so,
      recoveryParam: 1
    }];
  }

  const checkSignatureAgainstSigner = sigObj => {
    const hash = sha256(data); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const recoveredKey = secp256k1.recoverPubKey(hash, sigObj, sigObj.recoveryParam);
    const recoveredPublicKeyHex = recoveredKey.encode('hex');
    const recoveredCompressedPublicKeyHex = recoveredKey.encode('hex', true);
    const recoveredAddress = toEthereumAddress(recoveredPublicKeyHex);
    const signer = authenticators.find(pk => {
      var _pk$ethereumAddress, _pk$blockchainAccount, _pk$blockchainAccount2;

      const keyHex = bytesToHex(extractPublicKeyBytes(pk));
      return keyHex === recoveredPublicKeyHex || keyHex === recoveredCompressedPublicKeyHex || ((_pk$ethereumAddress = pk.ethereumAddress) == null ? void 0 : _pk$ethereumAddress.toLowerCase()) === recoveredAddress || ((_pk$blockchainAccount = pk.blockchainAccountId) == null ? void 0 : (_pk$blockchainAccount2 = _pk$blockchainAccount.split('@eip155')) == null ? void 0 : _pk$blockchainAccount2[0].toLowerCase()) === recoveredAddress || // CAIP-2
      verifyBlockchainAccountId(recoveredPublicKeyHex, pk.blockchainAccountId) // CAIP-10
      ;
    });
    return signer;
  };

  const signer = signatures.map(checkSignatureAgainstSigner).filter(key => typeof key !== 'undefined');
  if (signer.length === 0) throw new Error('invalid_signature: Signature invalid for JWT');
  return signer[0];
}
function verifyEd25519(data, signature, authenticators) {
  const clear = stringToBytes(data);
  const sig = base64ToBytes(signature);
  const signer = authenticators.find(pk => {
    return ed25519.verify(extractPublicKeyBytes(pk), clear, sig);
  });
  if (!signer) throw new Error('invalid_signature: Signature invalid for JWT');
  return signer;
}
const algorithms = {
  ES256K: verifyES256K,
  // This is a non-standard algorithm but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/146
  'ES256K-R': verifyRecoverableES256K,
  // This is actually incorrect but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/130
  Ed25519: verifyEd25519,
  EdDSA: verifyEd25519
};

function VerifierAlgorithm(alg) {
  const impl = algorithms[alg];
  if (!impl) throw new Error(`not_supported: Unsupported algorithm ${alg}`);
  return impl;
}

VerifierAlgorithm.toSignatureObject = toSignatureObject;

/**
 * Resolves relevant public keys or other authenticating material used to verify signature from the DID document of provided DID
 *
 *  @example
 *  resolveAuthenticator(resolver, 'ES256K', 'did:uport:2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX').then(obj => {
 *      const payload = obj.payload
 *      const profile = obj.profile
 *      const jwt = obj.jwt
 *      ...
 *  })
 *
 *  @param    {String}            alg                a JWT algorithm
 *  @param    {String}            did                a Decentralized IDentifier (DID) to lookup
 *  @param    {Boolean}           auth               Restrict public keys to ones specifically listed in the 'authentication' section of DID document
 *  @return   {Promise<DIDAuthenticator>}               a promise which resolves with a response object containing an array of authenticators or if non exist rejects with an error
 */
const resolveAuthenticator = function (resolver, alg, issuer, proofPurpose) {
  try {
    const types = SUPPORTED_PUBLIC_KEY_TYPES[alg];

    if (!types || types.length === 0) {
      throw new Error(`not_supported: No supported signature types for algorithm ${alg}`);
    }

    let didResult;
    return Promise.resolve(resolver.resolve(issuer, {
      accept: DID_JSON
    })).then(function (result) {
      var _didResult$didResolut, _didResult, _didResult$didDocumen, _didResult2, _didResult2$didDocume;

      // support legacy resolvers that do not produce DIDResolutionResult
      if (Object.getOwnPropertyNames(result).indexOf('didDocument') === -1) {
        didResult = {
          didDocument: result,
          didDocumentMetadata: {},
          didResolutionMetadata: {
            contentType: DID_JSON
          }
        };
      } else {
        didResult = result;
      }

      if ((_didResult$didResolut = didResult.didResolutionMetadata) != null && _didResult$didResolut.error || didResult.didDocument == null) {
        const {
          error,
          message
        } = didResult.didResolutionMetadata;
        throw new Error(`resolver_error: Unable to resolve DID document for ${issuer}: ${error}, ${message || ''}`);
      }

      const getPublicKeyById = (verificationMethods, pubid) => {
        const filtered = verificationMethods.filter(({
          id
        }) => pubid === id);
        return filtered.length > 0 ? filtered[0] : null;
      };

      let publicKeysToCheck = [...(((_didResult = didResult) == null ? void 0 : (_didResult$didDocumen = _didResult.didDocument) == null ? void 0 : _didResult$didDocumen.verificationMethod) || []), ...(((_didResult2 = didResult) == null ? void 0 : (_didResult2$didDocume = _didResult2.didDocument) == null ? void 0 : _didResult2$didDocume.publicKey) || [])];

      if (typeof proofPurpose === 'string') {
        var _didResult3;

        // support legacy DID Documents that do not list assertionMethod
        if (proofPurpose.startsWith('assertion') && !Object.getOwnPropertyNames((_didResult3 = didResult) == null ? void 0 : _didResult3.didDocument).includes('assertionMethod')) {
          didResult.didDocument = { ...didResult.didDocument
          };
          didResult.didDocument.assertionMethod = [...publicKeysToCheck.map(pk => pk.id)];
        }

        publicKeysToCheck = (didResult.didDocument[proofPurpose] || []).map(verificationMethod => {
          if (typeof verificationMethod === 'string') {
            return getPublicKeyById(publicKeysToCheck, verificationMethod);
          } else if (typeof verificationMethod.publicKey === 'string') {
            // this is a legacy format
            return getPublicKeyById(publicKeysToCheck, verificationMethod.publicKey);
          } else {
            return verificationMethod;
          }
        }).filter(key => key != null);
      }

      const authenticators = publicKeysToCheck.filter(({
        type
      }) => types.find(supported => supported === type));

      if (typeof proofPurpose === 'string' && (!authenticators || authenticators.length === 0)) {
        throw new Error(`no_suitable_keys: DID document for ${issuer} does not have public keys suitable for ${alg} with ${proofPurpose} purpose`);
      }

      if (!authenticators || authenticators.length === 0) {
        throw new Error(`no_suitable_keys: DID document for ${issuer} does not have public keys for ${alg}`);
      }

      return {
        authenticators,
        issuer,
        didResolutionResult: didResult
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 *  Verifies given JWT. If the JWT is valid, the promise returns an object including the JWT, the payload of the JWT,
 *  and the did doc of the issuer of the JWT.
 *
 *  @example
 *  verifyJWT('did:uport:eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJyZXF1Z....', {audience: '5A8bRWU3F7j3REx3vkJ...', callbackUrl: 'https://...'}).then(obj => {
 *      const did = obj.did // DID of signer
 *      const payload = obj.payload
 *      const doc = obj.doc // DID Document of signer
 *      const jwt = obj.jwt
 *      const signerKeyId = obj.signerKeyId // ID of key in DID document that signed JWT
 *      ...
 *  })
 *
 *  @param    {String}            jwt                a JSON Web Token to verify
 *  @param    {Object}            [options]           an unsigned credential object
 *  @param    {Boolean}           options.auth        Require signer to be listed in the authentication section of the DID document (for Authentication purposes)
 *  @param    {String}            options.audience    DID of the recipient of the JWT
 *  @param    {String}            options.callbackUrl callback url in JWT
 *  @return   {Promise<Object, Error>}               a promise which resolves with a response object or rejects with an error
 */
const verifyJWT = function (jwt, options = {
  resolver: undefined,
  auth: undefined,
  audience: undefined,
  callbackUrl: undefined,
  skewTime: undefined,
  proofPurpose: undefined
}) {
  try {
    if (!options.resolver) throw new Error('missing_resolver: No DID resolver has been configured');
    const {
      payload,
      header,
      signature,
      data
    } = decodeJWT(jwt);
    const proofPurpose = Object.prototype.hasOwnProperty.call(options, 'auth') ? options.auth ? 'authentication' : undefined : options.proofPurpose;

    if (!payload.iss) {
      throw new Error('invalid_jwt: JWT iss is required');
    }

    let did = '';

    if (payload.iss === SELF_ISSUED_V2) {
      if (!payload.sub) {
        throw new Error('invalid_jwt: JWT sub is required');
      }

      if (typeof payload.sub_jwk === 'undefined') {
        did = payload.sub;
      } else {
        did = (header.kid || '').split('#')[0];
      }
    } else if (payload.iss === SELF_ISSUED_V0_1) {
      if (!payload.did) {
        throw new Error('invalid_jwt: JWT did is required');
      }

      did = payload.did;
    } else {
      did = payload.iss;
    }

    if (!did) {
      throw new Error(`invalid_jwt: No DID has been found in the JWT`);
    }

    return Promise.resolve(resolveAuthenticator(options.resolver, header.alg, did, proofPurpose)).then(function ({
      didResolutionResult,
      authenticators,
      issuer
    }) {
      return Promise.resolve(verifyJWSDecoded({
        header,
        data,
        signature
      }, authenticators)).then(function (signer) {
        const now = Math.floor(Date.now() / 1000);
        const skewTime = typeof options.skewTime !== 'undefined' && options.skewTime >= 0 ? options.skewTime : NBF_SKEW;

        if (signer) {
          const nowSkewed = now + skewTime;

          if (payload.nbf) {
            if (payload.nbf > nowSkewed) {
              throw new Error(`invalid_jwt: JWT not valid before nbf: ${payload.nbf}`);
            }
          } else if (payload.iat && payload.iat > nowSkewed) {
            throw new Error(`invalid_jwt: JWT not valid yet (issued in the future) iat: ${payload.iat}`);
          }

          if (payload.exp && payload.exp <= now - skewTime) {
            throw new Error(`invalid_jwt: JWT has expired: exp: ${payload.exp} < now: ${now}`);
          }

          if (payload.aud) {
            if (!options.audience && !options.callbackUrl) {
              throw new Error('invalid_config: JWT audience is required but your app address has not been configured');
            }

            const audArray = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
            const matchedAudience = audArray.find(item => options.audience === item || options.callbackUrl === item);

            if (typeof matchedAudience === 'undefined') {
              throw new Error(`invalid_config: JWT audience does not match your DID or callback url`);
            }
          }

          return {
            payload,
            didResolutionResult,
            issuer,
            signer,
            jwt
          };
        }

        throw new Error(`invalid_signature: JWT not valid. issuer DID document does not contain a verificationMethod that matches the signature.`);
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 *  Creates a signed JWT given an address which becomes the issuer, a signer, and a payload for which the signature is over.
 *
 *  @example
 *  const signer = ES256KSigner(process.env.PRIVATE_KEY)
 *  createJWT({address: '5A8bRWU3F7j3REx3vkJ...', signer}, {key1: 'value', key2: ..., ... }).then(jwt => {
 *      ...
 *  })
 *
 *  @param    {Object}            payload               payload object
 *  @param    {Object}            [options]             an unsigned credential object
 *  @param    {String}            options.issuer        The DID of the issuer (signer) of JWT
 *  @param    {String}            options.alg           [DEPRECATED] The JWT signing algorithm to use. Supports: [ES256K, ES256K-R, Ed25519, EdDSA], Defaults to: ES256K.
 *                                                      Please use `header.alg` to specify the algorithm
 *  @param    {Signer}            options.signer        a `Signer` function, Please see `ES256KSigner` or `EdDSASigner`
 *  @param    {boolean}           options.canonicalize  optional flag to canonicalize header and payload before signing
 *  @param    {Object}            header                optional object to specify or customize the JWT header
 *  @return   {Promise<Object, Error>}                  a promise which resolves with a signed JSON Web Token or rejects with an error
 */
const createJWT = function (payload, {
  issuer,
  signer,
  alg,
  expiresIn,
  canonicalize
}, header = {}) {
  try {
    if (!signer) throw new Error('missing_signer: No Signer functionality has been configured');
    if (!issuer) throw new Error('missing_issuer: No issuing DID has been configured');
    if (!header.typ) header.typ = 'JWT';
    if (!header.alg) header.alg = alg;
    const timestamps = {
      iat: Math.floor(Date.now() / 1000),
      exp: undefined
    };

    if (expiresIn) {
      if (typeof expiresIn === 'number') {
        timestamps.exp = (payload.nbf || timestamps.iat) + Math.floor(expiresIn);
      } else {
        throw new Error('invalid_argument: JWT expiresIn is not a number');
      }
    }

    const fullPayload = { ...timestamps,
      ...payload,
      iss: issuer
    };
    return createJWS(fullPayload, signer, header, {
      canonicalize
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 *  Creates a signed JWS given a payload, a signer, and an optional header.
 *
 *  @example
 *  const signer = ES256KSigner(process.env.PRIVATE_KEY)
 *  const jws = await createJWS({ my: 'payload' }, signer)
 *
 *  @param    {Object}            payload           payload object
 *  @param    {Signer}            signer            a signer, see `ES256KSigner or `EdDSASigner`
 *  @param    {Object}            header            optional object to specify or customize the JWS header
 *  @param    {Object}            options           can be used to trigger automatic canonicalization of header and
 *                                                    payload properties
 *  @return   {Promise<string>}                     a Promise which resolves to a JWS string or rejects with an error
 */
const createJWS = function (payload, signer, header = {}, options = {}) {
  try {
    if (!header.alg) header.alg = defaultAlg;
    const encodedPayload = typeof payload === 'string' ? payload : encodeSection(payload, options.canonicalize);
    const signingInput = [encodeSection(header, options.canonicalize), encodedPayload].join('.');
    const jwtSigner = SignerAlg(header.alg);
    return Promise.resolve(jwtSigner(signingInput, signer)).then(function (signature) {
      return [signingInput, signature].join('.');
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
const SUPPORTED_PUBLIC_KEY_TYPES = {
  ES256K: ['EcdsaSecp256k1VerificationKey2019',
  /**
   * Equivalent to EcdsaSecp256k1VerificationKey2019 when key is an ethereumAddress
   */
  'EcdsaSecp256k1RecoveryMethod2020',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1VerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1SignatureVerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'EcdsaPublicKeySecp256k1'],
  'ES256K-R': ['EcdsaSecp256k1VerificationKey2019',
  /**
   * Equivalent to EcdsaSecp256k1VerificationKey2019 when key is an ethereumAddress
   */
  'EcdsaSecp256k1RecoveryMethod2020',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1VerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1SignatureVerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'EcdsaPublicKeySecp256k1'],
  Ed25519: ['ED25519SignatureVerification', 'Ed25519VerificationKey2018'],
  EdDSA: ['ED25519SignatureVerification', 'Ed25519VerificationKey2018']
};
const SELF_ISSUED_V2 = 'https://self-issued.me/v2';
const SELF_ISSUED_V0_1 = 'https://self-issued.me';
const defaultAlg = 'ES256K';
const DID_JSON = 'application/did+json'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function encodeSection(data, shouldCanonicalize = false) {
  if (shouldCanonicalize) {
    return encodeBase64url(canonicalizeData__default['default'](data));
  } else {
    return encodeBase64url(JSON.stringify(data));
  }
}

const NBF_SKEW = 300;

function decodeJWS(jws) {
  const parts = jws.match(/^([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)$/);

  if (parts) {
    return {
      header: JSON.parse(decodeBase64url(parts[1])),
      payload: parts[2],
      signature: parts[3],
      data: `${parts[1]}.${parts[2]}`
    };
  }

  throw new Error('invalid_argument: Incorrect format JWS');
}
/**  @module did-jwt/JWT */

/**
 *  Decodes a JWT and returns an object representing the payload
 *
 *  @example
 *  decodeJWT('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1...')
 *
 *  @param    {String}            jwt                a JSON Web Token to verify
 *  @return   {Object}                               a JS object representing the decoded JWT
 */


function decodeJWT(jwt) {
  if (!jwt) throw new Error('invalid_argument: no JWT passed into decodeJWT');

  try {
    const jws = decodeJWS(jwt);
    const decodedJwt = Object.assign(jws, {
      payload: JSON.parse(decodeBase64url(jws.payload))
    });
    return decodedJwt;
  } catch (e) {
    throw new Error('invalid_argument: Incorrect format JWT');
  }
}

function verifyJWSDecoded({
  header,
  data,
  signature
}, pubKeys) {
  if (!Array.isArray(pubKeys)) pubKeys = [pubKeys];
  const signer = VerifierAlgorithm(header.alg)(data, signature, pubKeys);
  return signer;
}
/**
 *  Verifies given JWS. If the JWS is valid, returns the public key that was
 *  used to sign the JWS, or throws an `Error` if none of the `pubKeys` match.
 *
 *  @example
 *  const pubKey = verifyJWS('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJyZXF1Z....', { publicKeyHex: '0x12341...' })
 *
 *  @param    {String}                          jws         A JWS string to verify
 *  @param    {Array<VerificationMethod> | VerificationMethod}    pubKeys     The public keys used to verify the JWS
 *  @return   {VerificationMethod}                       The public key used to sign the JWS
 */


function verifyJWS(jws, pubKeys) {
  const jwsDecoded = decodeJWS(jws);
  return verifyJWSDecoded(jwsDecoded, pubKeys);
}

function _for(test, update, body) {
  var stage;

  for (;;) {
    var shouldContinue = test();

    if (_isSettledPact(shouldContinue)) {
      shouldContinue = shouldContinue.v;
    }

    if (!shouldContinue) {
      return result;
    }

    if (shouldContinue.then) {
      stage = 0;
      break;
    }

    var result = body();

    if (result && result.then) {
      if (_isSettledPact(result)) {
        result = result.s;
      } else {
        stage = 1;
        break;
      }
    }

    if (update) {
      var updateValue = update();

      if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
        stage = 2;
        break;
      }
    }
  }

  var pact = new _Pact();

  var reject = _settle.bind(null, pact, 2);

  (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
  return pact;

  function _resumeAfterBody(value) {
    result = value;

    do {
      if (update) {
        updateValue = update();

        if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
          updateValue.then(_resumeAfterUpdate).then(void 0, reject);
          return;
        }
      }

      shouldContinue = test();

      if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
        _settle(pact, 1, result);

        return;
      }

      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
        return;
      }

      result = body();

      if (_isSettledPact(result)) {
        result = result.v;
      }
    } while (!result || !result.then);

    result.then(_resumeAfterBody).then(void 0, reject);
  }

  function _resumeAfterTest(shouldContinue) {
    if (shouldContinue) {
      result = body();

      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
      } else {
        _resumeAfterBody(result);
      }
    } else {
      _settle(pact, 1, result);
    }
  }

  function _resumeAfterUpdate() {
    if (shouldContinue = test()) {
      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
      } else {
        _resumeAfterTest(shouldContinue);
      }
    } else {
      _settle(pact, 1, result);
    }
  }
}

const decryptJWE = function (jwe, decrypter) {
  try {
    let _exit;

    function _temp5(_result) {
      if (_exit) ;
      if (cleartext === null) throw new Error('failure: Failed to decrypt');
      return cleartext;
    }

    validateJWE(jwe);
    const protHeader = JSON.parse(decodeBase64url(jwe.protected));
    if (protHeader.enc !== decrypter.enc) throw new Error(`not_supported: Decrypter does not supported: '${protHeader.enc}'`);
    const sealed = toSealed(jwe.ciphertext, jwe.tag);
    const aad = new Uint8Array(Buffer.from(jwe.aad ? `${jwe.protected}.${jwe.aad}` : jwe.protected));
    let cleartext = null;

    const _temp4 = function () {
      if (protHeader.alg === 'dir' && decrypter.alg === 'dir') {
        return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad)).then(function (_decrypter$decrypt) {
          cleartext = _decrypter$decrypt;
        });
      } else return function () {
        if (!jwe.recipients || jwe.recipients.length === 0) {
          throw new Error('bad_jwe: missing recipients');
        } else {
          let i = 0;
          return _for(function () {
            return !cleartext && i < jwe.recipients.length;
          }, function () {
            return i++;
          }, function () {
            const recipient = jwe.recipients[i];
            Object.assign(recipient.header, protHeader);

            const _temp3 = function () {
              if (recipient.header.alg === decrypter.alg) {
                return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad, recipient)).then(function (_decrypter$decrypt2) {
                  cleartext = _decrypter$decrypt2;
                });
              }
            }();

            if (_temp3 && _temp3.then) return _temp3.then(function () {});
          });
        }
      }();
    }();

    return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp5) : _temp5(_temp4));
  } catch (e) {
    return Promise.reject(e);
  }
};

const _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";

function _settle(pact, state, value) {
  if (!pact.s) {
    if (value instanceof _Pact) {
      if (value.s) {
        if (state & 1) {
          state = value.s;
        }

        value = value.v;
      } else {
        value.o = _settle.bind(null, pact, state);
        return;
      }
    }

    if (value && value.then) {
      value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
      return;
    }

    pact.s = state;
    pact.v = value;
    const observer = pact.o;

    if (observer) {
      observer(pact);
    }
  }
}

const _Pact = /*#__PURE__*/function () {
  function _Pact() {}

  _Pact.prototype.then = function (onFulfilled, onRejected) {
    const result = new _Pact();
    const state = this.s;

    if (state) {
      const callback = state & 1 ? onFulfilled : onRejected;

      if (callback) {
        try {
          _settle(result, 1, callback(this.v));
        } catch (e) {
          _settle(result, 2, e);
        }

        return result;
      } else {
        return this;
      }
    }

    this.o = function (_this) {
      try {
        const value = _this.v;

        if (_this.s & 1) {
          _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
        } else if (onRejected) {
          _settle(result, 1, onRejected(value));
        } else {
          _settle(result, 2, value);
        }
      } catch (e) {
        _settle(result, 2, e);
      }
    };

    return result;
  };

  return _Pact;
}();

function _isSettledPact(thenable) {
  return thenable instanceof _Pact && thenable.s & 1;
}

function _forTo(array, body, check) {
  var i = -1,
      pact,
      reject;

  function _cycle(result) {
    try {
      while (++i < array.length && (!check || !check())) {
        result = body(i);

        if (result && result.then) {
          if (_isSettledPact(result)) {
            result = result.v;
          } else {
            result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
            return;
          }
        }
      }

      if (pact) {
        _settle(pact, 1, result);
      } else {
        pact = result;
      }
    } catch (e) {
      _settle(pact || (pact = new _Pact()), 2, e);
    }
  }

  _cycle();

  return pact;
}

function _forOf(target, body, check) {
  if (typeof target[_iteratorSymbol] === "function") {
    var iterator = target[_iteratorSymbol](),
        step,
        pact,
        reject;

    function _cycle(result) {
      try {
        while (!(step = iterator.next()).done && (!check || !check())) {
          result = body(step.value);

          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
              return;
            }
          }
        }

        if (pact) {
          _settle(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle(pact || (pact = new _Pact()), 2, e);
      }
    }

    _cycle();

    if (iterator.return) {
      var _fixup = function (value) {
        try {
          if (!step.done) {
            iterator.return();
          }
        } catch (e) {}

        return value;
      };

      if (pact && pact.then) {
        return pact.then(_fixup, function (e) {
          throw _fixup(e);
        });
      }

      _fixup();
    }

    return pact;
  } // No support for Symbol.iterator


  // No support for Symbol.iterator
  if (!("length" in target)) {
    throw new TypeError("Object is not iterable");
  } // Handle live collections properly


  // Handle live collections properly
  var values = [];

  for (var i = 0; i < target.length; i++) {
    values.push(target[i]);
  }

  return _forTo(values, function (i) {
    return body(values[i]);
  }, check);
}

function validateJWE(jwe) {
  if (!(jwe.protected && jwe.iv && jwe.ciphertext && jwe.tag)) {
    throw new Error('bad_jwe: missing properties');
  }

  if (jwe.recipients) {
    jwe.recipients.map(rec => {
      if (!(rec.header && rec.encrypted_key)) {
        throw new Error('bad_jwe: malformed recipients');
      }
    });
  }
}

function encodeJWE({
  ciphertext,
  tag,
  iv,
  protectedHeader,
  recipient
}, aad) {
  const jwe = {
    protected: protectedHeader,
    iv: bytesToBase64url(iv),
    ciphertext: bytesToBase64url(ciphertext),
    tag: bytesToBase64url(tag)
  };
  if (aad) jwe.aad = bytesToBase64url(aad);
  if (recipient) jwe.recipients = [recipient];
  return jwe;
}

const createJWE = function (cleartext, encrypters, protectedHeader = {}, aad) {
  try {
    if (encrypters[0].alg === 'dir') {
      if (encrypters.length > 1) throw new Error('not_supported: Can only do "dir" encryption to one key.');
      return Promise.resolve(encrypters[0].encrypt(cleartext, protectedHeader, aad)).then(function (encryptionResult) {
        return encodeJWE(encryptionResult, aad);
      });
    } else {
      const tmpEnc = encrypters[0].enc;

      if (!encrypters.reduce((acc, encrypter) => acc && encrypter.enc === tmpEnc, true)) {
        throw new Error('invalid_argument: Incompatible encrypters passed');
      }

      let cek;
      let jwe;

      const _temp2 = _forOf(encrypters, function (encrypter) {
        const _temp = function () {
          if (!cek) {
            return Promise.resolve(encrypter.encrypt(cleartext, protectedHeader, aad)).then(function (encryptionResult) {
              cek = encryptionResult.cek;
              jwe = encodeJWE(encryptionResult, aad);
            });
          } else {
            return Promise.resolve(encrypter.encryptCek == null ? void 0 : encrypter.encryptCek(cek)).then(function (recipient) {
              if (recipient) {
                var _jwe, _jwe$recipients;

                (_jwe = jwe) == null ? void 0 : (_jwe$recipients = _jwe.recipients) == null ? void 0 : _jwe$recipients.push(recipient);
              }
            });
          }
        }();

        if (_temp && _temp.then) return _temp.then(function () {});
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {
        return jwe;
      }) : jwe);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 * Wraps an X25519 secret key into an ECDH method that can be used to compute a shared secret with a public key.
 * @param mySecretKey A `Uint8Array` of length 32 representing the bytes of my secret key
 * @returns an `ECDH` method with the signature `(theirPublicKey: Uint8Array) => Promise<Uint8Array>`
 *
 * @throws 'invalid_argument:...' if the secret key size is wrong
 */

function createX25519ECDH(mySecretKey) {
  if (mySecretKey.length !== 32) {
    throw new Error('invalid_argument: incorrect secret key length for X25519');
  }

  return function (theirPublicKey) {
    try {
      if (theirPublicKey.length !== 32) {
        throw new Error('invalid_argument: incorrect publicKey key length for X25519');
      }

      return Promise.resolve(x25519.sharedKey(mySecretKey, theirPublicKey));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * Recommended encrypter for authenticated encryption (i.e. sender authentication and requires
 * sender private key to encrypt the data).
 * Uses {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU v3 } and
 * {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW v2 }.
 *
 * @param recipientPublicKey the byte array representing the recipient public key
 * @param senderSecret either a Uint8Array representing the sender secret key or
 *   an ECDH function that wraps the key and can promise a shared secret given a public key
 * @param options {@link AuthEncryptParams} used to specify extra header parameters
 *
 * @returns an {@link Encrypter} instance usable with {@link createJWE}
 *
 * NOTE: ECDH-1PU and XC20PKW are proposed drafts in IETF and not a standard yet and
 * are subject to change as new revisions or until the official CFRG specification are released.
 *
 * @beta
 */

const resolveX25519Encrypters = function (dids, resolver) {
  try {
    const encryptersForDID = function (did, resolved = []) {
      try {
        return Promise.resolve(resolver.resolve(did)).then(function ({
          didResolutionMetadata,
          didDocument
        }) {
          function _temp4() {
            var _didDocument$keyAgree, _didDocument$keyAgree2;

            const agreementKeys = (_didDocument$keyAgree = didDocument.keyAgreement) == null ? void 0 : (_didDocument$keyAgree2 = _didDocument$keyAgree.map(key => {
              if (typeof key === 'string') {
                return [...(didDocument.publicKey || []), ...(didDocument.verificationMethod || [])].find(pk => pk.id === key);
              }

              return key;
            })) == null ? void 0 : _didDocument$keyAgree2.filter(key => typeof key !== 'undefined');
            const pks = (agreementKeys == null ? void 0 : agreementKeys.filter(key => {
              // TODO: should be able to use non base58 keys too
              return key.type === 'X25519KeyAgreementKey2019' && Boolean(key.publicKeyBase58);
            })) ?? [];
            if (!pks.length && !controllerEncrypters.length) throw new Error(`no_suitable_keys: Could not find x25519 key for ${did}`);
            return pks.map(pk => x25519Encrypter(base58ToBytes(pk.publicKeyBase58), pk.id)).concat(...controllerEncrypters);
          }

          resolved.push(did);

          if (didResolutionMetadata != null && didResolutionMetadata.error || didDocument == null) {
            throw new Error(`resolver_error: Could not resolve ${did}: ${didResolutionMetadata.error}, ${didResolutionMetadata.message}`);
          }

          let controllerEncrypters = [];

          if (!didDocument.controller && !didDocument.keyAgreement) {
            throw new Error(`no_suitable_keys: Could not find x25519 key for ${did}`);
          }

          const _temp3 = function () {
            if (didDocument.controller) {
              let controllers = Array.isArray(didDocument.controller) ? didDocument.controller : [didDocument.controller];
              controllers = controllers.filter(c => !resolved.includes(c));
              const encrypterPromises = controllers.map(did => encryptersForDID(did, resolved).catch(() => {
                return [];
              }));
              return Promise.resolve(Promise.all(encrypterPromises)).then(function (encrypterArrays) {
                controllerEncrypters = [].concat(...encrypterArrays);
              });
            }
          }();

          return _temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    const encrypterPromises = dids.map(did => encryptersForDID(did));
    return Promise.resolve(Promise.all(encrypterPromises)).then(function (encrypterArrays) {
      const flattenedArray = [].concat(...encrypterArrays);
      return flattenedArray;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
function createAuthEncrypter(recipientPublicKey, senderSecret, options = {}) {
  return xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2(recipientPublicKey, senderSecret, options);
}
/**
 * Recommended encrypter for anonymous encryption (i.e. no sender authentication).
 * Uses {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | ECDH-ES+XC20PKW v2}.
 *
 * @param publicKey the byte array representing the recipient public key
 * @param options {@link AnonEncryptParams} used to specify the recipient key ID (`kid`)
 *
 * @returns an {@link Encrypter} instance usable with {@link createJWE}
 *
 * NOTE: ECDH-ES+XC20PKW is a proposed draft in IETF and not a standard yet and
 * is subject to change as new revisions or until the official CFRG specification is released.
 *
 * @beta
 */

function createAnonEncrypter(publicKey, options = {}) {
  return x25519Encrypter(publicKey, options == null ? void 0 : options.kid);
}
/**
 * Recommended decrypter for authenticated encryption (i.e. sender authentication and requires
 * sender public key to decrypt the data).
 * Uses {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU v3 } and
 * {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW v2 }.
 *
 * @param recipientSecret either a Uint8Array representing the recipient secret key or
 *   an ECDH function that wraps the key and can promise a shared secret given a public key
 * @param senderPublicKey the byte array representing the sender public key
 *
 * @returns a {@link Decrypter} instance usable with {@link decryptJWE}
 *
 * NOTE: ECDH-1PU and XC20PKW are proposed drafts in IETF and not a standard yet and
 * are subject to change as new revisions or until the official CFRG specification are released.
 *
 * @beta
 */

function createAuthDecrypter(recipientSecret, senderPublicKey) {
  return xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2(recipientSecret, senderPublicKey);
}
/**
 * Recommended decrypter for anonymous encryption (i.e. no sender authentication).
 * Uses {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | ECDH-ES+XC20PKW v2 }.
 *
 * @param recipientSecret either a Uint8Array representing the recipient secret key or
 *   an ECDH function that wraps the key and can promise a shared secret given a public key
 *
 * @returns a {@link Decrypter} instance usable with {@link decryptJWE}
 *
 * NOTE: ECDH-ES+XC20PKW is a proposed draft in IETF and not a standard yet and
 * is subject to change as new revisions or until the official CFRG specification is released.
 *
 * @beta
 */

function createAnonDecrypter(recipientSecret) {
  return x25519Decrypter(recipientSecret);
}

function xc20pEncrypter(key) {
  const cipher = new xchacha20poly1305.XChaCha20Poly1305(key);
  return (cleartext, aad) => {
    const iv = random.randomBytes(cipher.nonceLength);
    const sealed = cipher.seal(iv, cleartext, aad);
    return {
      ciphertext: sealed.subarray(0, sealed.length - cipher.tagLength),
      tag: sealed.subarray(sealed.length - cipher.tagLength),
      iv
    };
  };
}

function xc20pDirEncrypter(key) {
  const encrypt = function (cleartext, protectedHeader = {}, aad) {
    try {
      const protHeader = encodeBase64url(JSON.stringify(Object.assign({
        alg
      }, protectedHeader, {
        enc
      })));
      const encodedAad = new Uint8Array(Buffer.from(aad ? `${protHeader}.${bytesToBase64url(aad)}` : protHeader));
      return Promise.resolve({ ...xc20pEncrypt(cleartext, encodedAad),
        protectedHeader: protHeader
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const xc20pEncrypt = xc20pEncrypter(key);
  const enc = 'XC20P';
  const alg = 'dir';
  return {
    alg,
    enc,
    encrypt
  };
}
function xc20pDirDecrypter(key) {
  const decrypt = function (sealed, iv, aad) {
    try {
      return Promise.resolve(cipher.open(iv, sealed, aad));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const cipher = new xchacha20poly1305.XChaCha20Poly1305(key);
  return {
    alg: 'dir',
    enc: 'XC20P',
    decrypt
  };
}
function x25519Encrypter(publicKey, kid) {
  const encrypt = function (cleartext, protectedHeader = {}, aad) {
    try {
      // we won't want alg to be set to dir from xc20pDirEncrypter
      Object.assign(protectedHeader, {
        alg: undefined
      }); // Content Encryption Key

      const cek = random.randomBytes(32);
      return Promise.resolve(xc20pDirEncrypter(cek).encrypt(cleartext, protectedHeader, aad)).then(function (_xc20pDirEncrypter$en) {
        return Promise.resolve(encryptCek(cek)).then(function (_encryptCek) {
          return { ..._xc20pDirEncrypter$en,
            recipient: _encryptCek,
            cek
          };
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const encryptCek = function (cek) {
    try {
      const epk = x25519.generateKeyPair();
      const sharedSecret = x25519.sharedKey(epk.secretKey, publicKey); // Key Encryption Key

      const kek = concatKDF(sharedSecret, keyLen, alg);
      const res = xc20pEncrypter(kek)(cek);
      const recipient = {
        encrypted_key: bytesToBase64url(res.ciphertext),
        header: {
          alg,
          iv: bytesToBase64url(res.iv),
          tag: bytesToBase64url(res.tag),
          epk: {
            kty: 'OKP',
            crv,
            x: bytesToBase64url(epk.publicKey)
          }
        }
      };
      if (kid) recipient.header.kid = kid;
      return Promise.resolve(recipient);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-ES+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  return {
    alg,
    enc: 'XC20P',
    encrypt,
    encryptCek
  };
}
/**
 * Implements ECDH-1PU+XC20PKW with XChaCha20Poly1305 based on the following specs:
 *   - {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW}
 *   - {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU}
 */

function xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2(recipientPublicKey, senderSecret, options = {}) {
  const encrypt = function (cleartext, protectedHeader = {}, aad) {
    try {
      // we won't want alg to be set to dir from xc20pDirEncrypter
      Object.assign(protectedHeader, {
        alg: undefined
      }); // Content Encryption Key

      const cek = random.randomBytes(32);
      return Promise.resolve(xc20pDirEncrypter(cek).encrypt(cleartext, protectedHeader, aad)).then(function (_xc20pDirEncrypter$en2) {
        return Promise.resolve(encryptCek(cek)).then(function (_encryptCek2) {
          return { ..._xc20pDirEncrypter$en2,
            recipient: _encryptCek2,
            cek
          };
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const encryptCek = function (cek) {
    try {
      function _temp2() {
        const sharedSecret = new Uint8Array(zE.length + zS.length);
        sharedSecret.set(zE);
        sharedSecret.set(zS, zE.length); // Key Encryption Key

        const kek = concatKDF(sharedSecret, keyLen, alg, partyUInfo, partyVInfo);
        const res = xc20pEncrypter(kek)(cek);
        const recipient = {
          encrypted_key: bytesToBase64url(res.ciphertext),
          header: {
            alg,
            iv: bytesToBase64url(res.iv),
            tag: bytesToBase64url(res.tag),
            epk: {
              kty: 'OKP',
              crv,
              x: bytesToBase64url(epk.publicKey)
            }
          }
        };
        if (options.kid) recipient.header.kid = options.kid;
        if (options.apu) recipient.header.apu = options.apu;
        if (options.apv) recipient.header.apv = options.apv;
        return recipient;
      }

      const epk = x25519.generateKeyPair();
      const zE = x25519.sharedKey(epk.secretKey, recipientPublicKey); // ECDH-1PU requires additional shared secret between
      // static key of sender and static key of recipient

      let zS;

      const _temp = function () {
        if (senderSecret instanceof Uint8Array) {
          zS = x25519.sharedKey(senderSecret, recipientPublicKey);
        } else {
          return Promise.resolve(senderSecret(recipientPublicKey)).then(function (_senderSecret) {
            zS = _senderSecret;
          });
        }
      }();

      return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-1PU+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  let partyUInfo;
  let partyVInfo;
  if (options.apu !== undefined) partyUInfo = base64ToBytes(options.apu);
  if (options.apv !== undefined) partyVInfo = base64ToBytes(options.apv);
  return {
    alg,
    enc: 'XC20P',
    encrypt,
    encryptCek
  };
}

function validateHeader(header) {
  if (!(header && header.epk && header.iv && header.tag)) {
    throw new Error('bad_jwe: malformed header');
  }
}

function x25519Decrypter(receiverSecret) {
  const decrypt = function (sealed, iv, aad, recipient) {
    try {
      var _recipient, _recipient$header$epk;

      function _temp6() {
        // Key Encryption Key
        const kek = concatKDF(sharedSecret, keyLen, alg); // Content Encryption Key

        const sealedCek = toSealed(recipient.encrypted_key, recipient.header.tag);
        return Promise.resolve(xc20pDirDecrypter(kek).decrypt(sealedCek, base64ToBytes(recipient.header.iv))).then(function (cek) {
          return cek === null ? null : xc20pDirDecrypter(cek).decrypt(sealed, iv, aad);
        });
      }

      validateHeader((_recipient = recipient) == null ? void 0 : _recipient.header);
      recipient = recipient;
      if (((_recipient$header$epk = recipient.header.epk) == null ? void 0 : _recipient$header$epk.crv) !== crv || typeof recipient.header.epk.x == 'undefined') return Promise.resolve(null);
      const publicKey = base64ToBytes(recipient.header.epk.x);
      let sharedSecret;

      const _temp5 = function () {
        if (receiverSecret instanceof Uint8Array) {
          sharedSecret = x25519.sharedKey(receiverSecret, publicKey);
        } else {
          return Promise.resolve(receiverSecret(publicKey)).then(function (_receiverSecret) {
            sharedSecret = _receiverSecret;
          });
        }
      }();

      return Promise.resolve(_temp5 && _temp5.then ? _temp5.then(_temp6) : _temp6(_temp5));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-ES+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  return {
    alg,
    enc: 'XC20P',
    decrypt
  };
}
/**
 * Implements ECDH-1PU+XC20PKW with XChaCha20Poly1305 based on the following specs:
 *   - {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW}
 *   - {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU}
 */

function xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2(recipientSecret, senderPublicKey) {
  const decrypt = function (sealed, iv, aad, recipient) {
    try {
      var _recipient$header$epk2;

      function _temp8() {
        const sharedSecret = new Uint8Array(zE.length + zS.length);
        sharedSecret.set(zE);
        sharedSecret.set(zS, zE.length); // Key Encryption Key

        let producerInfo;
        let consumerInfo;
        if (recipient.header.apu) producerInfo = base64ToBytes(recipient.header.apu);
        if (recipient.header.apv) consumerInfo = base64ToBytes(recipient.header.apv);
        const kek = concatKDF(sharedSecret, keyLen, alg, producerInfo, consumerInfo); // Content Encryption Key

        const sealedCek = toSealed(recipient.encrypted_key, recipient.header.tag);
        return Promise.resolve(xc20pDirDecrypter(kek).decrypt(sealedCek, base64ToBytes(recipient.header.iv))).then(function (cek) {
          return cek === null ? null : xc20pDirDecrypter(cek).decrypt(sealed, iv, aad);
        });
      }

      recipient = recipient;
      validateHeader(recipient.header);
      if (((_recipient$header$epk2 = recipient.header.epk) == null ? void 0 : _recipient$header$epk2.crv) !== crv || typeof recipient.header.epk.x == 'undefined') return Promise.resolve(null); // ECDH-1PU requires additional shared secret between
      // static key of sender and static key of recipient

      const publicKey = base64ToBytes(recipient.header.epk.x);
      let zE;
      let zS;

      const _temp7 = function () {
        if (recipientSecret instanceof Uint8Array) {
          zE = x25519.sharedKey(recipientSecret, publicKey);
          zS = x25519.sharedKey(recipientSecret, senderPublicKey);
        } else {
          return Promise.resolve(recipientSecret(publicKey)).then(function (_recipientSecret) {
            zE = _recipientSecret;
            return Promise.resolve(recipientSecret(senderPublicKey)).then(function (_recipientSecret2) {
              zS = _recipientSecret2;
            });
          });
        }
      }();

      return Promise.resolve(_temp7 && _temp7.then ? _temp7.then(_temp8) : _temp8(_temp7));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-1PU+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  return {
    alg,
    enc: 'XC20P',
    decrypt
  };
}

exports.ES256KSigner = ES256KSigner;
exports.EdDSASigner = EdDSASigner;
exports.EllipticSigner = EllipticSigner;
exports.NaclSigner = NaclSigner;
exports.SimpleSigner = SimpleSigner;
exports.createAnonDecrypter = createAnonDecrypter;
exports.createAnonEncrypter = createAnonEncrypter;
exports.createAuthDecrypter = createAuthDecrypter;
exports.createAuthEncrypter = createAuthEncrypter;
exports.createJWE = createJWE;
exports.createJWS = createJWS;
exports.createJWT = createJWT;
exports.createX25519ECDH = createX25519ECDH;
exports.decodeJWT = decodeJWT;
exports.decryptJWE = decryptJWE;
exports.resolveX25519Encrypters = resolveX25519Encrypters;
exports.toEthereumAddress = toEthereumAddress;
exports.verifyJWS = verifyJWS;
exports.verifyJWT = verifyJWT;
exports.x25519Decrypter = x25519Decrypter;
exports.x25519Encrypter = x25519Encrypter;
exports.xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2 = xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2;
exports.xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2 = xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2;
exports.xc20pDirDecrypter = xc20pDirDecrypter;
exports.xc20pDirEncrypter = xc20pDirEncrypter;
//# sourceMappingURL=index.cjs.map


/***/ }),

/***/ 80317:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qu": () => (/* binding */ NaclSigner),
/* harmony export */   "Y": () => (/* binding */ x25519Decrypter),
/* harmony export */   "jB": () => (/* binding */ decryptJWE),
/* harmony export */   "pk": () => (/* binding */ createJWS)
/* harmony export */ });
/* unused harmony exports ES256KSigner, EdDSASigner, EllipticSigner, SimpleSigner, createAnonDecrypter, createAnonEncrypter, createAuthDecrypter, createAuthEncrypter, createJWE, createJWT, createX25519ECDH, decodeJWT, resolveX25519Encrypters, toEthereumAddress, verifyJWS, verifyJWT, x25519Encrypter, xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2, xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2, xc20pDirDecrypter, xc20pDirEncrypter */
/* harmony import */ var uint8arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79088);
/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19261);
/* harmony import */ var _stablelib_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58161);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94474);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75367);
/* harmony import */ var _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96068);
/* harmony import */ var canonicalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56899);
/* harmony import */ var bech32__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23685);
/* harmony import */ var _stablelib_x25519__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87620);
/* harmony import */ var _stablelib_xchacha20poly1305__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29014);
/* harmony import */ var _stablelib_random__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1651);
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];












function bytesToBase64url(b) {
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(b, 'base64url');
}
function base64ToBytes(s) {
  const inputBase64Url = s.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(inputBase64Url, 'base64url');
}
function base58ToBytes(s) {
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(s, 'base58btc');
}
function bytesToBase58(b) {
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(b, 'base58btc');
}
function hexToBytes(s) {
  const input = s.startsWith('0x') ? s.substring(2) : s;
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(input.toLowerCase(), 'base16');
}
function encodeBase64url(s) {
  return bytesToBase64url(uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(s));
}
function decodeBase64url(s) {
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(base64ToBytes(s));
}
function bytesToHex(b) {
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(b, 'base16');
}
function stringToBytes(s) {
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(s);
}
function toJose({
  r,
  s,
  recoveryParam
}, recoverable) {
  const jose = new Uint8Array(recoverable ? 65 : 64);
  jose.set(uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(r, 'base16'), 0);
  jose.set(uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(s, 'base16'), 32);

  if (recoverable) {
    if (typeof recoveryParam === 'undefined') {
      throw new Error('Signer did not return a recoveryParam');
    }

    jose[64] = recoveryParam;
  }

  return bytesToBase64url(jose);
}
function fromJose(signature) {
  const signatureBytes = base64ToBytes(signature);

  if (signatureBytes.length < 64 || signatureBytes.length > 65) {
    throw new TypeError(`Wrong size for signature. Expected 64 or 65 bytes, but got ${signatureBytes.length}`);
  }

  const r = bytesToHex(signatureBytes.slice(0, 32));
  const s = bytesToHex(signatureBytes.slice(32, 64));
  const recoveryParam = signatureBytes.length === 65 ? signatureBytes[64] : undefined;
  return {
    r,
    s,
    recoveryParam
  };
}
function toSealed(ciphertext, tag) {
  return uint8arrays__WEBPACK_IMPORTED_MODULE_0__.concat([base64ToBytes(ciphertext), base64ToBytes(tag)]);
}
const hexMatcher = /^(0x)?([a-fA-F0-9]{64}|[a-fA-F0-9]{128})$/;
const base58Matcher = /^([1-9A-HJ-NP-Za-km-z]{44}|[1-9A-HJ-NP-Za-km-z]{88})$/;
const base64Matcher = /^([0-9a-zA-Z=\-_+/]{43}|[0-9a-zA-Z=\-_+/]{86})(={0,2})$/;
/**
 * Parses a private key and returns the Uint8Array representation.
 * This method uses an heuristic to determine the key encoding to then be able to parse it into 32 or 64 bytes.
 *
 * @param input a 32 or 64 byte key presented either as a Uint8Array or as a hex, base64, or base58btc encoded string
 *
 * @throws TypeError('Invalid private key format') if the key doesn't match any of the accepted formats or length
 */

function parseKey(input) {
  if (typeof input === 'string') {
    if (hexMatcher.test(input)) {
      return hexToBytes(input);
    } else if (base58Matcher.test(input)) {
      return base58ToBytes(input);
    } else if (base64Matcher.test(input)) {
      return base64ToBytes(input);
    } else {
      throw TypeError('bad_key: Invalid private key format');
    }
  } else if (input instanceof Uint8Array) {
    return input;
  } else {
    throw TypeError('bad_key: Invalid private key format');
  }
}
function leftpad(data, size = 64) {
  if (data.length === size) return data;
  return '0'.repeat(size - data.length) + data;
}

function sha256(payload) {
  const data = typeof payload === 'string' ? uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(payload) : payload;
  return (0,_stablelib_sha256__WEBPACK_IMPORTED_MODULE_2__.hash)(data);
}
function keccak(data) {
  return new Uint8Array(js_sha3__WEBPACK_IMPORTED_MODULE_3__.keccak_256.arrayBuffer(data));
}
function toEthereumAddress(hexPublicKey) {
  const hashInput = uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(hexPublicKey.slice(2), 'base16');
  return `0x${uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(keccak(hashInput).slice(-20), 'base16')}`;
}

function writeUint32BE(value, array = new Uint8Array(4)) {
  const encoded = uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(value.toString(), 'base10');
  array.set(encoded, 4 - encoded.length);
  return array;
}

const lengthAndInput = input => uint8arrays__WEBPACK_IMPORTED_MODULE_0__.concat([writeUint32BE(input.length), input]); // This implementation of concatKDF was inspired by these two implementations:
// https://github.com/digitalbazaar/minimal-cipher/blob/master/algorithms/ecdhkdf.js
// https://github.com/panva/jose/blob/master/lib/jwa/ecdh/derive.js


function concatKDF(secret, keyLen, alg, producerInfo, consumerInfo) {
  if (keyLen !== 256) throw new Error(`Unsupported key length: ${keyLen}`);
  const value = uint8arrays__WEBPACK_IMPORTED_MODULE_0__.concat([lengthAndInput(uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(alg)), lengthAndInput(typeof producerInfo === 'undefined' ? new Uint8Array(0) : producerInfo), lengthAndInput(typeof consumerInfo === 'undefined' ? new Uint8Array(0) : consumerInfo), writeUint32BE(keyLen)]); // since our key lenght is 256 we only have to do one round

  const roundNumber = 1;
  return (0,_stablelib_sha256__WEBPACK_IMPORTED_MODULE_2__.hash)(uint8arrays__WEBPACK_IMPORTED_MODULE_0__.concat([writeUint32BE(roundNumber), secret, value]));
}

const secp256k1$1 = new elliptic__WEBPACK_IMPORTED_MODULE_4__.ec('secp256k1');
/**
 *  Creates a configured signer function for signing data using the ES256K (secp256k1 + sha256) algorithm.
 *
 *  The signing function itself takes the data as a `Uint8Array` or `string` and returns a `base64Url`-encoded signature
 *
 *  @example
 *  ```typescript
 *  const sign: Signer = ES256KSigner(process.env.PRIVATE_KEY)
 *  const signature: string = await sign(data)
 *  ```
 *
 *  @param    {String}    privateKey   a private key as `Uint8Array` or encoded as `base64`, `base58`, or `hex` string
 *  @param    {Boolean}   recoverable  an optional flag to add the recovery param to the generated signatures
 *  @return   {Function}               a configured signer function `(data: string | Uint8Array): Promise<string>`
 */

function ES256KSigner(privateKey, recoverable = false) {
  const privateKeyBytes = parseKey(privateKey);

  if (privateKeyBytes.length !== 32) {
    throw new Error(`bad_key: Invalid private key format. Expecting 32 bytes, but got ${privateKeyBytes.length}`);
  }

  const keyPair = secp256k1$1.keyFromPrivate(privateKeyBytes);
  return function (data) {
    try {
      const {
        r,
        s,
        recoveryParam
      } = keyPair.sign(sha256(data));
      return Promise.resolve(toJose({
        r: leftpad(r.toString('hex')),
        s: leftpad(s.toString('hex')),
        recoveryParam
      }, recoverable));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * @deprecated Please use ES256KSigner
 *  The SimpleSigner returns a configured function for signing data.
 *
 *  @example
 *  const signer = SimpleSigner(process.env.PRIVATE_KEY)
 *  signer(data, (err, signature) => {
 *    ...
 *  })
 *
 *  @param    {String}         hexPrivateKey    a hex encoded private key
 *  @return   {Function}                     a configured signer function
 */

function SimpleSigner(hexPrivateKey) {
  const signer = ES256KSigner(hexPrivateKey, true);
  return function (data) {
    try {
      return Promise.resolve(signer(data)).then(fromJose);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * @deprecated Please use ES256KSigner
 *  The EllipticSigner returns a configured function for signing data.
 *
 *  @example
 *  ```typescript
 *  const signer = EllipticSigner(process.env.PRIVATE_KEY)
 *  signer(data).then( (signature: string) => {
 *    ...
 *  })
 *  ```
 *
 *  @param    {String}         hexPrivateKey    a hex encoded private key
 *  @return   {Function}                        a configured signer function
 */

function EllipticSigner(hexPrivateKey) {
  return ES256KSigner(hexPrivateKey);
}

/**
 *  Creates a configured signer function for signing data using the EdDSA (Ed25519) algorithm.
 *
 *  The signing function itself takes the data as a `Uint8Array` or `string` and returns a `base64Url`-encoded signature
 *
 *  @example
 *  ```typescript
 *  const sign: Signer = EdDSASigner(process.env.PRIVATE_KEY)
 *  const signature: string = await sign(data)
 *  ```
 *
 *  @param    {String}    secretKey   a 64 byte secret key as `Uint8Array` or encoded as `base64`, `base58`, or `hex` string
 *  @return   {Function}              a configured signer function `(data: string | Uint8Array): Promise<string>`
 */

function EdDSASigner(secretKey) {
  const privateKeyBytes = parseKey(secretKey);

  if (privateKeyBytes.length !== 64) {
    throw new Error(`bad_key: Invalid private key format. Expecting 64 bytes, but got ${privateKeyBytes.length}`);
  }

  return function (data) {
    try {
      const dataBytes = typeof data === 'string' ? stringToBytes(data) : data;
      const sig = (0,_stablelib_ed25519__WEBPACK_IMPORTED_MODULE_5__.sign)(privateKeyBytes, dataBytes);
      return Promise.resolve(bytesToBase64url(sig));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * @deprecated Please use EdDSASigner
 *
 *  The NaclSigner returns a configured function for signing data using the Ed25519 algorithm.
 *
 *  The signing function itself takes the data as a `string` or `Uint8Array` parameter and returns a `base64Url`-encoded signature.
 *
 *  @example
 *  const signer = NaclSigner(process.env.PRIVATE_KEY)
 *  const data: string = '...'
 *  signer(data).then( (signature: string) => {
 *    ...
 *  })
 *
 *  @param    {String}   base64PrivateKey    a 64 byte base64 encoded private key
 *  @return   {Function}                     a configured signer function
 */

function NaclSigner(base64PrivateKey) {
  return EdDSASigner(base64PrivateKey);
}

function instanceOfEcdsaSignature(object) {
  return typeof object === 'object' && 'r' in object && 's' in object;
}

function ES256KSignerAlg(recoverable) {
  return function sign(payload, signer) {
    try {
      return Promise.resolve(signer(payload)).then(function (signature) {
        if (instanceOfEcdsaSignature(signature)) {
          return toJose(signature, recoverable);
        } else {
          if (recoverable && typeof fromJose(signature).recoveryParam === 'undefined') {
            throw new Error(`not_supported: ES256K-R not supported when signer doesn't provide a recovery param`);
          }

          return signature;
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function Ed25519SignerAlg() {
  return function sign(payload, signer) {
    try {
      return Promise.resolve(signer(payload)).then(function (signature) {
        if (!instanceOfEcdsaSignature(signature)) {
          return signature;
        } else {
          throw new Error('invalid_config: expected a signer function that returns a string instead of signature object');
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
const algorithms$1 = {
  ES256K: ES256KSignerAlg(),
  // This is a non-standard algorithm but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/146
  'ES256K-R': ES256KSignerAlg(true),
  // This is actually incorrect but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/130
  Ed25519: Ed25519SignerAlg(),
  EdDSA: Ed25519SignerAlg()
};

function SignerAlg(alg) {
  const impl = algorithms$1[alg];
  if (!impl) throw new Error(`not_supported: Unsupported algorithm ${alg}`);
  return impl;
}

// https://github.com/crypto-browserify/ripemd160/blob/master/index.js
const zl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
const zr = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
const sl = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
const sr = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
const hl = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e];
const hr = [0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000];

function rotl(x, n) {
  return x << n | x >>> 32 - n;
}

function fn1(a, b, c, d, e, m, k, s) {
  return rotl(a + (b ^ c ^ d) + m + k | 0, s) + e | 0;
}

function fn2(a, b, c, d, e, m, k, s) {
  return rotl(a + (b & c | ~b & d) + m + k | 0, s) + e | 0;
}

function fn3(a, b, c, d, e, m, k, s) {
  return rotl(a + ((b | ~c) ^ d) + m + k | 0, s) + e | 0;
}

function fn4(a, b, c, d, e, m, k, s) {
  return rotl(a + (b & d | c & ~d) + m + k | 0, s) + e | 0;
}

function fn5(a, b, c, d, e, m, k, s) {
  return rotl(a + (b ^ (c | ~d)) + m + k | 0, s) + e | 0;
}

class Ripemd160 {
  // state
  constructor(blockSize = 64) {
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
    this._blockOffset = 0;
    this._block = void 0;
    this._blockSize = void 0;
    this._length = [0, 0, 0, 0];
    this._finalized = void 0;

    this.update = data => {
      if (this._finalized) throw new Error('Digest already called'); // consume data

      const block = this._block;
      let offset = 0;

      while (this._blockOffset + data.length - offset >= this._blockSize) {
        for (let i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++];

        this._update();

        this._blockOffset = 0;
      }

      while (offset < data.length) block[this._blockOffset++] = data[offset++]; // update length


      for (let j = 0, carry = data.length * 8; carry > 0; ++j) {
        this._length[j] += carry;
        carry = this._length[j] / 0x0100000000 | 0;
        if (carry > 0) this._length[j] -= 0x0100000000 * carry;
      }

      return this;
    };

    this.digest = () => {
      if (this._finalized) throw new Error('Digest already called');
      this._finalized = true;

      const digest = this._digest(); // reset state


      this._block.fill(0);

      this._blockOffset = 0;

      for (let i = 0; i < 4; ++i) this._length[i] = 0;

      return digest;
    };

    this._update = () => {
      const words = new Array(16);
      const temp = new DataView(this._block.buffer);

      for (let j = 0; j < 16; ++j) words[j] = words[j] = temp.getInt32(j * 4, true);

      let al = this._a | 0;
      let bl = this._b | 0;
      let cl = this._c | 0;
      let dl = this._d | 0;
      let el = this._e | 0;
      let ar = this._a | 0;
      let br = this._b | 0;
      let cr = this._c | 0;
      let dr = this._d | 0;
      let er = this._e | 0; // computation

      for (let i = 0; i < 80; i += 1) {
        let tl;
        let tr;

        if (i < 16) {
          tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i]);
          tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i]);
        } else if (i < 32) {
          tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i]);
          tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i]);
        } else if (i < 48) {
          tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i]);
          tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i]);
        } else if (i < 64) {
          tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i]);
          tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i]);
        } else {
          // if (i<80) {
          tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i]);
          tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i]);
        }

        al = el;
        el = dl;
        dl = rotl(cl, 10);
        cl = bl;
        bl = tl;
        ar = er;
        er = dr;
        dr = rotl(cr, 10);
        cr = br;
        br = tr;
      } // update state


      const t = this._b + cl + dr | 0;
      this._b = this._c + dl + er | 0;
      this._c = this._d + el + ar | 0;
      this._d = this._e + al + br | 0;
      this._e = this._a + bl + cr | 0;
      this._a = t;
    };

    this._digest = () => {
      // create padding and handle blocks
      this._block[this._blockOffset++] = 0x80;

      if (this._blockOffset > 56) {
        this._block.fill(0, this._blockOffset, 64);

        this._update();

        this._blockOffset = 0;
      }

      this._block.fill(0, this._blockOffset, 56);

      const temp = new DataView(this._block.buffer);
      temp.setUint32(56, this._length[0], true);
      temp.setUint32(60, this._length[1], true);
      this._block = new Uint8Array(temp.buffer);

      this._update(); // produce result


      const buffer = new DataView(new Uint8Array(20).buffer);
      buffer.setInt32(0, this._a, true);
      buffer.setInt32(4, this._b, true);
      buffer.setInt32(8, this._c, true);
      buffer.setInt32(12, this._d, true);
      buffer.setInt32(16, this._e, true);
      return new Uint8Array(buffer.buffer);
    };

    this._block = new Uint8Array(blockSize);
    this._blockSize = blockSize;
    this._blockOffset = 0;
    this._length = [0, 0, 0, 0];
    this._finalized = false;
  }

}

const publicKeyToAddress$1 = (publicKey, otherAddress) => {
  // Use the same version/prefix byte as the given address.
  const version = uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(base58ToBytes(otherAddress).slice(0, 1), 'hex');
  const publicKeyBuffer = uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(publicKey, 'hex');
  const publicKeyHash = new Ripemd160().update(sha256(publicKeyBuffer)).digest();
  const step1 = version + uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(publicKeyHash, 'hex');
  const step2 = sha256(uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(step1, 'hex'));
  const step3 = sha256(step2);
  const checksum = uint8arrays__WEBPACK_IMPORTED_MODULE_0__.toString(step3, 'hex').substring(0, 8);
  const step4 = step1 + checksum;
  return bytesToBase58(uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(step4, 'hex'));
};

const EC = elliptic__WEBPACK_IMPORTED_MODULE_4__.ec;
const publicKeyToAddress = (publicKey, prefix) => {
  const ec = new EC('secp256k1');
  const compressedPublicKey = ec.keyFromPublic(publicKey, 'hex').getPublic().encode('hex', true);
  const publicKeyBuffer = uint8arrays__WEBPACK_IMPORTED_MODULE_0__.fromString(compressedPublicKey, 'hex');
  const hash = new Ripemd160().update(sha256(publicKeyBuffer)).digest();
  const words = bech32__WEBPACK_IMPORTED_MODULE_7__.bech32.toWords(hash);
  return bech32__WEBPACK_IMPORTED_MODULE_7__.bech32.encode(prefix, words).replace(prefix, '');
};

const verifyBlockchainAccountId = (publicKey, blockchainAccountId) => {
  if (blockchainAccountId) {
    const chain = blockchainAccountId.split(':');

    switch (chain[0]) {
      case 'bip122':
        chain[chain.length - 1] = publicKeyToAddress$1(publicKey, chain[chain.length - 1]);
        break;

      case 'cosmos':
        chain[chain.length - 1] = publicKeyToAddress(publicKey, chain[1]);
        break;

      case 'eip155':
        chain[chain.length - 1] = toEthereumAddress(publicKey);
        break;

      default:
        return false;
    }

    return chain.join(':') === blockchainAccountId;
  }

  return false;
};

const secp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_4__.ec('secp256k1'); // converts a JOSE signature to it's components

function toSignatureObject(signature, recoverable = false) {
  const rawSig = base64ToBytes(signature);

  if (rawSig.length !== (recoverable ? 65 : 64)) {
    throw new Error('wrong signature length');
  }

  const r = bytesToHex(rawSig.slice(0, 32));
  const s = bytesToHex(rawSig.slice(32, 64));
  const sigObj = {
    r,
    s
  };

  if (recoverable) {
    sigObj.recoveryParam = rawSig[64];
  }

  return sigObj;
}

function extractPublicKeyBytes(pk) {
  if (pk.publicKeyBase58) {
    return base58ToBytes(pk.publicKeyBase58);
  } else if (pk.publicKeyBase64) {
    return base64ToBytes(pk.publicKeyBase64);
  } else if (pk.publicKeyHex) {
    return hexToBytes(pk.publicKeyHex);
  } else if (pk.publicKeyJwk && pk.publicKeyJwk.crv === 'secp256k1' && pk.publicKeyJwk.x && pk.publicKeyJwk.y) {
    return hexToBytes(secp256k1.keyFromPublic({
      x: bytesToHex(base64ToBytes(pk.publicKeyJwk.x)),
      y: bytesToHex(base64ToBytes(pk.publicKeyJwk.y))
    }).getPublic('hex'));
  } else if (pk.publicKeyMultibase) {
    const {
      base16,
      base58btc,
      base64,
      base64url
    } = multiformats_basics__WEBPACK_IMPORTED_MODULE_1__.bases;
    const baseDecoder = base16.decoder.or(base58btc.decoder.or(base64.decoder.or(base64url.decoder)));
    return baseDecoder.decode(pk.publicKeyMultibase);
  }

  return new Uint8Array();
}

function verifyES256K(data, signature, authenticators) {
  const hash = sha256(data);
  const sigObj = toSignatureObject(signature);
  const fullPublicKeys = authenticators.filter(({
    ethereumAddress,
    blockchainAccountId
  }) => {
    return typeof ethereumAddress === 'undefined' && typeof blockchainAccountId === 'undefined';
  });
  const blockchainAddressKeys = authenticators.filter(({
    ethereumAddress,
    blockchainAccountId
  }) => {
    return typeof ethereumAddress !== 'undefined' || typeof blockchainAccountId !== 'undefined';
  });
  let signer = fullPublicKeys.find(pk => {
    try {
      const pubBytes = extractPublicKeyBytes(pk);
      return secp256k1.keyFromPublic(pubBytes).verify(hash, sigObj);
    } catch (err) {
      return false;
    }
  });

  if (!signer && blockchainAddressKeys.length > 0) {
    signer = verifyRecoverableES256K(data, signature, blockchainAddressKeys);
  }

  if (!signer) throw new Error('invalid_signature: Signature invalid for JWT');
  return signer;
}
function verifyRecoverableES256K(data, signature, authenticators) {
  let signatures;

  if (signature.length > 86) {
    signatures = [toSignatureObject(signature, true)];
  } else {
    const so = toSignatureObject(signature, false);
    signatures = [{ ...so,
      recoveryParam: 0
    }, { ...so,
      recoveryParam: 1
    }];
  }

  const checkSignatureAgainstSigner = sigObj => {
    const hash = sha256(data); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const recoveredKey = secp256k1.recoverPubKey(hash, sigObj, sigObj.recoveryParam);
    const recoveredPublicKeyHex = recoveredKey.encode('hex');
    const recoveredCompressedPublicKeyHex = recoveredKey.encode('hex', true);
    const recoveredAddress = toEthereumAddress(recoveredPublicKeyHex);
    const signer = authenticators.find(pk => {
      var _pk$ethereumAddress, _pk$blockchainAccount, _pk$blockchainAccount2;

      const keyHex = bytesToHex(extractPublicKeyBytes(pk));
      return keyHex === recoveredPublicKeyHex || keyHex === recoveredCompressedPublicKeyHex || ((_pk$ethereumAddress = pk.ethereumAddress) == null ? void 0 : _pk$ethereumAddress.toLowerCase()) === recoveredAddress || ((_pk$blockchainAccount = pk.blockchainAccountId) == null ? void 0 : (_pk$blockchainAccount2 = _pk$blockchainAccount.split('@eip155')) == null ? void 0 : _pk$blockchainAccount2[0].toLowerCase()) === recoveredAddress || // CAIP-2
      verifyBlockchainAccountId(recoveredPublicKeyHex, pk.blockchainAccountId) // CAIP-10
      ;
    });
    return signer;
  };

  const signer = signatures.map(checkSignatureAgainstSigner).filter(key => typeof key !== 'undefined');
  if (signer.length === 0) throw new Error('invalid_signature: Signature invalid for JWT');
  return signer[0];
}
function verifyEd25519(data, signature, authenticators) {
  const clear = stringToBytes(data);
  const sig = base64ToBytes(signature);
  const signer = authenticators.find(pk => {
    return (0,_stablelib_ed25519__WEBPACK_IMPORTED_MODULE_5__.verify)(extractPublicKeyBytes(pk), clear, sig);
  });
  if (!signer) throw new Error('invalid_signature: Signature invalid for JWT');
  return signer;
}
const algorithms = {
  ES256K: verifyES256K,
  // This is a non-standard algorithm but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/146
  'ES256K-R': verifyRecoverableES256K,
  // This is actually incorrect but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/130
  Ed25519: verifyEd25519,
  EdDSA: verifyEd25519
};

function VerifierAlgorithm(alg) {
  const impl = algorithms[alg];
  if (!impl) throw new Error(`not_supported: Unsupported algorithm ${alg}`);
  return impl;
}

VerifierAlgorithm.toSignatureObject = toSignatureObject;

/**
 * Resolves relevant public keys or other authenticating material used to verify signature from the DID document of provided DID
 *
 *  @example
 *  resolveAuthenticator(resolver, 'ES256K', 'did:uport:2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX').then(obj => {
 *      const payload = obj.payload
 *      const profile = obj.profile
 *      const jwt = obj.jwt
 *      ...
 *  })
 *
 *  @param    {String}            alg                a JWT algorithm
 *  @param    {String}            did                a Decentralized IDentifier (DID) to lookup
 *  @param    {Boolean}           auth               Restrict public keys to ones specifically listed in the 'authentication' section of DID document
 *  @return   {Promise<DIDAuthenticator>}               a promise which resolves with a response object containing an array of authenticators or if non exist rejects with an error
 */
const resolveAuthenticator = function (resolver, alg, issuer, proofPurpose) {
  try {
    const types = SUPPORTED_PUBLIC_KEY_TYPES[alg];

    if (!types || types.length === 0) {
      throw new Error(`not_supported: No supported signature types for algorithm ${alg}`);
    }

    let didResult;
    return Promise.resolve(resolver.resolve(issuer, {
      accept: DID_JSON
    })).then(function (result) {
      var _didResult$didResolut, _didResult, _didResult$didDocumen, _didResult2, _didResult2$didDocume;

      // support legacy resolvers that do not produce DIDResolutionResult
      if (Object.getOwnPropertyNames(result).indexOf('didDocument') === -1) {
        didResult = {
          didDocument: result,
          didDocumentMetadata: {},
          didResolutionMetadata: {
            contentType: DID_JSON
          }
        };
      } else {
        didResult = result;
      }

      if ((_didResult$didResolut = didResult.didResolutionMetadata) != null && _didResult$didResolut.error || didResult.didDocument == null) {
        const {
          error,
          message
        } = didResult.didResolutionMetadata;
        throw new Error(`resolver_error: Unable to resolve DID document for ${issuer}: ${error}, ${message || ''}`);
      }

      const getPublicKeyById = (verificationMethods, pubid) => {
        const filtered = verificationMethods.filter(({
          id
        }) => pubid === id);
        return filtered.length > 0 ? filtered[0] : null;
      };

      let publicKeysToCheck = [...(((_didResult = didResult) == null ? void 0 : (_didResult$didDocumen = _didResult.didDocument) == null ? void 0 : _didResult$didDocumen.verificationMethod) || []), ...(((_didResult2 = didResult) == null ? void 0 : (_didResult2$didDocume = _didResult2.didDocument) == null ? void 0 : _didResult2$didDocume.publicKey) || [])];

      if (typeof proofPurpose === 'string') {
        var _didResult3;

        // support legacy DID Documents that do not list assertionMethod
        if (proofPurpose.startsWith('assertion') && !Object.getOwnPropertyNames((_didResult3 = didResult) == null ? void 0 : _didResult3.didDocument).includes('assertionMethod')) {
          didResult.didDocument = { ...didResult.didDocument
          };
          didResult.didDocument.assertionMethod = [...publicKeysToCheck.map(pk => pk.id)];
        }

        publicKeysToCheck = (didResult.didDocument[proofPurpose] || []).map(verificationMethod => {
          if (typeof verificationMethod === 'string') {
            return getPublicKeyById(publicKeysToCheck, verificationMethod);
          } else if (typeof verificationMethod.publicKey === 'string') {
            // this is a legacy format
            return getPublicKeyById(publicKeysToCheck, verificationMethod.publicKey);
          } else {
            return verificationMethod;
          }
        }).filter(key => key != null);
      }

      const authenticators = publicKeysToCheck.filter(({
        type
      }) => types.find(supported => supported === type));

      if (typeof proofPurpose === 'string' && (!authenticators || authenticators.length === 0)) {
        throw new Error(`no_suitable_keys: DID document for ${issuer} does not have public keys suitable for ${alg} with ${proofPurpose} purpose`);
      }

      if (!authenticators || authenticators.length === 0) {
        throw new Error(`no_suitable_keys: DID document for ${issuer} does not have public keys for ${alg}`);
      }

      return {
        authenticators,
        issuer,
        didResolutionResult: didResult
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 *  Verifies given JWT. If the JWT is valid, the promise returns an object including the JWT, the payload of the JWT,
 *  and the did doc of the issuer of the JWT.
 *
 *  @example
 *  verifyJWT('did:uport:eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJyZXF1Z....', {audience: '5A8bRWU3F7j3REx3vkJ...', callbackUrl: 'https://...'}).then(obj => {
 *      const did = obj.did // DID of signer
 *      const payload = obj.payload
 *      const doc = obj.doc // DID Document of signer
 *      const jwt = obj.jwt
 *      const signerKeyId = obj.signerKeyId // ID of key in DID document that signed JWT
 *      ...
 *  })
 *
 *  @param    {String}            jwt                a JSON Web Token to verify
 *  @param    {Object}            [options]           an unsigned credential object
 *  @param    {Boolean}           options.auth        Require signer to be listed in the authentication section of the DID document (for Authentication purposes)
 *  @param    {String}            options.audience    DID of the recipient of the JWT
 *  @param    {String}            options.callbackUrl callback url in JWT
 *  @return   {Promise<Object, Error>}               a promise which resolves with a response object or rejects with an error
 */
const verifyJWT = function (jwt, options = {
  resolver: undefined,
  auth: undefined,
  audience: undefined,
  callbackUrl: undefined,
  skewTime: undefined,
  proofPurpose: undefined
}) {
  try {
    if (!options.resolver) throw new Error('missing_resolver: No DID resolver has been configured');
    const {
      payload,
      header,
      signature,
      data
    } = decodeJWT(jwt);
    const proofPurpose = Object.prototype.hasOwnProperty.call(options, 'auth') ? options.auth ? 'authentication' : undefined : options.proofPurpose;

    if (!payload.iss) {
      throw new Error('invalid_jwt: JWT iss is required');
    }

    let did = '';

    if (payload.iss === SELF_ISSUED_V2) {
      if (!payload.sub) {
        throw new Error('invalid_jwt: JWT sub is required');
      }

      if (typeof payload.sub_jwk === 'undefined') {
        did = payload.sub;
      } else {
        did = (header.kid || '').split('#')[0];
      }
    } else if (payload.iss === SELF_ISSUED_V0_1) {
      if (!payload.did) {
        throw new Error('invalid_jwt: JWT did is required');
      }

      did = payload.did;
    } else {
      did = payload.iss;
    }

    if (!did) {
      throw new Error(`invalid_jwt: No DID has been found in the JWT`);
    }

    return Promise.resolve(resolveAuthenticator(options.resolver, header.alg, did, proofPurpose)).then(function ({
      didResolutionResult,
      authenticators,
      issuer
    }) {
      return Promise.resolve(verifyJWSDecoded({
        header,
        data,
        signature
      }, authenticators)).then(function (signer) {
        const now = Math.floor(Date.now() / 1000);
        const skewTime = typeof options.skewTime !== 'undefined' && options.skewTime >= 0 ? options.skewTime : NBF_SKEW;

        if (signer) {
          const nowSkewed = now + skewTime;

          if (payload.nbf) {
            if (payload.nbf > nowSkewed) {
              throw new Error(`invalid_jwt: JWT not valid before nbf: ${payload.nbf}`);
            }
          } else if (payload.iat && payload.iat > nowSkewed) {
            throw new Error(`invalid_jwt: JWT not valid yet (issued in the future) iat: ${payload.iat}`);
          }

          if (payload.exp && payload.exp <= now - skewTime) {
            throw new Error(`invalid_jwt: JWT has expired: exp: ${payload.exp} < now: ${now}`);
          }

          if (payload.aud) {
            if (!options.audience && !options.callbackUrl) {
              throw new Error('invalid_config: JWT audience is required but your app address has not been configured');
            }

            const audArray = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
            const matchedAudience = audArray.find(item => options.audience === item || options.callbackUrl === item);

            if (typeof matchedAudience === 'undefined') {
              throw new Error(`invalid_config: JWT audience does not match your DID or callback url`);
            }
          }

          return {
            payload,
            didResolutionResult,
            issuer,
            signer,
            jwt
          };
        }

        throw new Error(`invalid_signature: JWT not valid. issuer DID document does not contain a verificationMethod that matches the signature.`);
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 *  Creates a signed JWT given an address which becomes the issuer, a signer, and a payload for which the signature is over.
 *
 *  @example
 *  const signer = ES256KSigner(process.env.PRIVATE_KEY)
 *  createJWT({address: '5A8bRWU3F7j3REx3vkJ...', signer}, {key1: 'value', key2: ..., ... }).then(jwt => {
 *      ...
 *  })
 *
 *  @param    {Object}            payload               payload object
 *  @param    {Object}            [options]             an unsigned credential object
 *  @param    {String}            options.issuer        The DID of the issuer (signer) of JWT
 *  @param    {String}            options.alg           [DEPRECATED] The JWT signing algorithm to use. Supports: [ES256K, ES256K-R, Ed25519, EdDSA], Defaults to: ES256K.
 *                                                      Please use `header.alg` to specify the algorithm
 *  @param    {Signer}            options.signer        a `Signer` function, Please see `ES256KSigner` or `EdDSASigner`
 *  @param    {boolean}           options.canonicalize  optional flag to canonicalize header and payload before signing
 *  @param    {Object}            header                optional object to specify or customize the JWT header
 *  @return   {Promise<Object, Error>}                  a promise which resolves with a signed JSON Web Token or rejects with an error
 */
const createJWT = function (payload, {
  issuer,
  signer,
  alg,
  expiresIn,
  canonicalize
}, header = {}) {
  try {
    if (!signer) throw new Error('missing_signer: No Signer functionality has been configured');
    if (!issuer) throw new Error('missing_issuer: No issuing DID has been configured');
    if (!header.typ) header.typ = 'JWT';
    if (!header.alg) header.alg = alg;
    const timestamps = {
      iat: Math.floor(Date.now() / 1000),
      exp: undefined
    };

    if (expiresIn) {
      if (typeof expiresIn === 'number') {
        timestamps.exp = (payload.nbf || timestamps.iat) + Math.floor(expiresIn);
      } else {
        throw new Error('invalid_argument: JWT expiresIn is not a number');
      }
    }

    const fullPayload = { ...timestamps,
      ...payload,
      iss: issuer
    };
    return createJWS(fullPayload, signer, header, {
      canonicalize
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 *  Creates a signed JWS given a payload, a signer, and an optional header.
 *
 *  @example
 *  const signer = ES256KSigner(process.env.PRIVATE_KEY)
 *  const jws = await createJWS({ my: 'payload' }, signer)
 *
 *  @param    {Object}            payload           payload object
 *  @param    {Signer}            signer            a signer, see `ES256KSigner or `EdDSASigner`
 *  @param    {Object}            header            optional object to specify or customize the JWS header
 *  @param    {Object}            options           can be used to trigger automatic canonicalization of header and
 *                                                    payload properties
 *  @return   {Promise<string>}                     a Promise which resolves to a JWS string or rejects with an error
 */
const createJWS = function (payload, signer, header = {}, options = {}) {
  try {
    if (!header.alg) header.alg = defaultAlg;
    const encodedPayload = typeof payload === 'string' ? payload : encodeSection(payload, options.canonicalize);
    const signingInput = [encodeSection(header, options.canonicalize), encodedPayload].join('.');
    const jwtSigner = SignerAlg(header.alg);
    return Promise.resolve(jwtSigner(signingInput, signer)).then(function (signature) {
      return [signingInput, signature].join('.');
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
const SUPPORTED_PUBLIC_KEY_TYPES = {
  ES256K: ['EcdsaSecp256k1VerificationKey2019',
  /**
   * Equivalent to EcdsaSecp256k1VerificationKey2019 when key is an ethereumAddress
   */
  'EcdsaSecp256k1RecoveryMethod2020',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1VerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1SignatureVerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'EcdsaPublicKeySecp256k1'],
  'ES256K-R': ['EcdsaSecp256k1VerificationKey2019',
  /**
   * Equivalent to EcdsaSecp256k1VerificationKey2019 when key is an ethereumAddress
   */
  'EcdsaSecp256k1RecoveryMethod2020',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1VerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'Secp256k1SignatureVerificationKey2018',
  /**
   * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is not an ethereumAddress
   */
  'EcdsaPublicKeySecp256k1'],
  Ed25519: ['ED25519SignatureVerification', 'Ed25519VerificationKey2018'],
  EdDSA: ['ED25519SignatureVerification', 'Ed25519VerificationKey2018']
};
const SELF_ISSUED_V2 = 'https://self-issued.me/v2';
const SELF_ISSUED_V0_1 = 'https://self-issued.me';
const defaultAlg = 'ES256K';
const DID_JSON = 'application/did+json'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function encodeSection(data, shouldCanonicalize = false) {
  if (shouldCanonicalize) {
    return encodeBase64url(canonicalize__WEBPACK_IMPORTED_MODULE_6__(data));
  } else {
    return encodeBase64url(JSON.stringify(data));
  }
}

const NBF_SKEW = 300;

function decodeJWS(jws) {
  const parts = jws.match(/^([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)$/);

  if (parts) {
    return {
      header: JSON.parse(decodeBase64url(parts[1])),
      payload: parts[2],
      signature: parts[3],
      data: `${parts[1]}.${parts[2]}`
    };
  }

  throw new Error('invalid_argument: Incorrect format JWS');
}
/**  @module did-jwt/JWT */

/**
 *  Decodes a JWT and returns an object representing the payload
 *
 *  @example
 *  decodeJWT('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1...')
 *
 *  @param    {String}            jwt                a JSON Web Token to verify
 *  @return   {Object}                               a JS object representing the decoded JWT
 */


function decodeJWT(jwt) {
  if (!jwt) throw new Error('invalid_argument: no JWT passed into decodeJWT');

  try {
    const jws = decodeJWS(jwt);
    const decodedJwt = Object.assign(jws, {
      payload: JSON.parse(decodeBase64url(jws.payload))
    });
    return decodedJwt;
  } catch (e) {
    throw new Error('invalid_argument: Incorrect format JWT');
  }
}

function verifyJWSDecoded({
  header,
  data,
  signature
}, pubKeys) {
  if (!Array.isArray(pubKeys)) pubKeys = [pubKeys];
  const signer = VerifierAlgorithm(header.alg)(data, signature, pubKeys);
  return signer;
}
/**
 *  Verifies given JWS. If the JWS is valid, returns the public key that was
 *  used to sign the JWS, or throws an `Error` if none of the `pubKeys` match.
 *
 *  @example
 *  const pubKey = verifyJWS('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJyZXF1Z....', { publicKeyHex: '0x12341...' })
 *
 *  @param    {String}                          jws         A JWS string to verify
 *  @param    {Array<VerificationMethod> | VerificationMethod}    pubKeys     The public keys used to verify the JWS
 *  @return   {VerificationMethod}                       The public key used to sign the JWS
 */


function verifyJWS(jws, pubKeys) {
  const jwsDecoded = decodeJWS(jws);
  return verifyJWSDecoded(jwsDecoded, pubKeys);
}

function _for(test, update, body) {
  var stage;

  for (;;) {
    var shouldContinue = test();

    if (_isSettledPact(shouldContinue)) {
      shouldContinue = shouldContinue.v;
    }

    if (!shouldContinue) {
      return result;
    }

    if (shouldContinue.then) {
      stage = 0;
      break;
    }

    var result = body();

    if (result && result.then) {
      if (_isSettledPact(result)) {
        result = result.s;
      } else {
        stage = 1;
        break;
      }
    }

    if (update) {
      var updateValue = update();

      if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
        stage = 2;
        break;
      }
    }
  }

  var pact = new _Pact();

  var reject = _settle.bind(null, pact, 2);

  (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
  return pact;

  function _resumeAfterBody(value) {
    result = value;

    do {
      if (update) {
        updateValue = update();

        if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
          updateValue.then(_resumeAfterUpdate).then(void 0, reject);
          return;
        }
      }

      shouldContinue = test();

      if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
        _settle(pact, 1, result);

        return;
      }

      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
        return;
      }

      result = body();

      if (_isSettledPact(result)) {
        result = result.v;
      }
    } while (!result || !result.then);

    result.then(_resumeAfterBody).then(void 0, reject);
  }

  function _resumeAfterTest(shouldContinue) {
    if (shouldContinue) {
      result = body();

      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
      } else {
        _resumeAfterBody(result);
      }
    } else {
      _settle(pact, 1, result);
    }
  }

  function _resumeAfterUpdate() {
    if (shouldContinue = test()) {
      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
      } else {
        _resumeAfterTest(shouldContinue);
      }
    } else {
      _settle(pact, 1, result);
    }
  }
}

const decryptJWE = function (jwe, decrypter) {
  try {
    let _exit;

    function _temp5(_result) {
      if (_exit) ;
      if (cleartext === null) throw new Error('failure: Failed to decrypt');
      return cleartext;
    }

    validateJWE(jwe);
    const protHeader = JSON.parse(decodeBase64url(jwe.protected));
    if (protHeader.enc !== decrypter.enc) throw new Error(`not_supported: Decrypter does not supported: '${protHeader.enc}'`);
    const sealed = toSealed(jwe.ciphertext, jwe.tag);
    const aad = new Uint8Array(Buffer.from(jwe.aad ? `${jwe.protected}.${jwe.aad}` : jwe.protected));
    let cleartext = null;

    const _temp4 = function () {
      if (protHeader.alg === 'dir' && decrypter.alg === 'dir') {
        return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad)).then(function (_decrypter$decrypt) {
          cleartext = _decrypter$decrypt;
        });
      } else return function () {
        if (!jwe.recipients || jwe.recipients.length === 0) {
          throw new Error('bad_jwe: missing recipients');
        } else {
          let i = 0;
          return _for(function () {
            return !cleartext && i < jwe.recipients.length;
          }, function () {
            return i++;
          }, function () {
            const recipient = jwe.recipients[i];
            Object.assign(recipient.header, protHeader);

            const _temp3 = function () {
              if (recipient.header.alg === decrypter.alg) {
                return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad, recipient)).then(function (_decrypter$decrypt2) {
                  cleartext = _decrypter$decrypt2;
                });
              }
            }();

            if (_temp3 && _temp3.then) return _temp3.then(function () {});
          });
        }
      }();
    }();

    return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp5) : _temp5(_temp4));
  } catch (e) {
    return Promise.reject(e);
  }
};

const _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";

function _settle(pact, state, value) {
  if (!pact.s) {
    if (value instanceof _Pact) {
      if (value.s) {
        if (state & 1) {
          state = value.s;
        }

        value = value.v;
      } else {
        value.o = _settle.bind(null, pact, state);
        return;
      }
    }

    if (value && value.then) {
      value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
      return;
    }

    pact.s = state;
    pact.v = value;
    const observer = pact.o;

    if (observer) {
      observer(pact);
    }
  }
}

const _Pact = /*#__PURE__*/function () {
  function _Pact() {}

  _Pact.prototype.then = function (onFulfilled, onRejected) {
    const result = new _Pact();
    const state = this.s;

    if (state) {
      const callback = state & 1 ? onFulfilled : onRejected;

      if (callback) {
        try {
          _settle(result, 1, callback(this.v));
        } catch (e) {
          _settle(result, 2, e);
        }

        return result;
      } else {
        return this;
      }
    }

    this.o = function (_this) {
      try {
        const value = _this.v;

        if (_this.s & 1) {
          _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
        } else if (onRejected) {
          _settle(result, 1, onRejected(value));
        } else {
          _settle(result, 2, value);
        }
      } catch (e) {
        _settle(result, 2, e);
      }
    };

    return result;
  };

  return _Pact;
}();

function _isSettledPact(thenable) {
  return thenable instanceof _Pact && thenable.s & 1;
}

function _forTo(array, body, check) {
  var i = -1,
      pact,
      reject;

  function _cycle(result) {
    try {
      while (++i < array.length && (!check || !check())) {
        result = body(i);

        if (result && result.then) {
          if (_isSettledPact(result)) {
            result = result.v;
          } else {
            result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
            return;
          }
        }
      }

      if (pact) {
        _settle(pact, 1, result);
      } else {
        pact = result;
      }
    } catch (e) {
      _settle(pact || (pact = new _Pact()), 2, e);
    }
  }

  _cycle();

  return pact;
}

function _forOf(target, body, check) {
  if (typeof target[_iteratorSymbol] === "function") {
    var iterator = target[_iteratorSymbol](),
        step,
        pact,
        reject;

    function _cycle(result) {
      try {
        while (!(step = iterator.next()).done && (!check || !check())) {
          result = body(step.value);

          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
              return;
            }
          }
        }

        if (pact) {
          _settle(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle(pact || (pact = new _Pact()), 2, e);
      }
    }

    _cycle();

    if (iterator.return) {
      var _fixup = function (value) {
        try {
          if (!step.done) {
            iterator.return();
          }
        } catch (e) {}

        return value;
      };

      if (pact && pact.then) {
        return pact.then(_fixup, function (e) {
          throw _fixup(e);
        });
      }

      _fixup();
    }

    return pact;
  } // No support for Symbol.iterator


  // No support for Symbol.iterator
  if (!("length" in target)) {
    throw new TypeError("Object is not iterable");
  } // Handle live collections properly


  // Handle live collections properly
  var values = [];

  for (var i = 0; i < target.length; i++) {
    values.push(target[i]);
  }

  return _forTo(values, function (i) {
    return body(values[i]);
  }, check);
}

function validateJWE(jwe) {
  if (!(jwe.protected && jwe.iv && jwe.ciphertext && jwe.tag)) {
    throw new Error('bad_jwe: missing properties');
  }

  if (jwe.recipients) {
    jwe.recipients.map(rec => {
      if (!(rec.header && rec.encrypted_key)) {
        throw new Error('bad_jwe: malformed recipients');
      }
    });
  }
}

function encodeJWE({
  ciphertext,
  tag,
  iv,
  protectedHeader,
  recipient
}, aad) {
  const jwe = {
    protected: protectedHeader,
    iv: bytesToBase64url(iv),
    ciphertext: bytesToBase64url(ciphertext),
    tag: bytesToBase64url(tag)
  };
  if (aad) jwe.aad = bytesToBase64url(aad);
  if (recipient) jwe.recipients = [recipient];
  return jwe;
}

const createJWE = function (cleartext, encrypters, protectedHeader = {}, aad) {
  try {
    if (encrypters[0].alg === 'dir') {
      if (encrypters.length > 1) throw new Error('not_supported: Can only do "dir" encryption to one key.');
      return Promise.resolve(encrypters[0].encrypt(cleartext, protectedHeader, aad)).then(function (encryptionResult) {
        return encodeJWE(encryptionResult, aad);
      });
    } else {
      const tmpEnc = encrypters[0].enc;

      if (!encrypters.reduce((acc, encrypter) => acc && encrypter.enc === tmpEnc, true)) {
        throw new Error('invalid_argument: Incompatible encrypters passed');
      }

      let cek;
      let jwe;

      const _temp2 = _forOf(encrypters, function (encrypter) {
        const _temp = function () {
          if (!cek) {
            return Promise.resolve(encrypter.encrypt(cleartext, protectedHeader, aad)).then(function (encryptionResult) {
              cek = encryptionResult.cek;
              jwe = encodeJWE(encryptionResult, aad);
            });
          } else {
            return Promise.resolve(encrypter.encryptCek == null ? void 0 : encrypter.encryptCek(cek)).then(function (recipient) {
              if (recipient) {
                var _jwe, _jwe$recipients;

                (_jwe = jwe) == null ? void 0 : (_jwe$recipients = _jwe.recipients) == null ? void 0 : _jwe$recipients.push(recipient);
              }
            });
          }
        }();

        if (_temp && _temp.then) return _temp.then(function () {});
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {
        return jwe;
      }) : jwe);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 * Wraps an X25519 secret key into an ECDH method that can be used to compute a shared secret with a public key.
 * @param mySecretKey A `Uint8Array` of length 32 representing the bytes of my secret key
 * @returns an `ECDH` method with the signature `(theirPublicKey: Uint8Array) => Promise<Uint8Array>`
 *
 * @throws 'invalid_argument:...' if the secret key size is wrong
 */

function createX25519ECDH(mySecretKey) {
  if (mySecretKey.length !== 32) {
    throw new Error('invalid_argument: incorrect secret key length for X25519');
  }

  return function (theirPublicKey) {
    try {
      if (theirPublicKey.length !== 32) {
        throw new Error('invalid_argument: incorrect publicKey key length for X25519');
      }

      return Promise.resolve(sharedKey(mySecretKey, theirPublicKey));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

/**
 * Recommended encrypter for authenticated encryption (i.e. sender authentication and requires
 * sender private key to encrypt the data).
 * Uses {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU v3 } and
 * {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW v2 }.
 *
 * @param recipientPublicKey the byte array representing the recipient public key
 * @param senderSecret either a Uint8Array representing the sender secret key or
 *   an ECDH function that wraps the key and can promise a shared secret given a public key
 * @param options {@link AuthEncryptParams} used to specify extra header parameters
 *
 * @returns an {@link Encrypter} instance usable with {@link createJWE}
 *
 * NOTE: ECDH-1PU and XC20PKW are proposed drafts in IETF and not a standard yet and
 * are subject to change as new revisions or until the official CFRG specification are released.
 *
 * @beta
 */

const resolveX25519Encrypters = function (dids, resolver) {
  try {
    const encryptersForDID = function (did, resolved = []) {
      try {
        return Promise.resolve(resolver.resolve(did)).then(function ({
          didResolutionMetadata,
          didDocument
        }) {
          function _temp4() {
            var _didDocument$keyAgree, _didDocument$keyAgree2;

            const agreementKeys = (_didDocument$keyAgree = didDocument.keyAgreement) == null ? void 0 : (_didDocument$keyAgree2 = _didDocument$keyAgree.map(key => {
              if (typeof key === 'string') {
                return [...(didDocument.publicKey || []), ...(didDocument.verificationMethod || [])].find(pk => pk.id === key);
              }

              return key;
            })) == null ? void 0 : _didDocument$keyAgree2.filter(key => typeof key !== 'undefined');
            const pks = (agreementKeys == null ? void 0 : agreementKeys.filter(key => {
              // TODO: should be able to use non base58 keys too
              return key.type === 'X25519KeyAgreementKey2019' && Boolean(key.publicKeyBase58);
            })) ?? [];
            if (!pks.length && !controllerEncrypters.length) throw new Error(`no_suitable_keys: Could not find x25519 key for ${did}`);
            return pks.map(pk => x25519Encrypter(base58ToBytes(pk.publicKeyBase58), pk.id)).concat(...controllerEncrypters);
          }

          resolved.push(did);

          if (didResolutionMetadata != null && didResolutionMetadata.error || didDocument == null) {
            throw new Error(`resolver_error: Could not resolve ${did}: ${didResolutionMetadata.error}, ${didResolutionMetadata.message}`);
          }

          let controllerEncrypters = [];

          if (!didDocument.controller && !didDocument.keyAgreement) {
            throw new Error(`no_suitable_keys: Could not find x25519 key for ${did}`);
          }

          const _temp3 = function () {
            if (didDocument.controller) {
              let controllers = Array.isArray(didDocument.controller) ? didDocument.controller : [didDocument.controller];
              controllers = controllers.filter(c => !resolved.includes(c));
              const encrypterPromises = controllers.map(did => encryptersForDID(did, resolved).catch(() => {
                return [];
              }));
              return Promise.resolve(Promise.all(encrypterPromises)).then(function (encrypterArrays) {
                controllerEncrypters = [].concat(...encrypterArrays);
              });
            }
          }();

          return _temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    const encrypterPromises = dids.map(did => encryptersForDID(did));
    return Promise.resolve(Promise.all(encrypterPromises)).then(function (encrypterArrays) {
      const flattenedArray = [].concat(...encrypterArrays);
      return flattenedArray;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
function createAuthEncrypter(recipientPublicKey, senderSecret, options = {}) {
  return xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2(recipientPublicKey, senderSecret, options);
}
/**
 * Recommended encrypter for anonymous encryption (i.e. no sender authentication).
 * Uses {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | ECDH-ES+XC20PKW v2}.
 *
 * @param publicKey the byte array representing the recipient public key
 * @param options {@link AnonEncryptParams} used to specify the recipient key ID (`kid`)
 *
 * @returns an {@link Encrypter} instance usable with {@link createJWE}
 *
 * NOTE: ECDH-ES+XC20PKW is a proposed draft in IETF and not a standard yet and
 * is subject to change as new revisions or until the official CFRG specification is released.
 *
 * @beta
 */

function createAnonEncrypter(publicKey, options = {}) {
  return x25519Encrypter(publicKey, options == null ? void 0 : options.kid);
}
/**
 * Recommended decrypter for authenticated encryption (i.e. sender authentication and requires
 * sender public key to decrypt the data).
 * Uses {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU v3 } and
 * {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW v2 }.
 *
 * @param recipientSecret either a Uint8Array representing the recipient secret key or
 *   an ECDH function that wraps the key and can promise a shared secret given a public key
 * @param senderPublicKey the byte array representing the sender public key
 *
 * @returns a {@link Decrypter} instance usable with {@link decryptJWE}
 *
 * NOTE: ECDH-1PU and XC20PKW are proposed drafts in IETF and not a standard yet and
 * are subject to change as new revisions or until the official CFRG specification are released.
 *
 * @beta
 */

function createAuthDecrypter(recipientSecret, senderPublicKey) {
  return xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2(recipientSecret, senderPublicKey);
}
/**
 * Recommended decrypter for anonymous encryption (i.e. no sender authentication).
 * Uses {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | ECDH-ES+XC20PKW v2 }.
 *
 * @param recipientSecret either a Uint8Array representing the recipient secret key or
 *   an ECDH function that wraps the key and can promise a shared secret given a public key
 *
 * @returns a {@link Decrypter} instance usable with {@link decryptJWE}
 *
 * NOTE: ECDH-ES+XC20PKW is a proposed draft in IETF and not a standard yet and
 * is subject to change as new revisions or until the official CFRG specification is released.
 *
 * @beta
 */

function createAnonDecrypter(recipientSecret) {
  return x25519Decrypter(recipientSecret);
}

function xc20pEncrypter(key) {
  const cipher = new XChaCha20Poly1305(key);
  return (cleartext, aad) => {
    const iv = randomBytes(cipher.nonceLength);
    const sealed = cipher.seal(iv, cleartext, aad);
    return {
      ciphertext: sealed.subarray(0, sealed.length - cipher.tagLength),
      tag: sealed.subarray(sealed.length - cipher.tagLength),
      iv
    };
  };
}

function xc20pDirEncrypter(key) {
  const encrypt = function (cleartext, protectedHeader = {}, aad) {
    try {
      const protHeader = encodeBase64url(JSON.stringify(Object.assign({
        alg
      }, protectedHeader, {
        enc
      })));
      const encodedAad = new Uint8Array(Buffer.from(aad ? `${protHeader}.${bytesToBase64url(aad)}` : protHeader));
      return Promise.resolve({ ...xc20pEncrypt(cleartext, encodedAad),
        protectedHeader: protHeader
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const xc20pEncrypt = xc20pEncrypter(key);
  const enc = 'XC20P';
  const alg = 'dir';
  return {
    alg,
    enc,
    encrypt
  };
}
function xc20pDirDecrypter(key) {
  const decrypt = function (sealed, iv, aad) {
    try {
      return Promise.resolve(cipher.open(iv, sealed, aad));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const cipher = new _stablelib_xchacha20poly1305__WEBPACK_IMPORTED_MODULE_9__.XChaCha20Poly1305(key);
  return {
    alg: 'dir',
    enc: 'XC20P',
    decrypt
  };
}
function x25519Encrypter(publicKey, kid) {
  const encrypt = function (cleartext, protectedHeader = {}, aad) {
    try {
      // we won't want alg to be set to dir from xc20pDirEncrypter
      Object.assign(protectedHeader, {
        alg: undefined
      }); // Content Encryption Key

      const cek = randomBytes(32);
      return Promise.resolve(xc20pDirEncrypter(cek).encrypt(cleartext, protectedHeader, aad)).then(function (_xc20pDirEncrypter$en) {
        return Promise.resolve(encryptCek(cek)).then(function (_encryptCek) {
          return { ..._xc20pDirEncrypter$en,
            recipient: _encryptCek,
            cek
          };
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const encryptCek = function (cek) {
    try {
      const epk = generateKeyPair();
      const sharedSecret = sharedKey(epk.secretKey, publicKey); // Key Encryption Key

      const kek = concatKDF(sharedSecret, keyLen, alg);
      const res = xc20pEncrypter(kek)(cek);
      const recipient = {
        encrypted_key: bytesToBase64url(res.ciphertext),
        header: {
          alg,
          iv: bytesToBase64url(res.iv),
          tag: bytesToBase64url(res.tag),
          epk: {
            kty: 'OKP',
            crv,
            x: bytesToBase64url(epk.publicKey)
          }
        }
      };
      if (kid) recipient.header.kid = kid;
      return Promise.resolve(recipient);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-ES+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  return {
    alg,
    enc: 'XC20P',
    encrypt,
    encryptCek
  };
}
/**
 * Implements ECDH-1PU+XC20PKW with XChaCha20Poly1305 based on the following specs:
 *   - {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW}
 *   - {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU}
 */

function xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2(recipientPublicKey, senderSecret, options = {}) {
  const encrypt = function (cleartext, protectedHeader = {}, aad) {
    try {
      // we won't want alg to be set to dir from xc20pDirEncrypter
      Object.assign(protectedHeader, {
        alg: undefined
      }); // Content Encryption Key

      const cek = randomBytes(32);
      return Promise.resolve(xc20pDirEncrypter(cek).encrypt(cleartext, protectedHeader, aad)).then(function (_xc20pDirEncrypter$en2) {
        return Promise.resolve(encryptCek(cek)).then(function (_encryptCek2) {
          return { ..._xc20pDirEncrypter$en2,
            recipient: _encryptCek2,
            cek
          };
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const encryptCek = function (cek) {
    try {
      function _temp2() {
        const sharedSecret = new Uint8Array(zE.length + zS.length);
        sharedSecret.set(zE);
        sharedSecret.set(zS, zE.length); // Key Encryption Key

        const kek = concatKDF(sharedSecret, keyLen, alg, partyUInfo, partyVInfo);
        const res = xc20pEncrypter(kek)(cek);
        const recipient = {
          encrypted_key: bytesToBase64url(res.ciphertext),
          header: {
            alg,
            iv: bytesToBase64url(res.iv),
            tag: bytesToBase64url(res.tag),
            epk: {
              kty: 'OKP',
              crv,
              x: bytesToBase64url(epk.publicKey)
            }
          }
        };
        if (options.kid) recipient.header.kid = options.kid;
        if (options.apu) recipient.header.apu = options.apu;
        if (options.apv) recipient.header.apv = options.apv;
        return recipient;
      }

      const epk = generateKeyPair();
      const zE = sharedKey(epk.secretKey, recipientPublicKey); // ECDH-1PU requires additional shared secret between
      // static key of sender and static key of recipient

      let zS;

      const _temp = function () {
        if (senderSecret instanceof Uint8Array) {
          zS = sharedKey(senderSecret, recipientPublicKey);
        } else {
          return Promise.resolve(senderSecret(recipientPublicKey)).then(function (_senderSecret) {
            zS = _senderSecret;
          });
        }
      }();

      return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-1PU+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  let partyUInfo;
  let partyVInfo;
  if (options.apu !== undefined) partyUInfo = base64ToBytes(options.apu);
  if (options.apv !== undefined) partyVInfo = base64ToBytes(options.apv);
  return {
    alg,
    enc: 'XC20P',
    encrypt,
    encryptCek
  };
}

function validateHeader(header) {
  if (!(header && header.epk && header.iv && header.tag)) {
    throw new Error('bad_jwe: malformed header');
  }
}

function x25519Decrypter(receiverSecret) {
  const decrypt = function (sealed, iv, aad, recipient) {
    try {
      var _recipient, _recipient$header$epk;

      function _temp6() {
        // Key Encryption Key
        const kek = concatKDF(sharedSecret, keyLen, alg); // Content Encryption Key

        const sealedCek = toSealed(recipient.encrypted_key, recipient.header.tag);
        return Promise.resolve(xc20pDirDecrypter(kek).decrypt(sealedCek, base64ToBytes(recipient.header.iv))).then(function (cek) {
          return cek === null ? null : xc20pDirDecrypter(cek).decrypt(sealed, iv, aad);
        });
      }

      validateHeader((_recipient = recipient) == null ? void 0 : _recipient.header);
      recipient = recipient;
      if (((_recipient$header$epk = recipient.header.epk) == null ? void 0 : _recipient$header$epk.crv) !== crv || typeof recipient.header.epk.x == 'undefined') return Promise.resolve(null);
      const publicKey = base64ToBytes(recipient.header.epk.x);
      let sharedSecret;

      const _temp5 = function () {
        if (receiverSecret instanceof Uint8Array) {
          sharedSecret = (0,_stablelib_x25519__WEBPACK_IMPORTED_MODULE_8__.sharedKey)(receiverSecret, publicKey);
        } else {
          return Promise.resolve(receiverSecret(publicKey)).then(function (_receiverSecret) {
            sharedSecret = _receiverSecret;
          });
        }
      }();

      return Promise.resolve(_temp5 && _temp5.then ? _temp5.then(_temp6) : _temp6(_temp5));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-ES+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  return {
    alg,
    enc: 'XC20P',
    decrypt
  };
}
/**
 * Implements ECDH-1PU+XC20PKW with XChaCha20Poly1305 based on the following specs:
 *   - {@link https://tools.ietf.org/html/draft-amringer-jose-chacha-02 | XC20PKW}
 *   - {@link https://tools.ietf.org/html/draft-madden-jose-ecdh-1pu-03 | ECDH-1PU}
 */

function xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2(recipientSecret, senderPublicKey) {
  const decrypt = function (sealed, iv, aad, recipient) {
    try {
      var _recipient$header$epk2;

      function _temp8() {
        const sharedSecret = new Uint8Array(zE.length + zS.length);
        sharedSecret.set(zE);
        sharedSecret.set(zS, zE.length); // Key Encryption Key

        let producerInfo;
        let consumerInfo;
        if (recipient.header.apu) producerInfo = base64ToBytes(recipient.header.apu);
        if (recipient.header.apv) consumerInfo = base64ToBytes(recipient.header.apv);
        const kek = concatKDF(sharedSecret, keyLen, alg, producerInfo, consumerInfo); // Content Encryption Key

        const sealedCek = toSealed(recipient.encrypted_key, recipient.header.tag);
        return Promise.resolve(xc20pDirDecrypter(kek).decrypt(sealedCek, base64ToBytes(recipient.header.iv))).then(function (cek) {
          return cek === null ? null : xc20pDirDecrypter(cek).decrypt(sealed, iv, aad);
        });
      }

      recipient = recipient;
      validateHeader(recipient.header);
      if (((_recipient$header$epk2 = recipient.header.epk) == null ? void 0 : _recipient$header$epk2.crv) !== crv || typeof recipient.header.epk.x == 'undefined') return Promise.resolve(null); // ECDH-1PU requires additional shared secret between
      // static key of sender and static key of recipient

      const publicKey = base64ToBytes(recipient.header.epk.x);
      let zE;
      let zS;

      const _temp7 = function () {
        if (recipientSecret instanceof Uint8Array) {
          zE = sharedKey(recipientSecret, publicKey);
          zS = sharedKey(recipientSecret, senderPublicKey);
        } else {
          return Promise.resolve(recipientSecret(publicKey)).then(function (_recipientSecret) {
            zE = _recipientSecret;
            return Promise.resolve(recipientSecret(senderPublicKey)).then(function (_recipientSecret2) {
              zS = _recipientSecret2;
            });
          });
        }
      }();

      return Promise.resolve(_temp7 && _temp7.then ? _temp7.then(_temp8) : _temp8(_temp7));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const alg = 'ECDH-1PU+XC20PKW';
  const keyLen = 256;
  const crv = 'X25519';
  return {
    alg,
    enc: 'XC20P',
    decrypt
  };
}


//# sourceMappingURL=index.module.js.map


/***/ })

}]);