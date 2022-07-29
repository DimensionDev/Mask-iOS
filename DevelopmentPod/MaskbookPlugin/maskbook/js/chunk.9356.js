"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9356],{

/***/ 79356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../plugins/Debugger/src/base.ts + 7 modules
var base = __webpack_require__(51217);
// EXTERNAL MODULE: ../plugins/Debugger/src/constants.ts
var constants = __webpack_require__(38014);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants_constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/solana/index.ts + 10 modules
var solana = __webpack_require__(7670);
// EXTERNAL MODULE: ../web3-shared/flow/index.ts + 14 modules
var flow = __webpack_require__(85081);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(34085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(9293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(9051);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(56030);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(54152);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(81117);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Radio/Radio.js + 5 modules
var Radio = __webpack_require__(68421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../plugins/Debugger/src/SNSAdaptor/components/TabContent.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        overflow: 'auto'
    }
});
function TabContent({ identity , socialAddressList  }) {
    const { classes  } = useStyles();
    const renderIdentity = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
            dense: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Nickname"
                        }),
                        secondary: identity?.nickname
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Bio"
                        }),
                        secondary: identity?.bio
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Home Page"
                        }),
                        secondary: identity?.homepage
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    sx: {
                        display: 'block'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Avatar"
                        }),
                        secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: identity?.avatar,
                            style: {
                                maxWidth: 100
                            }
                        })
                    })
                })
            ]
        });
    };
    const renderAddressNames = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            dense: true,
            children: socialAddressList?.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: x.type
                        }),
                        secondary: x.address
                    })
                }, `${x.type}_${x.address}`)
            )
        });
    };
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
    const pluginID = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)();
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)();
    const hub = (0,entry_web3/* useWeb3Hub */.hh)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const chainId1 = (0,entry_web3/* useChainId */.xx)();
    const { value: balance = '0'  } = (0,entry_web3/* useBalance */.KQ)();
    const { value: blockNumber = 0  } = (0,entry_web3/* useBlockNumber */.Ov)();
    const { value: blockTimestamp = 0  } = (0,entry_web3/* useBlockTimestamp */.oN)();
    const onTransferCallback = (0,react.useCallback)(()=>{
        if (!NATIVE_TOKEN_ADDRESS) return;
        return connection.transferFungibleToken(NATIVE_TOKEN_ADDRESS, '0x790116d0685eB197B886DAcAD9C247f785987A4a', '100');
    }, [
        connection
    ]);
    const onSignMessage = (0,react.useCallback)(async (type)=>{
        const message = 'Hello World';
        const typedData = JSON.stringify({
            domain: {
                chainId: chainId1.toString(),
                name: 'Ether Mail',
                verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
                version: '1'
            },
            message: {
                contents: 'Hello, Bob!',
                from: {
                    name: 'Cow',
                    wallets: [
                        '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
                        '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF', 
                    ]
                },
                to: [
                    {
                        name: 'Bob',
                        wallets: [
                            '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
                            '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
                            '0xB0B0b0b0b0b0B000000000000000000000000000', 
                        ]
                    }, 
                ]
            },
            primaryType: 'Mail',
            types: {
                Group: [
                    {
                        name: 'name',
                        type: 'string'
                    },
                    {
                        name: 'members',
                        type: 'Person[]'
                    }, 
                ],
                Mail: [
                    {
                        name: 'from',
                        type: 'Person'
                    },
                    {
                        name: 'to',
                        type: 'Person[]'
                    },
                    {
                        name: 'contents',
                        type: 'string'
                    }, 
                ],
                Person: [
                    {
                        name: 'name',
                        type: 'string'
                    },
                    {
                        name: 'wallets',
                        type: 'address[]'
                    }, 
                ]
            }
        });
        const signed = await connection.signMessage(type === 'typedDataSign' ? typedData : message, type);
        window.alert(`Signed: ${signed}`);
    }, [
        chainId1,
        connection
    ]);
    const onSwitchChain = (0,react.useCallback)(async (chainId)=>{
        return connection?.switchChain?.(chainId);
    }, [
        connection
    ]);
    const onConnect = (0,react.useCallback)(async (chainId, providerType)=>{
        await connection.connect({
            chainId,
            providerType
        });
    }, [
        connection
    ]);
    const onDisconnect = (0,react.useCallback)(async (providerType)=>{
        await connection.disconnect({
            providerType
        });
    }, [
        connection
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            size: "small",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Account"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: Others?.formatAddress(account, 4)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Balance"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: balance
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Block Number"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: blockNumber
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Block Timestamp"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: blockTimestamp
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Native Token Transfer"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: onTransferCallback,
                                    children: "Transfer"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Sign Message"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>{
                                        switch(pluginID){
                                            case src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM:
                                                onSignMessage('personalSign');
                                                break;
                                            default:
                                                onSignMessage();
                                                break;
                                        }
                                    },
                                    children: "Sign Message"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Sign Typed Data"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: ()=>{
                                        switch(pluginID){
                                            case src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM:
                                                onSignMessage('typedDataSign');
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Sign Typed Data"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Switch Chain"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: async ()=>{
                                        switch(pluginID){
                                            case src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM:
                                                await onSwitchChain(chainId1 === types/* ChainId.Mainnet */.a_.Mainnet ? types/* ChainId.Matic */.a_.Matic : types/* ChainId.Mainnet */.a_.Mainnet);
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Switch Chain"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Connect Wallet"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: async ()=>{
                                        switch(pluginID){
                                            case src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM:
                                                await onConnect(types/* ChainId.Mainnet */.a_.Mainnet, types/* ProviderType.MetaMask */.lP.MetaMask);
                                                break;
                                            case src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA:
                                                await onConnect(solana/* ChainId.Mainnet */.a_.Mainnet, solana/* ProviderType.Phantom */.lP.Phantom);
                                                break;
                                            case src/* NetworkPluginID.PLUGIN_FLOW */.FF.PLUGIN_FLOW:
                                                await onConnect(flow/* ChainId.Mainnet */.a_.Mainnet, flow/* ProviderType.Blocto */.lP.Blocto);
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Connect"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Disconnect Wallet"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "small",
                                    onClick: async ()=>{
                                        switch(pluginID){
                                            case src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM:
                                                await onDisconnect(types/* ProviderType.MetaMask */.lP.MetaMask);
                                                break;
                                            case src/* NetworkPluginID.PLUGIN_SOLANA */.FF.PLUGIN_SOLANA:
                                                await onDisconnect(solana/* ProviderType.Phantom */.lP.Phantom);
                                                break;
                                            case src/* NetworkPluginID.PLUGIN_FLOW */.FF.PLUGIN_FLOW:
                                                await onDisconnect(flow/* ProviderType.Blocto */.lP.Blocto);
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                    children: "Disconnect"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Non-Fungible Token"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                    component: "form",
                                    onSubmit: async (ev)=>{
                                        ev.preventDefault();
                                        const formData = new FormData(ev.currentTarget);
                                        const address = formData.get('address');
                                        const tokenId = formData.get('tokenId');
                                        const schemaType = Number.parseInt(formData.get('schema'), 10);
                                        const token = await connection.getNonFungibleToken(address, tokenId, schemaType);
                                        console.log(token);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                marginBottom: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                name: "address",
                                                label: "Contract Address",
                                                size: "small"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                marginBottom: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                name: "tokenId",
                                                label: "Token Id",
                                                size: "small"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                marginBottom: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(RadioGroup/* default */.Z, {
                                                defaultValue: types/* SchemaType.ERC721 */.XQ.ERC721,
                                                name: "schema",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: types/* SchemaType.ERC721 */.XQ.ERC721,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "ERC721"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: types/* SchemaType.ERC1155 */.XQ.ERC1155,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "ERC1155"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            size: "small",
                                            type: "submit",
                                            children: "Query"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Non-Fungible Asset"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                                    component: "form",
                                    onSubmit: async (ev)=>{
                                        ev.preventDefault();
                                        const formData = new FormData(ev.currentTarget);
                                        const address = formData.get('address');
                                        const tokenId = formData.get('tokenId');
                                        const sourceType = formData.get('sourceType');
                                        const token = await hub.getNonFungibleAsset?.(address, tokenId, {
                                            sourceType
                                        });
                                        console.log(token);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                marginBottom: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                name: "address",
                                                label: "Contract Address",
                                                size: "small"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                marginBottom: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                name: "tokenId",
                                                label: "Token Id",
                                                size: "small"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                marginBottom: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(RadioGroup/* default */.Z, {
                                                defaultValue: src/* SourceType.Alchemy_EVM */.PO.Alchemy_EVM,
                                                name: "sourceType",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: src/* SourceType.Alchemy_EVM */.PO.Alchemy_EVM,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "Alchemy"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: src/* SourceType.OpenSea */.PO.OpenSea,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "OpenSea"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: src/* SourceType.Rarible */.PO.Rarible,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "Rarible"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: src/* SourceType.RSS3 */.PO.RSS3,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "RSS3"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: src/* SourceType.Zora */.PO.Zora,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "Zora"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                        value: src/* SourceType.NFTScan */.PO.NFTScan,
                                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                                                        label: "NFTScan"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            size: "small",
                                            type: "submit",
                                            children: "Query"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Profile Data"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: renderIdentity()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    whiteSpace: "nowrap",
                                    children: "Found Address Names"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: renderAddressNames()
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ../plugins/Debugger/src/SNSAdaptor/index.tsx




const sns = {
    ...base/* base */.u,
    init (signal) {},
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_tabContent`,
            label: 'Debugger',
            priority: 99999,
            UI: {
                TabContent: TabContent
            },
            Utils: {
                sorter (a, z) {
                    if (a.type === src/* SocialAddressType.ADDRESS */.bN.ADDRESS) return 1;
                    if (z.type === src/* SocialAddressType.ADDRESS */.bN.ADDRESS) return -1;
                    return 0;
                }
            }
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);