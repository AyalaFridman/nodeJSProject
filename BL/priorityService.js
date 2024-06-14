const Service= require('./Service.js');
const repo=require('../Dal/PriorityRepo.js');
class priorityService extends Service{
    constructor(){
        super(repo);
    }
}
module.exports=new priorityService();