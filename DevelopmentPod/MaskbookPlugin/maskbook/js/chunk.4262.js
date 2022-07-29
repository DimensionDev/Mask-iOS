"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4262],{

/***/ 14262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ./src/plugins/ArtBlocks/constants.ts
var constants = __webpack_require__(29105);
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/utils.ts



function checkUrl(url) {
    const protocol = 'https://';
    const _url = new URL(url.startsWith(protocol) ? url : protocol + url);
    return constants/* artBlocksHostnames.includes */.K0.includes(_url.hostname) && constants/* artBlocksPathnameRegexMatcher.test */.ZJ.test(_url.pathname);
}
function getRelevantUrl(textContent) {
    const urls = (0,src/* parseURL */.Lk)(textContent);
    return urls.find(checkUrl);
}
function getAssetInfoFromURL(url) {
    if (!url) return null;
    const _url = new URL(url);
    const artBlocksMatched = _url.pathname.match(constants/* artBlocksPathnameRegexMatcher */.ZJ);
    if (artBlocksMatched) {
        return {
            chain_id: _url.host.includes('artist-staging') ? types/* ChainId.Ropsten */.a_.Ropsten : types/* ChainId.Mainnet */.a_.Mainnet,
            project_id: artBlocksMatched[1]
        };
    }
    // nothing matched
    return;
}
function buildTokenId(projectId, invocation) {
    return projectId * 1000000 + invocation;
}

