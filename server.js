const express = require("express");
const app = express();
const { pool } = require("./dbConfig");

require("dotenv").config();


const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/dashboard', (req, res) => {
    res.render("dashboard");
})

app.get('/input', (req, res) => {
    res.render("input");
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})