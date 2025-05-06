const { getUsers, getUserByEmail } = require("../controllers/userController");

const router = require("express").Router();

router.get("/:id", getUsers).get("/:catId/:subCatId", getUserByEmail);

module.exports = router;
