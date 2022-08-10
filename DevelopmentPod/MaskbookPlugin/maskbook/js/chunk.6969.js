(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6969],{

/***/ 55254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var json_schemas_1 = __webpack_require__(31373);
var utils_1 = __webpack_require__(16997);
var _ = __webpack_require__(39378);
var validUrl = __webpack_require__(12948);
var HEX_REGEX = /^0x[0-9A-F]*$/i;
exports.assert = {
    isBigNumber: function (variableName, value) {
        var isBigNumber = _.isObject(value) && value.isBigNumber;
        this.assert(isBigNumber, this.typeAssertionMessage(variableName, 'BigNumber', value));
    },
    isValidBaseUnitAmount: function (variableName, value) {
        exports.assert.isBigNumber(variableName, value);
        var hasDecimals = value.decimalPlaces() !== 0;
        this.assert(!hasDecimals, variableName + " should be in baseUnits (no decimals), found value: " + value.toNumber());
    },
    isString: function (variableName, value) {
        this.assert(_.isString(value), this.typeAssertionMessage(variableName, 'string', value));
    },
    isFunction: function (variableName, value) {
        this.assert(_.isFunction(value), this.typeAssertionMessage(variableName, 'function', value));
    },
    isHexString: function (variableName, value) {
        this.assert(_.isString(value) && HEX_REGEX.test(value), this.typeAssertionMessage(variableName, 'HexString', value));
    },
    isETHAddressHex: function (variableName, value) {
        this.assert(utils_1.addressUtils.isAddress(value), this.typeAssertionMessage(variableName, 'ETHAddressHex', value));
        this.assert(utils_1.addressUtils.isAddress(value) && value.toLowerCase() === value, "Checksummed addresses are not supported. Convert " + variableName + " to lower case before passing");
    },
    doesBelongToStringEnum: function (variableName, value, stringEnum /* There is no base type for every string enum */) {
        var doesBelongToStringEnum = !_.isUndefined(stringEnum[value]);
        var enumValues = _.keys(stringEnum);
        var enumValuesAsStrings = _.map(enumValues, function (enumValue) { return "'" + enumValue + "'"; });
        var enumValuesAsString = enumValuesAsStrings.join(', ');
        exports.assert.assert(doesBelongToStringEnum, "Expected " + variableName + " to be one of: " + enumValuesAsString + ", encountered: " + value);
    },
    hasAtMostOneUniqueValue: function (value, errMsg) {
        this.assert(_.uniq(value).length <= 1, errMsg);
    },
    isNumber: function (variableName, value) {
        this.assert(_.isFinite(value), this.typeAssertionMessage(variableName, 'number', value));
    },
    isBoolean: function (variableName, value) {
        this.assert(_.isBoolean(value), this.typeAssertionMessage(variableName, 'boolean', value));
    },
    isWeb3Provider: function (variableName, value) {
        var isWeb3Provider = _.isFunction(value.send) || _.isFunction(value.sendAsync);
        this.assert(isWeb3Provider, this.typeAssertionMessage(variableName, 'Web3.Provider', value));
    },
    doesConformToSchema: function (variableName, value, schema) {
        var schemaValidator = new json_schemas_1.SchemaValidator();
        var validationResult = schemaValidator.validate(value, schema);
        var hasValidationErrors = validationResult.errors.length > 0;
        var msg = "Expected " + variableName + " to conform to schema " + schema.id + "\nEncountered: " + JSON.stringify(value, null, '\t') + "\nValidation errors: " + validationResult.errors.join(', ');
        this.assert(!hasValidationErrors, msg);
    },
    isHttpUrl: function (variableName, value) {
        var isValidUrl = !_.isUndefined(validUrl.isWebUri(value));
        this.assert(isValidUrl, this.typeAssertionMessage(variableName, 'http url', value));
    },
    isUri: function (variableName, value) {
        var isValidUri = !_.isUndefined(validUrl.isUri(value));
        this.assert(isValidUri, this.typeAssertionMessage(variableName, 'uri', value));
    },
    assert: function (condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    },
    typeAssertionMessage: function (variableName, type, value) {
        return "Expected " + variableName + " to be of type " + type + ", encountered: " + value;
    },
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 82463:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addressSchema = {
    id: '/Address',
    type: 'string',
    pattern: '^0x[0-9a-f]{40}$',
};
exports.numberSchema = {
    id: '/Number',
    type: 'string',
    pattern: '^\\d+(\\.\\d+)?$',
};
//# sourceMappingURL=basic_type_schemas.js.map

/***/ }),

/***/ 49107:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.blockParamSchema = {
    id: '/BlockParam',
    oneOf: [
        {
            type: 'number',
        },
        {
            enum: ['latest', 'earliest', 'pending'],
        },
    ],
};
exports.blockRangeSchema = {
    id: '/BlockRange',
    properties: {
        fromBlock: { $ref: '/BlockParam' },
        toBlock: { $ref: '/BlockParam' },
    },
    type: 'object',
};
//# sourceMappingURL=block_range_schema.js.map

/***/ }),

/***/ 21239:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ecSignatureParameterSchema = {
    id: '/ECSignatureParameter',
    type: 'string',
    pattern: '^0[xX][0-9A-Fa-f]{64}$',
};
exports.ecSignatureSchema = {
    id: '/ECSignature',
    properties: {
        v: {
            type: 'number',
            minimum: 27,
            maximum: 28,
        },
        r: { $ref: '/ECSignatureParameter' },
        s: { $ref: '/ECSignatureParameter' },
    },
    required: ['v', 'r', 's'],
    type: 'object',
};
//# sourceMappingURL=ec_signature_schema.js.map

/***/ }),

/***/ 87143:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.indexFilterValuesSchema = {
    id: '/IndexFilterValues',
    additionalProperties: {
        oneOf: [{ $ref: '/Number' }, { $ref: '/Address' }, { $ref: '/OrderHashSchema' }],
    },
    type: 'object',
};
//# sourceMappingURL=index_filter_values_schema.js.map

/***/ }),

/***/ 96869:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.orderCancellationRequestsSchema = {
    id: '/OrderCancellationRequests',
    type: 'array',
    items: {
        properties: {
            order: { $ref: '/Order' },
            takerTokenCancelAmount: { $ref: '/Number' },
        },
        required: ['order', 'takerTokenCancelAmount'],
        type: 'object',
    },
};
//# sourceMappingURL=order_cancel_schema.js.map

/***/ }),

/***/ 72180:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.orderFillOrKillRequestsSchema = {
    id: '/OrderFillOrKillRequests',
    type: 'array',
    items: {
        properties: {
            signedOrder: { $ref: '/SignedOrder' },
            fillTakerAmount: { $ref: '/Number' },
        },
        required: ['signedOrder', 'fillTakerAmount'],
        type: 'object',
    },
};
//# sourceMappingURL=order_fill_or_kill_requests_schema.js.map

/***/ }),

/***/ 91077:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.orderFillRequestsSchema = {
    id: '/OrderFillRequests',
    type: 'array',
    items: {
        properties: {
            signedOrder: { $ref: '/SignedOrder' },
            takerTokenFillAmount: { $ref: '/Number' },
        },
        required: ['signedOrder', 'takerTokenFillAmount'],
        type: 'object',
    },
};
//# sourceMappingURL=order_fill_requests_schema.js.map

/***/ }),

/***/ 61169:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.orderHashSchema = {
    id: '/OrderHashSchema',
    type: 'string',
    pattern: '^0x[0-9a-fA-F]{64}$',
};
//# sourceMappingURL=order_hash_schema.js.map

/***/ }),

/***/ 50225:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.orderSchema = {
    id: '/Order',
    properties: {
        maker: { $ref: '/Address' },
        taker: { $ref: '/Address' },
        makerFee: { $ref: '/Number' },
        takerFee: { $ref: '/Number' },
        makerTokenAmount: { $ref: '/Number' },
        takerTokenAmount: { $ref: '/Number' },
        makerTokenAddress: { $ref: '/Address' },
        takerTokenAddress: { $ref: '/Address' },
        salt: { $ref: '/Number' },
        feeRecipient: { $ref: '/Address' },
        expirationUnixTimestampSec: { $ref: '/Number' },
        exchangeContractAddress: { $ref: '/Address' },
    },
    required: [
        'maker',
        'taker',
        'makerFee',
        'takerFee',
        'makerTokenAmount',
        'takerTokenAmount',
        'salt',
        'feeRecipient',
        'expirationUnixTimestampSec',
        'exchangeContractAddress',
    ],
    type: 'object',
};
exports.signedOrderSchema = {
    id: '/SignedOrder',
    allOf: [
        { $ref: '/Order' },
        {
            properties: {
                ecSignature: { $ref: '/ECSignature' },
            },
            required: ['ecSignature'],
        },
    ],
};
//# sourceMappingURL=order_schemas.js.map

/***/ }),

/***/ 32825:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiErrorResponseSchema = {
    id: '/RelayerApiErrorResponse',
    type: 'object',
    properties: {
        code: { type: 'number' },
        reason: { type: 'string' },
        validationErrors: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    field: { type: 'string' },
                    code: { type: 'number' },
                    reason: { type: 'string' },
                },
                required: ['field', 'code', 'reason'],
            },
        },
    },
    required: ['code', 'reason'],
};
//# sourceMappingURL=relayer_api_error_response_schema.js.map

/***/ }),

/***/ 47717:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiFeesPayloadSchema = {
    id: '/RelayerApiFeesPayload',
    type: 'object',
    properties: {
        exchangeContractAddress: { $ref: '/Address' },
        maker: { $ref: '/Address' },
        taker: { $ref: '/Address' },
        makerTokenAddress: { $ref: '/Address' },
        takerTokenAddress: { $ref: '/Address' },
        makerTokenAmount: { $ref: '/Number' },
        takerTokenAmount: { $ref: '/Number' },
        expirationUnixTimestampSec: { $ref: '/Number' },
        salt: { $ref: '/Number' },
    },
    required: [
        'exchangeContractAddress',
        'maker',
        'taker',
        'makerTokenAddress',
        'takerTokenAddress',
        'expirationUnixTimestampSec',
        'salt',
    ],
};
//# sourceMappingURL=relayer_api_fees_payload_schema.js.map

/***/ }),

/***/ 94895:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiFeesResponseSchema = {
    id: '/RelayerApiFeesResponse',
    type: 'object',
    properties: {
        makerFee: { $ref: '/Number' },
        takerFee: { $ref: '/Number' },
        feeRecipient: { $ref: '/Address' },
    },
    required: ['makerFee', 'takerFee', 'feeRecipient'],
};
//# sourceMappingURL=relayer_api_fees_response_schema.js.map

/***/ }),

/***/ 190:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiOrderbookChannelSubscribeSchema = {
    id: '/RelayerApiOrderbookChannelSubscribe',
    type: 'object',
    properties: {
        type: { enum: ['subscribe'] },
        channel: { enum: ['orderbook'] },
        requestId: { type: 'number' },
        payload: { $ref: '/RelayerApiOrderbookChannelSubscribePayload' },
    },
    required: ['type', 'channel', 'requestId', 'payload'],
};
exports.relayerApiOrderbookChannelSubscribePayload = {
    id: '/RelayerApiOrderbookChannelSubscribePayload',
    type: 'object',
    properties: {
        baseTokenAddress: { $ref: '/Address' },
        quoteTokenAddress: { $ref: '/Address' },
        snapshot: { type: 'boolean' },
        limit: { type: 'number' },
    },
    required: ['baseTokenAddress', 'quoteTokenAddress'],
};
//# sourceMappingURL=relayer_api_orberbook_channel_subscribe_schema.js.map

/***/ }),

/***/ 33311:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiOrderbookChannelSnapshotSchema = {
    id: '/RelayerApiOrderbookChannelSnapshot',
    type: 'object',
    properties: {
        type: { enum: ['snapshot'] },
        channel: { enum: ['orderbook'] },
        requestId: { type: 'number' },
        payload: { $ref: '/RelayerApiOrderbookChannelSnapshotPayload' },
    },
    required: ['type', 'channel', 'requestId', 'payload'],
};
exports.relayerApiOrderbookChannelSnapshotPayload = {
    id: '/RelayerApiOrderbookChannelSnapshotPayload',
    type: 'object',
    properties: {
        bids: { $ref: '/signedOrdersSchema' },
        asks: { $ref: '/signedOrdersSchema' },
    },
    required: ['bids', 'asks'],
};
//# sourceMappingURL=relayer_api_orderbook_channel_snapshot_schema.js.map

/***/ }),

/***/ 47603:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiOrderbookChannelUpdateSchema = {
    id: '/RelayerApiOrderbookChannelUpdate',
    type: 'object',
    properties: {
        type: { enum: ['update'] },
        channel: { enum: ['orderbook'] },
        requestId: { type: 'number' },
        payload: { $ref: '/SignedOrder' },
    },
    required: ['type', 'channel', 'requestId', 'payload'],
};
//# sourceMappingURL=relayer_api_orderbook_channel_update_response_schema.js.map

/***/ }),

/***/ 42757:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiOrderBookResponseSchema = {
    id: '/RelayerApiOrderBookResponse',
    type: 'object',
    properties: {
        bids: { $ref: '/signedOrdersSchema' },
        asks: { $ref: '/signedOrdersSchema' },
    },
    required: ['bids', 'asks'],
};
//# sourceMappingURL=relayer_api_orderbook_response_schema.js.map

/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.relayerApiTokenPairsResponseSchema = {
    id: '/RelayerApiTokenPairsResponse',
    type: 'array',
    items: {
        properties: {
            tokenA: { $ref: '/RelayerApiTokenTradeInfo' },
            tokenB: { $ref: '/RelayerApiTokenTradeInfo' },
        },
        required: ['tokenA', 'tokenB'],
        type: 'object',
    },
};
exports.relayerApiTokenTradeInfoSchema = {
    id: '/RelayerApiTokenTradeInfo',
    type: 'object',
    properties: {
        address: { $ref: '/Address' },
        minAmount: { $ref: '/Number' },
        maxAmount: { $ref: '/Number' },
        precision: { type: 'number' },
    },
    required: ['address'],
};
//# sourceMappingURL=relayer_api_token_pairs_response_schema.js.map

/***/ }),

/***/ 20471:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signedOrdersSchema = {
    id: '/signedOrdersSchema',
    type: 'array',
    items: { $ref: '/SignedOrder' },
};
//# sourceMappingURL=signed_orders_schema.js.map

/***/ }),

/***/ 62852:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tokenSchema = {
    id: '/Token',
    properties: {
        name: { type: 'string' },
        symbol: { type: 'string' },
        decimals: { type: 'number' },
        address: { $ref: '/Address' },
    },
    required: ['name', 'symbol', 'decimals', 'address'],
    type: 'object',
};
//# sourceMappingURL=token_schema.js.map

/***/ }),

/***/ 54930:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jsNumber = {
    id: '/JsNumber',
    type: 'number',
    minimum: 0,
};
exports.txDataSchema = {
    id: '/TxData',
    properties: {
        from: { $ref: '/Address' },
        to: { $ref: '/Address' },
        value: {
            oneOf: [{ $ref: '/Number' }, { $ref: '/JsNumber' }],
        },
        gas: {
            oneOf: [{ $ref: '/Number' }, { $ref: '/JsNumber' }],
        },
        gasPrice: {
            oneOf: [{ $ref: '/Number' }, { $ref: '/JsNumber' }],
        },
        data: {
            type: 'string',
            pattern: '^0x[0-9a-f]*$',
        },
        nonce: {
            type: 'number',
            minimum: 0,
        },
    },
    required: ['from'],
    type: 'object',
    additionalProperties: false,
};
//# sourceMappingURL=tx_data_schema.js.map

/***/ }),

/***/ 31373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsonschema_1 = __webpack_require__(97053);
exports.ValidatorResult = jsonschema_1.ValidatorResult;
var schema_validator_1 = __webpack_require__(71671);
exports.SchemaValidator = schema_validator_1.SchemaValidator;
var schemas_1 = __webpack_require__(46229);
exports.schemas = schemas_1.schemas;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71671:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsonschema_1 = __webpack_require__(97053);
var values = __webpack_require__(96314);
var schemas_1 = __webpack_require__(46229);
/**
 * A validator for [JSON-schemas](http://json-schema.org/)
 */
var SchemaValidator = /** @class */ (function () {
    /**
     * Instantiates a SchemaValidator instance
     */
    function SchemaValidator() {
        this._validator = new jsonschema_1.Validator();
        for (var _i = 0, _a = values(schemas_1.schemas); _i < _a.length; _i++) {
            var schema = _a[_i];
            this._validator.addSchema(schema, schema.id);
        }
    }
    /**
     * Add a schema to the validator. All schemas and sub-schemas must be added to
     * the validator before the `validate` and `isValid` methods can be called with
     * instances of that schema.
     * @param schema The schema to add
     */
    SchemaValidator.prototype.addSchema = function (schema) {
        this._validator.addSchema(schema, schema.id);
    };
    // In order to validate a complex JS object using jsonschema, we must replace any complex
    // sub-types (e.g BigNumber) with a simpler string representation. Since BigNumber and other
    // complex types implement the `toString` method, we can stringify the object and
    // then parse it. The resultant object can then be checked using jsonschema.
    /**
     * Validate the JS object conforms to a specific JSON schema
     * @param instance JS object in question
     * @param schema Schema to check against
     * @returns The results of the validation
     */
    SchemaValidator.prototype.validate = function (instance, schema) {
        var jsonSchemaCompatibleObject = JSON.parse(JSON.stringify(instance));
        return this._validator.validate(jsonSchemaCompatibleObject, schema);
    };
    /**
     * Check whether an instance properly adheres to a JSON schema
     * @param instance JS object in question
     * @param schema Schema to check against
     * @returns Whether or not the instance adheres to the schema
     */
    SchemaValidator.prototype.isValid = function (instance, schema) {
        var isValid = this.validate(instance, schema).errors.length === 0;
        return isValid;
    };
    return SchemaValidator;
}());
exports.SchemaValidator = SchemaValidator;
//# sourceMappingURL=schema_validator.js.map

