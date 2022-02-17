"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2222],{

/***/ 37847:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const versions_1 = __importDefault(__webpack_require__(95318));
const bs58_1 = __importDefault(__webpack_require__(91945));
const crypto_1 = __importDefault(__webpack_require__(69678));
class BitcoinAddress {
    constructor({ publicKey, version, }) {
        const length = publicKey.length;
        const firstByte = publicKey[0];
        if ((length !== 33 && length !== 65) || firstByte < 2 || firstByte > 4) {
            throw new Error("invalid public key");
        }
        this._publicKey = publicKey;
        this._version = version || versions_1.default.bitcoinMain;
    }
    static from(publicKey, version) {
        return new BitcoinAddress({ publicKey, version });
    }
    static isValid(_address) {
        if (_address.length < 26 || _address.length > 35) {
            return false;
        }
        let rawAddress;
        try {
            rawAddress = Buffer.from(bs58_1.default.decode(_address));
        }
        catch (_err) {
            return false;
        }
        const checksumFromAddress = rawAddress.slice(-4);
        const checksum = sha256(sha256(rawAddress.slice(0, -4))).slice(0, 4);
        return checksum.equals(checksumFromAddress);
    }
    get publicKey() {
        return this._publicKey;
    }
    get rawAddress() {
        if (!this._rawAddress) {
            const hash = hash160(this._publicKey);
            const prefixedHash = Buffer.alloc(1 + hash.length);
            prefixedHash.writeUInt8(this._version.public, 0);
            hash.copy(prefixedHash, 1);
            const checksum = sha256(sha256(prefixedHash)).slice(0, 4);
            this._rawAddress = Buffer.concat([prefixedHash, checksum]);
        }
        return this._rawAddress;
    }
    get address() {
        if (!this._address) {
            this._address = bs58_1.default.encode(this.rawAddress);
        }
        return this._address;
    }
}
exports.default = BitcoinAddress;
function sha256(data) {
    return crypto_1.default.createHash("sha256").update(data).digest();
}
function hash160(data) {
    const d = crypto_1.default.createHash("sha256").update(data).digest();
    return crypto_1.default.createHash("rmd160").update(d).digest();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85542:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EthereumAddress = void 0;
const keccak_1 = __importDefault(__webpack_require__(18001));
const util_1 = __webpack_require__(34607);
class EthereumAddress {
    constructor(publicKey) {
        this._publicKey = util_1.decompressPublicKey(publicKey);
    }
    static from(publicKey) {
        return new EthereumAddress(publicKey);
    }
    static checksumAddress(address) {
        if (!isValidFormat(address)) {
            throw new Error("invalid address");
        }
        const addr = util_1.strip0x(address).toLowerCase();
        const hash = keccak_1.default("keccak256")
            .update(addr, "ascii")
            .digest("hex");
        let newAddr = "0x";
        for (let i = 0; i < addr.length; i++) {
            if (hash[i] >= "8") {
                newAddr += addr[i].toUpperCase();
            }
            else {
                newAddr += addr[i];
            }
        }
        return newAddr;
    }
    static isValid(address) {
        if (!isValidFormat(address)) {
            return false;
        }
        const addr = util_1.strip0x(address);
        if (addr.match(/[0-9a-f]{40}/) || addr.match(/[0-9A-F]{40}/)) {
            return true;
        }
        let checksumAddress;
        try {
            checksumAddress = EthereumAddress.checksumAddress(addr);
        }
        catch (_err) {
            return false;
        }
        return addr === checksumAddress.slice(2);
    }
    get publicKey() {
        return this._publicKey;
    }
    get rawAddress() {
        if (!this._rawAddress) {
            this._rawAddress = keccak_1.default("keccak256")
                .update(this._publicKey.slice(1))
                .digest()
                .slice(-20);
        }
        return this._rawAddress;
    }
    get address() {
        if (!this._address) {
            const rawAddress = this.rawAddress.toString("hex");
            this._address = EthereumAddress.checksumAddress(rawAddress);
        }
        return this._address;
    }
}
exports.EthereumAddress = EthereumAddress;
function isValidFormat(address) {
    return !!util_1.strip0x(address).match(/^[0-9a-fA-F]{40}$/);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 49859:
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HDKey = exports.Algorithm = void 0;
const bn_js_1 = __importDefault(__webpack_require__(35579));
const bs58 = __importStar(__webpack_require__(91945));
const crypto = __importStar(__webpack_require__(69678));
const elliptic_1 = __webpack_require__(75367);
const versions_1 = __importDefault(__webpack_require__(95318));
// Implements BIP-32: https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
// Added ED25519 support: https://github.com/satoshilabs/slips/blob/master/slip-0010.md
var Algorithm;
(function (Algorithm) {
    Algorithm["secp256k1"] = "secp256k1";
    Algorithm["ed25519"] = "ed25519";
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));
const SUPPORTED_ALGORITHMS = [Algorithm.secp256k1, Algorithm.ed25519];
const HARDENED_KEY_OFFSET = 0x80000000; // 2^31
const secp256k1 = new elliptic_1.ec(Algorithm.secp256k1);
const ed25519 = new elliptic_1.eddsa(Algorithm.ed25519);
class HDKey {
    constructor({ algorithm, privateKey, publicKey, chainCode, index, depth, parentFingerprint, version, }) {
        this._privateKey = null;
        if (algorithm && SUPPORTED_ALGORITHMS.indexOf(algorithm) === -1) {
            throw new Error(`unsupported algorithm: ${algorithm}`);
        }
        this._algorithm = algorithm || Algorithm.secp256k1;
        if (!privateKey && !publicKey) {
            throw new Error("either private key or public key must be provided");
        }
        if (privateKey) {
            this._privateKey = privateKey;
            this._publicKey = publicFromPrivateKey(privateKey, this.algorithm);
        }
        else {
            this._publicKey = publicKey;
        }
        this._chainCode = chainCode;
        this._depth = depth || 0;
        this._index = index || 0;
        this._parentFingerprint = parentFingerprint || Buffer.alloc(4);
        this._keyIdentifier = hash160(this._publicKey);
        this._version = version || versions_1.default.bitcoinMain;
    }
    static parseMasterSeed(seed, version) {
        return this.parseSeedWithKey(Algorithm.secp256k1, "Bitcoin seed", seed, version);
    }
    static parseEd25519Seed(seed, version) {
        return this.parseSeedWithKey(Algorithm.ed25519, "ed25519 seed", seed, version);
    }
    static parseSeedWithKey(algorithm, key, seed, version) {
        const i = hmacSha512(key, seed);
        const iL = i.slice(0, 32);
        const iR = i.slice(32);
        return new HDKey({ algorithm, privateKey: iL, chainCode: iR, version });
    }
    static parseExtendedKey(key, version = versions_1.default.bitcoinMain) {
        // version_bytes[4] || depth[1] || parent_fingerprint[4] || index[4] ||
        // chain_code[32] || key_data[33] || checksum[4]
        const decoded = Buffer.from(bs58.decode(key));
        if (decoded.length > 112) {
            throw new Error("invalid extended key");
        }
        const checksum = decoded.slice(-4);
        const buf = decoded.slice(0, -4);
        if (!sha256(sha256(buf)).slice(0, 4).equals(checksum)) {
            throw new Error("invalid checksum");
        }
        let o = 0;
        const versionRead = buf.readUInt32BE(o);
        o += 4;
        const depth = buf.readUInt8(o);
        o += 1;
        let parentFingerprint = buf.slice(o, (o += 4));
        if (parentFingerprint.readUInt32BE(0) === 0) {
            parentFingerprint = undefined;
        }
        const index = buf.readUInt32BE(o);
        o += 4;
        const chainCode = buf.slice(o, (o += 32));
        const keyData = buf.slice(o);
        const privateKey = keyData[0] === 0 ? keyData.slice(1) : undefined;
        const publicKey = keyData[0] !== 0 ? keyData : undefined;
        if ((privateKey && versionRead !== version.bip32.private) ||
            (publicKey && versionRead !== version.bip32.public)) {
            throw new Error("invalid version bytes");
        }
        return new HDKey({
            privateKey,
            publicKey,
            chainCode,
            index,
            depth,
            parentFingerprint,
            version,
        });
    }
    get algorithm() {
        return this._algorithm;
    }
    get privateKey() {
        return this._privateKey || null;
    }
    get publicKey() {
        return this._publicKey;
    }
    get chainCode() {
        return this._chainCode;
    }
    get depth() {
        return this._depth;
    }
    get parentFingerprint() {
        return this._parentFingerprint;
    }
    get index() {
        return this._index;
    }
    get keyIdentifier() {
        return this._keyIdentifier;
    }
    get fingerprint() {
        return this._keyIdentifier.slice(0, 4);
    }
    get version() {
        return this._version;
    }
    get extendedPrivateKey() {
        if (this.algorithm === Algorithm.ed25519) {
            throw new Error("extended private key generation is not supported for ed25519");
        }
        return this._privateKey
            ? this.serialize(this._version.bip32.private, this._privateKey)
            : null;
    }
    get extendedPublicKey() {
        if (this.algorithm === Algorithm.ed25519) {
            throw new Error("extended public key generation is not supported for ed25519");
        }
        return this.serialize(this._version.bip32.public, this._publicKey);
    }
    derive(chain) {
        const c = chain.toLowerCase();
        let childKey = this;
        c.split("/").forEach((path) => {
            const p = path.trim();
            if (p === "m" || p === "m'" || p === "") {
                return;
            }
            const index = Number.parseInt(p, 10);
            if (Number.isNaN(index)) {
                throw new Error("invalid child key derivation chain");
            }
            const hardened = p.slice(-1) === "'";
            childKey = childKey.deriveChildKey(index, hardened);
        });
        return childKey;
    }
    deriveChildKey(childIndex, hardened) {
        if (childIndex >= HARDENED_KEY_OFFSET) {
            throw new Error("invalid index");
        }
        if (!this.privateKey && !this.publicKey) {
            throw new Error("either private key or public key must be provided");
        }
        let index = childIndex;
        const data = Buffer.alloc(37);
        let offset = 0; // offset
        if (hardened) {
            if (!this.privateKey) {
                throw new Error("cannot derive a hardened child key from a public key");
            }
            // 0x00 || ser256(kpar) || ser32(i)
            // 0x00[1] || parent_private_key[32] || child_index[4]
            index += HARDENED_KEY_OFFSET;
            offset += 1;
            offset += this.privateKey.copy(data, offset);
        }
        else {
            if (this.algorithm === Algorithm.ed25519) {
                throw new Error("non-hardened key generation is not supported for ed25519");
            }
            // serP(point(kpar)) || ser32(i)
            // compressed_parent_public_key[33] || child_index[4]
            offset += this.publicKey.copy(data, offset);
        }
        offset += data.writeUInt32BE(index, offset);
        const i = hmacSha512(this.chainCode, data);
        const iL = new bn_js_1.default(i.slice(0, 32));
        const iR = i.slice(32); // the returned chain code ci is IR
        // ed25519
        if (this.algorithm === Algorithm.ed25519) {
            if (!this.privateKey) {
                throw new Error("derivation from public parent key is not supported for ed25519");
            }
            // if curve is ed25519: The returned child key ki is parse256(IL)
            const childKey = iL;
            return new HDKey({
                algorithm: this.algorithm,
                privateKey: childKey.toArrayLike(Buffer, "be", 32),
                chainCode: iR,
                index,
                depth: this.depth + 1,
                parentFingerprint: this.fingerprint,
                version: this.version,
            });
        }
        // secp256k1
        // if parse256(IL) >= n, the resulting key is invalid; proceed with the next
        // value for i
        if (iL.cmp(secp256k1.n) >= 0) {
            return this.deriveChildKey(childIndex + 1, hardened);
        }
        if (this.privateKey) {
            // child key ki is parse256(IL) + kpar (mod n)
            const childKey = iL.add(new bn_js_1.default(this.privateKey)).mod(secp256k1.n);
            // if ki = 0, the resulting key is invalid; proceed with the next value
            // for i
            if (childKey.cmp(new bn_js_1.default(0)) === 0) {
                return this.deriveChildKey(childIndex + 1, hardened);
            }
            return new HDKey({
                algorithm: this.algorithm,
                privateKey: childKey.toArrayLike(Buffer, "be", 32),
                chainCode: iR,
                index,
                parentFingerprint: this.fingerprint,
                depth: this.depth + 1,
                version: this.version,
            });
        }
        else {
            // Ki is point(parse256(IL)) + Kpar = G * IL + Kpar
            const parentKey = secp256k1.keyFromPublic(this.publicKey).pub;
            const childKey = secp256k1.g.mul(iL).add(parentKey);
            // if Ki is the point at infinity, the resulting key is invalid; proceed
            // with the next value for i
            if (childKey.isInfinity()) {
                return this.deriveChildKey(childIndex + 1, false);
            }
            const compressedChildKey = Buffer.from(childKey.encode(null, true));
            return new HDKey({
                depth: this.depth + 1,
                publicKey: compressedChildKey,
                chainCode: iR,
                parentFingerprint: this.fingerprint,
                index,
                version: this.version,
            });
        }
    }
    serialize(version, key) {
        // version_bytes[4] || depth[1] || parent_fingerprint[4] || index[4] ||
        // chain_code[32] || key_data[33] || checksum[4]
        const buf = Buffer.alloc(78);
        let o = buf.writeUInt32BE(version, 0);
        o = buf.writeUInt8(this.depth, o);
        o += this.parentFingerprint.copy(buf, o);
        o = buf.writeUInt32BE(this.index, o);
        o += this.chainCode.copy(buf, o);
        o += 33 - key.length;
        key.copy(buf, o);
        const checksum = sha256(sha256(buf)).slice(0, 4);
        return bs58.encode(Buffer.concat([buf, checksum]));
    }
}
exports.HDKey = HDKey;
function hmacSha512(key, data) {
    return crypto.createHmac("sha512", key).update(data).digest();
}
function sha256(data) {
    return crypto.createHash("sha256").update(data).digest();
}
function hash160(data) {
    const d = crypto.createHash("sha256").update(data).digest();
    return crypto.createHash("rmd160").update(d).digest();
}
function publicFromPrivateKey(privateKey, algorithm) {
    let publicKey;
    switch (algorithm) {
        case Algorithm.secp256k1: {
            publicKey = secp256k1.keyFromPrivate(privateKey).getPublic(true, "hex");
            break;
        }
        case Algorithm.ed25519: {
            publicKey = "00" + ed25519.keyFromSecret(privateKey).getPublic("hex");
            break;
        }
        default:
            throw new Error("unsupported algorithm");
    }
    return Buffer.from(publicKey, "hex");
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 68194:
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mnemonic = void 0;
const crypto = __importStar(__webpack_require__(69678));
const wordlist_en_1 = __importDefault(__webpack_require__(7963));
class Mnemonic {
    constructor(entropy, wordList = wordlist_en_1.default) {
        if (entropy.length % 4 !== 0) {
            throw new Error("invalid entropy length - it must be multiples of 4");
        }
        if (wordList.length !== 2048) {
            throw new Error("wordList must contain exactly 2048 words");
        }
        this._entropy = entropy;
        this._wordList = wordList;
    }
    // exists for backward-compatibility
    static generate(entropy, wordList = wordlist_en_1.default) {
        return new Mnemonic(entropy, wordList);
    }
    static parse(phrase, wordList = wordlist_en_1.default) {
        const words = phrase.split(" ");
        if (words.length % 3 !== 0) {
            return null;
        }
        const bitArrays = [];
        for (const word of words) {
            const idx = wordList.indexOf(word);
            if (idx === -1) {
                return null;
            }
            bitArrays.push(uint11ToBitArray(idx));
        }
        const bits = flatten(bitArrays);
        const cs = bits.length / 33;
        if (cs !== Math.floor(cs)) {
            return null;
        }
        const checksum = bits.slice(-cs);
        bits.splice(-cs, cs);
        const entropy = [];
        for (let i = 0; i < bits.length / 8; i++) {
            entropy.push(eightBitsToInt(bits.slice(i * 8, (i + 1) * 8)));
        }
        const entropyBuf = Buffer.from(entropy);
        const shasum = crypto.createHash("sha256").update(entropyBuf).digest();
        const checksumFromSha = flatten(Array.from(shasum).map(uint8ToBitArray)).slice(0, cs);
        if (!arraysEqual(checksumFromSha, checksum)) {
            return null;
        }
        return new Mnemonic(entropyBuf, wordList);
    }
    get entropy() {
        return this._entropy;
    }
    get words() {
        if (!this._words) {
            const ent = this.entropy.length * 8;
            const cs = ent / 32;
            const bits = flatten(Array.from(this.entropy).map(uint8ToBitArray));
            const shasum = crypto.createHash("sha256").update(this.entropy).digest();
            const checksum = flatten(Array.from(shasum).map(uint8ToBitArray)).slice(0, cs);
            bits.push(...checksum);
            const words = [];
            for (let i = 0; i < bits.length / 11; i++) {
                const idx = elevenBitsToInt(bits.slice(i * 11, (i + 1) * 11));
                words.push(this._wordList[idx]);
            }
            this._words = words;
        }
        return this._words;
    }
    get phrase() {
        if (!this._phrase) {
            this._phrase = this.words.join(" ");
        }
        return this._phrase;
    }
    toSeed(passphrase = "") {
        const salt = `mnemonic${passphrase}`;
        return Mnemonic.pbkdf2Sync(this.phrase, salt, 2048, 64, "sha512");
    }
    toSeedAsync(passphrase = "") {
        const salt = `mnemonic${passphrase}`;
        return new Promise((resolve, reject) => {
            Mnemonic.pbkdf2(this.phrase, salt, 2048, 64, "sha512", (err, key) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(key);
            });
        });
    }
}
exports.Mnemonic = Mnemonic;
Mnemonic.pbkdf2Sync = crypto.pbkdf2Sync;
Mnemonic.pbkdf2 = crypto.pbkdf2;
function flatten(input) {
    const arr = [];
    return arr.concat(...input);
}
function uint11ToBitArray(n) {
    return [
        Math.min(n & 1024, 1),
        Math.min(n & 512, 1),
        Math.min(n & 256, 1),
        Math.min(n & 128, 1),
        Math.min(n & 64, 1),
        Math.min(n & 32, 1),
        Math.min(n & 16, 1),
        Math.min(n & 8, 1),
        Math.min(n & 4, 1),
        Math.min(n & 2, 1),
        Math.min(n & 1, 1),
    ];
}
function uint8ToBitArray(n) {
    return [
        Math.min(n & 128, 1),
        Math.min(n & 64, 1),
        Math.min(n & 32, 1),
        Math.min(n & 16, 1),
        Math.min(n & 8, 1),
        Math.min(n & 4, 1),
        Math.min(n & 2, 1),
        Math.min(n & 1, 1),
    ];
}
function elevenBitsToInt(bits) {
    return (bits[0] * 1024 +
        bits[1] * 512 +
        bits[2] * 256 +
        bits[3] * 128 +
        bits[4] * 64 +
        bits[5] * 32 +
        bits[6] * 16 +
        bits[7] * 8 +
        bits[8] * 4 +
        bits[9] * 2 +
        bits[10]);
}
function eightBitsToInt(bits) {
    return (bits[0] * 128 +
        bits[1] * 64 +
        bits[2] * 32 +
        bits[3] * 16 +
        bits[4] * 8 +
        bits[5] * 4 +
        bits[6] * 2 +
        bits[7]);
}
function arraysEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7963:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const wordList = [
    "abandon",
    "ability",
    "able",
    "about",
    "above",
    "absent",
    "absorb",
    "abstract",
    "absurd",
    "abuse",
    "access",
    "accident",
    "account",
    "accuse",
    "achieve",
    "acid",
    "acoustic",
    "acquire",
    "across",
    "act",
    "action",
    "actor",
    "actress",
    "actual",
    "adapt",
    "add",
    "addict",
    "address",
    "adjust",
    "admit",
    "adult",
    "advance",
    "advice",
    "aerobic",
    "affair",
    "afford",
    "afraid",
    "again",
    "age",
    "agent",
    "agree",
    "ahead",
    "aim",
    "air",
    "airport",
    "aisle",
    "alarm",
    "album",
    "alcohol",
    "alert",
    "alien",
    "all",
    "alley",
    "allow",
    "almost",
    "alone",
    "alpha",
    "already",
    "also",
    "alter",
    "always",
    "amateur",
    "amazing",
    "among",
    "amount",
    "amused",
    "analyst",
    "anchor",
    "ancient",
    "anger",
    "angle",
    "angry",
    "animal",
    "ankle",
    "announce",
    "annual",
    "another",
    "answer",
    "antenna",
    "antique",
    "anxiety",
    "any",
    "apart",
    "apology",
    "appear",
    "apple",
    "approve",
    "april",
    "arch",
    "arctic",
    "area",
    "arena",
    "argue",
    "arm",
    "armed",
    "armor",
    "army",
    "around",
    "arrange",
    "arrest",
    "arrive",
    "arrow",
    "art",
    "artefact",
    "artist",
    "artwork",
    "ask",
    "aspect",
    "assault",
    "asset",
    "assist",
    "assume",
    "asthma",
    "athlete",
    "atom",
    "attack",
    "attend",
    "attitude",
    "attract",
    "auction",
    "audit",
    "august",
    "aunt",
    "author",
    "auto",
    "autumn",
    "average",
    "avocado",
    "avoid",
    "awake",
    "aware",
    "away",
    "awesome",
    "awful",
    "awkward",
    "axis",
    "baby",
    "bachelor",
    "bacon",
    "badge",
    "bag",
    "balance",
    "balcony",
    "ball",
    "bamboo",
    "banana",
    "banner",
    "bar",
    "barely",
    "bargain",
    "barrel",
    "base",
    "basic",
    "basket",
    "battle",
    "beach",
    "bean",
    "beauty",
    "because",
    "become",
    "beef",
    "before",
    "begin",
    "behave",
    "behind",
    "believe",
    "below",
    "belt",
    "bench",
    "benefit",
    "best",
    "betray",
    "better",
    "between",
    "beyond",
    "bicycle",
    "bid",
    "bike",
    "bind",
    "biology",
    "bird",
    "birth",
    "bitter",
    "black",
    "blade",
    "blame",
    "blanket",
    "blast",
    "bleak",
    "bless",
    "blind",
    "blood",
    "blossom",
    "blouse",
    "blue",
    "blur",
    "blush",
    "board",
    "boat",
    "body",
    "boil",
    "bomb",
    "bone",
    "bonus",
    "book",
    "boost",
    "border",
    "boring",
    "borrow",
    "boss",
    "bottom",
    "bounce",
    "box",
    "boy",
    "bracket",
    "brain",
    "brand",
    "brass",
    "brave",
    "bread",
    "breeze",
    "brick",
    "bridge",
    "brief",
    "bright",
    "bring",
    "brisk",
    "broccoli",
    "broken",
    "bronze",
    "broom",
    "brother",
    "brown",
    "brush",
    "bubble",
    "buddy",
    "budget",
    "buffalo",
    "build",
    "bulb",
    "bulk",
    "bullet",
    "bundle",
    "bunker",
    "burden",
    "burger",
    "burst",
    "bus",
    "business",
    "busy",
    "butter",
    "buyer",
    "buzz",
    "cabbage",
    "cabin",
    "cable",
    "cactus",
    "cage",
    "cake",
    "call",
    "calm",
    "camera",
    "camp",
    "can",
    "canal",
    "cancel",
    "candy",
    "cannon",
    "canoe",
    "canvas",
    "canyon",
    "capable",
    "capital",
    "captain",
    "car",
    "carbon",
    "card",
    "cargo",
    "carpet",
    "carry",
    "cart",
    "case",
    "cash",
    "casino",
    "castle",
    "casual",
    "cat",
    "catalog",
    "catch",
    "category",
    "cattle",
    "caught",
    "cause",
    "caution",
    "cave",
    "ceiling",
    "celery",
    "cement",
    "census",
    "century",
    "cereal",
    "certain",
    "chair",
    "chalk",
    "champion",
    "change",
    "chaos",
    "chapter",
    "charge",
    "chase",
    "chat",
    "cheap",
    "check",
    "cheese",
    "chef",
    "cherry",
    "chest",
    "chicken",
    "chief",
    "child",
    "chimney",
    "choice",
    "choose",
    "chronic",
    "chuckle",
    "chunk",
    "churn",
    "cigar",
    "cinnamon",
    "circle",
    "citizen",
    "city",
    "civil",
    "claim",
    "clap",
    "clarify",
    "claw",
    "clay",
    "clean",
    "clerk",
    "clever",
    "click",
    "client",
    "cliff",
    "climb",
    "clinic",
    "clip",
    "clock",
    "clog",
    "close",
    "cloth",
    "cloud",
    "clown",
    "club",
    "clump",
    "cluster",
    "clutch",
    "coach",
    "coast",
    "coconut",
    "code",
    "coffee",
    "coil",
    "coin",
    "collect",
    "color",
    "column",
    "combine",
    "come",
    "comfort",
    "comic",
    "common",
    "company",
    "concert",
    "conduct",
    "confirm",
    "congress",
    "connect",
    "consider",
    "control",
    "convince",
    "cook",
    "cool",
    "copper",
    "copy",
    "coral",
    "core",
    "corn",
    "correct",
    "cost",
    "cotton",
    "couch",
    "country",
    "couple",
    "course",
    "cousin",
    "cover",
    "coyote",
    "crack",
    "cradle",
    "craft",
    "cram",
    "crane",
    "crash",
    "crater",
    "crawl",
    "crazy",
    "cream",
    "credit",
    "creek",
    "crew",
    "cricket",
    "crime",
    "crisp",
    "critic",
    "crop",
    "cross",
    "crouch",
    "crowd",
    "crucial",
    "cruel",
    "cruise",
    "crumble",
    "crunch",
    "crush",
    "cry",
    "crystal",
    "cube",
    "culture",
    "cup",
    "cupboard",
    "curious",
    "current",
    "curtain",
    "curve",
    "cushion",
    "custom",
    "cute",
    "cycle",
    "dad",
    "damage",
    "damp",
    "dance",
    "danger",
    "daring",
    "dash",
    "daughter",
    "dawn",
    "day",
    "deal",
    "debate",
    "debris",
    "decade",
    "december",
    "decide",
    "decline",
    "decorate",
    "decrease",
    "deer",
    "defense",
    "define",
    "defy",
    "degree",
    "delay",
    "deliver",
    "demand",
    "demise",
    "denial",
    "dentist",
    "deny",
    "depart",
    "depend",
    "deposit",
    "depth",
    "deputy",
    "derive",
    "describe",
    "desert",
    "design",
    "desk",
    "despair",
    "destroy",
    "detail",
    "detect",
    "develop",
    "device",
    "devote",
    "diagram",
    "dial",
    "diamond",
    "diary",
    "dice",
    "diesel",
    "diet",
    "differ",
    "digital",
    "dignity",
    "dilemma",
    "dinner",
    "dinosaur",
    "direct",
    "dirt",
    "disagree",
    "discover",
    "disease",
    "dish",
    "dismiss",
    "disorder",
    "display",
    "distance",
    "divert",
    "divide",
    "divorce",
    "dizzy",
    "doctor",
    "document",
    "dog",
    "doll",
    "dolphin",
    "domain",
    "donate",
    "donkey",
    "donor",
    "door",
    "dose",
    "double",
    "dove",
    "draft",
    "dragon",
    "drama",
    "drastic",
    "draw",
    "dream",
    "dress",
    "drift",
    "drill",
    "drink",
    "drip",
    "drive",
    "drop",
    "drum",
    "dry",
    "duck",
    "dumb",
    "dune",
    "during",
    "dust",
    "dutch",
    "duty",
    "dwarf",
    "dynamic",
    "eager",
    "eagle",
    "early",
    "earn",
    "earth",
    "easily",
    "east",
    "easy",
    "echo",
    "ecology",
    "economy",
    "edge",
    "edit",
    "educate",
    "effort",
    "egg",
    "eight",
    "either",
    "elbow",
    "elder",
    "electric",
    "elegant",
    "element",
    "elephant",
    "elevator",
    "elite",
    "else",
    "embark",
    "embody",
    "embrace",
    "emerge",
    "emotion",
    "employ",
    "empower",
    "empty",
    "enable",
    "enact",
    "end",
    "endless",
    "endorse",
    "enemy",
    "energy",
    "enforce",
    "engage",
    "engine",
    "enhance",
    "enjoy",
    "enlist",
    "enough",
    "enrich",
    "enroll",
    "ensure",
    "enter",
    "entire",
    "entry",
    "envelope",
    "episode",
    "equal",
    "equip",
    "era",
    "erase",
    "erode",
    "erosion",
    "error",
    "erupt",
    "escape",
    "essay",
    "essence",
    "estate",
    "eternal",
    "ethics",
    "evidence",
    "evil",
    "evoke",
    "evolve",
    "exact",
    "example",
    "excess",
    "exchange",
    "excite",
    "exclude",
    "excuse",
    "execute",
    "exercise",
    "exhaust",
    "exhibit",
    "exile",
    "exist",
    "exit",
    "exotic",
    "expand",
    "expect",
    "expire",
    "explain",
    "expose",
    "express",
    "extend",
    "extra",
    "eye",
    "eyebrow",
    "fabric",
    "face",
    "faculty",
    "fade",
    "faint",
    "faith",
    "fall",
    "false",
    "fame",
    "family",
    "famous",
    "fan",
    "fancy",
    "fantasy",
    "farm",
    "fashion",
    "fat",
    "fatal",
    "father",
    "fatigue",
    "fault",
    "favorite",
    "feature",
    "february",
    "federal",
    "fee",
    "feed",
    "feel",
    "female",
    "fence",
    "festival",
    "fetch",
    "fever",
    "few",
    "fiber",
    "fiction",
    "field",
    "figure",
    "file",
    "film",
    "filter",
    "final",
    "find",
    "fine",
    "finger",
    "finish",
    "fire",
    "firm",
    "first",
    "fiscal",
    "fish",
    "fit",
    "fitness",
    "fix",
    "flag",
    "flame",
    "flash",
    "flat",
    "flavor",
    "flee",
    "flight",
    "flip",
    "float",
    "flock",
    "floor",
    "flower",
    "fluid",
    "flush",
    "fly",
    "foam",
    "focus",
    "fog",
    "foil",
    "fold",
    "follow",
    "food",
    "foot",
    "force",
    "forest",
    "forget",
    "fork",
    "fortune",
    "forum",
    "forward",
    "fossil",
    "foster",
    "found",
    "fox",
    "fragile",
    "frame",
    "frequent",
    "fresh",
    "friend",
    "fringe",
    "frog",
    "front",
    "frost",
    "frown",
    "frozen",
    "fruit",
    "fuel",
    "fun",
    "funny",
    "furnace",
    "fury",
    "future",
    "gadget",
    "gain",
    "galaxy",
    "gallery",
    "game",
    "gap",
    "garage",
    "garbage",
    "garden",
    "garlic",
    "garment",
    "gas",
    "gasp",
    "gate",
    "gather",
    "gauge",
    "gaze",
    "general",
    "genius",
    "genre",
    "gentle",
    "genuine",
    "gesture",
    "ghost",
    "giant",
    "gift",
    "giggle",
    "ginger",
    "giraffe",
    "girl",
    "give",
    "glad",
    "glance",
    "glare",
    "glass",
    "glide",
    "glimpse",
    "globe",
    "gloom",
    "glory",
    "glove",
    "glow",
    "glue",
    "goat",
    "goddess",
    "gold",
    "good",
    "goose",
    "gorilla",
    "gospel",
    "gossip",
    "govern",
    "gown",
    "grab",
    "grace",
    "grain",
    "grant",
    "grape",
    "grass",
    "gravity",
    "great",
    "green",
    "grid",
    "grief",
    "grit",
    "grocery",
    "group",
    "grow",
    "grunt",
    "guard",
    "guess",
    "guide",
    "guilt",
    "guitar",
    "gun",
    "gym",
    "habit",
    "hair",
    "half",
    "hammer",
    "hamster",
    "hand",
    "happy",
    "harbor",
    "hard",
    "harsh",
    "harvest",
    "hat",
    "have",
    "hawk",
    "hazard",
    "head",
    "health",
    "heart",
    "heavy",
    "hedgehog",
    "height",
    "hello",
    "helmet",
    "help",
    "hen",
    "hero",
    "hidden",
    "high",
    "hill",
    "hint",
    "hip",
    "hire",
    "history",
    "hobby",
    "hockey",
    "hold",
    "hole",
    "holiday",
    "hollow",
    "home",
    "honey",
    "hood",
    "hope",
    "horn",
    "horror",
    "horse",
    "hospital",
    "host",
    "hotel",
    "hour",
    "hover",
    "hub",
    "huge",
    "human",
    "humble",
    "humor",
    "hundred",
    "hungry",
    "hunt",
    "hurdle",
    "hurry",
    "hurt",
    "husband",
    "hybrid",
    "ice",
    "icon",
    "idea",
    "identify",
    "idle",
    "ignore",
    "ill",
    "illegal",
    "illness",
    "image",
    "imitate",
    "immense",
    "immune",
    "impact",
    "impose",
    "improve",
    "impulse",
    "inch",
    "include",
    "income",
    "increase",
    "index",
    "indicate",
    "indoor",
    "industry",
    "infant",
    "inflict",
    "inform",
    "inhale",
    "inherit",
    "initial",
    "inject",
    "injury",
    "inmate",
    "inner",
    "innocent",
    "input",
    "inquiry",
    "insane",
    "insect",
    "inside",
    "inspire",
    "install",
    "intact",
    "interest",
    "into",
    "invest",
    "invite",
    "involve",
    "iron",
    "island",
    "isolate",
    "issue",
    "item",
    "ivory",
    "jacket",
    "jaguar",
    "jar",
    "jazz",
    "jealous",
    "jeans",
    "jelly",
    "jewel",
    "job",
    "join",
    "joke",
    "journey",
    "joy",
    "judge",
    "juice",
    "jump",
    "jungle",
    "junior",
    "junk",
    "just",
    "kangaroo",
    "keen",
    "keep",
    "ketchup",
    "key",
    "kick",
    "kid",
    "kidney",
    "kind",
    "kingdom",
    "kiss",
    "kit",
    "kitchen",
    "kite",
    "kitten",
    "kiwi",
    "knee",
    "knife",
    "knock",
    "know",
    "lab",
    "label",
    "labor",
    "ladder",
    "lady",
    "lake",
    "lamp",
    "language",
    "laptop",
    "large",
    "later",
    "latin",
    "laugh",
    "laundry",
    "lava",
    "law",
    "lawn",
    "lawsuit",
    "layer",
    "lazy",
    "leader",
    "leaf",
    "learn",
    "leave",
    "lecture",
    "left",
    "leg",
    "legal",
    "legend",
    "leisure",
    "lemon",
    "lend",
    "length",
    "lens",
    "leopard",
    "lesson",
    "letter",
    "level",
    "liar",
    "liberty",
    "library",
    "license",
    "life",
    "lift",
    "light",
    "like",
    "limb",
    "limit",
    "link",
    "lion",
    "liquid",
    "list",
    "little",
    "live",
    "lizard",
    "load",
    "loan",
    "lobster",
    "local",
    "lock",
    "logic",
    "lonely",
    "long",
    "loop",
    "lottery",
    "loud",
    "lounge",
    "love",
    "loyal",
    "lucky",
    "luggage",
    "lumber",
    "lunar",
    "lunch",
    "luxury",
    "lyrics",
    "machine",
    "mad",
    "magic",
    "magnet",
    "maid",
    "mail",
    "main",
    "major",
    "make",
    "mammal",
    "man",
    "manage",
    "mandate",
    "mango",
    "mansion",
    "manual",
    "maple",
    "marble",
    "march",
    "margin",
    "marine",
    "market",
    "marriage",
    "mask",
    "mass",
    "master",
    "match",
    "material",
    "math",
    "matrix",
    "matter",
    "maximum",
    "maze",
    "meadow",
    "mean",
    "measure",
    "meat",
    "mechanic",
    "medal",
    "media",
    "melody",
    "melt",
    "member",
    "memory",
    "mention",
    "menu",
    "mercy",
    "merge",
    "merit",
    "merry",
    "mesh",
    "message",
    "metal",
    "method",
    "middle",
    "midnight",
    "milk",
    "million",
    "mimic",
    "mind",
    "minimum",
    "minor",
    "minute",
    "miracle",
    "mirror",
    "misery",
    "miss",
    "mistake",
    "mix",
    "mixed",
    "mixture",
    "mobile",
    "model",
    "modify",
    "mom",
    "moment",
    "monitor",
    "monkey",
    "monster",
    "month",
    "moon",
    "moral",
    "more",
    "morning",
    "mosquito",
    "mother",
    "motion",
    "motor",
    "mountain",
    "mouse",
    "move",
    "movie",
    "much",
    "muffin",
    "mule",
    "multiply",
    "muscle",
    "museum",
    "mushroom",
    "music",
    "must",
    "mutual",
    "myself",
    "mystery",
    "myth",
    "naive",
    "name",
    "napkin",
    "narrow",
    "nasty",
    "nation",
    "nature",
    "near",
    "neck",
    "need",
    "negative",
    "neglect",
    "neither",
    "nephew",
    "nerve",
    "nest",
    "net",
    "network",
    "neutral",
    "never",
    "news",
    "next",
    "nice",
    "night",
    "noble",
    "noise",
    "nominee",
    "noodle",
    "normal",
    "north",
    "nose",
    "notable",
    "note",
    "nothing",
    "notice",
    "novel",
    "now",
    "nuclear",
    "number",
    "nurse",
    "nut",
    "oak",
    "obey",
    "object",
    "oblige",
    "obscure",
    "observe",
    "obtain",
    "obvious",
    "occur",
    "ocean",
    "october",
    "odor",
    "off",
    "offer",
    "office",
    "often",
    "oil",
    "okay",
    "old",
    "olive",
    "olympic",
    "omit",
    "once",
    "one",
    "onion",
    "online",
    "only",
    "open",
    "opera",
    "opinion",
    "oppose",
    "option",
    "orange",
    "orbit",
    "orchard",
    "order",
    "ordinary",
    "organ",
    "orient",
    "original",
    "orphan",
    "ostrich",
    "other",
    "outdoor",
    "outer",
    "output",
    "outside",
    "oval",
    "oven",
    "over",
    "own",
    "owner",
    "oxygen",
    "oyster",
    "ozone",
    "pact",
    "paddle",
    "page",
    "pair",
    "palace",
    "palm",
    "panda",
    "panel",
    "panic",
    "panther",
    "paper",
    "parade",
    "parent",
    "park",
    "parrot",
    "party",
    "pass",
    "patch",
    "path",
    "patient",
    "patrol",
    "pattern",
    "pause",
    "pave",
    "payment",
    "peace",
    "peanut",
    "pear",
    "peasant",
    "pelican",
    "pen",
    "penalty",
    "pencil",
    "people",
    "pepper",
    "perfect",
    "permit",
    "person",
    "pet",
    "phone",
    "photo",
    "phrase",
    "physical",
    "piano",
    "picnic",
    "picture",
    "piece",
    "pig",
    "pigeon",
    "pill",
    "pilot",
    "pink",
    "pioneer",
    "pipe",
    "pistol",
    "pitch",
    "pizza",
    "place",
    "planet",
    "plastic",
    "plate",
    "play",
    "please",
    "pledge",
    "pluck",
    "plug",
    "plunge",
    "poem",
    "poet",
    "point",
    "polar",
    "pole",
    "police",
    "pond",
    "pony",
    "pool",
    "popular",
    "portion",
    "position",
    "possible",
    "post",
    "potato",
    "pottery",
    "poverty",
    "powder",
    "power",
    "practice",
    "praise",
    "predict",
    "prefer",
    "prepare",
    "present",
    "pretty",
    "prevent",
    "price",
    "pride",
    "primary",
    "print",
    "priority",
    "prison",
    "private",
    "prize",
    "problem",
    "process",
    "produce",
    "profit",
    "program",
    "project",
    "promote",
    "proof",
    "property",
    "prosper",
    "protect",
    "proud",
    "provide",
    "public",
    "pudding",
    "pull",
    "pulp",
    "pulse",
    "pumpkin",
    "punch",
    "pupil",
    "puppy",
    "purchase",
    "purity",
    "purpose",
    "purse",
    "push",
    "put",
    "puzzle",
    "pyramid",
    "quality",
    "quantum",
    "quarter",
    "question",
    "quick",
    "quit",
    "quiz",
    "quote",
    "rabbit",
    "raccoon",
    "race",
    "rack",
    "radar",
    "radio",
    "rail",
    "rain",
    "raise",
    "rally",
    "ramp",
    "ranch",
    "random",
    "range",
    "rapid",
    "rare",
    "rate",
    "rather",
    "raven",
    "raw",
    "razor",
    "ready",
    "real",
    "reason",
    "rebel",
    "rebuild",
    "recall",
    "receive",
    "recipe",
    "record",
    "recycle",
    "reduce",
    "reflect",
    "reform",
    "refuse",
    "region",
    "regret",
    "regular",
    "reject",
    "relax",
    "release",
    "relief",
    "rely",
    "remain",
    "remember",
    "remind",
    "remove",
    "render",
    "renew",
    "rent",
    "reopen",
    "repair",
    "repeat",
    "replace",
    "report",
    "require",
    "rescue",
    "resemble",
    "resist",
    "resource",
    "response",
    "result",
    "retire",
    "retreat",
    "return",
    "reunion",
    "reveal",
    "review",
    "reward",
    "rhythm",
    "rib",
    "ribbon",
    "rice",
    "rich",
    "ride",
    "ridge",
    "rifle",
    "right",
    "rigid",
    "ring",
    "riot",
    "ripple",
    "risk",
    "ritual",
    "rival",
    "river",
    "road",
    "roast",
    "robot",
    "robust",
    "rocket",
    "romance",
    "roof",
    "rookie",
    "room",
    "rose",
    "rotate",
    "rough",
    "round",
    "route",
    "royal",
    "rubber",
    "rude",
    "rug",
    "rule",
    "run",
    "runway",
    "rural",
    "sad",
    "saddle",
    "sadness",
    "safe",
    "sail",
    "salad",
    "salmon",
    "salon",
    "salt",
    "salute",
    "same",
    "sample",
    "sand",
    "satisfy",
    "satoshi",
    "sauce",
    "sausage",
    "save",
    "say",
    "scale",
    "scan",
    "scare",
    "scatter",
    "scene",
    "scheme",
    "school",
    "science",
    "scissors",
    "scorpion",
    "scout",
    "scrap",
    "screen",
    "script",
    "scrub",
    "sea",
    "search",
    "season",
    "seat",
    "second",
    "secret",
    "section",
    "security",
    "seed",
    "seek",
    "segment",
    "select",
    "sell",
    "seminar",
    "senior",
    "sense",
    "sentence",
    "series",
    "service",
    "session",
    "settle",
    "setup",
    "seven",
    "shadow",
    "shaft",
    "shallow",
    "share",
    "shed",
    "shell",
    "sheriff",
    "shield",
    "shift",
    "shine",
    "ship",
    "shiver",
    "shock",
    "shoe",
    "shoot",
    "shop",
    "short",
    "shoulder",
    "shove",
    "shrimp",
    "shrug",
    "shuffle",
    "shy",
    "sibling",
    "sick",
    "side",
    "siege",
    "sight",
    "sign",
    "silent",
    "silk",
    "silly",
    "silver",
    "similar",
    "simple",
    "since",
    "sing",
    "siren",
    "sister",
    "situate",
    "six",
    "size",
    "skate",
    "sketch",
    "ski",
    "skill",
    "skin",
    "skirt",
    "skull",
    "slab",
    "slam",
    "sleep",
    "slender",
    "slice",
    "slide",
    "slight",
    "slim",
    "slogan",
    "slot",
    "slow",
    "slush",
    "small",
    "smart",
    "smile",
    "smoke",
    "smooth",
    "snack",
    "snake",
    "snap",
    "sniff",
    "snow",
    "soap",
    "soccer",
    "social",
    "sock",
    "soda",
    "soft",
    "solar",
    "soldier",
    "solid",
    "solution",
    "solve",
    "someone",
    "song",
    "soon",
    "sorry",
    "sort",
    "soul",
    "sound",
    "soup",
    "source",
    "south",
    "space",
    "spare",
    "spatial",
    "spawn",
    "speak",
    "special",
    "speed",
    "spell",
    "spend",
    "sphere",
    "spice",
    "spider",
    "spike",
    "spin",
    "spirit",
    "split",
    "spoil",
    "sponsor",
    "spoon",
    "sport",
    "spot",
    "spray",
    "spread",
    "spring",
    "spy",
    "square",
    "squeeze",
    "squirrel",
    "stable",
    "stadium",
    "staff",
    "stage",
    "stairs",
    "stamp",
    "stand",
    "start",
    "state",
    "stay",
    "steak",
    "steel",
    "stem",
    "step",
    "stereo",
    "stick",
    "still",
    "sting",
    "stock",
    "stomach",
    "stone",
    "stool",
    "story",
    "stove",
    "strategy",
    "street",
    "strike",
    "strong",
    "struggle",
    "student",
    "stuff",
    "stumble",
    "style",
    "subject",
    "submit",
    "subway",
    "success",
    "such",
    "sudden",
    "suffer",
    "sugar",
    "suggest",
    "suit",
    "summer",
    "sun",
    "sunny",
    "sunset",
    "super",
    "supply",
    "supreme",
    "sure",
    "surface",
    "surge",
    "surprise",
    "surround",
    "survey",
    "suspect",
    "sustain",
    "swallow",
    "swamp",
    "swap",
    "swarm",
    "swear",
    "sweet",
    "swift",
    "swim",
    "swing",
    "switch",
    "sword",
    "symbol",
    "symptom",
    "syrup",
    "system",
    "table",
    "tackle",
    "tag",
    "tail",
    "talent",
    "talk",
    "tank",
    "tape",
    "target",
    "task",
    "taste",
    "tattoo",
    "taxi",
    "teach",
    "team",
    "tell",
    "ten",
    "tenant",
    "tennis",
    "tent",
    "term",
    "test",
    "text",
    "thank",
    "that",
    "theme",
    "then",
    "theory",
    "there",
    "they",
    "thing",
    "this",
    "thought",
    "three",
    "thrive",
    "throw",
    "thumb",
    "thunder",
    "ticket",
    "tide",
    "tiger",
    "tilt",
    "timber",
    "time",
    "tiny",
    "tip",
    "tired",
    "tissue",
    "title",
    "toast",
    "tobacco",
    "today",
    "toddler",
    "toe",
    "together",
    "toilet",
    "token",
    "tomato",
    "tomorrow",
    "tone",
    "tongue",
    "tonight",
    "tool",
    "tooth",
    "top",
    "topic",
    "topple",
    "torch",
    "tornado",
    "tortoise",
    "toss",
    "total",
    "tourist",
    "toward",
    "tower",
    "town",
    "toy",
    "track",
    "trade",
    "traffic",
    "tragic",
    "train",
    "transfer",
    "trap",
    "trash",
    "travel",
    "tray",
    "treat",
    "tree",
    "trend",
    "trial",
    "tribe",
    "trick",
    "trigger",
    "trim",
    "trip",
    "trophy",
    "trouble",
    "truck",
    "true",
    "truly",
    "trumpet",
    "trust",
    "truth",
    "try",
    "tube",
    "tuition",
    "tumble",
    "tuna",
    "tunnel",
    "turkey",
    "turn",
    "turtle",
    "twelve",
    "twenty",
    "twice",
    "twin",
    "twist",
    "two",
    "type",
    "typical",
    "ugly",
    "umbrella",
    "unable",
    "unaware",
    "uncle",
    "uncover",
    "under",
    "undo",
    "unfair",
    "unfold",
    "unhappy",
    "uniform",
    "unique",
    "unit",
    "universe",
    "unknown",
    "unlock",
    "until",
    "unusual",
    "unveil",
    "update",
    "upgrade",
    "uphold",
    "upon",
    "upper",
    "upset",
    "urban",
    "urge",
    "usage",
    "use",
    "used",
    "useful",
    "useless",
    "usual",
    "utility",
    "vacant",
    "vacuum",
    "vague",
    "valid",
    "valley",
    "valve",
    "van",
    "vanish",
    "vapor",
    "various",
    "vast",
    "vault",
    "vehicle",
    "velvet",
    "vendor",
    "venture",
    "venue",
    "verb",
    "verify",
    "version",
    "very",
    "vessel",
    "veteran",
    "viable",
    "vibrant",
    "vicious",
    "victory",
    "video",
    "view",
    "village",
    "vintage",
    "violin",
    "virtual",
    "virus",
    "visa",
    "visit",
    "visual",
    "vital",
    "vivid",
    "vocal",
    "voice",
    "void",
    "volcano",
    "volume",
    "vote",
    "voyage",
    "wage",
    "wagon",
    "wait",
    "walk",
    "wall",
    "walnut",
    "want",
    "warfare",
    "warm",
    "warrior",
    "wash",
    "wasp",
    "waste",
    "water",
    "wave",
    "way",
    "wealth",
    "weapon",
    "wear",
    "weasel",
    "weather",
    "web",
    "wedding",
    "weekend",
    "weird",
    "welcome",
    "west",
    "wet",
    "whale",
    "what",
    "wheat",
    "wheel",
    "when",
    "where",
    "whip",
    "whisper",
    "wide",
    "width",
    "wife",
    "wild",
    "will",
    "win",
    "window",
    "wine",
    "wing",
    "wink",
    "winner",
    "winter",
    "wire",
    "wisdom",
    "wise",
    "wish",
    "witness",
    "wolf",
    "woman",
    "wonder",
    "wood",
    "wool",
    "word",
    "work",
    "world",
    "worry",
    "worth",
    "wrap",
    "wreck",
    "wrestle",
    "wrist",
    "write",
    "wrong",
    "yard",
    "year",
    "yellow",
    "you",
    "young",
    "youth",
    "zebra",
    "zero",
    "zone",
    "zoo",
];
exports.default = wordList;
//# sourceMappingURL=wordlist.en.js.map

/***/ }),

