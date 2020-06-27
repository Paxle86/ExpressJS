const express = require("express");
const app = express();
const port = 3000;
const pug = require('pug');
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ todos: []})
  .write()

app.get("/", (req, res) => {
    res.render("index.pug", {name: 'Thanh'});
});

app.get("/todos", (req, res) => {
    res.render("todos.pug", {
        todos: db.get('todos').value()
    });
});
app.get("/todos/search", (req, res) => {
    var q = req.query.q
    var matchSearch = db.get('todos').value().filter(function(todo) {
        return todo.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    
    res.render('todos.pug', {
        todos: matchSearch
    }); 
})
app.get('/todos/create', (req,res) => {
    res.render('create.pug')
})
app.post('/todos/create', (req,res) => {
    db.get('todos').push(req.body).write()
    res.redirect('/todos')
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
