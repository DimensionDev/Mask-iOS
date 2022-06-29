"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8273],{

/***/ 28511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AY": () => (/* binding */ detachProfileDB),
/* harmony export */   "As": () => (/* binding */ consistentPersonaDBWriteAccess),
/* harmony export */   "B4": () => (/* binding */ deleteProfileDB),
/* harmony export */   "E8": () => (/* binding */ updatePersonaDB),
/* harmony export */   "E9": () => (/* binding */ createPersonaDB),
/* harmony export */   "Eq": () => (/* binding */ queryPersonasWithPrivateKey),
/* harmony export */   "Hm": () => (/* binding */ queryPersonaDB),
/* harmony export */   "IW": () => (/* binding */ queryProfileDB),
/* harmony export */   "Jx": () => (/* binding */ updateRelationDB),
/* harmony export */   "LY": () => (/* binding */ deletePersonaDB),
/* harmony export */   "N8": () => (/* binding */ createRelationDB),
/* harmony export */   "PF": () => (/* binding */ queryRelationsPagedDB),
/* harmony export */   "Ul": () => (/* binding */ safeDeletePersonaDB),
/* harmony export */   "_P": () => (/* binding */ queryPersonasDB),
/* harmony export */   "ah": () => (/* binding */ createProfileDB),
/* harmony export */   "bF": () => (/* binding */ queryRelations),
/* harmony export */   "cl": () => (/* binding */ createRelationsTransaction),
/* harmony export */   "fl": () => (/* binding */ queryPersonaByProfileDB),
/* harmony export */   "hC": () => (/* binding */ createPersonaDBReadonlyAccess),
/* harmony export */   "hK": () => (/* binding */ createOrUpdateRelationDB),
/* harmony export */   "i2": () => (/* binding */ queryProfilesDB),
/* harmony export */   "lX": () => (/* binding */ createOrUpdatePersonaDB),
/* harmony export */   "o7": () => (/* binding */ createOrUpdateProfileDB),
/* harmony export */   "tc": () => (/* binding */ attachProfileDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76536);


const { queryProfilesDB , queryProfileDB , queryPersonaDB , queryPersonasDB , detachProfileDB , deletePersonaDB , safeDeletePersonaDB , queryPersonaByProfileDB , createPersonaDB , attachProfileDB , createPersonaDBReadonlyAccess , consistentPersonaDBWriteAccess , updatePersonaDB , createOrUpdatePersonaDB , createOrUpdateProfileDB , createProfileDB , createRelationDB , createRelationsTransaction , deleteProfileDB , queryRelationsPagedDB , updateRelationDB , queryPersonasWithPrivateKey , queryRelations , createOrUpdateRelationDB ,  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 5388).then(__webpack_require__.bind(__webpack_require__, 35388)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(9442), __webpack_require__.e(5989)]).then(__webpack_require__.bind(__webpack_require__, 79442)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 93340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ createPostDB),
/* harmony export */   "hZ": () => (/* binding */ queryPostsDB),
/* harmony export */   "q3": () => (/* binding */ queryPostDB),
/* harmony export */   "rr": () => (/* binding */ updatePostDB),
/* harmony export */   "tr": () => (/* binding */ withPostDBTransaction),
/* harmony export */   "xN": () => (/* binding */ queryPostPagedDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76536);


const { createPostDB , updatePostDB , queryPostDB , queryPostsDB , queryPostPagedDB , withPostDBTransaction  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 9772).then(__webpack_require__.bind(__webpack_require__, 39772)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(6558)]).then(__webpack_require__.bind(__webpack_require__, 6558)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 48273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addUnconfirmedBackup": () => (/* reexport */ addUnconfirmedBackup),
  "backupPersonaMnemonicWords": () => (/* reexport */ backupPersonaMnemonicWords),
  "backupPersonaPrivateKey": () => (/* reexport */ backupPersonaPrivateKey),
  "createBackupFile": () => (/* reexport */ createBackupFile),
  "generateBackupPreviewInfo": () => (/* reexport */ generateBackupPreviewInfo),
  "getUnconfirmedBackup": () => (/* reexport */ getUnconfirmedBackup),
  "mobile_generateBackupJSON": () => (/* reexport */ mobile_generateBackupJSON),
  "restoreUnconfirmedBackup": () => (/* reexport */ restoreUnconfirmedBackup)
});

