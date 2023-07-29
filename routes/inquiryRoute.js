const express = require("express");
const { inquiry } = require("../controllers/inquiryController");

const router = express.Router();

router.route("/inquiry/new").post(inquiry);

module.exports = router