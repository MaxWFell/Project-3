"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
    const router = (0,router_.useRouter)();
    const [user, setUser] = (0,external_react_.useState)(null);
    const [search, setSearch] = (0,external_react_.useState)("");
    // search
    const searchProducts = async (e)=>{
        e.preventDefault();
        // redirect to search page
        // window.location.href = `/products?q=${search}`;
        router.push(`/products?q=${search}`);
    };
    // check if user is logged in, local storage
    (0,external_react_.useEffect)(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        // if user is logged in, show profile
        if (user) {
            setUser(user);
        }
        // check if query params exist
        if (router.query && router.query.q) {
            setSearch(router.query.q);
        } else {
            setSearch("");
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            style: {
                backgroundColor: "#1c1917"
            },
            className: "navbar navbar-expand-lg navbar-light py-3 px-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "navbar-brand",
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/logo.png",
                        width: "130",
                        height: "130",
                        className: "d-inline-block align-top",
                        alt: "",
                        loading: "lazy"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler text-light",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: "..."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav mr-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item active",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link text-light",
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link text-light",
                                        href: "/profile",
                                        children: "Profile"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link text-light",
                                        href: "/products",
                                        children: "Products"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link text-light",
                                        href: "/support",
                                        children: "Support"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link text-light",
                                        href: "/services",
                                        children: "Services"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        className: "nav-link text-light",
                                        href: "/logout",
                                        children: [
                                            "Logout (",
                                            user.name,
                                            ")"
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link text-light",
                                        href: "/login",
                                        children: "Login"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "form-inline my-2 my-lg-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "form-control mr-sm-2",
                                    value: search,
                                    type: "search",
                                    placeholder: "Search",
                                    "aria-label": "Search",
                                    onChange: (e)=>setSearch(e.target.value)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-primary my-2 my-sm-0",
                                    type: "submit",
                                    onClick: searchProducts,
                                    children: "Search"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Footer.js

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            style: {
                backgroundColor: "#1c1917"
            },
            className: "footer py-4 fixed-bottom text-light",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Copyright ",
                        new Date().getFullYear(),
                        ". All rights reserved"
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.js




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Pets Online"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "A site for maintaining your pets and buying stuff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./node_modules/toastr/build/toastr.min.css
var toastr_min = __webpack_require__(4535);
;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [228], () => (__webpack_exec__(7319)));
module.exports = __webpack_exports__;

})();