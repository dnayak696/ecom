const express = require('express');
const User =  require('../models/userModel');
const router  = express.Router();

router.get('/user', async (req, res) => { 
   try{
       const users = await User.find();
         
       res.json(users);
       
   }catch(err){
       res.error(err);
   }
})



module.exports = router;