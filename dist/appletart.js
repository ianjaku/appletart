(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["appletart"] = factory();
	else
		root["appletart"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/appletart.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://appletart/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/appletart.ts":
/*!**************************!*\
  !*** ./src/appletart.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar controller_1 = __importDefault(__webpack_require__(/*! ./controller */ \"./src/controller.ts\"));\r\nvar debounce_1 = __importDefault(__webpack_require__(/*! ./debounce */ \"./src/debounce.ts\"));\r\nexports.createController = controller_1.default.createController;\r\nexports.debounce = debounce_1.default;\r\nexports.default = {\r\n    createController: controller_1.default.createController,\r\n    debounce: debounce_1.default,\r\n};\r\n\n\n//# sourceURL=webpack://appletart/./src/appletart.ts?");

/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar dom_1 = __importDefault(__webpack_require__(/*! ./dom */ \"./src/dom.ts\"));\r\nvar events_1 = __importDefault(__webpack_require__(/*! ./events */ \"./src/events.ts\"));\r\nvar domObserver_1 = __importDefault(__webpack_require__(/*! ./domObserver */ \"./src/domObserver.ts\"));\r\nvar _controllers = {};\r\nfunction createController(name, controller) {\r\n    if (_controllers[name] != null) {\r\n        throw Error(\"Controller with name \" + name + \" was defined twice.\");\r\n    }\r\n    _controllers[name] = controller;\r\n}\r\nexports.createController = createController;\r\nfunction init() {\r\n    var controllerElements = dom_1.default.findControllers();\r\n    controllerElements.forEach(function (controllerEl) {\r\n        var controllerName = controllerEl.dataset.controller;\r\n        if (controllerName == null)\r\n            return;\r\n        var controller = _controllers[controllerName];\r\n        if (controller == null)\r\n            return;\r\n        var eventHandler = events_1.default.createEventHandler();\r\n        var itemsList = dom_1.default.findItems(controllerEl);\r\n        var itemsMap = itemsList.reduce(function (acc, itemEl) {\r\n            var name = itemEl.dataset.item;\r\n            if (name == null || name === \"\")\r\n                return acc;\r\n            acc[name] = itemEl;\r\n            return acc;\r\n        }, {});\r\n        eventHandler.registerElement(controllerEl);\r\n        var observer = domObserver_1.default.createDOMObserver({\r\n            elementAdded: function (el) {\r\n                var _a;\r\n                eventHandler.registerElement(el);\r\n                var item = (_a = el.dataset) === null || _a === void 0 ? void 0 : _a.item;\r\n                if (item == null)\r\n                    return;\r\n                itemsMap[item] = el;\r\n            },\r\n            elementRemoved: function (el) {\r\n                var _a;\r\n                var item = (_a = el.dataset) === null || _a === void 0 ? void 0 : _a.item;\r\n                if (item == null)\r\n                    return;\r\n                if (itemsMap[item] == el) {\r\n                    delete itemsMap[item];\r\n                }\r\n            }\r\n        });\r\n        observer.observe(controllerEl);\r\n        var context = {\r\n            items: itemsMap,\r\n            on: eventHandler.createEventListeners,\r\n            controllerEl: controllerEl,\r\n            extend: initExtension\r\n        };\r\n        controller(context);\r\n        for (var _i = 0, itemsList_1 = itemsList; _i < itemsList_1.length; _i++) {\r\n            var itemEl = itemsList_1[_i];\r\n            eventHandler.registerElement(itemEl);\r\n        }\r\n        function initExtension(extension, params) {\r\n            return extension(context, params);\r\n        }\r\n    });\r\n}\r\ndom_1.default.runAfterDOMLoaded(init);\r\nexports.default = {\r\n    createController: createController\r\n};\r\n\n\n//# sourceURL=webpack://appletart/./src/controller.ts?");

/***/ }),

