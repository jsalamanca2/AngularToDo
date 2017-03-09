// mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var angularToDo = new Schema({
    errand: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    due: {
        type: Date,
        default: new Date(+new Date() + 24 * 60 * 60 * 1000)
    }
});

var ToDo = mongoose.model('errand', angularToDo);

module.exports = ToDo;