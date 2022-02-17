"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9714],{

/***/ 46316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
const ethereumjs_util_1 = __webpack_require__(98257);
exports.namehash = (name) => {
    let node = '0000000000000000000000000000000000000000000000000000000000000000';
    if (name !== '') {
        const labels = name.split('.');
        for (let i = labels.length - 1; i >= 0; i--) {
            const labelHash = ethereumjs_util_1.sha3(labels[i]).toString('hex');
            node = ethereumjs_util_1.sha3(new Buffer(node + labelHash, 'hex')).toString('hex');
        }
    }
    return '0x' + node.toString();
};
exports.nodehash = (name) => {
    const label = name.split('.')[0];
    if (label) {
        return '0x' + ethereumjs_util_1.sha3(label).toString('hex');
    }
    else {
        return '';
    }
};
exports.ENSNameBaseSchema = {
    fields: [
        { name: 'Name', type: 'string', description: 'ENS Name' },
        {
            name: 'NodeHash',
            type: 'bytes32',
            description: 'ENS Node Hash',
            readOnly: true,
        },
        {
            name: 'NameHash',
            type: 'bytes32',
            description: 'ENS Name Hash',
            readOnly: true,
        },
    ],
    assetFromFields: (fields) => ({
        id: fields.ID,
        address: fields.Address,
        name: fields.Name,
        nodeHash: exports.nodehash(fields.Name),
        nameHash: exports.namehash(fields.Name),
    }),
    checkAsset: (asset) => {
        return asset.name
            ? exports.namehash(asset.name) === asset.nameHash &&
                exports.nodehash(asset.name) === asset.nodeHash
            : true;
    },
    hash: ({ nodeHash }) => nodeHash,
};
//# sourceMappingURL=ens.js.map

/***/ }),

/***/ 97042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
/* HACK */
// @ts-ignore
Web3.AbiType = {
    Function: 'function',
    Event: 'event',
};
var schemaFunctions_1 = __webpack_require__(60266);
exports.encodeBuy = schemaFunctions_1.encodeBuy;
exports.encodeSell = schemaFunctions_1.encodeSell;
exports.encodeAtomicizedBuy = schemaFunctions_1.encodeAtomicizedBuy;
exports.encodeAtomicizedSell = schemaFunctions_1.encodeAtomicizedSell;
exports.encodeCall = schemaFunctions_1.encodeCall;
exports.encodeDefaultCall = schemaFunctions_1.encodeDefaultCall;
exports.encodeReplacementPattern = schemaFunctions_1.encodeReplacementPattern;
var index_1 = __webpack_require__(7985);
exports.schemas = index_1.schemas;
var index_2 = __webpack_require__(86039);
exports.tokens = index_2.tokens;
var web3_1 = __webpack_require__(90582);
exports.AbiType = web3_1.AbiType;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 60266:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(31557);
const ethABI = __webpack_require__(60843);
const wyvern_js_1 = __webpack_require__(20544);
const types_1 = __webpack_require__(66395);
const failWith = (msg) => {
    throw new Error(msg);
};
exports.encodeReplacementPattern = wyvern_js_1.WyvernProtocol.encodeReplacementPattern;
exports.encodeCall = (abi, parameters) => {
    const inputTypes = abi.inputs.map(i => i.type);
    return '0x' + Buffer.concat([
        ethABI.methodID(abi.name, inputTypes),
        ethABI.rawEncode(inputTypes, parameters),
    ]).toString('hex');
};
exports.encodeSell = (schema, asset, address) => {
    const transfer = schema.functions.transfer(asset);
    return {
        target: transfer.target,
        calldata: exports.encodeDefaultCall(transfer, address),
        replacementPattern: exports.encodeReplacementPattern(transfer),
    };
};
exports.encodeAtomicizedSell = (schema, assets, address, atomicizer) => {
    const transactions = assets.map(asset => {
        const { target, calldata } = exports.encodeSell(schema, asset, address);
        return {
            calldata,
            abi: schema.functions.transfer(asset),
            address: target,
            value: new utils_1.BigNumber(0),
        };
    });
    const atomicizedCalldata = atomicizer.atomicize.getABIEncodedTransactionData(transactions.map(t => t.address), transactions.map(t => t.value), transactions.map(t => new utils_1.BigNumber((t.calldata.length - 2) / 2)), // subtract 2 for '0x', divide by 2 for hex
    transactions.map(t => t.calldata).reduce((x, y) => x + y.slice(2)));
    const atomicizedReplacementPattern = wyvern_js_1.WyvernProtocol.encodeAtomicizedReplacementPattern(transactions.map(t => t.abi));
    return {
        calldata: atomicizedCalldata,
        replacementPattern: atomicizedReplacementPattern,
    };
};
exports.encodeAtomicizedBuy = (schema, assets, address, atomicizer) => {
    const transactions = assets.map(asset => {
        const { target, calldata } = exports.encodeBuy(schema, asset, address);
        return {
            calldata,
            abi: schema.functions.transfer(asset),
            address: target,
            value: new utils_1.BigNumber(0),
        };
    });
    const atomicizedCalldata = atomicizer.atomicize.getABIEncodedTransactionData(transactions.map(t => t.address), transactions.map(t => t.value), transactions.map(t => new utils_1.BigNumber((t.calldata.length - 2) / 2)), // subtract 2 for '0x', divide by 2 for hex
    transactions.map(t => t.calldata).reduce((x, y) => x + y.slice(2)));
    const atomicizedReplacementPattern = wyvern_js_1.WyvernProtocol.encodeAtomicizedReplacementPattern(transactions.map(t => t.abi), types_1.FunctionInputKind.Owner);
    return {
        calldata: atomicizedCalldata,
        replacementPattern: atomicizedReplacementPattern,
    };
};
exports.encodeBuy = (schema, asset, address) => {
    const transfer = schema.functions.transfer(asset);
    const replaceables = transfer.inputs.filter((i) => i.kind === types_1.FunctionInputKind.Replaceable);
    const ownerInputs = transfer.inputs.filter((i) => i.kind === types_1.FunctionInputKind.Owner);
    // Validate
    if (replaceables.length !== 1) {
        failWith('Only 1 input can match transfer destination, but instead ' + replaceables.length + ' did');
    }
    // Compute calldata
    const parameters = transfer.inputs.map((input) => {
        switch (input.kind) {
            case types_1.FunctionInputKind.Replaceable:
                return address;
            case types_1.FunctionInputKind.Owner:
                return wyvern_js_1.WyvernProtocol.generateDefaultValue(input.type);
            default:
                return input.value.toString();
        }
    });
    const calldata = exports.encodeCall(transfer, parameters);
    // Compute replacement pattern
    let replacementPattern = '0x';
    if (ownerInputs.length > 0) {
        replacementPattern = exports.encodeReplacementPattern(transfer, types_1.FunctionInputKind.Owner);
    }
    return {
        target: transfer.target,
        calldata,
        replacementPattern,
    };
};
exports.encodeDefaultCall = (abi, address) => {
    const parameters = abi.inputs.map(input => {
        switch (input.kind) {
            case types_1.FunctionInputKind.Replaceable:
                return wyvern_js_1.WyvernProtocol.generateDefaultValue(input.type);
            case types_1.FunctionInputKind.Owner:
                return address;
            case types_1.FunctionInputKind.Asset:
            default:
                return input.value;
        }
    });
    return exports.encodeCall(abi, parameters);
};
//# sourceMappingURL=schemaFunctions.js.map

/***/ }),

/***/ 22243:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.ContractRoleSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'ContractRole',
    description: 'Transferrable role on a smart contract.',
    thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
    website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
    fields: [
        { name: 'Name', type: 'string', description: 'Contract Name' },
        { name: 'Description', type: 'string', description: 'Contract Description' },
        { name: 'Address', type: 'address', description: 'Contract Address' },
        { name: 'RoleGetter', type: 'string', description: 'Name of method to get value of role. Should take no arguments.' },
        { name: 'RoleSetter', type: 'string', description: 'Name of method to set value of role. Should take one argument, an address.' },
    ],
    assetFromFields: (fields) => ({
        name: fields.Name,
        address: fields.Address,
        description: fields.Description,
        roleGetter: fields.RoleGetter,
        roleSetter: fields.RoleSetter,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
            title: `Smart Contract Role: ${asset.roleGetter} for ${asset.name}`,
            description: asset.description || (`${asset.roleGetter} for smart contract at ${asset.address}`),
            url: 'https://etherscan.io/address/' + asset.address,
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: asset.roleSetter,
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: 'newOwner', type: 'address' },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: asset.roleGetter,
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: a => a.address,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 83859:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.ERC1155Schema = {
    version: 1,
    deploymentBlock: 0,
    name: 'ERC1155',
    description: 'Items conforming to the ERC1155 spec, using transferFrom.',
    thumbnail: 'https://opensea.io/static/images/opensea-icon.png',
    website: 'https://github.com/ethereum/eips/issues/1155',
    fields: [
        { name: 'ID', type: 'uint256', description: 'Asset Token ID' },
        { name: 'Address', type: 'address', description: 'Asset Contract Address' },
        { name: 'Quantity', type: 'uint256', description: 'Quantity to transfer' },
    ],
    assetFromFields: (fields) => ({
        id: fields.ID,
        address: fields.Address,
        quantity: fields.Quantity,
    }),
    assetToFields: asset => ({
        ID: asset.id,
        Address: asset.address,
        Quantity: asset.quantity,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            title: 'ERC1155 Asset: Token ID ' + asset.id + ' at ' + asset.address,
            description: 'Trading ' + asset.quantity.toString(),
            url: '',
            thumbnail: '',
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'safeTransferFrom',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_from', type: 'address' },
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id },
                { kind: types_1.FunctionInputKind.Count, name: '_value', type: 'uint256', value: asset.quantity },
                { kind: types_1.FunctionInputKind.Data, name: '_data', type: 'bytes', value: '' },
            ],
            outputs: [],
        }),
        countOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'balanceOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_owner', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Count, name: 'balance', type: 'uint' },
            ],
            assetFromOutputs: (outputs) => outputs.balance,
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: asset => asset.address + '-' + asset.id,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58046:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.ERC20Schema = {
    version: 1,
    deploymentBlock: 0,
    name: 'ERC20',
    description: 'Items conforming to the ERC20 spec, using transferFrom.',
    thumbnail: 'https://opensea.io/static/images/opensea-icon.png',
    website: 'https://github.com/ethereum/eips/issues/20',
    fields: [
        { name: 'Address', type: 'address', description: 'Asset Contract Address' },
        { name: 'Quantity', type: 'uint256', description: 'Quantity to transfer' },
    ],
    assetFromFields: (fields) => ({
        address: fields.Address,
        quantity: fields.Quantity,
    }),
    assetToFields: asset => ({
        Address: asset.address,
        Quantity: asset.quantity,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            title: 'ERC20 Asset at ' + asset.address,
            description: 'Trading ' + asset.quantity.toString(),
            url: '',
            thumbnail: '',
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferFrom',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_from', type: 'address' },
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Count, name: '_value', type: 'uint256', value: asset.quantity },
            ],
            outputs: [],
        }),
        countOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'balanceOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_owner', type: 'address' },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Count, name: 'balance', type: 'uint' },
            ],
            assetFromOutputs: (outputs) => outputs.balance,
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: asset => asset.address,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 72635:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.ERC721Schema = {
    version: 2,
    deploymentBlock: 0,
    name: 'ERC721',
    description: 'Items conforming to the ERC721 spec, using transferFrom.',
    thumbnail: 'https://opensea.io/static/images/opensea-icon.png',
    website: 'http://erc721.org/',
    fields: [
        { name: 'ID', type: 'uint256', description: 'Asset Token ID' },
        { name: 'Address', type: 'address', description: 'Asset Contract Address' },
    ],
    assetFromFields: (fields) => ({
        id: fields.ID,
        address: fields.Address,
    }),
    assetToFields: asset => ({
        ID: asset.id,
        Address: asset.address,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            title: 'ERC721 Asset: Token ID ' + asset.id + ' at ' + asset.address,
            description: '',
            url: '',
            thumbnail: '',
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferFrom',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_from', type: 'address' },
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset.id },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'ownerOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset.id },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: asset => asset.address + '-' + asset.id,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(55682);
const index_2 = __webpack_require__(48294);
exports.schemas = {
    rinkeby: index_2.rinkebySchemas,
    main: index_1.mainSchemas,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 52190:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const axios_1 = __webpack_require__(41049);
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.CryptoKittiesSchema = {
    version: 1,
    deploymentBlock: 4605167,
    name: 'CryptoKitties',
    description: 'The virtual kitties that started the craze.',
    thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
    website: 'https://cryptokitties.co',
    fields: [
        { name: 'ID', type: 'uint256', description: 'CryptoKitty number.' },
    ],
    assetFromFields: (fields) => fields.ID,
    assetToFields: asset => ({ ID: asset }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(`https://api.cryptokitties.co/kitties/${asset}`).catch(err => {
            if (err.response && (err.response.status === 404 || err.response.status === 400)) {
                return null;
            }
            else {
                throw err;
            }
        });
        if (response === null) {
            return {
                thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
                title: 'CryptoKitty #' + asset,
                description: '',
                url: 'https://www.cryptokitties.co/kitty/' + asset,
                properties: [],
            };
        }
        else {
            const data = response.data;
            const attrs = data.enhanced_cattributes || data.cattributes || [];
            return {
                thumbnail: data.image_url_cdn,
                title: 'CryptoKitty #' + asset,
                description: data.bio,
                url: 'https://www.cryptokitties.co/kitty/' + asset,
                properties: attrs.map((c) => ({
                    key: c.type,
                    kind: 'string',
                    value: c.description,
                })),
            };
        }
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transfer',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'ownerOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [{
                type: Web3.AbiType.Event,
                name: 'Transfer',
                target: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
                anonymous: false,
                inputs: [
                    { kind: types_1.EventInputKind.Source, indexed: false, name: 'from', type: 'address' },
                    { kind: types_1.EventInputKind.Destination, indexed: false, name: 'to', type: 'address' },
                    { kind: types_1.EventInputKind.Asset, indexed: false, name: 'tokenId', type: 'uint256' },
                ],
                assetFromInputs: (inputs) => __awaiter(this, void 0, void 0, function* () { return inputs.tokenId; }),
            }],
    },
    hash: a => a,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 80999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.CryptoPunksSchema = {
    version: 1,
    deploymentBlock: 3914495,
    name: 'CryptoPunks',
    description: '10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.',
    thumbnail: 'https://www.larvalabs.com/cryptopunks/cryptopunk2838.png',
    website: 'https://www.larvalabs.com/cryptopunks',
    fields: [
        { name: 'ID', type: 'uint256', description: 'CryptoPunk number.' },
    ],
    assetFromFields: (fields) => fields.ID,
    assetToFields: asset => ({ ID: asset }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://www.larvalabs.com/cryptopunks/cryptopunk' + asset + '.png',
            title: 'CryptoPunk #' + asset,
            description: '',
            url: 'https://www.larvalabs.com/cryptopunks/details/' + asset,
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferPunk',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: 'to', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: 'punkIndex', type: 'uint256', value: asset },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'punkIndexToAddress',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: '', type: 'uint256', value: asset },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: '', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [{
                type: Web3.AbiType.Event,
                name: 'PunkTransfer',
                target: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
                anonymous: false,
                inputs: [
                    { kind: types_1.EventInputKind.Source, indexed: true, name: 'from', type: 'address' },
                    { kind: types_1.EventInputKind.Destination, indexed: true, name: 'to', type: 'address' },
                    { kind: types_1.EventInputKind.Asset, indexed: false, name: 'punkIndex', type: 'uint256' },
                ],
                assetFromInputs: (inputs) => __awaiter(this, void 0, void 0, function* () { return inputs.punkIndex; }),
            }],
    },
    hash: a => a,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 22431:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const ens_1 = __webpack_require__(46316);
const types_1 = __webpack_require__(66395);
exports.ENSNameSchema = Object.assign({}, ens_1.ENSNameBaseSchema, { version: 2, deploymentBlock: 3605331, name: 'ENSName', description: 'Ethereum Name Service Name (EIP 137)', thumbnail: 'https://ens.domains/img/ens.svg', website: 'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md', formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://ens.domains/img/ens.svg',
            title: 'ENS Name ' +
                (asset.name ? asset.name : asset.nodeHash.slice(0, 4) + '...'),
            description: 'ENS node ' + asset.nodeHash,
            url: 'https://etherscan.io/enslookup?q=' + asset.name,
            properties: [],
        };
    }), functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transfer',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: '0x6090a6e47849629b7245dfa1ca21d94cd15878ef',
            inputs: [
                {
                    kind: types_1.FunctionInputKind.Asset,
                    name: '_hash',
                    type: 'bytes32',
                    value: asset.nodeHash,
                },
                {
                    kind: types_1.FunctionInputKind.Replaceable,
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'owner',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: '0x314159265dD8dbb310642f98f50C066173C1259b',
            inputs: [
                {
                    kind: types_1.FunctionInputKind.Asset,
                    name: 'node',
                    type: 'bytes32',
                    value: asset.nameHash,
                },
            ],
            outputs: [{ kind: types_1.FunctionOutputKind.Owner, name: '', type: 'address' }],
        }),
        assetsOfOwnerByIndex: [],
    }, events: {
        transfer: [],
    } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 24056:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const web3_1 = __webpack_require__(90582);
