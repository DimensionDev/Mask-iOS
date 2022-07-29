"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2297],{

/***/ 78381:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DidProvider = exports.didMethods = void 0;
const dag_jose_utils_1 = __webpack_require__(82951);
const did_jwt_1 = __webpack_require__(60108);
const rpc_utils_1 = __webpack_require__(34034);
const utils_1 = __webpack_require__(69358);
function toGeneralJWS(jws) {
    const [protectedHeader, payload, signature] = jws.split('.');
    return {
        payload,
        signatures: [{ protected: protectedHeader, signature }],
    };
}
function sign(payload, didWithFragment, keyring, threeIdx, protectedHeader = {}, revocable) {
    return __awaiter(this, void 0, void 0, function* () {
        let [did, keyFragment] = didWithFragment.split('#');
        let kid, signer;
        if (did.startsWith('did:key:')) {
            const pubkey = did.split(':')[2];
            kid = `${did}#${pubkey}`;
            signer = keyring.getMgmtSigner(pubkey);
        }
        else {
            if (did !== threeIdx.id)
                throw new Error(`Unknown DID: ${did}`);
            const version = threeIdx.get3idVersion();
            if (!keyFragment)
                keyFragment = keyring.getKeyFragment(version);
            kid = `${did}${revocable ? '' : `?version-id=${version}`}#${keyFragment}`;
            signer = keyring.getSigner(version);
        }
        const header = utils_1.toStableObject(Object.assign(protectedHeader, { kid }));
        const jws = yield did_jwt_1.createJWS(utils_1.toStableObject(payload), signer, header);
        return toGeneralJWS(jws);
    });
}
exports.didMethods = {
    did_authenticate: ({ permissions, keyring, threeIdx, origin, forcedDID }, params) => __awaiter(void 0, void 0, void 0, function* () {
        const paths = yield permissions.request(origin, params.paths || []);
        if (paths === null)
            throw new rpc_utils_1.RPCError(4001, 'User Rejected Request');
        return sign({
            did: forcedDID || threeIdx.id,
            aud: params.aud,
            nonce: params.nonce,
            paths,
            exp: Math.floor(Date.now() / 1000) + 600,
        }, forcedDID || threeIdx.id, keyring, threeIdx);
    }),
    did_createJWS: ({ permissions, keyring, threeIdx, origin }, params) => __awaiter(void 0, void 0, void 0, function* () {
        if (!permissions.has(origin))
            throw new rpc_utils_1.RPCError(4100, 'Unauthorized');
        const jws = yield sign(params.payload, params.did, keyring, threeIdx, params.protected, params.revocable);
        return { jws };
    }),
    did_decryptJWE: ({ permissions, keyring, origin }, params) => __awaiter(void 0, void 0, void 0, function* () {
        if (!permissions.has(origin))
            throw new rpc_utils_1.RPCError(4100, 'Unauthorized');
        const parsedKids = utils_1.parseJWEKids(params.jwe);
        const decrypter = keyring.getAsymDecrypter(parsedKids);
        const bytes = yield did_jwt_1.decryptJWE(params.jwe, decrypter);
        let obj;
        try {
            obj = dag_jose_utils_1.decodeCleartext(bytes);
        }
        catch (e) {
        }
        if (obj && !permissions.has(origin, obj.paths))
            throw new rpc_utils_1.RPCError(4100, 'Unauthorized');
        return { cleartext: utils_1.encodeBase64(bytes) };
    }),
};
class DidProvider {
    constructor({ permissions, threeIdx, keyring, forcedOrigin, forcedDID }) {
        const handler = rpc_utils_1.createHandler(exports.didMethods);
        this._handle = (origin, msg) => __awaiter(this, void 0, void 0, function* () {
            return yield handler({
                origin: forcedOrigin !== null && forcedOrigin !== void 0 ? forcedOrigin : origin,
                permissions,
                threeIdx,
                keyring,
                forcedDID,
            }, msg);
        });
    }
    get isDidProvider() {
        return true;
    }
    send(msg, origin) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handle(origin !== null && origin !== void 0 ? origin : '', msg);
        });
    }
}
exports.DidProvider = DidProvider;
//# sourceMappingURL=did-provider.js.map

/***/ }),

