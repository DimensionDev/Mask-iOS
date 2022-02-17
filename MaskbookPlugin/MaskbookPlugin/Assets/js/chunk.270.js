"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9779],{

/***/ 69779:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+snapshot.js@0.2.0/node_modules/@dimensiondev/snapshot.js/dist/snapshot.min.js
var snapshot_min = __webpack_require__(48156);
var snapshot_min_default = /*#__PURE__*/__webpack_require__.n(snapshot_min);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/Worker/apis/index.ts




async function fetchProposal(id) {
    const response = await fetch((0,src/* resolveIPFSLink */.r5m)(id), {
        method: 'GET'
    });
    const { network , votes , strategies  } = await fetchProposalFromGraphql(id);
    const result = await response.json();
    return {
        ...result,
        network,
        strategies,
        votes
    };
}
async function fetchProposalFromGraphql(id) {
    const response = await fetch(`https://hub.snapshot.org/graphql`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query Proposal($id: String!) {
                proposal(id: $id) {
                    network
                    strategies {
                      name
                      params
                      __typename
                    }
                }
                votes(first: 10000, where: { proposal: $id }) {
                    id
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
    return {
        votes: data.votes,
        network: data.proposal.network,
        strategies: data.proposal.strategies
    };
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
async function getScores(message, voters, blockNumber, _network, space, _strategies) {
    const strategies = _strategies !== null && _strategies !== void 0 ? _strategies : message.payload.metadata.strategies;
    var _network1;
    // Sometimes `message.payload.metadata.network` is absent, this is maybe a snapshot api issue.
    const network = (_network1 = message.payload.metadata.network) !== null && _network1 !== void 0 ? _network1 : _network;
    const provider = snapshot_min_default().utils.getProvider(network);
    const snapshot = Number(message.payload.snapshot);
    const blockTag = snapshot > blockNumber ? 'latest' : snapshot;
    const scores = await snapshot_min_default().utils.getScores(space, strategies, network, provider, voters, blockTag);
    return scores.map((score)=>(0,lodash.transform)(score, function(result, val, key) {
            result[key.toString().toLowerCase()] = val;
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
            metadata: {
            }
        }
    });
    const sig = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign(msg, address);
    const response = await fetch(`https://hub.snapshot.page/api/message`, {
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