/***/ }),

/***/ 46229:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var basic_type_schemas_1 = __webpack_require__(82463);
var block_range_schema_1 = __webpack_require__(49107);
var ec_signature_schema_1 = __webpack_require__(21239);
var index_filter_values_schema_1 = __webpack_require__(87143);
var order_cancel_schema_1 = __webpack_require__(96869);
var order_fill_or_kill_requests_schema_1 = __webpack_require__(72180);
var order_fill_requests_schema_1 = __webpack_require__(91077);
var order_hash_schema_1 = __webpack_require__(61169);
var order_schemas_1 = __webpack_require__(50225);
var relayer_api_error_response_schema_1 = __webpack_require__(32825);
var relayer_api_fees_payload_schema_1 = __webpack_require__(47717);
var relayer_api_fees_response_schema_1 = __webpack_require__(94895);
var relayer_api_orberbook_channel_subscribe_schema_1 = __webpack_require__(190);
var relayer_api_orderbook_channel_snapshot_schema_1 = __webpack_require__(33311);
var relayer_api_orderbook_channel_update_response_schema_1 = __webpack_require__(47603);
var relayer_api_orderbook_response_schema_1 = __webpack_require__(42757);
var relayer_api_token_pairs_response_schema_1 = __webpack_require__(587);
var signed_orders_schema_1 = __webpack_require__(20471);
var token_schema_1 = __webpack_require__(62852);
var tx_data_schema_1 = __webpack_require__(54930);
exports.schemas = {
    numberSchema: basic_type_schemas_1.numberSchema,
    addressSchema: basic_type_schemas_1.addressSchema,
    ecSignatureSchema: ec_signature_schema_1.ecSignatureSchema,
    ecSignatureParameterSchema: ec_signature_schema_1.ecSignatureParameterSchema,
    indexFilterValuesSchema: index_filter_values_schema_1.indexFilterValuesSchema,
    orderCancellationRequestsSchema: order_cancel_schema_1.orderCancellationRequestsSchema,
    orderFillOrKillRequestsSchema: order_fill_or_kill_requests_schema_1.orderFillOrKillRequestsSchema,
    orderFillRequestsSchema: order_fill_requests_schema_1.orderFillRequestsSchema,
    orderHashSchema: order_hash_schema_1.orderHashSchema,
    orderSchema: order_schemas_1.orderSchema,
    signedOrderSchema: order_schemas_1.signedOrderSchema,
    signedOrdersSchema: signed_orders_schema_1.signedOrdersSchema,
    blockParamSchema: block_range_schema_1.blockParamSchema,
    blockRangeSchema: block_range_schema_1.blockRangeSchema,
    tokenSchema: token_schema_1.tokenSchema,
    jsNumber: tx_data_schema_1.jsNumber,
    txDataSchema: tx_data_schema_1.txDataSchema,
    relayerApiErrorResponseSchema: relayer_api_error_response_schema_1.relayerApiErrorResponseSchema,
    relayerApiFeesPayloadSchema: relayer_api_fees_payload_schema_1.relayerApiFeesPayloadSchema,
    relayerApiFeesResponseSchema: relayer_api_fees_response_schema_1.relayerApiFeesResponseSchema,
    relayerApiOrderBookResponseSchema: relayer_api_orderbook_response_schema_1.relayerApiOrderBookResponseSchema,
    relayerApiTokenPairsResponseSchema: relayer_api_token_pairs_response_schema_1.relayerApiTokenPairsResponseSchema,
    relayerApiTokenTradeInfoSchema: relayer_api_token_pairs_response_schema_1.relayerApiTokenTradeInfoSchema,
    relayerApiOrderbookChannelSubscribeSchema: relayer_api_orberbook_channel_subscribe_schema_1.relayerApiOrderbookChannelSubscribeSchema,
    relayerApiOrderbookChannelSubscribePayload: relayer_api_orberbook_channel_subscribe_schema_1.relayerApiOrderbookChannelSubscribePayload,
    relayerApiOrderbookChannelUpdateSchema: relayer_api_orderbook_channel_update_response_schema_1.relayerApiOrderbookChannelUpdateSchema,
    relayerApiOrderbookChannelSnapshotSchema: relayer_api_orderbook_channel_snapshot_schema_1.relayerApiOrderbookChannelSnapshotSchema,
    relayerApiOrderbookChannelSnapshotPayload: relayer_api_orderbook_channel_snapshot_schema_1.relayerApiOrderbookChannelSnapshotPayload,
};
//# sourceMappingURL=schemas.js.map

/***/ }),

/***/ 22407:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbiType;
(function (AbiType) {
    AbiType["Function"] = "function";
    AbiType["Constructor"] = "constructor";
    AbiType["Event"] = "event";
    AbiType["Fallback"] = "fallback";
})(AbiType = exports.AbiType || (exports.AbiType = {}));
var SolidityTypes;
(function (SolidityTypes) {
    SolidityTypes["Address"] = "address";
    SolidityTypes["Uint256"] = "uint256";
    SolidityTypes["Uint8"] = "uint8";
    SolidityTypes["Uint"] = "uint";
})(SolidityTypes = exports.SolidityTypes || (exports.SolidityTypes = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 34408:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(31557);
var _ = __webpack_require__(39378);
var Web3 = __webpack_require__(69906);
var Web3Wrapper = /** @class */ (function () {
    function Web3Wrapper(provider, defaults) {
        if (_.isUndefined(provider.sendAsync)) {
            // Web3@1.0 provider doesn't support synchronous http requests,
            // so it only has an async `send` method, instead of a `send` and `sendAsync` in web3@0.x.x`
            // We re-assign the send method so that Web3@1.0 providers work with 0x.js
            provider.sendAsync = provider.send;
        }
        this._web3 = new Web3();
        this._web3.setProvider(provider);
        this._defaults = defaults || {};
        this._jsonRpcRequestId = 0;
    }
    Web3Wrapper.prototype.getContractDefaults = function () {
        return this._defaults;
    };
    Web3Wrapper.prototype.setProvider = function (provider) {
        this._web3.setProvider(provider);
    };
    Web3Wrapper.prototype.isAddress = function (address) {
        return this._web3.isAddress(address);
    };
    Web3Wrapper.prototype.isSenderAddressAvailableAsync = function (senderAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var addresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAvailableAddressesAsync()];
                    case 1:
                        addresses = _a.sent();
                        return [2 /*return*/, _.includes(addresses, senderAddress)];
                }
            });
        });
    };
    Web3Wrapper.prototype.getNodeVersionAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nodeVersion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.version.getNode)()];
                    case 1:
                        nodeVersion = _a.sent();
                        return [2 /*return*/, nodeVersion];
                }
            });
        });
    };
    Web3Wrapper.prototype.getNetworkIdAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var networkIdStr, networkId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.version.getNetwork)()];
                    case 1:
                        networkIdStr = _a.sent();
                        networkId = _.parseInt(networkIdStr);
                        return [2 /*return*/, networkId];
                }
            });
        });
    };
    Web3Wrapper.prototype.getTransactionReceiptAsync = function (txHash) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.getTransactionReceipt)(txHash)];
                    case 1:
                        transactionReceipt = _a.sent();
                        if (!_.isNull(transactionReceipt)) {
                            transactionReceipt.status = this._normalizeTxReceiptStatus(transactionReceipt.status);
                        }
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    Web3Wrapper.prototype.getCurrentProvider = function () {
        return this._web3.currentProvider;
    };
    Web3Wrapper.prototype.toWei = function (ethAmount) {
        var balanceWei = this._web3.toWei(ethAmount, 'ether');
        return balanceWei;
    };
    Web3Wrapper.prototype.getBalanceInWeiAsync = function (owner) {
        return __awaiter(this, void 0, void 0, function () {
            var balanceInWei;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.getBalance)(owner)];
                    case 1:
                        balanceInWei = _a.sent();
                        // Rewrap in a new BigNumber
                        balanceInWei = new utils_1.BigNumber(balanceInWei);
                        return [2 /*return*/, balanceInWei];
                }
            });
        });
    };
    Web3Wrapper.prototype.doesContractExistAtAddressAsync = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var code, codeIsEmpty;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.getCode)(address)];
                    case 1:
                        code = _a.sent();
                        codeIsEmpty = /^0x0{0,40}$/i.test(code);
                        return [2 /*return*/, !codeIsEmpty];
                }
            });
        });
    };
    Web3Wrapper.prototype.signTransactionAsync = function (address, message) {
        return __awaiter(this, void 0, void 0, function () {
            var signData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.sign)(address, message)];
                    case 1:
                        signData = _a.sent();
                        return [2 /*return*/, signData];
                }
            });
        });
    };
    Web3Wrapper.prototype.getBlockNumberAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var blockNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.getBlockNumber)()];
                    case 1:
                        blockNumber = _a.sent();
                        return [2 /*return*/, blockNumber];
                }
            });
        });
    };
    Web3Wrapper.prototype.getBlockAsync = function (blockParam) {
        return __awaiter(this, void 0, void 0, function () {
            var block;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.getBlock)(blockParam)];
                    case 1:
                        block = _a.sent();
                        return [2 /*return*/, block];
                }
            });
        });
    };
    Web3Wrapper.prototype.getBlockTimestampAsync = function (blockParam) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBlockAsync(blockParam)];
                    case 1:
                        timestamp = (_a.sent()).timestamp;
                        return [2 /*return*/, timestamp];
                }
            });
        });
    };
    Web3Wrapper.prototype.getAvailableAddressesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var addresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.getAccounts)()];
                    case 1:
                        addresses = _a.sent();
                        return [2 /*return*/, addresses];
                }
            });
        });
    };
    Web3Wrapper.prototype.getLogsAsync = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var fromBlock, toBlock, serializedFilter, payload, rawLogs, formattedLogs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromBlock = filter.fromBlock;
                        if (_.isNumber(fromBlock)) {
                            fromBlock = this._web3.toHex(fromBlock);
                        }
                        toBlock = filter.toBlock;
                        if (_.isNumber(toBlock)) {
                            toBlock = this._web3.toHex(toBlock);
                        }
                        serializedFilter = __assign({}, filter, { fromBlock: fromBlock,
                            toBlock: toBlock });
                        payload = {
                            jsonrpc: '2.0',
                            id: this._jsonRpcRequestId++,
                            method: 'eth_getLogs',
                            params: [serializedFilter],
                        };
                        return [4 /*yield*/, this._sendRawPayloadAsync(payload)];
                    case 1:
                        rawLogs = _a.sent();
                        formattedLogs = _.map(rawLogs, this._formatLog.bind(this));
                        return [2 /*return*/, formattedLogs];
                }
            });
        });
    };
    Web3Wrapper.prototype.getContractFromAbi = function (abi) {
        var web3Contract = this._web3.eth.contract(abi);
        return web3Contract;
    };
    Web3Wrapper.prototype.getContractInstance = function (abi, address) {
        var web3ContractInstance = this.getContractFromAbi(abi).at(address);
        return web3ContractInstance;
    };
    Web3Wrapper.prototype.estimateGasAsync = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var gas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.estimateGas)({ data: data })];
                    case 1:
                        gas = _a.sent();
                        return [2 /*return*/, gas];
                }
            });
        });
    };
    Web3Wrapper.prototype.sendTransactionAsync = function (txData) {
        return __awaiter(this, void 0, void 0, function () {
            var txHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.promisify(this._web3.eth.sendTransaction)(txData)];
                    case 1:
                        txHash = _a.sent();
                        return [2 /*return*/, txHash];
                }
            });
        });
    };
    Web3Wrapper.prototype._sendRawPayloadAsync = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var sendAsync, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sendAsync = this._web3.currentProvider.sendAsync.bind(this._web3.currentProvider);
                        return [4 /*yield*/, utils_1.promisify(sendAsync)(payload)];
                    case 1:
                        response = _a.sent();
                        result = response.result;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Web3Wrapper.prototype._normalizeTxReceiptStatus = function (status) {
        // Transaction status might have four values
        // undefined - Testrpc and other old clients
        // null - New clients on old transactions
        // number - Parity
        // hex - Geth
        if (_.isString(status)) {
            return this._web3.toDecimal(status);
        }
        else if (_.isUndefined(status)) {
            return null;
        }
        else {
            return status;
        }
    };
    Web3Wrapper.prototype._formatLog = function (rawLog) {
        var formattedLog = __assign({}, rawLog, { logIndex: this._hexToDecimal(rawLog.logIndex), blockNumber: this._hexToDecimal(rawLog.blockNumber), transactionIndex: this._hexToDecimal(rawLog.transactionIndex) });
        return formattedLog;
    };
    Web3Wrapper.prototype._hexToDecimal = function (hex) {
        if (_.isNull(hex)) {
            return null;
        }
        var decimal = this._web3.toDecimal(hex);
        return decimal;
    };
    return Web3Wrapper;
}());
exports.Web3Wrapper = Web3Wrapper;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 45479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];


var isHexPrefixed = __webpack_require__(77145);
var stripHexPrefix = __webpack_require__(45533);

/**
 * Pads a `String` to have an even length
 * @param {String} value
 * @return {String} output
 */
function padToEven(value) {
  var a = value; // eslint-disable-line

  if (typeof a !== 'string') {
    throw new Error('[ethjs-util] while padding to even, value must be string, is currently ' + typeof a + ', while padToEven.');
  }

  if (a.length % 2) {
    a = '0' + a;
  }

  return a;
}

/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
function intToHex(i) {
  var hex = i.toString(16); // eslint-disable-line

  return '0x' + hex;
}

/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
function intToBuffer(i) {
  var hex = intToHex(i);

  return new Buffer(padToEven(hex.slice(2)), 'hex');
}

/**
 * Get the binary size of a string
 * @param {String} str
 * @return {Number}
 */
function getBinarySize(str) {
  if (typeof str !== 'string') {
    throw new Error('[ethjs-util] while getting binary size, method getBinarySize requires input \'str\' to be type String, got \'' + typeof str + '\'.');
  }

  return Buffer.byteLength(str, 'utf8');
}

/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */
function arrayContainsArray(superset, subset, some) {
  if (Array.isArray(superset) !== true) {
    throw new Error('[ethjs-util] method arrayContainsArray requires input \'superset\' to be an array got type \'' + typeof superset + '\'');
  }
  if (Array.isArray(subset) !== true) {
    throw new Error('[ethjs-util] method arrayContainsArray requires input \'subset\' to be an array got type \'' + typeof subset + '\'');
  }

  return subset[Boolean(some) && 'some' || 'every'](function (value) {
    return superset.indexOf(value) >= 0;
  });
}

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
function toUtf8(hex) {
  var bufferValue = new Buffer(padToEven(stripHexPrefix(hex).replace(/^0+|0+$/g, '')), 'hex');

  return bufferValue.toString('utf8');
}

/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */
function toAscii(hex) {
  var str = ''; // eslint-disable-line
  var i = 0,
      l = hex.length; // eslint-disable-line

  if (hex.substring(0, 2) === '0x') {
    i = 2;
  }

  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16);
    str += String.fromCharCode(code);
  }

  return str;
}

/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
function fromUtf8(stringValue) {
  var str = new Buffer(stringValue, 'utf8');

  return '0x' + padToEven(str.toString('hex')).replace(/^0+|0+$/g, '');
}

/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */
function fromAscii(stringValue) {
  var hex = ''; // eslint-disable-line
  for (var i = 0; i < stringValue.length; i++) {
    // eslint-disable-line
    var code = stringValue.charCodeAt(i);
    var n = code.toString(16);
    hex += n.length < 2 ? '0' + n : n;
  }

  return '0x' + hex;
}

/**
 * getKeys([{a: 1, b: 2}, {a: 3, b: 4}], 'a') => [1, 3]
 *
 * @method getKeys get specific key from inner object array of objects
 * @param {String} params
 * @param {String} key
 * @param {Boolean} allowEmpty
 * @returns {Array} output just a simple array of output keys
 */
function getKeys(params, key, allowEmpty) {
  if (!Array.isArray(params)) {
    throw new Error('[ethjs-util] method getKeys expecting type Array as \'params\' input, got \'' + typeof params + '\'');
  }
  if (typeof key !== 'string') {
    throw new Error('[ethjs-util] method getKeys expecting type String for input \'key\' got \'' + typeof key + '\'.');
  }

  var result = []; // eslint-disable-line

  for (var i = 0; i < params.length; i++) {
    // eslint-disable-line
    var value = params[i][key]; // eslint-disable-line
    if (allowEmpty && !value) {
      value = '';
    } else if (typeof value !== 'string') {
      throw new Error('invalid abi');
    }
    result.push(value);
  }

  return result;
}

/**
 * Is the string a hex string.
 *
 * @method check if string is hex string of specific length
 * @param {String} value
 * @param {Number} length
 * @returns {Boolean} output the string is a hex string
 */
function isHexString(value, length) {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }

  if (length && value.length !== 2 + 2 * length) {
    return false;
  }

  return true;
}

module.exports = {
  arrayContainsArray: arrayContainsArray,
  intToBuffer: intToBuffer,
  getBinarySize: getBinarySize,
  isHexPrefixed: isHexPrefixed,
  stripHexPrefix: stripHexPrefix,
  padToEven: padToEven,
  intToHex: intToHex,
  fromAscii: fromAscii,
  fromUtf8: fromUtf8,
  toAscii: toAscii,
  toUtf8: toUtf8,
  getKeys: getKeys,
  isHexString: isHexString
};

/***/ }),

/***/ 68192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var fbemitter = {
  EventEmitter: __webpack_require__(14697),
  EmitterSubscription : __webpack_require__(40070)
};

module.exports = fbemitter;


