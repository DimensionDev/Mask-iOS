"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5148],{

/***/ 57311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDX": () => (/* binding */ IDX),
/* harmony export */   "assertDid": () => (/* binding */ assertDid),
/* harmony export */   "getLegacy3BoxProfileAsBasicProfile": () => (/* binding */ getLegacy3BoxProfileAsBasicProfile),
/* harmony export */   "isCaip10": () => (/* binding */ isCaip10),
/* harmony export */   "isDid": () => (/* binding */ isDid)
/* harmony export */ });
/* harmony import */ var _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52248);
/* harmony import */ var _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ceramicnetwork_stream_caip10_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6303);
/* harmony import */ var _ceramicnetwork_stream_caip10_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ceramicnetwork_stream_caip10_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ceramicstudio_idx_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84665);
/* harmony import */ var caip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5937);
/* harmony import */ var caip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(caip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92317);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_4__);






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = /*#__PURE__*/createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var DoctypeProxy = /*#__PURE__*/function () {
  function DoctypeProxy(getRemote) {
    this._getPromise = null;
    this._queue = [];
    this._getRemote = getRemote;

    this._createValuePromise();
  }

  var _proto = DoctypeProxy.prototype;

  _proto._createValuePromise = function _createValuePromise() {
    var _this = this;

    this._promiseValue = new Promise(function (resolve, reject) {
      _this._deferValue = {
        resolve: resolve,
        reject: reject
      };
    });
  };

  _proto.change = function change(mutation) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var run = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(current) {
          var next;
          return runtime_1.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutation(current);

                case 3:
                  next = _context.sent;
                  resolve();

                  _this2._next(next);

                  _context.next = 12;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  reject(_context.t0);

                  _this2._next(current);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 8]]);
        }));

        return function run(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      _this2._queue.push({
        reject: reject,
        run: run
      });

      if (_this2._queue.length === 1) {
        void _this2._start();
      }
    });
  };

  _proto.changeContent = /*#__PURE__*/function () {
    var _changeContent = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(change) {
      var mutation;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              mutation = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(doc) {
                  return runtime_1.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return doc.update(change(doc.content), doc.metadata);

                        case 2:
                          return _context2.abrupt("return", doc);

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function mutation(_x3) {
                  return _ref2.apply(this, arguments);
                };
              }();

              _context3.next = 3;
              return this.change(mutation);

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function changeContent(_x2) {
      return _changeContent.apply(this, arguments);
    }

    return changeContent;
  }();

  _proto.get = /*#__PURE__*/function () {
    var _get = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(this._queue.length === 0)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 3;
              return this._getRemote();

            case 3:
              _context4.t0 = _context4.sent;
              _context4.next = 9;
              break;

            case 6:
              _context4.next = 8;
              return this._promiseValue;

            case 8:
              _context4.t0 = _context4.sent;

            case 9:
              return _context4.abrupt("return", _context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function get() {
      return _get.apply(this, arguments);
    }

    return get;
  }();

  _proto._start = /*#__PURE__*/function () {
    var _start2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5() {
      var value;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return this._getRemote();

            case 3:
              value = _context5.sent;

              this._next(value);

              _context5.next = 13;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);

              this._queue.forEach(function (item) {
                item.reject(_context5.t0);
              });

              this._queue = [];

              this._deferValue.reject(_context5.t0);

              this._createValuePromise();

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 7]]);
    }));

    function _start() {
      return _start2.apply(this, arguments);
    }

    return _start;
  }();

  _proto._next = function _next(value) {
    var item = this._queue.shift();

    if (item == null) {
      this._end(value);
    } else {
      void item.run(value);
    }
  };

  _proto._end = function _end(value) {
    this._deferValue.resolve(value);

    this._createValuePromise();
  };

  return DoctypeProxy;
}();

