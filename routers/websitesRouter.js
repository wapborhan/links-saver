const {
  getWebsites,
  createWebsite,
  deleteWebsite,
} = require("../controllers/websiteController");

const router = require("express").Router();

router
  .get("/", getWebsites)
  .post("/", createWebsite)
  .delete("/:id", deleteWebsite);

module.exports = router;
