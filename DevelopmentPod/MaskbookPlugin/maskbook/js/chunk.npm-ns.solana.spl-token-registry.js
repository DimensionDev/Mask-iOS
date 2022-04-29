"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1183],{

/***/ 64677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DK": () => (/* reexport */ TokenListProvider)
});

// UNUSED EXPORTS: CDNTokenListResolutionStrategy, CLUSTER_SLUGS, ENV, GitHubTokenListResolutionStrategy, SolanaTokenListResolutionStrategy, StaticTokenListResolutionStrategy, Strategy, TokenListContainer

// EXTERNAL MODULE: ../../node_modules/.pnpm/cross-fetch@3.0.6/node_modules/cross-fetch/dist/browser-ponyfill.js
var browser_ponyfill = __webpack_require__(78481);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@solana+spl-token-registry@0.2.1301/node_modules/@solana/spl-token-registry/dist/module/tokens/solana.tokenlist.json
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@solana+spl-token-registry@0.2.1301/node_modules/@solana/spl-token-registry/dist/module/lib/tokenlist.js


var ENV;
(function (ENV) {
    ENV[ENV["MainnetBeta"] = 101] = "MainnetBeta";
    ENV[ENV["Testnet"] = 102] = "Testnet";
    ENV[ENV["Devnet"] = 103] = "Devnet";
})(ENV || (ENV = {}));
const CLUSTER_SLUGS = {
    'mainnet-beta': ENV.MainnetBeta,
    testnet: ENV.Testnet,
    devnet: ENV.Devnet,
};
class GitHubTokenListResolutionStrategy {
    constructor() {
        this.repositories = [
            'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json',
        ];
        this.resolve = () => {
            return queryJsonFiles(this.repositories);
        };
    }
}
class CDNTokenListResolutionStrategy {
    constructor() {
        this.repositories = [
            'https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json',
        ];
        this.resolve = () => {
            return queryJsonFiles(this.repositories);
        };
    }
}
class SolanaTokenListResolutionStrategy {
    constructor() {
        this.repositories = ['https://token-list.solana.com/solana.tokenlist.json'];
        this.resolve = () => {
            return queryJsonFiles(this.repositories);
        };
    }
}
const queryJsonFiles = async (files) => {
    const responses = (await Promise.all(files.map(async (repo) => {
        try {
            const response = await (0,browser_ponyfill.fetch)(repo);
            const json = (await response.json());
            return json;
        }
        catch {
            console.info(`@solana/token-registry: falling back to static repository.`);
            return solana_tokenlist_namespaceObject;
        }
    })));
    return responses
        .map((tokenlist) => tokenlist.tokens)
        .reduce((acc, arr) => acc.concat(arr), []);
};
var Strategy;
(function (Strategy) {
    Strategy["GitHub"] = "GitHub";
    Strategy["Static"] = "Static";
    Strategy["Solana"] = "Solana";
    Strategy["CDN"] = "CDN";
})(Strategy || (Strategy = {}));
class StaticTokenListResolutionStrategy {
    constructor() {
        this.resolve = () => {
            return solana_tokenlist_namespaceObject.tokens;
        };
    }
}
class TokenListProvider {
    constructor() {
        this.resolve = async (strategy = Strategy.CDN) => {
            return new TokenListContainer(await TokenListProvider.strategies[strategy].resolve());
        };
    }
}
TokenListProvider.strategies = {
    [Strategy.GitHub]: new GitHubTokenListResolutionStrategy(),
    [Strategy.Static]: new StaticTokenListResolutionStrategy(),
    [Strategy.Solana]: new SolanaTokenListResolutionStrategy(),
    [Strategy.CDN]: new CDNTokenListResolutionStrategy(),
};
class TokenListContainer {
    constructor(tokenList) {
        this.tokenList = tokenList;
        this.filterByTag = (tag) => {
            return new TokenListContainer(this.tokenList.filter((item) => (item.tags || []).includes(tag)));
        };
        this.filterByChainId = (chainId) => {
            return new TokenListContainer(this.tokenList.filter((item) => item.chainId === chainId));
        };
        this.excludeByChainId = (chainId) => {
            return new TokenListContainer(this.tokenList.filter((item) => item.chainId !== chainId));
        };
        this.excludeByTag = (tag) => {
            return new TokenListContainer(this.tokenList.filter((item) => !(item.tags || []).includes(tag)));
        };
        this.filterByClusterSlug = (slug) => {
            if (slug in CLUSTER_SLUGS) {
                return this.filterByChainId(CLUSTER_SLUGS[slug]);
            }
            throw new Error(`Unknown slug: ${slug}, please use one of ${Object.keys(CLUSTER_SLUGS)}`);
        };
        this.getList = () => {
            return this.tokenList;
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90b2tlbmxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLFNBQVMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRCxNQUFNLENBQU4sSUFBWSxHQUlYO0FBSkQsV0FBWSxHQUFHO0lBQ2IsNkNBQWlCLENBQUE7SUFDakIscUNBQWEsQ0FBQTtJQUNiLG1DQUFZLENBQUE7QUFDZCxDQUFDLEVBSlcsR0FBRyxLQUFILEdBQUcsUUFJZDtBQStDRCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQTBCO0lBQ2xELGNBQWMsRUFBRSxHQUFHLENBQUMsV0FBVztJQUMvQixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87SUFDcEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO0NBQ25CLENBQUM7QUFFRixNQUFNLE9BQU8saUNBQWlDO0lBQTlDO1FBQ0UsaUJBQVksR0FBRztZQUNiLGdHQUFnRztTQUNqRyxDQUFDO1FBRUYsWUFBTyxHQUFHLEdBQUcsRUFBRTtZQUNiLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8sOEJBQThCO0lBQTNDO1FBQ0UsaUJBQVksR0FBRztZQUNiLDBGQUEwRjtTQUMzRixDQUFDO1FBRUYsWUFBTyxHQUFHLEdBQUcsRUFBRTtZQUNiLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8saUNBQWlDO0lBQTlDO1FBQ0UsaUJBQVksR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7UUFFdkUsWUFBTyxHQUFHLEdBQUcsRUFBRTtZQUNiLE9BQU8sY0FBYyxDQUFD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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@solana+spl-token-registry@0.2.1301/node_modules/@solana/spl-token-registry/dist/module/index.js

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxpQkFBaUIsQ0FBQyJ9

/***/ })

}]);