const Category = require('../models/categoryModel');

// Create category

exports.createCategory = async (req, res) => {
    const category = await Category.create(req.body);

    res.status(201).json({
        success:true,
        category
    })
}