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

//User
router.get("/userall/:idaccount", UserController.getUserAllbyAccount);
router.post("/user/insertone", UserController.insertOneUser);
router.post("/user/insertmany", UserController.insertManyUser);

// Media
router.get("/media/byid/:id", MediaController.getMediabyId);
router.get("/media/all", MediaController.getMediaAll);

// My List
router.get("/mylist/byiduser/:iduser", MyListController.getMyListbyIdUser);
router.post("/mylist/insertone", MyListController.insertOneMyList);
router.post("/mylist/insertmany", MyListController.insertManyMyList);

//Avatar
router.post("/avatar/insertmany", AvatarController.insertManyAvatar);

module.exports = router;
