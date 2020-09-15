import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class DrinksService {
    async getAll(req, res, next) {
        try {
          return await dbContext.Drinks.find();
           
        } catch (error) {
          console.error(error);
        }
      }
  async findAll(query = {}) {
    let drinks = await dbContext.Drinks.find(query).populate(
      "creator",
      "name picture"
    );
    return drinks;
  }
  async findById(id) {
    let drink = await dbContext.Drinks.findById(id);
    if (!drink) {
      throw new BadRequest("Invalid Id");
    }
    return drink;
  }
  async create(rawData) {
    let data = await dbContext.Drinks.create(rawData)
    return data
}
}

export const drinksService = new DrinksService();