/***/ 33692:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Keychain = exports.updateAuthEntry = exports.newAuthEntry = void 0;
const dids_1 = __webpack_require__(76373);
const key_did_provider_ed25519_1 = __webpack_require__(48534);
const key_did_resolver_1 = __importDefault(__webpack_require__(8372));
const keyring_1 = __importStar(__webpack_require__(94842));
const utils_1 = __webpack_require__(69358);
function decryptAuthId(encrypted, keyring) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!encrypted.jwe)
            throw new Error('Invalid encrypted block');
        const decrypted = yield keyring.asymDecryptJWE(encrypted.jwe, utils_1.parseJWEKids(encrypted.jwe));
        return decrypted.id;
    });
}
const encrypter = new dids_1.DID({ resolver: key_did_resolver_1.default.getResolver() });
function authSecretToDID(authSecret) {
    return __awaiter(this, void 0, void 0, function* () {
        const did = new dids_1.DID({
            provider: new key_did_provider_ed25519_1.Ed25519Provider(authSecret),
            resolver: key_did_resolver_1.default.getResolver(),
        });
        yield did.authenticate();
        return did;
    });
}
function newAuthEntry(keyring, threeIdDid, authId, authSecret) {
    return __awaiter(this, void 0, void 0, function* () {
        const mainKid = `${threeIdDid}#${keyring.getKeyFragment(keyring_1.LATEST, true)}`;
        const did = yield authSecretToDID(authSecret);
        const cleartext = { seed: keyring.seed };
        if (keyring.v03ID)
            cleartext.v03ID = keyring.v03ID;
        const resolvedPromises = yield Promise.all([
            did.createDagJWE(cleartext, [did.id]),
            keyring.asymEncryptJWE({ id: authId }, mainKid),
        ]);
        return {
            did,
            mapEntry: {
                [did.id]: {
                    data: { jwe: resolvedPromises[0] },
                    id: { jwe: resolvedPromises[1] },
                },
            },
        };
    });
}
exports.newAuthEntry = newAuthEntry;
function updateAuthEntry(keyring, authEntry, removedAuthIds, threeIdDid, authDid) {
    return __awaiter(this, void 0, void 0, function* () {
        const mainKid = `${threeIdDid}#${keyring.getKeyFragment(keyring_1.LATEST, true)}`;
        const authId = yield decryptAuthId(authEntry.id, keyring);
        if (removedAuthIds.find((id) => id === authId))
            return null;
        const jwes = yield Promise.all([
            encrypter.createDagJWE({ seed: keyring.seed }, [authDid]),
            keyring.asymEncryptJWE({ id: authId }, mainKid),
        ]);
        return {
            data: { jwe: jwes[0] },
            id: { jwe: jwes[1] },
        };
    });
}
exports.updateAuthEntry = updateAuthEntry;
function rotateKeys(threeIdx, keyring, removedAuthIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const version = threeIdx.get3idVersion();
        yield keyring.generateNewKeys(version);
        const update3idState = keyring.get3idState();
        const authMap = threeIdx.getAuthMap();
        const newAuthMap = {};
        yield Promise.all(Object.keys(authMap).map((authDid) => __awaiter(this, void 0, void 0, function* () {
            const entry = yield updateAuthEntry(keyring, authMap[authDid], removedAuthIds, threeIdx.id, authDid);
            if (entry) {
                newAuthMap[authDid] = entry;
            }
        })));
        yield threeIdx.rotateKeys(update3idState, keyring.pastSeeds, newAuthMap);
    });
}
class Keychain {
    constructor(_keyring, _threeIdx) {
        this._keyring = _keyring;
        this._threeIdx = _threeIdx;
        this._pendingAdds = [];
        this._pendingRms = [];
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(Object.values(this._threeIdx.getAuthMap()).map(({ id }) => __awaiter(this, void 0, void 0, function* () {
                return decryptAuthId(id, this._keyring);
            })));
        });
    }
    add(authId, authSecret) {
        return __awaiter(this, void 0, void 0, function* () {
            this._pendingAdds.push({
                authId,
                entry: yield newAuthEntry(this._keyring, this._threeIdx.id, authId, authSecret),
            });
        });
    }
    remove(authId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._pendingRms.push(authId);
        });
    }
    status() {
        return {
            clean: !(this._pendingAdds.length + this._pendingRms.length),
            adding: this._pendingAdds.map((e) => e.authId),
            removing: this._pendingRms,
        };
    }
    commit() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._pendingAdds.length && !this._pendingRms.length)
                throw new Error('Nothing to commit');
            if (Object.keys(this._threeIdx.getAuthMap()).length === 0) {
                if (this._pendingRms.length)
                    throw new Error('Can not remove non-existent auth method');
                if (!this._pendingAdds.length)
                    throw new Error('Can not add non-existent auth method');
                yield this._threeIdx.createIDX((_a = this._pendingAdds.pop()) === null || _a === void 0 ? void 0 : _a.entry);
            }
            if (this._pendingRms.length) {
                yield rotateKeys(this._threeIdx, this._keyring, this._pendingRms);
                this._pendingRms = [];
            }
            if (this._pendingAdds.length) {
                const entries = this._pendingAdds.map((e) => e.entry);
                this._pendingAdds = [];
                yield this._threeIdx.addAuthEntries(entries);
            }
        });
    }
    static load(threeIdx, authSecret, makeTmpProvider) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const did = yield authSecretToDID(authSecret);
            const authData = yield threeIdx.loadIDX(did.id);
            if (authData) {
                if (!((_a = authData.seed) === null || _a === void 0 ? void 0 : _a.jwe))
                    throw new Error('Unable to find auth data');
                try {
                    const decrypted = yield did.decryptDagJWE(authData.seed.jwe);
                    const keyring = new keyring_1.default(new Uint8Array(decrypted.seed), decrypted.v03ID);
                    yield keyring.loadPastSeeds(authData.pastSeeds);
                    if (keyring.v03ID)
                        yield threeIdx.create3idDoc(keyring.get3idState(true));
                    return new Keychain(keyring, threeIdx);
                }
                catch (e) {
                    if (e.message === 'Failed to decrypt')
                        throw new Error('Auth not allowed');
                    throw e;
                }
            }
            return Keychain.create(threeIdx, makeTmpProvider);
        });
    }
    static loadFromSeed(threeIdx, seed, did, makeTmpProvider) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyring = new keyring_1.default(seed);
            yield threeIdx.loadAllDocs(did);
            yield threeIdx.setDIDProvider(makeTmpProvider(keyring, did));
            return new Keychain(keyring, threeIdx);
        });
    }
    static create(threeIdx, makeTmpProvider, seed, v03ID) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyring = new keyring_1.default(seed, v03ID);
            const docParams = keyring.get3idState(true);
            yield threeIdx.setDIDProvider(makeTmpProvider(keyring, docParams.metadata.controllers[0]));
            yield threeIdx.create3idDoc(docParams);
            if (v03ID)
                threeIdx.setV03ID(v03ID);
            return new Keychain(keyring, threeIdx);
        });
    }
}
exports.Keychain = Keychain;
//# sourceMappingURL=keychain.js.map

