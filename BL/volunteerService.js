const Service= require('./Service.js');
const repo=require('../Dal/VolunteerRepo.js');
class volunteerService extends Service{
    constructor(){
        super(repo);
    }
}
module.exports=new volunteerService();