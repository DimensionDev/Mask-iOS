"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8331],{

/***/ 49743:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanonicalWETH = void 0;
exports.CanonicalWETH = [{ 'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'guy', 'type': 'address' }, { 'name': 'wad', 'type': 'uint256' }], 'name': 'approve', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'src', 'type': 'address' }, { 'name': 'dst', 'type': 'address' }, { 'name': 'wad', 'type': 'uint256' }], 'name': 'transferFrom', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'wad', 'type': 'uint256' }], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{ 'name': '', 'type': 'uint8' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }], 'name': 'balanceOf', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'dst', 'type': 'address' }, { 'name': 'wad', 'type': 'uint256' }], 'name': 'transfer', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'deposit', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'allowance', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'payable': true, 'stateMutability': 'payable', 'type': 'fallback' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'src', 'type': 'address' }, { 'indexed': true, 'name': 'guy', 'type': 'address' }, { 'indexed': false, 'name': 'wad', 'type': 'uint256' }], 'name': 'Approval', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'src', 'type': 'address' }, { 'indexed': true, 'name': 'dst', 'type': 'address' }, { 'indexed': false, 'name': 'wad', 'type': 'uint256' }], 'name': 'Transfer', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'dst', 'type': 'address' }, { 'indexed': false, 'name': 'wad', 'type': 'uint256' }], 'name': 'Deposit', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'src', 'type': 'address' }, { 'indexed': false, 'name': 'wad', 'type': 'uint256' }], 'name': 'Withdrawal', 'type': 'event' }];
//# sourceMappingURL=CanonicalWETH.js.map

/***/ }),

/***/ 18947:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheezeWizardsBasicTournament = void 0;
exports.CheezeWizardsBasicTournament = [{ "constant": true, "inputs": [], "name": "cfoAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "ceoAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "pauseDuration", "type": "uint256" }], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newCfo", "type": "address" }], "name": "setCfo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "duelResolver", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newCeo", "type": "address" }], "name": "setCeo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newCoo", "type": "address" }], "name": "setCoo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "powerScale", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "cooAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isPaused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "cooAddress_", "type": "address" }, { "name": "duelResolver_", "type": "address" }, { "name": "powerScale_", "type": "uint256" }, { "name": "tournamentStartBlock_", "type": "uint256" }, { "name": "admissionDuration_", "type": "uint256" }, { "name": "revivalDuration_", "type": "uint256" }, { "name": "ascensionDuration_", "type": "uint256" }, { "name": "fightDuration_", "type": "uint256" }, { "name": "cullingDuration_", "type": "uint256" }, { "name": "blueMoldBasePower_", "type": "uint256" }, { "name": "sessionsBetweenMoldDoubling_", "type": "uint256" }, { "name": "duelTimeoutBlocks_", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "duelId", "type": "bytes32" }, { "indexed": false, "name": "wizardId1", "type": "uint256" }, { "indexed": false, "name": "wizardId2", "type": "uint256" }, { "indexed": false, "name": "timeoutBlock", "type": "uint256" }, { "indexed": false, "name": "isAscensionBattle", "type": "bool" }], "name": "DuelStart", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "duelId", "type": "bytes32" }, { "indexed": false, "name": "wizardId1", "type": "uint256" }, { "indexed": false, "name": "wizardId2", "type": "uint256" }, { "indexed": false, "name": "moveSet1", "type": "bytes32" }, { "indexed": false, "name": "moveSet2", "type": "bytes32" }, { "indexed": false, "name": "power1", "type": "uint256" }, { "indexed": false, "name": "power2", "type": "uint256" }], "name": "DuelEnd", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "duelId", "type": "bytes32" }, { "indexed": false, "name": "wizardId1", "type": "uint256" }, { "indexed": false, "name": "wizardId2", "type": "uint256" }, { "indexed": false, "name": "power1", "type": "uint256" }, { "indexed": false, "name": "power2", "type": "uint256" }], "name": "DuelTimeOut", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "wizardId", "type": "uint256" }], "name": "WizardElimination", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "wizardId", "type": "uint256" }], "name": "AscensionStart", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "wizardId1", "type": "uint256" }, { "indexed": false, "name": "wizardId2", "type": "uint256" }], "name": "AscensionPairUp", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "wizardId", "type": "uint256" }, { "indexed": false, "name": "power", "type": "uint256" }], "name": "AscensionComplete", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "wizId", "type": "uint256" }, { "indexed": false, "name": "power", "type": "uint256" }], "name": "Revive", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "givingWizId", "type": "uint256" }, { "indexed": false, "name": "receivingWizId", "type": "uint256" }, { "indexed": false, "name": "amountGifted", "type": "uint256" }], "name": "PowerGifted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "claimingWinnerId", "type": "uint256" }, { "indexed": false, "name": "prizeAmount", "type": "uint256" }], "name": "PrizeClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "pauseEndingBlock", "type": "uint256" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "previousCeo", "type": "address" }, { "indexed": false, "name": "newCeo", "type": "address" }], "name": "CEOTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "previousCoo", "type": "address" }, { "indexed": false, "name": "newCoo", "type": "address" }], "name": "COOTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "previousCfo", "type": "address" }, { "indexed": false, "name": "newCfo", "type": "address" }], "name": "CFOTransferred", "type": "event" }, { "constant": true, "inputs": [{ "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isActive", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "wizardId", "type": "uint256" }], "name": "getWizard", "outputs": [{ "name": "affinity", "type": "uint256" }, { "name": "power", "type": "uint256" }, { "name": "maxPower", "type": "uint256" }, { "name": "nonce", "type": "uint256" }, { "name": "currentDuel", "type": "bytes32" }, { "name": "ascending", "type": "bool" }, { "name": "ascensionOpponent", "type": "uint256" }, { "name": "molded", "type": "bool" }, { "name": "ready", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "wizardId", "type": "uint256" }], "name": "wizardFingerprint", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "wizardId", "type": "uint256" }], "name": "isReady", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardIds", "type": "uint256[]" }, { "name": "powers", "type": "uint88[]" }], "name": "enterWizards", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId", "type": "uint256" }], "name": "revive", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId", "type": "uint256" }], "name": "updateAffinity", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId", "type": "uint256" }], "name": "startAscension", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId", "type": "uint256" }, { "name": "commitment", "type": "bytes32" }], "name": "challengeAscending", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "commitment", "type": "bytes32" }], "name": "acceptAscensionChallenge", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "completeAscension", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "committingWizardId", "type": "uint256" }, { "name": "otherWizardId", "type": "uint256" }, { "name": "commitment", "type": "bytes32" }], "name": "oneSidedCommit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId", "type": "uint256" }], "name": "cancelCommitment", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId1", "type": "uint256" }, { "name": "wizardId2", "type": "uint256" }, { "name": "commit1", "type": "bytes32" }, { "name": "commit2", "type": "bytes32" }, { "name": "sig1", "type": "bytes" }, { "name": "sig2", "type": "bytes" }], "name": "doubleCommit", "outputs": [{ "name": "duelId", "type": "bytes32" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "committingWizardId", "type": "uint256" }, { "name": "commit", "type": "bytes32" }, { "name": "moveSet", "type": "bytes32" }, { "name": "salt", "type": "bytes32" }, { "name": "otherWizardId", "type": "uint256" }, { "name": "otherCommit", "type": "bytes32" }], "name": "oneSidedReveal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId1", "type": "uint256" }, { "name": "wizardId2", "type": "uint256" }, { "name": "commit1", "type": "bytes32" }, { "name": "commit2", "type": "bytes32" }, { "name": "moveSet1", "type": "bytes32" }, { "name": "moveSet2", "type": "bytes32" }, { "name": "salt1", "type": "bytes32" }, { "name": "salt2", "type": "bytes32" }], "name": "doubleReveal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardId1", "type": "uint256" }, { "name": "wizardId2", "type": "uint256" }], "name": "resolveTimedOutDuel", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "sendingWizardId", "type": "uint256" }, { "name": "receivingWizardId", "type": "uint256" }], "name": "giftPower", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardIds", "type": "uint256[]" }, { "name": "survivor", "type": "uint256" }], "name": "cullMoldedWithSurvivor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "moldyWizardIds", "type": "uint256[]" }], "name": "cullMoldedWithMolded", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wizardIds", "type": "uint256[]" }], "name": "cullTiredWizards", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "claimingWinnerId", "type": "uint256" }], "name": "claimTheBigCheeze", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "claimingWinnerId", "type": "uint256" }, { "name": "allWinners", "type": "uint256[]" }], "name": "claimSharedWinnings", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
//# sourceMappingURL=CheezeWizardsBasicTournament.js.map

/***/ }),

/***/ 92697:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DecentralandEstates = void 0;
exports.DecentralandEstates = [{ "constant": true, "inputs": [{ "name": "_interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_registry", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "landIdEstate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_operator", "type": "address" }, { "name": "_from", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "name": "", "type": "bytes4" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "estateId", "type": "uint256" }], "name": "getFingerprint", "outputs": [{ "name": "result", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "estateId", "type": "uint256" }, { "name": "landId", "type": "uint256" }, { "name": "data", "type": "string" }], "name": "updateLandData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "estateLandIds", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "estateId", "type": "uint256" }, { "name": "landIds", "type": "uint256[]" }, { "name": "destinatary", "type": "address" }], "name": "transferManyLands", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "estateId", "type": "uint256" }, { "name": "landIds", "type": "uint256[]" }, { "name": "data", "type": "string" }], "name": "updateManyLandData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_tokenId", "type": "uint256" }], "name": "exists", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_registry", "type": "address" }], "name": "setLANDRegistry", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "estateId", "type": "uint256" }, { "name": "metadata", "type": "string" }], "name": "updateMetadata", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "ping", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "operator", "type": "address" }, { "name": "estateId", "type": "uint256" }], "name": "isUpdateAuthorized", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "estateIds", "type": "uint256[]" }], "name": "safeTransferManyFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "registry", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "estateId", "type": "uint256" }, { "name": "fingerprint", "type": "bytes" }], "name": "verifyFingerprint", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "updateOperator", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "estateLandIndex", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "estateId", "type": "uint256" }, { "name": "landId", "type": "uint256" }, { "name": "destinatary", "type": "address" }], "name": "transferLand", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "estateId", "type": "uint256" }], "name": "getMetadata", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "estateId", "type": "uint256" }, { "name": "operator", "type": "address" }], "name": "setUpdateOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "landId", "type": "uint256" }], "name": "getLandEstateId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "contractName", "type": "string" }, { "name": "migrationId", "type": "string" }], "name": "isMigrated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_sender", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "metadata", "type": "string" }], "name": "mint", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "estateIds", "type": "uint256[]" }, { "name": "data", "type": "bytes" }], "name": "safeTransferManyFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "estateId", "type": "uint256" }], "name": "getEstateSize", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": true, "name": "_tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_approved", "type": "address" }, { "indexed": true, "name": "_tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_operator", "type": "address" }, { "indexed": false, "name": "_approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_estateId", "type": "uint256" }, { "indexed": false, "name": "_data", "type": "string" }], "name": "CreateEstate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_estateId", "type": "uint256" }, { "indexed": true, "name": "_landId", "type": "uint256" }], "name": "AddLand", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_estateId", "type": "uint256" }, { "indexed": true, "name": "_landId", "type": "uint256" }, { "indexed": true, "name": "_destinatary", "type": "address" }], "name": "RemoveLand", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_assetId", "type": "uint256" }, { "indexed": true, "name": "_holder", "type": "address" }, { "indexed": true, "name": "_operator", "type": "address" }, { "indexed": false, "name": "_data", "type": "string" }], "name": "Update", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_estateId", "type": "uint256" }, { "indexed": true, "name": "_operator", "type": "address" }], "name": "UpdateOperator", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_registry", "type": "address" }], "name": "SetLANDRegistry", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "contractName", "type": "string" }, { "indexed": false, "name": "migrationId", "type": "string" }], "name": "Migrated", "type": "event" }];
//# sourceMappingURL=DecentralandEstates.js.map

/***/ }),

/***/ 12851:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERC1155 = void 0;
exports.ERC1155 = [
    {
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_block",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_storage",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_oldContract",
                "type": "address"
            }
        ],
        "name": "Initialize",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_block",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_nextContract",
                "type": "address"
            }
        ],
        "name": "Retire",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_data",
                "type": "string"
            }
        ],
        "name": "Log",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateDecimals",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateName",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateSymbol",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "SetURI",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "Assign",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_creator",
                "type": "address"
            }
        ],
        "name": "AcceptAssignment",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_creator",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_isNonFungible",
                "type": "bool"
            }
        ],
        "name": "Create",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Mint",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateMaxMeltFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateMeltFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_operator",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_approved",
                "type": "bool"
            }
        ],
        "name": "OperatorApproval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_sender",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_feeId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_feeValue",
                "type": "uint256"
            }
        ],
        "name": "TransferFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateMaxTransferFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateTransferable",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "UpdateTransferFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_account",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_whitelisted",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_on",
                "type": "bool"
            }
        ],
        "name": "Whitelist",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Melt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_sender",
                "type": "address"
            }
        ],
        "name": "DeployERCAdapter",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_tradeId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_firstParty",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_secondParty",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_escrowedEnjFirstParty",
                "type": "uint256"
            }
        ],
        "name": "CreateTrade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_tradeId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_firstParty",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_secondParty",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_receivedEnjFirstParty",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_changeEnjFirstParty",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_receivedEnjSecondParty",
                "type": "uint256"
            }
        ],
        "name": "CompleteTrade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_tradeId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_firstParty",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_receivedEnjFirstParty",
                "type": "uint256"
            }
        ],
        "name": "CancelTrade",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_interfaceID",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_totalSupply",
                "type": "uint256"
            },
            {
                "name": "_initialReserve",
                "type": "uint256"
            },
            {
                "name": "_supplyModel",
                "type": "address"
            },
            {
                "name": "_meltValue",
                "type": "uint256"
            },
            {
                "name": "_meltFeeRatio",
                "type": "uint16"
            },
            {
                "name": "_transferable",
                "type": "uint8"
            },
            {
                "name": "_transferFeeSettings",
                "type": "uint256[3]"
            },
            {
                "name": "_nonFungible",
                "type": "bool"
            }
        ],
        "name": "create",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_initialReserve",
                "type": "uint256"
            }
        ],
        "name": "minMeltValue",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_to",
                "type": "address[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            }
        ],
        "name": "mintFungibles",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_to",
                "type": "address[]"
            }
        ],
        "name": "mintNonFungibles",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_to",
                "type": "address[]"
            },
            {
                "name": "_data",
                "type": "uint128[]"
            }
        ],
        "name": "mintNonFungiblesWithData",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "reserve",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint128"
            }
        ],
        "name": "releaseReserve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "updateName",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_creator",
                "type": "address"
            }
        ],
        "name": "assign",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "acceptAssignment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_account",
                "type": "address"
            },
            {
                "name": "_whitelisted",
                "type": "address"
            },
            {
                "name": "_on",
                "type": "bool"
            }
        ],
        "name": "setWhitelisted",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_transferable",
                "type": "uint8"
            }
        ],
        "name": "setTransferable",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_fee",
                "type": "uint16"
            }
        ],
        "name": "setMeltFee",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_fee",
                "type": "uint16"
            }
        ],
        "name": "decreaseMaxMeltFee",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_fee",
                "type": "uint256"
            }
        ],
        "name": "setTransferFee",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_fee",
                "type": "uint256"
            }
        ],
        "name": "decreaseMaxTransferFee",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_decimals",
                "type": "uint8"
            },
            {
                "name": "_symbol",
                "type": "string"
            }
        ],
        "name": "deployERC20Adapter",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_symbol",
                "type": "string"
            }
        ],
        "name": "deployERC721Adapter",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_data",
                "type": "string"
            }
        ],
        "name": "addLog",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "typeCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "typeByIndex",
        "outputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "nonFungibleTypeCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "nonFungibleTypeByIndex",
        "outputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "fungibleTypeCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "fungibleTypeByIndex",
        "outputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "typeData",
        "outputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_meltValue",
                "type": "uint256"
            },
            {
                "name": "_meltFeeRatio",
                "type": "uint16"
            },
            {
                "name": "_meltFeeMaxRatio",
                "type": "uint16"
            },
            {
                "name": "_supplyModel",
                "type": "address"
            },
            {
                "name": "_totalSupply",
                "type": "uint256"
            },
            {
                "name": "_circulatingSupply",
                "type": "uint256"
            },
            {
                "name": "_reserve",
                "type": "uint256"
            },
            {
                "name": "_transferable",
                "type": "uint8"
            },
            {
                "name": "_transferFeeData",
                "type": "uint256[4]"
            },
            {
                "name": "_nonFungible",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "transferSettings",
        "outputs": [
            {
                "name": "_transferable",
                "type": "uint8"
            },
            {
                "name": "_transferFeeType",
                "type": "uint8"
            },
            {
                "name": "_transferFeeCurrency",
                "type": "uint256"
            },
            {
                "name": "_transferFeeValue",
                "type": "uint256"
            },
            {
                "name": "_transferFeeMaxValue",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_creator",
                "type": "address"
            }
        ],
        "name": "isCreatorOf",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_account",
                "type": "address"
            },
            {
                "name": "_whitelisted",
                "type": "address"
            }
        ],
        "name": "whitelisted",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "mintableSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "circulatingSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getERC20Adapter",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getERC721Adapter",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_msgSender",
                "type": "address"
            }
        ],
        "name": "transferAdapter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_msgSender",
                "type": "address"
            }
        ],
        "name": "transferFromAdapter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            }
        ],
        "name": "batchTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            }
        ],
        "name": "batchTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address[]"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            }
        ],
        "name": "multicastTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address[]"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeMulticastTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address[]"
            },
            {
                "name": "_to",
                "type": "address[]"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            }
        ],
        "name": "multicastTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_currentValue",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_currentValue",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_msgSender",
                "type": "address"
            }
        ],
        "name": "approveAdapter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_currentValues",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            }
        ],
        "name": "batchApprove",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_operator",
                "type": "address"
            },
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_approved",
                "type": "bool"
            }
        ],
        "name": "setApproval",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_operator",
                "type": "address"
            },
            {
                "name": "_approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_operator",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_approved",
                "type": "bool"
            },
            {
                "name": "_msgSender",
                "type": "address"
            }
        ],
        "name": "setApprovalAdapter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_operator",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "isApproved",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "transferFees",
        "outputs": [
            {
                "name": "_transferValue",
                "type": "uint256"
            },
            {
                "name": "_minTransferValue",
                "type": "uint256"
            },
            {
                "name": "_transferFeeCurrency",
                "type": "uint256"
            },
            {
                "name": "_fee",
                "type": "uint256"
            },
            {
                "name": "_maxFee",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_askingIds",
                "type": "uint256[]"
            },
            {
                "name": "_askingValues",
                "type": "uint128[]"
            },
            {
                "name": "_offeringIds",
                "type": "uint256[]"
            },
            {
                "name": "_offeringValues",
                "type": "uint128[]"
            },
            {
                "name": "_secondParty",
                "type": "address"
            }
        ],
        "name": "createTrade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "tradeCompletable",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "completeTrade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "cancelTrade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ids",
                "type": "uint256[]"
            },
            {
                "name": "_values",
                "type": "uint256[]"
            }
        ],
        "name": "melt",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "setURI",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "nonFungibleCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "nonFungibleByIndex",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "nonFungibleOfOwnerByIndex",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "isNonFungible",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "isContract",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_erc20ContractAddress",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "releaseERC20",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "releaseETH",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_erc721ContractAddress",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_token",
                "type": "uint256"
            }
        ],
        "name": "releaseERC721",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_erc1155ContractAddress",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "releaseERC1155",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_storage",
                "type": "address"
            },
            {
                "name": "_oldContract",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_nextContract",
                "type": "address"
            }
        ],
        "name": "retire",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
//# sourceMappingURL=ERC1155.js.map

/***/ }),

/***/ 70990:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERC20 = void 0;
exports.ERC20 = [{ 'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_spender', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }], 'name': 'approve', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }], 'name': 'transferFrom', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{ 'name': '', 'type': 'uint8' }], 'payable': false, 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'version', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }], 'name': 'balanceOf', 'outputs': [{ 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_to', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }], 'name': 'transfer', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_spender', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }, { 'name': '_extraData', 'type': 'bytes' }], 'name': 'approveAndCall', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }, { 'name': '_spender', 'type': 'address' }], 'name': 'allowance', 'outputs': [{ 'name': 'remaining', 'type': 'uint256' }], 'payable': false, 'type': 'function' }, { 'inputs': [{ 'name': '_initialAmount', 'type': 'uint256' }, { 'name': '_tokenName', 'type': 'string' }, { 'name': '_decimalUnits', 'type': 'uint8' }, { 'name': '_tokenSymbol', 'type': 'string' }], 'type': 'constructor' }, { 'payable': false, 'type': 'fallback' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_from', 'type': 'address' }, { 'indexed': true, 'name': '_to', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Transfer', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_owner', 'type': 'address' }, { 'indexed': true, 'name': '_spender', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Approval', 'type': 'event' }];
//# sourceMappingURL=ERC20.js.map

/***/ }),

/***/ 67400:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERC721 = void 0;
exports.ERC721 = [
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'name': 'kittyIndexToApproved',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'name': 'partIndexToApproved',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'name': 'allowed',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'getApproved',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'approve',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalSupply',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_from',
                'type': 'address',
            },
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'transferFrom',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address',
            },
            {
                'name': '_index',
                'type': 'uint256',
            },
        ],
        'name': 'tokenOfOwnerByIndex',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_from',
                'type': 'address',
            },
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'safeTransferFrom',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'exists',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_index',
                'type': 'uint256',
            },
        ],
        'name': 'tokenByIndex',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'ownerOf',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address',
            },
        ],
        'name': 'balanceOf',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'symbol',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_approved',
                'type': 'bool',
            },
        ],
        'name': 'setApprovalForAll',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_from',
                'type': 'address',
            },
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
            {
                'name': '_data',
                'type': 'bytes',
            },
        ],
        'name': 'safeTransferFrom',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'tokenURI',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address',
            },
            {
                'name': '_operator',
                'type': 'address',
            },
        ],
        'name': 'isApprovedForAll',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'name': '_name',
                'type': 'string',
            },
            {
                'name': '_symbol',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': '_from',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': '_to',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'Transfer',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': '_owner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': '_approved',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': '_tokenId',
                'type': 'uint256',
            },
        ],
        'name': 'Approval',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': '_owner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': '_operator',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': '_approved',
                'type': 'bool',
            },
        ],
        'name': 'ApprovalForAll',
        'type': 'event',
    },
];
//# sourceMappingURL=ERC721v3.js.map

/***/ }),

/***/ 62959:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.proxyAssertABI = exports.proxyABI = void 0;
exports.proxyABI = { 'constant': false, 'inputs': [{ 'name': 'dest', 'type': 'address' }, { 'name': 'howToCall', 'type': 'uint8' }, { 'name': 'calldata', 'type': 'bytes' }], 'name': 'proxy', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' };
exports.proxyAssertABI = { 'constant': false, 'inputs': [{ 'name': 'dest', 'type': 'address' }, { 'name': 'howToCall', 'type': 'uint8' }, { 'name': 'calldata', 'type': 'bytes' }], 'name': 'proxyAssert', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' };
//# sourceMappingURL=Proxy.js.map

/***/ }),

/***/ 64794:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticCheckCheezeWizards = void 0;
exports.StaticCheckCheezeWizards = [{ "constant": true, "inputs": [{ "name": "_wizardId", "type": "uint256" }, { "name": "_fingerprint", "type": "bytes32" }, { "name": "checkTxOrigin", "type": "bool" }], "name": "succeedIfCurrentWizardFingerprintMatchesProvidedWizardFingerprint", "outputs": [], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOpenSeaAdminAddress", "type": "address" }], "name": "changeOpenSeaAdminAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newTournamentAddress", "type": "address" }], "name": "changeTournamentAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_cheezeWizardTournamentAddress", "type": "address" }, { "name": "_openSeaAdminAddress", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "previousOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }];
//# sourceMappingURL=StaticCheckCheezeWizards.js.map

/***/ }),

/***/ 13005:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticCheckDecentralandEstates = void 0;
exports.StaticCheckDecentralandEstates = [{ "constant": false, "inputs": [{ "name": "_newAddress", "type": "address" }], "name": "changeDecentralandEstateAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_estateId", "type": "uint256" }, { "name": "_fingerprint", "type": "bytes32" }, { "name": "checkTxOrigin", "type": "bool" }], "name": "succeedIfCurrentEstateFingerprintMatchesProvidedEstateFingerprint", "outputs": [], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOpenSeaAdminAddress", "type": "address" }], "name": "changeOpenSeaAdminAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_decentralandEstateAddress", "type": "address" }, { "name": "_openSeaAdminAddress", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "previousOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }];
//# sourceMappingURL=StaticCheckDecentralandEstates.js.map

/***/ }),

/***/ 37332:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticCheckTxOrigin = void 0;
exports.StaticCheckTxOrigin = [{ "constant": true, "inputs": [], "name": "succeedIfTxOriginMatchesHardcodedAddress", "outputs": [], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_specifiedAddress", "type": "address" }], "name": "succeedIfTxOriginMatchesSpecifiedAddress", "outputs": [], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newHardcodedAddress", "type": "address" }], "name": "changeHardcodedAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_hardcodedAddress", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "previousOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }];
//# sourceMappingURL=StaticCheckTxOrigin.js.map

/***/ }),

/***/ 72013:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UniswapExchange = void 0;
exports.UniswapExchange = [{ "name": "TokenPurchase", "inputs": [{ "type": "address", "name": "buyer", "indexed": true }, { "type": "uint256", "name": "eth_sold", "indexed": true }, { "type": "uint256", "name": "tokens_bought", "indexed": true }], "anonymous": false, "type": "event" }, { "name": "EthPurchase", "inputs": [{ "type": "address", "name": "buyer", "indexed": true }, { "type": "uint256", "name": "tokens_sold", "indexed": true }, { "type": "uint256", "name": "eth_bought", "indexed": true }], "anonymous": false, "type": "event" }, { "name": "AddLiquidity", "inputs": [{ "type": "address", "name": "provider", "indexed": true }, { "type": "uint256", "name": "eth_amount", "indexed": true }, { "type": "uint256", "name": "token_amount", "indexed": true }], "anonymous": false, "type": "event" }, { "name": "RemoveLiquidity", "inputs": [{ "type": "address", "name": "provider", "indexed": true }, { "type": "uint256", "name": "eth_amount", "indexed": true }, { "type": "uint256", "name": "token_amount", "indexed": true }], "anonymous": false, "type": "event" }, { "name": "Transfer", "inputs": [{ "type": "address", "name": "_from", "indexed": true }, { "type": "address", "name": "_to", "indexed": true }, { "type": "uint256", "name": "_value", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Approval", "inputs": [{ "type": "address", "name": "_owner", "indexed": true }, { "type": "address", "name": "_spender", "indexed": true }, { "type": "uint256", "name": "_value", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "setup", "outputs": [], "inputs": [{ "type": "address", "name": "token_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "addLiquidity", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "min_liquidity" }, { "type": "uint256", "name": "max_tokens" }, { "type": "uint256", "name": "deadline" }], "constant": false, "payable": true, "type": "function" }, { "name": "removeLiquidity", "outputs": [{ "type": "uint256", "name": "out" }, { "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "amount" }, { "type": "uint256", "name": "min_eth" }, { "type": "uint256", "name": "min_tokens" }, { "type": "uint256", "name": "deadline" }], "constant": false, "payable": false, "type": "function" }, { "name": "__default__", "outputs": [], "inputs": [], "constant": false, "payable": true, "type": "function" }, { "name": "ethToTokenSwapInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "min_tokens" }, { "type": "uint256", "name": "deadline" }], "constant": false, "payable": true, "type": "function" }, { "name": "ethToTokenTransferInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "min_tokens" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }], "constant": false, "payable": true, "type": "function" }, { "name": "ethToTokenSwapOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_bought" }, { "type": "uint256", "name": "deadline" }], "constant": false, "payable": true, "type": "function" }, { "name": "ethToTokenTransferOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_bought" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }], "constant": false, "payable": true, "type": "function" }, { "name": "tokenToEthSwapInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_sold" }, { "type": "uint256", "name": "min_eth" }, { "type": "uint256", "name": "deadline" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToEthTransferInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_sold" }, { "type": "uint256", "name": "min_eth" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToEthSwapOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "eth_bought" }, { "type": "uint256", "name": "max_tokens" }, { "type": "uint256", "name": "deadline" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToEthTransferOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "eth_bought" }, { "type": "uint256", "name": "max_tokens" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToTokenSwapInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_sold" }, { "type": "uint256", "name": "min_tokens_bought" }, { "type": "uint256", "name": "min_eth_bought" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "token_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToTokenTransferInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_sold" }, { "type": "uint256", "name": "min_tokens_bought" }, { "type": "uint256", "name": "min_eth_bought" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }, { "type": "address", "name": "token_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToTokenSwapOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_bought" }, { "type": "uint256", "name": "max_tokens_sold" }, { "type": "uint256", "name": "max_eth_sold" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "token_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToTokenTransferOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_bought" }, { "type": "uint256", "name": "max_tokens_sold" }, { "type": "uint256", "name": "max_eth_sold" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }, { "type": "address", "name": "token_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToExchangeSwapInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_sold" }, { "type": "uint256", "name": "min_tokens_bought" }, { "type": "uint256", "name": "min_eth_bought" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "exchange_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToExchangeTransferInput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_sold" }, { "type": "uint256", "name": "min_tokens_bought" }, { "type": "uint256", "name": "min_eth_bought" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }, { "type": "address", "name": "exchange_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToExchangeSwapOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_bought" }, { "type": "uint256", "name": "max_tokens_sold" }, { "type": "uint256", "name": "max_eth_sold" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "exchange_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "tokenToExchangeTransferOutput", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_bought" }, { "type": "uint256", "name": "max_tokens_sold" }, { "type": "uint256", "name": "max_eth_sold" }, { "type": "uint256", "name": "deadline" }, { "type": "address", "name": "recipient" }, { "type": "address", "name": "exchange_addr" }], "constant": false, "payable": false, "type": "function" }, { "name": "getEthToTokenInputPrice", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "eth_sold" }], "constant": true, "payable": false, "type": "function" }, { "name": "getEthToTokenOutputPrice", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_bought" }], "constant": true, "payable": false, "type": "function" }, { "name": "getTokenToEthInputPrice", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "tokens_sold" }], "constant": true, "payable": false, "type": "function" }, { "name": "getTokenToEthOutputPrice", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "uint256", "name": "eth_bought" }], "constant": true, "payable": false, "type": "function" }, { "name": "tokenAddress", "outputs": [{ "type": "address", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }, { "name": "factoryAddress", "outputs": [{ "type": "address", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }, { "name": "balanceOf", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "address", "name": "_owner" }], "constant": true, "payable": false, "type": "function" }, { "name": "transfer", "outputs": [{ "type": "bool", "name": "out" }], "inputs": [{ "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "constant": false, "payable": false, "type": "function" }, { "name": "transferFrom", "outputs": [{ "type": "bool", "name": "out" }], "inputs": [{ "type": "address", "name": "_from" }, { "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "constant": false, "payable": false, "type": "function" }, { "name": "approve", "outputs": [{ "type": "bool", "name": "out" }], "inputs": [{ "type": "address", "name": "_spender" }, { "type": "uint256", "name": "_value" }], "constant": false, "payable": false, "type": "function" }, { "name": "allowance", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [{ "type": "address", "name": "_owner" }, { "type": "address", "name": "_spender" }], "constant": true, "payable": false, "type": "function" }, { "name": "name", "outputs": [{ "type": "bytes32", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }, { "name": "symbol", "outputs": [{ "type": "bytes32", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }, { "name": "decimals", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }, { "name": "totalSupply", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }];
//# sourceMappingURL=UniswapExchange.js.map

/***/ }),

/***/ 76213:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UniswapFactory = void 0;
exports.UniswapFactory = [{ "name": "NewExchange", "inputs": [{ "type": "address", "name": "token", "indexed": true }, { "type": "address", "name": "exchange", "indexed": true }], "anonymous": false, "type": "event" }, { "name": "initializeFactory", "outputs": [], "inputs": [{ "type": "address", "name": "template" }], "constant": false, "payable": false, "type": "function" }, { "name": "createExchange", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "address", "name": "token" }], "constant": false, "payable": false, "type": "function" }, { "name": "getExchange", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "address", "name": "token" }], "constant": true, "payable": false, "type": "function" }, { "name": "getToken", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "address", "name": "exchange" }], "constant": true, "payable": false, "type": "function" }, { "name": "getTokenWithId", "outputs": [{ "type": "address", "name": "out" }], "inputs": [{ "type": "uint256", "name": "token_id" }], "constant": true, "payable": false, "type": "function" }, { "name": "exchangeTemplate", "outputs": [{ "type": "address", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }, { "name": "tokenCount", "outputs": [{ "type": "uint256", "name": "out" }], "inputs": [], "constant": true, "payable": false, "type": "function" }];
//# sourceMappingURL=UniswapFactory.js.map

/***/ }),