// EXTERNAL MODULE: ./src/plugins/ArtBlocks/base.tsx
var base = __webpack_require__(45915);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(70186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(60647);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MobileStepper/MobileStepper.js + 1 modules
var MobileStepper = __webpack_require__(73062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/OpenInNew.js
var OpenInNew = __webpack_require__(70403);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(5911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/KeyboardArrowRight.js
var KeyboardArrowRight = __webpack_require__(91886);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/pipes/index.ts




const resolveTokenLinkOnArtBlocks = (chainId, tokenId)=>{
    if (chainId === types/* ChainId.Ropsten */.a_.Ropsten) {
        return dist_default()(constants/* ArtBlocksRopstenUrl */.GG, '/token/:tokenId', {
            tokenId
        });
    }
    return dist_default()(constants/* ArtBlocksMainnetUrl */.bD, '/token/:tokenId', {
        tokenId
    });
};
const resolveProjectLinkOnArtBlocks = (chainId, projectId)=>{
    if (chainId === types/* ChainId.Ropsten */.a_.Ropsten) {
        return dist_default()(constants/* ArtBlocksRopstenUrl */.GG, '/project/:projectId', {
            projectId
        });
    }
    return dist_default()(constants/* ArtBlocksMainnetUrl */.bD, '/project/:projectId', {
        projectId
    });
};
const resolveUserLinkOnArtBlocks = (chainId, address)=>{
    if (chainId === types/* ChainId.Ropsten */.a_.Ropsten) {
        return dist_default()(constants/* ArtBlocksRopstenUrl */.GG, '/user/:address', {
            address
        });
    }
    return dist_default()(constants/* ArtBlocksMainnetUrl */.bD, '/user/:address', {
        address
    });
};
const resolveImageLinkOnArtBlocks = (chainId, tokenImage)=>{
    if (chainId === types/* ChainId.Ropsten */.a_.Ropsten) {
        return dist_default()(constants/* ArtBlocksRopstenHostImageUrl */.ZW, '/:tokenImage', {
            tokenImage
        });
    }
    return dist_default()(constants/* ArtBlocksMainnetHostImageUrl */.xE, '/:tokenImage', {
        tokenImage
    });
};
const pipes_resolveSubgraphLinkOnArtBlocks = (0,base_src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: constants/* ArtBlocksMainnetSubgraphLink */.ey,
    [types/* ChainId.Ropsten */.a_.Ropsten]: constants/* ArtBlocksRopstenSubgraphLink */.PO
}, constants/* ArtBlocksMainnetSubgraphLink */.ey);

;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/SNSAdaptor/CollectionView.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            borderRadius: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        title: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(0.5)
        },
        paper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'background.default',
            paddingRight: theme.spacing(1),
            paddingLeft: theme.spacing(1)
        },
        skeletonImage: {
            height: 304
        },
        skeletonTitle: {
            height: 20,
            width: '30%',
            marginLeft: theme.spacing(2)
        },
        hidden: {
            display: 'none'
        },
        active: {
            display: 'block'
        },
        buttonPrev: {
            marginRight: theme.spacing(0.5)
        },
        buttonNext: {
            marginLeft: theme.spacing(0.5)
        },
        tokenTitle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        tokenLinks: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 65
        },
        tokenIdRedirectionIcon: {
            verticalAlign: 'text-bottom',
            marginLeft: theme.spacing(0.5)
        },
        stepper: {
            backgroundColor: 'inherit'
        },
        imageContainer: {
            textAlign: 'center'
        },
        image: {
            maxHeight: 300
        }
    };
});
function CollectionView(props) {
    const theme = (0,useTheme/* default */.Z)();
    const { classes  } = useStyles();
    const { project  } = props;
    const [isImageLoaded, setImageLoaded] = (0,react.useState)(false);
    const [activeStep, setActiveStep] = (0,react.useState)(1);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const currentSelectedToken = {
        tokenId: buildTokenId(Number(project.projectId), activeStep - 1),
        contract: {
            id: project.contract.id
        }
    };
    const maxSteps = Number.parseInt(project.invocations, 10);
    const handleNext = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep + 1
        );
        setImageLoaded(false);
    };
    const handleBack = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep - 1
        );
        setImageLoaded(false);
    };
    const handleImageLoad = ()=>{
        setImageLoaded(true);
    };
    const tokenLink = resolveTokenLinkOnArtBlocks(chainId, currentSelectedToken.tokenId);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                square: true,
                elevation: 0,
                className: classes.paper,
                children: [
                    !isImageLoaded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        className: classes.skeletonTitle,
                        animation: "wave",
                        variant: "rectangular"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: tokenLink,
                        target: "_blank",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.title,
                            children: [
                                "#",
                                currentSelectedToken.tokenId,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    className: classes.tokenIdRedirectionIcon,
                                    fontSize: "small"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileStepper/* default */.Z, {
                        className: classes.stepper,
                        variant: "text",
                        steps: maxSteps,
                        position: "static",
                        activeStep: activeStep - 1,
                        nextButton: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                            className: classes.buttonNext,
                            size: "small",
                            variant: "text",
                            onClick: handleNext,
                            disabled: activeStep === maxSteps,
                            children: [
                                "Next",
                                theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowRight/* default */.Z, {})
                            ]
                        }),
                        backButton: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                            className: classes.buttonPrev,
                            size: "small",
                            variant: "text",
                            onClick: handleBack,
                            disabled: activeStep === 1,
                            children: [
                                theme.direction === 'rtl' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowRight/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.Z, {}),
                                "Back"
                            ]
                        })
                    })
                ]
            }),
            !isImageLoaded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.skeletonImage,
                animation: "wave",
                variant: "rectangular"
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.imageContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: tokenLink,
                    target: "_blank",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: isImageLoaded ? classes.image : classes.hidden,
                        src: resolveImageLinkOnArtBlocks(chainId, `${currentSelectedToken?.tokenId}.png`),
                        alt: "collection collectible",
                        onLoad: handleImageLoad
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/SNSAdaptor/DetailsView.tsx











