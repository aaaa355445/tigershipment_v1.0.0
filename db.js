const mongoose = require("mongoose");

// Function for connecting database
function DbConnect() {
    // Database url
    const DB_URL = process.env.DB_URL;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection Error'));
    db.once('open', () => {
        console.log("DB Connected with server");
    });
    
}

module.exports = DbConnect;