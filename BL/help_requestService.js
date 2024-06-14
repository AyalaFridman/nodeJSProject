const Service= require('./Service.js');
const repo=require('../Dal/Help_requestRepo.js');
class help_requestService extends Service{
    constructor(){
        super(repo);
    }
}
module.exports=new help_requestService();