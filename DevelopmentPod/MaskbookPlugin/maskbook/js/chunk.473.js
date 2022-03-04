"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[473],{

/***/ 41529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity),
/* harmony export */   "hg": () => (/* binding */ useFriendsList)
/* harmony export */ });
/* unused harmony export CurrentIdentitySubscription */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39850);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61751);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47175);






function useFriendsList() {
    const ref = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.friends */ .EJ.friends);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[
            ...ref.values()
        ]
    , [
        ref
    ]);
}
const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef({
    identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier.unknown */ .WO.unknown
});
function useLastRecognizedIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useCurrentVisitingIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles */ .EJ.profiles);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_4__.useSubscription)(CurrentIdentitySubscription);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        var ref;
        const all = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_).value.identifier;
        return all.find((i)=>i.identifier.toText() === current.toText()
        ) || all[0];
    },
    subscribe (sub) {
        var ref;
        const a = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = (ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.addListener(sub);
        return ()=>{
            return [
                a(),
                b === null || b === void 0 ? void 0 : b()
            ];
        };
    }
};


/***/ }),

/***/ 9414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ ERC721ContractSelectPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(21532);
// EXTERNAL MODULE: ../web3-shared/evm/utils/call.ts
var call = __webpack_require__(78842);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721ContractBalance.ts





function useERC721ContractBalance(address, account) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const erc721TokenContract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !dist.EthereumAddress.isValid(account) || !dist.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        return (0,call/* safeNonPayableTransactionCall */.Y)(erc721TokenContract.methods.balanceOf(account));
    }, [
        address,
        chainId,
        erc721TokenContract,
        account
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(63653);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(23070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(58938);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
;// CONCATENATED MODULE: ./src/web3/UI/ERC721ContractSelectPanel.tsx












const useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>{
    return {
        root: {
            height: 52,
            border: `1px solid ${theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336'}`,
            borderRadius: 12,
            padding: theme.spacing(0.8, 1.2, 1),
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        },
        balance: {},
        title: {},
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
        icon: {
            height: 24,
            width: 24,
            borderRadius: 500
        },
        tokenWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        nftName: {
            marginLeft: theme.spacing(props.hasIcon ? 1 : 0),
            fontWeight: 300,
            pointerEvents: 'none',
            fontSize: 16,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        expandIcon: {
            color: theme.palette.text.primary
        },
        pointer: {
            cursor: 'pointer'
        }
    };
});
function ERC721ContractSelectPanel(props) {
    var ref;
    const { onContractChange , onBalanceChange , contract  } = props;
    const account = (0,useAccount/* useAccount */.m)();
    const { classes  } = useStyles({
        hasIcon: Boolean(contract === null || contract === void 0 ? void 0 : contract.iconURL)
    });
    const { value: balanceFromChain , loading: loadingFromChain  } = useERC721ContractBalance(contract === null || contract === void 0 ? void 0 : contract.address, account);
    const { data: assets , state: loadingBalanceFromRemoteState  } = (0,useCollectibles/* useCollections */.b)(account, types/* ChainId.Mainnet */.a_.Mainnet, !!contract);
    const convertedAssets = assets.map((x)=>({
            contractDetailed: {
                type: types/* EthereumTokenType.ERC721 */.Dr.ERC721,
                address: x.address,
                chainId: types/* ChainId.Mainnet */.a_.Mainnet,
                name: x.name,
                symbol: x.symbol,
                baseURI: x.iconURL,
                iconURL: x.iconURL
            },
            balance: x.balance
        })
    );
    const { t  } = (0,utils/* useI18N */.M1)();
    const balanceFromRemote = convertedAssets ? (ref = convertedAssets.find((asset)=>{
        return (0,address/* isSameAddress */.Wr)(asset.contractDetailed.address, contract === null || contract === void 0 ? void 0 : contract.address);
    })) === null || ref === void 0 ? void 0 : ref.balance : undefined;
    const balance = balanceFromChain ? Number(balanceFromChain) : balanceFromRemote !== null && balanceFromRemote !== void 0 ? balanceFromRemote : 0;
    (0,react.useEffect)(()=>{
        onBalanceChange === null || onBalanceChange === void 0 ? void 0 : onBalanceChange(balance);
    }, [
        onBalanceChange,
        balance
    ]);
    const loading = (loadingFromChain || loadingBalanceFromRemoteState !== useSocket/* SocketState.done */.d.done) && !balance;
    // #region select contract
    const [id] = (0,react.useState)(v4/* default */.Z);
    const { setDialog: setNftContractDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectNftContractDialogUpdated */.R.events.selectNftContractDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.contract || ev.uuid !== id) return;
        onContractChange(ev.contract);
    }, [
        id,
        onContractChange
    ]));
    const openDialog = (0,react.useCallback)(()=>{
        setNftContractDialog({
            open: true,
            uuid: id
        });
    }, [
        setNftContractDialog,
        v4/* default */.Z
    ]);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: t('dashboard_tab_collectibles')
                    }),
                    !(contract === null || contract === void 0 ? void 0 : contract.address) || !dist.EthereumAddress.isValid(contract.address) ? null : loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        size: 16
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t('wallet_balance'),
                            ": ",
                            balance ? balance : '0'
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.wrapper, classes.pointer),
                onClick: openDialog,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tokenWrapper,
                        children: [
                            (contract === null || contract === void 0 ? void 0 : contract.iconURL) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.icon,
                                src: contract === null || contract === void 0 ? void 0 : contract.iconURL
                            }) : null,
                            (contract === null || contract === void 0 ? void 0 : contract.name) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.nftName,
                                color: "textPrimary",
                                children: contract === null || contract === void 0 ? void 0 : contract.name
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                        className: classes.expandIcon
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 72148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(67937);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(63361);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(21202);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx














