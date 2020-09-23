import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import DrinksSchema from "../models/Drinks";
import IngredientsSchema from "../models/Ingredients"


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Drinks = mongoose.model("Drinks", DrinksSchema);
  Ingredients = mongoose.model("Ingredients", IngredientsSchema)
}

export const dbContext = new DbContext();
