/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.popup-wrapper {\\r\\n  background-color: white;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  overflow-y: scroll;\\r\\n  pointer-events: none;\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n\\r\\n.popup-wrapper.show {\\r\\n  opacity: 1;\\r\\n  pointer-events: auto;\\r\\n}\\r\\n\\r\\n.comment-popup {\\r\\n  background-color: white;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  width: 600px;\\r\\n  height: 500px;\\r\\n  max-width: 100%;\\r\\n  overflow-y: scroll;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup-top {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.popup-bottom {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 20px;\\r\\n  padding: 30px 0;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  align-self: flex-end;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  position: fixed;\\r\\n  background: #6cf;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 3;\\r\\n}\\r\\n\\r\\n.header-container {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.header-list {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.header-list li {\\r\\n  font-size: 1.3rem;\\r\\n  padding: 0 1.5rem;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.header-list li a {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.meal-img {\\r\\n  height: 300px;\\r\\n  width: 400px;\\r\\n}\\r\\n\\r\\n.userName,\\r\\n.comm-sub,\\r\\n.userComment {\\r\\n  padding: 5px;\\r\\n  align-self: flex-start;\\r\\n  border: 2px solid black;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.comm-sub {\\r\\n  background-color: #fff;\\r\\n  box-shadow: 3px 2px;\\r\\n  font-weight: 600;\\r\\n  font-size: 25px;\\r\\n  width: 170px;\\r\\n}\\r\\n\\r\\n.userComment {\\r\\n  margin: 15px 0;\\r\\n}\\r\\n\\r\\n.meal-data {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  font-size: larger;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  margin: 0;\\r\\n  width: 100%;\\r\\n  height: 60px;\\r\\n  background: #6cf;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.heart-icon {\\r\\n  height: 30px;\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.meal-list {\\r\\n  display: grid;\\r\\n  margin-top: 9rem;\\r\\n  align-content: space-around;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  grid-column-gap: 6rem;\\r\\n  grid-row-gap: 4rem;\\r\\n  padding-left: 0;\\r\\n}\\r\\n\\r\\n.meal-list li {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.meal-list li img {\\r\\n  width: 180px;\\r\\n}\\r\\n\\r\\n.bottom {\\r\\n  margin-bottom: 7rem;\\r\\n}\\r\\n\\r\\n.pop {\\r\\n  border: 2px solid black;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 3px 2px;\\r\\n  font-weight: 600;\\r\\n  font-size: 16px;\\r\\n  margin-left: 50%;\\r\\n  transform: translateX(-50%);\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.main-container {\\r\\n  padding-top: 30px;\\r\\n  padding-bottom: 60px;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  cursor: pointer;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.list-content {\\r\\n  list-style-type: none;\\r\\n  text-align: left;\\r\\n  font-size: larger;\\r\\n  padding: 5px 0;\\r\\n}\\r\\n\\r\\n.item-list {\\r\\n  position: absolute;\\r\\n  top: 6rem;\\r\\n}\\r\\n\\r\\n.item-list h3 {\\r\\n  text-align: center;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  text-align: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/accessButton.js":
/*!*****************************!*\
  !*** ./src/accessButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/comment.js\");\n/* harmony import */ var _newComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newComment.js */ \"./src/newComment.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\n\r\nconst popupWrapper = document.querySelector('.popup-wrapper');\r\n\r\nconst accessComment = () => {\r\n  const popUps = [...document.querySelectorAll('.pop')];\r\n  popUps.forEach((popUp) => {\r\n    popUp.addEventListener('click', () => {\r\n      popupWrapper.classList.add('show');\r\n      const { id } = popUp;\r\n      (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\r\n      (0,_newComment_js__WEBPACK_IMPORTED_MODULE_1__.commentAccess)(id);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accessComment);\n\n//# sourceURL=webpack://kanban/./src/accessButton.js?");

/***/ }),

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayImage.js */ \"./src/displayImage.js\");\n/* harmony import */ var _newComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newComment.js */ \"./src/newComment.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\n\r\nconst commentSection = document.querySelector('.comment-popup');\r\n\r\nconst displayPop = async (index) => {\r\n  const meals = await (0,_displayImage_js__WEBPACK_IMPORTED_MODULE_0__.getMeals)();\r\n  commentSection.innerHTML = `\r\n  <div class=\"popup-top\">\r\n  <button class=\"close\"> <i class=\"fas fa-times\"></i> </button>\r\n    <div class=\"meal-data\">\r\n    <img src=\"${meals[index - 1].strCategoryThumb}\" alt=\"s Image\" class=\"meal-img\">\r\n    <h3> ${meals[index - 1].strCategory} <h3>\r\n    </div>\r\n    <p class=\"description\"> ${meals[index - 1].strCategoryDescription} </p>\r\n    <div class=\"new-comments\">\r\n    <h3> Comments <span class=\"comments-count\"></span> </h3>\r\n    <ul data-id=\"${meals[index - 1].idCategory}\" class=\"comment-list\"> </ul>\r\n    </div>\r\n</div>\r\n  <form class=\"popup-bottom\" name=\"form-dom\">\r\n  <h3> Add your comment</h3>\r\n  <input type=\"text\" class=\"userName\" id=\"${meals[index - 1].idCategory}\" name=\"user-name\" placeholder=\"Type Your Name\" required>\r\n  <textarea class=\"userComment\" id=\"comment-id\" name=\"comment-name\" placeholder=\"Comment here ...\" rows=\"10\" cols=\"50\" required></textarea>\r\n  <button type=\"submit\" class=\"comm-sub\">Submit</button>\r\n  </form>`;\r\n\r\n  const popupWrapper = document.querySelector('.popup-wrapper');\r\n  const close = document.querySelector('.close');\r\n  close.addEventListener('click', () => {\r\n    popupWrapper.classList.remove('show');\r\n  });\r\n  (0,_newComment_js__WEBPACK_IMPORTED_MODULE_1__.displayComment)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPop);\n\n//# sourceURL=webpack://kanban/./src/comment.js?");

