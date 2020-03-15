const express = require('express');
const UserData = require('../models/userData');
const preferencesType = require('../models/preferencesType');
const router = express.Router();

router.get('/', async (req,res) =>{
    try { 
        const allUserData = await UserData.find();
        console.log("Got request for all userdata. Sending back as response")
        res.json(allUserData);
    } catch (err){
        res.json({ message: err})
    }
})

router.post('/', async (req,res) => {
    
    console.log(req.body.email)

    const tmpUserData = await UserData.findOne({"app_instance_ID" : req.body.app_instance_ID})
    console.log("found user:", tmpUserData)

    if(tmpUserData == null){

        console.log("Adding new User")

        // for first log in, all preferences need to be added

      
            const allPreferencesType = await preferencesType.find();
            
            console.log(String(allPreferencesType[0].preferenceName))
            
            

            var i = 0
            var tempPrefs = []

            
            for(i;i<allPreferencesType.length;i++)
            {
                console.log(allPreferencesType[i].preferenceName)
                tempPrefs.push(allPreferencesType[i].preferenceName)
            }

            //const tempPrefs = String(allPreferencesType.PreferencesType)
            console.log(tempPrefs)
            



        const newUserData = new UserData({
            name: req.body.name,
            email: req.body.email,
            app_instance_ID: req.body.app_instance_ID,
            fb_ID: req.body.fb_ID,
            preferences: tempPrefs
        });
    
        try{
        const savedUserData = await newUserData.save()
        res.json(savedUserData);
        }catch(err){
            res.json({ message: err});
        }
    }

});

router.post('/preferences', async (req,res) => {
   
    console.log("in adduserdata/preferences")
    
    console.log(req.body.preferences)

    var tmpUserData = await UserData.findOne({"email" : req.body.email})

    console.log(tmpUserData.preferences)

    tmpUserData.preferences = req.body.preferences

    try{
        const savedUserData = await tmpUserData.save()
        res.json(savedUserData);
        }catch(err){
            res.json({ message: err});
        }




});

router.post('/getPreferences', async (req,res) => {

    console.log("in getpreferences")
    const tmpUserData = await UserData.findOne({"email" : req.body.email})
    console.log("found user, prefs:", tmpUserData.preferences)

    res.json(tmpUserData.preferences)



});

module.exports = router;