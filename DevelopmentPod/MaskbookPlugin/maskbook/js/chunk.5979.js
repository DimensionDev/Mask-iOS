"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5979],{

/***/ 15979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaskNetworkAPI": () => (/* binding */ MaskNetworkAPI)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60718);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5903);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78778);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10503);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91788);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95175);








const stringToPersonaIdentifier = (input)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier.from */ .ob.from(input).unwrap()
;
const stringToProfileIdentifier = (input)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ProfileIdentifier.from */ .WO.from(input).unwrap()
;
function profileRelationFormatter(p, personaIdentifier, favor = _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .RelationFavor.UNCOLLECTED */ .Kn.UNCOLLECTED) {
    return {
        identifier: p.identifier,
        nickname: p.nickname,
        linkedPersona: !!p.linkedPersona,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        personaIdentifier,
        favor
    };
}
const MaskNetworkAPI = {
    async app_resume () {
        _messages__WEBPACK_IMPORTED_MODULE_6__/* .MaskMessages.events.mobile_app_resumed.sendToAll */ .q.events.mobile_app_resumed.sendToAll();
    },
    async app_suspended () {
        _messages__WEBPACK_IMPORTED_MODULE_6__/* .MaskMessages.events.mobile_app_suspended.sendToAll */ .q.events.mobile_app_suspended.sendToAll();
    },
    app_isPluginEnabled: ({ pluginID  })=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getPluginMinimalModeEnabled */ .ZP.Settings.getPluginMinimalModeEnabled(pluginID).then((x)=>!x
        )
    ,
    app_setPluginStatus: ({ pluginID , enabled  })=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.setPluginMinimalModeEnabled */ .ZP.Settings.setPluginMinimalModeEnabled(pluginID, !enabled)
    ,
    settings_getLaunchPageSettings: async ()=>_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .launchPageSettings.value */ .i4.value
    ,
    settings_getTheme: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getTheme */ .ZP.Settings.getTheme()
    ,
    settings_setTheme: ({ theme  })=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.setTheme */ .ZP.Settings.setTheme(theme)
    ,
    settings_getLanguage: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getLanguage */ .ZP.Settings.getLanguage()
    ,
    settings_setLanguage: ({ language  })=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.setLanguage */ .ZP.Settings.setLanguage(language)
    ,
    settings_createBackupJson: (options)=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Backup.mobile_generateBackupJSON */ .ZP.Backup.mobile_generateBackupJSON(options)
    ,
    settings_getBackupPreviewInfo: async ({ backupInfo  })=>{
        const data = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Backup.addUnconfirmedBackup */ .ZP.Backup.addUnconfirmedBackup(backupInfo);
        return data.unwrap().info;
    },
    settings_restoreBackup: async ({ backupInfo  })=>{
        const { id  } = (await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Backup.addUnconfirmedBackup */ .ZP.Backup.addUnconfirmedBackup(backupInfo)).unwrap();
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Backup.restoreUnconfirmedBackup */ .ZP.Backup.restoreUnconfirmedBackup({
            id,
            action: 'confirm'
        });
    },
    persona_createPersonaByMnemonic: async ({ mnemonic , nickname , password  })=>{
        const x = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_restoreFromMnemonicWords */ .ZP.Identity.mobile_restoreFromMnemonicWords(mnemonic, nickname, password);
        return x;
    },
    persona_queryPersonas: async ({ identifier , hasPrivateKey  })=>{
        const id = identifier ? stringToPersonaIdentifier(identifier) : undefined;
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryPersonas */ .ZP.Identity.mobile_queryPersonas({
            hasPrivateKey,
            identifier: id
        });
        return result;
    },
    persona_queryMyPersonas: async ({ network  })=>{
        return _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryPersonas */ .ZP.Identity.mobile_queryPersonas({
            hasPrivateKey: true,
            network
        });
    },
    persona_updatePersonaInfo: ({ identifier , data  })=>{
        const { nickname  } = data;
        return _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.renamePersona */ .ZP.Identity.renamePersona(stringToPersonaIdentifier(identifier), nickname);
    },
    persona_removePersona: ({ identifier  })=>_extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.deletePersona */ .ZP.Identity.deletePersona(stringToPersonaIdentifier(identifier), 'delete even with private')
    ,
    persona_restoreFromJson: async ({ backup  })=>{
        const { id  } = (await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Backup.addUnconfirmedBackup */ .ZP.Backup.addUnconfirmedBackup(backup)).unwrap();
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Backup.restoreUnconfirmedBackup */ .ZP.Backup.restoreUnconfirmedBackup({
            id,
            action: 'confirm'
        });
    },
    persona_connectProfile: async ({ profileIdentifier , personaIdentifier  })=>{
        const profileId = stringToProfileIdentifier(profileIdentifier);
        const identifier = stringToPersonaIdentifier(personaIdentifier);
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.attachProfile */ .ZP.Identity.attachProfile(profileId, identifier, {
            connectionConfirmState: 'confirmed'
        });
        const [persona] = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryPersonas */ .ZP.Identity.mobile_queryPersonas({
            identifier
        });
        if (!persona?.hasPrivateKey) throw new Error('invalid persona');
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.setupPersona */ .ZP.Identity.setupPersona(identifier);
    },
    persona_disconnectProfile: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.detachProfile */ .ZP.Identity.detachProfile(stringToProfileIdentifier(identifier));
    },
    persona_restoreFromPrivateKey: async ({ privateKey , nickname  })=>{
        const identifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.createPersonaByPrivateKey */ .ZP.Identity.createPersonaByPrivateKey(privateKey, nickname);
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryPersonas */ .ZP.Identity.mobile_queryPersonas({
            identifier
        });
        return persona[0];
    },
    persona_backupPrivateKey: async ({ identifier  })=>{
        const privateKey = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Backup.backupPersonaPrivateKey */ .ZP.Backup.backupPersonaPrivateKey(stringToPersonaIdentifier(identifier));
        return privateKey;
    },
    persona_queryPersonaByPrivateKey: async ({ privateKey  })=>{
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryPersonaByPrivateKey */ .ZP.Identity.mobile_queryPersonaByPrivateKey(privateKey);
        return persona || undefined;
    },
    persona_getCurrentPersonaIdentifier: async ()=>{
        const identifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
        return identifier?.toText();
    },
    persona_setCurrentPersonaIdentifier: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.setCurrentPersonaIdentifier */ .ZP.Settings.setCurrentPersonaIdentifier(stringToPersonaIdentifier(identifier));
    },
    persona_logout: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.logoutPersona */ .ZP.Identity.logoutPersona(stringToPersonaIdentifier(identifier));
    },
    profile_queryProfiles: async ({ network  })=>{
        return _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryProfiles */ .ZP.Identity.mobile_queryProfiles({
            network
        });
    },
    profile_queryMyProfiles: async ({ network  })=>{
        return _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryOwnedProfiles */ .ZP.Identity.mobile_queryOwnedProfiles(network);
    },
    profile_updateProfileInfo: async ({ identifier , data  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.updateProfileInfo */ .ZP.Identity.updateProfileInfo(stringToProfileIdentifier(identifier), data);
    },
    profile_removeProfile: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_removeProfile */ .ZP.Identity.mobile_removeProfile(stringToProfileIdentifier(identifier));
    },
    profile_updateRelation: async ({ profile , linked , favor  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.updateRelation */ .ZP.Identity.updateRelation(stringToProfileIdentifier(profile), stringToPersonaIdentifier(linked), favor);
    },
    profile_queryRelationPaged: async ({ network , after , count  })=>{
        let afterRecord;
        if (after) {
            afterRecord = {
                ...after,
                profile: stringToProfileIdentifier(after.profile),
                linked: stringToPersonaIdentifier(after.linked)
            };
        }
        const records = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.queryRelationPaged */ .ZP.Identity.queryRelationPaged(await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier(), {
            network,
            after: afterRecord
        }, count);
        const profiles = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryProfiles */ .ZP.Identity.mobile_queryProfiles({
            identifiers: records.map((x)=>x.profile
            )
        });
        return profiles.map((profile)=>{
            const record = records.find((x)=>x.profile.toText() === profile.identifier
            );
            const favor = record?.favor;
            const personaIdentifier = record?.linked.toText();
            return profileRelationFormatter(profile, personaIdentifier, favor);
        });
    },
    wallet_updateEthereumAccount: async ({ account  })=>{
        // await WalletRPC.updateAccount({
        //     account,
        //     providerType: ProviderType.MaskWallet,
        // })
        _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_4__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll();
    },
    wallet_updateEthereumChainId: async ({ chainId  })=>{
    // await WalletRPC.updateAccount({
    //     chainId,
    // })
    },
    wallet_getLegacyWalletInfo: async ()=>{
        const wallets = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletRPC.getLegacyWalletRecords */ .V.getLegacyWalletRecords();
        return wallets.map((x)=>({
                address: x.address,
                name: x.name || undefined,
                path: x.path,
                mnemonic: x.mnemonic,
                passphrase: x.passphrase,
                private_key: x._private_key_,
                createdAt: x.createdAt.getTime(),
                updatedAt: x.updatedAt.getTime()
            })
        );
    },
    get_all_indexedDB_records: async ()=>{
        const personas = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryPersonaRecordsFromIndexedDB */ .ZP.Identity.mobile_queryPersonaRecordsFromIndexedDB();
        const profiles = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryProfileRecordFromIndexedDB */ .ZP.Identity.mobile_queryProfileRecordFromIndexedDB();
        const relations = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.mobile_queryRelationsRecordFromIndexedDB */ .ZP.Identity.mobile_queryRelationsRecordFromIndexedDB();
        return {
            personas: personas.map((x)=>({
                    mnemonic: x.mnemonic,
                    nickname: x.nickname,
                    publicKey: x.publicKey,
                    privateKey: x.privateKey,
                    localKey: x.localKey,
                    identifier: x.identifier.toText(),
                    linkedProfiles: Object.fromEntries((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .convertIdentifierMapToRawMap */ .Ap)(x.linkedProfiles)),
                    createdAt: x.createdAt.getTime(),
                    updatedAt: x.createdAt.getTime(),
                    hasLogout: x.hasLogout,
                    uninitialized: x.uninitialized
                })
            ),
            profiles: profiles.map((x)=>({
                    identifier: x.identifier.toText(),
                    nickname: x.nickname,
                    localKey: x.localKey,
                    linkedPersona: x.linkedPersona?.toText(),
                    createdAt: x.createdAt.getTime(),
                    updatedAt: x.updatedAt.getTime()
                })
            ),
            relations: relations.map((x)=>({
                    profile: x.profile.toText(),
                    linked: x.linked.toText(),
                    network: x.network,
                    favor: x.favor
                })
            )
        };
    }
};
function wrapWithAssert(env, f) {
    return (...args)=>{
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__.assertEnvironment)(env);
        return f(...args);
    };
}
try {
    for (const key of Object.keys(MaskNetworkAPI)){
        const fn = MaskNetworkAPI[key];
        if (key.startsWith('SNSAdaptor_')) {
            MaskNetworkAPI[key] = wrapWithAssert(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__.Environment.ContentScript, fn);
        } else {
            MaskNetworkAPI[key] = wrapWithAssert(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__.Environment.ManifestBackground, fn);
        }
    }
} catch  {
// ignore
}


/***/ })

}]);