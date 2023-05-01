const express = require('express')
const dotenv= require('dotenv')
const morgan =require('morgan')
const cors = require('cors')
dotenv.config();
const app = express();
app.use(morgan('tiny'));
app.use(cors());
//TODO: configure the app
app.get('/todos', (req,res)=>{
    res.send('Hello there back again:Words are free. It is how you use them that may cost you ')
})
app.listen (8080)