"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5624],{

/***/ 69297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oM": () => (/* binding */ fetchConst),
/* harmony export */   "dr": () => (/* binding */ fetchStoryInfo),
/* harmony export */   "cz": () => (/* binding */ fetchUserStoryStatus),
/* harmony export */   "JJ": () => (/* binding */ fetchUserPuzzleStatus),
/* harmony export */   "K1": () => (/* binding */ fetchUserPollStatus),
/* harmony export */   "He": () => (/* binding */ fetchPuzzleResult),
/* harmony export */   "mf": () => (/* binding */ fetchPollResult),
/* harmony export */   "yR": () => (/* binding */ submitPuzzle),
/* harmony export */   "LP": () => (/* binding */ submitPoll),
/* harmony export */   "du": () => (/* binding */ fetchUserParticipatedStoryStatus),
/* harmony export */   "aE": () => (/* binding */ fetchClue),
/* harmony export */   "oJ": () => (/* binding */ fetchUserPoap),
/* harmony export */   "j9": () => (/* binding */ fetchMysteryBoxInfo),
/* harmony export */   "UN": () => (/* binding */ openMysteryBox),
/* harmony export */   "kc": () => (/* binding */ fetchUserPartsInfo),
/* harmony export */   "PN": () => (/* binding */ fetchExchangeStatus),
/* harmony export */   "pU": () => (/* binding */ fetchAllPollsOrPuzzles),
/* harmony export */   "v_": () => (/* binding */ exchangeFtgWhitelist)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);



const PREFIX = 'https://findtruman.io/api';
async function request(url, options) {
    const response = await fetch(urlcat__WEBPACK_IMPORTED_MODULE_0___default()(PREFIX, url), {
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    });
    const { data , code , msg  } = await response.json();
    if (code !== 0) {
        throw new _types__WEBPACK_IMPORTED_MODULE_2__/* .FindTrumanRemoteError */ .$T(msg, code, data);
    }
    return data;
}
function fetchConst(lang) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/consts', {
        l: lang
    }));
}
function fetchStoryInfo(storyId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId', {
        storyId
    }));
}
function fetchUserStoryStatus(storyId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId/status', {
        storyId,
        uaddr
    }));
}
function fetchUserPuzzleStatus(puzzleId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/status', {
        puzzleId,
        uaddr
    }));
}
function fetchUserPollStatus(pollId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/status', {
        pollId,
        uaddr
    }));
}
function fetchPuzzleResult(puzzleId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/result', {
        puzzleId
    }));
}
function fetchPollResult(pollId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/result', {
        pollId
    }));
}
async function submitPuzzle(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/puzzles/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitPoll(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/polls/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserParticipatedStoryStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/participated_story_status', {
        uaddr
    }));
}
function fetchClue(clueId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/clues/:clueId', {
        clueId,
        uaddr
    }));
}
function fetchUserPoap(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/ftpoap', {
        uaddr
    }));
}
function fetchMysteryBoxInfo(id) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/mystery-boxes/:id', {
        id
    }));
}
async function openMysteryBox(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/mystery-boxes/_/open', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserPartsInfo(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/parts_with_additional', {
        uaddr
    }));
}
function fetchExchangeStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_status', {
        uaddr
    }));
}
function fetchAllPollsOrPuzzles(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls_or_puzzles', {
        uaddr
    }));
}
function exchangeFtgWhitelist() {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_ftg_airdrop_whitelist', {}), {
        method: 'POST',
        body: JSON.stringify({})
    });
}


/***/ }),

/***/ 85624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exchangeFtgWhitelist": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.v_),
/* harmony export */   "fetchAllPollsOrPuzzles": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.pU),
/* harmony export */   "fetchClue": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.aE),
/* harmony export */   "fetchConst": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.oM),
/* harmony export */   "fetchExchangeStatus": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.PN),
/* harmony export */   "fetchMysteryBoxInfo": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.j9),
/* harmony export */   "fetchPollResult": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.mf),
/* harmony export */   "fetchPuzzleResult": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.He),
/* harmony export */   "fetchStoryInfo": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.dr),
/* harmony export */   "fetchUserParticipatedStoryStatus": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.du),
/* harmony export */   "fetchUserPartsInfo": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.kc),
/* harmony export */   "fetchUserPoap": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.oJ),
/* harmony export */   "fetchUserPollStatus": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.K1),
/* harmony export */   "fetchUserPuzzleStatus": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.JJ),
/* harmony export */   "fetchUserStoryStatus": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.cz),
/* harmony export */   "openMysteryBox": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.UN),
/* harmony export */   "submitPoll": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.LP),
/* harmony export */   "submitPuzzle": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.yR)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69297);



/***/ }),

/***/ 7294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hQ": () => (/* binding */ PostType),
/* harmony export */   "Ym": () => (/* binding */ ClueConditionType),
/* harmony export */   "pX": () => (/* binding */ PartType),
/* harmony export */   "$T": () => (/* binding */ FindTrumanRemoteError)
/* harmony export */ });
var PostType;
(function(PostType) {
    PostType["Status"] = 'result';
    PostType["Puzzle"] = 'puzzle';
    PostType["Poll"] = 'poll';
    PostType["PuzzleResult"] = 'puzzle_result';
    PostType["PollResult"] = 'poll_result';
    PostType["Encryption"] = 'encryption';
})(PostType || (PostType = {}));
var ClueConditionType;
(function(ClueConditionType) {
    ClueConditionType["And"] = 'and';
    ClueConditionType["Or"] = 'or';
    ClueConditionType["Erc721"] = 'hold-erc721';
    ClueConditionType["Erc20"] = 'hold-erc20';
})(ClueConditionType || (ClueConditionType = {}));
var PartType;
(function(PartType) {
    PartType[PartType["Head"] = 1] = "Head";
    PartType[PartType["Skin"] = 2] = "Skin";
    PartType[PartType["Clothes"] = 3] = "Clothes";
    PartType[PartType["Mask"] = 4] = "Mask";
    PartType[PartType["Background"] = 5] = "Background";
})(PartType || (PartType = {}));
class FindTrumanRemoteError extends Error {
    constructor(message, code, data){
        super(message);
        this.code = code;
        this.data = data;
    }
}


/***/ })

}]);