const useStyles = (0,src/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const plugin = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,shared_src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    var ref1;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = (ref1 = props === null || props === void 0 ? void 0 : (ref = props.isValidChainId) === null || ref === void 0 ? void 0 : ref.call(props, actualChainId, expectedChainId)) !== null && ref1 !== void 0 ? ref1 : false;
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,esm/* delay */.gw)(1000);
        if (!isAllowed) return;
        const switchToChain = async ()=>{
            // read the chain detailed from the built-in chain list
            const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
            if (!chainDetailedCAIP) throw new Error('Unknown network type.');
            // if mask wallet was used it can switch network automatically
            if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) {
                await messages/* WalletRPC.updateAccount */.V.updateAccount({
                    chainId: expectedChainId
                });
                return;
            }
            // request ethereum-compatible network
            const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,esm/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                        throw new Error('Timeout!');
                    })(),
                    networkType === types/* NetworkType.Ethereum */.td.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(expectedChainId, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                ]);
                // recheck
                const chainIdHex = await service/* default.Ethereum.getChainId */.ZP.Ethereum.getChainId(overrides);
                if (Number.parseInt(chainIdHex, 16) !== expectedChainId) throw new Error('Failed to switch chain.');
            } catch  {
                throw new Error(`Switch Chain Error: Make sure your wallet is on the ${(0,pipes/* resolveNetworkName */.nW)(networkType)} network.`);
            }
        };
        const switchToPlugin = async ()=>{
            settings_settings/* pluginIDSettings.value */.tR.value = plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) await switchToPlugin();
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const renderBox = (children)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: props.className,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        }));
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            !props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            }) : null
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    }));
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        var ref2;
        var ref3, _switchButtonStyle;
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: (ref3 = plugin === null || plugin === void 0 ? void 0 : (ref2 = plugin.name) === null || ref2 === void 0 ? void 0 : ref2.fallback) !== null && ref3 !== void 0 ? ref3 : 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: (_switchButtonStyle = props.switchButtonStyle) !== null && _switchButtonStyle !== void 0 ? _switchButtonStyle : {
                        marginTop: 1.5
                    },
                    init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_switch_network', {
                            network: expectedNetwork
                        })
                    }),
                    waiting: t('plugin_wallet_switch_network_under_going', {
                        network: expectedNetwork
                    }),
                    complete: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...props.ActionButtonPromiseProps
                }) : null
            ]
        }));
    }
    var _switchButtonStyle1;
    return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualNetwork
                    })
                })
            }) : null,
            isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                variant: "contained",
                size: "small",
                className: classes.switchButton,
                sx: (_switchButtonStyle1 = props.switchButtonStyle) !== null && _switchButtonStyle1 !== void 0 ? _switchButtonStyle1 : {
                    marginTop: 1.5
                },
                init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedNetwork
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...props.ActionButtonPromiseProps
            }) : null
        ]
    }));
}


/***/ }),

