(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[30],{

/***/ 88278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

// Deprecates. Prefer useMaskI18n()
const i18n = {
    t: (key, options)=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance.t */ .BV.t(key, options);
    }
};


/***/ }),

/***/ 26436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PluginDB),
/* harmony export */   "k": () => (/* binding */ setupDatabase)
/* harmony export */ });
let PluginDB;
function setupDatabase(x) {
    PluginDB = x;
}


/***/ }),

/***/ 60364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "changePassword": () => (/* reexport */ wallet_password/* changePassword */.Cp),
  "clearPassword": () => (/* reexport */ wallet_password/* clearPassword */.Cy),
  "clearUnconfirmedRequests": () => (/* reexport */ rpc/* clearUnconfirmedRequests */._b),
  "confirmRequest": () => (/* reexport */ services_send/* confirmRequest */.Gk),
  "createMnemonicWords": () => (/* reexport */ createMnemonicWords),
  "deleteUnconfirmedRequest": () => (/* reexport */ rpc/* deleteUnconfirmedRequest */.wI),
  "deriveWallet": () => (/* reexport */ deriveWallet),
  "exportKeyStoreJSON": () => (/* reexport */ exportKeyStoreJSON),
  "exportMnemonic": () => (/* reexport */ wallet_exportMnemonic),
  "exportPrivateKey": () => (/* reexport */ wallet_exportPrivateKey),
  "freezeLegacyWallet": () => (/* reexport */ freezeLegacyWallet),
  "fromKeyStore": () => (/* reexport */ keystore/* fromKeyStore */.M),
  "getDerivableAccounts": () => (/* reexport */ getDerivableAccounts),
  "getError": () => (/* reexport */ services_send/* getError */.by),
  "getLegacyWalletRecords": () => (/* reexport */ getLegacyWalletRecords),
  "getLegacyWallets": () => (/* reexport */ getLegacyWallets),
  "getSupportedNetworks": () => (/* reexport */ account/* getSupportedNetworks */.JB),
  "getUnconfirmedRequests": () => (/* reexport */ rpc/* getUnconfirmedRequests */.SP),
  "getWallet": () => (/* reexport */ getWallet),
  "getWalletPrimary": () => (/* reexport */ getWalletPrimary),
  "getWallets": () => (/* reexport */ getWallets),
  "hasPassword": () => (/* reexport */ wallet_password/* hasPassword */.fN),
  "hasWallet": () => (/* reexport */ wallet/* hasWallet */.Sx),
  "isLocked": () => (/* reexport */ locker/* isLocked */.p1),
  "lockWallet": () => (/* reexport */ locker/* lockWallet */.tR),
  "pushUnconfirmedRequest": () => (/* reexport */ rpc/* pushUnconfirmedRequest */.xD),
  "recoverWalletFromKeyStoreJSON": () => (/* reexport */ recoverWalletFromKeyStoreJSON),
  "recoverWalletFromMnemonic": () => (/* reexport */ recoverWalletFromMnemonic),
  "recoverWalletFromPrivateKey": () => (/* reexport */ recoverWalletFromPrivateKey),
  "rejectMaskAccount": () => (/* reexport */ account/* rejectMaskAccount */.RG),
  "rejectRequest": () => (/* reexport */ services_send/* rejectRequest */.QN),
  "removeWallet": () => (/* reexport */ removeWallet),
  "renameWallet": () => (/* reexport */ renameWallet),
  "resetMaskAccount": () => (/* reexport */ account/* resetMaskAccount */.X3),
  "resolveMaskAccount": () => (/* reexport */ account/* resolveMaskAccount */.Zb),
  "selectMaskAccount": () => (/* reexport */ account/* selectMaskAccount */.RS),
  "send": () => (/* reexport */ services_send/* send */.lW),
  "sendPayload": () => (/* reexport */ services_send/* sendPayload */.yT),
  "setDefaultMaskAccount": () => (/* reexport */ account/* setDefaultMaskAccount */.Ih),
  "setPassword": () => (/* reexport */ wallet_password/* setPassword */.FY),
  "shiftUnconfirmedRequest": () => (/* reexport */ rpc/* shiftUnconfirmedRequest */.fr),
  "signPersonalMessage": () => (/* reexport */ signPersonalMessage),
  "signTransaction": () => (/* reexport */ wallet_signTransaction),
  "signTypedData": () => (/* reexport */ signTypedData),
  "topUnconfirmedRequest": () => (/* reexport */ rpc/* topUnconfirmedRequest */.Nt),
  "unlockWallet": () => (/* reexport */ locker/* unlockWallet */.xG),
  "updateMaskAccount": () => (/* reexport */ account/* updateMaskAccount */.Hb),
  "updateUnconfirmedRequest": () => (/* reexport */ rpc/* updateUnconfirmedRequest */.v0),
  "updateWallet": () => (/* reexport */ wallet/* updateWallet */.K8),
  "validatePassword": () => (/* reexport */ wallet_password/* validatePassword */.uo),
  "verifyPassword": () => (/* reexport */ wallet_password/* verifyPassword */.Gv)
});