function isCaip10(account) {
  try {
    caip__WEBPACK_IMPORTED_MODULE_3__.AccountID.parse(account);
    return true;
  } catch (e) {
    return false;
  }
}
var didRegex = /^did:([A-Za-z0-9]+):([A-Za-z0-9.\-:_]+)$/;
function isDid(did) {
  return didRegex.test(did);
}
function assertDid(did) {
  if (!isDid(did)) {
    throw new Error("Invalid DID: " + did);
  }
}

function loadLegacy3BoxProfile(_x) {
  return _loadLegacy3BoxProfile.apply(this, arguments);
} // Validation for BasicProfile

function _loadLegacy3BoxProfile() {
  _loadLegacy3BoxProfile = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(address) {
    var res;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return cross_fetch__WEBPACK_IMPORTED_MODULE_4___default()("https://ipfs.3box.io/profile?address=" + address);

          case 3:
            res = _context.sent;

            if (!res.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return res.json();

          case 7:
            _context.t0 = _context.sent;
            _context.next = 11;
            break;

          case 10:
            _context.t0 = null;

          case 11:
            return _context.abrupt("return", _context.t0);

          case 14:
            _context.prev = 14;
            _context.t1 = _context["catch"](0);
            return _context.abrupt("return", null);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _loadLegacy3BoxProfile.apply(this, arguments);
}

var lengthIndex = {
  name: 150,
  description: 420,
  location: 140,
  website: 240,
  emoji: 2,
  employer: 140,
  school: 140
};

var isStrAndLen = function isStrAndLen(obj, key) {
  if (!lengthIndex[key]) return false;
  return typeof obj[key] === 'string' && obj[key].length <= lengthIndex[key];
};

var transformProfile = function transformProfile(profile) {
  var _profile$image$;

  var transform = {};
  var image, background;
  if (isStrAndLen(profile, 'name')) transform.name = profile.name;
  if (isStrAndLen(profile, 'description')) transform.description = profile.description;
  if (isStrAndLen(profile, 'location')) transform.homeLocation = profile.location;
  if (isStrAndLen(profile, 'website')) transform.url = profile.website;
  if (isStrAndLen(profile, 'emoji')) transform.emoji = profile.emoji;
  if (isStrAndLen(profile, 'employer')) transform.affiliations = [profile.employer];

  if (isStrAndLen(profile, 'school')) {
    transform.affiliations = (transform.affiliations || []).concat([profile.school]);
  } // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access


  if (Array.isArray(profile.image)) image = (_profile$image$ = profile.image[0]) == null ? void 0 : _profile$image$.contentUrl['/'];

  if (image != null && typeof image === 'string') {
    transform.image = {
      original: {
        src: "ipfs://" + image,
        mimeType: 'application/octet-stream',
        width: 170,
        height: 170
      }
    };
  }

  if (Array.isArray(profile.coverPhoto)) {
    var _profile$coverPhoto$;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    background = (_profile$coverPhoto$ = profile.coverPhoto[0]) == null ? void 0 : _profile$coverPhoto$.contentUrl['/'];
  }

  if (background != null && typeof background === 'string') {
    transform.background = {
      original: {
        src: "ipfs://" + background,
        mimeType: 'application/octet-stream',
        width: 1000,
        height: 175
      }
    };
  }

  return transform;
};
function getLegacy3BoxProfileAsBasicProfile(_x2) {
  return _getLegacy3BoxProfileAsBasicProfile.apply(this, arguments);
}

function _getLegacy3BoxProfileAsBasicProfile() {
  _getLegacy3BoxProfileAsBasicProfile = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(address) {
    var profile;
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return loadLegacy3BoxProfile(address);

          case 2:
            profile = _context2.sent;
            return _context2.abrupt("return", profile ? transformProfile(profile) : null);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLegacy3BoxProfileAsBasicProfile.apply(this, arguments);
}

var IDX = /*#__PURE__*/function () {
  function IDX(_ref) {
    var _ref$aliases = _ref.aliases,
        aliases = _ref$aliases === void 0 ? {} : _ref$aliases,
        autopin = _ref.autopin,
        ceramic = _ref.ceramic;
    this._aliases = _extends({}, _ceramicstudio_idx_constants__WEBPACK_IMPORTED_MODULE_2__.definitions, aliases);
    this._autopin = autopin !== false;
    this._ceramic = ceramic;
    this._indexProxy = new DoctypeProxy(this._getOwnIDXDoc.bind(this));
  }

  var _proto = IDX.prototype;

  // High-level APIs
  _proto.has =
  /*#__PURE__*/
  function () {
    var _has = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(name, did) {
      var key, ref;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              key = this._toIndexKey(name);
              _context.next = 3;
              return this._getReference(key, did);

            case 3:
              ref = _context.sent;
              return _context.abrupt("return", ref != null);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function has(_x, _x2) {
      return _has.apply(this, arguments);
    }

    return has;
  }();

  _proto.get = /*#__PURE__*/function () {
    var _get = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(name, did) {
      var key;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              key = this._toIndexKey(name);
              _context2.next = 3;
              return this._getRecord(key, did);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function get(_x3, _x4) {
      return _get.apply(this, arguments);
    }

    return get;
  }();

  _proto.set = /*#__PURE__*/function () {
    var _set = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(name, content, options) {
      var key;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              key = this._toIndexKey(name);
              _context3.next = 3;
              return this._setRecord(key, content, options);

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function set(_x5, _x6, _x7) {
      return _set.apply(this, arguments);
    }

    return set;
  }();

  _proto.merge = /*#__PURE__*/function () {
    var _merge = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(name, content, options) {
      var key, existing, newContent;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              key = this._toIndexKey(name);
              _context4.next = 3;
              return this._getRecord(key);

            case 3:
              existing = _context4.sent;
              newContent = existing ? _extends({}, existing, content) : content;
              _context4.next = 7;
              return this._setRecord(key, newContent, options);

            case 7:
              return _context4.abrupt("return", _context4.sent);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function merge(_x8, _x9, _x10) {
      return _merge.apply(this, arguments);
    }

    return merge;
  }();

  _proto.setAll = /*#__PURE__*/function () {
    var _setAll = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(contents, options) {
      var _this = this;

      var updates, changes, newReferences;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              updates = Object.entries(contents).map( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(_ref2) {
                  var name, content, key, _yield$_this$_setReco, created, id;

                  return runtime_1.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          name = _ref2[0], content = _ref2[1];
                          key = _this._toIndexKey(name);
                          _context5.next = 4;
                          return _this._setRecordOnly(key, content, options);

                        case 4:
                          _yield$_this$_setReco = _context5.sent;
                          created = _yield$_this$_setReco[0];
                          id = _yield$_this$_setReco[1];
                          return _context5.abrupt("return", [created, key, id]);

                        case 8:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref3.apply(this, arguments);
                };
              }());
              _context6.next = 3;
              return Promise.all(updates);

            case 3:
              changes = _context6.sent;
              newReferences = changes.reduce(function (acc, _ref4) {
                var created = _ref4[0],
                    key = _ref4[1],
                    id = _ref4[2];

                if (created) {
                  acc[key] = id.toUrl();
                }

                return acc;
              }, {});
              _context6.next = 7;
              return this._setReferences(newReferences);

            case 7:
              return _context6.abrupt("return", newReferences);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function setAll(_x11, _x12) {
      return _setAll.apply(this, arguments);
    }

    return setAll;
  }();

  _proto.setDefaults = /*#__PURE__*/function () {
    var _setDefaults = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(contents, options) {
      var _yield$this$getIndex,
          _this2 = this;

      var index, updates, changes, newReferences;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.getIndex();

            case 2:
              _context8.t0 = _yield$this$getIndex = _context8.sent;

              if (!(_context8.t0 != null)) {
                _context8.next = 7;
                break;
              }

              _context8.t1 = _yield$this$getIndex;
              _context8.next = 8;
              break;

            case 7:
              _context8.t1 = {};

            case 8:
              index = _context8.t1;
              updates = Object.entries(contents).map(function (_ref5) {
                var name = _ref5[0],
                    content = _ref5[1];
                return [_this2._toIndexKey(name), content];
              }) // This filter returned the type (string | Record<string, any>)[][]
              // we need to add a type guard to get the correct type here.
              .filter(function (entry) {
                return index[entry[0]] == null;
              }).map( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(_ref6) {
                  var _ref8;

                  var key, content, definition, id;
                  return runtime_1.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          key = _ref6[0], content = _ref6[1];
                          _context7.next = 3;
                          return _this2.getDefinition(key);

                        case 3:
                          definition = _context7.sent;
                          _context7.next = 6;
                          return _this2._createRecord(definition, content, options);

                        case 6:
                          id = _context7.sent;
                          return _context7.abrupt("return", (_ref8 = {}, _ref8[key] = id.toUrl(), _ref8));

                        case 8:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x16) {
                  return _ref7.apply(this, arguments);
                };
              }());
              _context8.next = 12;
              return Promise.all(updates);

            case 12:
              changes = _context8.sent;
              newReferences = changes.reduce(function (acc, keyToID) {
                return Object.assign(acc, keyToID);
              }, {});
              _context8.next = 16;
              return this._setReferences(newReferences);

            case 16:
              return _context8.abrupt("return", newReferences);

            case 17:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function setDefaults(_x14, _x15) {
      return _setDefaults.apply(this, arguments);
    }

    return setDefaults;
  }();

  _proto.remove = /*#__PURE__*/function () {
    var _remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(name) {
      var key;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              key = this._toIndexKey(name);
              _context9.next = 3;
              return this._removeReference(key);

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function remove(_x17) {
      return _remove.apply(this, arguments);
    }

    return remove;
  }();

  _proto._toIndexKey = function _toIndexKey(name) {
    var _this$_aliases$name;

    return (_this$_aliases$name = this._aliases[name]) != null ? _this$_aliases$name : name;
  } // Identity Index APIs
  ;

  _proto.getIndex =
  /*#__PURE__*/
  function () {
    var _getIndex = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(did) {
      var rootDoc;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (!(this.authenticated && (did === this.id || did == null))) {
                _context10.next = 6;
                break;
              }

              _context10.next = 3;
              return this._indexProxy.get();

            case 3:
              _context10.t0 = _context10.sent;
              _context10.next = 9;
              break;

            case 6:
              _context10.next = 8;
              return this._getIDXDoc(did != null ? did : this.id);

            case 8:
              _context10.t0 = _context10.sent;

            case 9:
              rootDoc = _context10.t0;
              return _context10.abrupt("return", rootDoc ? rootDoc.content : null);

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function getIndex(_x18) {
      return _getIndex.apply(this, arguments);
    }

    return getIndex;
  }();

  _proto.iterator = function iterator(did) {
    var _this3 = this,
        _ref9;

    var list;
    var cursor = 0;
    return _ref9 = {}, _ref9[Symbol.asyncIterator] = function () {
      return this;
    }, _ref9.next = function () {
      var _next = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11() {
        var index, _list$cursor, key, id, doc;

        return runtime_1.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!(list == null)) {
                  _context11.next = 5;
                  break;
                }

                _context11.next = 3;
                return _this3.getIndex(did);

              case 3:
                index = _context11.sent;
                list = Object.entries(index != null ? index : {});

              case 5:
                if (!(cursor === list.length)) {
                  _context11.next = 7;
                  break;
                }

                return _context11.abrupt("return", {
                  done: true,
                  value: null
                });

              case 7:
                _list$cursor = list[cursor++], key = _list$cursor[0], id = _list$cursor[1];
                _context11.next = 10;
                return _this3._loadDocument(id);

              case 10:
                doc = _context11.sent;
                return _context11.abrupt("return", {
                  done: false,
                  value: {
                    key: key,
                    id: id,
                    record: doc.content
                  }
                });

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function next() {
        return _next.apply(this, arguments);
      }

      return next;
    }(), _ref9;
  };

  _proto._createIDXDoc = /*#__PURE__*/function () {
    var _createIDXDoc2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(did) {
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (!isCaip10(did)) {
                _context12.next = 4;
                break;
              }

              _context12.next = 3;
              return this.caip10ToDid(did);

            case 3:
              did = _context12.sent;

            case 4:
              assertDid(did);
              _context12.next = 7;
              return _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_0__.TileDocument.create(this._ceramic, null, {
                deterministic: true,
                controllers: [did],
                family: 'IDX'
              }, {
                anchor: false,
                publish: false
              });

            case 7:
              return _context12.abrupt("return", _context12.sent);

            case 8:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function _createIDXDoc(_x19) {
      return _createIDXDoc2.apply(this, arguments);
    }

    return _createIDXDoc;
  }();

  _proto._getIDXDoc = /*#__PURE__*/function () {
    var _getIDXDoc2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(did) {
      var doc;
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this._createIDXDoc(did);

            case 2:
              doc = _context13.sent;

              if (!(doc.metadata.schema == null)) {
                _context13.next = 5;
                break;
              }

              return _context13.abrupt("return", null);

            case 5:
              if (!(doc.metadata.schema !== _ceramicstudio_idx_constants__WEBPACK_IMPORTED_MODULE_2__.schemas.IdentityIndex)) {
                _context13.next = 7;
                break;
              }

              throw new Error('Invalid document: schema is not IdentityIndex');

            case 7:
              return _context13.abrupt("return", doc);

            case 8:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function _getIDXDoc(_x20) {
      return _getIDXDoc2.apply(this, arguments);
    }

    return _getIDXDoc;
  }();

  _proto._getOwnIDXDoc = /*#__PURE__*/function () {
    var _getOwnIDXDoc2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee14() {
      var doc;
      return runtime_1.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this._createIDXDoc(this.id);

            case 2:
              doc = _context14.sent;

              if (!(doc.metadata.schema == null)) {
                _context14.next = 11;
                break;
              }

              _context14.next = 6;
              return doc.update(null, {
                schema: _ceramicstudio_idx_constants__WEBPACK_IMPORTED_MODULE_2__.schemas.IdentityIndex
              });

            case 6:
              if (!this._autopin) {
                _context14.next = 9;
                break;
              }

              _context14.next = 9;
              return this._ceramic.pin.add(doc.id);

            case 9:
              _context14.next = 13;
              break;

            case 11:
              if (!(doc.metadata.schema !== _ceramicstudio_idx_constants__WEBPACK_IMPORTED_MODULE_2__.schemas.IdentityIndex)) {
                _context14.next = 13;
                break;
              }

              throw new Error('Invalid document: schema is not IdentityIndex');

            case 13:
              return _context14.abrupt("return", doc);

            case 14:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function _getOwnIDXDoc() {
      return _getOwnIDXDoc2.apply(this, arguments);
    }

    return _getOwnIDXDoc;
  }() // Definition APIs
  ;

  _proto.getDefinition =
  /*#__PURE__*/
  function () {
    var _getDefinition = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee15(idOrKey) {
      var doc;
      return runtime_1.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return this._loadDocument(idOrKey);

            case 2:
              doc = _context15.sent;

              if (!(doc.metadata.schema !== _ceramicstudio_idx_constants__WEBPACK_IMPORTED_MODULE_2__.schemas.Definition)) {
                _context15.next = 5;
                break;
              }

              throw new Error('Invalid document: schema is not Definition');

            case 5:
              return _context15.abrupt("return", _extends({}, doc.content, {
                id: doc.id
              }));

            case 6:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function getDefinition(_x21) {
      return _getDefinition.apply(this, arguments);
    }

    return getDefinition;
  }() // Record APIs
  ;

  _proto.getRecordID =
  /*#__PURE__*/
  function () {
    var _getRecordID = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee16(key, did) {
      return runtime_1.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return this._getReference(key, did);

            case 2:
              return _context16.abrupt("return", _context16.sent);

            case 3:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function getRecordID(_x22, _x23) {
      return _getRecordID.apply(this, arguments);
    }

    return getRecordID;
  }();

  _proto.getRecordDocument = /*#__PURE__*/function () {
    var _getRecordDocument = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee17(key, did) {
      var _yield$this$_loadDocu;

      var id;
      return runtime_1.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this.getRecordID(key, did);

            case 2:
              id = _context17.sent;

              if (!(id == null)) {
                _context17.next = 5;
                break;
              }

              return _context17.abrupt("return", null);

            case 5:
              _context17.next = 7;
              return this._loadDocument(id);

            case 7:
              _context17.t0 = _yield$this$_loadDocu = _context17.sent;

              if (!(_context17.t0 != null)) {
                _context17.next = 12;
                break;
              }

              _context17.t1 = _yield$this$_loadDocu;
              _context17.next = 13;
              break;

            case 12:
              _context17.t1 = null;

            case 13:
              return _context17.abrupt("return", _context17.t1);

            case 14:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function getRecordDocument(_x24, _x25) {
      return _getRecordDocument.apply(this, arguments);
    }

    return getRecordDocument;
  }();

  _proto._getRecord = /*#__PURE__*/function () {
    var _getRecord2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee18(key, did) {
      var doc;
      return runtime_1.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return this.getRecordDocument(key, did);

            case 2:
              doc = _context18.sent;
              return _context18.abrupt("return", doc ? doc.content : null);

            case 4:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function _getRecord(_x26, _x27) {
      return _getRecord2.apply(this, arguments);
    }

    return _getRecord;
  }();

  _proto._setRecord = /*#__PURE__*/function () {
    var _setRecord2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee19(key, content, options) {
      var _yield$this$_setRecor, created, id;

      return runtime_1.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return this._setRecordOnly(key, content, options);

            case 2:
              _yield$this$_setRecor = _context19.sent;
              created = _yield$this$_setRecor[0];
              id = _yield$this$_setRecor[1];

              if (!created) {
                _context19.next = 8;
                break;
              }

              _context19.next = 8;
              return this._setReference(key, id);

            case 8:
              return _context19.abrupt("return", id);

            case 9:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function _setRecord(_x28, _x29, _x30) {
      return _setRecord2.apply(this, arguments);
    }

    return _setRecord;
  }();

  _proto._setRecordOnly = /*#__PURE__*/function () {
    var _setRecordOnly2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee20(key, content, _temp) {
      var _ref10, pin, existing, definition, ref, doc;

      return runtime_1.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _ref10 = _temp === void 0 ? {} : _temp, pin = _ref10.pin;
              _context20.next = 3;
              return this._getReference(key, this.id);

            case 3:
              existing = _context20.sent;

              if (!(existing == null)) {
                _context20.next = 14;
                break;
              }

              _context20.next = 7;
              return this.getDefinition(key);

            case 7:
              definition = _context20.sent;
              _context20.next = 10;
              return this._createRecord(definition, content, {
                pin: pin
              });

            case 10:
              ref = _context20.sent;
              return _context20.abrupt("return", [true, ref]);

            case 14:
              _context20.next = 16;
              return this._loadDocument(existing);

            case 16:
              doc = _context20.sent;
              _context20.next = 19;
              return doc.update(content);

            case 19:
              return _context20.abrupt("return", [false, doc.id]);

            case 20:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function _setRecordOnly(_x31, _x32, _x33) {
      return _setRecordOnly2.apply(this, arguments);
    }

    return _setRecordOnly;
  }();

  _proto._loadDocument = function _loadDocument(id) {
    return this._ceramic.loadStream(id);
  };

  _proto._createRecord = /*#__PURE__*/function () {
    var _createRecord2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee21(definition, content, _temp2) {
      var _ref11, pin, doc, updated;

      return runtime_1.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _ref11 = _temp2 === void 0 ? {} : _temp2, pin = _ref11.pin;
              _context21.next = 3;
              return _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_0__.TileDocument.create(this._ceramic, null, {
                deterministic: true,
                controllers: [this.id],
                family: definition.id.toString()
              }, {
                anchor: false,
                publish: false
              });

            case 3:
              doc = _context21.sent;
              // Then be updated with content and schema
              updated = doc.update(content, {
                schema: definition.schema
              });

              if (!(pin != null ? pin : this._autopin)) {
                _context21.next = 10;
                break;
              }

              _context21.next = 8;
              return Promise.all([updated, this._ceramic.pin.add(doc.id)]);

            case 8:
              _context21.next = 12;
              break;

            case 10:
              _context21.next = 12;
              return updated;

            case 12:
              return _context21.abrupt("return", doc.id);

            case 13:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function _createRecord(_x34, _x35, _x36) {
      return _createRecord2.apply(this, arguments);
    }

    return _createRecord;
  }() // References APIs
  ;

  _proto._getReference =
  /*#__PURE__*/
  function () {
    var _getReference2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee22(key, did) {
      var _index$key;

      var index;
      return runtime_1.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              _context22.next = 2;
              return this.getIndex(did != null ? did : this.id);

            case 2:
              index = _context22.sent;
              return _context22.abrupt("return", (_index$key = index == null ? void 0 : index[key]) != null ? _index$key : null);

            case 4:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));

    function _getReference(_x37, _x38) {
      return _getReference2.apply(this, arguments);
    }

    return _getReference;
  }();

  _proto._setReference = /*#__PURE__*/function () {
    var _setReference2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee23(key, id) {
      return runtime_1.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return this._indexProxy.changeContent(function (index) {
                var _extends2;

                return _extends({}, index, (_extends2 = {}, _extends2[key] = id.toUrl(), _extends2));
              });

            case 2:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function _setReference(_x39, _x40) {
      return _setReference2.apply(this, arguments);
    }

    return _setReference;
  }();

  _proto._setReferences = /*#__PURE__*/function () {
    var _setReferences2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee24(references) {
      return runtime_1.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              if (!(Object.keys(references).length !== 0)) {
                _context24.next = 3;
                break;
              }

              _context24.next = 3;
              return this._indexProxy.changeContent(function (index) {
                return _extends({}, index, references);
              });

            case 3:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function _setReferences(_x41) {
      return _setReferences2.apply(this, arguments);
    }

    return _setReferences;
  }();

  _proto._removeReference = /*#__PURE__*/function () {
    var _removeReference2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee25(key) {
      return runtime_1.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              _context25.next = 2;
              return this._indexProxy.changeContent(function (index) {
                if (index) delete index[key];
                return index;
              });

            case 2:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));

    function _removeReference(_x42) {
      return _removeReference2.apply(this, arguments);
    }

    return _removeReference;
  }();

  _proto.caip10ToDid = /*#__PURE__*/function () {
    var _caip10ToDid = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee26(accountId) {
      var link;
      return runtime_1.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              _context26.next = 2;
              return _ceramicnetwork_stream_caip10_link__WEBPACK_IMPORTED_MODULE_1__.Caip10Link.fromAccount(this._ceramic, accountId);

            case 2:
              link = _context26.sent;

              if (!(link.did == null)) {
                _context26.next = 5;
                break;
              }

              throw new Error("No DID found for " + accountId);

            case 5:
              return _context26.abrupt("return", link.did);

            case 6:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, this);
    }));

    function caip10ToDid(_x43) {
      return _caip10ToDid.apply(this, arguments);
    }

    return caip10ToDid;
  }();

  _createClass(IDX, [{
    key: "authenticated",
    get: function get() {
      return this._ceramic.did != null;
    }
  }, {
    key: "ceramic",
    get: function get() {
      return this._ceramic;
    }
  }, {
    key: "id",
    get: function get() {
      if (this._ceramic.did == null) {
        throw new Error('Ceramic instance is not authenticated');
      }

      return this._ceramic.did.id;
    }
  }]);

  return IDX;
}();


//# sourceMappingURL=idx.esm.js.map


/***/ })

}]);