// EXTERNAL MODULE: ../backup-format/src/index.ts + 9 modules
var src = __webpack_require__(50871);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(28511);
// EXTERNAL MODULE: ./background/database/post/index.ts
var database_post = __webpack_require__(93340);
;// CONCATENATED MODULE: ./background/services/backup/internal_create.ts




// Well, this is a bit of a hack, because we have not move those two parts into this project yet.
let backupPlugins;
let backupWallets;
function delegateWalletBackup(f) {
    backupWallets = f;
}
function delegatePluginBackup(f) {
    backupPlugins = f;
}
/**
 * @internal
 * DO NOT expose this function as a service.
 */ // TODO: use a single readonly transaction in this operation.
async function createNewBackup(options) {
    const { noPersonas , noPosts , noProfiles , noWallets , onlyForPersona  } = options;
    const file = (0,src/* createEmptyNormalizedBackup */.ee)();
    const { meta , personas , posts , profiles , relations , settings  } = file;
    meta.version = 2;
    meta.maskVersion = (0,esm/* Some */.bD)("v1.29.12-2649-g196eec807-dirty" || 0);
    meta.createdAt = (0,esm/* Some */.bD)(new Date());
    settings.grantedHostPermissions = (await browser.permissions.getAll()).origins || [];
    await Promise.allSettled([
        noPersonas || backupPersonas(onlyForPersona ? [
            onlyForPersona
        ] : undefined),
        noProfiles || backupProfiles(onlyForPersona),
        noPersonas && noProfiles || backupAllRelations(),
        noPosts || backupPosts(),
        noWallets || backupWallets().then((w)=>file.wallets = w
        ),
        backupPlugins().then((p)=>file.plugins = p
        ), 
    ]);
    return file;
    async function backupPersonas(of) {
        const data = await (0,db/* queryPersonasDB */._P)({
            initialized: true,
            hasPrivateKey: options.hasPrivateKeyOnly,
            identifiers: of
        }, undefined, true);
        for (const persona of data){
            personas.set(persona.identifier, {
                identifier: persona.identifier,
                nickname: persona.nickname ? (0,esm/* Some */.bD)(persona.nickname) : esm/* None */.Hq,
                publicKey: persona.publicKey,
                privateKey: persona.privateKey ? (0,esm/* Some */.bD)(persona.privateKey) : esm/* None */.Hq,
                localKey: persona.localKey ? (0,esm/* Some */.bD)(persona.localKey) : esm/* None */.Hq,
                createdAt: persona.createdAt ? (0,esm/* Some */.bD)(persona.createdAt) : esm/* None */.Hq,
                updatedAt: persona.updatedAt ? (0,esm/* Some */.bD)(persona.updatedAt) : esm/* None */.Hq,
                mnemonic: persona.mnemonic ? (0,esm/* Some */.bD)({
                    hasPassword: persona.mnemonic.parameter.withPassword,
                    path: persona.mnemonic.parameter.path,
                    words: persona.mnemonic.words
                }) : esm/* None */.Hq,
                linkedProfiles: persona.linkedProfiles
            });
        }
    }
    async function backupPosts() {
        const data = await (0,database_post/* queryPostsDB */.hZ)(()=>true
        );
        for (const post of data){
            let recipients = {
                type: 'public'
            };
            if (post.recipients !== 'everyone') {
                recipients = {
                    type: 'e2e',
                    receivers: new Map()
                };
                for (const [recipient, date] of post.recipients){
                    recipients.receivers.set(recipient, [
                        {
                            at: date,
                            type: 'direct'
                        }
                    ]);
                }
            }
            posts.set(post.identifier, {
                identifier: post.identifier,
                foundAt: post.foundAt,
                interestedMeta: post.interestedMeta || new Map(),
                postBy: post.postBy,
                encryptBy: post.encryptBy ? (0,esm/* Some */.bD)(post.encryptBy) : esm/* None */.Hq,
                postCryptoKey: post.postCryptoKey ? (0,esm/* Some */.bD)(post.postCryptoKey) : esm/* None */.Hq,
                summary: post.summary ? (0,esm/* Some */.bD)(post.summary) : esm/* None */.Hq,
                url: post.url ? (0,esm/* Some */.bD)(post.url) : esm/* None */.Hq,
                recipients: (0,esm/* Some */.bD)(recipients)
            });
        }
    }
    async function backupProfiles(of) {
        const data = await (0,db/* queryProfilesDB */.i2)({
            hasLinkedPersona: true
        });
        for (const profile of data){
            if (of) {
                if (!profile.linkedPersona) continue;
                if (profile.linkedPersona !== of) continue;
            }
            profiles.set(profile.identifier, {
                identifier: profile.identifier,
                nickname: profile.nickname ? (0,esm/* Some */.bD)(profile.nickname) : esm/* None */.Hq,
                localKey: profile.localKey ? (0,esm/* Some */.bD)(profile.localKey) : esm/* None */.Hq,
                createdAt: profile.createdAt ? (0,esm/* Some */.bD)(profile.createdAt) : esm/* None */.Hq,
                updatedAt: profile.updatedAt ? (0,esm/* Some */.bD)(profile.updatedAt) : esm/* None */.Hq,
                linkedPersona: profile.linkedPersona ? (0,esm/* Some */.bD)(profile.linkedPersona) : esm/* None */.Hq
            });
        }
    }
    async function backupAllRelations() {
        const data = await (0,db/* queryRelations */.bF)();
        for (const relation of data){
            relations.push({
                favor: relation.favor,
                persona: relation.linked,
                profile: relation.profile
            });
        }
    }
}

