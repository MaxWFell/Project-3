"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 7401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8851);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4559);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);




function cart() {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    // loader
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    // total price
    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [checkedOut, setCheckedOut] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchCart = async (user_id)=>{
        // fetch cart from /api/cart
        const res = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "get",
                user_id: user_id
            })
        });
        // get response
        const data = await res.json();
        // if successful, set cart
        if (data.success) {
            setCart(data.products);
            // calculate total price
            let total = 0;
            data.products.forEach((product)=>{
                total += product.price * product.quantityOrdered;
            });
            setTotalPrice(total);
            setLoading(false);
        } else {
            toastr__WEBPACK_IMPORTED_MODULE_3___default().error("Failed to fetch cart");
        }
    };
    const removeFromCart = async (product_id)=>{
        // send post request to /api/cart
        const res = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "remove",
                user_id: user.id,
                data: {
                    product: product_id
                }
            })
        });
        // get response
        const data = await res.json();
        // if successful, remove product from cart
        if (data.success) {
            toastr__WEBPACK_IMPORTED_MODULE_3___default().success("Successfully removed from cart");
            fetchCart(user.id);
        } else {
            toastr__WEBPACK_IMPORTED_MODULE_3___default().error("Failed to remove from cart");
        }
    };
    const checkout = async ()=>{
        // send post request to /api/cart
        // const res = await fetch("/api/cart", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         operation: "checkout",
        //         user_id: user.id,
        //         data: {
        //         },
        //     }),
        // });
        const res = await fetch("/api/checkout_session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id
            })
        });
        // get response
        const data = await res.json();
        if (data.success) {
            window.location.href = data.url;
        } else {
            toastr__WEBPACK_IMPORTED_MODULE_3___default().error("Failed to checkout");
        }
    };
    // check if user is logged in, local storage
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        // if user is logged in, show profile
        if (user) {
            setUser(user);
            // fetch cart
            fetchCart(user.id);
        } else {
            // redirect to login page
            window.location.href = "/login";
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                // linear gradient from #0073ff to #00c4ff
                backgroundImage: "linear-gradient(90deg, #0073ff 0%, #00c4ff 100%)",
                minHeight: "100vh"
            },
            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-5 text-center text-light",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "display-4 font-weight-bold",
                    children: "Loading cart..."
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    !checkedOut ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "clearfix",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "float-left",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "py-4 text-light",
                                            children: "Cart"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "float-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/products",
                                            className: "btn btn-lg btn-light mt-4",
                                            children: "Shop more products"
                                        })
                                    })
                                ]
                            }),
                            cart && cart.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CartItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        product: product,
                                        removeFromCart: removeFromCart
                                    })
                                }, product._id)),
                            cart && cart.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-5 text-center text-light",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "display-4 font-weight-bold",
                                        children: "Cart is empty"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/products",
                                        className: "btn btn-light",
                                        children: "Shop now"
                                    })
                                ]
                            }),
                            cart && cart.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-5 text-right text-light",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "display-4 font-weight-bold",
                                        children: [
                                            "Total: $",
                                            totalPrice.toFixed(2)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn btn-lg btn-light",
                                        onClick: checkout,
                                        children: "Checkout"
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "py-4 text-light",
                                children: "Your order has been placed!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/products",
                                className: "btn btn-lg btn-light",
                                children: "Shop more products"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-5"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4559:
/***/ ((module) => {

module.exports = require("toastr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [851], () => (__webpack_exec__(7401)));
module.exports = __webpack_exports__;

})();