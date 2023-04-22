"use strict";
(() => {
var exports = {};
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 9401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3929);

// managing pets
async function handler(req, res) {
    // get db
    const client = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
    const { operation , data  } = req.body;
    // get db
    const db = client.db();
    if (operation == "add") {
        const { pet  } = data;
        console.log(pet);
        await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .insertPet */ .h9)(db, pet);
        res.status(200).json({
            success: true
        });
    }
    if (operation == "get") {
        const { user_id  } = data;
        const pets = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .getPets */ .p2)(db, user_id);
        res.status(200).json({
            success: true,
            pets
        });
    }
    if (operation == "delete") {
        const { pet_id  } = data;
        await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .deletePet */ .on)(db, pet_id);
        res.status(200).json({
            success: true
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [929], () => (__webpack_exec__(9401)));
module.exports = __webpack_exports__;

})();