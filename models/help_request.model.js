const mongoose=require('mongoose');
const help_requestSchema=new mongoose.Schema({

    id:Number,
    location:Number,
    problem:String,
    phone:String,
    status:String,
    numOfPepole:Number,
    priority:Number,
    volunteer:Number
});
const help_request=mongoose.model('help_requests',help_requestSchema);

module.exports=help_request;