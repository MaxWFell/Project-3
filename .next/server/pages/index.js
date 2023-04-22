"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/TeamMate.js

function TeamMate({ name , role , imagePath  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "img-fluid rounded-circle shadow",
                src: imagePath,
                alt: name + `'s avator`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "mt-3 font-weight-bold",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "lead",
                children: role
            })
        ]
    });
}
/* harmony default export */ const components_TeamMate = (TeamMate);

;// CONCATENATED MODULE: ./components/Team.js


function Team({ members  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "text-center font-weight-bold",
                children: "Our team"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center lead",
                children: "Dedicated to quality and finding the best for pets"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row mt-5",
                children: members.map((member, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 px-4 text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_TeamMate, {
                            name: member.name,
                            role: member.role,
                            imagePath: member.imagePath
                        })
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const components_Team = (Team);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/index.js






function Home() {
    const router = (0,router_.useRouter)();
    const members = [
        {
            name: "Gerardo Ormeno",
            role: "Backend",
            imagePath: "/images/G.png"
        },
        {
            name: "Max Fell",
            role: "Backend",
            imagePath: "/images/M.png"
        },
        {
            name: "Rose Black",
            role: "Backend",
            imagePath: "/images/R.png"
        },
        {
            name: "Adrian Bruno",
            role: "Frontend",
            imagePath: "/images/A.png"
        },
        {
            name: "Manuel Rodriquez",
            role: "Frontend",
            imagePath: "/images/M.png"
        },
        {
            name: "Zeus Cordeiro",
            role: "Frontend",
            imagePath: "/images/Z.png"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Pawsitively - Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Get personalized suggestions that your pets will love"
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
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundColor: "#000000"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "py-5 text-center text-light",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "display-4 font-weight-bold",
                                children: "Connecting You With The Best For Your Pets"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "lead",
                                children: "As pet owners we are always on the lookout for right foods, toys, treats and more for our pets. We hope we can facilitate finding those items that your pet will love!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-primary btn-lg",
                                onClick: ()=>router.push("/products"),
                                children: "Shop Now"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container py-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/cat-eating.jpg",
                                    className: "img-fluid"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-weight-bold",
                                        children: "Get personalized suggestions that your pets will love!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "lead",
                                        children: "We wanted to create an easy to use platform that would give you a chance to find items that would best suit your pets needs."
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundColor: "#000000"
                },
                className: "py-5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    // linear gradient from #0073ff to #00c4ff
                    backgroundImage: "linear-gradient(90deg, #0073ff 0%, #00c4ff 100%)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/cat-w-toy.avif",
                                    className: "img-fluid rounded-sm mt-n3"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-6 text-light",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-weight-bold",
                                        children: "Find your pets new favorite food, toys, treats and more!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "lead",
                                        children: "Create a complete profile for your furry friend, including their breed, age, and dietary needs. Then, browse our top recommended products for your pet's specific needs, from food and toys to grooming supplies and health supplements."
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundImage: "linear-gradient(90deg, #0073ff 0%, #00c4ff 100%)"
                },
                className: "py-5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container py-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Team, {
                        members: members
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-5"
            })
        ]
    });
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [636,675], () => (__webpack_exec__(322)));
module.exports = __webpack_exports__;

})();