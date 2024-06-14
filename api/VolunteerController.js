const volunteerService = require("../BL/volunteerService.js");
const Controller = require("./Controller.js");

class VoluntreerController extends Controller{
    constructor(){
        super(volunteerService);
    }
}
module.exports=new VoluntreerController();