/***/ }),

/***/ 14697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BaseEventEmitter
 * @typechecks
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EmitterSubscription = __webpack_require__(40070);
var EventSubscriptionVendor = __webpack_require__(27644);

var emptyFunction = __webpack_require__(1189);
var invariant = __webpack_require__(99319);

/**
 * @class BaseEventEmitter
 * @description
 * An EventEmitter is responsible for managing a set of listeners and publishing
 * events to them when it is told that such events happened. In addition to the
 * data for the given event it also sends a event control object which allows
 * the listeners/handlers to prevent the default behavior of the given event.
 *
 * The emitter is designed to be generic enough to support all the different
 * contexts in which one might want to emit events. It is a simple multicast
 * mechanism on top of which extra functionality can be composed. For example, a
 * more advanced emitter may use an EventHolder and EventFactory.
 */

var BaseEventEmitter = (function () {
  /**
   * @constructor
   */

  function BaseEventEmitter() {
    _classCallCheck(this, BaseEventEmitter);

    this._subscriber = new EventSubscriptionVendor();
    this._currentSubscription = null;
  }

  /**
   * Adds a listener to be invoked when events of the specified type are
   * emitted. An optional calling context may be provided. The data arguments
   * emitted will be passed to the listener function.
   *
   * TODO: Annotate the listener arg's type. This is tricky because listeners
   *       can be invoked with varargs.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
  };

  /**
   * Similar to addListener, except that the listener is removed after it is
   * invoked once.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke only once when the
   *   specified event is emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
    var emitter = this;
    return this.addListener(eventType, function () {
      emitter.removeCurrentListener();
      listener.apply(context, arguments);
    });
  };

  /**
   * Removes all of the registered listeners, including those registered as
   * listener maps.
   *
   * @param {?string} eventType - Optional name of the event whose registered
   *   listeners to remove
   */

  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
    this._subscriber.removeAllSubscriptions(eventType);
  };

  /**
   * Provides an API that can be called during an eventing cycle to remove the
   * last listener that was invoked. This allows a developer to provide an event
   * object that can remove the listener (or listener map) during the
   * invocation.
   *
   * If it is called when not inside of an emitting cycle it will throw.
   *
   * @throws {Error} When called not during an eventing cycle
   *
   * @example
   *   var subscription = emitter.addListenerMap({
   *     someEvent: function(data, event) {
   *       console.log(data);
   *       emitter.removeCurrentListener();
   *     }
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   *   emitter.emit('someEvent', 'def'); // does not log anything
   */

  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
    !!!this._currentSubscription ?  false ? 0 : invariant(false) : undefined;
    this._subscriber.removeSubscription(this._currentSubscription);
  };

  /**
   * Returns an array of listeners that are currently registered for the given
   * event.
   *
   * @param {string} eventType - Name of the event to query
   * @return {array}
   */

  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
      return subscription.listener;
    }) : [];
  };

  /**
   * Emits an event of the given type with the given data. All handlers of that
   * particular type will be notified.
   *
   * @param {string} eventType - Name of the event to emit
   * @param {*} Arbitrary arguments to be passed to each registered listener
   *
   * @example
   *   emitter.addListener('someEvent', function(message) {
   *     console.log(message);
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   */

  BaseEventEmitter.prototype.emit = function emit(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    if (subscriptions) {
      var keys = Object.keys(subscriptions);
      for (var ii = 0; ii < keys.length; ii++) {
        var key = keys[ii];
        var subscription = subscriptions[key];
        // The subscription may have been removed during this event loop.
        if (subscription) {
          this._currentSubscription = subscription;
          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
        }
      }
      this._currentSubscription = null;
    }
  };

  /**
   * Provides a hook to override how the emitter emits an event to a specific
   * subscription. This allows you to set up logging and error boundaries
   * specific to your environment.
   *
   * @param {EmitterSubscription} subscription
   * @param {string} eventType
   * @param {*} Arbitrary arguments to be passed to each registered listener
   */

  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
    var args = Array.prototype.slice.call(arguments, 2);
    subscription.listener.apply(subscription.context, args);
  };

  return BaseEventEmitter;
})();

module.exports = BaseEventEmitter;

/***/ }),

/***/ 40070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EmitterSubscription
 * @typechecks
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSubscription = __webpack_require__(56622);

/**
 * EmitterSubscription represents a subscription with listener and context data.
 */

var EmitterSubscription = (function (_EventSubscription) {
  _inherits(EmitterSubscription, _EventSubscription);

  /**
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  function EmitterSubscription(subscriber, listener, context) {
    _classCallCheck(this, EmitterSubscription);

    _EventSubscription.call(this, subscriber);
    this.listener = listener;
    this.context = context;
  }

  return EmitterSubscription;
})(EventSubscription);

module.exports = EmitterSubscription;

/***/ }),

/***/ 56622:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventSubscription
 * @typechecks
 */



/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventSubscription = (function () {

  /**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */

  function EventSubscription(subscriber) {
    _classCallCheck(this, EventSubscription);

    this.subscriber = subscriber;
  }

  /**
   * Removes this subscription from the subscriber that controls it.
   */

  EventSubscription.prototype.remove = function remove() {
    if (this.subscriber) {
      this.subscriber.removeSubscription(this);
      this.subscriber = null;
    }
  };

  return EventSubscription;
})();

module.exports = EventSubscription;

/***/ }),

/***/ 27644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EventSubscriptionVendor
 * @typechecks
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(99319);

/**
 * EventSubscriptionVendor stores a set of EventSubscriptions that are
 * subscribed to a particular event type.
 */

var EventSubscriptionVendor = (function () {
  function EventSubscriptionVendor() {
    _classCallCheck(this, EventSubscriptionVendor);

    this._subscriptionsForType = {};
    this._currentSubscription = null;
  }

  /**
   * Adds a subscription keyed by an event type.
   *
   * @param {string} eventType
   * @param {EventSubscription} subscription
   */

  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
    !(subscription.subscriber === this) ?  false ? 0 : invariant(false) : undefined;
    if (!this._subscriptionsForType[eventType]) {
      this._subscriptionsForType[eventType] = [];
    }
    var key = this._subscriptionsForType[eventType].length;
    this._subscriptionsForType[eventType].push(subscription);
    subscription.eventType = eventType;
    subscription.key = key;
    return subscription;
  };

  /**
   * Removes a bulk set of the subscriptions.
   *
   * @param {?string} eventType - Optional name of the event type whose
   *   registered supscriptions to remove, if null remove all subscriptions.
   */

  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
    if (eventType === undefined) {
      this._subscriptionsForType = {};
    } else {
      delete this._subscriptionsForType[eventType];
    }
  };

  /**
   * Removes a specific subscription. Instead of calling this function, call
   * `subscription.remove()` directly.
   *
   * @param {object} subscription
   */

  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
    var eventType = subscription.eventType;
    var key = subscription.key;

    var subscriptionsForType = this._subscriptionsForType[eventType];
    if (subscriptionsForType) {
      delete subscriptionsForType[key];
    }
  };

  /**
   * Returns the array of subscriptions that are currently registered for the
   * given event type.
   *
   * Note: This array can be potentially sparse as subscriptions are deleted
   * from it when they are removed.
   *
   * TODO: This returns a nullable array. wat?
   *
   * @param {string} eventType
   * @return {?array}
   */

  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
    return this._subscriptionsForType[eventType];
  };

  return EventSubscriptionVendor;
})();

module.exports = EventSubscriptionVendor;

/***/ }),

/***/ 1189:
/***/ ((module) => {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 99319:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 17476:
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 15737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = window.fetch || (window.fetch = (__webpack_require__(95924)["default"]) || __webpack_require__(95924));


/***/ }),

/***/ 96314:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = values;


/***/ }),

/***/ 36897:
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 30309:
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 88278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

// Deprecates. Prefer useMaskI18n()
const i18n = {
    t: (key, options)=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance.t */ .BV.t(key, options);
    }
};


/***/ }),

/***/ 88436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/Collectibles.tsx


const CollectiblesIcon = (0,utils/* createIcon */.I)('Collectibles', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.83325 3.5C4.83325 2.39543 5.72868 1.5 6.83325 1.5H29.8333C30.9378 1.5 31.8333 2.39543 31.8333 3.5V32.5C31.8333 33.6046 30.9378 34.5 29.8333 34.5H6.83325C5.72868 34.5 4.83325 33.6046 4.83325 32.5V3.5Z",
            fill: "url(#paint0_linear_35_22290)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13.6273 6.90742C15.4435 5.44402 17.9166 5.03182 20.1702 5.46022C22.2222 5.94982 24.0582 7.33042 25.0536 9.19702C25.743 10.4246 25.9572 11.8466 25.9662 13.2362C25.9644 16.838 25.9662 20.438 25.9644 24.0398C25.905 24.5096 26.2758 24.8444 26.5116 25.2044C27.6312 26.81 28.155 28.7576 28.2468 30.698C27.5736 30.7016 26.9004 30.6998 26.2272 30.698C26.1246 29.4452 25.9032 28.1924 25.3164 27.0674C23.4786 27.0584 21.6426 27.098 19.8048 27.08C19.794 25.7156 19.7994 24.3512 19.7976 22.9868C18.2298 22.6196 16.5739 22.8932 15.1015 23.5016C12.2881 24.6878 10.3837 27.6578 10.3945 30.6998H8.42525C8.33165 28.295 9.32885 25.9262 10.9021 24.1352C11.1235 23.9264 11.0443 23.5988 11.0677 23.3288C11.0479 20.5676 11.0803 17.8046 11.0515 15.0434C10.9831 13.6682 11.0263 12.2912 11.0893 10.916C11.2531 9.27082 12.2629 7.80562 13.6273 6.90742ZM20.073 7.46362C20.2998 8.10262 20.919 8.50582 21.1638 9.14302C21.9324 10.5722 21.7146 12.2264 21.7398 13.7816C21.7524 17.5634 21.7488 21.3434 21.7506 25.1252C22.5048 25.127 23.2608 25.1306 24.015 25.1162C24.0096 21.1562 24.0114 17.1944 24.015 13.2344C24.006 12.2786 23.9106 11.294 23.484 10.4228C22.8522 9.00082 21.5562 7.91362 20.073 7.46362ZM14.4175 8.75602C13.4221 9.40582 12.9289 10.6262 12.9667 11.789C15.2491 11.8106 17.5296 11.7962 19.812 11.798C19.893 10.2806 18.912 8.73982 17.4108 8.35102C16.4101 7.99642 15.3247 8.28082 14.4175 8.75602ZM13.0261 13.7366C13.0153 14.5484 13.0441 15.4016 13.4725 16.1198C14.1097 17.3276 15.4309 18.0692 16.7826 18.1106C16.7845 18.755 16.7845 19.3994 16.7826 20.0456C15.3841 20.015 14.0413 19.4696 12.9829 18.5624C13.0027 19.8206 12.9829 21.0788 12.9973 22.3388C14.9899 21.0644 17.4649 20.5298 19.803 20.9042C19.7904 18.5156 19.8012 16.1252 19.7958 13.7366C17.5404 13.7348 15.2833 13.7348 13.0261 13.7366Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint0_linear_35_22290",
                x1: "21.0748",
                y1: "1.5",
                x2: "21.0748",
                y2: "34.4996",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        stopColor: "#FF8D5C"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0.99",
                        stopColor: "#FFC49A"
                    })
                ]
            })
        })
    ]
}), '0 0 37 36');

// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(70186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(60647);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49596);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isValid/index.js + 1 modules
var isValid = __webpack_require__(32526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(91518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/VerifiedUser.js
var VerifiedUser = __webpack_require__(89009);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(799);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleTab.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
        overflow: 'auto'
    }
});
function CollectibleTab(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        ...props.CardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: props.children
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
;// CONCATENATED MODULE: ./src/plugins/Collectible/types/index.ts
var types_CollectibleTab;
(function(CollectibleTab) {
    CollectibleTab[CollectibleTab["ARTICLE"] = 0] = "ARTICLE";
    CollectibleTab[CollectibleTab["TOKEN"] = 1] = "TOKEN";
    CollectibleTab[CollectibleTab["OFFER"] = 2] = "OFFER";
    CollectibleTab[CollectibleTab["LISTING"] = 3] = "LISTING";
    CollectibleTab[CollectibleTab["HISTORY"] = 4] = "HISTORY";
})(types_CollectibleTab || (types_CollectibleTab = {}));

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useCollectibleState.ts





function useCollectibleState(token) {
    const [tabIndex, setTabIndex] = (0,react.useState)(types_CollectibleTab.ARTICLE);
    const [provider, setProvider] = (0,react.useState)(src/* SourceType.OpenSea */.PO.OpenSea);
    const asset = (0,entry_web3/* useNonFungibleAsset */.Em)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, token?.contractAddress ?? '', token?.tokenId ?? '', {
        sourceType: provider
    });
    return {
        token,
        asset,
        provider,
        tabIndex,
        setProvider,
        setTabIndex
    };
}
const CollectibleState = (0,unstated_next/* createContainer */.f)(useCollectibleState);

// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(76536);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ArticleTab.tsx







const ArticleTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        body: {
            display: 'flex',
            justifyContent: 'center',
            minHeight: 300
        },
        player: {
            maxWidth: '100%',
            maxHeight: '100%',
            border: 'none'
        },
        errorPlaceholder: {
            padding: '82px 0',
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            width: '100%'
        },
        loadingPlaceholder: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '74px 0'
        },
        loadingIcon: {
            width: 36,
            height: 52
        },
        errorIcon: {
            width: 36,
            height: 36
        },
        iframe: {
            minWidth: 300,
            minHeight: 300
        },
        imgWrapper: {
            maxWidth: 300
        }
    })
);
function ArticleTab(props) {
    const { classes  } = ArticleTab_useStyles();
    const { asset  } = CollectibleState.useContainer();
    return (0,react.useMemo)(()=>{
        if (!asset.value) return null;
        // TODO: Migrate `hasNativeAPI` to `@masknet/shared` to use it in <NFTCardStyledAssetPlayer /> directly.
        const resourceUrl = native_rpc/* hasNativeAPI */._ ? asset.value.metadata?.imageURL || asset.value.metadata?.mediaURL : asset.value.metadata?.mediaURL || asset.value.metadata?.imageURL;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.body,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                    url: resourceUrl,
                    classes: classes,
                    isNative: native_rpc/* hasNativeAPI */._
                })
            })
        });
    }, [
        asset.value?.metadata?.mediaURL,
        asset.value?.metadata?.imageURL,
        classes
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(34430);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Account.tsx




function Account({ address , username  }) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const account = (0,entry_web3/* useAccount */.mA)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,src/* isSameAddress */.Wr)(account, address ?? '') ? t('plugin_collectible_you') : username || address?.slice(2, 8)
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.2.7_webpack-cli@4.10.0/node_modules/opensea-js/lib/index.js
var lib = __webpack_require__(13979);
// EXTERNAL MODULE: ./src/plugins/Collectible/constants.ts
var constants = __webpack_require__(2658);
;// CONCATENATED MODULE: ./src/plugins/Collectible/pipes/index.ts





