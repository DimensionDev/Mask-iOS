"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9706],{

/***/ 27777:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _CommitID_type, _CommitID_cid, _CommitID_commit;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommitID = void 0;
const cids_1 = __importDefault(__webpack_require__(55271));
const multibase_1 = __importDefault(__webpack_require__(45845));
const stream_type_1 = __webpack_require__(74995);
const varint_1 = __importDefault(__webpack_require__(80233));
const concat_1 = __importDefault(__webpack_require__(36713));
const to_string_1 = __importDefault(__webpack_require__(48270));
const typescript_memoize_1 = __webpack_require__(30851);
const constants_1 = __webpack_require__(56471);
const reading_bytes_1 = __webpack_require__(43214);
const stream_id_1 = __webpack_require__(42125);
function fromBytes(bytes) {
    const result = fromBytesNoThrow(bytes);
    if (result instanceof Error) {
        throw result;
    }
    return result;
}
function fromBytesNoThrow(bytes) {
    const [streamCodec, streamCodecRemainder] = reading_bytes_1.readVarint(bytes);
    if (streamCodec !== constants_1.STREAMID_CODEC)
        return new Error('fromBytes: invalid streamid, does not include streamid codec');
    const [type, streamtypeRemainder] = reading_bytes_1.readVarint(streamCodecRemainder);
    const cidResult = reading_bytes_1.readCid(streamtypeRemainder);
    if (cidResult instanceof Error) {
        return cidResult;
    }
    const [base, baseRemainder] = cidResult;
    if (baseRemainder.length === 0) {
        return new Error(`No commit information provided`);
    }
    else if (baseRemainder.length === 1) {
        return new CommitID(type, base, baseRemainder[0]);
    }
    else {
        const [commit] = reading_bytes_1.readCid(baseRemainder);
        return new CommitID(type, base, commit);
    }
}
function parseCID(input) {
    try {
        return new cids_1.default(input);
    }
    catch (_a) {
        return undefined;
    }
}
function parseCommit(genesis, commit = null) {
    if (!commit)
        return null;
    const commitCID = parseCID(commit);
    if (commitCID) {
        if (genesis.equals(commitCID)) {
            return null;
        }
        else {
            return commitCID;
        }
    }
    else if (String(commit) === '0') {
        return null;
    }
    else {
        throw new Error('Cannot specify commit as a number except to request commit 0 (the genesis commit)');
    }
}
function fromString(input) {
    const result = fromStringNoThrow(input);
    if (result instanceof Error) {
        throw result;
    }
    return result;
}
function fromStringNoThrow(input) {
    const protocolFree = input.replace('ceramic://', '').replace('/ceramic/', '');
    if (protocolFree.includes('commit')) {
        const commit = protocolFree.split('?')[1].split('=')[1];
        const base = protocolFree.split('?')[0];
        return stream_id_1.StreamID.fromString(base).atCommit(commit);
    }
    else {
        return fromBytesNoThrow(multibase_1.default.decode(protocolFree));
    }
}
const TAG = Symbol.for('@ceramicnetwork/streamid/CommitID');
class CommitID {
    constructor(type, cid, commit = null) {
        this._tag = TAG;
        _CommitID_type.set(this, void 0);
        _CommitID_cid.set(this, void 0);
        _CommitID_commit.set(this, void 0);
        if (!type && type !== 0)
            throw new Error('constructor: type required');
        if (!cid)
            throw new Error('constructor: cid required');
        __classPrivateFieldSet(this, _CommitID_type, typeof type === 'string' ? stream_type_1.StreamType.codeByName(type) : type, "f");
        __classPrivateFieldSet(this, _CommitID_cid, typeof cid === 'string' ? new cids_1.default(cid) : cid, "f");
        __classPrivateFieldSet(this, _CommitID_commit, parseCommit(__classPrivateFieldGet(this, _CommitID_cid, "f"), commit), "f");
    }
    static isInstance(instance) {
        return typeof instance === 'object' && '_tag' in instance && instance._tag === TAG;
    }
    get baseID() {
        return new stream_id_1.StreamID(__classPrivateFieldGet(this, _CommitID_type, "f"), __classPrivateFieldGet(this, _CommitID_cid, "f"));
    }
    get type() {
        return __classPrivateFieldGet(this, _CommitID_type, "f");
    }
    get typeName() {
        return stream_type_1.StreamType.nameByCode(__classPrivateFieldGet(this, _CommitID_type, "f"));
    }
    get cid() {
        return __classPrivateFieldGet(this, _CommitID_cid, "f");
    }
    get commit() {
        return __classPrivateFieldGet(this, _CommitID_commit, "f") || __classPrivateFieldGet(this, _CommitID_cid, "f");
    }
    get bytes() {
        var _a;
        const codec = varint_1.default.encode(constants_1.STREAMID_CODEC);
        const type = varint_1.default.encode(this.type);
        const commitBytes = ((_a = __classPrivateFieldGet(this, _CommitID_commit, "f")) === null || _a === void 0 ? void 0 : _a.bytes) || new Uint8Array([0]);
        return concat_1.default([codec, type, this.cid.bytes, commitBytes]);
    }
    atCommit(commit) {
        return new CommitID(__classPrivateFieldGet(this, _CommitID_type, "f"), __classPrivateFieldGet(this, _CommitID_cid, "f"), commit);
    }
    equals(other) {
        return (this.type === other.type && this.cid.equals(other.cid) && this.commit.equals(other.commit));
    }
    toString() {
        return to_string_1.default(multibase_1.default.encode(constants_1.DEFAULT_BASE, this.bytes));
    }
    toUrl() {
        return `ceramic://${this.toString()}`;
    }
    [(_CommitID_type = new WeakMap(), _CommitID_cid = new WeakMap(), _CommitID_commit = new WeakMap(), Symbol.for('nodejs.util.inspect.custom'))]() {
        return `CommitID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
        return this.toString();
    }
}
CommitID.fromBytes = fromBytes;
CommitID.fromBytesNoThrow = fromBytesNoThrow;
CommitID.fromString = fromString;
CommitID.fromStringNoThrow = fromStringNoThrow;
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", stream_id_1.StreamID),
    __metadata("design:paramtypes", [])
], CommitID.prototype, "baseID", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], CommitID.prototype, "typeName", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", cids_1.default),
    __metadata("design:paramtypes", [])
], CommitID.prototype, "commit", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", Uint8Array),
    __metadata("design:paramtypes", [])
], CommitID.prototype, "bytes", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CommitID.prototype, "toString", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CommitID.prototype, "toUrl", null);
exports.CommitID = CommitID;
//# sourceMappingURL=commit-id.js.map

/***/ }),

/***/ 56471:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_BASE = exports.STREAMID_CODEC = void 0;
exports.STREAMID_CODEC = 206;
exports.DEFAULT_BASE = 'base36';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 99609:
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
exports.StreamRef = exports.StreamID = exports.CommitID = void 0;
const stream_id_1 = __webpack_require__(42125);
var commit_id_1 = __webpack_require__(27777);
Object.defineProperty(exports, "CommitID", ({ enumerable: true, get: function () { return commit_id_1.CommitID; } }));
var stream_id_2 = __webpack_require__(42125);
Object.defineProperty(exports, "StreamID", ({ enumerable: true, get: function () { return stream_id_2.StreamID; } }));
var stream_ref_1 = __webpack_require__(6688);
Object.defineProperty(exports, "StreamRef", ({ enumerable: true, get: function () { return stream_ref_1.StreamRef; } }));
__exportStar(__webpack_require__(74995), exports);
exports["default"] = stream_id_1.StreamID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 43214:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readCidNoThrow = exports.readCid = exports.readVarint = void 0;
const cids_1 = __importDefault(__webpack_require__(55271));
const varint_1 = __importDefault(__webpack_require__(80233));
function readVarint(bytes) {
    const value = varint_1.default.decode(bytes);
    const readLength = varint_1.default.decode.bytes;
    const remainder = bytes.slice(readLength);
    return [value, remainder, readLength];
}
exports.readVarint = readVarint;
function isCidVersion(input) {
    return input === 0 || input === 1;
}
function readCid(bytes) {
    const result = readCidNoThrow(bytes);
    if (result instanceof Error) {
        throw result;
    }
    return result;
}
exports.readCid = readCid;
function readCidNoThrow(bytes) {
    const [cidVersion, cidVersionRemainder] = readVarint(bytes);
    if (!isCidVersion(cidVersion)) {
        return new Error(`Unknown CID version ${cidVersion}`);
    }
    const [codec, codecRemainder] = readVarint(cidVersionRemainder);
    const [, mhCodecRemainder, mhCodecLength] = readVarint(codecRemainder);
    const [mhLength, , mhLengthLength] = readVarint(mhCodecRemainder);
    const multihashBytes = codecRemainder.slice(0, mhCodecLength + mhLengthLength + mhLength);
    const multihashBytesRemainder = codecRemainder.slice(mhCodecLength + mhLengthLength + mhLength);
    return [new cids_1.default(cidVersion, codec, multihashBytes), multihashBytesRemainder];
}
exports.readCidNoThrow = readCidNoThrow;
//# sourceMappingURL=reading-bytes.js.map

/***/ }),

/***/ 42125:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _StreamID_type, _StreamID_cid;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamID = void 0;
const cids_1 = __importDefault(__webpack_require__(55271));
const multibase_1 = __importDefault(__webpack_require__(45845));
const varint_1 = __importDefault(__webpack_require__(80233));
const ipld_dag_cbor_1 = __importDefault(__webpack_require__(85402));
const concat_1 = __importDefault(__webpack_require__(36713));
const to_string_1 = __importDefault(__webpack_require__(48270));
const constants_1 = __webpack_require__(56471);
const reading_bytes_1 = __webpack_require__(43214);
const typescript_memoize_1 = __webpack_require__(30851);
const commit_id_1 = __webpack_require__(27777);
const stream_type_1 = __webpack_require__(74995);
function fromBytes(bytes) {
    const result = fromBytesNoThrow(bytes);
    if (result instanceof Error) {
        throw result;
    }
    return result;
}
function fromBytesNoThrow(bytes) {
    const [streamCodec, streamCodecRemainder] = reading_bytes_1.readVarint(bytes);
    if (streamCodec !== constants_1.STREAMID_CODEC)
        return new Error('fromBytes: invalid streamid, does not include streamid codec');
    const [type, streamTypeRemainder] = reading_bytes_1.readVarint(streamCodecRemainder);
    const cidResult = reading_bytes_1.readCidNoThrow(streamTypeRemainder);
    if (cidResult instanceof Error) {
        return cidResult;
    }
    const [cid, cidRemainder] = cidResult;
    if (cidRemainder.length > 0) {
        return new Error(`Invalid StreamID: contains commit`);
    }
    return new StreamID(type, cid);
}
function fromString(input) {
    const result = fromStringNoThrow(input);
    if (result instanceof Error) {
        throw result;
    }
    return result;
}
function fromStringNoThrow(input) {
    const protocolFree = input.replace('ceramic://', '').replace('/ceramic/', '');
    const commitFree = protocolFree.includes('commit') ? protocolFree.split('?')[0] : protocolFree;
    const bytes = multibase_1.default.decode(commitFree);
    return fromBytesNoThrow(bytes);
}
const TAG = Symbol.for('@ceramicnetwork/streamid/StreamID');
class StreamID {
    constructor(type, cid) {
        this._tag = TAG;
        _StreamID_type.set(this, void 0);
        _StreamID_cid.set(this, void 0);
        if (!(type || type === 0))
            throw new Error('constructor: type required');
        if (!cid)
            throw new Error('constructor: cid required');
        __classPrivateFieldSet(this, _StreamID_type, typeof type === 'string' ? stream_type_1.StreamType.codeByName(type) : type, "f");
        __classPrivateFieldSet(this, _StreamID_cid, typeof cid === 'string' ? new cids_1.default(cid) : cid, "f");
    }
    static isInstance(instance) {
        return typeof instance === 'object' && '_tag' in instance && instance._tag === TAG;
    }
    static async fromGenesis(type, genesis) {
        const cid = await ipld_dag_cbor_1.default.util.cid(new Uint8Array(ipld_dag_cbor_1.default.util.serialize(genesis)));
        return new StreamID(type, cid);
    }
    get type() {
        return __classPrivateFieldGet(this, _StreamID_type, "f");
    }
    get typeName() {
        return stream_type_1.StreamType.nameByCode(__classPrivateFieldGet(this, _StreamID_type, "f"));
    }
    get cid() {
        return __classPrivateFieldGet(this, _StreamID_cid, "f");
    }
    get bytes() {
        const codec = varint_1.default.encode(constants_1.STREAMID_CODEC);
        const type = varint_1.default.encode(this.type);
        return concat_1.default([codec, type, this.cid.bytes]);
    }
    get baseID() {
        return new StreamID(__classPrivateFieldGet(this, _StreamID_type, "f"), __classPrivateFieldGet(this, _StreamID_cid, "f"));
    }
    atCommit(commit) {
        return new commit_id_1.CommitID(__classPrivateFieldGet(this, _StreamID_type, "f"), __classPrivateFieldGet(this, _StreamID_cid, "f"), commit);
    }
    equals(other) {
        if (StreamID.isInstance(other)) {
            return this.type === other.type && this.cid.equals(other.cid);
        }
        else {
            return false;
        }
    }
    toString() {
        return to_string_1.default(multibase_1.default.encode(constants_1.DEFAULT_BASE, this.bytes));
    }
    toUrl() {
        return `ceramic://${this.toString()}`;
    }
    [(_StreamID_type = new WeakMap(), _StreamID_cid = new WeakMap(), Symbol.for('nodejs.util.inspect.custom'))]() {
        return `StreamID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
        return this.toString();
    }
}
StreamID.fromBytes = fromBytes;
StreamID.fromBytesNoThrow = fromBytesNoThrow;
StreamID.fromString = fromString;
StreamID.fromStringNoThrow = fromStringNoThrow;
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], StreamID.prototype, "typeName", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", Uint8Array),
    __metadata("design:paramtypes", [])
], StreamID.prototype, "bytes", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", StreamID),
    __metadata("design:paramtypes", [])
], StreamID.prototype, "baseID", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StreamID.prototype, "toString", null);
__decorate([
    typescript_memoize_1.Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StreamID.prototype, "toUrl", null);
exports.StreamID = StreamID;
//# sourceMappingURL=stream-id.js.map

/***/ }),

/***/ 6688:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamRef = void 0;
const stream_id_1 = __webpack_require__(42125);
const commit_id_1 = __webpack_require__(27777);
function tryCatch(f) {
    try {
        return f();
    }
    catch (_a) {
        return null;
    }
}
var StreamRef;
(function (StreamRef) {
    function from(input) {
        if (stream_id_1.StreamID.isInstance(input)) {
            return input;
        }
        else if (commit_id_1.CommitID.isInstance(input)) {
            return input;
        }
        else if (input instanceof Uint8Array) {
            const commitId = commit_id_1.CommitID.fromBytesNoThrow(input);
            if (commitId instanceof Error) {
                return stream_id_1.StreamID.fromBytes(input);
            }
            return commitId;
        }
        else if (typeof input === 'string') {
            const commitId = commit_id_1.CommitID.fromStringNoThrow(input);
            if (commitId instanceof Error) {
                return stream_id_1.StreamID.fromString(input);
            }
            return commitId;
        }
        else {
            throw new Error(`Can not build CommitID or StreamID`);
        }
    }
    StreamRef.from = from;
})(StreamRef = exports.StreamRef || (exports.StreamRef = {}));
//# sourceMappingURL=stream-ref.js.map

/***/ }),

/***/ 74995:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamType = void 0;
const registry = {
    tile: 0,
    'caip10-link': 1,
};
function codeByName(name) {
    const index = registry[name];
    if (typeof index !== 'undefined') {
        return index;
    }
    else {
        throw new Error(`No stream type registered for name ${name}`);
    }
}
function nameByCode(index) {
    const pair = Object.entries(registry).find(([, v]) => v === index);
    if (pair) {
        return pair[0];
    }
    else {
        throw new Error(`No stream type registered for index ${index}`);
    }
}
class StreamType {
}
exports.StreamType = StreamType;
StreamType.nameByCode = nameByCode;
StreamType.codeByName = codeByName;
//# sourceMappingURL=stream-type.js.map

/***/ })

}]);