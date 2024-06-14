const priorityService = require("../BL/priorityService.js");
const Controller = require("./Controller.js");

class PriorityController extends Controller{
    constructor(){
        super(priorityService);
    }
}
module.exports=new PriorityController();