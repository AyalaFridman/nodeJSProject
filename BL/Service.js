class Service {
  constructor(repo) {
    this.repo = repo;
  }
  async getAll(query) {
    try {
      return await this.repo.getAll(query);
    } catch (error) {
      console.log(error);
      throw Error("error getting the list of data");
    }
  }

  async getById(id) {
    try {
      const item = await this.repo.getById(id);

      if (!item) {
        const error = new Error("Item not found");
        error.statusCode = 404;
        throw error;
      }
      return item;
      // return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async insert(data) {
    try {
      const item = await this.repo.insert(data);

      if (item) {
        // return new HttpResponse(item);
        return item;
      }
      throw new Error("Something wrong happened");
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const item = await this.repo.update(id, data, { new: true });
      if (!item) {
        const error = new Error('item not found in update');
        error.statusCode = 404;
        throw error;
    }
      // return new HttpResponse(item);
      return item;
    } catch (errors) {
      throw errors;
    }
  }

  async delete(id) {
    try {
      const item = await this.repo.delete(id);

      if (!item) {
        const error = new Error("Item not found");

        error.statusCode = 404;
        throw error;
      } else {
        // return new HttpResponse(item, { 'deleted': true });
        return item;
      }
    } catch (errors) {
      throw errors;
    }
  }
}
module.exports = Service;
