"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[237],{

/***/ 52845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetaplexProgram = exports.MetaplexKey = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
var MetaplexKey;
(function (MetaplexKey) {
    MetaplexKey[MetaplexKey["Uninitialized"] = 0] = "Uninitialized";
    MetaplexKey[MetaplexKey["OriginalAuthorityLookupV1"] = 1] = "OriginalAuthorityLookupV1";
    MetaplexKey[MetaplexKey["BidRedemptionTicketV1"] = 2] = "BidRedemptionTicketV1";
    MetaplexKey[MetaplexKey["StoreV1"] = 3] = "StoreV1";
    MetaplexKey[MetaplexKey["WhitelistedCreatorV1"] = 4] = "WhitelistedCreatorV1";
    MetaplexKey[MetaplexKey["PayoutTicketV1"] = 5] = "PayoutTicketV1";
    MetaplexKey[MetaplexKey["SafetyDepositValidationTicketV1"] = 6] = "SafetyDepositValidationTicketV1";
    MetaplexKey[MetaplexKey["AuctionManagerV1"] = 7] = "AuctionManagerV1";
    MetaplexKey[MetaplexKey["PrizeTrackingTicketV1"] = 8] = "PrizeTrackingTicketV1";
    MetaplexKey[MetaplexKey["SafetyDepositConfigV1"] = 9] = "SafetyDepositConfigV1";
    MetaplexKey[MetaplexKey["AuctionManagerV2"] = 10] = "AuctionManagerV2";
    MetaplexKey[MetaplexKey["BidRedemptionTicketV2"] = 11] = "BidRedemptionTicketV2";
    MetaplexKey[MetaplexKey["AuctionWinnerTokenTypeTrackerV1"] = 12] = "AuctionWinnerTokenTypeTrackerV1";
    MetaplexKey[MetaplexKey["StoreIndexerV1"] = 13] = "StoreIndexerV1";
    MetaplexKey[MetaplexKey["AuctionCacheV1"] = 14] = "AuctionCacheV1";
    MetaplexKey[MetaplexKey["StoreConfigV1"] = 15] = "StoreConfigV1";
})(MetaplexKey = exports.MetaplexKey || (exports.MetaplexKey = {}));
class MetaplexProgram extends mpl_core_1.Program {
}
exports.MetaplexProgram = MetaplexProgram;
MetaplexProgram.PREFIX = 'metaplex';
MetaplexProgram.CONFIG = 'config';
MetaplexProgram.TOTALS = 'totals';
MetaplexProgram.PUBKEY = new web3_js_1.PublicKey(mpl_core_1.config.programs.metaplex);
//# sourceMappingURL=MetaplexProgram.js.map

/***/ }),