/***/ "./src/debounce.ts":
/*!*************************!*\
  !*** ./src/debounce.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\r\n/**\r\n * lodash (Custom Build) <https://lodash.com/>\r\n * Build: `lodash modularize exports=\"npm\" -o ./`\r\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\r\n * Released under MIT license <https://lodash.com/license>\r\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\r\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\r\n */\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/** Used as the `TypeError` message for \"Functions\" methods. */\r\nvar FUNC_ERROR_TEXT = 'Expected a function';\r\n/** Used as references for various `Number` constants. */\r\nvar NAN = 0 / 0;\r\n/** `Object#toString` result references. */\r\nvar symbolTag = '[object Symbol]';\r\n/** Used to match leading and trailing whitespace. */\r\nvar reTrim = /^\\s+|\\s+$/g;\r\n/** Used to detect bad signed hexadecimal string values. */\r\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\r\n/** Used to detect binary string values. */\r\nvar reIsBinary = /^0b[01]+$/i;\r\n/** Used to detect octal string values. */\r\nvar reIsOctal = /^0o[0-7]+$/i;\r\n/** Built-in method references without a dependency on `root`. */\r\nvar freeParseInt = parseInt;\r\n/** Detect free variable `global` from Node.js. */\r\n// @ts-ignore\r\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\r\n/** Detect free variable `self`. */\r\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\r\n/** Used as a reference to the global object. */\r\nvar root = freeGlobal || freeSelf || Function('return this')();\r\n/** Used for built-in method references. */\r\nvar objectProto = Object.prototype;\r\n/**\r\n * Used to resolve the\r\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\r\n * of values.\r\n */\r\nvar objectToString = objectProto.toString;\r\n/* Built-in method references for those with the same name as other `lodash` methods. */\r\nvar nativeMax = Math.max, nativeMin = Math.min;\r\n/**\r\n * Gets the timestamp of the number of milliseconds that have elapsed since\r\n * the Unix epoch (1 January 1970 00:00:00 UTC).\r\n *\r\n * @static\r\n * @memberOf _\r\n * @since 2.4.0\r\n * @category Date\r\n * @returns {number} Returns the timestamp.\r\n * @example\r\n *\r\n * _.defer(function(stamp) {\r\n *   console.log(_.now() - stamp);\r\n * }, _.now());\r\n * // => Logs the number of milliseconds it took for the deferred invocation.\r\n */\r\nvar now = function () {\r\n    return root.Date.now();\r\n};\r\n/**\r\n * Creates a debounced function that delays invoking `func` until after `wait`\r\n * milliseconds have elapsed since the last time the debounced function was\r\n * invoked. The debounced function comes with a `cancel` method to cancel\r\n * delayed `func` invocations and a `flush` method to immediately invoke them.\r\n * Provide `options` to indicate whether `func` should be invoked on the\r\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\r\n * with the last arguments provided to the debounced function. Subsequent\r\n * calls to the debounced function return the result of the last `func`\r\n * invocation.\r\n *\r\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\r\n * invoked on the trailing edge of the timeout only if the debounced function\r\n * is invoked more than once during the `wait` timeout.\r\n *\r\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\r\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\r\n *\r\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\r\n * for details over the differences between `_.debounce` and `_.throttle`.\r\n *\r\n * @static\r\n * @memberOf _\r\n * @since 0.1.0\r\n * @category Function\r\n * @param {Function} func The function to debounce.\r\n * @param {number} [wait=0] The number of milliseconds to delay.\r\n * @param {Object} [options={}] The options object.\r\n * @param {boolean} [options.leading=false]\r\n *  Specify invoking on the leading edge of the timeout.\r\n * @param {number} [options.maxWait]\r\n *  The maximum time `func` is allowed to be delayed before it's invoked.\r\n * @param {boolean} [options.trailing=true]\r\n *  Specify invoking on the trailing edge of the timeout.\r\n * @returns {Function} Returns the new debounced function.\r\n * @example\r\n *\r\n * // Avoid costly calculations while the window size is in flux.\r\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\r\n *\r\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\r\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\r\n *   'leading': true,\r\n *   'trailing': false\r\n * }));\r\n *\r\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\r\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\r\n * var source = new EventSource('/stream');\r\n * jQuery(source).on('message', debounced);\r\n *\r\n * // Cancel the trailing debounced invocation.\r\n * jQuery(window).on('popstate', debounced.cancel);\r\n */\r\nfunction debounce(func, wait, options) {\r\n    // @ts-ignore\r\n    var lastArgs, \r\n    // @ts-ignore\r\n    lastThis, \r\n    // @ts-ignore\r\n    maxWait, \r\n    // @ts-ignore\r\n    result, \r\n    // @ts-ignore\r\n    timerId, \r\n    // @ts-ignore\r\n    lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;\r\n    if (typeof func != 'function') {\r\n        throw new TypeError(FUNC_ERROR_TEXT);\r\n    }\r\n    wait = toNumber(wait) || 0;\r\n    if (isObject(options)) {\r\n        // @ts-ignore\r\n        leading = !!options.leading;\r\n        maxing = 'maxWait' in options;\r\n        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\r\n        trailing = 'trailing' in options ? !!options.trailing : trailing;\r\n    }\r\n    function invokeFunc(time) {\r\n        // @ts-ignore\r\n        var args = lastArgs, \r\n        // @ts-ignore\r\n        thisArg = lastThis;\r\n        lastArgs = lastThis = undefined;\r\n        lastInvokeTime = time;\r\n        result = func.apply(thisArg, args);\r\n        return result;\r\n    }\r\n    function leadingEdge(time) {\r\n        // Reset any `maxWait` timer.\r\n        lastInvokeTime = time;\r\n        // Start the timer for the trailing edge.\r\n        timerId = setTimeout(timerExpired, wait);\r\n        // Invoke the leading edge.\r\n        // @ts-ignore\r\n        return leading ? invokeFunc(time) : result;\r\n    }\r\n    function remainingWait(time) {\r\n        // @ts-ignore\r\n        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;\r\n        // @ts-ignore\r\n        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;\r\n    }\r\n    // @ts-ignore\r\n    function shouldInvoke(time) {\r\n        // @ts-ignore\r\n        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;\r\n        // Either this is the first call, activity has stopped and we're at the\r\n        // trailing edge, the system time has gone backwards and we're treating\r\n        // it as the trailing edge, or we've hit the `maxWait` limit.\r\n        // @ts-ignore\r\n        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\r\n            // @ts-ignore\r\n            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\r\n    }\r\n    function timerExpired() {\r\n        var time = now();\r\n        if (shouldInvoke(time)) {\r\n            return trailingEdge(time);\r\n        }\r\n        // Restart the timer.\r\n        timerId = setTimeout(timerExpired, remainingWait(time));\r\n    }\r\n    // @ts-ignore\r\n    function trailingEdge(time) {\r\n        timerId = undefined;\r\n        // Only invoke if we have `lastArgs` which means `func` has been\r\n        // debounced at least once.\r\n        // @ts-ignore\r\n        if (trailing && lastArgs) {\r\n            return invokeFunc(time);\r\n        }\r\n        lastArgs = lastThis = undefined;\r\n        // @ts-ignore\r\n        return result;\r\n    }\r\n    function cancel() {\r\n        // @ts-ignore\r\n        if (timerId !== undefined) {\r\n            // @ts-ignore\r\n            clearTimeout(timerId);\r\n        }\r\n        lastInvokeTime = 0;\r\n        lastArgs = lastCallTime = lastThis = timerId = undefined;\r\n    }\r\n    function flush() {\r\n        // @ts-ignore\r\n        return timerId === undefined ? result : trailingEdge(now());\r\n    }\r\n    function debounced() {\r\n        var time = now(), isInvoking = shouldInvoke(time);\r\n        lastArgs = arguments;\r\n        // @ts-ignore\r\n        lastThis = this;\r\n        lastCallTime = time;\r\n        if (isInvoking) {\r\n            // @ts-ignore\r\n            if (timerId === undefined) {\r\n                return leadingEdge(lastCallTime);\r\n            }\r\n            if (maxing) {\r\n                // Handle invocations in a tight loop.\r\n                timerId = setTimeout(timerExpired, wait);\r\n                return invokeFunc(lastCallTime);\r\n            }\r\n        }\r\n        // @ts-ignore\r\n        if (timerId === undefined) {\r\n            timerId = setTimeout(timerExpired, wait);\r\n        }\r\n        // @ts-ignore\r\n        return result;\r\n    }\r\n    debounced.cancel = cancel;\r\n    debounced.flush = flush;\r\n    return debounced;\r\n}\r\n/**\r\n * Checks if `value` is the\r\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\r\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\r\n *\r\n * @static\r\n * @memberOf _\r\n * @since 0.1.0\r\n * @category Lang\r\n * @param {*} value The value to check.\r\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\r\n * @example\r\n *\r\n * _.isObject({});\r\n * // => true\r\n *\r\n * _.isObject([1, 2, 3]);\r\n * // => true\r\n *\r\n * _.isObject(_.noop);\r\n * // => true\r\n *\r\n * _.isObject(null);\r\n * // => false\r\n */\r\n// @ts-ignore\r\nfunction isObject(value) {\r\n    var type = typeof value;\r\n    return !!value && (type == 'object' || type == 'function');\r\n}\r\n/**\r\n * Checks if `value` is object-like. A value is object-like if it's not `null`\r\n * and has a `typeof` result of \"object\".\r\n *\r\n * @static\r\n * @memberOf _\r\n * @since 4.0.0\r\n * @category Lang\r\n * @param {*} value The value to check.\r\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\r\n * @example\r\n *\r\n * _.isObjectLike({});\r\n * // => true\r\n *\r\n * _.isObjectLike([1, 2, 3]);\r\n * // => true\r\n *\r\n * _.isObjectLike(_.noop);\r\n * // => false\r\n *\r\n * _.isObjectLike(null);\r\n * // => false\r\n */\r\n// @ts-ignore\r\nfunction isObjectLike(value) {\r\n    return !!value && typeof value == 'object';\r\n}\r\n/**\r\n * Checks if `value` is classified as a `Symbol` primitive or object.\r\n *\r\n * @static\r\n * @memberOf _\r\n * @since 4.0.0\r\n * @category Lang\r\n * @param {*} value The value to check.\r\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\r\n * @example\r\n *\r\n * _.isSymbol(Symbol.iterator);\r\n * // => true\r\n *\r\n * _.isSymbol('abc');\r\n * // => false\r\n */\r\n// @ts-ignore\r\nfunction isSymbol(value) {\r\n    return typeof value == 'symbol' ||\r\n        (isObjectLike(value) && objectToString.call(value) == symbolTag);\r\n}\r\n/**\r\n * Converts `value` to a number.\r\n *\r\n * @static\r\n * @memberOf _\r\n * @since 4.0.0\r\n * @category Lang\r\n * @param {*} value The value to process.\r\n * @returns {number} Returns the number.\r\n * @example\r\n *\r\n * _.toNumber(3.2);\r\n * // => 3.2\r\n *\r\n * _.toNumber(Number.MIN_VALUE);\r\n * // => 5e-324\r\n *\r\n * _.toNumber(Infinity);\r\n * // => Infinity\r\n *\r\n * _.toNumber('3.2');\r\n * // => 3.2\r\n */\r\n// @ts-ignore\r\nfunction toNumber(value) {\r\n    if (typeof value == 'number') {\r\n        return value;\r\n    }\r\n    if (isSymbol(value)) {\r\n        return NAN;\r\n    }\r\n    if (isObject(value)) {\r\n        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\r\n        value = isObject(other) ? (other + '') : other;\r\n    }\r\n    if (typeof value != 'string') {\r\n        return value === 0 ? value : +value;\r\n    }\r\n    value = value.replace(reTrim, '');\r\n    var isBinary = reIsBinary.test(value);\r\n    return (isBinary || reIsOctal.test(value))\r\n        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\r\n        : (reIsBadHex.test(value) ? NAN : +value);\r\n}\r\nexports.default = debounce;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://appletart/./src/debounce.ts?");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction runAfterDOMLoaded(callback) {\r\n    if (document.readyState === \"loading\") {\r\n        document.addEventListener(\"DOMContentLoaded\", function () {\r\n            callback();\r\n        });\r\n    }\r\n    else {\r\n        callback();\r\n    }\r\n}\r\nfunction findControllers(scope) {\r\n    if (scope === void 0) { scope = document; }\r\n    return Array.from(scope.querySelectorAll(\"[data-controller]\"));\r\n}\r\nfunction findItems(scope) {\r\n    if (scope === void 0) { scope = document; }\r\n    return Array.from(scope.querySelectorAll(\"[data-item]\"));\r\n}\r\nexports.default = {\r\n    runAfterDOMLoaded: runAfterDOMLoaded,\r\n    findControllers: findControllers,\r\n    findItems: findItems\r\n};\r\n\n\n//# sourceURL=webpack://appletart/./src/dom.ts?");

