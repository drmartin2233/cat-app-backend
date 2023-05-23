const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const catRoutes  = require('./routes/cats');


//environment variables
require('dotenv').config()

// database connection
require('./config/database');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
// ROUTERS
app.use('/cats', catRoutes);

app.listen(port, () => {
    console.log('I am listening at port 3000')
});
