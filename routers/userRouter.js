const {
  createUser,
  getUsers,
  getUserByUsername,
} = require("../controllers/userController");

const router = require("express").Router();

router
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:username", getUserByUsername);

module.exports = router;