/***/ }),

/***/ 94842:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LATEST = void 0;
const x25519_1 = __webpack_require__(87620);
const hdnode_1 = __webpack_require__(57430);
const did_jwt_1 = __webpack_require__(60108);
const random_1 = __webpack_require__(1651);
const dag_jose_utils_1 = __webpack_require__(82951);
const utils_1 = __webpack_require__(69358);
exports.LATEST = 'latest';
const GENESIS = 'genesis';
const BASE_PATH = "m/51073068'";
const LEGACY_BASE_PATH = "m/7696500'/0'/0'";
function deriveKeySet(seed, v03ID) {
    const seedNode = hdnode_1.HDNode.fromSeed(seed);
    let hdNode;
    if (v03ID) {
        hdNode = seedNode.derivePath(LEGACY_BASE_PATH);
    }
    else {
        hdNode = seedNode.derivePath(BASE_PATH);
    }
    const signing = hdNode.derivePath('0');
    const management = v03ID ? signing : hdNode.derivePath('1');
    const encryption = x25519_1.generateKeyPairFromSeed(utils_1.hexToU8A(hdNode.derivePath('2').privateKey.slice(2)));
    return {
        seed,
        publicKeys: {
            signing: utils_1.hexToU8A(signing.publicKey.slice(2)),
            management: utils_1.hexToU8A(management.publicKey.slice(2)),
            encryption: encryption.publicKey,
        },
        secretKeys: {
            signing: utils_1.hexToU8A(signing.privateKey.slice(2)),
            management: utils_1.hexToU8A(management.privateKey.slice(2)),
            encryption: encryption.secretKey,
        },
        v03ID,
    };
}
class Keyring {
    constructor(seed, v03ID) {
        this._keySets = {};
        this._versionMap = {};
        this._pastSeeds = [];
        if (!seed) {
            seed = random_1.randomBytes(32);
        }
        if (v03ID)
            this._v03ID = v03ID;
        this._versionMap[GENESIS] = exports.LATEST;
        this._keySets[exports.LATEST] = deriveKeySet(seed, v03ID);
        let encKid = utils_1.encodeKey(this._keySets[exports.LATEST].publicKeys.encryption, 'x25519').slice(-15);
        this._versionMap[encKid] = exports.LATEST;
        encKid = utils_1.encodeKey(this._keySets[exports.LATEST].publicKeys.management, 'secp256k1');
        this._versionMap[encKid] = exports.LATEST;
    }
    get v03ID() {
        return this._v03ID;
    }
    get seed() {
        return this._keySets[exports.LATEST].seed;
    }
    get pastSeeds() {
        return this._pastSeeds;
    }
    loadPastSeeds(pastSeeds) {
        return __awaiter(this, void 0, void 0, function* () {
            this._pastSeeds = [...pastSeeds];
            let version = exports.LATEST;
            let jwe = pastSeeds.pop();
            while (jwe) {
                const decrypted = yield this.asymDecryptJWE(jwe, [], version);
                version = Object.keys(decrypted).find((k) => k !== 'v03ID');
                if (decrypted.v03ID) {
                    this._v03ID = decrypted.v03ID;
                    delete decrypted.v03ID;
                    this._versionMap[GENESIS] = version;
                }
                this._keySets[version] = deriveKeySet(new Uint8Array(decrypted[version]), this._v03ID);
                this._updateVersionMap(version, this._keySets[version]);
                jwe = pastSeeds.pop();
            }
        });
    }
    _updateVersionMap(version, keySet) {
        let encKid = utils_1.encodeKey(keySet.publicKeys.encryption, 'x25519').slice(-15);
        this._versionMap[encKid] = version;
        encKid = utils_1.encodeKey(keySet.publicKeys.management, 'secp256k1');
        this._versionMap[encKid] = version;
    }
    generateNewKeys(prevVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._keySets[prevVersion])
                throw new Error('Key set version already exist');
            this._updateVersionMap(prevVersion, this._keySets[exports.LATEST]);
            this._keySets[prevVersion] = this._keySets[exports.LATEST];
            this._keySets[exports.LATEST] = deriveKeySet(random_1.randomBytes(32));
            this._updateVersionMap(exports.LATEST, this._keySets[exports.LATEST]);
            const cleartext = { [prevVersion]: this._keySets[prevVersion].seed };
            if (this._keySets[prevVersion].v03ID)
                cleartext.v03ID = this._keySets[prevVersion].v03ID;
            this._pastSeeds.push(yield this.asymEncryptJWE(cleartext));
        });
    }
    getAsymDecrypter(fragments = [], version) {
        if (!version) {
            const fragmentWithKey = fragments.find((fragment) => this._versionMap[fragment]);
            version = fragmentWithKey ? this._versionMap[fragmentWithKey] : exports.LATEST;
        }
        const key = this._keySets[version].secretKeys.encryption;
        return did_jwt_1.x25519Decrypter(key);
    }
    asymDecryptJWE(jwe, kids, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return dag_jose_utils_1.decodeCleartext(yield did_jwt_1.decryptJWE(jwe, this.getAsymDecrypter(kids, version)));
        });
    }
    asymEncryptJWE(cleartext, kid) {
        return __awaiter(this, void 0, void 0, function* () {
            const encrypter = did_jwt_1.x25519Encrypter(this.getEncryptionPublicKey(), kid);
            return did_jwt_1.createJWE(dag_jose_utils_1.prepareCleartext(cleartext), [encrypter]);
        });
    }
    getSigner(version = exports.LATEST) {
        const keyset = this._keySets[version] || this._keySets[exports.LATEST];
        return did_jwt_1.EllipticSigner(utils_1.u8aToHex(keyset.secretKeys.signing));
    }
    getKeyFragment(version = exports.LATEST, encKey = false) {
        const keyset = this._keySets[version] || this._keySets[exports.LATEST];
        if (encKey) {
            return utils_1.encodeKey(keyset.publicKeys.encryption, 'x25519').slice(-15);
        }
        return utils_1.encodeKey(keyset.publicKeys.signing, 'secp256k1').slice(-15);
    }
    getMgmtSigner(pubKey) {
        const keyset = this._keySets[this._versionMap[pubKey]].secretKeys;
        if (!keyset)
            throw new Error(`Key not found: ${pubKey}`);
        return did_jwt_1.EllipticSigner(utils_1.u8aToHex(keyset.management));
    }
    getEncryptionPublicKey() {
        return this._keySets[exports.LATEST].publicKeys.encryption;
    }
    get3idState(genesis) {
        const keyVer = genesis ? this._versionMap[GENESIS] : exports.LATEST;
        const keys = this._keySets[keyVer].publicKeys;
        const signing = utils_1.encodeKey(keys.signing, 'secp256k1');
        const encryption = utils_1.encodeKey(keys.encryption, 'x25519');
        const state = {
            metadata: { controllers: [`did:key:${utils_1.encodeKey(keys.management, 'secp256k1')}`] },
            content: {
                publicKeys: {
                    [signing.slice(-15)]: signing,
                    [encryption.slice(-15)]: encryption,
                },
            },
        };
        if (genesis) {
            state.metadata.family = '3id';
        }
        if (this._keySets[keyVer].v03ID) {
            state.metadata.deterministic = true;
            delete state.content;
        }
        return state;
    }
}
exports["default"] = Keyring;
//# sourceMappingURL=keyring.js.map