/***/ 99674:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.versions = exports.util = exports.Mnemonic = exports.HDKey = exports.EthereumAddress = exports.BitcoinAddress = void 0;
const BitcoinAddress_1 = __importDefault(__webpack_require__(37847));
exports.BitcoinAddress = BitcoinAddress_1.default;
const EthereumAddress_1 = __webpack_require__(85542);
Object.defineProperty(exports, "EthereumAddress", ({ enumerable: true, get: function () { return EthereumAddress_1.EthereumAddress; } }));
const HDKey_1 = __webpack_require__(49859);
Object.defineProperty(exports, "HDKey", ({ enumerable: true, get: function () { return HDKey_1.HDKey; } }));
const Mnemonic_1 = __webpack_require__(68194);
Object.defineProperty(exports, "Mnemonic", ({ enumerable: true, get: function () { return Mnemonic_1.Mnemonic; } }));
const util_1 = __importDefault(__webpack_require__(34607));
exports.util = util_1.default;
const versions_1 = __importDefault(__webpack_require__(95318));
exports.versions = versions_1.default;
exports.default = {
    BitcoinAddress: BitcoinAddress_1.default,
    EthereumAddress: EthereumAddress_1.EthereumAddress,
    HDKey: HDKey_1.HDKey,
    Mnemonic: Mnemonic_1.Mnemonic,
    util: util_1.default,
    versions: versions_1.default,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 34607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepend0x = exports.strip0x = exports.decompressPublicKey = void 0;
const elliptic_1 = __webpack_require__(75367);
const secp256k1 = new elliptic_1.ec("secp256k1");
function decompressPublicKey(publicKey) {
    const length = publicKey.length;
    const firstByte = publicKey[0];
    if ((length !== 33 && length !== 65) || firstByte < 2 || firstByte > 4) {
        throw new Error("invalid public key");
    }
    let key;
    try {
        key = secp256k1.keyFromPublic(publicKey);
    }
    catch (_err) {
        throw new Error("invalid public key");
    }
    return Buffer.from(key.getPublic().encode());
}
exports.decompressPublicKey = decompressPublicKey;
function strip0x(hex) {
    return hex.replace(/^0x/i, "");
}
exports.strip0x = strip0x;
function prepend0x(hex) {
    return hex.replace(/^(0x)?/i, "0x");
}
exports.prepend0x = prepend0x;
exports.default = { decompressPublicKey, strip0x };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95318:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const versions = {
    bitcoinMain: {
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4,
        },
        public: 0,
    },
    bitcoinTest: {
        bip32: {
            public: 0x043587cf,
            private: 0x04358394,
        },
        public: 0x6f,
    },
};
exports.default = versions;
//# sourceMappingURL=versions.js.map

/***/ })

}]);