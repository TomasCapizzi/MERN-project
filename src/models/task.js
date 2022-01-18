const mongoose = require('mongoose');
const {Schema} = mongoose;

//Modificar Schema según Proyecto
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean
    }
});

module.exports = mongoose.model('Task', TaskSchema);