/***/ 24522:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WrappedNFT = void 0;
exports.WrappedNFT = [{ "constant": false, "inputs": [{ "internalType": "uint256[]", "name": "_nftIds", "type": "uint256[]" }, { "internalType": "address[]", "name": "_destinationAddresses", "type": "address[]" }], "name": "burnTokensAndWithdrawNfts", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_numSlotsToCheck", "type": "uint256" }], "name": "batchRemoveWithdrawnNFTsFromStorage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "wyvernTokenTransferProxyAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "uniswapFactoryAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftIsDepositedInContract", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256[]", "name": "_nftIds", "type": "uint256[]" }], "name": "depositNftsAndMintTokens", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "nftCoreAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "wrappedNFTLiquidationProxyAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_nftCoreAddress", "type": "address" }, { "internalType": "address", "name": "_uniswapFactoryAddress", "type": "address" }, { "internalType": "address", "name": "_wyvernTokenTransferProxyAddress", "type": "address" }, { "internalType": "address", "name": "_wrappedNFTLiquidationProxyAddress", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "DepositNFTAndMintToken", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "BurnTokenAndWithdrawNFT", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }];
//# sourceMappingURL=WrappedNFT.js.map

/***/ }),

/***/ 38576:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WrappedNFTFactory = void 0;
exports.WrappedNFTFactory = [{ "constant": true, "inputs": [], "name": "wyvernTokenTransferProxyAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "uniswapFactoryAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_startIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_endIndex", "type": "uint256" }, { "internalType": "address", "name": "_previousFactoryAddress", "type": "address" }], "name": "importMappingsFromPreviousFactory", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "idToNftContract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "wrapperContractsCreated", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "wrapperContractToNftContract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_nftContractAddress", "type": "address" }], "name": "createWrapperContract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_newWyvernTokenTransferProxyAddress", "type": "address" }], "name": "updateWyvernTokenTransferProxyAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_newWrappedNFTLiquidationProxyAddress", "type": "address" }], "name": "updateWrappedNFTLiquidationProxyAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nftContractToWrapperContract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_nftContractAddress", "type": "address" }], "name": "getWrapperContractForNFTContractAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_newUniswapFactoryAddress", "type": "address" }], "name": "updateUniswapFactoryContractAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "wrappedNFTLiquidationProxyAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_uniswapFactoryAddress", "type": "address" }, { "internalType": "address", "name": "_wyvernTokenTransferProxyAddress", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": false, "internalType": "address", "name": "wrapperContract", "type": "address" }], "name": "NewWrapperContractCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }];
//# sourceMappingURL=WrappedNFTFactory.js.map

/***/ }),

/***/ 58318:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WrappedNFTLiquidationProxy = void 0;
exports.WrappedNFTLiquidationProxy = [{ "constant": false, "inputs": [{ "name": "_operator", "type": "address" }, { "name": "_from", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "name": "", "type": "bytes4" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_nftIds", "type": "uint256[]" }, { "name": "_nftContractAddresses", "type": "address[]" }, { "name": "_isMixedBatchOfNFTs", "type": "bool" }], "name": "wrapNFTs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "uniswapFactoryAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "wrappedNFTFactoryAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_nftContractAddress", "type": "address" }, { "name": "_numTokensToPurchase", "type": "uint256" }], "name": "purchaseNFTs", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_nftIds", "type": "uint256[]" }, { "name": "_nftContractAddresses", "type": "address[]" }, { "name": "_isMixedBatchOfNFTs", "type": "bool" }, { "name": "_uniswapSlippageAllowedInBasisPoints", "type": "uint256" }], "name": "liquidateNFTs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_nftIds", "type": "uint256[]" }, { "name": "_nftContractAddresses", "type": "address[]" }, { "name": "_destinationAddresses", "type": "address[]" }, { "name": "_isMixedBatchOfNFTs", "type": "bool" }], "name": "unwrapNFTs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_wrappedNFTFactoryAddress", "type": "address" }, { "name": "_uniswapFactoryAddress", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "numTokensMelted", "type": "uint256" }, { "indexed": false, "name": "nftContractAddress", "type": "address" }, { "indexed": false, "name": "ethReceived", "type": "uint256" }], "name": "LiquidateNFTs", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "numTokensBought", "type": "uint256" }, { "indexed": false, "name": "nftContractAddress", "type": "address" }, { "indexed": false, "name": "ethSpent", "type": "uint256" }], "name": "PurchaseNFTs", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "numTokensWrapped", "type": "uint256" }, { "indexed": false, "name": "nftContractAddress", "type": "address" }], "name": "WrapNFTs", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "numTokensUnwrapped", "type": "uint256" }, { "indexed": false, "name": "nftContractAddress", "type": "address" }], "name": "UnwrapNFTs", "type": "event" }];
//# sourceMappingURL=WrappedNFTLiquidationProxy.js.map

/***/ }),

/***/ 73647:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenSeaAPI = void 0;
__webpack_require__(15737);
var QueryString = __webpack_require__(83336);
var types_1 = __webpack_require__(95356);
var utils_1 = __webpack_require__(66545);
var constants_1 = __webpack_require__(56947);
var OpenSeaAPI = /** @class */ (function () {
    /**
     * Create an instance of the OpenSea API
     * @param config OpenSeaAPIConfig for setting up the API, including an optional API key, network name, and base URL
     * @param logger Optional function for logging debug strings before and after requests are made
     */
    function OpenSeaAPI(config, logger) {
        /**
         * Page size to use for fetching orders
         */
        this.pageSize = 20;
        this.apiKey = config.apiKey;
        switch (config.networkName) {
            case types_1.Network.Rinkeby:
                this.apiBaseUrl = config.apiBaseUrl || constants_1.API_BASE_RINKEBY;
                this.hostUrl = constants_1.SITE_HOST_RINKEBY;
                break;
            case types_1.Network.Main:
            default:
                this.apiBaseUrl = config.apiBaseUrl || constants_1.API_BASE_MAINNET;
                this.hostUrl = constants_1.SITE_HOST_MAINNET;
                break;
        }
        // Debugging: default to nothing
        this.logger = logger || (function (arg) { return arg; });
    }
    /**
     * Send an order to the orderbook.
     * Throws when the order is invalid.
     * IN NEXT VERSION: change order input to Order type
     * @param order Order JSON to post to the orderbook
     * @param retries Number of times to retry if the service is unavailable for any reason
     */
    OpenSeaAPI.prototype.postOrder = function (order, retries) {
        if (retries === void 0) { retries = 2; }
        return __awaiter(this, void 0, void 0, function () {
            var json, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.post(constants_1.ORDERBOOK_PATH + "/orders/post/", order)];
                    case 1:
                        json = (_a.sent());
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        _throwOrContinue(error_1, retries);
                        return [4 /*yield*/, utils_1.delay(3000)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.postOrder(order, retries - 1)];
                    case 4: return [2 /*return*/, utils_1.orderFromJSON(json)];
                }
            });
        });
    };
    /**
     * Create a whitelist entry for an asset to prevent others from buying.
     * Buyers will have to have verified at least one of the emails
     * on an asset in order to buy.
     * This will throw a 403 if the given API key isn't allowed to create whitelist entries for this contract or asset.
     * @param tokenAddress Address of the asset's contract
     * @param tokenId The asset's token ID
     * @param email The email allowed to buy.
     */
    OpenSeaAPI.prototype.postAssetWhitelist = function (tokenAddress, tokenId, email) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(constants_1.API_PATH + "/asset/" + tokenAddress + "/" + tokenId + "/whitelist/", {
                            email: email
                        })];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, !!json.success];
                }
            });
        });
    };
    /**
     * Get an order from the orderbook, throwing if none is found.
     * @param query Query to use for getting orders. A subset of parameters
     *  on the `OrderJSON` type is supported
     */
    OpenSeaAPI.prototype.getOrder = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result, orderJSON, json, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(constants_1.ORDERBOOK_PATH + "/orders/", __assign({ limit: 1 }, query))];
                    case 1:
                        result = _a.sent();
                        if (constants_1.ORDERBOOK_VERSION == 0) {
                            json = result;
                            orderJSON = json[0];
                        }
                        else {
                            json = result;
                            orderJSON = json.orders[0];
                        }
                        if (!orderJSON) {
                            throw new Error("Not found: no matching order found");
                        }
                        return [2 /*return*/, utils_1.orderFromJSON(orderJSON)];
                }
            });
        });
    };
    /**
     * Get a list of orders from the orderbook, returning the page of orders
     *  and the count of total orders found.
     * @param query Query to use for getting orders. A subset of parameters
     *  on the `OrderJSON` type is supported
     * @param page Page number, defaults to 1. Can be overridden by
     * `limit` and `offset` attributes from OrderQuery
     */
    OpenSeaAPI.prototype.getOrders = function (query, page) {
        if (query === void 0) { query = {}; }
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var result, json, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(constants_1.ORDERBOOK_PATH + "/orders/", __assign({ limit: this.pageSize, offset: (page - 1) * this.pageSize }, query))];
                    case 1:
                        result = _a.sent();
                        if (constants_1.ORDERBOOK_VERSION == 0) {
                            json = result;
                            return [2 /*return*/, {
                                    orders: json.map(function (j) { return utils_1.orderFromJSON(j); }),
                                    count: json.length
                                }];
                        }
                        else {
                            json = result;
                            return [2 /*return*/, {
                                    orders: json.orders.map(function (j) { return utils_1.orderFromJSON(j); }),
                                    count: json.count
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch an asset from the API, throwing if none is found
     * @param tokenAddress Address of the asset's contract
     * @param tokenId The asset's token ID, or null if ERC-20
     * @param retries Number of times to retry if the service is unavailable for any reason
     */
    OpenSeaAPI.prototype.getAsset = function (_a, retries) {
        var tokenAddress = _a.tokenAddress, tokenId = _a.tokenId;
        if (retries === void 0) { retries = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var json, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.get(constants_1.API_PATH + "/asset/" + tokenAddress + "/" + (tokenId || 0) + "/")];
                    case 1:
                        json = _b.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        error_2 = _b.sent();
                        _throwOrContinue(error_2, retries);
                        return [4 /*yield*/, utils_1.delay(1000)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, this.getAsset({ tokenAddress: tokenAddress, tokenId: tokenId }, retries - 1)];
                    case 4: return [2 /*return*/, utils_1.assetFromJSON(json)];
                }
            });
        });
    };
    /**
     * Fetch list of assets from the API, returning the page of assets and the count of total assets
     * @param query Query to use for getting orders. A subset of parameters on the `OpenSeaAssetJSON` type is supported
     * @param page Page number, defaults to 1. Can be overridden by
     * `limit` and `offset` attributes from OpenSeaAssetQuery
     */
    OpenSeaAPI.prototype.getAssets = function (query, page) {
        if (query === void 0) { query = {}; }
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(constants_1.API_PATH + "/assets/", __assign({ limit: this.pageSize, offset: (page - 1) * this.pageSize }, query))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, {
                                assets: json.assets.map(function (j) { return utils_1.assetFromJSON(j); }),
                                estimatedCount: json.estimated_count
                            }];
                }
            });
        });
    };
    /**
     * Fetch list of fungible tokens from the API matching paramters
     * @param query Query to use for getting orders. A subset of parameters on the `OpenSeaAssetJSON` type is supported
     * @param page Page number, defaults to 1. Can be overridden by
     * `limit` and `offset` attributes from OpenSeaFungibleTokenQuery
     * @param retries Number of times to retry if the service is unavailable for any reason
     */
    OpenSeaAPI.prototype.getPaymentTokens = function (query, page, retries) {
        if (query === void 0) { query = {}; }
        if (page === void 0) { page = 1; }
        if (retries === void 0) { retries = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var json, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.get(constants_1.API_PATH + "/tokens/", __assign(__assign({}, query), { limit: this.pageSize, offset: (page - 1) * this.pageSize }))];
                    case 1:
                        json = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        error_3 = _a.sent();
                        _throwOrContinue(error_3, retries);
                        return [4 /*yield*/, utils_1.delay(1000)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.getPaymentTokens(query, page, retries - 1)];
                    case 4: return [2 /*return*/, {
                            tokens: json.map(function (t) { return utils_1.tokenFromJSON(t); })
                        }];
                }
            });
        });
    };
    /**
     * Fetch an bundle from the API, return null if it isn't found
     * @param slug The bundle's identifier
     */
    OpenSeaAPI.prototype.getBundle = function (_a) {
        var slug = _a.slug;
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.get(constants_1.API_PATH + "/bundle/" + slug + "/")];
                    case 1:
                        json = _b.sent();
                        return [2 /*return*/, json ? utils_1.assetBundleFromJSON(json) : null];
                }
            });
        });
    };
    /**
     * Fetch list of bundles from the API, returning the page of bundles and the count of total bundles
     * @param query Query to use for getting orders. A subset of parameters on the `OpenSeaAssetBundleJSON` type is supported
     * @param page Page number, defaults to 1. Can be overridden by
     * `limit` and `offset` attributes from OpenSeaAssetBundleQuery
     */
    OpenSeaAPI.prototype.getBundles = function (query, page) {
        if (query === void 0) { query = {}; }
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(constants_1.API_PATH + "/bundles/", __assign(__assign({}, query), { limit: this.pageSize, offset: (page - 1) * this.pageSize }))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, {
                                bundles: json.bundles.map(function (j) { return utils_1.assetBundleFromJSON(j); }),
                                estimatedCount: json.estimated_count
                            }];
                }
            });
        });
    };
    /**
     * Get JSON data from API, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param query Data to send. Will be stringified using QueryString
     */
    OpenSeaAPI.prototype.get = function (apiPath, query) {
        if (query === void 0) { query = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var qs, url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qs = QueryString.stringify(query);
                        url = apiPath + "?" + qs;
                        return [4 /*yield*/, this._fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    /**
     * POST JSON data to API, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param body Data to send. Will be JSON.stringified
     * @param opts RequestInit opts, similar to Fetch API. If it contains
     *  a body, it won't be stringified.
     */
    OpenSeaAPI.prototype.post = function (apiPath, body, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var fetchOpts, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchOpts = __assign({ method: 'POST', body: body ? JSON.stringify(body) : undefined, headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            } }, opts);
                        return [4 /*yield*/, this._fetch(apiPath, fetchOpts)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    /**
     * PUT JSON data to API, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param body Data to send
     * @param opts RequestInit opts, similar to Fetch API. If it contains
     *  a body, it won't be stringified.
     */
    OpenSeaAPI.prototype.put = function (apiPath, body, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post(apiPath, body, __assign({ method: 'PUT' }, opts))];
            });
        });
    };
    /**
     * Get from an API Endpoint, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param opts RequestInit opts, similar to Fetch API
     */
    OpenSeaAPI.prototype._fetch = function (apiPath, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var apiBase, apiKey, finalUrl, finalOpts;
            var _this = this;
            return __generator(this, function (_a) {
                apiBase = this.apiBaseUrl;
                apiKey = this.apiKey;
                finalUrl = apiBase + apiPath;
                finalOpts = __assign(__assign({}, opts), { headers: __assign(__assign({}, (apiKey ? { 'X-API-KEY': apiKey } : {})), (opts.headers || {})) });
                this.logger("Sending request: " + finalUrl + " " + JSON.stringify(finalOpts).substr(0, 100) + "...");
                return [2 /*return*/, fetch(finalUrl, finalOpts).then(function (res) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this._handleApiResponse(res)];
                    }); }); })];
            });
        });
    };
    OpenSeaAPI.prototype._handleApiResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var result, errorMessage, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (response.ok) {
                            this.logger("Got success: " + response.status);
                            return [2 /*return*/, response];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, response.text()];
                    case 2:
                        result = _b.sent();
                        result = JSON.parse(result);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        this.logger("Got error " + response.status + ": " + JSON.stringify(result));
                        switch (response.status) {
                            case 400:
                                errorMessage = result && result.errors
                                    ? result.errors.join(', ')
                                    : "Invalid request: " + JSON.stringify(result);
                                break;
                            case 401:
                            case 403:
                                errorMessage = "Unauthorized. Full message was '" + JSON.stringify(result) + "'";
                                break;
                            case 404:
                                errorMessage = "Not found. Full message was '" + JSON.stringify(result) + "'";
                                break;
                            case 500:
                                errorMessage = "Internal server error. OpenSea has been alerted, but if the problem persists please contact us via Discord: https://discord.gg/ga8EJbv - full message was " + JSON.stringify(result);
                                break;
                            case 503:
                                errorMessage = "Service unavailable. Please try again in a few minutes. If the problem persists please contact us via Discord: https://discord.gg/ga8EJbv - full message was " + JSON.stringify(result);
                                break;
                            default:
                                errorMessage = "Message: " + JSON.stringify(result);
                                break;
                        }
                        throw new Error("API Error " + response.status + ": " + errorMessage);
                }
            });
        });
    };
    return OpenSeaAPI;
}());
exports.OpenSeaAPI = OpenSeaAPI;
function _throwOrContinue(error, retries) {
    var isUnavailable = !!error.message && (error.message.includes('503') ||
        error.message.includes('429'));
    if (retries <= 0 || !isUnavailable) {
        throw error;
    }
}
//# sourceMappingURL=api.js.map

/***/ }),

/***/ 56947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.API_PATH = exports.ORDERBOOK_PATH = exports.RINKEBY_PROVIDER_URL = exports.MAINNET_PROVIDER_URL = exports.RPC_URL_PATH = exports.SITE_HOST_RINKEBY = exports.SITE_HOST_MAINNET = exports.API_BASE_RINKEBY = exports.API_BASE_MAINNET = exports.API_VERSION = exports.ORDERBOOK_VERSION = exports.SELL_ORDER_BATCH_SIZE = exports.ORDER_MATCHING_LATENCY_SECONDS = exports.MIN_EXPIRATION_SECONDS = exports.DEFAULT_MAX_BOUNTY = exports.OPENSEA_SELLER_BOUNTY_BASIS_POINTS = exports.DEFAULT_SELLER_FEE_BASIS_POINTS = exports.DEFAULT_BUYER_FEE_BASIS_POINTS = exports.STATIC_CALL_DECENTRALAND_ESTATES_ADDRESS = exports.STATIC_CALL_CHEEZE_WIZARDS_RINKEBY_ADDRESS = exports.STATIC_CALL_CHEEZE_WIZARDS_ADDRESS = exports.STATIC_CALL_TX_ORIGIN_RINKEBY_ADDRESS = exports.STATIC_CALL_TX_ORIGIN_ADDRESS = exports.DECENTRALAND_ESTATE_ADDRESS = exports.CHEEZE_WIZARDS_BASIC_TOURNAMENT_RINKEBY_ADDRESS = exports.CHEEZE_WIZARDS_BASIC_TOURNAMENT_ADDRESS = exports.CHEEZE_WIZARDS_GUILD_RINKEBY_ADDRESS = exports.CHEEZE_WIZARDS_GUILD_ADDRESS = exports.DEFAULT_WRAPPED_NFT_LIQUIDATION_UNISWAP_SLIPPAGE_IN_BASIS_POINTS = exports.UNISWAP_FACTORY_ADDRESS_RINKEBY = exports.UNISWAP_FACTORY_ADDRESS_MAINNET = exports.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_RINKEBY = exports.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_MAINNET = exports.WRAPPED_NFT_FACTORY_ADDRESS_RINKEBY = exports.WRAPPED_NFT_FACTORY_ADDRESS_MAINNET = exports.CK_RINKEBY_ADDRESS = exports.CK_ADDRESS = exports.ENJIN_LEGACY_ADDRESS = exports.ENJIN_ADDRESS = exports.MANA_ADDRESS = exports.ENJIN_COIN_ADDRESS = exports.WYVERN_EXCHANGE_ADDRESS_RINKEBY = exports.WYVERN_EXCHANGE_ADDRESS_MAINNET = exports.MAX_UINT_256 = exports.INVERSE_BASIS_POINT = exports.DEP_INFURA_KEY = exports.OPENSEA_FEE_RECIPIENT = exports.NULL_BLOCK_HASH = exports.NULL_ADDRESS = exports.DEFAULT_GAS_INCREASE_FACTOR = void 0;
var wyvern_js_1 = __webpack_require__(20544);
exports.DEFAULT_GAS_INCREASE_FACTOR = 1.01;
exports.NULL_ADDRESS = wyvern_js_1.WyvernProtocol.NULL_ADDRESS;
exports.NULL_BLOCK_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';
exports.OPENSEA_FEE_RECIPIENT = '0x5b3256965e7c3cf26e11fcaf296dfc8807c01073';
exports.DEP_INFURA_KEY = 'e8695bce67944848aa95459fac052f8e';
exports.INVERSE_BASIS_POINT = 10000;
exports.MAX_UINT_256 = wyvern_js_1.WyvernProtocol.MAX_UINT_256;
exports.WYVERN_EXCHANGE_ADDRESS_MAINNET = '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b';
exports.WYVERN_EXCHANGE_ADDRESS_RINKEBY = '0x5206e78b21ce315ce284fb24cf05e0585a93b1d9';
exports.ENJIN_COIN_ADDRESS = '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c';
exports.MANA_ADDRESS = '0x0f5d2fb29fb7d3cfee444a200298f468908cc942';
exports.ENJIN_ADDRESS = '0xfaaFDc07907ff5120a76b34b731b278c38d6043C';
exports.ENJIN_LEGACY_ADDRESS = '0x8562c38485B1E8cCd82E44F89823dA76C98eb0Ab';
exports.CK_ADDRESS = '0x06012c8cf97bead5deae237070f9587f8e7a266d';
exports.CK_RINKEBY_ADDRESS = '0x16baf0de678e52367adc69fd067e5edd1d33e3bf';
exports.WRAPPED_NFT_FACTORY_ADDRESS_MAINNET = '0xf11b5815b143472b7f7c52af0bfa6c6a2c8f40e1';
exports.WRAPPED_NFT_FACTORY_ADDRESS_RINKEBY = '0x94c71c87244b862cfd64d36af468309e4804ec09';
exports.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_MAINNET = '0x995835145dd85c012f3e2d7d5561abd626658c04';
exports.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_RINKEBY = '0xaa775Eb452353aB17f7cf182915667c2598D43d3';
exports.UNISWAP_FACTORY_ADDRESS_MAINNET = '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95';
exports.UNISWAP_FACTORY_ADDRESS_RINKEBY = '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36';
exports.DEFAULT_WRAPPED_NFT_LIQUIDATION_UNISWAP_SLIPPAGE_IN_BASIS_POINTS = 1000;
exports.CHEEZE_WIZARDS_GUILD_ADDRESS = wyvern_js_1.WyvernProtocol.NULL_ADDRESS; // TODO: Update this address once Dapper has deployed their mainnet contracts
exports.CHEEZE_WIZARDS_GUILD_RINKEBY_ADDRESS = '0x095731b672b76b00A0b5cb9D8258CD3F6E976cB2';
exports.CHEEZE_WIZARDS_BASIC_TOURNAMENT_ADDRESS = wyvern_js_1.WyvernProtocol.NULL_ADDRESS; // TODO: Update this address once Dapper has deployed their mainnet contracts
exports.CHEEZE_WIZARDS_BASIC_TOURNAMENT_RINKEBY_ADDRESS = '0x8852f5F7d1BB867AAf8fdBB0851Aa431d1df5ca1';
exports.DECENTRALAND_ESTATE_ADDRESS = '0x959e104e1a4db6317fa58f8295f586e1a978c297';
exports.STATIC_CALL_TX_ORIGIN_ADDRESS = '0xbff6ade67e3717101dd8d0a7f3de1bf6623a2ba8';
exports.STATIC_CALL_TX_ORIGIN_RINKEBY_ADDRESS = '0xe291abab95677bc652a44f973a8e06d48464e11c';
exports.STATIC_CALL_CHEEZE_WIZARDS_ADDRESS = wyvern_js_1.WyvernProtocol.NULL_ADDRESS; // TODO: Deploy this address once Dapper has deployed their mainnet contracts
exports.STATIC_CALL_CHEEZE_WIZARDS_RINKEBY_ADDRESS = '0x8a640bdf8886dd6ca1fad9f22382b50deeacde08';
exports.STATIC_CALL_DECENTRALAND_ESTATES_ADDRESS = '0x93c3cd7ba04556d2e3d7b8106ce0f83e24a87a7e';
exports.DEFAULT_BUYER_FEE_BASIS_POINTS = 0;
exports.DEFAULT_SELLER_FEE_BASIS_POINTS = 250;
exports.OPENSEA_SELLER_BOUNTY_BASIS_POINTS = 100;
exports.DEFAULT_MAX_BOUNTY = exports.DEFAULT_SELLER_FEE_BASIS_POINTS;
exports.MIN_EXPIRATION_SECONDS = 10;
exports.ORDER_MATCHING_LATENCY_SECONDS = 60 * 60 * 24 * 7;
exports.SELL_ORDER_BATCH_SIZE = 3;
exports.ORDERBOOK_VERSION = 1;
exports.API_VERSION = 1;
exports.API_BASE_MAINNET = 'https://api.opensea.io';
exports.API_BASE_RINKEBY = 'https://testnets-api.opensea.io';
exports.SITE_HOST_MAINNET = 'https://opensea.io';
exports.SITE_HOST_RINKEBY = 'https://rinkeby.opensea.io';
exports.RPC_URL_PATH = 'jsonrpc/v1/';
exports.MAINNET_PROVIDER_URL = exports.API_BASE_MAINNET + "/" + exports.RPC_URL_PATH;
exports.RINKEBY_PROVIDER_URL = exports.API_BASE_RINKEBY + "/" + exports.RPC_URL_PATH;
exports.ORDERBOOK_PATH = "/wyvern/v" + exports.ORDERBOOK_VERSION;
exports.API_PATH = "/api/v" + exports.ORDERBOOK_VERSION;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 98572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UniswapExchange = exports.UniswapFactory = exports.WrappedNFTLiquidationProxy = exports.WrappedNFTFactory = exports.WrappedNFT = exports.CanonicalWETH = exports.DecentralandEstates = exports.CheezeWizardsBasicTournament = exports.StaticCheckDecentralandEstates = exports.StaticCheckCheezeWizards = exports.StaticCheckTxOrigin = exports.ERC1155 = exports.ERC721 = exports.ERC20 = exports.DECENTRALAND_AUCTION_CONFIG = exports.event = exports.getMethod = void 0;
var getMethod = function (abi, name) {
    var methodAbi = abi.find(function (x) { return x.type == 'function' && x.name == name; });
    if (!methodAbi) {
        throw new Error("ABI " + name + " not found");
    }
    // Have to cast since there's a bug in
    // web3 types on the 'type' field
    return methodAbi;
};
exports.getMethod = getMethod;
var event = function (abi, name) {
    var eventAbi = abi.find(function (x) { return x.type == 'event' && x.name == name; });
    if (!eventAbi) {
        throw new Error("ABI " + name + " not found");
    }
    // Have to cast since there's a bug in
    // web3 types on the 'type' field
    return eventAbi;
};
exports.event = event;
exports.DECENTRALAND_AUCTION_CONFIG = {
    '1': '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d',
};
var ERC20_1 = __webpack_require__(70990);
Object.defineProperty(exports, "ERC20", ({ enumerable: true, get: function () { return ERC20_1.ERC20; } }));
var ERC721v3_1 = __webpack_require__(67400);
Object.defineProperty(exports, "ERC721", ({ enumerable: true, get: function () { return ERC721v3_1.ERC721; } }));
var ERC1155_1 = __webpack_require__(12851);
Object.defineProperty(exports, "ERC1155", ({ enumerable: true, get: function () { return ERC1155_1.ERC1155; } }));
var StaticCheckTxOrigin_1 = __webpack_require__(37332);
Object.defineProperty(exports, "StaticCheckTxOrigin", ({ enumerable: true, get: function () { return StaticCheckTxOrigin_1.StaticCheckTxOrigin; } }));
var StaticCheckCheezeWizards_1 = __webpack_require__(64794);
Object.defineProperty(exports, "StaticCheckCheezeWizards", ({ enumerable: true, get: function () { return StaticCheckCheezeWizards_1.StaticCheckCheezeWizards; } }));
var StaticCheckDecentralandEstates_1 = __webpack_require__(13005);
Object.defineProperty(exports, "StaticCheckDecentralandEstates", ({ enumerable: true, get: function () { return StaticCheckDecentralandEstates_1.StaticCheckDecentralandEstates; } }));
var CheezeWizardsBasicTournament_1 = __webpack_require__(18947);
Object.defineProperty(exports, "CheezeWizardsBasicTournament", ({ enumerable: true, get: function () { return CheezeWizardsBasicTournament_1.CheezeWizardsBasicTournament; } }));
var DecentralandEstates_1 = __webpack_require__(92697);
Object.defineProperty(exports, "DecentralandEstates", ({ enumerable: true, get: function () { return DecentralandEstates_1.DecentralandEstates; } }));
var CanonicalWETH_1 = __webpack_require__(49743);
Object.defineProperty(exports, "CanonicalWETH", ({ enumerable: true, get: function () { return CanonicalWETH_1.CanonicalWETH; } }));
var WrappedNFT_1 = __webpack_require__(24522);
Object.defineProperty(exports, "WrappedNFT", ({ enumerable: true, get: function () { return WrappedNFT_1.WrappedNFT; } }));
var WrappedNFTFactory_1 = __webpack_require__(38576);
Object.defineProperty(exports, "WrappedNFTFactory", ({ enumerable: true, get: function () { return WrappedNFTFactory_1.WrappedNFTFactory; } }));
var WrappedNFTLiquidationProxy_1 = __webpack_require__(58318);
Object.defineProperty(exports, "WrappedNFTLiquidationProxy", ({ enumerable: true, get: function () { return WrappedNFTLiquidationProxy_1.WrappedNFTLiquidationProxy; } }));
var UniswapFactory_1 = __webpack_require__(76213);
Object.defineProperty(exports, "UniswapFactory", ({ enumerable: true, get: function () { return UniswapFactory_1.UniswapFactory; } }));
var UniswapExchange_1 = __webpack_require__(72013);
Object.defineProperty(exports, "UniswapExchange", ({ enumerable: true, get: function () { return UniswapExchange_1.UniswapExchange; } }));
//# sourceMappingURL=contracts.js.map

/***/ }),

/***/ 99129:
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requireOrderCalldataCanMatch = exports.requireOrdersCanMatch = exports.MAX_ERROR_LENGTH = void 0;
var constants_1 = __webpack_require__(56947);
exports.MAX_ERROR_LENGTH = 120;
/**
 * This file reproduces Solidity methods to make debugging easier
 */
var Side;
(function (Side) {
    Side[Side["Buy"] = 0] = "Buy";
    Side[Side["Sell"] = 1] = "Sell";
})(Side || (Side = {}));
var SaleKind;
(function (SaleKind) {
    SaleKind[SaleKind["FixedPrice"] = 0] = "FixedPrice";
    SaleKind[SaleKind["DutchAuction"] = 1] = "DutchAuction";
})(SaleKind || (SaleKind = {}));
var SaleKindInterface = {
    Side: Side,
    SaleKind: SaleKind,
    validateParameters: function (saleKind, expirationTime) {
        return (saleKind === SaleKind.FixedPrice || expirationTime > 0);
    },
    canSettleOrder: function (listingTime, expirationTime) {
        var now = Math.round(Date.now() / 1000);
        return (listingTime < now) && (expirationTime === 0 || now < expirationTime);
    }
};
/**
 * Debug the `ordersCanMatch` part of Wyvern
 * @param buy Buy order for debugging
 * @param sell Sell order for debugging
 */
function requireOrdersCanMatch(client, _a) {
    var buy = _a.buy, sell = _a.sell, accountAddress = _a.accountAddress;
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.wyvernExchange.ordersCanMatch_.callAsync([buy.exchange, buy.maker, buy.taker, buy.feeRecipient, buy.target, buy.staticTarget, buy.paymentToken, sell.exchange, sell.maker, sell.taker, sell.feeRecipient, sell.target, sell.staticTarget, sell.paymentToken], [buy.makerRelayerFee, buy.takerRelayerFee, buy.makerProtocolFee, buy.takerProtocolFee, buy.basePrice, buy.extra, buy.listingTime, buy.expirationTime, buy.salt, sell.makerRelayerFee, sell.takerRelayerFee, sell.makerProtocolFee, sell.takerProtocolFee, sell.basePrice, sell.extra, sell.listingTime, sell.expirationTime, sell.salt], [buy.feeMethod, buy.side, buy.saleKind, buy.howToCall, sell.feeMethod, sell.side, sell.saleKind, sell.howToCall], buy.calldata, sell.calldata, buy.replacementPattern, sell.replacementPattern, buy.staticExtradata, sell.staticExtradata, { from: accountAddress })];
                case 1:
                    result = _b.sent();
                    if (result) {
                        return [2 /*return*/];
                    }
                    if (!(+buy.side == +SaleKindInterface.Side.Buy && +sell.side == +SaleKindInterface.Side.Sell)) {
                        throw new Error('Must be opposite-side');
                    }
                    if (!(buy.feeMethod == sell.feeMethod)) {
                        throw new Error('Must use same fee method');
                    }
                    if (!(buy.paymentToken == sell.paymentToken)) {
                        throw new Error('Must use same payment token');
                    }
                    if (!(sell.taker == constants_1.NULL_ADDRESS || sell.taker == buy.maker)) {
                        throw new Error('Sell taker must be null or matching buy maker');
                    }
                    if (!(buy.taker == constants_1.NULL_ADDRESS || buy.taker == sell.maker)) {
                        throw new Error('Buy taker must be null or matching sell maker');
                    }
                    if (!((sell.feeRecipient == constants_1.NULL_ADDRESS && buy.feeRecipient != constants_1.NULL_ADDRESS) || (sell.feeRecipient != constants_1.NULL_ADDRESS && buy.feeRecipient == constants_1.NULL_ADDRESS))) {
                        throw new Error('One order must be maker and the other must be taker');
                    }
                    if (!(buy.target == sell.target)) {
                        throw new Error('Must match target');
                    }
                    if (!(buy.howToCall == sell.howToCall)) {
                        throw new Error('Must match howToCall');
                    }
                    if (!SaleKindInterface.canSettleOrder(+buy.listingTime, +buy.expirationTime)) {
                        throw new Error("Buy-side order is set in the future or expired");
                    }
                    if (!SaleKindInterface.canSettleOrder(+sell.listingTime, +sell.expirationTime)) {
                        throw new Error("Sell-side order is set in the future or expired");
                    }
                    // Handle default, which is likely now() being diff than local time
                    throw new Error('Error creating your order. Check that your system clock is set to the current date and time before you try again.');
            }
        });
    });
}
exports.requireOrdersCanMatch = requireOrdersCanMatch;
/**
 * Debug the `orderCalldataCanMatch` part of Wyvern
 * @param buy Buy order for debugging
 * @param sell Sell Order for debugging
 */