/***/ 17101:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuctionManager = exports.AuctionManagerV2Data = exports.AuctionManagerStateV2 = exports.AuctionManagerStatus = void 0;
const web3_js_1 = __webpack_require__(29948);
const bn_js_1 = __importDefault(__webpack_require__(28891));
const bs58_1 = __importDefault(__webpack_require__(91945));
const BidRedemptionTicket_1 = __webpack_require__(52287);
const MetaplexProgram_1 = __webpack_require__(52845);
const buffer_1 = __webpack_require__(15313);
const mpl_auction_1 = __webpack_require__(87017);
const mpl_core_1 = __webpack_require__(78654);
var AuctionManagerStatus;
(function (AuctionManagerStatus) {
    AuctionManagerStatus[AuctionManagerStatus["Initialized"] = 0] = "Initialized";
    AuctionManagerStatus[AuctionManagerStatus["Validated"] = 1] = "Validated";
    AuctionManagerStatus[AuctionManagerStatus["Running"] = 2] = "Running";
    AuctionManagerStatus[AuctionManagerStatus["Disbursing"] = 3] = "Disbursing";
    AuctionManagerStatus[AuctionManagerStatus["Finished"] = 4] = "Finished";
})(AuctionManagerStatus = exports.AuctionManagerStatus || (exports.AuctionManagerStatus = {}));
class AuctionManagerStateV2 extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.status = AuctionManagerStatus.Initialized;
        this.safetyConfigItemsValidated = new bn_js_1.default(0);
        this.bidsPushedToAcceptPayment = new bn_js_1.default(0);
        this.hasParticipation = false;
    }
}
exports.AuctionManagerStateV2 = AuctionManagerStateV2;
_a = AuctionManagerStateV2;
AuctionManagerStateV2.SCHEMA = _a.struct([
    ['status', 'u8'],
    ['safetyConfigItemsValidated', 'u64'],
    ['bidsPushedToAcceptPayment', 'u64'],
    ['hasParticipation', 'u8'],
]);
class AuctionManagerV2Data extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetaplexProgram_1.MetaplexKey.AuctionManagerV2;
    }
}
exports.AuctionManagerV2Data = AuctionManagerV2Data;
_b = AuctionManagerV2Data;
AuctionManagerV2Data.SCHEMA = new Map([
    ...AuctionManagerStateV2.SCHEMA,
    ..._b.struct([
        ['key', 'u8'],
        ['store', 'pubkeyAsString'],
        ['authority', 'pubkeyAsString'],
        ['auction', 'pubkeyAsString'],
        ['vault', 'pubkeyAsString'],
        ['acceptPayment', 'pubkeyAsString'],
        ['state', AuctionManagerStateV2],
    ]),
]);
class AuctionManager extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (AuctionManager.isAuctionManagerV1(this.info.data)) {
            throw (0, mpl_core_1.ERROR_DEPRECATED_ACCOUNT_DATA)();
        }
        else if (AuctionManager.isAuctionManagerV2(this.info.data)) {
            this.data = AuctionManagerV2Data.deserialize(this.info.data);
        }
        else {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
    }
    static isCompatible(data) {
        return AuctionManager.isAuctionManagerV1(data) || AuctionManager.isAuctionManagerV2(data);
    }
    static isAuctionManagerV1(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.AuctionManagerV1;
    }
    static isAuctionManagerV2(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.AuctionManagerV2;
    }
    static getPDA(auction) {
        return MetaplexProgram_1.MetaplexProgram.findProgramAddress([
            buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.PREFIX),
            new web3_js_1.PublicKey(auction).toBuffer(),
        ]);
    }
    static findMany(connection, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield MetaplexProgram_1.MetaplexProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([MetaplexProgram_1.MetaplexKey.AuctionManagerV2])),
                        },
                    },
                    filters.store && {
                        memcmp: {
                            offset: 1,
                            bytes: new web3_js_1.PublicKey(filters.store).toBase58(),
                        },
                    },
                    filters.authority && {
                        memcmp: {
                            offset: 33,
                            bytes: new web3_js_1.PublicKey(filters.authority).toBase58(),
                        },
                    },
                ].filter(Boolean),
            })).map((account) => AuctionManager.from(account));
        });
    }
    getAuction(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return mpl_auction_1.Auction.load(connection, this.data.auction);
        });
    }
    getBidRedemptionTickets(connection, haveWinnerIndex = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield MetaplexProgram_1.MetaplexProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([MetaplexProgram_1.MetaplexKey.BidRedemptionTicketV2])),
                        },
                    },
                    {
                        memcmp: {
                            offset: BidRedemptionTicket_1.WINNER_INDEX_OFFSETS[+haveWinnerIndex],
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => BidRedemptionTicket_1.BidRedemptionTicket.from(account));
        });
    }
}
exports.AuctionManager = AuctionManager;
//# sourceMappingURL=AuctionManager.js.map

/***/ }),

/***/ 43625:
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
exports.AuctionWinnerTokenTypeTracker = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const bn_js_1 = __importDefault(__webpack_require__(28891));
const buffer_1 = __webpack_require__(15313);
const MetaplexProgram_1 = __webpack_require__(52845);
class AuctionWinnerTokenTypeTracker extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!AuctionWinnerTokenTypeTracker.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.AuctionWinnerTokenTypeTrackerV1;
    }
    static getPDA(auctionManager) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetaplexProgram_1.MetaplexProgram.findProgramAddress([
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.PREFIX),
                MetaplexProgram_1.MetaplexProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(auctionManager).toBuffer(),
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.TOTALS),
            ]);
        });
    }
}
exports.AuctionWinnerTokenTypeTracker = AuctionWinnerTokenTypeTracker;
const deserialize = (buffer) => {
    const data = {
        key: MetaplexProgram_1.MetaplexKey.SafetyDepositConfigV1,
        amountType: buffer[1],
        lengthType: buffer[2],
        amountRanges: [],
    };
    const lengthOfArray = new bn_js_1.default(buffer.slice(3, 7), 'le');
    let offset = 7;
    for (let i = 0; i < lengthOfArray.toNumber(); i++) {
        const amount = (0, mpl_core_1.getBNFromData)(buffer, offset, data.amountType);
        offset += data.amountType;
        const length = (0, mpl_core_1.getBNFromData)(buffer, offset, data.lengthType);
        offset += data.lengthType;
        data.amountRanges.push({ amount, length });
    }
    return data;
};
//# sourceMappingURL=AuctionWinnerTokenTypeTracker.js.map

/***/ }),