const ens_1 = __webpack_require__(46316);
const types_1 = __webpack_require__(66395);
exports.ENS_SHORT_NAME_AUCTION_ADDRESS = '0x699c7f511c9e2182e89f29b3bfb68bd327919d17';
exports.ENSShortNameAuctionSchema = Object.assign({}, ens_1.ENSNameBaseSchema, { version: 0, deploymentBlock: 8488908, name: 'ENSShortNameAuction', description: 'ERC721 ENS short (3-6 character) names sold via auction.', thumbnail: '', website: 'https://ens.domains/', formatter: ({ name }) => __awaiter(this, void 0, void 0, function* () {
        return {
            title: 'ENS Short Name: ' + name,
            description: '',
            url: '',
            thumbnail: '',
            properties: [],
        };
    }), functions: {
        transfer: ({ name }) => ({
            type: web3_1.AbiType.Function,
            name: 'register',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: exports.ENS_SHORT_NAME_AUCTION_ADDRESS,
            inputs: [
                {
                    kind: types_1.FunctionInputKind.Data,
                    name: 'name',
                    type: 'string',
                    value: name.split('.')[0],
                },
                { kind: types_1.FunctionInputKind.Replaceable, name: 'owner', type: 'address' },
            ],
            outputs: [],
        }),
        assetsOfOwnerByIndex: [],
    }, events: {
        transfer: [
            {
                type: web3_1.AbiType.Event,
                name: 'NameRegistered',
                target: exports.ENS_SHORT_NAME_AUCTION_ADDRESS,
                anonymous: false,
                inputs: [
                    {
                        kind: types_1.EventInputKind.Asset,
                        indexed: false,
                        name: 'name',
                        type: 'string',
                    },
                    {
                        kind: types_1.EventInputKind.Destination,
                        indexed: false,
                        name: 'owner',
                        type: 'address',
                    },
                ],
                assetFromInputs: (inputs) => __awaiter(this, void 0, void 0, function* () {
                    return ({
                        name: inputs.name,
                        nodeHash: ens_1.nodehash(inputs.name),
                        nameHash: ens_1.namehash(inputs.name),
                    });
                }),
            },
        ],
    } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74112:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
const ERC1155_1 = __webpack_require__(83859);
exports.EnjinItemSchema = Object.assign({}, ERC1155_1.ERC1155Schema, { version: 1, deploymentBlock: 0, name: 'Enjin', description: 'Items conforming to the Enjin implementation of the ERC1155 spec.', website: 'https://enjincoin.io/', functions: Object.assign({}, ERC1155_1.ERC1155Schema.functions, { ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'ownerOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }), 
        // Parameters are flipped from 1155
        countOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'balanceOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id },
                { kind: types_1.FunctionInputKind.Owner, name: '_owner', type: 'address' },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Count, name: 'balance', type: 'uint' },
            ],
            assetFromOutputs: (outputs) => outputs.balance,
        }), assetsOfOwnerByIndex: [] }) });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 67978:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.OwnableContractSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'OwnableContract',
    description: 'Smart contract with transferrable ownership.',
    thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
    website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
    fields: [
        { name: 'Name', type: 'string', description: 'Contract Name' },
        { name: 'Description', type: 'string', description: 'Contract Description' },
        { name: 'Address', type: 'address', description: 'Contract Address' },
    ],
    assetFromFields: (fields) => ({
        name: fields.Name,
        address: fields.Address,
        description: fields.Description,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
            title: 'Smart Contract: "' + asset.name + '"',
            description: asset.description || ('Ownable smart contract at ' + asset.address),
            url: 'https://etherscan.io/address/' + asset.address,
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferOwnership',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: 'newOwner', type: 'address' },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'owner',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: a => a.address,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 55682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(22243);
const ERC1155_1 = __webpack_require__(83859);
const ERC20_1 = __webpack_require__(58046);
const index_2 = __webpack_require__(72635);
const index_3 = __webpack_require__(52190);
const index_4 = __webpack_require__(80999);
const EnjinItem_1 = __webpack_require__(74112);
const index_5 = __webpack_require__(22431);
const index_6 = __webpack_require__(24056);
const index_7 = __webpack_require__(67978);
exports.mainSchemas = [
    index_3.CryptoKittiesSchema,
    index_4.CryptoPunksSchema,
    index_5.ENSNameSchema,
    index_6.ENSShortNameAuctionSchema,
    index_7.OwnableContractSchema,
    ERC20_1.ERC20Schema,
    index_2.ERC721Schema,
    ERC1155_1.ERC1155Schema,
    EnjinItem_1.EnjinItemSchema,
    index_1.ContractRoleSchema,
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(22243);
const ERC1155_1 = __webpack_require__(83859);
const ERC20_1 = __webpack_require__(58046);
const index_2 = __webpack_require__(72635);
const index_3 = __webpack_require__(38997);
const index_4 = __webpack_require__(8800);
const index_5 = __webpack_require__(44308);
const index_6 = __webpack_require__(53153);
const index_7 = __webpack_require__(53375);
const index_8 = __webpack_require__(95937);
exports.rinkebySchemas = [
    index_3.rinkebyCryptoKittiesSchema,
    index_4.rinkebyCustomSchema,
    index_5.rinkebyENSNameSchema,
    index_6.rinkebyENSShortNameAuctionSchema,
    index_7.rinkebyOwnableContractSchema,
    index_8.testRinkebyNFTSchema,
    ERC20_1.ERC20Schema,
    index_2.ERC721Schema,
    ERC1155_1.ERC1155Schema,
    index_1.ContractRoleSchema,
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 38997:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.rinkebyCryptoKittiesSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'RinkebyCryptoKitties',
    description: 'Rinkeby Testnet CryptoKitties',
    thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
    website: 'https://cryptokitties.co',
    fields: [
        { name: 'ID', type: 'uint256', description: 'CryptoKitty number.' },
    ],
    assetFromFields: (fields) => fields.ID,
    assetToFields: asset => ({ ID: asset }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
            title: 'RinkebyCryptoKitty #' + asset,
            description: 'A Rinkeby kitten!',
            url: 'https://www.cryptokitties.co/kitty/' + asset,
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transfer',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'ownerOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [{
                type: Web3.AbiType.Function,
                name: 'tokensOfOwnerByIndex',
                payable: false,
                constant: true,
                stateMutability: types_1.StateMutability.View,
                target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
                inputs: [
                    { kind: types_1.FunctionInputKind.Owner, name: '_owner', type: 'address' },
                    { kind: types_1.FunctionInputKind.Index, name: '_index', type: 'uint' },
                ],
                outputs: [
                    { kind: types_1.FunctionOutputKind.Asset, name: 'tokenId', type: 'uint' },
                ],
                assetFromOutputs: (output) => {
                    if (output.toNumber() === 0) {
                        return null;
                    }
                    else {
                        return output.toString();
                    }
                },
            }],
    },
    events: {
        transfer: [{
                type: Web3.AbiType.Event,
                name: 'Transfer',
                target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
                anonymous: false,
                inputs: [
                    { kind: types_1.EventInputKind.Source, indexed: true, name: 'from', type: 'address' },
                    { kind: types_1.EventInputKind.Destination, indexed: true, name: 'to', type: 'address' },
                    { kind: types_1.EventInputKind.Asset, indexed: true, name: 'tokenId', type: 'uint256' },
                ],
                assetFromInputs: (inputs) => __awaiter(this, void 0, void 0, function* () { return inputs.tokenId; }),
            }],
    },
    hash: a => a,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8800:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rinkebyCustomSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'RinkebyCustom',
    description: 'Rinkeby Custom (manual ABI specification)',
    thumbnail: 'https://d30y9cdsu7xlg0.cloudfront.net/png/45447-200.png',
    website: 'https://github.com/projectwyvern/wyvern-schemas',
    fields: [
        { name: 'Name', type: 'string', description: 'Name of Asset' },
        { name: 'Description', type: 'string', description: 'Description of Asset' },
        { name: 'Thumbnail', type: 'string', description: 'URL of asset thumbnail image' },
        { name: 'URL', type: 'string', description: 'URL of asset' },
        { name: 'Transfer', type: 'abi', description: 'ABI of transfer function' },
    ],
    assetFromFields: (fields) => ({
        name: fields.Name,
        description: fields.Description,
        thumbnail: fields.Thumbnail,
        url: fields.URL,
        transfer: fields.Transfer,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: asset.thumbnail,
            title: asset.name,
            description: asset.description,
            url: asset.url,
            properties: [],
        };
    }),
    functions: {
        transfer: asset => asset.transfer,
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: a => JSON.stringify(a),
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 44308:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const ens_1 = __webpack_require__(46316);
const types_1 = __webpack_require__(66395);
exports.rinkebyENSNameSchema = Object.assign({}, ens_1.ENSNameBaseSchema, { version: 1, deploymentBlock: 0, name: 'ENSName', description: 'Rinkeby Ethereum Name Service (EIP 137)', thumbnail: 'https://ens.domains/img/ens.svg', website: 'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md', formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://ens.domains/img/ens.svg',
            title: 'ENS Name ' + asset.name,
            description: '(ENS node ' + asset.nodeHash + ')',
            url: 'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md',
            properties: [],
        };
    }), functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'setOwner',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: '0xe7410170f87102df0055eb195163a03b7f2bff4a',
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: 'node', type: 'bytes32', value: asset.nodeHash },
                { kind: types_1.FunctionInputKind.Replaceable, name: 'owner', type: 'address' },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'owner',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: '0xe7410170f87102df0055eb195163a03b7f2bff4a',
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: 'node', type: 'bytes32', value: asset.nodeHash },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: '', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    }, events: {
        transfer: [],
    } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 53153:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const web3_1 = __webpack_require__(90582);
