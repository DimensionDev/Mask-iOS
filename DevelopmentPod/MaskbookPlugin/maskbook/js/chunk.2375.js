(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2375],{

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

/***/ 70567:
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
var Web3 = __webpack_require__(10592);
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

/***/ 60843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(21212)


/***/ }),

/***/ 21212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
const utils = __webpack_require__(74677)
const BN = __webpack_require__(28891)

var ABI = function () {
}

// Convert from short to canonical names
// FIXME: optimise or make this nicer?
function elementaryName (name) {
  if (name.startsWith('int[')) {
    return 'int256' + name.slice(3)
  } else if (name === 'int') {
    return 'int256'
  } else if (name.startsWith('uint[')) {
    return 'uint256' + name.slice(4)
  } else if (name === 'uint') {
    return 'uint256'
  } else if (name.startsWith('fixed[')) {
    return 'fixed128x128' + name.slice(5)
  } else if (name === 'fixed') {
    return 'fixed128x128'
  } else if (name.startsWith('ufixed[')) {
    return 'ufixed128x128' + name.slice(6)
  } else if (name === 'ufixed') {
    return 'ufixed128x128'
  }
  return name
}

ABI.eventID = function (name, types) {
  // FIXME: use node.js util.format?
  var sig = name + '(' + types.map(elementaryName).join(',') + ')'
  return utils.sha3(new Buffer(sig))
}

ABI.methodID = function (name, types) {
  return ABI.eventID(name, types).slice(0, 4)
}

// Parse N from type<N>
function parseTypeN (type) {
  return parseInt(/^\D+(\d+)$/.exec(type)[1], 10)
}

// Parse N,M from type<N>x<M>
function parseTypeNxM (type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type)
  return [ parseInt(tmp[1], 10), parseInt(tmp[2], 10) ]
}

// Parse N in type[<N>] where "type" can itself be an array type.
function parseTypeArray (type) {
  var tmp = type.match(/(.*)\[(.*?)\]$/)
  if (tmp) {
    return tmp[2] === '' ? 'dynamic' : parseInt(tmp[2], 10)
  }
  return null
}

function parseNumber (arg) {
  var type = typeof arg
  if (type === 'string') {
    if (utils.isHexPrefixed(arg)) {
      return new BN(utils.stripHexPrefix(arg), 16)
    } else {
      return new BN(arg, 10)
    }
  } else if (type === 'number') {
    return new BN(arg)
  } else if (arg.toArray) {
    // assume this is a BN for the moment, replace with BN.isBN soon
    return arg
  } else {
    throw new Error('Argument is not a number')
  }
}

// someMethod(bytes,uint)
// someMethod(bytes,uint):(boolean)
function parseSignature (sig) {
  var tmp = /^(\w+)\((.+)\)$/.exec(sig)
  if (tmp.length !== 3) {
    throw new Error('Invalid method signature')
  }

  var args = /^(.+)\):\((.+)$/.exec(tmp[2])

  if (args !== null && args.length === 3) {
    return {
      method: tmp[1],
      args: args[1].split(','),
      retargs: args[2].split(',')
    }
  } else {
    return {
      method: tmp[1],
      args: tmp[2].split(',')
    }
  }
}

