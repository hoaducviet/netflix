const express = require("express");
const router = express.Router();
const siteController = require("../controllers/SiteController");

//Sign In
router.get("/", siteController.signIn);

router.get("/search", siteController.search);

module.exports = router;
