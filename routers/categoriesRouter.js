const { getCategories } = require("../controllers/categoriesController");

const router = require("express").Router();

router.get("/", getCategories);

module.exports = router;