/***/ 52287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BidRedemptionTicket = exports.WINNER_INDEX_OFFSETS = void 0;
const bn_js_1 = __importDefault(__webpack_require__(28891));
const bs58_1 = __importDefault(__webpack_require__(91945));
const MetaplexProgram_1 = __webpack_require__(52845);
const mpl_core_1 = __webpack_require__(78654);
exports.WINNER_INDEX_OFFSETS = [2, 10];
class BidRedemptionTicket extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (BidRedemptionTicket.isBidRedemptionTicketV1(this.info.data)) {
            throw (0, mpl_core_1.ERROR_DEPRECATED_ACCOUNT_DATA)();
        }
        else if (BidRedemptionTicket.isBidRedemptionTicketV2(this.info.data)) {
            const data = this.info.data.toJSON().data;
            const winnerIndex = data[1] !== 0 && new bn_js_1.default(data.slice(1, 9), 'le');
            const offset = exports.WINNER_INDEX_OFFSETS[+!!winnerIndex];
            this.data = {
                key: MetaplexProgram_1.MetaplexKey.BidRedemptionTicketV2,
                winnerIndex,
                data,
                auctionManager: bs58_1.default.encode(data.slice(offset, offset + 32)),
            };
        }
        else {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
    }
    static isCompatible(data) {
        return (BidRedemptionTicket.isBidRedemptionTicketV1(data) ||
            BidRedemptionTicket.isBidRedemptionTicketV2(data));
    }
    static isBidRedemptionTicketV1(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.BidRedemptionTicketV1;
    }
    static isBidRedemptionTicketV2(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.BidRedemptionTicketV2;
    }
}
exports.BidRedemptionTicket = BidRedemptionTicket;
//# sourceMappingURL=BidRedemptionTicket.js.map

/***/ }),

/***/ 16734:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayoutTicket = exports.PayoutTicketData = void 0;
const web3_js_1 = __webpack_require__(29948);
const bs58_1 = __importDefault(__webpack_require__(91945));
const mpl_core_1 = __webpack_require__(78654);
const MetaplexProgram_1 = __webpack_require__(52845);
const buffer_1 = __webpack_require__(15313);
class PayoutTicketData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetaplexProgram_1.MetaplexKey.PayoutTicketV1;
    }
}
exports.PayoutTicketData = PayoutTicketData;
_a = PayoutTicketData;
PayoutTicketData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['recipient', 'pubkeyAsString'],
    ['amountPaid', 'u64'],
]);
class PayoutTicket extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!PayoutTicket.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = PayoutTicketData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.PayoutTicketV1;
    }
    static getPayoutTicketsByRecipient(connection, recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield MetaplexProgram_1.MetaplexProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([MetaplexProgram_1.MetaplexKey.PayoutTicketV1])),
                        },
                    },
                    {
                        memcmp: {
                            offset: 1,
                            bytes: new web3_js_1.PublicKey(recipient).toBase58(),
                        },
                    },
                ],
            })).map((account) => PayoutTicket.from(account));
        });
    }
}
exports.PayoutTicket = PayoutTicket;
//# sourceMappingURL=PayoutTicket.js.map

/***/ }),

/***/ 48786:
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
exports.PrizeTrackingTicket = exports.PrizeTrackingTicketData = void 0;
const web3_js_1 = __webpack_require__(29948);
const mpl_core_1 = __webpack_require__(78654);
const MetaplexProgram_1 = __webpack_require__(52845);
const buffer_1 = __webpack_require__(15313);
class PrizeTrackingTicketData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetaplexProgram_1.MetaplexKey.PrizeTrackingTicketV1;
        this.key = MetaplexProgram_1.MetaplexKey.PrizeTrackingTicketV1;
    }
}
exports.PrizeTrackingTicketData = PrizeTrackingTicketData;
_a = PrizeTrackingTicketData;
PrizeTrackingTicketData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['metadata', 'pubkeyAsString'],
    ['supplySnapshot', 'u64'],
    ['expectedRedemptions', 'u64'],
    ['redemptions', 'u64'],
]);
class PrizeTrackingTicket extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!PrizeTrackingTicket.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = PrizeTrackingTicketData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.PrizeTrackingTicketV1;
    }
    static getPDA(auctionManager, mint) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetaplexProgram_1.MetaplexProgram.findProgramAddress([
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.PREFIX),
                MetaplexProgram_1.MetaplexProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(auctionManager).toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
            ]);
        });
    }
}
exports.PrizeTrackingTicket = PrizeTrackingTicket;
//# sourceMappingURL=PrizeTrackingTicket.js.map

/***/ }),

