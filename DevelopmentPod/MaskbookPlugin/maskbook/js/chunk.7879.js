"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7879],{

/***/ 14012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ createFungibleAsset),
  "m": () => (/* reexport */ createFungibleToken)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/flow/index.ts + 14 modules
var flow = __webpack_require__(85081);
;// CONCATENATED MODULE: ../plugins/Flow/src/helpers/token.ts


function createFungibleToken(chainId, address, name, symbol, decimals, logoURL) {
    return {
        id: address,
        chainId,
        type: src/* TokenType.Fungible */.iv.Fungible,
        schema: flow/* SchemaType.Fungible */.XQ.Fungible,
        address,
        name,
        symbol,
        decimals,
        logoURL
    };
}
function createFungibleAsset(token, balance, price) {
    return {
        ...token,
        balance: (0,src/* leftShift */.w5)(balance, 8).toFixed(),
        price,
        value: {
            [src/* CurrencyType.USD */.V2.USD]: (0,src/* multipliedBy */.$q)(price?.usd ?? 0, (0,src/* leftShift */.w5)(balance, 8)).toFixed()
        }
    };
}

;// CONCATENATED MODULE: ../plugins/Flow/src/helpers/index.ts



/***/ }),

/***/ 90921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ FlowRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13193);


if (false) {}
const FlowMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const FlowRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 4805).then(__webpack_require__.bind(__webpack_require__, 34805))
, FlowMessage.rpc);


/***/ }),

/***/ 90038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SharedContextSettings),
/* harmony export */   "o": () => (/* binding */ Web3StateSettings)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

const Web3StateSettings = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createValueRefWithReady */ .a)(null);
const SharedContextSettings = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createValueRefWithReady */ .a)(null);


/***/ }),

/***/ 47879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ createWeb3State)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/flow/index.ts + 14 modules
var flow = __webpack_require__(85081);
;// CONCATENATED MODULE: ../plugins/Flow/src/state/AddressBook.ts




