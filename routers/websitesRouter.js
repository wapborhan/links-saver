const { getWebsites } = require("../controllers/websiteController");

const router = require("express").Router();

router.get("/", getWebsites);

module.exports = router;
