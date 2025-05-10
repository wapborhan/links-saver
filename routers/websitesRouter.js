const {
  getWebsites,
  createWebsite,
} = require("../controllers/websiteController");

const router = require("express").Router();

router.get("/", getWebsites).post("/", createWebsite);

module.exports = router;
