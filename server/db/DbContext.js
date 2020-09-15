import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import DrinksSchema from "../models/Drinks";


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Drinks = mongoose.model("Drinks", DrinksSchema);
}

export const dbContext = new DbContext();
