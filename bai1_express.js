const expess = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", (req, res) => {
  res.send("User list");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
