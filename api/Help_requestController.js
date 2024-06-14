const help_requestService = require("../BL/help_requestService.js");
const Controller = require("./Controller.js");

class Help_requestController extends Controller{
    constructor(){
        super(help_requestService);
    }
}
module.exports=new Help_requestController();