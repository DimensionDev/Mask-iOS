"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4590],{

/***/ 59800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyAmount": () => (/* binding */ CurrencyAmount),
/* harmony export */   "Ether": () => (/* binding */ Ether),
/* harmony export */   "Fraction": () => (/* binding */ Fraction),
/* harmony export */   "MaxUint256": () => (/* binding */ MaxUint256),
/* harmony export */   "NativeCurrency": () => (/* binding */ NativeCurrency),
/* harmony export */   "Percent": () => (/* binding */ Percent),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "Rounding": () => (/* binding */ Rounding),
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "TradeType": () => (/* binding */ TradeType),
/* harmony export */   "WETH9": () => (/* binding */ WETH9),
/* harmony export */   "computePriceImpact": () => (/* binding */ computePriceImpact),
/* harmony export */   "sortedInsert": () => (/* binding */ sortedInsert),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "validateAndParseAddress": () => (/* binding */ validateAndParseAddress)
/* harmony export */ });
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24994);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32054);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58084);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(decimal_js_light__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37352);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var toformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17228);
/* harmony import */ var toformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toformat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99747);







var TradeType;

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));

var Rounding;

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));

var MaxUint256 = /*#__PURE__*/jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toformat__WEBPACK_IMPORTED_MODULE_3___default()((decimal_js_light__WEBPACK_IMPORTED_MODULE_1___default()));
var Big = /*#__PURE__*/toformat__WEBPACK_IMPORTED_MODULE_3___default()((big_js__WEBPACK_IMPORTED_MODULE_2___default()));
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[Rounding.ROUND_DOWN] = 0, _toFixedRounding[Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(1);
    }

    this.numerator = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(numerator);
    this.denominator = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(denominator);
  }

  Fraction.tryParseFraction = function tryParseFraction(fractionish) {
    if (fractionish instanceof (jsbi__WEBPACK_IMPORTED_MODULE_0___default()) || typeof fractionish === 'number' || typeof fractionish === 'string') return new Fraction(fractionish);
    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish;
    throw new Error('Could not parse fraction');
  } // performs floor division
  ;

  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.numerator, otherParsed.denominator), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(otherParsed.numerator, this.denominator)), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().subtract(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.numerator, otherParsed.denominator), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(otherParsed.numerator, this.denominator)), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return jsbi__WEBPACK_IMPORTED_MODULE_0___default().lessThan(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.numerator, otherParsed.denominator), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return jsbi__WEBPACK_IMPORTED_MODULE_0___default().equal(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.numerator, otherParsed.denominator), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return jsbi__WEBPACK_IMPORTED_MODULE_0___default().greaterThan(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.numerator, otherParsed.denominator), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.numerator, otherParsed.numerator), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.numerator, otherParsed.denominator), jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    !(significantDigits > 0) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    !(decimalPlaces >= 0) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  /**
   * Helper method for converting any super class back to a fraction
   */
  ;

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return jsbi__WEBPACK_IMPORTED_MODULE_0___default().divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(this.numerator, this.denominator), this.denominator);
    }
  }, {
    key: "asFraction",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toformat__WEBPACK_IMPORTED_MODULE_3___default()((big_js__WEBPACK_IMPORTED_MODULE_2___default()));
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  function CurrencyAmount(currency, numerator, denominator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    !jsbi__WEBPACK_IMPORTED_MODULE_0___default().lessThanOrEqual(_this.quotient, MaxUint256) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    _this.currency = currency;
    _this.decimalScale = jsbi__WEBPACK_IMPORTED_MODULE_0___default().exponentiate(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(10), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(currency.decimals));
    return _this;
  }
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */


  CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  ;

  CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !this.currency.equals(other.currency) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;

    var added = _Fraction.prototype.add.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  };

  _proto.subtract = function subtract(other) {
    !this.currency.equals(other.currency) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;

    var subtracted = _Fraction.prototype.subtract.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  };

  _proto.multiply = function multiply(other) {
    var multiplied = _Fraction.prototype.multiply.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  };

  _proto.divide = function divide(other) {
    var divided = _Fraction.prototype.divide.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.divide.call(this, this.decimalScale).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    return _Fraction.prototype.divide.call(this, this.decimalScale).toFixed(decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  };

  _createClass(CurrencyAmount, [{
    key: "wrapped",
    get: function get() {
      if (this.currency.isToken) return this;
      return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var ONE_HUNDRED = /*#__PURE__*/new Fraction( /*#__PURE__*/jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(100));
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */

function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    var _this;

    _this = _Fraction.apply(this, arguments) || this;
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */

    _this.isPercent = true;
    return _this;
  }

  var _proto = Percent.prototype;

  _proto.add = function add(other) {
    return toPercent(_Fraction.prototype.add.call(this, other));
  };

  _proto.subtract = function subtract(other) {
    return toPercent(_Fraction.prototype.subtract.call(this, other));
  };

  _proto.multiply = function multiply(other) {
    return toPercent(_Fraction.prototype.multiply.call(this, other));
  };

  _proto.divide = function divide(other) {
    return toPercent(_Fraction.prototype.divide.call(this, other));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  function Price() {
    var _this;

    var baseCurrency, quoteCurrency, denominator, numerator;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 4) {
      baseCurrency = args[0];
      quoteCurrency = args[1];
      denominator = args[2];
      numerator = args[3];
    } else {
      var result = args[0].quoteAmount.divide(args[0].baseAmount);
      var _ref = [args[0].baseAmount.currency, args[0].quoteAmount.currency, result.denominator, result.numerator];
      baseCurrency = _ref[0];
      quoteCurrency = _ref[1];
      denominator = _ref[2];
      numerator = _ref[3];
    }

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(jsbi__WEBPACK_IMPORTED_MODULE_0___default().exponentiate(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(10), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(baseCurrency.decimals)), jsbi__WEBPACK_IMPORTED_MODULE_0___default().exponentiate(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(10), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(quoteCurrency.decimals)));
    return _this;
  }
  /**
   * Flip the price, switching the base and quote currency
   */


  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */
  ;

  _proto.multiply = function multiply(other) {
    !this.quoteCurrency.equals(other.baseCurrency) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyAmount.currency.equals(this.baseCurrency) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;

    var result = _Fraction.prototype.multiply.call(this, currencyAmount);

    return CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */
  ;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "adjustedForDecimals",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */

var BaseCurrency =
/**
 * Constructs an instance of the base class `BaseCurrency`.
 * @param chainId the chain ID on which this currency resides
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
 */
function BaseCurrency(chainId, decimals, symbol, name) {
  !Number.isSafeInteger(chainId) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
  !(decimals >= 0 && decimals < 255 && Number.isInteger(decimals)) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
  this.chainId = chainId;
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */

var NativeCurrency = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(NativeCurrency, _BaseCurrency);

  function NativeCurrency() {
    var _this;

    _this = _BaseCurrency.apply(this, arguments) || this;
    _this.isNative = true;
    _this.isToken = false;
    return _this;
  }

  return NativeCurrency;
}(BaseCurrency);

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */

function validateAndParseAddress(address) {
  try {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_5__.getAddress)(address);
  } catch (error) {
    throw new Error(address + " is not a valid address.");
  }
}

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(Token, _BaseCurrency);

  function Token(chainId, address, decimals, symbol, name) {
    var _this;

    _this = _BaseCurrency.call(this, chainId, decimals, symbol, name) || this;
    _this.isNative = false;
    _this.isToken = true;
    _this.address = validateAndParseAddress(address);
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    return other.isToken && this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    !(this.address !== other.address) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
  /**
   * Return this token, which does not need to be wrapped
   */
  ;

  _createClass(Token, [{
    key: "wrapped",
    get: function get() {
      return this;
    }
  }]);

  return Token;
}(BaseCurrency);

var _WETH;
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */

var WETH9 = (_WETH = {}, _WETH[1] = /*#__PURE__*/new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'), _WETH[3] = /*#__PURE__*/new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[4] = /*#__PURE__*/new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[5] = /*#__PURE__*/new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'), _WETH[42] = /*#__PURE__*/new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'), _WETH[10] = /*#__PURE__*/new Token(10, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), _WETH[69] = /*#__PURE__*/new Token(69, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), _WETH[42161] = /*#__PURE__*/new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'), _WETH[421611] = /*#__PURE__*/new Token(421611, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'), _WETH);

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */

var Ether = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Ether, _NativeCurrency);

  function Ether(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ETH', 'Ether') || this;
  }

  Ether.onChain = function onChain(chainId) {
    var _this$_etherCache$cha;

    return (_this$_etherCache$cha = this._etherCache[chainId]) != null ? _this$_etherCache$cha : this._etherCache[chainId] = new Ether(chainId);
  };

  var _proto = Ether.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Ether, [{
    key: "wrapped",
    get: function get() {
      var weth9 = WETH9[this.chainId];
      !!!weth9 ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0;
      return weth9;
    }
  }]);

  return Ether;
}(NativeCurrency);
Ether._etherCache = {};

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var quotedOutputAmount = midPrice.quote(inputAmount); // calculate price impact := (exactQuote - outputAmount) / exactQuote

  var priceImpact = quotedOutputAmount.subtract(outputAmount).divide(quotedOutputAmount);
  return new Percent(priceImpact.numerator, priceImpact.denominator);
}

// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

var MAX_SAFE_INTEGER = /*#__PURE__*/jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(Number.MAX_SAFE_INTEGER);
var ZERO = /*#__PURE__*/jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(0);
var ONE = /*#__PURE__*/jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(1);
var TWO = /*#__PURE__*/jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(2);
/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */

function sqrt(value) {
  !jsbi__WEBPACK_IMPORTED_MODULE_0___default().greaterThanOrEqual(value, ZERO) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : void 0; // rely on built in sqrt if possible

  if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().lessThan(value, MAX_SAFE_INTEGER)) {
    return jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(Math.floor(Math.sqrt(jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(value))));
  }

  var z;
  var x;
  z = value;
  x = jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(jsbi__WEBPACK_IMPORTED_MODULE_0___default().divide(value, TWO), ONE);

  while (jsbi__WEBPACK_IMPORTED_MODULE_0___default().lessThan(x, z)) {
    z = x;
    x = jsbi__WEBPACK_IMPORTED_MODULE_0___default().divide(jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(jsbi__WEBPACK_IMPORTED_MODULE_0___default().divide(value, x), x), TWO);
  }

  return z;
}


//# sourceMappingURL=sdk-core.esm.js.map


/***/ })

}]);