// Encodes a single item (can be dynamic array)
// @returns: Buffer
function encodeSingle (type, arg) {
  var size, num, ret, i

  if (type === 'address') {
    return encodeSingle('uint160', parseNumber(arg))
  } else if (type === 'bool') {
    return encodeSingle('uint8', arg ? 1 : 0)
  } else if (type === 'string') {
    return encodeSingle('bytes', new Buffer(arg, 'utf8'))
  } else if (isArray(type)) {
    // this part handles fixed-length ([2]) and variable length ([]) arrays
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    if (typeof arg.length === 'undefined') {
      throw new Error('Not an array?')
    }
    size = parseTypeArray(type)
    if (size !== 'dynamic' && size !== 0 && arg.length > size) {
      throw new Error('Elements exceed array size: ' + size)
    }
    ret = []
    type = type.slice(0, type.lastIndexOf('['))
    if (typeof arg === 'string') {
      arg = JSON.parse(arg)
    }
    for (i in arg) {
      ret.push(encodeSingle(type, arg[i]))
    }
    if (size === 'dynamic') {
      var length = encodeSingle('uint256', arg.length)
      ret.unshift(length)
    }
    return Buffer.concat(ret)
  } else if (type === 'bytes') {
    arg = new Buffer(arg)

    ret = Buffer.concat([ encodeSingle('uint256', arg.length), arg ])

    if ((arg.length % 32) !== 0) {
      ret = Buffer.concat([ ret, utils.zeros(32 - (arg.length % 32)) ])
    }

    return ret
  } else if (type.startsWith('bytes')) {
    size = parseTypeN(type)
    if (size < 1 || size > 32) {
      throw new Error('Invalid bytes<N> width: ' + size)
    }

    return utils.setLengthRight(arg, 32)
  } else if (type.startsWith('uint')) {
    size = parseTypeN(type)
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid uint<N> width: ' + size)
    }

    num = parseNumber(arg)
    if (num.bitLength() > size) {
      throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength())
    }

    if (num < 0) {
      throw new Error('Supplied uint is negative')
    }

    return num.toArrayLike(Buffer, 'be', 32)
  } else if (type.startsWith('int')) {
    size = parseTypeN(type)
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid int<N> width: ' + size)
    }

    num = parseNumber(arg)
    if (num.bitLength() > size) {
      throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength())
    }

    return num.toTwos(256).toArrayLike(Buffer, 'be', 32)
  } else if (type.startsWith('ufixed')) {
    size = parseTypeNxM(type)

    num = parseNumber(arg)

    if (num < 0) {
      throw new Error('Supplied ufixed is negative')
    }

    return encodeSingle('uint256', num.mul(new BN(2).pow(new BN(size[1]))))
  } else if (type.startsWith('fixed')) {
    size = parseTypeNxM(type)

    return encodeSingle('int256', parseNumber(arg).mul(new BN(2).pow(new BN(size[1]))))
  }

  throw new Error('Unsupported or invalid type: ' + type)
}

// Decodes a single item (can be dynamic array)
// @returns: array
// FIXME: this method will need a lot of attention at checking limits and validation
function decodeSingle (parsedType, data, offset) {
  if (typeof parsedType === 'string') {
    parsedType = parseType(parsedType)
  }
  var size, num, ret, i

  if (parsedType.name === 'address') {
    return decodeSingle(parsedType.rawType, data, offset).toArrayLike(Buffer, 'be', 20).toString('hex')
  } else if (parsedType.name === 'bool') {
    return decodeSingle(parsedType.rawType, data, offset).toString() === new BN(1).toString()
  } else if (parsedType.name === 'string') {
    var bytes = decodeSingle(parsedType.rawType, data, offset)
    return new Buffer(bytes, 'utf8').toString()
  } else if (parsedType.isArray) {
    // this part handles fixed-length arrays ([2]) and variable length ([]) arrays
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    ret = []
    size = parsedType.size

    if (parsedType.size === 'dynamic') {
      offset = decodeSingle('uint256', data, offset).toNumber()
      size = decodeSingle('uint256', data, offset).toNumber()
      offset = offset + 32
    }
    for (i = 0; i < size; i++) {
      var decoded = decodeSingle(parsedType.subArray, data, offset)
      ret.push(decoded)
      offset += parsedType.subArray.memoryUsage
    }
    return ret
  } else if (parsedType.name === 'bytes') {
    offset = decodeSingle('uint256', data, offset).toNumber()
    size = decodeSingle('uint256', data, offset).toNumber()
    return data.slice(offset + 32, offset + 32 + size)
  } else if (parsedType.name.startsWith('bytes')) {
    return data.slice(offset, offset + parsedType.size)
  } else if (parsedType.name.startsWith('uint')) {
    num = new BN(data.slice(offset, offset + 32), 16, 'be')
    if (num.bitLength() > parsedType.size) {
      throw new Error('Decoded int exceeds width: ' + parsedType.size + ' vs ' + num.bitLength())
    }
    return num
  } else if (parsedType.name.startsWith('int')) {
    num = new BN(data.slice(offset, offset + 32), 16, 'be').fromTwos(256)
    if (num.bitLength() > parsedType.size) {
      throw new Error('Decoded uint exceeds width: ' + parsedType.size + ' vs ' + num.bitLength())
    }

    return num
  } else if (parsedType.name.startsWith('ufixed')) {
    size = new BN(2).pow(new BN(parsedType.size[1]))
    num = decodeSingle('uint256', data, offset)
    if (!num.mod(size).isZero()) {
      throw new Error('Decimals not supported yet')
    }
    return num.div(size)
  } else if (parsedType.name.startsWith('fixed')) {
    size = new BN(2).pow(new BN(parsedType.size[1]))
    num = decodeSingle('int256', data, offset)
    if (!num.mod(size).isZero()) {
      throw new Error('Decimals not supported yet')
    }
    return num.div(size)
  }
  throw new Error('Unsupported or invalid type: ' + parsedType.name)
}

