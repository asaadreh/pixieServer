const express = require('express');
const preferencesType = require('../models/preferencesType');
const router = express.Router();

router.get('/', async (req,res) =>{
    try { 
        const allPreferencesType = await preferencesType.find();
        res.json(allPreferencesType);
    } catch (err){
        res.json({ message: err})
    }
})

router.post('/', async (req,res) => {
    const newPreferenceType = new preferencesType({
        preferenceID : req.body.ID,
        preferenceName: req.body.preferenceName
    });

    try{
    const savedPreferenceType = await newPreferenceType.save()
    res.json(savedPreferenceType);
    }catch(err){
        res.json({ message: err});
    }

});

module.exports = router;