function requireOrderCalldataCanMatch(client, _a) {
    var buy = _a.buy, sell = _a.sell;
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, client.wyvernExchange.orderCalldataCanMatch.callAsync(buy.calldata, buy.replacementPattern, sell.calldata, sell.replacementPattern)];
                case 1:
                    result = _b.sent();
                    if (result) {
                        return [2 /*return*/];
                    }
                    throw new Error('Unable to match offer data with auction data.');
            }
        });
    });
}
exports.requireOrderCalldataCanMatch = requireOrderCalldataCanMatch;
//# sourceMappingURL=debugging.js.map

/***/ }),

/***/ 37050:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.Zc = __webpack_unused_export__ = __webpack_unused_export__ = exports.I2 = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var seaport_1 = __webpack_require__(54502);
Object.defineProperty(exports, "I2", ({ enumerable: true, get: function () { return seaport_1.OpenSeaPort; } }));
var api_1 = __webpack_require__(73647);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return api_1.OpenSeaAPI; } });
var types_1 = __webpack_require__(95356);
Object.defineProperty(exports, "Zc", ({ enumerable: true, get: function () { return types_1.Network; } }));
__webpack_unused_export__ = ({ enumerable: true, get: function () { return types_1.EventType; } });
var utils_1 = __webpack_require__(66545);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return utils_1.orderToJSON; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return utils_1.orderFromJSON; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return utils_1.WyvernProtocol; } });
var schema_1 = __webpack_require__(21097);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return schema_1.encodeCall; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return schema_1.encodeSell; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return schema_1.encodeAtomicizedBuy; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return schema_1.encodeAtomicizedSell; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return schema_1.encodeDefaultCall; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return schema_1.encodeReplacementPattern; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return schema_1.AbiType; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54502:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenSeaPort = void 0;
var bignumber_js_1 = __webpack_require__(73350);
var ethereumjs_util_1 = __webpack_require__(95906);
var fbemitter_1 = __webpack_require__(68192);
var _ = __webpack_require__(39378);
var Web3 = __webpack_require__(69906);
var wyvern_js_1 = __webpack_require__(20544);
var WyvernSchemas = __webpack_require__(97042);
var api_1 = __webpack_require__(73647);
var constants_1 = __webpack_require__(56947);
var contracts_1 = __webpack_require__(98572);
var debugging_1 = __webpack_require__(99129);
var types_1 = __webpack_require__(95356);
var schema_1 = __webpack_require__(21097);
var utils_1 = __webpack_require__(66545);
var OpenSeaPort = /** @class */ (function () {
    /**
     * Your very own seaport.
     * Create a new instance of OpenSeaJS.
     * @param provider Web3 Provider to use for transactions. For example:
     *  `const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')`
     * @param apiConfig configuration options, including `networkName`
     * @param logger logger, optional, a function that will be called with debugging
     *  information
     */
    function OpenSeaPort(provider, apiConfig, logger) {
        if (apiConfig === void 0) { apiConfig = {}; }
        var _a;
        // Extra gwei to add to the mean gas price when making transactions
        this.gasPriceAddition = new bignumber_js_1.BigNumber(3);
        // Multiply gas estimate by this factor when making transactions
        this.gasIncreaseFactor = constants_1.DEFAULT_GAS_INCREASE_FACTOR;
        // API config
        apiConfig.networkName = apiConfig.networkName || types_1.Network.Main;
        apiConfig.gasPrice = apiConfig.gasPrice;
        this.api = new api_1.OpenSeaAPI(apiConfig);
        this._networkName = apiConfig.networkName;
        var readonlyProvider = new Web3.providers.HttpProvider(this.api.apiBaseUrl + "/" + constants_1.RPC_URL_PATH);
        var useReadOnlyProvider = (_a = apiConfig.useReadOnlyProvider) !== null && _a !== void 0 ? _a : true;
        // Web3 Config
        this.web3 = new Web3(provider);
        this.web3ReadOnly = useReadOnlyProvider ? new Web3(readonlyProvider) : this.web3;
        // WyvernJS config
        this._wyvernProtocol = new wyvern_js_1.WyvernProtocol(provider, {
            network: this._networkName,
        });
        // WyvernJS config for readonly (optimization for infura calls)
        this._wyvernProtocolReadOnly = useReadOnlyProvider ? new wyvern_js_1.WyvernProtocol(readonlyProvider, {
            network: this._networkName,
        }) : this._wyvernProtocol;
        // WrappedNFTLiquidationProxy Config
        this._wrappedNFTFactoryAddress = this._networkName == types_1.Network.Main ? constants_1.WRAPPED_NFT_FACTORY_ADDRESS_MAINNET : constants_1.WRAPPED_NFT_FACTORY_ADDRESS_RINKEBY;
        this._wrappedNFTLiquidationProxyAddress = this._networkName == types_1.Network.Main ? constants_1.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_MAINNET : constants_1.WRAPPED_NFT_LIQUIDATION_PROXY_ADDRESS_RINKEBY;
        this._uniswapFactoryAddress = this._networkName == types_1.Network.Main ? constants_1.UNISWAP_FACTORY_ADDRESS_MAINNET : constants_1.UNISWAP_FACTORY_ADDRESS_RINKEBY;
        // Emit events
        this._emitter = new fbemitter_1.EventEmitter();
        // Debugging: default to nothing
        this.logger = logger || (function (arg) { return arg; });
    }
    /**
     * Add a listener to a marketplace event
     * @param event An event to listen for
     * @param listener A callback that will accept an object with event data
     * @param once Whether the listener should only be called once
     */
    OpenSeaPort.prototype.addListener = function (event, listener, once) {
        if (once === void 0) { once = false; }
        var subscription = once
            ? this._emitter.once(event, listener)
            : this._emitter.addListener(event, listener);
        return subscription;
    };
    /**
     * Remove an event listener, included here for completeness.
     * Simply calls `.remove()` on a subscription
     * @param subscription The event subscription returned from `addListener`
     */
    OpenSeaPort.prototype.removeListener = function (subscription) {
        subscription.remove();
    };
    /**
     * Remove all event listeners. Good idea to call this when you're unmounting
     * a component that listens to events to make UI updates
     * @param event Optional EventType to remove listeners for
     */
    OpenSeaPort.prototype.removeAllListeners = function (event) {
        this._emitter.removeAllListeners(event);
    };
    /**
     * Wraps an arbitrary group of NFTs into their corresponding WrappedNFT ERC20 tokens.
     * Emits the `WrapAssets` event when the transaction is prompted.
     * @param param0 __namedParameters Object
     * @param assets An array of objects with the tokenId and tokenAddress of each of the assets to bundle together.
     * @param accountAddress Address of the user's wallet
     */
    OpenSeaPort.prototype.wrapAssets = function (_a) {
        var assets = _a.assets, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var schema, wyAssets, tokenIds, tokenAddresses, isMixedBatchOfAssets, txHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        schema = this._getSchema(types_1.WyvernSchemaName.ERC721);
                        wyAssets = assets.map(function (a) { return utils_1.getWyvernAsset(schema, a); });
                        tokenIds = wyAssets.map(function (a) { return a.id; });
                        tokenAddresses = wyAssets.map(function (a) { return a.address; });
                        isMixedBatchOfAssets = !tokenAddresses.every(function (val, i, arr) { return val === arr[0]; });
                        this._dispatch(types_1.EventType.WrapAssets, { assets: wyAssets, accountAddress: accountAddress });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: this._wrappedNFTLiquidationProxyAddress,
                                value: 0,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.WrappedNFTLiquidationProxy, 'wrapNFTs'), [tokenIds, tokenAddresses, isMixedBatchOfAssets])
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 1:
                        txHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.WrapAssets, "Wrapping Assets")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Unwraps an arbitrary group of NFTs from their corresponding WrappedNFT ERC20 tokens back into ERC721 tokens.
     * Emits the `UnwrapAssets` event when the transaction is prompted.
     * @param param0 __namedParameters Object
     * @param assets An array of objects with the tokenId and tokenAddress of each of the assets to bundle together.
     * @param destinationAddresses Addresses that each resulting ERC721 token will be sent to. Must be the same length as `tokenIds`. Each address corresponds with its respective token ID in the `tokenIds` array.
     * @param accountAddress Address of the user's wallet
     */
    OpenSeaPort.prototype.unwrapAssets = function (_a) {
        var assets = _a.assets, destinationAddresses = _a.destinationAddresses, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var schema, wyAssets, tokenIds, tokenAddresses, isMixedBatchOfAssets, txHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!assets || !destinationAddresses || assets.length != destinationAddresses.length) {
                            throw new Error("The 'assets' and 'destinationAddresses' arrays must exist and have the same length.");
                        }
                        schema = this._getSchema(types_1.WyvernSchemaName.ERC721);
                        wyAssets = assets.map(function (a) { return utils_1.getWyvernAsset(schema, a); });
                        tokenIds = wyAssets.map(function (a) { return a.id; });
                        tokenAddresses = wyAssets.map(function (a) { return a.address; });
                        isMixedBatchOfAssets = !tokenAddresses.every(function (val, i, arr) { return val === arr[0]; });
                        this._dispatch(types_1.EventType.UnwrapAssets, { assets: wyAssets, accountAddress: accountAddress });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: this._wrappedNFTLiquidationProxyAddress,
                                value: 0,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.WrappedNFTLiquidationProxy, 'unwrapNFTs'), [tokenIds, tokenAddresses, destinationAddresses, isMixedBatchOfAssets]),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 1:
                        txHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.UnwrapAssets, "Unwrapping Assets")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Liquidates an arbitrary group of NFTs by atomically wrapping them into their
     * corresponding WrappedNFT ERC20 tokens, and then immediately selling those
     * ERC20 tokens on their corresponding Uniswap exchange.
     * Emits the `LiquidateAssets` event when the transaction is prompted.
     * @param param0 __namedParameters Object
     * @param assets An array of objects with the tokenId and tokenAddress of each of the assets to bundle together.
     * @param accountAddress Address of the user's wallet
     * @param uniswapSlippageAllowedInBasisPoints The amount of slippage that a user will tolerate in their Uniswap trade; if Uniswap cannot fulfill the order without more slippage, the whole function will revert.
     */
    OpenSeaPort.prototype.liquidateAssets = function (_a) {
        var assets = _a.assets, accountAddress = _a.accountAddress, uniswapSlippageAllowedInBasisPoints = _a.uniswapSlippageAllowedInBasisPoints;
        return __awaiter(this, void 0, void 0, function () {
            var uniswapSlippage, schema, wyAssets, tokenIds, tokenAddresses, isMixedBatchOfAssets, txHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        uniswapSlippage = uniswapSlippageAllowedInBasisPoints === 0 ? constants_1.DEFAULT_WRAPPED_NFT_LIQUIDATION_UNISWAP_SLIPPAGE_IN_BASIS_POINTS : uniswapSlippageAllowedInBasisPoints;
                        schema = this._getSchema(types_1.WyvernSchemaName.ERC721);
                        wyAssets = assets.map(function (a) { return utils_1.getWyvernAsset(schema, a); });
                        tokenIds = wyAssets.map(function (a) { return a.id; });
                        tokenAddresses = wyAssets.map(function (a) { return a.address; });
                        isMixedBatchOfAssets = !tokenAddresses.every(function (val, i, arr) { return val === arr[0]; });
                        this._dispatch(types_1.EventType.LiquidateAssets, { assets: wyAssets, accountAddress: accountAddress });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: this._wrappedNFTLiquidationProxyAddress,
                                value: 0,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.WrappedNFTLiquidationProxy, 'liquidateNFTs'), [tokenIds, tokenAddresses, isMixedBatchOfAssets, uniswapSlippage]),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 1:
                        txHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.LiquidateAssets, "Liquidating Assets")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Purchases a bundle of WrappedNFT tokens from Uniswap and then unwraps them into ERC721 tokens.
     * Emits the `PurchaseAssets` event when the transaction is prompted.
     * @param param0 __namedParameters Object
     * @param numTokensToBuy The number of WrappedNFT tokens to purchase and unwrap
     * @param amount The estimated cost in wei for tokens (probably some ratio above the minimum amount to avoid the transaction failing due to frontrunning, minimum amount is found by calling UniswapExchange(uniswapAddress).getEthToTokenOutputPrice(numTokensToBuy.mul(10**18));
     * @param contractAddress Address of the corresponding NFT core contract for these NFTs.
     * @param accountAddress Address of the user's wallet
     */
    OpenSeaPort.prototype.purchaseAssets = function (_a) {
        var numTokensToBuy = _a.numTokensToBuy, amount = _a.amount, contractAddress = _a.contractAddress, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var token, txHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        token = WyvernSchemas.tokens[this._networkName].canonicalWrappedEther;
                        this._dispatch(types_1.EventType.PurchaseAssets, { amount: amount, contractAddress: contractAddress, accountAddress: accountAddress });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: this._wrappedNFTLiquidationProxyAddress,
                                value: amount,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.WrappedNFTLiquidationProxy, 'purchaseNFTs'), [numTokensToBuy, contractAddress]),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 1:
                        txHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.PurchaseAssets, "Purchasing Assets")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the estimated cost or payout of either buying or selling NFTs to Uniswap using either purchaseAssts() or liquidateAssets()
     * @param param0 __namedParameters Object
     * @param numTokens The number of WrappedNFT tokens to either purchase or sell
     * @param isBuying A bool for whether the user is buying or selling
     * @param contractAddress Address of the corresponding NFT core contract for these NFTs.
     */
    OpenSeaPort.prototype.getQuoteFromUniswap = function (_a) {
        var numTokens = _a.numTokens, isBuying = _a.isBuying, contractAddress = _a.contractAddress;
        return __awaiter(this, void 0, void 0, function () {
            var wrappedNFTFactoryContract, wrappedNFTFactory, wrappedNFTAddress, wrappedNFTContract, wrappedNFT, uniswapFactoryContract, uniswapFactory, uniswapExchangeAddress, uniswapExchangeContract, uniswapExchange, amount, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        wrappedNFTFactoryContract = this.web3.eth.contract(contracts_1.WrappedNFTFactory);
                        return [4 /*yield*/, wrappedNFTFactoryContract.at(this._wrappedNFTFactoryAddress)];
                    case 1:
                        wrappedNFTFactory = _d.sent();
                        return [4 /*yield*/, wrappedNFTFactory.nftContractToWrapperContract(contractAddress)];
                    case 2:
                        wrappedNFTAddress = _d.sent();
                        wrappedNFTContract = this.web3.eth.contract(contracts_1.WrappedNFT);
                        return [4 /*yield*/, wrappedNFTContract.at(wrappedNFTAddress)];
                    case 3:
                        wrappedNFT = _d.sent();
                        uniswapFactoryContract = this.web3.eth.contract(contracts_1.UniswapFactory);
                        return [4 /*yield*/, uniswapFactoryContract.at(this._uniswapFactoryAddress)];
                    case 4:
                        uniswapFactory = _d.sent();
                        return [4 /*yield*/, uniswapFactory.getExchange(wrappedNFTAddress)];
                    case 5:
                        uniswapExchangeAddress = _d.sent();
                        uniswapExchangeContract = this.web3.eth.contract(contracts_1.UniswapExchange);
                        return [4 /*yield*/, uniswapExchangeContract.at(uniswapExchangeAddress)
                            // Convert desired WNFT to wei
                        ];
                    case 6:
                        uniswapExchange = _d.sent();
                        amount = wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(numTokens), wrappedNFT.decimals());
                        if (!isBuying) return [3 /*break*/, 8];
                        _b = parseInt;
                        return [4 /*yield*/, uniswapExchange.getEthToTokenOutputPrice(amount)];
                    case 7: return [2 /*return*/, _b.apply(void 0, [_d.sent()])];
                    case 8:
                        _c = parseInt;
                        return [4 /*yield*/, uniswapExchange.getTokenToEthInputPrice(amount)];
                    case 9: return [2 /*return*/, _c.apply(void 0, [_d.sent()])];
                }
            });
        });
    };
    /**
     * Wrap ETH into W-ETH.
     * W-ETH is needed for placing buy orders (making offers).
     * Emits the `WrapEth` event when the transaction is prompted.
     * @param param0 __namedParameters Object
     * @param amountInEth How much ether to wrap
     * @param accountAddress Address of the user's wallet containing the ether
     */
    OpenSeaPort.prototype.wrapEth = function (_a) {
        var amountInEth = _a.amountInEth, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var token, amount, txHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        token = WyvernSchemas.tokens[this._networkName].canonicalWrappedEther;
                        amount = wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(amountInEth), token.decimals);
                        this._dispatch(types_1.EventType.WrapEth, { accountAddress: accountAddress, amount: amount });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: token.address,
                                value: amount,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.CanonicalWETH, 'deposit'), []),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 1:
                        txHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.WrapEth, "Wrapping ETH")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Unwrap W-ETH into ETH.
     * Emits the `UnwrapWeth` event when the transaction is prompted.
     * @param param0 __namedParameters Object
     * @param amountInEth How much W-ETH to unwrap
     * @param accountAddress Address of the user's wallet containing the W-ETH
     */
    OpenSeaPort.prototype.unwrapWeth = function (_a) {
        var amountInEth = _a.amountInEth, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var token, amount, txHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        token = WyvernSchemas.tokens[this._networkName].canonicalWrappedEther;
                        amount = wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(amountInEth), token.decimals);
                        this._dispatch(types_1.EventType.UnwrapWeth, { accountAddress: accountAddress, amount: amount });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: token.address,
                                value: 0,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.CanonicalWETH, 'withdraw'), [amount.toString()]),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 1:
                        txHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.UnwrapWeth, "Unwrapping W-ETH")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create a buy order to make an offer on a bundle or group of assets.
     * Will throw an 'Insufficient balance' error if the maker doesn't have enough W-ETH to make the offer.
     * If the user hasn't approved W-ETH access yet, this will emit `ApproveCurrency` before asking for approval.
     * @param param0 __namedParameters Object
     * @param assets Array of Asset objects to bid on
     * @param collection Optional collection for computing fees, required only if all assets belong to the same collection
     * @param quantities The quantity of each asset to sell. Defaults to 1 for each.
     * @param accountAddress Address of the maker's wallet
     * @param startAmount Value of the offer, in units of the payment token (or wrapped ETH if no payment token address specified)
     * @param expirationTime Expiration time for the order, in seconds. An expiration time of 0 means "never expire"
     * @param paymentTokenAddress Optional address for using an ERC-20 token in the order. If unspecified, defaults to W-ETH
     * @param sellOrder Optional sell order (like an English auction) to ensure fee and schema compatibility
     * @param referrerAddress The optional address that referred the order
     */
    OpenSeaPort.prototype.createBundleBuyOrder = function (_a) {
        var assets = _a.assets, collection = _a.collection, quantities = _a.quantities, accountAddress = _a.accountAddress, startAmount = _a.startAmount, _b = _a.expirationTime, expirationTime = _b === void 0 ? 0 : _b, paymentTokenAddress = _a.paymentTokenAddress, sellOrder = _a.sellOrder, referrerAddress = _a.referrerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var order, hashedOrder, signature, error_1, orderWithSignature;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // Default to 1 of each asset
                        quantities = quantities || assets.map(function (a) { return 1; });
                        paymentTokenAddress = paymentTokenAddress || WyvernSchemas.tokens[this._networkName].canonicalWrappedEther.address;
                        return [4 /*yield*/, this._makeBundleBuyOrder({
                                assets: assets,
                                collection: collection,
                                quantities: quantities,
                                accountAddress: accountAddress,
                                startAmount: startAmount,
                                expirationTime: expirationTime,
                                paymentTokenAddress: paymentTokenAddress,
                                extraBountyBasisPoints: 0,
                                sellOrder: sellOrder,
                                referrerAddress: referrerAddress
                            })
                            // NOTE not in Wyvern exchange code:
                            // frontend checks to make sure
                            // token is approved and sufficiently available
                        ];
                    case 1:
                        order = _c.sent();
                        // NOTE not in Wyvern exchange code:
                        // frontend checks to make sure
                        // token is approved and sufficiently available
                        return [4 /*yield*/, this._buyOrderValidationAndApprovals({ order: order, accountAddress: accountAddress })];
                    case 2:
                        // NOTE not in Wyvern exchange code:
                        // frontend checks to make sure
                        // token is approved and sufficiently available
                        _c.sent();
                        hashedOrder = __assign(__assign({}, order), { hash: utils_1.getOrderHash(order) });
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this._authorizeOrder(hashedOrder)];
                    case 4:
                        signature = _c.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _c.sent();
                        console.error(error_1);
                        throw new Error("You declined to authorize your offer");
                    case 6:
                        orderWithSignature = __assign(__assign({}, hashedOrder), signature);
                        return [2 /*return*/, this.validateAndPostOrder(orderWithSignature)];
                }
            });
        });
    };
    /**
     * Create a buy order to make an offer on an asset.
     * Will throw an 'Insufficient balance' error if the maker doesn't have enough W-ETH to make the offer.
     * If the user hasn't approved W-ETH access yet, this will emit `ApproveCurrency` before asking for approval.
     * @param param0 __namedParameters Object
     * @param asset The asset to trade
     * @param accountAddress Address of the maker's wallet
     * @param startAmount Value of the offer, in units of the payment token (or wrapped ETH if no payment token address specified)
     * @param quantity The number of assets to bid for (if fungible or semi-fungible). Defaults to 1. In units, not base units, e.g. not wei.
     * @param expirationTime Expiration time for the order, in seconds. An expiration time of 0 means "never expire"
     * @param paymentTokenAddress Optional address for using an ERC-20 token in the order. If unspecified, defaults to W-ETH
     * @param sellOrder Optional sell order (like an English auction) to ensure fee and schema compatibility
     * @param referrerAddress The optional address that referred the order
     */
    OpenSeaPort.prototype.createBuyOrder = function (_a) {
        var asset = _a.asset, accountAddress = _a.accountAddress, startAmount = _a.startAmount, _b = _a.quantity, quantity = _b === void 0 ? 1 : _b, _c = _a.expirationTime, expirationTime = _c === void 0 ? 0 : _c, paymentTokenAddress = _a.paymentTokenAddress, sellOrder = _a.sellOrder, referrerAddress = _a.referrerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var order, hashedOrder, signature, error_2, orderWithSignature;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        paymentTokenAddress = paymentTokenAddress || WyvernSchemas.tokens[this._networkName].canonicalWrappedEther.address;
                        return [4 /*yield*/, this._makeBuyOrder({
                                asset: asset,
                                quantity: quantity,
                                accountAddress: accountAddress,
                                startAmount: startAmount,
                                expirationTime: expirationTime,
                                paymentTokenAddress: paymentTokenAddress,
                                extraBountyBasisPoints: 0,
                                sellOrder: sellOrder,
                                referrerAddress: referrerAddress
                            })
                            // NOTE not in Wyvern exchange code:
                            // frontend checks to make sure
                            // token is approved and sufficiently available
                        ];
                    case 1:
                        order = _d.sent();
                        // NOTE not in Wyvern exchange code:
                        // frontend checks to make sure
                        // token is approved and sufficiently available
                        return [4 /*yield*/, this._buyOrderValidationAndApprovals({ order: order, accountAddress: accountAddress })];
                    case 2:
                        // NOTE not in Wyvern exchange code:
                        // frontend checks to make sure
                        // token is approved and sufficiently available
                        _d.sent();
                        hashedOrder = __assign(__assign({}, order), { hash: utils_1.getOrderHash(order) });
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this._authorizeOrder(hashedOrder)];
                    case 4:
                        signature = _d.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _d.sent();
                        console.error(error_2);
                        throw new Error("You declined to authorize your offer");
                    case 6:
                        orderWithSignature = __assign(__assign({}, hashedOrder), signature);
                        return [2 /*return*/, this.validateAndPostOrder(orderWithSignature)];
                }
            });
        });
    };
    /**
     * Create a sell order to auction an asset.
     * Will throw a 'You do not own enough of this asset' error if the maker doesn't have the asset or not enough of it to sell the specific `quantity`.
     * If the user hasn't approved access to the token yet, this will emit `ApproveAllAssets` (or `ApproveAsset` if the contract doesn't support approve-all) before asking for approval.
     * @param param0 __namedParameters Object
     * @param tokenId DEPRECATED: Token ID. Use `asset` instead.
     * @param tokenAddress DEPRECATED: Address of the token's contract. Use `asset` instead.
     * @param asset The asset to trade
     * @param accountAddress Address of the maker's wallet
     * @param startAmount Price of the asset at the start of the auction. Units are in the amount of a token above the token's decimal places (integer part). For example, for ether, expected units are in ETH, not wei.
     * @param endAmount Optional price of the asset at the end of its expiration time. Units are in the amount of a token above the token's decimal places (integer part). For example, for ether, expected units are in ETH, not wei.
     * @param quantity The number of assets to sell (if fungible or semi-fungible). Defaults to 1. In units, not base units, e.g. not wei.
     * @param listingTime Optional time when the order will become fulfillable, in UTC seconds. Undefined means it will start now.
     * @param expirationTime Expiration time for the order, in UTC seconds. An expiration time of 0 means "never expire."
     * @param waitForHighestBid If set to true, this becomes an English auction that increases in price for every bid. The highest bid wins when the auction expires, as long as it's at least `startAmount`. `expirationTime` must be > 0.
     * @param englishAuctionReservePrice Optional price level, below which orders may be placed but will not be matched.  Orders below the reserve can be manually accepted but will not be automatically matched.
     * @param paymentTokenAddress Address of the ERC-20 token to accept in return. If undefined or null, uses Ether.
     * @param extraBountyBasisPoints Optional basis points (1/100th of a percent) to reward someone for referring the fulfillment of this order
     * @param buyerAddress Optional address that's allowed to purchase this item. If specified, no other address will be able to take the order, unless its value is the null address.
     * @param buyerEmail Optional email of the user that's allowed to purchase this item. If specified, a user will have to verify this email before being able to take the order.
     */
    OpenSeaPort.prototype.createSellOrder = function (_a) {
        var asset = _a.asset, accountAddress = _a.accountAddress, startAmount = _a.startAmount, endAmount = _a.endAmount, _b = _a.quantity, quantity = _b === void 0 ? 1 : _b, listingTime = _a.listingTime, _c = _a.expirationTime, expirationTime = _c === void 0 ? 0 : _c, _d = _a.waitForHighestBid, waitForHighestBid = _d === void 0 ? false : _d, englishAuctionReservePrice = _a.englishAuctionReservePrice, paymentTokenAddress = _a.paymentTokenAddress, _e = _a.extraBountyBasisPoints, extraBountyBasisPoints = _e === void 0 ? 0 : _e, buyerAddress = _a.buyerAddress, buyerEmail = _a.buyerEmail;
        return __awaiter(this, void 0, void 0, function () {
            var order, hashedOrder, signature, error_3, orderWithSignature;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this._makeSellOrder({
                            asset: asset,
                            quantity: quantity,
                            accountAddress: accountAddress,
                            startAmount: startAmount,
                            endAmount: endAmount,
                            listingTime: listingTime,
                            expirationTime: expirationTime,
                            waitForHighestBid: waitForHighestBid,
                            englishAuctionReservePrice: englishAuctionReservePrice,
                            paymentTokenAddress: paymentTokenAddress || constants_1.NULL_ADDRESS,
                            extraBountyBasisPoints: extraBountyBasisPoints,
                            buyerAddress: buyerAddress || constants_1.NULL_ADDRESS
                        })];
                    case 1:
                        order = _f.sent();
                        return [4 /*yield*/, this._sellOrderValidationAndApprovals({ order: order, accountAddress: accountAddress })];
                    case 2:
                        _f.sent();
                        if (!buyerEmail) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._createEmailWhitelistEntry({ order: order, buyerEmail: buyerEmail })];
                    case 3:
                        _f.sent();
                        _f.label = 4;
                    case 4:
                        hashedOrder = __assign(__assign({}, order), { hash: utils_1.getOrderHash(order) });
                        _f.label = 5;
                    case 5:
                        _f.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this._authorizeOrder(hashedOrder)];
                    case 6:
                        signature = _f.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_3 = _f.sent();
                        console.error(error_3);
                        throw new Error("You declined to authorize your auction");
                    case 8:
                        orderWithSignature = __assign(__assign({}, hashedOrder), signature);
                        return [2 /*return*/, this.validateAndPostOrder(orderWithSignature)];
                }
            });
        });
    };
    /**
     * Create multiple sell orders in bulk to auction assets out of an asset factory.
     * Will throw a 'You do not own this asset' error if the maker doesn't own the factory.
     * Items will mint to users' wallets only when they buy them. See https://docs.opensea.io/docs/opensea-initial-item-sale-tutorial for more info.
     * If the user hasn't approved access to the token yet, this will emit `ApproveAllAssets` (or `ApproveAsset` if the contract doesn't support approve-all) before asking for approval.
     * @param param0 __namedParameters Object
     * @param assets Which assets you want to post orders for. Use the tokenAddress of your factory contract
     * @param accountAddress Address of the factory owner's wallet
     * @param startAmount Price of the asset at the start of the auction, or minimum acceptable bid if it's an English auction. Units are in the amount of a token above the token's decimal places (integer part). For example, for ether, expected units are in ETH, not wei.
     * @param endAmount Optional price of the asset at the end of its expiration time. If not specified, will be set to `startAmount`. Units are in the amount of a token above the token's decimal places (integer part). For example, for ether, expected units are in ETH, not wei.
     * @param quantity The number of assets to sell at one time (if fungible or semi-fungible). Defaults to 1. In units, not base units, e.g. not wei.
     * @param listingTime Optional time when the order will become fulfillable, in UTC seconds. Undefined means it will start now.
     * @param expirationTime Expiration time for the order, in seconds. An expiration time of 0 means "never expire."
     * @param waitForHighestBid If set to true, this becomes an English auction that increases in price for every bid. The highest bid wins when the auction expires, as long as it's at least `startAmount`. `expirationTime` must be > 0.
     * @param paymentTokenAddress Address of the ERC-20 token to accept in return. If undefined or null, uses Ether.
     * @param extraBountyBasisPoints Optional basis points (1/100th of a percent) to reward someone for referring the fulfillment of each order
     * @param buyerAddress Optional address that's allowed to purchase each item. If specified, no other address will be able to take each order.
     * @param buyerEmail Optional email of the user that's allowed to purchase each item. If specified, a user will have to verify this email before being able to take each order.
     * @param numberOfOrders Number of times to repeat creating the same order for each asset. If greater than 5, creates them in batches of 5. Requires an `apiKey` to be set during seaport initialization in order to not be throttled by the API.
     * @returns The number of orders created in total
     */
    OpenSeaPort.prototype.createFactorySellOrders = function (_a) {
        var assets = _a.assets, accountAddress = _a.accountAddress, startAmount = _a.startAmount, endAmount = _a.endAmount, _b = _a.quantity, quantity = _b === void 0 ? 1 : _b, listingTime = _a.listingTime, _c = _a.expirationTime, expirationTime = _c === void 0 ? 0 : _c, _d = _a.waitForHighestBid, waitForHighestBid = _d === void 0 ? false : _d, paymentTokenAddress = _a.paymentTokenAddress, _e = _a.extraBountyBasisPoints, extraBountyBasisPoints = _e === void 0 ? 0 : _e, buyerAddress = _a.buyerAddress, buyerEmail = _a.buyerEmail, _f = _a.numberOfOrders, numberOfOrders = _f === void 0 ? 1 : _f;
        return __awaiter(this, void 0, void 0, function () {
            var dummyOrder, _makeAndPostOneSellOrder, range, batches, numOrdersCreated, _i, batches_1, subRange, batchOrdersCreated;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (numberOfOrders < 1) {
                            throw new Error('Need to make at least one sell order');
                        }
                        if (!assets || !assets.length) {
                            throw new Error('Need at least one asset to create orders for');
                        }
                        if (_.uniqBy(assets, function (a) { return a.tokenAddress; }).length !== 1) {
                            throw new Error('All assets must be on the same factory contract address');
                        }
                        return [4 /*yield*/, this._makeSellOrder({
                                asset: assets[0],
                                quantity: quantity,
                                accountAddress: accountAddress,
                                startAmount: startAmount,
                                endAmount: endAmount,
                                listingTime: listingTime,
                                expirationTime: expirationTime,
                                waitForHighestBid: waitForHighestBid,
                                paymentTokenAddress: paymentTokenAddress || constants_1.NULL_ADDRESS,
                                extraBountyBasisPoints: extraBountyBasisPoints,
                                buyerAddress: buyerAddress || constants_1.NULL_ADDRESS
                            })];
                    case 1:
                        dummyOrder = _g.sent();
                        return [4 /*yield*/, this._sellOrderValidationAndApprovals({ order: dummyOrder, accountAddress: accountAddress })];
                    case 2:
                        _g.sent();
                        _makeAndPostOneSellOrder = function (asset) { return __awaiter(_this, void 0, void 0, function () {
                            var order, hashedOrder, signature, error_4, orderWithSignature;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this._makeSellOrder({
                                            asset: asset,
                                            quantity: quantity,
                                            accountAddress: accountAddress,
                                            startAmount: startAmount,
                                            endAmount: endAmount,
                                            listingTime: listingTime,
                                            expirationTime: expirationTime,
                                            waitForHighestBid: waitForHighestBid,
                                            paymentTokenAddress: paymentTokenAddress || constants_1.NULL_ADDRESS,
                                            extraBountyBasisPoints: extraBountyBasisPoints,
                                            buyerAddress: buyerAddress || constants_1.NULL_ADDRESS
                                        })];
                                    case 1:
                                        order = _a.sent();
                                        if (!buyerEmail) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this._createEmailWhitelistEntry({ order: order, buyerEmail: buyerEmail })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        hashedOrder = __assign(__assign({}, order), { hash: utils_1.getOrderHash(order) });
                                        _a.label = 4;
                                    case 4:
                                        _a.trys.push([4, 6, , 7]);
                                        return [4 /*yield*/, this._authorizeOrder(hashedOrder)];
                                    case 5:
                                        signature = _a.sent();
                                        return [3 /*break*/, 7];
                                    case 6:
                                        error_4 = _a.sent();
                                        console.error(error_4);
                                        throw new Error("You declined to authorize your auction, or your web3 provider can't sign using personal_sign. Try 'web3-provider-engine' and make sure a mnemonic is set. Just a reminder: there's no gas needed anymore to mint tokens!");
                                    case 7:
                                        orderWithSignature = __assign(__assign({}, hashedOrder), signature);
                                        return [2 /*return*/, this.validateAndPostOrder(orderWithSignature)];
                                }
                            });
                        }); };
                        range = _.range(numberOfOrders * assets.length);
                        batches = _.chunk(range, constants_1.SELL_ORDER_BATCH_SIZE);
                        numOrdersCreated = 0;
                        _i = 0, batches_1 = batches;
                        _g.label = 3;
                    case 3:
                        if (!(_i < batches_1.length)) return [3 /*break*/, 7];
                        subRange = batches_1[_i];
                        return [4 /*yield*/, Promise.all(subRange.map(function (assetOrderIndex) { return __awaiter(_this, void 0, void 0, function () {
                                var assetIndex;
                                return __generator(this, function (_a) {
                                    assetIndex = Math.floor(assetOrderIndex / numberOfOrders);
                                    return [2 /*return*/, _makeAndPostOneSellOrder(assets[assetIndex])];
                                });
                            }); }))];
                    case 4:
                        batchOrdersCreated = _g.sent();
                        this.logger("Created and posted a batch of " + batchOrdersCreated.length + " orders in parallel.");
                        numOrdersCreated += batchOrdersCreated.length;
                        // Don't overwhelm router
                        return [4 /*yield*/, utils_1.delay(500)];
                    case 5:
                        // Don't overwhelm router
                        _g.sent();
                        _g.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 3];
                    case 7: return [2 /*return*/, numOrdersCreated];
                }
            });
        });
    };
    /**
     * Create a sell order to auction a bundle of assets.
     * Will throw a 'You do not own this asset' error if the maker doesn't have one of the assets.
     * If the user hasn't approved access to any of the assets yet, this will emit `ApproveAllAssets` (or `ApproveAsset` if the contract doesn't support approve-all) before asking for approval for each asset.
     * @param param0 __namedParameters Object
     * @param bundleName Name of the bundle
     * @param bundleDescription Optional description of the bundle. Markdown is allowed.
     * @param bundleExternalLink Optional link to a page that adds context to the bundle.
     * @param assets An array of objects with the tokenId and tokenAddress of each of the assets to bundle together.
     * @param collection Optional collection for computing fees, required only if all assets belong to the same collection
     * @param quantities The quantity of each asset to sell. Defaults to 1 for each.
     * @param accountAddress The address of the maker of the bundle and the owner of all the assets.
     * @param startAmount Price of the asset at the start of the auction, or minimum acceptable bid if it's an English auction.
     * @param endAmount Optional price of the asset at the end of its expiration time. If not specified, will be set to `startAmount`.
     * @param listingTime Optional time when the order will become fulfillable, in UTC seconds. Undefined means it will start now.
     * @param expirationTime Expiration time for the order, in seconds. An expiration time of 0 means "never expire."
     * @param waitForHighestBid If set to true, this becomes an English auction that increases in price for every bid. The highest bid wins when the auction expires, as long as it's at least `startAmount`. `expirationTime` must be > 0.
     * @param englishAuctionReservePrice Optional price level, below which orders may be placed but will not be matched.  Orders below the reserve can be manually accepted but will not be automatically matched.
     * @param paymentTokenAddress Address of the ERC-20 token to accept in return. If undefined or null, uses Ether.
     * @param extraBountyBasisPoints Optional basis points (1/100th of a percent) to reward someone for referring the fulfillment of this order
     * @param buyerAddress Optional address that's allowed to purchase this bundle. If specified, no other address will be able to take the order, unless it's the null address.
     */
    OpenSeaPort.prototype.createBundleSellOrder = function (_a) {
        var bundleName = _a.bundleName, bundleDescription = _a.bundleDescription, bundleExternalLink = _a.bundleExternalLink, assets = _a.assets, collection = _a.collection, quantities = _a.quantities, accountAddress = _a.accountAddress, startAmount = _a.startAmount, endAmount = _a.endAmount, _b = _a.expirationTime, expirationTime = _b === void 0 ? 0 : _b, listingTime = _a.listingTime, _c = _a.waitForHighestBid, waitForHighestBid = _c === void 0 ? false : _c, englishAuctionReservePrice = _a.englishAuctionReservePrice, paymentTokenAddress = _a.paymentTokenAddress, _d = _a.extraBountyBasisPoints, extraBountyBasisPoints = _d === void 0 ? 0 : _d, buyerAddress = _a.buyerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var order, hashedOrder, signature, error_5, orderWithSignature;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        // Default to one of each asset
                        quantities = quantities || assets.map(function (a) { return 1; });
                        return [4 /*yield*/, this._makeBundleSellOrder({
                                bundleName: bundleName,
                                bundleDescription: bundleDescription,
                                bundleExternalLink: bundleExternalLink,
                                assets: assets,
                                collection: collection,
                                quantities: quantities,
                                accountAddress: accountAddress,
                                startAmount: startAmount,
                                endAmount: endAmount,
                                listingTime: listingTime,
                                expirationTime: expirationTime,
                                waitForHighestBid: waitForHighestBid,
                                englishAuctionReservePrice: englishAuctionReservePrice,
                                paymentTokenAddress: paymentTokenAddress || constants_1.NULL_ADDRESS,
                                extraBountyBasisPoints: extraBountyBasisPoints,
                                buyerAddress: buyerAddress || constants_1.NULL_ADDRESS,
                            })];
                    case 1:
                        order = _e.sent();
                        return [4 /*yield*/, this._sellOrderValidationAndApprovals({ order: order, accountAddress: accountAddress })];
                    case 2:
                        _e.sent();
                        hashedOrder = __assign(__assign({}, order), { hash: utils_1.getOrderHash(order) });
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this._authorizeOrder(hashedOrder)];
                    case 4:
                        signature = _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_5 = _e.sent();
                        console.error(error_5);
                        throw new Error("You declined to authorize your auction");
                    case 6:
                        orderWithSignature = __assign(__assign({}, hashedOrder), signature);
                        return [2 /*return*/, this.validateAndPostOrder(orderWithSignature)];
                }
            });
        });
    };
    /**
     * Fullfill or "take" an order for an asset, either a buy or sell order
     * @param param0 __namedParamaters Object
     * @param order The order to fulfill, a.k.a. "take"
     * @param accountAddress The taker's wallet address
     * @param recipientAddress The optional address to receive the order's item(s) or curriencies. If not specified, defaults to accountAddress.
     * @param referrerAddress The optional address that referred the order
     * @returns Transaction hash for fulfilling the order
     */
    OpenSeaPort.prototype.fulfillOrder = function (_a) {
        var order = _a.order, accountAddress = _a.accountAddress, recipientAddress = _a.recipientAddress, referrerAddress = _a.referrerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var matchingOrder, _b, buy, sell, metadata, transactionHash;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        matchingOrder = this._makeMatchingOrder({
                            order: order,
                            accountAddress: accountAddress,
                            recipientAddress: recipientAddress || accountAddress
                        });
                        _b = utils_1.assignOrdersToSides(order, matchingOrder), buy = _b.buy, sell = _b.sell;
                        metadata = this._getMetadata(order, referrerAddress);
                        return [4 /*yield*/, this._atomicMatch({ buy: buy, sell: sell, accountAddress: accountAddress, metadata: metadata })];
                    case 1:
                        transactionHash = _c.sent();
                        return [4 /*yield*/, this._confirmTransaction(transactionHash, types_1.EventType.MatchOrders, "Fulfilling order", function () { return __awaiter(_this, void 0, void 0, function () {
                                var isOpen;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._validateOrder(order)];
                                        case 1:
                                            isOpen = _a.sent();
                                            return [2 /*return*/, !isOpen];
                                    }
                                });
                            }); })];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, transactionHash];
                }
            });
        });
    };
    /**
     * Cancel an order on-chain, preventing it from ever being fulfilled.
     * @param param0 __namedParameters Object
     * @param order The order to cancel
     * @param accountAddress The order maker's wallet address
     */
    OpenSeaPort.prototype.cancelOrder = function (_a) {
        var order = _a.order, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var transactionHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._dispatch(types_1.EventType.CancelOrder, { order: order, accountAddress: accountAddress });
                        return [4 /*yield*/, this._wyvernProtocol.wyvernExchange.cancelOrder_.sendTransactionAsync([order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken], [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt], order.feeMethod, order.side, order.saleKind, order.howToCall, order.calldata, order.replacementPattern, order.staticExtradata, order.v || 0, order.r || constants_1.NULL_BLOCK_HASH, order.s || constants_1.NULL_BLOCK_HASH, { from: accountAddress })];
                    case 1:
                        transactionHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(transactionHash.toString(), types_1.EventType.CancelOrder, "Cancelling order", function () { return __awaiter(_this, void 0, void 0, function () {
                                var isOpen;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._validateOrder(order)];
                                        case 1:
                                            isOpen = _a.sent();
                                            return [2 /*return*/, !isOpen];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Approve a non-fungible token for use in trades.
     * Requires an account to be initialized first.
     * Called internally, but exposed for dev flexibility.
     * Checks to see if already approved, first. Then tries different approval methods from best to worst.
     * @param param0 __namedParameters Object
     * @param tokenId Token id to approve, but only used if approve-all isn't
     *  supported by the token contract
     * @param tokenAddress The contract address of the token being approved
     * @param accountAddress The user's wallet address
     * @param proxyAddress Address of the user's proxy contract. If not provided,
     *  will attempt to fetch it from Wyvern.
     * @param tokenAbi ABI of the token's contract. Defaults to a flexible ERC-721
     *  contract.
     * @param skipApproveAllIfTokenAddressIn an optional list of token addresses that, if a token is approve-all type, will skip approval
     * @param schemaName The Wyvern schema name corresponding to the asset type
     * @returns Transaction hash if a new transaction was created, otherwise null
     */
    OpenSeaPort.prototype.approveSemiOrNonFungibleToken = function (_a) {
        var tokenId = _a.tokenId, tokenAddress = _a.tokenAddress, accountAddress = _a.accountAddress, proxyAddress = _a.proxyAddress, _b = _a.tokenAbi, tokenAbi = _b === void 0 ? contracts_1.ERC721 : _b, _c = _a.skipApproveAllIfTokenAddressIn, skipApproveAllIfTokenAddressIn = _c === void 0 ? new Set() : _c, _d = _a.schemaName, schemaName = _d === void 0 ? types_1.WyvernSchemaName.ERC721 : _d;
        return __awaiter(this, void 0, void 0, function () {
            var schema, tokenContract, contract, approvalAllCheck, isApprovedForAll, txHash, error_6, approvalOneCheck, isApprovedForOne, txHash, error_7;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        schema = this._getSchema(schemaName);
                        tokenContract = this.web3.eth.contract(tokenAbi);
                        return [4 /*yield*/, tokenContract.at(tokenAddress)];
                    case 1:
                        contract = _e.sent();
                        if (!!proxyAddress) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._getProxy(accountAddress)];
                    case 2:
                        proxyAddress = (_e.sent()) || undefined;
                        if (!proxyAddress) {
                            throw new Error('Uninitialized account');
                        }
                        _e.label = 3;
                    case 3:
                        approvalAllCheck = function () { return __awaiter(_this, void 0, void 0, function () {
                            var isApprovedForAllRaw;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, utils_1.rawCall(this.web3ReadOnly, {
                                            from: accountAddress,
                                            to: contract.address,
                                            data: contract.isApprovedForAll.getData(accountAddress, proxyAddress)
                                        })];
                                    case 1:
                                        isApprovedForAllRaw = _a.sent();
                                        return [2 /*return*/, parseInt(isApprovedForAllRaw)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, approvalAllCheck()];
                    case 4:
                        isApprovedForAll = _e.sent();
                        if (isApprovedForAll == 1) {
                            // Supports ApproveAll
                            this.logger('Already approved proxy for all tokens');
                            return [2 /*return*/, null];
                        }
                        if (!(isApprovedForAll == 0)) return [3 /*break*/, 9];
                        // Supports ApproveAll
                        //  not approved for all yet
                        if (skipApproveAllIfTokenAddressIn.has(tokenAddress)) {
                            this.logger('Already approving proxy for all tokens in another transaction');
                            return [2 /*return*/, null];
                        }
                        skipApproveAllIfTokenAddressIn.add(tokenAddress);
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 8, , 9]);
                        this._dispatch(types_1.EventType.ApproveAllAssets, {
                            accountAddress: accountAddress,
                            proxyAddress: proxyAddress,
                            contractAddress: tokenAddress
                        });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: contract.address,
                                data: contract.setApprovalForAll.getData(proxyAddress, true),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 6:
                        txHash = _e.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.ApproveAllAssets, 'Approving all tokens of this type for trading', function () { return __awaiter(_this, void 0, void 0, function () {
                                var result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, approvalAllCheck()];
                                        case 1:
                                            result = _a.sent();
                                            return [2 /*return*/, result == 1];
                                    }
                                });
                            }); })];
                    case 7:
                        _e.sent();
                        return [2 /*return*/, txHash];
                    case 8:
                        error_6 = _e.sent();
                        console.error(error_6);
                        throw new Error("Couldn't get permission to approve these tokens for trading. Their contract might not be implemented correctly. Please contact the developer!");
                    case 9:
                        // Does not support ApproveAll (ERC721 v1 or v2)
                        this.logger('Contract does not support Approve All');
                        approvalOneCheck = function () { return __awaiter(_this, void 0, void 0, function () {
                            var approvedAddr;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, utils_1.promisifyCall(function (c) { return contract.getApproved.call(tokenId, c); })];
                                    case 1:
                                        approvedAddr = _a.sent();
                                        if (approvedAddr == proxyAddress) {
                                            this.logger('Already approved proxy for this token');
                                            return [2 /*return*/, true];
                                        }
                                        this.logger("Approve response: " + approvedAddr);
                                        if (!!approvedAddr) return [3 /*break*/, 3];
                                        return [4 /*yield*/, utils_1.getNonCompliantApprovalAddress(contract, tokenId, accountAddress)];
                                    case 2:
                                        approvedAddr = _a.sent();
                                        if (approvedAddr == proxyAddress) {
                                            this.logger('Already approved proxy for this item');
                                            return [2 /*return*/, true];
                                        }
                                        this.logger("Special-case approve response: " + approvedAddr);
                                        _a.label = 3;
                                    case 3: return [2 /*return*/, false];
                                }
                            });
                        }); };
                        return [4 /*yield*/, approvalOneCheck()];
                    case 10:
                        isApprovedForOne = _e.sent();
                        if (isApprovedForOne) {
                            return [2 /*return*/, null];
                        }
                        _e.label = 11;
                    case 11:
                        _e.trys.push([11, 14, , 15]);
                        this._dispatch(types_1.EventType.ApproveAsset, {
                            accountAddress: accountAddress,
                            proxyAddress: proxyAddress,
                            asset: utils_1.getWyvernAsset(schema, { tokenId: tokenId, tokenAddress: tokenAddress })
                        });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: contract.address,
                                data: contract.approve.getData(proxyAddress, tokenId),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 12:
                        txHash = _e.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.ApproveAsset, "Approving single token for trading", approvalOneCheck)];
                    case 13:
                        _e.sent();
                        return [2 /*return*/, txHash];
                    case 14:
                        error_7 = _e.sent();
                        console.error(error_7);
                        throw new Error("Couldn't get permission to approve this token for trading. Its contract might not be implemented correctly. Please contact the developer!");
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Approve a fungible token (e.g. W-ETH) for use in trades.
     * Called internally, but exposed for dev flexibility.
     * Checks to see if the minimum amount is already approved, first.
     * @param param0 __namedParameters Object
     * @param accountAddress The user's wallet address
     * @param tokenAddress The contract address of the token being approved
     * @param proxyAddress The user's proxy address. If unspecified, uses the Wyvern token transfer proxy address.
     * @param minimumAmount The minimum amount needed to skip a transaction. Defaults to the max-integer.
     * @returns Transaction hash if a new transaction occurred, otherwise null
     */
    OpenSeaPort.prototype.approveFungibleToken = function (_a) {
        var accountAddress = _a.accountAddress, tokenAddress = _a.tokenAddress, proxyAddress = _a.proxyAddress, _b = _a.minimumAmount, minimumAmount = _b === void 0 ? wyvern_js_1.WyvernProtocol.MAX_UINT_256 : _b;
        return __awaiter(this, void 0, void 0, function () {
            var approvedAmount, hasOldApproveMethod, txHash;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        proxyAddress = proxyAddress || wyvern_js_1.WyvernProtocol.getTokenTransferProxyAddress(this._networkName);
                        return [4 /*yield*/, this._getApprovedTokenCount({
                                accountAddress: accountAddress,
                                tokenAddress: tokenAddress,
                                proxyAddress: proxyAddress
                            })];
                    case 1:
                        approvedAmount = _c.sent();
                        if (approvedAmount.greaterThanOrEqualTo(minimumAmount)) {
                            this.logger('Already approved enough currency for trading');
                            return [2 /*return*/, null];
                        }
                        this.logger("Not enough token approved for trade: " + approvedAmount + " approved to transfer " + tokenAddress);
                        this._dispatch(types_1.EventType.ApproveCurrency, {
                            accountAddress: accountAddress,
                            contractAddress: tokenAddress,
                            proxyAddress: proxyAddress
                        });
                        hasOldApproveMethod = [constants_1.ENJIN_COIN_ADDRESS, constants_1.MANA_ADDRESS].includes(tokenAddress.toLowerCase());
                        if (!(minimumAmount.greaterThan(0) && hasOldApproveMethod)) return [3 /*break*/, 3];
                        // Older erc20s require initial approval to be 0
                        return [4 /*yield*/, this.unapproveFungibleToken({ accountAddress: accountAddress, tokenAddress: tokenAddress, proxyAddress: proxyAddress })];
                    case 2:
                        // Older erc20s require initial approval to be 0
                        _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                            from: accountAddress,
                            to: tokenAddress,
                            data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.ERC20, 'approve'), 
                            // Always approve maximum amount, to prevent the need for followup
                            // transactions (and because old ERC20s like MANA/ENJ are non-compliant)
                            [proxyAddress, wyvern_js_1.WyvernProtocol.MAX_UINT_256.toString()]),
                        }, function (error) {
                            _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                        })];
                    case 4:
                        txHash = _c.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.ApproveCurrency, "Approving currency for trading", function () { return __awaiter(_this, void 0, void 0, function () {
                                var newlyApprovedAmount;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._getApprovedTokenCount({
                                                accountAddress: accountAddress,
                                                tokenAddress: tokenAddress,
                                                proxyAddress: proxyAddress
                                            })];
                                        case 1:
                                            newlyApprovedAmount = _a.sent();
                                            return [2 /*return*/, newlyApprovedAmount.greaterThanOrEqualTo(minimumAmount)];
                                    }
                                });
                            }); })];
                    case 5:
                        _c.sent();
                        return [2 /*return*/, txHash];
                }
            });
        });
    };
    /**
     * Un-approve a fungible token (e.g. W-ETH) for use in trades.
     * Called internally, but exposed for dev flexibility.
     * Useful for old ERC20s that require a 0 approval count before
     * changing the count
     * @param param0 __namedParameters Object
     * @param accountAddress The user's wallet address
     * @param tokenAddress The contract address of the token being approved
     * @param proxyAddress The user's proxy address. If unspecified, uses the Wyvern token transfer proxy address.
     * @returns Transaction hash
     */
    OpenSeaPort.prototype.unapproveFungibleToken = function (_a) {
        var accountAddress = _a.accountAddress, tokenAddress = _a.tokenAddress, proxyAddress = _a.proxyAddress;
        return __awaiter(this, void 0, void 0, function () {
            var txHash;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        proxyAddress = proxyAddress || wyvern_js_1.WyvernProtocol.getTokenTransferProxyAddress(this._networkName);
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: accountAddress,
                                to: tokenAddress,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.ERC20, 'approve'), [proxyAddress, 0]),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: accountAddress });
                            })];
                    case 1:
                        txHash = _b.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.UnapproveCurrency, "Resetting Currency Approval", function () { return __awaiter(_this, void 0, void 0, function () {
                                var newlyApprovedAmount;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._getApprovedTokenCount({
                                                accountAddress: accountAddress,
                                                tokenAddress: tokenAddress,
                                                proxyAddress: proxyAddress
                                            })];
                                        case 1:
                                            newlyApprovedAmount = _a.sent();
                                            return [2 /*return*/, newlyApprovedAmount.isZero()];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, txHash];
                }
            });
        });
    };
    /**
     * Gets the price for the order using the contract
     * @param order The order to calculate the price for
     */
    OpenSeaPort.prototype.getCurrentPrice = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var currentPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernExchange.calculateCurrentPrice_.callAsync([order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken], [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt], order.feeMethod, order.side, order.saleKind, order.howToCall, order.calldata, order.replacementPattern, order.staticExtradata)];
                    case 1:
                        currentPrice = _a.sent();
                        return [2 /*return*/, currentPrice];
                }
            });
        });
    };
    /**
     * Returns whether an order is fulfillable.
     * An order may not be fulfillable if a target item's transfer function
     * is locked for some reason, e.g. an item is being rented within a game
     * or trading has been locked for an item type.
     * @param param0 __namedParameters Object
     * @param order Order to check
     * @param accountAddress The account address that will be fulfilling the order
     * @param recipientAddress The optional address to receive the order's item(s) or curriencies. If not specified, defaults to accountAddress.
     * @param referrerAddress The optional address that referred the order
     */
    OpenSeaPort.prototype.isOrderFulfillable = function (_a) {
        var order = _a.order, accountAddress = _a.accountAddress, recipientAddress = _a.recipientAddress, referrerAddress = _a.referrerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var matchingOrder, _b, buy, sell, metadata, gas;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        matchingOrder = this._makeMatchingOrder({
                            order: order,
                            accountAddress: accountAddress,
                            recipientAddress: recipientAddress || accountAddress
                        });
                        _b = utils_1.assignOrdersToSides(order, matchingOrder), buy = _b.buy, sell = _b.sell;
                        metadata = this._getMetadata(order, referrerAddress);
                        return [4 /*yield*/, this._estimateGasForMatch({ buy: buy, sell: sell, accountAddress: accountAddress, metadata: metadata })];
                    case 1:
                        gas = _c.sent();
                        this.logger("Gas estimate for " + (order.side == types_1.OrderSide.Sell ? "sell" : "buy") + " order: " + gas);
                        return [2 /*return*/, gas != null && gas > 0];
                }
            });
        });
    };
    /**
     * Returns whether an asset is transferrable.
     * An asset may not be transferrable if its transfer function
     * is locked for some reason, e.g. an item is being rented within a game
     * or trading has been locked for an item type.
     * @param param0 __namedParameters Object
     * @param tokenId DEPRECATED: Token ID. Use `asset` instead.
     * @param tokenAddress DEPRECATED: Address of the token's contract. Use `asset` instead.
     * @param asset The asset to trade
     * @param fromAddress The account address that currently owns the asset
     * @param toAddress The account address that will be acquiring the asset
     * @param quantity The amount of the asset to transfer, if it's fungible (optional). In units (not base units), e.g. not wei.
     * @param useProxy Use the `fromAddress`'s proxy contract only if the `fromAddress` has already approved the asset for sale. Required if checking an ERC-721 v1 asset (like CryptoKitties) that doesn't check if the transferFrom caller is the owner of the asset (only allowing it if it's an approved address).
     * @param retries How many times to retry if false
     */
    OpenSeaPort.prototype.isAssetTransferrable = function (_a, retries) {
        var asset = _a.asset, fromAddress = _a.fromAddress, toAddress = _a.toAddress, quantity = _a.quantity, _b = _a.useProxy, useProxy = _b === void 0 ? false : _b;
        if (retries === void 0) { retries = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var schema, quantityBN, wyAsset, abi, from, proxyAddress, data, gas, error_8;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        schema = this._getSchema(asset.schemaName);
                        quantityBN = quantity
                            ? wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(quantity), asset.decimals || 0)
                            : utils_1.makeBigNumber(1);
                        wyAsset = utils_1.getWyvernAsset(schema, asset, quantityBN);
                        abi = schema.functions.transfer(wyAsset);
                        from = fromAddress;
                        if (!useProxy) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._getProxy(fromAddress)];
                    case 1:
                        proxyAddress = _c.sent();
                        if (!proxyAddress) {
                            console.error("This asset's owner (" + fromAddress + ") does not have a proxy!");
                            return [2 /*return*/, false];
                        }
                        from = proxyAddress;
                        _c.label = 2;
                    case 2:
                        data = schema_1.encodeTransferCall(abi, fromAddress, toAddress);
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 8]);
                        return [4 /*yield*/, utils_1.estimateGas(this._getClientsForRead(retries).web3, {
                                from: from,
                                to: abi.target,
                                data: data
                            })];
                    case 4:
                        gas = _c.sent();
                        return [2 /*return*/, gas > 0];
                    case 5:
                        error_8 = _c.sent();
                        if (retries <= 0) {
                            console.error(error_8);
                            console.error(from, abi.target, data);
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, utils_1.delay(500)];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.isAssetTransferrable({ asset: asset, fromAddress: fromAddress, toAddress: toAddress, quantity: quantity, useProxy: useProxy }, retries - 1)];
                    case 7: return [2 /*return*/, _c.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Transfer a fungible or non-fungible asset to another address
     * @param param0 __namedParamaters Object
     * @param fromAddress The owner's wallet address
     * @param toAddress The recipient's wallet address
     * @param asset The fungible or non-fungible asset to transfer
     * @param quantity The amount of the asset to transfer, if it's fungible (optional). In units (not base units), e.g. not wei.
     * @returns Transaction hash
     */
    OpenSeaPort.prototype.transfer = function (_a) {
        var fromAddress = _a.fromAddress, toAddress = _a.toAddress, asset = _a.asset, _b = _a.quantity, quantity = _b === void 0 ? 1 : _b;
        return __awaiter(this, void 0, void 0, function () {
            var schema, quantityBN, wyAsset, isCryptoKitties, isOldNFT, abi, data, txHash;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        schema = this._getSchema(asset.schemaName);
                        quantityBN = wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(quantity), asset.decimals || 0);
                        wyAsset = utils_1.getWyvernAsset(schema, asset, quantityBN);
                        isCryptoKitties = [constants_1.CK_ADDRESS, constants_1.CK_RINKEBY_ADDRESS].includes(wyAsset.address);
                        isOldNFT = isCryptoKitties || !!asset.version && [
                            types_1.TokenStandardVersion.ERC721v1, types_1.TokenStandardVersion.ERC721v2
                        ].includes(asset.version);
                        abi = asset.schemaName === types_1.WyvernSchemaName.ERC20
                            ? utils_1.annotateERC20TransferABI(wyAsset)
                            : isOldNFT
                                ? utils_1.annotateERC721TransferABI(wyAsset)
                                : schema.functions.transfer(wyAsset);
                        this._dispatch(types_1.EventType.TransferOne, { accountAddress: fromAddress, toAddress: toAddress, asset: wyAsset });
                        data = schema_1.encodeTransferCall(abi, fromAddress, toAddress);
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: fromAddress,
                                to: abi.target,
                                data: data,
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: fromAddress });
                            })];
                    case 1:
                        txHash = _c.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.TransferOne, "Transferring asset")];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, txHash];
                }
            });
        });
    };
    /**
     * Transfer one or more assets to another address.
     * ERC-721 and ERC-1155 assets are supported
     * @param param0 __namedParamaters Object
     * @param assets An array of objects with the tokenId and tokenAddress of each of the assets to transfer.
     * @param fromAddress The owner's wallet address
     * @param toAddress The recipient's wallet address
     * @param schemaName The Wyvern schema name corresponding to the asset type, if not in each Asset definition
     * @returns Transaction hash
     */
    OpenSeaPort.prototype.transferAll = function (_a) {
        var assets = _a.assets, fromAddress = _a.fromAddress, toAddress = _a.toAddress, _b = _a.schemaName, schemaName = _b === void 0 ? types_1.WyvernSchemaName.ERC721 : _b;
        return __awaiter(this, void 0, void 0, function () {
            var schemaNames, wyAssets, _c, calldata, target, proxyAddress, txHash;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        toAddress = utils_1.validateAndFormatWalletAddress(this.web3, toAddress);
                        schemaNames = assets.map(function (asset) { return asset.schemaName || schemaName; });
                        wyAssets = assets.map(function (asset) { return utils_1.getWyvernAsset(_this._getSchema(asset.schemaName), asset); });
                        _c = schema_1.encodeAtomicizedTransfer(schemaNames.map(function (name) { return _this._getSchema(name); }), wyAssets, fromAddress, toAddress, this._wyvernProtocol, this._networkName), calldata = _c.calldata, target = _c.target;
                        return [4 /*yield*/, this._getProxy(fromAddress)];
                    case 1:
                        proxyAddress = _d.sent();
                        if (!!proxyAddress) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._initializeProxy(fromAddress)];
                    case 2:
                        proxyAddress = _d.sent();
                        _d.label = 3;
                    case 3: return [4 /*yield*/, this._approveAll({ schemaNames: schemaNames, wyAssets: wyAssets, accountAddress: fromAddress, proxyAddress: proxyAddress })];
                    case 4:
                        _d.sent();
                        this._dispatch(types_1.EventType.TransferAll, { accountAddress: fromAddress, toAddress: toAddress, assets: wyAssets });
                        return [4 /*yield*/, utils_1.sendRawTransaction(this.web3, {
                                from: fromAddress,
                                to: proxyAddress,
                                data: schema_1.encodeProxyCall(target, types_1.HowToCall.DelegateCall, calldata),
                            }, function (error) {
                                _this._dispatch(types_1.EventType.TransactionDenied, { error: error, accountAddress: fromAddress });
                            })];
                    case 5:
                        txHash = _d.sent();
                        return [4 /*yield*/, this._confirmTransaction(txHash, types_1.EventType.TransferAll, "Transferring " + assets.length + " asset" + (assets.length == 1 ? '' : 's'))];
                    case 6:
                        _d.sent();
                        return [2 /*return*/, txHash];
                }
            });
        });
    };
    /**
     * Get known payment tokens (ERC-20) that match your filters.
     * @param param0 __namedParameters Object
     * @param symbol Filter by the ERC-20 symbol for the token,
     *    e.g. "DAI" for Dai stablecoin
     * @param address Filter by the ERC-20 contract address for the token,
     *    e.g. "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359" for Dai
     * @param name Filter by the name of the ERC-20 contract.
     *    Not guaranteed to exist or be unique for each token type.
     *    e.g. '' for Dai and 'Decentraland' for MANA
     * FUTURE: officiallySupported: Filter for tokens that are
     *    officially supported and shown on opensea.io
     */
    OpenSeaPort.prototype.getFungibleTokens = function (_a) {
        var _b = _a === void 0 ? {} : _a, symbol = _b.symbol, address = _b.address, name = _b.name;
        return __awaiter(this, void 0, void 0, function () {
            var tokenSettings, tokens, offlineTokens;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        utils_1.onDeprecated("Use `api.getPaymentTokens` instead");
                        tokenSettings = WyvernSchemas.tokens[this._networkName];
                        return [4 /*yield*/, this.api.getPaymentTokens({ symbol: symbol, address: address, name: name })];
                    case 1:
                        tokens = (_c.sent()).tokens;
                        offlineTokens = __spreadArray([
                            tokenSettings.canonicalWrappedEther
                        ], tokenSettings.otherTokens).filter(function (t) {
                            if (symbol != null && t.symbol.toLowerCase() != symbol.toLowerCase()) {
                                return false;
                            }
                            if (address != null && t.address.toLowerCase() != address.toLowerCase()) {
                                return false;
                            }
                            if (name != null && t.name != name) {
                                return false;
                            }
                            return true;
                        });
                        return [2 /*return*/, __spreadArray(__spreadArray([], offlineTokens), tokens)];
                }
            });
        });
    };
    /**
     * Get an account's balance of any Asset.
     * @param param0 __namedParameters Object
     * @param accountAddress Account address to check
     * @param asset The Asset to check balance for
     * @param retries How many times to retry if balance is 0
     */
    OpenSeaPort.prototype.getAssetBalance = function (_a, retries) {
        var accountAddress = _a.accountAddress, asset = _a.asset;
        if (retries === void 0) { retries = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var schema, wyAsset, abi_1, contract_1, inputValues_1, count, abi_2, contract_2, inputValues_2, owner;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        schema = this._getSchema(asset.schemaName);
                        wyAsset = utils_1.getWyvernAsset(schema, asset);
                        if (!schema.functions.countOf) return [3 /*break*/, 2];
                        abi_1 = schema.functions.countOf(wyAsset);
                        contract_1 = this._getClientsForRead(retries).web3.eth.contract([abi_1]).at(abi_1.target);
                        inputValues_1 = abi_1.inputs.filter(function (x) { return x.value !== undefined; }).map(function (x) { return x.value; });
                        return [4 /*yield*/, utils_1.promisifyCall(function (c) {
                                var _a;
                                return (_a = contract_1[abi_1.name]).call.apply(_a, __spreadArray(__spreadArray([accountAddress], inputValues_1), [c]));
                            })];
                    case 1:
                        count = _b.sent();
                        if (count !== undefined) {
                            return [2 /*return*/, count];
                        }
                        return [3 /*break*/, 5];
                    case 2:
                        if (!schema.functions.ownerOf) return [3 /*break*/, 4];
                        abi_2 = schema.functions.ownerOf(wyAsset);
                        contract_2 = this._getClientsForRead(retries).web3.eth.contract([abi_2]).at(abi_2.target);
                        if (abi_2.inputs.filter(function (x) { return x.value === undefined; })[0]) {
                            throw new Error("Missing an argument for finding the owner of this asset");
                        }
                        inputValues_2 = abi_2.inputs.map(function (i) { return i.value.toString(); });
                        return [4 /*yield*/, utils_1.promisifyCall(function (c) {
                                var _a;
                                return (_a = contract_2[abi_2.name]).call.apply(_a, __spreadArray(__spreadArray([], inputValues_2), [c]));
                            })];
                    case 3:
                        owner = _b.sent();
                        if (owner) {
                            return [2 /*return*/, owner.toLowerCase() == accountAddress.toLowerCase()
                                    ? new bignumber_js_1.BigNumber(1)
                                    : new bignumber_js_1.BigNumber(0)];
                        }
                        return [3 /*break*/, 5];
                    case 4: 
                    // Missing ownership call - skip check to allow listings
                    // by default
                    throw new Error('Missing ownership schema for this asset type');
                    case 5:
                        if (!(retries <= 0)) return [3 /*break*/, 6];
                        throw new Error('Unable to get current owner from smart contract');
                    case 6: return [4 /*yield*/, utils_1.delay(500)
                        // Recursively check owner again
                    ];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, this.getAssetBalance({ accountAddress: accountAddress, asset: asset }, retries - 1)];
                    case 8: 
                    // Recursively check owner again
                    return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * Get the balance of a fungible token.
     * Convenience method for getAssetBalance for fungibles
     * @param param0 __namedParameters Object
     * @param accountAddress Account address to check
     * @param tokenAddress The address of the token to check balance for
     * @param schemaName Optional schema name for the fungible token
     * @param retries Number of times to retry if balance is undefined
     */
    OpenSeaPort.prototype.getTokenBalance = function (_a, retries) {
        var accountAddress = _a.accountAddress, tokenAddress = _a.tokenAddress, _b = _a.schemaName, schemaName = _b === void 0 ? types_1.WyvernSchemaName.ERC20 : _b;
        if (retries === void 0) { retries = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var asset;
            return __generator(this, function (_c) {
                asset = {
                    tokenId: null,
                    tokenAddress: tokenAddress,
                    schemaName: schemaName
                };
                return [2 /*return*/, this.getAssetBalance({ accountAddress: accountAddress, asset: asset }, retries)];
            });
        });
    };
    /**
     * Compute the fees for an order
     * @param param0 __namedParameters
     * @param asset Asset to use for fees. May be blank ONLY for multi-collection bundles.
     * @param side The side of the order (buy or sell)
     * @param accountAddress The account to check fees for (useful if fees differ by account, like transfer fees)
     * @param extraBountyBasisPoints The basis points to add for the bounty. Will throw if it exceeds the assets' contract's OpenSea fee.
     */
    OpenSeaPort.prototype.computeFees = function (_a) {
        var asset = _a.asset, side = _a.side, accountAddress = _a.accountAddress, _b = _a.extraBountyBasisPoints, extraBountyBasisPoints = _b === void 0 ? 0 : _b;
        return __awaiter(this, void 0, void 0, function () {
            var openseaBuyerFeeBasisPoints, openseaSellerFeeBasisPoints, devBuyerFeeBasisPoints, devSellerFeeBasisPoints, transferFee, transferFeeTokenAddress, maxTotalBountyBPS, result, error_9, sellerBountyBasisPoints, bountyTooLarge, errorMessage;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        openseaBuyerFeeBasisPoints = constants_1.DEFAULT_BUYER_FEE_BASIS_POINTS;
                        openseaSellerFeeBasisPoints = constants_1.DEFAULT_SELLER_FEE_BASIS_POINTS;
                        devBuyerFeeBasisPoints = 0;
                        devSellerFeeBasisPoints = 0;
                        transferFee = utils_1.makeBigNumber(0);
                        transferFeeTokenAddress = null;
                        maxTotalBountyBPS = constants_1.DEFAULT_MAX_BOUNTY;
                        if (asset) {
                            openseaBuyerFeeBasisPoints = +asset.collection.openseaBuyerFeeBasisPoints;
                            openseaSellerFeeBasisPoints = +asset.collection.openseaSellerFeeBasisPoints;
                            devBuyerFeeBasisPoints = +asset.collection.devBuyerFeeBasisPoints;
                            devSellerFeeBasisPoints = +asset.collection.devSellerFeeBasisPoints;
                            maxTotalBountyBPS = openseaSellerFeeBasisPoints;
                        }
                        if (!(side == types_1.OrderSide.Sell && asset)) return [3 /*break*/, 4];
                        // Server-side knowledge
                        transferFee = asset.transferFee
                            ? utils_1.makeBigNumber(asset.transferFee)
                            : transferFee;
                        transferFeeTokenAddress = asset.transferFeePaymentToken
                            ? asset.transferFeePaymentToken.address
                            : transferFeeTokenAddress;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, utils_1.getTransferFeeSettings(this.web3, { asset: asset, accountAddress: accountAddress })];
                    case 2:
                        result = _c.sent();
                        transferFee = result.transferFee != null ? result.transferFee : transferFee;
                        transferFeeTokenAddress = result.transferFeeTokenAddress || transferFeeTokenAddress;
                        return [3 /*break*/, 4];
                    case 3:
                        error_9 = _c.sent();
                        // Use server defaults
                        console.error(error_9);
                        return [3 /*break*/, 4];
                    case 4:
                        sellerBountyBasisPoints = side == types_1.OrderSide.Sell
                            ? extraBountyBasisPoints
                            : 0;
                        bountyTooLarge = sellerBountyBasisPoints + constants_1.OPENSEA_SELLER_BOUNTY_BASIS_POINTS > maxTotalBountyBPS;
                        if (sellerBountyBasisPoints > 0 && bountyTooLarge) {
                            errorMessage = "Total bounty exceeds the maximum for this asset type (" + maxTotalBountyBPS / 100 + "%).";
                            if (maxTotalBountyBPS >= constants_1.OPENSEA_SELLER_BOUNTY_BASIS_POINTS) {
                                errorMessage += " Remember that OpenSea will add " + constants_1.OPENSEA_SELLER_BOUNTY_BASIS_POINTS / 100 + "% for referrers with OpenSea accounts!";
                            }
                            throw new Error(errorMessage);
                        }
                        return [2 /*return*/, {
                                totalBuyerFeeBasisPoints: openseaBuyerFeeBasisPoints + devBuyerFeeBasisPoints,
                                totalSellerFeeBasisPoints: openseaSellerFeeBasisPoints + devSellerFeeBasisPoints,
                                openseaBuyerFeeBasisPoints: openseaBuyerFeeBasisPoints,
                                openseaSellerFeeBasisPoints: openseaSellerFeeBasisPoints,
                                devBuyerFeeBasisPoints: devBuyerFeeBasisPoints,
                                devSellerFeeBasisPoints: devSellerFeeBasisPoints,
                                sellerBountyBasisPoints: sellerBountyBasisPoints,
                                transferFee: transferFee,
                                transferFeeTokenAddress: transferFeeTokenAddress,
                            }];
                }
            });
        });
    };
    /**
     * Validate and post an order to the OpenSea orderbook.
     * @param order The order to post. Can either be signed by the maker or pre-approved on the Wyvern contract using approveOrder. See https://github.com/ProjectWyvern/wyvern-ethereum/blob/master/contracts/exchange/Exchange.sol#L178
     * @returns The order as stored by the orderbook
     */
    OpenSeaPort.prototype.validateAndPostOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, confirmedOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernExchange.hashOrder_.callAsync([order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken], [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt], order.feeMethod, order.side, order.saleKind, order.howToCall, order.calldata, order.replacementPattern, order.staticExtradata)];
                    case 1:
                        hash = _a.sent();
                        if (hash !== order.hash) {
                            console.error(order);
                            throw new Error("Order couldn't be validated by the exchange due to a hash mismatch. Make sure your wallet is on the right network!");
                        }
                        this.logger('Order hashes match');
                        return [4 /*yield*/, this.api.postOrder(utils_1.orderToJSON(order))];
                    case 2:
                        confirmedOrder = _a.sent();
                        return [2 /*return*/, confirmedOrder];
                }
            });
        });
    };
    /**
     * DEPRECATED: ERC-1559
     * https://eips.ethereum.org/EIPS/eip-1559
     * Compute the gas price for sending a txn, in wei
     * Will be slightly above the mean to make it faster
     */
    OpenSeaPort.prototype._computeGasPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var meanGas, weiToAdd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.getCurrentGasPrice(this.web3)];
                    case 1:
                        meanGas = _a.sent();
                        weiToAdd = this.web3.toWei(this.gasPriceAddition, 'gwei');
                        return [2 /*return*/, meanGas.plus(weiToAdd)];
                }
            });
        });
    };
    /**
     * Compute the gas amount for sending a txn
     * Will be slightly above the result of estimateGas to make it more reliable
     * @param estimation The result of estimateGas for a transaction
     */
    OpenSeaPort.prototype._correctGasAmount = function (estimation) {
        return Math.ceil(estimation * this.gasIncreaseFactor);
    };
    /**
     * Estimate the gas needed to match two orders. Returns undefined if tx errors
     * @param param0 __namedParamaters Object
     * @param buy The buy order to match
     * @param sell The sell order to match
     * @param accountAddress The taker's wallet address
     * @param metadata Metadata bytes32 to send with the match
     * @param retries Number of times to retry if false
     */
    OpenSeaPort.prototype._estimateGasForMatch = function (_a, retries) {
        var buy = _a.buy, sell = _a.sell, accountAddress = _a.accountAddress, _b = _a.metadata, metadata = _b === void 0 ? constants_1.NULL_BLOCK_HASH : _b;
        if (retries === void 0) { retries = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var value, error_10;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(buy.maker.toLowerCase() == accountAddress.toLowerCase() && buy.paymentToken == constants_1.NULL_ADDRESS)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._getRequiredAmountForTakingSellOrder(sell)];
                    case 1:
                        value = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 7]);
                        return [4 /*yield*/, this._getClientsForRead(retries).wyvernProtocol.wyvernExchange.atomicMatch_.estimateGasAsync([buy.exchange, buy.maker, buy.taker, buy.feeRecipient, buy.target, buy.staticTarget, buy.paymentToken, sell.exchange, sell.maker, sell.taker, sell.feeRecipient, sell.target, sell.staticTarget, sell.paymentToken], [buy.makerRelayerFee, buy.takerRelayerFee, buy.makerProtocolFee, buy.takerProtocolFee, buy.basePrice, buy.extra, buy.listingTime, buy.expirationTime, buy.salt, sell.makerRelayerFee, sell.takerRelayerFee, sell.makerProtocolFee, sell.takerProtocolFee, sell.basePrice, sell.extra, sell.listingTime, sell.expirationTime, sell.salt], [buy.feeMethod, buy.side, buy.saleKind, buy.howToCall, sell.feeMethod, sell.side, sell.saleKind, sell.howToCall], buy.calldata, sell.calldata, buy.replacementPattern, sell.replacementPattern, buy.staticExtradata, sell.staticExtradata, [
                                buy.v || 0,
                                sell.v || 0
                            ], [
                                buy.r || constants_1.NULL_BLOCK_HASH,
                                buy.s || constants_1.NULL_BLOCK_HASH,
                                sell.r || constants_1.NULL_BLOCK_HASH,
                                sell.s || constants_1.NULL_BLOCK_HASH,
                                metadata
                            ], 
                            // Typescript error in estimate gas method, so use any
                            { from: accountAddress, value: value })];
                    case 3: return [2 /*return*/, _c.sent()];
                    case 4:
                        error_10 = _c.sent();
                        if (retries <= 0) {
                            console.error(error_10);
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, utils_1.delay(200)];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this._estimateGasForMatch({ buy: buy, sell: sell, accountAddress: accountAddress, metadata: metadata }, retries - 1)];
                    case 6: return [2 /*return*/, _c.sent()];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Estimate the gas needed to transfer assets in bulk
     * Used for tests
     * @param param0 __namedParamaters Object
     * @param assets An array of objects with the tokenId and tokenAddress of each of the assets to transfer.
     * @param fromAddress The owner's wallet address
     * @param toAddress The recipient's wallet address
     * @param schemaName The Wyvern schema name corresponding to the asset type, if not in each asset
     */
    OpenSeaPort.prototype._estimateGasForTransfer = function (_a) {
        var assets = _a.assets, fromAddress = _a.fromAddress, toAddress = _a.toAddress, _b = _a.schemaName, schemaName = _b === void 0 ? types_1.WyvernSchemaName.ERC721 : _b;
        return __awaiter(this, void 0, void 0, function () {
            var schemaNames, wyAssets, proxyAddress, _c, calldata, target;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        schemaNames = assets.map(function (asset) { return asset.schemaName || schemaName; });
                        wyAssets = assets.map(function (asset) { return utils_1.getWyvernAsset(_this._getSchema(asset.schemaName), asset); });
                        return [4 /*yield*/, this._getProxy(fromAddress)];
                    case 1:
                        proxyAddress = _d.sent();
                        if (!proxyAddress) {
                            throw new Error('Uninitialized proxy address');
                        }
                        return [4 /*yield*/, this._approveAll({ schemaNames: schemaNames, wyAssets: wyAssets, accountAddress: fromAddress, proxyAddress: proxyAddress })];
                    case 2:
                        _d.sent();
                        _c = schema_1.encodeAtomicizedTransfer(schemaNames.map(function (name) { return _this._getSchema(name); }), wyAssets, fromAddress, toAddress, this._wyvernProtocol, this._networkName), calldata = _c.calldata, target = _c.target;
                        return [2 /*return*/, utils_1.estimateGas(this.web3, {
                                from: fromAddress,
                                to: proxyAddress,
                                data: schema_1.encodeProxyCall(target, types_1.HowToCall.DelegateCall, calldata)
                            })];
                }
            });
        });
    };
    /**
     * Get the proxy address for a user's wallet.
     * Internal method exposed for dev flexibility.
     * @param accountAddress The user's wallet address
     * @param retries Optional number of retries to do
     */
    OpenSeaPort.prototype._getProxy = function (accountAddress, retries) {
        if (retries === void 0) { retries = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var proxyAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernProxyRegistry.proxies.callAsync(accountAddress)];
                    case 1:
                        proxyAddress = _a.sent();
                        if (proxyAddress == '0x') {
                            throw new Error("Couldn't retrieve your account from the blockchain - make sure you're on the correct Ethereum network!");
                        }
                        if (!(!proxyAddress || proxyAddress == constants_1.NULL_ADDRESS)) return [3 /*break*/, 5];
                        if (!(retries > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, utils_1.delay(1000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this._getProxy(accountAddress, retries - 1)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        proxyAddress = null;
                        _a.label = 5;
                    case 5: return [2 /*return*/, proxyAddress];
                }
            });
        });
    };
    /**
     * Initialize the proxy for a user's wallet.
     * Proxies are used to make trades on behalf of the order's maker so that
     *  trades can happen when the maker isn't online.
     * Internal method exposed for dev flexibility.
     * @param accountAddress The user's wallet address
     */
    OpenSeaPort.prototype._initializeProxy = function (accountAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var txnData, gasEstimate, transactionHash, proxyAddress;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._dispatch(types_1.EventType.InitializeAccount, { accountAddress: accountAddress });
                        this.logger("Initializing proxy for account: " + accountAddress);
                        txnData = { from: accountAddress };
                        return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernProxyRegistry.registerProxy.estimateGasAsync(txnData)];
                    case 1:
                        gasEstimate = _a.sent();
                        return [4 /*yield*/, this._wyvernProtocol.wyvernProxyRegistry.registerProxy.sendTransactionAsync(__assign(__assign({}, txnData), { gas: this._correctGasAmount(gasEstimate) }))];
                    case 2:
                        transactionHash = _a.sent();
                        return [4 /*yield*/, this._confirmTransaction(transactionHash, types_1.EventType.InitializeAccount, "Initializing proxy for account", function () { return __awaiter(_this, void 0, void 0, function () {
                                var polledProxy;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._getProxy(accountAddress)];
                                        case 1:
                                            polledProxy = _a.sent();
                                            return [2 /*return*/, !!polledProxy];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this._getProxy(accountAddress, 10)];
                    case 4:
                        proxyAddress = _a.sent();
                        if (!proxyAddress) {
                            throw new Error('Failed to initialize your account :( Please restart your wallet/browser and try again!');
                        }
                        return [2 /*return*/, proxyAddress];
                }
            });
        });
    };
    /**
     * For a fungible token to use in trades (like W-ETH), get the amount
     *  approved for use by the Wyvern transfer proxy.
     * Internal method exposed for dev flexibility.
     * @param param0 __namedParameters Object
     * @param accountAddress Address for the user's wallet
     * @param tokenAddress Address for the token's contract
     * @param proxyAddress User's proxy address. If undefined, uses the token transfer proxy address
     */
    OpenSeaPort.prototype._getApprovedTokenCount = function (_a) {
        var accountAddress = _a.accountAddress, tokenAddress = _a.tokenAddress, proxyAddress = _a.proxyAddress;
        return __awaiter(this, void 0, void 0, function () {
            var addressToApprove, approved;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!tokenAddress) {
                            tokenAddress = WyvernSchemas.tokens[this._networkName].canonicalWrappedEther.address;
                        }
                        addressToApprove = proxyAddress || wyvern_js_1.WyvernProtocol.getTokenTransferProxyAddress(this._networkName);
                        return [4 /*yield*/, utils_1.rawCall(this.web3, {
                                from: accountAddress,
                                to: tokenAddress,
                                data: schema_1.encodeCall(contracts_1.getMethod(contracts_1.ERC20, 'allowance'), [accountAddress, addressToApprove]),
                            })];
                    case 1:
                        approved = _b.sent();
                        return [2 /*return*/, utils_1.makeBigNumber(approved)];
                }
            });
        });
    };
    OpenSeaPort.prototype._makeBuyOrder = function (_a) {
        var asset = _a.asset, quantity = _a.quantity, accountAddress = _a.accountAddress, startAmount = _a.startAmount, _b = _a.expirationTime, expirationTime = _b === void 0 ? 0 : _b, paymentTokenAddress = _a.paymentTokenAddress, _c = _a.extraBountyBasisPoints, extraBountyBasisPoints = _c === void 0 ? 0 : _c, sellOrder = _a.sellOrder, referrerAddress = _a.referrerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var schema, quantityBN, wyAsset, openSeaAsset, taker, _d, totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, _e, makerRelayerFee, takerRelayerFee, makerProtocolFee, takerProtocolFee, makerReferrerFee, feeRecipient, feeMethod, _f, target, calldata, replacementPattern, _g, basePrice, extra, paymentToken, times, _h, staticTarget, staticExtradata;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        accountAddress = utils_1.validateAndFormatWalletAddress(this.web3, accountAddress);
                        schema = this._getSchema(asset.schemaName);
                        quantityBN = wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(quantity), asset.decimals || 0);
                        wyAsset = utils_1.getWyvernAsset(schema, asset, quantityBN);
                        return [4 /*yield*/, this.api.getAsset(asset)];
                    case 1:
                        openSeaAsset = _j.sent();
                        taker = sellOrder
                            ? sellOrder.maker
                            : constants_1.NULL_ADDRESS;
                        return [4 /*yield*/, this.computeFees({ asset: openSeaAsset, extraBountyBasisPoints: extraBountyBasisPoints, side: types_1.OrderSide.Buy })];
                    case 2:
                        _d = _j.sent(), totalBuyerFeeBasisPoints = _d.totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints = _d.totalSellerFeeBasisPoints;
                        _e = this._getBuyFeeParameters(totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, sellOrder), makerRelayerFee = _e.makerRelayerFee, takerRelayerFee = _e.takerRelayerFee, makerProtocolFee = _e.makerProtocolFee, takerProtocolFee = _e.takerProtocolFee, makerReferrerFee = _e.makerReferrerFee, feeRecipient = _e.feeRecipient, feeMethod = _e.feeMethod;
                        _f = schema_1.encodeBuy(schema, wyAsset, accountAddress), target = _f.target, calldata = _f.calldata, replacementPattern = _f.replacementPattern;
                        return [4 /*yield*/, this._getPriceParameters(types_1.OrderSide.Buy, paymentTokenAddress, expirationTime, startAmount)];
                    case 3:
                        _g = _j.sent(), basePrice = _g.basePrice, extra = _g.extra, paymentToken = _g.paymentToken;
                        times = this._getTimeParameters(expirationTime);
                        return [4 /*yield*/, this._getStaticCallTargetAndExtraData({ asset: openSeaAsset, useTxnOriginStaticCall: false })];
                    case 4:
                        _h = _j.sent(), staticTarget = _h.staticTarget, staticExtradata = _h.staticExtradata;
                        return [2 /*return*/, {
                                exchange: wyvern_js_1.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                maker: accountAddress,
                                taker: taker,
                                quantity: quantityBN,
                                makerRelayerFee: makerRelayerFee,
                                takerRelayerFee: takerRelayerFee,
                                makerProtocolFee: makerProtocolFee,
                                takerProtocolFee: takerProtocolFee,
                                makerReferrerFee: makerReferrerFee,
                                waitingForBestCounterOrder: false,
                                feeMethod: feeMethod,
                                feeRecipient: feeRecipient,
                                side: types_1.OrderSide.Buy,
                                saleKind: types_1.SaleKind.FixedPrice,
                                target: target,
                                howToCall: types_1.HowToCall.Call,
                                calldata: calldata,
                                replacementPattern: replacementPattern,
                                staticTarget: staticTarget,
                                staticExtradata: staticExtradata,
                                paymentToken: paymentToken,
                                basePrice: basePrice,
                                extra: extra,
                                listingTime: times.listingTime,
                                expirationTime: times.expirationTime,
                                salt: wyvern_js_1.WyvernProtocol.generatePseudoRandomSalt(),
                                metadata: {
                                    asset: wyAsset,
                                    schema: schema.name,
                                    referrerAddress: referrerAddress
                                }
                            }];
                }
            });
        });
    };
    OpenSeaPort.prototype._makeSellOrder = function (_a) {
        var asset = _a.asset, quantity = _a.quantity, accountAddress = _a.accountAddress, startAmount = _a.startAmount, endAmount = _a.endAmount, listingTime = _a.listingTime, expirationTime = _a.expirationTime, waitForHighestBid = _a.waitForHighestBid, _b = _a.englishAuctionReservePrice, englishAuctionReservePrice = _b === void 0 ? 0 : _b, paymentTokenAddress = _a.paymentTokenAddress, extraBountyBasisPoints = _a.extraBountyBasisPoints, buyerAddress = _a.buyerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var schema, quantityBN, wyAsset, openSeaAsset, _c, totalSellerFeeBasisPoints, totalBuyerFeeBasisPoints, sellerBountyBasisPoints, _d, target, calldata, replacementPattern, orderSaleKind, _e, basePrice, extra, paymentToken, reservePrice, times, _f, makerRelayerFee, takerRelayerFee, makerProtocolFee, takerProtocolFee, makerReferrerFee, feeRecipient, feeMethod, _g, staticTarget, staticExtradata;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        accountAddress = utils_1.validateAndFormatWalletAddress(this.web3, accountAddress);
                        schema = this._getSchema(asset.schemaName);
                        quantityBN = wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(quantity), asset.decimals || 0);
                        wyAsset = utils_1.getWyvernAsset(schema, asset, quantityBN);
                        return [4 /*yield*/, this.api.getAsset(asset)];
                    case 1:
                        openSeaAsset = _h.sent();
                        return [4 /*yield*/, this.computeFees({ asset: openSeaAsset, side: types_1.OrderSide.Sell, extraBountyBasisPoints: extraBountyBasisPoints })];
                    case 2:
                        _c = _h.sent(), totalSellerFeeBasisPoints = _c.totalSellerFeeBasisPoints, totalBuyerFeeBasisPoints = _c.totalBuyerFeeBasisPoints, sellerBountyBasisPoints = _c.sellerBountyBasisPoints;
                        _d = schema_1.encodeSell(schema, wyAsset, accountAddress), target = _d.target, calldata = _d.calldata, replacementPattern = _d.replacementPattern;
                        orderSaleKind = endAmount != null && endAmount !== startAmount
                            ? types_1.SaleKind.DutchAuction
                            : types_1.SaleKind.FixedPrice;
                        return [4 /*yield*/, this._getPriceParameters(types_1.OrderSide.Sell, paymentTokenAddress, expirationTime, startAmount, endAmount, waitForHighestBid, englishAuctionReservePrice)];
                    case 3:
                        _e = _h.sent(), basePrice = _e.basePrice, extra = _e.extra, paymentToken = _e.paymentToken, reservePrice = _e.reservePrice;
                        times = this._getTimeParameters(expirationTime, listingTime, waitForHighestBid);
                        _f = this._getSellFeeParameters(totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, waitForHighestBid, sellerBountyBasisPoints), makerRelayerFee = _f.makerRelayerFee, takerRelayerFee = _f.takerRelayerFee, makerProtocolFee = _f.makerProtocolFee, takerProtocolFee = _f.takerProtocolFee, makerReferrerFee = _f.makerReferrerFee, feeRecipient = _f.feeRecipient, feeMethod = _f.feeMethod;
                        return [4 /*yield*/, this._getStaticCallTargetAndExtraData({ asset: openSeaAsset, useTxnOriginStaticCall: waitForHighestBid })];
                    case 4:
                        _g = _h.sent(), staticTarget = _g.staticTarget, staticExtradata = _g.staticExtradata;
                        return [2 /*return*/, {
                                exchange: wyvern_js_1.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                maker: accountAddress,
                                taker: buyerAddress,
                                quantity: quantityBN,
                                makerRelayerFee: makerRelayerFee,
                                takerRelayerFee: takerRelayerFee,
                                makerProtocolFee: makerProtocolFee,
                                takerProtocolFee: takerProtocolFee,
                                makerReferrerFee: makerReferrerFee,
                                waitingForBestCounterOrder: waitForHighestBid,
                                englishAuctionReservePrice: reservePrice ? utils_1.makeBigNumber(reservePrice) : undefined,
                                feeMethod: feeMethod,
                                feeRecipient: feeRecipient,
                                side: types_1.OrderSide.Sell,
                                saleKind: orderSaleKind,
                                target: target,
                                howToCall: types_1.HowToCall.Call,
                                calldata: calldata,
                                replacementPattern: replacementPattern,
                                staticTarget: staticTarget,
                                staticExtradata: staticExtradata,
                                paymentToken: paymentToken,
                                basePrice: basePrice,
                                extra: extra,
                                listingTime: times.listingTime,
                                expirationTime: times.expirationTime,
                                salt: wyvern_js_1.WyvernProtocol.generatePseudoRandomSalt(),
                                metadata: {
                                    asset: wyAsset,
                                    schema: schema.name,
                                }
                            }];
                }
            });
        });
    };
    OpenSeaPort.prototype._getStaticCallTargetAndExtraData = function (_a) {
        var asset = _a.asset, useTxnOriginStaticCall = _a.useTxnOriginStaticCall;
        return __awaiter(this, void 0, void 0, function () {
            var isCheezeWizards, isDecentralandEstate, isMainnet, cheezeWizardsBasicTournamentAddress, cheezeWizardsBasicTournamentABI, cheezeWizardsBasicTournmentInstance, wizardFingerprint, decentralandEstateAddress, decentralandEstateABI, decentralandEstateInstance, estateFingerprint;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isCheezeWizards = [
                            constants_1.CHEEZE_WIZARDS_GUILD_ADDRESS.toLowerCase(),
                            constants_1.CHEEZE_WIZARDS_GUILD_RINKEBY_ADDRESS.toLowerCase()
                        ].includes(asset.tokenAddress.toLowerCase());
                        isDecentralandEstate = asset.tokenAddress.toLowerCase() == constants_1.DECENTRALAND_ESTATE_ADDRESS.toLowerCase();
                        isMainnet = this._networkName == types_1.Network.Main;
                        if (isMainnet && !useTxnOriginStaticCall) {
                            // While testing, we will use dummy values for mainnet. We will remove this if-statement once we have pushed the PR once and tested on Rinkeby
                            return [2 /*return*/, {
                                    staticTarget: constants_1.NULL_ADDRESS,
                                    staticExtradata: '0x',
                                }];
                        }
                        if (!isCheezeWizards) return [3 /*break*/, 3];
                        cheezeWizardsBasicTournamentAddress = isMainnet ? constants_1.CHEEZE_WIZARDS_BASIC_TOURNAMENT_ADDRESS : constants_1.CHEEZE_WIZARDS_BASIC_TOURNAMENT_RINKEBY_ADDRESS;
                        cheezeWizardsBasicTournamentABI = this.web3.eth.contract(contracts_1.CheezeWizardsBasicTournament);
                        return [4 /*yield*/, cheezeWizardsBasicTournamentABI.at(cheezeWizardsBasicTournamentAddress)];
                    case 1:
                        cheezeWizardsBasicTournmentInstance = _b.sent();
                        return [4 /*yield*/, utils_1.rawCall(this.web3, {
                                to: cheezeWizardsBasicTournmentInstance.address,
                                data: cheezeWizardsBasicTournmentInstance.wizardFingerprint.getData(asset.tokenId)
                            })];
                    case 2:
                        wizardFingerprint = _b.sent();
                        return [2 /*return*/, {
                                staticTarget: isMainnet
                                    ? constants_1.STATIC_CALL_CHEEZE_WIZARDS_ADDRESS
                                    : constants_1.STATIC_CALL_CHEEZE_WIZARDS_RINKEBY_ADDRESS,
                                staticExtradata: schema_1.encodeCall(contracts_1.getMethod(contracts_1.StaticCheckCheezeWizards, 'succeedIfCurrentWizardFingerprintMatchesProvidedWizardFingerprint'), [asset.tokenId, wizardFingerprint, useTxnOriginStaticCall]),
                            }];
                    case 3:
                        if (!(isDecentralandEstate && isMainnet)) return [3 /*break*/, 6];
                        decentralandEstateAddress = constants_1.DECENTRALAND_ESTATE_ADDRESS;
                        decentralandEstateABI = this.web3.eth.contract(contracts_1.DecentralandEstates);
                        return [4 /*yield*/, decentralandEstateABI.at(decentralandEstateAddress)];
                    case 4:
                        decentralandEstateInstance = _b.sent();
                        return [4 /*yield*/, utils_1.rawCall(this.web3, {
                                to: decentralandEstateInstance.address,
                                data: decentralandEstateInstance.getFingerprint.getData(asset.tokenId)
                            })];
                    case 5:
                        estateFingerprint = _b.sent();
                        return [2 /*return*/, {
                                staticTarget: constants_1.STATIC_CALL_DECENTRALAND_ESTATES_ADDRESS,
                                staticExtradata: schema_1.encodeCall(contracts_1.getMethod(contracts_1.StaticCheckDecentralandEstates, 'succeedIfCurrentEstateFingerprintMatchesProvidedEstateFingerprint'), [asset.tokenId, estateFingerprint, useTxnOriginStaticCall]),
                            }];
                    case 6:
                        if (useTxnOriginStaticCall) {
                            return [2 /*return*/, {
                                    staticTarget: isMainnet
                                        ? constants_1.STATIC_CALL_TX_ORIGIN_ADDRESS
                                        : constants_1.STATIC_CALL_TX_ORIGIN_RINKEBY_ADDRESS,
                                    staticExtradata: schema_1.encodeCall(contracts_1.getMethod(contracts_1.StaticCheckTxOrigin, 'succeedIfTxOriginMatchesHardcodedAddress'), []),
                                }];
                        }
                        else {
                            // Noop - no checks
                            return [2 /*return*/, {
                                    staticTarget: constants_1.NULL_ADDRESS,
                                    staticExtradata: '0x',
                                }];
                        }
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OpenSeaPort.prototype._makeBundleBuyOrder = function (_a) {
        var assets = _a.assets, collection = _a.collection, quantities = _a.quantities, accountAddress = _a.accountAddress, startAmount = _a.startAmount, _b = _a.expirationTime, expirationTime = _b === void 0 ? 0 : _b, paymentTokenAddress = _a.paymentTokenAddress, _c = _a.extraBountyBasisPoints, extraBountyBasisPoints = _c === void 0 ? 0 : _c, sellOrder = _a.sellOrder, referrerAddress = _a.referrerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var quantityBNs, bundle, orderedSchemas, taker, asset, _d, _e, totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, _f, makerRelayerFee, takerRelayerFee, makerProtocolFee, takerProtocolFee, makerReferrerFee, feeRecipient, feeMethod, _g, calldata, replacementPattern, _h, basePrice, extra, paymentToken, times;
            var _this = this;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        accountAddress = utils_1.validateAndFormatWalletAddress(this.web3, accountAddress);
                        quantityBNs = quantities.map(function (quantity, i) { return wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(quantity), assets[i].decimals || 0); });
                        bundle = utils_1.getWyvernBundle(assets, assets.map(function (a) { return _this._getSchema(a.schemaName); }), quantityBNs);
                        orderedSchemas = bundle.schemas.map(function (name) { return _this._getSchema(name); });
                        taker = sellOrder
                            ? sellOrder.maker
                            : constants_1.NULL_ADDRESS;
                        if (!collection) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.getAsset(assets[0])];
                    case 1:
                        _d = _j.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _d = undefined;
                        _j.label = 3;
                    case 3:
                        asset = _d;
                        return [4 /*yield*/, this.computeFees({ asset: asset, extraBountyBasisPoints: extraBountyBasisPoints, side: types_1.OrderSide.Buy })];
                    case 4:
                        _e = _j.sent(), totalBuyerFeeBasisPoints = _e.totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints = _e.totalSellerFeeBasisPoints;
                        _f = this._getBuyFeeParameters(totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, sellOrder), makerRelayerFee = _f.makerRelayerFee, takerRelayerFee = _f.takerRelayerFee, makerProtocolFee = _f.makerProtocolFee, takerProtocolFee = _f.takerProtocolFee, makerReferrerFee = _f.makerReferrerFee, feeRecipient = _f.feeRecipient, feeMethod = _f.feeMethod;
                        _g = schema_1.encodeAtomicizedBuy(orderedSchemas, bundle.assets, accountAddress, this._wyvernProtocol, this._networkName), calldata = _g.calldata, replacementPattern = _g.replacementPattern;
                        return [4 /*yield*/, this._getPriceParameters(types_1.OrderSide.Buy, paymentTokenAddress, expirationTime, startAmount)];
                    case 5:
                        _h = _j.sent(), basePrice = _h.basePrice, extra = _h.extra, paymentToken = _h.paymentToken;
                        times = this._getTimeParameters(expirationTime);
                        return [2 /*return*/, {
                                exchange: wyvern_js_1.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                maker: accountAddress,
                                taker: taker,
                                quantity: utils_1.makeBigNumber(1),
                                makerRelayerFee: makerRelayerFee,
                                takerRelayerFee: takerRelayerFee,
                                makerProtocolFee: makerProtocolFee,
                                takerProtocolFee: takerProtocolFee,
                                makerReferrerFee: makerReferrerFee,
                                waitingForBestCounterOrder: false,
                                feeMethod: feeMethod,
                                feeRecipient: feeRecipient,
                                side: types_1.OrderSide.Buy,
                                saleKind: types_1.SaleKind.FixedPrice,
                                target: wyvern_js_1.WyvernProtocol.getAtomicizerContractAddress(this._networkName),
                                howToCall: types_1.HowToCall.DelegateCall,
                                calldata: calldata,
                                replacementPattern: replacementPattern,
                                staticTarget: constants_1.NULL_ADDRESS,
                                staticExtradata: '0x',
                                paymentToken: paymentToken,
                                basePrice: basePrice,
                                extra: extra,
                                listingTime: times.listingTime,
                                expirationTime: times.expirationTime,
                                salt: wyvern_js_1.WyvernProtocol.generatePseudoRandomSalt(),
                                metadata: {
                                    bundle: bundle,
                                    referrerAddress: referrerAddress
                                }
                            }];
                }
            });
        });
    };
    OpenSeaPort.prototype._makeBundleSellOrder = function (_a) {
        var bundleName = _a.bundleName, bundleDescription = _a.bundleDescription, bundleExternalLink = _a.bundleExternalLink, assets = _a.assets, collection = _a.collection, quantities = _a.quantities, accountAddress = _a.accountAddress, startAmount = _a.startAmount, endAmount = _a.endAmount, listingTime = _a.listingTime, expirationTime = _a.expirationTime, waitForHighestBid = _a.waitForHighestBid, _b = _a.englishAuctionReservePrice, englishAuctionReservePrice = _b === void 0 ? 0 : _b, paymentTokenAddress = _a.paymentTokenAddress, extraBountyBasisPoints = _a.extraBountyBasisPoints, buyerAddress = _a.buyerAddress;
        return __awaiter(this, void 0, void 0, function () {
            var quantityBNs, bundle, orderedSchemas, asset, _c, _d, totalSellerFeeBasisPoints, totalBuyerFeeBasisPoints, sellerBountyBasisPoints, _e, calldata, replacementPattern, _f, basePrice, extra, paymentToken, reservePrice, times, orderSaleKind, _g, makerRelayerFee, takerRelayerFee, makerProtocolFee, takerProtocolFee, makerReferrerFee, feeRecipient;
            var _this = this;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        accountAddress = utils_1.validateAndFormatWalletAddress(this.web3, accountAddress);
                        quantityBNs = quantities.map(function (quantity, i) { return wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(quantity), assets[i].decimals || 0); });
                        bundle = utils_1.getWyvernBundle(assets, assets.map(function (a) { return _this._getSchema(a.schemaName); }), quantityBNs);
                        orderedSchemas = bundle.schemas.map(function (name) { return _this._getSchema(name); });
                        bundle.name = bundleName;
                        bundle.description = bundleDescription;
                        bundle.external_link = bundleExternalLink;
                        if (!collection) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.getAsset(assets[0])];
                    case 1:
                        _c = _h.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _c = undefined;
                        _h.label = 3;
                    case 3:
                        asset = _c;
                        return [4 /*yield*/, this.computeFees({ asset: asset, side: types_1.OrderSide.Sell, extraBountyBasisPoints: extraBountyBasisPoints })];
                    case 4:
                        _d = _h.sent(), totalSellerFeeBasisPoints = _d.totalSellerFeeBasisPoints, totalBuyerFeeBasisPoints = _d.totalBuyerFeeBasisPoints, sellerBountyBasisPoints = _d.sellerBountyBasisPoints;
                        _e = schema_1.encodeAtomicizedSell(orderedSchemas, bundle.assets, accountAddress, this._wyvernProtocol, this._networkName), calldata = _e.calldata, replacementPattern = _e.replacementPattern;
                        return [4 /*yield*/, this._getPriceParameters(types_1.OrderSide.Sell, paymentTokenAddress, expirationTime, startAmount, endAmount, waitForHighestBid, englishAuctionReservePrice)];
                    case 5:
                        _f = _h.sent(), basePrice = _f.basePrice, extra = _f.extra, paymentToken = _f.paymentToken, reservePrice = _f.reservePrice;
                        times = this._getTimeParameters(expirationTime, listingTime, waitForHighestBid);
                        orderSaleKind = endAmount != null && endAmount !== startAmount
                            ? types_1.SaleKind.DutchAuction
                            : types_1.SaleKind.FixedPrice;
                        _g = this._getSellFeeParameters(totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, waitForHighestBid, sellerBountyBasisPoints), makerRelayerFee = _g.makerRelayerFee, takerRelayerFee = _g.takerRelayerFee, makerProtocolFee = _g.makerProtocolFee, takerProtocolFee = _g.takerProtocolFee, makerReferrerFee = _g.makerReferrerFee, feeRecipient = _g.feeRecipient;
                        return [2 /*return*/, {
                                exchange: wyvern_js_1.WyvernProtocol.getExchangeContractAddress(this._networkName),
                                maker: accountAddress,
                                taker: buyerAddress,
                                quantity: utils_1.makeBigNumber(1),
                                makerRelayerFee: makerRelayerFee,
                                takerRelayerFee: takerRelayerFee,
                                makerProtocolFee: makerProtocolFee,
                                takerProtocolFee: takerProtocolFee,
                                makerReferrerFee: makerReferrerFee,
                                waitingForBestCounterOrder: waitForHighestBid,
                                englishAuctionReservePrice: reservePrice ? utils_1.makeBigNumber(reservePrice) : undefined,
                                feeMethod: types_1.FeeMethod.SplitFee,
                                feeRecipient: feeRecipient,
                                side: types_1.OrderSide.Sell,
                                saleKind: orderSaleKind,
                                target: wyvern_js_1.WyvernProtocol.getAtomicizerContractAddress(this._networkName),
                                howToCall: types_1.HowToCall.DelegateCall,
                                calldata: calldata,
                                replacementPattern: replacementPattern,
                                staticTarget: constants_1.NULL_ADDRESS,
                                staticExtradata: '0x',
                                paymentToken: paymentToken,
                                basePrice: basePrice,
                                extra: extra,
                                listingTime: times.listingTime,
                                expirationTime: times.expirationTime,
                                salt: wyvern_js_1.WyvernProtocol.generatePseudoRandomSalt(),
                                metadata: {
                                    bundle: bundle
                                }
                            }];
                }
            });
        });
    };
    OpenSeaPort.prototype._makeMatchingOrder = function (_a) {
        var _this = this;
        var order = _a.order, accountAddress = _a.accountAddress, recipientAddress = _a.recipientAddress;
        accountAddress = utils_1.validateAndFormatWalletAddress(this.web3, accountAddress);
        recipientAddress = utils_1.validateAndFormatWalletAddress(this.web3, recipientAddress);
        var computeOrderParams = function () {
            if ('asset' in order.metadata) {
                var schema = _this._getSchema(order.metadata.schema);
                return order.side == types_1.OrderSide.Buy
                    ? schema_1.encodeSell(schema, order.metadata.asset, recipientAddress)
                    : schema_1.encodeBuy(schema, order.metadata.asset, recipientAddress);
            }
            else if ('bundle' in order.metadata) {
                // We're matching a bundle order
                var bundle = order.metadata.bundle;
                var orderedSchemas = bundle.schemas
                    ? bundle.schemas.map(function (schemaName) { return _this._getSchema(schemaName); })
                    // Backwards compat:
                    : bundle.assets.map(function () { return _this._getSchema('schema' in order.metadata
                        ? order.metadata.schema
                        : undefined); });
                var atomicized = order.side == types_1.OrderSide.Buy
                    ? schema_1.encodeAtomicizedSell(orderedSchemas, order.metadata.bundle.assets, recipientAddress, _this._wyvernProtocol, _this._networkName)
                    : schema_1.encodeAtomicizedBuy(orderedSchemas, order.metadata.bundle.assets, recipientAddress, _this._wyvernProtocol, _this._networkName);
                return {
                    target: wyvern_js_1.WyvernProtocol.getAtomicizerContractAddress(_this._networkName),
                    calldata: atomicized.calldata,
                    replacementPattern: atomicized.replacementPattern
                };
            }
            else {
                throw new Error('Invalid order metadata');
            }
        };
        var _b = computeOrderParams(), target = _b.target, calldata = _b.calldata, replacementPattern = _b.replacementPattern;
        var times = this._getTimeParameters(0);
        // Compat for matching buy orders that have fee recipient still on them
        var feeRecipient = order.feeRecipient == constants_1.NULL_ADDRESS
            ? constants_1.OPENSEA_FEE_RECIPIENT
            : constants_1.NULL_ADDRESS;
        var matchingOrder = {
            exchange: order.exchange,
            maker: accountAddress,
            taker: order.maker,
            quantity: order.quantity,
            makerRelayerFee: order.makerRelayerFee,
            takerRelayerFee: order.takerRelayerFee,
            makerProtocolFee: order.makerProtocolFee,
            takerProtocolFee: order.takerProtocolFee,
            makerReferrerFee: order.makerReferrerFee,
            waitingForBestCounterOrder: false,
            feeMethod: order.feeMethod,
            feeRecipient: feeRecipient,
            side: (order.side + 1) % 2,
            saleKind: types_1.SaleKind.FixedPrice,
            target: target,
            howToCall: order.howToCall,
            calldata: calldata,
            replacementPattern: replacementPattern,
            staticTarget: constants_1.NULL_ADDRESS,
            staticExtradata: '0x',
            paymentToken: order.paymentToken,
            basePrice: order.basePrice,
            extra: utils_1.makeBigNumber(0),
            listingTime: times.listingTime,
            expirationTime: times.expirationTime,
            salt: wyvern_js_1.WyvernProtocol.generatePseudoRandomSalt(),
            metadata: order.metadata,
        };
        return __assign(__assign({}, matchingOrder), { hash: utils_1.getOrderHash(matchingOrder) });
    };
    /**
     * Validate against Wyvern that a buy and sell order can match
     * @param param0 __namedParameters Object
     * @param buy The buy order to validate
     * @param sell The sell order to validate
     * @param accountAddress Address for the user's wallet
     * @param shouldValidateBuy Whether to validate the buy order individually.
     * @param shouldValidateSell Whether to validate the sell order individually.
     * @param retries How many times to retry if validation fails
     */
    OpenSeaPort.prototype._validateMatch = function (_a, retries) {
        var buy = _a.buy, sell = _a.sell, accountAddress = _a.accountAddress, _b = _a.shouldValidateBuy, shouldValidateBuy = _b === void 0 ? false : _b, _c = _a.shouldValidateSell, shouldValidateSell = _c === void 0 ? false : _c;
        if (retries === void 0) { retries = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var buyValid, sellValid, canMatch, calldataCanMatch, error_11;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, , 10]);
                        if (!shouldValidateBuy) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._validateOrder(buy)];
                    case 1:
                        buyValid = _d.sent();
                        this.logger("Buy order is valid: " + buyValid);
                        if (!buyValid) {
                            throw new Error('Invalid buy order. It may have recently been removed. Please refresh the page and try again!');
                        }
                        _d.label = 2;
                    case 2:
                        if (!shouldValidateSell) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._validateOrder(sell)];
                    case 3:
                        sellValid = _d.sent();
                        this.logger("Sell order is valid: " + sellValid);
                        if (!sellValid) {
                            throw new Error('Invalid sell order. It may have recently been removed. Please refresh the page and try again!');
                        }
                        _d.label = 4;
                    case 4: return [4 /*yield*/, debugging_1.requireOrdersCanMatch(this._getClientsForRead(retries).wyvernProtocol, { buy: buy, sell: sell, accountAddress: accountAddress })];
                    case 5:
                        canMatch = _d.sent();
                        this.logger("Orders matching: " + canMatch);
                        return [4 /*yield*/, debugging_1.requireOrderCalldataCanMatch(this._getClientsForRead(retries).wyvernProtocol, { buy: buy, sell: sell })];
                    case 6:
                        calldataCanMatch = _d.sent();
                        this.logger("Order calldata matching: " + calldataCanMatch);
                        return [2 /*return*/, true];
                    case 7:
                        error_11 = _d.sent();
                        if (retries <= 0) {
                            throw new Error("Error matching this listing: " + error_11.message + ". Please contact the maker or try again later!");
                        }
                        return [4 /*yield*/, utils_1.delay(500)];
                    case 8:
                        _d.sent();
                        return [4 /*yield*/, this._validateMatch({ buy: buy, sell: sell, accountAddress: accountAddress, shouldValidateBuy: shouldValidateBuy, shouldValidateSell: shouldValidateSell }, retries - 1)];
                    case 9: return [2 /*return*/, _d.sent()];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    // For creating email whitelists on order takers
    OpenSeaPort.prototype._createEmailWhitelistEntry = function (_a) {
        var order = _a.order, buyerEmail = _a.buyerEmail;
        return __awaiter(this, void 0, void 0, function () {
            var asset;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        asset = 'asset' in order.metadata
                            ? order.metadata.asset
                            : undefined;
                        if (!asset || !asset.id) {
                            throw new Error("Whitelisting only available for non-fungible assets.");
                        }
                        return [4 /*yield*/, this.api.postAssetWhitelist(asset.address, asset.id, buyerEmail)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Throws
    OpenSeaPort.prototype._sellOrderValidationAndApprovals = function (_a) {
        var order = _a.order, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var wyAssets, schemaNames, tokenAddress, minimumAmount, sellValid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        wyAssets = 'bundle' in order.metadata
                            ? order.metadata.bundle.assets
                            : order.metadata.asset
                                ? [order.metadata.asset]
                                : [];
                        schemaNames = 'bundle' in order.metadata && 'schemas' in order.metadata.bundle
                            ? order.metadata.bundle.schemas
                            : 'schema' in order.metadata
                                ? [order.metadata.schema]
                                : [];
                        tokenAddress = order.paymentToken;
                        return [4 /*yield*/, this._approveAll({ schemaNames: schemaNames, wyAssets: wyAssets, accountAddress: accountAddress })
                            // For fulfilling bids,
                            // need to approve access to fungible token because of the way fees are paid
                            // This can be done at a higher level to show UI
                        ];
                    case 1:
                        _b.sent();
                        if (!(tokenAddress != constants_1.NULL_ADDRESS)) return [3 /*break*/, 3];
                        minimumAmount = utils_1.makeBigNumber(order.basePrice);
                        return [4 /*yield*/, this.approveFungibleToken({ accountAddress: accountAddress, tokenAddress: tokenAddress, minimumAmount: minimumAmount })];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernExchange.validateOrderParameters_.callAsync([order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken], [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt], order.feeMethod, order.side, order.saleKind, order.howToCall, order.calldata, order.replacementPattern, order.staticExtradata, { from: accountAddress })];
                    case 4:
                        sellValid = _b.sent();
                        if (!sellValid) {
                            console.error(order);
                            throw new Error("Failed to validate sell order parameters. Make sure you're on the right network!");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Instead of signing an off-chain order, you can approve an order
     * with on on-chain transaction using this method
     * @param order Order to approve
     * @returns Transaction hash of the approval transaction
     */
    OpenSeaPort.prototype._approveOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var accountAddress, includeInOrderBook, transactionHash;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        accountAddress = order.maker;
                        includeInOrderBook = true;
                        this._dispatch(types_1.EventType.ApproveOrder, { order: order, accountAddress: accountAddress });
                        return [4 /*yield*/, this._wyvernProtocol.wyvernExchange.approveOrder_.sendTransactionAsync([order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken], [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt], order.feeMethod, order.side, order.saleKind, order.howToCall, order.calldata, order.replacementPattern, order.staticExtradata, includeInOrderBook, { from: accountAddress })];
                    case 1:
                        transactionHash = _a.sent();
                        return [4 /*yield*/, this._confirmTransaction(transactionHash.toString(), types_1.EventType.ApproveOrder, "Approving order", function () { return __awaiter(_this, void 0, void 0, function () {
                                var isApproved;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._validateOrder(order)];
                                        case 1:
                                            isApproved = _a.sent();
                                            return [2 /*return*/, isApproved];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, transactionHash];
                }
            });
        });
    };
    OpenSeaPort.prototype._validateOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernExchange.validateOrder_.callAsync([order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken], [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt], order.feeMethod, order.side, order.saleKind, order.howToCall, order.calldata, order.replacementPattern, order.staticExtradata, order.v || 0, order.r || constants_1.NULL_BLOCK_HASH, order.s || constants_1.NULL_BLOCK_HASH)];
                    case 1:
                        isValid = _a.sent();
                        return [2 /*return*/, isValid];
                }
            });
        });
    };
    OpenSeaPort.prototype._approveAll = function (_a) {
        var schemaNames = _a.schemaNames, wyAssets = _a.wyAssets, accountAddress = _a.accountAddress, proxyAddress = _a.proxyAddress;
        return __awaiter(this, void 0, void 0, function () {
            var _b, contractsWithApproveAll;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = proxyAddress;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._getProxy(accountAddress)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        proxyAddress = _b || undefined;
                        if (!!proxyAddress) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._initializeProxy(accountAddress)];
                    case 3:
                        proxyAddress = _c.sent();
                        _c.label = 4;
                    case 4:
                        contractsWithApproveAll = new Set();
                        return [2 /*return*/, Promise.all(wyAssets.map(function (wyAsset, i) { return __awaiter(_this, void 0, void 0, function () {
                                var schemaName, isOwner, error_12, minAmount, _a, wyNFTAsset, wyFTAsset;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            schemaName = schemaNames[i];
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, this._ownsAssetOnChain({
                                                    accountAddress: accountAddress,
                                                    proxyAddress: proxyAddress,
                                                    wyAsset: wyAsset,
                                                    schemaName: schemaName
                                                })];
                                        case 2:
                                            isOwner = _b.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_12 = _b.sent();
                                            // let it through for assets we don't support yet
                                            isOwner = true;
                                            return [3 /*break*/, 4];
                                        case 4:
                                            if (!isOwner) {
                                                minAmount = 'quantity' in wyAsset
                                                    ? wyAsset.quantity
                                                    : 1;
                                                console.error("Failed on-chain ownership check: " + accountAddress + " on " + schemaName + ":", wyAsset);
                                                throw new Error("You don't own enough to do that (" + minAmount + " base units of " + wyAsset.address + (wyAsset.id ? (" token " + wyAsset.id) : '') + ")");
                                            }
                                            _a = schemaName;
                                            switch (_a) {
                                                case types_1.WyvernSchemaName.ERC721: return [3 /*break*/, 5];
                                                case types_1.WyvernSchemaName.ERC721v3: return [3 /*break*/, 5];
                                                case types_1.WyvernSchemaName.ERC1155: return [3 /*break*/, 5];
                                                case types_1.WyvernSchemaName.LegacyEnjin: return [3 /*break*/, 5];
                                                case types_1.WyvernSchemaName.ENSShortNameAuction: return [3 /*break*/, 5];
                                                case types_1.WyvernSchemaName.ERC20: return [3 /*break*/, 7];
                                            }
                                            return [3 /*break*/, 9];
                                        case 5:
                                            wyNFTAsset = wyAsset;
                                            return [4 /*yield*/, this.approveSemiOrNonFungibleToken({
                                                    tokenId: wyNFTAsset.id.toString(),
                                                    tokenAddress: wyNFTAsset.address,
                                                    accountAddress: accountAddress,
                                                    proxyAddress: proxyAddress,
                                                    schemaName: schemaName,
                                                    skipApproveAllIfTokenAddressIn: contractsWithApproveAll
                                                })];
                                        case 6: return [2 /*return*/, _b.sent()];
                                        case 7:
                                            wyFTAsset = wyAsset;
                                            if (contractsWithApproveAll.has(wyFTAsset.address)) {
                                                // Return null to indicate no tx occurred
                                                return [2 /*return*/, null];
                                            }
                                            contractsWithApproveAll.add(wyFTAsset.address);
                                            return [4 /*yield*/, this.approveFungibleToken({
                                                    tokenAddress: wyFTAsset.address,
                                                    accountAddress: accountAddress,
                                                    proxyAddress: proxyAddress
                                                })
                                                // For other assets, including contracts:
                                                // Send them to the user's proxy
                                                // if (where != WyvernAssetLocation.Proxy) {
                                                //   return this.transferOne({
                                                //     schemaName: schema.name,
                                                //     asset: wyAsset,
                                                //     isWyvernAsset: true,
                                                //     fromAddress: accountAddress,
                                                //     toAddress: proxy
                                                //   })
                                                // }
                                                // return true
                                            ];
                                        case 8: return [2 /*return*/, _b.sent()
                                            // For other assets, including contracts:
                                            // Send them to the user's proxy
                                            // if (where != WyvernAssetLocation.Proxy) {
                                            //   return this.transferOne({
                                            //     schemaName: schema.name,
                                            //     asset: wyAsset,
                                            //     isWyvernAsset: true,
                                            //     fromAddress: accountAddress,
                                            //     toAddress: proxy
                                            //   })
                                            // }
                                            // return true
                                        ];
                                        case 9: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    // Throws
    OpenSeaPort.prototype._buyOrderValidationAndApprovals = function (_a) {
        var order = _a.order, counterOrder = _a.counterOrder, accountAddress = _a.accountAddress;
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress, balance, minimumAmount, buyValid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tokenAddress = order.paymentToken;
                        if (!(tokenAddress != constants_1.NULL_ADDRESS)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getTokenBalance({ accountAddress: accountAddress, tokenAddress: tokenAddress })
                            /* NOTE: no buy-side auctions for now, so sell.saleKind === 0 */
                        ];
                    case 1:
                        balance = _b.sent();
                        minimumAmount = utils_1.makeBigNumber(order.basePrice);
                        if (!counterOrder) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._getRequiredAmountForTakingSellOrder(counterOrder)];
                    case 2:
                        minimumAmount = _b.sent();
                        _b.label = 3;
                    case 3:
                        // Check WETH balance
                        if (balance.toNumber() < minimumAmount.toNumber()) {
                            if (tokenAddress == WyvernSchemas.tokens[this._networkName].canonicalWrappedEther.address) {
                                throw new Error('Insufficient balance. You may need to wrap Ether.');
                            }
                            else {
                                throw new Error('Insufficient balance.');
                            }
                        }
                        // Check token approval
                        // This can be done at a higher level to show UI
                        return [4 /*yield*/, this.approveFungibleToken({ accountAddress: accountAddress, tokenAddress: tokenAddress, minimumAmount: minimumAmount })];
                    case 4:
                        // Check token approval
                        // This can be done at a higher level to show UI
                        _b.sent();
                        _b.label = 5;
                    case 5: return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernExchange.validateOrderParameters_.callAsync([order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken], [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt], order.feeMethod, order.side, order.saleKind, order.howToCall, order.calldata, order.replacementPattern, order.staticExtradata, { from: accountAddress })];
                    case 6:
                        buyValid = _b.sent();
                        if (!buyValid) {
                            console.error(order);
                            throw new Error("Failed to validate buy order parameters. Make sure you're on the right network!");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Check if an account, or its proxy, owns an asset on-chain
     * @param accountAddress Account address for the wallet
     * @param proxyAddress Proxy address for the account
     * @param wyAsset asset to check. If fungible, the `quantity` attribute will be the minimum amount to own
     * @param schemaName WyvernSchemaName for the asset
     */
    OpenSeaPort.prototype._ownsAssetOnChain = function (_a) {
        var accountAddress = _a.accountAddress, proxyAddress = _a.proxyAddress, wyAsset = _a.wyAsset, schemaName = _a.schemaName;
        return __awaiter(this, void 0, void 0, function () {
            var asset, minAmount, accountBalance, _b, proxyBalance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        asset = {
                            tokenId: wyAsset.id || null,
                            tokenAddress: wyAsset.address,
                            schemaName: schemaName
                        };
                        minAmount = new bignumber_js_1.BigNumber('quantity' in wyAsset
                            ? wyAsset.quantity
                            : 1);
                        return [4 /*yield*/, this.getAssetBalance({ accountAddress: accountAddress, asset: asset })];
                    case 1:
                        accountBalance = _c.sent();
                        if (accountBalance.greaterThanOrEqualTo(minAmount)) {
                            return [2 /*return*/, true];
                        }
                        _b = proxyAddress;
                        if (_b) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._getProxy(accountAddress)];
                    case 2:
                        _b = (_c.sent());
                        _c.label = 3;
                    case 3:
                        proxyAddress = _b;
                        if (!proxyAddress) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getAssetBalance({ accountAddress: proxyAddress, asset: asset })];
                    case 4:
                        proxyBalance = _c.sent();
                        if (proxyBalance.greaterThanOrEqualTo(minAmount)) {
                            return [2 /*return*/, true];
                        }
                        _c.label = 5;
                    case 5: return [2 /*return*/, false];
                }
            });
        });
    };
    OpenSeaPort.prototype._getBuyFeeParameters = function (totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, sellOrder) {
        this._validateFees(totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints);
        var makerRelayerFee;
        var takerRelayerFee;
        if (sellOrder) {
            // Use the sell order's fees to ensure compatiblity and force the order
            // to only be acceptable by the sell order maker.
            // Swap maker/taker depending on whether it's an English auction (taker)
            // TODO add extraBountyBasisPoints when making bidder bounties
            makerRelayerFee = sellOrder.waitingForBestCounterOrder
                ? utils_1.makeBigNumber(sellOrder.makerRelayerFee)
                : utils_1.makeBigNumber(sellOrder.takerRelayerFee);
            takerRelayerFee = sellOrder.waitingForBestCounterOrder
                ? utils_1.makeBigNumber(sellOrder.takerRelayerFee)
                : utils_1.makeBigNumber(sellOrder.makerRelayerFee);
        }
        else {
            makerRelayerFee = utils_1.makeBigNumber(totalBuyerFeeBasisPoints);
            takerRelayerFee = utils_1.makeBigNumber(totalSellerFeeBasisPoints);
        }
        return {
            makerRelayerFee: makerRelayerFee,
            takerRelayerFee: takerRelayerFee,
            makerProtocolFee: utils_1.makeBigNumber(0),
            takerProtocolFee: utils_1.makeBigNumber(0),
            makerReferrerFee: utils_1.makeBigNumber(0),
            feeRecipient: constants_1.OPENSEA_FEE_RECIPIENT,
            feeMethod: types_1.FeeMethod.SplitFee
        };
    };
    OpenSeaPort.prototype._getSellFeeParameters = function (totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints, waitForHighestBid, sellerBountyBasisPoints) {
        if (sellerBountyBasisPoints === void 0) { sellerBountyBasisPoints = 0; }
        this._validateFees(totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints);
        // Use buyer as the maker when it's an English auction, so Wyvern sets prices correctly
        var feeRecipient = waitForHighestBid
            ? constants_1.NULL_ADDRESS
            : constants_1.OPENSEA_FEE_RECIPIENT;
        // Swap maker/taker fees when it's an English auction,
        // since these sell orders are takers not makers
        var makerRelayerFee = waitForHighestBid
            ? utils_1.makeBigNumber(totalBuyerFeeBasisPoints)
            : utils_1.makeBigNumber(totalSellerFeeBasisPoints);
        var takerRelayerFee = waitForHighestBid
            ? utils_1.makeBigNumber(totalSellerFeeBasisPoints)
            : utils_1.makeBigNumber(totalBuyerFeeBasisPoints);
        return {
            makerRelayerFee: makerRelayerFee,
            takerRelayerFee: takerRelayerFee,
            makerProtocolFee: utils_1.makeBigNumber(0),
            takerProtocolFee: utils_1.makeBigNumber(0),
            makerReferrerFee: utils_1.makeBigNumber(sellerBountyBasisPoints),
            feeRecipient: feeRecipient,
            feeMethod: types_1.FeeMethod.SplitFee
        };
    };
    /**
     * Validate fee parameters
     * @param totalBuyerFeeBasisPoints Total buyer fees
     * @param totalSellerFeeBasisPoints Total seller fees
     */
    OpenSeaPort.prototype._validateFees = function (totalBuyerFeeBasisPoints, totalSellerFeeBasisPoints) {
        var maxFeePercent = constants_1.INVERSE_BASIS_POINT / 100;
        if (totalBuyerFeeBasisPoints > constants_1.INVERSE_BASIS_POINT
            || totalSellerFeeBasisPoints > constants_1.INVERSE_BASIS_POINT) {
            throw new Error("Invalid buyer/seller fees: must be less than " + maxFeePercent + "%");
        }
        if (totalBuyerFeeBasisPoints < 0
            || totalSellerFeeBasisPoints < 0) {
            throw new Error("Invalid buyer/seller fees: must be at least 0%");
        }
    };
    /**
     * Get the listing and expiration time parameters for a new order
     * @param expirationTimestamp Timestamp to expire the order (in seconds), or 0 for non-expiring
     * @param listingTimestamp Timestamp to start the order (in seconds), or undefined to start it now
     * @param waitingForBestCounterOrder Whether this order should be hidden until the best match is found
     */
    OpenSeaPort.prototype._getTimeParameters = function (expirationTimestamp, listingTimestamp, waitingForBestCounterOrder) {
        if (waitingForBestCounterOrder === void 0) { waitingForBestCounterOrder = false; }
        // Validation
        var minExpirationTimestamp = Math.round(Date.now() / 1000 + constants_1.MIN_EXPIRATION_SECONDS);
        var minListingTimestamp = Math.round(Date.now() / 1000);
        if (expirationTimestamp != 0 && expirationTimestamp < minExpirationTimestamp) {
            throw new Error("Expiration time must be at least " + constants_1.MIN_EXPIRATION_SECONDS + " seconds from now, or zero (non-expiring).");
        }
        if (listingTimestamp && listingTimestamp < minListingTimestamp) {
            throw new Error('Listing time cannot be in the past.');
        }
        if (listingTimestamp && expirationTimestamp != 0 && listingTimestamp >= expirationTimestamp) {
            throw new Error('Listing time must be before the expiration time.');
        }
        if (waitingForBestCounterOrder && expirationTimestamp == 0) {
            throw new Error('English auctions must have an expiration time.');
        }
        if (waitingForBestCounterOrder && listingTimestamp) {
            throw new Error("Cannot schedule an English auction for the future.");
        }
        if (parseInt(expirationTimestamp.toString()) != expirationTimestamp) {
            throw new Error("Expiration timestamp must be a whole number of seconds");
        }
        if (waitingForBestCounterOrder) {
            listingTimestamp = expirationTimestamp;
            // Expire one week from now, to ensure server can match it
            // Later, this will expire closer to the listingTime
            expirationTimestamp = expirationTimestamp + constants_1.ORDER_MATCHING_LATENCY_SECONDS;
        }
        else {
            // Small offset to account for latency
            listingTimestamp = listingTimestamp || Math.round(Date.now() / 1000 - 100);
        }
        return {
            listingTime: utils_1.makeBigNumber(listingTimestamp),
            expirationTime: utils_1.makeBigNumber(expirationTimestamp),
        };
    };
    /**
     * Compute the `basePrice` and `extra` parameters to be used to price an order.
     * Also validates the expiration time and auction type.
     * @param tokenAddress Address of the ERC-20 token to use for trading.
     * Use the null address for ETH
     * @param expirationTime When the auction expires, or 0 if never.
     * @param startAmount The base value for the order, in the token's main units (e.g. ETH instead of wei)
     * @param endAmount The end value for the order, in the token's main units (e.g. ETH instead of wei). If unspecified, the order's `extra` attribute will be 0
     */
    OpenSeaPort.prototype._getPriceParameters = function (orderSide, tokenAddress, expirationTime, startAmount, endAmount, waitingForBestCounterOrder, englishAuctionReservePrice) {
        if (waitingForBestCounterOrder === void 0) { waitingForBestCounterOrder = false; }
        return __awaiter(this, void 0, void 0, function () {
            var priceDiff, paymentToken, isEther, tokens, token, basePrice, extra, reservePrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        priceDiff = endAmount != null
                            ? startAmount - endAmount
                            : 0;
                        paymentToken = tokenAddress.toLowerCase();
                        isEther = tokenAddress == constants_1.NULL_ADDRESS;
                        return [4 /*yield*/, this.api.getPaymentTokens({ address: paymentToken })];
                    case 1:
                        tokens = (_a.sent()).tokens;
                        token = tokens[0];
                        // Validation
                        if (isNaN(startAmount) || startAmount == null || startAmount < 0) {
                            throw new Error("Starting price must be a number >= 0");
                        }
                        if (!isEther && !token) {
                            throw new Error("No ERC-20 token found for '" + paymentToken + "'");
                        }
                        if (isEther && waitingForBestCounterOrder) {
                            throw new Error("English auctions must use wrapped ETH or an ERC-20 token.");
                        }
                        if (isEther && orderSide === types_1.OrderSide.Buy) {
                            throw new Error("Offers must use wrapped ETH or an ERC-20 token.");
                        }
                        if (priceDiff < 0) {
                            throw new Error('End price must be less than or equal to the start price.');
                        }
                        if (priceDiff > 0 && expirationTime == 0) {
                            throw new Error('Expiration time must be set if order will change in price.');
                        }
                        if (englishAuctionReservePrice && !waitingForBestCounterOrder) {
                            throw new Error('Reserve prices may only be set on English auctions.');
                        }
                        if (englishAuctionReservePrice && (englishAuctionReservePrice < startAmount)) {
                            throw new Error('Reserve price must be greater than or equal to the start amount.');
                        }
                        basePrice = isEther
                            ? utils_1.makeBigNumber(this.web3.toWei(startAmount, 'ether')).round()
                            : wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(startAmount), token.decimals);
                        extra = isEther
                            ? utils_1.makeBigNumber(this.web3.toWei(priceDiff, 'ether')).round()
                            : wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(priceDiff), token.decimals);
                        reservePrice = englishAuctionReservePrice
                            ? isEther
                                ? utils_1.makeBigNumber(this.web3.toWei(englishAuctionReservePrice, 'ether')).round()
                                : wyvern_js_1.WyvernProtocol.toBaseUnitAmount(utils_1.makeBigNumber(englishAuctionReservePrice), token.decimals)
                            : undefined;
                        return [2 /*return*/, { basePrice: basePrice, extra: extra, paymentToken: paymentToken, reservePrice: reservePrice }];
                }
            });
        });
    };
    OpenSeaPort.prototype._getMetadata = function (order, referrerAddress) {
        var referrer = referrerAddress || order.metadata.referrerAddress;
        if (referrer && ethereumjs_util_1.isValidAddress(referrer)) {
            return referrer;
        }
        return undefined;
    };
    OpenSeaPort.prototype._atomicMatch = function (_a) {
        var buy = _a.buy, sell = _a.sell, accountAddress = _a.accountAddress, _b = _a.metadata, metadata = _b === void 0 ? constants_1.NULL_BLOCK_HASH : _b;
        return __awaiter(this, void 0, void 0, function () {
            var value, shouldValidateBuy, shouldValidateSell, txHash, txnData, args, gasEstimate, error_13, error_14;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        shouldValidateBuy = true;
                        shouldValidateSell = true;
                        if (!(sell.maker.toLowerCase() == accountAddress.toLowerCase())) return [3 /*break*/, 2];
                        // USER IS THE SELLER, only validate the buy order
                        return [4 /*yield*/, this._sellOrderValidationAndApprovals({ order: sell, accountAddress: accountAddress })];
                    case 1:
                        // USER IS THE SELLER, only validate the buy order
                        _c.sent();
                        shouldValidateSell = false;
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(buy.maker.toLowerCase() == accountAddress.toLowerCase())) return [3 /*break*/, 6];
                        // USER IS THE BUYER, only validate the sell order
                        return [4 /*yield*/, this._buyOrderValidationAndApprovals({ order: buy, counterOrder: sell, accountAddress: accountAddress })];
                    case 3:
                        // USER IS THE BUYER, only validate the sell order
                        _c.sent();
                        shouldValidateBuy = false;
                        if (!(buy.paymentToken == constants_1.NULL_ADDRESS)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._getRequiredAmountForTakingSellOrder(sell)];
                    case 4:
                        value = _c.sent();
                        _c.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6: return [4 /*yield*/, this._validateMatch({ buy: buy, sell: sell, accountAddress: accountAddress, shouldValidateBuy: shouldValidateBuy, shouldValidateSell: shouldValidateSell })];
                    case 7:
                        _c.sent();
                        this._dispatch(types_1.EventType.MatchOrders, { buy: buy, sell: sell, accountAddress: accountAddress, matchMetadata: metadata });
                        txnData = { from: accountAddress, value: value };
                        args = [
                            [buy.exchange, buy.maker, buy.taker, buy.feeRecipient, buy.target,
                                buy.staticTarget, buy.paymentToken, sell.exchange, sell.maker, sell.taker, sell.feeRecipient, sell.target, sell.staticTarget, sell.paymentToken],
                            [buy.makerRelayerFee, buy.takerRelayerFee, buy.makerProtocolFee, buy.takerProtocolFee, buy.basePrice, buy.extra, buy.listingTime, buy.expirationTime, buy.salt, sell.makerRelayerFee, sell.takerRelayerFee, sell.makerProtocolFee, sell.takerProtocolFee, sell.basePrice, sell.extra, sell.listingTime, sell.expirationTime, sell.salt],
                            [buy.feeMethod, buy.side, buy.saleKind, buy.howToCall, sell.feeMethod, sell.side, sell.saleKind, sell.howToCall],
                            buy.calldata,
                            sell.calldata,
                            buy.replacementPattern,
                            sell.replacementPattern,
                            buy.staticExtradata,
                            sell.staticExtradata,
                            [
                                buy.v || 0,
                                sell.v || 0
                            ],
                            [
                                buy.r || constants_1.NULL_BLOCK_HASH,
                                buy.s || constants_1.NULL_BLOCK_HASH,
                                sell.r || constants_1.NULL_BLOCK_HASH,
                                sell.s || constants_1.NULL_BLOCK_HASH,
                                metadata
                            ]
                        ];
                        _c.label = 8;
                    case 8:
                        _c.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, this._wyvernProtocolReadOnly.wyvernExchange.atomicMatch_.estimateGasAsync(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], txnData)];
                    case 9:
                        gasEstimate = _c.sent();
                        txnData.gas = this._correctGasAmount(gasEstimate);
                        return [3 /*break*/, 11];
                    case 10:
                        error_13 = _c.sent();
                        console.error("Failed atomic match with args: ", args, error_13);
                        throw new Error("Oops, the Ethereum network rejected this transaction :( The OpenSea devs have been alerted, but this problem is typically due an item being locked or untransferrable. The exact error was \"" + error_13.message.substr(0, debugging_1.MAX_ERROR_LENGTH) + "...\"");
                    case 11:
                        _c.trys.push([11, 13, , 14]);
                        this.logger("Fulfilling order with gas set to " + txnData.gas);
                        return [4 /*yield*/, this._wyvernProtocol.wyvernExchange.atomicMatch_.sendTransactionAsync(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], txnData)];
                    case 12:
                        txHash = _c.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        error_14 = _c.sent();
                        console.error(error_14);
                        this._dispatch(types_1.EventType.TransactionDenied, { error: error_14, buy: buy, sell: sell, accountAddress: accountAddress, matchMetadata: metadata });
                        throw new Error("Failed to authorize transaction: \"" + (error_14.message
                            ? error_14.message
                            : 'user denied') + "...\"");
                    case 14: return [2 /*return*/, txHash];
                }
            });
        });
    };
    OpenSeaPort.prototype._getRequiredAmountForTakingSellOrder = function (sell) {
        return __awaiter(this, void 0, void 0, function () {
            var currentPrice, estimatedPrice, maxPrice, feePercentage, fee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentPrice(sell)];
                    case 1:
                        currentPrice = _a.sent();
                        estimatedPrice = utils_1.estimateCurrentPrice(sell);
                        maxPrice = bignumber_js_1.BigNumber.max(currentPrice, estimatedPrice);
                        // TODO Why is this not always a big number?
                        sell.takerRelayerFee = utils_1.makeBigNumber(sell.takerRelayerFee);
                        feePercentage = sell.takerRelayerFee.div(constants_1.INVERSE_BASIS_POINT);
                        fee = feePercentage.times(maxPrice);
                        return [2 /*return*/, fee.plus(maxPrice).ceil()];
                }
            });
        });
    };
    OpenSeaPort.prototype._authorizeOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var message, signerAddress, makerIsSmartContract, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = order.hash;
                        signerAddress = order.maker;
                        this._dispatch(types_1.EventType.CreateOrder, { order: order, accountAddress: order.maker });
                        return [4 /*yield*/, utils_1.isContractAddress(this.web3, signerAddress)];
                    case 1:
                        makerIsSmartContract = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 8]);
                        if (!makerIsSmartContract) return [3 /*break*/, 4];
                        // The web3 provider is probably a smart contract wallet.
                        // Fallback to on-chain approval.
                        return [4 /*yield*/, this._approveOrder(order)];
                    case 3:
                        // The web3 provider is probably a smart contract wallet.
                        // Fallback to on-chain approval.
                        _a.sent();
                        return [2 /*return*/, null];
                    case 4: return [4 /*yield*/, utils_1.personalSignAsync(this.web3, message, signerAddress)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_15 = _a.sent();
                        this._dispatch(types_1.EventType.OrderDenied, { order: order, accountAddress: signerAddress });
                        throw error_15;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    OpenSeaPort.prototype._getSchema = function (schemaName) {
        var schemaName_ = schemaName || types_1.WyvernSchemaName.ERC721;
        var schema = WyvernSchemas.schemas[this._networkName].filter(function (s) { return s.name == schemaName_; })[0];
        if (!schema) {
            throw new Error("Trading for this asset (" + schemaName_ + ") is not yet supported. Please contact us or check back later!");
        }
        return schema;
    };
    OpenSeaPort.prototype._dispatch = function (event, data) {
        this._emitter.emit(event, data);
    };
    /**
     * Get the clients to use for a read call
     * @param retries current retry value
     */
    OpenSeaPort.prototype._getClientsForRead = function (retries) {
        if (retries === void 0) { retries = 1; }
        if (retries > 0) {
            // Use injected provider by default
            return {
                'web3': this.web3,
                'wyvernProtocol': this._wyvernProtocol
            };
        }
        else {
            // Use provided provider as fallback
            return {
                'web3': this.web3ReadOnly,
                'wyvernProtocol': this._wyvernProtocolReadOnly
            };
        }
    };
    OpenSeaPort.prototype._confirmTransaction = function (transactionHash, event, description, testForSuccess) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionEventData, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transactionEventData = { transactionHash: transactionHash, event: event };
                        this.logger("Transaction started: " + description);
                        if (!(transactionHash == constants_1.NULL_BLOCK_HASH)) return [3 /*break*/, 4];
                        // This was a smart contract wallet that doesn't know the transaction
                        this._dispatch(types_1.EventType.TransactionCreated, { event: event });
                        if (!!testForSuccess) return [3 /*break*/, 2];
                        // Wait if test not implemented
                        this.logger("Unknown action, waiting 1 minute: " + description);
                        return [4 /*yield*/, utils_1.delay(60 * 1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this._pollCallbackForConfirmation(event, description, testForSuccess)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        this._dispatch(types_1.EventType.TransactionCreated, transactionEventData);
                        return [4 /*yield*/, utils_1.confirmTransaction(this.web3, transactionHash)];
                    case 5:
                        _a.sent();
                        this.logger("Transaction succeeded: " + description);
                        this._dispatch(types_1.EventType.TransactionConfirmed, transactionEventData);
                        return [3 /*break*/, 7];
                    case 6:
                        error_16 = _a.sent();
                        this.logger("Transaction failed: " + description);
                        this._dispatch(types_1.EventType.TransactionFailed, __assign(__assign({}, transactionEventData), { error: error_16 }));
                        throw error_16;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OpenSeaPort.prototype._pollCallbackForConfirmation = function (event, description, testForSuccess) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var initialRetries, testResolve;
                        var _this = this;
                        return __generator(this, function (_a) {
                            initialRetries = 60;
                            testResolve = function (retries) { return __awaiter(_this, void 0, void 0, function () {
                                var wasSuccessful;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, testForSuccess()];
                                        case 1:
                                            wasSuccessful = _a.sent();
                                            if (wasSuccessful) {
                                                this.logger("Transaction succeeded: " + description);
                                                this._dispatch(types_1.EventType.TransactionConfirmed, { event: event });
                                                return [2 /*return*/, resolve()];
                                            }
                                            else if (retries <= 0) {
                                                return [2 /*return*/, reject()];
                                            }
                                            if (retries % 10 == 0) {
                                                this.logger("Tested transaction " + (initialRetries - retries + 1) + " times: " + description);
                                            }
                                            return [4 /*yield*/, utils_1.delay(5000)];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/, testResolve(retries - 1)];
                                    }
                                });
                            }); };
                            return [2 /*return*/, testResolve(initialRetries)];
                        });
                    }); })];
            });
        });
    };
    return OpenSeaPort;
}());
exports.OpenSeaPort = OpenSeaPort;
//# sourceMappingURL=seaport.js.map

