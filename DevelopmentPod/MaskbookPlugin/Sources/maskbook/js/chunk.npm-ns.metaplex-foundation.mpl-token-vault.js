"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9834],{

/***/ 87552:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VaultProgram = exports.VaultInstructions = exports.VaultKey = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
var VaultKey;
(function (VaultKey) {
    VaultKey[VaultKey["Uninitialized"] = 0] = "Uninitialized";
    VaultKey[VaultKey["VaultV1"] = 3] = "VaultV1";
    VaultKey[VaultKey["SafetyDepositBoxV1"] = 1] = "SafetyDepositBoxV1";
    VaultKey[VaultKey["ExternalPriceAccountV1"] = 2] = "ExternalPriceAccountV1";
})(VaultKey = exports.VaultKey || (exports.VaultKey = {}));
var VaultInstructions;
(function (VaultInstructions) {
    VaultInstructions[VaultInstructions["InitVault"] = 0] = "InitVault";
    VaultInstructions[VaultInstructions["AddTokenToInactiveVault"] = 1] = "AddTokenToInactiveVault";
    VaultInstructions[VaultInstructions["ActivateVault"] = 2] = "ActivateVault";
    VaultInstructions[VaultInstructions["CombineVault"] = 3] = "CombineVault";
    VaultInstructions[VaultInstructions["RedeemShares"] = 4] = "RedeemShares";
    VaultInstructions[VaultInstructions["WithdrawTokenFromSafetyDepositBox"] = 5] = "WithdrawTokenFromSafetyDepositBox";
    VaultInstructions[VaultInstructions["MintFractionalShares"] = 6] = "MintFractionalShares";
    VaultInstructions[VaultInstructions["WithdrawSharesFromTreasury"] = 7] = "WithdrawSharesFromTreasury";
    VaultInstructions[VaultInstructions["AddSharesToTreasury"] = 8] = "AddSharesToTreasury";
    VaultInstructions[VaultInstructions["UpdateExternalPriceAccount"] = 9] = "UpdateExternalPriceAccount";
    VaultInstructions[VaultInstructions["SetVaultAuthority"] = 10] = "SetVaultAuthority";
})(VaultInstructions = exports.VaultInstructions || (exports.VaultInstructions = {}));
class VaultProgram extends mpl_core_1.Program {
}
exports.VaultProgram = VaultProgram;
VaultProgram.PREFIX = 'vault';
VaultProgram.PUBKEY = new web3_js_1.PublicKey(mpl_core_1.config.programs.vault);
//# sourceMappingURL=VaultProgram.js.map

/***/ }),

/***/ 69338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalPriceAccount = exports.ExternalPriceAccountData = void 0;
const mpl_core_1 = __webpack_require__(78654);
const VaultProgram_1 = __webpack_require__(87552);
class ExternalPriceAccountData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = VaultProgram_1.VaultKey.ExternalPriceAccountV1;
    }
}
exports.ExternalPriceAccountData = ExternalPriceAccountData;
_a = ExternalPriceAccountData;
ExternalPriceAccountData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['pricePerShare', 'u64'],
    ['priceMint', 'pubkeyAsString'],
    ['allowedToCombine', 'u8'],
]);
class ExternalPriceAccount extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(VaultProgram_1.VaultProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!ExternalPriceAccount.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = ExternalPriceAccountData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === VaultProgram_1.VaultKey.ExternalPriceAccountV1;
    }
}
exports.ExternalPriceAccount = ExternalPriceAccount;
//# sourceMappingURL=ExternalPriceAccount.js.map

/***/ }),

/***/ 18617:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SafetyDepositBox = exports.SafetyDepositBoxData = void 0;
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const buffer_1 = __webpack_require__(15313);
const mpl_core_1 = __webpack_require__(78654);
class SafetyDepositBoxData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = VaultProgram_1.VaultKey.SafetyDepositBoxV1;
    }
}
exports.SafetyDepositBoxData = SafetyDepositBoxData;
_a = SafetyDepositBoxData;
SafetyDepositBoxData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['vault', 'pubkeyAsString'],
    ['tokenMint', 'pubkeyAsString'],
    ['store', 'pubkeyAsString'],
    ['order', 'u8'],
]);
class SafetyDepositBox extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(VaultProgram_1.VaultProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!SafetyDepositBox.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = SafetyDepositBoxData.deserialize(this.info.data);
    }
    static getPDA(vault, mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return VaultProgram_1.VaultProgram.findProgramAddress([
                buffer_1.Buffer.from(VaultProgram_1.VaultProgram.PREFIX),
                new web3_js_1.PublicKey(vault).toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === VaultProgram_1.VaultKey.SafetyDepositBoxV1;
    }
}
exports.SafetyDepositBox = SafetyDepositBox;
//# sourceMappingURL=SafetyDepositBox.js.map

/***/ }),

