const mongoose = require('mongoose');

//define the schema 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name must be there'],
    },
    price: {
        type: Number, 
        required: [true, "Price must be provided"]
    },
    featured: {
        type: Boolean, 
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    created: {
        type: Date, 
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
});

//export the schema
module.exports = mongoose.model('Product', productSchema);