const express = require('express')
const app = express();
//TODO: configure the app
app.get('/todos', (req,res)=>{
    res.send('Hello there back again:Words are free. It is how you use them that may cost you ')
})
app.listen (8080)