/***/ }),

/***/ 36884:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SELF_ORIGIN = void 0;
const store_1 = __importDefault(__webpack_require__(63251));
exports.SELF_ORIGIN = '__IDW_ORIGIN';
const storageKey = (origin, did) => {
    if (!origin)
        origin = '__NULL_ORIGIN';
    return `3id_permission_${did}_${origin}`;
};
class Permissions {
    constructor(getPermission) {
        this.getPermission = getPermission;
        this.did = null;
        if (typeof this.getPermission !== 'function') {
            throw new Error('getPermission parameter has to be a function');
        }
    }
    setDID(did) {
        this.did = did;
    }
    request(origin, paths = []) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.has(origin, paths)) {
                return paths;
            }
            else {
                const given = yield this.getPermission({
                    type: 'authenticate',
                    origin,
                    payload: { paths },
                });
                const existing = this.get(origin);
                const union = existing
                    ? existing.concat(given ? given.filter((e) => !existing.includes(e)) : [])
                    : given;
                this.set(origin, union);
                return given;
            }
        });
    }
    has(origin, paths = []) {
        if (origin === exports.SELF_ORIGIN)
            return true;
        const currentPaths = this.get(origin);
        return paths.reduce((acc, path) => {
            return acc && Boolean(currentPaths === null || currentPaths === void 0 ? void 0 : currentPaths.includes(path));
        }, Boolean(currentPaths));
    }
    get(origin) {
        if (!this.did)
            throw new Error('DID not set');
        return store_1.default.get(storageKey(origin, this.did));
    }
    set(origin, paths) {
        if (!this.did)
            throw new Error('DID not set');
        store_1.default.set(storageKey(origin, this.did), paths);
    }
}
exports["default"] = Permissions;
//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ 90037:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThreeIDX = void 0;
const common_1 = __webpack_require__(14509);
const stream_tile_1 = __webpack_require__(52248);
const http_client_1 = __importDefault(__webpack_require__(47237));
const idx_constants_1 = __webpack_require__(84665);
const cids_1 = __importDefault(__webpack_require__(55271));
const key_did_resolver_1 = __importDefault(__webpack_require__(8372));
const _3id_did_resolver_1 = __importDefault(__webpack_require__(24080));
const did_resolver_1 = __webpack_require__(82615);
const dids_1 = __webpack_require__(76373);
const KEYCHAIN_DEF = idx_constants_1.definitions.threeIdKeychain;
const IDX = 'IDX';
const { IdentityIndex, ThreeIdKeychain } = idx_constants_1.schemas;
const isLegacyDid = (didId) => {
    try {
        new cids_1.default(didId);
        return true;
    }
    catch (e) {
        return false;
    }
};
class ThreeIDX {
    constructor(ceramic) {
        this.ceramic = ceramic || new http_client_1.default();
        this.docs = {};
        this._subscriptionSet = new common_1.SubscriptionSet();
    }
    setDIDProvider(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyDidResolver = key_did_resolver_1.default.getResolver();
            const threeIdResolver = _3id_did_resolver_1.default.getResolver(this.ceramic);
            const resolver = new did_resolver_1.Resolver(Object.assign(Object.assign({}, threeIdResolver), keyDidResolver));
            const did = new dids_1.DID({ provider, resolver });
            yield did.authenticate();
            yield this.ceramic.setDID(did);
        });
    }
    setV03ID(did) {
        this._v03ID = did;
    }
    get id() {
        return this._v03ID || `did:3:${this.docs.threeId.id.baseID.toString()}`;
    }
    create3idDoc(docParams) {
        return __awaiter(this, void 0, void 0, function* () {
            this.docs.threeId = yield stream_tile_1.TileDocument.create(this.ceramic, docParams.content, docParams.metadata, {
                anchor: false,
                publish: false,
            });
            this._subscriptionSet.add(this.docs.threeId.subscribe());
        });
    }
    get3idVersion() {
        const anchorCommitIds = this.docs.threeId.anchorCommitIds;
        const docId = anchorCommitIds[anchorCommitIds.length - 1];
        return docId ? docId.commit.toString() : '0';
    }
    loadDoc(name, controller, family) {
        return __awaiter(this, void 0, void 0, function* () {
            const stream = yield stream_tile_1.TileDocument.create(this.ceramic, null, { controllers: [controller], family: family, deterministic: true }, { anchor: false, publish: false });
            this.docs[name] = stream;
            this._subscriptionSet.add(stream.subscribe());
            return stream;
        });
    }
    createAuthLinkUpdate({ did }) {
        return __awaiter(this, void 0, void 0, function* () {
            const didString = did.id;
            const tile = yield this.loadDoc(didString, didString, 'authLink');
            yield this.ceramic.pin.add(tile.id);
            const commit = yield tile.makeCommit({ did }, { did: this.id });
            return {
                commit: commit,
                docid: tile.id,
                did: didString,
            };
        });
    }
    applyAuthLinkUpdate({ docid, commit, did }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.docs[did].content !== this.id) {
                yield this.ceramic.applyCommit(docid, commit);
                yield this.docs[did].sync();
            }
        });
    }
    createIDX(newEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            const docUpdatePromise = newEntry ? this.createAuthLinkUpdate(newEntry) : Promise.resolve(null);
            yield Promise.all([
                this.loadDoc(KEYCHAIN_DEF, this.id, KEYCHAIN_DEF),
                this.loadDoc('idx', this.id, IDX),
            ]);
            yield Promise.all([
                this.pinAllDocs(),
                this.updateKeychainDoc(newEntry === null || newEntry === void 0 ? void 0 : newEntry.mapEntry),
                this.addKeychainToIDX(),
            ]);
            const docUpdate = yield docUpdatePromise;
            if (docUpdate) {
                yield this.applyAuthLinkUpdate(docUpdate);
            }
        });
    }
    loadIDX(authDid) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadDoc(authDid, authDid, 'authLink');
            const { did } = this.docs[authDid].content;
            if (!did)
                return null;
            yield this.loadAllDocs(did);
            const { authMap, pastSeeds } = this.docs[KEYCHAIN_DEF].content;
            return {
                seed: (_a = authMap[authDid]) === null || _a === void 0 ? void 0 : _a.data,
                pastSeeds,
            };
        });
    }
    loadAllDocs(did) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.load3IDDoc(did),
                this.loadDoc(KEYCHAIN_DEF, did, KEYCHAIN_DEF),
                this.loadDoc('idx', did, IDX),
            ]);
        });
    }
    load3IDDoc(did) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = did.split(':')[2];
            if (isLegacyDid(id)) {
                this._v03ID = did;
            }
            else {
                this.docs.threeId = yield this.ceramic.loadStream(id);
                this._subscriptionSet.add(this.docs.threeId.subscribe());
            }
        });
    }
    addAuthEntries(newEntries) {
        return __awaiter(this, void 0, void 0, function* () {
            const linkDocUpdatesPromise = Promise.all(newEntries.map(this.createAuthLinkUpdate.bind(this)));
            const { authMap, pastSeeds } = this.docs[KEYCHAIN_DEF].content;
            const newAuthEntries = newEntries.reduce((acc, { mapEntry }) => Object.assign(acc, mapEntry), {});
            Object.assign(authMap, newAuthEntries);
            yield this.updateKeychainDoc(authMap, pastSeeds);
            yield Promise.all((yield linkDocUpdatesPromise).map(this.applyAuthLinkUpdate.bind(this)));
        });
    }
    getAuthMap() {
        if (!this.docs[KEYCHAIN_DEF] || !this.docs[KEYCHAIN_DEF].content.authMap)
            return {};
        return this.docs[KEYCHAIN_DEF].content.authMap;
    }
    pinAllDocs() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(Object.values(this.docs).map((doc) => __awaiter(this, void 0, void 0, function* () {
                yield this.ceramic.pin.add(doc.id);
            })));
        });
    }
    addKeychainToIDX() {
        return __awaiter(this, void 0, void 0, function* () {
            const content = this.docs.idx.content;
            if (!content || !content[KEYCHAIN_DEF]) {
                const nextContent = Object.assign(content || {}, {
                    [KEYCHAIN_DEF]: this.docs[KEYCHAIN_DEF].id.toUrl(),
                });
                const nextMetadata = this.docs.idx.metadata.schema ? undefined : { schema: IdentityIndex };
                yield this.docs.idx.update(nextContent, nextMetadata);
            }
        });
    }
    updateKeychainDoc(authMap = {}, pastSeeds = []) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(authMap).length !== 0) {
                const update = { content: { authMap, pastSeeds } };
                if (!this.docs[KEYCHAIN_DEF].metadata.schema) {
                    update.metadata = { schema: ThreeIdKeychain };
                }
                yield this.docs[KEYCHAIN_DEF].update(update.content, update.metadata);
                yield this.docs[KEYCHAIN_DEF].sync();
            }
        });
    }
    rotateKeys(threeIdState, pastSeeds, authMap) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!threeIdState.content)
                throw new Error('Content has to be defined');
            const currentController = this.docs.threeId.controllers[0];
            const didKey = new Proxy(this.ceramic.did, {
                get(target, prop, receiver) {
                    if (prop === 'createJWS') {
                        return (payload, options = {}) => {
                            return target.createJWS(payload, Object.assign({}, options, { did: currentController }));
                        };
                    }
                    else {
                        return Reflect.get(target, prop, receiver);
                    }
                },
            });
            const originalDid = this.ceramic.did;
            this.ceramic.did = didKey;
            yield this.docs.threeId.update(Object.assign(Object.assign({}, this.docs.threeId.content), { publicKeys: threeIdState.content.publicKeys }), threeIdState.metadata);
            this.ceramic.did = originalDid;
            yield Promise.all([this.updateKeychainDoc(authMap, pastSeeds), this.pinAllDocs()]);
        });
    }
}
exports.ThreeIDX = ThreeIDX;
//# sourceMappingURL=three-idx.js.map

