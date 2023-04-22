"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 1588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_products),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Product.js

function Product({ product , addToCart , addToWishlist  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card p-4 my-3",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: product.image,
                            className: "img-fluid"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "font-weight-bold",
                                children: product.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-muted",
                                children: product.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-muted text-secondary",
                                children: [
                                    "Best for ",
                                    product.age_preferred,
                                    " year old pets"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-muted",
                                children: [
                                    product.quantity,
                                    " in stock"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "font-weight-bold text-success",
                                children: "$20.00"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-dark btn-block",
                                onClick: ()=>addToCart(product.id),
                                children: "Add to Cart"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-outline-info btn-block",
                                onClick: ()=>addToWishlist(product.id),
                                children: "Add to Wishlist"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_Product = (Product);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./db/db.js

const MongoClient = (__webpack_require__(8013).MongoClient);
const seedproducts = __webpack_require__(9125);
// const ObjectID = require('mongodb').ObjectID;
// get mongo client
async function connectDatabase() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    return client;
}
async function ensureCollections(client) {
    // list of collections to ensure
    const collections = [
        "users",
        "products",
        "orders",
        "seeds",
        "cart",
        "wishlist",
        "users_pets"
    ];
    // get db
    const db = client.db();
    // ensure collections
    for (const collection of collections){
        // check if collection exists
        const exists = await db.listCollections({
            name: collection
        }).hasNext();
        // if not, create it
        if (!exists) {
            await db.createCollection(collection);
        }
    }
    // get seed: products_seed
    const seed = await getSeed(db, "products_seed");
    // if seed doesn't exist, insert it
    if (!seed) {
        // seed products
        await seedProducts(db, seedproducts);
        // create indexes: products -> name
        await db.collection("products").createIndex({
            name: "text"
        });
        // insert seed
        await insertSeed(db, {
            name: "products_seed",
            date: new Date()
        });
    }
}
// insert pet
async function insertPet(db, pet) {
    // get pets collection
    const pets = db.collection("users_pets");
    // insert pet
    const result = await pets.insertOne(pet);
    return result;
}
// get pet by id
async function getPet(db, id) {
    const collection = db.collection("users_pets");
    const pet = await collection.findOne({
        _id: new ObjectId(id)
    });
    return pet;
}
// get pets by user id
async function getPets(db, user_id) {
    const collection = db.collection("users_pets");
    const pets = await collection.find({
        user_id
    }).toArray();
    return pets;
}
// delete pet by id
async function deletePet(db, id) {
    const collection = db.collection("users_pets");
    const result = await collection.deleteOne({
        _id: new ObjectId(id)
    });
    return result;
}
// insert user: name, email, password
async function insertUser(db, user) {
    // get users collection
    const users = db.collection("users");
    // insert user
    const result = await users.insertOne(user);
    return result;
}
// get user by email
async function getUser(db, email) {
    const collection = db.collection("users");
    const result = await collection.findOne({
        email
    });
    return result;
}
// validate login
async function validateLogin(db, email, password) {
    // get user
    const user = await getUser(db, email);
    // if user exists, check password
    if (user) {
        return user.password === password;
    }
    // user doesn't exist
    return false;
}
// insert seed: name, date run
async function insertSeed(db, seed) {
    // get seeds collection
    const seeds = db.collection("seeds");
    // insert seed
    const result = await seeds.insertOne(seed);
    return result;
}
// get seed by name
async function getSeed(db, name) {
    const collection = db.collection("seeds");
    const seed = await collection.findOne({
        name
    });
    return seed;
}
// seed products
async function seedProducts(db, prods) {
    // get products collection
    const products = db.collection("products");
    // insert products
    const result = await products.insertMany(prods);
    return result;
}
// get products
async function getProducts(db, filter) {
    const collection = db.collection("products");
    const products = await collection.find(filter).toArray();
    return products;
}
// get product by id
async function getProduct(db, id) {
    const collection = db.collection("products");
    const product = await collection.findOne({
        _id: new ObjectId(id)
    });
    return product;
}
// search products
async function searchProducts(db, query) {
    const collection = db.collection("products");
    const products = await collection.find({
        $text: {
            $search: query
        }
    }).toArray();
    return products;
}
// get a users cart
async function getCart(db, user_id) {
    const collection = db.collection("cart");
    const cart = await collection.findOne({
        user_id
    });
    // if cart exists, return it
    if (cart) {
        return cart;
    } else {
        // if cart doesn't exist, create it
        const newCart = {
            user_id,
            products: []
        };
        // insert new cart
        await collection.insertOne(newCart);
        return newCart;
    }
}
// add product to cart
async function addToCart(db, user_id, product_id) {
    // get cart
    const cart = await getCart(db, user_id);
    // get cart products
    const products = cart.products;
    // if product is already in cart, increment quantity
    const index = products.findIndex((product)=>product.product_id === product_id);
    if (index !== -1) {
        products[index].quantity++;
    } else {
        // if product is not in cart, add it
        products.push({
            product_id,
            quantity: 1
        });
    }
    // update cart
    const collection = db.collection("cart");
    const result = await collection.updateOne({
        user_id
    }, {
        $set: {
            products
        }
    });
    return result;
}
// remove product from cart
async function removeFromCart(db, user_id, product_id) {
    // get cart
    const cart = await getCart(db, user_id);
    // get cart products
    const products = cart.products;
    // if product is in cart, remove it
    const index = products.findIndex((product)=>product.product_id === product_id);
    if (index !== -1) {
        products.splice(index, 1);
        // update cart
        const collection = db.collection("cart");
        const result = await collection.updateOne({
            user_id
        }, {
            $set: {
                products
            }
        });
        console.log(result);
        return result;
    }
    return null;
}
// clear cart
async function clearCart(db, user_id) {
    // get cart
    const cart = await getCart(db, user_id);
    // get cart products
    const products = cart.products;
    // if cart has products, remove them
    if (products.length > 0) {
        // update cart
        const collection = db.collection("cart");
        const result = await collection.updateOne({
            user_id
        }, {
            $set: {
                products: []
            }
        });
        return result;
    }
    return null;
}
// get a users wishlist
async function getWishlist(db, user_id) {
    const collection = db.collection("wishlist");
    // get wishlist
    const list = await collection.findOne({
        user_id
    });
    // if wishlist exists, return it
    if (list) {
        return list;
    } else {
        // if wishlist doesn't exist, create it
        const newList = {
            user_id,
            products: []
        };
        // insert new wishlist
        await collection.insertOne(newList);
        return newList;
    }
}
// add product to wishlist
async function addToWishlist(db, user_id, product_id) {
    // get wishlist
    const list = await getWishlist(db, user_id);
    // get wishlist products
    const products = list.products;
    // if product is already in wishlist, do nothing
    const index = products.findIndex((product)=>product.product_id === product_id);
    if (index === -1) {
        // if product is not in wishlist, add it
        products.push({
            product_id
        });
        // update wishlist
        const collection = db.collection("wishlist");
        const result = await collection.updateOne({
            user_id
        }, {
            $set: {
                products
            }
        });
        return result;
    }
    return null;
}
// remove product from wishlist
async function removeFromWishlist(db, user_id, product_id) {
    // get wishlist
    const list = await getWishlist(db, user_id);
    // get wishlist products
    const products = list.products;
    // if product is in wishlist, remove it
    const index = products.findIndex((product)=>product.product_id === product_id);
    if (index !== -1) {
        products.splice(index, 1);
        // update wishlist
        const collection = db.collection("wishlist");
        const result = await collection.updateOne({
            user_id
        }, {
            $set: {
                products
            }
        });
        return result;
    }
    return null;
}
// clear wishlist
async function clearWishlist(db, user_id) {
    // get wishlist
    const list = await getWishlist(db, user_id);
    // get wishlist products
    const products = list.products;
    // if wishlist has products, remove them
    if (products.length > 0) {
        // update wishlist
        const collection = db.collection("wishlist");
        const result = await collection.updateOne({
            user_id
        }, {
            $set: {
                products: []
            }
        });
        return result;
    }
    return null;
}
// get a users orders
async function getOrders(db, user_id) {
    const collection = db.collection("orders");
    // get orders: order by date, newest first
    const orders = await collection.find({
        user_id
    }).sort({
        date: -1
    }).toArray();
    return orders;
}
// add order
async function addOrder(db, order) {
    // get orders collection
    const orders = db.collection("orders");
    // insert order
    const result = await orders.insertOne(order);
    return result;
}
// delete order
async function deleteOrder(db, order_id) {
    // get orders collection
    const orders = db.collection("orders");
    // delete order
    const result = await orders.deleteOne({
        _id: new ObjectId(order_id)
    });
    return result;
}


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "toastr"
var external_toastr_ = __webpack_require__(4559);
var external_toastr_default = /*#__PURE__*/__webpack_require__.n(external_toastr_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/products.js






function products({ products  }) {
    const router = (0,router_.useRouter)();
    const [user, setUser] = (0,external_react_.useState)(null);
    // loader
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [hasParams, setHasParams] = (0,external_react_.useState)(false);
    // check if user is logged in, local storage
    (0,external_react_.useEffect)(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        // if user is logged in, show profile
        if (user) {
            setUser(user);
            setLoading(false);
            // check if query params exist
            if (router.query && router.query.q) {
                setHasParams(true);
            } else {
                setHasParams(false);
            }
        } else {
            // redirect to login page
            window.location.href = "/login";
        }
    }, []);
    // add product to cart
    const addToCart = async (product)=>{
        // send post request to /api/cart
        const res = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "add",
                user_id: user.id,
                data: {
                    product
                }
            })
        });
        // get response
        const data = await res.json();
        // if successful, add product to cart
        if (data.success) {
            external_toastr_default().success("Successfully added to cart");
        } else {
            external_toastr_default().error("Failed to add to cart");
        }
    };
    // add product to wishlist
    const addToWishlist = async (product)=>{
        // send post request to /api/wishlist
        const res = await fetch("/api/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: "add",
                user_id: user.id,
                data: {
                    product
                }
            })
        });
        // get response
        const data = await res.json();
        // if successful, add product to wishlist
        if (data.success) {
            external_toastr_default().success("Successfully added to wishlist");
        } else {
            external_toastr_default().error("Failed to add to wishlist");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                // linear gradient from #0073ff to #00c4ff
                backgroundImage: "linear-gradient(90deg, #0073ff 0%, #00c4ff 100%)"
            },
            children: loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-5 text-center text-light",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "display-4 font-weight-bold",
                    children: "Loading products..."
                })
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clearfix",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "float-left",
                                        children: hasParams ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "py-4 text-light",
                                            children: [
                                                'Search results for "',
                                                router.query.q,
                                                '"'
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "py-4 text-light",
                                            children: "Shop stuff for your pets!"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "float-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/cart",
                                            className: "btn btn-lg btn-light mt-4",
                                            children: "View cart"
                                        })
                                    })
                                ]
                            }),
                            products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Product, {
                                        product: product,
                                        addToCart: addToCart,
                                        addToWishlist: addToWishlist
                                    })
                                }, product.id))
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-5"
                    })
                ]
            })
        })
    });
}
// get server-side props
async function getServerSideProps(context) {
    // get db
    const client = await connectDatabase();
    // ensure collections exist
    await ensureCollections(client);
    // get db
    const db = client.db();
    let products = [];
    // has query
    if (context.query && context.query.q) {
        // search by name
        if (context.query.q) {
            products = await searchProducts(db, context.query.q);
        }
    } else {
        // get products
        products = await getProducts(db, {});
    }
    const filteredProducts = products.map((product)=>{
        return {
            id: product._id.toString(),
            name: product.name,
            image: product.image_file,
            price: product.price,
            description: product.prod_description,
            quantity: product.quantity,
            age_preferred: product.age_preferred
        };
    });
    // return products
    return {
        props: {
            products: filteredProducts
        }
    };
}
/* harmony default export */ const pages_products = (products);


