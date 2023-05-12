require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());
app.use(cors());




const port = process.env.PORT || 5000;

mongoose.connect(process.env.databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
    console.log("you are connected to database")
}).catch(err => console.log(err));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

