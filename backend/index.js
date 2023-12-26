const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const RouterUser = require('./src/routes/User.js');
require('dotenv').config();


app.use(morgan('tiny')); // information of what happening every request we made
app.use(cors()); // if there is 2 different server it will accept it
app.use(express.json()); // to make accept the json format
app.use(express.urlencoded({ extended: true }));

//Main route for User routes
app.use('/api', RouterUser);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})