const express = require("express");
const app = express();
const port = 3000;
const pug = require('pug');
app.set('view engine', 'pug')
app.set('views', './views')

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/users", (req, res) => {
    res.send("User list");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});