const express = require("express");
const app = express();
const port = 3000;
const pug = require('pug');

app.get("/", (req, res) => {
    res.send("Hello coderX");
});

app.get("/users", (req, res) => {
    res.send("User list");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});