/***/ 92535:
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vault = exports.VaultData = exports.VaultState = exports.NumberOfShareArgs = exports.AmountArgs = void 0;
const web3_js_1 = __webpack_require__(29948);
const bs58_1 = __importDefault(__webpack_require__(91945));
const mpl_core_1 = __webpack_require__(78654);
const SafetyDepositBox_1 = __webpack_require__(18617);
const VaultProgram_1 = __webpack_require__(87552);
const buffer_1 = __webpack_require__(15313);
class AmountArgs extends mpl_core_1.Borsh.Data {
}
exports.AmountArgs = AmountArgs;
_a = AmountArgs;
AmountArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['amount', 'u64'],
]);
class NumberOfShareArgs extends mpl_core_1.Borsh.Data {
}
exports.NumberOfShareArgs = NumberOfShareArgs;
_b = NumberOfShareArgs;
NumberOfShareArgs.SCHEMA = _b.struct([
    ['instruction', 'u8'],
    ['numberOfShares', 'u64'],
]);
var VaultState;
(function (VaultState) {
    VaultState[VaultState["Inactive"] = 0] = "Inactive";
    VaultState[VaultState["Active"] = 1] = "Active";
    VaultState[VaultState["Combined"] = 2] = "Combined";
    VaultState[VaultState["Deactivated"] = 3] = "Deactivated";
})(VaultState = exports.VaultState || (exports.VaultState = {}));
class VaultData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = VaultProgram_1.VaultKey.VaultV1;
    }
}
exports.VaultData = VaultData;
_c = VaultData;
VaultData.SCHEMA = _c.struct([
    ['key', 'u8'],
    ['tokenProgram', 'pubkeyAsString'],
    ['fractionMint', 'pubkeyAsString'],
    ['authority', 'pubkeyAsString'],
    ['fractionTreasury', 'pubkeyAsString'],
    ['redeemTreasury', 'pubkeyAsString'],
    ['allowFurtherShareCreation', 'u8'],
    ['pricingLookupAddress', 'pubkeyAsString'],
    ['tokenTypeCount', 'u8'],
    ['state', 'u8'],
    ['lockedPricePerShare', 'u64'],
]);
class Vault extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(VaultProgram_1.VaultProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!Vault.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = VaultData.deserialize(this.info.data);
    }
    static getPDA(pubkey) {
        return __awaiter(this, void 0, void 0, function* () {
            return VaultProgram_1.VaultProgram.findProgramAddress([
                buffer_1.Buffer.from(VaultProgram_1.VaultProgram.PREFIX),
                VaultProgram_1.VaultProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(pubkey).toBuffer(),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === VaultProgram_1.VaultKey.VaultV1;
    }
    getSafetyDepositBoxes(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield VaultProgram_1.VaultProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([VaultProgram_1.VaultKey.SafetyDepositBoxV1])),
                        },
                    },
                    {
                        memcmp: {
                            offset: 1,
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => SafetyDepositBox_1.SafetyDepositBox.from(account));
        });
    }
}
exports.Vault = Vault;
Vault.MAX_VAULT_SIZE = 1 + 32 + 32 + 32 + 32 + 1 + 32 + 1 + 32 + 1 + 1 + 8;
Vault.MAX_EXTERNAL_ACCOUNT_SIZE = 1 + 8 + 32 + 1;
//# sourceMappingURL=Vault.js.map

/***/ }),

/***/ 17945:
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
__exportStar(__webpack_require__(18617), exports);
__exportStar(__webpack_require__(92535), exports);
__exportStar(__webpack_require__(69338), exports);
__exportStar(__webpack_require__(87552), exports);
__exportStar(__webpack_require__(55882), exports);
__exportStar(__webpack_require__(59339), exports);
//# sourceMappingURL=mpl-token-vault.js.map

/***/ }),