const isOpenSeaSupportedChainId = (0,src/* createPredicate */.Km)([
    types/* ChainId.Mainnet */.a_.Mainnet,
    types/* ChainId.Rinkeby */.a_.Rinkeby, 
]);
const resolveOpenSeaNetwork = (0,src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: lib/* Network.Main */.Zc.Main,
    [types/* ChainId.Rinkeby */.a_.Rinkeby]: lib/* Network.Rinkeby */.Zc.Rinkeby
}, lib/* Network.Main */.Zc.Main);
const resolveRaribleUserNetwork = (0,src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: constants/* RaribleUserURL */.Zz,
    [types/* ChainId.Ropsten */.a_.Ropsten]: constants/* RaribleRopstenUserURL */.g5,
    [types/* ChainId.Rinkeby */.a_.Rinkeby]: constants/* RaribleRinkebyUserURL */.i8
}, constants/* RaribleUserURL */.Zz);
const resolveLinkOnOpenSea = (0,src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: constants/* OpenSeaMainnetURL */.Kl,
    [types/* ChainId.Rinkeby */.a_.Rinkeby]: constants/* OpenSeaTestnetURL */.Ky
}, constants/* OpenSeaMainnetURL */.Kl);
const resolveLinkOnRarible = (0,src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: 'https://rarible.com',
    [types/* ChainId.Rinkeby */.a_.Rinkeby]: 'https://rinkeby.rarible.com',
    [types/* ChainId.Ropsten */.a_.Ropsten]: 'https://ropsten.rarible.com'
}, 'https://rarible.com');
const resolveLinkOnZora = (0,src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: 'https://zora.co'
}, 'https://zora.co');
function resolveTraitLinkOnOpenSea(chainId, slug, search, value) {
    if (chainId === types/* ChainId.Rinkeby */.a_.Rinkeby) {
        return `https://testnets.opensea.io/assets/${slug}?search[stringTraits][0][name]=${search}&search[stringTraits][0][values][0]=${value}`;
    }
    return `https://opensea.io/assets/${slug}?search[stringTraits][0][name]=${search}&search[stringTraits][0][values][0]=${value}`;
}
function resolveAssetLinkOnCurrentProvider(chainId, address, id, provider) {
    switch(provider){
        case src/* SourceType.OpenSea */.PO.OpenSea:
            return dist_default()(resolveLinkOnOpenSea(chainId), '/assets/:address/:id', {
                address,
                id
            });
        case src/* SourceType.Rarible */.PO.Rarible:
            return dist_default()(resolveLinkOnRarible(chainId), '/token/:address::id', {
                address,
                id
            });
        case src/* SourceType.NFTScan */.PO.NFTScan:
            return '';
        case src/* SourceType.Zora */.PO.Zora:
            return dist_default()(resolveLinkOnZora(chainId), '/collections/:address/:id', {
                address,
                id
            });
        default:
            return '';
    }
}
function resolveUserUrlOnCurrentProvider(chainId, address, provider, username) {
    switch(provider){
        case src/* SourceType.Rarible */.PO.Rarible:
            return dist_default()(resolveRaribleUserNetwork(chainId), `/${address}`);
        case src/* SourceType.OpenSea */.PO.OpenSea:
            return dist_default()(resolveLinkOnOpenSea(chainId), `/${username ?? ''}`);
        case src/* SourceType.NFTScan */.PO.NFTScan:
            return '';
        case src/* SourceType.Zora */.PO.Zora:
            return dist_default()(resolveLinkOnZora(chainId), `/${address}`);
        default:
            return '';
    }
}
function resolveAvatarLinkOnCurrentProvider(chainId, asset, provider) {
    switch(provider){
        case SourceType.OpenSea:
            return urlcat(resolveLinkOnOpenSea(chainId), `/collection/${asset.slug ?? ''}`);
        case SourceType.Rarible:
            return urlcat(resolveLinkOnRarible(chainId), `/collection/${asset.token_address ?? ''}`);
        case SourceType.NFTScan:
            return '';
        case SourceType.Zora:
            return '';
        default:
            return '';
    }
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/TokenTab.tsx













const TokenTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            paddingTop: 0,
            paddingBottom: '0 !important'
        },
        container: {
            padding: theme.spacing(1)
        },
        markdown: {
            margin: theme.spacing(1, 0)
        },
        description: {
            fontSize: 14,
            wordBreak: 'break-all'
        },
        trait_content: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: theme.spacing(2)
        },
        trait: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 14,
            fontWeight: 600
        },
        chain_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: 0
            }
        },
        tokenId: {
            maxWidth: 112,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    };
});
function TokenTab(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = TokenTab_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { token , asset , provider  } = CollectibleState.useContainer();
    if (!asset.value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleTab, {
        classes: {
            content: classes.content
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_base')
                    }),
                    asset.value.creator ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_create_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveUserUrlOnCurrentProvider(chainId, asset.value.creator?.address ?? '', provider, asset.value.creator.nickname),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: asset.value.creator.address,
                                    username: asset.value.creator.nickname
                                })
                            })
                        ]
                    }) : asset.value.owner ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_owned_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolveUserUrlOnCurrentProvider(chainId, asset.value.owner?.address ?? '', provider, asset.value.owner?.nickname),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: asset.value.owner?.nickname,
                                    username: asset.value.owner?.address
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                        classes: {
                            root: classes.markdown
                        },
                        content: asset.value?.metadata?.description ?? ''
                    })
                ]
            }),
            asset.value.traits?.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_properties')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.trait_content,
                        children: asset.value.traits.map(({ type , value  }, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                underline: "none",
                                href: asset.value?.collection?.slug ? resolveTraitLinkOnOpenSea(chainId, asset.value.collection?.slug, type, value) : '',
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                                    className: classes.trait,
                                    variant: "outlined",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "primary",
                                            children: type
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            children: value
                                        })
                                    ]
                                })
                            }, key)
                        )
                    })
                ]
            }) : null,
            asset.value.contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: [
                            t('plugin_collectible_about'),
                            " ",
                            asset.value.contract.name
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.description,
                        variant: "body2",
                        children: asset.value.metadata?.description
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_chain_info')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_contract_address')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: resolver/* explorerResolver.addressLink */.Nb.addressLink(types/* ChainId.Mainnet */.a_.Mainnet, token?.contractAddress ?? ''),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                        address: token?.contractAddress ?? '',
                                        size: 4,
                                        formatter: formatter/* formatEthereumAddress */.j8
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_token_id')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.tokenId,
                                variant: "body2",
                                children: token?.tokenId
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_block_chain')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: resolver/* chainResolver.chainName */.VU.chainName(chainId)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(34085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(9293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(9051);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(66415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDistanceToNow/index.js
var formatDistanceToNow = __webpack_require__(57733);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OrderRow.tsx










const OrderRow_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5),
            fontSize: 14,
            lineHeight: 1
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        tokenLink: {
            display: 'flex',
            alignItems: 'center'
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            lineHeight: 1
        }
    };
});
function OrderRow({ order , isDifferenceToken  }) {
    const { classes  } = OrderRow_useStyles();
    const { provider  } = CollectibleState.useContainer();
    const address = order.maker?.nickname || order.maker?.address || '';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: order.maker?.link,
                    title: address,
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: order.maker?.avatarURL,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                address: order.maker?.address,
                                username: order.maker?.nickname
                            })
                        })
                    ]
                })
            }),
            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    provider === src/* SourceType.OpenSea */.PO.OpenSea ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        href: resolver/* explorerResolver.addressLink */.Nb.addressLink(types/* ChainId.Mainnet */.a_.Mainnet, order.paymentToken?.address ?? ''),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: classes.tokenLink,
                                        children: order.paymentToken?.logoURL && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: order.paymentToken.logoURL,
                                            className: classes.token,
                                            alt: order.paymentToken?.symbol
                                        })
                                    }) : null,
                                    (0,web3_providers_src/* getOrderUnitPrice */.bb)(order.price?.[src/* CurrencyType.USD */.V2.USD], order.paymentToken?.decimals, order.quantity),
                                    ' ',
                                    order.paymentToken?.symbol
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: order.quantity ?? 0,
                                decimals: !(0,src/* isOne */.P$)(order.quantity ?? 0) ? 8 : 0,
                                formatter: src/* formatBalance */.az
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            style: {
                                display: 'flex'
                            },
                            className: classes.content,
                            children: [
                                provider === src/* SourceType.OpenSea */.PO.OpenSea ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: resolver/* explorerResolver.addressLink */.Nb.addressLink(types/* ChainId.Mainnet */.a_.Mainnet, order.paymentToken?.address ?? ''),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: classes.tokenLink,
                                    children: order.paymentToken?.logoURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: order.paymentToken.logoURL,
                                        className: classes.token,
                                        alt: order.paymentToken?.symbol
                                    }) : null
                                }) : null,
                                (0,web3_providers_src/* getOrderUnitPrice */.bb)(order.price?.[src/* CurrencyType.USD */.V2.USD], order.paymentToken?.decimals, order.quantity)?.toString(),
                                ' ',
                                provider === src/* SourceType.OpenSea */.PO.OpenSea ? order.paymentToken?.symbol ?? '' : 'ETH'
                            ]
                        })
                    }),
                    provider === src/* SourceType.OpenSea */.PO.OpenSea ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            children: order.expiredAt && !(0,src/* isZero */.Fr)(order.expiredAt) && (0,formatDistanceToNow/* default */.Z)(new Date(order.expiredAt * 1000), {
                                addSuffix: true
                            })
                        })
                    }) : null
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OfferTab.tsx










const OfferTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none',
            textAlign: 'center'
        },
        button: {
            marginLeft: theme.spacing(1)
        }
    };
});
function OfferTab() {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = OfferTab_useStyles();
    const { asset , provider  } = CollectibleState.useContainer();
    const offers = asset.value?.orders?.filter((x)=>x.side === src/* OrderSide.Buy */.oU.Buy
    ) ?? shared_base_src/* EMPTY_LIST */.rP;
    const isDifferenceToken = (0,react.useMemo)(()=>{
        if (provider === src/* SourceType.OpenSea */.PO.OpenSea) {
            return offers.some((item)=>item.paymentToken?.symbol !== 'WETH' && item.paymentToken?.symbol !== 'ETH' || item.quantity && !(0,src/* isOne */.P$)(item.quantity)
            ) && offers.filter((item)=>(0,src/* isZero */.Fr)(item.expiredAt ?? 0)
            ).length === 0;
        } else {
            return false;
        }
    }, [
        provider,
        offers
    ]);
    if (asset.loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.empty,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* LoadingBase */.Sx, {})
    });
    if (!offers.length || asset.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            className: classes.empty,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.emptyCell,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('plugin_collectible_no_offers')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                marginTop: 1
                            },
                            variant: "text",
                            onClick: ()=>asset.retry()
                            ,
                            children: t('plugin_collectible_retry')
                        })
                    ]
                })
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_price')
                                    }),
                                    provider === src/* SourceType.OpenSea */.PO.OpenSea ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_expiration')
                                    }) : null
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: offers.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OrderRow, {
                            order: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.hash)
                    )
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ListingTab.tsx











const ListingTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none',
            textAlign: 'center'
        },
        button: {
            marginLeft: theme.spacing(1)
        }
    };
});
function ListingTab() {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = ListingTab_useStyles();
    const { asset , provider  } = CollectibleState.useContainer();
    const orders = asset.value?.orders?.filter((x)=>x.side === src/* OrderSide.Sell */.oU.Sell
    ) ?? shared_base_src/* EMPTY_LIST */.rP;
    const isDifferenceToken = (0,react.useMemo)(()=>{
        if (provider === src/* SourceType.OpenSea */.PO.OpenSea) {
            return orders.some((item)=>item.paymentToken?.symbol !== 'WETH' && item.paymentToken?.symbol !== 'ETH' || item.quantity && !(0,src/* isOne */.P$)(item.quantity)
            ) && orders.filter((item)=>(0,src/* isZero */.Fr)(item.expiredAt ?? 0)
            ).length === 0;
        } else {
            return false;
        }
    }, [
        provider,
        orders
    ]);
    const dataSource = (0,react.useMemo)(()=>{
        if (!orders.length) return [];
        return orders.sort((a, b)=>{
            const current = new (bignumber_default())(a.price?.[src/* CurrencyType.USD */.V2.USD] ?? 0);
            const next = new (bignumber_default())(b.price?.[src/* CurrencyType.USD */.V2.USD] ?? 0);
            if (current.isLessThan(next)) return -1;
            else if (current.isGreaterThan(next)) return 1;
            return 0;
        });
    }, [
        orders,
        asset.value
    ]);
    if (asset.loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.empty,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* LoadingBase */.Sx, {})
    });
    if (!asset.value || asset.error || !dataSource.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                className: classes.empty,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                        className: classes.emptyCell,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textSecondary",
                                children: t('plugin_collectible_no_listings')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                sx: {
                                    marginTop: 1
                                },
                                variant: "text",
                                onClick: ()=>asset.retry()
                                ,
                                children: t('plugin_collectible_retry')
                            })
                        ]
                    })
                })
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_price')
                                    }),
                                    provider === src/* SourceType.OpenSea */.PO.OpenSea ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_expiration')
                                    }) : null
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: dataSource.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OrderRow, {
                            order: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.hash)
                    )
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/plugins/Wallet/formatter.ts
var Wallet_formatter = __webpack_require__(13286);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/HistoryTab/Row.tsx










const Row_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5)
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        content: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function Row({ event , isDifferenceToken  }) {
    const { classes  } = Row_useStyles();
    const { provider  } = CollectibleState.useContainer();
    const unitPrice = (0,react.useMemo)(()=>{
        if (provider === src/* SourceType.Rarible */.PO.Rarible || !isDifferenceToken || !event.price) return null;
        return (0,web3_providers_src/* getOrderUnitPrice */.bb)(event.price?.[src/* CurrencyType.USD */.V2.USD] ?? '0', event.paymentToken?.decimals, event.quantity)?.toString();
    }, [
        event,
        isDifferenceToken,
        provider
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: event.type
                })
            }),
            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.content,
                            variant: "body2",
                            children: [
                                event.paymentToken?.logoURL && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: event.assetPermalink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: event.paymentToken.logoURL,
                                        className: classes.token,
                                        alt: event.assetPermalink
                                    })
                                }),
                                unitPrice,
                                event.paymentToken?.symbol
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: event.quantity ?? 0,
                                decimals: event.paymentToken?.decimals ?? 0,
                                formatter: src/* formatBalance */.az
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: event.price && provider === src/* SourceType.OpenSea */.PO.OpenSea ? (0,src/* formatBalance */.az)(event.quantity, event.paymentToken?.decimals ?? 0) : event.quantity ?? ''
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: event.from && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: event.from.link,
                    title: (event.from.nickname ?? event.from.address) ?? '',
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.from.avatarURL,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: event.from.nickname,
                                address: event.from.address?.slice(2, 8)
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: event.to && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: event.to.link,
                    title: (event.to.nickname ?? event.to.address) ?? '',
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.to.avatarURL,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: event.to.nickname,
                                address: event.to.address
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.relativeTime,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    color: "primary",
                    variant: "body2",
                    children: (0,Wallet_formatter/* formatElapsed */.Q)(event.timestamp)
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/HistoryTab/index.tsx










const HistoryTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        head: {
            wordBreak: 'keep-all'
        },
        content: {
            padding: '0 !important'
        },
        spacer: {
            flex: 0
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none'
        }
    };
});
function HistoryTab(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = HistoryTab_useStyles();
    const { asset , provider  } = CollectibleState.useContainer();
    const events = asset.value?.events ?? shared_base_src/* EMPTY_LIST */.rP;
    // #region If there is a different asset, the unit price and quantity should be displayed
    const isDifferenceToken = (0,react.useMemo)(()=>{
        if (provider === src/* SourceType.OpenSea */.PO.OpenSea) return events.some((item)=>item.paymentToken?.symbol !== 'ETH'
        );
        else return false;
    }, [
        events,
        provider
    ]);
    // #endregion
    if (asset.loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.empty,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* LoadingBase */.Sx, {})
    });
    if (events.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            className: classes.empty,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.emptyCell,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('plugin_collectible_no_history')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                marginTop: 1
                            },
                            variant: "text",
                            onClick: ()=>asset.retry()
                            ,
                            children: t('plugin_collectible_retry')
                        })
                    ]
                })
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    className: classes.head,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_event')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_price')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_to')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_date')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: events.map((event)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Row, {
                            event: event,
                            isDifferenceToken: isDifferenceToken
                        }, event.id)
                    )
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/LinkingAvatar.tsx


function LinkingAvatar(props) {
    const { href , title , src  } = props;
    try {
        const url = new URL(href).toString();
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: url,
            title: title,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                src: src
            })
        });
    } catch  {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
            src: src
        });
    }
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleCard.tsx


