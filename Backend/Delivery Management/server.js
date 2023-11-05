const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routers = require('./routers/deliveryRoutes')
const bodyparser = require('body-parser');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


app.use('/api/delivery',routers)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,() => {
        console.log('connected to db and listening on port ' + process.env.PORT);
    });
}).catch((error) => {
    console.error("could not connect to db"+error)
})


