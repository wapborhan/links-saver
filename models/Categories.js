const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema(
  {
    name: { type: String },
    icon: { type: String },
  },
  { timestamps: true }
);

const Categories = mongoose.model("categories", categoriesSchema);
module.exports = Categories;
