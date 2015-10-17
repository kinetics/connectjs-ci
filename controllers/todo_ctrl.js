

// Ridiculously simple example of a function.
exports.returnTodo = function(req, res, callback) {
    res.json(req.body.message);
};