"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 3072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "toastr"
var external_toastr_ = __webpack_require__(4559);
var external_toastr_default = /*#__PURE__*/__webpack_require__.n(external_toastr_);
;// CONCATENATED MODULE: ./components/Login.js



function Login() {
    // login
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    // register
    const [regName, setRegName] = (0,external_react_.useState)("");
    const [regEmail, setRegEmail] = (0,external_react_.useState)("");
    const [regPassword, setRegPassword] = (0,external_react_.useState)("");
    // login
    const handleLogin = async (e)=>{
        e.preventDefault();
        // send login request to /login
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        // get response
        const data = await res.json();
        // if login successful, redirect to home page
        if (data.success) {
            // insert user into local storage
            localStorage.setItem("user", JSON.stringify(data.user));
            window.location.href = "/profile";
        } else {
            // login failed
            external_toastr_default().error("Incorrect email or password");
        }
    };
    // register
    const handleRegister = async (e)=>{
        e.preventDefault();
        // send register request to /register
        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: regName,
                email: regEmail,
                password: regPassword
            })
        });
        // get response
        const data = await res.json();
        // if register successful, redirect to home page
        if (data.success) {
            // insert user into local storage, remove password
            const user = data.user;
            delete user.password;
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "/profile";
        } else {
            // register failed
            external_toastr_default().error("Failed to register");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                backgroundColor: "#000000",
                height: "100vh"
            },
            className: "pt-5",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container pt-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6 pt-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card p-5 m-3 m-md-5 rounded-lg h-100",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Log In"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "email",
                                                        children: "Email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        className: "form-control",
                                                        id: "email",
                                                        placeholder: "Email",
                                                        onChange: (e)=>setEmail(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "password",
                                                        children: "Password"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "password",
                                                        className: "form-control",
                                                        id: "password",
                                                        placeholder: "Password",
                                                        onChange: (e)=>setPassword(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "btn btn-primary",
                                                onClick: handleLogin,
                                                children: "Log In"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6 pt-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card p-5 m-3 m-md-5 rounded-lg h-100",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Sign Up"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "regName",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        id: "regName",
                                                        placeholder: "Name",
                                                        onChange: (e)=>setRegName(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "regEmail",
                                                        children: "Email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        className: "form-control",
                                                        id: "regEmail",
                                                        placeholder: "Email",
                                                        onChange: (e)=>setRegEmail(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "password",
                                                        children: "Password"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "password",
                                                        className: "form-control",
                                                        id: "password",
                                                        placeholder: "Password",
                                                        onChange: (e)=>setRegPassword(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "btn btn-primary",
                                                onClick: handleRegister,
                                                children: "Sign Up"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const components_Login = (Login);

;// CONCATENATED MODULE: ./pages/login.js


function login() {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Login, {});
}
/* harmony default export */ const pages_login = (login);


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
var __webpack_exports__ = (__webpack_exec__(3072));
module.exports = __webpack_exports__;

})();