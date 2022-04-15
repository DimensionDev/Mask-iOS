"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1399],{

/***/ 44309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ 69958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ usePostClaimedAuthor),
/* harmony export */   "V": () => (/* binding */ usePostLink)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3747);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98541);


function usePostLink() {
    const id = _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.snsID */ .H9.snsID();
    const identifier = _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.identifier */ .H9.identifier();
    if (!id || !identifier) return '';
    return _social_network__WEBPACK_IMPORTED_MODULE_0__/* .activatedSocialNetworkUI.utils.getPostURL */ .LM.utils.getPostURL?.(identifier) ?? '';
}
function usePostClaimedAuthor() {
    const payload = _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.containingMaskPayload */ .H9.containingMaskPayload().unwrapOr(undefined);
    if (!payload) return undefined;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


/***/ }),

/***/ 35214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ./src/plugins/ArtBlocks/constants.ts
var constants = __webpack_require__(12);
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
var base = __webpack_require__(37857);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(81148);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(48672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(30103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(6823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(35555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MobileStepper/MobileStepper.js + 1 modules
var MobileStepper = __webpack_require__(57851);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/OpenInNew.js
var OpenInNew = __webpack_require__(50080);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(43794);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/KeyboardArrowRight.js
var KeyboardArrowRight = __webpack_require__(96217);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/utils/enum.ts
var utils_enum = __webpack_require__(36803);
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
const pipes_resolveSubgraphLinkOnArtBlocks = (0,utils_enum/* createLookupTableResolver */.F)({
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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
                                children: (0,chainDetailed/* getChainName */.qz)(chainId)
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
                                href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, project.contract.id),
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/hooks/useProject.ts



function useFetchProject(projectId) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!projectId) return null;
        return fetchProject(chainId, projectId);
    }, [
        chainId,
        projectId
    ]);
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(82651);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(41197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(63258);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(52599);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenWatched.tsx
var useFungibleTokenWatched = __webpack_require__(45603);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants_constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(44632);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ../web3-contracts/abis/ArtBlocksMinterContract.json
const ArtBlocksMinterContract_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_genArt721Address","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"artblocksContract","outputs":[{"internalType":"contract GenArt721CoreContract","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address","name":"_bonusContractAddress","type":"address"}],"name":"artistSetBonusContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"artistToggleBonus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"checkYourAllowanceOfProjectERC20","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractFilterProject","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"getYourBalanceOfProjectERC20","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToBonus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToBonusContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMaxHasBeenInvoked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMaxInvocations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMintCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectMintLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchase","outputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"setProjectMaxInvocations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint8","name":"_limit","type":"uint8"}],"name":"setProjectMintLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleContractFilter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/hooks/useArtBlocksContract.ts


function useArtBlocksContract() {
    const { GEN_ART_721_MINTER  } = (0,constants_constants/* useArtBlocksConstants */.Qq)();
    const genArt721MinterContract = (0,useContract/* useContract */.cq)(GEN_ART_721_MINTER, ArtBlocksMinterContract_namespaceObject);
    return genArt721MinterContract;
}

;// CONCATENATED MODULE: ./src/plugins/ArtBlocks/hooks/usePurchaseCallback.ts




function usePurchaseCallback(projectId, amount, tokenType) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const genArt721MinterContract = useArtBlocksContract();
    const [purchaseState, setPurchaseState] = (0,useTransactionState/* useTransactionState */.p)();
    const purchaseCallback = (0,react.useCallback)(async ()=>{
        if (!genArt721MinterContract) {
            setPurchaseState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setPurchaseState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const value = new (bignumber_default())(tokenType === types/* EthereumTokenType.Native */.Dr.Native ? amount : 0).toFixed();
        const config = {
            from: account,
            value,
            gas: await genArt721MinterContract.methods.purchase(projectId).estimateGas({
                from: account,
                value: value
            }).catch((error)=>{
                setPurchaseState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            genArt721MinterContract.methods.purchase(projectId).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setPurchaseState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setPurchaseState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setPurchaseState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        amount,
        chainId,
        genArt721MinterContract,
        tokenType
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setPurchaseState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        purchaseState,
        purchaseCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(37732);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(69958);
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
    const { project , open , onClose  } = props;
    const { token , balance  } = (0,useFungibleTokenWatched/* useFungibleTokenWatched */.g)({
        type: project.currencySymbol === 'ETH' || !project.currencySymbol ? 0 : 1,
        address: project.currencyAddress ? project.currencyAddress : ''
    });
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const [purchaseState, onCheckout, resetCallback] = usePurchaseCallback(project.projectId, project.pricePerTokenInWei, token.value?.type);
    const { GEN_ART_721_MINTER: spender  } = (0,constants_constants/* useArtBlocksConstants */.Qq)();
    const price = (0,react.useMemo)(()=>(0,base_src/* leftShift */.w5)(project.pricePerTokenInWei, token.value?.decimals)
    , [
        project.pricePerTokenInWei,
        token.value?.decimals
    ]);
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const shareText = [
        t((0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_artblocks_share' : 'plugin_artblocks_share_no_official_account', {
            name: project.name,
            price: price,
            symbol: token.value?.symbol
        }),
        '#mask_io #artblocks_io #nft',
        postLink, 
    ].join('\n');
    const { setDialog: setTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            const allowedTypes = [
                types/* TransactionStateType.HASH */.n$.HASH,
                types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED
            ];
            if (!allowedTypes.includes(purchaseState.type)) return;
            onClose();
        }
        resetCallback();
    }, [
        purchaseState,
        onClose
    ]));
    const isTransaction = purchaseState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN || purchaseState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED || purchaseState.type === types/* TransactionStateType.FAILED */.n$.FAILED;
    (0,react.useEffect)(()=>{
        if (purchaseState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            shareText,
            state: purchaseState,
            summary: `Minting a new collectible from '${project.name}' collection.`
        });
    }, [
        purchaseState
    ]);
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            children: [
                                token.value?.type === types/* EthereumTokenType.Native */.Dr.Native ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    className: classes.button,
                                    disabled: !!validationMessage,
                                    color: "primary",
                                    variant: "contained",
                                    onClick: onCheckout,
                                    fullWidth: true,
                                    children: validationMessage || isTransaction ? t('plugin_artblocks_purchase') : t('plugin_artblocks_purchasing')
                                }) : null,
                                token.value?.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                                    amount: project.pricePerTokenInWei,
                                    spender: spender,
                                    token: token.value,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        className: classes.button,
                                        disabled: !!validationMessage,
                                        color: "primary",
                                        variant: "contained",
                                        onClick: onCheckout,
                                        fullWidth: true,
                                        children: validationMessage || isTransaction ? t('plugin_artblocks_purchase') : t('plugin_artblocks_purchasing')
                                    })
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
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(-0.5),
            marginTop: theme.spacing(1)
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
function ActionBar(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ActionBar_useStyles();
    const { project  } = props;
    const { open: openMintDialog , onClose: onCloseMintDialog , onOpen: onOpenMintDialog  } = (0,utils/* useControlledDialog */.D2)();
    const status = !project.active ? t('plugin_artblocks_not_active') : project.complete ? t('plugin_artblocks_completed') : project.paused ? t('plugin_artblocks_paused') : t('plugin_artblocks_purchase');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        display: "flex",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenMintDialog,
                disabled: project.complete || project.paused || !project.active,
                children: status
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PurchaseDialog, {
                project: project,
                open: openMintDialog,
                onClose: onCloseMintDialog
            })
        ]
    });
}

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
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const { value , loading , error  } = useFetchProject(props.projectId);
    const project = value?.projects[0];
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        align: "center",
        children: t('loading')
    });
    if (error || !value) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {
                project: project
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
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
    }
};
function Renderer(props) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: props.chainId,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {
            projectId: props.projectId
        })
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


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


