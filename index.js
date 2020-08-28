const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('hello from server')
})

app.listen(3000,(req,res) => {
    console.log("Server is running on port: 3000")
});