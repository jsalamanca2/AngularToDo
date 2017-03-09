var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AngularToDo = new Schema({
    todo: {
        type: String,
        required: true
    },
    completeBy: {
        type: Date,
        required: true,
    },
    boolean: {
        type: Boolean,
        default: false
    },
});
var Todo = mongoose.model("Todo", AngularToDo);
module.exports = Todo;