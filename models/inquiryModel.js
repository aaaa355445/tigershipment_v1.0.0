const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'productSchema',
        required: [true, "please select product"],
    },
    companyName: {
        type: String,
        required: [true, "please Enter comapny name"],
    },
    email_inquiry: {
        type: String,
        required: [true, "Please enter your email"],
        unique: false,
    },
    number: {
        type: Number,
        required: [true, "Please enter your email"],
    },
    location: {
        type: String,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 

});

//! Exporting Category Schema
module.exports = mongoose.model("Inquiry", InquirySchema);