/***/ 7897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(67182);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(3073);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(58938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(56345);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
;// CONCATENATED MODULE: ./src/web3/UI/SelectTokenChip.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        chip: {
            border: 'none',
            borderRadius: 8,
            paddingLeft: theme.spacing(0.5)
        },
        loadingChip: {
            marginRight: theme.spacing(-0.5)
        },
        icon: {
            color: theme.palette.text.primary,
            pointerEvents: 'none'
        },
        tokenIcon: {
            width: 16,
            height: 16
        }
    };
});
function SelectTokenChip(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { token , error , loading =false , readonly =false , ChipProps  } = props;
    const { classes  } = useStyles();
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classnames_default()(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    }));
    if (!token) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        label: t('plugin_gitcoin_select_a_token'),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    }));
    if (token && error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Error/* default */.Z, {
            className: classes.icon
        }),
        label: token.symbol,
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        // the delete icon only visible when this callback provided
        onDelete: noop/* default */.Z,
        ...ChipProps
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
            classes: {
                icon: classes.tokenIcon
            },
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: readonly ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
            className: classes.icon
        }),
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        label: token.symbol,
        // the delete icon only visible when this callback provided
        onDelete: readonly ? undefined : noop/* default */.Z,
        ...ChipProps
    }));
}

;// CONCATENATED MODULE: ./src/web3/UI/TokenAmountPanel.tsx










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const TokenAmountPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {},
        input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                appearance: 'none',
                margin: 0
            },
            appearance: 'textfield'
        },
        max: {
            marginRight: theme.spacing(0.5),
            borderRadius: 8
        },
        token: {
            whiteSpace: 'pre',
            maxWidth: 300,
            paddingLeft: theme.spacing(1)
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '80%',
            fontSize: 12,
            top: theme.spacing(0.5),
            position: 'absolute'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        }
    };
});
function TokenAmountPanel(props) {
    var ref2;
    const { amount , maxAmount , balance , token , onAmountChange , maxAmountShares =1 , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(TokenAmountPanel_useStyles(), props);
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>{
        return {
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`)
        };
    }, [
        token === null || token === void 0 ? void 0 : token.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replace(/,/g, '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        className: classes.root,
        label: label,
        fullWidth: true,
        required: true,
        type: "text",
        value: amount,
        variant: "outlined",
        onChange: onChange,
        placeholder: "0.0",
        InputProps: {
            inputProps: {
                autoComplete: 'off',
                autoCorrect: 'off',
                title: 'Token Amount',
                inputMode: 'decimal',
                min: 0,
                minLength: MIN_AMOUNT_LENGTH,
                maxLength: MAX_AMOUNT_LENGTH,
                pattern: '^[0-9]*[.,]?[0-9]*$',
                spellCheck: false,
                className: classes.input
            },
            endAdornment: disableToken ? null : token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t('plugin_ito_list_table_got'),
                            ":",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6,
                                formatter: Utils === null || Utils === void 0 ? void 0 : Utils.formatBalance
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 2
                        },
                        children: [
                            balance !== '0' && !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                classes: {
                                    root: classnames_default()(classes.max, MaxChipProps === null || MaxChipProps === void 0 ? void 0 : (ref2 = MaxChipProps.classes) === null || ref2 === void 0 ? void 0 : ref2.root),
                                    ...MaxChipProps === null || MaxChipProps === void 0 ? void 0 : MaxChipProps.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    var ref;
                                    var ref1;
                                    onAmountChange((ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.formatBalance) === null || ref === void 0 ? void 0 : ref.call(Utils, new (bignumber_default())(maxAmount !== null && maxAmount !== void 0 ? maxAmount : balance).dividedBy(maxAmountShares).decimalPlaces(0, 1), token.decimals)) !== null && ref1 !== void 0 ? ref1 : '0');
                                },
                                ...MaxChipProps
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                                token: token,
                                ...props.SelectTokenChip
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 2
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: "-"
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                        token: token,
                        ...props.SelectTokenChip
                    })
                ]
            }),
            ...props.InputProps
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                shrink: classes.inputShrinkLabel
            }
        },
        ...props.TextFieldProps
    }));
}


/***/ }),

/***/ 63653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67937);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66580);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23070);




function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200
        }
    };
    return (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        ...data !== null && data !== void 0 ? data : [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 8503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useERC721TokenDetailedCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29129);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92211);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21532);




function useERC721TokenDetailedCallback(contractDetailed) {
    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { GET_SINGLE_ASSET_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_1__/* .useOpenseaAPIConstants */ .$Y)();
    var ref2;
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__/* .useERC721TokenContract */ .n)((ref2 = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref2 !== void 0 ? ref2 : '');
    const erc721TokenDetailedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!erc721TokenContract || !contractDetailed || !tokenId) return;
        if (!GET_SINGLE_ASSET_URL) {
            const tokenDetailedFromChain = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .getERC721TokenDetailedFromChain */ .qY)(contractDetailed, erc721TokenContract, tokenId);
            const info = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .getERC721TokenAssetFromChain */ .qU)(tokenDetailedFromChain === null || tokenDetailedFromChain === void 0 ? void 0 : tokenDetailedFromChain.info.tokenURI);
            if (info && tokenDetailedFromChain) {
                var ref, ref1;
                tokenDetailedFromChain.info = {
                    ...info,
                    ...tokenDetailedFromChain.info,
                    hasTokenDetailed: true,
                    name: (ref1 = (ref = info === null || info === void 0 ? void 0 : info.name) !== null && ref !== void 0 ? ref : tokenDetailedFromChain === null || tokenDetailedFromChain === void 0 ? void 0 : tokenDetailedFromChain.info.name) !== null && ref1 !== void 0 ? ref1 : ''
                };
            }
            return tokenDetailedFromChain;
        } else {
            const tokenDetailedFromOpensea = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .getERC721TokenDetailedFromOpensea */ .L0)(contractDetailed, tokenId, GET_SINGLE_ASSET_URL);
            if (tokenDetailedFromOpensea) tokenDetailedFromOpensea.info.hasTokenDetailed = true;
            return tokenDetailedFromOpensea;
        }
    }, [
        tokenId,
        contractDetailed,
        erc721TokenContract,
        GET_SINGLE_ASSET_URL
    ]);
    return [
        tokenId,
        setTokenId,
        erc721TokenDetailedCallback
    ];
}


/***/ }),

/***/ 62043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useERC721TokenDetailedOwnerList)
/* harmony export */ });
/* unused harmony export ERC721_ENUMERABLE_INTERFACE_ID */
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22572);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21532);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92211);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78842);
/* harmony import */ var _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29129);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18443);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63541);









const ERC721_ENUMERABLE_INTERFACE_ID = '0x780e9d63';
function useERC721TokenDetailedOwnerList(contractDetailed, owner) {
    const { GET_ASSETS_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .useOpenseaAPIConstants */ .$Y)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    var ref;
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC721TokenContract */ .n)((ref = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref !== void 0 ? ref : '');
    const allListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [refreshing, setRefreshing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRefreshing(true);
        clearTokenDetailedOwnerList();
    }, [
        owner,
        contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address
    ]);
    const asyncRetry = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!erc721TokenContract || !(contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) || !wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) || !owner) {
            setRefreshing(false);
            return;
        }
        const lists = await getERC721TokenDetailedOwnerListFromChain(erc721TokenContract, contractDetailed, owner);
        allListRef.current = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)([
            ...allListRef.current,
            ...lists
        ], 'tokenId');
        setRefreshing(false);
    }, [
        GET_ASSETS_URL,
        contractDetailed,
        owner,
        chainId
    ]);
    const clearTokenDetailedOwnerList = ()=>allListRef.current = []
    ;
    return {
        asyncRetry,
        tokenDetailedOwnerList: allListRef.current,
        clearTokenDetailedOwnerList,
        refreshing
    };
}
async function getERC721TokenDetailedOwnerListFromChain(erc721TokenContract, contractDetailed, owner) {
    const isEnumerable = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.supportsInterface(ERC721_ENUMERABLE_INTERFACE_ID));
    const balance = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.balanceOf(owner));
    if (!isEnumerable || !balance) return [];
    const allRequest = Array.from({
        length: Number.parseInt(balance, 10)
    }, async (_v, i)=>{
        const tokenId = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.tokenOfOwnerByIndex(owner, i));
        if (!tokenId) return;
        return (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_8__/* .getERC721TokenDetailedFromChain */ .qY)(contractDetailed, erc721TokenContract, tokenId, owner, false);
    });
    return (await Promise.allSettled(allRequest)).map((x)=>x.status === 'fulfilled' ? x.value : undefined
    ).filter((value)=>value
    );
}


/***/ }),

/***/ 42624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95130);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44270);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);




function useFungibleTokenBalance(type, address, chainId) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenBalance */ .h)();
    const r2 = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenBalance */ .y)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : undefined, chainId);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ }),

/***/ 23070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67937);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22572);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);




var SocketState;
(function(SocketState) {
    SocketState["init"] = "init";
    SocketState["sent"] = "sent";
    SocketState["receiving"] = "receiving";
    SocketState["done"] = "done";
})(SocketState || (SocketState = {}));
const useSocket = (message)=>{
    const { providerSocket  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SocketState.init);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const requestId1 = `${message.id}_${id}`;
        const notifyUpdatedHook = (info)=>{
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            const requestId = `${message.id}_${id}`;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId1
        });
        // Get data from cache
        setData(socket.getResult(requestId1));
        setState(SocketState.sent);
    }, [
        message.id,
        socket,
        loading,
        id
    ]);
    const handleRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setId((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
        setState(SocketState.sent);
        setData([]);
        retry();
    }, [
        retry
    ]);
    return {
        data: data !== null && data !== void 0 ? data : [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ })

}]);