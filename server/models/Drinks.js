import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Drinks = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Drinks.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Drinks;
