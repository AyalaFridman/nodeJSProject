const help_requestService = require("../BL/help_requestService.js");
const Controller = require("./Controller.js");

class Help_requestController extends Controller{
    constructor(){
        super(help_requestService);
    }
    async filtering(req, res, next) {
        try {
          const response = await help_requestService.filtering(req.query);
          return res.json(response);
        } catch (e) {
          next(e);
        }
      }
    async IVolunteer(req, res, next) {
        try {
          console.log("in controller");
          const response = await help_requestService.IVolunteer(req.query);
          return res.json(response);
        } catch (e) {
          next(e);
        }
      }
    async createNewVolunteer(req, res, next) {
        try {
          const response = await help_requestService.createNewVolunteer(req.query,req.body);
          return res.json(response);
        } catch (e) {
          next(e);
        }
      }
    
}
module.exports=new Help_requestController();