var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var application = express();

// Routes
var todos = require('./routes/todo_routes');
var cors = require('cors');
var chalk = require('chalk');

application.use(bodyParser.json());
application.use(cors());
application.use('/', todos);


// Handle 404
application.use(function(req, res) {
  res.status(404).send('404: Page not Found.');
});

// Handle 500
// log errors here.
application.use(function(error, req, res, next) {
  console.log(chalk.red(error));
  res.status(error.statusCode || 500);
  res.format({
    text: function() {
      res.send(error.message);
    },
    json: function() {
      res.send(error);
    }
  });
});

// Create server for the Express application
var server = http.Server(application);

// Start the serer
var listener = server.listen(process.env.PORT || 5000, function() {
  console.log('listening at: ' + listener.address().address + ':' + listener.address().port);
});

exports.listener = listener;