/***/ }),

/***/ 18437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const did_provider_1 = __webpack_require__(78381);
const three_idx_1 = __webpack_require__(90037);
const permissions_1 = __importStar(__webpack_require__(36884));
const keychain_1 = __webpack_require__(33692);
class ThreeIdProvider {
    constructor(_threeIdx, _permissions, _keychain) {
        this._threeIdx = _threeIdx;
        this._permissions = _permissions;
        this._keychain = _keychain;
    }
    get keychain() {
        return this._keychain;
    }
    get permissions() {
        return this._permissions;
    }
    get id() {
        return this._threeIdx.id;
    }
    static create(config) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (config.seed && config.authSecret)
                throw new Error("Can't use both seed and authSecret");
            if (!config.seed && !config.authSecret)
                throw new Error('Either seed or authSecret is needed');
            if (config.authSecret && !config.authId) {
                throw new Error('AuthId must be given along with authSecret');
            }
            if (config.authId && config.disableIDX) {
                throw new Error('AuthId cannot be used with disableIDX');
            }
            const threeIdx = new three_idx_1.ThreeIDX(config.ceramic);
            const permissions = new permissions_1.default(config.getPermission);
            const makeTmpProvider = (keyring, forcedDID) => {
                return new did_provider_1.DidProvider({
                    keyring,
                    permissions,
                    threeIdx,
                    forcedOrigin: permissions_1.SELF_ORIGIN,
                    forcedDID,
                });
            };
            let keychain;
            if (config.seed) {
                if (typeof config.seed === 'string')
                    throw new Error('seed needs to be Uint8Array');
                if (config.did) {
                    keychain = yield keychain_1.Keychain.loadFromSeed(threeIdx, config.seed, config.did, makeTmpProvider);
                }
                else {
                    keychain = yield keychain_1.Keychain.create(threeIdx, makeTmpProvider, config.seed, config.v03ID);
                }
            }
            else if (config.authSecret) {
                keychain = yield keychain_1.Keychain.load(threeIdx, config.authSecret, makeTmpProvider);
            }
            permissions.setDID(threeIdx.id);
            const idw = new ThreeIdProvider(threeIdx, permissions, keychain);
            yield idw._threeIdx.setDIDProvider(idw.getDidProvider(permissions_1.SELF_ORIGIN));
            if (config.authId && !((_a = (yield (keychain === null || keychain === void 0 ? void 0 : keychain.list()))) === null || _a === void 0 ? void 0 : _a.length)) {
                yield idw.keychain.add(config.authId, config.authSecret);
                yield idw.keychain.commit();
            }
            if (idw._threeIdx.docs.idx == null && !config.disableIDX) {
                yield idw._threeIdx.createIDX();
            }
            return idw;
        });
    }
    getDidProvider(forcedOrigin) {
        return new did_provider_1.DidProvider({
            keyring: this.keychain._keyring,
            permissions: this.permissions,
            threeIdx: this._threeIdx,
            forcedOrigin,
        });
    }
}
exports["default"] = ThreeIdProvider;
//# sourceMappingURL=threeid-provider.js.map

