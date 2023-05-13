const express = require('express');
const router = express.Router();

const Product = require('../models/productModel');



//get all products

router.get('/products', async (req, res) => {
   try {
     const products = await Product.find();
     res.json(products);
   }catch(err) {
       res.error(err.message);
   }
})


// create a new Product
 
router.post('/product', async( req, res ) => {
    try{
         const product = new Product({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image
         });

       await product.save();

        res.json({ "message": "Product saved successfully"});

    }catch( err ){
       res.error(err);
    }
});



module.exports = router;

