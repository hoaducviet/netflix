const express = require("express");
const router = express.Router();
const siteController = require("../controllers/SiteController");

//Sign In
router.get("/", siteController.signIn);

//Sign Up

router.post("/signup", siteController.signUp);


router.get("/search", siteController.search);

module.exports = router;
