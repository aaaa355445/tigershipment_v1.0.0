const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apifeatures");
const genrateSlug = require("../utils/genrateSlug");
const cloudinary = require('../utils/cloudinaryConfig');
const slugify = require('slugify');


// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
  try {
    let imagesnew = [];

    if (typeof req.body.images === "string") {
      imagesnew.push(req.body.images);
    }else {
      imagesnew = req.body.images;
    }
 
  
    const imagesLinks = [];
    for(let i = 0; i<imagesnew.length; i++){
      const result = await cloudinary.uploader.upload(imagesnew[i], {
        folder: "products",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  
    req.body.images = imagesLinks;

    const { name } = req.body;
    let slug = slugify(name, { lower: true });

    console.log("First slug", slug);

    // Check if the generated slug already exists in the database
    const existingProduct = await Product.findOne({ slug });
    if (existingProduct) {
      // If the slug exists, modify the slug to make it unique
      const randomString = Math.random().toString(36).substring(7);
      console.log("Random String", randomString)

      const newSlug = `${slug}-${randomString}`;
      console.log("New SLug", newSlug)
      req.body.slug = newSlug;
    } else {
      req.body.slug = slug;
    }

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      err,
      message: "something not working"
    });
  }
};

// Get all product details
exports.getAllProducts = async (req, res) => {
  const resultPerPage = 10;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);

    // let products = await apiFeature.query;
    // let filteredProductsCount = products.length;

    // apiFeature.pagination(resultPerPage);

   const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    productCount,
    resultPerPage,
    //filteredProductsCount,
    products,
  });
};

// Get all product details (Admin)
exports.getAdminProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};

// Update product -- Admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  // Check product is there in database
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  try {
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

// Delete product
exports.deleteProducts = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  // Check product is there in database
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};

// Get product details
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findOne(req.params);
  // Check product is there in database
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};