/***/ }),

/***/ "./src/displayImage.js":
/*!*****************************!*\
  !*** ./src/displayImage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadData\": () => (/* binding */ loadData),\n/* harmony export */   \"getMeals\": () => (/* binding */ getMeals)\n/* harmony export */ });\n/* harmony import */ var _accessButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessButton.js */ \"./src/accessButton.js\");\n/* harmony import */ var _likes_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes_api.js */ \"./src/likes_api.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\n\r\nconst foodApi = 'https://themealdb.com/api/json/v1/1/categories.php';\r\nconst mealList = document.querySelector('.meal-list');\r\nconst itemList = document.querySelector('.item-list');\r\n\r\nconst getMeals = async () => {\r\n  const response = await fetch(`${foodApi}`);\r\n  const data = await response.json();\r\n  const meal = data.categories;\r\n  return meal;\r\n};\r\n\r\nconst loadData = async () => {\r\n  const likesStorage = JSON.parse(localStorage.getItem('likes') || '[]');\r\n  const displayData = await getMeals();\r\n  let display = '';\r\n  displayData.forEach((element) => {\r\n    let likeVariable = 0;\r\n    likesStorage.forEach((likes) => {\r\n      if (element.idCategory === likes.item_id) {\r\n        likeVariable = likes.likes;\r\n      }\r\n    });\r\n    display += `   \r\n      <li id=\"${element.idCategory}\">\r\n      <img src=\"${element.strCategoryThumb}\" alt=\"Food\">\r\n      <div class=\"name\">\r\n      <h4>${element.strCategory}</h4>\r\n      <i data-id=\"${element.idCategory}\" class=\"far fa-heart like\"></i>\r\n      <span id=\"like${element.idCategory}\" class=\"likes-count\">${likeVariable} Likes</span>\r\n      </div>\r\n      <button type=\"submit\" class=\"pop\" id=\"${element.idCategory}\">Comments</button>\r\n      </li>`;\r\n  });\r\n  mealList.innerHTML = display;\r\n  (0,_likes_api_js__WEBPACK_IMPORTED_MODULE_1__.allHearts)();\r\n  (0,_accessButton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  await (0,_likes_api_js__WEBPACK_IMPORTED_MODULE_1__.likesDisplay)();\r\n};\r\n\r\nconst totalItems = (arg) => {\r\n  let displayLength = '';\r\n  displayLength += `\r\n  <h3>Cuisine ${arg.length}</h3>`;\r\n  itemList.innerHTML = displayLength;\r\n};\r\n\r\nconst fetchData = () => {\r\n  fetch('https://themealdb.com/api/json/v1/1/categories.php')\r\n    .then((response) => response.json())\r\n    .then((data) => totalItems(data.categories))\r\n    .catch((error) => new Error(error));\r\n};\r\nfetchData();\r\n\r\n\n\n//# sourceURL=webpack://kanban/./src/displayImage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _displayImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayImage.js */ \"./src/displayImage.js\");\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', _displayImage_js__WEBPACK_IMPORTED_MODULE_1__.loadData);\n\n//# sourceURL=webpack://kanban/./src/index.js?");

