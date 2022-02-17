"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7433],{

/***/ 59239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ RedPacketMetadataReader),
  "v": () => (/* binding */ renderWithRedPacketMetadata)
});

// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(90254);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"contract_address":{"type":"string","title":"contract_address"},"rpid":{"type":"string","title":"rpid"},"txid":{"type":"string","title":"txid"},"password":{"type":"string","title":"password"},"shares":{"type":"number","title":"shares"},"sender":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"},"message":{"type":"string","title":"message"}},"required":["address","message","name"],"title":"sender"},"is_random":{"type":"boolean","title":"is_random"},"total":{"type":"string","title":"total"},"creation_time":{"type":"number","title":"creation_time"},"duration":{"type":"number","title":"duration"},"network":{"type":"string","title":"network"},"token_type":{"enum":[0,1,2],"type":"number","title":"token_type"},"token":{"type":"object","additionalProperties":true,"properties":{"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"decimals":{"description":"token decimal","type":"number","title":"decimals"},"symbol":{"description":"token symbol","type":"string","title":"symbol"}},"required":["address","decimals","name","symbol"],"title":"token"}},"required":["contract_address","creation_time","duration","is_random","password","rpid","sender","shares","token_type","total"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts



const RedPacketMetadataReader = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketMetaKey */.Vr, schema_namespaceObject);
const renderWithRedPacketMetadata = (0,metadata/* createRenderWithMetadata */.mC)(RedPacketMetadataReader);


/***/ }),

/***/ 57433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/plugins/MaskbookPluginWrapper.tsx
var MaskbookPluginWrapper = __webpack_require__(65928);
// EXTERNAL MODULE: ./src/plugins/RedPacket/base.ts
var base = __webpack_require__(90141);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(90254);
// EXTERNAL MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts + 1 modules
var helpers = __webpack_require__(59239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(98051);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/types.ts
var RedPacketStatus;
(function(RedPacketStatus1) {
    RedPacketStatus1["claimed"] = "claimed";
    RedPacketStatus1["expired"] = "expired";
    RedPacketStatus1["empty"] = "empty";
    RedPacketStatus1["refunded"] = "refunded";
})(RedPacketStatus || (RedPacketStatus = {
}));
var DialogTabs;
(function(DialogTabs1) {
    DialogTabs1[DialogTabs1["create"] = 0] = "create";
    DialogTabs1[DialogTabs1["past"] = 1] = "past";
})(DialogTabs || (DialogTabs = {
}));

// EXTERNAL MODULE: ./src/plugins/RedPacket/messages.ts
var messages = __webpack_require__(33324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(29094);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(76912);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Select/Select.js + 3 modules
var Select = __webpack_require__(82267);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(85290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(90335);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(93569);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(65164);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(77016);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(30540);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketForm.tsx

















const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        line: {
            display: 'flex',
            margin: theme.spacing(1)
        },
        input: {
            flex: 1,
            padding: theme.spacing(0.5)
        },
        tip: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        button: {
            marginTop: theme.spacing(1.5)
        },
        selectShrinkLabel: {
            top: 6,
            backgroundColor: theme.palette.background.paper,
            paddingLeft: 2,
            paddingRight: 7,
            transform: 'translate(17px, -10px) scale(0.75) !important'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        }
    })
);
function RedPacketForm(props) {
    var ref, ref1, ref2;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const { onChange , onNext , origin  } = props;
    // context
    const web3 = (0,src/* useWeb3 */.$6B)();
    const account = (0,src/* useAccount */.mAM)();
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,src/* useRedPacketConstants */.AAz)();
    //#region select token
    const { value: nativeTokenDetailed  } = (0,src/* useNativeTokenDetailed */.JS1)();
    const [token = nativeTokenDetailed, setToken] = (0,react.useState)(origin === null || origin === void 0 ? void 0 : origin.token);
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        setToken(ev.token);
    }, [
        id
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: false,
            FixedTokenListProps: {
                selectedTokens: token ? [
                    token.address
                ] : []
            }
        });
    }, [
        id,
        token === null || token === void 0 ? void 0 : token.address
    ]);
    //#endregion
    //#region packet settings
    const [isRandom, setIsRandom] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.isRandom) ? 1 : 0);
    const [message, setMessage] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.message) || t('plugin_red_packet_best_wishes'));
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    var _userId, ref3;
    const senderName = (ref3 = (_userId = currentIdentity === null || currentIdentity === void 0 ? void 0 : currentIdentity.identifier.userId) !== null && _userId !== void 0 ? _userId : currentIdentity === null || currentIdentity === void 0 ? void 0 : (ref = currentIdentity.linkedPersona) === null || ref === void 0 ? void 0 : ref.nickname) !== null && ref3 !== void 0 ? ref3 : 'Unknown User';
    // shares
    const [shares, setShares] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.shares) || constants/* RED_PACKET_DEFAULT_SHARES */.sX);
    const onShareChange = (0,react.useCallback)((ev)=>{
        const shares_ = ev.currentTarget.value.replace(/[,.]/g, '');
        if (shares_ === '') setShares('');
        else if (/^[1-9]+\d*$/.test(shares_)) {
            const parsed = Number.parseInt(shares_, 10);
            if (parsed >= constants/* RED_PACKET_MIN_SHARES */.Ih && parsed <= constants/* RED_PACKET_MAX_SHARES */.DY) setShares(Number.parseInt(shares_, 10));
        }
    }, [
        constants/* RED_PACKET_MIN_SHARES */.Ih,
        constants/* RED_PACKET_MAX_SHARES */.DY
    ]);
    var ref4, ref5, ref6, ref7;
    // amount
    const [rawAmount, setRawAmount] = (0,react.useState)((origin === null || origin === void 0 ? void 0 : origin.isRandom) ? (0,src/* formatBalance */.azF)(origin === null || origin === void 0 ? void 0 : origin.total, (ref4 = (ref1 = origin.token) === null || ref1 === void 0 ? void 0 : ref1.decimals) !== null && ref4 !== void 0 ? ref4 : 0) : (0,src/* formatBalance */.azF)(new (bignumber_default())((ref5 = origin === null || origin === void 0 ? void 0 : origin.total) !== null && ref5 !== void 0 ? ref5 : '0').div((ref6 = origin === null || origin === void 0 ? void 0 : origin.shares) !== null && ref6 !== void 0 ? ref6 : 1), (ref7 = origin === null || origin === void 0 ? void 0 : (ref2 = origin.token) === null || ref2 === void 0 ? void 0 : ref2.decimals) !== null && ref7 !== void 0 ? ref7 : 0));
    var ref8;
    const amount = new (bignumber_default())(rawAmount !== null && rawAmount !== void 0 ? rawAmount : '0').multipliedBy((0,src/* pow10 */.wAG)((ref8 = token === null || token === void 0 ? void 0 : token.decimals) !== null && ref8 !== void 0 ? ref8 : 0));
    const totalAmount = isRandom ? new (bignumber_default())(amount) : new (bignumber_default())(amount).multipliedBy(shares !== null && shares !== void 0 ? shares : '0');
    var ref9, ref10;
    // balance
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,src/* useTokenBalance */.mMq)((ref9 = token === null || token === void 0 ? void 0 : token.type) !== null && ref9 !== void 0 ? ref9 : src/* EthereumTokenType.Native */.Drc.Native, (ref10 = token === null || token === void 0 ? void 0 : token.address) !== null && ref10 !== void 0 ? ref10 : '');
    //#endregion
    const validationMessage = (0,react.useMemo)(()=>{
        if (!token) return t('plugin_wallet_select_a_token');
        if (!account) return t('plugin_wallet_connect_a_wallet');
        if ((0,src/* isZero */.Fr9)(shares || '0')) return 'Enter shares';
        if ((0,src/* isGreaterThan */.T1o)(shares || '0', 255)) return 'At most 255 recipients';
        if ((0,src/* isZero */.Fr9)(amount)) return t('plugin_dhedge_enter_an_amount');
        if ((0,src/* isGreaterThan */.T1o)(totalAmount, tokenBalance)) return t('plugin_gitcoin_insufficient_balance', {
            symbol: token.symbol
        });
        return '';
    }, [
        account,
        amount,
        totalAmount,
        shares,
        token,
        tokenBalance
    ]);
    const onClick = (0,react.useCallback)(()=>{
        const { address: publicKey , privateKey  } = web3.eth.accounts.create();
        onChange({
            publicKey,
            privateKey,
            duration: 60 /* seconds */  * 60 /* mins */  * 24 /* hours */ ,
            isRandom: Boolean(isRandom),
            name: senderName,
            message: message || t('plugin_red_packet_best_wishes'),
            shares: shares || 0,
            token: token ? (0,lodash.omit)(token, [
                'logoURI'
            ]) : undefined,
            total: totalAmount.toFixed()
        });
        onNext();
    }, [
        onChange,
        totalAmount,
        token,
        shares,
        senderName,
        isRandom
    ]);
    if (!token) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.line,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                        className: classes.input,
                        variant: "outlined",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                className: classes.selectShrinkLabel,
                                children: t('plugin_red_packet_split_mode')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                value: isRandom ? 1 : 0,
                                onChange: (e)=>{
                                    // foolproof, reset amount since the meaning of amount changed:
                                    //  'total amount' <=> 'amount per share'
                                    setRawAmount('0');
                                    setIsRandom(e.target.value);
                                },
                                MenuProps: {
                                    anchorOrigin: {
                                        vertical: 'top',
                                        horizontal: 'left'
                                    },
                                    ...props.SelectMenuProps
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: 0,
                                        children: t('plugin_red_packet_average')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: 1,
                                        children: t('plugin_red_packet_random')
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.input,
                        InputProps: {
                            inputProps: {
                                autoComplete: 'off',
                                autoCorrect: 'off',
                                inputMode: 'decimal',
                                placeholder: '0',
                                pattern: '^[0-9]$',
                                spellCheck: false
                            }
                        },
                        InputLabelProps: {
                            shrink: true,
                            classes: {
                                shrink: classes.inputShrinkLabel
                            }
                        },
                        label: t('plugin_red_packet_shares'),
                        value: shares,
                        onChange: onShareChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                    classes: {
                        root: classes.input
                    },
                    label: isRandom ? 'Total Amount' : t('plugin_red_packet_amount_per_share'),
                    amount: rawAmount,
                    balance: tokenBalance,
                    token: token,
                    maxAmountShares: isRandom || shares === '' ? 1 : shares,
                    onAmountChange: setRawAmount,
                    SelectTokenChip: {
                        loading: loadingTokenBalance,
                        ChipProps: {
                            onClick: onSelectTokenChipClick
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    onChange: (e)=>setMessage(e.target.value)
                    ,
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            shrink: classes.inputShrinkLabel
                        }
                    },
                    inputProps: {
                        placeholder: t('plugin_red_packet_best_wishes')
                    },
                    label: t('plugin_red_packet_attached_message'),
                    value: message
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    amount: totalAmount.toFixed(),
                    token: (token === null || token === void 0 ? void 0 : token.type) === src/* EthereumTokenType.ERC20 */.Drc.ERC20 ? token : undefined,
                    spender: HAPPY_RED_PACKET_ADDRESS_V4,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        variant: "contained",
                        size: "large",
                        className: classes.button,
                        fullWidth: true,
                        disabled: !!validationMessage,
                        onClick: onClick,
                        children: validationMessage || t('plugin_red_packet_next')
                    })
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(8286);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(59450);
// EXTERNAL MODULE: ./src/utils/i18n-next.ts + 1 modules
var i18n_next = __webpack_require__(93002);
;// CONCATENATED MODULE: ./src/plugins/ITO/assets/formatDate.ts

