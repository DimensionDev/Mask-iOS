"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1261],{

/***/ 51261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetch3BoxProfiles": () => (/* reexport */ fetch3BoxProfiles),
  "fetchProposal": () => (/* reexport */ fetchProposal),
  "getScores": () => (/* reexport */ getScores),
  "vote": () => (/* reexport */ vote)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@snapshot-labs+snapshot.js@0.3.31/node_modules/@snapshot-labs/snapshot.js/dist/snapshot.min.js
var snapshot_min = __webpack_require__(88358);
var snapshot_min_default = /*#__PURE__*/__webpack_require__.n(snapshot_min);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/transform.js
var transform = __webpack_require__(45346);
// EXTERNAL MODULE: ./src/plugins/Snapshot/constants.ts
var constants = __webpack_require__(47704);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/Worker/apis/index.ts




async function fetchProposal(id) {
    const { votes , proposal  } = await fetchProposalFromGraphql(id);
    const now = Date.now();
    const isStart = proposal.start * 1000 < now;
    const isEnd = proposal.end * 1000 < now;
    return {
        ...proposal,
        address: proposal.author,
        isStart,
        isEnd,
        votes
    };
}
async function fetchProposalFromGraphql(id) {
    const response = await fetch('https://hub.snapshot.org/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query Proposal($id: String!) {
                proposal(id: $id) {
                    id
                    ipfs
                    title
                    body
                    choices
                    start
                    end
                    snapshot
                    state
                    author
                    created
                    plugins
                    network
                    type
                    strategies {
                      name
                      params
                      __typename
                    }
                    space {
                      id
                      name
                    }
                }
                votes(first: 10000, where: { proposal: $id }) {
                    id
                    ipfs
                    voter
                    created
                    choice
                  }
            }`,
            variables: {
                id
            }
        })
    });
    const { data  } = await response.json();
    return data;
}
async function fetch3BoxProfiles(addresses) {
    const { profiles  } = await snapshot_min_default().utils.subgraphRequest('https://api.3box.io/graph', {
        profiles: {
            __args: {
                ids: addresses
            },
            name: true,
            contract_address: true,
            image: true
        }
    });
    return profiles !== null && profiles !== void 0 ? profiles : [];
}
async function getScores(snapshot, voters, blockNumber, network, space, strategies) {
    const provider = snapshot_min_default().utils.getProvider(network);
    const blockTag = Number(snapshot) > blockNumber ? 'latest' : Number(snapshot);
    const scores = await snapshot_min_default().utils.getScores(space, strategies, network, voters, blockTag, constants/* SNAPSHOT_GET_SCORE_API */.q$);
    return scores.map((score)=>(0,transform/* default */.Z)(score, function(result, val, key) {
            result[key.toLowerCase()] = val;
        })
    );
}
async function vote(identifier, choice, address) {
    const msg = JSON.stringify({
        version: '0.1.3',
        timestamp: (Date.now() / 1000).toFixed(),
        space: identifier.space,
        type: 'vote',
        payload: {
            proposal: identifier.id,
            choice,
            metadata: {}
        }
    });
    const sig = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign(msg, address);
    const response = await fetch('https://hub.snapshot.org/api/msg', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            msg,
            sig,
            address
        })
    });
    const result = await response.json();
    return result;
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/Worker/services.ts



/***/ })

}]);