/***/ 40232:
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
exports.SafetyDepositConfig = exports.NonWinningConstraint = exports.WinningConstraint = exports.WinningConfigType = void 0;
const web3_js_1 = __webpack_require__(29948);
const bn_js_1 = __importDefault(__webpack_require__(28891));
const bs58_1 = __importDefault(__webpack_require__(91945));
const mpl_core_1 = __webpack_require__(78654);
const MetaplexProgram_1 = __webpack_require__(52845);
const buffer_1 = __webpack_require__(15313);
var WinningConfigType;
(function (WinningConfigType) {
    WinningConfigType[WinningConfigType["TokenOnlyTransfer"] = 0] = "TokenOnlyTransfer";
    WinningConfigType[WinningConfigType["FullRightsTransfer"] = 1] = "FullRightsTransfer";
    WinningConfigType[WinningConfigType["PrintingV1"] = 2] = "PrintingV1";
    WinningConfigType[WinningConfigType["PrintingV2"] = 3] = "PrintingV2";
    WinningConfigType[WinningConfigType["Participation"] = 4] = "Participation";
})(WinningConfigType = exports.WinningConfigType || (exports.WinningConfigType = {}));
var WinningConstraint;
(function (WinningConstraint) {
    WinningConstraint[WinningConstraint["NoParticipationPrize"] = 0] = "NoParticipationPrize";
    WinningConstraint[WinningConstraint["ParticipationPrizeGiven"] = 1] = "ParticipationPrizeGiven";
})(WinningConstraint = exports.WinningConstraint || (exports.WinningConstraint = {}));
var NonWinningConstraint;
(function (NonWinningConstraint) {
    NonWinningConstraint[NonWinningConstraint["NoParticipationPrize"] = 0] = "NoParticipationPrize";
    NonWinningConstraint[NonWinningConstraint["GivenForFixedPrice"] = 1] = "GivenForFixedPrice";
    NonWinningConstraint[NonWinningConstraint["GivenForBidPrice"] = 2] = "GivenForBidPrice";
})(NonWinningConstraint = exports.NonWinningConstraint || (exports.NonWinningConstraint = {}));
class SafetyDepositConfig extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!SafetyDepositConfig.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.SafetyDepositConfigV1;
    }
    static getPDA(auctionManager, safetyDeposit) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetaplexProgram_1.MetaplexProgram.findProgramAddress([
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.PREFIX),
                MetaplexProgram_1.MetaplexProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(auctionManager).toBuffer(),
                new web3_js_1.PublicKey(safetyDeposit).toBuffer(),
            ]);
        });
    }
}
exports.SafetyDepositConfig = SafetyDepositConfig;
const deserialize = (buffer) => {
    const data = {
        key: MetaplexProgram_1.MetaplexKey.SafetyDepositConfigV1,
        auctionManager: bs58_1.default.encode(buffer.slice(1, 33)),
        order: new bn_js_1.default(buffer.slice(33, 41), 'le'),
        winningConfigType: buffer[41],
        amountType: buffer[42],
        lengthType: buffer[43],
        amountRanges: [],
        participationConfig: null,
        participationState: null,
    };
    const lengthOfArray = new bn_js_1.default(buffer.slice(44, 48), 'le');
    let offset = 48;
    for (let i = 0; i < lengthOfArray.toNumber(); i++) {
        const amount = (0, mpl_core_1.getBNFromData)(buffer, offset, data.amountType);
        offset += data.amountType;
        const length = (0, mpl_core_1.getBNFromData)(buffer, offset, data.lengthType);
        offset += data.lengthType;
        data.amountRanges.push({ amount, length });
    }
    if (buffer[offset] == 0) {
        offset += 1;
        data.participationConfig = null;
    }
    else {
        const winnerConstraint = buffer[offset + 1];
        const nonWinningConstraint = buffer[offset + 2];
        let fixedPrice = null;
        offset += 3;
        if (buffer[offset] == 1) {
            fixedPrice = new bn_js_1.default(buffer.slice(offset + 1, offset + 9), 'le');
            offset += 9;
        }
        else {
            offset += 1;
        }
        data.participationConfig = {
            winnerConstraint,
            nonWinningConstraint,
            fixedPrice,
        };
    }
    if (buffer[offset] == 0) {
        offset += 1;
        data.participationState = null;
    }
    else {
        const collectedToAcceptPayment = new bn_js_1.default(buffer.slice(offset + 1, offset + 9), 'le');
        offset += 9;
        data.participationState = {
            collectedToAcceptPayment,
        };
    }
    return data;
};
//# sourceMappingURL=SafetyDepositConfig.js.map

/***/ }),

/***/ 14867:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Store = exports.StoreData = void 0;
const mpl_core_1 = __webpack_require__(78654);
const MetaplexProgram_1 = __webpack_require__(52845);
const web3_js_1 = __webpack_require__(29948);
const bs58_1 = __importDefault(__webpack_require__(91945));
const WhitelistedCreator_1 = __webpack_require__(55918);
const AuctionManager_1 = __webpack_require__(17101);
const buffer_1 = __webpack_require__(15313);
class StoreData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetaplexProgram_1.MetaplexKey.StoreV1;
        this.public = true;
        this.key = MetaplexProgram_1.MetaplexKey.StoreV1;
    }
}
exports.StoreData = StoreData;
_a = StoreData;
StoreData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['public', 'u8'],
    ['auctionProgram', 'pubkeyAsString'],
    ['tokenVaultProgram', 'pubkeyAsString'],
    ['tokenMetadataProgram', 'pubkeyAsString'],
    ['tokenProgram', 'pubkeyAsString'],
]);
class Store extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!Store.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = StoreData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.StoreV1;
    }
    static getPDA(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetaplexProgram_1.MetaplexProgram.findProgramAddress([
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.PREFIX),
                MetaplexProgram_1.MetaplexProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(owner).toBuffer(),
            ]);
        });
    }
    getWhitelistedCreators(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield MetaplexProgram_1.MetaplexProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([MetaplexProgram_1.MetaplexKey.WhitelistedCreatorV1])),
                        },
                    },
                ],
            })).map((account) => WhitelistedCreator_1.WhitelistedCreator.from(account));
        });
    }
    getAuctionManagers(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield MetaplexProgram_1.MetaplexProgram.getProgramAccounts(connection, {
                filters: [
                    {
                        memcmp: {
                            offset: 0,
                            bytes: bs58_1.default.encode(buffer_1.Buffer.from([MetaplexProgram_1.MetaplexKey.AuctionManagerV2])),
                        },
                    },
                    {
                        memcmp: {
                            offset: 1,
                            bytes: this.pubkey.toBase58(),
                        },
                    },
                ],
            })).map((account) => AuctionManager_1.AuctionManager.from(account));
        });
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map

