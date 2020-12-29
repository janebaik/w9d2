/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(option){\n    this.pos = option.pos; //option.pos === the value of the pos \n    this.vel = option.vel;\n    this.radius = option.radius;\n    this.color = option.color;\n}\n\n// document.addEventListener('DOMContentLoaded', (draw)=>{\n    MovingObject.prototype.draw = function(ctx){\n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n\n        ctx.arc(\n            this.pos[0],\n            this.pos[1],\n            this.radius,\n            0,\n            2 * Math.PI,\n            false\n        );\n\n        ctx.fill();\n    }\n// });\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n}\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = 500;\n    canvasEl.height = 500\n    const ctx = canvasEl.getContext('2d');\n    window.ctx = ctx;\n    // test\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 50,\n        color: \"#00FF00\"\n    });\n    mo.draw(ctx);\n    // test\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;