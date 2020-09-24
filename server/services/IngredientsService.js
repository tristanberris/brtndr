import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import _store from "../../clientsrc/src/store/index.js"

class IngredientsService {
  async getAll(req, res, next) {
    try {
      return await dbContext.Ingredients.find();

    } catch (error) {
      console.error(error);
    }
  }
  async findAll(query = {}) {
    let ingredients = await dbContext.Ingredients.find(query).populate(
      "creator",
      "name picture"
    );
    return drinks;
  }
  async findById(id) {
    let ingredient = await dbContext.Ingredients.findById(id);
    if (!drink) {
      throw new BadRequest("Invalid Id");
    }
    return drink;
  }
  //   async create(rawData) {
  //     let data = await dbContext.Ingredients.create(rawData)
  //     return data
  // }

  //start of reference code
  async create(newIngredientData) {
    let newIngredient = new IngredientsService(newIngredientData)
    _store.state.ingredients.push(newIngredient)
    _store.saveState()
  }
}

export const ingredientsService = new IngredientsService();
