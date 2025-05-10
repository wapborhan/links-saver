const Websites = require("../models/Websites");

exports.getWebsites = async (req, res, next) => {
  const cat = req.query.cat;

  try {
    let data;

    if (cat === "all") {
      data = await Websites.find({});
    } else {
      data = await Websites.find({ categories: cat });
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

exports.createWebsite = async (req, res, next) => {
  try {
    const webData = req.body;

    const existingName = await Websites.findOne({ name: webData.name });

    const existingUrl = await Websites.findOne({ url: webData.url });

    if (existingName) {
      return res.status(400).json({
        success: true,
        status: 409,
        message: "Website with this Name already exists",
        data: {},
      });
    }

    if (existingUrl) {
      return res.status(400).json({
        success: true,
        status: 409,
        message: "Website with this URL already exists",
        data: {},
      });
    }

    const postData = new Websites(webData);
    const result = await postData.save();

    res.status(200).json({
      success: true,
      status: 200,
      message: "User Found",
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