class AddressBook extends entry_web3/* AddressBookState */.Cp {
    constructor(context, subscriptions){
        super(context, (0,esm/* getEnumAsArray */.Yl)(flow/* ChainId */.a_).map((x)=>x.value
        ), subscriptions, {
            isValidAddress: flow/* isValidAddress */.At,
            isSameAddress: src/* isSameAddress */.Wr,
            formatAddress: flow/* formatAddress */.Tg
        });
        this.context = context;
        this.subscriptions = subscriptions;
    }
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../plugins/Flow/src/helpers/index.ts + 1 modules
var helpers = __webpack_require__(14012);
// EXTERNAL MODULE: ../plugins/Flow/src/messages.ts
var messages = __webpack_require__(90921);
;// CONCATENATED MODULE: ../plugins/Flow/src/state/Hub/hub.ts




class Hub {
    getOptions(initial, overrides) {
        return {
            chainId: this.chainId,
            account: this.account,
            sourceType: this.sourceType,
            currencyType: this.currencyType,
            ...initial,
            ...overrides
        };
    }
    async getFungibleTokensFromTokenList(chainId, initial) {
        const options = this.getOptions(initial, {
            chainId
        });
        const { FLOW_ADDRESS ='' , FUSD_ADDRESS ='' , TETHER_ADDRESS =''  } = (0,flow/* getTokenConstants */.aV)(options.chainId);
        return [
            (0,helpers/* createFungibleToken */.m)(options.chainId, FLOW_ADDRESS, 'Flow', 'FLOW', 8, new URL(/* asset import */ __webpack_require__(36284), __webpack_require__.b).toString()),
            (0,helpers/* createFungibleToken */.m)(options.chainId, FUSD_ADDRESS, 'Flow USD', 'FUSD', 8, new URL(/* asset import */ __webpack_require__(11390), __webpack_require__.b).toString()),
            (0,helpers/* createFungibleToken */.m)(options.chainId, TETHER_ADDRESS, 'Tether USD', 'tUSD', 8, new URL(/* asset import */ __webpack_require__(75183), __webpack_require__.b).toString()), 
        ];
    }
    async getNonFungibleTokensFromTokenList(chainId, initial) {
        throw new Error('Method not implemented.');
    }
    getGasOptions(chainId, initial) {
        throw new Error('Method not implemented.');
    }
    getFungibleAsset(address, initial) {
        throw new Error('Method not implemented.');
    }
    async getFungibleAssets(account, initial) {
        const options = this.getOptions(initial, {
            account
        });
        return messages/* FlowRPC.getFungibleAssets */._.getFungibleAssets(options.chainId, options.account);
    }
    async getNonFungibleAsset(address, tokenId, initial, ownerAddress, contractName) {
        const options = this.getOptions(initial);
        return web3_providers_src/* Alchemy_FLOW.getAsset */.HJ.getAsset(address, tokenId, options, ownerAddress, contractName);
    }
    getNonFungibleTokens(account, initial) {
        const options = this.getOptions(initial, {
            account
        });
        return web3_providers_src/* Alchemy_FLOW.getAssets */.HJ.getAssets(options.account, options);
    }
    getFungibleTokenPrice(chainId, address, initial) {
        // The Flow chain is unlisted in CoinGecko.
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenPrice(chainId, address, tokenId, initial) {
        throw new Error('Method not implemented.');
    }
    async getFungibleTokenIconURLs(chainId, address, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenIconURLs(chainId, address, tokenId, initial) {
        throw new Error('Method not implemented.');
    }
    getTransactions(chainId, account, initial) {
        throw new Error('Method not implemented.');
    }
    constructor(chainId, account, sourceType, currencyType){
        this.chainId = chainId;
        this.account = account;
        this.sourceType = sourceType;
        this.currencyType = currencyType;
    }
}
function createHub(chainId = flow/* ChainId.Mainnet */.a_.Mainnet, account = '', sourceType, currencyType) {
    return new Hub(chainId, account, sourceType, currencyType);
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Hub.ts


class Hub_Hub extends entry_web3/* HubState */.xH {
    constructor(context, subscription){
        super(createHub, subscription);
        this.context = context;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var dist = __webpack_require__(69260);
;// CONCATENATED MODULE: ../plugins/Flow/src/state/Connection/providers/Base.ts

class BaseProvider {
    // No need to wait by default
    get ready() {
        return true;
    }
    // No need to wait by default
    get readyPromise() {
        return Promise.resolve();
    }
    switchChain(chainId) {
        throw new Error('Method not implemented.');
    }
    createWeb3(options) {
        throw new Error('Method not implemented.');
    }
    createWeb3Provider(options) {
        throw new Error('Method not implemented.');
    }
    connect(chainId) {
        throw new Error('Method not implemented.');
    }
    disconnect() {
        throw new Error('Method not implemented.');
    }
    constructor(){
        this.emitter = new dist/* Emitter */.Q5();
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Connection/providers/Blocto.ts


class BloctoProvider extends BaseProvider {
    async createWeb3(options) {
        return (0,flow/* createClient */.eI)(options?.chainId ?? flow/* ChainId.Mainnet */.a_.Mainnet);
    }
    async connect(chainId = flow/* ChainId.Mainnet */.a_.Mainnet) {
        const fcl = await this.createWeb3({
            chainId
        });
        const user = await fcl.logIn();
        return {
            chainId,
            account: user.addr
        };
    }
    async disconnect() {
    // do nothing
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Connection/providers/Dapper.ts

class DapperProvider extends BaseProvider {
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Connection/providers/Ledger.ts

class LedgerProvider extends BaseProvider {
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Connection/provider.ts





const Providers = {
    [flow/* ProviderType.None */.lP.None]: new BaseProvider(),
    [flow/* ProviderType.Blocto */.lP.Blocto]: new BloctoProvider(),
    [flow/* ProviderType.Dapper */.lP.Dapper]: new DapperProvider(),
    [flow/* ProviderType.Ledger */.lP.Ledger]: new LedgerProvider()
};

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Provider.ts




class Provider extends entry_web3/* ProviderState */.Aw {
    constructor(context){
        super(context, Providers, {
            isSameAddress: src/* isSameAddress */.Wr,
            isValidChainId: flow/* isValidChainId */.JW,
            isValidAddress: flow/* isValidAddress */.At,
            getDefaultChainId: ()=>flow/* ChainId.Mainnet */.a_.Mainnet
            ,
            getDefaultProviderType: ()=>flow/* ProviderType.None */.lP.None
            ,
            getDefaultNetworkType: ()=>flow/* NetworkType.Flow */.td.Flow
            ,
            getNetworkTypeFromChainId: (chainId)=>flow/* chainResolver.chainNetworkType */.VU.chainNetworkType(chainId) ?? flow/* NetworkType.Flow */.td.Flow
        });
        this.context = context;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../plugins/Flow/src/settings/index.ts
var settings = __webpack_require__(90038);
;// CONCATENATED MODULE: ../plugins/Flow/src/state/Connection/connection.ts








function isNativeTokenAddress(chainId, address) {
    const { FLOW_ADDRESS  } = (0,flow/* getTokenConstants */.aV)(chainId);
    return (0,src/* isSameAddress */.Wr)(address, FLOW_ADDRESS);
}
class Connection {
    getOptions(initial, overrides) {
        return {
            account: this.account,
            chainId: this.chainId,
            providerType: this.providerType,
            ...initial,
            ...overrides
        };
    }
    _getWeb3Provider(initial) {
        const options = this.getOptions(initial);
        return Providers[options.providerType];
    }
    getWeb3(initial) {
        const options = this.getOptions(initial);
        return this._getWeb3Provider(options).createWeb3(options);
    }
    getWeb3Provider(initial) {
        const options = this.getOptions(initial);
        return this._getWeb3Provider(options).createWeb3Provider(options);
    }
    async connect(initial) {
        const options = this.getOptions(initial);
        return {
            account: '',
            chainId: flow/* ChainId.Mainnet */.a_.Mainnet,
            ...await settings/* Web3StateSettings.value.Provider */.o.value.Provider?.connect(options.chainId, options.providerType)
        };
    }
    async disconnect(initial) {
        const options = this.getOptions(initial);
        await settings/* Web3StateSettings.value.Provider */.o.value.Provider?.disconnect(options.providerType);
    }
    getGasPrice(initial) {
        throw new Error('Method not implemented.');
    }
    getTokenSchema(address, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenContract(address, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenCollection(address, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    async getBlock(no, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        return web3.send([
            web3.getBlock(),
            web3.atBlockHeight(no)
        ]).then(web3.decode);
    }
    async getBlockTimestamp(initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        const blockHeader = await web3.send([
            web3.getBlockHeader()
        ]).then(web3.decode);
        return (0,getUnixTime/* default */.Z)(new Date(blockHeader.timestamp));
    }
    transferFungibleToken(address, recipient, amount, memo, initial) {
        throw new Error('Method not implemented.');
    }
    transferNonFungibleToken(address, recipient, tokenId, amount, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    getNativeToken(initial) {
        const options = this.getOptions(initial);
        const token = (0,flow/* createNativeToken */.$c)(options.chainId);
        return Promise.resolve(token);
    }
    getNativeTokenBalance(initial) {
        throw new Error('Method not implemented.');
    }
    getFungibleTokenBalance(address, initial) {
        const options = this.getOptions(initial);
        if (!address || isNativeTokenAddress(options.chainId, address)) {
            return this.getNativeTokenBalance(options);
        }
        // TODO
        return Promise.resolve('0');
    }
    getNonFungibleTokenBalance(address, tokenId, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    getFungibleTokensBalance(listOfAddress, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokensBalance(listOfAddress, initial) {
        throw new Error('Method not implemented.');
    }
    getCode(address, initial) {
        throw new Error('Method not implemented.');
    }
    getFungibleToken(address, initial) {
        const options = this.getOptions(initial);
        if (!address || isNativeTokenAddress(options.chainId, address)) {
            return this.getNativeToken(options);
        }
        throw new Error('Method not implemented.');
    }
    getNonFungibleToken(address, tokenId, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenOwnership(address, tokenId, owner, schema, initial) {
        throw new Error('Method not implemented.');
    }
    getNonFungibleTokenMetadata(address, tokenId, schemaType, initial) {
        throw new Error('Method not implemented.');
    }
    async getAccount(initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        return web3.currentUser().addr ?? '';
    }
    async getChainId(initial) {
        const options = this.getOptions(initial);
        return options.chainId;
    }
    async getBlockNumber(initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        const blockHeader = await web3.send([
            web3.getBlockHeader()
        ]).then(web3.decode);
        return blockHeader.height;
    }
    async getBalance(address, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        const account = await web3.send([
            web3.getAccount(address)
        ]).then(web3.decode);
        return account.balance.toFixed();
    }
    async getTransaction(id, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        return web3.getTransaction(id);
    }
    async getTransactionReceipt(id, initial) {
        return null;
    }
    async getTransactionStatus(id, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        const { status  } = web3.getTransactionStatus(id);
        const status_ = status;
        switch(status_){
            case flow/* TransactionStatusCode.UNKNOWN */.GB.UNKNOWN:
                return src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND;
            case flow/* TransactionStatusCode.PENDING */.GB.PENDING:
            case flow/* TransactionStatusCode.FINALIZED */.GB.FINALIZED:
            case flow/* TransactionStatusCode.EXECUTED */.GB.EXECUTED:
                return src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND;
            case flow/* TransactionStatusCode.SEALED */.GB.SEALED:
                return src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND;
            case flow/* TransactionStatusCode.EXPIRED */.GB.EXPIRED:
                return src/* TransactionStatusType.FAILED */.g8.FAILED;
            default:
                (0,esm/* unreachable */.t1)(status_);
        }
    }
    async getTransactionNonce(address, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        const account = web3.getAccount(address);
        const key = (0,head/* default */.Z)(account.keys);
        return key?.sequenceNumber ?? 0;
    }
    async switchChain(chainId, initial) {
        const options = this.getOptions(initial);
        await Providers[options.providerType].switchChain(chainId);
    }
    async signMessage(dataToSign, signType, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        const data = new TextEncoder().encode(dataToSign);
        const signed = (0,head/* default */.Z)(await web3.currentUser.signUserMessage((0,shared_base_src/* toHex */.NC)(data)));
        if (!signed) throw new Error('Failed to sign message.');
        return signed.signature;
    }
    async verifyMessage(dataToVerify, signature, signType, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        if (!options.account) throw new Error('No account found.');
        return web3.verifyUserSignatures(dataToVerify, [
            {
                addr: options.account,
                keyId: 1,
                signature
            }, 
        ]);
    }
    async callTransaction(query, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        return web3.query(query);
    }
    async sendTransaction(mutation, initial) {
        const options = this.getOptions(initial);
        const web3 = await this.getWeb3(options);
        const id = await web3.mutate(mutation);
        await web3.tx(id).onceSealed();
        return id;
    }
    signTransaction(mutation, initial) {
        throw new Error('Method not implemented.');
    }
    signTransactions(mutations, initial) {
        throw new Error('Method not implemented.');
    }
    sendSignedTransaction(signature, initial) {
        throw new Error('Method not implemented.');
    }
    requestTransaction(hash, config, initial) {
        throw new Error('Method not implemented.');
    }
    cancelTransaction(hash, config, initial) {
        throw new Error('Method not implemented.');
    }
    constructor(chainId, account, providerType, context){
        this.chainId = chainId;
        this.account = account;
        this.providerType = providerType;
        this.context = context;
    }
}
/**
 * Build connection with provider.
 * @param providerType
 * @returns
 */ function createConnection(context, options) {
    const { chainId =flow/* ChainId.Mainnet */.a_.Mainnet , account ='' , providerType =flow/* ProviderType.Blocto */.lP.Blocto  } = options ?? {};
    return new Connection(chainId, account, providerType, context);
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Connection.ts


class Connection_Connection extends entry_web3/* ConnectionState */.em {
    constructor(context, subscription){
        super(context, createConnection, subscription);
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Settings.ts

class Settings extends entry_web3/* SettingsState */.$c {
    constructor(context){
        super(context);
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Transaction.ts



class Transaction extends entry_web3/* TransactionState */.g7 {
    constructor(context, subscriptions){
        super(context, (0,esm/* getEnumAsArray */.Yl)(flow/* ChainId */.a_).map((x)=>x.value
        ), subscriptions, {
            formatAddress: flow/* formatAddress */.Tg
        });
        this.context = context;
        this.subscriptions = subscriptions;
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Wallet.ts

class Wallet extends entry_web3/* WalletState */.RM {
    constructor(context){
        super(context);
        this.context = context;
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/Others.ts



class Others extends entry_web3/* OthersState */.CS {
    resolveFungibleTokenLink(chainId, address) {
        throw new Error('Method not implemented.');
    }
    constructor(context){
        super(context, {
            defaultAddress: '0x1654653399040a61',
            defaultBlockDelay: 15,
            chainDescriptors: flow/* CHAIN_DESCRIPTORS */.Q_,
            networkDescriptors: flow/* NETWORK_DESCRIPTORS */.qQ,
            providerDescriptors: flow/* PROVIDER_DESCRIPTORS */.zM
        });
        this.explorerResolver = (0,src/* createExplorerResolver */.Qv)(this.options.chainDescriptors, {
            addressPathname: '/account/:address',
            transactionPathname: '/transaction/:id',
            fungibleTokenPathname: '/contract/:address',
            nonFungibleTokenPathname: '/contract/:address'
        });
        this.isValidDomain = flow/* isValidDomain */.hS;
        this.isValidAddress = flow/* isValidAddress */.At;
        this.isSameAddress = src/* isSameAddress */.Wr;
        this.formatAddress = flow/* formatAddress */.Tg;
        this.formatDomainName = flow/* formatDomainName */.bc;
        this.formatTokenId = ()=>''
        ;
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/IdentityService.ts


class IdentityService extends entry_web3/* IdentityServiceState */.OC {
    async getFromRemote(identity) {
        const addressMatched = identity.bio?.match(/\b0x\w{16}\b/) ?? null;
        const address = addressMatched?.[0];
        return [
            address ? {
                networkSupporterPluginID: src/* NetworkPluginID.PLUGIN_FLOW */.FF.PLUGIN_FLOW,
                type: src/* SocialAddressType.ADDRESS */.bN.ADDRESS,
                label: address,
                address
            } : null, 
        ].filter(Boolean);
    }
    constructor(context){
        super();
        this.context = context;
    }
}

;// CONCATENATED MODULE: ../plugins/Flow/src/state/index.ts









function createWeb3State(context) {
    const Provider_ = new Provider(context);
    return {
        AddressBook: new AddressBook(context, {
            chainId: Provider_.chainId
        }),
        Hub: new Hub_Hub(context, {
            chainId: Provider_.chainId,
            account: Provider_.account
        }),
        IdentityService: new IdentityService(context),
        Settings: new Settings(context),
        Transaction: new Transaction(context, {
            chainId: Provider_.chainId,
            account: Provider_.account
        }),
        Provider: Provider_,
        Connection: new Connection_Connection(context, {
            chainId: Provider_.chainId,
            account: Provider_.account,
            providerType: Provider_.providerType
        }),
        Wallet: new Wallet(context),
        Others: new Others(context)
    };
}


/***/ }),

/***/ 11390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e151ef2b82727c3881e1.png";

/***/ }),

/***/ 36284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0c3b46b836f44283e009.png";

/***/ }),

/***/ 75183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/625b21693ea176a83262.png";

/***/ })

}]);