function CollectibleCard(props) {
    const { children  } = props;
    const classes = props.classes;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes?.root,
        elevation: 0,
        children: children
    });
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(45908);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(81117);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(23230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(22775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(93802);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(75536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(25984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(72388);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/UnreviewedWarning.tsx







const UnreviewedWarning_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const warningMain = (0,entry/* getMaskColor */.nb)(theme).warning;
    const warningBackground = (0,entry/* getMaskColor */.nb)(theme).warningBackground;
    return {
        box: {
            border: `1px solid ${warningMain}`,
            borderRadius: theme.spacing(0.5)
        },
        colorBox: {
            backgroundColor: warningBackground,
            color: warningMain
        },
        tipTitleBox: {
            display: 'flex',
            alignItems: 'center'
        },
        tipTitle: {
            borderBottom: `1px solid ${warningMain}`
        },
        tipContent: {
            color: warningMain
        },
        icon: {
            marginRight: theme.spacing(1.5)
        }
    };
});
function UnreviewedWarning() {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const [expand, setExpand] = (0,react.useState)(true);
    const { classes  } = UnreviewedWarning_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        variant: "outlined",
        className: classes.box,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
            className: classes.colorBox,
            expanded: expand,
            disableGutters: true,
            square: true,
            onChange: ()=>setExpand((x)=>!x
                )
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                    expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                        className: classes.tipContent
                    }),
                    className: classes.tipTitle,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tipTitleBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Error/* default */.Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_collectible_not_been_reviewed_by_opensea')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                    className: classes.tipContent,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        children: t('plugin_collectible_reviewed_tips')
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/web3/UI/DateTimePanel.tsx
var DateTimePanel = __webpack_require__(36756);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 14 modules
var dom = __webpack_require__(30003);
;// CONCATENATED MODULE: ./src/plugins/Collectible/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{}}');
;// CONCATENATED MODULE: ./src/plugins/Collectible/helpers.ts




const CollectibleMetadataReader = (0,dom/* createTypedMessageMetadataReader */.Bi)(constants/* PLUGIN_META_KEY */.um, schema_namespaceObject);
const renderWithCollectibleMetadata = (0,dom/* createRenderWithMetadata */.mC)(CollectibleMetadataReader);
function toAsset(asset) {
    return {
        tokenId: asset.tokenId,
        tokenAddress: asset.tokenAddress,
        schemaName: asset.schemaName
    };
}
function toTokenIdentifier(token) {
    if (!token) return '';
    return `${token.contractAddress}_${token.tokenId}`;
}
function toDecimalAmount(weiAmount, decimals) {
    return leftShift(weiAmount, decimals).toNumber();
}

// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(38329);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(11087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(23228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(56030);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 1 modules
var OutlinedInput = __webpack_require__(99195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(29324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(28937);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/SelectTokenListPanel.tsx









const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const SelectTokenListPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'block'
        },
        title: {
            display: 'flex',
            justifyContent: 'space-between',
            flex: 1
        },
        icon: {
            width: 24,
            height: 24
        },
        input: {},
        check: {
            flex: 1,
            display: 'flex',
            justifyContent: 'end',
            color: theme.palette.text.primary
        }
    })
);
function SelectTokenListPanel(props) {
    const { amount , balance , token , onAmountChange , onTokenChange , tokens =[]  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const ref = (0,react.useRef)(null);
    const { classes  } = SelectTokenListPanel_useStyles();
    const [haveMenu, setHaveMenu] = (0,react.useState)(true);
    const width = (0,react.useMemo)(()=>{
        if (!ref.current) return;
        return window.getComputedStyle(ref.current).width;
    }, [
        ref.current
    ]);
    (0,react.useEffect)(()=>{
        if (tokens.length <= 1) setHaveMenu(false);
    }, [
        tokens
    ]);
    const [menu, openMenu] = (0,src_utils/* useMenu */.H9)(tokens.map((x, i)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>{
                onTokenChange(x);
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        classes: {
                            icon: classes.icon
                        },
                        address: x.address,
                        name: x.name,
                        logoURL: x.logoURL
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "inherit",
                    children: x.symbol
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    className: classes.check,
                    children: (0,src/* isSameAddress */.Wr)(x.address, token?.address) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {}) : null
                })
            ]
        }, i);
    }) ?? [], false, {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        paperProps: {
            style: {
                width
            }
        }
    });
    const onClick = (0,react.useCallback)(()=>{
        if (!ref.current) return;
        openMenu(ref.current);
    }, [
        openMenu,
        ref.current
    ]);
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token?.decimals}}$`)
        })
    , [
        token?.decimals
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "colorPrimary",
                        children: t('plugin_collectible_price')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "colorPrimary",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                style: {
                                    marginRight: 4
                                },
                                children: [
                                    t('wallet_balance'),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: balance,
                                decimals: token?.decimals,
                                significant: 6,
                                formatter: src/* formatBalance */.az
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                style: {
                                    marginLeft: 4
                                },
                                children: token?.symbol
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                className: classes.input,
                variant: "outlined",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OutlinedInput/* default */.Z, {
                        fullWidth: true,
                        required: true,
                        type: "text",
                        value: amount,
                        ref: ref,
                        placeholder: "0.0",
                        inputProps: {
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            title: 'Token Amount',
                            inputMode: 'decimal',
                            min: 0,
                            minLength: MIN_AMOUNT_LENGTH,
                            maxLength: MAX_AMOUNT_LENGTH,
                            pattern: /^\d+[,.]?\d+$/,
                            spellCheck: false,
                            className: classes.input
                        },
                        onChange: onChange,
                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                            position: "end",
                            children: [
                                token?.address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                            classes: {
                                                icon: classes.icon
                                            },
                                            address: token?.address,
                                            name: token?.name,
                                            logoURL: token?.logoURL
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "inherit",
                                            sx: {
                                                paddingLeft: (theme)=>theme.spacing(0.5)
                                            },
                                            children: token?.symbol
                                        })
                                    ]
                                }) : null,
                                haveMenu ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                                    onClick: onClick
                                }) : null
                            ]
                        })
                    }),
                    menu
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.2.7_webpack-cli@4.10.0/node_modules/opensea-js/lib/types.js
var lib_types = __webpack_require__(24860);
;// CONCATENATED MODULE: ./src/plugins/Collectible/utils.ts




function checkUrl(url) {
    const protocol = 'https://';
    const _url = new URL(url.startsWith(protocol) ? url : protocol + url);
    return constants/* openseaHostnames.includes */.Kr.includes(_url.hostname) && constants/* openseaPathnameRegexMatcher.test */.Pq.test(_url.pathname) || constants/* raribleHostnames.includes */.QG.includes(_url.hostname) && constants/* rariblePathnameRegexMatcher.test */.lD.test(_url.pathname) || constants/* zoraHostnames.includes */.zR.includes(_url.hostname) && constants/* zoraPathnameRegexMatcher.test */.$u.test(_url.pathname);
}
function getRelevantUrl(textContent) {
    const urls = (0,shared_base_src/* parseURL */.Lk)(textContent);
    return urls.find(checkUrl);
}
function getAssetInfoFromURL(url) {
    if (!url) return null;
    const _url = new URL(url);
    // #region opensea
    const openSeaMatched = _url.pathname.match(constants/* openseaPathnameRegexMatcher */.Pq);
    if (openSeaMatched) {
        return {
            chain_id: _url.host.includes('testnets') ? types/* ChainId.Rinkeby */.a_.Rinkeby : types/* ChainId.Mainnet */.a_.Mainnet,
            address: openSeaMatched[1],
            token_id: openSeaMatched[2]
        };
    }
    // #endregion
    // #region rarible
    const raribleMatched = _url.pathname.match(constants/* rariblePathnameRegexMatcher */.lD);
    if (raribleMatched) {
        return {
            chain_id: _url.host.includes('ropsten') ? types/* ChainId.Ropsten */.a_.Ropsten : _url.host.includes('rinkeby') ? types/* ChainId.Rinkeby */.a_.Rinkeby : types/* ChainId.Mainnet */.a_.Mainnet,
            address: raribleMatched[1],
            token_id: raribleMatched[2]
        };
    }
    // #endregion
    // #region zora
    const zoraMatched = _url.pathname.match(constants/* zoraPathnameRegexMatcher */.$u);
    if (zoraMatched) {
        return {
            chain_id: _url.host.includes('rinkeby') ? types/* ChainId.Rinkeby */.a_.Rinkeby : types/* ChainId.Mainnet */.a_.Mainnet,
            address: zoraMatched[1],
            token_id: zoraMatched[2]
        };
    }
    // #endregion
    // nothing matched
    return;
}
function isWyvernSchemaName(name) {
    const schemas = [
        lib_types.WyvernSchemaName.ERC20,
        lib_types.WyvernSchemaName.ERC721,
        lib_types.WyvernSchemaName.ERC1155,
        lib_types.WyvernSchemaName.LegacyEnjin,
        lib_types.WyvernSchemaName.ENSShortNameAuction, 
    ];
    return schemas.includes(name);
}

// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useOpenSea.ts






function useOpenSea(chainId) {
    const web3Provider = (0,entry_web3/* useWeb3Provider */.xo)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,react.useMemo)(()=>{
        if (!chainId || !isOpenSeaSupportedChainId(chainId) || !web3Provider) return;
        return new lib/* OpenSeaPort */.I2(web3Provider, {
            apiBaseUrl: 'https://opensea-proxy.r2d2.to',
            apiKey: constants/* OpenSeaAPI_Key */.SP,
            networkName: resolveOpenSeaNetwork(chainId)
        }, console.log);
    }, [
        web3Provider
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OpenSea/MakeOfferDialog.tsx
























const MakeOfferDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0,
            borderRadius: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        }
    };
});
function MakeOfferDialog(props) {
    const { asset , open , onClose  } = props;
    const isAuction = !!asset?.auction;
    const isVerified = asset?.collection?.verified ?? false;
    const desktopOrder = (0,head/* default */.Z)(asset?.orders);
    const leastPrice = desktopOrder ? new (bignumber_default())(desktopOrder.price?.[src/* CurrencyType.USD */.V2.USD] ?? '0') : src/* ZERO */.xE;
    const paymentTokens = asset?.payment_tokens;
    const selectedPaymentToken = (0,head/* default */.Z)(paymentTokens);
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = MakeOfferDialog_useStyles();
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const opensea = useOpenSea(chainId);
    const [expirationDateTime, setExpirationDateTime] = (0,react.useState)(new Date());
    const [unreviewedChecked, setUnreviewedChecked] = (0,react.useState)(false);
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const [insufficientBalance, setInsufficientBalance] = (0,react.useState)(false);
    const { amount , token , balance , setAmount , setAddress  } = (0,entry_web3/* useFungibleTokenWatched */.g3)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, selectedPaymentToken?.address);
    const onMakeOffer = (0,react.useCallback)(async ()=>{
        if (!asset) return;
        if (!asset.tokenId || !asset.address) return;
        if (!token?.value) return;
        if (token.value.schema !== types/* SchemaType.Native */.XQ.Native && token.value.schema !== types/* SchemaType.ERC20 */.XQ.ERC20) return;
        const schemaName = asset.contract?.schema;
        await opensea?.createBuyOrder({
            asset: toAsset({
                tokenId: asset.tokenId,
                tokenAddress: asset.address,
                schemaName: isWyvernSchemaName(schemaName) ? schemaName : undefined
            }),
            accountAddress: account,
            startAmount: Number.parseFloat(amount),
            expirationTime: !isAuction ? (0,getUnixTime/* default */.Z)(expirationDateTime) : undefined,
            paymentTokenAddress: token.value.schema === types/* SchemaType.Native */.XQ.Native ? undefined : token.value.address
        });
    }, [
        asset,
        token,
        account,
        amount,
        expirationDateTime,
        isAuction,
        opensea
    ]);
    const { setDialog: openSwapDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const onConvertClick = (0,react.useCallback)(()=>{
        if (!token?.value) return;
        openSwapDialog({
            open: true,
            traderProps: {
                coin: {
                    id: token.value.address,
                    name: token.value.name ?? '',
                    symbol: token.value.symbol ?? '',
                    contract_address: token.value.address,
                    decimals: token.value.decimals
                }
            }
        });
    }, [
        token.value,
        openSwapDialog
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setExpirationDateTime(new Date());
    }, [
        open
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        setInsufficientBalance(false);
        const amount_ = (0,src/* rightShift */.pu)(amount ?? '0', token.value?.decimals || 0);
        const balance_ = new (bignumber_default())(balance.value ?? '0');
        if (amount_.isNaN() || amount_.isZero()) return t('plugin_collectible_enter_a_price');
        if (balance_.isZero() || amount_.isGreaterThan(balance_)) {
            setInsufficientBalance(true);
            return t('plugin_collectible_insufficient_balance');
        }
        if (!isAuction && expirationDateTime.getTime() - Date.now() <= 0) return t('plugin_collectible_invalid_expiration_date');
        if (!isVerified && !unreviewedChecked) return t('plugin_collectible_ensure_unreviewed_item');
        if (!ToS_Checked) return t('plugin_collectible_check_tos_document');
        if (leastPrice.isGreaterThan(amount_)) {
            return t('plugin_collectible_insufficient_offer');
        }
        return '';
    }, [
        amount,
        balance.value,
        expirationDateTime,
        isVerified,
        isAuction,
        unreviewedChecked,
        ToS_Checked
    ]);
    if (!asset) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: isAuction ? t('plugin_collectible_place_a_bid') : t('plugin_collectible_make_an_offer'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    marginBottom: 2
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnreviewedWarning, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenListPanel, {
                                amount: amount,
                                balance: balance.value ?? '0',
                                token: token.value,
                                onAmountChange: setAmount,
                                onTokenChange: (x)=>setAddress(x.address)
                                ,
                                tokens: paymentTokens
                            }),
                            !isAuction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                                label: t('plugin_collectible_expiration_date'),
                                date: expirationDateTime,
                                min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T00:00"),
                                onChange: setExpirationDateTime,
                                className: classes.panel,
                                fullWidth: true
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: ToS_Checked,
                                    onChange: (ev)=>setToS_Checked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_collectible_legal_text",
                                        components: {
                                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                color: "primary",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://opensea.io/tos"
                                            })
                                        }
                                    })
                                })
                            }),
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: unreviewedChecked,
                                    onChange: (ev)=>setUnreviewedChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: t('plugin_collectible_approved_by_opensea')
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedPluginID: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                            expectedChainId: chainId,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                                        className: classes.button,
                                        variant: "contained",
                                        disabled: !!validationMessage,
                                        size: "large",
                                        init: validationMessage || t(isAuction ? 'plugin_collectible_place_bid' : 'plugin_collectible_make_offer'),
                                        waiting: t(isAuction ? 'plugin_collectible_place_bid' : 'plugin_collectible_make_offer'),
                                        complete: t('plugin_collectible_done'),
                                        failed: t('plugin_collectible_retry'),
                                        executor: onMakeOffer,
                                        completeOnClick: onClose,
                                        failedOnClick: "use executor"
                                    }),
                                    insufficientBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        className: classes.button,
                                        variant: "contained",
                                        size: "large",
                                        onClick: onConvertClick,
                                        children: t('plugin_collectible_get_more_token', {
                                            token: token.value?.symbol
                                        })
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var wallet_ts_dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2596);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/SelectTokenAmountPanel.tsx
var SelectTokenAmountPanel = __webpack_require__(86085);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OpenSea/ListingByPriceCard.tsx



















const ListingByPriceCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {},
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {
            marginTop: theme.spacing(1.5)
        },
        caption: {
            fontSize: 11
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    };
});
function ListingByPriceCard(props) {
    const { asset , paymentTokens , open , onClose  } = props;
    const { amount , token , balance , setAmount , setAddress  } = (0,entry_web3/* useFungibleTokenWatched */.g3)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, (0,head/* default */.Z)(paymentTokens)?.address);
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = ListingByPriceCard_useStyles();
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const opensea = useOpenSea(chainId);
    const [scheduleTime, setScheduleTime] = (0,react.useState)(new Date());
    const [expirationTime, setExpirationTime] = (0,react.useState)(new Date());
    const [buyerAddress, setBuyerAddress] = (0,react.useState)('');
    const [endingAmount, setEndingAmount] = (0,react.useState)('');
    const [endingPriceChecked, setEndingPriceChecked] = (0,react.useState)(false);
    const [futureTimeChecked, setFutureTimeChecked] = (0,react.useState)(false);
    const [privacyChecked, setPrivacyChecked] = (0,react.useState)(false);
    const validationMessage = (0,react.useMemo)(()=>{
        if ((0,src/* isZero */.Fr)(amount || '0')) return t('plugin_collectible_enter_a_price');
        if (endingPriceChecked && endingAmount && !(0,src/* isGreaterThan */.T1)(amount || '0', endingAmount || '0')) return t('plugin_collectible_invalid_ending_price');
        if (futureTimeChecked && Date.now() >= scheduleTime.getTime()) return t('plugin_collectible_invalid_schedule_date');
        if (endingPriceChecked && Date.now() >= expirationTime.getTime()) return t('plugin_collectible_invalid_expiration_date');
        if (privacyChecked && buyerAddress && !wallet_ts_dist.EthereumAddress.isValid(buyerAddress)) return t('plugin_collectible_invalid_buyer_address');
        return '';
    }, [
        amount,
        endingPriceChecked,
        endingAmount,
        futureTimeChecked,
        scheduleTime,
        expirationTime,
        privacyChecked,
        buyerAddress, 
    ]);
    const onPostListing = (0,react.useCallback)(async ()=>{
        if (!opensea) return;
        if (!asset?.id || !asset.address) return;
        if (token.value?.schema !== types/* SchemaType.Native */.XQ.Native && token.value?.schema !== types/* SchemaType.ERC20 */.XQ.ERC20) return;
        await opensea.createSellOrder({
            asset: toAsset({
                tokenId: asset.tokenId,
                tokenAddress: asset.address,
                schemaName: isWyvernSchemaName(asset.schema) ? asset.schema : undefined
            }),
            accountAddress: account,
            startAmount: Number.parseFloat(amount),
            endAmount: endingPriceChecked && endingAmount ? Number.parseFloat(endingAmount) : undefined,
            listingTime: futureTimeChecked ? (0,getUnixTime/* default */.Z)(scheduleTime) : undefined,
            expirationTime: endingPriceChecked ? (0,getUnixTime/* default */.Z)(expirationTime) : undefined,
            buyerAddress: privacyChecked ? buyerAddress : undefined
        });
    }, [
        asset,
        token,
        amount,
        account,
        endingAmount,
        scheduleTime,
        expirationTime,
        buyerAddress,
        endingPriceChecked,
        futureTimeChecked,
        privacyChecked,
        opensea, 
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setScheduleTime(new Date());
        setExpirationTime(new Date());
        setBuyerAddress('');
        setEndingAmount('');
    }, [
        open
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: amount,
                        balance: balance.value ?? '0',
                        token: token.value,
                        disableNativeToken: !paymentTokens.some(address/* isNativeTokenAddress */.qw),
                        onAmountChange: setAmount,
                        onTokenChange: (x)=>setAddress(x.address)
                        ,
                        TokenAmountPanelProps: {
                            label: endingPriceChecked ? t('plugin_collectible_starting_price') : t('plugin_collectible_price'),
                            TextFieldProps: {
                                classes: {
                                    root: classes.panel
                                },
                                helperText: endingPriceChecked ? t('plugin_collectible_set_initial_price') : t('plugin_collectible_ending_price_tip')
                            }
                        },
                        FungibleTokenListProps: {
                            selectedTokens: token.value ? [
                                token.value.address
                            ] : [],
                            tokens: paymentTokens,
                            whitelist: paymentTokens.map((x)=>x.address
                            )
                        }
                    }),
                    endingPriceChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: endingAmount,
                        balance: balance.value ?? '0',
                        onAmountChange: setEndingAmount,
                        token: token.value,
                        onTokenChange: (x)=>setAddress(x.address)
                        ,
                        TokenAmountPanelProps: {
                            label: t('plugin_collectible_ending_price'),
                            disableToken: true,
                            disableBalance: true,
                            TextFieldProps: {
                                classes: {
                                    root: classes.panel
                                },
                                helperText: t('plugin_collectible_ending_price_less_than_staring')
                            }
                        }
                    }) : null,
                    futureTimeChecked || endingPriceChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                        label: endingPriceChecked ? t('plugin_collectible_expiration_date') : t('plugin_collectible_schedule_date'),
                        date: endingPriceChecked ? expirationTime : scheduleTime,
                        min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T23:59"),
                        onChange: endingPriceChecked ? setExpirationTime : setScheduleTime,
                        className: classes.panel,
                        helperText: endingPriceChecked ? t('plugin_collectible_auto_cancel_tip') : t('plugin_collectible_schedule_future_date'),
                        fullWidth: true
                    }) : null,
                    privacyChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.panel,
                        fullWidth: true,
                        value: buyerAddress,
                        variant: "outlined",
                        label: t('plugin_collectible_buyer_address'),
                        placeholder: t('plugin_collectible_buyer_address_placeholder'),
                        helperText: t('plugin_collectible_buyer_address_helper_text'),
                        onChange: (e)=>setBuyerAddress(e.target.value)
                        ,
                        InputLabelProps: {
                            shrink: true
                        }
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            padding: 2,
                            paddingBottom: 0
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: endingPriceChecked,
                                    onChange: (ev)=>setEndingPriceChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_include_ending_price')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_include_ending_price_helper')
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: futureTimeChecked,
                                    onChange: (ev)=>setFutureTimeChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_schedule_for_a_future_time')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_schedule_for_a_future_time_helper')
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: privacyChecked,
                                    onChange: (ev)=>setPrivacyChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_privacy')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_privacy_helper')
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        className: classes.button,
                        variant: "contained",
                        disabled: !!validationMessage,
                        fullWidth: true,
                        size: "large",
                        init: validationMessage || t('plugin_collectible_post_listing'),
                        waiting: t('plugin_collectible_post_listing'),
                        complete: t('plugin_collectible_done'),
                        failed: t('plugin_collectible_retry'),
                        executor: onPostListing,
                        completeOnClick: onClose,
                        failedOnClick: "use executor"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OpenSea/ListingByHighestBidCard.tsx


















const ListingByHighestBidCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function ListingByHighestBidCard(props) {
    const { asset , paymentTokens , open , onClose  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = ListingByHighestBidCard_useStyles();
    const { amount , token , balance , setAmount , setAddress  } = (0,entry_web3/* useFungibleTokenWatched */.g3)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, (0,head/* default */.Z)(paymentTokens)?.address);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const opensea = useOpenSea(chainId);
    const [reservePrice, setReservePrice] = (0,react.useState)('');
    const [expirationDateTime, setExpirationDateTime] = (0,react.useState)(new Date());
    const validationMessage = (0,react.useMemo)(()=>{
        if ((0,src/* isZero */.Fr)(amount || '0')) return t('plugin_collectible_enter_minimum_bid');
        if ((0,src/* isZero */.Fr)(reservePrice || '0')) return t('plugin_collectible_enter_reserve_price');
        if ((0,src/* isLessThan */.FI)(reservePrice, amount)) return t('plugin_collectible_invalid_reserve_price');
        if (expirationDateTime.getTime() - Date.now() <= 0) return t('plugin_collectible_invalid_expiration_date');
        return '';
    }, [
        amount,
        reservePrice,
        expirationDateTime
    ]);
    const onPostListing = (0,react.useCallback)(async ()=>{
        if (!opensea) return;
        if (!asset?.tokenId || !asset.address) return;
        if (token?.value?.schema !== types/* SchemaType.ERC20 */.XQ.ERC20) return;
        await opensea.createSellOrder({
            asset: toAsset({
                tokenId: asset.tokenId,
                tokenAddress: asset.address,
                schemaName: isWyvernSchemaName(asset.schema) ? asset.schema : undefined
            }),
            accountAddress: account,
            startAmount: Number.parseFloat(amount),
            expirationTime: (0,getUnixTime/* default */.Z)(expirationDateTime),
            englishAuctionReservePrice: Number.parseFloat(reservePrice),
            waitForHighestBid: true,
            paymentTokenAddress: token.value.address
        });
    }, [
        asset,
        token,
        amount,
        account,
        reservePrice,
        expirationDateTime,
        opensea
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setReservePrice('');
        setExpirationDateTime(new Date());
    }, [
        open
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: amount,
                        balance: balance.value ?? '0',
                        token: token.value,
                        disableNativeToken: !paymentTokens.some(address/* isNativeTokenAddress */.qw),
                        onAmountChange: setAmount,
                        onTokenChange: (x)=>setAddress(x.address)
                        ,
                        TokenAmountPanelProps: {
                            classes: {
                                root: classes.panel
                            },
                            label: t('plugin_collectible_minimum_bid'),
                            TextFieldProps: {
                                helperText: t('plugin_collectible_set_starting_bid_price')
                            }
                        },
                        FungibleTokenListProps: {
                            selectedTokens: token.value ? [
                                token.value.address
                            ] : [],
                            tokens: paymentTokens,
                            whitelist: paymentTokens.map((x)=>x.address
                            )
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: reservePrice,
                        balance: balance.value ?? '0',
                        onAmountChange: setReservePrice,
                        token: token.value,
                        onTokenChange: (x)=>setAddress(x.address)
                        ,
                        TokenAmountPanelProps: {
                            classes: {
                                root: classes.panel
                            },
                            disableToken: true,
                            disableBalance: true,
                            label: t('plugin_collectible_reserve_price'),
                            TextFieldProps: {
                                helperText: t('plugin_collectible_reserve_price_helper')
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                        label: t('plugin_collectible_expiration_date'),
                        date: expirationDateTime,
                        min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T23:59"),
                        onChange: setExpirationDateTime,
                        className: classes.panel,
                        helperText: t('plugin_collectible_auction_auto_end'),
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        className: classes.button,
                        variant: "contained",
                        disabled: !!validationMessage,
                        fullWidth: true,
                        size: "large",
                        init: validationMessage || t('plugin_collectible_post_listing'),
                        waiting: t('plugin_collectible_post_listing'),
                        complete: t('plugin_collectible_done'),
                        failed: t('plugin_collectible_retry'),
                        executor: onPostListing,
                        completeOnClick: onClose,
                        failedOnClick: "use executor"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OpenSea/PostListingDialog.tsx








const PostListingDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0,
            borderRadius: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    };
});
function PostListingDialog(props) {
    const { asset , open , onClose  } = props;
    const paymentTokens = (asset?.auction?.offerTokens ?? asset?.payment_tokens) ?? [];
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = PostListingDialog_useStyles();
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            label: t('plugin_collectible_set_price')
        }, "price"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            label: t('plugin_collectible_highest_bid')
        }, "bid"), 
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_collectible_post_listing'),
        open: open,
        onClose: onClose,
        maxWidth: "md",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
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
                tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingByPriceCard, {
                    asset: asset,
                    paymentTokens: paymentTokens,
                    open: open,
                    onClose: onClose
                }) : null,
                tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingByHighestBidCard, {
                    asset: asset,
                    paymentTokens: paymentTokens,
                    open: open,
                    onClose: onClose
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(66309);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OpenSea/CheckoutOrder.tsx









const CheckoutOrder_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        itemInfo: {
            display: 'flex',
            alignItems: 'center'
        },
        texts: {
            marginLeft: theme.spacing(1)
        }
    })
);
function CheckoutOrder({ order  }) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = CheckoutOrder_useStyles();
    const { token , asset , provider  } = CollectibleState.useContainer();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    if (!asset?.value || !token || !order) return null;
    const price = order.currentPrice ?? asset.value.price?.[src/* CurrencyType.USD */.V2.USD];
    const getPrice = ()=>{
        const decimals = order.paymentTokenContract?.decimals;
        if (!decimals) return 'error';
        return (0,src/* formatBalance */.az)(price, decimals) ?? 'error';
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            children: t('plugin_collectible_item')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            align: "right",
                            children: t('plugin_collectible_subtotal')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.itemInfo,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                            height: 80,
                                            width: 80,
                                            src: asset.value?.metadata?.imageURL ?? ''
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.texts,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    children: asset.value.collection?.name ?? ''
                                                }),
                                                token.contractAddress && token.tokenId ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                    color: "primary",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    href: resolveAssetLinkOnCurrentProvider(chainId, token.contractAddress, token.tokenId, provider),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        children: asset.value.metadata?.name ?? ''
                                                    })
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    children: asset.value.metadata?.name ?? ''
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        getPrice(),
                                        " ",
                                        asset.value.metadata?.symbol
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_collectible_total')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        getPrice(),
                                        " ",
                                        asset.value.metadata?.symbol
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OpenSea/CheckoutDialog.tsx
















const CheckoutDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        }
    };
});
function CheckoutDialog(props) {
    const { asset , order , open , onClose  } = props;
    const isVerified = asset?.collection?.verified ?? false;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = CheckoutDialog_useStyles();
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const opensea = useOpenSea(chainId);
    const [unreviewedChecked, setUnreviewedChecked] = (0,react.useState)(false);
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const [insufficientBalance, setInsufficientBalance] = (0,react.useState)(false);
    const { token , balance  } = (0,entry_web3/* useFungibleTokenWatched */.g3)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, order?.paymentToken ?? '');
    const onCheckout = (0,react.useCallback)(async ()=>{
        if (!asset?.tokenId || !asset.address) return;
        if (!order || !opensea) return;
        await opensea.fulfillOrder({
            order,
            accountAddress: account,
            recipientAddress: account
        });
    }, [
        account,
        asset,
        order,
        opensea
    ]);
    const { setDialog: openSwapDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const onConvertClick = (0,react.useCallback)(()=>{
        if (!token?.value) return;
        openSwapDialog({
            open: true,
            traderProps: {
                coin: {
                    id: token.value.address,
                    name: token.value.name ?? '',
                    symbol: token.value.symbol ?? '',
                    contract_address: token.value.address,
                    decimals: token.value.decimals
                }
            }
        });
    }, [
        token.value,
        openSwapDialog
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if ((0,src/* isGreaterThan */.T1)(order?.basePrice ?? 0, balance.value ?? 0)) {
            setInsufficientBalance(true);
            return t('plugin_collectible_insufficient_balance');
        }
        if (!isVerified && !unreviewedChecked) return t('plugin_collectible_ensure_unreviewed_item');
        if (!isVerified && !ToS_Checked) return t('plugin_collectible_check_tos_document');
        return '';
    }, [
        isVerified,
        unreviewedChecked,
        ToS_Checked,
        order
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_collectible_checkout'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    marginBottom: 2
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnreviewedWarning, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    padding: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckoutOrder, {}),
                                    isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                className: classes.label,
                                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                    color: "primary",
                                                    checked: unreviewedChecked,
                                                    onChange: (ev)=>setUnreviewedChecked(ev.target.checked)
                                                }),
                                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body2",
                                                    children: t('plugin_collectible_approved_tips')
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                className: classes.label,
                                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                    color: "primary",
                                                    checked: ToS_Checked,
                                                    onChange: (ev)=>setToS_Checked(ev.target.checked)
                                                }),
                                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                                        i18nKey: "plugin_collectible_agree_terms",
                                                        components: {
                                                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                                color: "primary",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                href: "https://opensea.io/tos"
                                                            })
                                                        }
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                                        className: classes.button,
                                        variant: "contained",
                                        disabled: !!validationMessage,
                                        size: "large",
                                        init: validationMessage || t('plugin_collectible_checkout'),
                                        waiting: t('plugin_collectible_checkout'),
                                        complete: t('plugin_collectible_done'),
                                        failed: t('plugin_collectible_retry'),
                                        executor: onCheckout,
                                        completeOnClick: onClose,
                                        failedOnClick: "use executor"
                                    }),
                                    insufficientBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        className: classes.button,
                                        variant: "contained",
                                        size: "large",
                                        onClick: onConvertClick,
                                        children: t('plugin_collectible_get_more_token', {
                                            token: token.value?.symbol
                                        })
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useAssetOrder.ts







function useAssetOrder(address, tokenId) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const SDK = useOpenSea(isOpenSeaSupportedChainId(chainId) ? chainId : undefined);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return;
        const asset = await SDK?.api.getAsset({
            tokenAddress: address,
            tokenId
        });
        const getPrice = (order)=>{
            const _order = order;
            return (0,web3_providers_src/* getOrderUnitPrice */.bb)(_order.current_bounty, _order.payment_token_contract?.decimals, _order.quantity) ?? src/* ZERO */.xE;
        };
        const sellOrders = asset?.sellOrders ?? [];
        return (0,head/* default */.Z)(sellOrders.sort((a, b)=>getPrice(a).toNumber() - getPrice(b).toNumber()
        ));
    }, [
        address,
        tokenId,
        SDK
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OpenSea/ActionBar.tsx















const ActionBar_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: 'calc(100% - 24px)',
            gap: 8
        },
        button: {
            flex: 1,
            backgroundColor: theme.palette.maskColor?.dark,
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            },
            color: 'white'
        }
    };
});
function ActionBar(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = ActionBar_useStyles();
    const { asset  } = CollectibleState.useContainer();
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: assetOrder  } = useAssetOrder(asset.value?.address, asset.value?.tokenId);
    const { open: openCheckoutDialog , onOpen: onOpenCheckoutDialog , onClose: onCloseCheckoutDialog ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const { open: openOfferDialog , onOpen: onOpenOfferDialog , onClose: onCloseOfferDialog  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const { open: openListingDialog , onOpen: onOpenListingDialog , onClose: onCloseListingDialog ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    if (!asset.value) return null;
    const isOwner = (0,src/* isSameAddress */.Wr)(asset.value.owner?.address, account);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        sx: {
            padding: 1.5
        },
        display: "flex",
        justifyContent: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ChainBoundary/* ChainBoundary */.s, {
            expectedPluginID: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
            expectedChainId: types/* ChainId.Mainnet */.a_.Mainnet,
            renderInTimeline: true,
            children: [
                !isOwner && asset.value.auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    color: "primary",
                    variant: "contained",
                    onClick: onOpenCheckoutDialog,
                    children: t('plugin_collectible_buy_now')
                }) : null,
                !isOwner && asset.value.auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    color: "primary",
                    fullWidth: true,
                    variant: "contained",
                    onClick: onOpenOfferDialog,
                    children: t('plugin_collectible_place_bid')
                }) : null,
                !isOwner && !asset.value.auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    color: "primary",
                    variant: "contained",
                    onClick: onOpenOfferDialog,
                    children: t('plugin_collectible_make_offer')
                }) : null,
                isOwner ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    color: "primary",
                    variant: "contained",
                    onClick: onOpenListingDialog,
                    children: t('plugin_collectible_sell')
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckoutDialog, {
                    asset: asset.value,
                    order: assetOrder,
                    open: openCheckoutDialog,
                    onClose: onCloseCheckoutDialog
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PostListingDialog, {
                    asset: asset.value,
                    open: openListingDialog,
                    onClose: onCloseListingDialog
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MakeOfferDialog, {
                    asset: asset.value,
                    order: assetOrder,
                    open: openOfferDialog,
                    onClose: onCloseOfferDialog
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/FootnoteMenu.tsx
var FootnoteMenu = __webpack_require__(59852);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(8461);
;// CONCATENATED MODULE: ./src/resources/OpenSeaIcon.tsx


const svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 116 116",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "58",
            height: "58",
            rx: "29",
            transform: "matrix(-2 0 0 2 116 0)",
            fill: "#3291E9"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "58",
            height: "58",
            rx: "29",
            transform: "matrix(-2 0 0 2 116 0)",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".5",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M95.638 14.104c-2.25 2.361-5.024 4.67-8.356 6.89-11.163 7.437-20.071 18.062-20.32 39.29-.275 23.512 10.363 35.218 22.969 45.972C80.748 112.411 69.709 116 57.835 116 25.893 116 0 90.032 0 58S25.893 0 57.835 0C72.286 0 85.5 5.316 95.638 14.104z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M47.819 7.052c-1.125 1.18-2.512 2.335-4.178 3.445-5.582 3.719-10.035 9.031-10.16 19.645-.137 11.756 5.182 17.609 11.484 22.986A28.725 28.725 0 0128.918 58C12.947 58 0 45.016 0 29S12.947 0 28.917 0A28.757 28.757 0 0147.82 7.052z",
                    fill: "url(#paint1_linear)",
                    transform: "scale(2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".5",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M72.303 1.83c-1.548 4.205-4.233 8.651-8.207 13.24-8.789 10.147-14.558 22.765-9.178 43.292C61.72 84.313 78.152 91.65 95.669 99.47l1.775.793C87.094 110.021 73.16 116 57.834 116 25.895 116 0 90.032 0 58S25.893 0 57.835 0c4.996 0 9.844.635 14.468 1.83z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M36.151.915c-.773 2.103-2.116 4.326-4.103 6.62-4.394 5.073-7.28 11.383-4.589 21.646 3.401 12.976 11.617 16.644 20.375 20.554l.888.397C43.547 55.01 36.58 58 28.917 58 12.947 58 0 45.016 0 29S12.947 0 28.917 0c2.498 0 4.922.318 7.234.915z",
                    fill: "url(#paint2_linear)",
                    transform: "scale(2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".3",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M4.093 36.527c.185.757.39 1.526.614 2.304 7.44 25.773 28.19 31.897 50.307 38.425 15.465 4.565 31.598 9.327 44.321 21.14C88.825 109.255 74.115 116 57.835 116 25.893 116 0 90.032 0 58a57.99 57.99 0 014.093-21.473z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M2.047 0c.092.379.194.763.306 1.152C6.074 14.038 16.448 17.1 27.507 20.365c7.732 2.282 15.8 4.663 22.16 10.57-5.255 5.428-12.61 8.802-20.75 8.802-15.97 0-28.917-12.984-28.917-29C0 6.944.726 3.32 2.047 0z",
                    fill: "url(#paint3_linear)",
                    transform: "matrix(2 0 0 2 0 36.527)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M57.75 100.213c23.059 0 41.751-18.746 41.751-41.87s-18.692-41.87-41.75-41.87C34.692 16.473 16 35.22 16 58.343s18.692 41.87 41.75 41.87z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M60.003 37.547v2.62l-2.825-.38v-2.24c.422.246.89.38 1.401.38.512 0 1.001-.134 1.424-.38zM59.91 65.21v6.496h-2.824v-6.518a23.97 23.97 0 012.825.022z",
            fill: "#24D7D0"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M61.312 35.105a2.837 2.837 0 01-1.402 2.464 2.74 2.74 0 01-1.4.38c-.513 0-1.002-.134-1.402-.38a2.837 2.837 0 01-1.402-2.464c0-1.568 1.268-2.845 2.825-2.845 1.557 0 2.78 1.277 2.78 2.845z",
            fill: "#14869F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M51.394 50.695v12.32c0 .18-.133.314-.311.314H39.717a.32.32 0 01-.29-.448l5.784-14.919a.317.317 0 01.422-.179l5.583 2.62c.112.046.178.18.178.292z",
            fill: "#1EB6D1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M62.96 54.458c-.733 1.725-1.779 3.338-2.957 4.816a27.71 27.71 0 01-2.825 3.002 38.68 38.68 0 01-3.533 2.939c-.15.11-.388.043-.293-.117.556-1.187 1.646-4.435 1.446-11.446-.223-7.594-2.87-12.522-3.893-14.134-.156-.224.044-.515.311-.493l5.962.784 2.825.38 4.092.538c.048 0 .074.042.088.088.215.695 1.832 6.447-1.222 13.643z",
            fill: "#6BD9FC"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M71.925 56.474c0 10.035-3.537 10.998-4.426 11.715-.134.09-.312.09-.423-.022-.6-.583-2.18-2.307-5.672-2.8a29.777 29.777 0 00-1.401-.157 30.173 30.173 0 00-2.825-.045 32.245 32.245 0 00-3.492.359c-.194.032-.181-.229-.023-.345.37-.274.742-.563 1.112-.865.134-.112.267-.202.4-.314a34.937 34.937 0 002.003-1.747c.133-.112.267-.246.378-.358.111-.112.222-.224.356-.336.049-.05.098-.092.143-.135.073-.07.134-.141.202-.215.067-.074.135-.156.205-.227.099-.1.197-.204.295-.32.111-.111.2-.223.311-.335.112-.112.223-.246.312-.358.2-.224.4-.47.6-.717.09-.135.2-.247.29-.381.089-.134.2-.246.289-.38.089-.135.178-.247.267-.382.089-.134.178-.246.267-.38.044-.068.11-.157.155-.224.067-.09.111-.18.178-.27.134-.2.267-.402.378-.604.045-.09.112-.18.156-.269.092-.185.213-.356.303-.542l.008-.018c.178-.313.334-.65.49-.963.067-.134.133-.269.178-.403 3.093-7.29 1.394-13.097 1.194-13.688-.007-.022.007-.043.023-.027a.049.049 0 00.01.008c.731.377 7.76 6.576 7.76 15.745z",
            fill: "#1EB6D1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M84.648 66.15a.762.762 0 01-.422.673c-3.134 1.515-5.088 4.623-6.238 7.909a22.912 22.912 0 01-1.984 4.225c-.52.865-1.516 1.412-2.433.992l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.423.627a4.016 4.016 0 01-3.292 0l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.423.627a4.016 4.016 0 01-3.292 0l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.424.627a4.016 4.016 0 01-3.292 0l-1.423-.627a4.016 4.016 0 00-3.292 0l-1.313.582c-.622.275-1.326-.036-1.695-.608C35.277 75.766 34 71.602 34 67.136c0-.313 0-.627.022-.94a.32.32 0 01.312-.314H46.39c.178 0 .311.135.311.314v1.545c0 2.173 1.757 3.943 3.915 3.943h17.127c1.891 0 3.448-1.344 3.826-3.114.022-.134.156-.246.311-.246 3.807 0 7.564-.86 10.992-2.514l.686-.331a.727.727 0 01.746.064c.196.14.344.368.344.608z",
            fill: "#14869F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(58 58 -545.75 88.5729 272.875 -44.286)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: ".048",
                            stopColor: "#1F66A9"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: ".685",
                            stopColor: "#3291E9"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint1_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(-71.836 -7.39043 -1.87601 160.271 46.343 -3.102)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#E9A332",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint2_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(-71.1866 12.0393 40.6313 155.011 24.39 -29.46)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#E9A332",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint3_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(88.4485 40.5135 17.9137 -131.803 -26.388 98.367)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#23DC7D"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        })
                    ]
                })
            ]
        })
    ]
});
function OpenSeaIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: svg
    });
}

;// CONCATENATED MODULE: ./src/resources/RaribleIcon.tsx


const RaribleIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "40",
            height: "40",
            rx: "8",
            fill: "#FEDA03"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M27.6 19.854c1.26-.328 2.382-1.27 2.382-3.165 0-3.155-2.679-3.889-6.111-3.889H10.2v14.206h5.754v-4.821h6.825c1.052 0 1.667.417 1.667 1.448v3.373H30.2v-3.551c0-1.935-1.091-3.155-2.6-3.601zm-4.722-1.498h-6.924v-1.39h6.924c.755 0 1.21.1 1.21.695s-.456.695-1.21.695z",
            fill: "#000"
        })
    ]
});
function RaribleIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: RaribleIcon_svg
    });
}

;// CONCATENATED MODULE: ./src/resources/ZoraIcon.tsx


const ZoraIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 55 55",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0.943359 13.2631C0.943359 20.5774 6.88707 26.5261 14.1951 26.5261C21.5032 26.5261 27.4469 20.5774 27.4469 13.2631C27.4402 5.94887 21.4964 0.00012207 14.1951 0.00012207C6.88707 0.00012207 0.943359 5.94887 0.943359 13.2631Z",
            fill: "url(#paint0_radial)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0.943359 13.2631C0.943359 20.5774 6.88707 26.5261 14.1951 26.5261C21.5032 26.5261 27.4469 20.5774 27.4469 13.2631C27.4402 5.94887 21.4964 0.00012207 14.1951 0.00012207C6.88707 0.00012207 0.943359 5.94887 0.943359 13.2631Z",
            fill: "url(#paint1_radial)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0.943359 13.2631C0.943359 20.5774 6.88707 26.5261 14.1951 26.5261C21.5032 26.5261 27.4469 20.5774 27.4469 13.2631C27.4402 5.94887 21.4964 0.00012207 14.1951 0.00012207C6.88707 0.00012207 0.943359 5.94887 0.943359 13.2631Z",
            fill: "url(#paint2_radial)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint0_radial",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(18.1597 6.46118) scale(19.9547 19.9716)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.00520833",
                            stopColor: "white"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.458333",
                            stopColor: "#B7D8C8"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.65625",
                            stopColor: "#6D9487"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#4B4C3C"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint1_radial",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(18.1597 6.46118) scale(19.9547 19.9716)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.00520833",
                            stopColor: "white"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.458333",
                            stopColor: "#B5B4C6"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.65625",
                            stopColor: "#9B8F8F"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#4B4C3C"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint2_radial",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(18.1597 6.46118) scale(19.9547 19.9716)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.15625",
                            stopColor: "#DCC8D0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.302083",
                            stopColor: "#78C8CF"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.427083",
                            stopColor: "#4D959E"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.557292",
                            stopColor: "#305EB9"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.796875",
                            stopColor: "#311F12"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0.90625",
                            stopColor: "#684232"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#2D1C13"
                        })
                    ]
                })
            ]
        })
    ]
});
function ZoraIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: ZoraIcon_svg
    });
}

;// CONCATENATED MODULE: ./src/resources/RSS3Icon.tsx


const RSS3Icon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    viewBox: "0 0 604.24 150.65",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M423.88,89c-8.5-12.62-29-19.34-43.67-23.3-1.71-.45-3.49-.9-5.38-1.37l-.15,0c-7.9-2-16.87-4.21-23.85-8-8-4.38-11.92-10.06-11.92-17.36a17.71,17.71,0,0,1,.33-3.53l0-.21a16.26,16.26,0,0,1,.42-1.59,1.72,1.72,0,0,1,.07-.21l0-.08a20.34,20.34,0,0,1,5.06-8c5.93-6,15.39-9.37,26-9.37h.33a55.87,55.87,0,0,1,22.57,5.31,60.82,60.82,0,0,1,18.81,13.34l.13,15.21V50h13.2V4.2H412.66V14.58a.45.45,0,0,1-.21.38c-.12,0-.28-.08-.36-.16A67.34,67.34,0,0,0,393.7,4.89a71,71,0,0,0-22-3.82c-8.59,0-15.61,1-21.47,2.91a41.28,41.28,0,0,0-13.35,7.43A34.93,34.93,0,0,0,326.81,24a35.85,35.85,0,0,0-3.46,15.18,32.15,32.15,0,0,0,1.15,9.21A34.43,34.43,0,0,0,329,57.72c.17.27.37.53.55.79s.19.25.28.38l.12.16C338.6,71,357.91,76.29,372,80.18l.39.1,3.13.87,3.39.91a138.78,138.78,0,0,1,21.48,7.16,25.31,25.31,0,0,1,9.35,7.09,21.9,21.9,0,0,1,4.59,9.83,21.41,21.41,0,0,1-.79,10.77,27.23,27.23,0,0,1-6.69,10.55A32,32,0,0,1,395.44,134a47.9,47.9,0,0,1-12.66,2.27,64.15,64.15,0,0,1-20.42-2.31c-11.25-3.56-21.52-10.43-28.18-18.82a2.68,2.68,0,0,1-.49-.92l-.13-13.08v-.17h-13.2v47.88h13.21v-14a57.57,57.57,0,0,0,18.84,11.06,78.39,78.39,0,0,0,25.27,4.82h1.07c7.33,0,24.48,0,37.93-11.39a39.23,39.23,0,0,0,9.09-11.48A40.1,40.1,0,0,0,430,114.4a37.43,37.43,0,0,0-.62-13.51A31.07,31.07,0,0,0,423.88,89Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M293.54,89c-8.33-12.56-28.91-19.31-43.67-23.29-1.68-.44-3.42-.87-5.27-1.33-16-3.95-35.92-8.88-36.15-25.45A17.67,17.67,0,0,1,210,31.69a21.5,21.5,0,0,1,4.52-6.4c6-5.92,15.41-9.32,25.94-9.32h.33a55.67,55.67,0,0,1,22.55,5.31,60,60,0,0,1,18.7,13.34l.26,15.21V50h13.2V4.2H282.33V14.58a.47.47,0,0,1-.2.38c-.1,0-.22,0-.37-.16a67.34,67.34,0,0,0-18.39-9.91,71,71,0,0,0-22-3.82c-8.64,0-15.68,1-21.52,2.91a41.2,41.2,0,0,0-13.3,7.43A34.93,34.93,0,0,0,196.48,24,35.85,35.85,0,0,0,193,39.22a32.58,32.58,0,0,0,1.13,9.2,35.23,35.23,0,0,0,4.38,9.3c8.29,12.92,28.57,18.47,43.38,22.53l.35.09,2.94.81,3.1.83.29.08a138.43,138.43,0,0,1,21.48,7.16,25.86,25.86,0,0,1,9.4,7.14,22.2,22.2,0,0,1,4.61,9.92,21.44,21.44,0,0,1-.82,10.78,27.16,27.16,0,0,1-6.73,10.53,31.32,31.32,0,0,1-11.36,6.49,47.29,47.29,0,0,1-12.69,2.22c-.89,0-1.82.06-2.76.06a65.45,65.45,0,0,1-17.83-2.43c-.67-.21-1.35-.44-2-.68l-.1,0c-1.35-.48-2.7-1-4-1.61a60.45,60.45,0,0,1-17.63-11.79l-.26-.25c-.8-.8-1.61-1.65-2.39-2.54l-.6-.69c-.35-.41-.69-.81-1-1.23a2.78,2.78,0,0,1-.48-.91l-.13-13.08v-.17H189.89v47.88h13.34v-14a57.57,57.57,0,0,0,18.84,11.06,78.39,78.39,0,0,0,25.27,4.82h1.07c7.29,0,24.36,0,37.93-11.39a39.23,39.23,0,0,0,9.09-11.48,40,40,0,0,0,4.25-13.38,37.43,37.43,0,0,0-.62-13.51A31.19,31.19,0,0,0,293.54,89Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M158.15,137.47,122.07,82.92a39.73,39.73,0,0,0,17.78-3.45c7.89-4,14.23-9.07,18.12-16.57a43.7,43.7,0,0,0,4.78-20,41.62,41.62,0,0,0-12-29.21C142.41,6.13,132,2.45,118.91,2.45H49V17.54H63.84V137.65H47.7v12.62H94.55V137.65H79.46V83.14h25.25l35.35,54.51H124v12.62h50.42V137.65H158.65A.67.67,0,0,1,158.15,137.47ZM79.46,16.86h38.67c11.88,0,21,4.72,25.62,12.83a26.83,26.83,0,0,1-.42,26.47c-4.74,8-10.34,12.42-22.76,12.42H79.46Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M550.46,106.56c0-18.11-9.15-31.19-24.33-36.8C539,63,544.68,51.88,544.68,40.43,544.68,14,522.51,0,493.6,0,477.82.12,461,5.37,449.51,21.5l12,7.83C467.94,20.68,477.1,14,493.6,14c21,0,35.9,8.53,35.9,24.77C529.5,54.33,514.56,63,499.26,63H478.42v15h22.05c19.51,0,34.93,10.51,34.45,28.39-1.09,19-17.83,29.21-39.75,29.21-14.1,0-29.76-4.44-41.45-16.94l-.6-.23-10.24,11.21.48.12c14.7,13.79,32.17,20.92,51.81,20.92C525.41,150.62,550.46,134.26,550.46,106.56Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            y: "68.48",
            width: "37.98",
            height: "15.51",
            fill: "#0b70ff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "566.26",
            y: "68.48",
            width: "37.98",
            height: "15.51",
            fill: "#0b70ff"
        })
    ]
});
function RSS3Icon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: RSS3Icon_svg
    });
}

;// CONCATENATED MODULE: ./src/resources/DebankIcon.tsx


const DebankIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    viewBox: "0 0 280 280",
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
        id: "debank-icon",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                id: "Rectangle",
                fill: "#FE815F",
                x: "0",
                y: "0"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                id: "Group",
                transform: "translate(64.000000, 54.000000)",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M151.193168,120.312866 C151.193168,148.790135 127.761499,171.875522 98.8570713,171.875522 L2.20006371e-12,171.875522 L2.20006371e-12,137.500418 L98.8570713,137.500418 C108.491881,137.500418 116.302437,129.805289 116.302437,120.312866 C116.302437,110.820443 108.491881,103.125313 98.8570713,103.125313 L63.9663403,103.125313 L63.9663403,68.750209 L98.8570713,68.750209 C108.491881,68.750209 116.302437,61.0550797 116.302437,51.5626567 C116.302437,42.0702337 108.491881,34.3751045 98.8570713,34.3751045 L2.20006371e-12,34.3751045 L2.20006371e-12,6.58674097e-11 L98.8570713,6.58674097e-11 C127.761499,6.58674097e-11 151.193168,23.0853878 151.193168,51.5626567 C151.193168,64.7687888 146.154012,76.8153563 137.866767,85.9377612 C146.154012,95.0601662 151.193168,107.106734 151.193168,120.312866 Z",
                        id: "Path",
                        fill: "#FFFFFF",
                        opacity: "0.800000012"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M1.15287181e-13,137.500418 L84.9080189,137.500418 C66.8724097,158.373784 38.1575538,171.875522 5.81512184,171.875522 C3.86301572,171.875522 1.92412492,171.826335 1.15287181e-13,171.729309 L1.15287181e-13,137.500418 L1.15287181e-13,137.500418 Z M102.694694,103.125313 L69.7814621,103.125313 L69.7814621,68.750209 L102.694694,68.750209 C103.991458,74.303678 104.672193,80.0516117 104.672193,85.9377612 C104.672193,91.8239107 103.991458,97.5718445 102.694694,103.125313 Z M84.9080189,34.3751045 L6.26148185e-12,34.3751045 L6.26148185e-12,0.146213381 C1.92412492,0.0491870968 3.86301572,0 5.81512184,0 C38.1575538,0 66.8724097,13.5017383 84.9080189,34.3751045 L84.9080189,34.3751045 Z",
                        id: "Shape",
                        fill: "#000000",
                        fillRule: "nonzero",
                        opacity: "0.119999997"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M2.00791841e-12,6.59442678e-11 C48.1740467,6.59442678e-11 87.2268276,38.4756463 87.2268276,85.9377612 C87.2268276,133.399876 48.1740467,171.875522 2.00791841e-12,171.875522 L2.00791841e-12,137.500418 C28.904428,137.500418 52.3360966,114.41503 52.3360966,85.9377612 C52.3360966,57.4604923 28.904428,34.3751045 2.00791841e-12,34.3751045 L2.00791841e-12,6.59442678e-11 Z",
                        id: "Path",
                        fill: "#FFFFFF",
                        fillRule: "nonzero"
                    })
                ]
            })
        ]
    })
});
function DebankIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: DebankIcon_svg
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleProviderIcon.tsx








const CollectibleProviderIcon_useStyles = (0,entry/* makeStyles */.ZL)()({
    opensea: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    rarible: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    NFTScan: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    }
});
const NFTScanIcon = new URL(/* asset import */ __webpack_require__(60693), __webpack_require__.b).toString();
const ZerionIcon = new URL(/* asset import */ __webpack_require__(18510), __webpack_require__.b).toString();
function CollectibleProviderIcon(props) {
    const { classes  } = CollectibleProviderIcon_useStyles();
    switch(props.provider){
        case src/* SourceType.NFTScan */.PO.NFTScan:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: NFTScanIcon,
                className: classes.NFTScan
            });
        case src/* SourceType.Zerion */.PO.Zerion:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: ZerionIcon,
                className: classes.NFTScan
            });
        case src/* SourceType.OpenSea */.PO.OpenSea:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenSeaIcon, {
                classes: {
                    root: classes.opensea
                },
                viewBox: "0 0 16 16"
            });
        case src/* SourceType.Rarible */.PO.Rarible:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(RaribleIcon, {
                classes: {
                    root: classes.rarible
                },
                viewBox: "0 0 16 16"
            });
        case src/* SourceType.Zora */.PO.Zora:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ZoraIcon, {
                classes: {
                    root: classes.rarible
                },
                viewBox: "0 0 16 16"
            });
        case src/* SourceType.RSS3 */.PO.RSS3:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Icon, {
                classes: {
                    root: classes.rarible
                },
                viewBox: "0 0 16 16"
            });
        case src/* SourceType.DeBank */.PO.DeBank:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DebankIcon, {
                classes: {
                    root: classes.rarible
                },
                viewBox: "0 0 16 16"
            });
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findIndex.js
var findIndex = __webpack_require__(72636);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Collectible.tsx





























const Collectible_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            padding: 0
        },
        content: {
            width: '100%',
            height: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            overflow: 'auto',
            maxHeight: 350,
            borderRadius: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        footer: {
            marginTop: -1,
            zIndex: 1,
            position: 'relative',
            borderTop: `solid 1px ${theme.palette.divider}`,
            justifyContent: 'space-between'
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset',
            whiteSpace: 'nowrap'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5),
            maxHeight: '3.5rem',
            overflow: 'hidden',
            wordBreak: 'break-word'
        },
        description: {
            fontSize: 12,
            '& > strong': {
                color: theme.palette.text.primary,
                fontWeight: 300
            }
        },
        footMenu: {
            color: theme.palette.text.secondary,
            fontSize: 10,
            display: 'flex',
            alignItems: 'center'
        },
        footName: {
            marginLeft: theme.spacing(0.5)
        },
        countdown: {
            fontSize: 12,
            borderRadius: 8,
            display: 'block',
            white: '100%',
            color: theme.palette.common.white,
            backgroundColor: '#eb5757',
            padding: theme.spacing(0.5, 2)
        },
        loading: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        markdown: {
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            webkitBoxOrient: 'vertical',
            webkitLineClamp: '3'
        }
    };
});
const supportedProvider = [
    src/* SourceType.OpenSea */.PO.OpenSea,
    src/* SourceType.Rarible */.PO.Rarible,
    src/* SourceType.NFTScan */.PO.NFTScan
];
function Collectible(props) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = Collectible_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { token , asset , provider , setProvider , tabIndex: tabIndex1 , setTabIndex  } = CollectibleState.useContainer();
    // #region sync with settings
    const collectibleProviderOptions = (0,esm/* getEnumAsArray */.Yl)(src/* SourceType */.PO).filter((x)=>supportedProvider.includes(x.value)
    );
    const onDataProviderChange = (0,react.useCallback)((option)=>{
        setProvider(option.value);
    }, []);
    // #endregion
    // #region provider switcher
    const CollectibleProviderSwitcher = (0,src_utils/* useSwitcher */.Ei)(provider, setProvider, supportedProvider, src/* resolveSourceName */.Vk, true);
    // #endregion
    if (!asset.value || !token) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                color: entry/* MaskColorVar.textPluginColor */.ZN.textPluginColor,
                sx: {
                    marginTop: 8,
                    marginBottom: 8
                },
                children: [
                    "Failed to load your collectible on ",
                    (0,src/* resolveSourceName */.Vk)(provider),
                    "."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                alignItems: "center",
                sx: {
                    padding: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            flex: 1,
                            padding: 1
                        },
                        children: [
                            " ",
                            CollectibleProviderSwitcher
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1,
                            padding: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            fullWidth: true,
                            onClick: ()=>asset.retry()
                            ,
                            sx: {
                                marginTop: 1,
                                backgroundColor: entry/* MaskColorVar.textPluginColor */.ZN.textPluginColor,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: entry/* MaskColorVar.textPluginColor */.ZN.textPluginColor
                                }
                            },
                            children: "Refresh"
                        })
                    })
                ]
            })
        ]
    });
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_article')
        }, "article"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_details')
        }, "details"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_offers')
        }, "offers"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_listing')
        }, "listing"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_history')
        }, "history"), 
    ];
    const renderTab = (tabIndex)=>{
        const tabMap = {
            [types_CollectibleTab.ARTICLE]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticleTab, {}),
            [types_CollectibleTab.TOKEN]: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTab, {}),
            [types_CollectibleTab.OFFER]: /*#__PURE__*/ (0,jsx_runtime.jsx)(OfferTab, {}),
            [types_CollectibleTab.LISTING]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingTab, {}),
            [types_CollectibleTab.HISTORY]: /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTab, {})
        };
        return tabMap[tabIndex] || null;
    };
    const _asset = asset.value;
    const endDate = _asset.auction?.endAt;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleCard, {
                classes: {
                    root: classes.root
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkingAvatar, {
                            href: _asset.link ?? '',
                            title: (_asset.owner?.nickname ?? _asset.owner?.address) ?? '',
                            src: ((_asset.collection?.iconURL ?? _asset.creator?.avatarURL) ?? _asset.owner?.avatarURL) ?? ''
                        }),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    color: "primary",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: resolveAssetLinkOnCurrentProvider(chainId, token.contractAddress, token.tokenId, provider),
                                    children: _asset.metadata?.name ?? ''
                                }) : _asset.metadata?.name ?? '',
                                _asset.collection?.verified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifiedUser/* default */.Z, {
                                    color: "primary",
                                    fontSize: "small",
                                    sx: {
                                        marginLeft: 0.5
                                    }
                                }) : null
                            ]
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                _asset.metadata?.description ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.subtitle,
                                        component: "div",
                                        variant: "body2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                                            classes: {
                                                root: classes.markdown
                                            },
                                            content: _asset.metadata.description
                                        })
                                    })
                                }) : null,
                                _asset?.price?.[src/* CurrencyType.USD */.V2.USD] ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    sx: {
                                        marginTop: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.description,
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                            i18nKey: "plugin_collectible_description",
                                            values: {
                                                price: _asset?.price[src/* CurrencyType.USD */.V2.USD],
                                                symbol: src/* CurrencyType.USD */.V2.USD
                                            }
                                        })
                                    })
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                className: classes.tabs,
                                indicatorColor: "primary",
                                textColor: "primary",
                                variant: "fullWidth",
                                value: tabIndex1,
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
                                className: classes.body,
                                children: renderTab(tabIndex1)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.footMenu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FootnoteMenu/* FootnoteMenu */.p, {
                                        options: collectibleProviderOptions.map((x)=>({
                                                name: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleProviderIcon, {
                                                            provider: x.value
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: classes.footName,
                                                            children: (0,src/* resolveSourceName */.Vk)(x.value)
                                                        })
                                                    ]
                                                }),
                                                value: x.value
                                            })
                                        ),
                                        selectedIndex: (0,findIndex/* default */.Z)(collectibleProviderOptions, (x)=>x.value === provider
                                        ),
                                        onChange: onDataProviderChange
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {})
                                ]
                            })
                        ]
                    })
                ]
            }),
            endDate && (0,isValid/* default */.Z)(endDate) && (0,isAfter/* default */.Z)(endDate, Date.now()) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.countdown,
                    children: t('plugin_collectible_sale_end', {
                        time: (0,format/* default */.Z)(endDate, 'yyyy-MM-dd HH:mm:ss')
                    })
                })
            }),
            provider === src/* SourceType.OpenSea */.PO.OpenSea ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {}) : null
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/PostInspector.tsx



function PostInspector(props) {
    const token = props.payload;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleState.Provider, {
        initialState: {
            chainId: token.chain_id,
            tokenId: token.token_id,
            contractAddress: token.address
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {})
    });
}

// EXTERNAL MODULE: ./src/plugins/Collectible/base.ts
var base = __webpack_require__(1854);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 2 modules
var CollectibleList = __webpack_require__(89190);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/NFTPage.tsx









const NFTPage_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative'
        },
        text: {
            paddingTop: 36,
            paddingBottom: 36,
            '& > p': {
                color: (0,entry/* getMaskColor */.nb)(theme).textPrimary
            }
        },
        note: {
            padding: `0 ${theme.spacing(1)}`,
            textAlign: 'right'
        },
        icon: {
            color: (0,entry/* getMaskColor */.nb)(theme).textPrimary
        },
        iconContainer: {
            display: 'inherit'
        },
        tipList: {
            listStyleType: 'decimal',
            paddingLeft: 16
        },
        button: {
            border: `1px solid ${theme.palette.text.primary} !important`,
            color: `${theme.palette.text.primary} !important`,
            borderRadius: 9999,
            background: 'transparent',
            '&:hover': {
                background: 'rgba(15, 20, 25, 0.1)'
            }
        }
    })
);
function NFTPage({ socialAddressList  }) {
    const { classes  } = NFTPage_useStyles();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [selectedAddress, setSelectedAddress] = (0,react.useState)((0,head/* default */.Z)(socialAddressList));
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const onClose = ()=>setAnchorEl(null)
    ;
    const onSelect = (option)=>{
        setSelectedAddress(option);
        onClose();
    };
    if (!selectedAddress) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootMenu */.dy, {
                open: !!anchorEl,
                onClose: onClose,
                anchorEl: anchorEl,
                PaperProps: {
                    style: {
                        maxHeight: 192
                    }
                },
                children: (0,uniqBy/* default */.Z)(socialAddressList ?? shared_base_src/* EMPTY_LIST */.rP, (x)=>x.address.toLowerCase()
                ).map((x)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                        value: x.address,
                        onClick: ()=>onSelect(x)
                        ,
                        children: x.type === src/* SocialAddressType.ADDRESS */.bN.ADDRESS ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ReversedAddress */.il, {
                            address: x.address,
                            pluginId: x.networkSupporterPluginID
                        }) : x.label
                    }, x.address);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList/* CollectionList */.G2, {
                addressName: selectedAddress,
                onSelectAddress: onOpen
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/index.tsx












const sns = {
    ...base/* base */.u,
    init (signal) {},
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = (0,uniq/* default */.Z)(links).find(checkUrl);
        const asset = getAssetInfoFromURL(link);
        (0,entry_content_script/* usePluginWrapper */.fI)(!!asset);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: asset
        }) : null;
    },
    DecryptedInspector: function Component(props) {
        const collectibleUrl = getRelevantUrl((0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message, {
            linkAsText: true
        }).unwrapOr(''));
        const asset = getAssetInfoFromURL(collectibleUrl);
        (0,entry_content_script/* usePluginWrapper */.fI)(!!asset);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: asset
        }) : null;
    },
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_nfts`,
            label: 'NFTs',
            priority: 1,
            UI: {
                TabContent: NFTPage
            },
            Utils: {
                shouldDisplay: (identity, socialAddressList)=>{
                    return !!socialAddressList?.length;
                },
                sorter: (a, z)=>{
                    if (a.type === src/* SocialAddressType.ENS */.bN.ENS) return -1;
                    if (z.type === src/* SocialAddressType.ENS */.bN.ENS) return 1;
                    if (a.type === src/* SocialAddressType.UNS */.bN.UNS) return -1;
                    if (z.type === src/* SocialAddressType.UNS */.bN.UNS) return 1;
                    if (a.type === src/* SocialAddressType.DNS */.bN.DNS) return -1;
                    if (z.type === src/* SocialAddressType.DNS */.bN.DNS) return 1;
                    if (a.type === src/* SocialAddressType.RSS3 */.bN.RSS3) return -1;
                    if (z.type === src/* SocialAddressType.RSS3 */.bN.RSS3) return 1;
                    if (a.type === src/* SocialAddressType.ADDRESS */.bN.ADDRESS) return -1;
                    if (z.type === src/* SocialAddressType.ADDRESS */.bN.ADDRESS) return 1;
                    if (a.type === src/* SocialAddressType.GUN */.bN.GUN) return -1;
                    if (z.type === src/* SocialAddressType.GUN */.bN.GUN) return 1;
                    if (a.type === src/* SocialAddressType.THE_GRAPH */.bN.THE_GRAPH) return -1;
                    if (z.type === src/* SocialAddressType.THE_GRAPH */.bN.THE_GRAPH) return 1;
                    return 0;
                }
            }
        }, 
    ],
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base.ID */.u.ID,
            category: 'dapp',
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_collectibles_description"
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_collectibles_name"
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectiblesIcon, {}),
            marketListSortingPriority: 7,
            tutorialLink: 'https://realmasknetwork.notion.site/c388746f11774ecfa17914c900d3ed97'
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 59852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FootnoteMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11087);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28257);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21784);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93455);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        link: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        title: {
            fontSize: 10,
            color: theme.palette.text.secondary
        }
    })
);
function FootnoteMenu(props) {
    const { children , options , selectedIndex =-1 , onChange  } = props;
    const { classes  } = useStyles();
    const onSelect = (option)=>{
        onChange?.(option);
    };
    const [menu, openMenu] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useMenu */ .H9)(options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            disabled: x.disabled,
            selected: selectedIndex === i,
            onClick: ()=>onSelect(x)
            ,
            children: x.name
        }, x.value)
    ), false, {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.link,
                color: "inherit",
                underline: "none",
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: classes.title,
                        variant: "subtitle2",
                        children: options[selectedIndex]?.name
                    }),
                    children
                ]
            }),
            menu
        ]
    });
}


