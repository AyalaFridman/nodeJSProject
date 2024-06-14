const help_reqests = require("../models/help_request.model")
const Repository = require("./Repository")


class Help_reqestsRepo extends Repository{
constructor(){
    super(help_reqests);
}

}
module.exports=new Help_reqestsRepo();