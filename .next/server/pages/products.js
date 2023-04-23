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

module.exports = JSON.parse('[{"name":"Blue Buffalo Life Protection Formula Puppy Chicken & Brown Rice Recipe Dry Dog Food","prod_description":"Formulated to support your puppy\'s healthy growth and development.","price":74.99,"quantity":20,"image_file":"/images/lpf_dog_dry_puppy_chickenbrownrice_mobile.jpg","allergens":false,"age_preferred":1},{"name":"Kong Classic Dog Toy, Large","prod_description":"This is a test","price":49.99,"quantity":9999,"image_file":"/images/product_images/T4_LIFE_1.jpg","allergens":false,"age_preferred":5},{"name":"Kong Classic Dog Toy, Small","prod_description":"This is a test","price":39.99,"quantity":36,"image_file":"/images/product_images/T4_LIFE_1.jpg","allergens":false,"age_preferred":1},{"name":"Blue Buffalor Life Protection Formula Beef Recipe Dry Dog Food","prod_description":"Formulated for the health and well-being of dogs.","price":89.61,"quantity":2,"image_file":"/images/product_images/lpf_dog_dry_adult_beefbrownrice_mobile.jpg","allergens":false,"age_preferred":5},{"name":"Blue Buffalo Life Protection Formula Senior Chicken & Brown Rice Recipe Dry Dog Food","prod_description":"Formulated for the health and well-being of senior dogs.","price":42.96,"quantity":69,"image_file":"/images/product_images/lpf_dog_dry_senior_chickenbrownrice_mobile.jpg","allergens":false,"age_preferred":10},{"name":"Blue Buffalo Baby Blue Formula High-Protein, Grain-Free Chicken and Pea Recipe, Dry Cat Food","prod_description":"Formulated for the health and well-being of senior dogs.","price":49.99,"quantity":1,"image_file":"/images/product_images/babyblue_cat_dry_hpchickenpea_mobile.jpg","allergens":false,"age_preferred":0},{"name":"BLUE Tastefuls Indoor Hairball Control, Chicken and Brown Rice Recipe, Dry Cat Food","prod_description":"Formulated for the health and well-being of senior dogs.","price":22,"quantity":900000,"image_file":"/images/product_images/pdp_mobile_tastefuls_dry_hairball.jpg","allergens":false,"age_preferred":5},{"name":"BLUE Wilderness Mature Chicken Recipe, Dry Cat Food","prod_description":"Formulated for the health and well-being of senior dogs.","price":75,"quantity":499,"image_file":"/images/product_images/wild_cat_dry_mature_chicken_mobile.jpg","allergens":false,"age_preferred":10},{"name":"Frisco Paw & Play Mouse Cat Toy, 10-Pack","prod_description":"Drive your kitty wild with the sights, sounds and feels they love to play with. Lets get ready to bat, swat and purr!","price":20.98,"quantity":0,"image_file":"/images/product_images/166366_Main._AC_SS108_V1573593232_.jpg","allergens":false,"age_preferred":1},{"name":"PawsPets Exclusive Cat Back Scratcher...Limited Edition","prod_description":"Limited Edition small back scratcher for the most important members of the family.","price":12000.21,"quantity":100,"image_file":"/images/product_images/th.jpg","allergens":true,"age_preferred":5},{"name":"PawsPets Exclusive Cat Tower ","prod_description":"PawsPets new cat tower filled with amnenties for your cats.","price":347,"quantity":9,"image_file":"/images/product_images/CatTower.jpg","allergens":false,"age_preferred":5},{"name":"PawsPets Exclusive 18kt Solid Gold Dog Leash","prod_description":"","price":36876.56,"quantity":2,"image_file":"/images/product_images/IcedOutDoggy.jpg","allergens":false,"age_preferred":5},{"name":"Diamond Dog Collar","prod_description":"Do you have Bottomless Pockets?","price":150500,"quantity":0,"image_file":"/images/product_images/150k.jpg","allergens":false,"age_preferred":10},{"name":"AMOUR AMOUR DIAMOND DOG COLLAR","prod_description":"The Buggati of Dog Collars","price":4000000,"quantity":1,"image_file":"/images/product_images/1_Amour_Amour_Diamond_Dog_Collar_-_3_million_-_Most_Expensive_Dog_Collars.jpg","allergens":false,"age_preferred":5},{"name":"AMOUR DE LA MER","prod_description":"The price says enough...","price":1000000,"quantity":99,"image_file":"/images/product_images/2_Amour_de_la_Mer_-_Most_Expensive_Dog_Collars.jpg","allergens":false,"age_preferred":5},{"name":"Versace MEDUSA PET LEAD","prod_description":"A leather pet lead decorated with Medusa studs. ","price":40000,"quantity":89,"image_file":"/images/product_images/90_ZDOGLACE4-ZPEL0061_Z1008_20_MedusaPetLead-PetAccessories-versace-online-store_0_1.jpg","allergens":false,"age_preferred":5},{"name":"FurryFriends Deluxe Dog Bed","prod_description":"FurryFriends cozy and comfortable dog bed for your furry companion.","price":159.99,"quantity":23,"image_file":"/images/product_images/dogobedo.jpg","allergens":false,"age_preferred":5},{"name":"CritterPlay Exotic Bird Toy Set","prod_description":"CritterPlay colorful and interactive toy set for exotic birds.","price":49.95,"quantity":14,"image_file":"/images/product_images/BirdToys.jpg","allergens":true,"age_preferred":5},{"name":"FishFrenzy Aquarium Starter Kit","prod_description":"FishFrenzy aquarium starter kit includes everything you need to start an aquarium.","price":89.99,"quantity":8,"image_file":"/images/product_images/FishFrenzy.jpg","allergens":false,"age_preferred":18},{"name":"HamsterHaven Playpen","prod_description":"HamsterHaven playpen for your furry little friend to play and explore.","price":29.95,"quantity":20,"image_file":"/images/product_images/HamsterHaven.jpg","allergens":false,"age_preferred":5},{"name":"ReptileRetreat Terrarium Kit","prod_description":"ReptileRetreat terrarium kit includes everything you need to create a comfortable habitat for your reptile.","price":149.99,"quantity":5,"image_file":"/images/product_images/Reptile.jpg","allergens":false,"age_preferred":16},{"name":"FeatheredFriends Wild Bird Feeder","prod_description":"FeatheredFriends wild bird feeder for your outdoor feathered friends.","price":209.99,"quantity":32,"image_file":"/images/product_images/BirdFeed.jpg","allergens":false,"age_preferred":5},{"name":"AquaticWonders Betta Fish Bowl","prod_description":"AquaticWonders betta fish bowl for your betta fish.","price":49.99,"quantity":18,"image_file":"/images/product_images/Beta.jpg","allergens":false,"age_preferred":5},{"name":"PetSafe Automatic Feeder","prod_description":"PetSafe automatic feeder to keep your pet fed even when you\'re not home.","price":59.95,"quantity":6,"image_file":"/images/product_images/Autofeed.jpg","allergens":false,"age_preferred":5},{"name":"CritterCraze Small Animal Cage","prod_description":"CritterCraze small animal cage for your pet rodents and other small animals.","price":79.95,"quantity":12,"image_file":"/images/product_images/Small.jpg","allergens":false,"age_preferred":5},{"name":"Fido\'s Fashion Collar","prod_description":"Fido\'s Fashion Collar is a stylish accessory for your dog to wear on walks and outings.","price":24.99,"quantity":15,"image_file":"/images/product_images/Fiddo.jpg","allergens":false,"age_preferred":5},{"name":"Whisker\'s Delight Cat Food","prod_description":"Whisker\'s Delight cat food is a nutritious and delicious meal for your feline friend.","price":34.99,"quantity":25,"image_file":"/images/product_images/Whiskers.jpg","allergens":true,"age_preferred":5},{"name":"Robot Dog","prod_description":"Robot dog with feeling and a mind of its own.","price":74000.99,"quantity":8,"image_file":"/images/product_images/robodog.jpg","allergens":false,"age_preferred":5},{"name":"Purrfect Paradise Scratching Post","prod_description":"Purrfect Paradise scratching post is a great way for your cat to satisfy their scratching instincts.","price":99.99,"quantity":10,"image_file":"/images/product_images/CatScratcher.jpg","allergens":false,"age_preferred":5},{"name":"Fluffy Fleece Pet Bed","prod_description":"Fluffy Fleece Pet Bed is a cozy bed for your furry friend to snuggle up in.","price":309.99,"quantity":20,"image_file":"/images/product_images/PetBed.jpg","allergens":false,"age_preferred":5},{"name":"Canine Camo Dog Harness","prod_description":"Canine Camo Dog Harness is a durable and stylish harness for your dog to wear on walks and hikes.","price":409.99,"quantity":7,"image_file":"/images/product_images/Canine.jpg","allergens":false,"age_preferred":5},{"name":"Gourmet Fish Flakes","prod_description":"Gourmet Fish Flakes are a delicious and nutritious food for your aquarium fish.","price":99.99,"quantity":30,"image_file":"/images/product_images/FishyFlakes.jpg","allergens":false,"age_preferred":5},{"name":"Paw Print Litter Mat","prod_description":"Paw Print Litter Mat helps keep your floors clean by trapping litter and dirt from your cat\'s paws.","price":54.99,"quantity":13,"image_file":"/images/product_images/PawP.jpg","allergens":false,"age_preferred":5},{"name":"Avian Adventures Bird Cage","prod_description":"Avian Adventures bird cage is a spacious and comfortable home for your pet bird.","price":449.99,"quantity":4,"image_file":"/images/product_images/BirdPrison.jpg","allergens":false,"age_preferred":5},{"name":"Wagging Tail Dog Treats","prod_description":"Wagging Tail Dog Treats are a delicious and healthy snack for your pup.","price":17.99,"quantity":40,"image_file":"/images/product_images/Mixed-Treat-Box.jpg","allergens":true,"age_preferred":5},{"name":"Aquatic Plants Pack","prod_description":"Aquatic Plants Pack includes a variety of plants to add to your aquarium for decoration and oxygenation.","price":190.99,"quantity":15,"image_file":"/images/product_images/bba166191939747992737ce8442988ad.jpg","allergens":false,"age_preferred":5}]');

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