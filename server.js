// Import packages, functions
require('dotenv').config();
const express = require('express');
const DbConnect = require('./db');
const ErrorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

// Import Route functions
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const inquiryRoute = require("./routes/inquiryRoute");
const imageHandlingRoute = require("./routes/imageHandlingRoute");

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

// Heroku Configration
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("frontend/build"));
}

// Defining Port no.
const PORT = process.env.PORT || 5500; 

// Calling database function to connect
DbConnect();

// Make Routes
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", inquiryRoute);
app.use("/api/v1", imageHandlingRoute);


// Middleware for Errors
app.use(ErrorMiddleware);


// Listen port and run the server
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// Unhandled Promise Rejection
process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rjection`);
    server.close(()=>{
        process.exit(1);
    })     
})