'use strict';

var express = require('express');
var router = express.Router();


var todos = require('.././controllers/todo_ctrl');


//router.get('/api/v1/:userID/todos/:todoID', todos.fetchTodo);
router.post('/api/todos', todos.returnTodo);

module.exports = router;
