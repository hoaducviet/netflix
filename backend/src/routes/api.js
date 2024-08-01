const express = require("express");
const router = express.Router();

const SiteController = require("../controllers/SiteController");
const MediaController = require("../controllers/MediaController");
const MyListController = require("../controllers/MyListController");
const AccountController = require("../controllers/AccountController");
const UserController = require("../controllers/UserController");
const NotificationController = require("../controllers/NotificationController");
const LanguageController = require("../controllers/LanguageController");
const GenreController = require("../controllers/GenreController");
const ActorController = require("../controllers/ActorController");
const CountryController = require("../controllers/CountryController");
const HistoryController = require("../controllers/HistoryController");
const AvatarController = require("../controllers/AvatarController");
const MediaActorController = require("../controllers/MediaActorController");

//Site
router.get("/search", SiteController.search);

//Account
router.post("/signin", AccountController.signIn);
router.post("/signup", AccountController.signUp);





module.exports = router;