// Parse the given type
// @returns: {} containing the type itself, memory usage and (including size and subArray if applicable)
function parseType (type) {
  var size
  var ret
  if (isArray(type)) {
    size = parseTypeArray(type)
    var subArray = type.slice(0, type.lastIndexOf('['))
    subArray = parseType(subArray)
    ret = {
      isArray: true,
      name: type,
      size: size,
      memoryUsage: size === 'dynamic' ? 32 : subArray.memoryUsage * size,
      subArray: subArray
    }
    return ret
  } else {
    var rawType
    switch (type) {
      case 'address':
        rawType = 'uint160'
        break
      case 'bool':
        rawType = 'uint8'
        break
      case 'string':
        rawType = 'bytes'
        break
    }
    ret = {
      rawType: rawType,
      name: type,
      memoryUsage: 32
    }

    if (type.startsWith('bytes') && type !== 'bytes' || type.startsWith('uint') || type.startsWith('int')) {
      ret.size = parseTypeN(type)
    } else if (type.startsWith('ufixed') || type.startsWith('fixed')) {
      ret.size = parseTypeNxM(type)
    }

    if (type.startsWith('bytes') && type !== 'bytes' && (ret.size < 1 || ret.size > 32)) {
      throw new Error('Invalid bytes<N> width: ' + ret.size)
    }
    if ((type.startsWith('uint') || type.startsWith('int')) && (ret.size % 8 || ret.size < 8 || ret.size > 256)) {
      throw new Error('Invalid int/uint<N> width: ' + ret.size)
    }
    return ret
  }
}

// Is a type dynamic?
function isDynamic (type) {
  // FIXME: handle all types? I don't think anything is missing now
  return (type === 'string') || (type === 'bytes') || (parseTypeArray(type) === 'dynamic')
}

// Is a type an array?
function isArray (type) {
  return type.lastIndexOf(']') === type.length - 1
}

ABI.elementaryName = elementaryName
ABI.encodeSingle = encodeSingle
ABI.isDynamic = isDynamic

// Encode a method/event with arguments
// @types an array of string type names
// @args  an array of the appropriate values
ABI.rawEncode = function (types, values) {
  var output = []
  var data = []

  var headLength = 32 * types.length

  for (var i in types) {
    var type = elementaryName(types[i])
    var value = values[i]
    var cur = encodeSingle(type, value)

    // Use the head/tail method for storing dynamic data
    if (isDynamic(type)) {
      output.push(encodeSingle('uint256', headLength))
      data.push(cur)
      headLength += cur.length
    } else {
      output.push(cur)
    }
  }

  return Buffer.concat(output.concat(data))
}