const ens_1 = __webpack_require__(46316);
const types_1 = __webpack_require__(66395);
exports.RINKEBY_ENS_SHORT_NAME_AUCTION_ADDRESS = '0x76b6481a334783be36f2fc35b8f0b9bc7835d57b';
exports.rinkebyENSShortNameAuctionSchema = Object.assign({}, ens_1.ENSNameBaseSchema, { version: 0, deploymentBlock: 4791629, name: 'ENSShortNameAuction', description: 'ERC721 ENS short (3-6 character) names sold via auction.', thumbnail: '', website: 'https://ens.domains/', formatter: ({ name }) => __awaiter(this, void 0, void 0, function* () {
        return {
            title: 'ENS Short Name: ' + name,
            description: '',
            url: '',
            thumbnail: '',
            properties: [],
        };
    }), functions: {
        transfer: ({ name }) => ({
            type: web3_1.AbiType.Function,
            name: 'register',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: exports.RINKEBY_ENS_SHORT_NAME_AUCTION_ADDRESS,
            inputs: [
                {
                    kind: types_1.FunctionInputKind.Data,
                    name: 'name',
                    type: 'string',
                    value: name.split('.')[0],
                },
                { kind: types_1.FunctionInputKind.Replaceable, name: 'owner', type: 'address' },
            ],
            outputs: [],
        }),
        assetsOfOwnerByIndex: [],
    }, events: {
        transfer: [
            {
                type: web3_1.AbiType.Event,
                name: 'NameRegistered',
                target: exports.RINKEBY_ENS_SHORT_NAME_AUCTION_ADDRESS,
                anonymous: false,
                inputs: [
                    {
                        kind: types_1.EventInputKind.Asset,
                        indexed: false,
                        name: 'name',
                        type: 'string',
                    },
                    {
                        kind: types_1.EventInputKind.Destination,
                        indexed: false,
                        name: 'owner',
                        type: 'address',
                    },
                ],
                assetFromInputs: (inputs) => __awaiter(this, void 0, void 0, function* () {
                    return ({
                        name: inputs.name,
                        nodeHash: ens_1.nodehash(inputs.name),
                        nameHash: ens_1.namehash(inputs.name),
                    });
                }),
            },
        ],
    } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 53375:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.rinkebyOwnableContractSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'OwnableContract',
    description: 'Rinkeby Ownable Smart Contract',
    thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
    website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
    fields: [
        { name: 'Name', type: 'string', description: 'Contract Name' },
        { name: 'Address', type: 'address', description: 'Contract Address' },
    ],
    assetFromFields: (fields) => ({
        name: fields.Name,
        address: fields.Address,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
            title: 'Ownable Contract: "' + asset.name + '"',
            description: 'Ownable at address ' + asset.address,
            url: 'https://rinkeby.etherscan.io/address/' + asset.address,
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferOwnership',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: 'newOwner', type: 'address' },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'owner',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: a => a.address,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95937:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(66395);
exports.testRinkebyNFTSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'TestRinkebyNFT',
    description: 'Rinkeby ERC721 non-fungible token for Wyvern Exchange testing',
    thumbnail: 'https://cointelegraph.com/storage/uploads/view/f88e17e41f607dc0aef238230dd40cc6.png',
    website: 'https://projectwyvern.com',
    fields: [
        { name: 'ID', type: 'uint256', description: 'Token identification number.' },
    ],
    assetFromFields: (fields) => fields.ID,
    assetToFields: asset => ({ ID: asset }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            thumbnail: 'https://cointelegraph.com/storage/uploads/view/f88e17e41f607dc0aef238230dd40cc6.png',
            title: 'TestRinkebyNFT #' + asset,
            description: 'A useless NFT!',
            url: 'https://www.projectwyvern.com',
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transfer',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: '0x07a6dc6e3f1120ca03658d473d10aee3af5f8abb',
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'ownerOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: '0x07a6dc6e3f1120ca03658d473d10aee3af5f8abb',
            inputs: [
                { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: '_owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [{
                type: Web3.AbiType.Event,
                name: 'Transfer',
                target: '0x07a6dc6e3f1120ca03658d473d10aee3af5f8abb',
                anonymous: false,
                inputs: [
                    { kind: types_1.EventInputKind.Source, indexed: true, name: '_from', type: 'address' },
                    { kind: types_1.EventInputKind.Destination, indexed: true, name: '_to', type: 'address' },
                    { kind: types_1.EventInputKind.Asset, indexed: false, name: '_tokenId', type: 'uint256' },
                ],
                assetFromInputs: (inputs) => __awaiter(this, void 0, void 0, function* () { return inputs._tokenId.toString(); }),
            }],
    },
    hash: a => a,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 86039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(20131);
const index_2 = __webpack_require__(30604);
exports.tokens = {
    rinkeby: index_2.rinkebyTokens,
    main: index_1.mainTokens,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 20131:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mainTokens = {
    canonicalWrappedEther: { name: 'Canonical Wrapped Ether', symbol: 'WETH', decimals: 18, address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' },
    otherTokens: [
        { name: 'Stox', symbol: 'STX', decimals: 18, address: '0x006bea43baa3f7a6f765f14f10a1a1b08334ef45' },
        { name: 'Knoxstertoken', symbol: 'FKX', decimals: 18, address: '0x009e864923b49263c7f10d19b7f8ab7a9a5aad33' },
        { name: 'EETHER', symbol: 'EETHER', decimals: 18, address: '0x00a0cbe98e4d110b0fa82646152d77babf2951d0' },
        { name: 'BALI COIN', symbol: 'BALI', decimals: 18, address: '0x013a06558f07d9e6f9a00c95a33f3a0e0255176b' },
        { name: 'ICOS', symbol: 'ICOS', decimals: 6, address: '0x014b50466590340d41307cc54dcee990c8d58aa8' },
        { name: 'eDash', symbol: 'EDASH', decimals: 18, address: '0x01a28adc0edd796b570ec4da734e1aa809f6f1fc' },
        { name: 'TokenWrapper', symbol: 'GNTM', decimals: 18, address: '0x01afc37f4f85babc47c0e2d0eababc7fb49793c8' },
        { name: 'CCB', symbol: 'CCB', decimals: 18, address: '0x01c67791309c71aa4ed373025a0c089696d7c9e4' },
        { name: 'Follow Coin', symbol: 'FLLW', decimals: 18, address: '0x0200412995f1bafef0d3f97c4e28ac2515ec1ece' },
        { name: 'Original Crypto Coin', symbol: 'OCC', decimals: 18, address: '0x0235fe624e044a05eed7a43e16e3083bc8a4287a' },
        { name: 'GoldenTickets', symbol: 'GTKT', decimals: 0, address: '0x025abad9e518516fdaafbdcdb9701b37fb7ef0fa' },
        { name: 'Delphi', symbol: 'DEL', decimals: 18, address: '0x02b9806a64cb05f02aa8dcc1c178b88159a61304' },
        { name: 'bitjob', symbol: 'STU', decimals: 18, address: '0x0371a82e4a9d0a4312f3ee2ac9c6958512891372' },
        { name: 'Bitcoinereum', symbol: 'BTCM', decimals: 8, address: '0x03df4c372a29376d2c8df33a1b5f001cd8d68b0e' },
        { name: 'Happyfbr', symbol: 'FBR', decimals: 18, address: '0x0425cbbc5ff784203fe8d82beefa2b02634351f5' },
        { name: 'Engraved Token', symbol: 'EGR', decimals: 3, address: '0x044dd17bbbcbf1cf65f543918561bf8cf8130e7b' },
        { name: 'DataTrading Token', symbol: 'DTT', decimals: 18, address: '0x049a5bf874f241d94232137ef728a9c7dd0d7550' },
        { name: 'Wyvern Token', symbol: 'WYV', decimals: 18, address: '0x056017c55aE7AE32d12AeF7C679dF83A85ca75Ff' },
        { name: 'Litecoin Red', symbol: 'LTCRED', decimals: 8, address: '0x059e3ead0a5675e4139c820d799e20be9c75bc3d' },
        { name: 'LendConnect Token', symbol: 'LCT', decimals: 18, address: '0x05c7065d644096a4e4c3fe24af86e36de021074b' },
        { name: 'EthereumLyte', symbol: 'ELYTE', decimals: 18, address: '0x05d379b48a8622ae4018309e116420db4a38a225' },
        { name: 'Zilliqa', symbol: 'ZIL', decimals: 12, address: '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27' },
        { name: 'ACE Token', symbol: 'ACE', decimals: 0, address: '0x06147110022b768ba8f99a8f385df11a151a9cc8' },
        { name: 'EXN', symbol: 'EXN', decimals: 18, address: '0x0766e79a6fd74469733e8330b3b461c0320ff059' },
        { name: 'IBTC', symbol: 'IBTC', decimals: 18, address: '0x0784dbabb6c6834bddfb7cfee116ba049e5dafab' },
        { name: 'DALECOIN', symbol: 'DALC', decimals: 8, address: '0x07d9e49ea402194bf48a8276dafb16e4ed633317' },
        { name: 'Delta', symbol: 'DLT', decimals: 18, address: '0x07e3c70653548b04f0a75970c1f81b4cbbfb606f' },
        { name: 'ArtisTurba', symbol: 'ARTIS', decimals: 8, address: '0x082e13494f12ebb7206fbf67e22a6e1975a1a669' },
        { name: 'PlusCoin', symbol: 'PLC', decimals: 18, address: '0x0835ecd15ddf08d4786304d71b4672dc5c40f011' },
        { name: 'Edgeless', symbol: 'EDG', decimals: 0, address: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c' },
        { name: 'LiteCoinGold', symbol: 'LTG', decimals: 0, address: '0x0879e0c9822b75f31f0b0ed2a30be9f484a57c2f' },
        { name: 'EthereumBitcoin', symbol: 'BTCE', decimals: 8, address: '0x0886949c1b8c412860c4264ceb8083d1365e86cf' },
        { name: 'Token Prospectors Gold', symbol: 'PGL', decimals: 18, address: '0x089a6d83282fb8988a656189f1e7a73fa6c1cac2' },
        { name: 'Dentacoin', symbol: '٨', decimals: 0, address: '0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6' },
        { name: 'Tierion Network Token', symbol: 'TNT', decimals: 8, address: '0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8' },
        { name: 'DASH GOLD', symbol: 'DHG', decimals: 18, address: '0x08f8117155aa9414b67113a47ad269d47974e9dc' },
        { name: 'ClusterToken', symbol: 'CLRT', decimals: 18, address: '0x08fd34559f2ed8585d3810b4d96ab8a05c9f97c5' },
        { name: 'Nova Token', symbol: 'NVT', decimals: 18, address: '0x09d8b66c48424324b25754a873e290cae5dca439' },
        { name: 'MolikToken', symbol: 'MOL', decimals: 18, address: '0x09debe702678140c1be278213109719fab98d0d8' },
        { name: 'Ethereum Lite', symbol: 'ELITE', decimals: 18, address: '0x0a76aad21948ea1ef447d26dee91a54370e151e0' },
        { name: 'district0x Network Token', symbol: 'DNT', decimals: 18, address: '0x0abdace70d3790235af448c88547603b945604ea' },
        { name: 'FARAD', symbol: 'FRD', decimals: 18, address: '0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4' },
        { name: 'Intelligent Trading Technologies', symbol: 'ITT', decimals: 8, address: '0x0aef06dcccc531e581f0440059e6ffcc206039ee' },
        { name: 'MatryxToken', symbol: 'MTX', decimals: 18, address: '0x0af44e2784637218dd1d32a322d44e603a8f0c6a' },
        { name: 'Polybius', symbol: 'PLBT', decimals: 6, address: '0x0affa06e7fbe5bc9a764c979aa66e8256a631f02' },
        { name: 'Etheriya', symbol: 'RIYA', decimals: 8, address: '0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3' },
        { name: 'Just', symbol: 'JWT', decimals: 0, address: '0x0b24fdf35876bbe2a1cc925321b8c301017474d4' },
        { name: 'Internet Node Token', symbol: 'INT', decimals: 6, address: '0x0b76544f6c413a555f309bf76260d1e02377c02a' },
        { name: 'SwftCoin', symbol: 'SWFTC', decimals: 8, address: '0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e' },
        { name: 'Virtual Cash', symbol: 'VCA', decimals: 8, address: '0x0bee5ca8dda2c0b8edd1c4369f7cc35d243e547f' },
        { name: 'eZCash', symbol: 'EZEC', decimals: 18, address: '0x0c6c9beeeb5de377210930f09a7ac9a99ff5e981' },
        { name: 'DATAcoin', symbol: 'DATA', decimals: 18, address: '0x0cf0ee63788a0849fe5297f3407f701e122cc023' },
        { name: 'Basic Attention Token', symbol: 'BAT', decimals: 18, address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef' },
        { name: 'AVENTUS', symbol: 'AVT', decimals: 18, address: '0x0d88ed6e74bbfd96b831231638b66c05571e824f' },
        { name: 'Po.et', symbol: 'POE', decimals: 8, address: '0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195' },
        { name: 'Leverj', symbol: 'LEV', decimals: 9, address: '0x0f4ca92660efad97a9a70cb0fe969c755439772c' },
        { name: 'CrowdstartCoin', symbol: 'XSC', decimals: 18, address: '0x0f513ffb4926ff82d7f60a05069047aca295c413' },
        { name: 'Monero Gold', symbol: 'XMRG', decimals: 8, address: '0x0f598112679b78e17a4a9febc83703710d33489c' },
        { name: 'Decentraland', symbol: 'MANA', decimals: 18, address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942' },
        { name: 'wellieat', symbol: 'WEA', decimals: 0, address: '0x0f9b1d1d39118480cf8b9575419ea4e5189c88dd' },
        { name: 'Silver', symbol: 'SVB', decimals: 5, address: '0x0fcf5c6b20577d48ba209e077975b9f2eac55798' },
        { name: 'Indicoin', symbol: 'INDI', decimals: 18, address: '0x0ffab58ea5a71cc3ca40217706c3c401407fa4a8' },
        { name: 'Genesis Vision Token', symbol: 'GVT', decimals: 18, address: '0x103c3a209da59d3e7c4a89307e66521e081cfdf0' },
        { name: '', symbol: 'STH', decimals: 0, address: '0x1040613788e99c1606bd133db0ed7f7dbdf0cc80' },
        { name: 'Aigang', symbol: 'AIX', decimals: 18, address: '0x1063ce524265d5a3a624f4914acd573dd89ce988' },
        { name: 'Bloom Token', symbol: 'BLT', decimals: 18, address: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e' },
        { name: 'Synapse', symbol: 'SYN', decimals: 18, address: '0x10b123fddde003243199aad03522065dc05827a0' },
        { name: 'Denaro', symbol: 'DNO', decimals: 7, address: '0x10b35b348fd49966f2baf81df35a511c18bd1f80' },
        { name: 'Windy', symbol: 'WND', decimals: 18, address: '0x10c0337c42843e0b8ce743d7d5ff39b711f3ad82' },
        { name: 'Consumer Activity Token', symbol: 'CAT', decimals: 18, address: '0x111111f7e9b1fe072ade438f77e1ce861c7ee4e3' },
        { name: 'Cryptonetix', symbol: 'CIX', decimals: 18, address: '0x1175a66a5c3343bbf06aa818bb482ddec30858e0' },
        { name: 'QVT', symbol: 'QVT', decimals: 18, address: '0x1183f92a5624d68e85ffb9170f16bf0443b4c242' },
        { name: '', symbol: 'ETHC', decimals: 0, address: '0x11f8dd7699147566cf193596083d45c8f592c4ba' },
        { name: 'ITL (Italian Lira)', symbol: 'ITL', decimals: 8, address: '0x122a86b5dff2d085afb49600b4cd7375d0d94a5f' },
        { name: 'ArbitrageCT', symbol: 'ARCT', decimals: 8, address: '0x1245ef80f4d9e02ed9425375e8f649b9221b31d8' },
        { name: 'Substratum', symbol: 'SUB', decimals: 2, address: '0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a' },
        { name: 'CREDITS', symbol: 'CS', decimals: 6, address: '0x12a35383ca24ceb44cdcbbecbeb7baccb5f3754a' },
        { name: 'GRID Token', symbol: 'GRID', decimals: 12, address: '0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd' },
        { name: 'Spectre.ai D-Token', symbol: 'SXDT', decimals: 18, address: '0x12b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf' },
        { name: 'Cofoundit', symbol: 'CFI', decimals: 18, address: '0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e' },
        { name: 'Musiconomi', symbol: 'MCI', decimals: 18, address: '0x138a8752093f4f9a79aaedf48d4b9248fab93c9c' },
        { name: 'Travelling Free Token', symbol: 'TFT', decimals: 8, address: '0x13ea82d5e1a811f55bda9c86fdd6195a6bd23aed' },
        { name: 'Divi Exchange Token', symbol: 'DIVX', decimals: 18, address: '0x13f11c9905a08ca76e3e853be63d4f0944326c72' },
        { name: 'Accelerator', symbol: 'ACC', decimals: 18, address: '0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2' },
        { name: 'Confido Token', symbol: 'CFD', decimals: 18, address: '0x14839bf22810f09fb163af69bd21bd5476f445cd' },
        { name: 'CareCoin', symbol: 'CCT', decimals: 18, address: '0x149a23f3d1a1e61e1e3b7eddd27f32e01f9788c7' },
        { name: 'HackerGold', symbol: 'HKG', decimals: 3, address: '0x14f37b574242d366558db61f3335289a5035c506' },
        { name: 'SeedCash', symbol: 'SCX', decimals: 0, address: '0x14fffb1e001615b7fb7c7857bdf440a610022e5b' },
        { name: 'BitBoost Tokens', symbol: 'BBT', decimals: 4, address: '0x1500205f50bf3fd976466d0662905c9ff254fc9c' },
        { name: 'Bitcoin2X', symbol: 'BTC2X', decimals: 8, address: '0x15ef5b9447710eab904e63e6233ff540400d603f' },
        { name: 'eREAL', symbol: 'eREAL', decimals: 18, address: '0x15f173b7aca7cd4a01d6f8360e65fb4491d270c1' },
        { name: 'Persian', symbol: 'PRS', decimals: 18, address: '0x163733bcc28dbf26b41a8cfa83e369b5b3af741b' },
        { name: 'T8Coin', symbol: 'T8C', decimals: 3, address: '0x164f64ef2a44444743c5472fa68fb3784060d286' },
        { name: 'RHOC', symbol: 'RHOC', decimals: 8, address: '0x168296bb09e24a88805cb9c33356536b980d3fc5' },
        { name: 'Tio', symbol: 'TIO', decimals: 18, address: '0x16b5a0de0520e1964a20ac8ef4034bd7d0920d8f' },
        { name: 'United Traders Token', symbol: 'UTT', decimals: 8, address: '0x16f812be7fff02caf662b85d5d58a5da6572d4df' },
        { name: 'CAD Static', symbol: 'CAD_S', decimals: 18, address: '0x1735fc2b89b80d1ae33c35dd55eae7fa7642f336' },
        { name: 'Numeraire', symbol: 'NMR', decimals: 18, address: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671' },
        { name: 'CoinDash Token', symbol: 'CDT', decimals: 18, address: '0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af' },
        { name: 'Fitcoin', symbol: 'FIT', decimals: 5, address: '0x179a2e413386db620d5b89a18550a3874385f726' },
        { name: 'FLiK', symbol: 'FLIK', decimals: 14, address: '0x17fd666fa0784885fa1afec8ac624d9b7e72b752' },
        { name: 'ZCashGOLD', symbol: 'ZCG', decimals: 8, address: '0x180e5087935a94fd5bbab00fd2249c5be0473381' },
        { name: 'Alaricoin', symbol: 'ALCO', decimals: 8, address: '0x181a63746d3adcf356cbc73ace22832ffbb1ee5a' },
        { name: 'EUR Static', symbol: 'EUR_S', decimals: 18, address: '0x1831887fbabf783910db128e60c41bfa016059d8' },
        { name: 'Oyster Pearl', symbol: 'PRL', decimals: 18, address: '0x1844b21593262668b7248d0f57a220caaba46ab9' },
        { name: 'Readcoin', symbol: 'RCN', decimals: 8, address: '0x189c05c3c191015c694032e1b09c190d5db3fb50' },
        { name: 'GoGuides', symbol: 'eGO', decimals: 18, address: '0x18cabd1e7db6c52406719cb72859ea2c2eea75d6' },
        { name: 'Elcoin Token', symbol: 'ELC', decimals: 18, address: '0x18edc1b644839eed61c69e624e96bbd469a2ef52' },
        { name: 'Fame', symbol: 'FAM', decimals: 12, address: '0x190e569be071f40c704e15825f285481cb74b6cc' },
        { name: 'UmbrellaCoin', symbol: 'UMC', decimals: 6, address: '0x190fb342aa6a15eb82903323ae78066ff8616746' },
        { name: 'BitDegree Token', symbol: 'BDG', decimals: 18, address: '0x1961b3331969ed52770751fc718ef530838b6dee' },
        { name: 'UHUB', symbol: 'HUB', decimals: 18, address: '0x19aea60e2fd6ac54ecf2576292c8fc7046429c37' },
        { name: 'MyWish Token', symbol: 'WISH', decimals: 18, address: '0x1b22c32cd936cb97c28c5690a0695a82abf688e6' },
        { name: 'HOQU Token', symbol: 'HQX', decimals: 18, address: '0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa' },
        { name: 'EthBits ETBS Token', symbol: 'ETBS', decimals: 12, address: '0x1b9743f556d65e757c4c650b4555baf354cb8bd3' },
        { name: 'SHIT token', symbol: 'SHIT', decimals: 2, address: '0x1bb9e8ea817d56eccc212ce63f7da95298f98719' },
        { name: 'ROC', symbol: 'ROC', decimals: 10, address: '0x1bcbc54166f6ba149934870b60506199b6c9db6d' },
        { name: 'Parachute', symbol: 'PAR', decimals: 18, address: '0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06' },
        { name: 'BLOCKMASON CREDIT PROTOCOL TOKEN', symbol: 'BCPT', decimals: 18, address: '0x1c4481750daa5ff521a2a7490d9981ed46465dbd' },
        { name: 'ANTS Reloaded', symbol: 'ANTS', decimals: 8, address: '0x1ccc29f9ced9d1a5ce81a7262eac8fcd7eca5788' },
        { name: '1K Token', symbol: '1KT', decimals: 18, address: '0x1d10997e92011398a20612f9ee87e33449bc1fe4' },
        { name: 'CanYaCoin', symbol: 'CAN', decimals: 6, address: '0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0' },
        { name: 'CREDEROOM Token', symbol: 'CDRT', decimals: 8, address: '0x1d9e20e581a5468644fe74ccb6a46278ef377f9e' },
        { name: 'USD Static', symbol: 'USD_S', decimals: 18, address: '0x1daaf3d62582639c6a7eabb467e2db9b56fafbbd' },
        { name: 'Lalena', symbol: 'LLA', decimals: 18, address: '0x1db186898bccde66fa64a50e4d81078951a30dbe' },
        { name: 'Spank', symbol: 'SPNK', decimals: 8, address: '0x1eab19e6623e8cbcafc252e275f5b51c27656faf' },
        { name: 'eLTC', symbol: 'ELTC', decimals: 18, address: '0x1f103fd7c4fa908c25387da70ed287b632bd22a2' },
        { name: 'IRONCOIN', symbol: 'IRC', decimals: 8, address: '0x1f21d8395655fb262251897df7cb3c9358bec6a2' },
        { name: 'Bancor Network Token', symbol: 'BNT', decimals: 18, address: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c' },
        { name: 'NOKU', symbol: 'NOKU', decimals: 18, address: '0x1fc52f1abade452dd4674477d4711951700b3d27' },
        { name: 'CoinLoan', symbol: 'CLT', decimals: 8, address: '0x2001f2a0cf801ecfda622f6c28fb6e10d803d969' },
        { name: 'NihilCoin', symbol: 'NIH', decimals: 8, address: '0x202e295df742befa5e94e9123149360db9d9f2dc' },
        { name: 'Blockpass Token', symbol: 'BPT', decimals: 18, address: '0x2160e6c0ae8ca7d62fe1f57fc049f8363283ff5f' },
        { name: 'LionCoin', symbol: 'LION', decimals: 18, address: '0x2167fb82309cf76513e83b25123f8b0559d6b48f' },
        { name: 'aducoin', symbol: 'ADU', decimals: 18, address: '0x21692a811335301907ecd6343743791802ba7cfd' },
        { name: 'GOLDREWARD', symbol: 'GRX', decimals: 18, address: '0x219218f117dc9348b358b8471c55a073e5e0da0b' },
        { name: 'MIND Token', symbol: 'MIND', decimals: 18, address: '0x222728c202e7164dfbd127181d46409338c4328e' },
        { name: 'Network Token', symbol: 'NTWK', decimals: 18, address: '0x2233799ee2683d75dfefacbcd2a26c78d34b470d' },
        { name: 'Propy', symbol: 'PRO', decimals: 8, address: '0x226bb599a12c826476e3a771454697ea52e9e220' },
        { name: 'JPY Risk', symbol: 'JPY_R', decimals: 18, address: '0x22a3d74c363379189b6cc059d8fbd888e98df5ec' },
        { name: 'Digital Rupiah', symbol: 'DRP', decimals: 8, address: '0x22c10728343e9d49ef25080f74a223878a3d4052' },
        { name: 'Genevieve VC', symbol: 'GXVC', decimals: 10, address: '0x22f0af8d78851b72ee799e05f54a77001586b18a' },
        { name: 'TravelCoin', symbol: 'TRV', decimals: 16, address: '0x23cb17d7d079518dbff4febb6efcc0de58d8c984' },
        { name: 'Bananas', symbol: 'BNN', decimals: 8, address: '0x2405cc17ba128bfa7117815e04a4da228013f5bc' },
        { name: 'UnikoinGold', symbol: 'UKG', decimals: 18, address: '0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b' },
        { name: 'Proof Presale Token', symbol: 'PPT', decimals: 18, address: '0x2469f31a34fcaac0debf73806ce39b2388874b13' },
        { name: 'SPARTA', symbol: 'SPARTA', decimals: 4, address: '0x24aef3bf1a47561500f9430d74ed4097c47f51f2' },
        { name: 'Alvalor', symbol: 'TVAL', decimals: 12, address: '0x24cebc1548e698feffb5553b8ac8043b51069faa' },
        { name: 'IUNGO token', symbol: 'ING', decimals: 18, address: '0x24ddff6d8b8a42d835af3b440de91f3386554aa4' },
        { name: 'BioPayCoin', symbol: 'BIO', decimals: 18, address: '0x25432dd810730331498c22fbf6b98432e7ef3e66' },
        { name: 'Raiden Token', symbol: 'RDN', decimals: 18, address: '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6' },
        { name: 'Playkey', symbol: 'PKT', decimals: 18, address: '0x2604fa406be957e542beb89e6754fcde6815e83f' },
        { name: 'Golden Fleece', symbol: 'GFL', decimals: 18, address: '0x26607f9bf9d62a37b0c78e1d3719fcd1fa32bef9' },
        { name: 'AICoin', symbol: 'XAI', decimals: 8, address: '0x268b7976e94e84a48bf8b2b57ba34b59ed836a74' },
        { name: 'ERC20', symbol: 'ERC', decimals: 18, address: '0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb' },
        { name: 'Crypto20', symbol: 'C20', decimals: 18, address: '0x26e75307fc0c021472feb8f727839531f112f317' },
        { name: 'AirSwap Token', symbol: 'AST', decimals: 4, address: '0x27054b13b1b798b345b591a4d22e6562d47ea75a' },
        { name: 'Slipstream', symbol: 'SLIP', decimals: 0, address: '0x27537ff4df3081cef9bee9b29cac764067b42611' },
        { name: 'Enumivo', symbol: 'ENU', decimals: 8, address: '0x275b69aa7c8c1d648a0557656bce1c286e69a29d' },
        { name: 'CryptoSocial', symbol: 'CSL', decimals: 18, address: '0x275fd328c3986be83f8b60f79c73cf63fde98ca5' },
        { name: 'KickCoin', symbol: 'KICK', decimals: 8, address: '0x27695e09149adc738a978e9a678f99e4c39e9eb9' },
        { name: 'Carlos Matos Token', symbol: 'HEY', decimals: 18, address: '0x278f5d89c85a4ac8aaa39e08444212cbb2546fd2' },
        { name: 'AirToken', symbol: 'AIR', decimals: 8, address: '0x27dce1ec4d3f72c3e457cc50354f1f975ddef488' },
        { name: 'Wand Token', symbol: 'WAND', decimals: 18, address: '0x27f610bf36eca0939093343ac28b1534a721dbb4' },
        { name: 'TssToken', symbol: 'TSS', decimals: 18, address: '0x28481cdc0e4fa79164491d47e8837edeb3993f20' },
        { name: 'WaBi', symbol: 'WaBi', decimals: 18, address: '0x286bda1413a2df81731d4930ce2f862a35a609fe' },
        { name: 'AVY Token', symbol: 'AVY', decimals: 18, address: '0x289925d08b07e73dd0dd02d1407c877942215082' },
        { name: '', symbol: 'EPOSN', decimals: 18, address: '0x289fe11c6f46e28f9f1cfc72119aee92c1da50d0' },
        { name: 'Ludum', symbol: 'LDM', decimals: 18, address: '0x28a40acf39b1d3c932f42dd8068ad00a5ad6448f' },
        { name: 'Ethereum Gold', symbol: 'ETG', decimals: 0, address: '0x28c8d01ff633ea9cd8fc6a451d7457889e698de6' },
        { name: 'BitDice CSNO', symbol: 'CSNO', decimals: 8, address: '0x29d75277ac7f0335b2165d0895e8725cbf658d73' },
        { name: 'BitAsean', symbol: 'BAS', decimals: 8, address: '0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1' },
        { name: 'FoodCoin', symbol: 'FOOD', decimals: 8, address: '0x2a093bcf0c98ef744bb6f69d74f2f85605324290' },
        { name: 'AdBank', symbol: 'ADB', decimals: 18, address: '0x2baac9330cf9ac479d819195794d79ad0c7616e3' },
        { name: 'SkinCoin', symbol: 'SKIN', decimals: 6, address: '0x2bdc0d42996017fce214b21607a515da41a9e0c5' },
        { name: 'Spectre.ai U-Token', symbol: 'SXUT', decimals: 18, address: '0x2c82c73d5b34aa015989462b2948cd616a37641f' },
        { name: 'VIB', symbol: 'VIB', decimals: 18, address: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724' },
        { name: 'GeoUnits', symbol: 'GUNS', decimals: 18, address: '0x2ca72c9699b92b47272c9716c664cad6167c80b0' },
        { name: 'DMarket Token', symbol: 'DMT', decimals: 8, address: '0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1' },
        { name: 'Infinity Pay', symbol: 'IPY', decimals: 8, address: '0x2cfd4c10c075fa51649744245ec1d0aa3d567e23' },
        { name: 'Authorship Token', symbol: 'ATS', decimals: 4, address: '0x2daee1aa61d60a252dc80564499a69802853583a' },
        { name: 'HashRush', symbol: 'RC', decimals: 8, address: '0x2dbe0f03f1dddbdbc87557e86df3878ae25af855' },
        { name: 'DICE', symbol: 'ROL', decimals: 16, address: '0x2e071d2966aa7d8decb1005885ba1977d6038a65' },
        { name: 'Logarithm', symbol: 'LGR', decimals: 8, address: '0x2eb86e8fc520e0f6bb5d9af08f924fe70558ab89' },
        { name: 'Aducoin', symbol: 'ADU', decimals: 18, address: '0x2edc6fcc641f0169d54abb842f96f701eae85e4e' },
        { name: 'PoWEth', symbol: 'POWE', decimals: 8, address: '0x2ee6d1a3ba4e80a61bdfb48a90d40a5cef455326' },
        { name: 'eRipple', symbol: 'EXRP', decimals: 18, address: '0x2f1b8c9d0a21b747d8ca370f93cb09d3daf222ef' },
        { name: 'HYBRID', symbol: 'XHY', decimals: 8, address: '0x2f4baef93489b09b5e4b923795361a65a26f55e5' },
        { name: 'Agora', symbol: 'AGO', decimals: 18, address: '0x2f5e044ad4adac34c8d8df738fac7743eda1409c' },
        { name: 'LatiumX', symbol: 'LATX', decimals: 8, address: '0x2f85e502a988af76f7ee6d83b7db8d6c0a823bf9' },
        { name: 'PayFair Token', symbol: 'PFR', decimals: 8, address: '0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97' },
        { name: 'DomainToken', symbol: 'DOM', decimals: 0, address: '0x30aee7f259d6d1564ebef457847c672b30f13cbc' },
        { name: 'ClassyCoin', symbol: 'ClassyCoin', decimals: 16, address: '0x30cc0e266cf33b8eac6a99cbd98e39b890cfd69b' },
        { name: 'CoinFi', symbol: 'COFI', decimals: 18, address: '0x3136ef851592acf49ca4c825131e364170fa32b3' },
        { name: 'Coin Tour', symbol: 'COT', decimals: 8, address: '0x31705aa4933c106f3d15f64df0eb70d8d37fc36e' },
        { name: 'ALLY', symbol: 'ALLY', decimals: 18, address: '0x31b5e97294e1afd6fff6ffe4cba89a344555f753' },
        { name: 'Blockport Token', symbol: 'BPT', decimals: 18, address: '0x327682779bab2bf4d1337e8974ab9de8275a7ca8' },
        { name: 'TriaToken', symbol: 'TRIA', decimals: 10, address: '0x3293cc907fde439b39aedaf1b982785adaff186b' },
        { name: '', symbol: 'NUGD', decimals: 0, address: '0x32c785e4e8477b277fea2ca2301727084d79d933' },
        { name: 'ATMToken', symbol: 'ATMT', decimals: 18, address: '0x331a550a2c7f96384eb69127aa0ea9ad4b5da099' },
        { name: 'Crystal Clear Token', symbol: 'CCT', decimals: 18, address: '0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22' },
        { name: 'WishFinance Token', symbol: 'WSH', decimals: 10, address: '0x33b7a018934c6e90fd63189d7c4517f0f776142f' },
        { name: 'BLOCKv Token', symbol: 'VEE', decimals: 18, address: '0x340d2bde5eb28c1eed91b2f790723e3b160613b7' },
        { name: 'RoboAdvisorCoin', symbol: 'RAC', decimals: 18, address: '0x342ba159f988f24f0b033f3cc5232377ee500543' },
        { name: 'Pinky', symbol: 'PNK', decimals: 0, address: '0x3485b9566097ad656c70d6ebbd1cd044e2e72d05' },
        { name: 'Pundi X Token', symbol: 'PXS', decimals: 18, address: '0x358d12436080a01a16f711014610f8a4c2c2d233' },
        { name: 'DENT', symbol: 'DENT', decimals: 8, address: '0x3597bfd533a99c9aa083587b074434e61eb0a258' },
        { name: 'JAPAN BRAND COIN', symbol: 'JBC', decimals: 18, address: '0x3635e381c67252405c1c0e550973155832d5e490' },
        { name: 'Ethereum Alpes', symbol: 'EALP', decimals: 18, address: '0x37256d58e298cacaa82aa0527d56521f1b19e1f5' },
        { name: 'MillionDollarToken', symbol: 'MDT', decimals: 0, address: '0x37f014c64d186eaf879c0033846b51924ce42584' },
        { name: 'exsulcoin', symbol: 'XUL', decimals: 0, address: '0x382a71ecb288da8701428406a36ffa5d8f072d55' },
        { name: 'SPHTX', symbol: 'SPHTX', decimals: 18, address: '0x3833dda0aeb6947b98ce454d89366cba8cc55528' },
        { name: 'Bezop', symbol: 'Bez', decimals: 18, address: '0x3839d8ba312751aa0248fed6a8bacb84308e20ed' },
        { name: 'Embers', symbol: 'MBRS', decimals: 0, address: '0x386467f1f3ddbe832448650418311a479eecfc57' },
        { name: 'benjaCoin', symbol: 'BENJA', decimals: 8, address: '0x38968746147bbaeb882f356ad9a57594bb158235' },
        { name: 'Bitpark', symbol: 'BTA', decimals: 18, address: '0x38c04d415f6740c7700185533a64b5f44cbf684c' },
        { name: 'NONDO', symbol: 'NDO', decimals: 4, address: '0x38d1c39c3e85dbf0fc2f2d637a4872530ad07a5f' },
        { name: 'Speed Mining Service', symbol: 'SMS', decimals: 3, address: '0x39013f961c378f02c2b82a6e1d31e9812786fd9d' },
        { name: 'DISLEDGER', symbol: 'DCL', decimals: 3, address: '0x399a0e6fbeb3d74c85357439f4c8aed9678a5cbf' },
        { name: 'Wax Token', symbol: 'WAX', decimals: 8, address: '0x39bb259f66e1c59d5abef88375979b4d20d98022' },
        { name: 'Mindexcoin', symbol: 'MIC', decimals: 18, address: '0x3a1237d38d0fb94513f85d61679cad7f38507242' },
        { name: 'FLIP Token', symbol: 'FLP', decimals: 18, address: '0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3' },
        { name: 'EtherBIT', symbol: 'ETHB', decimals: 8, address: '0x3a26746ddb79b1b8e4450e3f4ffe3285a307387e' },
        { name: 'Privatix', symbol: 'PRIX', decimals: 8, address: '0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a' },
        { name: 'RvT', symbol: 'RVT', decimals: 18, address: '0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244' },
        { name: 'The Movement', symbol: 'MVT', decimals: 18, address: '0x3d46454212c61ecb7b31248047fa033120b88668' },
        { name: 'DRP Security', symbol: 'DRPS', decimals: 8, address: '0x3e250a4f78410c29cfc39463a81f14a226690eb4' },
        { name: 'Alpha', symbol: 'ALPHA', decimals: 18, address: '0x3eb21f4678b352fcd8facf06b642c6720e04961b' },
        { name: 'Heiss Shares', symbol: 'HYS', decimals: 1, address: '0x3f5bc4fc79b5f8b93ff4814cd9f9a281893d50c9' },
        { name: 'MobileGo Token', symbol: 'MGO', decimals: 8, address: '0x40395044ac3c0c57051906da938b54bd6557f212' },
        { name: 'Republic Token', symbol: 'REN', decimals: 18, address: '0x408e41876cccdc0f92210600ef50372656052a38' },
        { name: 'OCoin', symbol: 'OCN', decimals: 18, address: '0x4092678e4e78230f46a1534c0fbc8fa39780892b' },
        { name: 'Mixed Martial Arts', symbol: 'MMA', decimals: 18, address: '0x40b04166871d9956f5f261d76d349da8d07f82c3' },
        { name: 'EU coin', symbol: 'EC', decimals: 0, address: '0x40caa728bb4bafa56f38a58623a12fbe6c90209d' },
        { name: 'EBitCoinCash', symbol: 'EBCH', decimals: 18, address: '0x415116bad878730f5db008ff381a73222128ad39' },
        { name: 'Salt', symbol: 'SALT', decimals: 8, address: '0x4156d3342d5c385a87d264f90653733592000581' },
        { name: 'Colu Local Network', symbol: 'CLN', decimals: 18, address: '0x4162178b78d6985480a308b2190ee5517460406d' },
        { name: 'Dragon', symbol: 'DRGN', decimals: 18, address: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e' },
        { name: 'FunFair', symbol: 'FUN', decimals: 8, address: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b' },
        { name: 'MedToken', symbol: 'MTN', decimals: 18, address: '0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3' },
        { name: 'Civic', symbol: 'CVC', decimals: 8, address: '0x41e5560054824ea6b0732e656e3ad64e20e94e45' },
        { name: 'BITINDIA', symbol: 'BITINDIA', decimals: 18, address: '0x420335d3deef2d5b87524ff9d0fb441f71ea621f' },
        { name: 'Stop Tabac Coin', symbol: 'STCn', decimals: 0, address: '0x420c42ce1370c0ec3ca87d9be64a7002e78e6709' },
        { name: 'Adshares Token', symbol: 'ADST', decimals: 0, address: '0x422866a8f0b032c5cf1dfbdef31a20f4509562b0' },
        { name: 'FOTA', symbol: 'FOTA', decimals: 18, address: '0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c' },
        { name: 'SPANK', symbol: 'SPANK', decimals: 18, address: '0x42d6622dece394b54999fbd73d108123806f6a18' },
        { name: 'Opus Token', symbol: 'OPT', decimals: 18, address: '0x4355fc160f74328f9b383df2ec589bb3dfd82ba0' },
        { name: 'BETNetwork', symbol: 'BTN', decimals: 4, address: '0x437cf0bf53634e3dfa5e3eaff3104004d50fb532' },
        { name: 'UG Token', symbol: 'UGT', decimals: 18, address: '0x43ee79e379e7b78d871100ed696e803e7893b644' },
        { name: 'ELTCOIN', symbol: 'ELTCOIN', decimals: 8, address: '0x44197a4c44d6a059297caf6be4f7e172bd56caaf' },
        { name: 'AdEx', symbol: 'ADX', decimals: 4, address: '0x4470bb87d77b963a013db939be332f927f2b992e' },
        { name: 'Ethereum Centurion', symbol: 'ETHC', decimals: 8, address: '0x44830e5fbe354af3c1c8d405170c08d3bc8a2cd9' },
        { name: 'NEO Gold', symbol: 'NEOG', decimals: 0, address: '0x449574c69f3a658794829ed81639a7a9ece041e1' },
        { name: '', symbol: 'EBTGOLD', decimals: 0, address: '0x44e6d9ae9053a16e9311fd9702291c5516804359' },
        { name: 'SnipCoin', symbol: 'SNIP', decimals: 18, address: '0x44f588aeeb8c44471439d1270b3603c66a9262f1' },
        { name: 'Datocoin', symbol: 'DTCN', decimals: 4, address: '0x450711d5da9f7cadb0e4d3472be550328b37bdda' },
        { name: '"BANKEX" project utility token', symbol: 'BKX', decimals: 18, address: '0x45245bc59219eeaaf6cd3f382e078a461ff9de7b' },
        { name: 'REDEEM Token', symbol: 'DEEM', decimals: 18, address: '0x45321004790a4dae7ba19217a10574d55739efc7' },
        { name: 'Nexium', symbol: 'NxC', decimals: 3, address: '0x45e42d659d9f9466cd5df622506033145a9b89bc' },
        { name: 'Ultimat', symbol: 'ULT', decimals: 18, address: '0x4632091b0dd0e0902d1fe0534e16eb7b20328d70' },
        { name: 'StarCredits', symbol: 'STRC', decimals: 8, address: '0x46492473755e8df960f8034877f61732d718ce96' },
        { name: 'RAX Token', symbol: 'RAX', decimals: 18, address: '0x468d58d6a52249844a166d0ef045dbdd7ce0c751' },
        { name: 'CREDITS', symbol: 'CS', decimals: 6, address: '0x46b9ad944d1059450da1163511069c718f699d31' },
        { name: 'Rasper', symbol: 'RSPR', decimals: 16, address: '0x46eec301d2d00087145d1588282c182bd1890e5c' },
        { name: 'Valid Cash', symbol: 'VALID', decimals: 2, address: '0x4794b28f59533c52d99028e06878ae7d1e4d1802' },
        { name: 'EQUAL', symbol: 'EQL', decimals: 18, address: '0x47dd62d4d075dead71d0e00299fc56a2d747bebb' },
        { name: 'R token', symbol: 'R', decimals: 0, address: '0x48f775efbe4f5ece6e0df2f7b5932df56823b990' },
        { name: 'Ethereum X', symbol: 'ETHX', decimals: 18, address: '0x494bbaf0124285e6ecb4dfd9eac76e18a9bf470f' },
        { name: 'Billionaire Token', symbol: 'XBL', decimals: 18, address: '0x49aec0752e68d0282db544c677f6ba407ba17ed7' },
        { name: 'Relex', symbol: 'RLX', decimals: 18, address: '0x4a42d2c580f83dce404acad18dab26db11a1750e' },
        { name: 'GECoin', symbol: 'GEC', decimals: 3, address: '0x4a536c1ce7ad7f6e8d2e59135e17aef5ef4dd4e6' },
        { name: 'SWAP', symbol: 'SWP', decimals: 18, address: '0x4b35e0ab998ebe8414871c13cf778f9d0bbdf609' },
        { name: 'Handelion  token', symbol: 'HDLT', decimals: 18, address: '0x4b4e611823702285fd526d7a8a3b0aa99ab2dbcd' },
        { name: 'Skrilla', symbol: 'SKR', decimals: 6, address: '0x4c382f8e09615ac86e08ce58266cc227e7d4d913' },
        { name: 'Funnel', symbol: 'FNL', decimals: 3, address: '0x4c5601164e2048a4154de91fa5e0b07e626cab7f' },
        { name: 'SelfKey', symbol: 'KEY', decimals: 18, address: '0x4cc19356f2d37338b9802aa8e8fc58b0373296e7' },
        { name: 'BihuKey', symbol: 'KEY', decimals: 18, address: '0x4cd988afbad37289baaf53c13e98e2bd46aaea8c' },
        { name: 'AION', symbol: 'AION', decimals: 8, address: '0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466' },
        { name: 'WePower Token', symbol: 'WPR', decimals: 18, address: '0x4cf488387f035ff08c371515562cba712f9015d4' },
        { name: 'Adbota', symbol: 'BOTA', decimals: 18, address: '0x4d11061ec8f401edc2395b5f439a05eee6ccfa50' },
        { name: 'CoinCrowd', symbol: 'XCC', decimals: 18, address: '0x4d829f8c92a6691c56300d020c9e0db984cfe2ba' },
        { name: 'Bee Token', symbol: 'BEE', decimals: 18, address: '0x4d8fc1453a0f359e99c9675954e656d80d996fbf' },
        { name: 'Amber Token', symbol: 'AMB', decimals: 18, address: '0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce' },
        { name: 'FundRequest', symbol: 'FND', decimals: 18, address: '0x4df47b4969b2911c966506e3592c41389493953b' },
        { name: 'Xaurum', symbol: 'XAUR', decimals: 8, address: '0x4df812f6064def1e5e029f1ca858777cc98d2d81' },
        { name: 'Credo Token', symbol: 'CREDO', decimals: 18, address: '0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be' },
        { name: 'YoshiCoin', symbol: 'YC', decimals: 0, address: '0x4e260e3ca268e40133c84b142de73108a7c1ec99' },
        { name: 'eTelevision', symbol: 'eTV', decimals: 8, address: '0x4e279d8638e8669fad40e018fc181d26ee780380' },
        { name: 'CehhCoin', symbol: 'CEHH', decimals: 0, address: '0x4f38f4229924bfa28d58eeda496cc85e8016bccc' },
        { name: 'HealthHeart Tokens', symbol: 'HHT', decimals: 18, address: '0x4fbc28e3b3c1c50ee05dcd66d9fc614a0cb99705' },
        { name: 'JavaScript', symbol: 'JS', decimals: 8, address: '0x5046e860ff274fb8c66106b0ffb8155849fb0787' },
        { name: 'EmphyCoin', symbol: 'EPY', decimals: 8, address: '0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d' },
        { name: 'PolyAI', symbol: 'AI', decimals: 18, address: '0x5121e348e897daef1eef23959ab290e5557cf274' },
        { name: 'ChainLink Token', symbol: 'LINK', decimals: 18, address: '0x514910771af9ca656af840dff83e8264ecf986ca' },
        { name: 'Ormeus Coin', symbol: 'ORME', decimals: 8, address: '0x516e5436bafdc11083654de7bb9b95382d08d5de' },
        { name: 'VIU', symbol: 'VIU', decimals: 18, address: '0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5' },
        { name: 'Moeda Loyalty Points', symbol: 'MDA', decimals: 18, address: '0x51db5ad35c671a87207d88fc11d593ac0c8415bd' },
        { name: 'IQT Token', symbol: 'IQT', decimals: 8, address: '0x51ee82641ac238bde34b9859f98f5f311d6e4954' },
        { name: 'CARBON TOKEN CLASSIC', symbol: 'CTC', decimals: 4, address: '0x52514e3acaeb06cab050a69b025083082ebe5b54' },
        { name: 'Pump coin', symbol: 'PUMP', decimals: 15, address: '0x52a17ca01b9925752aefde41bf80d7b10514e136' },
        { name: 'fidentiaX', symbol: 'fdX', decimals: 18, address: '0x52a7cb918c11a16958be40cba7e31e32a499a465' },
        { name: 'MOLD', symbol: 'MLD', decimals: 18, address: '0x52e30201f31283dc5f7928b4198896083f604416' },
        { name: 'YachtCoin', symbol: 'YACHT', decimals: 9, address: '0x52f7018bc6ba4d24abfbaefccae4617bfb0a0b52' },
        { name: 'Ethereum Blue', symbol: 'BLUE', decimals: 8, address: '0x539efe69bcdd21a83efd9122571a64cc25e0282b' },
        { name: 'Decent.Bet Token', symbol: 'DBET', decimals: 18, address: '0x540449e4d172cd9491c76320440cd74933d5691a' },
        { name: 'Meridian', symbol: 'MDN', decimals: 8, address: '0x550879f1778b575ddc8eb2095fbc9f4783b5f2f6' },
        { name: 'Decision Token', symbol: 'HST', decimals: 18, address: '0x554c20b7c486beee439277b4540a434566dc4c02' },
        { name: 'Autonio', symbol: 'NIO', decimals: 0, address: '0x5554e04e76533e1d14c52f05beef6c9d329e1e30' },
        { name: 'Pebbles', symbol: 'PBL', decimals: 18, address: '0x55648de19836338549130b1af587f16bea46f66b' },
        { name: 'BITCOINPURE', symbol: 'BTCP', decimals: 18, address: '0x559201fa75902cdc4055e40f0c90e3d702049987' },
        { name: 'Jade Cash Coin', symbol: 'JCC', decimals: 18, address: '0x55a0dd2f1b1d8034894c99507b6439eca479cf62' },
        { name: 'PEX-Token', symbol: 'PEXT', decimals: 4, address: '0x55c2a0c171d920843560594de3d6eecc09efc098' },
        { name: 'GreenPower', symbol: 'P+', decimals: 0, address: '0x55e7c4a77821d5c50b4570b08f9f92896a25e012' },
        { name: 'iGnite', symbol: 'IGN', decimals: 6, address: '0x569cbdcc684edcc589939cc8f6b96e6abd9eb0f3' },
        { name: 'Ethereum Meta', symbol: 'ETHM', decimals: 18, address: '0x56b6431f45d08eed55f34371386326c739eacbcc' },
        { name: 'BlockCAT Token', symbol: 'CAT', decimals: 18, address: '0x56ba2ee7890461f463f7be02aac3099f6d5811a8' },
        { name: 'BiCode', symbol: 'CODE', decimals: 8, address: '0x56e7f2cd7d5382506aab084a67d70e603cdb23f7' },
        { name: 'Solareum', symbol: 'SLRM', decimals: 18, address: '0x56ee8c9bd1d445a3324ad83e86d8be309db8f85d' },
        { name: 'Bluzelle Token', symbol: 'BLZ', decimals: 18, address: '0x5732046a883704404f284ce41ffadd5b007fd668' },
        { name: 'KredX Token', symbol: 'KRT', decimals: 4, address: '0x5783862cef49094be4de1fe31280b2e33cf87416' },
        { name: 'MeeTip', symbol: 'MTIP', decimals: 18, address: '0x57a3dc224dccc0526954ff60ca6badd19c274d88' },
        { name: 'Neubulous Token', symbol: 'NEBO', decimals: 3, address: '0x580d69737e11cf2fb306c8fc0161b86f7c9f03ba' },
        { name: 'SocialX', symbol: 'SOCX', decimals: 8, address: '0x587c549c4113127340ac0f5e996cab7a4f35bb49' },
        { name: 'BIONT Token', symbol: 'BIONT', decimals: 18, address: '0x5882d49d3511e09096cbbab7e19fbfb82f65f28d' },
        { name: 'GXC', symbol: 'GXC', decimals: 10, address: '0x58ca3065c0f24c7c96aee8d6056b5b5decf9c2f8' },
        { name: 'PowerLedger', symbol: 'POWR', decimals: 6, address: '0x595832f8fc6bf59c85c527fec3740a1b7a361269' },
        { name: '', symbol: 'SAI', decimals: 18, address: '0x59adcf176ed2f6788a41b8ea4c4904518e62b6a4' },
        { name: 'Horse', symbol: 'HORSE', decimals: 18, address: '0x5b0751713b2527d7f002c0c4e2a37e1219610a6b' },
        { name: 'IDICE', symbol: 'ICE', decimals: 18, address: '0x5a84969bb663fb64f6d015dcf9f622aedc796750' },
        { name: 'BTC LITE', symbol: 'BTCL', decimals: 8, address: '0x5acd19b9c91e596b1f062f18e3d02da7ed8d1e50' },
        { name: 'Bitquence', symbol: 'BQX', decimals: 8, address: '0x5af2be193a6abca9c8817001f45744777db30756' },
        { name: 'MealCoinDinnerful', symbol: 'MCD', decimals: 18, address: '0x5afda18caba69fe3af5e6d56e42e1c9f92c40d77' },
        { name: 'Education', symbol: 'EDU', decimals: 8, address: '0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765' },
        { name: 'Hut34 Entropy Token', symbol: 'ENTRP', decimals: 18, address: '0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3' },
        { name: 'UAHPAY', symbol: 'UAH', decimals: 18, address: '0x5c5413bad5f6fdb0f4fcd1457e46ead8e01d73d3' },
        { name: 'vSlice', symbol: 'VSL', decimals: 18, address: '0x5c543e7ae0a1104f78406c340e9c64fd9fce5170' },
        { name: 'Nexxus', symbol: 'NXX', decimals: 8, address: '0x5c6183d10a00cd747a6dbb5f658ad514383e9419' },
        { name: 'BlockChain Board Of Derivatives Token', symbol: 'BBD', decimals: 18, address: '0x5ca71ea65acb6293e71e62c41b720698b0aa611c' },
        { name: 'Aeternity', symbol: 'AE', decimals: 18, address: '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d' },
        { name: 'iMPERIUM COIN', symbol: 'MPRM', decimals: 0, address: '0x5cf4e9dfd975c52aa523fb5945a12235624923dc' },
        { name: 'ethereumcash', symbol: 'ECASH', decimals: 18, address: '0x5d21ef5f25a985380b65c8e943a0082feda0db84' },
        { name: 'B2BX', symbol: 'B2BX', decimals: 18, address: '0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393' },
        { name: 'Nebulas Token', symbol: 'NAS', decimals: 18, address: '0x5d65d971895edc438f465c17db6992698a52318d' },
        { name: 'RARE', symbol: 'RARE', decimals: 8, address: '0x5ddab66da218fb05dfeda07f1afc4ea0738ee234' },
        { name: 'LockChain', symbol: 'LOC', decimals: 18, address: '0x5e3346444010135322268a4630d2ed5f8d09446c' },
        { name: 'Wi Coin', symbol: 'WiC', decimals: 18, address: '0x5e4abe6419650ca839ce5bb7db422b881a6064bb' },
        { name: 'Bitlong BTL', symbol: 'BTL', decimals: 6, address: '0x5ecd84482176db90bb741ddc8c2f9ccc290e29ce' },
        { name: 'Rebellious', symbol: 'REBL', decimals: 18, address: '0x5f53f7a8075614b699baad0bc2c899f4bad8fbbf' },
        { name: 'JPY Static', symbol: 'JPY_S', decimals: 18, address: '0x5f54c1512d036a0dd92744ee0a55ed183dde0484' },
        { name: 'Artemine', symbol: 'ARTE', decimals: 18, address: '0x5f6e7fb7fe92ea7822472bb0e8f1be60d6a4ea50' },
        { name: 'BlackGarlic', symbol: 'BGL', decimals: 18, address: '0x5fb05fffe4be327ab88dacd6ee61e60ddc8958ae' },
        { name: 'Twit', symbol: 'TWIT', decimals: 8, address: '0x60200c0fefc1d0ade1e19a247b703cf3ccdc915a' },
        { name: 'eGold', symbol: 'EGOLD', decimals: 18, address: '0x6025f65f6b2f93d8ed1efedc752acfd4bdbcec3e' },
        { name: 'iEx.ec Network Token', symbol: 'RLC', decimals: 9, address: '0x607f4c5bb672230e8672085532f7e901544a7375' },
        { name: 'Ethino', symbol: 'ENO', decimals: 18, address: '0x614ea929892ea43d3ea2c5e3311b01cc589bad6c' },
        { name: 'DCORP', symbol: 'DRP', decimals: 2, address: '0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed' },
        { name: 'MoviToken', symbol: 'MOVI', decimals: 0, address: '0x623b925b0a57a24ea8de301f2e3e692ce903f0c3' },
        { name: 'PAYPEX', symbol: 'PAYX', decimals: 2, address: '0x62a56a4a2ef4d355d34d10fbf837e747504d38d4' },
        { name: 'Bitcoin Royal', symbol: 'BCR', decimals: 18, address: '0x633a8f8e557702039463f9f2eb20b7936fff8c05' },
        { name: 'Altcoins', symbol: 'ALTS', decimals: 18, address: '0x638ac149ea8ef9a1286c41b977017aa7359e6cfa' },
        { name: 'Soma Community Token', symbol: 'SCT', decimals: 18, address: '0x63b992e6246d88f07fc35a056d2c365e6d441a3d' },
        { name: 'RED MWAT', symbol: 'MWAT', decimals: 18, address: '0x6425c6be902d692ae2db752b3c268afadb099d3b' },
        { name: 'FAPcoin', symbol: 'FAP', decimals: 18, address: '0x6467882316dc6e206feef05fba6deaa69277f155' },
        { name: 'Rent Token', symbol: 'RENT', decimals: 18, address: '0x64c86899bc02dd9af823b131e5acd4369f72bd39' },
        { name: 'FreelancerCoin', symbol: 'LAN', decimals: 18, address: '0x64ff248ddd36430e3640fbea76999941a8bccbd7' },
        { name: 'COSS', symbol: 'COSS', decimals: 18, address: '0x65292eeadf1426cd2df1c4793a3d7519f253913b' },
        { name: 'Chronobank TIME', symbol: 'TIME', decimals: 8, address: '0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53' },
        { name: 'Crescent', symbol: 'CSN', decimals: 8, address: '0x6576963107077cce5ec879978c03ec6bb300cc89' },
        { name: 'BitCAD', symbol: 'BCD', decimals: 6, address: '0x660b612ec57754d949ac1a09d0c2937a010dee05' },
        { name: 'CarTaxi', symbol: 'CTX', decimals: 18, address: '0x662abcad0b7f345ab7ffb1b1fbb9df7894f18e66' },
        { name: 'PornToken', symbol: 'PT', decimals: 18, address: '0x66497a283e0a007ba3974e837784c6ae323447de' },
        { name: 'WINGS', symbol: 'WINGS', decimals: 18, address: '0x667088b212ce3d06a1b553a7221e1fd19000d9af' },
        { name: 'Decent Token', symbol: 'DCNT', decimals: 1, address: '0x6678e467fa5ccfbdc264d12f4b8b28fe4661606b' },
        { name: 'Quantum', symbol: 'QAU', decimals: 8, address: '0x671abbe5ce652491985342e85428eb1b07bc6c64' },
        { name: 'Verify Token', symbol: 'CRED', decimals: 18, address: '0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd' },
        { name: 'BitSerial', symbol: 'BTE', decimals: 18, address: '0x6733d909e10ddedb8d6181b213de32a30ceac7ed' },
        { name: 'ZAP TOKEN', symbol: 'ZAP', decimals: 18, address: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104' },
        { name: 'Ccore Token', symbol: 'CCO', decimals: 18, address: '0x679badc551626e01b23ceecefbc9b877ea18fc46' },
        { name: 'Gnosis Token', symbol: 'GNO', decimals: 18, address: '0x6810e776880c02933d47db1b9fc05908e5386b96' },
        { name: 'GAT Token', symbol: 'GAT', decimals: 18, address: '0x687174f8c49ceb7729d925c3a961507ea4ac7b28' },
        { name: 'Signals', symbol: 'SIG', decimals: 18, address: '0x6888a16ea9792c15a4dcf2f6c623d055c8ede792' },
        { name: 'Mothership Token', symbol: 'MSP', decimals: 18, address: '0x68aa3f232da9bdc2343465545794ef3eea5209bd' },
        { name: 'Gilgames', symbol: 'GGS', decimals: 18, address: '0x68db10ecc599d9f5e657acdafdbf6449d658bb2d' },
        { name: 'European Crypto Bank', symbol: 'ECB', decimals: 4, address: '0x69786859bc92e0ca82fcfe1bffc502b7bea6a069' },
        { name: 'QRL', symbol: 'QRL', decimals: 8, address: '0x697beac28b09e122c4332d163985e8a73121b97f' },
        { name: 'Ravelous', symbol: 'RAVE', decimals: 18, address: '0x6a09e1b7cc5cb52ffdfc585a8df51ced7063915c' },
        { name: 'Bitcoin Red', symbol: 'BTCR', decimals: 8, address: '0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11' },
        { name: 'Dragonglass', symbol: 'DGS', decimals: 8, address: '0x6aedbf8dff31437220df351950ba2a3362168d1b' },
        { name: 'JapaneseAVCoin', symbol: 'JAV', decimals: 8, address: '0x6b0611c65b53e72429d799ed512d0da123ac0fb9' },
        { name: 'SSENTE', symbol: 'ssn', decimals: 8, address: '0x6b14c373c24556165002a00cba4174fd96fe28f0' },
        { name: 'jdini', symbol: 'JDI', decimals: 2, address: '0x6b9e8076a536459303db301ba4430913a7f14c5a' },
        { name: 'Linker Coin', symbol: 'LNC', decimals: 18, address: '0x6beb418fc6e1958204ac8baddcf109b8e9694966' },
        { name: 'LLToken', symbol: 'LLT', decimals: 8, address: '0x6d5cac36c1ae39f41d52393b7a425d0a610ad9f2' },
        { name: 'Windy', symbol: 'WND', decimals: 18, address: '0x6d7a4c14c997333e304d5aef2aece73fd60ecc59' },
        { name: 'BTC2X', symbol: 'B2X', decimals: 8, address: '0x6e58b4c41cab75dc0239938bf5455ab8823ee4de' },
        { name: 'BullishRunCrypto', symbol: 'BULLISH', decimals: 0, address: '0x6ecccf7ebc3497a9334f4fe957a7d5fa933c5bcc' },
        { name: 'eLiteCoin', symbol: 'ELTC', decimals: 18, address: '0x6f1a769952c60b2d03f46419adeda91d87866dab' },
        { name: 'SmartBillions Token', symbol: 'Smart', decimals: 0, address: '0x6f6deb5db0c4994a8283a01d6cfeeb27fc3bbe9c' },
        { name: 'Commodity Ad Network', symbol: 'CDX', decimals: 18, address: '0x6fff3806bbac52a20e0d79bc538d527f6a22c96b' },
        { name: 'openANX Token', symbol: 'OAX', decimals: 18, address: '0x701c244b988a513c945973defa05de933b23fe1d' },
        { name: 'CryptoX', symbol: 'CWX', decimals: 18, address: '0x7058f2ae7c1cfda824c39004253c27e2f6d0f1f9' },
        { name: 'ClearPoll Token', symbol: 'POLL', decimals: 18, address: '0x705ee96c1c160842c92c1aecfcffccc9c412e3d9' },
        { name: 'bzxcoin', symbol: 'BZX', decimals: 18, address: '0x70838403ecc194b73e50b70a177b2ef413a2f421' },
        { name: 'UTRUST Token', symbol: 'UTK', decimals: 18, address: '0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38' },
        { name: 'BitFlux', symbol: 'FLX', decimals: 18, address: '0x70b147e01e9285e7ce68b9ba437fe3a9190e756a' },
        { name: 'Zloadr Token', symbol: 'ZDR', decimals: 8, address: '0x71f1bc89f38b241f3ebf0d5a013fa2850c63a1d4' },
        { name: 'Kamera', symbol: 'KMR', decimals: 18, address: '0x71f7b56f9f8641f73ca71512a93857a7868d1443' },
        { name: 'HyperTV Token', symbol: 'HYTV', decimals: 3, address: '0x7259fddca8d5f0184b3b12aa7e8401964b703a4f' },
        { name: 'YESTERDAY', symbol: 'YESTERDAY', decimals: 18, address: '0x7268f9c2bc9c9e65b4a16888cb5672531ce8e945' },
        { name: 'Worldcore', symbol: 'WRC', decimals: 6, address: '0x72adadb447784dd7ab1f472467750fc485e4cb2d' },
        { name: 'SENDERON', symbol: 'SDRN', decimals: 18, address: '0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7' },
        { name: 'Bitcoineum', symbol: 'BTE', decimals: 8, address: '0x73dd069c299a5d691e9836243bcaec9c8c1d8734' },
        { name: 'Status Network', symbol: 'SNT', decimals: 18, address: '0x744d70fdbe2ba4cf95131626614a1763df805b9e' },
        { name: 'We Bet Crypto', symbol: 'WBA', decimals: 7, address: '0x74951b677de32d596ee851a233336926e6a2cd09' },
        { name: 'EROSCOIN', symbol: 'ERO', decimals: 8, address: '0x74ceda77281b339142a36817fa5f9e29412bab85' },
        { name: 'Accord', symbol: 'ARD', decimals: 18, address: '0x75aa7b0d02532f3833b66c7f0ad35376d373ddf8' },
        { name: 'Gas Files', symbol: 'GAS', decimals: 8, address: '0x75c79b88face8892e7043797570c390bc2db52a7' },
        { name: 'wellieat', symbol: 'WET', decimals: 18, address: '0x76195ffd0cfedf68625b3e5b64c7bd904eeb9d6c' },
        { name: 'Nexxus', symbol: 'NXX', decimals: 8, address: '0x7627de4b93263a6a7570b8dafa64bae812e5c394' },
        { name: 'Better Betting', symbol: 'BETR', decimals: 18, address: '0x763186eb8d4856d536ed4478302971214febc6a9' },
        { name: 'Feed', symbol: 'IFT', decimals: 18, address: '0x7654915a1b82d6d2d0afc37c52af556ea8983c7e' },
        { name: 'Realisto Token', symbol: 'REA', decimals: 18, address: '0x767ba2915ec344015a7938e3eedfec2785195d05' },
        { name: 'eBitcoinCash', symbol: 'eBCC', decimals: 6, address: '0x76e82406a5040b605c6d30caf4802e7eb3184bbc' },
        { name: 'ParagonCoin', symbol: 'PRG', decimals: 6, address: '0x7728dfef5abd468669eb7f9b48a7f70a501ed29d' },
        { name: 'cryptoabs', symbol: 'ABS', decimals: 18, address: '0x7731ee8b0b0ab88977be7922849eb767bbe8da15' },
        { name: 'LitecoinCash', symbol: 'LCASH', decimals: 8, address: '0x7747aeb32d89e527e5ebbf646871ca79805989ad' },
        { name: 'StakePool', symbol: 'POOL', decimals: 8, address: '0x779b7b713c86e3e6774f5040d9ccc2d43ad375f8' },
        { name: 'Integrative Wallet Token', symbol: 'IWT', decimals: 18, address: '0x77faed976e187f26b49e78be8418ab074a341f26' },
        { name: 'ATLANT Token', symbol: 'ATL', decimals: 18, address: '0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05' },
        { name: 'Zeus Shield Coin', symbol: 'ZSC', decimals: 18, address: '0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63' },
        { name: 'CoinsMet', symbol: 'CM', decimals: 18, address: '0x7a79abd3905ef37b8d243c4c28cee73a751eb076' },
        { name: 'Bulleon', symbol: 'BLN', decimals: 18, address: '0x7b1309c1522afd4e66c31e1e6d0ec1319e1eba5e' },
        { name: 'AstroTokens', symbol: 'ASTRO', decimals: 4, address: '0x7b22938ca841aa392c93dbb7f4c42178e3d65e88' },
        { name: 'GOAL Bonanza', symbol: 'GOAL', decimals: 18, address: '0x7b69b78cc7fee48202c208609ae6d1f78ce42e13' },
        { name: 'Dividend', symbol: 'DVD', decimals: 18, address: '0x7c53f13699e1f6ef5c699e893a20948bdd2e4de9' },
        { name: 'SANtiment network token', symbol: 'SAN', decimals: 18, address: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098' },
        { name: 'SSS', symbol: 'SSS', decimals: 8, address: '0x7d3e7d41da367b4fdce7cbe06502b13294deb758' },
        { name: 'Dragon Exchange', symbol: 'DET', decimals: 18, address: '0x7d49eaac4c70abc1a659122f08c0806ae44703ef' },
        { name: 'Change COIN', symbol: 'CAG', decimals: 18, address: '0x7d4b8cce0591c9044a22ee543533b72e976e36c3' },
        { name: 'Ethbet', symbol: 'EBET', decimals: 2, address: '0x7d5edcd23daa3fb94317d32ae253ee1af08ba14d' },
        { name: 'eLTC', symbol: 'ELTC', decimals: 8, address: '0x7e9d62e1ff4e34096f91ee0153222ab81f7184f0' },
        { name: 'CANADACOIN', symbol: 'CANADA', decimals: 18, address: '0x7ea4c29d3d37f9b259be610b67b3125c4d095d02' },
        { name: 'blockoptions', symbol: 'BOP', decimals: 8, address: '0x7f1e2c7d6a69bf34824d72c53b4550e895c0d8c2' },
        { name: 'Ohni', symbol: 'Ohni', decimals: 0, address: '0x7f2176ceb16dcb648dc924eff617c3dc2befd30d' },
        { name: 'CR7Coin', symbol: 'CR7', decimals: 18, address: '0x7f585b9130c64e9e9f470b618a7badd03d79ca7e' },
        { name: 'CrypteriumToken', symbol: 'CRPT', decimals: 18, address: '0x80a7e048f37a50500351c204cb407766fa3bae7f' },
        { name: 'AstrCoin', symbol: 'ASTR', decimals: 4, address: '0x80e7a4d750ade616da896c49049b7ede9e04c191' },
        { name: 'EthLendToken', symbol: 'LEND', decimals: 18, address: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03' },
        { name: 'Newbium', symbol: 'NEWB', decimals: 0, address: '0x814964b1bceaf24e26296d031eadf134a2ca4105' },
        { name: 'IDEA Token', symbol: 'IDEA', decimals: 0, address: '0x814cafd4782d2e728170fda68257983f03321c58' },
        { name: 'DRAGON', symbol: 'DRG', decimals: 8, address: '0x814f67fa286f7572b041d041b1d99b432c9155ee' },
        { name: 'Cerium Token', symbol: 'Cerium', decimals: 0, address: '0x8183dc52ce1cff90eba453c4a450f3d2d98f0ee3' },
        { name: 'Kin', symbol: 'KIN', decimals: 18, address: '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5' },
        { name: 'DAT Token', symbol: 'DAT', decimals: 18, address: '0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c' },
        { name: 'VOISE', symbol: 'VSM', decimals: 0, address: '0x82665764ea0b58157e1e5e9bab32f68c76ec0cdf' },
        { name: 'PeraBit', symbol: 'PBIT', decimals: 8, address: '0x82917e1775149548eb7883c99b34f7cb0abfb756' },
        { name: 'DNA Token', symbol: 'DNA', decimals: 18, address: '0x82b0e50478eeafde392d45d1259ed1071b6fda81' },
        { name: 'SamsungToken', symbol: 'SamsungToken', decimals: 1, address: '0x82d193f8ee41d12aaa0a85cb006606d67f773e9c' },
        { name: 'REMME token', symbol: 'REM', decimals: 4, address: '0x83984d6142934bb535793a82adb0a46ef0f66b6d' },
        { name: 'Goldmint MNT Prelaunch Token', symbol: 'MNTP', decimals: 18, address: '0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc' },
        { name: 'VOISE', symbol: 'VOISE', decimals: 8, address: '0x83eea00d838f92dec4d1475697b9f4d3537b56e3' },
        { name: 'GigaWatt', symbol: 'WTT', decimals: 0, address: '0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda' },
        { name: 'eBitcoinCash', symbol: 'eBCSH', decimals: 18, address: '0x84c2c31c04339c9938adfe3f8013315c8906f071' },
        { name: 'iEthereum', symbol: 'iETH', decimals: 8, address: '0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b' },
        { name: 'Engraved Coin', symbol: 'XEG', decimals: 18, address: '0x85a7c57a4068280dd1166089a18acf35b4ba11e2' },
        { name: 'Telcoin', symbol: 'TEL', decimals: 2, address: '0x85e076361cc813a908ff672f9bad1541474402b2' },
        { name: 'YELLOW TOKEN', symbol: 'YEL', decimals: 18, address: '0x8633e144f2d9b9b8bdd12ddb58e4bef1e163a0ce' },
        { name: 'DJ Corporation', symbol: 'DJC', decimals: 18, address: '0x86410db4d61c40a8e1df9f859069d5a15896195b' },
        { name: 'BananaCoin Extended', symbol: 'BCO', decimals: 8, address: '0x865d176351f287fe1b0010805b110d08699c200a' },
        { name: 'EOS', symbol: 'EOS', decimals: 18, address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0' },
        { name: 'Jetcoin', symbol: 'JET', decimals: 18, address: '0x8727c112c712c4a03371ac87a74dd6ab104af768' },
        { name: 'eUSD', symbol: 'eUSD', decimals: 8, address: '0x87611ca3403a3878dfef0da2a786e209abfc1eff' },
        { name: 'ShadowLink Token', symbol: 'SHAD', decimals: 18, address: '0x877fb817d5de492d20ec3190a812f6430e8faeba' },
        { name: 'ListAndPump', symbol: 'LAP', decimals: 8, address: '0x87ae38d63a6bbb63e46219f494b549e3be7fc400' },
        { name: 'VERITY', symbol: 'VRTY', decimals: 12, address: '0x87e960f996e789ca2c8415fc449e4720adbe0497' },
        { name: 'Open Trading Network', symbol: 'OTN', decimals: 18, address: '0x881ef48211982d01e2cb7092c915e647cd40d85c' },
        { name: 'Trust Pool Token', symbol: 'TPL', decimals: 10, address: '0x8866d52303e372c2a2936d8ea09afd87bcbd8cf2' },
        { name: 'Atmatrix Token', symbol: 'ATT', decimals: 18, address: '0x887834d3b8d450b6bab109c252df3da286d73ce4' },
        { name: 'ICONOMI', symbol: 'ICN', decimals: 18, address: '0x888666ca69e0f178ded6d75b5726cee99a87d698' },
        { name: 'Presearch', symbol: 'PRE', decimals: 18, address: '0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa' },
        { name: 'FundYourselfNow Token', symbol: 'FYN', decimals: 18, address: '0x88fcfbc22c6d3dbaa25af478c578978339bde77a' },
        { name: 'Hive token', symbol: 'HIVE', decimals: 8, address: '0x895f5d0b8456b980786656a33f21642807d1471c' },
        { name: '', symbol: 'DAI', decimals: 18, address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359' },
        { name: 'Smart Investment Fund Token', symbol: 'SIFT', decimals: 0, address: '0x8a187d5285d316bcbc9adafc08b51d70a0d8e000' },
        { name: 'EtherDoge', symbol: 'EDOGE', decimals: 18, address: '0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5' },
        { name: 'Guaranteed Entrance Token', symbol: 'GET', decimals: 18, address: '0x8a854288a5976036a725879164ca3e91d30c6a1b' },
        { name: 'Dao.Casino', symbol: 'BET', decimals: 18, address: '0x8aa33a7899fcc8ea5fbe6a608a109c3893a1b8b2' },
        { name: 'Patientory', symbol: 'PTOY', decimals: 8, address: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06' },
        { name: 'ShizzleNizzle', symbol: 'SHNZ', decimals: 8, address: '0x8b0c9f462c239c963d8760105cbc935c63d85680' },
        { name: 'MicroMoney', symbol: 'AMM', decimals: 6, address: '0x8b1f49491477e0fb46a29fef53f1ea320d13c349' },
        { name: 'Dogetoken', symbol: 'DGT', decimals: 18, address: '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e' },
        { name: 'ETHGAS', symbol: 'EGAS', decimals: 8, address: '0x8bbf4dd0f11b3a535660fd7fcb7158daebd3a17e' },
        { name: 'Bus', symbol: 'BUS', decimals: 8, address: '0x8bf8bcf8aba5ecffffd431489fe79dad38023a9b' },
        { name: 'VitalikCoin', symbol: 'VIT', decimals: 18, address: '0x8c01ada8e708993a891d57d1b3169479a20acb3a' },
        { name: 'CryptoABS', symbol: 'ABS', decimals: 0, address: '0x8ce9411df545d6b51a9bc52a89e0f6d1b54a06dd' },
        { name: 'NATCOIN', symbol: 'NTC', decimals: 18, address: '0x8d5a69dc82a47594881256f2eef81770274fa30f' },
        { name: 'BITCOINBLUE', symbol: 'BTCBLUE', decimals: 18, address: '0x8d6e79f25302dee4caaf9187fb1434c4a1465c3a' },
        { name: 'EthereumDiamond', symbol: '0ED', decimals: 18, address: '0x8e10f6bb9c973d61321c25a2b8d865825f4aa57b' },
        { name: 'SingularityNET Token', symbol: 'AGI', decimals: 8, address: '0x8eb24319393716668d768dcec29356ae9cffe285' },
        { name: 'Dexer', symbol: 'DEX', decimals: 2, address: '0x8ef59b92f21f9e5f21f5f71510d1a7f87a5420be' },
        { name: 'PIX Token', symbol: 'PIX', decimals: 0, address: '0x8effd494eb698cc399af6231fccd39e08fd20b15' },
        { name: 'China Crypto Party', symbol: 'CCP', decimals: 18, address: '0x8f070b17dd3953634e9e9c174d0f05396f681bc1' },
        { name: 'Flyp.me Token', symbol: 'FYP', decimals: 18, address: '0x8f0921f30555624143d427b340b1156914882c10' },
        { name: 'Veritaseum', symbol: 'VERI', decimals: 18, address: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374' },
        { name: 'Request Token', symbol: 'REQ', decimals: 18, address: '0x8f8221afbb33998d8584a2b05749ba73c37a938a' },
        { name: 'HawalaToken', symbol: 'HAT', decimals: 12, address: '0x9002d4485b7594e3e850f0a206713b305113f69e' },
        { name: 'XPlay Token', symbol: 'XPA', decimals: 18, address: '0x90528aeb3a2b736b780fd1b6c478bb7e1d643170' },
        { name: 'MediBond', symbol: 'MEDI', decimals: 18, address: '0x90b1b771d0814d607da104b988efa39288219d62' },
        { name: 'IBTC', symbol: 'IBTC', decimals: 18, address: '0x90c88ccd74e57e016acae8ad1eaa12ecf4c06f33' },
        { name: 'X8XToken', symbol: 'X8X', decimals: 18, address: '0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c' },
        { name: 'Donation Efficiency Token', symbol: 'DONE', decimals: 16, address: '0x91126cfa7db2983527b0b749cc8a61fdeffedc28' },
        { name: 'REAL', symbol: 'REAL', decimals: 18, address: '0x9214ec02cb71cba0ada6896b8da260736a67ab10' },
        { name: 'Devery.io', symbol: 'EVE', decimals: 18, address: '0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c' },
        { name: 'GramGold Token', symbol: 'GGT', decimals: 18, address: '0x92d1dedb17626cad8a32a36083aec4f19325e474' },
        { name: 'Golem Network Token Wrapped', symbol: 'GNTW', decimals: 18, address: '0x936f78b9852d12f5cb93177c1f84fb8513d06263' },
        { name: 'AsterionWorldToken', symbol: 'ATR', decimals: 0, address: '0x93713bf12ba1bb55edf94298a302a8fc9d118086' },
        { name: 'Ethereum SMS', symbol: 'ESMS', decimals: 0, address: '0x9375b738083101617f0642d7dbeaa89e361545e3' },
        { name: 'Shield Token', symbol: 'SHLD', decimals: 18, address: '0x9397554c07f687b7a20d13c73350cc283765d509' },
        { name: 'ZipCoin', symbol: 'ZIP', decimals: 8, address: '0x93e24ce396a9e7d7de4a5bc616cf5fcab0476626' },
        { name: 'MCAP', symbol: 'MCAP', decimals: 8, address: '0x93e682107d1e9defb0b5ee701c71707a4b2e46bc' },
        { name: 'MyBit Token', symbol: 'MyB', decimals: 8, address: '0x94298f1e0ab2dfad6eeffb1426846a3c29d98090' },
        { name: 'Gamerbits', symbol: 'GBTS', decimals: 18, address: '0x944f1a04ab8d735acdbc46505c5b283f54289152' },
        { name: 'Cryptonex (CNX) - Global Blockchain Acquiring', symbol: 'CNX', decimals: 8, address: '0x94d6b4fb35fb08cb34aa716ab40049ec88002079' },
        { name: 'Vio', symbol: 'VIO', decimals: 18, address: '0x94ffb55ce68231c5966ea8dab16a8f066846513f' },
        { name: 'easyMINE Token', symbol: 'EMT', decimals: 18, address: '0x9501bfc48897dceeadf73113ef635d2ff7ee4b97' },
        { name: 'Kaizen', symbol: 'KZN', decimals: 8, address: '0x9541fd8b9b5fa97381783783cebf2f5fa793c262' },
        { name: 'Modum Token', symbol: 'MOD', decimals: 0, address: '0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e' },
        { name: 'PABLOCoin', symbol: 'BLO', decimals: 0, address: '0x959529102cfde07b1196bd27adedc196d75f84f6' },
        { name: 'Aragon Network Token', symbol: 'ANT', decimals: 18, address: '0x960b236a07cf122663c4303350609a66a7b288c0' },
        { name: 'Centra', symbol: 'CTR', decimals: 18, address: '0x96a65609a7b84e8842732deb08f56c3e21ac6f8a' },
        { name: 'Vezt', symbol: 'VZT', decimals: 18, address: '0x9720b467a710382a232a32f540bdced7d662a10b' },
        { name: '10MT Investment token', symbol: '10MTI', decimals: 10, address: '0x9742fa8cb51d294c8267ddfead8582e16f18e421' },
        { name: 'Deep Gold', symbol: 'DEEP', decimals: 8, address: '0x983877018633c0940b183cd38d1b58bee34f7301' },
        { name: 'SONM Token', symbol: 'SNM', decimals: 18, address: '0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63' },
        { name: 'Bizacoin', symbol: 'BIZC', decimals: 0, address: '0x983f7cc12d0b5d512b0f91f51a4aa478ac4def46' },
        { name: 'Sexy Token', symbol: 'SEXY', decimals: 18, address: '0x98f5e9b7f0e33956c0443e81bf7deb8b5b1ed545' },
        { name: 'Hut34 Entropy', symbol: 'ENT', decimals: 18, address: '0x9901ed1e649c4a77c7fff3dfd446ffe3464da747' },
        { name: 'EagleCoin', symbol: 'EAGLE', decimals: 18, address: '0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9' },
        { name: 'Polymath', symbol: 'POLY', decimals: 18, address: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec' },
        { name: 'TieToken', symbol: 'TIE', decimals: 18, address: '0x999967e2ec8a74b7c8e9db19e039d920b31d39d0' },
        { name: 'Quantstamp Token', symbol: 'QSP', decimals: 18, address: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d' },
        { name: 'CodeCoin', symbol: 'CODE', decimals: 18, address: '0x9adaba9ffda15e3a043c907d390f645147eb532a' },
        { name: 'aXpire Token', symbol: 'AXP', decimals: 8, address: '0x9af2c6b1a28d3d6bc084bd267f70e90d49741d5b' },
        { name: 'Domraider', symbol: 'DRT', decimals: 8, address: '0x9af4f26941677c706cfecf6d3379ff01bb85d5ab' },
        { name: 'Bilibit', symbol: 'BLB', decimals: 18, address: '0x9b11b1b271a224a271619f3419b1b080fdec5b4a' },
        { name: 'Attention Token of Media', symbol: 'ATM', decimals: 8, address: '0x9b11efcaaa1890f6ee52c6bb7cf8153ac5d74139' },
        { name: 'Reality Clash Coin ', symbol: 'RCC', decimals: 18, address: '0x9b6443b0fb9c241a7fdac375595cea13e6b7807a' },
        { name: 'Decent.Bet Token', symbol: 'DBET', decimals: 18, address: '0x9b68bfae21df5a510931a262cecf63f41338f264' },
        { name: 'Developer Network Token', symbol: 'DVN', decimals: 18, address: '0x9b7593aae6b48d02668808c2dfbfc4bef35ef957' },
        { name: '', symbol: '1BIT', decimals: 0, address: '0x9b8eb7a73a3c65fc3c892b494ab29cb061cf05ae' },
        { name: 'ethereum launcher', symbol: 'elunch', decimals: 18, address: '0x9c1d13d5a8fd4a8ac89917d31d40db454d1ee60b' },
        { name: 'CHUCK NORRIS', symbol: 'CHUCKNORRIS', decimals: 4, address: '0x9c23a568a32e8434ec88bdf60891a1d95ffd36cc' },
        { name: 'Litecoin Classic', symbol: 'LCC', decimals: 18, address: '0x9c3a2334d8d7a8b9013c0e572a5bbdfc2fc69063' },
        { name: 'BtcSegwit2X', symbol: 'B2X', decimals: 8, address: '0x9c9891f7795eb127ba4783b671573275ff3a83a9' },
        { name: 'blockoptions', symbol: 'BOPT', decimals: 8, address: '0x9cb9eb4bb7800bdbb017be2a4ffbeccb67454ea9' },
        { name: 'Ethereum Black Token', symbol: 'ETBT', decimals: 18, address: '0x9d5b592b687c887a5a34df5f9207adb2c2db3aec' },
        { name: 'Genesis', symbol: 'GEN', decimals: 18, address: '0x9dfe4643c04078a46803edcc30a3291b76d4c20c' },
        { name: 'RedPill', symbol: 'RPIL', decimals: 8, address: '0x9e386da8cdfcf8b9e7490e3f2a4589c570cb2b2f' },
        { name: 'Hacken', symbol: 'HKN', decimals: 8, address: '0x9e6b2b11542f2bc52f3029077ace37e8fd838d7f' },
        { name: 'BRAT RED', symbol: 'BRAT', decimals: 8, address: '0x9e77d5a1251b6f7d456722a6eac6d2d5980bd891' },
        { name: 'Swarm Fund Token', symbol: 'SWM', decimals: 18, address: '0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a' },
        { name: 'Maker', symbol: 'MKR', decimals: 18, address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2' },
        { name: 'Charg Coin', symbol: 'CHG', decimals: 18, address: '0xc4a86561cb0b7ea1214904f26e6d50fd357c7986' },
        { name: 'SISA Token', symbol: 'SISA', decimals: 18, address: '0xa0aa85b54f8a7b09c845f13a09172b08925f3d54' },
        { name: 'CrypherCoin', symbol: 'CRYPHER', decimals: 18, address: '0xa0e743c37c470ab381cf0e87b6e8f12ef19586fd' },
        { name: 'Corethum', symbol: 'CRTM', decimals: 8, address: '0xa119f0f5fd06ebadff8883c0f3c40b2d22e7a44f' },
        { name: 'Follow Coin', symbol: 'FLLW', decimals: 18, address: '0xa25d01d15fc0e3cdede1bebee4124394aae0db33' },
        { name: 'Air phase 1', symbol: 'AIR', decimals: 0, address: '0xa2f4fcb0fde2dd59f7a1873e121bc5623e3164eb' },
        { name: 'Ciphs', symbol: 'CIPHS', decimals: 18, address: '0xa4ff5ce0556f9ff0797ae525ec5ba9b723878a3e' },
        { name: 'Peermine', symbol: 'PME', decimals: 18, address: '0xa51153d9cf9d3cf6d58697b68eccc158d1e40388' },
        { name: 'Lynx', symbol: 'LNT', decimals: 18, address: '0xa51d948ff15fbabac476af160cba6901ce47f4b0' },
        { name: 'NEVERDIE', symbol: 'NDC', decimals: 18, address: '0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970' },
        { name: ' EtherCarbon', symbol: 'ECN', decimals: 2, address: '0xa578acc0cb7875781b7880903f4594d13cfa8b98' },
        { name: 'UselessEthTokenLite', symbol: 'UETL', decimals: 8, address: '0xa5a283557653f36cf9aa0d5cc74b1e30422349f2' },
        { name: 'RobomedToken', symbol: 'RBM', decimals: 18, address: '0xa5d1e58ece1fc438d64e65769d2ab730143a4caf' },
        { name: 'Block Array', symbol: 'ARY', decimals: 18, address: '0xa5f8fc0921880cb7342368bd128eb8050442b1a1' },
        { name: 'Jibrel Network Token', symbol: 'JNT', decimals: 18, address: '0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7' },
        { name: 'Mysterium', symbol: 'MYST', decimals: 8, address: '0xa645264c5603e96c3b0b078cdab68733794b0a71' },
        { name: 'Etherball', symbol: 'EBYTE', decimals: 9, address: '0xa65ee5fd259d94294c4ef030d1a62eeb465b9438' },
        { name: 'Anonymous Mobile Organization', symbol: 'AMO', decimals: 4, address: '0xa6e2f7f33f01fb399e72f3e044196eab7d348012' },
        { name: 'Jade', symbol: 'Jade', decimals: 5, address: '0xa6e7172662379f1f4c72108655869abdbb7f7672' },
        { name: 'BroFistCoin', symbol: 'PEW', decimals: 8, address: '0xa701122c1b67220a8b6883d03c8ad67896b12466' },
        { name: 'TrueFlip', symbol: 'TFL', decimals: 8, address: '0xa7f976c360ebbed4465c2855684d1aae5271efa9' },
        { name: 'Internxt', symbol: 'INXT', decimals: 8, address: '0xa8006c4ca56f24d6836727d106349320db7fef82' },
        { name: 'Neumark', symbol: 'NEU', decimals: 18, address: '0xa823e6722006afe99e91c30ff5295052fe6b8e32' },
        { name: 'OTCBTC Token', symbol: 'OTB', decimals: 18, address: '0xa86a0da9d05d0771955df05b44ca120661af16de' },
        { name: 'LuminoCoin', symbol: 'LUM', decimals: 18, address: '0xa89b5934863447f6e4fc53b315a93e873bda69a3' },
        { name: 'SUB1X', symbol: 'SUB1X', decimals: 18, address: '0xa8ba4095833a3f924d86cb3941099c1abb75ea13' },
        { name: 'Cash Poker Pro', symbol: 'CASH', decimals: 18, address: '0xa8f93faee440644f89059a2c88bdc9bf3be5e2ea' },
        { name: 'Freedom Token', symbol: 'FDM', decimals: 18, address: '0xa94c128a138504e1f81d727cc21bcb9ae6581015' },
        { name: 'GBP Static', symbol: 'GBP_S', decimals: 18, address: '0xa9666166d3c7fd15e874801f99e9ad5bfb70c5cf' },
        { name: 'BTCMoon', symbol: 'BTCM', decimals: 18, address: '0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd' },
        { name: 'TokenVerse', symbol: 'TOV', decimals: 0, address: '0xaa26b73bfdc80b5c7d2cfbfc30930038fb7fa657' },
        { name: 'Trace Token', symbol: 'TRAC', decimals: 18, address: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f' },
        { name: 'Monolith TKN', symbol: 'TKN', decimals: 8, address: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a' },
        { name: 'Mayweather No', symbol: 'MAYN', decimals: 18, address: '0xab130bc7ff83192656a4b3079741c296615899c0' },
        { name: 'FinallyUsableCryptoKarma', symbol: 'FUCK', decimals: 4, address: '0xab16e0d25c06cb376259cc18c1de4aca57605589' },
        { name: 'Macroverse Token', symbol: 'MRV', decimals: 18, address: '0xab6cf87a50f17d7f5e1feaf81b6fe9ffbe8ebf84' },
        { name: 'XENON', symbol: 'XNN', decimals: 18, address: '0xab95e915c123fded5bdfb6325e35ef5515f1ea69' },
        { name: 'Kitten Coin', symbol: 'KITTEN', decimals: 8, address: '0xac2bd14654bbf22f9d8f20c7b3a70e376d3436b4' },
        { name: 'DOVU', symbol: 'DOVU', decimals: 18, address: '0xac3211a5025414af2866ff09c23fc18bc97e79b1' },
        { name: 'Target Coin', symbol: 'TGT', decimals: 1, address: '0xac3da587eac229c9896d919abc235ca4fd7f72c1' },
        { name: 'Arcade Token', symbol: 'ARC', decimals: 18, address: '0xac709fcb44a43c35f0da4e3163b117a17f3770f5' },
        { name: 'Blockchain Certified Data Token', symbol: 'BCDT', decimals: 18, address: '0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5' },
        { name: 'EtherGold', symbol: 'ETHG', decimals: 8, address: '0xae258d5322b59d64df9eb483e3b1733332c3b66c' },
        { name: 'eZEC', symbol: 'EZEC', decimals: 18, address: '0xae4191a7eb25713ac90483ea75828ae8038f94dc' },
        { name: 'Gimli Token', symbol: 'GIM', decimals: 8, address: '0xae4f56f072c34c0a65b3ae3e4db797d831439d93' },
        { name: 'Good Karma', symbol: '∞', decimals: 6, address: '0xae616e72d3d89e847f74e8ace41ca68bbf56af79' },
        { name: 'STK Token', symbol: 'STK', decimals: 18, address: '0xae73b38d1c9a8b274127ec30160a4927c4d71824' },
        { name: 'SingularDTV', symbol: 'SNGLS', decimals: 0, address: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009' },
        { name: 'PXToken', symbol: 'PXT', decimals: 18, address: '0xaf146fbd319ca7ae178caa2c9d80a2db6b944350' },
        { name: 'Firstblood', symbol: '1ST', decimals: 18, address: '0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7' },
        { name: 'Monetha', symbol: 'MTH', decimals: 5, address: '0xaf4dce16da2877f8c9e00544c93b62ac40631f16' },
        { name: 'Enter-Coin', symbol: 'ENTRC', decimals: 8, address: '0xaf55f3b7dc65c8f9577cf00c8c5ca7b6e8cc4433' },
        { name: 'eBitcoinCash', symbol: 'eBCH', decimals: 8, address: '0xafc39788c51f0c1ff7b55317f3e70299e521fff6' },
        { name: 'TBOT', symbol: 'TBT', decimals: 8, address: '0xafe60511341a37488de25bef351952562e31fcc1' },
        { name: 'Assistive Reality ARX', symbol: 'ARX', decimals: 18, address: '0xb0d926c1bc3d78064f3e1075d5bd9a24f35ae6c5' },
        { name: 'MaverickChain', symbol: 'MVC', decimals: 18, address: '0xb17df9a3b09583a9bdcf757d6367171476d4d8a3' },
        { name: 'TRASH CASH', symbol: 'TRASH', decimals: 3, address: '0xb203b5495109c6c85615ebb2056f98301d470507' },
        { name: 'UC Coin', symbol: 'UCN', decimals: 8, address: '0xb236e2477b8ed34b203b60e2b88884ee5b31a3c3' },
        { name: 'oneK', symbol: 'ONEK', decimals: 18, address: '0xb23be73573bc7e03db6e5dfc62405368716d28a8' },
        { name: 'RIALTO', symbol: 'XRL', decimals: 9, address: '0xb24754be79281553dc1adc160ddf5cd9b74361a4' },
        { name: 'ArubaCoin', symbol: 'AUA', decimals: 5, address: '0xb29678a4805a7d787dc9589e179d27f7575bb9f7' },
        { name: 'BetKing Bankroll Token', symbol: 'BKB', decimals: 8, address: '0xb2bfeb70b903f1baac7f2ba2c62934c7e5b974c4' },
        { name: 'Cobinhood Token', symbol: 'COB', decimals: 18, address: '0xb2f7eb1f2c37645be61d73953035360e768d81e6' },
        { name: 'Global Messaging Token', symbol: 'GMT', decimals: 18, address: '0xb3bd49e28f8f832b8d1e246106991e546c323502' },
        { name: 'CNet5G', symbol: 'NE5G', decimals: 2, address: '0xb41b531359330d76bbcb0f1a24f94ff6bff30dc1' },
        { name: 'GreenMed Coin', symbol: 'GRMD', decimals: 18, address: '0xb444208cb0516c150178fcf9a52604bc04a1acea' },
        { name: 'TKRToken', symbol: 'TKR', decimals: 18, address: '0xb45a50545beeab73f38f31e5973768c421805e5e' },
        { name: 'Climatecoin', symbol: 'CO2', decimals: 18, address: '0xb4b1d2c217ec0776584ce08d3dd98f90ededa44b' },
        { name: 'UAHPAY', symbol: 'UAHPAY', decimals: 18, address: '0xb4bfa6b45e25ad12bb033ec8a5eff523b83cc9af' },
        { name: 'BCDC Token', symbol: 'BCDC', decimals: 18, address: '0xb4c55b5a1faf5323e59842171c2492773a3783dd' },
        { name: 'Rocket Pool', symbol: 'RPL', decimals: 18, address: '0xb4efd85c19999d84251304bda99e90b92300bd93' },
        { name: 'Ethereum Premium', symbol: 'ETHPR', decimals: 4, address: '0xb4f5438c3c2a682da351ab6b57edc8530efd67be' },
        { name: 'eRipple', symbol: 'EXRP', decimals: 18, address: '0xb518d165398d9057ea8b73096edda5c7754bcd62' },
        { name: 'ETHGAS', symbol: 'eGAS', decimals: 8, address: '0xb53a96bcbdd9cf78dff20bab6c2be7baec8f00f8' },
        { name: 'Milk', symbol: 'MLK', decimals: 8, address: '0xb554cf51cda0fccd5012d55737c4df55a3e18a5c' },
        { name: 'SeratioCoin', symbol: 'SER', decimals: 7, address: '0xb561fef0d624c0826ff869946f6076b7c4f2ba42' },
        { name: 'ICON', symbol: 'ICX', decimals: 18, address: '0xb5a5f22694352c15b00323844ad545abb2b11028' },
        { name: 'EventChain', symbol: 'EVC', decimals: 18, address: '0xb62d18dea74045e822352ce4b3ee77319dc5ff2f' },
        { name: 'TRUST', symbol: 'TEC', decimals: 18, address: '0xb63ab8e276e081b9079c3ae520c58061fa4acb45' },
        { name: 'Monaco', symbol: 'MCO', decimals: 8, address: '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d' },
        { name: 'StorjToken', symbol: 'STORJ', decimals: 8, address: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac' },
        { name: '0xBitcoin', symbol: '0xBTC', decimals: 8, address: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31' },
        { name: 'CargoX Token', symbol: 'CXO', decimals: 18, address: '0xb6ee9668771a79be7967ee29a63d4184f8097143' },
        { name: 'Bitsoko Community', symbol: 'BITS', decimals: 8, address: '0xb72627650f1149ea5e54834b2f468e5d430e67bf' },
        { name: 'Walton Token', symbol: 'WTC', decimals: 18, address: '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74' },
        { name: 'EthereumMovieVenture', symbol: 'EMV', decimals: 2, address: '0xb802b24e0637c2b87d2e8b7784c055bbe921011a' },
        { name: 'Tcash', symbol: 'TCASH', decimals: 8, address: '0xb8742486c723793cf5162bb5d3425ed9cd73d049' },
        { name: 'BNB', symbol: 'BNB', decimals: 18, address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52' },
        { name: 'Redvolution', symbol: 'REDV', decimals: 8, address: '0xb8d8a92cafaf6c055bce8e53405d90be96d1a677' },
        { name: 'Nuls', symbol: 'NULS', decimals: 18, address: '0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c' },
        { name: 'eNeo', symbol: 'ENEO', decimals: 18, address: '0xb915ff79170d606935bceaf000d77ca4ed92d993' },
        { name: 'TenX Pay Token', symbol: 'PAY', decimals: 18, address: '0xb97048628db6b661d4c2aa833e95dbe1a905b280' },
        { name: 'ArcBlock', symbol: 'ABT', decimals: 18, address: '0xb98d4c97425d9908e66e53a6fdf673acca0be986' },
        { name: 'Swarm City Token', symbol: 'SWT', decimals: 18, address: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607' },
        { name: 'X Coin Machines', symbol: 'XCM', decimals: 3, address: '0xb9f0b7e1d518f0e213441a804fed84c2858c5d88' },
        { name: 'HelloGold Token', symbol: 'HGT', decimals: 8, address: '0xba2184520a1cc49a6159c57e61e1844e085615b6' },
        { name: 'Aeron', symbol: 'ARN', decimals: 8, address: '0xba5f11b16b155792cf3b2e6880e8706859a8aeb6' },
        { name: '', symbol: 'ALIEF', decimals: 0, address: '0xba71b32e71a41339aa4ceaa79528535aefe488d8' },
        { name: 'Casino', symbol: 'CAS', decimals: 2, address: '0xbb1b3e8ddded8165d58b0c192d19cd360682b170' },
        { name: 'FunFair', symbol: 'FUN', decimals: 8, address: '0xbbb1bd2d741f05e144e6c4517676a15554fd4b8d' },
        { name: 'MaxxToken', symbol: 'MXX', decimals: 18, address: '0xbc63acdfafa94bd4d8c2bb7a8552281f107242c0' },
        { name: 'SHOUCAIR', symbol: 'SHOUC', decimals: 18, address: '0xbc7de10afe530843e71dfb2e3872405191e8d14a' },
        { name: 'GREED TOKEN', symbol: 'GREED', decimals: 18, address: '0xbc9395973bd35a3b4bd924f050d2778c07506ecb' },
        { name: 'ToTheMoon', symbol: 'TTM', decimals: 18, address: '0xbd35aefa375b57a801ddc87615aef1e9f353df28' },
        { name: 'FinTab', symbol: 'FNTB', decimals: 8, address: '0xbd4b60a138b3fce3584ea01f50c0908c18f9677a' },
        { name: 'Snovio', symbol: 'SNOV', decimals: 18, address: '0xbdc5bac39dbe132b1e030e898ae3830017d7d969' },
        { name: 'Melon Token', symbol: 'MLN', decimals: 18, address: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1' },
        { name: 'StakeIt', symbol: 'STAKE', decimals: 8, address: '0xbec8f6d667594fb181c9d68e5c80c910888be93d' },
        { name: 'ELF Token', symbol: 'ELF', decimals: 18, address: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e' },
        { name: 'eBitcoin Gold', symbol: 'eBTG', decimals: 8, address: '0xbf430e24ac0f33d4ad6fac9654b37943124c2786' },
        { name: 'Ken Coin', symbol: 'KEN', decimals: 18, address: '0xbf4a29269bf3a5c351c2af3a9c9ed81b07129ce4' },
        { name: 'Mayweather Yes', symbol: 'MAYY', decimals: 18, address: '0xbfa4d71a51b9e0968be4bc299f8ba6cbb2f86789' },
        { name: 'AlpenCash', symbol: 'ALPC', decimals: 0, address: '0xbfd4a3c26996dfc9e85a951eb615aac3b84c758b' },
        { name: 'Qubicle', symbol: 'QBE', decimals: 18, address: '0xc029ba3dc12e1834571e821d94a07de0a01138ea' },
        { name: 'Faceblock', symbol: 'FBL', decimals: 2, address: '0xc0c2ee1ce1fed8f6e2764363a36db3dd4cf10022' },
        { name: 'Hive Project ', symbol: 'HVN', decimals: 8, address: '0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d' },
        { name: 'Populous XBRL token', symbol: 'PXT', decimals: 8, address: '0xc14830e53aa344e8c14603a91229a0b925b0b262' },
        { name: 'Lamden Tau', symbol: 'TAU', decimals: 18, address: '0xc27a2f05fa577a83ba0fdb4c38443c0718356501' },
        { name: 'Exchange Union Coin', symbol: 'XUC', decimals: 18, address: '0xc324a2f6b05880503444451b8b27e6f9e63287cb' },
        { name: 'Cloud', symbol: 'CLD', decimals: 6, address: '0xc3951d77737733174152532e8b0f27e2c4e9f0dc' },
        { name: 'HawalaToken', symbol: 'HAT', decimals: 12, address: '0xc3972ac283b3a7a56125674631a5c254f7f373cf' },
        { name: 'ROICOIN', symbol: 'ROI', decimals: 4, address: '0xc3aef0036f5b146440775b2a1d5bf45fd8992741' },
        { name: 'PayPie', symbol: 'PPP', decimals: 18, address: '0xc42209accc14029c1012fb5680d95fbd6036e2a0' },
        { name: 'Ethereum Qchain Token', symbol: 'EQC', decimals: 8, address: '0xc438b4c0dfbb1593be6dee03bbd1a84bb3aa6213' },
        { name: 'Angel Token', symbol: 'ANGL', decimals: 18, address: '0xc499ea948a1ad5d8eaf12abd2f67975c4dbe21aa' },
        { name: 'eBGOLD', symbol: 'eBTG', decimals: 8, address: '0xc51c938c4d513780c66c722a41c197d3a89fa9a8' },
        { name: 'Epocum', symbol: 'EPM', decimals: 18, address: '0xc5594d84b996a68326d89fb35e4b89b3323ef37d' },
        { name: 'Teleport', symbol: 'TPT', decimals: 18, address: '0xc596bd09d652827b0106292d3e378d5938df4b12' },
        { name: 'Proof', symbol: 'PRFT', decimals: 18, address: '0xc5cea8292e514405967d958c2325106f2f48da77' },
        { name: 'FUCKtoken', symbol: 'FUCK', decimals: 4, address: '0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d' },
        { name: 'MKR', symbol: 'MKR', decimals: 18, address: '0xc66ea802717bfb9833400264dd12c2bceaa34a6d' },
        { name: 'normikaivo', symbol: 'NAO', decimals: 18, address: '0xc6b014274d7406641711fb8889f93f4f11dec810' },
        { name: 'Titanium BAR Token', symbol: 'BAR', decimals: 18, address: '0xc7579bb99af590ec71c316e1ac4436c535039594' },
        { name: 'EtherBB', symbol: 'BB', decimals: 9, address: '0xc78593c17482ea5de44fdd84896ffd903972878e' },
        { name: 'MEGA X', symbol: 'MGX', decimals: 18, address: '0xc79d440551a03f84f863b1f259f135794c8a7190' },
        { name: 'elixir', symbol: 'ELIX', decimals: 18, address: '0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8' },
        { name: 'EXMR', symbol: 'EXMR', decimals: 8, address: '0xc98e0639c6d2ec037a615341c369666b110e80e5' },
        { name: 'Flip', symbol: 'FLIP', decimals: 0, address: '0xc997d07b0bc607b6d1bcb6fb9d4a5579c466c3e5' },
        { name: 'TDT', symbol: 'TDT', decimals: 18, address: '0xc99ddc30bb0cf76b07d90dcb6b267b8352697bef' },
        { name: 'hentaisolo', symbol: 'HAO', decimals: 18, address: '0xc9b89f6b5301f554b9adc6d4a871c3279820de40' },
        { name: 'SmellyCoin', symbol: 'SMELLY', decimals: 0, address: '0xc9be9f75df438df3ef40e4bab816bf30e3f14b50' },
        { name: 'DATO token', symbol: 'DATO', decimals: 18, address: '0xc9f05e276d9148c7728f63205cc0180cb21a60ff' },
        { name: 'Sugar Exchange', symbol: 'SGR', decimals: 8, address: '0xcb5a05bef3257613e984c17dbcf039952b6d883f' },
        { name: 'Trustcoin', symbol: 'TRST', decimals: 6, address: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b' },
        { name: 'Bytom', symbol: 'BTM', decimals: 8, address: '0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750' },
        { name: 'Humaniq', symbol: 'HMQ', decimals: 8, address: '0xcbcc0f036ed4788f63fc0fee32873d6a7487b908' },
        { name: 'MoacToken Token', symbol: 'MOAC', decimals: 18, address: '0xcbce61316759d807c474441952ce41985bbc5a40' },
        { name: '', symbol: 'IDXM', decimals: 8, address: '0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea' },
        { name: 'Bonpay Token', symbol: 'BON', decimals: 18, address: '0xcc34366e3842ca1bd36c1f324d15257960fcc801' },
        { name: 'Digital Developers Fund Token', symbol: 'DDF', decimals: 18, address: '0xcc4ef9eeaf656ac1a2ab886743e98e97e090ed38' },
        { name: 'SatanCoin', symbol: 'SATAN', decimals: 0, address: '0xccca48874780f9c42b162c9617bc6324c5142c22' },
        { name: 'Aurora DAO', symbol: 'AURA', decimals: 18, address: '0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814' },
        { name: '', symbol: 'EPOSY', decimals: 18, address: '0xce3d9c3f3d302436d12f18eca97a3b00e97be7cd' },
        { name: 'EtherDelta Token', symbol: 'EDT', decimals: 8, address: '0xce53a179047ebed80261689367c093c90a94cc08' },
        { name: 'Bullioncoin', symbol: 'BLX', decimals: 18, address: '0xce59d29b09aae565feeef8e52f47c3cd5368c663' },
        { name: 'E4ROW', symbol: 'E4ROW', decimals: 2, address: '0xce5c603c78d047ef43032e96b5b785324f753a4f' },
        { name: 'LIFECREDIT', symbol: '1LIFE', decimals: 18, address: '0xce61f5e6d1fe5a86e246f68aff956f7757282ef0' },
        { name: 'Fairgrounds', symbol: 'FGD', decimals: 2, address: '0xce831af117375e6286eb3c46d696ee3dbf4f4f50' },
        { name: 'Eidoo Token', symbol: 'EDO', decimals: 18, address: '0xced4e93198734ddaff8492d525bd258d49eb388e' },
        { name: 'EtherLite', symbol: 'ETL', decimals: 10, address: '0xcedbf324a1eb1affe53ab7b7ef0103e070e3853f' },
        { name: 'LIRA', symbol: 'LIRA', decimals: 8, address: '0xcf76f32ebe10139e4370127d5789cdb0750d460d' },
        { name: 'Nimiq Exchange', symbol: 'NET', decimals: 18, address: '0xcfb98637bcae43c13323eaa1731ced2b716962fd' },
        { name: 'deertoken', symbol: 'DEER', decimals: 18, address: '0xd024645809f74043cd2133c6afeb46f0de4ad88f' },
        { name: 'sennitoken', symbol: 'SNI', decimals: 18, address: '0xd04963de435bd4d25b1cc8f05870f49edbfc8c18' },
        { name: 'USD Risk', symbol: 'USD_R', decimals: 18, address: '0xd0800859d6f4bc0210b7807e770bc44a9ece7372' },
        { name: 'Storm Token', symbol: 'STORM', decimals: 18, address: '0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433' },
        { name: 'AdToken', symbol: 'ADT', decimals: 9, address: '0xd0d6d6c5fe4a677d343cc433536bb717bae167dd' },
        { name: 'GNEISS Coin', symbol: 'GNEISS', decimals: 0, address: '0xd2308446536a0bad028ab8c090d62e1ea2a51f24' },
        { name: 'Dynamic Trading Rights', symbol: 'DTR', decimals: 8, address: '0xd234bf2410a0009df9c3c63b610c09738f18ccd7' },
        { name: 'Status Genesis Token', symbol: 'SGT', decimals: 1, address: '0xd248b0d48e44aaf9c49aea0312be7e13a6dc1468' },
        { name: 'OMGToken', symbol: 'OMG', decimals: 18, address: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07' },
        { name: 'Bitcoin Gift', symbol: 'BGIFT', decimals: 18, address: '0xd286603e0f5de621b510a36c78c7616c015656f2' },
        { name: 'Bounty0x Token', symbol: 'BNTY', decimals: 18, address: '0xd2d6158683aee4cc838067727209a0aaf4359de3' },
        { name: 'Pinky Token', symbol: 'PNY', decimals: 0, address: '0xd317ff47dc7e1423e5e050870a66332833e5fd88' },
        { name: 'onG', symbol: 'ONG', decimals: 18, address: '0xd341d1680eeee3255b8c4c75bcce7eb57f144dae' },
        { name: 'WILD Token', symbol: 'WILD', decimals: 18, address: '0xd3c00772b24d997a812249ca637a921e81357701' },
        { name: 'BannerCoin', symbol: 'BCOIN', decimals: 8, address: '0xd3e2f9dfff5a6feeece5dbcee3b86cb375fd8c98' },
        { name: 'Populous Platform', symbol: 'PPT', decimals: 8, address: '0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a' },
        { name: 'Beth', symbol: 'BTH', decimals: 18, address: '0xd5b9a2737c9b2ff35ecb23b884eb039303bbbb61' },
        { name: 'Soarcoin', symbol: 'Soar', decimals: 6, address: '0xd65960facb8e4a2dfcb2c2212cb2e44a02e2a57e' },
        { name: '', symbol: 'MSC', decimals: 0, address: '0xd6adc5e386d499361ccc5752f791b45132e7e6e4' },
        { name: 'ReceiptCoin', symbol: 'RC', decimals: 9, address: '0xd6e49800decb64c0e195f791348c1e87a5864fd7' },
        { name: 'SOCIAL', symbol: 'SCL', decimals: 8, address: '0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8' },
        { name: 'Envion', symbol: 'EVN', decimals: 18, address: '0xd780ae2bf04cd96e577d3d014762f831d97129d0' },
        { name: 'Bitcoin Quick', symbol: 'BTCQ', decimals: 8, address: '0xd7aa94f17d60be06414973a45ffa77efd6443f0f' },
        { name: 'Bitcoin Spoon', symbol: 'SPOON', decimals: 18, address: '0xd819e892f4df8659188e8bda839fdf2215a513bc' },
        { name: 'VeChain Token', symbol: 'VEN', decimals: 18, address: '0xd850942ef8811f2a866692a623011bde52a462c1' },
        { name: 'Soviet Union Ruble', symbol: 'RUB', decimals: 18, address: '0xd884f9881e0aeabad79be8a69122cf998d067fff' },
        { name: 'Pluton', symbol: 'PLU', decimals: 18, address: '0xd8912c10681d8b21fd3742244f44658dba12264e' },
        { name: 'Bitcoin Silver', symbol: 'BTCS', decimals: 18, address: '0xd96b9fd7586d9ea24c950d24399be4fb65372fdd' },
        { name: 'Space Alien Token', symbol: 'SAT', decimals: 10, address: '0xd9a0658b7cc9ec0c57e8b20c0920d08f17e747be' },
        { name: 'cVToken', symbol: 'cV', decimals: 18, address: '0xda6cb58a0d0c01610a29c5a65c303e13e885887c' },
        { name: 'MilitaryPay', symbol: 'MTP', decimals: 1, address: '0xdab5dfa0966c3435da991b39d205c3ba1c64fe31' },
        { name: 'eBIT', symbol: 'EBIT', decimals: 0, address: '0xdb45faeca61c70e271bffeaf66162fa68a1c4def' },
        { name: 'BitcoinToken', symbol: 'BTK', decimals: 18, address: '0xdb8646f5b487b5dd979fac618350e85018f557d4' },
        { name: 'Ethereum Dark', symbol: 'ETHD', decimals: 18, address: '0xdbfb423e9bbf16294388e07696a5120e4ceba0c5' },
        { name: 'KARMATOKEN', symbol: 'KTN', decimals: 6, address: '0xdc0c22285b61405aae01cba2530b6dd5cd328da7' },
        { name: 'Goochain', symbol: 'GOOC', decimals: 8, address: '0xdcb9ff81013c31ff686154b4502ef6bfaa102d2d' },
        { name: 'RiptideCoin', symbol: 'RIPT', decimals: 8, address: '0xdd007278b667f6bef52fd0a4c23604aa1f96039a' },
        { name: 'Tokenomy', symbol: 'TEN', decimals: 18, address: '0xdd16ec0f66e54d453e6756713e533355989040e4' },
        { name: 'LIGHTYEARS', symbol: 'LYS', decimals: 8, address: '0xdd41fbd1ae95c5d9b198174a28e04be6b3d1aa27' },
        { name: 'Brave New Coin', symbol: 'BNC', decimals: 12, address: '0xdd6bf56ca2ada24c683fac50e37783e55b57af9f' },
        { name: 'Hubiits', symbol: 'HBT', decimals: 15, address: '0xdd6c68bb32462e01705011a4e2ad1a60740f217f' },
        { name: 'Kyber Network Crystal', symbol: 'KNC', decimals: 18, address: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200' },
        { name: 'Limit', symbol: 'LMT', decimals: 8, address: '0xdded69d8e28d38d640f6244ab5294f309fd40ce1' },
        { name: 'DimonCoin', symbol: 'FUDD', decimals: 8, address: '0xde39e5e5a1b0eeb3afe717d6d011cae88d19451e' },
        { name: 'Blackmoon Crypto Token', symbol: 'BMC', decimals: 8, address: '0xdf6ef343350780bf8c3410bf062e0c015b1dd671' },
        { name: '', symbol: 'ROCK', decimals: 0, address: '0xdfbd6a960a55bcfcf59d5925351e05a51498bcef' },
        { name: 'GBP Risk', symbol: 'GBP_R', decimals: 18, address: '0xdfe2bd1d3dcbb97804acf3ee85230e832c4a7b5d' },
        { name: 'SME Banking Platform', symbol: 'SME', decimals: 18, address: '0xdfe7351c291bc0e49079c62212587244e1c666ba' },
        { name: 'Digix DAO', symbol: 'DGD', decimals: 9, address: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a' },
        { name: 'Bitsync', symbol: 'BITC', decimals: 0, address: '0xe0c21b3f45fea3e5fdc811021fb1f8842caccad2' },
        { name: 'King93', symbol: 'KING', decimals: 18, address: '0xe1479d294807379320dca9a9e9002ac644539099' },
        { name: 'Arexium', symbol: 'ARX', decimals: 18, address: '0xe256bb0b2a3457e54db3a41cf5a8b826aca222a8' },
        { name: 'MATRIX AI Network', symbol: 'MAN', decimals: 18, address: '0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d' },
        { name: 'Brightcoin', symbol: 'BRC', decimals: 18, address: '0xe25f0974fea47682f6a7386e4217da70512ec997' },
        { name: 'NIMFA Token', symbol: 'NIMFA', decimals: 18, address: '0xe26517a9967299453d3f1b48aa005e6127e67210' },
        { name: 'Lotus Token Inc', symbol: 'LTO', decimals: 18, address: '0xe2e5d0e1422e927abab19ad2067f802ad07fb364' },
        { name: 'Link Platform', symbol: 'LNK', decimals: 18, address: '0xe2e6d4be086c6938b53b22144855eef674281639' },
        { name: 'SggCoin', symbol: 'SGG', decimals: 6, address: '0xe2f45f1660dc99daf3bd06f637ab1e4debc15bde' },
        { name: 'Covesting', symbol: 'COV', decimals: 18, address: '0xe2fb6529ef566a080e6d23de0bd351311087d567' },
        { name: 'DRP Utility', symbol: 'DRPU', decimals: 8, address: '0xe30e02f049957e2a5907589e06ba646fb2c321ba' },
        { name: 'PILLAR', symbol: 'PLR', decimals: 18, address: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17' },
        { name: 'ChainTrade Coin', symbol: 'CTC', decimals: 18, address: '0xe3fa177acecfb86721cf6f9f4206bd3bd672d7d5' },
        { name: 'Primas', symbol: 'PST', decimals: 18, address: '0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9' },
        { name: '0x Protocol Token', symbol: 'ZRX', decimals: 18, address: '0xe41d2489571d322189246dafa5ebde1f4699f498' },
        { name: 'iMM Coin', symbol: 'IMC', decimals: 18, address: '0xe42ba5558b00d2e6109cc60412d5d4c9473fe998' },
        { name: '7ype Coins', symbol: '7YPE', decimals: 0, address: '0xe463d10ec6b4ff6a3e5be41144956116ca30d4c3' },
        { name: 'EXRP Network', symbol: 'EXRN', decimals: 0, address: '0xe469c4473af82217b30cf17b10bcdb6c8c796e75' },
        { name: 'Civilianz', symbol: 'Civilianz', decimals: 0, address: '0xe4c07f4637df3a0354f9b42a1b3178dc573b8926' },
        { name: 'latoken', symbol: 'la', decimals: 18, address: '0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf' },
        { name: 'FaithCoin', symbol: 'FAITH', decimals: 8, address: '0xe531642e9bb5d027e9c20e03284287b97919a9a5' },
        { name: 'TokenMarketPlace', symbol: 'TMP', decimals: 7, address: '0xe58aff48f738b4a719d1790587cdc91a3560d7e1' },
        { name: 'EUR Risk', symbol: 'EUR_R', decimals: 18, address: '0xe5a219d4db92a701e79b6e548803c8ce55138686' },
        { name: 'Blockchain Index', symbol: 'BLX', decimals: 18, address: '0xe5a7c12972f3bbfe70ed29521c8949b8af6a0970' },
        { name: 'BITETHER', symbol: 'BTH', decimals: 18, address: '0xe66cc41dd03a170623dc087a69ad8d72e64cb838' },
        { name: 'LEGAL', symbol: 'LGL', decimals: 18, address: '0xe691b7ff3c9fddb8c2437412208ee4816aba7258' },
        { name: 'FaceCoin', symbol: 'FC', decimals: 2, address: '0xe6923e9b56db1eed1c9f430ea761da7565e260fe' },
        { name: 'LOVE Token', symbol: 'LOVE', decimals: 8, address: '0xe6efd46eb6cdd73a7fe1e760fa0c25a299755a4b' },
        { name: '10M Token', symbol: '10MT', decimals: 10, address: '0xe701cd3329057aea9d54300ddd05e41b8d74727a' },
        { name: 'HOWL', symbol: 'HOWL', decimals: 18, address: '0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd' },
        { name: 'Token-as-a-Service', symbol: 'TAAS', decimals: 6, address: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c' },
        { name: 'DAY', symbol: 'DAY', decimals: 18, address: '0xe814aee960a85208c3db542c53e7d4a6c8d5f60f' },
        { name: 'Coinlancer', symbol: 'CL', decimals: 18, address: '0xe81d72d14b1516e68ac3190a46c93302cc8ed60f' },
        { name: 'Indicoin', symbol: 'INDI', decimals: 18, address: '0xe8c09672cfb9cfce6e2edbb01057d9fa569f97c1' },
        { name: 'HELP', symbol: 'HELP', decimals: 0, address: '0xe8c5e942b76099c0c6d78271bad3ca002fa7c531' },
        { name: 'LiteCoinW Plus', symbol: 'LCWP', decimals: 8, address: '0xe8fc7e1973496848fcb486c5bb880f68487ea0bb' },
        { name: 'Vibe Coin', symbol: 'VIBE', decimals: 18, address: '0xe8ff5c9c75deb346acac493c463c8950be03dfba' },
        { name: 'Reputation', symbol: 'REP', decimals: 18, address: '0xe94327d07fc17907b4db788e5adf2ed424addff6' },
        { name: 'RAZ Token', symbol: 'RAZ', decimals: 18, address: '0xe99a76d5fb19bc419d72f355050045fad88e060f' },
        { name: 'Upfiring', symbol: 'UFR', decimals: 18, address: '0xea097a2b1db00627b2fa17460ad260c016016977' },
        { name: 'Blocktix', symbol: 'TIX', decimals: 18, address: '0xea1f346faf023f974eb5adaf088bbcdf02d761f4' },
        { name: 'Fuel Token', symbol: 'FUEL', decimals: 18, address: '0xea38eaa3c86c8f9b751533ba2e562deb9acded40' },
        { name: 'Pareto Network Token', symbol: 'PARETO', decimals: 18, address: '0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc' },
        { name: 'AlisToken', symbol: 'ALIS', decimals: 18, address: '0xea610b1153477720748dc13ed378003941d84fab' },
        { name: 'MINT', symbol: 'MINT', decimals: 18, address: '0xea642206310400cda4c1c5b8e7945314aa96b8a7' },
        { name: 'POW Token', symbol: 'POW', decimals: 18, address: '0xeb2da9fac54284cea731d1f10bb34eecb3c00c14' },
        { name: 'eBTC', symbol: 'EBTC', decimals: 8, address: '0xeb7c20027172e5d143fb030d50f91cece2d1485d' },
        { name: 'Digital Coin', symbol: 'DTC', decimals: 2, address: '0xeb9c0138d8ac10dd659640a4cc3d135c58b17b1b' },
        { name: 'EtherPower', symbol: 'ETHP', decimals: 18, address: '0xebc86d834756621444a8a26b4cf81b625fe310cd' },
        { name: 'Datalife', symbol: 'DATL', decimals: 18, address: '0xedcd82784027001d7af57a34501c65a25f97fee4' },
        { name: 'Needs Cash', symbol: 'NCH', decimals: 12, address: '0xedf2d3e5fb70ead2e6d8fe96845a5e59d52d2044' },
        { name: 'PoSToken', symbol: 'POS', decimals: 18, address: '0xee609fe292128cad03b786dbb9bc2634ccdbe7fc' },
        { name: 'Element', symbol: 'EM', decimals: 1, address: '0xee688d34c1cc02fc81b2f3f05c489e05d4c0b6ba' },
        { name: '', symbol: 'CLASH', decimals: 0, address: '0xee9704a1d61aa2c1401e2303ac7e1f81c29ed860' },
        { name: '20-footEqvUnit', symbol: 'TEU', decimals: 18, address: '0xeeac3f8da16bb0485a4a11c5128b0518dac81448' },
        { name: 'Sharpe Platform Token', symbol: 'SHP', decimals: 18, address: '0xef2463099360a085f1f10b076ed72ef625497a06' },
        { name: 'SocialDEX', symbol: 'SOCIAL', decimals: 18, address: '0xef25e54e1ae9bfd966b9b5cde6880e7a2323a957' },
        { name: 'Shitcoin', symbol: 'SHIT', decimals: 0, address: '0xef2e9966eb61bb494e5375d5df8d67b7db8a780d' },
        { name: 'loopring', symbol: 'LRC', decimals: 18, address: '0xef68e7c694f40c8202821edf525de3782458639f' },
        { name: 'BMChain Token', symbol: 'BMT', decimals: 18, address: '0xf028adee51533b1b47beaa890feb54a457f51e89' },
        { name: 'Flixx', symbol: 'FLIXX', decimals: 18, address: '0xf04a8ac553fcedb5ba99a64799155826c136b0be' },
        { name: 'REX - Real Estate tokens', symbol: 'REX', decimals: 18, address: '0xf05a9382a4c3f29e2784502754293d88b835109c' },
        { name: 'Enigma', symbol: 'ENG', decimals: 8, address: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4' },
        { name: 'bitqy', symbol: 'BQ', decimals: 3, address: '0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5' },
        { name: 'eEthereum', symbol: 'EETH', decimals: 8, address: '0xf152fca41bd23ff250292af391236db35e0e99c3' },
        { name: 'CARBON TOKEN CLASSIC', symbol: 'CTC', decimals: 4, address: '0xf1d9139c6512452db91f25635457b844d7e22b8b' },
        { name: 'Tronix', symbol: 'TRX', decimals: 6, address: '0xf230b790e05390fc8295f4d3f60332c93bed42e2' },
        { name: 'XmasToken', symbol: 'xmas', decimals: 18, address: '0xf24d3dfffcaf9f9a5dda9c57eeeb1ac0bba49c86' },
        { name: 'Hubcoin', symbol: 'HUB', decimals: 6, address: '0xf2e51e32d1f546423364a040ef1a6d2f05e31482' },
        { name: 'SND Token 1.0', symbol: 'SND', decimals: 0, address: '0xf333b2ace992ac2bbd8798bf57bc65a06184afba' },
        { name: 'Everex', symbol: 'EVX', decimals: 4, address: '0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8' },
        { name: 'Chips', symbol: 'CHP', decimals: 18, address: '0xf3db7560e820834658b590c96234c333cd3d5e5e' },
        { name: 'SunContract', symbol: 'SNC', decimals: 18, address: '0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404' },
        { name: 'Metal', symbol: 'MTL', decimals: 8, address: '0xf433089366899d83a9f26a773d59ec7ecf30355e' },
        { name: 'BlockVentureCoin', symbol: 'XBV', decimals: 8, address: '0xf4467cae19c5a53b9fdcd4ded678826805aa1927' },
        { name: 'CAD Risk', symbol: 'CAD_R', decimals: 18, address: '0xf4522eda455814d43b003bc1c38501b04d65cc4a' },
        { name: 'Enjin Coin', symbol: 'ENJ', decimals: 18, address: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c' },
        { name: 'WOLK TOKEN', symbol: 'WLK', decimals: 18, address: '0xf6b55acbbc49f4524aa48d19281a9a77c54de10f' },
        { name: 'DigiPulse Token', symbol: 'DGPT', decimals: 18, address: '0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1' },
        { name: 'Starbase', symbol: 'STAR', decimals: 18, address: '0xf70a642bd387f94380ffb90451c2c81d4eb82cbc' },
        { name: 'Bitcoin Black', symbol: 'BLACK', decimals: 18, address: '0xf7ae0daa230bf3fb3c0e5e01e7a6e0a142c6cf7e' },
        { name: 'Guppy', symbol: 'GUP', decimals: 3, address: '0xf7b098298f7c69fc14610bf71d5e02c60792894c' },
        { name: 'CyberMiles Token', symbol: 'CMT', decimals: 18, address: '0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f' },
        { name: 'Indorse Token', symbol: 'IND', decimals: 18, address: '0xf8e386eda857484f5a12e4b5daa9984e06e73705' },
        { name: 'BOXIcoin', symbol: 'BXc', decimals: 2, address: '0xf8fa1a588cd8cd51c3c4d6dc16d2717f6332e821' },
        { name: 'PallyCoin', symbol: 'PAL', decimals: 18, address: '0xf923ba61b43161a83afe2cab7d77ea1e41f27918' },
        { name: 'Krosscoin', symbol: 'KSS', decimals: 18, address: '0xf94e44d8ea46ccd8451d7e15264c6c4a78d3e10f' },
        { name: 'Ripio Credit Network Token', symbol: 'RCN', decimals: 18, address: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6' },
        { name: 'SquirrelGims', symbol: 'SQRL', decimals: 6, address: '0xf99f901124cbbe180984a247ba94cfba0c764b2e' },
        { name: 'Arena', symbol: 'ARENA', decimals: 18, address: '0xf9c9da0c81fffd491458881410903561d1e40fd0' },
        { name: 'Lunyr Token', symbol: 'LUN', decimals: 18, address: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9' },
        { name: 'GROUP TOKEN ALIANCE', symbol: 'GTA', decimals: 18, address: '0xfa2632a88bd0c11535a38f98a98db8251ccbaa9e' },
        { name: 'Bytether', symbol: 'BTH', decimals: 18, address: '0xfad572db566e5234ac9fc3d570c4edc0050eaa92' },
        { name: 'CPChain', symbol: 'CPC', decimals: 18, address: '0xfae4ee59cdd86e3be9e8b90b53aa866327d7c090' },
        { name: 'LUCKY', symbol: 'LUCK', decimals: 0, address: '0xfb12e3cca983b9f59d90912fd17f8d745a8b2953' },
        { name: 'PLAY', symbol: 'PLY', decimals: 18, address: '0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61' },
        { name: 'MPESA', symbol: 'mPESA', decimals: 8, address: '0xfb4752ad1b7153e1dbd2e6662651a11c7fc14083' },
        { name: 'PCC Token', symbol: 'PCC', decimals: 18, address: '0xfb7da9863e030495db8b4d067d665fc8433fff85' },
        { name: 'Twinkle', symbol: 'TWNKL', decimals: 3, address: '0xfbd0d1c77b501796a35d86cf91d65d9778eee695' },
        { name: 'InsureX', symbol: 'IXT', decimals: 8, address: '0xfca47962d45adfdfd1ab2d972315db4ce7ccf094' },
        { name: 'EUROBITS', symbol: 'EURB', decimals: 5, address: '0xfcb48fdcc479b38068c06ee94249b1516adf09cb' },
        { name: 'ebitcoinsilver', symbol: 'eBTCS', decimals: 18, address: '0xfd219686033da14219142504c7a63ae8a4912134' },
        { name: 'Intelligent Transportation System', symbol: 'ITS', decimals: 8, address: '0xfd784da5c740c617aafb80399fa81b86e1da99a5' },
        { name: '1World', symbol: '1WO', decimals: 8, address: '0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23' },
        { name: 'Maecenas ', symbol: 'ART', decimals: 18, address: '0xfec0cf7fe078a500abf15f1284958f22049c2c7e' },
        { name: 'H2O Token', symbol: 'H2O', decimals: 18, address: '0xfeed1a53bd53ffe453d265fc6e70dd85f8e993b6' },
        { name: 'PureLifeCoin', symbol: 'LIFE', decimals: 18, address: '0xff18dbc487b4c2e3222d115952babfda8ba52f5f' },
        { name: 'BCAP', symbol: 'BCAP', decimals: 0, address: '0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac' },
        { name: 'Alpha', symbol: 'A', decimals: 18, address: '0xffc63b9146967a1ba33066fb057ee3722221acf0' },
        { name: 'Hedge', symbol: 'HDG', decimals: 18, address: '0xffe8196bc259e8dedc544d935786aa4709ec3e64' },
    ],
}; // tslint:disable:max-file-line-count
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 30604:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rinkebyTokens = {
    canonicalWrappedEther: { name: 'Rinkeby Canonical Wrapped Ether', symbol: 'WETH', decimals: 18, address: '0xc778417e063141139fce010982780140aa0cd5ab' },
    otherTokens: [
        { name: 'Rinkeby Test Token', symbol: 'TST', decimals: 18, address: '0xb7dDCF6B64C05D76Adc497AE78AD83ba3883A294' },
        { name: 'Decentraland - Chainbreakers', symbol: 'MANA', decimals: 18, address: '0x0f8528c53fecb54b7005525a3e797e261a51b88e' },
    ],
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 66395:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Web3 = __webpack_require__(90582);
const types_1 = __webpack_require__(26126);
exports.FunctionInputKind = types_1.FunctionInputKind;
var Network;
(function (Network) {
    Network["Main"] = "main";
    Network["Rinkeby"] = "rinkeby";
    Network["Kovan"] = "kovan";
})(Network = exports.Network || (exports.Network = {}));
var ABIType;
(function (ABIType) {
    ABIType["Function"] = "function";
    ABIType["Event"] = "event";
})(ABIType = exports.ABIType || (exports.ABIType = {}));
var StateMutability;
(function (StateMutability) {
    StateMutability["Pure"] = "pure";
    StateMutability["View"] = "view";
    StateMutability["Payable"] = "payable";
    StateMutability["Nonpayable"] = "nonpayable";
})(StateMutability = exports.StateMutability || (exports.StateMutability = {}));
var FunctionOutputKind;
(function (FunctionOutputKind) {
    FunctionOutputKind["Owner"] = "owner";
    FunctionOutputKind["Asset"] = "asset";
    FunctionOutputKind["Count"] = "count";
    FunctionOutputKind["Other"] = "other";
})(FunctionOutputKind = exports.FunctionOutputKind || (exports.FunctionOutputKind = {}));
var EventInputKind;
(function (EventInputKind) {
    EventInputKind["Source"] = "source";
    EventInputKind["Destination"] = "destination";
    EventInputKind["Asset"] = "asset";
    EventInputKind["Other"] = "other";
})(EventInputKind = exports.EventInputKind || (exports.EventInputKind = {}));
//# sourceMappingURL=types.js.map

/***/ })

}]);