;// CONCATENATED MODULE: ./background/services/backup/create.ts


async function mobile_generateBackupJSON(options) {
    if (false) {}
    const { hasPrivateKeyOnly , noPersonas , noPosts , noProfiles , noWallets  } = options;
    const backup = await createNewBackup({
        hasPrivateKeyOnly,
        noPersonas,
        noPosts,
        noProfiles,
        noWallets
    });
    return (0,src/* generateBackupRAW */.ck)(backup);
}
async function generateBackupPreviewInfo() {
    // can we avoid create a full backup?
    const backup = await createNewBackup({});
    return (0,src/* getBackupPreviewInfo */.Vt)(backup);
}
async function createBackupFile(options) {
    const { excludeBase , excludeWallet  } = options;
    const backup = await createNewBackup({
        noPersonas: excludeBase,
        noPosts: excludeBase,
        noProfiles: excludeBase,
        noWallets: excludeWallet
    });
    const file = (0,src/* generateBackupRAW */.ck)(backup);
    const personaNickNames = [
        ...backup.personas.values()
    ].map((p)=>p.nickname.unwrapOr('')
    ).filter((x)=>x
    );
    return {
        file,
        personaNickNames
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./background/services/helper/popup-opener.ts
var popup_opener = __webpack_require__(31118);
// EXTERNAL MODULE: ./background/services/helper/request-permission.ts
var request_permission = __webpack_require__(39126);
// EXTERNAL MODULE: ./shared/messages.ts
var messages = __webpack_require__(29130);
;// CONCATENATED MODULE: ./background/services/backup/internal_restore.ts




// Well, this is a bit of a hack, because we have not move those two parts into this project yet.
// TODO: MV3 support
let restorePlugins;
let restoreWallets;
function delegateWalletRestore(f) {
    restoreWallets = f;
}
function delegatePluginRestore(f) {
    restorePlugins = f;
}
async function restoreNormalizedBackup(backup) {
    const { plugins , posts , wallets  } = backup;
    await restorePersonas(backup);
    await restorePosts(posts.values());
    if (true) {
        if (wallets.length) {
            await restoreWallets(wallets);
        }
        await restorePlugins(plugins);
    }
    if (backup.personas.size || backup.profiles.size) messages/* MaskMessages.events.ownPersonaChanged.sendToAll */.q.events.ownPersonaChanged.sendToAll(undefined);
}
async function restorePersonas(backup) {
    const { personas , profiles , relations  } = backup;
    await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        for (const [id, persona] of personas){
            for (const [id2] of persona.linkedProfiles){
                const state = {
                    connectionConfirmState: 'confirmed'
                };
                persona.linkedProfiles.set(id2, state);
            }
            await (0,db/* createOrUpdatePersonaDB */.lX)({
                identifier: id,
                publicKey: persona.publicKey,
                privateKey: persona.privateKey.unwrapOr(undefined),
                createdAt: persona.createdAt.unwrapOr(undefined),
                updatedAt: persona.updatedAt.unwrapOr(undefined),
                localKey: persona.localKey.unwrapOr(undefined),
                nickname: persona.nickname.unwrapOr(undefined),
                mnemonic: persona.mnemonic.map((mnemonic)=>({
                        words: mnemonic.words,
                        parameter: {
                            path: mnemonic.path,
                            withPassword: mnemonic.hasPassword
                        }
                    })
                ).unwrapOr(undefined),
                linkedProfiles: persona.linkedProfiles,
                // "login" again because this is the restore process.
                // We need to explicitly set this flag because the backup may already in the database (but marked as "logout").
                hasLogout: false
            }, {
                explicitUndefinedField: 'ignore',
                linkedProfiles: 'merge'
            }, t);
        }
        for (const [id1, profile] of profiles){
            await (0,db/* createOrUpdateProfileDB */.o7)({
                identifier: id1,
                nickname: profile.nickname.unwrapOr(undefined),
                localKey: profile.localKey.unwrapOr(undefined),
                linkedPersona: profile.linkedPersona.unwrapOr(undefined),
                createdAt: profile.createdAt.unwrapOr(new Date()),
                updatedAt: profile.updatedAt.unwrapOr(new Date())
            }, t);
        }
        for (const relation of relations){
            await (0,db/* createOrUpdateRelationDB */.hK)({
                profile: relation.profile,
                linked: relation.persona,
                favor: relation.favor
            }, t);
        }
        if (!relations.length) {
            for (const persona of personas.values()){
                if (!persona.privateKey) continue;
                for (const profile of profiles.values()){
                    await (0,db/* createOrUpdateRelationDB */.hK)({
                        favor: shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED,
                        linked: persona.identifier,
                        profile: profile.identifier
                    }, t);
                }
            }
        }
    });
}
function restorePosts(backup) {
    return (0,database_post/* withPostDBTransaction */.tr)(async (t)=>{
        for (const post of backup){
            const rec = {
                identifier: post.identifier,
                foundAt: post.foundAt,
                postBy: post.postBy,
                recipients: 'everyone'
            };
            if (post.encryptBy.some) rec.encryptBy = post.encryptBy.val;
            if (post.postCryptoKey.some) rec.postCryptoKey = post.postCryptoKey.val;
            if (post.summary.some) rec.summary = post.summary.val;
            if (post.url.some) rec.url = post.url.val;
            if (post.interestedMeta.size) rec.interestedMeta = post.interestedMeta;
            if (post.recipients.some) {
                const { val  } = post.recipients;
                if (val.type === 'public') rec.recipients = 'everyone';
                else {
                    const map = new Map();
                    for (const [id, detail] of val.receivers){
                        map.set(id, {
                            reason: detail.map((x)=>({
                                    at: x.at,
                                    type: 'direct'
                                })
                            )
                        });
                    }
                }
            }
            // TODO: have a createOrUpdatePostDB
            if (await (0,database_post/* queryPostDB */.q3)(post.identifier, t)) await (0,database_post/* updatePostDB */.rr)(rec, 'override', t);
            else await (0,database_post/* createPostDB */.$v)(rec, t);
        }
    });
}

