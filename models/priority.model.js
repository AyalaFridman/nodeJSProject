const mongoose=require('mongoose');
const prioritySchema=new mongoose.Schema({
    priorityId:Number,
    priorityName:String,
});
const priority=mongoose.model('priority',prioritySchema);

module.exports=priority;