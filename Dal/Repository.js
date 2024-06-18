const autoBind = require("auto-bind");
const db = require("./db.js");
const HttpResponse = require("../helpers/HttpResponse.js");

class Repository {
  constructor(model) {
    this.model = model;
    autoBind(this);
    db.connect();
  }
  async getAll(query) {
    try {
      return await this.model.find(query);
    } catch (error) {
      console.log(error);
      throw Error("error getting the list of data");
    }
  }

  async getById(id1) {
    try {
      const item = await this.model.findOne({ id: id1 });
      if (!item) {
        const error = new Error("Item not found");

        error.statusCode = 404;
        throw error;
      }
      // return item;
      return {
        error: false,
        statusCode: 200,
        data: item,
      };
      // return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async insert(data) {
    try {
      const item = await this.model.create(data);
      if (item) {
        // return new HttpResponse(item);
        return {
          error: false,
          statusCode: 200,
          data: item,
        };
      }
      throw new Error("Something wrong happened");
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      // const item1=await this.model.findOne({id:id});
      // console.log("item:"+item1);
      // console.log("data:"+JSON.stringify(data));
      // console.log(id1);
      //כל הנתונים מגיעים מצוין
      const item = await this.model.updateOne({ id: id }, data);
      console.log("item after update:" + JSON.stringify(item));
      const item1 = await this.model.findOne({ id: id });
      console.log("item:" + item1);
      if (!item) {
        const error = new Error("item not found in update");
        error.statusCode = 404;
        throw error;
      }
      return {
        error: false,
        statusCode: 200,
        data: item,
      };
      // return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async delete(id1) {
    try {
      const item = await this.model.deleteMany({ id: id1 });

      if (!item) {
        const error = new Error("Item not found");

        error.statusCode = 404;
        throw error;
      } else {
        // return new HttpResponse(item, { 'deleted': true });
        return {
          error: false,
          statusCode: 200,
          data: item,
        };
      }
    } catch (errors) {
      throw errors;
    }
  }
}
module.exports = Repository;
