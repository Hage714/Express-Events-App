const express = require("express");
const morgan = require("morgan");

const PORT = 5000;
const app = express(); //initialize express module

//database configuration
const {connectDB} = require("./db/connect");

//routes
const eventRoutes = require("./routes/events");


//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//routes
app.get("/", (req, res) => {
    console.log("The server is running");
    res.send("The server is running");
});

//start server
const start_server = async () => {
try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.log(error);
}
}

start_server();