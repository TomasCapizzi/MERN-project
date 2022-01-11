const mongoose = require('mongoose');
const {Schema} = mongoose;

//Modificar Schema según Proyecto
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Task', TaskSchema);