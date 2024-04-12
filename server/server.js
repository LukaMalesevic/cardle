require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT

app.get("/", (req, res) =>{
    res.json({msg: 'Welcome to the app'})
})

app.listen(PORT, () =>{
    console.log("Listening on port 3000");
})