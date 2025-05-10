const Categories = require("../models/Categories");

exports.getCategories = async (req, res, next) => {
  try {
    const data = await Categories.find({});
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

exports.createCategories = async (req, res, next) => {
  try {
    const catData = req.body;

    if (
      catData.name.toLowerCase() === "home" ||
      catData.name.toLowerCase() === "Home"
    ) {
      return res.status(400).json({
        success: false,
        status: 409,
        message: `Category  Name "Home" Can not Add.`,
        data: {},
      });
    }

    const existingCategories = await Categories.findOne({
      name: { $regex: `^${catData.name}$`, $options: "i" },
    });

    if (existingCategories) {
      return res.status(400).json({
        success: false,
        status: 409,
        message: "Categories with this name already exists",
        data: {},
      });
    }

    const postData = new Categories(catData);
    const result = await postData.save();

    res.status(200).json({
      success: true,
      status: 200,
      message: "Categories Added",
      data: result,
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
