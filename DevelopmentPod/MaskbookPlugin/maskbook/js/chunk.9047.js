"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9047],{

/***/ 49047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugins/DAO/src/base.ts + 7 modules
var base = __webpack_require__(53439);
// EXTERNAL MODULE: ../plugins/DAO/src/constants.ts
var constants = __webpack_require__(71849);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/iframe-resizer-react@1.1.0/node_modules/iframe-resizer-react/dist/index.es.js
var index_es = __webpack_require__(33164);
// EXTERNAL MODULE: ../icons/utils/MaskIconPaletteContext.ts
var MaskIconPaletteContext = __webpack_require__(79573);
;// CONCATENATED MODULE: ../plugins/DAO/src/components/DAOPage.tsx




function DAOPage({ identifier  }) {
    const mode = (0,react.useContext)(MaskIconPaletteContext/* MaskIconPaletteContext */.v);
    const [size, setSize] = (0,react.useState)({
        height: 500,
        width: 1
    });
    const onResized = (data)=>setSize(data)
    ;
    if (!identifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* default */.Z, {
        log: true,
        checkOrigin: false,
        heightCalculationMethod: "lowestElement",
        enablePublicMethods: true,
        src: `https://dimensiondev.github.io/DAO-Interface/?mode=${mode}&userId=${identifier.userId.toLowerCase()}`,
        frameBorder: 0,
        onResized: onResized,
        style: {
            width: size.width,
            minHeight: 1,
            height: size.height,
            minWidth: '100%'
        }
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ../configuration/src/constants.ts
const DEFAULT_HOST = 'https://configuration.r2d2.to';
const DEFAULT_PREFIX = 'com.maskbook';

;// CONCATENATED MODULE: ../configuration/src/index.ts


class Configuration {
    async revalidate() {
        if (this.ac) this.ac.abort();
        this.ac = new AbortController();
        const response = await fetch(this.url, {
            signal: this.ac.signal
        });
        this.data = await response.json();
    }
    get() {
        this.revalidate();
        return this.data;
    }
    constructor(url, data){
        this.url = url;
        this.data = data;
        this.revalidate();
    }
}
const cache = new Map();
function create(name, prefix, initialData) {
    const url = dist_default()(DEFAULT_HOST, prefix ? ':prefix.:name.json' : ':name.json', {
        name,
        prefix: prefix ?? DEFAULT_PREFIX
    });
    if (!cache.has(url)) cache.set(url, new Configuration(url, initialData));
    return cache.get(url);
}

;// CONCATENATED MODULE: ../plugins/DAO/src/SNSAdaptor/index.tsx





// cspell:disable
const DEFAULT_SUPPORTED_TWITTER_IDS = [
    'ConstitutionDAO',
    'juiceboxETH',
    'AssangeDAO',
    'OfficialMoonDAO',
    'TheSpiceDAO',
    'sharkdao',
    'CrayonFinance',
    'merge_dao',
    'DAOTaiFung',
    'Tile_DAO',
    'mountaindao',
    'OfficialMoonDAO', 
];
// cspell:enable
const sns = {
    ...base/* base */.u,
    init (signal) {},
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_dao`,
            label: 'DAO',
            priority: 1,
            UI: {
                TabContent: ({ identity  })=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DAOPage, {
                        identifier: identity?.identifier
                    });
                }
            },
            Utils: {
                shouldDisplay: (identity, _addressNames)=>{
                    const daoTabTwitterIdList = create('twitter-supported-id-list', '', DEFAULT_SUPPORTED_TWITTER_IDS).get();
                    if (!identity?.identifier) return false;
                    return (daoTabTwitterIdList ?? []).some((x)=>x.toLowerCase() === identity?.identifier?.userId.toLowerCase()
                    );
                }
            }
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);