"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2777],{

/***/ 72777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchFollowStatus": () => (/* binding */ fetchFollowStatus),
/* harmony export */   "fetchIdentity": () => (/* binding */ fetchIdentity)
/* harmony export */ });
async function query(data) {
    const url =  true ? 'https://api.cybertino.io/connect/' : 0;
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return res.json();
}
async function fetchIdentity(address) {
    const data = {
        query: `query Identity($address: String!, $first: Int, $after: String) {
        identity(address: $address) {
            address
            ens
            domain
            avatar
            followerCount(namespace:"")
            followingCount(namespace:"")
            followings(first: $first, after: $after){
                list {
                    address
                    ens
                    namespace
                }
            }
            followers(first: $first, after: $after){
                list {
                    address
                    ens
                    namespace
                }
            }
        }
    }`,
        variables: {
            address: address.toLowerCase(),
            first: 100,
            after: ''
        }
    };
    const res = await query(data);
    return res;
}
async function fetchFollowStatus(fromAddr, toAddr) {
    const data = {
        query: `query FollowStatus(
            $fromAddr: String!
            $toAddr: String!
          ) {
            followStatus(fromAddr: $fromAddr, toAddr: $toAddr, namespace: "Mask") {
              isFollowed
              isFollowing
            }
          }`,
        variables: {
            fromAddr: fromAddr.toLowerCase(),
            toAddr: toAddr.toLowerCase()
        }
    };
    const res = await query(data);
    return res;
}


/***/ })

}]);