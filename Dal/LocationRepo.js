const Location = require("../models/location.model.js")
const Repository = require("./Repository.js")

class LocationRepo extends Repository{
constructor(){
    super(Location);
}

}
module.exports=new LocationRepo();