/***/ 28691:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivateVault = void 0;
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const Vault_1 = __webpack_require__(92535);
const VaultProgram_2 = __webpack_require__(87552);
const mpl_core_1 = __webpack_require__(78654);
class ActivateVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionMint, fractionTreasury, fractionMintAuthority, numberOfShares, } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.ActivateVault,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMintAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.ActivateVault = ActivateVault;
//# sourceMappingURL=ActivateVault.js.map

/***/ }),

/***/ 41366:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddSharesToTreasury = void 0;
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const Vault_1 = __webpack_require__(92535);
const VaultProgram_2 = __webpack_require__(87552);
const mpl_core_1 = __webpack_require__(78654);
class AddSharesToTreasury extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, source, transferAuthority, fractionTreasury, numberOfShares } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.AddSharesToTreasury,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: source,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.AddSharesToTreasury = AddSharesToTreasury;
//# sourceMappingURL=AddSharesToTreasury.js.map

/***/ }),

/***/ 41515:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddTokenToInactiveVault = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const Vault_1 = __webpack_require__(92535);
const VaultProgram_1 = __webpack_require__(87552);
const VaultProgram_2 = __webpack_require__(87552);
class AddTokenToInactiveVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { vault, vaultAuthority, tokenAccount, tokenStoreAccount, transferAuthority, safetyDepositBox, amount, } = params;
        const data = Vault_1.AmountArgs.serialize({
            instruction: VaultProgram_2.VaultInstructions.AddTokenToInactiveVault,
            amount,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: safetyDepositBox,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenStoreAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_1.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.AddTokenToInactiveVault = AddTokenToInactiveVault;
//# sourceMappingURL=AddTokenToInactiveVault.js.map

/***/ }),

/***/ 62118:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CombineVault = exports.CombineVaultArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const VaultProgram_2 = __webpack_require__(87552);
class CombineVaultArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.CombineVault;
    }
}
exports.CombineVaultArgs = CombineVaultArgs;
_a = CombineVaultArgs;
CombineVaultArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class CombineVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionMint, fractionTreasury, outstandingShareTokenAccount, payingTokenAccount, redeemTreasury, newVaultAuthority, transferAuthority, externalPriceAccount, burnAuthority, } = params;
        const data = CombineVaultArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: outstandingShareTokenAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: payingTokenAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: redeemTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newVaultAuthority || vaultAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: burnAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: externalPriceAccount,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.CombineVault = CombineVault;
//# sourceMappingURL=CombineVault.js.map

/***/ }),

/***/ 25804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitVault = exports.InitVaultArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const VaultProgram_2 = __webpack_require__(87552);
class InitVaultArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.InitVault;
        this.allowFurtherShareCreation = false;
    }
}
exports.InitVaultArgs = InitVaultArgs;
_a = InitVaultArgs;
InitVaultArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['allowFurtherShareCreation', 'u8'],
]);
class InitVault extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionalMint, redeemTreasury, fractionalTreasury, pricingLookupAddress, allowFurtherShareCreation, } = params;
        const data = InitVaultArgs.serialize({ allowFurtherShareCreation });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: fractionalMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: redeemTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionalTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: pricingLookupAddress,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.InitVault = InitVault;
//# sourceMappingURL=InitVault.js.map

/***/ }),

/***/ 64938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MintFractionalShares = void 0;
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const mpl_core_1 = __webpack_require__(78654);
const Vault_1 = __webpack_require__(92535);
const VaultProgram_2 = __webpack_require__(87552);
class MintFractionalShares extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, fractionMint, fractionTreasury, fractionMintAuthority, numberOfShares, } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.MintFractionalShares,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: fractionMintAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.MintFractionalShares = MintFractionalShares;
//# sourceMappingURL=MintFractionalShares.js.map

/***/ }),

/***/ 81871:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedeemShares = exports.RedeemSharesArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const VaultProgram_2 = __webpack_require__(87552);
class RedeemSharesArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.RedeemShares;
    }
}
exports.RedeemSharesArgs = RedeemSharesArgs;
_a = RedeemSharesArgs;
RedeemSharesArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class RedeemShares extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, burnAuthority, fractionMint, outstandingSharesAccount, proceedsAccount, redeemTreasury, transferAuthority, } = params;
        const data = RedeemSharesArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: outstandingSharesAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: proceedsAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: redeemTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: burnAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.RedeemShares = RedeemShares;