/***/ }),

/***/ 95356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetEventType = exports.AuctionType = exports.WyvernAssetLocation = exports.TokenStandardVersion = exports.WyvernSchemaName = exports.AssetContractType = exports.SaleKind = exports.FeeMethod = exports.OrderSide = exports.EventType = exports.HowToCall = exports.Network = void 0;
var types_1 = __webpack_require__(26126);
Object.defineProperty(exports, "Network", ({ enumerable: true, get: function () { return types_1.Network; } }));
Object.defineProperty(exports, "HowToCall", ({ enumerable: true, get: function () { return types_1.HowToCall; } }));
/**
 * Events emitted by the SDK. There are five types:
 * 1. Transaction events, which tell you when a new transaction was
 *    created, confirmed, denied, or failed.
 * 2. pre-transaction events, which are named (like "WrapEth") and indicate
 *    that Web3 is asking for a signature on a transaction that needs to occur before
 *    an order is made or fulfilled. This includes approval events and account
 *    initialization.
 * 3. Basic actions: matching, cancelling, and creating orders.
 *    The "CreateOrder" event fires when a signature is being prompted
 *    to create an off-chain order. The "OrderDenied" event fires when a signature
 *    request is denied by the user.
 * 4. The "TransferAll" event, which fires when a user is about to directly
 *    transfer one or more assets to another account
 */
