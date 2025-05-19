"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/flights";
exports.ids = ["pages/api/flights"];
exports.modules = {

/***/ "(api)/./pages/api/flights.js":
/*!******************************!*\
  !*** ./pages/api/flights.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Only POST allowed\"\n        });\n    }\n    const { origin, destination, date } = req.body;\n    const tokenRes = await fetch(\"https://test.api.amadeus.com/v1/security/oauth2/token\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: new URLSearchParams({\n            grant_type: \"client_credentials\",\n            client_id: process.env.AMADEUS_CLIENT_ID,\n            client_secret: process.env.AMADEUS_CLIENT_SECRET\n        })\n    });\n    const tokenData = await tokenRes.json();\n    const token = tokenData.access_token;\n    const response = await fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=1&max=5`, {\n        headers: {\n            Authorization: `Bearer ${token}`\n        }\n    });\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmxpZ2h0cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFvQjtJQUM3RDtJQUVBLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHUixJQUFJUyxJQUFJO0lBRTlDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx5REFBeUQ7UUFDcEZULFFBQVE7UUFDUlUsU0FBUztZQUFFLGdCQUFnQjtRQUFvQztRQUMvREgsTUFBTSxJQUFJSSxnQkFBZ0I7WUFDeEJDLFlBQVk7WUFDWkMsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7WUFDeENDLGVBQWVILFFBQVFDLEdBQUcsQ0FBQ0cscUJBQXFCO1FBQ2xEO0lBQ0Y7SUFFQSxNQUFNQyxZQUFZLE1BQU1YLFNBQVNOLElBQUk7SUFDckMsTUFBTWtCLFFBQVFELFVBQVVFLFlBQVk7SUFFcEMsTUFBTUMsV0FBVyxNQUFNYixNQUFNLENBQUMsMEVBQTBFLEVBQUVMLE9BQU8seUJBQXlCLEVBQUVDLFlBQVksZUFBZSxFQUFFQyxLQUFLLGVBQWUsQ0FBQyxFQUFFO1FBQzlMSSxTQUFTO1lBQ1BhLGVBQWUsQ0FBQyxPQUFPLEVBQUVILE1BQU0sQ0FBQztRQUNsQztJQUNGO0lBRUEsTUFBTUksT0FBTyxNQUFNRixTQUFTcEIsSUFBSTtJQUNoQ0gsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ3NCO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsd2lzZS1hbWFkZXVzLWFwaS8uL3BhZ2VzL2FwaS9mbGlnaHRzLmpzP2U4ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ09ubHkgUE9TVCBhbGxvd2VkJyB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgb3JpZ2luLCBkZXN0aW5hdGlvbiwgZGF0ZSB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgdG9rZW5SZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90ZXN0LmFwaS5hbWFkZXVzLmNvbS92MS9zZWN1cml0eS9vYXV0aDIvdG9rZW4nLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcbiAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnLFxuICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5BTUFERVVTX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LkFNQURFVVNfQ0xJRU5UX1NFQ1JFVFxuICAgIH0pXG4gIH0pO1xuXG4gIGNvbnN0IHRva2VuRGF0YSA9IGF3YWl0IHRva2VuUmVzLmpzb24oKTtcbiAgY29uc3QgdG9rZW4gPSB0b2tlbkRhdGEuYWNjZXNzX3Rva2VuO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdGVzdC5hcGkuYW1hZGV1cy5jb20vdjIvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycz9vcmlnaW5Mb2NhdGlvbkNvZGU9JHtvcmlnaW59JmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlPSR7ZGVzdGluYXRpb259JmRlcGFydHVyZURhdGU9JHtkYXRlfSZhZHVsdHM9MSZtYXg9NWAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwiZGF0ZSIsImJvZHkiLCJ0b2tlblJlcyIsImZldGNoIiwiaGVhZGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsImdyYW50X3R5cGUiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiQU1BREVVU19DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiQU1BREVVU19DTElFTlRfU0VDUkVUIiwidG9rZW5EYXRhIiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJyZXNwb25zZSIsIkF1dGhvcml6YXRpb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/flights.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/flights.js"));
module.exports = __webpack_exports__;

})();