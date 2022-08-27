const express = require("express");
const app = express();
const { pool } = require("./dbConfig");

require("dotenv").config();


const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

//Middleware for static files
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/template', (req, res) => {
    res.render("template");
})

app.get('/input', (req, res) => {
    res.render("input");
})

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})