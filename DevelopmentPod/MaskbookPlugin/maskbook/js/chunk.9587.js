"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9587],{

/***/ 19587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getDonations": () => (/* reexport */ getDonations),
  "getFootprints": () => (/* reexport */ getFootprints),
  "getRSS3AddressById": () => (/* reexport */ getRSS3AddressById),
  "getRSS3ProfileByAddress": () => (/* reexport */ getRSS3ProfileByAddress)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ../plugins/RSS3/src/types.ts
var PageTags;
(function(PageTags) {
    PageTags["WalletTag"] = 'Wallets';
    PageTags["NFTTag"] = 'NFTs';
    PageTags["DonationTag"] = 'Donations';
    PageTags["FootprintTag"] = 'Footprints';
    PageTags["DAOTag"] = 'DAO';
})(PageTags || (PageTags = {}));
var AssetType;
(function(AssetType) {
    AssetType["GitcoinDonation"] = 'Gitcoin-Donation';
    AssetType["POAP"] = "POAP";
})(AssetType || (AssetType = {}));

;// CONCATENATED MODULE: ../plugins/RSS3/src/apis/index.ts


async function fetchJSON(url) {
    const res = await globalThis.fetch(url);
    return res.json();
}
function getDonations(address) {
    const url = dist_default()('https://hub.pass3.me/assets/list', {
        personaID: address,
        type: AssetType.GitcoinDonation
    });
    return fetchJSON(url);
}
function getFootprints(address) {
    const url = dist_default()('https://hub.pass3.me/assets/list', {
        personaID: address,
        type: AssetType.POAP
    });
    return fetchJSON(url);
}
async function getRSS3AddressById(id) {
    if (!id) return '';
    const url = dist_default()('https://rss3.domains/name/:id', {
        id
    });
    const rsp = await fetchJSON(url);
    return rsp.address;
}
async function getRSS3ProfileByAddress(address) {
    if (!address) return;
    const url = dist_default()('https://hub.pass3.me/:address', {
        address
    });
    const rsp = await fetchJSON(url);
    return rsp?.profile;
}

;// CONCATENATED MODULE: ../plugins/RSS3/src/services.ts



/***/ })

}]);