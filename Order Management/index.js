
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    cors({
        origin: "*",
    })
);
// middleware
app.use(express.json());

mongoose.set("strictQuery", true);
const port = process.env.PORT || 4000; 


mongoose.connect("mongodb+srv://EADOrderMgt:EADOrderMgt@cluster0.rko547e.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        const server = app.listen(port, () => {
            console.log("Connected to the database and listening on port", port);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });