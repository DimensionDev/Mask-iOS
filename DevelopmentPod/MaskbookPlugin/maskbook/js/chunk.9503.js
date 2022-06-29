"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9503],{

/***/ 39503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10503);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67938);
/* harmony import */ var _SNSAdaptor_SelectNftContractDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69038);
/* harmony import */ var _SNSAdaptor_SelectProviderDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40881);
/* harmony import */ var _SNSAdaptor_WalletStatusDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25930);
/* harmony import */ var _SNSAdaptor_TransactionDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46962);
/* harmony import */ var _SNSAdaptor_ConnectWalletDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69242);
/* harmony import */ var _SNSAdaptor_RiskWarningDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1321);
/* harmony import */ var _SNSAdaptor_GasSettingDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76018);
/* harmony import */ var _SNSAdaptor_TransactionSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95414);
/* harmony import */ var _SNSAdaptor_WalletConnectQRCodeDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35209);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44451);













const dashboard = {
    ..._masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .base */ .ue,
    init (signal) {},
    GlobalInjection: function Component() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_SelectProviderDialog__WEBPACK_IMPORTED_MODULE_4__/* .SelectProviderDialog */ .V, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_TransactionDialog__WEBPACK_IMPORTED_MODULE_6__/* .TransactionDialog */ .w, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_SelectNftContractDialog__WEBPACK_IMPORTED_MODULE_3__/* .SelectNftContractDialog */ .B, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_WalletStatusDialog__WEBPACK_IMPORTED_MODULE_5__/* .WalletStatusDialog */ .a, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_ConnectWalletDialog__WEBPACK_IMPORTED_MODULE_7__/* .ConnectWalletDialog */ .b, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_RiskWarningDialog__WEBPACK_IMPORTED_MODULE_8__/* .WalletRiskWarningDialog */ .x, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_GasSettingDialog__WEBPACK_IMPORTED_MODULE_9__/* .GasSettingDialog */ .w, {}),
                (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .getSiteType */ .sv)() !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .ExtensionSite.Popup */ .v_.Popup ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_TransactionSnackbar__WEBPACK_IMPORTED_MODULE_10__/* .TransactionSnackbar */ .e, {
                    pluginID: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SNSAdaptor_WalletConnectQRCodeDialog__WEBPACK_IMPORTED_MODULE_11__/* .WalletConnectQRCodeDialog */ .w, {})
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboard);


/***/ })

}]);