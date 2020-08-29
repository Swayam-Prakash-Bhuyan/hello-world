const express = require('express');
const app = express();
const hello = require('./hello.js');
// app.get('/',(req,res) => {
//     res.send('GET route on hello');
// })

console.log(hello);

// app.listen(3000,(req,res) => {
//     console.log("Server is running on port: 3000");
// });