var EventType;
(function (EventType) {
    // Transactions and signature requests
    EventType["TransactionCreated"] = "TransactionCreated";
    EventType["TransactionConfirmed"] = "TransactionConfirmed";
    EventType["TransactionDenied"] = "TransactionDenied";
    EventType["TransactionFailed"] = "TransactionFailed";
    // Pre-transaction events
    EventType["InitializeAccount"] = "InitializeAccount";
    EventType["WrapEth"] = "WrapEth";
    EventType["UnwrapWeth"] = "UnwrapWeth";
    EventType["ApproveCurrency"] = "ApproveCurrency";
    EventType["ApproveAsset"] = "ApproveAsset";
    EventType["ApproveAllAssets"] = "ApproveAllAssets";
    EventType["UnapproveCurrency"] = "UnapproveCurrency";
    // Basic actions: matching orders, creating orders, and cancelling orders
    EventType["MatchOrders"] = "MatchOrders";
    EventType["CancelOrder"] = "CancelOrder";
    EventType["ApproveOrder"] = "ApproveOrder";
    EventType["CreateOrder"] = "CreateOrder";
    // When the signature request for an order is denied
    EventType["OrderDenied"] = "OrderDenied";
    // When transferring one or more assets
    EventType["TransferAll"] = "TransferAll";
    EventType["TransferOne"] = "TransferOne";
    // When wrapping or unwrapping NFTs
    EventType["WrapAssets"] = "WrapAssets";
    EventType["UnwrapAssets"] = "UnwrapAssets";
    EventType["LiquidateAssets"] = "LiquidateAssets";
    EventType["PurchaseAssets"] = "PurchaseAssets";
})(EventType = exports.EventType || (exports.EventType = {}));
/**
 * Wyvern order side: buy or sell.
 */