/***/ }),

/***/ 79509:
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
exports.StoreConfig = exports.StoreConfigData = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const buffer_1 = __webpack_require__(15313);
const MetaplexProgram_1 = __webpack_require__(52845);
class StoreConfigData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetaplexProgram_1.MetaplexKey.StoreConfigV1;
        this.key = MetaplexProgram_1.MetaplexKey.StoreConfigV1;
    }
}
exports.StoreConfigData = StoreConfigData;
_a = StoreConfigData;
StoreConfigData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['settingsUri', { kind: 'option', type: 'string' }],
]);
class StoreConfig extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!StoreConfig.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = StoreConfigData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.StoreConfigV1;
    }
    static getPDA(store) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetaplexProgram_1.MetaplexProgram.findProgramAddress([
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.PREFIX),
                MetaplexProgram_1.MetaplexProgram.PUBKEY.toBuffer(),
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.CONFIG),
                new web3_js_1.PublicKey(store).toBuffer(),
            ]);
        });
    }
}
exports.StoreConfig = StoreConfig;
//# sourceMappingURL=StoreConfig.js.map

/***/ }),

/***/ 55918:
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
exports.WhitelistedCreator = exports.WhitelistedCreatorData = void 0;
const mpl_core_1 = __webpack_require__(78654);
const MetaplexProgram_1 = __webpack_require__(52845);
const buffer_1 = __webpack_require__(15313);
const web3_js_1 = __webpack_require__(29948);
class WhitelistedCreatorData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = MetaplexProgram_1.MetaplexKey.WhitelistedCreatorV1;
        this.activated = true;
        this.key = MetaplexProgram_1.MetaplexKey.WhitelistedCreatorV1;
    }
}
exports.WhitelistedCreatorData = WhitelistedCreatorData;
_a = WhitelistedCreatorData;
WhitelistedCreatorData.SCHEMA = _a.struct([
    ['key', 'u8'],
    ['address', 'pubkeyAsString'],
    ['activated', 'u8'],
]);
class WhitelistedCreator extends mpl_core_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(MetaplexProgram_1.MetaplexProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!WhitelistedCreator.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = WhitelistedCreatorData.deserialize(this.info.data);
    }
    static isCompatible(data) {
        return data[0] === MetaplexProgram_1.MetaplexKey.WhitelistedCreatorV1;
    }
    static getPDA(store, creator) {
        return __awaiter(this, void 0, void 0, function* () {
            return MetaplexProgram_1.MetaplexProgram.findProgramAddress([
                buffer_1.Buffer.from(MetaplexProgram_1.MetaplexProgram.PREFIX),
                MetaplexProgram_1.MetaplexProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(store).toBuffer(),
                new web3_js_1.PublicKey(creator).toBuffer(),
            ]);
        });
    }
}
exports.WhitelistedCreator = WhitelistedCreator;
//# sourceMappingURL=WhitelistedCreator.js.map

/***/ }),

/***/ 31044:
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
__exportStar(__webpack_require__(17101), exports);
__exportStar(__webpack_require__(52287), exports);
__exportStar(__webpack_require__(16734), exports);
__exportStar(__webpack_require__(48786), exports);
__exportStar(__webpack_require__(40232), exports);
__exportStar(__webpack_require__(14867), exports);
__exportStar(__webpack_require__(79509), exports);
__exportStar(__webpack_require__(55918), exports);
__exportStar(__webpack_require__(43625), exports);
__exportStar(__webpack_require__(52845), exports);
__exportStar(__webpack_require__(27768), exports);
//# sourceMappingURL=mpl-metaplex.js.map

/***/ }),

/***/ 94602:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClaimBid = exports.ClaimBidArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const mpl_auction_1 = __webpack_require__(87017);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const MetaplexProgram_1 = __webpack_require__(52845);
class ClaimBidArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 6;
    }
}
exports.ClaimBidArgs = ClaimBidArgs;
_a = ClaimBidArgs;
ClaimBidArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class ClaimBid extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { store, vault, auction, auctionExtended, auctionManager, bidder, bidderPot, bidderPotToken, acceptPayment, tokenMint, } = params;
        const data = ClaimBidArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: acceptPayment,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderPotToken,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidderPot,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidder,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: tokenMint,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_auction_1.AuctionProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.ClaimBid = ClaimBid;
//# sourceMappingURL=ClaimBid.js.map

/***/ }),

