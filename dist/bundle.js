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

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction dialogFun() {\n  const dialog = document.querySelector(\".form-window\");\n  const form = document.querySelector(\".task-form\");\n  document.querySelector(\".show-form\").onclick = function () {\n    dialog.showModal();\n    document.body.classList.add(\"dialog-open\"); // Add class to body when dialog is open\n  };\n  document.querySelector(\".hide-form\").onclick = function () {\n    dialog.close();\n    document.body.classList.remove(\"dialog-open\"); // Remove class from body when dialog is closed\n  };\n  form.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    dialog.close();\n    document.body.classList.remove(\"dialog-open\"); // Make sure to remove the class after submission\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogFun);\n\n\n//# sourceURL=webpack://todo-list/./src/dialog.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ \"./src/dialog.js\");\n/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskConstructor */ \"./src/taskConstructor.js\");\n\n\n(0,_dialog__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_taskConstructor__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/taskConstructor.js":
/*!********************************!*\
  !*** ./src/taskConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction taskCreator() {\n  const submitBtn = document.querySelector(\"#submit-btn\");\n  const newTaskForm = document.querySelector(\".task-form\");\n  const task = function taskFun(title, description, date) {\n    this.title = title;\n    this.description = description;\n    this.date = date;\n  };\n  const newTask = new task();\n  function addTask() {\n    const hero = document.querySelector(\".hero\");\n    newTask.title = newTaskForm.title.value;\n    newTask.description = newTaskForm.description.value;\n    newTask.date = newTaskForm.date.value;\n\n    const formatter = new Intl.DateTimeFormat(\"en-US\", {\n      day: \"2-digit\",\n      month: \"2-digit\",\n      year: \"numeric\",\n    });\n    formattedDate = formatter.format(newTask.date);\n\n    const task = document.createElement(\"div\");\n    task.setAttribute(\"class\", \"task\");\n\n    const checkmark = document.createElement(\"button\");\n    task.appendChild(checkmark);\n    hero.appendChild(task);\n\n    const title = document.createElement(\"p\");\n    title.textContent = newTask.title;\n    task.appendChild(title);\n\n    const description = document.createElement(\"p\");\n    description.textContent = newTask.description;\n    task.appendChild(description);\n\n    const date = document.createElement(\"p\");\n\n    formattedDate.textContent = format;\n    task.appendChild(date);\n\n    hero.appendChild(newTask);\n  }\n  submitBtn.addEventListener(\"click\", function () {\n    addTask();\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCreator);\n\n\n//# sourceURL=webpack://todo-list/./src/taskConstructor.js?");

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
/******/ 			// no module.id needed
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