/***/ }),

/***/ 44632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ EthereumERC20TokenApprovedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/once.js + 1 modules
var once = __webpack_require__(56898);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(91690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(15226);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenBalance.ts
var useERC20TokenBalance = __webpack_require__(58498);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenApproveCallback.ts









const MaxUint256 = (0,src/* toFixed */.FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc20Contract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(address);
    const [transactionState, setTransactionState] = (0,useTransactionState/* useTransactionState */.p)();
    // read the approved information from the chain
    const { value: balance = '0' , loading: loadingBalance , error: errorBalance , retry: revalidateBalance ,  } = (0,useERC20TokenBalance/* useERC20TokenBalance */.y)(address);
    const { value: allowance = '0' , loading: loadingAllowance , error: errorAllowance , retry: revalidateAllowance ,  } = (0,useERC20TokenAllowance/* useERC20TokenAllowance */.n)(address, spender);
    // the computed approve state
    const approveStateType = (0,react.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        if (transactionState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING) return ApproveStateType.PENDING;
        return (0,src/* isLessThan */.FI)(allowance, amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance,
        transactionState.type, 
    ]);
    const approveCallback = (0,react.useCallback)(async (useExact = false)=>{
        setTransactionState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender || !erc20Contract) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED) {
            setTransactionState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Failed to approve token.')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).estimateGas({
                from: account
            }).catch((error)=>{
                useExact = !useExact;
                return erc20Contract.methods.approve(spender, amount).estimateGas({
                    from: account
                });
            }).catch((error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const revalidate = (0,once/* default */.Z)(()=>{
                revalidateBalance();
                revalidateAllowance();
            });
            erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setTransactionState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                revalidate();
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransactionState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                revalidate();
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                revalidate();
                reject(error);
            });
        });
    }, [
        account,
        amount,
        balance,
        spender,
        loadingAllowance,
        loadingBalance,
        erc20Contract,
        approveStateType
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
        setTransactionState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, [
        revalidateBalance,
        revalidateAllowance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        transactionState,
        approveCallback,
        resetCallback, 
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            flexDirection: 'column',
            position: 'relative',
            marginTop: theme.spacing(1.5),
            lineHeight: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonLabel: {
            display: 'block',
            fontWeight: 'inherit',
            marginTop: theme.spacing(-0.5),
            marginBottom: theme.spacing(1)
        },
        buttonAmount: {
            fontSize: 10,
            fontWeight: 300,
            bottom: theme.spacing(1),
            position: 'absolute'
        },
        children: {
            marginTop: 8,
            width: '100%'
        }
    })
);
function EthereumERC20TokenApprovedBoundary(props) {
    const { amount , spender , token , children =null , render , fallback , infiniteUnlockContent , onlyInfiniteUnlock =false , withChildren =false ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const [{ type: approveStateType , allowance  }, transactionState, approveCallback, resetApproveCallback] = useERC20TokenApproveCallback(token?.address ?? '', amount, spender);
    const onApprove = (0,react.useCallback)(async (useExact = false)=>{
        if (approveStateType !== ApproveStateType.NOT_APPROVED) return;
        await approveCallback(useExact);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: render ? render(false) : children
    });
    if (approveStateType === ApproveStateType.UNKNOWN) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                disabled: true,
                ...props.ActionButtonProps,
                children: fallback ?? 'Enter an amount'
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === ApproveStateType.FAILED) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                onClick: resetApproveCallback,
                ...props.ActionButtonProps,
                children: t('wallet_load_retry', {
                    symbol: (token.symbol ?? token.name) ?? 'Token'
                })
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === ApproveStateType.NOT_APPROVED) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                spacing: 2,
                children: [
                    !onlyInfiniteUnlock ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(true)
                            ,
                            ...props.ActionButtonProps,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: classes.buttonLabel,
                                    children: t('plugin_wallet_token_unlock')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.buttonAmount,
                                    children: [
                                        (0,formatter/* formatBalance */.az)(amount, token.decimals, 2),
                                        " ",
                                        token?.symbol ?? 'Token'
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: onlyInfiniteUnlock ? 12 : 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(false)
                            ,
                            ...props.ActionButtonProps,
                            children: infiniteUnlockContent ?? t('plugin_wallet_token_infinite_unlock')
                        })
                    })
                ]
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === ApproveStateType.PENDING || approveStateType === ApproveStateType.UPDATING) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* default */.ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            disabled: true,
            ...props.ActionButtonProps,
            children: [
                approveStateType === ApproveStateType.PENDING ? t('plugin_ito_unlocking_symbol', {
                    symbol: token.symbol
                }) : `Updating ${token.symbol}`,
                "\u2026"
            ]
        })
    });
    if (approveStateType === ApproveStateType.APPROVED) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: render ? render(false) : typeof children === 'function' ? children(allowance) : children
    });
    (0,esm/* unreachable */.t1)(approveStateType);
}