;// CONCATENATED MODULE: ./background/services/backup/restore.ts








const unconfirmedBackup = new Map();
async function restoreUnconfirmedBackup({ id , action  }) {
    const backup = unconfirmedBackup.get(id);
    if (!backup) throw new Error('Backup not found');
    const granted = await (0,request_permission/* requestHostPermission */.Xm)(backup.settings.grantedHostPermissions);
    if (!granted) return;
    if (action === 'confirm') await restoreNormalizedBackup(backup);
    else if (action === 'wallet') await (0,popup_opener/* openPopupWindow */.lU)(shared_base_src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered, {
        backupId: id
    });
    else (0,kit_esm/* unreachable */.t1)(action);
}
async function addUnconfirmedBackup(raw) {
    return esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
        const backupObj = JSON.parse(raw);
        const backup = await (0,src/* normalizeBackup */.wY)(backupObj);
        const preview = (0,src/* getBackupPreviewInfo */.Vt)(backup);
        const id = (0,v4/* default */.Z)();
        unconfirmedBackup.set(id, backup);
        return {
            info: preview,
            id
        };
    });
}
async function getUnconfirmedBackup(id) {
    if (!unconfirmedBackup.has(id)) return undefined;
    const backup = unconfirmedBackup.get(id);
    return {
        wallets: backup.wallets.map((x)=>({
                address: x.address,
                name: x.name
            })
        )
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
;// CONCATENATED MODULE: ./background/services/backup/persona.ts



async function backupPersonaMnemonicWords(identifier) {
    const record = await (0,db/* queryPersonaDB */.Hm)(identifier);
    return record?.mnemonic?.words;
}
async function backupPersonaPrivateKey(identifier) {
    const profile = await (0,db/* queryPersonaDB */.Hm)(identifier);
    if (!profile?.privateKey) return undefined;
    const encodePrivateKey = (0,encode/* encode */.c)(profile.privateKey);
    return (0,kit_esm/* encodeArrayBuffer */.ll)(encodePrivateKey);
}

;// CONCATENATED MODULE: ./background/services/backup/index.ts




// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 4 modules
var services = __webpack_require__(60364);
// EXTERNAL MODULE: ../plugin-infra/src/entry-background-worker.ts + 1 modules
var entry_background_worker = __webpack_require__(77031);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(10503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(75367);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/wallet/password.ts
var wallet_password = __webpack_require__(87368);
;// CONCATENATED MODULE: ./src/extension/background-script/BackupService.ts


(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);












delegatePluginBackup(backupAllPlugins);
delegatePluginRestore(async function(backup) {
    const plugins = [
        ...entry_background_worker/* activatedPluginsWorker */.Je
    ];
    const works = new Set();
    for (const [pluginID, item] of Object.entries(backup)){
        const plugin = plugins.find((x)=>x.ID === pluginID
        );
        // should we warn user here?
        if (!plugin) {
            if ([
                ...entry_background_worker/* registeredPluginIDs */.fg
            ].includes(pluginID)) console.warn(`[@masknet/plugin-infra] Found a backup of a not enabled plugin ${plugin}`, item);
            else console.warn(`[@masknet/plugin-infra] Found an unknown plugin backup of ${plugin}`, item);
            continue;
        }
        const f = plugin.backup?.onRestore;
        if (!f) {
            console.warn(`[@masknet/plugin-infra] Found a backup of plugin ${plugin} but it did not register a onRestore callback.`, item);
            continue;
        }
        works.add((async ()=>{
            const x = await f(item);
            if (x.err) console.error(`[@masknet/plugin-infra] Plugin ${plugin} failed to restore its backup.`, item);
            return x.unwrap();
        })());
    }
    await Promise.allSettled(works);
});
delegateWalletBackup(async function() {
    const wallet = await Promise.all([
        backupAllWallets(),
        backupAllLegacyWallets()
    ]);
    return wallet.flat();
});
delegateWalletRestore(async function(backup) {
    const password = await (0,wallet_password/* INTERNAL_getPasswordRequired */._M)();
    for (const wallet of backup){
        try {
            const name = wallet.name;
            if (wallet.privateKey.some) await (0,services.recoverWalletFromPrivateKey)(name, await JWKToKey(wallet.privateKey.val, 'private'), password);
            else if (wallet.mnemonic.some) {
                // fix a backup bug of pre-v2.2.2 versions
                const accounts = await (0,services.getDerivableAccounts)(wallet.mnemonic.val.words, 1, 5);
                const index = accounts.findIndex((0,base_src/* currySameAddress */.DC)(wallet.address));
                await (0,services.recoverWalletFromMnemonic)(name, wallet.mnemonic.val.words, index > -1 ? `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/${index}` : wallet.mnemonic.val.path, password);
            }
        } catch (error) {
            console.error(error);
            continue;
        }
    }
});
async function backupAllWallets() {
    const wallets = await (0,services.getWallets)();
    const allSettled = await Promise.allSettled(wallets.map(async (wallet)=>{
        return {
            ...wallet,
            mnemonic: wallet.derivationPath ? await (0,services.exportMnemonic)(wallet.address) : undefined,
            privateKey: wallet.derivationPath ? undefined : await (0,services.exportPrivateKey)(wallet.address)
        };
    }));
    const wallets_ = allSettled.map((x)=>x.status === 'fulfilled' ? WalletRecordToJSONFormat(x.value) : null
    );
    if (wallets_.some((x)=>!x
    )) throw new Error('Failed to backup wallets.');
    return wallets_.filter(kit_esm/* isNonNull */.GT);
}
async function backupAllLegacyWallets() {
    const x = await (0,services.getLegacyWallets)();
    return x.map(LegacyWalletRecordToJSONFormat);
}
function WalletRecordToJSONFormat(wallet) {
    const backup = {
        name: wallet.name ?? '',
        address: wallet.address,
        createdAt: wallet.createdAt,
        updatedAt: wallet.updatedAt,
        mnemonic: esm/* None */.Hq,
        passphrase: esm/* None */.Hq,
        publicKey: esm/* None */.Hq,
        privateKey: esm/* None */.Hq
    };
    if (wallet.mnemonic && wallet.derivationPath) {
        backup.mnemonic = (0,esm/* Some */.bD)({
            words: wallet.mnemonic,
            path: wallet.derivationPath,
            hasPassword: false
        });
    }
    if (wallet.privateKey) backup.privateKey = (0,esm/* Some */.bD)(keyToJWK(wallet.privateKey, 'private'));
    return backup;
}
function LegacyWalletRecordToJSONFormat(wallet) {
    const backup = {
        name: wallet.name ?? '',
        address: wallet.address,
        createdAt: wallet.createdAt,
        updatedAt: wallet.updatedAt,
        mnemonic: esm/* None */.Hq,
        passphrase: esm/* None */.Hq,
        privateKey: esm/* None */.Hq,
        publicKey: esm/* None */.Hq
    };
    // generate keys for managed wallet
    try {
        const wallet_ = wallet;
        backup.passphrase = (0,esm/* Some */.bD)(wallet_.passphrase);
        if (wallet_.mnemonic?.length) backup.mnemonic = (0,esm/* Some */.bD)({
            words: wallet_.mnemonic.join(' '),
            path: "m/44'/60'/0'/0/0",
            hasPassword: false
        });
        if (wallet_._public_key_ && (0,base_src/* isSameAddress */.Wr)(keyToAddr(wallet_._public_key_, 'public'), wallet.address)) backup.publicKey = (0,esm/* Some */.bD)(keyToJWK(wallet_._public_key_, 'public'));
        if (wallet_._private_key_ && (0,base_src/* isSameAddress */.Wr)(keyToAddr(wallet_._private_key_, 'private'), wallet.address)) backup.privateKey = (0,esm/* Some */.bD)(keyToJWK(wallet_._private_key_, 'private'));
    } catch (error) {
        console.error(error);
    }
    return backup;
}
async function backupAllPlugins() {
    const plugins = Object.create(null);
    const allPlugins = [
        ...entry_background_worker/* activatedPluginsWorker */.Je
    ];
    async function backup(plugin) {
        const backupCreator = plugin.backup?.onBackup;
        if (!backupCreator) return;
        async function backupPlugin() {
            const result = await (0,kit_esm/* timeout */.Vs)(backupCreator(), 3000);
            if (result.none) return;
            // We limit the plugin contributed backups must be simple objects.
            // We may allow plugin to store binary if we're moving to binary backup format like MessagePack.
            plugins[plugin.ID] = result.map(JSON.stringify).map(JSON.parse).val;
        }
        if (false) {}
        return backupPlugin().catch((error)=>console.error(`[@masknet/plugin-infra] Plugin ${plugin.ID} failed to backup`, error)
        );
    }
    await Promise.all(allPlugins.map(backup));
    return plugins;
}
function keyToJWK(key, type) {
    const ec = new elliptic.ec('secp256k1');
    const key_ = key.replace(/^0x/, '');
    const keyPair = type === 'public' ? ec.keyFromPublic(key_) : ec.keyFromPrivate(key_);
    const pubKey = keyPair.getPublic();
    const privKey = keyPair.getPrivate();
    return {
        crv: 'K-256',
        ext: true,
        x: base64(pubKey.getX().toArray()),
        y: base64(pubKey.getY().toArray()),
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC',
        d: type === 'private' ? base64(privKey.toArray()) : undefined
    };
    function base64(nums) {
        return (0,shared_base_src/* toBase64URL */.wi)(new Uint8Array(nums).buffer);
    }
}
async function JWKToKey(jwk, type) {
    const ec = new elliptic.ec('secp256k1');
    if (type === 'public' && jwk.x && jwk.y) {
        const xb = (0,shared_base_src/* fromBase64URL */.mz)(jwk.x);
        const yb = (0,shared_base_src/* fromBase64URL */.mz)(jwk.y);
        const point = new Uint8Array((0,kit_esm/* concatArrayBuffer */.v_)(new Uint8Array([
            0x04
        ]), xb, yb));
        if (await (0,shared_base_src/* isSecp256k1Point */.dK)(point)) return `0x${ec.keyFromPublic(point).getPublic(false, 'hex')}`;
    }
    if (type === 'private' && jwk.d) {
        const db = (0,shared_base_src/* fromBase64URL */.mz)(jwk.d);
        if (await (0,shared_base_src/* isSecp256k1PrivateKey */.Rx)(db)) return `0x${ec.keyFromPrivate(db).getPrivate('hex')}`;
    }
    throw new Error('invalid private key');
}
function keyToAddr(key, type) {
    const ec = new elliptic.ec('secp256k1');
    const key_ = key.replace(/^0x/, '');
    const keyPair = type === 'public' ? ec.keyFromPublic(key_) : ec.keyFromPrivate(key_);
    return dist.EthereumAddress.from(keyPair.getPublic(false, 'array')).address;
}


/***/ }),

/***/ 77031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Je": () => (/* reexport */ activatedPluginsWorker),
  "fg": () => (/* reexport */ entry/* registeredPluginIDs */.fg),
  "Ht": () => (/* reexport */ startPluginWorker)
});

// UNUSED EXPORTS: CurrentSNSNetwork, PluginId, createPluginMessage, createPluginRPC, createPluginRPCGenerator, getPluginDefine, registerPlugin, registeredPlugins

// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(70226);
// EXTERNAL MODULE: ../plugin-infra/src/manager/manage.ts
var manage = __webpack_require__(32670);
;// CONCATENATED MODULE: ../plugin-infra/src/manager/worker.ts

const { startDaemon , activated  } = (0,manage/* createManager */.m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;

;// CONCATENATED MODULE: ../plugin-infra/src/entry-background-worker.ts




/***/ })

}]);