ABI.rawDecode = function (types, data) {
  var ret = []
  data = new Buffer(data)
  var offset = 0
  for (var i in types) {
    var type = elementaryName(types[i])
    var parsed = parseType(type, data, offset)
    var decoded = decodeSingle(parsed, data, offset)
    offset += parsed.memoryUsage
    ret.push(decoded)
  }
  return ret
}

ABI.simpleEncode = function (method) {
  var args = Array.prototype.slice.call(arguments).slice(1)
  var sig = parseSignature(method)

  // FIXME: validate/convert arguments
  if (args.length !== sig.args.length) {
    throw new Error('Argument count mismatch')
  }

  return Buffer.concat([ ABI.methodID(sig.method, sig.args), ABI.rawEncode(sig.args, args) ])
}

ABI.simpleDecode = function (method, data) {
  var sig = parseSignature(method)

  // FIXME: validate/convert arguments
  if (!sig.retargs) {
    throw new Error('No return values in method')
  }

  return ABI.rawDecode(sig.retargs, data)
}

function stringify (type, value) {
  if (type.startsWith('address') || type.startsWith('bytes')) {
    return '0x' + value.toString('hex')
  } else {
    return value.toString()
  }
}

ABI.stringify = function (types, values) {
  var ret = []

  for (var i in types) {
    var type = types[i]
    var value = values[i]

    // if it is an array type, concat the items
    if (/^[^\[]+\[.*\]$/.test(type)) {
      value = value.map(function (item) {
        return stringify(type, item)
      }).join(', ')
    } else {
      value = stringify(type, value)
    }

    ret.push(value)
  }

  return ret
}

ABI.solidityPack = function (types, values) {
  if (types.length !== values.length) {
    throw new Error('Number of types are not matching the values')
  }

  var size, num
  var ret = []

  for (var i = 0; i < types.length; i++) {
    var type = elementaryName(types[i])
    var value = values[i]

    if (type === 'bytes') {
      ret.push(value)
    } else if (type === 'string') {
      ret.push(new Buffer(value, 'utf8'))
    } else if (type === 'bool') {
      ret.push(new Buffer(value ? '01' : '00', 'hex'))
    } else if (type === 'address') {
      ret.push(utils.setLengthLeft(value, 20))
    } else if (type.startsWith('bytes')) {
      size = parseTypeN(type)
      if (size < 1 || size > 32) {
        throw new Error('Invalid bytes<N> width: ' + size)
      }

      ret.push(utils.setLengthRight(value, size))
    } else if (type.startsWith('uint')) {
      size = parseTypeN(type)
      if ((size % 8) || (size < 8) || (size > 256)) {
        throw new Error('Invalid uint<N> width: ' + size)
      }

      num = parseNumber(value)
      if (num.bitLength() > size) {
        throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength())
      }

      ret.push(num.toArrayLike(Buffer, 'be', size / 8))
    } else if (type.startsWith('int')) {
      size = parseTypeN(type)
      if ((size % 8) || (size < 8) || (size > 256)) {
        throw new Error('Invalid int<N> width: ' + size)
      }

      num = parseNumber(value)
      if (num.bitLength() > size) {
        throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength())
      }

      ret.push(num.toTwos(size).toArrayLike(Buffer, 'be', size / 8))
    } else {
      // FIXME: support all other types
      throw new Error('Unsupported or invalid type: ' + type)
    }
  }

  return Buffer.concat(ret)
}

ABI.soliditySHA3 = function (types, values) {
  return utils.sha3(ABI.solidityPack(types, values))
}

ABI.soliditySHA256 = function (types, values) {
  return utils.sha256(ABI.solidityPack(types, values))
}