/***/ }),

/***/ 52599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(43369);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,useAccount/* useAccount */.m)();
    const [isConfirmed, setConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setConfirmed(confirmed ?? false)
        );
    };
    const { openDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    // #region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    // #endregion
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openSelectProviderDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_connect_a_wallet')
        })
    });
    if (!isRiskWarningConfirmed && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openRiskWarningDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_confirm_risk_warning')
        })
    });
    if ((0,base_src/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.gasFeeButton),
            disabled: !nativeTokenBalance.error,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: nativeTokenBalance.retry,
            ...props.ActionButtonProps,
            children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
        })
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.invalidButton),
            disabled: true,
            fullWidth: true,
            variant: "contained",
            size: "large",
            ...props.ActionButtonProps,
            children: t('plugin_wallet_invalid_network')
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    });
}


/***/ }),

/***/ 15226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89260);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91690);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10372);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31174);




function useERC20TokenAllowance(address, spender) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .m)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xx)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !spender || !erc20Contract) return '0';
        return erc20Contract.methods.allowance(account, spender).call({
            from: account
        });
    }, 30 * 1000, [
        account,
        chainId,
        spender,
        erc20Contract
    ]);
}


/***/ }),

/***/ 58498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89260);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10372);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91690);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31174);





/**
 * Fetch token balance from chain
 * @param address
 * @param targetChainId
 */ function useERC20TokenBalance(address, targetChainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const defaultChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = targetChainId ?? defaultChainId;
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account,
            chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainId)
        });
    }, 30 * 1000, [
        account,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 52813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58498);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43369);




