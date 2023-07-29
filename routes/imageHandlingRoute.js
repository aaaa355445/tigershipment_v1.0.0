const express = require("express");
const imageHandlingController  = require("../controllers/imageHandlingController");

const router = express.Router();

router.route("/upload-image").post(imageHandlingController);

module.exports = router