const Service = require("./Service.js");
const repo = require("../Dal/Help_requestRepo.js");
const repoVolunteer = require("../Dal/VolunteerRepo.js");
class help_requestService extends Service {
  constructor() {
    super(repo);
  }
  async filtering(query) {
    try {
      const allWaiting = await this.repo.getAll({});
      let filter = allWaiting.filter((v) => v.status == "waiting");
      if (query.location) {
        filter = filter.filter((v) => v.location == query.location);
        console.log(filter);
      }
      if (query.priority) {
        filter = filter.filter((v) => v.priority == query.priority);
        console.log(filter);
      }
      return filter;
    } catch (error) {
      console.log(error);
      throw Error("error getting the list by location of data");
    }
  }
  async IVolunteer(query) {
    try {
      const volunteer = await repoVolunteer.getById(query.volunteer_id);
      console.log(volunteer);
      if (volunteer) {
        const help_request = await this.repo.getById(query.help_request_id);
        if (help_request) {
          help_request.status = "care";
          help_request.volunteer = query.volunteer_id;
          const Updated_volunteer = await this.repo.update(
            query.help_request_id,
            help_request
          );
          return Updated_volunteer;
        }
        return new Error("The volunteer does not exist in the system");
      }
    } catch (e) {
      console.log(e);
    }
  }
  async createNewVolunteer(query, data) {
    try {
      console.log(" in createNewVolunteer - sevice");
      const volunteers = await repoVolunteer.getAll({});
      data.id=volunteers.length+1;
      const volunteer = volunteers.find((v) => v.id == query.volunteer_id);
      if (volunteer!=undefined) {
        const newVolunteer = await repoVolunteer.insert(data);
        if (newVolunteer) {
          return newVolunteer.data.id;
        } else {
          return new Error("Failed to create new volunteer");
        }
      } else {
        return new Error("Volunteer already exists");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new help_requestService();
