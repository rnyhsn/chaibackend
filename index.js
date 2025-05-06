// console.log("Hello World");
require('dotenv').config();
const express = require('express');
const app = express();


const port = process.env.PORT;

app.get('/', (req, res) => {
    res.json("Everything is ok");
})

app.get('/twitter', (req, res) => {
    res.send("Md. Rony Hossain");
})

app.get('/youtube', (req, res) => {
    res.send("<h2>My youtube channel</h2>");
})

app.get('/login', (req, res) => {
    res.send("<h1>Please Login in My Site</h1>");
})

app.listen(port, ()=> console.log(`Server is running on port:${port}`));