/***/ }),

/***/ 38329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45374);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(444), __webpack_require__.e(1851), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(6943)]).then(__webpack_require__.bind(__webpack_require__, 20145))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 13286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ formatElapsed)
/* harmony export */ });
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88278);

function formatElapsed(from) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = Date.now() - from;
    if (elapsed < msPerMinute) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_seconds_ago', {
        seconds: Math.round(elapsed / 1000)
    });
    if (elapsed < msPerHour) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_minutes_ago', {
        minutes: Math.round(elapsed / msPerMinute)
    });
    if (elapsed < msPerDay) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_hours_ago', {
        hours: Math.round(elapsed / msPerHour)
    });
    if (elapsed < msPerMonth) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_days_ago', {
        days: Math.round(elapsed / msPerDay)
    });
    if (elapsed < msPerYear) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_months_ago', {
        months: Math.round(elapsed / msPerMonth)
    });
    return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_years_ago', {
        years: Math.round(elapsed / msPerYear)
    });
}


/***/ }),

/***/ 36756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DateTimePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48591);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57753);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    datetime: {
        '&::-webkit-calendar-picker-indicator': {
            marginLeft: 0,
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(76048), __webpack_require__.b)})`
        }
    },
    inputLabel: {
        left: 8,
        top: 8
    }
});
function DateTimePanel(props) {
    const { label , date: date1 , onChange , min , max , inputProps , ...rest } = props;
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        label: `${label} ${GMT >= 0 ? `(UTC +${GMT})` : `(UTC ${GMT})`}`,
        value: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(date1, "yyyy-MM-dd'T'HH:mm"),
        onChange: (e)=>{
            const date = new Date(e.currentTarget.value);
            onChange(date);
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                root: classes.inputLabel
            }
        },
        inputProps: {
            className: classes.datetime,
            ...inputProps,
            min,
            max
        },
        type: "datetime-local"
    });
}


/***/ }),

/***/ 95924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body || null);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/100|0) == 2,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),

/***/ 57078:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports =  true && exports;

	// Detect free variable `module`
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return utf8;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key, hasOwnProperty, object; }

}(this));


/***/ }),

/***/ 12948:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
(function(module) {
    'use strict';

    module.exports.is_uri = is_iri;
    module.exports.is_http_uri = is_http_iri;
    module.exports.is_https_uri = is_https_iri;
    module.exports.is_web_uri = is_web_iri;
    // Create aliases
    module.exports.isUri = is_iri;
    module.exports.isHttpUri = is_http_iri;
    module.exports.isHttpsUri = is_https_iri;
    module.exports.isWebUri = is_web_iri;


    // private function
    // internal URI spitter method - direct from RFC 3986
    var splitUri = function(uri) {
        var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
        return splitted;
    };

    function is_iri(value) {
        if (!value) {
            return;
        }

        // check for illegal characters
        if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return;

        // check for hex escapes that aren't complete
        if (/%[^0-9a-f]/i.test(value)) return;
        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;

        var splitted = [];
        var scheme = '';
        var authority = '';
        var path = '';
        var query = '';
        var fragment = '';
        var out = '';

        // from RFC 3986
        splitted = splitUri(value);
        scheme = splitted[1]; 
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];

        // scheme and path are required, though the path can be empty
        if (!(scheme && scheme.length && path.length >= 0)) return;

        // if authority is present, the path must be empty or begin with a /
        if (authority && authority.length) {
            if (!(path.length === 0 || /^\//.test(path))) return;
        } else {
            // if authority is not present, the path must not start with //
            if (/^\/\//.test(path)) return;
        }

        // scheme must begin with a letter, then consist of letters, digits, +, ., or -
        if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))  return;

        // re-assemble the URL per section 5.3 in RFC 3986
        out += scheme + ':';
        if (authority && authority.length) {
            out += '//' + authority;
        }

        out += path;

        if (query && query.length) {
            out += '?' + query;
        }

        if (fragment && fragment.length) {
            out += '#' + fragment;
        }

        return out;
    }

    function is_http_iri(value, allowHttps) {
        if (!is_iri(value)) {
            return;
        }

        var splitted = [];
        var scheme = '';
        var authority = '';
        var path = '';
        var port = '';
        var query = '';
        var fragment = '';
        var out = '';

        // from RFC 3986
        splitted = splitUri(value);
        scheme = splitted[1]; 
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];

        if (!scheme)  return;

        if(allowHttps) {
            if (scheme.toLowerCase() != 'https') return;
        } else {
            if (scheme.toLowerCase() != 'http') return;
        }

        // fully-qualified URIs must have an authority section that is
        // a valid host
        if (!authority) {
            return;
        }

        // enable port component
        if (/:(\d+)$/.test(authority)) {
            port = authority.match(/:(\d+)$/)[0];
            authority = authority.replace(/:\d+$/, '');
        }

        out += scheme + ':';
        out += '//' + authority;
        
        if (port) {
            out += port;
        }
        
        out += path;
        
        if(query && query.length){
            out += '?' + query;
        }

        if(fragment && fragment.length){
            out += '#' + fragment;
        }
        
        return out;
    }

    function is_https_iri(value) {
        return is_http_iri(value, true);
    }

    function is_web_iri(value) {
        return (is_http_iri(value) || is_https_iri(value));
    }

})(module);


/***/ }),

/***/ 60693:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c76767efa44aa6607c7f.png";

/***/ }),

/***/ 18510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f31349a61ca79ee00103.png";

/***/ }),

/***/ 76048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/978bf9587a9f8a073309.png";

/***/ })

}]);