var OrderSide;
(function (OrderSide) {
    OrderSide[OrderSide["Buy"] = 0] = "Buy";
    OrderSide[OrderSide["Sell"] = 1] = "Sell";
})(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
/**
 * Wyvern fee method
 * ProtocolFee: Charge maker fee to seller and charge taker fee to buyer.
 * SplitFee: Maker fees are deducted from the token amount that the maker receives. Taker fees are extra tokens that must be paid by the taker.
 */
var FeeMethod;
(function (FeeMethod) {
    FeeMethod[FeeMethod["ProtocolFee"] = 0] = "ProtocolFee";
    FeeMethod[FeeMethod["SplitFee"] = 1] = "SplitFee";
})(FeeMethod = exports.FeeMethod || (exports.FeeMethod = {}));
/**
 * Wyvern: type of sale. Fixed or Dutch auction
 * Note: not imported from wyvern.js because it uses
 * EnglishAuction as 1 and DutchAuction as 2
 */
var SaleKind;
(function (SaleKind) {
    SaleKind[SaleKind["FixedPrice"] = 0] = "FixedPrice";
    SaleKind[SaleKind["DutchAuction"] = 1] = "DutchAuction";
})(SaleKind = exports.SaleKind || (exports.SaleKind = {}));
/**
 * Types of asset contracts
 * Given by the asset_contract_type in the OpenSea API
 */
var AssetContractType;
(function (AssetContractType) {
    AssetContractType["Fungible"] = "fungible";
    AssetContractType["SemiFungible"] = "semi-fungible";
    AssetContractType["NonFungible"] = "non-fungible";
    AssetContractType["Unknown"] = "unknown";
})(AssetContractType = exports.AssetContractType || (exports.AssetContractType = {}));
// Wyvern Schemas (see https://github.com/ProjectOpenSea/wyvern-schemas)
var WyvernSchemaName;
(function (WyvernSchemaName) {
    WyvernSchemaName["ERC20"] = "ERC20";
    WyvernSchemaName["ERC721"] = "ERC721";
    WyvernSchemaName["ERC721v3"] = "ERC721v3";
    WyvernSchemaName["ERC1155"] = "ERC1155";
    WyvernSchemaName["LegacyEnjin"] = "Enjin";
    WyvernSchemaName["ENSShortNameAuction"] = "ENSShortNameAuction";
    // CryptoPunks = 'CryptoPunks'
})(WyvernSchemaName = exports.WyvernSchemaName || (exports.WyvernSchemaName = {}));
/**
 * The NFT version that this contract uses.
 * ERC721 versions are:
 * 1.0: CryptoKitties and early 721s, which lack approve-all and
 *      have problems calling `transferFrom` from the owner's account.
 * 2.0: CryptoSaga and others that lack `transferFrom` and have
 *      `takeOwnership` instead
 * 3.0: The current OpenZeppelin standard:
 *      https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721.sol
 * Special cases:
 * locked: When the transfer function has been locked by the dev
 */
var TokenStandardVersion;
(function (TokenStandardVersion) {
    TokenStandardVersion["Unsupported"] = "unsupported";
    TokenStandardVersion["Locked"] = "locked";
    TokenStandardVersion["Enjin"] = "1155-1.0";
    TokenStandardVersion["ERC721v1"] = "1.0";
    TokenStandardVersion["ERC721v2"] = "2.0";
    TokenStandardVersion["ERC721v3"] = "3.0";
})(TokenStandardVersion = exports.TokenStandardVersion || (exports.TokenStandardVersion = {}));
var WyvernAssetLocation;
(function (WyvernAssetLocation) {
    WyvernAssetLocation["Account"] = "account";
    WyvernAssetLocation["Proxy"] = "proxy";
    WyvernAssetLocation["Other"] = "other";
})(WyvernAssetLocation = exports.WyvernAssetLocation || (exports.WyvernAssetLocation = {}));
/**
 * Defines set of possible auctions types
 */
var AuctionType;
(function (AuctionType) {
    AuctionType["Dutch"] = "dutch";
    AuctionType["English"] = "english";
    AuctionType["MinPrice"] = "min_price";
})(AuctionType = exports.AuctionType || (exports.AuctionType = {}));
/**
 * Defines the possible types of asset events that can take place
 */
var AssetEventType;
(function (AssetEventType) {
    AssetEventType["AuctionCreated"] = "created";
    AssetEventType["AuctionSuccessful"] = "successful";
    AssetEventType["AuctionCancelled"] = "cancelled";
    AssetEventType["OfferEntered"] = "offer_entered";
    AssetEventType["BidEntered"] = "bid_entered";
    AssetEventType["BidWithdraw"] = "bid_withdraw";
    AssetEventType["AssetTransfer"] = "transfer";
    AssetEventType["AssetApprove"] = "approve";
    AssetEventType["CompositionCreated"] = "composition_created";
    AssetEventType["Custom"] = "custom";
    AssetEventType["Payout"] = "payout";
})(AssetEventType = exports.AssetEventType || (exports.AssetEventType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 21097:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeProxyCall = exports.encodeTransferCall = exports.encodeAtomicizedTransfer = exports.encodeDefaultCall = exports.encodeBuy = exports.encodeAtomicizedBuy = exports.encodeAtomicizedSell = exports.encodeSell = exports.encodeCall = exports.encodeReplacementPattern = exports.AbiType = void 0;
var bignumber_js_1 = __webpack_require__(73350);
var ethABI = __webpack_require__(60843);
var wyvern_js_1 = __webpack_require__(20544);
var types_1 = __webpack_require__(66395);
var wyvern_schemas_1 = __webpack_require__(97042);
Object.defineProperty(exports, "AbiType", ({ enumerable: true, get: function () { return wyvern_schemas_1.AbiType; } }));
var types_2 = __webpack_require__(95356);
var Proxy_1 = __webpack_require__(62959);
exports.encodeReplacementPattern = wyvern_js_1.WyvernProtocol.encodeReplacementPattern;
var encodeCall = function (abi, parameters) {
    var inputTypes = abi.inputs.map(function (i) { return i.type; });
    return '0x' + Buffer.concat([
        ethABI.methodID(abi.name, inputTypes),
        ethABI.rawEncode(inputTypes, parameters),
    ]).toString('hex');
};
exports.encodeCall = encodeCall;
var encodeSell = function (schema, asset, address) {
    var transfer = schema.functions.transfer(asset);
    return {
        target: transfer.target,
        calldata: exports.encodeDefaultCall(transfer, address),
        replacementPattern: exports.encodeReplacementPattern(transfer),
    };
};
exports.encodeSell = encodeSell;
var encodeAtomicizedSell = function (schemas, assets, address, wyvernProtocol, networkName) {
    var atomicizer = wyvernProtocol.wyvernAtomicizer;
    var _a = encodeAtomicizedCalldata(atomicizer, schemas, assets, address, types_2.OrderSide.Sell), atomicizedCalldata = _a.atomicizedCalldata, atomicizedReplacementPattern = _a.atomicizedReplacementPattern;
    return {
        calldata: atomicizedCalldata,
        replacementPattern: atomicizedReplacementPattern,
        target: wyvern_js_1.WyvernProtocol.getAtomicizerContractAddress(networkName)
    };
};
exports.encodeAtomicizedSell = encodeAtomicizedSell;
var encodeAtomicizedBuy = function (schemas, assets, address, wyvernProtocol, networkName) {
    var atomicizer = wyvernProtocol.wyvernAtomicizer;
    var _a = encodeAtomicizedCalldata(atomicizer, schemas, assets, address, types_2.OrderSide.Buy), atomicizedCalldata = _a.atomicizedCalldata, atomicizedReplacementPattern = _a.atomicizedReplacementPattern;
    return {
        calldata: atomicizedCalldata,
        replacementPattern: atomicizedReplacementPattern,
        target: wyvern_js_1.WyvernProtocol.getAtomicizerContractAddress(networkName)
    };
};
exports.encodeAtomicizedBuy = encodeAtomicizedBuy;
var encodeBuy = function (schema, asset, address) {
    var transfer = schema.functions.transfer(asset);
    var replaceables = transfer.inputs.filter(function (i) { return i.kind === types_1.FunctionInputKind.Replaceable; });
    var ownerInputs = transfer.inputs.filter(function (i) { return i.kind === types_1.FunctionInputKind.Owner; });
    // Validate
    if (replaceables.length !== 1) {
        throw new Error('Only 1 input can match transfer destination, but instead ' + replaceables.length + ' did');
    }
    // Compute calldata
    var parameters = transfer.inputs.map(function (input) {
        switch (input.kind) {
            case types_1.FunctionInputKind.Replaceable:
                return address;
            case types_1.FunctionInputKind.Owner:
                return wyvern_js_1.WyvernProtocol.generateDefaultValue(input.type);
            default:
                try {
                    return input.value.toString();
                }
                catch (e) {
                    console.error(schema);
                    console.error(asset);
                    throw e;
                }
        }
    });
    var calldata = exports.encodeCall(transfer, parameters);
    // Compute replacement pattern
    var replacementPattern = '0x';
    if (ownerInputs.length > 0) {
        replacementPattern = exports.encodeReplacementPattern(transfer, types_1.FunctionInputKind.Owner);
    }
    return {
        target: transfer.target,
        calldata: calldata,
        replacementPattern: replacementPattern,
    };
};
exports.encodeBuy = encodeBuy;
var encodeDefaultCall = function (abi, address) {
    var parameters = abi.inputs.map(function (input) {
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
exports.encodeDefaultCall = encodeDefaultCall;
/**
 * Encode the atomicized transfer of many assets
 * @param schema Wyvern Schema for the assets
 * @param assets List of assets to transfer
 * @param from Current address owning the assets
 * @param to Destination address
 * @param atomicizer Wyvern Atomicizer instance
 */
function encodeAtomicizedTransfer(schemas, assets, from, to, wyvernProtocol, networkName) {
    var atomicizer = wyvernProtocol.wyvernAtomicizer;
    var transactions = assets.map(function (asset, i) {
        var schema = schemas[i];
        var transfer = schema.functions.transfer(asset);
        var calldata = encodeTransferCall(transfer, from, to);
        return {
            calldata: calldata,
            address: transfer.target,
            value: new bignumber_js_1.BigNumber(0),
        };
    });
    var atomicizedCalldata = atomicizer.atomicize.getABIEncodedTransactionData(transactions.map(function (t) { return t.address; }), transactions.map(function (t) { return t.value; }), transactions.map(function (t) { return new bignumber_js_1.BigNumber((t.calldata.length - 2) / 2); }), // subtract 2 for '0x', divide by 2 for hex
    transactions.map(function (t) { return t.calldata; }).reduce(function (x, current) { return x + current.slice(2); }, '0x'));
    return {
        calldata: atomicizedCalldata,
        target: wyvern_js_1.WyvernProtocol.getAtomicizerContractAddress(networkName)
    };
}
exports.encodeAtomicizedTransfer = encodeAtomicizedTransfer;
/**
 * Encode a transfer call for a Wyvern schema function
 * @param transferAbi Annotated Wyvern ABI
 * @param from From address
 * @param to To address
 */
function encodeTransferCall(transferAbi, from, to) {
    var parameters = transferAbi.inputs.map(function (input) {
        switch (input.kind) {
            case types_1.FunctionInputKind.Replaceable:
                return to;
            case types_1.FunctionInputKind.Owner:
                return from;
            case types_1.FunctionInputKind.Asset:
            default:
                if (input.value == null) {
                    throw new Error("Unsupported function input kind: " + input.kind);
                }
                return input.value;
        }
    });
    return exports.encodeCall(transferAbi, parameters);
}
exports.encodeTransferCall = encodeTransferCall;
/**
 * Encode a call to a user's proxy contract
 * @param address The address for the proxy to call
 * @param howToCall How to call the addres
 * @param calldata The data to use in the call
 * @param shouldAssert Whether to assert success in the proxy call
 */
function encodeProxyCall(address, howToCall, calldata, shouldAssert) {
    if (shouldAssert === void 0) { shouldAssert = true; }
    var abi = shouldAssert ? Proxy_1.proxyAssertABI : Proxy_1.proxyABI;
    return exports.encodeCall(abi, [address, howToCall, Buffer.from(calldata.slice(2), 'hex')]);
}
exports.encodeProxyCall = encodeProxyCall;
// Helpers for atomicizer
function encodeAtomicizedCalldata(atomicizer, schemas, assets, address, side) {
    var encoder = side === types_2.OrderSide.Sell ? exports.encodeSell : exports.encodeBuy;
    try {
        var transactions = assets.map(function (asset, i) {
            var schema = schemas[i];
            var _a = encoder(schema, asset, address), target = _a.target, calldata = _a.calldata;
            return {
                calldata: calldata,
                abi: schema.functions.transfer(asset),
                address: target,
                value: new bignumber_js_1.BigNumber(0),
            };
        });
        var atomicizedCalldata = atomicizer.atomicize.getABIEncodedTransactionData(transactions.map(function (t) { return t.address; }), transactions.map(function (t) { return t.value; }), transactions.map(function (t) { return new bignumber_js_1.BigNumber((t.calldata.length - 2) / 2); }), // subtract 2 for '0x', divide by 2 for hex
        transactions.map(function (t) { return t.calldata; }).reduce(function (x, y) { return x + y.slice(2); }));
        var kind = side === types_2.OrderSide.Buy ? types_1.FunctionInputKind.Owner : undefined;
        var atomicizedReplacementPattern = wyvern_js_1.WyvernProtocol.encodeAtomicizedReplacementPattern(transactions.map(function (t) { return t.abi; }), kind);
        if (!atomicizedCalldata || !atomicizedReplacementPattern) {
            throw new Error("Invalid calldata: " + atomicizedCalldata + ", " + atomicizedReplacementPattern);
        }
        return {
            atomicizedCalldata: atomicizedCalldata,
            atomicizedReplacementPattern: atomicizedReplacementPattern
        };
    }
    catch (error) {
        console.error({ schemas: schemas, assets: assets, address: address, side: side });
        throw new Error("Failed to construct your order: likely something strange about this type of item. OpenSea has been notified. Please contact us in Discord! Original error: " + error);
    }
}
//# sourceMappingURL=schema.js.map

/***/ }),

/***/ 66545:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNonCompliantApprovalAddress = exports.onDeprecated = exports.validateAndFormatWalletAddress = exports.delay = exports.assignOrdersToSides = exports.getOrderHash = exports.getWyvernBundle = exports.getWyvernAsset = exports.estimateCurrentPrice = exports.getTransferFeeSettings = exports.getCurrentGasPrice = exports.estimateGas = exports.rawCall = exports.sendRawTransaction = exports.makeBigNumber = exports.isContractAddress = exports.personalSignAsync = exports.orderToJSON = exports.orderFromJSON = exports.tokenFromJSON = exports.collectionFromJSON = exports.assetContractFromJSON = exports.assetBundleFromJSON = exports.userFromJSON = exports.accountFromJSON = exports.transactionFromJSON = exports.assetEventFromJSON = exports.assetFromJSON = exports.confirmTransaction = exports.promisifyCall = exports.annotateERC20TransferABI = exports.annotateERC721TransferABI = exports.WyvernProtocol = void 0;
var bignumber_js_1 = __webpack_require__(73350);
var wyvern_js_1 = __webpack_require__(20544);
Object.defineProperty(exports, "WyvernProtocol", ({ enumerable: true, get: function () { return wyvern_js_1.WyvernProtocol; } }));
var ethUtil = __webpack_require__(95906);
var _ = __webpack_require__(39378);
var Web3 = __webpack_require__(69906);
var types_1 = __webpack_require__(66395);
var contracts_1 = __webpack_require__(98572);
var types_2 = __webpack_require__(95356);
var constants_1 = __webpack_require__(56947);
var Proxy_1 = __webpack_require__(62959);
var annotateERC721TransferABI = function (asset) { return ({
    "constant": false,
    "inputs": [
        {
            "name": "_to",
            "type": "address",
            "kind": types_1.FunctionInputKind.Replaceable
        },
        {
            "name": "_tokenId",
            "type": "uint256",
            "kind": types_1.FunctionInputKind.Asset,
            "value": asset.id
        }
    ],
    "target": asset.address,
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": types_1.StateMutability.Nonpayable,
    "type": Web3.AbiType.Function
}); };
exports.annotateERC721TransferABI = annotateERC721TransferABI;
var annotateERC20TransferABI = function (asset) { return ({
    "constant": false,
    "inputs": [
        {
            "name": "_to",
            "type": "address",
            "kind": types_1.FunctionInputKind.Replaceable
        },
        {
            "name": "_amount",
            "type": "uint256",
            "kind": types_1.FunctionInputKind.Count,
            "value": asset.quantity
        }
    ],
    "target": asset.address,
    "name": "transfer",
    "outputs": [
        {
            "name": "success",
            "type": "bool",
            "kind": types_1.FunctionOutputKind.Other
        }
    ],
    "payable": false,
    "stateMutability": types_1.StateMutability.Nonpayable,
    "type": Web3.AbiType.Function
}); };
exports.annotateERC20TransferABI = annotateERC20TransferABI;
var SCHEMA_NAME_TO_ASSET_CONTRACT_TYPE = (_a = {},
    _a[types_2.WyvernSchemaName.ERC721] = types_2.AssetContractType.NonFungible,
    _a[types_2.WyvernSchemaName.ERC721v3] = types_2.AssetContractType.NonFungible,
    _a[types_2.WyvernSchemaName.ERC1155] = types_2.AssetContractType.SemiFungible,
    _a[types_2.WyvernSchemaName.ERC20] = types_2.AssetContractType.Fungible,
    _a[types_2.WyvernSchemaName.LegacyEnjin] = types_2.AssetContractType.SemiFungible,
    _a[types_2.WyvernSchemaName.ENSShortNameAuction] = types_2.AssetContractType.NonFungible,
    _a);
// OTHER
var txCallbacks = {};
/**
 * Promisify a callback-syntax web3 function
 * @param inner callback function that accepts a Web3 callback function and passes
 * it to the Web3 function
 */
function promisify(inner) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    return inner(function (err, res) {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                })];
        });
    });
}
/**
 * Promisify a call a method on a contract,
 * handling Parity errors. Returns '0x' if error.
 * Note that if T is not "string", this may return a falsey
 * value when the contract doesn't support the method (e.g. `isApprovedForAll`).
 * @param callback An anonymous function that takes a web3 callback
 * and returns a Web3 Contract's call result, e.g. `c => erc721.ownerOf(3, c)`
 * @param onError callback when user denies transaction
 */