/***/ }),

/***/ 69358:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toStableObject = exports.decodeBase64 = exports.encodeBase64 = exports.u8aToHex = exports.hexToU8A = exports.parseJWEKids = exports.decodeKey = exports.encodeKey = void 0;
const fast_json_stable_stringify_1 = __importDefault(__webpack_require__(75687));
const u8a = __importStar(__webpack_require__(31605));
const B16 = 'base16';
const B64 = 'base64pad';
const multicodecPubkeyTable = {
    secp256k1: 0xe7,
    x25519: 0xec,
    ed25519: 0xed,
};
function encodeKey(key, keyType) {
    const bytes = new Uint8Array(key.length + 2);
    if (!multicodecPubkeyTable[keyType]) {
        throw new Error(`Key type "${keyType}" not supported.`);
    }
    bytes[0] = multicodecPubkeyTable[keyType];
    bytes[1] = 0x01;
    bytes.set(key, 2);
    return `z${u8a.toString(bytes, 'base58btc')}`;
}
exports.encodeKey = encodeKey;
function decodeKey(key) {
    const bytes = u8a.fromString(key.slice(1), 'base58btc');
    const supportedKey = bytes[1] === 0x01 &&
        (multicodecPubkeyTable['secp256k1'] === bytes[0] ||
            multicodecPubkeyTable['x25519'] === bytes[0] ||
            multicodecPubkeyTable['ed25519'] === bytes[0]);
    if (!supportedKey)
        throw new Error(`Key type ${bytes[0]} not supported`);
    return bytes.slice(2);
}
exports.decodeKey = decodeKey;
function parseJWEKids(jwe) {
    var _a;
    return (((_a = jwe.recipients) === null || _a === void 0 ? void 0 : _a.reduce((kids, recipient) => {
        var _a;
        if ((_a = recipient.header) === null || _a === void 0 ? void 0 : _a.kid)
            kids.push(recipient.header.kid.split('#')[1]);
        return kids;
    }, [])) || []);
}
exports.parseJWEKids = parseJWEKids;
function hexToU8A(s) {
    return u8a.fromString(s, B16);
}
exports.hexToU8A = hexToU8A;
function u8aToHex(b) {
    return u8a.toString(b, B16);
}
exports.u8aToHex = u8aToHex;
function encodeBase64(b) {
    return u8a.toString(b, B64);
}
exports.encodeBase64 = encodeBase64;
function decodeBase64(s) {
    return u8a.fromString(s, B64);
}
exports.decodeBase64 = decodeBase64;
function toStableObject(obj) {
    return JSON.parse(fast_json_stable_stringify_1.default(obj));
}
exports.toStableObject = toStableObject;
//# sourceMappingURL=utils.js.map

/***/ })

}]);