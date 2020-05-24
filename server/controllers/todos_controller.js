const todoData = require('../../premadeToDoListData.json')
let todos = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    todos.push({ id, text, time });
    id++;
    res.status(200).send(todos);
  },

  read: (req, res) => {
    res.status(200).send(todos);
  },

  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id == updateID);
    let todo = todos[todoIndex];

    todos[todoIndex] = {
      id: todo.id,
      text: text || todo.text,
      time: todo.time
    };

    res.status(200).send(todos);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    todoIndex = todos.findIndex(todo => todo.id == deleteID);
    todos.splice(todoIndex, 1);
    res.status(200).send(todos);
  }
};