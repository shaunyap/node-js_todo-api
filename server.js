var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'meet Bob for lunch',
  completed: false
}, {
  id: 2,
  description: 'go to the market',
    completed: false
}, {
  id: 3,
  description: 'clean the house',
    completed: false
}
];

app.get('/', function(req, res) {
  res.send('Todo Api Route.');
});

app.get('/todos', function (req, res) {
  res.json(todos);
});

app.get('/todos/:id', function (req, res) {
    var todoID = parseInt(req.params.id, 10);
    var matchedTodo;

    todos.forEach(function (todo) {
      if (todoID === todo.id) {
        matchedTodo = todo;
      }
    });

    if (matchedTodo) {
      res.json(matchedTodo);
    } else {
      res.status(404).send();
    }
});


app.listen(PORT, function () {
  console.log('Express listening on port: ' + PORT);
})