function useFungibleTokenBalance(type, address, chainId) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenBalance */ .h)(chainId);
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

/***/ 12777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFungibleTokenDetailed)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29782);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38443);




function useFungibleTokenDetailed(type, address, token) {
    const r1 = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const r2 = (0,_useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenDetailed */ .k)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : '', token);
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}


/***/ }),

/***/ 45603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useFungibleTokenWatched)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useFungibleTokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52813);
/* harmony import */ var _useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12777);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38443);





function useFungibleTokenWatched(initialToken) {
    const nativeToken = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const [token = nativeToken.value, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialToken);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const balance = (0,_useFungibleTokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useFungibleTokenBalance */ .V)(token?.type ?? _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native, token?.address ?? '');
    const detailed = (0,_useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleTokenDetailed */ .j)(token?.type ?? _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native, token?.address ?? '');
    return {
        amount,
        token: detailed,
        balance,
        setAmount,
        setToken
    };
}


/***/ }),

/***/ 43369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64452);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10372);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);



/**
 * Fetch native token balance from chain
 */ function useNativeTokenBalance(chainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { value: balance = '0'  } = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)(chainId);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!account) return;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 29812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTransactionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33703);



function txStateReducer(state, nextState) {
    const allowed = nextState.type === _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN || (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isNextStateAvailable */ .NU)(state.type, nextState.type);
    return allowed ? nextState : state;
}
function useTransactionState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(txStateReducer, {
        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
    });
}


/***/ }),

/***/ 33703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable),
/* harmony export */   "ir": () => (/* binding */ isFinalState)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
}


/***/ })

}]);