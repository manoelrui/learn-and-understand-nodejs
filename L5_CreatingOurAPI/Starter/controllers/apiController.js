/**
 * Created by rui on 11/02/17.
 */
var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    app.get('/api/todos/:uname', function (req, res) {
        Todos.find({username: req.params.uname}, function (err, results) {
            if(err) throw err;

            res.send(results);
        });
    });

    app.get('/api/todo/:id', function (req, res) {
        Todos.find({_id: req.params.id}, function (err, results) {
            if(err) throw err;

            res.send(results);
        });
    });

    app.post('/api/todo', function (req, res) {
       if(req.body.id) {
           Todos.findIdAndUpdate(req.body.id, {todo: req.body.todo, isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment}, function (err, result) {

               res.send('Success');
           });R
       } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            Todos.save(function (err) {
                if(err) throw err;
                res.send('Success');
            })
       }
    });

    app.delete('/api/todo', function (req, res) {
       Todos.findIdAndRemove(req.body.id, function (err) {
           if(err) throw err;
           res.send('Success');
       });
    });
};
