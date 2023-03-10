const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = mongoose.Schema({
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },
  name: {
    type: String,
  },
  amount: {
    // 양
    type: Number,
  },
  unit: {
    // 단위
    type: String,
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = { Ingredient };
