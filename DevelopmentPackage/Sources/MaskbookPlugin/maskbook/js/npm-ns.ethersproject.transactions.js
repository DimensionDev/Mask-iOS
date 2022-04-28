"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1851],{

/***/ 21190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z7": () => (/* binding */ accessListify),
  "db": () => (/* binding */ computeAddress),
  "Qc": () => (/* binding */ parse)
});

// UNUSED EXPORTS: TransactionTypes, recoverAddress, serialize

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+address@5.4.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(99747);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.4.1/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js + 1 modules
var bignumber = __webpack_require__(84757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.5.0/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var bytes_lib_esm = __webpack_require__(61115);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(98648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+keccak256@5.4.0/node_modules/@ethersproject/keccak256/lib.esm/index.js
var keccak256_lib_esm = __webpack_require__(69614);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+rlp@5.4.0/node_modules/@ethersproject/rlp/lib.esm/index.js + 1 modules
var rlp_lib_esm = __webpack_require__(55286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+signing-key@5.4.0/node_modules/@ethersproject/signing-key/lib.esm/index.js + 2 modules
var signing_key_lib_esm = __webpack_require__(37514);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.4.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(281);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+transactions@5.4.0/node_modules/@ethersproject/transactions/lib.esm/_version.js
const version = "transactions/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+transactions@5.4.0/node_modules/@ethersproject/transactions/lib.esm/index.js











const logger = new logger_lib_esm/* Logger */.Yd(version);
var TransactionTypes;
(function (TransactionTypes) {
    TransactionTypes[TransactionTypes["legacy"] = 0] = "legacy";
    TransactionTypes[TransactionTypes["eip2930"] = 1] = "eip2930";
    TransactionTypes[TransactionTypes["eip1559"] = 2] = "eip1559";
})(TransactionTypes || (TransactionTypes = {}));
;
///////////////////////////////
function handleAddress(value) {
    if (value === "0x") {
        return null;
    }
    return (0,lib_esm.getAddress)(value);
}
function handleNumber(value) {
    if (value === "0x") {
        return bignumbers/* Zero */._Y;
    }
    return bignumber/* BigNumber.from */.O$.from(value);
}
// Legacy Transaction Fields
const transactionFields = [
    { name: "nonce", maxLength: 32, numeric: true },
    { name: "gasPrice", maxLength: 32, numeric: true },
    { name: "gasLimit", maxLength: 32, numeric: true },
    { name: "to", length: 20 },
    { name: "value", maxLength: 32, numeric: true },
    { name: "data" },
];
const allowedTransactionKeys = {
    chainId: true, data: true, gasLimit: true, gasPrice: true, nonce: true, to: true, type: true, value: true
};
function computeAddress(key) {
    const publicKey = (0,signing_key_lib_esm/* computePublicKey */.VW)(key);
    return (0,lib_esm.getAddress)((0,bytes_lib_esm/* hexDataSlice */.p3)((0,keccak256_lib_esm/* keccak256 */.w)((0,bytes_lib_esm/* hexDataSlice */.p3)(publicKey, 1)), 12));
}
function recoverAddress(digest, signature) {
    return computeAddress((0,signing_key_lib_esm/* recoverPublicKey */.LO)((0,bytes_lib_esm/* arrayify */.lE)(digest), signature));
}
function formatNumber(value, name) {
    const result = (0,bytes_lib_esm/* stripZeros */.G1)(bignumber/* BigNumber.from */.O$.from(value).toHexString());
    if (result.length > 32) {
        logger.throwArgumentError("invalid length for " + name, ("transaction:" + name), value);
    }
    return result;
}
function accessSetify(addr, storageKeys) {
    return {
        address: (0,lib_esm.getAddress)(addr),
        storageKeys: (storageKeys || []).map((storageKey, index) => {
            if ((0,bytes_lib_esm/* hexDataLength */.E1)(storageKey) !== 32) {
                logger.throwArgumentError("invalid access list storageKey", `accessList[${addr}:${index}]`, storageKey);
            }
            return storageKey.toLowerCase();
        })
    };
}
function accessListify(value) {
    if (Array.isArray(value)) {
        return value.map((set, index) => {
            if (Array.isArray(set)) {
                if (set.length > 2) {
                    logger.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${index}]`, set);
                }
                return accessSetify(set[0], set[1]);
            }
            return accessSetify(set.address, set.storageKeys);
        });
    }
    const result = Object.keys(value).map((addr) => {
        const storageKeys = value[addr].reduce((accum, storageKey) => {
            accum[storageKey] = true;
            return accum;
        }, {});
        return accessSetify(addr, Object.keys(storageKeys).sort());
    });
    result.sort((a, b) => (a.address.localeCompare(b.address)));
    return result;
}
function formatAccessList(value) {
    return accessListify(value).map((set) => [set.address, set.storageKeys]);
}
function _serializeEip1559(transaction, signature) {
    // If there is an explicit gasPrice, make sure it matches the
    // EIP-1559 fees; otherwise they may not understand what they
    // think they are setting in terms of fee.
    if (transaction.gasPrice != null) {
        const gasPrice = bignumber/* BigNumber.from */.O$.from(transaction.gasPrice);
        const maxFeePerGas = bignumber/* BigNumber.from */.O$.from(transaction.maxFeePerGas || 0);
        if (!gasPrice.eq(maxFeePerGas)) {
            logger.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                gasPrice, maxFeePerGas
            });
        }
    }
    const fields = [
        formatNumber(transaction.chainId || 0, "chainId"),
        formatNumber(transaction.nonce || 0, "nonce"),
        formatNumber(transaction.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
        formatNumber(transaction.maxFeePerGas || 0, "maxFeePerGas"),
        formatNumber(transaction.gasLimit || 0, "gasLimit"),
        ((transaction.to != null) ? (0,lib_esm.getAddress)(transaction.to) : "0x"),
        formatNumber(transaction.value || 0, "value"),
        (transaction.data || "0x"),
        (formatAccessList(transaction.accessList || []))
    ];
    if (signature) {
        const sig = (0,bytes_lib_esm/* splitSignature */.N)(signature);
        fields.push(formatNumber(sig.recoveryParam, "recoveryParam"));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.r));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.s));
    }
    return (0,bytes_lib_esm/* hexConcat */.xs)(["0x02", rlp_lib_esm/* encode */.c(fields)]);
}
function _serializeEip2930(transaction, signature) {
    const fields = [
        formatNumber(transaction.chainId || 0, "chainId"),
        formatNumber(transaction.nonce || 0, "nonce"),
        formatNumber(transaction.gasPrice || 0, "gasPrice"),
        formatNumber(transaction.gasLimit || 0, "gasLimit"),
        ((transaction.to != null) ? (0,lib_esm.getAddress)(transaction.to) : "0x"),
        formatNumber(transaction.value || 0, "value"),
        (transaction.data || "0x"),
        (formatAccessList(transaction.accessList || []))
    ];
    if (signature) {
        const sig = (0,bytes_lib_esm/* splitSignature */.N)(signature);
        fields.push(formatNumber(sig.recoveryParam, "recoveryParam"));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.r));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.s));
    }
    return (0,bytes_lib_esm/* hexConcat */.xs)(["0x01", rlp_lib_esm/* encode */.c(fields)]);
}
// Legacy Transactions and EIP-155
function _serialize(transaction, signature) {
    checkProperties(transaction, allowedTransactionKeys);
    const raw = [];
    transactionFields.forEach(function (fieldInfo) {
        let value = transaction[fieldInfo.name] || ([]);
        const options = {};
        if (fieldInfo.numeric) {
            options.hexPad = "left";
        }
        value = arrayify(hexlify(value, options));
        // Fixed-width field
        if (fieldInfo.length && value.length !== fieldInfo.length && value.length > 0) {
            logger.throwArgumentError("invalid length for " + fieldInfo.name, ("transaction:" + fieldInfo.name), value);
        }
        // Variable-width (with a maximum)
        if (fieldInfo.maxLength) {
            value = stripZeros(value);
            if (value.length > fieldInfo.maxLength) {
                logger.throwArgumentError("invalid length for " + fieldInfo.name, ("transaction:" + fieldInfo.name), value);
            }
        }
        raw.push(hexlify(value));
    });
    let chainId = 0;
    if (transaction.chainId != null) {
        // A chainId was provided; if non-zero we'll use EIP-155
        chainId = transaction.chainId;
        if (typeof (chainId) !== "number") {
            logger.throwArgumentError("invalid transaction.chainId", "transaction", transaction);
        }
    }
    else if (signature && !isBytesLike(signature) && signature.v > 28) {
        // No chainId provided, but the signature is signing with EIP-155; derive chainId
        chainId = Math.floor((signature.v - 35) / 2);
    }
    // We have an EIP-155 transaction (chainId was specified and non-zero)
    if (chainId !== 0) {
        raw.push(hexlify(chainId)); // @TODO: hexValue?
        raw.push("0x");
        raw.push("0x");
    }
    // Requesting an unsigned transation
    if (!signature) {
        return RLP.encode(raw);
    }
    // The splitSignature will ensure the transaction has a recoveryParam in the
    // case that the signTransaction function only adds a v.
    const sig = splitSignature(signature);
    // We pushed a chainId and null r, s on for hashing only; remove those
    let v = 27 + sig.recoveryParam;
    if (chainId !== 0) {
        raw.pop();
        raw.pop();
        raw.pop();
        v += chainId * 2 + 8;
        // If an EIP-155 v (directly or indirectly; maybe _vs) was provided, check it!
        if (sig.v > 28 && sig.v !== v) {
            logger.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", signature);
        }
    }
    else if (sig.v !== v) {
        logger.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", signature);
    }
    raw.push(hexlify(v));
    raw.push(stripZeros(arrayify(sig.r)));
    raw.push(stripZeros(arrayify(sig.s)));
    return RLP.encode(raw);
}
function serialize(transaction, signature) {
    // Legacy and EIP-155 Transactions
    if (transaction.type == null || transaction.type === 0) {
        if (transaction.accessList != null) {
            logger.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", transaction);
        }
        return _serialize(transaction, signature);
    }
    // Typed Transactions (EIP-2718)
    switch (transaction.type) {
        case 1:
            return _serializeEip2930(transaction, signature);
        case 2:
            return _serializeEip1559(transaction, signature);
        default:
            break;
    }
    return logger.throwError(`unsupported transaction type: ${transaction.type}`, Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "serializeTransaction",
        transactionType: transaction.type
    });
}
function _parseEipSignature(tx, fields, serialize) {
    try {
        const recid = handleNumber(fields[0]).toNumber();
        if (recid !== 0 && recid !== 1) {
            throw new Error("bad recid");
        }
        tx.v = recid;
    }
    catch (error) {
        logger.throwArgumentError("invalid v for transaction type: 1", "v", fields[0]);
    }
    tx.r = (0,bytes_lib_esm/* hexZeroPad */.$m)(fields[1], 32);
    tx.s = (0,bytes_lib_esm/* hexZeroPad */.$m)(fields[2], 32);
    try {
        const digest = (0,keccak256_lib_esm/* keccak256 */.w)(serialize(tx));
        tx.from = recoverAddress(digest, { r: tx.r, s: tx.s, recoveryParam: tx.v });
    }
    catch (error) {
        console.log(error);
    }
}
function _parseEip1559(payload) {
    const transaction = rlp_lib_esm/* decode */.J(payload.slice(1));
    if (transaction.length !== 9 && transaction.length !== 12) {
        logger.throwArgumentError("invalid component count for transaction type: 2", "payload", (0,bytes_lib_esm/* hexlify */.Dv)(payload));
    }
    const maxPriorityFeePerGas = handleNumber(transaction[2]);
    const maxFeePerGas = handleNumber(transaction[3]);
    const tx = {
        type: 2,
        chainId: handleNumber(transaction[0]).toNumber(),
        nonce: handleNumber(transaction[1]).toNumber(),
        maxPriorityFeePerGas: maxPriorityFeePerGas,
        maxFeePerGas: maxFeePerGas,
        gasPrice: null,
        gasLimit: handleNumber(transaction[4]),
        to: handleAddress(transaction[5]),
        value: handleNumber(transaction[6]),
        data: transaction[7],
        accessList: accessListify(transaction[8]),
    };
    // Unsigned EIP-1559 Transaction
    if (transaction.length === 9) {
        return tx;
    }
    tx.hash = (0,keccak256_lib_esm/* keccak256 */.w)(payload);
    _parseEipSignature(tx, transaction.slice(9), _serializeEip1559);
    return tx;
}
function _parseEip2930(payload) {
    const transaction = rlp_lib_esm/* decode */.J(payload.slice(1));
    if (transaction.length !== 8 && transaction.length !== 11) {
        logger.throwArgumentError("invalid component count for transaction type: 1", "payload", (0,bytes_lib_esm/* hexlify */.Dv)(payload));
    }
    const tx = {
        type: 1,
        chainId: handleNumber(transaction[0]).toNumber(),
        nonce: handleNumber(transaction[1]).toNumber(),
        gasPrice: handleNumber(transaction[2]),
        gasLimit: handleNumber(transaction[3]),
        to: handleAddress(transaction[4]),
        value: handleNumber(transaction[5]),
        data: transaction[6],
        accessList: accessListify(transaction[7])
    };
    // Unsigned EIP-2930 Transaction
    if (transaction.length === 8) {
        return tx;
    }
    tx.hash = (0,keccak256_lib_esm/* keccak256 */.w)(payload);
    _parseEipSignature(tx, transaction.slice(8), _serializeEip2930);
    return tx;
}
// Legacy Transactions and EIP-155
function _parse(rawTransaction) {
    const transaction = rlp_lib_esm/* decode */.J(rawTransaction);
    if (transaction.length !== 9 && transaction.length !== 6) {
        logger.throwArgumentError("invalid raw transaction", "rawTransaction", rawTransaction);
    }
    const tx = {
        nonce: handleNumber(transaction[0]).toNumber(),
        gasPrice: handleNumber(transaction[1]),
        gasLimit: handleNumber(transaction[2]),
        to: handleAddress(transaction[3]),
        value: handleNumber(transaction[4]),
        data: transaction[5],
        chainId: 0
    };
    // Legacy unsigned transaction
    if (transaction.length === 6) {
        return tx;
    }
    try {
        tx.v = bignumber/* BigNumber.from */.O$.from(transaction[6]).toNumber();
    }
    catch (error) {
        console.log(error);
        return tx;
    }
    tx.r = (0,bytes_lib_esm/* hexZeroPad */.$m)(transaction[7], 32);
    tx.s = (0,bytes_lib_esm/* hexZeroPad */.$m)(transaction[8], 32);
    if (bignumber/* BigNumber.from */.O$.from(tx.r).isZero() && bignumber/* BigNumber.from */.O$.from(tx.s).isZero()) {
        // EIP-155 unsigned transaction
        tx.chainId = tx.v;
        tx.v = 0;
    }
    else {
        // Signed Tranasaction
        tx.chainId = Math.floor((tx.v - 35) / 2);
        if (tx.chainId < 0) {
            tx.chainId = 0;
        }
        let recoveryParam = tx.v - 27;
        const raw = transaction.slice(0, 6);
        if (tx.chainId !== 0) {
            raw.push((0,bytes_lib_esm/* hexlify */.Dv)(tx.chainId));
            raw.push("0x");
            raw.push("0x");
            recoveryParam -= tx.chainId * 2 + 8;
        }
        const digest = (0,keccak256_lib_esm/* keccak256 */.w)(rlp_lib_esm/* encode */.c(raw));
        try {
            tx.from = recoverAddress(digest, { r: (0,bytes_lib_esm/* hexlify */.Dv)(tx.r), s: (0,bytes_lib_esm/* hexlify */.Dv)(tx.s), recoveryParam: recoveryParam });
        }
        catch (error) {
            console.log(error);
        }
        tx.hash = (0,keccak256_lib_esm/* keccak256 */.w)(rawTransaction);
    }
    tx.type = null;
    return tx;
}
function parse(rawTransaction) {
    const payload = (0,bytes_lib_esm/* arrayify */.lE)(rawTransaction);
    // Legacy and EIP-155 Transactions
    if (payload[0] > 0x7f) {
        return _parse(payload);
    }
    // Typed Transaction (EIP-2718)
    switch (payload[0]) {
        case 1:
            return _parseEip2930(payload);
        case 2:
            return _parseEip1559(payload);
        default:
            break;
    }
    return logger.throwError(`unsupported transaction type: ${payload[0]}`, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
        operation: "parseTransaction",
        transactionType: payload[0]
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TransactionTypes": () => (/* binding */ TransactionTypes),
  "accessListify": () => (/* binding */ accessListify),
  "computeAddress": () => (/* binding */ computeAddress),
  "parse": () => (/* binding */ parse),
  "recoverAddress": () => (/* binding */ recoverAddress),
  "serialize": () => (/* binding */ serialize)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+address@5.6.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(66120);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.6.0/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js + 1 modules
var bignumber = __webpack_require__(39554);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.6.1/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var bytes_lib_esm = __webpack_require__(99376);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.6.0/node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(21121);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+keccak256@5.6.0/node_modules/@ethersproject/keccak256/lib.esm/index.js
var keccak256_lib_esm = __webpack_require__(88510);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.6.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var properties_lib_esm = __webpack_require__(86133);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+rlp@5.6.0/node_modules/@ethersproject/rlp/lib.esm/index.js + 1 modules
var rlp_lib_esm = __webpack_require__(49530);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+signing-key@5.6.0/node_modules/@ethersproject/signing-key/lib.esm/index.js + 2 modules
var signing_key_lib_esm = __webpack_require__(3248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+transactions@5.6.0/node_modules/@ethersproject/transactions/lib.esm/_version.js
const version = "transactions/5.6.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+transactions@5.6.0/node_modules/@ethersproject/transactions/lib.esm/index.js











const logger = new logger_lib_esm/* Logger */.Yd(version);
var TransactionTypes;
(function (TransactionTypes) {
    TransactionTypes[TransactionTypes["legacy"] = 0] = "legacy";
    TransactionTypes[TransactionTypes["eip2930"] = 1] = "eip2930";
    TransactionTypes[TransactionTypes["eip1559"] = 2] = "eip1559";
})(TransactionTypes || (TransactionTypes = {}));
;
///////////////////////////////
function handleAddress(value) {
    if (value === "0x") {
        return null;
    }
    return (0,lib_esm/* getAddress */.Kn)(value);
}
function handleNumber(value) {
    if (value === "0x") {
        return bignumbers/* Zero */._Y;
    }
    return bignumber/* BigNumber.from */.O$.from(value);
}
// Legacy Transaction Fields
const transactionFields = [
    { name: "nonce", maxLength: 32, numeric: true },
    { name: "gasPrice", maxLength: 32, numeric: true },
    { name: "gasLimit", maxLength: 32, numeric: true },
    { name: "to", length: 20 },
    { name: "value", maxLength: 32, numeric: true },
    { name: "data" },
];
const allowedTransactionKeys = {
    chainId: true, data: true, gasLimit: true, gasPrice: true, nonce: true, to: true, type: true, value: true
};
function computeAddress(key) {
    const publicKey = (0,signing_key_lib_esm/* computePublicKey */.VW)(key);
    return (0,lib_esm/* getAddress */.Kn)((0,bytes_lib_esm/* hexDataSlice */.p3)((0,keccak256_lib_esm/* keccak256 */.w)((0,bytes_lib_esm/* hexDataSlice */.p3)(publicKey, 1)), 12));
}
function recoverAddress(digest, signature) {
    return computeAddress((0,signing_key_lib_esm/* recoverPublicKey */.LO)((0,bytes_lib_esm/* arrayify */.lE)(digest), signature));
}
function formatNumber(value, name) {
    const result = (0,bytes_lib_esm/* stripZeros */.G1)(bignumber/* BigNumber.from */.O$.from(value).toHexString());
    if (result.length > 32) {
        logger.throwArgumentError("invalid length for " + name, ("transaction:" + name), value);
    }
    return result;
}
function accessSetify(addr, storageKeys) {
    return {
        address: (0,lib_esm/* getAddress */.Kn)(addr),
        storageKeys: (storageKeys || []).map((storageKey, index) => {
            if ((0,bytes_lib_esm/* hexDataLength */.E1)(storageKey) !== 32) {
                logger.throwArgumentError("invalid access list storageKey", `accessList[${addr}:${index}]`, storageKey);
            }
            return storageKey.toLowerCase();
        })
    };
}
function accessListify(value) {
    if (Array.isArray(value)) {
        return value.map((set, index) => {
            if (Array.isArray(set)) {
                if (set.length > 2) {
                    logger.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${index}]`, set);
                }
                return accessSetify(set[0], set[1]);
            }
            return accessSetify(set.address, set.storageKeys);
        });
    }
    const result = Object.keys(value).map((addr) => {
        const storageKeys = value[addr].reduce((accum, storageKey) => {
            accum[storageKey] = true;
            return accum;
        }, {});
        return accessSetify(addr, Object.keys(storageKeys).sort());
    });
    result.sort((a, b) => (a.address.localeCompare(b.address)));
    return result;
}
function formatAccessList(value) {
    return accessListify(value).map((set) => [set.address, set.storageKeys]);
}
function _serializeEip1559(transaction, signature) {
    // If there is an explicit gasPrice, make sure it matches the
    // EIP-1559 fees; otherwise they may not understand what they
    // think they are setting in terms of fee.
    if (transaction.gasPrice != null) {
        const gasPrice = bignumber/* BigNumber.from */.O$.from(transaction.gasPrice);
        const maxFeePerGas = bignumber/* BigNumber.from */.O$.from(transaction.maxFeePerGas || 0);
        if (!gasPrice.eq(maxFeePerGas)) {
            logger.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                gasPrice, maxFeePerGas
            });
        }
    }
    const fields = [
        formatNumber(transaction.chainId || 0, "chainId"),
        formatNumber(transaction.nonce || 0, "nonce"),
        formatNumber(transaction.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
        formatNumber(transaction.maxFeePerGas || 0, "maxFeePerGas"),
        formatNumber(transaction.gasLimit || 0, "gasLimit"),
        ((transaction.to != null) ? (0,lib_esm/* getAddress */.Kn)(transaction.to) : "0x"),
        formatNumber(transaction.value || 0, "value"),
        (transaction.data || "0x"),
        (formatAccessList(transaction.accessList || []))
    ];
    if (signature) {
        const sig = (0,bytes_lib_esm/* splitSignature */.N)(signature);
        fields.push(formatNumber(sig.recoveryParam, "recoveryParam"));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.r));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.s));
    }
    return (0,bytes_lib_esm/* hexConcat */.xs)(["0x02", rlp_lib_esm/* encode */.c(fields)]);
}
function _serializeEip2930(transaction, signature) {
    const fields = [
        formatNumber(transaction.chainId || 0, "chainId"),
        formatNumber(transaction.nonce || 0, "nonce"),
        formatNumber(transaction.gasPrice || 0, "gasPrice"),
        formatNumber(transaction.gasLimit || 0, "gasLimit"),
        ((transaction.to != null) ? (0,lib_esm/* getAddress */.Kn)(transaction.to) : "0x"),
        formatNumber(transaction.value || 0, "value"),
        (transaction.data || "0x"),
        (formatAccessList(transaction.accessList || []))
    ];
    if (signature) {
        const sig = (0,bytes_lib_esm/* splitSignature */.N)(signature);
        fields.push(formatNumber(sig.recoveryParam, "recoveryParam"));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.r));
        fields.push((0,bytes_lib_esm/* stripZeros */.G1)(sig.s));
    }
    return (0,bytes_lib_esm/* hexConcat */.xs)(["0x01", rlp_lib_esm/* encode */.c(fields)]);
}
// Legacy Transactions and EIP-155
function _serialize(transaction, signature) {
    (0,properties_lib_esm/* checkProperties */.uj)(transaction, allowedTransactionKeys);
    const raw = [];
    transactionFields.forEach(function (fieldInfo) {
        let value = transaction[fieldInfo.name] || ([]);
        const options = {};
        if (fieldInfo.numeric) {
            options.hexPad = "left";
        }
        value = (0,bytes_lib_esm/* arrayify */.lE)((0,bytes_lib_esm/* hexlify */.Dv)(value, options));
        // Fixed-width field
        if (fieldInfo.length && value.length !== fieldInfo.length && value.length > 0) {
            logger.throwArgumentError("invalid length for " + fieldInfo.name, ("transaction:" + fieldInfo.name), value);
        }
        // Variable-width (with a maximum)
        if (fieldInfo.maxLength) {
            value = (0,bytes_lib_esm/* stripZeros */.G1)(value);
            if (value.length > fieldInfo.maxLength) {
                logger.throwArgumentError("invalid length for " + fieldInfo.name, ("transaction:" + fieldInfo.name), value);
            }
        }
        raw.push((0,bytes_lib_esm/* hexlify */.Dv)(value));
    });
    let chainId = 0;
    if (transaction.chainId != null) {
        // A chainId was provided; if non-zero we'll use EIP-155
        chainId = transaction.chainId;
        if (typeof (chainId) !== "number") {
            logger.throwArgumentError("invalid transaction.chainId", "transaction", transaction);
        }
    }
    else if (signature && !(0,bytes_lib_esm/* isBytesLike */.Zq)(signature) && signature.v > 28) {
        // No chainId provided, but the signature is signing with EIP-155; derive chainId
        chainId = Math.floor((signature.v - 35) / 2);
    }
    // We have an EIP-155 transaction (chainId was specified and non-zero)
    if (chainId !== 0) {
        raw.push((0,bytes_lib_esm/* hexlify */.Dv)(chainId)); // @TODO: hexValue?
        raw.push("0x");
        raw.push("0x");
    }
    // Requesting an unsigned transaction
    if (!signature) {
        return rlp_lib_esm/* encode */.c(raw);
    }
    // The splitSignature will ensure the transaction has a recoveryParam in the
    // case that the signTransaction function only adds a v.
    const sig = (0,bytes_lib_esm/* splitSignature */.N)(signature);
    // We pushed a chainId and null r, s on for hashing only; remove those
    let v = 27 + sig.recoveryParam;
    if (chainId !== 0) {
        raw.pop();
        raw.pop();
        raw.pop();
        v += chainId * 2 + 8;
        // If an EIP-155 v (directly or indirectly; maybe _vs) was provided, check it!
        if (sig.v > 28 && sig.v !== v) {
            logger.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", signature);
        }
    }
    else if (sig.v !== v) {
        logger.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", signature);
    }
    raw.push((0,bytes_lib_esm/* hexlify */.Dv)(v));
    raw.push((0,bytes_lib_esm/* stripZeros */.G1)((0,bytes_lib_esm/* arrayify */.lE)(sig.r)));
    raw.push((0,bytes_lib_esm/* stripZeros */.G1)((0,bytes_lib_esm/* arrayify */.lE)(sig.s)));
    return rlp_lib_esm/* encode */.c(raw);
}
function serialize(transaction, signature) {
    // Legacy and EIP-155 Transactions
    if (transaction.type == null || transaction.type === 0) {
        if (transaction.accessList != null) {
            logger.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", transaction);
        }
        return _serialize(transaction, signature);
    }
    // Typed Transactions (EIP-2718)
    switch (transaction.type) {
        case 1:
            return _serializeEip2930(transaction, signature);
        case 2:
            return _serializeEip1559(transaction, signature);
        default:
            break;
    }
    return logger.throwError(`unsupported transaction type: ${transaction.type}`, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
        operation: "serializeTransaction",
        transactionType: transaction.type
    });
}
function _parseEipSignature(tx, fields, serialize) {
    try {
        const recid = handleNumber(fields[0]).toNumber();
        if (recid !== 0 && recid !== 1) {
            throw new Error("bad recid");
        }
        tx.v = recid;
    }
    catch (error) {
        logger.throwArgumentError("invalid v for transaction type: 1", "v", fields[0]);
    }
    tx.r = (0,bytes_lib_esm/* hexZeroPad */.$m)(fields[1], 32);
    tx.s = (0,bytes_lib_esm/* hexZeroPad */.$m)(fields[2], 32);
    try {
        const digest = (0,keccak256_lib_esm/* keccak256 */.w)(serialize(tx));
        tx.from = recoverAddress(digest, { r: tx.r, s: tx.s, recoveryParam: tx.v });
    }
    catch (error) {
        console.log(error);
    }
}
function _parseEip1559(payload) {
    const transaction = rlp_lib_esm/* decode */.J(payload.slice(1));
    if (transaction.length !== 9 && transaction.length !== 12) {
        logger.throwArgumentError("invalid component count for transaction type: 2", "payload", (0,bytes_lib_esm/* hexlify */.Dv)(payload));
    }
    const maxPriorityFeePerGas = handleNumber(transaction[2]);
    const maxFeePerGas = handleNumber(transaction[3]);
    const tx = {
        type: 2,
        chainId: handleNumber(transaction[0]).toNumber(),
        nonce: handleNumber(transaction[1]).toNumber(),
        maxPriorityFeePerGas: maxPriorityFeePerGas,
        maxFeePerGas: maxFeePerGas,
        gasPrice: null,
        gasLimit: handleNumber(transaction[4]),
        to: handleAddress(transaction[5]),
        value: handleNumber(transaction[6]),
        data: transaction[7],
        accessList: accessListify(transaction[8]),
    };
    // Unsigned EIP-1559 Transaction
    if (transaction.length === 9) {
        return tx;
    }
    tx.hash = (0,keccak256_lib_esm/* keccak256 */.w)(payload);
    _parseEipSignature(tx, transaction.slice(9), _serializeEip1559);
    return tx;
}
function _parseEip2930(payload) {
    const transaction = rlp_lib_esm/* decode */.J(payload.slice(1));
    if (transaction.length !== 8 && transaction.length !== 11) {
        logger.throwArgumentError("invalid component count for transaction type: 1", "payload", (0,bytes_lib_esm/* hexlify */.Dv)(payload));
    }
    const tx = {
        type: 1,
        chainId: handleNumber(transaction[0]).toNumber(),
        nonce: handleNumber(transaction[1]).toNumber(),
        gasPrice: handleNumber(transaction[2]),
        gasLimit: handleNumber(transaction[3]),
        to: handleAddress(transaction[4]),
        value: handleNumber(transaction[5]),
        data: transaction[6],
        accessList: accessListify(transaction[7])
    };
    // Unsigned EIP-2930 Transaction
    if (transaction.length === 8) {
        return tx;
    }
    tx.hash = (0,keccak256_lib_esm/* keccak256 */.w)(payload);
    _parseEipSignature(tx, transaction.slice(8), _serializeEip2930);
    return tx;
}
// Legacy Transactions and EIP-155
function _parse(rawTransaction) {
    const transaction = rlp_lib_esm/* decode */.J(rawTransaction);
    if (transaction.length !== 9 && transaction.length !== 6) {
        logger.throwArgumentError("invalid raw transaction", "rawTransaction", rawTransaction);
    }
    const tx = {
        nonce: handleNumber(transaction[0]).toNumber(),
        gasPrice: handleNumber(transaction[1]),
        gasLimit: handleNumber(transaction[2]),
        to: handleAddress(transaction[3]),
        value: handleNumber(transaction[4]),
        data: transaction[5],
        chainId: 0
    };
    // Legacy unsigned transaction
    if (transaction.length === 6) {
        return tx;
    }
    try {
        tx.v = bignumber/* BigNumber.from */.O$.from(transaction[6]).toNumber();
    }
    catch (error) {
        console.log(error);
        return tx;
    }
    tx.r = (0,bytes_lib_esm/* hexZeroPad */.$m)(transaction[7], 32);
    tx.s = (0,bytes_lib_esm/* hexZeroPad */.$m)(transaction[8], 32);
    if (bignumber/* BigNumber.from */.O$.from(tx.r).isZero() && bignumber/* BigNumber.from */.O$.from(tx.s).isZero()) {
        // EIP-155 unsigned transaction
        tx.chainId = tx.v;
        tx.v = 0;
    }
    else {
        // Signed Transaction
        tx.chainId = Math.floor((tx.v - 35) / 2);
        if (tx.chainId < 0) {
            tx.chainId = 0;
        }
        let recoveryParam = tx.v - 27;
        const raw = transaction.slice(0, 6);
        if (tx.chainId !== 0) {
            raw.push((0,bytes_lib_esm/* hexlify */.Dv)(tx.chainId));
            raw.push("0x");
            raw.push("0x");
            recoveryParam -= tx.chainId * 2 + 8;
        }
        const digest = (0,keccak256_lib_esm/* keccak256 */.w)(rlp_lib_esm/* encode */.c(raw));
        try {
            tx.from = recoverAddress(digest, { r: (0,bytes_lib_esm/* hexlify */.Dv)(tx.r), s: (0,bytes_lib_esm/* hexlify */.Dv)(tx.s), recoveryParam: recoveryParam });
        }
        catch (error) {
            console.log(error);
        }
        tx.hash = (0,keccak256_lib_esm/* keccak256 */.w)(rawTransaction);
    }
    tx.type = null;
    return tx;
}
function parse(rawTransaction) {
    const payload = (0,bytes_lib_esm/* arrayify */.lE)(rawTransaction);
    // Legacy and EIP-155 Transactions
    if (payload[0] > 0x7f) {
        return _parse(payload);
    }
    // Typed Transaction (EIP-2718)
    switch (payload[0]) {
        case 1:
            return _parseEip2930(payload);
        case 2:
            return _parseEip1559(payload);
        default:
            break;
    }
    return logger.throwError(`unsupported transaction type: ${payload[0]}`, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
        operation: "parseTransaction",
        transactionType: payload[0]
    });
}
//# sourceMappingURL=index.js.map

/***/ })

}]);