/***/ 74289:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndAuction = exports.EndAuctionArgs = void 0;
const bn_js_1 = __importDefault(__webpack_require__(28891));
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const mpl_auction_1 = __webpack_require__(87017);
const MetaplexProgram_1 = __webpack_require__(52845);
class EndAuctionArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 20;
    }
}
exports.EndAuctionArgs = EndAuctionArgs;
_a = EndAuctionArgs;
EndAuctionArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['reveal', { kind: 'option', type: [bn_js_1.default, bn_js_1.default] }],
]);
class EndAuction extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { store, auction, auctionExtended, auctionManager, auctionManagerAuthority, reveal = null, } = params;
        const data = EndAuctionArgs.serialize({ reveal });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auctionManagerAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_auction_1.AuctionProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.EndAuction = EndAuction;
//# sourceMappingURL=EndAuction.js.map

/***/ }),

/***/ 97544:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitAuctionManagerV2 = exports.InitAuctionManagerV2Args = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const bn_js_1 = __importDefault(__webpack_require__(28891));
const MetaplexProgram_1 = __webpack_require__(52845);
class InitAuctionManagerV2Args extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 17;
        this.amountType = mpl_core_1.TupleNumericType.U8;
        this.lengthType = mpl_core_1.TupleNumericType.U8;
        this.maxRanges = new bn_js_1.default(1);
    }
}
exports.InitAuctionManagerV2Args = InitAuctionManagerV2Args;
_a = InitAuctionManagerV2Args;
InitAuctionManagerV2Args.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['amountType', 'u8'],
    ['lengthType', 'u8'],
    ['maxRanges', 'u64'],
]);
class InitAuctionManagerV2 extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { store, vault, auction, auctionManager, auctionManagerAuthority, acceptPaymentAccount, tokenTracker, amountType, lengthType, maxRanges, } = params;
        const data = InitAuctionManagerV2Args.serialize({ amountType, lengthType, maxRanges });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenTracker,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auctionManagerAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: acceptPaymentAccount,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.InitAuctionManagerV2 = InitAuctionManagerV2;
//# sourceMappingURL=InitAuctionManagerV2.js.map

/***/ }),

/***/ 73701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedeemBid = exports.RedeemUnusedWinningConfigItemsAsAuctioneerArgs = exports.ProxyCallAddress = exports.RedeemBidArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const mpl_token_metadata_1 = __webpack_require__(65007);
const mpl_token_vault_1 = __webpack_require__(17945);
const MetaplexProgram_1 = __webpack_require__(52845);
class RedeemBidArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 2;
    }
}
exports.RedeemBidArgs = RedeemBidArgs;
_a = RedeemBidArgs;
RedeemBidArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
var ProxyCallAddress;
(function (ProxyCallAddress) {
    ProxyCallAddress[ProxyCallAddress["RedeemBid"] = 0] = "RedeemBid";
    ProxyCallAddress[ProxyCallAddress["RedeemFullRightsTransferBid"] = 1] = "RedeemFullRightsTransferBid";
})(ProxyCallAddress = exports.ProxyCallAddress || (exports.ProxyCallAddress = {}));
class RedeemUnusedWinningConfigItemsAsAuctioneerArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 12;
    }
}
exports.RedeemUnusedWinningConfigItemsAsAuctioneerArgs = RedeemUnusedWinningConfigItemsAsAuctioneerArgs;
_b = RedeemUnusedWinningConfigItemsAsAuctioneerArgs;
RedeemUnusedWinningConfigItemsAsAuctioneerArgs.SCHEMA = _b.struct([
    ['instruction', 'u8'],
    ['winningConfigItemIndex', 'u8'],
    ['proxyCall', 'u8'],
]);
class RedeemBid extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { store, vault, auction, auctionExtended, auctionManager, bidRedemption, bidderMeta: bidMetadata, safetyDepositTokenStore, destination, safetyDeposit, fractionMint, bidder, isPrintingType, safetyDepositConfig, transferAuthority, masterEdition, reservationList, auctioneerReclaimIndex, } = params;
        const data = auctioneerReclaimIndex
            ? RedeemUnusedWinningConfigItemsAsAuctioneerArgs.serialize({
                winningConfigItemIndex: auctioneerReclaimIndex,
                proxyCall: ProxyCallAddress.RedeemBid,
            })
            : RedeemBidArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDepositTokenStore,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidRedemption,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDeposit,
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
                    pubkey: auction,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidMetadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidder,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_vault_1.VaultProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_metadata_1.MetadataProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: safetyDepositConfig,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: false,
                },
                ...(isPrintingType && masterEdition && reservationList
                    ? [
                        {
                            pubkey: masterEdition,
                            isSigner: false,
                            isWritable: true,
                        },
                        {
                            pubkey: reservationList,
                            isSigner: false,
                            isWritable: true,
                        },
                    ]
                    : []),
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.RedeemBid = RedeemBid;
//# sourceMappingURL=RedeemBid.js.map

/***/ }),

