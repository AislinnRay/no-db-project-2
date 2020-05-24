const express = require("express");
const todosCtrl = require("./controllers/todos_controller")
const app = express();
const port = 3001;
app.use(express.json()); // telling our server we are going to be receiving requests in JSON and translate them into js 

app.post("/api/todos", todosCtrl.create);
app.get("/api/todos", todosCtrl.read);
app.put("/api/todos/:id", todosCtrl.update);
app.delete("/api/todos/:id", todosCtrl.delete);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//node server speaks in js but our endpoints speak in http JSON
