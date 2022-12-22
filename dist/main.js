/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(c1, c2) {
    const shipCoords = calcShipCoords();
    let lives = shipCoords.length;
    let isSunk = false;

    function calcShipCoords() {
        const [x1, y1] = c1.split('');
        const [x2, y2] = c2.split('');
        const shipCoords = [];
        if (x1 === x2){
            for(let i = y1; i <= y2; i++){
                shipCoords.push(`${x1}${i}`);
            }
        } else if (y1 === y2) {
            let ref = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9};
            for(let i = ref[x1]; i<= ref[x2]; i++){
                shipCoords.push(`${String.fromCharCode(97 + i)}${y1}`)
            }
            
        }
        return shipCoords;
    }

    function checkIfSunk() {
        if(lives === 0) isSunk = true;
    }

    function hit() {
        lives--;
        checkIfSunk();
    }

    return {shipCoords}
}




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckMsbUNBQW1DLEdBQUcsRUFBRSxFQUFFO0FBQzFDO0FBQ0EsVUFBVTtBQUNWLHVCQUF1QjtBQUN2QixpQ0FBaUMsYUFBYTtBQUM5QyxtQ0FBbUMsNEJBQTRCLEVBQUUsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNjO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gU2hpcChjMSwgYzIpIHtcclxuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBjYWxjU2hpcENvb3JkcygpO1xyXG4gICAgbGV0IGxpdmVzID0gc2hpcENvb3Jkcy5sZW5ndGg7XHJcbiAgICBsZXQgaXNTdW5rID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY1NoaXBDb29yZHMoKSB7XHJcbiAgICAgICAgY29uc3QgW3gxLCB5MV0gPSBjMS5zcGxpdCgnJyk7XHJcbiAgICAgICAgY29uc3QgW3gyLCB5Ml0gPSBjMi5zcGxpdCgnJyk7XHJcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IFtdO1xyXG4gICAgICAgIGlmICh4MSA9PT0geDIpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5MTsgaSA8PSB5MjsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChgJHt4MX0ke2l9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHkxID09PSB5Mikge1xyXG4gICAgICAgICAgICBsZXQgcmVmID0geydhJzogMCwgJ2InOiAxLCAnYyc6IDIsICdkJzogMywgJ2UnOiA0LCAnZic6IDUsICdnJzogNiwgJ2gnOiA3LCAnaSc6IDgsICdqJzogOX07XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHJlZlt4MV07IGk8PSByZWZbeDJdOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBpKX0ke3kxfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaGlwQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSWZTdW5rKCkge1xyXG4gICAgICAgIGlmKGxpdmVzID09PSAwKSBpc1N1bmsgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgICAgICBsaXZlcy0tO1xyXG4gICAgICAgIGNoZWNrSWZTdW5rKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzaGlwQ29vcmRzfVxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9