"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9093],{

/***/ 19093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(15679);
;// CONCATENATED MODULE: ../icons/plugins/Unlock.tsx


const UnlockIcon = (0,utils/* createIcon */.I)('UnlockIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M14.12 1.297h-3.4v3.416H5.287V1.297h-3.4v3.416H.965v1.623h.922v2.557c0 3.2 2.755 5.81 6.136 5.81 3.36 0 6.097-2.61 6.097-5.81V6.336h.915V4.713h-.915V1.297Zm-3.4 7.596c0 1.511-1.192 2.748-2.697 2.748a2.738 2.738 0 0 1-1.932-.807 2.762 2.762 0 0 1-.804-1.941V6.336h5.433v2.557Z",
        fill: "#FF5C66"
    })
}), '0 0 16 16');

// EXTERNAL MODULE: ./src/plugins/UnlockProtocol/base.ts
var base = __webpack_require__(99883);
// EXTERNAL MODULE: ./src/plugins/UnlockProtocol/constants.ts
var constants = __webpack_require__(14624);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(81148);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"iv":{"type":"string","title":"iv"},"unlockLocks":{"type":"array","additionalProperties":true,"title":"unlockLocks","properties":{"unlocklock":{"type":"string","title":"unlocklock"},"chainid":{"type":"number","title":"chainid"}}},"post":{"type":"string","title":"post"}}}');
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/helpers.ts



