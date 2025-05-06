const Users = require("../models/Users");

exports.getUsers = async (req, res, next) => {
  try {
    const data = await Users.find({});
    console.log(data);
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