function promisifyCall(callback, onError) {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, promisify(callback)];
                case 1:
                    result = _a.sent();
                    if (result == '0x') {
                        // Geth compatibility
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, result];
                case 2:
                    error_1 = _a.sent();
                    // Probably method not found, and web3 is a Parity node
                    if (onError) {
                        onError(error_1);
                    }
                    else {
                        console.error(error_1);
                    }
                    return [2 /*return*/, undefined];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.promisifyCall = promisifyCall;
var track = function (web3, txHash, onFinalized) {
    if (txCallbacks[txHash]) {
        txCallbacks[txHash].push(onFinalized);
    }
    else {
        txCallbacks[txHash] = [onFinalized];
        var poll_1 = function () { return __awaiter(void 0, void 0, void 0, function () {
            var tx, receipt, status_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, promisify(function (c) { return web3.eth.getTransaction(txHash, c); })];
                    case 1:
                        tx = _a.sent();
                        if (!(tx && tx.blockHash && tx.blockHash !== constants_1.NULL_BLOCK_HASH)) return [3 /*break*/, 3];
                        return [4 /*yield*/, promisify(function (c) { return web3.eth.getTransactionReceipt(txHash, c); })];
                    case 2:
                        receipt = _a.sent();
                        if (!receipt) {
                            // Hack: assume success if no receipt
                            console.warn('No receipt found for ', txHash);
                        }
                        status_1 = receipt
                            ? parseInt((receipt.status || "0").toString()) == 1
                            : true;
                        txCallbacks[txHash].map(function (f) { return f(status_1); });
                        delete txCallbacks[txHash];
                        return [3 /*break*/, 4];
                    case 3:
                        setTimeout(poll_1, 1000);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        poll_1().catch();
    }
};
var confirmTransaction = function (web3, txHash) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                track(web3, txHash, function (didSucceed) {
                    if (didSucceed) {
                        resolve("Transaction complete!");
                    }
                    else {
                        reject(new Error("Transaction failed :( You might have already completed this action. See more on the mainnet at etherscan.io/tx/" + txHash));
                    }
                });
            })];
    });
}); };
exports.confirmTransaction = confirmTransaction;
var assetFromJSON = function (asset) {
    var isAnimated = asset.image_url && asset.image_url.endsWith('.gif');
    var isSvg = asset.image_url && asset.image_url.endsWith('.svg');
    var fromJSON = {
        tokenId: asset.token_id.toString(),
        tokenAddress: asset.asset_contract.address,
        name: asset.name,
        description: asset.description,
        owner: asset.owner,
        assetContract: exports.assetContractFromJSON(asset.asset_contract),
        collection: exports.collectionFromJSON(asset.collection),
        orders: asset.orders ? asset.orders.map(exports.orderFromJSON) : null,
        sellOrders: asset.sell_orders ? asset.sell_orders.map(exports.orderFromJSON) : null,
        buyOrders: asset.buy_orders ? asset.buy_orders.map(exports.orderFromJSON) : null,
        isPresale: asset.is_presale,
        // Don't use previews if it's a special image
        imageUrl: isAnimated || isSvg
            ? asset.image_url
            : (asset.image_preview_url || asset.image_url),
        imagePreviewUrl: asset.image_preview_url,
        imageUrlOriginal: asset.image_original_url,
        imageUrlThumbnail: asset.image_thumbnail_url,
        externalLink: asset.external_link,
        openseaLink: asset.permalink,
        traits: asset.traits,
        numSales: asset.num_sales,
        lastSale: asset.last_sale ? exports.assetEventFromJSON(asset.last_sale) : null,
        backgroundColor: asset.background_color ? "#" + asset.background_color : null,
        transferFee: asset.transfer_fee
            ? makeBigNumber(asset.transfer_fee)
            : null,
        transferFeePaymentToken: asset.transfer_fee_payment_token
            ? exports.tokenFromJSON(asset.transfer_fee_payment_token)
            : null,
    };
    // If orders were included, put them in sell/buy order groups
    if (fromJSON.orders && !fromJSON.sellOrders) {
        fromJSON.sellOrders = fromJSON.orders.filter(function (o) { return o.side == types_2.OrderSide.Sell; });
    }
    if (fromJSON.orders && !fromJSON.buyOrders) {
        fromJSON.buyOrders = fromJSON.orders.filter(function (o) { return o.side == types_2.OrderSide.Buy; });
    }
    return fromJSON;
};
exports.assetFromJSON = assetFromJSON;
var assetEventFromJSON = function (assetEvent) {
    return {
        eventType: assetEvent.event_type,
        eventTimestamp: assetEvent.event_timestamp,
        auctionType: assetEvent.auction_type,
        totalPrice: assetEvent.total_price,
        transaction: assetEvent.transaction ? exports.transactionFromJSON(assetEvent.transaction) : null,
        paymentToken: assetEvent.payment_token ? exports.tokenFromJSON(assetEvent.payment_token) : null,
    };
};
exports.assetEventFromJSON = assetEventFromJSON;
var transactionFromJSON = function (transaction) {
    return {
        fromAccount: exports.accountFromJSON(transaction.from_account),
        toAccount: exports.accountFromJSON(transaction.to_account),
        createdDate: new Date(transaction.created_date + "Z"),
        modifiedDate: new Date(transaction.modified_date + "Z"),
        transactionHash: transaction.transaction_hash,
        transactionIndex: transaction.transaction_index,
        blockNumber: transaction.block_number,
        blockHash: transaction.block_hash,
        timestamp: new Date(transaction.timestamp + "Z"),
    };
};
exports.transactionFromJSON = transactionFromJSON;
var accountFromJSON = function (account) {
    return {
        address: account.address,
        config: account.config,
        profileImgUrl: account.profile_img_url,
        user: account.user ? exports.userFromJSON(account.user) : null
    };
};
exports.accountFromJSON = accountFromJSON;
var userFromJSON = function (user) {
    return {
        username: user.username
    };
};
exports.userFromJSON = userFromJSON;
var assetBundleFromJSON = function (asset_bundle) {
    var fromJSON = {
        maker: asset_bundle.maker,
        assets: asset_bundle.assets.map(exports.assetFromJSON),
        assetContract: asset_bundle.asset_contract
            ? exports.assetContractFromJSON(asset_bundle.asset_contract)
            : undefined,
        name: asset_bundle.name,
        slug: asset_bundle.slug,
        description: asset_bundle.description,
        externalLink: asset_bundle.external_link,
        permalink: asset_bundle.permalink,
        sellOrders: asset_bundle.sell_orders ? asset_bundle.sell_orders.map(exports.orderFromJSON) : null
    };
    return fromJSON;
};
exports.assetBundleFromJSON = assetBundleFromJSON;
var assetContractFromJSON = function (asset_contract) {
    return {
        name: asset_contract.name,
        description: asset_contract.description,
        type: asset_contract.asset_contract_type,
        schemaName: asset_contract.schema_name,
        address: asset_contract.address,
        tokenSymbol: asset_contract.symbol,
        buyerFeeBasisPoints: +asset_contract.buyer_fee_basis_points,
        sellerFeeBasisPoints: +asset_contract.seller_fee_basis_points,
        openseaBuyerFeeBasisPoints: +asset_contract.opensea_buyer_fee_basis_points,
        openseaSellerFeeBasisPoints: +asset_contract.opensea_seller_fee_basis_points,
        devBuyerFeeBasisPoints: +asset_contract.dev_buyer_fee_basis_points,
        devSellerFeeBasisPoints: +asset_contract.dev_seller_fee_basis_points,
        imageUrl: asset_contract.image_url,
        externalLink: asset_contract.external_link,
        wikiLink: asset_contract.wiki_link,
    };
};
exports.assetContractFromJSON = assetContractFromJSON;
var collectionFromJSON = function (collection) {
    var createdDate = new Date(collection.created_date + "Z");
    return {
        createdDate: createdDate,
        name: collection.name,
        description: collection.description,
        slug: collection.slug,
        editors: collection.editors,
        hidden: collection.hidden,
        featured: collection.featured,
        featuredImageUrl: collection.featured_image_url,
        displayData: collection.display_data,
        paymentTokens: (collection.payment_tokens || []).map(exports.tokenFromJSON),
        openseaBuyerFeeBasisPoints: +collection.opensea_buyer_fee_basis_points,
        openseaSellerFeeBasisPoints: +collection.opensea_seller_fee_basis_points,
        devBuyerFeeBasisPoints: +collection.dev_buyer_fee_basis_points,
        devSellerFeeBasisPoints: +collection.dev_seller_fee_basis_points,
        payoutAddress: collection.payout_address,
        imageUrl: collection.image_url,
        largeImageUrl: collection.large_image_url,
        stats: collection.stats,
        traitStats: collection.traits,
        externalLink: collection.external_url,
        wikiLink: collection.wiki_url,
    };
};
exports.collectionFromJSON = collectionFromJSON;
var tokenFromJSON = function (token) {
    var fromJSON = {
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        address: token.address,
        imageUrl: token.image_url,
        ethPrice: token.eth_price,
        usdPrice: token.usd_price,
    };
    return fromJSON;
};
exports.tokenFromJSON = tokenFromJSON;
var orderFromJSON = function (order) {
    var createdDate = new Date(order.created_date + "Z");
    var fromJSON = {
        hash: order.order_hash || order.hash,
        cancelledOrFinalized: order.cancelled || order.finalized,
        markedInvalid: order.marked_invalid,
        metadata: order.metadata,
        quantity: new bignumber_js_1.default(order.quantity || 1),
        exchange: order.exchange,
        makerAccount: order.maker,
        takerAccount: order.taker,
        // Use string address to conform to Wyvern Order schema
        maker: order.maker.address,
        taker: order.taker.address,
        makerRelayerFee: new bignumber_js_1.default(order.maker_relayer_fee),
        takerRelayerFee: new bignumber_js_1.default(order.taker_relayer_fee),
        makerProtocolFee: new bignumber_js_1.default(order.maker_protocol_fee),
        takerProtocolFee: new bignumber_js_1.default(order.taker_protocol_fee),
        makerReferrerFee: new bignumber_js_1.default(order.maker_referrer_fee || 0),
        waitingForBestCounterOrder: order.fee_recipient.address == constants_1.NULL_ADDRESS,
        feeMethod: order.fee_method,
        feeRecipientAccount: order.fee_recipient,
        feeRecipient: order.fee_recipient.address,
        side: order.side,
        saleKind: order.sale_kind,
        target: order.target,
        howToCall: order.how_to_call,
        calldata: order.calldata,
        replacementPattern: order.replacement_pattern,
        staticTarget: order.static_target,
        staticExtradata: order.static_extradata,
        paymentToken: order.payment_token,
        basePrice: new bignumber_js_1.default(order.base_price),
        extra: new bignumber_js_1.default(order.extra),
        currentBounty: new bignumber_js_1.default(order.current_bounty || 0),
        currentPrice: new bignumber_js_1.default(order.current_price || 0),
        createdTime: new bignumber_js_1.default(Math.round(createdDate.getTime() / 1000)),
        listingTime: new bignumber_js_1.default(order.listing_time),
        expirationTime: new bignumber_js_1.default(order.expiration_time),
        salt: new bignumber_js_1.default(order.salt),
        v: parseInt(order.v),
        r: order.r,
        s: order.s,
        paymentTokenContract: order.payment_token_contract ? exports.tokenFromJSON(order.payment_token_contract) : undefined,
        asset: order.asset ? exports.assetFromJSON(order.asset) : undefined,
        assetBundle: order.asset_bundle ? exports.assetBundleFromJSON(order.asset_bundle) : undefined,
    };
    // Use client-side price calc, to account for buyer fee (not added by server) and latency
    fromJSON.currentPrice = estimateCurrentPrice(fromJSON);
    return fromJSON;
};
exports.orderFromJSON = orderFromJSON;
/**
 * Convert an order to JSON, hashing it as well if necessary
 * @param order order (hashed or unhashed)
 */
