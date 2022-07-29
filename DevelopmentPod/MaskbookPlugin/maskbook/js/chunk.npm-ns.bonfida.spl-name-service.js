"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9831],{

/***/ 86921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteNameRegistry = exports.transferNameOwnership = exports.updateNameRegistryData = exports.createNameRegistry = exports.HASH_PREFIX = exports.NAME_PROGRAM_ID = void 0;
const web3_js_1 = __webpack_require__(59493);
const instructions_1 = __webpack_require__(72234);
const state_1 = __webpack_require__(1714);
const utils_1 = __webpack_require__(58165);
const utils_2 = __webpack_require__(58165);
////////////////////////////////////////////////////////////
exports.NAME_PROGRAM_ID = new web3_js_1.PublicKey("namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX");
exports.HASH_PREFIX = "SPL Name Service";
////////////////////////////////////////////////////////////
/**
 * Creates a name account with the given rent budget, allocated space, owner and class.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the new account
 * @param space The space in bytes allocated to the account
 * @param payerKey The allocation cost payer
 * @param nameOwner The pubkey to be set as owner of the new name account
 * @param lamports The budget to be set for the name account. If not specified, it'll be the minimum for rent exemption
 * @param nameClass The class of this new name
 * @param parentName The parent name of the new name. If specified its owner needs to sign
 * @returns
 */
async function createNameRegistry(connection, name, space, payerKey, nameOwner, lamports, nameClass, parentName) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, parentName);
    const balance = lamports
        ? lamports
        : await connection.getMinimumBalanceForRentExemption(space);
    let nameParentOwner;
    if (parentName) {
        const { registry: parentAccount } = await utils_2.getNameOwner(connection, parentName);
        nameParentOwner = parentAccount.owner;
    }
    const createNameInstr = instructions_1.createInstruction(exports.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, nameAccountKey, nameOwner, payerKey, hashed_name, 
    //@ts-ignore
    new utils_1.Numberu64(balance), 
    //@ts-ignore
    new utils_2.Numberu32(space), nameClass, parentName, nameParentOwner);
    return createNameInstr;
}
exports.createNameRegistry = createNameRegistry;
/**
 * Overwrite the data of the given name registry.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name registry to update
 * @param offset The offset to which the data should be written into the registry
 * @param input_data The data to be written
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 */
async function updateNameRegistryData(connection, name, offset, input_data, nameClass, nameParent) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, nameParent);
    let signer;
    if (nameClass) {
        signer = nameClass;
    }
    else {
        signer = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .registry.owner;
    }
    const updateInstr = instructions_1.updateInstruction(exports.NAME_PROGRAM_ID, nameAccountKey, 
    //@ts-ignore
    new utils_2.Numberu32(offset), input_data, signer);
    return updateInstr;
}
exports.updateNameRegistryData = updateNameRegistryData;
/**
 * Change the owner of a given name account.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param newOwner The new owner to be set
 * @param curentNameOwner the current name Owner
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @param parentOwner Parent name owner
 * @returns
 */
async function transferNameOwnership(connection, name, newOwner, nameClass, nameParent, parentOwner) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, nameParent);
    let curentNameOwner;
    if (nameClass) {
        curentNameOwner = nameClass;
    }
    else {
        curentNameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey)).registry.owner;
    }
    const transferInstr = instructions_1.transferInstruction(exports.NAME_PROGRAM_ID, nameAccountKey, newOwner, curentNameOwner, nameClass, nameParent, parentOwner);
    return transferInstr;
}
exports.transferNameOwnership = transferNameOwnership;
/**
 * Delete the name account and transfer the rent to the target.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param refundTargetKey The refund destination address
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @returns
 */
async function deleteNameRegistry(connection, name, refundTargetKey, nameClass, nameParent) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, nameParent);
    let nameOwner;
    if (nameClass) {
        nameOwner = nameClass;
    }
    else {
        nameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .registry.owner;
    }
    const changeAuthoritiesInstr = instructions_1.deleteInstruction(exports.NAME_PROGRAM_ID, nameAccountKey, refundTargetKey, nameOwner);
    return changeAuthoritiesInstr;
}
exports.deleteNameRegistry = deleteNameRegistry;
//# sourceMappingURL=bindings.js.map

