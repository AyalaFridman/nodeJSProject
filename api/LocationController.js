const locationService = require("../BL/locationService.js");
const Controller = require("./Controller.js");

class LocationController extends Controller{
    constructor(){
        super(locationService);
    }
}
module.exports=new LocationController();