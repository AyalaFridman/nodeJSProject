const mongoose=require('mongoose');
const volunteerSchema=new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    phone:String,
    specialization:String
});
const volunteers=mongoose.model('volunteer',volunteerSchema);

module.exports=volunteers;