const mongoose = require("mongoose");
const websitesSchema = mongoose.Schema(
  {
    name: { type: String },
    url: { type: String },
    categories: { type: String },
    logo: { type: String },
  },
  { timestamps: true }
);

const Websites = mongoose.model("websites", websitesSchema);
module.exports = Websites;
