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

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction detailsFun(task) {\n  const title = task.title;\n  const description = task.description;\n  const date = task.date;\n  const project = task.project;\n  const detailsWindow = document.createElement(\"dialog\");\n  detailsWindow.classList.add(\"details-window\");\n\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n  const headerText = document.createElement(\"h2\");\n  headerText.textContent = \"Details\";\n  header.appendChild(headerText);\n  const closeBtn = document.createElement(\"button\");\n  closeBtn.innerHTML = `<i class=\"bi bi-x\"></i>`;\n  closeBtn.addEventListener(\"click\", function () {\n    detailsWindow.close();\n    detailsWindow.remove();\n  });\n  header.appendChild(closeBtn);\n  detailsWindow.appendChild(header);\n\n  const taskTitle = document.createElement(\"p\");\n  taskTitle.textContent = title;\n  detailsWindow.appendChild(taskTitle);\n\n  const taskDescription = document.createElement(\"p\");\n  taskDescription.textContent = description;\n  detailsWindow.appendChild(taskDescription);\n\n  const taskDate = document.createElement(\"p\");\n  taskDate.textContent = `Finish Date:    ${date}`;\n  detailsWindow.appendChild(taskDate);\n\n  document.body.appendChild(detailsWindow);\n  detailsWindow.showModal();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailsFun);\n\n\n//# sourceURL=webpack://todo-list/./src/details.js?");

/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction dialogFun() {\n  const dialog = document.querySelector(\".form-window\");\n  const form = document.querySelector(\".task-form\");\n  const title = document.querySelector(\"#title\");\n  const description = document.querySelector(\"#description\");\n  const date = document.querySelector(\"#date\");\n  document.querySelector(\".show-form\").onclick = function () {\n    dialog.showModal();\n    document.body.classList.add(\"dialog-open\");\n  };\n  document.querySelector(\".hide-form\").onclick = function () {\n    form.reset();\n    dialog.close();\n  };\n  form.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    form.reset();\n    dialog.close();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogFun);\n\n\n//# sourceURL=webpack://todo-list/./src/dialog.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ \"./src/dialog.js\");\n/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskConstructor */ \"./src/taskConstructor.js\");\n\n\n(0,_taskConstructor__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_dialog__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction projectMaker() {\n  let projectSelected;\n  let lastClickedBtn = null;\n  const projectBtns = document.querySelectorAll(\"#project-btn\");\n\n  projectBtns.forEach((btn) => {\n    btn.addEventListener(\"click\", function () {\n      if (lastClickedBtn !== null) {\n        lastClickedBtn.style.backgroundColor = \"\"; //\n      }\n      btn.style.backgroundColor = \"#d2d0ce\";\n      projectSelected = btn.textContent;\n      lastClickedBtn = btn;\n    });\n  });\n  return projectSelected;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectMaker);\n\n\n//# sourceURL=webpack://todo-list/./src/nav.js?");

/***/ }),

/***/ "./src/taskConstructor.js":
/*!********************************!*\
  !*** ./src/taskConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n\n\n\nfunction taskCreator() {\n  (0,_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const submitBtn = document.querySelector(\"#submit-btn\");\n  const newTaskForm = document.querySelector(\".task-form\");\n  const taskContainer = document.querySelector(\".task-container\");\n\n  function task(title, description, date, project) {\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.project = project;\n  }\n  let taskArray = [];\n  function addTask() {\n    const newTask = new task(\n      newTaskForm.title.value,\n      newTaskForm.description.value,\n      newTaskForm.date.value,\n      (0,_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    );\n\n    const taskElement = document.createElement(\"div\");\n    taskElement.setAttribute(\"class\", \"task\");\n\n    const titleDiv = document.createElement(\"div\");\n    titleDiv.classList.add(\"title-div\");\n    taskElement.appendChild(titleDiv);\n\n    const checkmark = document.createElement(\"input\");\n    checkmark.type = \"checkbox\";\n    checkmark.classList.add(\"checkmark\");\n    titleDiv.appendChild(checkmark);\n\n    const title = document.createElement(\"p\");\n    title.textContent = newTask.title;\n    title.classList.add(\"title\");\n    titleDiv.appendChild(title);\n\n    const descriptionElement = document.createElement(\"p\");\n    descriptionElement.textContent = newTask.description;\n\n    const options = document.createElement(\"div\");\n    options.classList.add(\"options-and-date\");\n    taskElement.appendChild(options);\n\n    const details = document.createElement(\"button\");\n    details.textContent = \"Details\";\n    details.classList.add(\"details\");\n    options.appendChild(details);\n    details.addEventListener(\"click\", function () {\n      (0,_details__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newTask);\n    });\n\n    const dateElement = document.createElement(\"p\");\n    dateElement.textContent =\n      newTask.date.length === 0 ? \"No Date\" : newTask.date;\n    dateElement.classList.add(\"date\");\n    options.appendChild(dateElement);\n\n    const remove = document.createElement(\"button\");\n    remove.innerHTML = `<i class=\"bi bi-trash\"></i>`;\n    options.appendChild(remove);\n    remove.addEventListener(\"click\", function () {\n      taskElement.remove();\n    });\n\n    if (title.textContent !== \"\") {\n      taskContainer.appendChild(taskElement);\n      taskArray.push(newTask);\n      console.log(taskArray);\n    }\n    console.log(newTask.projectSelected);\n  }\n\n  submitBtn.addEventListener(\"click\", function () {\n    addTask();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCreator);\n\n\n//# sourceURL=webpack://todo-list/./src/taskConstructor.js?");

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