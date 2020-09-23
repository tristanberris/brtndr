import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ingredients = new Schema(
  {
    ingredient: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Ingredients.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Ingredients;
