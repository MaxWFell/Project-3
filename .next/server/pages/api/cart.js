"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3929);

// register user: name, email, password
async function handler(req, res) {
    // get db
    const client = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
    const { operation , user_id , data  } = req.body;
    // get db
    const db = client.db();
    if (operation == "add") {
        const { product  } = data;
        await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .addToCart */ .Xq)(db, user_id, product);
        res.status(200).json({
            success: true
        });
    }
    if (operation == "get") {
        const cart = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .getCart */ .dv)(db, user_id);
        const products = [];
        for (const prod of cart.products){
            const product = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .getProduct */ .wv)(db, prod.product_id);
            products.push({
                ...product,
                quantityOrdered: prod.quantity
            });
        }
        res.status(200).json({
            success: true,
            products
        });
    }
    if (operation == "remove") {
        const { product  } = data;
        await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .removeFromCart */ .h2)(db, user_id, product);
        res.status(200).json({
            success: true
        });
    }
    if (operation == "checkout") {
        const cart = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .getCart */ .dv)(db, user_id);
        const products = [];
        for (const prod of cart.products){
            const product = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .getProduct */ .wv)(db, prod.product_id);
            products.push({
                ...product,
                quantityOrdered: prod.quantity
            });
        }
        const order = {
            user_id,
            products,
            date: new Date()
        };
        await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .addOrder */ .fS)(db, order);
        // clear cart
        await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .clearCart */ .LL)(db, user_id);
        res.status(200).json({
            success: true
        });
    }
    // get orders
    if (operation == "orders") {
        const orders = await (0,_db_db__WEBPACK_IMPORTED_MODULE_0__/* .getOrders */ .AU)(db, user_id);
        const processedOrders = [];
        // add total price for each order
        for (const order of orders){
            let totalPrice = 0;
            for (const product of order.products){
                totalPrice += product.price * product.quantityOrdered;
            }
            processedOrders.push({
                ...order,
                totalPrice
            });
        }
        res.status(200).json({
            success: true,
            orders: processedOrders
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
var __webpack_exports__ = __webpack_require__.X(0, [929], () => (__webpack_exec__(2311)));
module.exports = __webpack_exports__;

})();