ABI.solidityRIPEMD160 = function (types, values) {
  return utils.ripemd160(ABI.solidityPack(types, values), true)
}

// Serpent's users are familiar with this encoding
// - s: string
// - b: bytes
// - b<N>: bytes<N>
// - i: int256
// - a: int256[]

function isNumeric (c) {
  // FIXME: is this correct? Seems to work
  return (c >= '0') && (c <= '9')
}

// For a "documentation" refer to https://github.com/ethereum/serpent/blob/develop/preprocess.cpp
ABI.fromSerpent = function (sig) {
  var ret = []
  for (var i = 0; i < sig.length; i++) {
    var type = sig[i]
    if (type === 's') {
      ret.push('bytes')
    } else if (type === 'b') {
      var tmp = 'bytes'
      var j = i + 1
      while ((j < sig.length) && isNumeric(sig[j])) {
        tmp += sig[j] - '0'
        j++
      }
      i = j - 1
      ret.push(tmp)
    } else if (type === 'i') {
      ret.push('int256')
    } else if (type === 'a') {
      ret.push('int256[]')
    } else {
      throw new Error('Unsupported or invalid type: ' + type)
    }
  }
  return ret
}

ABI.toSerpent = function (types) {
  var ret = []
  for (var i = 0; i < types.length; i++) {
    var type = types[i]
    if (type === 'bytes') {
      ret.push('s')
    } else if (type.startsWith('bytes')) {
      ret.push('b' + parseTypeN(type))
    } else if (type === 'int256') {
      ret.push('i')
    } else if (type === 'int256[]') {
      ret.push('a')
    } else {
      throw new Error('Unsupported or invalid type: ' + type)
    }
  }
  return ret.join('')
}

module.exports = ABI


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

/***/ 89639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YM": () => (/* binding */ resolveOpenSeaAssetEventType),
/* harmony export */   "dp": () => (/* binding */ resolveRaribleAssetEventType),
/* harmony export */   "q0": () => (/* binding */ resolveOpenSeaNetwork),
/* harmony export */   "l0": () => (/* binding */ resolveCollectibleProviderName),
/* harmony export */   "zu": () => (/* binding */ resolveTraitLinkOnOpenSea),
/* harmony export */   "md": () => (/* binding */ resolveAssetLinkOnCurrentProvider),
/* harmony export */   "CC": () => (/* binding */ resolveUserUrlOnCurrentProvider),
/* harmony export */   "TN": () => (/* binding */ resolveAvatarLinkOnCurrentProvider)
/* harmony export */ });
/* unused harmony exports resolveRaribleUserNetwork, resolveLinkOnOpenSea, resolveLinkOnRarible */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35272);
/* harmony import */ var opensea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47906);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11585);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25071);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78287);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53162);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_3__);