/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

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

/***/ }),

/***/ 4559:
/***/ ((module) => {

module.exports = require("toastr");

/***/ }),

/***/ 9125:
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Crispy Rosemary Chicken and Fries","prod_description":"Potatoes are crispy like french fries, just serve with ketchup.  Kids love this!","price":24.99,"quantity":20,"image_file":"/images/rosemary_chicken_with_potatoes.png","ingredients":"chicken, potatoes, olive oil, rosemary, oregano, garlic powder, salt, pepper"},{"name":"Slow Cooked Baby Back Ribs","prod_description":"Ribs cooked to perfection","price":21.99,"quantity":60,"image_file":"/images/baby_back_ribs.png","ingredients":"baby back ribs, salt, black pepper, water, onion, garlic, barbeque sauce"},{"name":"Worlds Best Honey Garlic Pork Chops","prod_description":"Plain old pork chops turned into something special","price":15.99,"quantity":36,"image_file":"/images/worlds_best_pork_chops.png","ingredients":"ketchup, honey, soy sauce, garlic, pork chops"},{"name":"Chicken, Sausage, Peppers, and Potatoes","prod_description":"Chicken, sausage, peppers, and potatoes","price":13.99,"quantity":10,"image_file":"/images/chicken_sausage_pepper_potatoes.png","ingredients":"olive oil, hot Italian sausage, chicken, sweet peppers, potatoes, red onion, yellow onion, Italian herbs, kosher salt, black pepper, Italian parsley"},{"name":"Mississippi Roast - Slow Cooked Pepperoncini Pot Roast","prod_description":"Serve with mashed potatoes or egg noodles.","price":18.99,"quantity":8,"image_file":"/images/pepperoncini_pot_roast.png","ingredients":"beef chuck roast, butter, pepperoncini peppers, ranch dressing mix, au jus mix"},{"name":"Sheet Pan Chicken Fajitas","prod_description":"Quick and flavorfull chicken fajitas.","price":12.99,"quantity":50,"image_file":"/images/sheet_pan_chicken_fajitas.png","ingredients":"vegetable oil, chili powder, oregano, garlic, onion, cumin, salt, pepper, cayenne pepper, chicken, bell peppers, onion, cilantro, lime"},{"name":"Fiesta Slow Cooked Shredded Chicken Tacos","prod_description":"Delicious chicken tacos. Combine with cheese, lettuce, tomatoes, and onions for a taste treat","price":10,"quantity":100,"image_file":"/images/fiesta_shredded_chicken_tacos.png","ingredients":"chicken broth, taco seasoning mix, chicken"},{"name":"Crispy Oven-Roasted Rosemary Chicken with Sausage and Potatoes","prod_description":"Easy pot roast shortcut.","price":19.99,"quantity":18,"image_file":"/images/rosemary_chicken_sausage_potatoes.png","ingredients":"olive oil, bratwurst, chicken, kosher salt, potatoes, rosemary, red wine vinegar"},{"name":"Easy and Quick Halushki","prod_description":"This Polish dish appeals to the whole family!","price":12.98,"quantity":5,"image_file":"/images/halushki.png","ingredients":"bacon, onion, egg noodles, cabbage, salt, black pepper"},{"name":"Peach Pork Picante","prod_description":"Salsa, seasoning, pork, and peach preserves","price":14.99,"quantity":10,"image_file":"/images/peach_pork_picante.png","ingredients":"pork, taco seasoning mix, salsa, peach preserves"},{"name":"Easy Breaded Shrimp","prod_description":"A hit with kids and adults alike","price":19.99,"quantity":30,"image_file":"/images/easy_breaded_shrimp.png","ingredients":"vegetable oil, shrimp, egg, bread crumbs"},{"name":"Cabbage Balushka or Cabbage and Noodles","prod_description":"Cabbage, onions, and egg noodles cooked in butter","price":9.99,"quantity":2,"image_file":"/images/cabbage_balushka.png","ingredients":"egg noodles, butter, onion, cabbage, salt, black pepper"},{"name":"Roasted Chicken with Lemon and Rosemary","prod_description":"Whole chicken cooked with lemons, garlic, and rosemary","price":11.99,"quantity":25,"image_file":"/images/roasted_chicken_lemon_rosemary.png","ingredients":"chicken, onion, lemon, garlic, rosemary, olive oil, salt, black pepper"},{"name":"Sheet Pan Shrimp Fajitas","prod_description":"Easy shrimp fajitas","price":15.99,"quantity":10,"image_file":"/images/sheet_pan_shrimp_fajitas.png","ingredients":"fajita seasoning, olive oil, shrimp, red bell pepper, yellow bell pepper, red onion, jalapeno pepper"},{"name":"Fettucine Alfredo with Ham","prod_description":"Fettucine alfredo with ham","price":12.99,"quantity":15,"image_file":"/images/fettucine_alfredo_with_ham.png","ingredients":"pasta, butter, cooked ham, heavy cream, Parmesan cheese"},{"name":"Pulled Pork Barbeque","prod_description":"Pork ribs along with pork loin. Serve with a baked potatoes or bun","price":12.99,"quantity":30,"image_file":"/images/pulled_pork_barbeque.png","ingredients":"barbeque sauce, dry onion soup mix, pork"},{"name":"Tender Slow Cooked Pork Roast","prod_description":"Falls off the bone!","price":29.99,"quantity":23,"image_file":"/images/slow_cooked_pork_roast.png","ingredients":"pork, tomato sauce, soy sauce, white sugar, ground mustard"},{"name":"Roasted Carrot and Fennel Pork","prod_description":"Pork, served deliciously.","price":19.95,"quantity":14,"image_file":"/images/roasted_carrot_and_fennel_pork.png","ingredients":"pork, honey mustard, thyme, fennel bulbs, carrot, onion, salt, black pepper"},{"name":"Slow Cooked Turkey Breast with Gravy","prod_description":"Delicious gravy with super moist turkey breast","price":12.99,"quantity":25,"image_file":"/images/slow_cooked_turkey_breast.png","ingredients":"turkey, cream of mushroom soup, Cheddar cheese soup"},{"name":"Broiled Spanish Mackerel","prod_description":"Mackerel simple and tasty","price":19.99,"quantity":20,"image_file":"/images/broiled_Spanish_mackerel.png","ingredients":"Spanish mackerel, olive oil, paprika, salt, black pepper, lemon"},{"name":"Salsa Verde Pork","prod_description":"Pork with Salsa Verde. Also, excellent for leftovers","price":19.99,"quantity":5,"image_file":"/images/salsa_verde_pork.png","ingredients":"canola oil, pork, green salsa"},{"name":"Chicken, Apple, and Brussels Sprout Sheet Pan Dinner","prod_description":"Flavors of fall. Serve alone or with rice or salad","price":18.99,"quantity":20,"image_file":"/images/chicken_apple_brussels_sprout.png","ingredients":"Brussels sprouts, apple, pancetta, olive oil, rosemary, chicken, salt, black pepper"},{"name":"Bucatini Cacio e Pepe - Roman Sheep Herders Pasta","prod_description":"Pasta, cheese, and pepper","price":12.99,"quantity":20,"image_file":"/images/bucatini_cacio_e_pepe.png","ingredients":"salt, bucatini, Pecorino Romano cheese, black pepper"},{"name":"Jackfruit Pulled \'Pork\'","prod_description":"Vegetarian pork.","price":23.95,"quantity":6,"image_file":"/images/jackfruit_pulled_pork.png","ingredients":"olive oil, Vidalia onion, garlic, green jackfruit, barbeque sauce"},{"name":"Taco-Seasoned Salmon","prod_description":"Even if you don\'t like fish, you\'ll enjoy this salmon","price":14.99,"quantity":12,"image_file":"/images/taco_seasoned_salmon.png","ingredients":"vegetable oil, Italian-seasoned bread crumbs, taco seasoning, salmon"},{"name":"Prosciutto and Asparagus Pasta","prod_description":"Prosciutto-wrapped asparagus is a classic appetizer. With pasta, it becomes dinner","price":24.99,"quantity":20,"image_file":"/images/prosciutto_and_asparagus_pasta","ingredients":"asparagus, prosciutto, olive oil, green onions, linguine"},{"name":"Sheet Pan Vegetable Dinner with Feta","prod_description":"Great with bread and salad","price":14.99,"quantity":25,"image_file":"/images/vegetable_dinner_with_feta.png","ingredients":"olive oil, zucchini, carrots, red bell peppers, potatoes, tomatoes, black olives, green onions, garlic, oregano, thyme, salt, black pepper, rosemary, bay leaves, feta cheese"},{"name":"Vegetarian Sheet Pan Dinner with Chickpeas and Veggies","prod_description":"Delicious vegetarian choice for dinner","price":14.99,"quantity":20,"image_file":"/images/vegetarian_dinner_chickpeas_veggies.png","ingredients":"chickpeas, butternut squash, onion, sweet potato, carrots, potatoes, vegetable oil, salt, black pepper, onion powder, garlic powder, fennel seeds, sage"},{"name":"Mac and Cheese","prod_description":"Classic macaroni and cheese.","price":9.99,"quantity":40,"image_file":"/images/macaroni_and_cheese.png","ingredients":"water, macaroni, butter, all-purpose flour, milk, heavy whipping cream, Worcestershire sauce, black pepper, Cheddar cheese, panko bread crumbs, Italian seasoning, garlic salt"},{"name":"Baked Old Bay Salmon","prod_description":"Salmon with an Old Bay seasoning twist","price":18.99,"quantity":20,"image_file":"/images/baked_old_bay_salmon.png","ingredients":"salmon, mayonnaise, seafood seasoning"},{"name":"Chicken Nachos with Refried Beans","prod_description":"Nachos with refried beans.","price":11.99,"quantity":17,"image_file":"/images/chicken_nachos_refried_beans.png","ingredients":"tortilla chips, refried beans, chicken, jalapeno peppers, Cheddar cheese"},{"name":"Roasted Sausage and Vegetables Dinner","prod_description":"Roasted sausage and vegetables, cooked just the way you like them","price":14.99,"quantity":30,"image_file":"/images/roasted_sausage_vegetables_dinner","ingredients":"olive oil, pork sausage, potatoes, onion, yellow bell pepper, orange bell pepper, red bell pepper, zucchini, oregano, salt, black pepper"},{"name":"Broiled Lemon-Pepper Tilapia","prod_description":"Broiled lemon-pepper tilapia","price":16.99,"quantity":15,"image_file":"/images/broiled_lemon_pepper_tilapia.png","ingredients":"tilapia, parsley, lemon-pepper seasoning, salted butter, bread crumbs"},{"name":"Pineapple BBQ Pulled Pork","prod_description":"Pineapple BBQ Pulled Pork","price":21.99,"quantity":40,"image_file":"/images/pineapple_bbq_pulled_pork.png","ingredients":"pork, chicken broth, honey barbeque sauce, onion, pineapple"},{"name":"Honey-Chipotle Chicken","prod_description":"Shredded chicken, black beans, with honey-chipotle sauce","price":17.99,"quantity":40,"image_file":"/images/honey_chipotle_chicken.png","ingredients":"honey, garlic, chipotle peppers in adobo sauce, chicken, black beans"},{"name":"Baked Spaghetti","prod_description":"Delicious with crusty garlic bread","price":12.99,"quantity":15,"image_file":"/images/baked_spaghetti.png","ingredients":"butter, onion, kosher salt, Italian seasoning, garlic, beef, marinara sauce, basil, spaghetti, heavy cream, Parmesan cheese, mozzarella cheese"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1588));
module.exports = __webpack_exports__;

})();