//# sourceMappingURL=RedeemShares.js.map

/***/ }),

/***/ 82677:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetVaultAuthority = exports.SetVaultAuthorityArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const VaultProgram_2 = __webpack_require__(87552);
class SetVaultAuthorityArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.SetVaultAuthority;
    }
}
exports.SetVaultAuthorityArgs = SetVaultAuthorityArgs;
_a = SetVaultAuthorityArgs;
SetVaultAuthorityArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class SetVaultAuthority extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, currentAuthority, newAuthority } = params;
        const data = SetVaultAuthorityArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: currentAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: newAuthority,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.SetVaultAuthority = SetVaultAuthority;
//# sourceMappingURL=SetVaultAuthority.js.map

/***/ }),

/***/ 57381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateExternalPriceAccount = exports.UpdateExternalPriceAccountArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const ExternalPriceAccount_1 = __webpack_require__(69338);
const VaultProgram_2 = __webpack_require__(87552);
class UpdateExternalPriceAccountArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = VaultProgram_1.VaultInstructions.UpdateExternalPriceAccount;
    }
}
exports.UpdateExternalPriceAccountArgs = UpdateExternalPriceAccountArgs;
_a = UpdateExternalPriceAccountArgs;
UpdateExternalPriceAccountArgs.SCHEMA = new Map([
    ...ExternalPriceAccount_1.ExternalPriceAccountData.SCHEMA,
    ..._a.struct([
        ['instruction', 'u8'],
        ['externalPriceAccount', ExternalPriceAccount_1.ExternalPriceAccountData],
    ]),
]);
class UpdateExternalPriceAccount extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { externalPriceAccount, externalPriceAccountData } = params;
        const data = UpdateExternalPriceAccountArgs.serialize({
            externalPriceAccount: externalPriceAccountData,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: externalPriceAccount,
                    isSigner: false,
                    isWritable: true,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.UpdateExternalPriceAccount = UpdateExternalPriceAccount;
//# sourceMappingURL=UpdateExternalPriceAccount.js.map

/***/ }),

/***/ 93291:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithdrawSharesFromTreasury = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const Vault_1 = __webpack_require__(92535);
const VaultProgram_2 = __webpack_require__(87552);
class WithdrawSharesFromTreasury extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, destination, transferAuthority, fractionTreasury, numberOfShares, } = params;
        const data = Vault_1.NumberOfShareArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.WithdrawSharesFromTreasury,
            numberOfShares,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionTreasury,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.WithdrawSharesFromTreasury = WithdrawSharesFromTreasury;
//# sourceMappingURL=WithdrawSharesFromTreasury.js.map

/***/ }),

/***/ 89997:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithdrawTokenFromSafetyDepositBox = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const VaultProgram_1 = __webpack_require__(87552);
const Vault_1 = __webpack_require__(92535);
const VaultProgram_2 = __webpack_require__(87552);
class WithdrawTokenFromSafetyDepositBox extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { vault, vaultAuthority, store, destination, fractionMint, transferAuthority, safetyDepositBox, amount, } = params;
        const data = Vault_1.AmountArgs.serialize({
            instruction: VaultProgram_1.VaultInstructions.WithdrawTokenFromSafetyDepositBox,
            amount,
        });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDepositBox,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: fractionMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vaultAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: VaultProgram_2.VaultProgram.PUBKEY,
            data,
        }));
    }
}
exports.WithdrawTokenFromSafetyDepositBox = WithdrawTokenFromSafetyDepositBox;
//# sourceMappingURL=WithdrawTokenFromSafetyDepositBox.js.map

/***/ }),

/***/ 55882:
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
__exportStar(__webpack_require__(28691), exports);
__exportStar(__webpack_require__(41366), exports);
__exportStar(__webpack_require__(41515), exports);
__exportStar(__webpack_require__(62118), exports);
__exportStar(__webpack_require__(25804), exports);
__exportStar(__webpack_require__(64938), exports);
__exportStar(__webpack_require__(81871), exports);
__exportStar(__webpack_require__(82677), exports);
__exportStar(__webpack_require__(57381), exports);
__exportStar(__webpack_require__(93291), exports);
__exportStar(__webpack_require__(89997), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 59339:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ })

}]);