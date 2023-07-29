const cloudinary = require('../utils/cloudinaryConfig');
const multer = require('multer');

// Multer configuration for handling multiple image uploads
const upload = multer({ dest: 'uploads/' }).array('file', 10); // 'file' is the parameter name for images, and 10 is the maximum number of images allowed

// API endpoint for multiple image upload
const uploadImages = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error uploading images:', err);
      return res.status(500).json({ error: 'Failed to upload images' });
    }

    // Array to store the uploaded image URLs
    const imageUrls = [];

    try {
      // Upload each image to Cloudinary
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, { folder: 'product-description' });
        imageUrls.push(result.secure_url);
      }

      // Pass the `imageUrls` back to Froala editor in the response
      res.send({ link: imageUrls });
    } catch (error) {
      console.error('Error uploading images to Cloudinary:', error);
      return res.status(500).json({ error: 'Failed to upload images' });
    }
  });
};

module.exports = uploadImages;