/***/ 30048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedeemFullRightsTransferBid = exports.RedeemFullRightsTransferBidArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const mpl_token_metadata_1 = __webpack_require__(65007);
const mpl_token_vault_1 = __webpack_require__(17945);
const MetaplexProgram_1 = __webpack_require__(52845);
const RedeemBid_1 = __webpack_require__(73701);
class RedeemFullRightsTransferBidArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 3;
    }
}
exports.RedeemFullRightsTransferBidArgs = RedeemFullRightsTransferBidArgs;
_a = RedeemFullRightsTransferBidArgs;
RedeemFullRightsTransferBidArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class RedeemFullRightsTransferBid extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { store, vault, auction, auctionExtended, auctionManager, bidRedemption, bidMetadata, safetyDepositTokenStore, destination, safetyDeposit, fractionMint, bidder, safetyDepositConfig, transferAuthority, masterMetadata, newAuthority, auctioneerReclaimIndex, } = params;
        const data = auctioneerReclaimIndex
            ? RedeemBid_1.RedeemUnusedWinningConfigItemsAsAuctioneerArgs.serialize({
                winningConfigItemIndex: auctioneerReclaimIndex,
                proxyCall: RedeemBid_1.ProxyCallAddress.RedeemFullRightsTransferBid,
            })
            : RedeemFullRightsTransferBidArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDepositTokenStore,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidRedemption,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDeposit,
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
                    pubkey: auction,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidMetadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidder,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_vault_1.VaultProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_metadata_1.MetadataProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: masterMetadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: safetyDepositConfig,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.RedeemFullRightsTransferBid = RedeemFullRightsTransferBid;
//# sourceMappingURL=RedeemFullRightsTransferBid.js.map

/***/ }),

/***/ 26897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedeemParticipationBidV3 = exports.RedeemParticipationBidV3Args = void 0;
const mpl_core_1 = __webpack_require__(78654);
const mpl_token_metadata_1 = __webpack_require__(65007);
const mpl_token_vault_1 = __webpack_require__(17945);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const MetaplexProgram_1 = __webpack_require__(52845);
class RedeemParticipationBidV3Args extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 19;
    }
}
exports.RedeemParticipationBidV3Args = RedeemParticipationBidV3Args;
_a = RedeemParticipationBidV3Args;
RedeemParticipationBidV3Args.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['winIndex', { kind: 'option', type: 'u64' }],
]);
class RedeemParticipationBidV3 extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { store, vault, auction, auctionExtended, auctionManager, bidRedemption, bidMetadata, safetyDepositTokenStore, destination, safetyDeposit, bidder, safetyDepositConfig, metadata, prizeTrackingTicket, newMetadata, newEdition, masterEdition, newMint, editionMark, winIndex, transferAuthority, acceptPaymentAccount, tokenPaymentAccount, } = params;
        const data = RedeemParticipationBidV3Args.serialize({ winIndex });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDepositTokenStore,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidRedemption,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDeposit,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: safetyDepositConfig,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidMetadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidder,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: true,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_vault_1.VaultProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_metadata_1.MetadataProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: transferAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: acceptPaymentAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: tokenPaymentAccount,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: prizeTrackingTicket,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newMetadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newEdition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: masterEdition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: editionMark,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.RedeemParticipationBidV3 = RedeemParticipationBidV3;
//# sourceMappingURL=RedeemParticipationBidV3.js.map

/***/ }),

/***/ 56285:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedeemPrintingV2Bid = exports.RedeemPrintingV2BidArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const mpl_token_vault_1 = __webpack_require__(17945);
const mpl_token_metadata_1 = __webpack_require__(65007);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const MetaplexProgram_1 = __webpack_require__(52845);
class RedeemPrintingV2BidArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 14;
    }
}
exports.RedeemPrintingV2BidArgs = RedeemPrintingV2BidArgs;
_a = RedeemPrintingV2BidArgs;
RedeemPrintingV2BidArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['editionOffset', 'u64'],
    ['winIndex', 'u64'],
]);
class RedeemPrintingV2Bid extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { store, vault, auction, auctionExtended, auctionManager, bidRedemption, bidMetadata, safetyDepositTokenStore, destination, safetyDeposit, bidder, safetyDepositConfig, metadata, prizeTrackingTicket, newMetadata, newEdition, masterEdition, newMint, editionMark, winIndex, editionOffset, } = params;
        const data = RedeemPrintingV2BidArgs.serialize({ winIndex, editionOffset });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDepositTokenStore,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: destination,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: bidRedemption,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDeposit,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: vault,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: safetyDepositConfig,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidMetadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: bidder,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: true,
                },
                {
                    pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_vault_1.VaultProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_metadata_1.MetadataProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: prizeTrackingTicket,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newMetadata,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newEdition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: masterEdition,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: newMint,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: editionMark,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: metadata,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: auctionExtended,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.RedeemPrintingV2Bid = RedeemPrintingV2Bid;
//# sourceMappingURL=RedeemPrintingV2Bid.js.map

/***/ }),

