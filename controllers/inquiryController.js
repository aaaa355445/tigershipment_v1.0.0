const InquiryForm = require("../models/inquiryModel");


// Inquiry form 
exports.inquiry = async(req, res) => {

    try{
        const inquire = await InquiryForm.create(req.body);
        res.status(201).json({
            success:true,
            inquire
        });
    }catch(err){
        res.status(500).json({
            success:false,
            err,
        });
    };

};
