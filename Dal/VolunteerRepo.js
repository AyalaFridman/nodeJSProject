const Volunteer = require("../models/volunteer.model.js")
const Repository = require("./Repository")


class VolunteerRepo extends Repository{
constructor(){
    super(Volunteer);
}

}
module.exports=new VolunteerRepo();