// EXTERNAL MODULE: ./src/plugins/Wallet/services/account.ts
var account = __webpack_require__(65703);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/keystore/index.ts + 2 modules
var keystore = __webpack_require__(80956);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var src = __webpack_require__(68440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ethereumjs-util@7.1.0/node_modules/ethereumjs-util/dist.browser/index.js
var dist_browser = __webpack_require__(98257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@metamask+eth-sig-util@4.0.0/node_modules/@metamask/eth-sig-util/dist/index.js
var dist = __webpack_require__(66058);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/evm/utils/payload.ts
var payload = __webpack_require__(2046);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+mask-wallet-core@0.1.0-20211013082857-eb62e5f_protobufjs@6.11.2/node_modules/@dimensiondev/mask-wallet-core/proto/index.esm.js
var index_esm = __webpack_require__(23015);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(10503);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/index.ts + 1 modules
var database = __webpack_require__(36962);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/password.ts
var wallet_password = __webpack_require__(87368);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/maskwallet/index.ts


const Worker = new shared_base_src/* OnDemandWorker */.G1(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(5258), __webpack_require__.b)), {
    name: 'MaskWallet'
});
var ErrorCode;
(function(ErrorCode) {
    ErrorCode["KdfParamsInvalid"] = '-3001';
    ErrorCode["PasswordIncorrect"] = '-3002';
    ErrorCode["InvalidKeyIvLength"] = '-3003';
    ErrorCode["InvalidCiphertext"] = '-3004';
    ErrorCode["InvalidPrivateKey"] = '-3005';
    ErrorCode["InvalidPublicKey"] = '-3006';
    ErrorCode["InvalidMnemonic"] = '-3007';
    ErrorCode["InvalidSeed"] = '-3008';
    ErrorCode["InvalidDerivationPath"] = '-3009';
    ErrorCode["InvalidKeyStoreJSON"] = '-3010';
    ErrorCode["NotSupportedPublicKeyType"] = '-3011';
    ErrorCode["NotSupportedCurve"] = '-3012';
    ErrorCode["NotSupportedCipher"] = '-3013';
})(ErrorCode || (ErrorCode = {}));
const ErrorMessage = {
    [ErrorCode.KdfParamsInvalid]: 'Invalid kdf parameters.',
    [ErrorCode.PasswordIncorrect]: 'Incorrect payment password.',
    [ErrorCode.InvalidKeyIvLength]: 'Invalid key IV length.',
    [ErrorCode.InvalidCiphertext]: 'Invalid cipher text.',
    [ErrorCode.InvalidPrivateKey]: 'Invalid private key.',
    [ErrorCode.InvalidPublicKey]: 'Invalid public key.',
    [ErrorCode.InvalidMnemonic]: 'Invalid mnemonic words.',
    [ErrorCode.InvalidSeed]: 'Invalid seed.',
    [ErrorCode.InvalidDerivationPath]: 'Invalid derivation path.',
    [ErrorCode.InvalidKeyStoreJSON]: 'Invalid keystore JSON.',
    [ErrorCode.NotSupportedPublicKeyType]: 'Not supported public key type.',
    [ErrorCode.NotSupportedCurve]: 'Not supported curve.',
    [ErrorCode.NotSupportedCipher]: 'Not supported cipher.'
};
function send(input, output) {
    return (value)=>{
        return new Promise((resolve, reject)=>{
            const req = {
                id: Math.random(),
                data: {
                    [input]: value
                }
            };
            Worker.postMessage(req);
            Worker.addEventListener('message', function f(message) {
                if (message.data.id !== req.id) return;
                Worker.removeEventListener('message', f);
                const data = message.data;
                if (data.response.error) return reject(new Error(ErrorMessage[data.response.error.errorCode] || 'Unknown Error'));
                resolve(data.response[output]);
            });
        });
    };
}
const Coin = index_esm.api.Coin;
const StoredKeyType = index_esm.api.StoredKeyType;
const StoredKeyImportType = index_esm.api.StoredKeyImportType;
const StoredKeyExportType = index_esm.api.StoredKeyExportType;
const loadStoredKey = send('param_load_stored_key', 'resp_load_stored_key');
const createStoredKey = send('param_create_stored_key', 'resp_create_stored_key');
const importPrivateKey = send('param_import_private_key', 'resp_import_private_key');
const importMnemonic = send('param_import_mnemonic', 'resp_import_mnemonic');
const importJSON = send('param_import_json', 'resp_import_json');
const createAccountOfCoinAtPath = send('param_create_account_of_coin_at_path', 'resp_create_account_of_coin_at_path');
const exportPrivateKey = send('param_export_private_key', 'resp_export_private_key');
const exportPrivateKeyOfPath = send('param_export_private_key_of_path', 'resp_export_private_key');
const exportMnemonic = send('param_export_mnemonic', 'resp_export_mnemonic');
const exportKeyStoreJSONOfAddress = send('param_export_key_store_json_of_address', 'resp_export_key_store_json');
const exportKeyStoreJSONOfPath = send('param_export_key_store_json_of_path', 'resp_export_key_store_json');
const exportUpdateKeyStorePassword = send('param_update_key_store_password', 'resp_update_key_store_password');
const signTransaction = send('param_sign_transaction', 'resp_sign_transaction');
const getLibVersion = send('param_get_version', 'resp_get_version');
const validate = send('param_validation', 'resp_validate');
const getSupportImportTypes = send('param_get_stored_key_import_type', 'resp_get_stored_key_import_type');
const getSupportExportTypes = send('param_get_stored_key_export_type', 'resp_get_stored_key_export_type');

// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(76536);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/send.ts
var services_send = __webpack_require__(89993);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/wallet.ts
var wallet = __webpack_require__(91541);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/locker.ts
var locker = __webpack_require__(32152);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/index.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];














function bumpDerivationPath(path = `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`) {
    const splitted = path.split('/');
    const index = Number.parseInt((0,last/* default */.Z)(splitted) ?? '', 10);
    if (Number.isNaN(index) || index < 0 || splitted.length !== 6) throw new Error('Invalid derivation path.');
    return [
        ...splitted.slice(0, -1),
        index + 1
    ].join('/');
}
function sanitizeWallet(wallet) {
    return (0,omit/* default */.Z)(wallet, [
        'storedKeyInfo'
    ]);
}
// wallet db

// password

// locker

async function getWallet(address) {
    if (native_rpc/* hasNativeAPI */._) {
        const wallets = await getWallets();
        return wallets.find((x)=>(0,base_src/* isSameAddress */.Wr)(x.address, address)
        );
    }
    const wallet = await database/* getWallet */.iL(address);
    if (!wallet?.hasStoredKeyInfo) return null;
    return sanitizeWallet(wallet);
}
async function getWallets() {
    if (native_rpc/* hasNativeAPI */._) {
        const response = await (0,services_send/* sendPayload */.yT)((0,payload/* createPayload */.Z4)(0, types/* EthereumMethodType.ETH_ACCOUNTS */.W8.ETH_ACCOUNTS, []));
        const accounts = response.result;
        const address = (0,head/* default */.Z)(accounts) ?? '';
        if (!address) return [];
        const now = new Date();
        const address_ = (0,formatter/* formatEthereumAddress */.j8)(address);
        return [
            {
                id: address_,
                name: 'Mask Network',
                address: address_,
                createdAt: now,
                updatedAt: now,
                configurable: false,
                hasStoredKeyInfo: false,
                hasDerivationPath: false
            }, 
        ];
    }
    const wallets = await database/* getWallets */.MX();
    return wallets.filter((x)=>x.hasStoredKeyInfo
    ).map(sanitizeWallet);
}
function createMnemonicWords() {
    return src/* generateMnemonic */.OF().split(' ');
}
async function getWalletPrimary() {
    if (native_rpc/* hasNativeAPI */._) return null;
    return (0,head/* default */.Z)((await database/* getWallets */.MX()).filter((x)=>x.storedKeyInfo?.type === index_esm.api.StoredKeyType.Mnemonic
    ).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime()
    )) ?? null;
}
async function getDerivableAccounts(mnemonic, page, pageSize = 10) {
    const oneTimePassword = 'MASK';
    const imported = await importMnemonic({
        mnemonic,
        password: oneTimePassword
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const accounts = [];
    for(let i = pageSize * page; i < pageSize * (page + 1); i += 1){
        const derivationPath = `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/${i}`;
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            password: oneTimePassword,
            derivationPath,
            StoredKeyData: imported.StoredKey.data
        });
        if (!created?.account?.address) throw new Error(`Failed to create account at path: ${derivationPath}.`);
        accounts.push({
            index: i,
            address: created.account.address,
            derivationPath
        });
    }
    return accounts;
}
async function wallet_signTransaction(address, config) {
    const password_ = await wallet_password/* INTERNAL_getPasswordRequired */._M();
    const wallet = await database/* getWalletRequired */.zr(address);
    const sign_input = {
        amount: config.value ?? null,
        gas_limit: config.gas ? (0,lib.toHex)(config.gas) : null,
        gas_price: config.gasPrice?.toString() ?? null,
        chain_id: config.chainId,
        max_fee_per_gas: config.maxFeePerGas ?? null,
        max_inclusion_fee_per_gas: config.maxFeePerGas ?? null,
        nonce: config.nonce ? (0,lib.toHex)(config.nonce) : null,
        to_address: config.to ? config.to.toLowerCase() : null,
        payload: config.data ? new Uint8Array((0,lib.hexToBytes)(config.data)) : new Uint8Array()
    };
    const signed = await signTransaction({
        password: password_,
        coin: index_esm.api.Coin.Ethereum,
        storedKeyData: wallet.storedKeyInfo?.data,
        derivationPath: wallet.derivationPath,
        sign_input
    });
    if (!signed?.sign_output?.encoded) throw new Error('Failed to sign transaction.');
    return `0x${Buffer.from(signed.sign_output.encoded).toString('hex')}`;
}
async function signPersonalMessage(message, address, password1) {
    return (0,dist.personalSign)({
        privateKey: (0,dist_browser.toBuffer)(`0x${await wallet_exportPrivateKey(address, password1)}`),
        data: message
    });
}
async function signTypedData(address, data, password2) {
    return (0,dist.signTypedData)({
        privateKey: (0,dist_browser.toBuffer)(`0x${await wallet_exportPrivateKey(address, password2)}`),
        data: JSON.parse(data),
        version: dist.SignTypedDataVersion.V4
    });
}
async function deriveWallet(name) {
    const password_ = await wallet_password/* INTERNAL_getPasswordRequired */._M();
    // derive wallet base on the primary wallet
    const primaryWallet = await getWalletPrimary();
    if (!primaryWallet?.storedKeyInfo) throw new Error('Cannot find the primary wallet.');
    let derivedTimes = 0;
    let latestDerivationPath = primaryWallet.latestDerivationPath ?? primaryWallet.derivationPath;
    if (!latestDerivationPath) throw new Error('Failed to derive wallet without derivation path.');
    // eslint-disable-next-line no-constant-condition
    while(true){
        derivedTimes += 1;
        // protect from endless looping
        if (derivedTimes >= Wallet_src/* MAX_DERIVE_COUNT */.IX) {
            await database/* updateWallet */.K8(primaryWallet.address, {
                latestDerivationPath
            });
            throw new Error('Exceed the max derivation times.');
        }
        // bump index
        latestDerivationPath = bumpDerivationPath(latestDerivationPath);
        // derive a new wallet
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            name,
            password: password_,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!created?.account?.address) throw new Error(`Failed to create account at path: ${latestDerivationPath}.`);
        // check its existence in DB
        if (await database/* hasWallet */.Sx(created.account.address)) continue;
        // update the primary wallet
        await database/* updateWallet */.K8(primaryWallet.address, {
            latestDerivationPath
        });
        // found a valid candidate, get the private key of it
        const exported = await exportPrivateKeyOfPath({
            coin: index_esm.api.Coin.Ethereum,
            password: password_,
            derivationPath: latestDerivationPath,
            StoredKeyData: primaryWallet.storedKeyInfo.data
        });
        if (!exported?.privateKey) throw new Error(`Failed to export private key at path: ${latestDerivationPath}`);
        // import the candidate by the private key
        return recoverWalletFromPrivateKey(name, exported.privateKey);
    }
}
async function renameWallet(address, name) {
    const name_ = name.trim();
    if (name_.length <= 0 || name_.length > 12) throw new Error('Invalid wallet name.');
    await database/* updateWallet */.K8(address, {
        name: name_
    });
}
async function removeWallet(address, unverifiedPassword) {
    await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    // delete a wallet with derivationPath is not allowed
    const wallet = await database/* getWalletRequired */.zr(address);
    if (wallet.derivationPath) throw new Error('Illegal operation.');
    await database/* deleteWallet */.tJ(wallet.address);
}
async function wallet_exportMnemonic(address, unverifiedPassword) {
    if (unverifiedPassword) await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    const password_ = await wallet_password/* INTERNAL_getPasswordRequired */._M();
    const wallet = await database/* getWalletRequired */.zr(address);
    if (wallet.storedKeyInfo?.type !== index_esm.api.StoredKeyType.Mnemonic) throw new Error(`Cannot export mnemonic words of ${address}.`);
    const exported = await exportMnemonic({
        password: password_,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!exported?.mnemonic) throw new Error(`Failed to export mnemonic words of ${address}.`);
    return exported.mnemonic;
}
async function wallet_exportPrivateKey(address, unverifiedPassword) {
    if (unverifiedPassword) await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    const password_ = await wallet_password/* INTERNAL_getPasswordRequired */._M();
    const wallet = await database/* getWalletRequired */.zr(address);
    if (!wallet.storedKeyInfo) throw new Error(`Cannot export private key of ${address}.`);
    const exported = wallet.derivationPath ? await exportPrivateKeyOfPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: wallet.derivationPath ?? `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
        password: password_,
        StoredKeyData: wallet.storedKeyInfo.data
    }) : await exportPrivateKey({
        coin: index_esm.api.Coin.Ethereum,
        password: password_,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!exported?.privateKey) throw new Error(`Failed to export private key of ${address}.`);
    return exported.privateKey;
}
async function exportKeyStoreJSON(address, unverifiedPassword) {
    if (unverifiedPassword) await wallet_password/* verifyPasswordRequired */.tl(unverifiedPassword);
    const password_ = await wallet_password/* INTERNAL_getPasswordRequired */._M();
    const wallet = await database/* getWalletRequired */.zr(address);
    if (!wallet.storedKeyInfo) throw new Error(`Cannot export private key of ${address}.`);
    const exported = wallet.derivationPath ? await exportKeyStoreJSONOfPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: wallet.derivationPath ?? `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
        password: password_,
        newPassword: unverifiedPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    }) : await exportKeyStoreJSONOfAddress({
        coin: index_esm.api.Coin.Ethereum,
        password: password_,
        newPassword: unverifiedPassword,
        StoredKeyData: wallet.storedKeyInfo.data
    });
    if (!exported?.json) throw new Error(`Failed to export keystore JSON of ${address}.`);
    return exported.json;
}
async function recoverWalletFromMnemonic(name, mnemonic, derivationPath = `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`, initialPassword) {
    const password_ = initialPassword ?? await wallet_password/* INTERNAL_getPasswordRequired */._M();
    const imported = await importMnemonic({
        mnemonic,
        password: password_
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    if (await database/* hasStoredKeyInfo */.Ox(imported.StoredKey)) {
        const exported = await exportPrivateKeyOfPath({
            coin: index_esm.api.Coin.Ethereum,
            derivationPath,
            password: password_,
            StoredKeyData: imported.StoredKey.data
        });
        if (!exported?.privateKey) throw new Error(`Failed to export private key at path: ${derivationPath}`);
        return recoverWalletFromPrivateKey(name, exported.privateKey);
    } else {
        const created = await createAccountOfCoinAtPath({
            coin: index_esm.api.Coin.Ethereum,
            name,
            password: password_,
            derivationPath,
            StoredKeyData: imported.StoredKey.data
        });
        if (!created?.account?.address) throw new Error('Failed to create the wallet.');
        return database/* addWallet */.ry(created.account.address, name, derivationPath, imported.StoredKey);
    }
}
async function recoverWalletFromPrivateKey(name, privateKey, initialPassword_) {
    const password_ = initialPassword_ ?? await wallet_password/* INTERNAL_getPasswordRequired */._M();
    const imported = await importPrivateKey({
        coin: index_esm.api.Coin.Ethereum,
        name,
        password: password_,
        privateKey: privateKey.replace(/^0x/, '').trim()
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        name,
        password: password_,
        derivationPath: null,
        StoredKeyData: imported.StoredKey.data
    });
    if (!created?.account?.address) throw new Error('Failed to create the wallet.');
    return database/* addWallet */.ry(created.account.address, name, undefined, imported.StoredKey);
}
async function recoverWalletFromKeyStoreJSON(name, json, jsonPassword) {
    const password_ = await wallet_password/* INTERNAL_getPasswordRequired */._M();
    const imported = await importJSON({
        coin: index_esm.api.Coin.Ethereum,
        json,
        keyStoreJsonPassword: jsonPassword,
        name,
        password: password_
    });
    if (!imported?.StoredKey) throw new Error('Failed to import the wallet.');
    const created = await createAccountOfCoinAtPath({
        coin: index_esm.api.Coin.Ethereum,
        derivationPath: null,
        name,
        password: password_,
        StoredKeyData: imported.StoredKey.data
    });
    if (!created?.account?.address) throw new Error('Failed to create the wallet.');
    return database/* addWallet */.ry(created.account.address, name, undefined, imported.StoredKey);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var wallet_ts_dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
// EXTERNAL MODULE: ../../node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(75367);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts + 1 modules
var openDB = __webpack_require__(55989);
// EXTERNAL MODULE: ./src/plugins/Wallet/database/Wallet.db.ts
var Wallet_db = __webpack_require__(86008);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/helpers.ts

async function getWalletByAddress(t, address) {
    const record = await t.objectStore('Wallet').get(formatEthereumAddress(address));
    return record ? LegacyWalletRecordOutDB(record) : null;
}
function LegacyWalletRecordIntoDB(x) {
    const record = x;
    record.address = formatEthereumAddress(x.address);
    return record;
}
function LegacyWalletRecordOutDB(x) {
    const record = x;
    record.address = (0,formatter/* formatEthereumAddress */.j8)(record.address);
    record.erc20_token_whitelist = x.erc20_token_whitelist ?? new Set();
    record.erc20_token_blacklist = x.erc20_token_blacklist ?? new Set();
    record.erc721_token_whitelist = x.erc721_token_whitelist ?? new Set();
    record.erc721_token_blacklist = x.erc721_token_blacklist ?? new Set();
    record.erc1155_token_whitelist = x.erc1155_token_whitelist ?? new Set();
    record.erc1155_token_blacklist = x.erc1155_token_blacklist ?? new Set();
    return record;
}

// EXTERNAL MODULE: ./src/plugins/Wallet/constants.ts
var constants = __webpack_require__(25302);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/legacyWallet.ts











function sortWallet(a, b) {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
}
async function getLegacyWallets() {
    if (native_rpc/* hasNativeAPI */._) return [];
    const wallets = await getAllWalletRecords();
    return wallets.filter((x)=>x._private_key_ || x.mnemonic.length
    );
}
async function getLegacyWalletRecords() {
    const wallets = await getAllWalletRecords();
    return wallets.filter((x)=>x._private_key_ || x.mnemonic.length
    );
}
async function getAllWalletRecords() {
    const t = (0,openDB/* createTransaction */._X)(await (0,Wallet_db/* createWalletDBAccess */.n)(), 'readonly')('Wallet');
    const records = await t.objectStore('Wallet').getAll();
    const wallets = (await Promise.all(records.map(async (record)=>{
        const walletRecord = LegacyWalletRecordOutDB(record);
        return {
            ...walletRecord,
            _private_key_: await makePrivateKey(walletRecord)
        };
    }))).sort(sortWallet);
    return wallets;
}
async function makePrivateKey(record) {
    // not a managed wallet
    if (!record._private_key_ && !record.mnemonic.length) return '';
    const { privateKey  } = record._private_key_ ? await legacyWallet_recoverWalletFromPrivateKey(record._private_key_) : await recoverWalletFromMnemonicWords(record.mnemonic, record.passphrase, record.path);
    return `0x${(0,shared_base_src/* toHex */.NC)(privateKey)}`;
}
async function freezeLegacyWallet(address) {
    const walletStore = (0,openDB/* createTransaction */._X)(await (0,Wallet_db/* createWalletDBAccess */.n)(), 'readwrite')('Wallet').objectStore('Wallet');
    for await (const cursor of walletStore){
        const wallet = cursor.value;
        if ((0,base_src/* isSameAddress */.Wr)(wallet.address, address)) {
            await cursor.update({
                ...wallet,
                updatedAt: new Date(9999, 1, 1)
            });
            break;
        }
    }
}
async function recoverWalletFromMnemonicWords(mnemonic, passphrase, path = `${constants/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`) {
    const seed = await src/* mnemonicToSeed */.OI(mnemonic.join(' '), passphrase);
    const masterKey = wallet_ts_dist.HDKey.parseMasterSeed(seed);
    const extendedPrivateKey = masterKey.derive(path).extendedPrivateKey;
    const childKey = wallet_ts_dist.HDKey.parseExtendedKey(extendedPrivateKey);
    const wallet = childKey.derive('');
    const walletPublicKey = wallet.publicKey;
    const walletPrivateKey = wallet.privateKey;
    return {
        address: wallet_ts_dist.EthereumAddress.from(walletPublicKey).address,
        privateKey: walletPrivateKey,
        privateKeyValid: true,
        privateKeyInHex: `0x${(0,shared_base_src/* toHex */.NC)(walletPrivateKey)}`,
        path,
        mnemonic,
        passphrase
    };
}
async function legacyWallet_recoverWalletFromPrivateKey(privateKey) {
    const ec = new elliptic.ec('secp256k1');
    const privateKey_ = privateKey.replace(/^0x/, '').trim() // strip 0x
    ;
    const key1 = ec.keyFromPrivate(privateKey_);
    return {
        address: wallet_ts_dist.EthereumAddress.from(key1.getPublic(false, 'array')).address,
        privateKey: (0,shared_base_src/* fromHex */.H_)(privateKey_),
        privateKeyValid: privateKeyVerify(privateKey_),
        privateKeyInHex: privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`,
        mnemonic: []
    };
    function privateKeyVerify(key) {
        if (!/[\da-f]{64}/i.test(key)) return false;
        const k = new bignumber.BigNumber(key, 16);
        const n = new bignumber.BigNumber('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
        return !k.isZero() && k.isLessThan(n);
    }
}

// EXTERNAL MODULE: ./src/plugins/Wallet/services/rpc.ts
var rpc = __webpack_require__(47805);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/index.ts








/***/ }),

/***/ 36962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ry": () => (/* reexport */ wallet/* addWallet */.ry),
  "Q0": () => (/* reexport */ decryptSecret),
  "tJ": () => (/* reexport */ wallet/* deleteWallet */.tJ),
  "lM": () => (/* reexport */ encryptSecret),
  "iL": () => (/* reexport */ wallet/* getWallet */.iL),
  "zr": () => (/* reexport */ wallet/* getWalletRequired */.zr),
  "MX": () => (/* reexport */ wallet/* getWallets */.MX),
  "Tx": () => (/* reexport */ hasSecret),
  "Ox": () => (/* reexport */ wallet/* hasStoredKeyInfo */.Ox),
  "Sx": () => (/* reexport */ wallet/* hasWallet */.Sx),
  "nG": () => (/* reexport */ updateSecret),
  "K8": () => (/* reexport */ wallet/* updateWallet */.K8)
});

// UNUSED EXPORTS: getSecret, hasStoredKeyInfoRequired, hasWalletRequired

// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/database/wallet.ts
var wallet = __webpack_require__(91541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ./src/plugins/Wallet/database/Plugin.db.ts
var Plugin_db = __webpack_require__(26436);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/database/secret.ts



const SECRET_ID = '0';
function derivePBKDF2(password) {
    return crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(password).buffer, 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
}
function deriveAES(key, iv) {
    return crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: iv,
        iterations: 100000,
        hash: 'SHA-256'
    }, key, {
        name: 'AES-KW',
        length: 256
    }, false, [
        'wrapKey',
        'unwrapKey'
    ]);
}
function createAES() {
    return crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
}
function encrypt(message, key, iv) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, message);
}
function decrypt(message, key, iv) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, message);
}
function wrapKey(key, wrapKey1) {
    return crypto.subtle.wrapKey('raw', key, wrapKey1, 'AES-KW');
}
function unwrapKey(key, wrapKey2) {
    return crypto.subtle.unwrapKey('raw', key, wrapKey2, 'AES-KW', 'AES-GCM', false, [
        'encrypt',
        'decrypt'
    ]);
}
function getIV() {
    return crypto.getRandomValues(new Uint8Array(16)).buffer;
}
async function deriveKey(iv, password) {
    return deriveAES(await derivePBKDF2(password), iv);
}
async function getSecret() {
    return Plugin_db/* PluginDB.get */.O.get('secret', SECRET_ID);
}
async function hasSecret() {
    return !!await getSecret();
}
async function encryptSecret(password) {
    const secret = await getSecret();
    if (secret) throw new Error('Failed to encrypt secret.');
    const iv = getIV();
    const key = await deriveKey(iv, password);
    const primaryKey = await createAES();
    const primaryKeyWrapped = await wrapKey(primaryKey, key);
    const message = (0,v4/* default */.Z)() // the primary key never change
    ;
    await Plugin_db/* PluginDB.add */.O.add({
        id: SECRET_ID,
        type: 'secret',
        iv,
        key: primaryKeyWrapped,
        encrypted: await encrypt((0,esm/* encodeText */.YT)(message), primaryKey, iv)
    });
}
async function updateSecret(oldPassword, newPassword) {
    const secret = await getSecret();
    if (!secret) throw new Error('Failed to update secret.');
    const iv = getIV();
    const message = await decryptSecret(oldPassword);
    const key = await deriveKey(iv, newPassword);
    const primaryKey = await createAES();
    const primaryKeyWrapped = await wrapKey(primaryKey, key);
    await Plugin_db/* PluginDB.add */.O.add({
        id: SECRET_ID,
        type: 'secret',
        iv,
        key: primaryKeyWrapped,
        encrypted: await encrypt((0,esm/* encodeText */.YT)(message), primaryKey, iv)
    });
}
async function decryptSecret(password) {
    const secret = await getSecret();
    if (!secret) throw new Error('Failed to decrypt secret.');
    try {
        const key = await deriveKey(secret.iv, password);
        const primaryKey = await unwrapKey(secret.key, key);
        return (0,esm/* decodeText */.rj)(await decrypt(secret.encrypted, primaryKey, secret.iv));
    } catch  {
        return '';
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/wallet/database/index.ts




/***/ }),

/***/ 54328:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(33799)["Buffer"];
// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
(function(root, f) {
  'use strict';
  if ( true && module.exports) module.exports = f();
  else if (root.nacl) root.nacl.util = f();
  else {
    root.nacl = {};
    root.nacl.util = f();
  }
}(this, function() {
  'use strict';

  var util = {};

  function validateBase64(s) {
    if (!(/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s))) {
      throw new TypeError('invalid encoding');
    }
  }

  util.decodeUTF8 = function(s) {
    if (typeof s !== 'string') throw new TypeError('expected string');
    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
    return b;
  };

  util.encodeUTF8 = function(arr) {
    var i, s = [];
    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
    return decodeURIComponent(escape(s.join('')));
  };

  if (typeof atob === 'undefined') {
    // Node.js

    if (typeof Buffer.from !== 'undefined') {
       // Node v6 and later
      util.encodeBase64 = function (arr) { // v6 and later
          return Buffer.from(arr).toString('base64');
      };

      util.decodeBase64 = function (s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
      };

    } else {
      // Node earlier than v6
      util.encodeBase64 = function (arr) { // v6 and later
        return (new Buffer(arr)).toString('base64');
      };

      util.decodeBase64 = function(s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
      };
    }

  } else {
    // Browsers

    util.encodeBase64 = function(arr) {
      var i, s = [], len = arr.length;
      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
      return btoa(s.join(''));
    };

    util.decodeBase64 = function(s) {
      validateBase64(s);
      var i, d = atob(s), b = new Uint8Array(d.length);
      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
      return b;
    };

  }

  return util;

}));


/***/ }),

/***/ 33799:
/***/ (() => {

/* (ignored) */

/***/ })

}]);