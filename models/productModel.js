const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    slug: {
        type: String,
    },
    name:{
        type: String,
        required: [true, "please Enter product name"],
        trim: true
    },
    shortDescription:{
        type: String,
        required: [true, "please Enter product short description"]
    },
    description: {
        type: mongoose.Schema.Types.Mixed,
        required: [true, "please Enter product description"]
    },
    price: {
        type: Number,
        required: [true, "please Enter product price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    mrp: {
        type: Number,
        required: [true, "please Enter product MRP"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    rating: {
        type: Number,
        default:0
    },
    images: [
        {
            public_id: {
                type: String,
                required: [true, "Please upload product image"]
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"]
    },
    company_detail: {
        type: mongoose.Schema.Types.Mixed,
        required: [true, "please Enter company detail"]
    },
    tags: [
        {
            type: String,
        }
    ],
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }

        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }    

})

module.exports = mongoose.model("Product", productSchema);