const UnlockProtocolMetadataReader = (0,typed_message_base/* createTypedMessageMetadataReader */.Bi)(constants/* pluginMetaKey */.rx, schema_namespaceObject);
const renderWithUnlockProtocolMetadata = (0,typed_message_base/* createRenderWithMetadata */.mC)(UnlockProtocolMetadataReader);

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(85974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(46995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var src_utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/UnlockProtocol/messages.ts
var messages = __webpack_require__(98852);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(43754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(41197);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/LockInList.tsx





const useStyle = (0,entry/* makeStyles */.ZL)()({
    root: {
        cursor: 'pointer',
        paddingLeft: 8
    },
    overflow: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    highlighted: {
        backgroundColor: 'inherit',
        color: 'inherit',
        fontWeight: 'bold'
    }
});
function LockInList(props) {
    const { classes  } = useStyle();
    const lock = props.item;
    const name = lock.lock.name;
    const secondary = lock.lock.address;
    const onClick = (0,react.useCallback)((ev)=>props.onChange(ev, !props.checked)
    , [
        props
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        button: true,
        onClick: onClick,
        disabled: props.disabled,
        ...props.ListItemProps,
        className: classnames_default()(classes.root, props.ListItemProps?.className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                checked: props.checked,
                color: "primary",
                ...props.CheckboxProps
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.overflow,
                    secondary: classes.overflow
                },
                primary: name,
                secondary: secondary
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/SelectRecipientsUnlockDialog.tsx








function SelectRecipientsUnlockDialogUI(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const [search, setSearch] = (0,react.useState)('');
    const LIST_ITEM_HEIGHT = 40;
    const { items , disabledItems  } = props;
    const itemsAfterSearch = (0,react.useMemo)(()=>{
        const fuse = new fuse_esm/* default */.Z(items, {
            keys: [
                'lock.name',
                'lock.address'
            ],
            isCaseSensitive: false,
            ignoreLocation: true,
            threshold: 0
        });
        return search === '' ? items : fuse.search(search).map((item)=>item.item
        );
    }, [
        search,
        items
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* InjectedDialog */.Fl, {
        open: props.open,
        title: t('plugin_unlockprotocol_select_unlock_lock'),
        onClose: props.onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        style: {
                            height: items.length * LIST_ITEM_HEIGHT || 40
                        },
                        dense: true,
                        children: itemsAfterSearch.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_unlockprotocol_no_lock_found",
                                        components: {
                                            dashboard: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                color: "primary",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://app.unlock-protocol.com/dashboard"
                                            })
                                        }
                                    })
                                })
                            })
                        }) : itemsAfterSearch.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(LockInList, {
                                item: item,
                                search: search,
                                checked: props.selected.some((x)=>x.lock.address === item.lock.address
                                ),
                                disabled: props.disabled || disabledItems?.includes(item),
                                onChange: (_, checked)=>{
                                    if (checked) {
                                        props.onSelect(item);
                                    } else {
                                        props.onDeselect(item);
                                    }
                                }
                            }, i)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    style: {
                        marginLeft: 'auto'
                    },
                    variant: "contained",
                    onClick: props.onClose,
                    children: t('plugin_unlockprotocol_submit_post')
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/UnlockProtocolDialog.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        actions: {
            flexDirection: 'row'
        }
    })
);
function UnlockProtocolDialog(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const [open, setOpen] = (0,react.useState)(false);
    const address = (0,useAccount/* useAccount */.m)();
    const { classes  } = useStyles();
    const [currentUnlockChain, setCurrentUnlockChain] = (0,react.useState)((0,useChainId/* useChainId */.xx)());
    const [currentUnlockPost, setCurrentUnlockPost] = (0,react.useState)('');
    const [currentUnlockTarget, setCurrentUnlockTarget] = (0,react.useState)(()=>[]
    );
    const [availableUnlockTarget, setAvailableUnlockTarget] = (0,react.useState)(()=>[]
    );
    const { attachMetadata , dropMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    (0,react.useEffect)(()=>{
        messages/* PluginUnlockProtocolRPC.getLocks */.T.getLocks(address).then((value)=>{
            if (value.length) {
                setAvailableUnlockTarget(value);
            }
        }).catch((error)=>{
            console.error(error);
            setAvailableUnlockTarget([
                {
                    lock: {
                        name: error.message || 'Some error occurred.',
                        chain: currentUnlockChain,
                        address: '0x0',
                        price: '0'
                    }
                }, 
            ]);
        });
    }, [
        address
    ]);
    const onInsert = ()=>{
        if (!!currentUnlockTarget.length && !!currentUnlockPost) {
            messages/* PluginUnlockProtocolRPC.encryptUnlockData */.T.encryptUnlockData(currentUnlockPost).then((encryption)=>{
                const uploadData = {
                    identifier: encryption.iv,
                    unlockLocks: currentUnlockTarget.map((x)=>{
                        return {
                            unlocklock: x.lock.address,
                            chainid: x.lock.chain
                        };
                    }),
                    unlockKey: encryption.key
                };
                messages/* PluginUnlockProtocolRPC.postUnlockData */.T.postUnlockData(uploadData).then((res)=>{
                    if (res === 200) {
                        const data = {
                            iv: uploadData.identifier,
                            unlockLocks: uploadData.unlockLocks,
                            post: encryption.encrypted
                        };
                        if (data) {
                            attachMetadata(constants/* pluginMetaKey */.rx, JSON.parse(JSON.stringify(data)));
                        } else {
                            dropMetadata(constants/* pluginMetaKey */.rx);
                        }
                        props.onClose();
                    } else {
                        return;
                    }
                });
            });
        } else {
            return;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* InjectedDialog */.Fl, {
        open: props.open,
        onClose: props.onClose,
        title: t('plugin_unlockprotocol_title'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    id: "outlined-multiline-static",
                    placeholder: t('post_dialog__placeholder'),
                    rows: 4,
                    // variant="outlined"
                    multiline: true,
                    fullWidth: true,
                    onChange: (e)=>setCurrentUnlockPost(e.target.value)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        label: t('plugin_unlockprotocol_select_unlock_lock'),
                        onClick: ()=>setOpen(true)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectRecipientsUnlockDialogUI, {
                        onSelect: (item)=>setCurrentUnlockTarget([
                                ...currentUnlockTarget,
                                item
                            ])
                        ,
                        onDeselect: (item)=>setCurrentUnlockTarget(currentUnlockTarget.filter((x)=>x.lock.address !== item.lock.address
                            ))
                        ,
                        open: open,
                        selected: currentUnlockTarget,
                        disabled: false,
                        chain: currentUnlockChain,
                        setChain: (chain)=>setCurrentUnlockChain(chain)
                        ,
                        items: availableUnlockTarget,
                        onClose: ()=>setOpen(false)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            marginLeft: 'auto'
                        },
                        variant: "contained",
                        disabled: !(!!currentUnlockTarget.length && !!currentUnlockPost),
                        onClick: onInsert,
                        children: t('plugin_unlockprotocol_submit_post')
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/UnlockProtocolInPost.tsx










function UnlockProtocolInPost(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { message  } = props;
    const [content1, setContent] = (0,react.useState)('');
    const address = (0,useAccount/* useAccount */.m)();
    const chain = (0,useChainId/* useChainId */.xx)();
    const [redirectUrl, setRedirectUrl] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const metadata = UnlockProtocolMetadataReader(props.message.meta);
        if (metadata.ok) {
            if (address) {
                const data = {
                    locks: {}
                };
                metadata.val.unlockLocks.forEach((locks)=>{
                    messages/* PluginUnlockProtocolRPC.verifyPurchase */.T.verifyPurchase(address, locks.unlocklock, locks.chainid).then((res)=>{
                        if (!res) return;
                        const requestData = {
                            lock: locks.unlocklock,
                            address: address,
                            chain: locks.chainid,
                            identifier: metadata.val.iv
                        };
                        messages/* PluginUnlockProtocolRPC.getKey */.T.getKey(requestData).catch((error)=>{
                            if (error.code === -1) {
                                setContent(t('plugin_unlockprotocol_server_error'));
                            }
                        }).then((response)=>{
                            setContent(response.message);
                            messages/* PluginUnlockProtocolRPC.decryptUnlockData */.T.decryptUnlockData(metadata.val.iv, response.post.unlockKey, metadata.val.post).then((content)=>{
                                setContent(content.content);
                            });
                        });
                    });
                    data.locks[locks.unlocklock] = {
                        network: locks.chainid
                    };
                });
                setRedirectUrl(constants/* paywallUrl */.mo + encodeURI(JSON.stringify(data)));
            }
        }
    }, [
        chain,
        address
    ]);
    if (content1) {
        const jsx = message ? renderWithUnlockProtocolMetadata(props.message.meta, (r)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                    chainId: chain,
                    noSwitchNetworkTip: false,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: content1
                    })
                })
            });
        }) : null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: jsx
        });
    } else if (redirectUrl) {
        const jsx = message ? renderWithUnlockProtocolMetadata(props.message.meta, (r)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Render, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: [
                            '"',
                            t('plugin_unlockprotocol_no_access'),
                            '"'
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: [
                            '"',
                            t('plugin_unlockprotocol_buy_lock_alert'),
                            '"'
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        target: "_blank",
                        href: redirectUrl,
                        children: t('plugin_unlockprotocol_buy_lock')
                    })
                ]
            });
        }) : null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: jsx
        });
    } else {
        const jsx = message ? renderWithUnlockProtocolMetadata(props.message.meta, (r)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                    chainId: chain,
                    noSwitchNetworkTip: false,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: [
                                '"',
                                t('loading'),
                                '"'
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                    ]
                })
            });
        }) : null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: jsx
        });
    }
};
function Render(props) {
    (0,entry_dom/* usePluginWrapper */.fI)(true, {
        width: 300
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/SNSAdaptor/index.tsx







const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const metadata = UnlockProtocolMetadataReader(props.message.meta);
        if (!metadata.ok) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockProtocolInPost, {
            ...props
        });
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* pluginMetaKey */.rx,
            (meta)=>'An Unlock Protocol post has been added'
        ], 
    ]),
    CompositionDialogEntry: {
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockIcon, {
                    style: {
                        width: 16,
                        height: 16
                    }
                }),
                constants/* pluginName */.oy
            ]
        }),
        dialog: UnlockProtocolDialog
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 98852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ PluginUnlockProtocolRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14624);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79936);


const UnlockProtocolMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .pluginId */ .aw);
const PluginUnlockProtocolRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .pluginId */ .aw, ()=>Promise.all(/* import() */[__webpack_require__.e(2118), __webpack_require__.e(9391)]).then(__webpack_require__.bind(__webpack_require__, 89391))
, UnlockProtocolMessage.rpc);


/***/ }),

/***/ 38587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(24790);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(94232);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(80917);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx















const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const plugin = (0,entry_dom/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,entry_web3/* useAccount */.mA)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = props?.isValidChainId?.(actualChainId, expectedChainId) ?? false;
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #region connect wallet dialog
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (ev.open) return;
    });
    // #endregion
    // request ethereum-compatible network
    const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
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
            settings_settings/* pluginIDSettings.value */.tR.value = entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) {
            await switchToPlugin();
            if (!networkType || networkType !== types/* NetworkType.Ethereum */.td.Ethereum || (0,address/* isValidAddress */.At)(account)) return;
            setConnectWalletDialog({
                open: true,
                providerType: types/* ProviderType.MetaMask */.lP.MetaMask,
                networkType
            });
        }
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const renderBox = (children)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: props.className,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        });
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
    if (isChainMatched && isPluginMatched || isValid) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: props.switchButtonStyle ?? {
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
                sx: props.switchButtonStyle ?? {
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


/***/ })

}]);