/***/ 47505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetStore = exports.SetStoreArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const mpl_token_metadata_1 = __webpack_require__(65007);
const mpl_token_vault_1 = __webpack_require__(17945);
const mpl_auction_1 = __webpack_require__(87017);
const MetaplexProgram_1 = __webpack_require__(52845);
class SetStoreArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 8;
    }
}
exports.SetStoreArgs = SetStoreArgs;
_a = SetStoreArgs;
SetStoreArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['public', 'u8'],
]);
class SetStore extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { admin, store, isPublic } = params;
        const data = SetStoreArgs.serialize({ public: isPublic });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: admin,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                { pubkey: spl_token_1.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
                {
                    pubkey: mpl_token_vault_1.VaultProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_metadata_1.MetadataProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_auction_1.AuctionProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.SetStore = SetStore;
//# sourceMappingURL=SetStore.js.map

/***/ }),

/***/ 53483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetStoreV2 = exports.SetStoreV2Args = void 0;
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
const mpl_core_1 = __webpack_require__(78654);
const mpl_token_vault_1 = __webpack_require__(17945);
const mpl_token_metadata_1 = __webpack_require__(65007);
const mpl_auction_1 = __webpack_require__(87017);
const MetaplexProgram_1 = __webpack_require__(52845);
class SetStoreV2Args extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 23;
    }
}
exports.SetStoreV2Args = SetStoreV2Args;
_a = SetStoreV2Args;
SetStoreV2Args.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['public', 'u8'],
    ['settingsUri', { kind: 'option', type: 'string' }],
]);
class SetStoreV2 extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { admin, store, config, isPublic, settingsUri } = params;
        const data = SetStoreV2Args.serialize({ public: isPublic, settingsUri });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: config,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: admin,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                { pubkey: spl_token_1.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
                {
                    pubkey: mpl_token_vault_1.VaultProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_token_metadata_1.MetadataProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_auction_1.AuctionProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.SetStoreV2 = SetStoreV2;
//# sourceMappingURL=SetStoreV2.js.map

/***/ }),

/***/ 14622:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetWhitelistedCreator = exports.SetWhitelistedCreatorArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const MetaplexProgram_1 = __webpack_require__(52845);
class SetWhitelistedCreatorArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 9;
    }
}
exports.SetWhitelistedCreatorArgs = SetWhitelistedCreatorArgs;
_a = SetWhitelistedCreatorArgs;
SetWhitelistedCreatorArgs.SCHEMA = _a.struct([
    ['instruction', 'u8'],
    ['activated', 'u8'],
]);
class SetWhitelistedCreator extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { feePayer } = options;
        const { admin, whitelistedCreatorPDA, store, creator, activated } = params;
        const data = SetWhitelistedCreatorArgs.serialize({ activated });
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: whitelistedCreatorPDA,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: admin,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: feePayer,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: creator,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.SetWhitelistedCreator = SetWhitelistedCreator;
//# sourceMappingURL=SetWhitelistedCreator.js.map

/***/ }),

/***/ 48316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartAuction = exports.StartAuctionArgs = void 0;
const mpl_core_1 = __webpack_require__(78654);
const web3_js_1 = __webpack_require__(29948);
const mpl_auction_1 = __webpack_require__(87017);
const MetaplexProgram_1 = __webpack_require__(52845);
class StartAuctionArgs extends mpl_core_1.Borsh.Data {
    constructor() {
        super(...arguments);
        this.instruction = 5;
    }
}
exports.StartAuctionArgs = StartAuctionArgs;
_a = StartAuctionArgs;
StartAuctionArgs.SCHEMA = _a.struct([['instruction', 'u8']]);
class StartAuction extends mpl_core_1.Transaction {
    constructor(options, params) {
        super(options);
        const { store, auction, auctionManager, auctionManagerAuthority } = params;
        const data = StartAuctionArgs.serialize();
        this.add(new web3_js_1.TransactionInstruction({
            keys: [
                {
                    pubkey: auctionManager,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auction,
                    isSigner: false,
                    isWritable: true,
                },
                {
                    pubkey: auctionManagerAuthority,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: store,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: mpl_auction_1.AuctionProgram.PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false,
                },
            ],
            programId: MetaplexProgram_1.MetaplexProgram.PUBKEY,
            data,
        }));
    }
}
exports.StartAuction = StartAuction;
//# sourceMappingURL=StartAuction.js.map

/***/ }),

/***/ 27768:
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
__exportStar(__webpack_require__(94602), exports);
__exportStar(__webpack_require__(74289), exports);
__exportStar(__webpack_require__(97544), exports);
__exportStar(__webpack_require__(73701), exports);
__exportStar(__webpack_require__(30048), exports);
__exportStar(__webpack_require__(56285), exports);
__exportStar(__webpack_require__(47505), exports);
__exportStar(__webpack_require__(53483), exports);
__exportStar(__webpack_require__(14622), exports);
__exportStar(__webpack_require__(48316), exports);
__exportStar(__webpack_require__(26897), exports);
//# sourceMappingURL=index.js.map

/***/ })

}]);