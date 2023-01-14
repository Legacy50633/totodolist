const mongoose = require("mongoose")
const Schema = mongoose.Schema
const task = new Schema({
    todo:String,
    isComplete:Boolean
})

module.exports = mongoose.model('Task',task)  