function resolveOpenSeaAssetEventType(eventType, fromUserName) {
    switch(eventType){
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .OpenSeaAssetEventType.CREATED */ .ls.CREATED:
            return fromUserName === _constants__WEBPACK_IMPORTED_MODULE_1__/* .NullAddress */ .Cn ? 'Created' : 'List';
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .OpenSeaAssetEventType.SUCCESSFUL */ .ls.SUCCESSFUL:
            return 'Sale';
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .OpenSeaAssetEventType.CANCELLED */ .ls.CANCELLED:
            return 'Cancel';
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .OpenSeaAssetEventType.BID_WITHDRAWN */ .ls.BID_WITHDRAWN:
            return 'Bid Cancel';
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .OpenSeaAssetEventType.BID_ENTERED */ .ls.BID_ENTERED:
            return 'Bid';
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .OpenSeaAssetEventType.TRANSFER */ .ls.TRANSFER:
            return fromUserName === _constants__WEBPACK_IMPORTED_MODULE_1__/* .NullAddress */ .Cn ? 'Created' : 'Transfer';
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .OpenSeaAssetEventType.OFFER_ENTERED */ .ls.OFFER_ENTERED:
            return 'Offer';
        default:
            return eventType;
    }
}
const resolveRaribleAssetEventType = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .RaribleEventType.BUY */ .Gt.BUY]: 'Buy',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .RaribleEventType.OFFER */ .Gt.OFFER]: 'Offer',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .RaribleEventType.ORDER */ .Gt.ORDER]: 'Order',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .RaribleEventType.TRANSFER */ .Gt.TRANSFER]: 'Transfer'
}, lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const resolveOpenSeaNetwork = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet]: opensea_js__WEBPACK_IMPORTED_MODULE_0__/* .Network.Main */ .Zc.Main,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Rinkeby */ .a_.Rinkeby]: opensea_js__WEBPACK_IMPORTED_MODULE_0__/* .Network.Rinkeby */ .Zc.Rinkeby
}, opensea_js__WEBPACK_IMPORTED_MODULE_0__/* .Network.Main */ .Zc.Main);
const resolveCollectibleProviderName = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA]: 'OpenSea',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE]: 'Rarible',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN]: 'NFTScan'
}, (providerType)=>{
    throw new Error(`Unknown provider type: ${providerType}.`);
});
const resolveRaribleUserNetwork = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet]: _constants__WEBPACK_IMPORTED_MODULE_1__/* .RaribleUserURL */ .Zz,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Ropsten */ .a_.Ropsten]: _constants__WEBPACK_IMPORTED_MODULE_1__/* .RaribleRopstenUserURL */ .g5,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Rinkeby */ .a_.Rinkeby]: _constants__WEBPACK_IMPORTED_MODULE_1__/* .RaribleRinkebyUserURL */ .i8
}, _constants__WEBPACK_IMPORTED_MODULE_1__/* .RaribleUserURL */ .Zz);
const resolveLinkOnOpenSea = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet]: _constants__WEBPACK_IMPORTED_MODULE_1__/* .OpenSeaMainnetURL */ .Kl,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Rinkeby */ .a_.Rinkeby]: _constants__WEBPACK_IMPORTED_MODULE_1__/* .OpenSeaTestnetURL */ .Ky
}, _constants__WEBPACK_IMPORTED_MODULE_1__/* .OpenSeaMainnetURL */ .Kl);
const resolveLinkOnRarible = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .createLookupTableResolver */ .F)({
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet]: 'https://rarible.com',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Rinkeby */ .a_.Rinkeby]: 'https://rinkeby.rarible.com',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Ropsten */ .a_.Ropsten]: 'https://ropsten.rarible.com'
}, 'https://rarible.com');
function resolveTraitLinkOnOpenSea(chainId, slug, search, value) {
    if (chainId === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Rinkeby */ .a_.Rinkeby) {
        return `https://testnets.opensea.io/assets/${slug}?search[stringTraits][0][name]=${search}&search[stringTraits][0][values][0]=${value}`;
    }
    return `https://opensea.io/assets/${slug}?search[stringTraits][0][name]=${search}&search[stringTraits][0][values][0]=${value}`;
}
function resolveAssetLinkOnCurrentProvider(chainId, address, id, provider) {
    switch(provider){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnOpenSea(chainId), '/assets/:address/:id', {
                address,
                id
            });
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnRarible(chainId), '/token/:address/:id', {
                address,
                id
            });
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        default:
            return '';
    }
}
function resolveUserUrlOnCurrentProvider(chainId, address, provider, username) {
    switch(provider){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveRaribleUserNetwork(chainId), `/${address}`);
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnOpenSea(chainId), `/${username !== null && username !== void 0 ? username : ''}`);
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        default:
            return '';
    }
}
function resolveAvatarLinkOnCurrentProvider(chainId, asset, provider) {
    switch(provider){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            var _slug;
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnOpenSea(chainId), `/collection/${(_slug = asset.slug) !== null && _slug !== void 0 ? _slug : ''}`);
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            var _token_address;
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnRarible(chainId), `/collection/${(_token_address = asset.token_address) !== null && _token_address !== void 0 ? _token_address : ''}`);
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        default:
            return '';
    }
}


