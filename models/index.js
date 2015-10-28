var mongoose = require('mongoose');
//模型
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;//自动生成的id
module.exports = mongoose.model('ToDo', new Schema({
    text: String
}));