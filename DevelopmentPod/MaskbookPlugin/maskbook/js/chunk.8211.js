"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8211],{

/***/ 8211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaskNetworkAPI": () => (/* binding */ MaskNetworkAPI)
/* harmony export */ });
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66559);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _social_network_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86911);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21202);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45925);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89987);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63081);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95130);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2214);











const stringToPersonaIdentifier = (str)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .Identifier.fromString */ .xb.fromString(str, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ECKeyIdentifier */ .ob).unwrap()
;
const stringToProfileIdentifier = (str)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .Identifier.fromString */ .xb.fromString(str, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier */ .WO).unwrap()
;
const personaFormatter = (p)=>{
    const profiles = {};
    for (const [key, value] of p.linkedProfiles){
        const k = key.toText();
        Object.assign(profiles, {
            [k]: value === null || value === void 0 ? void 0 : value.connectionConfirmState
        });
    }
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedProfiles: profiles,
        hasPrivateKey: p.hasPrivateKey,
        createdAt: p.createdAt.getTime(),
        updatedAt: p.updatedAt.getTime()
    };
};
const profileFormatter = (p)=>{
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedPersona: !!p.linkedPersona,
        createdAt: p.createdAt.getTime(),
        updatedAt: p.updatedAt.getTime()
    };
};
const profileRelationFormatter = (p, personaIdentifier, favor)=>{
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedPersona: !!p.linkedPersona,
        createdAt: p.createdAt.getTime(),
        updatedAt: p.updatedAt.getTime(),
        personaIdentifier: personaIdentifier,
        favor: favor
    };
};
const personaInformationFormatter = (p)=>{
    const profiles = p.linkedProfiles.map((profileInformation)=>{
        return {
            nickname: profileInformation.nickname,
            identifier: profileInformation.identifier.toText(),
            avatar: profileInformation.avatar
        };
    });
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedProfiles: profiles
    };
};
const MaskNetworkAPI = {
    async app_resume () {
        _messages__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages.events.mobile_app_resumed.sendToAll */ .q.events.mobile_app_resumed.sendToAll();
    },
    async app_suspended () {
        _messages__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages.events.mobile_app_suspended.sendToAll */ .q.events.mobile_app_suspended.sendToAll();
    },
    web_echo: async (arg)=>arg.echo
    ,
    getDashboardURL: async ()=>browser.runtime.getURL('/dashboard.html')
    ,
    getConnectedPersonas: async ()=>{
        const personas = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryMyPersonas */ .ZP.Identity.queryMyPersonas();
        const connectedPersonas = personas.filter((p)=>!p.uninitialized
        ).map((p)=>{
            const profiles = [
                ...p.linkedProfiles
            ];
            const providers = [
                ..._social_network_define__WEBPACK_IMPORTED_MODULE_3__/* .definedSocialNetworkWorkers */ .zq
            ].map((i)=>{
                const profile = profiles.find(([key])=>key.network === i.networkIdentifier
                );
                return {
                    network: i.networkIdentifier,
                    connected: !!profile
                };
            });
            return providers;
        });
        return json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default()(connectedPersonas);
    },
    app_isPluginEnabled: ({ pluginID  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getPluginMinimalModeEnabled */ .ZP.Settings.getPluginMinimalModeEnabled(pluginID).then((x)=>!x
        )
    ,
    app_setPluginStatus: ({ pluginID , enabled  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setPluginMinimalModeEnabled */ .ZP.Settings.setPluginMinimalModeEnabled(pluginID, !enabled)
    ,
    settings_getTrendingDataSource: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getTrendingDataSource */ .ZP.Settings.getTrendingDataSource()
    ,
    settings_setTrendingDataSource: ({ provider  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setTrendingDataSource */ .ZP.Settings.setTrendingDataSource(provider)
    ,
    settings_getLaunchPageSettings: async ()=>_settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .launchPageSettings.value */ .i4.value
    ,
    settings_getTheme: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getTheme */ .ZP.Settings.getTheme()
    ,
    settings_setTheme: ({ theme  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setTheme */ .ZP.Settings.setTheme(theme)
    ,
    settings_getLanguage: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getLanguage */ .ZP.Settings.getLanguage()
    ,
    settings_setLanguage: ({ language  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setLanguage */ .ZP.Settings.setLanguage(language)
    ,
    settings_createBackupJson: (options)=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.generateBackupJSON */ .ZP.Welcome.generateBackupJSON(options)
    ,
    settings_getBackupPreviewInfo: async ({ backupInfo  })=>{
        const data = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.parseBackupStr */ .ZP.Welcome.parseBackupStr(backupInfo);
        return data === null || data === void 0 ? void 0 : data.info;
    },
    settings_restoreBackup: ({ backupInfo  })=>{
        try {
            const json = JSON.parse(backupInfo);
            return _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.restoreBackup */ .ZP.Welcome.restoreBackup(json);
        } catch (error) {
            throw new Error('invalid json');
        }
    },
    persona_createPersonaByMnemonic: async ({ mnemonic , nickname , password  })=>{
        const x = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.restoreFromMnemonicWords */ .ZP.Identity.restoreFromMnemonicWords(mnemonic, nickname, password);
        return personaFormatter(x);
    },
    persona_queryPersonas: async ({ identifier , hasPrivateKey  })=>{
        const id = identifier ? stringToPersonaIdentifier(identifier) : undefined;
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersonas */ .ZP.Identity.queryPersonas(id, hasPrivateKey);
        return result === null || result === void 0 ? void 0 : result.map(personaFormatter);
    },
    persona_queryMyPersonas: async ({ network  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryMyPersonas */ .ZP.Identity.queryMyPersonas(network);
        return result === null || result === void 0 ? void 0 : result.map(personaFormatter);
    },
    persona_updatePersonaInfo: ({ identifier , data  })=>{
        const { nickname  } = data;
        return _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.renamePersona */ .ZP.Identity.renamePersona(stringToPersonaIdentifier(identifier), nickname);
    },
    persona_removePersona: ({ identifier  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.deletePersona */ .ZP.Identity.deletePersona(stringToPersonaIdentifier(identifier), 'delete even with private')
    ,
    persona_restoreFromJson: async ({ backup  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.restoreFromBackup */ .ZP.Identity.restoreFromBackup(backup);
        if (!result) throw new Error('invalid json');
    },
    persona_restoreFromBase64: async ({ backup  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.restoreFromBase64 */ .ZP.Identity.restoreFromBase64(backup);
        if (!result) throw new Error('invalid base64');
    },
    persona_connectProfile: async ({ profileIdentifier , personaIdentifier  })=>{
        const profileId = stringToProfileIdentifier(profileIdentifier);
        const identifier = stringToPersonaIdentifier(personaIdentifier);
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.attachProfile */ .ZP.Identity.attachProfile(profileId, identifier, {
            connectionConfirmState: 'confirmed'
        });
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(identifier);
        if (!persona.hasPrivateKey) throw new Error('invalid persona');
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.setupPersona */ .ZP.Identity.setupPersona(persona.identifier);
    },
    persona_disconnectProfile: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.detachProfile */ .ZP.Identity.detachProfile(stringToProfileIdentifier(identifier));
    },
    persona_backupMnemonic: async ({ identifier  })=>{
        var ref;
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(stringToPersonaIdentifier(identifier));
        return (ref = persona.mnemonic) === null || ref === void 0 ? void 0 : ref.words;
    },
    persona_backupJson: async ({ identifier  })=>{
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(stringToPersonaIdentifier(identifier));
        return _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.generateBackupJSON */ .ZP.Welcome.generateBackupJSON({
            noPosts: true,
            noWallets: true,
            filter: {
                type: 'persona',
                wanted: [
                    persona.identifier
                ]
            }
        });
    },
    persona_restoreFromPrivateKey: async ({ privateKey , nickname  })=>{
        const identifier = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.createPersonaByPrivateKey */ .ZP.Identity.createPersonaByPrivateKey(privateKey, nickname);
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(identifier);
        return personaFormatter(persona);
    },
    persona_backupBase64: async ({ identifier  })=>{
        const file = await MaskNetworkAPI.persona_backupJson({
            identifier
        });
        return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .encodeArrayBuffer */ .ll)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .encodeText */ .YT)(JSON.stringify(file)));
    },
    persona_backupPrivateKey: async ({ identifier  })=>{
        const privateKey = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.exportPersonaPrivateKey */ .ZP.Identity.exportPersonaPrivateKey(stringToPersonaIdentifier(identifier));
        return privateKey;
    },
    persona_queryPersonaByPrivateKey: async ({ privateKey  })=>{
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersonaByPrivateKey */ .ZP.Identity.queryPersonaByPrivateKey(privateKey);
        return persona ? personaFormatter(persona) : undefined;
    },
    persona_getCurrentPersonaIdentifier: async ()=>{
        const identifier = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
        return identifier === null || identifier === void 0 ? void 0 : identifier.toText();
    },
    persona_setCurrentPersonaIdentifier: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setCurrentPersonaIdentifier */ .ZP.Settings.setCurrentPersonaIdentifier(stringToPersonaIdentifier(identifier));
    },
    persona_getOwnedPersonaInformation: async ({ identifier  })=>{
        const personas = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryOwnedPersonaInformation */ .ZP.Identity.queryOwnedPersonaInformation();
        const currentPersona = personas.find((x)=>x.identifier.equals(stringToPersonaIdentifier(identifier))
        );
        if (!currentPersona) {
            throw new Error('invalid currentPersonaIdentifier');
        }
        return personaInformationFormatter(currentPersona);
    },
    persona_logout: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.logoutPersona */ .ZP.Identity.logoutPersona(stringToPersonaIdentifier(identifier));
    },
    profile_queryProfiles: async ({ network  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryProfiles */ .ZP.Identity.queryProfiles(network);
        return result === null || result === void 0 ? void 0 : result.map(profileFormatter);
    },
    profile_queryMyProfiles: async ({ network  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryMyProfiles */ .ZP.Identity.queryMyProfiles(network);
        return result === null || result === void 0 ? void 0 : result.map(profileFormatter);
    },
    profile_updateProfileInfo: async ({ identifier , data  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.updateProfileInfo */ .ZP.Identity.updateProfileInfo(stringToProfileIdentifier(identifier), data);
    },
    profile_removeProfile: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.removeProfile */ .ZP.Identity.removeProfile(stringToProfileIdentifier(identifier));
    },
    profile_updateRelation: async ({ profile , linked , favor  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.updateRelation */ .ZP.Identity.updateRelation(stringToProfileIdentifier(profile), stringToPersonaIdentifier(linked), favor);
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
        const records = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryRelationPaged */ .ZP.Identity.queryRelationPaged({
            network,
            after: afterRecord
        }, count);
        const profiles = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryProfilesWithIdentifiers */ .ZP.Identity.queryProfilesWithIdentifiers(records.map((x)=>x.profile
        ));
        return profiles.map((profile)=>{
            const record = records.find((x)=>x.profile.equals(profile.identifier)
            );
            const favor = record === null || record === void 0 ? void 0 : record.favor;
            const personaIdentifier = record === null || record === void 0 ? void 0 : record.linked.toText();
            return profileRelationFormatter(profile, personaIdentifier, favor);
        });
    },
    wallet_updateEthereumAccount: async ({ account  })=>{
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateAccount */ .V.updateAccount({
            account,
            providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .ProviderType.MaskWallet */ .lP.MaskWallet
        });
        _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll();
    },
    wallet_updateEthereumChainId: async ({ chainId  })=>{
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateAccount */ .V.updateAccount({
            chainId
        });
    },
    wallet_getLegacyWalletInfo: async ()=>{
        const wallets = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.getLegacyWalletRecords */ .V.getLegacyWalletRecords();
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
        const personas = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersonaRecordsFromIndexedDB */ .ZP.Identity.queryPersonaRecordsFromIndexedDB();
        const profiles = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryProfileRecordFromIndexedDB */ .ZP.Identity.queryProfileRecordFromIndexedDB();
        const relations = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryRelationsRecordFromIndexedDB */ .ZP.Identity.queryRelationsRecordFromIndexedDB();
        return {
            personas: personas.map((x)=>({
                    mnemonic: x.mnemonic,
                    nickname: x.nickname,
                    publicKey: x.publicKey,
                    privateKey: x.privateKey,
                    localKey: x.localKey,
                    identifier: x.identifier.toText(),
                    linkedProfiles: Object.fromEntries(x.linkedProfiles.__raw_map__),
                    createdAt: x.createdAt.getTime(),
                    updatedAt: x.createdAt.getTime(),
                    hasLogout: x.hasLogout,
                    uninitialized: x.uninitialized
                })
            ),
            profiles: profiles.map((x)=>{
                var ref;
                return {
                    identifier: x.identifier.toText(),
                    nickname: x.nickname,
                    localKey: x.localKey,
                    linkedPersona: (ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.toText(),
                    createdAt: x.createdAt.getTime(),
                    updatedAt: x.updatedAt.getTime()
                };
            }),
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
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__.assertEnvironment)(env);
        return f(...args);
    };
}
try {
    for(const _key in MaskNetworkAPI){
        const key = _key;
        const f = MaskNetworkAPI[key];
        if (key.startsWith('SNSAdaptor_')) {
            MaskNetworkAPI[key] = wrapWithAssert(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__.Environment.ContentScript, f);
        } else {
            MaskNetworkAPI[key] = wrapWithAssert(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__.Environment.ManifestBackground, f);
        }
    }
} catch  {}


/***/ })

}]);