const mongoose = require("mongoose");  //importing mongoose

const connectionString = "mongodb://127.0.0.1:27017/eventsdb";
const connectDB = () => {
    mongoose.connect(connectionString).then(() => console.log("Database Connected!"));
};

module.exports.connectDB = connectDB;