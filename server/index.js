require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');


const app = express();
app.use(bodyParser.json());
app.use(cors());


// configure routers

app.use('/api', userRoute);
app.use('/api', productRoute);



const port = 5000;

mongoose.connect(process.env.databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
    console.log("you are connected to database")
}).catch(err => console.log(err));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

