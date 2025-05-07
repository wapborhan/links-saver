const Users = require("../models/Users");
const Websites = require("../models/Websites");

exports.getWebsites = async (req, res, next) => {
  const cat = req.query.cat;
  console.log(cat);

  try {
    let data;

    if (cat === "all") {
      data = await Websites.find({});
    } else {
      data = await Websites.findOne({ categories: cat });
    }

    res.status(200).json({
      success: true,
      status: 200,
      message: "Users Found",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: error.message,
      data: {},
    });
  }
};

exports.getUserByEmail = async (req, res, next) => {
  try {
    const user = await Users.find({
      _id: req.params.id,
      email: req.query.email,
    });

    res.status(200).json({
      success: true,
      status: 200,
      message: "User Found",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: error.message,
      data: {},
    });
  }
};
