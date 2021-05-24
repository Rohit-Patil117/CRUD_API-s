const mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    s_id: Number,
    s_firstname: String,
    s_lastname: String,
    s_branch: String,
    s_city: String,
    s_Aggregate: Number 
});
module.exports = mongoose.model('student_info', studentSchema);