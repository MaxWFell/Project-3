const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prod_description: {
        type: String,
        required: true,
    },
    price: {
        type: Decimal128,
        required: true,
    },
    quantity: {
        type: Integer,
        required: true,
    },
    image_file: {
        type: String,
        require: true,
    },
    ingredients: {
        type: String,
        required: true,
    }

});

const Product = mongoose.model('Product', productSchema);

const handleError = (err) => console.error(err);

module.exports = Product;