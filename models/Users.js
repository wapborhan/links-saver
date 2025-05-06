const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
    mobileNo: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