/***/ }),

/***/ "./src/domObserver.ts":
/*!****************************!*\
  !*** ./src/domObserver.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction createDOMObserver(_a) {\r\n    var elementAdded = _a.elementAdded, elementRemoved = _a.elementRemoved;\r\n    var mutationObserver = new MutationObserver(function (mutations) {\r\n        mutations.forEach(function (mutation) {\r\n            if (mutation.addedNodes != null) {\r\n                mutation.addedNodes.forEach(function (addedNode) {\r\n                    if (addedNode.nodeType !== 1)\r\n                        return;\r\n                    // @ts-ignore\r\n                    elementAdded(addedNode);\r\n                });\r\n            }\r\n            if (mutation.removedNodes != null) {\r\n                mutation.removedNodes.forEach(function (removedNode) {\r\n                    if (removedNode.nodeType !== 1)\r\n                        return;\r\n                    // @ts-ignore\r\n                    elementRemoved(removedNode);\r\n                });\r\n            }\r\n        });\r\n    });\r\n    function observe(el) {\r\n        mutationObserver.observe(el, { childList: true, subtree: true });\r\n    }\r\n    return { observe: observe };\r\n}\r\nexports.default = {\r\n    createDOMObserver: createDOMObserver\r\n};\r\n\n\n//# sourceURL=webpack://appletart/./src/domObserver.ts?");

/***/ }),

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction createEventHandler() {\r\n    var _eventListeners = {};\r\n    function createEventListeners(listeners) {\r\n        for (var _i = 0, _a = Object.keys(listeners); _i < _a.length; _i++) {\r\n            var key = _a[_i];\r\n            _eventListeners[key] = listeners[key];\r\n        }\r\n    }\r\n    function registerElement(el) {\r\n        if (el.dataset == null)\r\n            return;\r\n        for (var _i = 0, _a = Object.keys(el.dataset); _i < _a.length; _i++) {\r\n            var datasetKey = _a[_i];\r\n            if (!datasetKey.startsWith(\"on:\"))\r\n                continue;\r\n            var listenerName = el.dataset[datasetKey];\r\n            if (listenerName == null)\r\n                continue;\r\n            var eventType = datasetKey.split(\":\")[1].toLowerCase();\r\n            registerActionListener(eventType, el, listenerName);\r\n        }\r\n    }\r\n    function registerActionListener(eventType, el, listenerName) {\r\n        if (eventType.toLowerCase() === \"clickoutside\") {\r\n            document.addEventListener(\"click\", function (event) {\r\n                var target = event.target;\r\n                if (target == null)\r\n                    return;\r\n                // @ts-ignore\r\n                if (!el.contains(target)) {\r\n                    var eventListener = _eventListeners[listenerName];\r\n                    if (eventListener == null)\r\n                        return;\r\n                    eventListener(event, el);\r\n                }\r\n            });\r\n        }\r\n        el.addEventListener(eventType, function (event) {\r\n            var eventListener = _eventListeners[listenerName];\r\n            if (eventListener == null)\r\n                return;\r\n            eventListener(event, el);\r\n        });\r\n    }\r\n    return {\r\n        createEventListeners: createEventListeners,\r\n        registerElement: registerElement\r\n    };\r\n}\r\nexports.default = {\r\n    createEventHandler: createEventHandler\r\n};\r\n\n\n//# sourceURL=webpack://appletart/./src/events.ts?");

/***/ })

/******/ });
});