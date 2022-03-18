"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1077],{

/***/ 23015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "default": () => (/* binding */ $root),
/* harmony export */   "ethereum": () => (/* binding */ ethereum)
/* harmony export */ });
/* harmony import */ var protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6110);
/* harmony import */ var protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0__);
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/


// Common aliases
const $Reader = protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0__.Reader, $Writer = protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0__.Writer, $util = protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0__.util;

// Exported root namespace
const $root = protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0__.roots["default"] || (protobufjs_minimal__WEBPACK_IMPORTED_MODULE_0__.roots["default"] = {});

const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.CreateStoredKeyNewAccountAtPathParam = (function() {

        /**
         * Properties of a CreateStoredKeyNewAccountAtPathParam.
         * @memberof api
         * @interface ICreateStoredKeyNewAccountAtPathParam
         * @property {Uint8Array|null} [StoredKeyData] CreateStoredKeyNewAccountAtPathParam StoredKeyData
         * @property {string|null} [name] CreateStoredKeyNewAccountAtPathParam name
         * @property {api.Coin|null} [coin] CreateStoredKeyNewAccountAtPathParam coin
         * @property {string|null} [derivationPath] CreateStoredKeyNewAccountAtPathParam derivationPath
         * @property {string|null} [password] CreateStoredKeyNewAccountAtPathParam password
         */

        /**
         * Constructs a new CreateStoredKeyNewAccountAtPathParam.
         * @memberof api
         * @classdesc Represents a CreateStoredKeyNewAccountAtPathParam.
         * @implements ICreateStoredKeyNewAccountAtPathParam
         * @constructor
         * @param {api.ICreateStoredKeyNewAccountAtPathParam=} [properties] Properties to set
         */
        function CreateStoredKeyNewAccountAtPathParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateStoredKeyNewAccountAtPathParam StoredKeyData.
         * @member {Uint8Array} StoredKeyData
         * @memberof api.CreateStoredKeyNewAccountAtPathParam
         * @instance
         */
        CreateStoredKeyNewAccountAtPathParam.prototype.StoredKeyData = $util.newBuffer([]);

        /**
         * CreateStoredKeyNewAccountAtPathParam name.
         * @member {string} name
         * @memberof api.CreateStoredKeyNewAccountAtPathParam
         * @instance
         */
        CreateStoredKeyNewAccountAtPathParam.prototype.name = "";

        /**
         * CreateStoredKeyNewAccountAtPathParam coin.
         * @member {api.Coin} coin
         * @memberof api.CreateStoredKeyNewAccountAtPathParam
         * @instance
         */
        CreateStoredKeyNewAccountAtPathParam.prototype.coin = 0;

        /**
         * CreateStoredKeyNewAccountAtPathParam derivationPath.
         * @member {string} derivationPath
         * @memberof api.CreateStoredKeyNewAccountAtPathParam
         * @instance
         */
        CreateStoredKeyNewAccountAtPathParam.prototype.derivationPath = "";

        /**
         * CreateStoredKeyNewAccountAtPathParam password.
         * @member {string} password
         * @memberof api.CreateStoredKeyNewAccountAtPathParam
         * @instance
         */
        CreateStoredKeyNewAccountAtPathParam.prototype.password = "";

        /**
         * Encodes the specified CreateStoredKeyNewAccountAtPathParam message. Does not implicitly {@link api.CreateStoredKeyNewAccountAtPathParam.verify|verify} messages.
         * @function encode
         * @memberof api.CreateStoredKeyNewAccountAtPathParam
         * @static
         * @param {api.ICreateStoredKeyNewAccountAtPathParam} message CreateStoredKeyNewAccountAtPathParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateStoredKeyNewAccountAtPathParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeyData != null && Object.hasOwnProperty.call(message, "StoredKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.StoredKeyData);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.coin);
            if (message.derivationPath != null && Object.hasOwnProperty.call(message, "derivationPath"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.derivationPath);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.password);
            return writer;
        };

        /**
         * Decodes a CreateStoredKeyNewAccountAtPathParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.CreateStoredKeyNewAccountAtPathParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CreateStoredKeyNewAccountAtPathParam} CreateStoredKeyNewAccountAtPathParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateStoredKeyNewAccountAtPathParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CreateStoredKeyNewAccountAtPathParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKeyData = reader.bytes();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.coin = reader.int32();
                    break;
                case 4:
                    message.derivationPath = reader.string();
                    break;
                case 5:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CreateStoredKeyNewAccountAtPathParam;
    })();

    api.CreateStoredKeyNewAccountAtPathResp = (function() {

        /**
         * Properties of a CreateStoredKeyNewAccountAtPathResp.
         * @memberof api
         * @interface ICreateStoredKeyNewAccountAtPathResp
         * @property {api.IStoredKeyAccountInfo|null} [account] CreateStoredKeyNewAccountAtPathResp account
         * @property {api.IStoredKeyInfo|null} [storedKey] CreateStoredKeyNewAccountAtPathResp storedKey
         */

        /**
         * Constructs a new CreateStoredKeyNewAccountAtPathResp.
         * @memberof api
         * @classdesc Represents a CreateStoredKeyNewAccountAtPathResp.
         * @implements ICreateStoredKeyNewAccountAtPathResp
         * @constructor
         * @param {api.ICreateStoredKeyNewAccountAtPathResp=} [properties] Properties to set
         */
        function CreateStoredKeyNewAccountAtPathResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateStoredKeyNewAccountAtPathResp account.
         * @member {api.IStoredKeyAccountInfo|null|undefined} account
         * @memberof api.CreateStoredKeyNewAccountAtPathResp
         * @instance
         */
        CreateStoredKeyNewAccountAtPathResp.prototype.account = null;

        /**
         * CreateStoredKeyNewAccountAtPathResp storedKey.
         * @member {api.IStoredKeyInfo|null|undefined} storedKey
         * @memberof api.CreateStoredKeyNewAccountAtPathResp
         * @instance
         */
        CreateStoredKeyNewAccountAtPathResp.prototype.storedKey = null;

        /**
         * Encodes the specified CreateStoredKeyNewAccountAtPathResp message. Does not implicitly {@link api.CreateStoredKeyNewAccountAtPathResp.verify|verify} messages.
         * @function encode
         * @memberof api.CreateStoredKeyNewAccountAtPathResp
         * @static
         * @param {api.ICreateStoredKeyNewAccountAtPathResp} message CreateStoredKeyNewAccountAtPathResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateStoredKeyNewAccountAtPathResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                $root.api.StoredKeyAccountInfo.encode(message.account, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.storedKey != null && Object.hasOwnProperty.call(message, "storedKey"))
                $root.api.StoredKeyInfo.encode(message.storedKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a CreateStoredKeyNewAccountAtPathResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.CreateStoredKeyNewAccountAtPathResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CreateStoredKeyNewAccountAtPathResp} CreateStoredKeyNewAccountAtPathResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateStoredKeyNewAccountAtPathResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CreateStoredKeyNewAccountAtPathResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = $root.api.StoredKeyAccountInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.storedKey = $root.api.StoredKeyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CreateStoredKeyNewAccountAtPathResp;
    })();

    /**
     * Coin enum.
     * @name api.Coin
     * @enum {number}
     * @property {number} Ethereum=0 Ethereum value
     * @property {number} Polkadot=1 Polkadot value
     * @property {number} Solana=2 Solana value
     */
    api.Coin = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Ethereum"] = 0;
        values[valuesById[1] = "Polkadot"] = 1;
        values[valuesById[2] = "Solana"] = 2;
        return values;
    })();

    /**
     * StoredKeyType enum.
     * @name api.StoredKeyType
     * @enum {number}
     * @property {number} PrivateKey=0 PrivateKey value
     * @property {number} Mnemonic=1 Mnemonic value
     */
    api.StoredKeyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PrivateKey"] = 0;
        values[valuesById[1] = "Mnemonic"] = 1;
        return values;
    })();

    /**
     * StoredKeyImportType enum.
     * @name api.StoredKeyImportType
     * @enum {number}
     * @property {number} PrivateKeyImportType=0 PrivateKeyImportType value
     * @property {number} MnemonicImportType=1 MnemonicImportType value
     * @property {number} KeyStoreJSONImportType=2 KeyStoreJSONImportType value
     */
    api.StoredKeyImportType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PrivateKeyImportType"] = 0;
        values[valuesById[1] = "MnemonicImportType"] = 1;
        values[valuesById[2] = "KeyStoreJSONImportType"] = 2;
        return values;
    })();

    /**
     * StoredKeyExportType enum.
     * @name api.StoredKeyExportType
     * @enum {number}
     * @property {number} PrivateKeyExportType=0 PrivateKeyExportType value
     * @property {number} MnemonicExportType=1 MnemonicExportType value
     * @property {number} KeyStoreJSONExportType=2 KeyStoreJSONExportType value
     */
    api.StoredKeyExportType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PrivateKeyExportType"] = 0;
        values[valuesById[1] = "MnemonicExportType"] = 1;
        values[valuesById[2] = "KeyStoreJSONExportType"] = 2;
        return values;
    })();

    api.StoredKeyInfo = (function() {

        /**
         * Properties of a StoredKeyInfo.
         * @memberof api
         * @interface IStoredKeyInfo
         * @property {string|null} [id] StoredKeyInfo id
         * @property {string|null} [hash] StoredKeyInfo hash
         * @property {api.StoredKeyType|null} [type] StoredKeyInfo type
         * @property {Uint8Array|null} [data] StoredKeyInfo data
         */

        /**
         * Constructs a new StoredKeyInfo.
         * @memberof api
         * @classdesc Represents a StoredKeyInfo.
         * @implements IStoredKeyInfo
         * @constructor
         * @param {api.IStoredKeyInfo=} [properties] Properties to set
         */
        function StoredKeyInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StoredKeyInfo id.
         * @member {string} id
         * @memberof api.StoredKeyInfo
         * @instance
         */
        StoredKeyInfo.prototype.id = "";

        /**
         * StoredKeyInfo hash.
         * @member {string} hash
         * @memberof api.StoredKeyInfo
         * @instance
         */
        StoredKeyInfo.prototype.hash = "";

        /**
         * StoredKeyInfo type.
         * @member {api.StoredKeyType} type
         * @memberof api.StoredKeyInfo
         * @instance
         */
        StoredKeyInfo.prototype.type = 0;

        /**
         * StoredKeyInfo data.
         * @member {Uint8Array} data
         * @memberof api.StoredKeyInfo
         * @instance
         */
        StoredKeyInfo.prototype.data = $util.newBuffer([]);

        /**
         * Encodes the specified StoredKeyInfo message. Does not implicitly {@link api.StoredKeyInfo.verify|verify} messages.
         * @function encode
         * @memberof api.StoredKeyInfo
         * @static
         * @param {api.IStoredKeyInfo} message StoredKeyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoredKeyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.hash);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            return writer;
        };

        /**
         * Decodes a StoredKeyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof api.StoredKeyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.StoredKeyInfo} StoredKeyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoredKeyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.StoredKeyInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.hash = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return StoredKeyInfo;
    })();

    api.StoredKeyAccountInfo = (function() {

        /**
         * Properties of a StoredKeyAccountInfo.
         * @memberof api
         * @interface IStoredKeyAccountInfo
         * @property {string|null} [address] StoredKeyAccountInfo address
         * @property {string|null} [name] StoredKeyAccountInfo name
         * @property {string|null} [derivationPath] StoredKeyAccountInfo derivationPath
         * @property {string|null} [coin] StoredKeyAccountInfo coin
         * @property {string|null} [extendedPublicKey] StoredKeyAccountInfo extendedPublicKey
         */

        /**
         * Constructs a new StoredKeyAccountInfo.
         * @memberof api
         * @classdesc Represents a StoredKeyAccountInfo.
         * @implements IStoredKeyAccountInfo
         * @constructor
         * @param {api.IStoredKeyAccountInfo=} [properties] Properties to set
         */
        function StoredKeyAccountInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StoredKeyAccountInfo address.
         * @member {string} address
         * @memberof api.StoredKeyAccountInfo
         * @instance
         */
        StoredKeyAccountInfo.prototype.address = "";

        /**
         * StoredKeyAccountInfo name.
         * @member {string} name
         * @memberof api.StoredKeyAccountInfo
         * @instance
         */
        StoredKeyAccountInfo.prototype.name = "";

        /**
         * StoredKeyAccountInfo derivationPath.
         * @member {string} derivationPath
         * @memberof api.StoredKeyAccountInfo
         * @instance
         */
        StoredKeyAccountInfo.prototype.derivationPath = "";

        /**
         * StoredKeyAccountInfo coin.
         * @member {string} coin
         * @memberof api.StoredKeyAccountInfo
         * @instance
         */
        StoredKeyAccountInfo.prototype.coin = "";

        /**
         * StoredKeyAccountInfo extendedPublicKey.
         * @member {string} extendedPublicKey
         * @memberof api.StoredKeyAccountInfo
         * @instance
         */
        StoredKeyAccountInfo.prototype.extendedPublicKey = "";

        /**
         * Encodes the specified StoredKeyAccountInfo message. Does not implicitly {@link api.StoredKeyAccountInfo.verify|verify} messages.
         * @function encode
         * @memberof api.StoredKeyAccountInfo
         * @static
         * @param {api.IStoredKeyAccountInfo} message StoredKeyAccountInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoredKeyAccountInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.derivationPath != null && Object.hasOwnProperty.call(message, "derivationPath"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.derivationPath);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.coin);
            if (message.extendedPublicKey != null && Object.hasOwnProperty.call(message, "extendedPublicKey"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.extendedPublicKey);
            return writer;
        };

        /**
         * Decodes a StoredKeyAccountInfo message from the specified reader or buffer.
         * @function decode
         * @memberof api.StoredKeyAccountInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.StoredKeyAccountInfo} StoredKeyAccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoredKeyAccountInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.StoredKeyAccountInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.derivationPath = reader.string();
                    break;
                case 4:
                    message.coin = reader.string();
                    break;
                case 5:
                    message.extendedPublicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return StoredKeyAccountInfo;
    })();

    api.MWRequest = (function() {

        /**
         * Properties of a MWRequest.
         * @memberof api
         * @interface IMWRequest
         * @property {api.ILoadStoredKeyParam|null} [param_load_stored_key] MWRequest param_load_stored_key
         * @property {api.ICreateStoredKeyParam|null} [param_create_stored_key] MWRequest param_create_stored_key
         * @property {api.IImportPrivateStoredKeyParam|null} [param_import_private_key] MWRequest param_import_private_key
         * @property {api.IImportMnemonicStoredKeyParam|null} [param_import_mnemonic] MWRequest param_import_mnemonic
         * @property {api.IImportJSONStoredKeyParam|null} [param_import_json] MWRequest param_import_json
         * @property {api.ICreateStoredKeyNewAccountAtPathParam|null} [param_create_account_of_coin_at_path] MWRequest param_create_account_of_coin_at_path
         * @property {api.IExportKeyStorePrivateKeyParam|null} [param_export_private_key] MWRequest param_export_private_key
         * @property {api.IExportKeyStorePrivateKeyOfPathParam|null} [param_export_private_key_of_path] MWRequest param_export_private_key_of_path
         * @property {api.IExportKeyStoreMnemonicParam|null} [param_export_mnemonic] MWRequest param_export_mnemonic
         * @property {api.IExportKeyStoreJSONOfAddressParam|null} [param_export_key_store_json_of_address] MWRequest param_export_key_store_json_of_address
         * @property {api.IExportKeyStoreJSONOfPathParam|null} [param_export_key_store_json_of_path] MWRequest param_export_key_store_json_of_path
         * @property {api.IUpdateStoredKeyPasswordParam|null} [param_update_key_store_password] MWRequest param_update_key_store_password
         * @property {api.ISignTransactionParam|null} [param_sign_transaction] MWRequest param_sign_transaction
         * @property {api.IGetVersionParam|null} [param_get_version] MWRequest param_get_version
         * @property {api.IValidateParam|null} [param_validation] MWRequest param_validation
         * @property {api.IGetKeyStoreSupportImportTypeParam|null} [param_get_stored_key_import_type] MWRequest param_get_stored_key_import_type
         * @property {api.IGetKeyStoreSupportExportTypeParam|null} [param_get_stored_key_export_type] MWRequest param_get_stored_key_export_type
         * @property {api.IGenerateMnemonicParam|null} [param_generate_mnemonic] MWRequest param_generate_mnemonic
         */

        /**
         * Constructs a new MWRequest.
         * @memberof api
         * @classdesc Represents a MWRequest.
         * @implements IMWRequest
         * @constructor
         * @param {api.IMWRequest=} [properties] Properties to set
         */
        function MWRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MWRequest param_load_stored_key.
         * @member {api.ILoadStoredKeyParam|null|undefined} param_load_stored_key
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_load_stored_key = null;

        /**
         * MWRequest param_create_stored_key.
         * @member {api.ICreateStoredKeyParam|null|undefined} param_create_stored_key
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_create_stored_key = null;

        /**
         * MWRequest param_import_private_key.
         * @member {api.IImportPrivateStoredKeyParam|null|undefined} param_import_private_key
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_import_private_key = null;

        /**
         * MWRequest param_import_mnemonic.
         * @member {api.IImportMnemonicStoredKeyParam|null|undefined} param_import_mnemonic
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_import_mnemonic = null;

        /**
         * MWRequest param_import_json.
         * @member {api.IImportJSONStoredKeyParam|null|undefined} param_import_json
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_import_json = null;

        /**
         * MWRequest param_create_account_of_coin_at_path.
         * @member {api.ICreateStoredKeyNewAccountAtPathParam|null|undefined} param_create_account_of_coin_at_path
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_create_account_of_coin_at_path = null;

        /**
         * MWRequest param_export_private_key.
         * @member {api.IExportKeyStorePrivateKeyParam|null|undefined} param_export_private_key
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_export_private_key = null;

        /**
         * MWRequest param_export_private_key_of_path.
         * @member {api.IExportKeyStorePrivateKeyOfPathParam|null|undefined} param_export_private_key_of_path
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_export_private_key_of_path = null;

        /**
         * MWRequest param_export_mnemonic.
         * @member {api.IExportKeyStoreMnemonicParam|null|undefined} param_export_mnemonic
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_export_mnemonic = null;

        /**
         * MWRequest param_export_key_store_json_of_address.
         * @member {api.IExportKeyStoreJSONOfAddressParam|null|undefined} param_export_key_store_json_of_address
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_export_key_store_json_of_address = null;

        /**
         * MWRequest param_export_key_store_json_of_path.
         * @member {api.IExportKeyStoreJSONOfPathParam|null|undefined} param_export_key_store_json_of_path
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_export_key_store_json_of_path = null;

        /**
         * MWRequest param_update_key_store_password.
         * @member {api.IUpdateStoredKeyPasswordParam|null|undefined} param_update_key_store_password
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_update_key_store_password = null;

        /**
         * MWRequest param_sign_transaction.
         * @member {api.ISignTransactionParam|null|undefined} param_sign_transaction
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_sign_transaction = null;

        /**
         * MWRequest param_get_version.
         * @member {api.IGetVersionParam|null|undefined} param_get_version
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_get_version = null;

        /**
         * MWRequest param_validation.
         * @member {api.IValidateParam|null|undefined} param_validation
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_validation = null;

        /**
         * MWRequest param_get_stored_key_import_type.
         * @member {api.IGetKeyStoreSupportImportTypeParam|null|undefined} param_get_stored_key_import_type
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_get_stored_key_import_type = null;

        /**
         * MWRequest param_get_stored_key_export_type.
         * @member {api.IGetKeyStoreSupportExportTypeParam|null|undefined} param_get_stored_key_export_type
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_get_stored_key_export_type = null;

        /**
         * MWRequest param_generate_mnemonic.
         * @member {api.IGenerateMnemonicParam|null|undefined} param_generate_mnemonic
         * @memberof api.MWRequest
         * @instance
         */
        MWRequest.prototype.param_generate_mnemonic = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * MWRequest request.
         * @member {"param_load_stored_key"|"param_create_stored_key"|"param_import_private_key"|"param_import_mnemonic"|"param_import_json"|"param_create_account_of_coin_at_path"|"param_export_private_key"|"param_export_private_key_of_path"|"param_export_mnemonic"|"param_export_key_store_json_of_address"|"param_export_key_store_json_of_path"|"param_update_key_store_password"|"param_sign_transaction"|"param_get_version"|"param_validation"|"param_get_stored_key_import_type"|"param_get_stored_key_export_type"|"param_generate_mnemonic"|undefined} request
         * @memberof api.MWRequest
         * @instance
         */
        Object.defineProperty(MWRequest.prototype, "request", {
            get: $util.oneOfGetter($oneOfFields = ["param_load_stored_key", "param_create_stored_key", "param_import_private_key", "param_import_mnemonic", "param_import_json", "param_create_account_of_coin_at_path", "param_export_private_key", "param_export_private_key_of_path", "param_export_mnemonic", "param_export_key_store_json_of_address", "param_export_key_store_json_of_path", "param_update_key_store_password", "param_sign_transaction", "param_get_version", "param_validation", "param_get_stored_key_import_type", "param_get_stored_key_export_type", "param_generate_mnemonic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified MWRequest message. Does not implicitly {@link api.MWRequest.verify|verify} messages.
         * @function encode
         * @memberof api.MWRequest
         * @static
         * @param {api.IMWRequest} message MWRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MWRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.param_load_stored_key != null && Object.hasOwnProperty.call(message, "param_load_stored_key"))
                $root.api.LoadStoredKeyParam.encode(message.param_load_stored_key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.param_create_stored_key != null && Object.hasOwnProperty.call(message, "param_create_stored_key"))
                $root.api.CreateStoredKeyParam.encode(message.param_create_stored_key, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.param_import_private_key != null && Object.hasOwnProperty.call(message, "param_import_private_key"))
                $root.api.ImportPrivateStoredKeyParam.encode(message.param_import_private_key, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.param_import_mnemonic != null && Object.hasOwnProperty.call(message, "param_import_mnemonic"))
                $root.api.ImportMnemonicStoredKeyParam.encode(message.param_import_mnemonic, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.param_import_json != null && Object.hasOwnProperty.call(message, "param_import_json"))
                $root.api.ImportJSONStoredKeyParam.encode(message.param_import_json, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.param_create_account_of_coin_at_path != null && Object.hasOwnProperty.call(message, "param_create_account_of_coin_at_path"))
                $root.api.CreateStoredKeyNewAccountAtPathParam.encode(message.param_create_account_of_coin_at_path, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.param_export_private_key != null && Object.hasOwnProperty.call(message, "param_export_private_key"))
                $root.api.ExportKeyStorePrivateKeyParam.encode(message.param_export_private_key, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.param_export_private_key_of_path != null && Object.hasOwnProperty.call(message, "param_export_private_key_of_path"))
                $root.api.ExportKeyStorePrivateKeyOfPathParam.encode(message.param_export_private_key_of_path, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.param_export_mnemonic != null && Object.hasOwnProperty.call(message, "param_export_mnemonic"))
                $root.api.ExportKeyStoreMnemonicParam.encode(message.param_export_mnemonic, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.param_export_key_store_json_of_address != null && Object.hasOwnProperty.call(message, "param_export_key_store_json_of_address"))
                $root.api.ExportKeyStoreJSONOfAddressParam.encode(message.param_export_key_store_json_of_address, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.param_export_key_store_json_of_path != null && Object.hasOwnProperty.call(message, "param_export_key_store_json_of_path"))
                $root.api.ExportKeyStoreJSONOfPathParam.encode(message.param_export_key_store_json_of_path, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.param_update_key_store_password != null && Object.hasOwnProperty.call(message, "param_update_key_store_password"))
                $root.api.UpdateStoredKeyPasswordParam.encode(message.param_update_key_store_password, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.param_sign_transaction != null && Object.hasOwnProperty.call(message, "param_sign_transaction"))
                $root.api.SignTransactionParam.encode(message.param_sign_transaction, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.param_get_version != null && Object.hasOwnProperty.call(message, "param_get_version"))
                $root.api.GetVersionParam.encode(message.param_get_version, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.param_validation != null && Object.hasOwnProperty.call(message, "param_validation"))
                $root.api.ValidateParam.encode(message.param_validation, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.param_get_stored_key_import_type != null && Object.hasOwnProperty.call(message, "param_get_stored_key_import_type"))
                $root.api.GetKeyStoreSupportImportTypeParam.encode(message.param_get_stored_key_import_type, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.param_get_stored_key_export_type != null && Object.hasOwnProperty.call(message, "param_get_stored_key_export_type"))
                $root.api.GetKeyStoreSupportExportTypeParam.encode(message.param_get_stored_key_export_type, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.param_generate_mnemonic != null && Object.hasOwnProperty.call(message, "param_generate_mnemonic"))
                $root.api.GenerateMnemonicParam.encode(message.param_generate_mnemonic, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MWRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.MWRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.MWRequest} MWRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MWRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.MWRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.param_load_stored_key = $root.api.LoadStoredKeyParam.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.param_create_stored_key = $root.api.CreateStoredKeyParam.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.param_import_private_key = $root.api.ImportPrivateStoredKeyParam.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.param_import_mnemonic = $root.api.ImportMnemonicStoredKeyParam.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.param_import_json = $root.api.ImportJSONStoredKeyParam.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.param_create_account_of_coin_at_path = $root.api.CreateStoredKeyNewAccountAtPathParam.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.param_export_private_key = $root.api.ExportKeyStorePrivateKeyParam.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.param_export_private_key_of_path = $root.api.ExportKeyStorePrivateKeyOfPathParam.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.param_export_mnemonic = $root.api.ExportKeyStoreMnemonicParam.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.param_export_key_store_json_of_address = $root.api.ExportKeyStoreJSONOfAddressParam.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.param_export_key_store_json_of_path = $root.api.ExportKeyStoreJSONOfPathParam.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.param_update_key_store_password = $root.api.UpdateStoredKeyPasswordParam.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.param_sign_transaction = $root.api.SignTransactionParam.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.param_get_version = $root.api.GetVersionParam.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.param_validation = $root.api.ValidateParam.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.param_get_stored_key_import_type = $root.api.GetKeyStoreSupportImportTypeParam.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.param_get_stored_key_export_type = $root.api.GetKeyStoreSupportExportTypeParam.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.param_generate_mnemonic = $root.api.GenerateMnemonicParam.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MWRequest;
    })();

    api.MWResponse = (function() {

        /**
         * Properties of a MWResponse.
         * @memberof api
         * @interface IMWResponse
         * @property {api.IMWResponseError|null} [error] MWResponse error
         * @property {api.ILoadStoredKeyResp|null} [resp_load_stored_key] MWResponse resp_load_stored_key
         * @property {api.ICreateStoredKeyResp|null} [resp_create_stored_key] MWResponse resp_create_stored_key
         * @property {api.IImportPrivateStoredKeyResp|null} [resp_import_private_key] MWResponse resp_import_private_key
         * @property {api.IImportMnemonicStoredKeyResp|null} [resp_import_mnemonic] MWResponse resp_import_mnemonic
         * @property {api.IImportJSONStoredKeyResp|null} [resp_import_json] MWResponse resp_import_json
         * @property {api.ICreateStoredKeyNewAccountAtPathResp|null} [resp_create_account_of_coin_at_path] MWResponse resp_create_account_of_coin_at_path
         * @property {api.IExportKeyStorePrivateKeyResp|null} [resp_export_private_key] MWResponse resp_export_private_key
         * @property {api.IExportKeyStoreMnemonicResp|null} [resp_export_mnemonic] MWResponse resp_export_mnemonic
         * @property {api.IExportKeyStoreJSONResp|null} [resp_export_key_store_json] MWResponse resp_export_key_store_json
         * @property {api.IUpdateStoredKeyPasswordResp|null} [resp_update_key_store_password] MWResponse resp_update_key_store_password
         * @property {api.ISignTransactionResp|null} [resp_sign_transaction] MWResponse resp_sign_transaction
         * @property {api.IGetVersionResp|null} [resp_get_version] MWResponse resp_get_version
         * @property {api.IValidateResp|null} [resp_validate] MWResponse resp_validate
         * @property {api.IGetKeyStoreSupportImportTypeResp|null} [resp_get_stored_key_import_type] MWResponse resp_get_stored_key_import_type
         * @property {api.IGetKeyStoreSupportExportTypeResp|null} [resp_get_stored_key_export_type] MWResponse resp_get_stored_key_export_type
         * @property {api.IGenerateMnemonicResp|null} [resp_generate_mnemonic] MWResponse resp_generate_mnemonic
         */

        /**
         * Constructs a new MWResponse.
         * @memberof api
         * @classdesc Represents a MWResponse.
         * @implements IMWResponse
         * @constructor
         * @param {api.IMWResponse=} [properties] Properties to set
         */
        function MWResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MWResponse error.
         * @member {api.IMWResponseError|null|undefined} error
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.error = null;

        /**
         * MWResponse resp_load_stored_key.
         * @member {api.ILoadStoredKeyResp|null|undefined} resp_load_stored_key
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_load_stored_key = null;

        /**
         * MWResponse resp_create_stored_key.
         * @member {api.ICreateStoredKeyResp|null|undefined} resp_create_stored_key
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_create_stored_key = null;

        /**
         * MWResponse resp_import_private_key.
         * @member {api.IImportPrivateStoredKeyResp|null|undefined} resp_import_private_key
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_import_private_key = null;

        /**
         * MWResponse resp_import_mnemonic.
         * @member {api.IImportMnemonicStoredKeyResp|null|undefined} resp_import_mnemonic
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_import_mnemonic = null;

        /**
         * MWResponse resp_import_json.
         * @member {api.IImportJSONStoredKeyResp|null|undefined} resp_import_json
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_import_json = null;

        /**
         * MWResponse resp_create_account_of_coin_at_path.
         * @member {api.ICreateStoredKeyNewAccountAtPathResp|null|undefined} resp_create_account_of_coin_at_path
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_create_account_of_coin_at_path = null;

        /**
         * MWResponse resp_export_private_key.
         * @member {api.IExportKeyStorePrivateKeyResp|null|undefined} resp_export_private_key
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_export_private_key = null;

        /**
         * MWResponse resp_export_mnemonic.
         * @member {api.IExportKeyStoreMnemonicResp|null|undefined} resp_export_mnemonic
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_export_mnemonic = null;

        /**
         * MWResponse resp_export_key_store_json.
         * @member {api.IExportKeyStoreJSONResp|null|undefined} resp_export_key_store_json
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_export_key_store_json = null;

        /**
         * MWResponse resp_update_key_store_password.
         * @member {api.IUpdateStoredKeyPasswordResp|null|undefined} resp_update_key_store_password
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_update_key_store_password = null;

        /**
         * MWResponse resp_sign_transaction.
         * @member {api.ISignTransactionResp|null|undefined} resp_sign_transaction
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_sign_transaction = null;

        /**
         * MWResponse resp_get_version.
         * @member {api.IGetVersionResp|null|undefined} resp_get_version
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_get_version = null;

        /**
         * MWResponse resp_validate.
         * @member {api.IValidateResp|null|undefined} resp_validate
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_validate = null;

        /**
         * MWResponse resp_get_stored_key_import_type.
         * @member {api.IGetKeyStoreSupportImportTypeResp|null|undefined} resp_get_stored_key_import_type
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_get_stored_key_import_type = null;

        /**
         * MWResponse resp_get_stored_key_export_type.
         * @member {api.IGetKeyStoreSupportExportTypeResp|null|undefined} resp_get_stored_key_export_type
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_get_stored_key_export_type = null;

        /**
         * MWResponse resp_generate_mnemonic.
         * @member {api.IGenerateMnemonicResp|null|undefined} resp_generate_mnemonic
         * @memberof api.MWResponse
         * @instance
         */
        MWResponse.prototype.resp_generate_mnemonic = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * MWResponse response.
         * @member {"error"|"resp_load_stored_key"|"resp_create_stored_key"|"resp_import_private_key"|"resp_import_mnemonic"|"resp_import_json"|"resp_create_account_of_coin_at_path"|"resp_export_private_key"|"resp_export_mnemonic"|"resp_export_key_store_json"|"resp_update_key_store_password"|"resp_sign_transaction"|"resp_get_version"|"resp_validate"|"resp_get_stored_key_import_type"|"resp_get_stored_key_export_type"|"resp_generate_mnemonic"|undefined} response
         * @memberof api.MWResponse
         * @instance
         */
        Object.defineProperty(MWResponse.prototype, "response", {
            get: $util.oneOfGetter($oneOfFields = ["error", "resp_load_stored_key", "resp_create_stored_key", "resp_import_private_key", "resp_import_mnemonic", "resp_import_json", "resp_create_account_of_coin_at_path", "resp_export_private_key", "resp_export_mnemonic", "resp_export_key_store_json", "resp_update_key_store_password", "resp_sign_transaction", "resp_get_version", "resp_validate", "resp_get_stored_key_import_type", "resp_get_stored_key_export_type", "resp_generate_mnemonic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified MWResponse message. Does not implicitly {@link api.MWResponse.verify|verify} messages.
         * @function encode
         * @memberof api.MWResponse
         * @static
         * @param {api.IMWResponse} message MWResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MWResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.api.MWResponseError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.resp_load_stored_key != null && Object.hasOwnProperty.call(message, "resp_load_stored_key"))
                $root.api.LoadStoredKeyResp.encode(message.resp_load_stored_key, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.resp_create_stored_key != null && Object.hasOwnProperty.call(message, "resp_create_stored_key"))
                $root.api.CreateStoredKeyResp.encode(message.resp_create_stored_key, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.resp_import_private_key != null && Object.hasOwnProperty.call(message, "resp_import_private_key"))
                $root.api.ImportPrivateStoredKeyResp.encode(message.resp_import_private_key, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.resp_import_mnemonic != null && Object.hasOwnProperty.call(message, "resp_import_mnemonic"))
                $root.api.ImportMnemonicStoredKeyResp.encode(message.resp_import_mnemonic, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.resp_import_json != null && Object.hasOwnProperty.call(message, "resp_import_json"))
                $root.api.ImportJSONStoredKeyResp.encode(message.resp_import_json, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.resp_create_account_of_coin_at_path != null && Object.hasOwnProperty.call(message, "resp_create_account_of_coin_at_path"))
                $root.api.CreateStoredKeyNewAccountAtPathResp.encode(message.resp_create_account_of_coin_at_path, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.resp_export_private_key != null && Object.hasOwnProperty.call(message, "resp_export_private_key"))
                $root.api.ExportKeyStorePrivateKeyResp.encode(message.resp_export_private_key, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.resp_export_mnemonic != null && Object.hasOwnProperty.call(message, "resp_export_mnemonic"))
                $root.api.ExportKeyStoreMnemonicResp.encode(message.resp_export_mnemonic, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.resp_export_key_store_json != null && Object.hasOwnProperty.call(message, "resp_export_key_store_json"))
                $root.api.ExportKeyStoreJSONResp.encode(message.resp_export_key_store_json, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.resp_update_key_store_password != null && Object.hasOwnProperty.call(message, "resp_update_key_store_password"))
                $root.api.UpdateStoredKeyPasswordResp.encode(message.resp_update_key_store_password, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.resp_sign_transaction != null && Object.hasOwnProperty.call(message, "resp_sign_transaction"))
                $root.api.SignTransactionResp.encode(message.resp_sign_transaction, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.resp_get_version != null && Object.hasOwnProperty.call(message, "resp_get_version"))
                $root.api.GetVersionResp.encode(message.resp_get_version, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.resp_validate != null && Object.hasOwnProperty.call(message, "resp_validate"))
                $root.api.ValidateResp.encode(message.resp_validate, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.resp_get_stored_key_import_type != null && Object.hasOwnProperty.call(message, "resp_get_stored_key_import_type"))
                $root.api.GetKeyStoreSupportImportTypeResp.encode(message.resp_get_stored_key_import_type, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.resp_get_stored_key_export_type != null && Object.hasOwnProperty.call(message, "resp_get_stored_key_export_type"))
                $root.api.GetKeyStoreSupportExportTypeResp.encode(message.resp_get_stored_key_export_type, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.resp_generate_mnemonic != null && Object.hasOwnProperty.call(message, "resp_generate_mnemonic"))
                $root.api.GenerateMnemonicResp.encode(message.resp_generate_mnemonic, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MWResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.MWResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.MWResponse} MWResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MWResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.MWResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = $root.api.MWResponseError.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resp_load_stored_key = $root.api.LoadStoredKeyResp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resp_create_stored_key = $root.api.CreateStoredKeyResp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.resp_import_private_key = $root.api.ImportPrivateStoredKeyResp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resp_import_mnemonic = $root.api.ImportMnemonicStoredKeyResp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.resp_import_json = $root.api.ImportJSONStoredKeyResp.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.resp_create_account_of_coin_at_path = $root.api.CreateStoredKeyNewAccountAtPathResp.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.resp_export_private_key = $root.api.ExportKeyStorePrivateKeyResp.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.resp_export_mnemonic = $root.api.ExportKeyStoreMnemonicResp.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.resp_export_key_store_json = $root.api.ExportKeyStoreJSONResp.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.resp_update_key_store_password = $root.api.UpdateStoredKeyPasswordResp.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.resp_sign_transaction = $root.api.SignTransactionResp.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.resp_get_version = $root.api.GetVersionResp.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.resp_validate = $root.api.ValidateResp.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.resp_get_stored_key_import_type = $root.api.GetKeyStoreSupportImportTypeResp.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.resp_get_stored_key_export_type = $root.api.GetKeyStoreSupportExportTypeResp.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.resp_generate_mnemonic = $root.api.GenerateMnemonicResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MWResponse;
    })();

    api.MWResponseError = (function() {

        /**
         * Properties of a MWResponseError.
         * @memberof api
         * @interface IMWResponseError
         * @property {string|null} [errorCode] MWResponseError errorCode
         * @property {string|null} [errorMsg] MWResponseError errorMsg
         */

        /**
         * Constructs a new MWResponseError.
         * @memberof api
         * @classdesc Represents a MWResponseError.
         * @implements IMWResponseError
         * @constructor
         * @param {api.IMWResponseError=} [properties] Properties to set
         */
        function MWResponseError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MWResponseError errorCode.
         * @member {string} errorCode
         * @memberof api.MWResponseError
         * @instance
         */
        MWResponseError.prototype.errorCode = "";

        /**
         * MWResponseError errorMsg.
         * @member {string} errorMsg
         * @memberof api.MWResponseError
         * @instance
         */
        MWResponseError.prototype.errorMsg = "";

        /**
         * Encodes the specified MWResponseError message. Does not implicitly {@link api.MWResponseError.verify|verify} messages.
         * @function encode
         * @memberof api.MWResponseError
         * @static
         * @param {api.IMWResponseError} message MWResponseError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MWResponseError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorCode);
            if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMsg);
            return writer;
        };

        /**
         * Decodes a MWResponseError message from the specified reader or buffer.
         * @function decode
         * @memberof api.MWResponseError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.MWResponseError} MWResponseError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MWResponseError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.MWResponseError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.string();
                    break;
                case 2:
                    message.errorMsg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MWResponseError;
    })();

    api.GetVersionParam = (function() {

        /**
         * Properties of a GetVersionParam.
         * @memberof api
         * @interface IGetVersionParam
         */

        /**
         * Constructs a new GetVersionParam.
         * @memberof api
         * @classdesc Represents a GetVersionParam.
         * @implements IGetVersionParam
         * @constructor
         * @param {api.IGetVersionParam=} [properties] Properties to set
         */
        function GetVersionParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified GetVersionParam message. Does not implicitly {@link api.GetVersionParam.verify|verify} messages.
         * @function encode
         * @memberof api.GetVersionParam
         * @static
         * @param {api.IGetVersionParam} message GetVersionParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVersionParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetVersionParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetVersionParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetVersionParam} GetVersionParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVersionParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetVersionParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetVersionParam;
    })();

    api.GetVersionResp = (function() {

        /**
         * Properties of a GetVersionResp.
         * @memberof api
         * @interface IGetVersionResp
         * @property {string|null} [version] GetVersionResp version
         */

        /**
         * Constructs a new GetVersionResp.
         * @memberof api
         * @classdesc Represents a GetVersionResp.
         * @implements IGetVersionResp
         * @constructor
         * @param {api.IGetVersionResp=} [properties] Properties to set
         */
        function GetVersionResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVersionResp version.
         * @member {string} version
         * @memberof api.GetVersionResp
         * @instance
         */
        GetVersionResp.prototype.version = "";

        /**
         * Encodes the specified GetVersionResp message. Does not implicitly {@link api.GetVersionResp.verify|verify} messages.
         * @function encode
         * @memberof api.GetVersionResp
         * @static
         * @param {api.IGetVersionResp} message GetVersionResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVersionResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            return writer;
        };

        /**
         * Decodes a GetVersionResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetVersionResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetVersionResp} GetVersionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVersionResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetVersionResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetVersionResp;
    })();

    api.GetKeyStoreSupportExportTypeParam = (function() {

        /**
         * Properties of a GetKeyStoreSupportExportTypeParam.
         * @memberof api
         * @interface IGetKeyStoreSupportExportTypeParam
         * @property {api.Coin|null} [coin] GetKeyStoreSupportExportTypeParam coin
         */

        /**
         * Constructs a new GetKeyStoreSupportExportTypeParam.
         * @memberof api
         * @classdesc Represents a GetKeyStoreSupportExportTypeParam.
         * @implements IGetKeyStoreSupportExportTypeParam
         * @constructor
         * @param {api.IGetKeyStoreSupportExportTypeParam=} [properties] Properties to set
         */
        function GetKeyStoreSupportExportTypeParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetKeyStoreSupportExportTypeParam coin.
         * @member {api.Coin} coin
         * @memberof api.GetKeyStoreSupportExportTypeParam
         * @instance
         */
        GetKeyStoreSupportExportTypeParam.prototype.coin = 0;

        /**
         * Encodes the specified GetKeyStoreSupportExportTypeParam message. Does not implicitly {@link api.GetKeyStoreSupportExportTypeParam.verify|verify} messages.
         * @function encode
         * @memberof api.GetKeyStoreSupportExportTypeParam
         * @static
         * @param {api.IGetKeyStoreSupportExportTypeParam} message GetKeyStoreSupportExportTypeParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetKeyStoreSupportExportTypeParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.coin);
            return writer;
        };

        /**
         * Decodes a GetKeyStoreSupportExportTypeParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetKeyStoreSupportExportTypeParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetKeyStoreSupportExportTypeParam} GetKeyStoreSupportExportTypeParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetKeyStoreSupportExportTypeParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetKeyStoreSupportExportTypeParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetKeyStoreSupportExportTypeParam;
    })();

    api.GetKeyStoreSupportExportTypeResp = (function() {

        /**
         * Properties of a GetKeyStoreSupportExportTypeResp.
         * @memberof api
         * @interface IGetKeyStoreSupportExportTypeResp
         * @property {Array.<api.StoredKeyImportType>|null} [type] GetKeyStoreSupportExportTypeResp type
         */

        /**
         * Constructs a new GetKeyStoreSupportExportTypeResp.
         * @memberof api
         * @classdesc Represents a GetKeyStoreSupportExportTypeResp.
         * @implements IGetKeyStoreSupportExportTypeResp
         * @constructor
         * @param {api.IGetKeyStoreSupportExportTypeResp=} [properties] Properties to set
         */
        function GetKeyStoreSupportExportTypeResp(properties) {
            this.type = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetKeyStoreSupportExportTypeResp type.
         * @member {Array.<api.StoredKeyImportType>} type
         * @memberof api.GetKeyStoreSupportExportTypeResp
         * @instance
         */
        GetKeyStoreSupportExportTypeResp.prototype.type = $util.emptyArray;

        /**
         * Encodes the specified GetKeyStoreSupportExportTypeResp message. Does not implicitly {@link api.GetKeyStoreSupportExportTypeResp.verify|verify} messages.
         * @function encode
         * @memberof api.GetKeyStoreSupportExportTypeResp
         * @static
         * @param {api.IGetKeyStoreSupportExportTypeResp} message GetKeyStoreSupportExportTypeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetKeyStoreSupportExportTypeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.type.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.type.length; ++i)
                    writer.int32(message.type[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a GetKeyStoreSupportExportTypeResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetKeyStoreSupportExportTypeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetKeyStoreSupportExportTypeResp} GetKeyStoreSupportExportTypeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetKeyStoreSupportExportTypeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetKeyStoreSupportExportTypeResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.type && message.type.length))
                        message.type = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.type.push(reader.int32());
                    } else
                        message.type.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetKeyStoreSupportExportTypeResp;
    })();

    api.ExportKeyStorePrivateKeyParam = (function() {

        /**
         * Properties of an ExportKeyStorePrivateKeyParam.
         * @memberof api
         * @interface IExportKeyStorePrivateKeyParam
         * @property {Uint8Array|null} [StoredKeyData] ExportKeyStorePrivateKeyParam StoredKeyData
         * @property {string|null} [password] ExportKeyStorePrivateKeyParam password
         * @property {api.Coin|null} [coin] ExportKeyStorePrivateKeyParam coin
         */

        /**
         * Constructs a new ExportKeyStorePrivateKeyParam.
         * @memberof api
         * @classdesc Represents an ExportKeyStorePrivateKeyParam.
         * @implements IExportKeyStorePrivateKeyParam
         * @constructor
         * @param {api.IExportKeyStorePrivateKeyParam=} [properties] Properties to set
         */
        function ExportKeyStorePrivateKeyParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStorePrivateKeyParam StoredKeyData.
         * @member {Uint8Array} StoredKeyData
         * @memberof api.ExportKeyStorePrivateKeyParam
         * @instance
         */
        ExportKeyStorePrivateKeyParam.prototype.StoredKeyData = $util.newBuffer([]);

        /**
         * ExportKeyStorePrivateKeyParam password.
         * @member {string} password
         * @memberof api.ExportKeyStorePrivateKeyParam
         * @instance
         */
        ExportKeyStorePrivateKeyParam.prototype.password = "";

        /**
         * ExportKeyStorePrivateKeyParam coin.
         * @member {api.Coin} coin
         * @memberof api.ExportKeyStorePrivateKeyParam
         * @instance
         */
        ExportKeyStorePrivateKeyParam.prototype.coin = 0;

        /**
         * Encodes the specified ExportKeyStorePrivateKeyParam message. Does not implicitly {@link api.ExportKeyStorePrivateKeyParam.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStorePrivateKeyParam
         * @static
         * @param {api.IExportKeyStorePrivateKeyParam} message ExportKeyStorePrivateKeyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStorePrivateKeyParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeyData != null && Object.hasOwnProperty.call(message, "StoredKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.StoredKeyData);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.coin);
            return writer;
        };

        /**
         * Decodes an ExportKeyStorePrivateKeyParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStorePrivateKeyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStorePrivateKeyParam} ExportKeyStorePrivateKeyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStorePrivateKeyParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStorePrivateKeyParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKeyData = reader.bytes();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStorePrivateKeyParam;
    })();

    api.ExportKeyStorePrivateKeyOfPathParam = (function() {

        /**
         * Properties of an ExportKeyStorePrivateKeyOfPathParam.
         * @memberof api
         * @interface IExportKeyStorePrivateKeyOfPathParam
         * @property {Uint8Array|null} [StoredKeyData] ExportKeyStorePrivateKeyOfPathParam StoredKeyData
         * @property {string|null} [password] ExportKeyStorePrivateKeyOfPathParam password
         * @property {api.Coin|null} [coin] ExportKeyStorePrivateKeyOfPathParam coin
         * @property {string|null} [derivationPath] ExportKeyStorePrivateKeyOfPathParam derivationPath
         */

        /**
         * Constructs a new ExportKeyStorePrivateKeyOfPathParam.
         * @memberof api
         * @classdesc Represents an ExportKeyStorePrivateKeyOfPathParam.
         * @implements IExportKeyStorePrivateKeyOfPathParam
         * @constructor
         * @param {api.IExportKeyStorePrivateKeyOfPathParam=} [properties] Properties to set
         */
        function ExportKeyStorePrivateKeyOfPathParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStorePrivateKeyOfPathParam StoredKeyData.
         * @member {Uint8Array} StoredKeyData
         * @memberof api.ExportKeyStorePrivateKeyOfPathParam
         * @instance
         */
        ExportKeyStorePrivateKeyOfPathParam.prototype.StoredKeyData = $util.newBuffer([]);

        /**
         * ExportKeyStorePrivateKeyOfPathParam password.
         * @member {string} password
         * @memberof api.ExportKeyStorePrivateKeyOfPathParam
         * @instance
         */
        ExportKeyStorePrivateKeyOfPathParam.prototype.password = "";

        /**
         * ExportKeyStorePrivateKeyOfPathParam coin.
         * @member {api.Coin} coin
         * @memberof api.ExportKeyStorePrivateKeyOfPathParam
         * @instance
         */
        ExportKeyStorePrivateKeyOfPathParam.prototype.coin = 0;

        /**
         * ExportKeyStorePrivateKeyOfPathParam derivationPath.
         * @member {string} derivationPath
         * @memberof api.ExportKeyStorePrivateKeyOfPathParam
         * @instance
         */
        ExportKeyStorePrivateKeyOfPathParam.prototype.derivationPath = "";

        /**
         * Encodes the specified ExportKeyStorePrivateKeyOfPathParam message. Does not implicitly {@link api.ExportKeyStorePrivateKeyOfPathParam.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStorePrivateKeyOfPathParam
         * @static
         * @param {api.IExportKeyStorePrivateKeyOfPathParam} message ExportKeyStorePrivateKeyOfPathParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStorePrivateKeyOfPathParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeyData != null && Object.hasOwnProperty.call(message, "StoredKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.StoredKeyData);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.coin);
            if (message.derivationPath != null && Object.hasOwnProperty.call(message, "derivationPath"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.derivationPath);
            return writer;
        };

        /**
         * Decodes an ExportKeyStorePrivateKeyOfPathParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStorePrivateKeyOfPathParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStorePrivateKeyOfPathParam} ExportKeyStorePrivateKeyOfPathParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStorePrivateKeyOfPathParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStorePrivateKeyOfPathParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKeyData = reader.bytes();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.coin = reader.int32();
                    break;
                case 4:
                    message.derivationPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStorePrivateKeyOfPathParam;
    })();

    api.ExportKeyStorePrivateKeyResp = (function() {

        /**
         * Properties of an ExportKeyStorePrivateKeyResp.
         * @memberof api
         * @interface IExportKeyStorePrivateKeyResp
         * @property {string|null} [privateKey] ExportKeyStorePrivateKeyResp privateKey
         */

        /**
         * Constructs a new ExportKeyStorePrivateKeyResp.
         * @memberof api
         * @classdesc Represents an ExportKeyStorePrivateKeyResp.
         * @implements IExportKeyStorePrivateKeyResp
         * @constructor
         * @param {api.IExportKeyStorePrivateKeyResp=} [properties] Properties to set
         */
        function ExportKeyStorePrivateKeyResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStorePrivateKeyResp privateKey.
         * @member {string} privateKey
         * @memberof api.ExportKeyStorePrivateKeyResp
         * @instance
         */
        ExportKeyStorePrivateKeyResp.prototype.privateKey = "";

        /**
         * Encodes the specified ExportKeyStorePrivateKeyResp message. Does not implicitly {@link api.ExportKeyStorePrivateKeyResp.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStorePrivateKeyResp
         * @static
         * @param {api.IExportKeyStorePrivateKeyResp} message ExportKeyStorePrivateKeyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStorePrivateKeyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.privateKey);
            return writer;
        };

        /**
         * Decodes an ExportKeyStorePrivateKeyResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStorePrivateKeyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStorePrivateKeyResp} ExportKeyStorePrivateKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStorePrivateKeyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStorePrivateKeyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.privateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStorePrivateKeyResp;
    })();

    api.ExportKeyStoreMnemonicParam = (function() {

        /**
         * Properties of an ExportKeyStoreMnemonicParam.
         * @memberof api
         * @interface IExportKeyStoreMnemonicParam
         * @property {Uint8Array|null} [StoredKeyData] ExportKeyStoreMnemonicParam StoredKeyData
         * @property {string|null} [password] ExportKeyStoreMnemonicParam password
         */

        /**
         * Constructs a new ExportKeyStoreMnemonicParam.
         * @memberof api
         * @classdesc Represents an ExportKeyStoreMnemonicParam.
         * @implements IExportKeyStoreMnemonicParam
         * @constructor
         * @param {api.IExportKeyStoreMnemonicParam=} [properties] Properties to set
         */
        function ExportKeyStoreMnemonicParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStoreMnemonicParam StoredKeyData.
         * @member {Uint8Array} StoredKeyData
         * @memberof api.ExportKeyStoreMnemonicParam
         * @instance
         */
        ExportKeyStoreMnemonicParam.prototype.StoredKeyData = $util.newBuffer([]);

        /**
         * ExportKeyStoreMnemonicParam password.
         * @member {string} password
         * @memberof api.ExportKeyStoreMnemonicParam
         * @instance
         */
        ExportKeyStoreMnemonicParam.prototype.password = "";

        /**
         * Encodes the specified ExportKeyStoreMnemonicParam message. Does not implicitly {@link api.ExportKeyStoreMnemonicParam.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStoreMnemonicParam
         * @static
         * @param {api.IExportKeyStoreMnemonicParam} message ExportKeyStoreMnemonicParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStoreMnemonicParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeyData != null && Object.hasOwnProperty.call(message, "StoredKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.StoredKeyData);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Decodes an ExportKeyStoreMnemonicParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStoreMnemonicParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStoreMnemonicParam} ExportKeyStoreMnemonicParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStoreMnemonicParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStoreMnemonicParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKeyData = reader.bytes();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStoreMnemonicParam;
    })();

    api.ExportKeyStoreMnemonicResp = (function() {

        /**
         * Properties of an ExportKeyStoreMnemonicResp.
         * @memberof api
         * @interface IExportKeyStoreMnemonicResp
         * @property {string|null} [mnemonic] ExportKeyStoreMnemonicResp mnemonic
         */

        /**
         * Constructs a new ExportKeyStoreMnemonicResp.
         * @memberof api
         * @classdesc Represents an ExportKeyStoreMnemonicResp.
         * @implements IExportKeyStoreMnemonicResp
         * @constructor
         * @param {api.IExportKeyStoreMnemonicResp=} [properties] Properties to set
         */
        function ExportKeyStoreMnemonicResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStoreMnemonicResp mnemonic.
         * @member {string} mnemonic
         * @memberof api.ExportKeyStoreMnemonicResp
         * @instance
         */
        ExportKeyStoreMnemonicResp.prototype.mnemonic = "";

        /**
         * Encodes the specified ExportKeyStoreMnemonicResp message. Does not implicitly {@link api.ExportKeyStoreMnemonicResp.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStoreMnemonicResp
         * @static
         * @param {api.IExportKeyStoreMnemonicResp} message ExportKeyStoreMnemonicResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStoreMnemonicResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mnemonic);
            return writer;
        };

        /**
         * Decodes an ExportKeyStoreMnemonicResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStoreMnemonicResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStoreMnemonicResp} ExportKeyStoreMnemonicResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStoreMnemonicResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStoreMnemonicResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mnemonic = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStoreMnemonicResp;
    })();

    api.ExportKeyStoreJSONOfAddressParam = (function() {

        /**
         * Properties of an ExportKeyStoreJSONOfAddressParam.
         * @memberof api
         * @interface IExportKeyStoreJSONOfAddressParam
         * @property {Uint8Array|null} [StoredKeyData] ExportKeyStoreJSONOfAddressParam StoredKeyData
         * @property {string|null} [password] ExportKeyStoreJSONOfAddressParam password
         * @property {string|null} [newPassword] ExportKeyStoreJSONOfAddressParam newPassword
         * @property {api.Coin|null} [coin] ExportKeyStoreJSONOfAddressParam coin
         * @property {string|null} [address] ExportKeyStoreJSONOfAddressParam address
         */

        /**
         * Constructs a new ExportKeyStoreJSONOfAddressParam.
         * @memberof api
         * @classdesc Represents an ExportKeyStoreJSONOfAddressParam.
         * @implements IExportKeyStoreJSONOfAddressParam
         * @constructor
         * @param {api.IExportKeyStoreJSONOfAddressParam=} [properties] Properties to set
         */
        function ExportKeyStoreJSONOfAddressParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStoreJSONOfAddressParam StoredKeyData.
         * @member {Uint8Array} StoredKeyData
         * @memberof api.ExportKeyStoreJSONOfAddressParam
         * @instance
         */
        ExportKeyStoreJSONOfAddressParam.prototype.StoredKeyData = $util.newBuffer([]);

        /**
         * ExportKeyStoreJSONOfAddressParam password.
         * @member {string} password
         * @memberof api.ExportKeyStoreJSONOfAddressParam
         * @instance
         */
        ExportKeyStoreJSONOfAddressParam.prototype.password = "";

        /**
         * ExportKeyStoreJSONOfAddressParam newPassword.
         * @member {string} newPassword
         * @memberof api.ExportKeyStoreJSONOfAddressParam
         * @instance
         */
        ExportKeyStoreJSONOfAddressParam.prototype.newPassword = "";

        /**
         * ExportKeyStoreJSONOfAddressParam coin.
         * @member {api.Coin} coin
         * @memberof api.ExportKeyStoreJSONOfAddressParam
         * @instance
         */
        ExportKeyStoreJSONOfAddressParam.prototype.coin = 0;

        /**
         * ExportKeyStoreJSONOfAddressParam address.
         * @member {string} address
         * @memberof api.ExportKeyStoreJSONOfAddressParam
         * @instance
         */
        ExportKeyStoreJSONOfAddressParam.prototype.address = "";

        /**
         * Encodes the specified ExportKeyStoreJSONOfAddressParam message. Does not implicitly {@link api.ExportKeyStoreJSONOfAddressParam.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStoreJSONOfAddressParam
         * @static
         * @param {api.IExportKeyStoreJSONOfAddressParam} message ExportKeyStoreJSONOfAddressParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStoreJSONOfAddressParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeyData != null && Object.hasOwnProperty.call(message, "StoredKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.StoredKeyData);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPassword);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.coin);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.address);
            return writer;
        };

        /**
         * Decodes an ExportKeyStoreJSONOfAddressParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStoreJSONOfAddressParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStoreJSONOfAddressParam} ExportKeyStoreJSONOfAddressParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStoreJSONOfAddressParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStoreJSONOfAddressParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKeyData = reader.bytes();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.newPassword = reader.string();
                    break;
                case 4:
                    message.coin = reader.int32();
                    break;
                case 5:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStoreJSONOfAddressParam;
    })();

    api.ExportKeyStoreJSONOfPathParam = (function() {

        /**
         * Properties of an ExportKeyStoreJSONOfPathParam.
         * @memberof api
         * @interface IExportKeyStoreJSONOfPathParam
         * @property {Uint8Array|null} [StoredKeyData] ExportKeyStoreJSONOfPathParam StoredKeyData
         * @property {string|null} [password] ExportKeyStoreJSONOfPathParam password
         * @property {string|null} [newPassword] ExportKeyStoreJSONOfPathParam newPassword
         * @property {api.Coin|null} [coin] ExportKeyStoreJSONOfPathParam coin
         * @property {string|null} [derivationPath] ExportKeyStoreJSONOfPathParam derivationPath
         */

        /**
         * Constructs a new ExportKeyStoreJSONOfPathParam.
         * @memberof api
         * @classdesc Represents an ExportKeyStoreJSONOfPathParam.
         * @implements IExportKeyStoreJSONOfPathParam
         * @constructor
         * @param {api.IExportKeyStoreJSONOfPathParam=} [properties] Properties to set
         */
        function ExportKeyStoreJSONOfPathParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStoreJSONOfPathParam StoredKeyData.
         * @member {Uint8Array} StoredKeyData
         * @memberof api.ExportKeyStoreJSONOfPathParam
         * @instance
         */
        ExportKeyStoreJSONOfPathParam.prototype.StoredKeyData = $util.newBuffer([]);

        /**
         * ExportKeyStoreJSONOfPathParam password.
         * @member {string} password
         * @memberof api.ExportKeyStoreJSONOfPathParam
         * @instance
         */
        ExportKeyStoreJSONOfPathParam.prototype.password = "";

        /**
         * ExportKeyStoreJSONOfPathParam newPassword.
         * @member {string} newPassword
         * @memberof api.ExportKeyStoreJSONOfPathParam
         * @instance
         */
        ExportKeyStoreJSONOfPathParam.prototype.newPassword = "";

        /**
         * ExportKeyStoreJSONOfPathParam coin.
         * @member {api.Coin} coin
         * @memberof api.ExportKeyStoreJSONOfPathParam
         * @instance
         */
        ExportKeyStoreJSONOfPathParam.prototype.coin = 0;

        /**
         * ExportKeyStoreJSONOfPathParam derivationPath.
         * @member {string} derivationPath
         * @memberof api.ExportKeyStoreJSONOfPathParam
         * @instance
         */
        ExportKeyStoreJSONOfPathParam.prototype.derivationPath = "";

        /**
         * Encodes the specified ExportKeyStoreJSONOfPathParam message. Does not implicitly {@link api.ExportKeyStoreJSONOfPathParam.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStoreJSONOfPathParam
         * @static
         * @param {api.IExportKeyStoreJSONOfPathParam} message ExportKeyStoreJSONOfPathParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStoreJSONOfPathParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeyData != null && Object.hasOwnProperty.call(message, "StoredKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.StoredKeyData);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPassword);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.coin);
            if (message.derivationPath != null && Object.hasOwnProperty.call(message, "derivationPath"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.derivationPath);
            return writer;
        };

        /**
         * Decodes an ExportKeyStoreJSONOfPathParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStoreJSONOfPathParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStoreJSONOfPathParam} ExportKeyStoreJSONOfPathParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStoreJSONOfPathParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStoreJSONOfPathParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKeyData = reader.bytes();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.newPassword = reader.string();
                    break;
                case 4:
                    message.coin = reader.int32();
                    break;
                case 5:
                    message.derivationPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStoreJSONOfPathParam;
    })();

    api.ExportKeyStoreJSONResp = (function() {

        /**
         * Properties of an ExportKeyStoreJSONResp.
         * @memberof api
         * @interface IExportKeyStoreJSONResp
         * @property {string|null} [json] ExportKeyStoreJSONResp json
         */

        /**
         * Constructs a new ExportKeyStoreJSONResp.
         * @memberof api
         * @classdesc Represents an ExportKeyStoreJSONResp.
         * @implements IExportKeyStoreJSONResp
         * @constructor
         * @param {api.IExportKeyStoreJSONResp=} [properties] Properties to set
         */
        function ExportKeyStoreJSONResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportKeyStoreJSONResp json.
         * @member {string} json
         * @memberof api.ExportKeyStoreJSONResp
         * @instance
         */
        ExportKeyStoreJSONResp.prototype.json = "";

        /**
         * Encodes the specified ExportKeyStoreJSONResp message. Does not implicitly {@link api.ExportKeyStoreJSONResp.verify|verify} messages.
         * @function encode
         * @memberof api.ExportKeyStoreJSONResp
         * @static
         * @param {api.IExportKeyStoreJSONResp} message ExportKeyStoreJSONResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportKeyStoreJSONResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.json);
            return writer;
        };

        /**
         * Decodes an ExportKeyStoreJSONResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.ExportKeyStoreJSONResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ExportKeyStoreJSONResp} ExportKeyStoreJSONResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportKeyStoreJSONResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ExportKeyStoreJSONResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.json = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ExportKeyStoreJSONResp;
    })();

    api.GetKeyStoreSupportImportTypeParam = (function() {

        /**
         * Properties of a GetKeyStoreSupportImportTypeParam.
         * @memberof api
         * @interface IGetKeyStoreSupportImportTypeParam
         * @property {api.Coin|null} [coin] GetKeyStoreSupportImportTypeParam coin
         */

        /**
         * Constructs a new GetKeyStoreSupportImportTypeParam.
         * @memberof api
         * @classdesc Represents a GetKeyStoreSupportImportTypeParam.
         * @implements IGetKeyStoreSupportImportTypeParam
         * @constructor
         * @param {api.IGetKeyStoreSupportImportTypeParam=} [properties] Properties to set
         */
        function GetKeyStoreSupportImportTypeParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetKeyStoreSupportImportTypeParam coin.
         * @member {api.Coin} coin
         * @memberof api.GetKeyStoreSupportImportTypeParam
         * @instance
         */
        GetKeyStoreSupportImportTypeParam.prototype.coin = 0;

        /**
         * Encodes the specified GetKeyStoreSupportImportTypeParam message. Does not implicitly {@link api.GetKeyStoreSupportImportTypeParam.verify|verify} messages.
         * @function encode
         * @memberof api.GetKeyStoreSupportImportTypeParam
         * @static
         * @param {api.IGetKeyStoreSupportImportTypeParam} message GetKeyStoreSupportImportTypeParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetKeyStoreSupportImportTypeParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.coin);
            return writer;
        };

        /**
         * Decodes a GetKeyStoreSupportImportTypeParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetKeyStoreSupportImportTypeParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetKeyStoreSupportImportTypeParam} GetKeyStoreSupportImportTypeParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetKeyStoreSupportImportTypeParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetKeyStoreSupportImportTypeParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetKeyStoreSupportImportTypeParam;
    })();

    api.GetKeyStoreSupportImportTypeResp = (function() {

        /**
         * Properties of a GetKeyStoreSupportImportTypeResp.
         * @memberof api
         * @interface IGetKeyStoreSupportImportTypeResp
         * @property {Array.<api.StoredKeyImportType>|null} [type] GetKeyStoreSupportImportTypeResp type
         */

        /**
         * Constructs a new GetKeyStoreSupportImportTypeResp.
         * @memberof api
         * @classdesc Represents a GetKeyStoreSupportImportTypeResp.
         * @implements IGetKeyStoreSupportImportTypeResp
         * @constructor
         * @param {api.IGetKeyStoreSupportImportTypeResp=} [properties] Properties to set
         */
        function GetKeyStoreSupportImportTypeResp(properties) {
            this.type = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetKeyStoreSupportImportTypeResp type.
         * @member {Array.<api.StoredKeyImportType>} type
         * @memberof api.GetKeyStoreSupportImportTypeResp
         * @instance
         */
        GetKeyStoreSupportImportTypeResp.prototype.type = $util.emptyArray;

        /**
         * Encodes the specified GetKeyStoreSupportImportTypeResp message. Does not implicitly {@link api.GetKeyStoreSupportImportTypeResp.verify|verify} messages.
         * @function encode
         * @memberof api.GetKeyStoreSupportImportTypeResp
         * @static
         * @param {api.IGetKeyStoreSupportImportTypeResp} message GetKeyStoreSupportImportTypeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetKeyStoreSupportImportTypeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.type.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.type.length; ++i)
                    writer.int32(message.type[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a GetKeyStoreSupportImportTypeResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetKeyStoreSupportImportTypeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetKeyStoreSupportImportTypeResp} GetKeyStoreSupportImportTypeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetKeyStoreSupportImportTypeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetKeyStoreSupportImportTypeResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.type && message.type.length))
                        message.type = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.type.push(reader.int32());
                    } else
                        message.type.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetKeyStoreSupportImportTypeResp;
    })();

    api.LoadStoredKeyParam = (function() {

        /**
         * Properties of a LoadStoredKeyParam.
         * @memberof api
         * @interface ILoadStoredKeyParam
         * @property {Array.<Uint8Array>|null} [data] LoadStoredKeyParam data
         */

        /**
         * Constructs a new LoadStoredKeyParam.
         * @memberof api
         * @classdesc Represents a LoadStoredKeyParam.
         * @implements ILoadStoredKeyParam
         * @constructor
         * @param {api.ILoadStoredKeyParam=} [properties] Properties to set
         */
        function LoadStoredKeyParam(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoadStoredKeyParam data.
         * @member {Array.<Uint8Array>} data
         * @memberof api.LoadStoredKeyParam
         * @instance
         */
        LoadStoredKeyParam.prototype.data = $util.emptyArray;

        /**
         * Encodes the specified LoadStoredKeyParam message. Does not implicitly {@link api.LoadStoredKeyParam.verify|verify} messages.
         * @function encode
         * @memberof api.LoadStoredKeyParam
         * @static
         * @param {api.ILoadStoredKeyParam} message LoadStoredKeyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoadStoredKeyParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (let i = 0; i < message.data.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data[i]);
            return writer;
        };

        /**
         * Decodes a LoadStoredKeyParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.LoadStoredKeyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.LoadStoredKeyParam} LoadStoredKeyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoadStoredKeyParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.LoadStoredKeyParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LoadStoredKeyParam;
    })();

    api.LoadStoredKeyResp = (function() {

        /**
         * Properties of a LoadStoredKeyResp.
         * @memberof api
         * @interface ILoadStoredKeyResp
         * @property {Array.<api.IStoredKeyInfo>|null} [StoredKeys] LoadStoredKeyResp StoredKeys
         */

        /**
         * Constructs a new LoadStoredKeyResp.
         * @memberof api
         * @classdesc Represents a LoadStoredKeyResp.
         * @implements ILoadStoredKeyResp
         * @constructor
         * @param {api.ILoadStoredKeyResp=} [properties] Properties to set
         */
        function LoadStoredKeyResp(properties) {
            this.StoredKeys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoadStoredKeyResp StoredKeys.
         * @member {Array.<api.IStoredKeyInfo>} StoredKeys
         * @memberof api.LoadStoredKeyResp
         * @instance
         */
        LoadStoredKeyResp.prototype.StoredKeys = $util.emptyArray;

        /**
         * Encodes the specified LoadStoredKeyResp message. Does not implicitly {@link api.LoadStoredKeyResp.verify|verify} messages.
         * @function encode
         * @memberof api.LoadStoredKeyResp
         * @static
         * @param {api.ILoadStoredKeyResp} message LoadStoredKeyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoadStoredKeyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeys != null && message.StoredKeys.length)
                for (let i = 0; i < message.StoredKeys.length; ++i)
                    $root.api.StoredKeyInfo.encode(message.StoredKeys[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a LoadStoredKeyResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.LoadStoredKeyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.LoadStoredKeyResp} LoadStoredKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoadStoredKeyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.LoadStoredKeyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.StoredKeys && message.StoredKeys.length))
                        message.StoredKeys = [];
                    message.StoredKeys.push($root.api.StoredKeyInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LoadStoredKeyResp;
    })();

    api.CreateStoredKeyParam = (function() {

        /**
         * Properties of a CreateStoredKeyParam.
         * @memberof api
         * @interface ICreateStoredKeyParam
         * @property {string|null} [password] CreateStoredKeyParam password
         */

        /**
         * Constructs a new CreateStoredKeyParam.
         * @memberof api
         * @classdesc Represents a CreateStoredKeyParam.
         * @implements ICreateStoredKeyParam
         * @constructor
         * @param {api.ICreateStoredKeyParam=} [properties] Properties to set
         */
        function CreateStoredKeyParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateStoredKeyParam password.
         * @member {string} password
         * @memberof api.CreateStoredKeyParam
         * @instance
         */
        CreateStoredKeyParam.prototype.password = "";

        /**
         * Encodes the specified CreateStoredKeyParam message. Does not implicitly {@link api.CreateStoredKeyParam.verify|verify} messages.
         * @function encode
         * @memberof api.CreateStoredKeyParam
         * @static
         * @param {api.ICreateStoredKeyParam} message CreateStoredKeyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateStoredKeyParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Decodes a CreateStoredKeyParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.CreateStoredKeyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CreateStoredKeyParam} CreateStoredKeyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateStoredKeyParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CreateStoredKeyParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CreateStoredKeyParam;
    })();

    api.CreateStoredKeyResp = (function() {

        /**
         * Properties of a CreateStoredKeyResp.
         * @memberof api
         * @interface ICreateStoredKeyResp
         * @property {api.IStoredKeyInfo|null} [StoredKey] CreateStoredKeyResp StoredKey
         * @property {string|null} [mnemonic] CreateStoredKeyResp mnemonic
         */

        /**
         * Constructs a new CreateStoredKeyResp.
         * @memberof api
         * @classdesc Represents a CreateStoredKeyResp.
         * @implements ICreateStoredKeyResp
         * @constructor
         * @param {api.ICreateStoredKeyResp=} [properties] Properties to set
         */
        function CreateStoredKeyResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateStoredKeyResp StoredKey.
         * @member {api.IStoredKeyInfo|null|undefined} StoredKey
         * @memberof api.CreateStoredKeyResp
         * @instance
         */
        CreateStoredKeyResp.prototype.StoredKey = null;

        /**
         * CreateStoredKeyResp mnemonic.
         * @member {string} mnemonic
         * @memberof api.CreateStoredKeyResp
         * @instance
         */
        CreateStoredKeyResp.prototype.mnemonic = "";

        /**
         * Encodes the specified CreateStoredKeyResp message. Does not implicitly {@link api.CreateStoredKeyResp.verify|verify} messages.
         * @function encode
         * @memberof api.CreateStoredKeyResp
         * @static
         * @param {api.ICreateStoredKeyResp} message CreateStoredKeyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateStoredKeyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKey != null && Object.hasOwnProperty.call(message, "StoredKey"))
                $root.api.StoredKeyInfo.encode(message.StoredKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mnemonic);
            return writer;
        };

        /**
         * Decodes a CreateStoredKeyResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.CreateStoredKeyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CreateStoredKeyResp} CreateStoredKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateStoredKeyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CreateStoredKeyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKey = $root.api.StoredKeyInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mnemonic = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CreateStoredKeyResp;
    })();

    api.ImportPrivateStoredKeyParam = (function() {

        /**
         * Properties of an ImportPrivateStoredKeyParam.
         * @memberof api
         * @interface IImportPrivateStoredKeyParam
         * @property {string|null} [privateKey] ImportPrivateStoredKeyParam privateKey
         * @property {string|null} [password] ImportPrivateStoredKeyParam password
         * @property {string|null} [name] ImportPrivateStoredKeyParam name
         * @property {api.Coin|null} [coin] ImportPrivateStoredKeyParam coin
         */

        /**
         * Constructs a new ImportPrivateStoredKeyParam.
         * @memberof api
         * @classdesc Represents an ImportPrivateStoredKeyParam.
         * @implements IImportPrivateStoredKeyParam
         * @constructor
         * @param {api.IImportPrivateStoredKeyParam=} [properties] Properties to set
         */
        function ImportPrivateStoredKeyParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportPrivateStoredKeyParam privateKey.
         * @member {string} privateKey
         * @memberof api.ImportPrivateStoredKeyParam
         * @instance
         */
        ImportPrivateStoredKeyParam.prototype.privateKey = "";

        /**
         * ImportPrivateStoredKeyParam password.
         * @member {string} password
         * @memberof api.ImportPrivateStoredKeyParam
         * @instance
         */
        ImportPrivateStoredKeyParam.prototype.password = "";

        /**
         * ImportPrivateStoredKeyParam name.
         * @member {string} name
         * @memberof api.ImportPrivateStoredKeyParam
         * @instance
         */
        ImportPrivateStoredKeyParam.prototype.name = "";

        /**
         * ImportPrivateStoredKeyParam coin.
         * @member {api.Coin} coin
         * @memberof api.ImportPrivateStoredKeyParam
         * @instance
         */
        ImportPrivateStoredKeyParam.prototype.coin = 0;

        /**
         * Encodes the specified ImportPrivateStoredKeyParam message. Does not implicitly {@link api.ImportPrivateStoredKeyParam.verify|verify} messages.
         * @function encode
         * @memberof api.ImportPrivateStoredKeyParam
         * @static
         * @param {api.IImportPrivateStoredKeyParam} message ImportPrivateStoredKeyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportPrivateStoredKeyParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.privateKey);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.coin);
            return writer;
        };

        /**
         * Decodes an ImportPrivateStoredKeyParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ImportPrivateStoredKeyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ImportPrivateStoredKeyParam} ImportPrivateStoredKeyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportPrivateStoredKeyParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ImportPrivateStoredKeyParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.privateKey = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ImportPrivateStoredKeyParam;
    })();

    api.ImportPrivateStoredKeyResp = (function() {

        /**
         * Properties of an ImportPrivateStoredKeyResp.
         * @memberof api
         * @interface IImportPrivateStoredKeyResp
         * @property {api.IStoredKeyInfo|null} [StoredKey] ImportPrivateStoredKeyResp StoredKey
         */

        /**
         * Constructs a new ImportPrivateStoredKeyResp.
         * @memberof api
         * @classdesc Represents an ImportPrivateStoredKeyResp.
         * @implements IImportPrivateStoredKeyResp
         * @constructor
         * @param {api.IImportPrivateStoredKeyResp=} [properties] Properties to set
         */
        function ImportPrivateStoredKeyResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportPrivateStoredKeyResp StoredKey.
         * @member {api.IStoredKeyInfo|null|undefined} StoredKey
         * @memberof api.ImportPrivateStoredKeyResp
         * @instance
         */
        ImportPrivateStoredKeyResp.prototype.StoredKey = null;

        /**
         * Encodes the specified ImportPrivateStoredKeyResp message. Does not implicitly {@link api.ImportPrivateStoredKeyResp.verify|verify} messages.
         * @function encode
         * @memberof api.ImportPrivateStoredKeyResp
         * @static
         * @param {api.IImportPrivateStoredKeyResp} message ImportPrivateStoredKeyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportPrivateStoredKeyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKey != null && Object.hasOwnProperty.call(message, "StoredKey"))
                $root.api.StoredKeyInfo.encode(message.StoredKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ImportPrivateStoredKeyResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.ImportPrivateStoredKeyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ImportPrivateStoredKeyResp} ImportPrivateStoredKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportPrivateStoredKeyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ImportPrivateStoredKeyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKey = $root.api.StoredKeyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ImportPrivateStoredKeyResp;
    })();

    api.ImportMnemonicStoredKeyParam = (function() {

        /**
         * Properties of an ImportMnemonicStoredKeyParam.
         * @memberof api
         * @interface IImportMnemonicStoredKeyParam
         * @property {string|null} [mnemonic] ImportMnemonicStoredKeyParam mnemonic
         * @property {string|null} [password] ImportMnemonicStoredKeyParam password
         */

        /**
         * Constructs a new ImportMnemonicStoredKeyParam.
         * @memberof api
         * @classdesc Represents an ImportMnemonicStoredKeyParam.
         * @implements IImportMnemonicStoredKeyParam
         * @constructor
         * @param {api.IImportMnemonicStoredKeyParam=} [properties] Properties to set
         */
        function ImportMnemonicStoredKeyParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportMnemonicStoredKeyParam mnemonic.
         * @member {string} mnemonic
         * @memberof api.ImportMnemonicStoredKeyParam
         * @instance
         */
        ImportMnemonicStoredKeyParam.prototype.mnemonic = "";

        /**
         * ImportMnemonicStoredKeyParam password.
         * @member {string} password
         * @memberof api.ImportMnemonicStoredKeyParam
         * @instance
         */
        ImportMnemonicStoredKeyParam.prototype.password = "";

        /**
         * Encodes the specified ImportMnemonicStoredKeyParam message. Does not implicitly {@link api.ImportMnemonicStoredKeyParam.verify|verify} messages.
         * @function encode
         * @memberof api.ImportMnemonicStoredKeyParam
         * @static
         * @param {api.IImportMnemonicStoredKeyParam} message ImportMnemonicStoredKeyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportMnemonicStoredKeyParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mnemonic);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            return writer;
        };

        /**
         * Decodes an ImportMnemonicStoredKeyParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ImportMnemonicStoredKeyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ImportMnemonicStoredKeyParam} ImportMnemonicStoredKeyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportMnemonicStoredKeyParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ImportMnemonicStoredKeyParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mnemonic = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ImportMnemonicStoredKeyParam;
    })();

    api.ImportMnemonicStoredKeyResp = (function() {

        /**
         * Properties of an ImportMnemonicStoredKeyResp.
         * @memberof api
         * @interface IImportMnemonicStoredKeyResp
         * @property {api.IStoredKeyInfo|null} [StoredKey] ImportMnemonicStoredKeyResp StoredKey
         */

        /**
         * Constructs a new ImportMnemonicStoredKeyResp.
         * @memberof api
         * @classdesc Represents an ImportMnemonicStoredKeyResp.
         * @implements IImportMnemonicStoredKeyResp
         * @constructor
         * @param {api.IImportMnemonicStoredKeyResp=} [properties] Properties to set
         */
        function ImportMnemonicStoredKeyResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportMnemonicStoredKeyResp StoredKey.
         * @member {api.IStoredKeyInfo|null|undefined} StoredKey
         * @memberof api.ImportMnemonicStoredKeyResp
         * @instance
         */
        ImportMnemonicStoredKeyResp.prototype.StoredKey = null;

        /**
         * Encodes the specified ImportMnemonicStoredKeyResp message. Does not implicitly {@link api.ImportMnemonicStoredKeyResp.verify|verify} messages.
         * @function encode
         * @memberof api.ImportMnemonicStoredKeyResp
         * @static
         * @param {api.IImportMnemonicStoredKeyResp} message ImportMnemonicStoredKeyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportMnemonicStoredKeyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKey != null && Object.hasOwnProperty.call(message, "StoredKey"))
                $root.api.StoredKeyInfo.encode(message.StoredKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ImportMnemonicStoredKeyResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.ImportMnemonicStoredKeyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ImportMnemonicStoredKeyResp} ImportMnemonicStoredKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportMnemonicStoredKeyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ImportMnemonicStoredKeyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKey = $root.api.StoredKeyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ImportMnemonicStoredKeyResp;
    })();

    api.ImportJSONStoredKeyParam = (function() {

        /**
         * Properties of an ImportJSONStoredKeyParam.
         * @memberof api
         * @interface IImportJSONStoredKeyParam
         * @property {string|null} [json] ImportJSONStoredKeyParam json
         * @property {string|null} [name] ImportJSONStoredKeyParam name
         * @property {string|null} [keyStoreJsonPassword] ImportJSONStoredKeyParam keyStoreJsonPassword
         * @property {string|null} [password] ImportJSONStoredKeyParam password
         * @property {api.Coin|null} [coin] ImportJSONStoredKeyParam coin
         */

        /**
         * Constructs a new ImportJSONStoredKeyParam.
         * @memberof api
         * @classdesc Represents an ImportJSONStoredKeyParam.
         * @implements IImportJSONStoredKeyParam
         * @constructor
         * @param {api.IImportJSONStoredKeyParam=} [properties] Properties to set
         */
        function ImportJSONStoredKeyParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportJSONStoredKeyParam json.
         * @member {string} json
         * @memberof api.ImportJSONStoredKeyParam
         * @instance
         */
        ImportJSONStoredKeyParam.prototype.json = "";

        /**
         * ImportJSONStoredKeyParam name.
         * @member {string} name
         * @memberof api.ImportJSONStoredKeyParam
         * @instance
         */
        ImportJSONStoredKeyParam.prototype.name = "";

        /**
         * ImportJSONStoredKeyParam keyStoreJsonPassword.
         * @member {string} keyStoreJsonPassword
         * @memberof api.ImportJSONStoredKeyParam
         * @instance
         */
        ImportJSONStoredKeyParam.prototype.keyStoreJsonPassword = "";

        /**
         * ImportJSONStoredKeyParam password.
         * @member {string} password
         * @memberof api.ImportJSONStoredKeyParam
         * @instance
         */
        ImportJSONStoredKeyParam.prototype.password = "";

        /**
         * ImportJSONStoredKeyParam coin.
         * @member {api.Coin} coin
         * @memberof api.ImportJSONStoredKeyParam
         * @instance
         */
        ImportJSONStoredKeyParam.prototype.coin = 0;

        /**
         * Encodes the specified ImportJSONStoredKeyParam message. Does not implicitly {@link api.ImportJSONStoredKeyParam.verify|verify} messages.
         * @function encode
         * @memberof api.ImportJSONStoredKeyParam
         * @static
         * @param {api.IImportJSONStoredKeyParam} message ImportJSONStoredKeyParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportJSONStoredKeyParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.json);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.keyStoreJsonPassword != null && Object.hasOwnProperty.call(message, "keyStoreJsonPassword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.keyStoreJsonPassword);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.coin);
            return writer;
        };

        /**
         * Decodes an ImportJSONStoredKeyParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ImportJSONStoredKeyParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ImportJSONStoredKeyParam} ImportJSONStoredKeyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportJSONStoredKeyParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ImportJSONStoredKeyParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.json = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.keyStoreJsonPassword = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ImportJSONStoredKeyParam;
    })();

    api.ImportJSONStoredKeyResp = (function() {

        /**
         * Properties of an ImportJSONStoredKeyResp.
         * @memberof api
         * @interface IImportJSONStoredKeyResp
         * @property {api.IStoredKeyInfo|null} [StoredKey] ImportJSONStoredKeyResp StoredKey
         */

        /**
         * Constructs a new ImportJSONStoredKeyResp.
         * @memberof api
         * @classdesc Represents an ImportJSONStoredKeyResp.
         * @implements IImportJSONStoredKeyResp
         * @constructor
         * @param {api.IImportJSONStoredKeyResp=} [properties] Properties to set
         */
        function ImportJSONStoredKeyResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportJSONStoredKeyResp StoredKey.
         * @member {api.IStoredKeyInfo|null|undefined} StoredKey
         * @memberof api.ImportJSONStoredKeyResp
         * @instance
         */
        ImportJSONStoredKeyResp.prototype.StoredKey = null;

        /**
         * Encodes the specified ImportJSONStoredKeyResp message. Does not implicitly {@link api.ImportJSONStoredKeyResp.verify|verify} messages.
         * @function encode
         * @memberof api.ImportJSONStoredKeyResp
         * @static
         * @param {api.IImportJSONStoredKeyResp} message ImportJSONStoredKeyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportJSONStoredKeyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKey != null && Object.hasOwnProperty.call(message, "StoredKey"))
                $root.api.StoredKeyInfo.encode(message.StoredKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ImportJSONStoredKeyResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.ImportJSONStoredKeyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ImportJSONStoredKeyResp} ImportJSONStoredKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportJSONStoredKeyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ImportJSONStoredKeyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKey = $root.api.StoredKeyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ImportJSONStoredKeyResp;
    })();

    api.UpdateStoredKeyPasswordParam = (function() {

        /**
         * Properties of an UpdateStoredKeyPasswordParam.
         * @memberof api
         * @interface IUpdateStoredKeyPasswordParam
         * @property {Uint8Array|null} [StoredKeyData] UpdateStoredKeyPasswordParam StoredKeyData
         * @property {string|null} [oldPassword] UpdateStoredKeyPasswordParam oldPassword
         * @property {string|null} [newPassword] UpdateStoredKeyPasswordParam newPassword
         */

        /**
         * Constructs a new UpdateStoredKeyPasswordParam.
         * @memberof api
         * @classdesc Represents an UpdateStoredKeyPasswordParam.
         * @implements IUpdateStoredKeyPasswordParam
         * @constructor
         * @param {api.IUpdateStoredKeyPasswordParam=} [properties] Properties to set
         */
        function UpdateStoredKeyPasswordParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateStoredKeyPasswordParam StoredKeyData.
         * @member {Uint8Array} StoredKeyData
         * @memberof api.UpdateStoredKeyPasswordParam
         * @instance
         */
        UpdateStoredKeyPasswordParam.prototype.StoredKeyData = $util.newBuffer([]);

        /**
         * UpdateStoredKeyPasswordParam oldPassword.
         * @member {string} oldPassword
         * @memberof api.UpdateStoredKeyPasswordParam
         * @instance
         */
        UpdateStoredKeyPasswordParam.prototype.oldPassword = "";

        /**
         * UpdateStoredKeyPasswordParam newPassword.
         * @member {string} newPassword
         * @memberof api.UpdateStoredKeyPasswordParam
         * @instance
         */
        UpdateStoredKeyPasswordParam.prototype.newPassword = "";

        /**
         * Encodes the specified UpdateStoredKeyPasswordParam message. Does not implicitly {@link api.UpdateStoredKeyPasswordParam.verify|verify} messages.
         * @function encode
         * @memberof api.UpdateStoredKeyPasswordParam
         * @static
         * @param {api.IUpdateStoredKeyPasswordParam} message UpdateStoredKeyPasswordParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateStoredKeyPasswordParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKeyData != null && Object.hasOwnProperty.call(message, "StoredKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.StoredKeyData);
            if (message.oldPassword != null && Object.hasOwnProperty.call(message, "oldPassword"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.oldPassword);
            if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPassword);
            return writer;
        };

        /**
         * Decodes an UpdateStoredKeyPasswordParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.UpdateStoredKeyPasswordParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.UpdateStoredKeyPasswordParam} UpdateStoredKeyPasswordParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateStoredKeyPasswordParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.UpdateStoredKeyPasswordParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKeyData = reader.bytes();
                    break;
                case 2:
                    message.oldPassword = reader.string();
                    break;
                case 3:
                    message.newPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return UpdateStoredKeyPasswordParam;
    })();

    api.UpdateStoredKeyPasswordResp = (function() {

        /**
         * Properties of an UpdateStoredKeyPasswordResp.
         * @memberof api
         * @interface IUpdateStoredKeyPasswordResp
         * @property {api.IStoredKeyInfo|null} [StoredKey] UpdateStoredKeyPasswordResp StoredKey
         */

        /**
         * Constructs a new UpdateStoredKeyPasswordResp.
         * @memberof api
         * @classdesc Represents an UpdateStoredKeyPasswordResp.
         * @implements IUpdateStoredKeyPasswordResp
         * @constructor
         * @param {api.IUpdateStoredKeyPasswordResp=} [properties] Properties to set
         */
        function UpdateStoredKeyPasswordResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateStoredKeyPasswordResp StoredKey.
         * @member {api.IStoredKeyInfo|null|undefined} StoredKey
         * @memberof api.UpdateStoredKeyPasswordResp
         * @instance
         */
        UpdateStoredKeyPasswordResp.prototype.StoredKey = null;

        /**
         * Encodes the specified UpdateStoredKeyPasswordResp message. Does not implicitly {@link api.UpdateStoredKeyPasswordResp.verify|verify} messages.
         * @function encode
         * @memberof api.UpdateStoredKeyPasswordResp
         * @static
         * @param {api.IUpdateStoredKeyPasswordResp} message UpdateStoredKeyPasswordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateStoredKeyPasswordResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StoredKey != null && Object.hasOwnProperty.call(message, "StoredKey"))
                $root.api.StoredKeyInfo.encode(message.StoredKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an UpdateStoredKeyPasswordResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.UpdateStoredKeyPasswordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.UpdateStoredKeyPasswordResp} UpdateStoredKeyPasswordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateStoredKeyPasswordResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.UpdateStoredKeyPasswordResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StoredKey = $root.api.StoredKeyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return UpdateStoredKeyPasswordResp;
    })();

    api.GenerateMnemonicParam = (function() {

        /**
         * Properties of a GenerateMnemonicParam.
         * @memberof api
         * @interface IGenerateMnemonicParam
         */

        /**
         * Constructs a new GenerateMnemonicParam.
         * @memberof api
         * @classdesc Represents a GenerateMnemonicParam.
         * @implements IGenerateMnemonicParam
         * @constructor
         * @param {api.IGenerateMnemonicParam=} [properties] Properties to set
         */
        function GenerateMnemonicParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified GenerateMnemonicParam message. Does not implicitly {@link api.GenerateMnemonicParam.verify|verify} messages.
         * @function encode
         * @memberof api.GenerateMnemonicParam
         * @static
         * @param {api.IGenerateMnemonicParam} message GenerateMnemonicParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenerateMnemonicParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GenerateMnemonicParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.GenerateMnemonicParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GenerateMnemonicParam} GenerateMnemonicParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenerateMnemonicParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GenerateMnemonicParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GenerateMnemonicParam;
    })();

    api.GenerateMnemonicResp = (function() {

        /**
         * Properties of a GenerateMnemonicResp.
         * @memberof api
         * @interface IGenerateMnemonicResp
         * @property {string|null} [mnemonic] GenerateMnemonicResp mnemonic
         */

        /**
         * Constructs a new GenerateMnemonicResp.
         * @memberof api
         * @classdesc Represents a GenerateMnemonicResp.
         * @implements IGenerateMnemonicResp
         * @constructor
         * @param {api.IGenerateMnemonicResp=} [properties] Properties to set
         */
        function GenerateMnemonicResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenerateMnemonicResp mnemonic.
         * @member {string} mnemonic
         * @memberof api.GenerateMnemonicResp
         * @instance
         */
        GenerateMnemonicResp.prototype.mnemonic = "";

        /**
         * Encodes the specified GenerateMnemonicResp message. Does not implicitly {@link api.GenerateMnemonicResp.verify|verify} messages.
         * @function encode
         * @memberof api.GenerateMnemonicResp
         * @static
         * @param {api.IGenerateMnemonicResp} message GenerateMnemonicResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenerateMnemonicResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mnemonic);
            return writer;
        };

        /**
         * Decodes a GenerateMnemonicResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.GenerateMnemonicResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GenerateMnemonicResp} GenerateMnemonicResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenerateMnemonicResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GenerateMnemonicResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mnemonic = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GenerateMnemonicResp;
    })();

    api.SignTransactionParam = (function() {

        /**
         * Properties of a SignTransactionParam.
         * @memberof api
         * @interface ISignTransactionParam
         * @property {Uint8Array|null} [storedKeyData] SignTransactionParam storedKeyData
         * @property {string|null} [derivationPath] SignTransactionParam derivationPath
         * @property {string|null} [password] SignTransactionParam password
         * @property {api.Coin|null} [coin] SignTransactionParam coin
         * @property {ethereum.ISignInput|null} [sign_input] SignTransactionParam sign_input
         */

        /**
         * Constructs a new SignTransactionParam.
         * @memberof api
         * @classdesc Represents a SignTransactionParam.
         * @implements ISignTransactionParam
         * @constructor
         * @param {api.ISignTransactionParam=} [properties] Properties to set
         */
        function SignTransactionParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignTransactionParam storedKeyData.
         * @member {Uint8Array} storedKeyData
         * @memberof api.SignTransactionParam
         * @instance
         */
        SignTransactionParam.prototype.storedKeyData = $util.newBuffer([]);

        /**
         * SignTransactionParam derivationPath.
         * @member {string} derivationPath
         * @memberof api.SignTransactionParam
         * @instance
         */
        SignTransactionParam.prototype.derivationPath = "";

        /**
         * SignTransactionParam password.
         * @member {string} password
         * @memberof api.SignTransactionParam
         * @instance
         */
        SignTransactionParam.prototype.password = "";

        /**
         * SignTransactionParam coin.
         * @member {api.Coin} coin
         * @memberof api.SignTransactionParam
         * @instance
         */
        SignTransactionParam.prototype.coin = 0;

        /**
         * SignTransactionParam sign_input.
         * @member {ethereum.ISignInput|null|undefined} sign_input
         * @memberof api.SignTransactionParam
         * @instance
         */
        SignTransactionParam.prototype.sign_input = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SignTransactionParam input.
         * @member {"sign_input"|undefined} input
         * @memberof api.SignTransactionParam
         * @instance
         */
        Object.defineProperty(SignTransactionParam.prototype, "input", {
            get: $util.oneOfGetter($oneOfFields = ["sign_input"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified SignTransactionParam message. Does not implicitly {@link api.SignTransactionParam.verify|verify} messages.
         * @function encode
         * @memberof api.SignTransactionParam
         * @static
         * @param {api.ISignTransactionParam} message SignTransactionParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignTransactionParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storedKeyData != null && Object.hasOwnProperty.call(message, "storedKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.storedKeyData);
            if (message.derivationPath != null && Object.hasOwnProperty.call(message, "derivationPath"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.derivationPath);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.coin);
            if (message.sign_input != null && Object.hasOwnProperty.call(message, "sign_input"))
                $root.ethereum.SignInput.encode(message.sign_input, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SignTransactionParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.SignTransactionParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.SignTransactionParam} SignTransactionParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignTransactionParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SignTransactionParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.storedKeyData = reader.bytes();
                    break;
                case 2:
                    message.derivationPath = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.coin = reader.int32();
                    break;
                case 5:
                    message.sign_input = $root.ethereum.SignInput.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SignTransactionParam;
    })();

    api.SignTransactionResp = (function() {

        /**
         * Properties of a SignTransactionResp.
         * @memberof api
         * @interface ISignTransactionResp
         * @property {ethereum.ISignOutput|null} [sign_output] SignTransactionResp sign_output
         */

        /**
         * Constructs a new SignTransactionResp.
         * @memberof api
         * @classdesc Represents a SignTransactionResp.
         * @implements ISignTransactionResp
         * @constructor
         * @param {api.ISignTransactionResp=} [properties] Properties to set
         */
        function SignTransactionResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignTransactionResp sign_output.
         * @member {ethereum.ISignOutput|null|undefined} sign_output
         * @memberof api.SignTransactionResp
         * @instance
         */
        SignTransactionResp.prototype.sign_output = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SignTransactionResp output.
         * @member {"sign_output"|undefined} output
         * @memberof api.SignTransactionResp
         * @instance
         */
        Object.defineProperty(SignTransactionResp.prototype, "output", {
            get: $util.oneOfGetter($oneOfFields = ["sign_output"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified SignTransactionResp message. Does not implicitly {@link api.SignTransactionResp.verify|verify} messages.
         * @function encode
         * @memberof api.SignTransactionResp
         * @static
         * @param {api.ISignTransactionResp} message SignTransactionResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignTransactionResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sign_output != null && Object.hasOwnProperty.call(message, "sign_output"))
                $root.ethereum.SignOutput.encode(message.sign_output, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SignTransactionResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.SignTransactionResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.SignTransactionResp} SignTransactionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignTransactionResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.SignTransactionResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sign_output = $root.ethereum.SignOutput.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SignTransactionResp;
    })();

    api.PasswordValidationParam = (function() {

        /**
         * Properties of a PasswordValidationParam.
         * @memberof api
         * @interface IPasswordValidationParam
         * @property {Uint8Array|null} [storedKeyData] PasswordValidationParam storedKeyData
         * @property {string|null} [password] PasswordValidationParam password
         */

        /**
         * Constructs a new PasswordValidationParam.
         * @memberof api
         * @classdesc Represents a PasswordValidationParam.
         * @implements IPasswordValidationParam
         * @constructor
         * @param {api.IPasswordValidationParam=} [properties] Properties to set
         */
        function PasswordValidationParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PasswordValidationParam storedKeyData.
         * @member {Uint8Array} storedKeyData
         * @memberof api.PasswordValidationParam
         * @instance
         */
        PasswordValidationParam.prototype.storedKeyData = $util.newBuffer([]);

        /**
         * PasswordValidationParam password.
         * @member {string} password
         * @memberof api.PasswordValidationParam
         * @instance
         */
        PasswordValidationParam.prototype.password = "";

        /**
         * Encodes the specified PasswordValidationParam message. Does not implicitly {@link api.PasswordValidationParam.verify|verify} messages.
         * @function encode
         * @memberof api.PasswordValidationParam
         * @static
         * @param {api.IPasswordValidationParam} message PasswordValidationParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PasswordValidationParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storedKeyData != null && Object.hasOwnProperty.call(message, "storedKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.storedKeyData);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Decodes a PasswordValidationParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.PasswordValidationParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.PasswordValidationParam} PasswordValidationParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PasswordValidationParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.PasswordValidationParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.storedKeyData = reader.bytes();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PasswordValidationParam;
    })();

    api.AddressValidationParam = (function() {

        /**
         * Properties of an AddressValidationParam.
         * @memberof api
         * @interface IAddressValidationParam
         * @property {string|null} [address] AddressValidationParam address
         * @property {api.Coin|null} [coin] AddressValidationParam coin
         */

        /**
         * Constructs a new AddressValidationParam.
         * @memberof api
         * @classdesc Represents an AddressValidationParam.
         * @implements IAddressValidationParam
         * @constructor
         * @param {api.IAddressValidationParam=} [properties] Properties to set
         */
        function AddressValidationParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressValidationParam address.
         * @member {string} address
         * @memberof api.AddressValidationParam
         * @instance
         */
        AddressValidationParam.prototype.address = "";

        /**
         * AddressValidationParam coin.
         * @member {api.Coin} coin
         * @memberof api.AddressValidationParam
         * @instance
         */
        AddressValidationParam.prototype.coin = 0;

        /**
         * Encodes the specified AddressValidationParam message. Does not implicitly {@link api.AddressValidationParam.verify|verify} messages.
         * @function encode
         * @memberof api.AddressValidationParam
         * @static
         * @param {api.IAddressValidationParam} message AddressValidationParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressValidationParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coin);
            return writer;
        };

        /**
         * Decodes an AddressValidationParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.AddressValidationParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.AddressValidationParam} AddressValidationParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressValidationParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.AddressValidationParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AddressValidationParam;
    })();

    api.ValidateParam = (function() {

        /**
         * Properties of a ValidateParam.
         * @memberof api
         * @interface IValidateParam
         * @property {string|null} [privateKey] ValidateParam privateKey
         * @property {string|null} [mnemonic] ValidateParam mnemonic
         * @property {string|null} [keyStoreJSON] ValidateParam keyStoreJSON
         * @property {api.IPasswordValidationParam|null} [storedKeyPassword] ValidateParam storedKeyPassword
         * @property {api.IAddressValidationParam|null} [addressValidationParam] ValidateParam addressValidationParam
         */

        /**
         * Constructs a new ValidateParam.
         * @memberof api
         * @classdesc Represents a ValidateParam.
         * @implements IValidateParam
         * @constructor
         * @param {api.IValidateParam=} [properties] Properties to set
         */
        function ValidateParam(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidateParam privateKey.
         * @member {string} privateKey
         * @memberof api.ValidateParam
         * @instance
         */
        ValidateParam.prototype.privateKey = "";

        /**
         * ValidateParam mnemonic.
         * @member {string} mnemonic
         * @memberof api.ValidateParam
         * @instance
         */
        ValidateParam.prototype.mnemonic = "";

        /**
         * ValidateParam keyStoreJSON.
         * @member {string} keyStoreJSON
         * @memberof api.ValidateParam
         * @instance
         */
        ValidateParam.prototype.keyStoreJSON = "";

        /**
         * ValidateParam storedKeyPassword.
         * @member {api.IPasswordValidationParam|null|undefined} storedKeyPassword
         * @memberof api.ValidateParam
         * @instance
         */
        ValidateParam.prototype.storedKeyPassword = null;

        /**
         * ValidateParam addressValidationParam.
         * @member {api.IAddressValidationParam|null|undefined} addressValidationParam
         * @memberof api.ValidateParam
         * @instance
         */
        ValidateParam.prototype.addressValidationParam = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ValidateParam input.
         * @member {"privateKey"|"mnemonic"|"keyStoreJSON"|"storedKeyPassword"|"addressValidationParam"|undefined} input
         * @memberof api.ValidateParam
         * @instance
         */
        Object.defineProperty(ValidateParam.prototype, "input", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey", "mnemonic", "keyStoreJSON", "storedKeyPassword", "addressValidationParam"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified ValidateParam message. Does not implicitly {@link api.ValidateParam.verify|verify} messages.
         * @function encode
         * @memberof api.ValidateParam
         * @static
         * @param {api.IValidateParam} message ValidateParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidateParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.privateKey);
            if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mnemonic);
            if (message.keyStoreJSON != null && Object.hasOwnProperty.call(message, "keyStoreJSON"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.keyStoreJSON);
            if (message.storedKeyPassword != null && Object.hasOwnProperty.call(message, "storedKeyPassword"))
                $root.api.PasswordValidationParam.encode(message.storedKeyPassword, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.addressValidationParam != null && Object.hasOwnProperty.call(message, "addressValidationParam"))
                $root.api.AddressValidationParam.encode(message.addressValidationParam, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ValidateParam message from the specified reader or buffer.
         * @function decode
         * @memberof api.ValidateParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ValidateParam} ValidateParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidateParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ValidateParam();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.privateKey = reader.string();
                    break;
                case 2:
                    message.mnemonic = reader.string();
                    break;
                case 3:
                    message.keyStoreJSON = reader.string();
                    break;
                case 4:
                    message.storedKeyPassword = $root.api.PasswordValidationParam.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.addressValidationParam = $root.api.AddressValidationParam.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ValidateParam;
    })();

    api.ValidateResp = (function() {

        /**
         * Properties of a ValidateResp.
         * @memberof api
         * @interface IValidateResp
         * @property {boolean|null} [valid] ValidateResp valid
         */

        /**
         * Constructs a new ValidateResp.
         * @memberof api
         * @classdesc Represents a ValidateResp.
         * @implements IValidateResp
         * @constructor
         * @param {api.IValidateResp=} [properties] Properties to set
         */
        function ValidateResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidateResp valid.
         * @member {boolean} valid
         * @memberof api.ValidateResp
         * @instance
         */
        ValidateResp.prototype.valid = false;

        /**
         * Encodes the specified ValidateResp message. Does not implicitly {@link api.ValidateResp.verify|verify} messages.
         * @function encode
         * @memberof api.ValidateResp
         * @static
         * @param {api.IValidateResp} message ValidateResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidateResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.valid != null && Object.hasOwnProperty.call(message, "valid"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.valid);
            return writer;
        };

        /**
         * Decodes a ValidateResp message from the specified reader or buffer.
         * @function decode
         * @memberof api.ValidateResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ValidateResp} ValidateResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidateResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ValidateResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.valid = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ValidateResp;
    })();

    return api;
})();

const ethereum = $root.ethereum = (() => {

    /**
     * Namespace ethereum.
     * @exports ethereum
     * @namespace
     */
    const ethereum = {};

    ethereum.SignInput = (function() {

        /**
         * Properties of a SignInput.
         * @memberof ethereum
         * @interface ISignInput
         * @property {number|Long|null} [chain_id] SignInput chain_id
         * @property {string|null} [nonce] SignInput nonce
         * @property {string|null} [gas_price] SignInput gas_price
         * @property {string|null} [gas_limit] SignInput gas_limit
         * @property {string|null} [max_inclusion_fee_per_gas] SignInput max_inclusion_fee_per_gas
         * @property {string|null} [max_fee_per_gas] SignInput max_fee_per_gas
         * @property {string|null} [amount] SignInput amount
         * @property {string|null} [to_address] SignInput to_address
         * @property {Uint8Array|null} [payload] SignInput payload
         */

        /**
         * Constructs a new SignInput.
         * @memberof ethereum
         * @classdesc Represents a SignInput.
         * @implements ISignInput
         * @constructor
         * @param {ethereum.ISignInput=} [properties] Properties to set
         */
        function SignInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInput chain_id.
         * @member {number|Long} chain_id
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.chain_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SignInput nonce.
         * @member {string} nonce
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.nonce = "";

        /**
         * SignInput gas_price.
         * @member {string} gas_price
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.gas_price = "";

        /**
         * SignInput gas_limit.
         * @member {string} gas_limit
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.gas_limit = "";

        /**
         * SignInput max_inclusion_fee_per_gas.
         * @member {string} max_inclusion_fee_per_gas
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.max_inclusion_fee_per_gas = "";

        /**
         * SignInput max_fee_per_gas.
         * @member {string} max_fee_per_gas
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.max_fee_per_gas = "";

        /**
         * SignInput amount.
         * @member {string} amount
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.amount = "";

        /**
         * SignInput to_address.
         * @member {string} to_address
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.to_address = "";

        /**
         * SignInput payload.
         * @member {Uint8Array} payload
         * @memberof ethereum.SignInput
         * @instance
         */
        SignInput.prototype.payload = $util.newBuffer([]);

        /**
         * Encodes the specified SignInput message. Does not implicitly {@link ethereum.SignInput.verify|verify} messages.
         * @function encode
         * @memberof ethereum.SignInput
         * @static
         * @param {ethereum.ISignInput} message SignInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chain_id != null && Object.hasOwnProperty.call(message, "chain_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.chain_id);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nonce);
            if (message.gas_price != null && Object.hasOwnProperty.call(message, "gas_price"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gas_price);
            if (message.gas_limit != null && Object.hasOwnProperty.call(message, "gas_limit"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gas_limit);
            if (message.max_inclusion_fee_per_gas != null && Object.hasOwnProperty.call(message, "max_inclusion_fee_per_gas"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.max_inclusion_fee_per_gas);
            if (message.max_fee_per_gas != null && Object.hasOwnProperty.call(message, "max_fee_per_gas"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.max_fee_per_gas);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.amount);
            if (message.to_address != null && Object.hasOwnProperty.call(message, "to_address"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.to_address);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.payload);
            return writer;
        };

        /**
         * Decodes a SignInput message from the specified reader or buffer.
         * @function decode
         * @memberof ethereum.SignInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ethereum.SignInput} SignInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ethereum.SignInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chain_id = reader.uint64();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.gas_price = reader.string();
                    break;
                case 4:
                    message.gas_limit = reader.string();
                    break;
                case 5:
                    message.max_inclusion_fee_per_gas = reader.string();
                    break;
                case 6:
                    message.max_fee_per_gas = reader.string();
                    break;
                case 7:
                    message.amount = reader.string();
                    break;
                case 8:
                    message.to_address = reader.string();
                    break;
                case 9:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SignInput;
    })();

    ethereum.SignOutput = (function() {

        /**
         * Properties of a SignOutput.
         * @memberof ethereum
         * @interface ISignOutput
         * @property {Uint8Array|null} [encoded] SignOutput encoded
         * @property {number|null} [v] SignOutput v
         * @property {Uint8Array|null} [r] SignOutput r
         * @property {Uint8Array|null} [s] SignOutput s
         * @property {Uint8Array|null} [data] SignOutput data
         */

        /**
         * Constructs a new SignOutput.
         * @memberof ethereum
         * @classdesc Represents a SignOutput.
         * @implements ISignOutput
         * @constructor
         * @param {ethereum.ISignOutput=} [properties] Properties to set
         */
        function SignOutput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignOutput encoded.
         * @member {Uint8Array} encoded
         * @memberof ethereum.SignOutput
         * @instance
         */
        SignOutput.prototype.encoded = $util.newBuffer([]);

        /**
         * SignOutput v.
         * @member {number} v
         * @memberof ethereum.SignOutput
         * @instance
         */
        SignOutput.prototype.v = 0;

        /**
         * SignOutput r.
         * @member {Uint8Array} r
         * @memberof ethereum.SignOutput
         * @instance
         */
        SignOutput.prototype.r = $util.newBuffer([]);

        /**
         * SignOutput s.
         * @member {Uint8Array} s
         * @memberof ethereum.SignOutput
         * @instance
         */
        SignOutput.prototype.s = $util.newBuffer([]);

        /**
         * SignOutput data.
         * @member {Uint8Array} data
         * @memberof ethereum.SignOutput
         * @instance
         */
        SignOutput.prototype.data = $util.newBuffer([]);

        /**
         * Encodes the specified SignOutput message. Does not implicitly {@link ethereum.SignOutput.verify|verify} messages.
         * @function encode
         * @memberof ethereum.SignOutput
         * @static
         * @param {ethereum.ISignOutput} message SignOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded != null && Object.hasOwnProperty.call(message, "encoded"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded);
            if (message.v != null && Object.hasOwnProperty.call(message, "v"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.v);
            if (message.r != null && Object.hasOwnProperty.call(message, "r"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.r);
            if (message.s != null && Object.hasOwnProperty.call(message, "s"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.s);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
            return writer;
        };

        /**
         * Decodes a SignOutput message from the specified reader or buffer.
         * @function decode
         * @memberof ethereum.SignOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ethereum.SignOutput} SignOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ethereum.SignOutput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded = reader.bytes();
                    break;
                case 2:
                    message.v = reader.uint32();
                    break;
                case 3:
                    message.r = reader.bytes();
                    break;
                case 4:
                    message.s = reader.bytes();
                    break;
                case 5:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SignOutput;
    })();

    return ethereum;
})();




/***/ }),

/***/ 22809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "request": () => (/* binding */ request)
/* harmony export */ });

let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
function request(input) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.request(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL(/* asset import */ __webpack_require__(74765), __webpack_require__.b);
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_getRandomValues_98117e9a7e993920 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_randomFillSync_64cc7d048f228ca8 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_process_2f24d6544ea7b200 = function(arg0) {
        var ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        var ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_versions_6164651e75405d4a = function(arg0) {
        var ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_node_4b517d861cbcb3bc = function(arg0) {
        var ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        var ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_modulerequire_3440a4bcf44437db = function() { return handleError(function (arg0, arg1) {
        var ret = module.require(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_crypto_98fc271021c7d2ad = function(arg0) {
        var ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_a2cdb043d2bfe57f = function(arg0) {
        var ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newnoargs_be86524d73f67598 = function(arg0, arg1) {
        var ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_888d259a5fefc347 = function() { return handleError(function (arg0, arg1) {
        var ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        var ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_c6fbdfc2918d5e58 = function() { return handleError(function () {
        var ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_baec038b5ab35c54 = function() { return handleError(function () {
        var ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_3f735a5746d41fbd = function() { return handleError(function () {
        var ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_1bc0b39582740e95 = function() { return handleError(function () {
        var ret = __webpack_require__.g.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        var ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_buffer_397eaa4d72ee94dd = function(arg0) {
        var ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_a7ce447f15ff496f = function(arg0) {
        var ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_969ad0a60e51d320 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_1eb8fc608a0d4cdb = function(arg0) {
        var ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_newwithlength_929232475839a482 = function(arg0) {
        var ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_subarray_8b658422a224f479 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_693216e109162396 = function() {
        var ret = new Error();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {
        var ret = getObject(arg1).stack;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {
        try {
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(arg0, arg1);
        }
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        var ret = wasm.memory;
        return addHeapObject(ret);
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }



    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 5258 == __webpack_require__.j ? (init) : null));



/***/ }),

/***/ 74765:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/42a12ff8e589fd9b71e5.wasm";

/***/ })

}]);