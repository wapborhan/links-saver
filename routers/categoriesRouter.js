const {
  getCategories,
  createCategories,
} = require("../controllers/categoriesController");

const router = require("express").Router();

router.get("/", getCategories).post("/", createCategories);

module.exports = router;