/***/ }),

/***/ 53162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s7": () => (/* binding */ CollectibleTab),
  "ls": () => (/* reexport */ OpenSeaAssetEventType),
  "Gt": () => (/* reexport */ RaribleEventType)
});

// UNUSED EXPORTS: RARIBLE_FEATURES, RaribleProfileType

;// CONCATENATED MODULE: ./src/plugins/Collectible/types/opensea.ts
var OpenSeaAssetEventType;
(function(OpenSeaAssetEventType) {
    OpenSeaAssetEventType["CREATED"] = "CREATED";
    OpenSeaAssetEventType["SUCCESSFUL"] = "SUCCESSFUL";
    OpenSeaAssetEventType["CANCELLED"] = "CANCELLED";
    OpenSeaAssetEventType["OFFER_ENTERED"] = "OFFER_ENTERED";
    OpenSeaAssetEventType["BID_ENTERED"] = "BID_ENTERED";
    OpenSeaAssetEventType["BID_WITHDRAWN"] = "BID_WITHDRAWN";
    OpenSeaAssetEventType["TRANSFER"] = "TRANSFER";
    OpenSeaAssetEventType["APPROVE"] = "APPROVE";
    OpenSeaAssetEventType["COMPOSITION_CREATED"] = "COMPOSITION_CREATED";
    OpenSeaAssetEventType["CUSTOM"] = "CUSTOM";
    OpenSeaAssetEventType["PAYOUT"] = "PAYOUT";
})(OpenSeaAssetEventType || (OpenSeaAssetEventType = {}));

;// CONCATENATED MODULE: ./src/plugins/Collectible/types/rarible.ts
var RARIBLE_FEATURES;
(function(RARIBLE_FEATURES) {
    RARIBLE_FEATURES["APPROVE_FOR_ALL"] = "APPROVE_FOR_ALL";
    RARIBLE_FEATURES["SET_URI_PREFIX"] = "SET_URI_PREFIX";
    RARIBLE_FEATURES["BURN"] = "BURN";
    RARIBLE_FEATURES["MINT_WITH_ADDRESS"] = "MINT_WITH_ADDRESS";
    RARIBLE_FEATURES["SECONDARY_SALE_FEES"] = "SECONDARY_SALE_FEES";
})(RARIBLE_FEATURES || (RARIBLE_FEATURES = {}));
var RaribleProfileType;
(function(RaribleProfileType) {
    RaribleProfileType["USER"] = "USER";
    RaribleProfileType["COLLECTION"] = "COLLECTION";
})(RaribleProfileType || (RaribleProfileType = {}));
var RaribleEventType;
(function(RaribleEventType) {
    RaribleEventType["ORDER"] = 'order';
    RaribleEventType["BUY"] = 'buy';
    RaribleEventType["TRANSFER"] = 'transfer';
    RaribleEventType["OFFER"] = 'offer';
})(RaribleEventType || (RaribleEventType = {}));

;// CONCATENATED MODULE: ./src/plugins/Collectible/types/index.ts


var CollectibleTab;
(function(CollectibleTab) {
    CollectibleTab[CollectibleTab["ARTICLE"] = 0] = "ARTICLE";
    CollectibleTab[CollectibleTab["TOKEN"] = 1] = "TOKEN";
    CollectibleTab[CollectibleTab["OFFER"] = 2] = "OFFER";
    CollectibleTab[CollectibleTab["LISTING"] = 3] = "LISTING";
    CollectibleTab[CollectibleTab["HISTORY"] = 4] = "HISTORY";
})(CollectibleTab || (CollectibleTab = {}));


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


/***/ })

}]);