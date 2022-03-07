"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2302],{

/***/ 22302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _components_RegisterFrame_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81557);
/* harmony import */ var _Settings_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99323);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8571);




const IFrame = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('iframe')(({ theme  })=>`
    border: none;
    width: 100%;
    min-height: 520px;
`
);
const PRIVACY_POLICY_PAGE_MAPPING = {
    'zh-TW': new URL(/* asset import */ __webpack_require__(25917), __webpack_require__.b).toString(),
    en: new URL(/* asset import */ __webpack_require__(80005), __webpack_require__.b).toString()
};
const PrivacyPolicy = ()=>{
    // todo: fix language is auto
    const lang = (0,_Settings_api__WEBPACK_IMPORTED_MODULE_2__/* .useLanguage */ .ZK)();
    var _lang;
    const privacyPolicyURL = (_lang = PRIVACY_POLICY_PAGE_MAPPING[lang]) !== null && _lang !== void 0 ? _lang : PRIVACY_POLICY_PAGE_MAPPING.en;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RegisterFrame_ColumnLayout__WEBPACK_IMPORTED_MODULE_1__/* .ColumnLayout */ .X, {
        haveFooter: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IFrame, {
            src: privacyPolicyURL
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyPolicy);


/***/ }),

/***/ 99323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eu": () => (/* binding */ fetchBackupValue),
/* harmony export */   "VP": () => (/* binding */ verifyCode),
/* harmony export */   "Wg": () => (/* binding */ useTrendingDataSource),
/* harmony export */   "Z3": () => (/* binding */ sendCode),
/* harmony export */   "ZK": () => (/* binding */ useLanguage),
/* harmony export */   "iQ": () => (/* binding */ fetchUploadLink),
/* harmony export */   "iT": () => (/* binding */ fetchDownloadLink),
/* harmony export */   "zy": () => (/* binding */ uploadBackupValue)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39850);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85971);


const [useLanguage] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getLanguage */ .K9.Settings.getLanguage, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.languageSettings.on */ .Vm.events.languageSettings.on);
const [useTrendingDataSource] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getTrendingDataSource */ .K9.Settings.getTrendingDataSource, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentDataProviderSettings.on */ .Vm.events.currentDataProviderSettings.on);
const BASE_RUL = 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api';
const withErrorMiddleware = (handler)=>async (res)=>{
        const result = await handler(res);
        if (!res.ok) {
            // eslint-disable-next-line no-throw-literal
            throw {
                status: res.status,
                ...result
            };
        }
        return result;
    }
;
const fetchBase = (input, init, handler = (res)=>res.json()
)=>fetch(input, init).then(withErrorMiddleware(handler))
;
const fetchBaseInstance = (baseURL)=>(input, init)=>fetchBase(`${baseURL}/${input}`, init)
;
const fetchBackupInstance = fetchBaseInstance(BASE_RUL);
const sendCode = ({ account , type , scenario , locale  })=>{
    return fetchBackupInstance('v1/backup/send_code', {
        method: 'POST',
        body: JSON.stringify({
            account: account.replace(' ', ''),
            account_type: type,
            scenario,
            locale
        })
    });
};
const fetchUploadLink = ({ code , account , abstract , type  })=>{
    return fetchBackupInstance('v1/backup/upload', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account: account.replace(' ', ''),
            abstract
        })
    }).then((res)=>res.upload_url
    );
};
const fetchDownloadLink = ({ account , code , type  })=>{
    return fetchBackupInstance('v1/backup/download', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account: account.replace(' ', '')
        })
    }).then(({ abstract , download_url , size , uploaded_at  })=>{
        return {
            downloadURL: download_url,
            size: size,
            uploadedAt: uploaded_at,
            abstract: abstract
        };
    });
};
const verifyCode = ({ account , type , code  })=>{
    return fetchBackupInstance('v1/backup/validate_code', {
        method: 'POST',
        body: JSON.stringify({
            account: account.replace(' ', ''),
            account_type: type,
            code
        })
    });
};
const fetchBackupValue = (downloadLink)=>{
    return fetchBase(downloadLink, {
        method: 'GET'
    }, (res)=>res.arrayBuffer()
    );
};
const uploadBackupValue = (uploadLink, content)=>{
    return fetch(uploadLink, {
        method: 'PUT',
        // mode: 'no-cors',
        headers: new Headers({
            'content-type': 'application/octet-stream'
        }),
        body: content
    });
};


/***/ }),

/***/ 80005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5ebf8c611d5d2f1b9dcb.html";

/***/ }),

/***/ 25917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d66bbce6c2416418a2f2.html";

/***/ })

}]);