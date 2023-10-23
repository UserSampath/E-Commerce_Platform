
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
mongoose.set("strictQuery", true);

//port and DB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        const server = app.listen(process.env.PORT, () => {
            console.log("Connected to the database and listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });