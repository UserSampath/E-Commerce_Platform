const mongoose = require("mongoose");

const express = require("express");
const app = express();

const cors = require("cors");
const allowedOrigin = "http://127.0.0.1:5173";

app.use(
    cors({
        origin: allowedOrigin,
    })
);


const bodyParser = require("body-parser");
require('dotenv').config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


// app.use(
//     cors({
//         origin: "*",
//     })
// );
app.use(express.json());
const OrderRouter = require("./routes/OrderRoute");
const Cart = require("./routes/CartRoute");

app.use("/api/order", OrderRouter);
app.use("/api/cart",Cart);

mongoose.set("strictQuery", true);



//port and DB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to the database and listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });