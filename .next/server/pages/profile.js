"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 7329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4559);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__);



function profile() {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Add pet state
    const [petName, setPetName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [petType, setPetType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [petBreed, setPetBreed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [petSize, setPetSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [petAge, setPetAge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [petAllergies, setPetAllergies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [petDiet, setPetDiet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [petOtherNeeds, setPetOtherNeeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // list of pets
    const [pets, setPets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // list of orders
    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // show add pet form
    const [showAddPetForm, setShowAddPetForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // add pet to database
    const addPet = async ()=>{
        // send post request to /api/pets
        const res = await fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "add",
                data: {
                    pet: {
                        name: petName,
                        type: petType,
                        breed: petBreed,
                        size: petSize,
                        age: petAge,
                        allergies: petAllergies,
                        diet: petDiet,
                        other_needs: petOtherNeeds,
                        user_id: user.id
                    }
                }
            })
        });
        // get response
        const data = await res.json();
        // if successful, show success message
        if (data.success) {
            toastr__WEBPACK_IMPORTED_MODULE_2___default().success("Successfully added pet");
            setShowAddPetForm(false);
            getPets(user.id);
        } else {
            toastr__WEBPACK_IMPORTED_MODULE_2___default().error("Failed to add pet");
        }
    };
    // get pets from database
    const getPets = async (user_id)=>{
        // send get request to /api/pets
        const res = await fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "get",
                data: {
                    user_id: user_id
                }
            })
        });
        // get response
        const data = await res.json();
        // if successful, show success message
        if (data.success) {
            setPets(data.pets);
        } else {
            toastr__WEBPACK_IMPORTED_MODULE_2___default().error("Failed to get pets");
        }
    };
    // delete pet from database
    const deletePet = async (pet_id)=>{
        // send delete request to /api/pets
        const res = await fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "delete",
                data: {
                    pet_id: pet_id
                }
            })
        });
        // get response
        const data = await res.json();
        // if successful, show success message
        if (data.success) {
            toastr__WEBPACK_IMPORTED_MODULE_2___default().success("Successfully deleted pet");
            getPets(user.id);
        } else {
            toastr__WEBPACK_IMPORTED_MODULE_2___default().error("Failed to delete pet");
        }
    };
    // get orders from database
    const getOrders = async (user_id)=>{
        // send get request to /api/orders
        const res = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "orders",
                user_id: user_id
            })
        });
        // get response
        const data = await res.json();
        // if successful, show success message
        if (data.success) {
            setOrders(data.orders);
        } else {
            toastr__WEBPACK_IMPORTED_MODULE_2___default().error("Failed to get orders");
        }
    };
    // check if user is logged in, local storage
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        // if user is logged in, show profile
        if (user) {
            setUser(user);
            // get pets
            getPets(user.id);
            // get orders
            getOrders(user.id);
        } else {
            // redirect to login page
            window.location.href = "/login";
        }
    }, []);
    // if user is logged in, show profile
    if (user) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                backgroundColor: "#000000",
                minHeight: "100vh"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "py-5 text-center text-light",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "display-4 font-weight-bold",
                                    children: [
                                        "Welcome, ",
                                        user.name,
                                        "!"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lead",
                                    children: "This is your profile page. You can view your information and update it here."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "btn btn-primary btn-lg",
                                    onClick: ()=>setShowAddPetForm(true),
                                    children: "Add Pet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/wishlist",
                                    className: "btn btn-light mt-3",
                                    children: "My Wishlist"
                                })
                            ]
                        }),
                        showAddPetForm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "card-header",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "clearfix",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "float-left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "card-title",
                                                    children: "Add Pet"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "float-right",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn btn-outline-secondary",
                                                    onClick: ()=>setShowAddPetForm(false),
                                                    children: "\xd7"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "card-body",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petName",
                                                            children: "Pet Name"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "petName",
                                                            placeholder: "Enter pet name",
                                                            onChange: (e)=>setPetName(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petType",
                                                            children: "Type"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                            id: "petType",
                                                            className: "form-control",
                                                            onChange: (e)=>setPetType(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    selected: true,
                                                                    children: "Choose..."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Dog"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Cat"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Bird"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Rabbit"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Reptile"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Fish"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Other"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petBreed",
                                                            children: "Breed"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "petBreed",
                                                            placeholder: "Enter pet breed",
                                                            onChange: (e)=>setPetBreed(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petSize",
                                                            children: "Size"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                            id: "petSize",
                                                            className: "form-control",
                                                            onChange: (e)=>setPetSize(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    selected: true,
                                                                    children: "Choose..."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Small"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Medium"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    children: "Large"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petAge",
                                                            children: "Age"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "petAge",
                                                            placeholder: "Enter pet age",
                                                            onChange: (e)=>setPetAge(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petAllergies",
                                                            children: "Allergies"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "petAllergies",
                                                            placeholder: "Enter pet allergies",
                                                            onChange: (e)=>setPetAllergies(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petDiet",
                                                            children: "Diet needs"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "petDiet",
                                                            placeholder: "Enter pet diet",
                                                            onChange: (e)=>setPetDiet(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "petOther",
                                                            children: "Other needs"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "petOther",
                                                            placeholder: "Enter pet other needs",
                                                            onChange: (e)=>setPetOtherNeeds(e.target.value)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "card-footer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: "btn btn-primary",
                                            onClick: addPet,
                                            children: "Add Pet"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: "btn btn-outline-danger ml-4",
                                            onClick: ()=>setShowAddPetForm(false),
                                            children: "Cancel"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-light rounded-lg p-2 mt-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "",
                                    children: "My Pets"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        pets.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-12 mx-auto",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "lead",
                                                children: "You have no pets yet"
                                            })
                                        }),
                                        pets.map((pet)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-md-4",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "card mb-4 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card-header",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                className: "my-0 font-weight-normal",
                                                                children: pet.name
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card-body",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "card-text",
                                                                    children: [
                                                                        "Type: ",
                                                                        pet.type
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "card-text",
                                                                    children: [
                                                                        "Breed: ",
                                                                        pet.breed
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "card-text",
                                                                    children: [
                                                                        "Size: ",
                                                                        pet.size
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "card-text",
                                                                    children: [
                                                                        "Age: ",
                                                                        pet.age
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "card-text",
                                                                    children: [
                                                                        "Allergies: ",
                                                                        pet.allergies
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "card-text",
                                                                    children: [
                                                                        "Diet needs: ",
                                                                        pet.diet
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "card-text",
                                                                    children: [
                                                                        "Other needs: ",
                                                                        pet.other_needs
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "d-flex justify-content-between align-items-center",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "btn-group",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "btn btn-sm btn-outline-secondary",
                                                                            onClick: ()=>deletePet(pet._id),
                                                                            children: "Remove pet"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, pet._id))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-light rounded-lg p-2 mt-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "",
                                    children: "Order history"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        orders.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-12 mx-auto",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "lead",
                                                children: "You have no orders yet"
                                            })
                                        }),
                                        orders.map((order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-md-12",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        new Date(order.date).toLocaleDateString(),
                                                        " - ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: "#",
                                                            children: [
                                                                "#",
                                                                order._id
                                                            ]
                                                        }),
                                                        "\xa0 - ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "text-success",
                                                            children: [
                                                                "$",
                                                                order.totalPrice.toFixed(2)
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, order._id))
                                    ]
                                })
                            ]
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
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profile);


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
var __webpack_exports__ = (__webpack_exec__(7329));
module.exports = __webpack_exports__;

})();