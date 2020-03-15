const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const addUserDataRoute = require('./routes/adduserdata');
const preferencesTypeRoute = require("./routes/preferencesType")



const app = express()

app.use(bodyparser.json());
app.use('/adduserdata', addUserDataRoute);
app.use('/preferencesType', preferencesTypeRoute)
mongoose.connect('mongodb://Lee:beacon#1@localhost/pixieserver?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log("connected to DB"))
    
//Routes

app.get('/', (req,res) =>{
    res.send("We are on home");
})



app.listen(3000);
