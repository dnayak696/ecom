const express = require('express');
const router  = express.Router();
const User = require('../models/UserModel');

// Get Data from Database

router.get('/user', async(req, res)=>{
    //call the users from mongodb
    try{
        // get all user from db
      const users = await User.find();
      res.json(users);
    }catch(err){
        res.error(err);
    }
})

// Create a User to database

router.post('/user', async (req, res)=>{
    // create a user in the database
    try{
        const user  = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
         });
    
        await user.save();
    
        res.json({"msg": "User saved successfully"})
    }catch(err){
        console.error(err);
    } ;

})

// Update a User in Database
router.put('/user', async (req, res) =>{
      
})

// Deleta a User from database

export default router;