const DetailsView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            padding: theme.spacing(2)
        },
        content: {
            paddingTop: theme.spacing(0),
            paddingBottom: `${theme.spacing(0)} !important`
        },
        container: {
            padding: theme.spacing(1)
        },
        nameRedirectionIcon: {
            verticalAlign: 'text-bottom'
        },
        nameRedirectionLink: {
            marginLeft: theme.spacing(0.5)
        },
        bold: {
            fontWeight: 'bold'
        },
        description: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: 14,
            whiteSpace: 'pre-line'
        },
        meta_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: theme.spacing(0)
            }
        }
    };
});
function DetailsView(props) {
    const { classes  } = DetailsView_useStyles();
    const { project  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const artistName = ` ${project.artistName}`;
    const invocations = `${project.invocations} of ${project.maxInvocations}`;
    const price = `${(0,formatter/* formatWeiToEther */.yp)(new (bignumber_default())(project.pricePerTokenInWei))} `;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "h6",
                        sx: {
                            marginBottom: 1
                        },
                        children: [
                            project.name,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.nameRedirectionLink,
                                href: resolveProjectLinkOnArtBlocks(chainId, project.projectId),
                                title: project.name,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    className: classes.nameRedirectionIcon,
                                    fontSize: "small"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_artblocks_created_by'),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveUserLinkOnArtBlocks(chainId, project.artistAddress),
                                rel: "noopener noreferrer",
                                target: "_blank",
                                title: resolveUserLinkOnArtBlocks(chainId, project.artistAddress),
                                children: artistName
                            }),
                            "\xa0\u2022\xa0",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: project.website,
                                rel: "noopener noreferrer",
                                target: "_blank",
                                title: project.website,
                                children: t('plugin_artblocks_website')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.description,
                        children: project.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_artblocks_infos')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    t('plugin_artblocks_price_row'),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    price,
                                    project.currencySymbol === null ? 'ETH' : project.currencySymbol
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    t('plugin_artblocks_minted_row'),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: invocations
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body2",
                                children: [
                                    t('plugin_artblocks_license_row'),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: project.license
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_artblocks_library_row')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: JSON.parse(project.scriptJSON).type
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_artblocks_chain')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_artblocks_blockchain_row')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: resolver/* chainResolver.chainName */.VU.chainName(chainId)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.meta_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_artblocks_contract_row')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolver/* explorerResolver.transactionLink */.Nb.transactionLink(chainId, project.contract.id),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                        address: project.contract.id,
                                        size: 4,
                                        formatter: formatter/* formatEthereumAddress */.j8
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/apis/index.ts

async function fetchProject(chainId, projectId) {
    const body = {
        query: `query Project {
            projects(where: { projectId: "${projectId}"}) {
                id
                projectId
                active
                name
                description
                additionalPayee
                complete
                paused
                currencyAddress
                artistName
                artistAddress
                pricePerTokenInWei
                currencyAddress
                currencySymbol
                contract {
                    id
                }
                website
                license
                invocations
                maxInvocations
                scriptJSON
            }
        }`
    };
    const response = await fetch(pipes_resolveSubgraphLinkOnArtBlocks(chainId), {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = (await response.json())?.data;
    return result;
}
async function fetchToken(chainId, tokenId) {
    const body = {
        query: `query Token {
            tokens(where: { tokenId: "${tokenId}"}) {
                tokenId
                contract {
                    id
                }
                project {
                    maxInvocations
                    projectId
                }
            }
        }`
    };
    const response = await fetch(resolveSubgraphLinkOnArtBlocks(chainId), {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = (await response.json())?.data;
    return result;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/hooks/useProject.ts


function useFetchProject(projectId, chainId) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!projectId) return null;
        return fetchProject(chainId, projectId);
    }, [
        chainId,
        projectId
    ]);
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants_constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(81117);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(23230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49596);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(442);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(5492);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(72005);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19963);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ../web3-contracts/abis/ArtBlocksMinterContract.json
const ArtBlocksMinterContract_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_genArt721Address","type":"address"},{"internalType":"address","name":"_minterFilter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"PricePerTokenInWeiUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"address","name":"_currencyAddress","type":"address"},{"indexed":false,"internalType":"string","name":"_currencySymbol","type":"string"}],"name":"ProjectCurrencyInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_purchaseToDisabled","type":"bool"}],"name":"PurchaseToDisabledUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractMintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genArt721CoreAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"getPriceInfo","outputs":[{"internalType":"bool","name":"isConfigured","type":"bool"},{"internalType":"uint256","name":"tokenPriceInWei","type":"uint256"},{"internalType":"string","name":"currencySymbol","type":"string"},{"internalType":"address","name":"currencyAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFilterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterType","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMaxHasBeenInvoked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMaxInvocations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMintCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMintLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchase","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchaseTo","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"purchaseToDisabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"setProjectMaxInvocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint8","name":"_limit","type":"uint8"}],"name":"setProjectMintLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleContractMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"togglePurchaseToDisabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"updatePricePerTokenInWei","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/hooks/useArtBlocksContract.ts



function useArtBlocksContract(chainId) {
    const { GEN_ART_721_MINTER  } = (0,constants_constants/* useArtBlocksConstants */.Qq)(chainId);
    return (0,entry_web3_evm/* useContract */.cq)(chainId, GEN_ART_721_MINTER, ArtBlocksMinterContract_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/hooks/usePurchaseCallback.ts






function usePurchaseCallback(chainId, projectId, amount, schema = types/* SchemaType.Native */.XQ.Native) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const genArt721MinterContract = useArtBlocksContract(chainId);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!genArt721MinterContract) return;
        const tx = await (0,contract/* encodeContractTransaction */.Wp)(genArt721MinterContract, genArt721MinterContract.methods.purchase(projectId), {
            from: account,
            value: new (bignumber_default())(schema === types/* SchemaType.Native */.XQ.Native ? amount : 0).toFixed()
        });
        return connection.sendTransaction(tx);
    }, [
        account,
        amount,
        chainId,
        genArt721MinterContract,
        connection
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/SNSAdaptor/PurchaseDialog.tsx


















const PurchaseDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(-0.5)
        },
        content: {
            padding: theme.spacing(0)
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(0)} ${theme.spacing(0.5)}`
        }
    };
});
function PurchaseDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PurchaseDialog_useStyles();
    const { project , open , onClose , chainId  } = props;
    const { token , balance  } = (0,entry_web3/* useFungibleTokenWatched */.g3)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, project.currencyAddress ? project.currencyAddress : '');
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const [{ loading: isPurchasing  }, purchaseCallback] = usePurchaseCallback(chainId, project.projectId, project.pricePerTokenInWei, token.value?.schema);
    const price = (0,react.useMemo)(()=>(0,base_src/* leftShift */.w5)(project.pricePerTokenInWei, token.value?.decimals)
    , [
        project.pricePerTokenInWei,
        token.value?.decimals
    ]);
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const shareText = [
        t((0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_artblocks_share' : 'plugin_artblocks_share_no_official_account', {
            name: project.name,
            price,
            symbol: token.value?.symbol
        }),
        '#mask_io #artblocks_io #nft',
        postLink, 
    ].join('\n');
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const showConfirm = (0,shared_src/* useShowConfirm */.Lm)();
    const purchase = (0,react.useCallback)(async ()=>{
        try {
            const hash = await purchaseCallback();
            if (typeof hash !== 'string') return;
            await openShareTxDialog({
                hash,
                onShare () {
                    social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
                }
            });
            onClose();
        } catch (err) {
            showConfirm({
                title: 'Error',
                content: err.message
            });
        }
    }, [
        openShareTxDialog,
        onClose
    ]);
    const { GEN_ART_721_MINTER: spender  } = (0,constants_constants/* useArtBlocksConstants */.Qq)();
    const validationMessage = (0,react.useMemo)(()=>{
        const balance_ = (0,base_src/* leftShift */.w5)(balance.value ?? '0', token.value?.decimals);
        if (balance_.isZero() || price.isGreaterThan(balance_)) return t('plugin_collectible_insufficient_balance');
        if (!ToS_Checked) return t('plugin_artblocks_check_tos_document');
        return '';
    }, [
        price,
        balance.value,
        token.value?.decimals,
        ToS_Checked
    ]);
    const actionButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
        loading: isPurchasing,
        className: classes.button,
        disabled: !!validationMessage || isPurchasing,
        color: "primary",
        variant: "contained",
        onClick: purchase,
        fullWidth: true,
        children: validationMessage || (isPurchasing ? t('plugin_artblocks_purchasing') : t('plugin_artblocks_purchase'))
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_artblocks_purchase'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenAmountPanel */.xl, {
                                label: t('plugin_artblocks_price_per_mint'),
                                amount: price.toString(),
                                balance: balance.value ?? '0',
                                token: token.value,
                                onAmountChange: ()=>{}
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: ToS_Checked,
                                    onChange: (event)=>setToS_Checked(event.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_artblocks_legal_text",
                                        components: {
                                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                color: "primary",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://www.artblocks.io/tos.pdf"
                                            })
                                        }
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            children: [
                                token.value?.schema === types/* SchemaType.Native */.XQ.Native ? actionButton : null,
                                token.value?.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                                    amount: project.pricePerTokenInWei,
                                    spender: spender,
                                    token: token.value,
                                    children: actionButton
                                }) : null
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/SNSAdaptor/ActionBar.tsx






const ActionBar_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            flex: 1
        },
        content: {
            padding: theme.spacing(0)
        },
        button: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    };
});
function ActionBar(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ActionBar_useStyles();
    const { project , chainId  } = props;
    const { open: openMintDialog , onClose: onCloseMintDialog , onOpen: onOpenMintDialog  } = (0,utils/* useControlledDialog */.D2)();
    const status = !project.active ? t('plugin_artblocks_not_active') : project.complete ? t('plugin_artblocks_completed') : project.paused ? t('plugin_artblocks_paused') : t('plugin_artblocks_purchase');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        display: "flex",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                fullWidth: true,
                color: "primary",
                variant: "contained",
                onClick: onOpenMintDialog,
                disabled: project.complete || project.paused || !project.active,
                children: status
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PurchaseDialog, {
                project: project,
                chainId: chainId,
                open: openMintDialog,
                onClose: onCloseMintDialog
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/SNSAdaptor/Collectible.tsx















const Collectible_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 0,
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        content: {
            padding: '0 !important'
        },
        footer: {
            marginTop: -1,
            zIndex: 1,
            position: 'relative',
            borderTop: `solid 1px ${theme.palette.divider}`,
            justifyContent: 'space-between'
        },
        footnote: {
            fontSize: 10,
            marginRight: theme.spacing(1)
        },
        footLink: {
            cursor: 'pointer',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        mask: {
            width: 40,
            height: 10
        }
    };
});
function Collectible(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Collectible_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, props?.chainId);
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const { value , loading , error  } = useFetchProject(props.projectId, chainId);
    const project = value?.projects[0];
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        children: t('loading')
    });
    if (error || !project) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        color: "textPrimary",
        children: t('plugin_artblocks_smt_wrong')
    });
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_artblocks_collection')
        }, "collection"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_artblocks_details')
        }, "details"), 
    ];
    const pages = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionView, {
            project: project
        }, "project"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsView, {
            project: project
        }, "details")
    ];
    const invocations = ` ${project.invocations} of ${project.maxInvocations} minted `;
    const price = ` ${(0,formatter/* formatWeiToEther */.yp)(project.pricePerTokenInWei)} ${project?.currencySymbol}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: constants/* ArtBlocksLogoUrl */.iQ
                        }),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveProjectLinkOnArtBlocks(chainId, project.projectId),
                                title: project.name,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: project.name
                            })
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: resolveUserLinkOnArtBlocks(chainId, project.artistAddress),
                                    title: project.artistAddress,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: project.artistName
                                }),
                                ' ',
                                "\u2022",
                                invocations,
                                "\u2022",
                                price
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                indicatorColor: "primary",
                                textColor: "primary",
                                variant: "fullWidth",
                                value: tabIndex,
                                onChange: (ev, newValue)=>setTabIndex(newValue)
                                ,
                                TabIndicatorProps: {
                                    style: {
                                        display: 'none'
                                    }
                                },
                                children: tabs
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                children: pages[tabIndex]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    flex: 1,
                    display: 'flex',
                    padding: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    expectedChainId: chainId,
                    renderInTimeline: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {
                        chainId: chainId,
                        project: project
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/ArtBlocks.tsx


const ArtBlocksIcon = (0,icons_utils/* createIcon */.I)('ArtBlocks', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "28",
            height: "28",
            rx: "14",
            fill: "url(#pattern034)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                    id: "pattern034",
                    patternContentUnits: "objectBoundingBox",
                    width: "1",
                    height: "1",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                        xlinkHref: "#image0_931_1289",
                        transform: "scale(0.00125)"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("image", {
                    id: "image0_931_1289",
                    width: "800",
                    height: "800",
                    xlinkHref: "data:image/png;base64,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Y+yjme0zM80PMorvIZ2kCIiACIiACIjASAjg3m7fGO9tdc49IWBmB0byYdRpioAIiIAIiIAIiMAYCBzoyW2oujlmAmZ2ZAyfRp2jCIiACIiACIiACAycwJEx39Pq3HtGwMyOD/wDqdMTAREQAREQAREQgSETON6z2091d+wENEnhkL+PdG4iIAIiIAIiIAIDJ6DJBsd+M9/X89ckhQP/atLpiYAIiIAIiIAIDJGAJhvs6823+j0jYGYHh/jJ1DmJgAiIgAiIgAiIwEAJHNR9rAj0noCZHR7oB1SnJQIiIAIiIAIiIAJDInC49zeeOgERIAHNlD6k7yadiwiIgAiIgAiIwAAJaKZz3riqHQYBFaUP8GtKpyQCIiACIiACIjAUAio6H8Ytt84iEiglRDOlD+WrSuchAiIgAiIgAiIwBAK4N9sb79v0WAQGQ0AjYw3he0rnIAIiIAIiIAIiMBACGvFqMHfZOpFKAmZ2aCAfWp2GCIiACIiACIiACPSZwKHKmzb9UQSGRMDMjvT506q+i4AIiIAIiIAIiEDPCRwZ0r2lzkUEGhHQyFg9/9pS90VABERABERABPpKQCNeNbpb1UaDJGBmGHVB/0RABERABERABERABFZD4OQgbyp1UiLQlICG513NN42OIgIiIAIiIAIiIALlf/xqxKumN6rabrgENDKWvhBFQAREQAREQAREYOkENOLVcG+ndWbzEJCELP1LRwcQAREQAREQAREYLwHJxzw3qHrN8AloeN7xfivqzEVABERABERABJZKQMPtDv9WWmc4LwFJyFK/fLRzERABERABERCB8RGQfMx7Y6rXjYeAmR0d33eDzlgEREAEREAEREAEFk7g6HjuIHWmIrBDApojZOFfQNqhCIiACIiACIjAuAhoro8d3o/q5SMkYGbHx/U9obMVAREQAREQAREQgYUQOD7CW0edsgjsnIDmCFnIF5B2IgIiIAIiIAIiMC4CmORZc33s/FZUexgrAUnIuL4xdbYiIAIiIAIiIAI7IiD5GOtNs857sQRKCcH41fonAiIgAiIgAiIgAiKQJnBKkY/F3oNqbyMnoIkK0980elYEREAEREAEREAEzEwTDY78XlmnvyQCkhB9wYqACIiACIiACIjANgKSjyXde2q3IjAlIAnZ9qWjJ0RABERABERABMZLQPKhe2QRWAUBMzsw3u8ZnbkIiIAIiIAIiIAIbBLYv4p7Lx1DBESgKAozO7T50dOKCIiACIiACIiACIyPwCHdFIqACKyYgCRkfN+0OmMREAEREAEREIEpAcnHiu87dTgR2CQgCdHXsAiIgAiIgAiIwMgISD427wS1IgJrIiAJGdnXrk5XBERABERABMZLQPKxpvtNHVYEthGQhIz3m1hnLgIiIAIiIAIjISD52HYHqCdEYM0EJCEj+frVaYqACIiACIjA+AhIPtZ8n6nDi0CWgCRkfN/IOmMREAEREAERGDgByUf2zk9/EIGOEJCEDPxrWKcnAiIgAiIgAuMhIPnoyP2luiECtQQkIeP5ZtaZioAIiIAIiMBACUg+au/4tIEIdIyAJGSgX8c6LREQAREQAREYPgHJR8fuK9UdEWhMQBIy/G9onaEIiIAIiIAIDIyA5KPxnZ42FIGOEpCEDOxrWacjAiIgAiIgAsMlIPno6P2kuiUCrQlIQob7Ta0zEwEREAEREIGBEJB8tL7D0wtEoOMEJCED+XrWaYiACIiACIjA8AhIPjp+H6nuicDcBMzsgJldN7zvLZ2RCIiACIiACIhADwngnuTA3Dc2eqEIiEA/CJjZfklID7+i1WUREAEREAERGBYByMf+ftw9qZciIAI7JiAJGdY3uM5GBERABERABHpGQPKx47s57UAEekhAEtKzr2p1VwREQAREQASGQeCUIh89vHFUl0VgUQTMbK+ZnRzG95nOQgREQAREQAREoOMEcM+xd1H3MdqPCIhATwlIQjr+Va3uiYAIiIAIiMAwCEg+enqvqG6LwFIIlBJyfBjfbzoLERABERABERCBjhHAPYYiH0u5i9NORaDnBMzsWMe+sNQdERABERABERCBfhM41vPbI3VfBERg2QTM7Gi/v+fUexEQAREQAREQgY4QOLrs+xbtXwREYCAENGt6R7621Q0REAEREAER6C8BzW4+kPtCnYYIrIxAKSGaNb2/X/zquQiIgAiIgAisgwDuHSQfK7tj04FEYGAENFfIOr63dUwREAEREAER6C0BTTA4sHtBnY4IrIVAKSGaK6S3vwXquAiIgAiIgAishADuFfav5WZFBxUBERgeAc0VspIvbh1EBERABERABPpKQHN8DO/2T2ckAt0goGF6+/q7oH6LgAiIgAiIwNIIaJjdbtymqRciMFwCZnZkaV9h2rEIiIAI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89TaKAlIOMJ3gh6KgAiIgAiIgAiIwEoJOCFRytYo78cHf9JMqUIUUBGOlX676GAiIAIiIAIiIAIi0IBAWUNysCxqPzH421Od4NAI4JrF0Li4hlXD0eAzr01EQAREQAREQAREoHMEylG28D/IiJJopK2h3bL393xwLeKaxLWpUao6982hDomACIiACIiACIjAAglISvp7197TnlM2jkg2FvhB1q5EQAREQAREQAREoM8EnJQgBUbpWz290+9At5lGpchGn78Q1HcREAEREAEREAERWAeBsqYEEyXif66RLiMx6cAdfke6gGsB18Q0qqGajXV8QnVMERABERABERABERgJgSAmjJhonpKOmMECu4H3lBENicZIPt86TREQAREQAREQARHoFYEylYtRE8qJit8XaAUL3hXemygZKgrv1adOnRUBERABERABERABEUgSMLO9paBgmFX8jzoW3PxiUQRlwWZRMiVf8gZ7COLe5JukJ0VABERABERABERABERgTAScpOAmGYXMvHHmjTTasf/zLMhnWvRdyoXm0BjTh0bnKgIiIAIiIAIiIAIisDoC5WzwkBUuXlpwc840MH/TjnXMsr3qfzhm7Aceo48UCbReJnBeEorVXVI6kgiIgAgsjcD/D1eowfspZfhWAAAAAElFTkSuQmCC"
                })
            ]
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/SNSAdaptor/index.tsx









const sns = {
    ...base/* base */.u,
    init (signal) {},
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = (0,uniq/* default */.Z)(links).find(checkUrl);
        const asset = getAssetInfoFromURL(link);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            chainId: asset?.chain_id,
            projectId: asset.project_id
        }) : null;
    },
    DecryptedInspector: function Component(props) {
        const collectibleUrl = getRelevantUrl((0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message).unwrapOr(''));
        const asset = getAssetInfoFromURL(collectibleUrl);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            chainId: asset.chain_id,
            projectId: asset.project_id
        }) : null;
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base.ID */.u.ID,
            category: 'dapp',
            marketListSortingPriority: 15,
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_artblocks_description"
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_artblocks_name"
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArtBlocksIcon, {})
        }, 
    ]
};
function Renderer(props) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {
        chainId: props.chainId,
        projectId: props.projectId
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);