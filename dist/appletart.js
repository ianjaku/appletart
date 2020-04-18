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

/***/ "./src/appletart.ts":
/*!**************************!*\
  !*** ./src/appletart.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function store(server, scope) {
    if (scope === void 0) { scope = null; }
    var scopeEls;
    if (scope == null) {
        document.querySelectorAll;
        scopeEls = [document];
    }
    else {
        scopeEls = document.querySelectorAll(scope);
    }
    var bindMap = findElementsWithDataBind(scopeEls);
    var reactiveState = makeReactive(server.state, server.builders, bindMap);
    makeCallListeners(reactiveState, server.actions, scopeEls);
    return reactiveState;
}
exports.store = store;
function makeReactive(state, builders, bindMap) {
    var handlers = { set: createSetHandler(state, builders, bindMap) };
    return new Proxy(state, handlers);
}
function createSetHandler(state, builders, bindMap) {
    return function (obj, prop, value) {
        obj[prop] = value;
        if (prop in bindMap) {
            var boundEls = bindMap[prop];
            boundEls.forEach(function (el) {
                var elNewValue = value;
                var builder = el.dataset.builder;
                if (builder != null && builder in builders) {
                    // TODO: cache builders
                    elNewValue = builders[builder](state);
                }
                setValueOfHTMLElement(el, elNewValue);
            });
        }
        return true;
    };
}
function makeCallListeners(reactiveState, actions, scopedEls) {
    scopedEls.forEach(function (el) {
        var els = el.querySelectorAll("[data-call]");
        els.forEach(function (callEl) {
            var data = callEl.dataset.call;
            if (data == null)
                return;
            var tokens = data.split(".");
            if (tokens.length != 2) {
                console.error("data-call should always have 2 parameters separated by a \".\" example: data-call=\"input.someAction\"");
                return;
            }
            var eventName = tokens[0];
            var actionName = tokens[1];
            if (!(actionName in actions))
                return;
            callEl.addEventListener(eventName, function (event) {
                actions[actionName](reactiveState, event);
            });
        });
    });
}
function findElementsWithDataBind(scopeEls) {
    var bindMap = {};
    scopeEls.forEach(function (el) {
        bindMap = findElementsWithDataBindInScopeEl(el, bindMap);
    });
    return bindMap;
}
function findElementsWithDataBindInScopeEl(scopeEl, bindMap) {
    var els = scopeEl.querySelectorAll("[data-bind]");
    els.forEach(function (boundEl) {
        var bindProp = boundEl.dataset.bind;
        if (bindProp != null) {
            if (bindMap[bindProp] == null) {
                bindMap[bindProp] = [boundEl];
            }
            else {
                bindMap[bindProp].push(boundEl);
            }
        }
    });
    return bindMap;
}
function setValueOfHTMLElement(el, value) {
    // TODO: use value or appendChild depending on the type of el & value. 
    // value can also be a node or nodelist
    el.innerHTML = value;
}
exports.default = { store: store };


/***/ })

/******/ });
});