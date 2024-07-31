const express = require("express");
const router = express.Router();

const MediaController = require("../controllers/MediaController");
const MyListController = require("../controllers/MyListController");
const AccountController = require("../controllers/AccountController");
const UserController = require("../controllers/UserController");
const NotificationController = require("../controllers/NotificationController");
const LanguageController = require("../controllers/LanguageController");
const GenreController = require("../controllers/GenreController");
const ActorController = require("../controllers/ActorController");

// Media
router.get("/media/byid/:id", MediaController.getMediabyId);
router.get("/media/all", MediaController.getMediaAll);
router.post("/media/insertmany", MediaController.insertManyMedia);
router.post("/media/insertone", MediaController.insertOneMedia);
router.patch("/media/edit/:id", MediaController.editMedia);
router.delete("/media/delete/:id", MediaController.deleteMedia);

// My List
router.get("/mylist/all", MyListController.getMyListAll);
router.post("/mylist/insertone", MyListController.insertOneMyList);
router.delete("/mylist/delete", MyListController.deleteOneMyList);

//Account
router.post("/signin", AccountController.signIn);
router.post("/signup", AccountController.signUp);

//User
router.get("/userall/:idaccount", UserController.getUserAllbyAccount);
router.get("/user/:id", UserController.getUserbyId);
router.post("/user/insertone", UserController.insertOneUser);
router.patch("/user/edit/:id", UserController.editUser);
router.delete("/user/delete/:id", UserController.deleteUser);

//Notification
router.get(
  "/notification/:iduser",
  NotificationController.getNotificationAllbyUser
);
router.post(
  "/notification/insertone",
  NotificationController.insertOneNotification
);

//History

//Genre
router.get("/genre/all", GenreController.getGenreAll);
router.post("/genre/insertone", GenreController.insertOneGenre);
router.post("/genre/insertmany", GenreController.insertManyGenre);

//Country

//Avatar

//Actor
router.get("/actor/:id", ActorController.getActorbyId);
router.get("/actor/all", ActorController.getActorAll);
router.post("/actor/insertmany", ActorController.insertManyActor);

//Language
router.get("/language/all", LanguageController.getLanguageAll);
router.post("/language/insertone", LanguageController.insertOneLanguage);
router.post("/language/insertmany", LanguageController.insertManyLanguage);

module.exports = router;
