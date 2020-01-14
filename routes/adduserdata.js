const express = require('express');
const UserData = require('../models/userData');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send("We are adding user data");
})

router.post('/', async (req,res) => {
    const newUserData = new UserData({
        name: req.body.name,
        email: req.body.email,
        app_instance_ID: req.body.app_instance_ID,
        fb_ID: req.body.fb_ID
    });

    try{
    const savedUserData = await newUserData.save()
    res.json(savedUserData);
    }catch(err){
        res.json({ message: err});
    }

});

module.exports = router;