var orderToJSON = function (order) {
    var asJSON = {
        exchange: order.exchange.toLowerCase(),
        maker: order.maker.toLowerCase(),
        taker: order.taker.toLowerCase(),
        makerRelayerFee: order.makerRelayerFee.toString(),
        takerRelayerFee: order.takerRelayerFee.toString(),
        makerProtocolFee: order.makerProtocolFee.toString(),
        takerProtocolFee: order.takerProtocolFee.toString(),
        makerReferrerFee: order.makerReferrerFee.toString(),
        feeMethod: order.feeMethod,
        feeRecipient: order.feeRecipient.toLowerCase(),
        side: order.side,
        saleKind: order.saleKind,
        target: order.target.toLowerCase(),
        howToCall: order.howToCall,
        calldata: order.calldata,
        replacementPattern: order.replacementPattern,
        staticTarget: order.staticTarget.toLowerCase(),
        staticExtradata: order.staticExtradata,
        paymentToken: order.paymentToken.toLowerCase(),
        quantity: order.quantity.toString(),
        basePrice: order.basePrice.toString(),
        englishAuctionReservePrice: order.englishAuctionReservePrice ? order.englishAuctionReservePrice.toString() : undefined,
        extra: order.extra.toString(),
        createdTime: order.createdTime
            ? order.createdTime.toString()
            : undefined,
        listingTime: order.listingTime.toString(),
        expirationTime: order.expirationTime.toString(),
        salt: order.salt.toString(),
        metadata: order.metadata,
        v: order.v,
        r: order.r,
        s: order.s,
        hash: order.hash
    };
    return asJSON;
};
exports.orderToJSON = orderToJSON;
/**
 * Sign messages using web3 personal signatures
 * @param web3 Web3 instance
 * @param message message to sign
 * @param signerAddress web3 address signing the message
 * @returns A signature if provider can sign, otherwise null
 */
function personalSignAsync(web3, message, signerAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var signature, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promisify(function (c) { return web3.currentProvider.sendAsync({
                        method: 'personal_sign',
                        params: [message, signerAddress],
                        from: signerAddress,
                        id: new Date().getTime()
                    }, c); })];
                case 1:
                    signature = _a.sent();
                    error = signature.error;
                    if (error) {
                        throw new Error(error);
                    }
                    return [2 /*return*/, parseSignatureHex(signature.result)];
            }
        });
    });
}
exports.personalSignAsync = personalSignAsync;
/**
 * Checks whether a given address contains any code
 * @param web3 Web3 instance
 * @param address input address
 */
function isContractAddress(web3, address) {
    return __awaiter(this, void 0, void 0, function () {
        var code;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promisify(function (c) { return web3.eth.getCode(address, c); })];
                case 1:
                    code = _a.sent();
                    return [2 /*return*/, code !== '0x'];
            }
        });
    });
}
exports.isContractAddress = isContractAddress;
/**
 * Special fixes for making BigNumbers using web3 results
 * @param arg An arg or the result of a web3 call to turn into a BigNumber
 */
function makeBigNumber(arg) {
    // Zero sometimes returned as 0x from contracts
    if (arg === '0x') {
        arg = 0;
    }
    // fix "new BigNumber() number type has more than 15 significant digits"
    arg = arg.toString();
    return new bignumber_js_1.default(arg);
}
exports.makeBigNumber = makeBigNumber;
/**
 * Send a transaction to the blockchain and optionally confirm it
 * @param web3 Web3 instance
 * @param param0 __namedParameters
 * @param from address sending transaction
 * @param to destination contract address
 * @param data data to send to contract
 * @param gasPrice gas price to use. If unspecified, uses web3 default (mean gas price)
 * @param value value in ETH to send with data. Defaults to 0
 * @param onError callback when user denies transaction
 */
function sendRawTransaction(web3, _a, onError) {
    var from = _a.from, to = _a.to, data = _a.data, gasPrice = _a.gasPrice, _b = _a.value, value = _b === void 0 ? 0 : _b, gas = _a.gas;
    return __awaiter(this, void 0, void 0, function () {
        var txHashRes, error_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(gas == null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, estimateGas(web3, { from: from, to: to, data: data, value: value })];
                case 1:
                    // This gas cannot be increased due to an ethjs error
                    gas = _c.sent();
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, promisify(function (c) { return web3.eth.sendTransaction({
                            from: from,
                            to: to,
                            value: value,
                            data: data,
                            gas: gas,
                            gasPrice: gasPrice
                        }, c); })];
                case 3:
                    txHashRes = _c.sent();
                    return [2 /*return*/, txHashRes.toString()];
                case 4:
                    error_2 = _c.sent();
                    onError(error_2);
                    throw error_2;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.sendRawTransaction = sendRawTransaction;
/**
 * Call a method on a contract, sending arbitrary data and
 * handling Parity errors. Returns '0x' if error.
 * @param web3 Web3 instance
 * @param param0 __namedParameters
 * @param from address sending call
 * @param to destination contract address
 * @param data data to send to contract
 * @param onError callback when user denies transaction
 */
function rawCall(web3, _a, onError) {
    var from = _a.from, to = _a.to, data = _a.data;
    return __awaiter(this, void 0, void 0, function () {
        var result, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, promisify(function (c) { return web3.eth.call({
                            from: from,
                            to: to,
                            data: data
                        }, c); })];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_3 = _b.sent();
                    // Probably method not found, and web3 is a Parity node
                    if (onError) {
                        onError(error_3);
                    }
                    // Backwards compatibility with Geth nodes
                    return [2 /*return*/, '0x'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.rawCall = rawCall;
/**
 * Estimate Gas usage for a transaction
 * @param web3 Web3 instance
 * @param from address sending transaction
 * @param to destination contract address
 * @param data data to send to contract
 * @param value value in ETH to send with data
 */
function estimateGas(web3, _a) {
    var from = _a.from, to = _a.to, data = _a.data, _b = _a.value, value = _b === void 0 ? 0 : _b;
    return __awaiter(this, void 0, void 0, function () {
        var amount;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, promisify(function (c) { return web3.eth.estimateGas({
                        from: from,
                        to: to,
                        value: value,
                        data: data,
                    }, c); })];
                case 1:
                    amount = _c.sent();
                    return [2 /*return*/, amount];
            }
        });
    });
}
exports.estimateGas = estimateGas;
/**
 * Get mean gas price for sending a txn, in wei
 * @param web3 Web3 instance
 */
function getCurrentGasPrice(web3) {
    return __awaiter(this, void 0, void 0, function () {
        var meanGas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promisify(function (c) { return web3.eth.getGasPrice(c); })];
                case 1:
                    meanGas = _a.sent();
                    return [2 /*return*/, meanGas];
            }
        });
    });
}
exports.getCurrentGasPrice = getCurrentGasPrice;
/**
 * Get current transfer fees for an asset
 * @param web3 Web3 instance
 * @param asset The asset to check for transfer fees
 */
function getTransferFeeSettings(web3, _a) {
    var asset = _a.asset, accountAddress = _a.accountAddress;
    return __awaiter(this, void 0, void 0, function () {
        var transferFee, transferFeeTokenAddress, feeContract_1, params;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(asset.tokenAddress.toLowerCase() == constants_1.ENJIN_ADDRESS.toLowerCase())) return [3 /*break*/, 2];
                    feeContract_1 = web3.eth.contract(contracts_1.ERC1155).at(asset.tokenAddress);
                    return [4 /*yield*/, promisifyCall(function (c) { return feeContract_1.transferSettings(asset.tokenId, { from: accountAddress }, c); })];
                case 1:
                    params = _b.sent();
                    if (params) {
                        transferFee = makeBigNumber(params[3]);
                        if (params[2] == 0) {
                            transferFeeTokenAddress = constants_1.ENJIN_COIN_ADDRESS;
                        }
                    }
                    _b.label = 2;
                case 2: return [2 /*return*/, { transferFee: transferFee, transferFeeTokenAddress: transferFeeTokenAddress }];
            }
        });
    });
}
exports.getTransferFeeSettings = getTransferFeeSettings;
// sourced from 0x.js:
// https://github.com/ProjectWyvern/wyvern-js/blob/39999cb93ce5d80ea90b4382182d1bd4339a9c6c/src/utils/signature_utils.ts
function parseSignatureHex(signature) {
    // HACK: There is no consensus on whether the signatureHex string should be formatted as
    // v + r + s OR r + s + v, and different clients (even different versions of the same client)
    // return the signature params in different orders. In order to support all client implementations,
    // we parse the signature in both ways, and evaluate if either one is a valid signature.
    var validVParamValues = [27, 28];
    var ecSignatureRSV = _parseSignatureHexAsRSV(signature);
    if (_.includes(validVParamValues, ecSignatureRSV.v)) {
        return ecSignatureRSV;
    }
    // For older clients
    var ecSignatureVRS = _parseSignatureHexAsVRS(signature);
    if (_.includes(validVParamValues, ecSignatureVRS.v)) {
        return ecSignatureVRS;
    }
    throw new Error('Invalid signature');
    function _parseSignatureHexAsVRS(signatureHex) {
        var signatureBuffer = ethUtil.toBuffer(signatureHex);
        var v = signatureBuffer[0];
        if (v < 27) {
            v += 27;
        }
        var r = signatureBuffer.slice(1, 33);
        var s = signatureBuffer.slice(33, 65);
        var ecSignature = {
            v: v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    }
    function _parseSignatureHexAsRSV(signatureHex) {
        var _a = ethUtil.fromRpcSig(signatureHex), v = _a.v, r = _a.r, s = _a.s;
        var ecSignature = {
            v: v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    }
}
/**
 * Estimates the price of an order
 * @param order The order to estimate price on
 * @param secondsToBacktrack The number of seconds to subtract on current time,
 *  to fix race conditions
 * @param shouldRoundUp Whether to round up fractional wei
 */
function estimateCurrentPrice(order, secondsToBacktrack, shouldRoundUp) {
    if (secondsToBacktrack === void 0) { secondsToBacktrack = 30; }
    if (shouldRoundUp === void 0) { shouldRoundUp = true; }
    var basePrice = order.basePrice, listingTime = order.listingTime, expirationTime = order.expirationTime, extra = order.extra;
    var side = order.side, takerRelayerFee = order.takerRelayerFee, saleKind = order.saleKind;
    var now = new bignumber_js_1.default(Math.round(Date.now() / 1000)).minus(secondsToBacktrack);
    basePrice = new bignumber_js_1.default(basePrice);
    listingTime = new bignumber_js_1.default(listingTime);
    expirationTime = new bignumber_js_1.default(expirationTime);
    extra = new bignumber_js_1.default(extra);
    var exactPrice = basePrice;
    if (saleKind === types_2.SaleKind.FixedPrice) {
        // Do nothing, price is correct
    }
    else if (saleKind === types_2.SaleKind.DutchAuction) {
        var diff = extra.times(now.minus(listingTime))
            .dividedBy(expirationTime.minus(listingTime));
        exactPrice = side == types_2.OrderSide.Sell
            /* Sell-side - start price: basePrice. End price: basePrice - extra. */
            ? basePrice.minus(diff)
            /* Buy-side - start price: basePrice. End price: basePrice + extra. */
            : basePrice.plus(diff);
    }
    // Add taker fee only for buyers
    if (side === types_2.OrderSide.Sell && !order.waitingForBestCounterOrder) {
        // Buyer fee increases sale price
        exactPrice = exactPrice.times(+takerRelayerFee / constants_1.INVERSE_BASIS_POINT + 1);
    }
    return shouldRoundUp ? exactPrice.ceil() : exactPrice;
}
exports.estimateCurrentPrice = estimateCurrentPrice;
/**
 * Get the Wyvern representation of a fungible asset
 * @param schema The WyvernSchema needed to access this asset
 * @param asset The asset to trade
 * @param quantity The number of items to trade
 */
function getWyvernAsset(schema, asset, quantity) {
    if (quantity === void 0) { quantity = new bignumber_js_1.default(1); }
    var tokenId = asset.tokenId != null
        ? asset.tokenId.toString()
        : undefined;
    return schema.assetFromFields({
        'ID': tokenId,
        'Quantity': quantity.toString(),
        'Address': asset.tokenAddress.toLowerCase(),
        'Name': asset.name
    });
}
exports.getWyvernAsset = getWyvernAsset;
/**
 * Get the Wyvern representation of a group of assets
 * Sort order is enforced here. Throws if there's a duplicate.
 * @param assets Assets to bundle
 * @param schemas The WyvernSchemas needed to access each asset, respectively
 * @param quantities The quantity of each asset to bundle, respectively
 */
function getWyvernBundle(assets, schemas, quantities) {
    if (assets.length != quantities.length) {
        throw new Error("Bundle must have a quantity for every asset");
    }
    if (assets.length != schemas.length) {
        throw new Error("Bundle must have a schema for every asset");
    }
    var wyAssets = assets.map(function (asset, i) { return getWyvernAsset(schemas[i], asset, quantities[i]); });
    var sorters = [
        function (assetAndSchema) { return assetAndSchema.asset.address; },
        function (assetAndSchema) { return assetAndSchema.asset.id || 0; }
    ];
    var wyAssetsAndSchemas = wyAssets.map(function (asset, i) { return ({
        asset: asset,
        schema: schemas[i].name
    }); });
    var uniqueAssets = _.uniqBy(wyAssetsAndSchemas, function (group) { return sorters[0](group) + "-" + sorters[1](group); });
    if (uniqueAssets.length != wyAssetsAndSchemas.length) {
        throw new Error("Bundle can't contain duplicate assets");
    }
    var sortedWyAssetsAndSchemas = _.sortBy(wyAssetsAndSchemas, sorters);
    return {
        assets: sortedWyAssetsAndSchemas.map(function (group) { return group.asset; }),
        schemas: sortedWyAssetsAndSchemas.map(function (group) { return group.schema; }),
    };
}
exports.getWyvernBundle = getWyvernBundle;
/**
 * Get the non-prefixed hash for the order
 * (Fixes a Wyvern typescript issue and casing issue)
 * @param order order to hash
 */
function getOrderHash(order) {
    var orderWithStringTypes = __assign(__assign({}, order), { maker: order.maker.toLowerCase(), taker: order.taker.toLowerCase(), feeRecipient: order.feeRecipient.toLowerCase(), side: order.side.toString(), saleKind: order.saleKind.toString(), howToCall: order.howToCall.toString(), feeMethod: order.feeMethod.toString() });
    return wyvern_js_1.WyvernProtocol.getOrderHashHex(orderWithStringTypes);
}
exports.getOrderHash = getOrderHash;
/**
 * Assign an order and a new matching order to their buy/sell sides
 * @param order Original order
 * @param matchingOrder The result of _makeMatchingOrder
 */
function assignOrdersToSides(order, matchingOrder) {
    var isSellOrder = order.side == types_2.OrderSide.Sell;
    var buy;
    var sell;
    if (!isSellOrder) {
        buy = order;
        sell = __assign(__assign({}, matchingOrder), { v: buy.v, r: buy.r, s: buy.s });
    }
    else {
        sell = order;
        buy = __assign(__assign({}, matchingOrder), { v: sell.v, r: sell.r, s: sell.s });
    }
    return { buy: buy, sell: sell };
}
exports.assignOrdersToSides = assignOrdersToSides;
// BROKEN
// TODO fix this calldata for buy orders
function canSettleOrder(client, order, matchingOrder) {
    return __awaiter(this, void 0, void 0, function () {
        var calldata, seller, proxy, contract;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    calldata = order.calldata.slice(0, 98) + "1111111111111111111111111111111111111111" + order.calldata.slice(138);
                    seller = order.side == types_2.OrderSide.Buy ? matchingOrder.maker : order.maker;
                    return [4 /*yield*/, client._getProxy(seller)];
                case 1:
                    proxy = _a.sent();
                    if (!proxy) {
                        console.warn("No proxy found for seller " + seller);
                        return [2 /*return*/, false];
                    }
                    contract = (client.web3.eth.contract([Proxy_1.proxyABI])).at(proxy);
                    return [2 /*return*/, promisify(function (c) {
                            return contract.proxy.call(order.target, order.howToCall, calldata, { from: seller }, c);
                        })];
            }
        });
    });
}
/**
 * Delay using setTimeout
 * @param ms milliseconds to wait
 */
function delay(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (res) { return setTimeout(res, ms); })];
        });
    });
}
exports.delay = delay;
/**
 * Validates that an address exists, isn't null, and is properly
 * formatted for Wyvern and OpenSea
 * @param address input address
 */
function validateAndFormatWalletAddress(web3, address) {
    if (!address) {
        throw new Error('No wallet address found');
    }
    if (!web3.isAddress(address)) {
        throw new Error('Invalid wallet address');
    }
    if (address == constants_1.NULL_ADDRESS) {
        throw new Error('Wallet cannot be the null address');
    }
    return address.toLowerCase();
}
exports.validateAndFormatWalletAddress = validateAndFormatWalletAddress;
/**
 * Notify developer when a pattern will be deprecated
 * @param msg message to log to console
 */
function onDeprecated(msg) {
    console.warn("DEPRECATION NOTICE: " + msg);
}
exports.onDeprecated = onDeprecated;
/**
 * Get special-case approval addresses for an erc721 contract
 * @param erc721Contract contract to check
 */
function getNonCompliantApprovalAddress(erc721Contract, tokenId, accountAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        // CRYPTOKITTIES check
                        promisifyCall(function (c) { return erc721Contract.kittyIndexToApproved.call(tokenId, c); }),
                        // Etherbots check
                        promisifyCall(function (c) { return erc721Contract.partIndexToApproved.call(tokenId, c); }),
                    ])];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, _.compact(results)[0]];
            }
        });
    });
}
exports.getNonCompliantApprovalAddress = getNonCompliantApprovalAddress;
//# sourceMappingURL=utils.js.map

/***/ })

}]);