const dateTimeFormat = (date, includeTime = true)=>new Intl.DateTimeFormat(i18n_next/* default.language */.Z.language, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        ...includeTime && {
            hour: 'numeric',
            minute: 'numeric'
        },
        hour12: false
    }).format(date)
;

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/StyledLinearProgress.tsx
var StyledLinearProgress = __webpack_require__(28745);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
;// CONCATENATED MODULE: ../web3-contracts/abis/HappyRedPacketV1.json
const HappyRedPacketV1_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"ifclaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_claimed_list","outputs":[{"internalType":"address[]","name":"claimer_addrs","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint8","name":"_number","type":"uint8"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"toBytes","outputs":[{"internalType":"bytes","name":"b","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"token_type","type":"uint256"},{"internalType":"address","name":"token_address","type":"address"},{"internalType":"address","name":"sender_address","type":"address"},{"internalType":"address","name":"recipient_address","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer_token","outputs":[],"stateMutability":"payable","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/HappyRedPacketV2.json
const HappyRedPacketV2_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"CreationSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/HappyRedPacketV3.json
const HappyRedPacketV3_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"},{"indexed":false,"internalType":"bool","name":"ifrandom","type":"bool"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/HappyRedPacketV4.json
const HappyRedPacketV4_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"},{"indexed":false,"internalType":"bool","name":"ifrandom","type":"bool"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes","name":"signedMsg","type":"bytes"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_public_key","type":"address"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useRedPacketContract.ts





function useRedPacketContract(version) {
    const { HAPPY_RED_PACKET_ADDRESS_V1: addressV1 , HAPPY_RED_PACKET_ADDRESS_V2: addressV2 , HAPPY_RED_PACKET_ADDRESS_V3: addressV3 , HAPPY_RED_PACKET_ADDRESS_V4: addressV4 ,  } = (0,src/* useRedPacketConstants */.AAz)();
    const v1 = (0,src/* useContract */.cqn)(addressV1, HappyRedPacketV1_namespaceObject);
    const v2 = (0,src/* useContract */.cqn)(addressV2, HappyRedPacketV2_namespaceObject);
    const v3 = (0,src/* useContract */.cqn)(addressV3, HappyRedPacketV3_namespaceObject);
    const v4 = (0,src/* useContract */.cqn)(addressV4, HappyRedPacketV4_namespaceObject);
    const versions = [
        v1,
        v2,
        v3,
        v4
    ];
    return versions[version - 1];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useAvailability.ts


function useAvailability(version, from, id) {
    const redPacketContract = useRedPacketContract(version);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id) return null;
        if (!redPacketContract) return null;
        return redPacketContract.methods.check_availability(id).call({
            // check availability is ok w/o account
            from
        });
    }, [
        id,
        from,
        redPacketContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useAvailabilityComputed.ts




/**
 * Fetch the red packet info from the chain
 * @param payload
 */ function useAvailabilityComputed(account, payload) {
    const chainId = (0,src/* useChainId */.xxU)();
    const asyncResult = useAvailability(payload.contract_version, account, payload === null || payload === void 0 ? void 0 : payload.rpid);
    const result = asyncResult;
    const availability = result.value;
    if (!availability) return {
        ...asyncResult,
        payload,
        computed: {
            canClaim: false,
            canRefund: false,
            listOfStatus: []
        }
    };
    const isEmpty = availability.balance === '0';
    const isExpired = availability.expired;
    const isClaimed = availability.claimed_amount ? availability.claimed_amount !== '0' : availability.ifclaimed;
    const isRefunded = isEmpty && Number.parseInt(availability.claimed, 10) < Number.parseInt(availability.total, 10);
    var _address;
    const isCreator = (0,src/* isSameAddress */.Wr$)((_address = payload === null || payload === void 0 ? void 0 : payload.sender.address) !== null && _address !== void 0 ? _address : '', account);
    var _network, ref;
    const parsedChainId = (ref = (0,src/* getChainIdFromName */.npC)((_network = payload.network) !== null && _network !== void 0 ? _network : '')) !== null && ref !== void 0 ? ref : src/* ChainId.Mainnet */.a_e.Mainnet;
    return {
        ...asyncResult,
        computed: {
            canFetch: parsedChainId === chainId,
            canClaim: !isExpired && !isEmpty && !isClaimed && parsedChainId === chainId && payload.password,
            canRefund: isExpired && !isEmpty && isCreator && parsedChainId === chainId,
            canSend: !isEmpty && !isExpired && !isRefunded && isCreator && parsedChainId === chainId,
            listOfStatus: (0,lodash.compact)([
                isClaimed ? RedPacketStatus.claimed : undefined,
                isEmpty ? RedPacketStatus.empty : undefined,
                isRefunded ? RedPacketStatus.refunded : undefined,
                isExpired ? RedPacketStatus.expired : undefined, 
            ])
        }
    };
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useRefundCallback.ts



function useRefundCallback(version, from, id) {
    const nonce = (0,src/* useNonce */.XEd)();
    const gasPrice = (0,src/* useGasPrice */.Fh$)();
    const [refundState, setRefundState] = (0,src/* useTransactionState */.pld)();
    const redPacketContract = useRedPacketContract(version);
    const refundCallback = (0,react.useCallback)(async ()=>{
        if (!redPacketContract || !id) {
            setRefundState({
                type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setRefundState({
            type: src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from,
            gas: await redPacketContract.methods.refund(id).estimateGas({
                from
            }).catch((error)=>{
                setRefundState({
                    type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // step 2: blocking
        return new Promise((resolve, reject)=>{
            const promiEvent = redPacketContract.methods.refund(id).send(config);
            promiEvent.on(src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>{
                setRefundState({
                    type: src/* TransactionStateType.HASH */.n$V.HASH,
                    hash
                });
                resolve();
            });
            promiEvent.on(src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (no, receipt)=>{
                setRefundState({
                    type: src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            });
            promiEvent.on(src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                setRefundState({
                    type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        id,
        redPacketContract,
        from
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setRefundState({
            type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        refundState,
        refundCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketInHistoryList.tsx


















const RedPacketInHistoryList_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        primary: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        secondary: {
            fontSize: 12
        },
        message: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        strong: {
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        span: {
            maxWidth: 350,
            display: 'inline-flex'
        },
        time: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        root: {
            borderRadius: 10,
            border: `solid 1px ${theme.palette.divider}`,
            marginBottom: theme.spacing(1.5),
            position: 'static !important',
            height: 'auto !important',
            padding: theme.spacing(2)
        },
        box: {
            display: 'flex',
            width: '100%'
        },
        content: {
            transform: 'translateY(-4px)',
            width: '100%',
            padding: theme.spacing(0, '1rem')
        },
        section: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: theme.spacing(2)
        },
        div: {
        },
        icon: {
            width: 27,
            height: 27
        },
        title: {
            whiteSpace: 'break-spaces',
            fontWeight: 500,
            fontSize: 16
        },
        info: {
            fontSize: 14,
            color: theme.palette.mode === 'light' ? '#5B7083' : '#c3cbd2'
        },
        actionButton: {
            height: 26,
            minHeight: 'auto'
        },
        footer: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: theme.spacing(2)
        },
        footerInfo: {
            fontSize: 15,
            color: theme.palette.mode === 'light' ? '#5B7083' : '#c3cbd2',
            '& strong': {
                color: theme.palette.text.primary
            }
        }
    })
);
function RedPacketInHistoryList(props) {
    const account = (0,src/* useAccount */.mAM)();
    const { history , onSelect , onClose  } = props;
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = RedPacketInHistoryList_useStyles();
    const { value: availability , computed: { canRefund , canSend , listOfStatus  } , retry: revalidateAvailability ,  } = useAvailabilityComputed(account, history.payload);
    const [refundState, refundCallback, resetRefundCallback] = useRefundCallback(history.payload.contract_version, account, history.rpid);
    //#region remote controlled transaction dialog
    const { setDialog: setTransactionDialogOpen  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>undefined
    );
    (0,react.useEffect)(()=>{
        if (refundState.type === src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN || !availability) return;
        if (refundState.type === src/* TransactionStateType.HASH */.n$V.HASH) {
            var _decimals, _decimals1;
            setTransactionDialogOpen({
                open: true,
                state: refundState,
                summary: availability ? `Refunding red packet for ${(0,src/* formatBalance */.azF)(new (bignumber_default())(availability.balance), (_decimals = history.token.decimals) !== null && _decimals !== void 0 ? _decimals : 0, (_decimals1 = history.token.decimals) !== null && _decimals1 !== void 0 ? _decimals1 : 0)} ${history.token.symbol}` : ''
            });
        } else if (refundState.type === src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) {
            resetRefundCallback();
            revalidateAvailability();
        }
    }, [
        refundState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    const onSendOrRefund = (0,react.useCallback)(async ()=>{
        if (canRefund) await refundCallback();
        if (canSend) onSelect(history.payload);
    }, [
        onSelect,
        onClose,
        refundCallback,
        canRefund,
        canSend,
        history
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.box,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                    classes: {
                        icon: classes.icon
                    },
                    address: history.token.address,
                    name: history.token.name,
                    logoURI: history.token.logoURI
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.div,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.title, classes.message),
                                            children: history.message === '' ? t('plugin_red_packet_best_wishes') : history.message
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.info, classes.message),
                                            children: t('plugin_red_packet_history_duration', {
                                                startTime: dateTimeFormat(new Date(history.creation_time * 1000)),
                                                endTime: dateTimeFormat(new Date((history.creation_time + history.duration) * 1000), false)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.info, classes.message),
                                            children: t('plugin_red_packet_history_total_amount', {
                                                amount: (0,src/* formatBalance */.azF)(history.total, history.token.decimals, 6),
                                                symbol: history.token.symbol
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.info, classes.message),
                                            children: t('plugin_red_packet_history_split_mode', {
                                                mode: history.is_random ? t('plugin_red_packet_random') : t('plugin_red_packet_average')
                                            })
                                        })
                                    ]
                                }),
                                canRefund || canSend || listOfStatus.includes(RedPacketStatus.empty) || refundState.type === src/* TransactionStateType.HASH */.n$V.HASH ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    onClick: onSendOrRefund,
                                    disabled: listOfStatus.includes(RedPacketStatus.empty) || refundState.type === src/* TransactionStateType.HASH */.n$V.HASH,
                                    className: classes.actionButton,
                                    variant: "contained",
                                    size: "large",
                                    children: canSend ? t('plugin_red_packet_history_send') : refundState.type === src/* TransactionStateType.HASH */.n$V.HASH ? t('plugin_red_packet_refunding') : listOfStatus.includes(RedPacketStatus.empty) ? t('plugin_red_packet_empty') : t('plugin_red_packet_refund')
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress/* StyledLinearProgress */.B, {
                            barColor: "rgba(44, 164, 239)",
                            backgroundColor: "rgba(44, 164, 239, 0.2)",
                            variant: "determinate",
                            value: 100 * (1 - Number(history.total_remaining) / Number(history.total))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.footer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    className: classes.footerInfo,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_red_packet_history_claimed",
                                        components: {
                                            strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                            })
                                        },
                                        values: {
                                            claimedShares: history.claimers.length,
                                            shares: history.shares
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    className: classes.footerInfo,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_red_packet_history_total_claimed_amount",
                                        components: {
                                            strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                className: classes.strong
                                            }),
                                            span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: classes.span
                                            })
                                        },
                                        values: {
                                            amount: (0,src/* formatBalance */.azF)(history.total, history.token.decimals, 6),
                                            claimedAmount: (0,src/* formatBalance */.azF)(new (bignumber_default())(history.total).minus(history.total_remaining), history.token.decimals, 6),
                                            symbol: history.token.symbol
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useRedPacketHistory.ts


function useRedPacketHistory(address, chainId) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const payloads = await messages/* RedPacketRPC.getRedPacketHistoryWithPassword */.T.getRedPacketHistoryWithPassword(address, chainId);
        return payloads;
    }, [
        address
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketHistoryList.tsx







const RedPacketHistoryList_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        margin: '0 auto'
    },
    placeholder: {
        textAlign: 'center'
    }
});
function RedPacketHistoryList(props) {
    const { onSelect , onClose  } = props;
    const { classes  } = RedPacketHistoryList_useStyles();
    const account = (0,src/* useAccount */.mAM)();
    const chainId = (0,src/* useChainId */.xxU)();
    const { value: histories , loading , retry  } = useRedPacketHistory(account, chainId);
    (0,react.useEffect)(()=>{
        retry();
    }, [
        chainId
    ]);
    if (loading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: "Loading..."
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: !histories || histories.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: "No Data"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: histories.map((history)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketInHistoryList, {
                        history: history,
                        onSelect: onSelect,
                        onClose: onClose
                    })
                }, history.rpid)
            )
        })
    }));
}

// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useCreateCallback.ts







function checkParams(paramsObj, setCreateState) {
    if ((0,src/* isLessThan */.FIT)(paramsObj.total, paramsObj.shares)) {
        setCreateState === null || setCreateState === void 0 ? void 0 : setCreateState({
            type: src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('At least [number of red packets] tokens to your red packet.')
        });
        return false;
    }
    if (paramsObj.shares <= 0) {
        setCreateState === null || setCreateState === void 0 ? void 0 : setCreateState({
            type: src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('At least 1 person should be able to claim the red packet.')
        });
        return false;
    }
    if (paramsObj.tokenType !== src/* EthereumTokenType.Native */.Drc.Native && paramsObj.tokenType !== src/* EthereumTokenType.ERC20 */.Drc.ERC20) {
        setCreateState === null || setCreateState === void 0 ? void 0 : setCreateState({
            type: src/* TransactionStateType.FAILED */.n$V.FAILED,
            error: new Error('Token not supported')
        });
        return false;
    }
    return true;
}
function useCreateParams(redPacketSettings, version) {
    const redPacketContract = useRedPacketContract(version);
    const { NATIVE_TOKEN_ADDRESS  } = (0,src/* useTokenConstants */.kdE)();
    const account = (0,src/* useAccount */.mAM)();
    return (0,useAsync/* default */.Z)(async ()=>{
        var ref;
        if (!redPacketSettings || !redPacketContract) return null;
        const { duration , isRandom , message , name , shares , total , token , publicKey  } = redPacketSettings;
        const seed = Math.random().toString();
        const tokenType = token.type === src/* EthereumTokenType.Native */.Drc.Native ? 0 : 1;
        const tokenAddress = token.type === src/* EthereumTokenType.Native */.Drc.Native ? NATIVE_TOKEN_ADDRESS : token.address;
        if (!tokenAddress) return null;
        const paramsObj = {
            publicKey,
            shares,
            isRandom,
            duration,
            seed: lib_default().sha3(seed),
            message,
            name,
            tokenType,
            tokenAddress,
            total,
            token
        };
        if (!checkParams(paramsObj)) return null;
        const params = Object.values((0,lodash.omit)(paramsObj, [
            'token'
        ]));
        let gasError = null;
        const value = new (bignumber_default())(((ref = paramsObj.token) === null || ref === void 0 ? void 0 : ref.type) === src/* EthereumTokenType.Native */.Drc.Native ? total : '0').toFixed();
        const gas = await redPacketContract.methods.create_red_packet(...params).estimateGas({
            from: account,
            value
        }).catch((error)=>{
            gasError = error;
        });
        return {
            gas: gas,
            params,
            paramsObj,
            gasError
        };
    }, [
        redPacketSettings,
        account,
        redPacketContract
    ]).value;
}
function useCreateCallback(redPacketSettings, version) {
    const nonce = (0,src/* useNonce */.XEd)();
    const gasPrice = (0,src/* useGasPrice */.Fh$)();
    const account = (0,src/* useAccount */.mAM)();
    const chainId = (0,src/* useChainId */.xxU)();
    const [createState, setCreateState] = (0,src/* useTransactionState */.pld)();
    const redPacketContract = useRedPacketContract(version);
    const [createSettings, setCreateSettings] = (0,react.useState)(null);
    const paramResult = useCreateParams(redPacketSettings, version);
    const createCallback = (0,react.useCallback)(async ()=>{
        const { token  } = redPacketSettings;
        if (!token || !redPacketContract || !paramResult) {
            setCreateState({
                type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        const { gas , params , paramsObj , gasError  } = paramResult;
        if (gasError) {
            setCreateState({
                type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                error: gasError
            });
            return;
        }
        if (!checkParams(paramsObj, setCreateState)) return;
        setCreateSettings(redPacketSettings);
        // pre-step: start waiting for provider to confirm tx
        setCreateState({
            type: src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const value = new (bignumber_default())(token.type === src/* EthereumTokenType.Native */.Drc.Native ? paramsObj.total : '0').toFixed();
        const config = {
            from: account,
            value,
            gas,
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const promiEvent = redPacketContract.methods.create_red_packet(...params).send(config);
            promiEvent.on(src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>{
                setCreateState({
                    type: src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING,
                    hash
                });
            });
            promiEvent.on(src/* TransactionEventType.RECEIPT */.iED.RECEIPT, (receipt)=>{
                setCreateState({
                    type: src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no: 0,
                    receipt
                });
            });
            promiEvent.on(src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (no, receipt)=>{
                setCreateState({
                    type: src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            });
            promiEvent.on(src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                setCreateState({
                    type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        redPacketContract,
        redPacketSettings,
        chainId,
        paramResult
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setCreateState({
            type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        createSettings,
        createState,
        createCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(72228);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketConfirmDialog.tsx











const RedPacketConfirmDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        },
        grid: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        hit: {
            fontSize: 14,
            fontWeight: 300,
            borderRadius: 8,
            backgroundColor: theme.palette.divider,
            padding: theme.spacing(1, 0),
            marginBottom: theme.spacing(1)
        },
        token: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        data: {
            textAlign: 'right',
            color: theme.palette.text.primary
        },
        label: {
            textAlign: 'left',
            color: theme.palette.text.secondary
        },
        button: {
            padding: theme.spacing(2)
        },
        gasEstimation: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            cursor: 'pointer',
            '& > p': {
                marginRight: 5,
                color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
            }
        }
    })
);
function RedPacketConfirmDialog(props) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { onBack , settings , onCreate , onClose  } = props;
    const { classes  } = RedPacketConfirmDialog_useStyles();
    const chainId = (0,src/* useChainId */.xxU)();
    (0,react.useEffect)(()=>{
        var ref8;
        if ((settings === null || settings === void 0 ? void 0 : (ref8 = settings.token) === null || ref8 === void 0 ? void 0 : ref8.chainId) !== chainId) onClose();
    }, [
        chainId,
        onClose
    ]);
    var ref9, ref10, ref11;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        className: classes.grid,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h4",
                    color: "textPrimary",
                    align: "center",
                    children: settings === null || settings === void 0 ? void 0 : settings.message
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_token')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    className: classes.token,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: settings === null || settings === void 0 ? void 0 : (ref = settings.token) === null || ref === void 0 ? void 0 : ref.symbol
                        }),
                        (0,lodash.isNative)(settings === null || settings === void 0 ? void 0 : (ref1 = settings.token) === null || ref1 === void 0 ? void 0 : ref1.address) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "textPrimary",
                            className: classes.link,
                            href: (0,src/* resolveTokenLinkOnExplorer */.yWL)(settings === null || settings === void 0 ? void 0 : settings.token),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: stop,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                fontSize: "small"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_split_mode')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    children: (settings === null || settings === void 0 ? void 0 : settings.isRandom) ? t('plugin_red_packet_random') : t('plugin_red_packet_average')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_shares')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    children: settings === null || settings === void 0 ? void 0 : settings.shares
                })
            }),
            (settings === null || settings === void 0 ? void 0 : settings.isRandom) ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textSecondary",
                            children: t('plugin_red_packet_amount_per_share')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            align: "right",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: new (bignumber_default())((ref9 = settings === null || settings === void 0 ? void 0 : settings.total) !== null && ref9 !== void 0 ? ref9 : 0).div((ref10 = settings === null || settings === void 0 ? void 0 : settings.shares) !== null && ref10 !== void 0 ? ref10 : 1),
                                decimals: settings === null || settings === void 0 ? void 0 : (ref2 = settings.token) === null || ref2 === void 0 ? void 0 : ref2.decimals,
                                symbol: settings === null || settings === void 0 ? void 0 : (ref3 = settings.token) === null || ref3 === void 0 ? void 0 : ref3.symbol
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_amount_total')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                        value: settings === null || settings === void 0 ? void 0 : settings.total,
                        decimals: settings === null || settings === void 0 ? void 0 : (ref4 = settings.token) === null || ref4 === void 0 ? void 0 : ref4.decimals,
                        symbol: settings === null || settings === void 0 ? void 0 : (ref5 = settings.token) === null || ref5 === void 0 ? void 0 : ref5.symbol
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                    className: classes.hit,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "textPrimary",
                        align: "center",
                        children: t('plugin_red_packet_hint')
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    size: "large",
                    fullWidth: true,
                    onClick: onBack,
                    children: t('plugin_red_packet_back')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    size: "large",
                    fullWidth: true,
                    onClick: onCreate,
                    children: t('plugin_red_packet_send_symbol', {
                        amount: (0,src/* formatBalance */.azF)(settings === null || settings === void 0 ? void 0 : settings.total, (ref11 = settings === null || settings === void 0 ? void 0 : (ref6 = settings.token) === null || ref6 === void 0 ? void 0 : ref6.decimals) !== null && ref11 !== void 0 ? ref11 : 0),
                        symbol: settings === null || settings === void 0 ? void 0 : (ref7 = settings.token) === null || ref7 === void 0 ? void 0 : ref7.symbol
                    })
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/components/CompositionDialog/CompositionContext.tsx
var CompositionContext = __webpack_require__(61754);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketDialog.tsx





















const RedPacketDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        content: {
            position: 'relative',
            paddingTop: 50
        },
        tabs: {
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute'
        }
    })
);
var CreateRedPacketPageStep;
(function(CreateRedPacketPageStep1) {
    CreateRedPacketPageStep1["NewRedPacketPage"] = 'new';
    CreateRedPacketPageStep1["ConfirmPage"] = 'confirm';
})(CreateRedPacketPageStep || (CreateRedPacketPageStep = {
}));
function RedPacketDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,src/* useChainId */.xxU)();
    const account = (0,src/* useAccount */.mAM)();
    const { classes  } = RedPacketDialog_useStyles();
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,src/* useRedPacketConstants */.AAz)();
    const { attachMetadata , dropMetadata  } = (0,CompositionContext/* useCompositionContext */.C)();
    const state = (0,react.useState)(DialogTabs.create);
    const networkType = (0,src/* useNetworkType */.bLq)();
    const contract_version = 4;
    const [settings, setSettings] = (0,react.useState)();
    const onClose = (0,react.useCallback)(()=>{
        setStep(CreateRedPacketPageStep.NewRedPacketPage);
        setSettings(undefined);
        const [, setValue] = state;
        setValue(DialogTabs.create);
        props.onClose();
    }, [
        props,
        state
    ]);
    const onCreateOrSelect = (0,react.useCallback)(async (payload)=>{
        if (payload.password === '') {
            if (payload.contract_version === 1) {
                alert('Unable to share a red packet without a password. But you can still withdraw the red packet.');
                var ref;
                payload.password = (ref = prompt('Please enter the password of the red packet:', '')) !== null && ref !== void 0 ? ref : '';
            } else if (payload.contract_version > 1 && payload.contract_version < 4) {
                var ref;
                // just sign out the password if it is lost.
                payload.password = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign((ref = lib_default().sha3(payload.sender.message)) !== null && ref !== void 0 ? ref : '', account);
                payload.password = payload.password.slice(2);
            }
        }
        if (payload) attachMetadata(constants/* RedPacketMetaKey */.Vr, payload);
        else dropMetadata(constants/* RedPacketMetaKey */.Vr);
        onClose();
    }, [
        onClose,
        chainId
    ]);
    //#region blocking
    // password should remain the same rather than change each time when createState change,
    //  otherwise password in database would be different from creating red-packet.
    const [createSettings, createState, createCallback, resetCreateCallback] = useCreateCallback(settings, contract_version);
    //#endregion
    // assemble JSON payload
    const payload = (0,react.useRef)({
        network: (0,src/* getChainName */.qzE)(chainId)
    });
    (0,react.useEffect)(()=>{
        if (createState.type !== src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        const contractAddress = HAPPY_RED_PACKET_ADDRESS_V4;
        if (!contractAddress) {
            onClose();
            return;
        }
        payload.current.contract_address = contractAddress;
        payload.current.contract_version = contract_version;
        payload.current.network = (0,src/* getChainName */.qzE)(chainId);
    }, [
        chainId,
        networkType,
        contract_version,
        createState
    ]);
    //#region remote controlled transaction dialog
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        var ref;
        if (ev.open) return;
        // reset state
        resetCreateCallback();
        // the settings is not available
        if (!(createSettings === null || createSettings === void 0 ? void 0 : createSettings.token)) return;
        // TODO:
        // earily return happended
        // we should guide user to select the red packet in the existing list
        if (createState.type !== src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) return;
        const { receipt  } = createState;
        var _returnValues;
        const CreationSuccess = (_returnValues = (ref = receipt.events) === null || ref === void 0 ? void 0 : ref.CreationSuccess.returnValues) !== null && _returnValues !== void 0 ? _returnValues : {
        };
        payload.current.sender = {
            address: account,
            name: createSettings.name,
            message: createSettings.message
        };
        payload.current.is_random = createSettings.isRandom;
        payload.current.shares = createSettings.shares;
        payload.current.password = createSettings.privateKey;
        payload.current.token_type = createSettings.token.type;
        payload.current.rpid = CreationSuccess.id;
        payload.current.total = CreationSuccess.total;
        payload.current.duration = createSettings.duration;
        payload.current.creation_time = Number.parseInt(CreationSuccess.creation_time, 10) * 1000;
        if (createSettings.token.type === src/* EthereumTokenType.ERC20 */.Drc.ERC20) payload.current.token = {
            name: '',
            symbol: '',
            ...(0,lodash.omit)(createSettings.token, [
                'type',
                'chainId'
            ])
        };
        setSettings(undefined);
        // output the redpacket as JSON payload
        onCreateOrSelect(payload.current);
    });
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        var ref;
        if (!(createSettings === null || createSettings === void 0 ? void 0 : createSettings.token) || createState.type === src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        // storing the created red packet in DB, it helps retrieve red packet password later
        // save to the database early, otherwise red-packet would lose when close the tx dialog or
        //  web page before create successfully.
        if (createState.type === src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING) {
            payload.current.txid = createState.hash;
            const record = {
                id: createState.hash,
                from: '',
                password: createSettings.privateKey,
                contract_version
            };
            messages/* RedPacketRPC.discoverRedPacket */.T.discoverRedPacket(record);
        }
        setTransactionDialog({
            open: true,
            state: createState,
            summary: t('plugin_red_packet_create_with_token', {
                symbol: `${(0,src/* formatBalance */.azF)(createSettings === null || createSettings === void 0 ? void 0 : createSettings.total, createSettings === null || createSettings === void 0 ? void 0 : (ref = createSettings.token) === null || ref === void 0 ? void 0 : ref.decimals)} ${createSettings === null || createSettings === void 0 ? void 0 : createSettings.token.symbol}`
            })
        });
    }, [
        createState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    const [step, setStep] = (0,react.useState)(CreateRedPacketPageStep.NewRedPacketPage);
    const onBack = (0,react.useCallback)(()=>{
        if (step === CreateRedPacketPageStep.ConfirmPage) setStep(CreateRedPacketPageStep.NewRedPacketPage);
    }, [
        step
    ]);
    const onNext = (0,react.useCallback)(()=>{
        if (step === CreateRedPacketPageStep.NewRedPacketPage) setStep(CreateRedPacketPageStep.ConfirmPage);
    }, [
        step
    ]);
    const onChange = (0,react.useCallback)((val)=>{
        setSettings(val);
    }, []);
    const tabProps = {
        tabs: [
            {
                label: t('plugin_red_packet_create_new'),
                children: (0,theme_src/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketForm, {
                        origin: settings,
                        onNext: onNext,
                        onChange: onChange,
                        SelectMenuProps: {
                            container
                        }
                    })
                ),
                sx: {
                    p: 0
                }
            },
            {
                label: t('plugin_red_packet_select_existing'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketHistoryList, {
                    onSelect: onCreateOrSelect,
                    onClose: onClose
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: props.open,
        title: t('plugin_red_packet_display_name'),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                step === CreateRedPacketPageStep.NewRedPacketPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                    classes: {
                        tabs: classes.tabs
                    },
                    height: state[0] === DialogTabs.create ? 280 : 320,
                    ...tabProps
                }) : null,
                step === CreateRedPacketPageStep.ConfirmPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketConfirmDialog, {
                    onClose: onClose,
                    onBack: onBack,
                    onCreate: createCallback,
                    settings: settings
                }) : null
            ]
        })
    }));
};

// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(16842);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx
var EthereumChainBoundary = __webpack_require__(85249);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useClaimCallback.ts




function useClaimCallback(version, from, id, password) {
    const nonce = (0,src/* useNonce */.XEd)();
    const gasPrice = (0,src/* useGasPrice */.Fh$)();
    const [claimState, setClaimState] = (0,src/* useTransactionState */.pld)();
    const redPacketContract = useRedPacketContract(version);
    const claimCallback = (0,react.useCallback)(async ()=>{
        if (!redPacketContract || !id || !password) {
            setClaimState({
                type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // note: despite the method params type of V1 and V2 is the same,
        //  but it is more understandable to declare respectively
        const claim = version === 4 ? ()=>redPacketContract.methods.claim(id, password, from)
         : ()=>redPacketContract.methods.claim(id, password, from, lib_default().sha3(from))
        ;
        // esitimate gas and compose transaction
        const config = {
            from,
            gas: await claim().estimateGas({
                from
            }).catch((error)=>{
                setClaimState({
                    type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // step 2-1: blocking
        return new Promise((resolve, reject)=>{
            const promiEvent = claim().send(config);
            promiEvent.on(src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>{
                setClaimState({
                    type: src/* TransactionStateType.HASH */.n$V.HASH,
                    hash
                });
                resolve();
            });
            promiEvent.on(src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            });
            promiEvent.on(src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                setClaimState({
                    type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        gasPrice,
        nonce,
        id,
        password,
        from,
        redPacketContract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setClaimState({
            type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacket.tsx


















const RedPacket_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            borderRadius: theme.spacing(1),
            padding: theme.spacing(2),
            background: '#DB0632',
            position: 'relative',
            display: 'flex',
            color: theme.palette.common.white,
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 136,
            boxSizing: 'border-box'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        },
        content: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
        footer: {
            paddingTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center'
        },
        from: {
            flex: '1',
            textAlign: 'left'
        },
        label: {
            borderRadius: theme.spacing(1),
            padding: theme.spacing(0.2, 1),
            background: 'rgba(0, 0, 0, 0.2)',
            textTransform: 'capitalize'
        },
        words: {
            color: '#FAF2BF',
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '85%'
        },
        button: {
            color: theme.palette.common.white
        },
        packet: {
            top: 40,
            right: -10,
            width: 90,
            height: 90,
            position: 'absolute',
            backgroundAttachment: 'local',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(78259), __webpack_require__.b)})`
        },
        dai: {
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(81924), __webpack_require__.b)})`
        },
        okb: {
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(85070), __webpack_require__.b)})`
        },
        text: {
            padding: theme.spacing(0.5, 2),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
        },
        dimmer: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        cursor: {
            cursor: 'pointer'
        },
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        icon: {
            fontSize: 45
        },
        metamaskContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        }
    })
);
function RedPacket(props) {
    var ref, _utils, ref1;
    const { payload  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RedPacket_useStyles();
    // context
    const web3 = (0,src/* useWeb3 */.$6B)();
    const account = (0,src/* useAccount */.mAM)();
    const chainIdValid = (0,src/* useChainIdValid */.asy)();
    const networkType = (0,src/* useNetworkType */.bLq)();
    //#region token detailed
    const { value: availability , computed: availabilityComputed , retry: revalidateAvailability ,  } = useAvailabilityComputed(account, payload);
    var ref2;
    const { value: tokenDetailed  } = (0,src/* useFungibleTokenDetailed */.jv)(payload.token_type, (ref2 = (ref = payload.token) === null || ref === void 0 ? void 0 : ref.address) !== null && ref2 !== void 0 ? ref2 : '');
    var _token;
    const token = (_token = payload.token) !== null && _token !== void 0 ? _token : tokenDetailed;
    //#ednregion
    const { canFetch , canClaim , canRefund , listOfStatus  } = availabilityComputed;
    //#region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    //#endregion
    //#region remote controlled transaction dialog
    const postLink = (0,usePostInfo/* usePostLink */.Vc)();
    const shareLink = (ref1 = (_utils = social_network.activatedSocialNetworkUI.utils).getShareLinkURL) === null || ref1 === void 0 ? void 0 : ref1.call(_utils, canClaim ? t('plugin_red_packet_share_message', {
        sender: payload.sender.name,
        payload: postLink,
        network: (0,src/* resolveNetworkName */.nWu)(networkType)
    }).trim() : '').toString();
    const [claimState, claimCallback, resetClaimCallback] = useClaimCallback(payload.contract_version, account, payload.rpid, payload.contract_version > 3 ? web3.eth.accounts.sign(account, payload.password).signature : payload.password);
    const [refundState, refundCallback, resetRefundCallback] = useRefundCallback(payload.contract_version, account, payload.rpid);
    // close the transaction dialog
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>undefined
    );
    // open the transation dialog
    (0,react.useEffect)(()=>{
        const state = canClaim ? claimState : refundState;
        if (state.type === src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        if (!availability || !token) return;
        if (state.type === src/* TransactionStateType.HASH */.n$V.HASH) {
            setTransactionDialog({
                open: true,
                shareLink: shareLink.toString(),
                state,
                summary: canClaim ? t('plugin_red_packet_claiming_from', {
                    name: payload.sender.name
                }) : canRefund ? t('plugin_red_packet_refunding_for', {
                    balance: (0,src/* formatBalance */.azF)(availability.balance, token.decimals),
                    symbol: token.symbol
                }) : ''
            });
        } else if (state.type === src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED) {
            resetClaimCallback();
            resetRefundCallback();
            revalidateAvailability();
        }
    }, [
        claimState,
        refundState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    const onClaimOrRefund = (0,react.useCallback)(async ()=>{
        if (canClaim) await claimCallback();
        else if (canRefund) await refundCallback();
    }, [
        canClaim,
        canRefund,
        claimCallback,
        refundCallback
    ]);
    var _network, ref3;
    // the red packet can fetch without account
    if (!availability || !token) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: (ref3 = (0,src/* getChainIdFromName */.npC)((_network = payload.network) !== null && _network !== void 0 ? _network : '')) !== null && ref3 !== void 0 ? ref3 : src/* ChainId.Mainnet */.a_e.Mainnet,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            component: "article",
            elevation: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "rectangular",
                    width: "30%",
                    height: 12,
                    style: {
                        marginTop: 16
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "rectangular",
                    width: "40%",
                    height: 12,
                    style: {
                        marginTop: 16
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "rectangular",
                    width: "70%",
                    height: 12,
                    style: {
                        marginBottom: 16
                    }
                })
            ]
        })
    }));
    var _network1, ref4, _name, ref5, ref6;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: (ref4 = (0,src/* getChainIdFromName */.npC)((_network1 = payload.network) !== null && _network1 !== void 0 ? _network1 : '')) !== null && ref4 !== void 0 ? ref4 : src/* ChainId.Mainnet */.a_e.Mainnet,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classnames_default()(classes.root),
                component: "article",
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.from,
                                variant: "body1",
                                color: "inherit",
                                children: t('plugin_red_packet_from', {
                                    name: (_name = payload.sender.name) !== null && _name !== void 0 ? _name : '-'
                                })
                            }),
                            canFetch && listOfStatus.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                variant: "body2",
                                children: resolveRedPacketStatus(listOfStatus)
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()(classes.content),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.words,
                                variant: "h6",
                                children: payload.sender.message
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: (()=>{
                                    if (listOfStatus.includes(RedPacketStatus.expired) && canRefund) return t('plugin_red_packet_description_refund', {
                                        balance: (0,src/* formatBalance */.azF)(availability.balance, token.decimals),
                                        symbol: token.symbol
                                    });
                                    if (listOfStatus.includes(RedPacketStatus.claimed)) return t('plugin_red_packet_description_claimed', availability.claimed_amount ? {
                                        amount: (0,src/* formatBalance */.azF)(availability.claimed_amount, token.decimals),
                                        symbol: token.symbol
                                    } : {
                                        amount: '',
                                        symbol: ''
                                    });
                                    if (listOfStatus.includes(RedPacketStatus.refunded)) return t('plugin_red_packet_description_refunded');
                                    if (listOfStatus.includes(RedPacketStatus.expired)) return t('plugin_red_packet_description_expired');
                                    if (listOfStatus.includes(RedPacketStatus.empty)) return t('plugin_red_packet_description_empty');
                                    if (!payload.password) return t('plugin_red_packet_description_broken');
                                    var _name1, _shares;
                                    return t('plugin_red_packet_description_failover', {
                                        total: (0,src/* formatBalance */.azF)(payload.total, token.decimals),
                                        symbol: token.symbol,
                                        name: (_name1 = payload.sender.name) !== null && _name1 !== void 0 ? _name1 : '-',
                                        shares: (_shares = payload.shares) !== null && _shares !== void 0 ? _shares : '-'
                                    });
                                })()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classnames_default()(classes.packet, {
                            [classes.dai]: (token === null || token === void 0 ? void 0 : token.name) === 'DAI' || (0,src/* isDAI */.d5_)((ref5 = token === null || token === void 0 ? void 0 : token.address) !== null && ref5 !== void 0 ? ref5 : ''),
                            [classes.okb]: (token === null || token === void 0 ? void 0 : token.name) === 'OKB' || (0,src/* isOKB */.JVY)((ref6 = token === null || token === void 0 ? void 0 : token.address) !== null && ref6 !== void 0 ? ref6 : '')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classnames_default()(classes.loader, {
                            [classes.dimmer]: !canClaim && !canRefund
                        })
                    })
                ]
            }),
            canClaim || canRefund ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.footer,
                    children: !account ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        variant: "contained",
                        size: "large",
                        onClick: openSelectProviderDialog,
                        children: t('plugin_wallet_connect_a_wallet')
                    }) : !chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        disabled: true,
                        variant: "contained",
                        size: "large",
                        children: t('plugin_wallet_invalid_network')
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        disabled: claimState.type === src/* TransactionStateType.HASH */.n$V.HASH || refundState.type === src/* TransactionStateType.HASH */.n$V.HASH,
                        variant: "contained",
                        size: "large",
                        onClick: onClaimOrRefund,
                        children: canClaim ? claimState.type === src/* TransactionStateType.HASH */.n$V.HASH ? t('plugin_red_packet_claiming') : t('plugin_red_packet_claim') : refundState.type === src/* TransactionStateType.HASH */.n$V.HASH ? t('plugin_red_packet_refunding') : t('plugin_red_packet_refund')
                    })
                })
            }) : null
        ]
    }));
}
function resolveRedPacketStatus(listOfStatus) {
    if (listOfStatus.includes(RedPacketStatus.claimed)) return 'Claimed';
    if (listOfStatus.includes(RedPacketStatus.refunded)) return 'Refunded';
    if (listOfStatus.includes(RedPacketStatus.expired)) return 'Expired';
    if (listOfStatus.includes(RedPacketStatus.empty)) return 'Empty';
    return '';
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketInPost.tsx






function RedPacketInPost(props) {
    var _utils, ref, ref1;
    const { payload  } = props;
    //#region discover red packet
    const postIdentifier = usePostInfo/* usePostInfoDetails.postIdentifier */.H9.postIdentifier();
    const fromUrl = postIdentifier && !postIdentifier.isUnknown ? (ref = (_utils = social_network.activatedSocialNetworkUI.utils).getPostURL) === null || ref === void 0 ? void 0 : (ref1 = ref.call(_utils, postIdentifier)) === null || ref1 === void 0 ? void 0 : ref1.toString() : undefined;
    (0,react.useEffect)(()=>{
        if (!fromUrl) return;
        if (!payload.txid && payload.contract_version !== 1) return;
        const record = {
            id: payload.contract_version === 1 ? payload.rpid : payload.txid,
            from: fromUrl,
            password: payload.password,
            contract_version: payload.contract_version
        };
        messages/* RedPacketRPC.discoverRedPacket */.T.discoverRedPacket(record);
    }, [
        fromUrl
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket, {
        payload: payload
    }));
}

// EXTERNAL MODULE: ./src/resources/tool-icon/index.ts
var tool_icon = __webpack_require__(30234);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/index.tsx









const sns = {
    ...base/* base */.u,
    init (signal) {
    },
    DecryptedInspector (props) {
        if (!(0,helpers/* RedPacketMetadataReader */.Q)(props.message.meta).ok) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookPluginWrapper/* default */.Z, {
            pluginName: "Red Packet",
            children: (0,helpers/* renderWithRedPacketMetadata */.v)(props.message.meta, (r)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketInPost, {
                    payload: r
                })
            )
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* RedPacketMetaKey */.Vr,
            (payload)=>{
                var _network, ref;
                const chainId = (ref = (0,src/* getChainIdFromName */.npC)((_network = payload.network) !== null && _network !== void 0 ? _network : '')) !== null && ref !== void 0 ? ref : src/* ChainId.Mainnet */.a_e.Mainnet;
                const chainDetailed = (0,src/* getChainDetailed */.$Gt)(chainId);
                const tokenDetailed = payload.token_type === src/* EthereumTokenType.Native */.Drc.Native ? chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.nativeCurrency : payload.token;
                var ref1, ref2, ref3;
                return `A Red Packet with ${(0,src/* formatBalance */.azF)(payload.total, (ref1 = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals) !== null && ref1 !== void 0 ? ref1 : 0)} $${(ref3 = (ref2 = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol) !== null && ref2 !== void 0 ? ref2 : tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.name) !== null && ref3 !== void 0 ? ref3 : 'Token'} from ${payload.sender.name}`;
            }, 
        ], 
    ]),
    CompositionDialogEntry: {
        dialog: RedPacketDialog,
        label: {
            fallback: '💰 Red Packet'
        }
    },
    ToolbarEntry: {
        ...tool_icon/* ToolIconURLs.redpacket */.m.redpacket,
        onClick: 'openCompositionEntry'
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 33324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ RedPacketRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90254);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);


if (false) {}
const RedPacketMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .RedPacketPluginID */ .jY);
const RedPacketRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .RedPacketPluginID */ .jY, ()=>Promise.all(/* import() */[__webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6739), __webpack_require__.e(8369)]).then(__webpack_require__.bind(__webpack_require__, 38369))
, RedPacketMessage.rpc);


/***/ }),

/***/ 81924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bee70e3f0a13f13d3bec.png";

/***/ }),

/***/ 78259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "583131766579a5f647eb.png";

/***/ }),

/***/ 85070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aac3b75eedbc4c4fd187.png";

/***/ })

}]);