/***/ }),

/***/ 96737:
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
__exportStar(__webpack_require__(58165), exports);
__exportStar(__webpack_require__(86921), exports);
__exportStar(__webpack_require__(1714), exports);
__exportStar(__webpack_require__(60240), exports);
__exportStar(__webpack_require__(81903), exports);
__exportStar(__webpack_require__(58165), exports);
__exportStar(__webpack_require__(72234), exports);
__exportStar(__webpack_require__(91584), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 72234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteInstruction = exports.transferInstruction = exports.updateInstruction = exports.createInstruction = void 0;
const web3_js_1 = __webpack_require__(59493);
const utils_1 = __webpack_require__(58165);
function createInstruction(nameProgramId, systemProgramId, nameKey, nameOwnerKey, payerKey, hashed_name, lamports, space, nameClassKey, nameParent, nameParentOwner) {
    const buffers = [
        Buffer.from(Int8Array.from([0])),
        //@ts-ignore
        new utils_1.Numberu32(hashed_name.length).toBuffer(),
        hashed_name,
        lamports.toBuffer(),
        space.toBuffer(),
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: systemProgramId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: payerKey,
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: nameKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: false,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParent) {
        keys.push({
            pubkey: nameParent,
            isSigner: false,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParentOwner) {
        keys.push({
            pubkey: nameParentOwner,
            isSigner: true,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.createInstruction = createInstruction;
function updateInstruction(nameProgramId, nameAccountKey, offset, input_data, nameUpdateSigner) {
    const buffers = [
        Buffer.from(Int8Array.from([1])),
        offset.toBuffer(),
        //@ts-ignore
        new utils_1.Numberu32(input_data.length).toBuffer(),
        input_data,
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameUpdateSigner,
            isSigner: true,
            isWritable: false,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.updateInstruction = updateInstruction;
function transferInstruction(nameProgramId, nameAccountKey, newOwnerKey, currentNameOwnerKey, nameClassKey, nameParent, parentOwner) {
    const buffers = [Buffer.from(Int8Array.from([2])), newOwnerKey.toBuffer()];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: parentOwner ? parentOwner : currentNameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    if (parentOwner && nameParent) {
        if (!nameClassKey) {
            keys.push({
                pubkey: web3_js_1.PublicKey.default,
                isSigner: false,
                isWritable: false,
            });
        }
        keys.push({
            pubkey: nameParent,
            isSigner: false,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.transferInstruction = transferInstruction;
function deleteInstruction(nameProgramId, nameAccountKey, refundTargetKey, nameOwnerKey) {
    const buffers = [Buffer.from(Int8Array.from([3]))];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: refundTargetKey,
            isSigner: false,
            isWritable: true,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.deleteInstruction = deleteInstruction;
//# sourceMappingURL=instructions.js.map

/***/ }),

/***/ 91584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retrieveNfts = exports.retrieveNftOwner = exports.MINT_PREFIX = exports.NAME_TOKENIZER_ID = void 0;
const web3_js_1 = __webpack_require__(59493);
const spl_token_1 = __webpack_require__(58884);
/**
 * Mainnet program ID
 */
exports.NAME_TOKENIZER_ID = new web3_js_1.PublicKey("nftD3vbNkNqfj2Sd3HZwbpw4BxxKWr4AjGb9X38JeZk");
/**
 * PDA prefix
 */
exports.MINT_PREFIX = Buffer.from("tokenized_name");
/**
 * This function can be used to retrieve the owner of a tokenized domain name
 *
 * @param connection The solana connection object to the RPC node
 * @param nameAccount The key of the domain name
 * @returns
 */
const retrieveNftOwner = async (connection, nameAccount) => {
    var _a;
    try {
        const [mint] = await web3_js_1.PublicKey.findProgramAddress([exports.MINT_PREFIX, nameAccount.toBuffer()], exports.NAME_TOKENIZER_ID);
        const mintInfo = await spl_token_1.getMint(connection, mint);
        if (mintInfo.supply.toString() === "0") {
            return undefined;
        }
        const { value } = await connection.getTokenLargestAccounts(mint);
        const holder = (_a = value.find((e) => e.amount === "1")) === null || _a === void 0 ? void 0 : _a.address;
        if (!holder) {
            return undefined;
        }
        const info = await connection.getAccountInfo(holder);
        if (!info || !info.data) {
            return undefined;
        }
        return new web3_js_1.PublicKey(info.data.slice(32, 64));
    }
    catch (err) {
        console.log(err);
        return undefined;
    }
};
exports.retrieveNftOwner = retrieveNftOwner;
/**
 * This function can be used to retrieve all the tokenized domains name
 *
 * @param connection The solana connection object to the RPC node
 * @returns
 */
const retrieveNfts = async (connection) => {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: "3",
            },
        },
    ];
    const result = await connection.getProgramAccounts(exports.NAME_TOKENIZER_ID, {
        filters,
    });
    const offset = 1 + 1 + 32 + 32;
    return result.map((e) => new web3_js_1.PublicKey(e.account.data.slice(offset, offset + 32)));
};
exports.retrieveNfts = retrieveNfts;
//# sourceMappingURL=nft.js.map

/***/ }),

/***/ 1714:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mint = exports.TokenData = exports.NameRegistryState = void 0;
const web3_js_1 = __webpack_require__(59493);
const borsh_1 = __webpack_require__(42590);
const nft_1 = __webpack_require__(91584);
class NameRegistryState {
    constructor(obj) {
        this.parentName = new web3_js_1.PublicKey(obj.parentName);
        this.owner = new web3_js_1.PublicKey(obj.owner);
        this.class = new web3_js_1.PublicKey(obj.class);
    }
    static async retrieve(connection, nameAccountKey) {
        var _a;
        const nameAccount = await connection.getAccountInfo(nameAccountKey);
        if (!nameAccount) {
            throw new Error("Invalid name account provided");
        }
        let res = borsh_1.deserializeUnchecked(this.schema, NameRegistryState, nameAccount.data);
        res.data = (_a = nameAccount.data) === null || _a === void 0 ? void 0 : _a.slice(this.HEADER_LEN);
        const nftOwner = await nft_1.retrieveNftOwner(connection, nameAccountKey);
        return { registry: res, nftOwner };
    }
    static async _retrieveBatch(connection, nameAccountKeys) {
        const nameAccounts = await connection.getMultipleAccountsInfo(nameAccountKeys);
        const fn = (data) => {
            if (!data)
                return undefined;
            const res = borsh_1.deserializeUnchecked(this.schema, NameRegistryState, data);
            res.data = data === null || data === void 0 ? void 0 : data.slice(this.HEADER_LEN);
            return res;
        };
        return nameAccounts.map((e) => fn(e === null || e === void 0 ? void 0 : e.data));
    }
    static async retrieveBatch(connection, nameAccountKeys) {
        let result = [];
        while (nameAccountKeys.length > 0) {
            result.push(...(await this._retrieveBatch(connection, nameAccountKeys.splice(0, 100))));
        }
        return result;
    }
}
exports.NameRegistryState = NameRegistryState;
NameRegistryState.HEADER_LEN = 96;
NameRegistryState.schema = new Map([
    [
        NameRegistryState,
        {
            kind: "struct",
            fields: [
                ["parentName", [32]],
                ["owner", [32]],
                ["class", [32]],
            ],
        },
    ],
]);
class TokenData {
    constructor(obj) {
        this.name = obj.name;
        this.ticker = obj.ticker;
        this.mint = obj.mint;
        this.decimals = obj.decimals;
        this.website = obj === null || obj === void 0 ? void 0 : obj.website;
        this.logoUri = obj === null || obj === void 0 ? void 0 : obj.logoUri;
    }
    serialize() {
        return borsh_1.serialize(TokenData.schema, this);
    }
    static deserialize(data) {
        return borsh_1.deserializeUnchecked(TokenData.schema, TokenData, data);
    }
}
exports.TokenData = TokenData;
TokenData.schema = new Map([
    [
        TokenData,
        {
            kind: "struct",
            fields: [
                ["name", "string"],
                ["ticker", "string"],
                ["mint", [32]],
                ["decimals", "u8"],
                ["website", { kind: "option", type: "string" }],
                ["logoUri", { kind: "option", type: "string" }],
            ],
        },
    ],
]);
class Mint {
    constructor(obj) {
        this.mint = obj.mint;
    }
    serialize() {
        return borsh_1.serialize(Mint.schema, this);
    }
    static deserialize(data) {
        return borsh_1.deserializeUnchecked(Mint.schema, Mint, data);
    }
}
exports.Mint = Mint;
Mint.schema = new Map([
    [
        Mint,
        {
            kind: "struct",
            fields: [["mint", [32]]],
        },
    ],
]);
//# sourceMappingURL=state.js.map

/***/ }),

/***/ 81903:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTokenInfoFromName = exports.getTokenInfoFromMint = exports.TOKEN_TLD = void 0;
const web3_js_1 = __webpack_require__(59493);
const utils_1 = __webpack_require__(58165);
const state_1 = __webpack_require__(1714);
exports.TOKEN_TLD = new web3_js_1.PublicKey("6NSu2tci4apRKQtt257bAVcvqYjB3zV2H1dWo56vgpa6");
const getTokenInfoFromMint = async (connection, mint) => {
    const nameKey = await utils_1.getNameAccountKey(await utils_1.getHashedName(mint.toBase58()), undefined, exports.TOKEN_TLD);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, nameKey);
    if (!registry.data) {
        throw new Error("Invalid account data");
    }
    return state_1.TokenData.deserialize(registry.data);
};
exports.getTokenInfoFromMint = getTokenInfoFromMint;
const getTokenInfoFromName = async (connection, name) => {
    const reverseNameKey = await utils_1.getNameAccountKey(await utils_1.getHashedName(name), undefined, exports.TOKEN_TLD);
    const { registry: reverseRegistry } = await state_1.NameRegistryState.retrieve(connection, reverseNameKey);
    if (!reverseRegistry.data) {
        throw new Error("Invalid account data");
    }
    const mint = new web3_js_1.PublicKey(state_1.Mint.deserialize(reverseRegistry.data).mint);
    return await exports.getTokenInfoFromMint(connection, mint);
};
exports.getTokenInfoFromName = getTokenInfoFromName;
//# sourceMappingURL=tokens.js.map

/***/ }),

/***/ 60240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createReverseTwitterRegistry = exports.ReverseTwitterRegistryState = exports.getTwitterRegistryData = exports.getTwitterHandleandRegistryKeyViaFilters = exports.getHandleAndRegistryKey = exports.getTwitterRegistry = exports.getTwitterRegistryKey = exports.deleteTwitterRegistry = exports.changeVerifiedPubkey = exports.changeTwitterRegistryData = exports.createVerifiedTwitterRegistry = exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = exports.TWITTER_VERIFICATION_AUTHORITY = void 0;
const web3_js_1 = __webpack_require__(59493);
const bindings_1 = __webpack_require__(86921);
const instructions_1 = __webpack_require__(72234);
const state_1 = __webpack_require__(1714);
const utils_1 = __webpack_require__(58165);
const borsh_1 = __webpack_require__(42590);
////////////////////////////////////////////////////
// Global Variables
exports.TWITTER_VERIFICATION_AUTHORITY = new web3_js_1.PublicKey("FvPH7PrVrLGKPfqaf3xJodFTjZriqrAXXLTVWEorTFBi");
// The address of the name registry that will be a parent to all twitter handle registries,
// it should be owned by the TWITTER_VERIFICATION_AUTHORITY and it's name is irrelevant
exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = new web3_js_1.PublicKey("4YcexoW3r78zz16J2aqmukBLRwGq6rAvWzJpkYAXqebv");
////////////////////////////////////////////////////
// Bindings
// Signed by the authority, the payer and the verified pubkey
async function createVerifiedTwitterRegistry(connection, twitterHandle, verifiedPubkey, space, // The space that the user will have to write data into the verified registry
payerKey) {
    // Create user facing registry
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let instructions = [
        instructions_1.createInstruction(bindings_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, twitterHandleRegistryKey, verifiedPubkey, payerKey, hashedTwitterHandle, 
        //@ts-ignore
        new utils_1.Numberu64(await connection.getMinimumBalanceForRentExemption(space)), 
        //@ts-ignore
        new utils_1.Numberu32(space), undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY, exports.TWITTER_VERIFICATION_AUTHORITY // Twitter authority acts as owner of the parent for all user-facing registries
        ),
    ];
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, verifiedPubkey, payerKey));
    return instructions;
}
exports.createVerifiedTwitterRegistry = createVerifiedTwitterRegistry;
// Overwrite the data that is written in the user facing registry
// Signed by the verified pubkey
async function changeTwitterRegistryData(twitterHandle, verifiedPubkey, offset, // The offset at which to write the input data into the NameRegistryData
input_data) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        instructions_1.updateInstruction(bindings_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, 
        //@ts-ignore
        new utils_1.Numberu32(offset), input_data, verifiedPubkey),
    ];
    return instructions;
}
exports.changeTwitterRegistryData = changeTwitterRegistryData;
// Change the verified pubkey for a given twitter handle
// Signed by the Authority, the verified pubkey and the payer
async function changeVerifiedPubkey(connection, twitterHandle, currentVerifiedPubkey, newVerifiedPubkey, payerKey) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    // Transfer the user-facing registry ownership
    let instructions = [
        instructions_1.transferInstruction(bindings_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, newVerifiedPubkey, currentVerifiedPubkey, undefined),
    ];
    // Delete the current reverse registry
    const currentHashedVerifiedPubkey = await utils_1.getHashedName(currentVerifiedPubkey.toString());
    const currentReverseRegistryKey = await utils_1.getNameAccountKey(currentHashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, undefined);
    instructions.push(await bindings_1.deleteNameRegistry(connection, currentVerifiedPubkey.toString(), payerKey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY));
    // Create the new reverse registry
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, newVerifiedPubkey, payerKey));
    return instructions;
}
exports.changeVerifiedPubkey = changeVerifiedPubkey;
// Delete the verified registry for a given twitter handle
// Signed by the verified pubkey
async function deleteTwitterRegistry(twitterHandle, verifiedPubkey) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const hashedVerifiedPubkey = await utils_1.getHashedName(verifiedPubkey.toString());
    const reverseRegistryKey = await utils_1.getNameAccountKey(hashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        // Delete the user facing registry
        instructions_1.deleteInstruction(bindings_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, verifiedPubkey, verifiedPubkey),
        // Delete the reverse registry
        instructions_1.deleteInstruction(bindings_1.NAME_PROGRAM_ID, reverseRegistryKey, verifiedPubkey, verifiedPubkey),
    ];
    return instructions;
}
exports.deleteTwitterRegistry = deleteTwitterRegistry;
//////////////////////////////////////////
// Getter Functions
// Returns the key of the user-facing registry
async function getTwitterRegistryKey(twitter_handle) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitter_handle);
    return await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
}
exports.getTwitterRegistryKey = getTwitterRegistryKey;
async function getTwitterRegistry(connection, twitter_handle) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitter_handle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, twitterHandleRegistryKey);
    return registry;
}
exports.getTwitterRegistry = getTwitterRegistry;
async function getHandleAndRegistryKey(connection, verifiedPubkey) {
    const hashedVerifiedPubkey = await utils_1.getHashedName(verifiedPubkey.toString());
    const reverseRegistryKey = await utils_1.getNameAccountKey(hashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseRegistryState = await ReverseTwitterRegistryState.retrieve(connection, reverseRegistryKey);
    return [
        reverseRegistryState.twitterHandle,
        new web3_js_1.PublicKey(reverseRegistryState.twitterRegistryKey),
    ];
}
exports.getHandleAndRegistryKey = getHandleAndRegistryKey;
// Uses the RPC node filtering feature, execution speed may vary
async function getTwitterHandleandRegistryKeyViaFilters(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: exports.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: exports.TWITTER_VERIFICATION_AUTHORITY.toBase58(),
            },
        },
    ];
    const filteredAccounts = await utils_1.getFilteredProgramAccounts(connection, bindings_1.NAME_PROGRAM_ID, filters);
    for (const f of filteredAccounts) {
        if (f.accountInfo.data.length > state_1.NameRegistryState.HEADER_LEN + 32) {
            let data = f.accountInfo.data.slice(state_1.NameRegistryState.HEADER_LEN);
            let state = borsh_1.deserialize(ReverseTwitterRegistryState.schema, ReverseTwitterRegistryState, data);
            return [state.twitterHandle, new web3_js_1.PublicKey(state.twitterRegistryKey)];
        }
    }
    throw new Error("Registry not found.");
}
exports.getTwitterHandleandRegistryKeyViaFilters = getTwitterHandleandRegistryKeyViaFilters;
// Uses the RPC node filtering feature, execution speed may vary
// Does not give you the handle, but is an alternative to getHandlesAndKeysFromVerifiedPubkey + getTwitterRegistry to get the data
async function getTwitterRegistryData(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: exports.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBytes(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBytes(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: new web3_js_1.PublicKey(Buffer.alloc(32, 0)).toBase58(),
            },
        },
    ];
    const filteredAccounts = await utils_1.getFilteredProgramAccounts(connection, bindings_1.NAME_PROGRAM_ID, filters);
    if (filteredAccounts.length > 1) {
        throw new Error("Found more than one registry.");
    }
    return filteredAccounts[0].accountInfo.data.slice(state_1.NameRegistryState.HEADER_LEN);
}
exports.getTwitterRegistryData = getTwitterRegistryData;
//////////////////////////////////////////////
// Utils
class ReverseTwitterRegistryState {
    constructor(obj) {
        this.twitterRegistryKey = obj.twitterRegistryKey;
        this.twitterHandle = obj.twitterHandle;
    }
    static async retrieve(connection, reverseTwitterAccountKey) {
        let reverseTwitterAccount = await connection.getAccountInfo(reverseTwitterAccountKey, "processed");
        if (!reverseTwitterAccount) {
            throw new Error("Invalid reverse Twitter account provided");
        }
        let res = borsh_1.deserializeUnchecked(this.schema, ReverseTwitterRegistryState, reverseTwitterAccount.data.slice(state_1.NameRegistryState.HEADER_LEN));
        return res;
    }
}
exports.ReverseTwitterRegistryState = ReverseTwitterRegistryState;
ReverseTwitterRegistryState.schema = new Map([
    [
        ReverseTwitterRegistryState,
        {
            kind: "struct",
            fields: [
                ["twitterRegistryKey", [32]],
                ["twitterHandle", "string"],
            ],
        },
    ],
]);
async function createReverseTwitterRegistry(connection, twitterHandle, twitterRegistryKey, verifiedPubkey, payerKey) {
    // Create the reverse lookup registry
    const hashedVerifiedPubkey = await utils_1.getHashedName(verifiedPubkey.toString());
    const reverseRegistryKey = await utils_1.getNameAccountKey(hashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseTwitterRegistryStateBuff = borsh_1.serialize(ReverseTwitterRegistryState.schema, new ReverseTwitterRegistryState({
        twitterRegistryKey: twitterRegistryKey.toBytes(),
        twitterHandle,
    }));
    return [
        instructions_1.createInstruction(bindings_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, reverseRegistryKey, verifiedPubkey, payerKey, hashedVerifiedPubkey, new utils_1.Numberu64(
        //@ts-ignore
        await connection.getMinimumBalanceForRentExemption(reverseTwitterRegistryStateBuff.length)), 
        //@ts-ignore
        new utils_1.Numberu32(reverseTwitterRegistryStateBuff.length), exports.TWITTER_VERIFICATION_AUTHORITY, // Twitter authority acts as class for all reverse-lookup registries
        exports.TWITTER_ROOT_PARENT_REGISTRY_KEY, // Reverse registries are also children of the root
        exports.TWITTER_VERIFICATION_AUTHORITY),
        instructions_1.updateInstruction(bindings_1.NAME_PROGRAM_ID, reverseRegistryKey, 
        //@ts-ignore
        new utils_1.Numberu32(0), Buffer.from(reverseTwitterRegistryStateBuff), exports.TWITTER_VERIFICATION_AUTHORITY),
    ];
}
exports.createReverseTwitterRegistry = createReverseTwitterRegistry;
//# sourceMappingURL=twitter_bindings.js.map

/***/ }),