/***/ }),

/***/ "./src/likes_api.js":
/*!**************************!*\
  !*** ./src/likes_api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allHearts\": () => (/* binding */ allHearts),\n/* harmony export */   \"likesDisplay\": () => (/* binding */ likesDisplay)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst apiId = 'PPe1jteASeyGFemQLBaU/likes';\r\n\r\nconst likeId = async (id) => {\r\n  const response = await fetch(`${involvementApi}${apiId}`,\r\n    {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n    });\r\n  const returnObject = await response.json;\r\n  return returnObject;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const res = await fetch(`${involvementApi}${apiId}`);\r\n  return res.json();\r\n};\r\n\r\nconst allHearts = async () => {\r\n  const allLikes = document.querySelectorAll('.like');\r\n  allLikes.forEach((like) => {\r\n    like.addEventListener('click', async (e) => {\r\n      const id = e.target.getAttribute('data-id');\r\n      await likeId(id);\r\n      const allLikesArray = await getLikes();\r\n      localStorage.setItem('likes', JSON.stringify(allLikesArray));\r\n      const getNewLikes = allLikesArray.find((element) => element.item_id === id).likes;\r\n      like.parentElement.querySelector(`#like${id}`).textContent = `${getNewLikes} Likes`;\r\n    });\r\n  });\r\n};\r\n\r\nconst likesDisplay = async () => {\r\n  const allLikesArray = await getLikes();\r\n  allLikesArray.forEach((obj) => {\r\n    document.querySelector(`#like${obj.item_id}`).textContent = `${obj.likes} Likes`;\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://kanban/./src/likes_api.js?");

/***/ }),

/***/ "./src/newComment.js":
/*!***************************!*\
  !*** ./src/newComment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayComment\": () => (/* binding */ displayComment),\n/* harmony export */   \"commentAccess\": () => (/* binding */ commentAccess)\n/* harmony export */ });\nconst commentId = 'KrIM1SfJgCtztyQoatez';\r\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n\r\nconst commentUrl = `${baseUrl}${commentId}/comments`;\r\n\r\nconst commentAccess = async (id) => {\r\n  const getPath = `?item_id=${id}`;\r\n  const finalUrl = await fetch(`${commentUrl}${getPath}`);\r\n  const finalResult = await finalUrl.json();\r\n\r\n  finalResult.forEach((result) => {\r\n    const commentCount = document.querySelector('.comments-count');\r\n    const commentList = document.querySelector('.comment-list');\r\n    const listContent = document.createElement('li');\r\n    listContent.classList = 'list-content';\r\n    listContent.innerText = `${result.creation_date} ${result.username}: ${result.comment}`;\r\n    commentCount.innerText = `(${finalResult.length} Comments)`;\r\n    result.username = '';\r\n    result.comment = '';\r\n    commentList.appendChild(listContent);\r\n  });\r\n};\r\n\r\nconst displayComment = () => {\r\n  const form = document.forms['form-dom'];\r\n  const name = document.querySelector('.userName');\r\n  const comment = document.querySelector('.userComment');\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n\r\n    fetch(commentUrl, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: name.id,\r\n        username: name.value,\r\n        comment: comment.value,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n    }).then((response) => response.text()).then(async () => {\r\n      await commentAccess(name.id);\r\n      name.value = '';\r\n      comment.value = '';\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://kanban/./src/newComment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;