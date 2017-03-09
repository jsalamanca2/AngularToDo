var Todo = require('./../models/toDo.js');

module.exports = function(app) {
    // Route to create
    app.post('/api/todo', function(req, res) {
        console.log(req.body);
        let entry = new Todo(req.body);
        entry.save(function(err, doc) {
            if (err) {
                res.json(err)
            }
            else {
                res.json(doc)
            }
        })
    })
    // Update
    app.put('/api/todo', function(req, res) {
        console.log(req.body);
        Todo.update({ _id: req.body.id }, { $set: { boolean: req.body.boolean }}, { new: true }, function(err, doc) {
            res.json(doc)
        })
    })
    // Route display the todos
    app.get('/api/todos', function(req, res) {
        Todo.find({}, function(err, docs) {
            let obj = {
                overdue: [],
                due: [],
                completed: []
            }
            let today = new Date();
            let todayutc = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds())
            todayutc = todayutc.toLocaleString('en-US', { hour12: false });
           
            docs.map((a)=> {
                if (!a.boolean) {
                    let entry = {};
                    entry.id = a._id;
                    entry.todo = a.todo;
                    entry.boolean = a.boolean;
                    entry.completeBy = a.completeBy.toLocaleString('en-US', { hour12: false });
                    entry.completeBy < todayutc ? obj.overdue.push(entry) : obj.due.push(entry);
                } else {
                    let entry = {};
                    entry.id = a._id;
                    entry.todo = a.todo;
                    entry.boolean = a.boolean;
                    entry.completeBy = a.completeBy.toLocaleString('en-US', { hour12: false });
                    obj.completed.push(entry);
                }
            })
            res.json(obj);
        })
    })
}