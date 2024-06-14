const Priority = require("../models/priority.model.js")
const Repository = require("./Repository")

class PriorityRepo extends Repository{
constructor(){
    super(Priority);
}

}
module.exports=new PriorityRepo();