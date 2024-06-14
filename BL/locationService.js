const Service= require('./Service.js');
const repo=require('../Dal/LocationRepo.js');
class locationService extends Service{
    constructor(){
        super(repo);
    }
}
module.exports=new locationService();