/***/ 58165:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDNSRecordAddress = exports.performReverseLookup = exports.getFilteredProgramAccounts = exports.getNameOwner = exports.getNameAccountKey = exports.getHashedName = exports.signAndSendTransactionInstructions = exports.Numberu64 = exports.Numberu32 = exports.REVERSE_LOOKUP_CLASS = void 0;
const assert_1 = __importDefault(__webpack_require__(57579));
const create_hash_1 = __importDefault(__webpack_require__(20160));
const web3_js_1 = __webpack_require__(59493);
const bn_js_1 = __importDefault(__webpack_require__(35579));
const bindings_1 = __webpack_require__(86921);
const state_1 = __webpack_require__(1714);
exports.REVERSE_LOOKUP_CLASS = new web3_js_1.PublicKey("33m47vH6Eav6jr5Ry86XjhRft2jRBLDnDgPSHoquXi2Z");
class Numberu32 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 4) {
            return b;
        }
        assert_1.default(b.length < 4, "Numberu32 too large");
        const zeroPad = Buffer.alloc(4);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        assert_1.default(buffer.length === 4, `Invalid buffer length: ${buffer.length}`);
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(""), 16);
    }
}
exports.Numberu32 = Numberu32;
class Numberu64 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 8) {
            return b;
        }
        assert_1.default(b.length < 8, "Numberu64 too large");
        const zeroPad = Buffer.alloc(8);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        assert_1.default(buffer.length === 8, `Invalid buffer length: ${buffer.length}`);
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(""), 16);
    }
}
exports.Numberu64 = Numberu64;
const signAndSendTransactionInstructions = async (
// sign and send transaction
connection, signers, feePayer, txInstructions) => {
    const tx = new web3_js_1.Transaction();
    tx.feePayer = feePayer.publicKey;
    signers.push(feePayer);
    tx.add(...txInstructions);
    return await connection.sendTransaction(tx, signers);
};
exports.signAndSendTransactionInstructions = signAndSendTransactionInstructions;
async function getHashedName(name) {
    const input = bindings_1.HASH_PREFIX + name;
    const buffer = create_hash_1.default("sha256").update(input, "utf8").digest();
    return buffer;
}
exports.getHashedName = getHashedName;
async function getNameAccountKey(hashed_name, nameClass, nameParent) {
    const seeds = [hashed_name];
    if (nameClass) {
        seeds.push(nameClass.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    if (nameParent) {
        seeds.push(nameParent.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    const [nameAccountKey] = await web3_js_1.PublicKey.findProgramAddress(seeds, bindings_1.NAME_PROGRAM_ID);
    return nameAccountKey;
}
exports.getNameAccountKey = getNameAccountKey;
async function getNameOwner(connection, nameAccountKey) {
    const nameAccount = await connection.getAccountInfo(nameAccountKey);
    if (!nameAccount) {
        throw new Error("Unable to find the given account.");
    }
    return state_1.NameRegistryState.retrieve(connection, nameAccountKey);
}
exports.getNameOwner = getNameOwner;
//Taken from Serum
async function getFilteredProgramAccounts(connection, programId, filters) {
    const resp = await connection.getProgramAccounts(programId, {
        commitment: connection.commitment,
        filters,
        encoding: "base64",
    });
    return resp.map(({ pubkey, account: { data, executable, owner, lamports } }) => ({
        publicKey: pubkey,
        accountInfo: {
            data: data,
            executable,
            owner: owner,
            lamports,
        },
    }));
}
exports.getFilteredProgramAccounts = getFilteredProgramAccounts;
async function performReverseLookup(connection, nameAccount) {
    const hashedReverseLookup = await getHashedName(nameAccount.toBase58());
    const reverseLookupAccount = await getNameAccountKey(hashedReverseLookup, exports.REVERSE_LOOKUP_CLASS);
    const { registry } = await state_1.NameRegistryState.retrieve(connection, reverseLookupAccount);
    if (!registry.data) {
        throw "Could not retrieve name data";
    }
    const nameLength = new bn_js_1.default(registry.data.slice(0, 4), "le").toNumber();
    return registry.data.slice(4, 4 + nameLength).toString();
}
exports.performReverseLookup = performReverseLookup;
async function getDNSRecordAddress(nameAccount, type) {
    const hashedName = await getHashedName("\0".concat(type));
    const recordAccount = await getNameAccountKey(hashedName, undefined, nameAccount);
    return recordAccount;
}
exports.getDNSRecordAddress = getDNSRecordAddress;
//# sourceMappingURL=utils.js.map

/***/ })

}]);