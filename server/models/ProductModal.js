const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProductSchema = new Schema({
    name: String,
    description: String,
    productImage: String,
    category: String,
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;