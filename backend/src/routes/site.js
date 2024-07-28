const express = require("express");
const router = express.Router();
const siteController = require("../controllers/SiteController");

//Sign In
router.get("/", siteController.signIn);


module.exports = router;
