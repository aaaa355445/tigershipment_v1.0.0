const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// Register function for User
exports.registerUser = async(req, res) => {

    try{
        const {name, email, password} = req.body;
        const user = await User.create({
            name,email,password,
        });
        sendToken(user, 201, res);

    }catch(err){
        res.status(500).json({
            success:false,
            err,
        });
    };

};

// Login function for User
exports.loginUser = async(req, res) => {

    try{
        const {email, password} = req.body;

        // Checking if user has given email or password both
        if(!email || !password){
            return res.status(400).json({success:false, message:"Please enter Email and Password"});
        };

        const user = await User.findOne({ email }).select("+password");
        if(!user){
            return res.status(401).json({success:false, message:"Invalid email or password"});
        };

        const isPasswordMatched = user.comparePassword(password);
        if(!isPasswordMatched){
            return res.status(401).json({success:false, message:"Invalid email or password"});
        };

        sendToken(user, 200, res);
    }catch(err){
        res.status(500).json({
            success:false,
            err,
        });
    }
    
};

// Logout User
exports.logout = async(req, res) => {
    res.clearCookie("token");
    
    res.status(200).json({
        success: true,
        message: "Looged Out",
    });
};

// Update User Role

exports.updateProfile = async (req,res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };

    const user = await User.findByIdAndUpdate(req.body.id, newUserData, {
        new: true,
        runValidators: true,
        userFindAndModify: false,
    });

    res.status(200).json({
        success:true,
    });
} 