const express = require("express");
const router = express.Router();

const MediaController = require("../controllers/MediaController");
const MyListController = require("../controllers/MyListController");
const AccountController = require("../controllers/AccountController");
const UserController = require("../controllers/UserController");

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
router.get("/account/userall/:id", AccountController.getUserAll);
router.post("/signin", AccountController.signIn);
router.post("/signup", AccountController.signUp);

//User
router.get("/user/:id", UserController.getUserbyId);
router.post("/user/insertone", UserController.insertOneUser);
router.patch("/user/edit/:id", UserController.editUser);
router.delete("/user/delete/:id", UserController.deleteUser);


//Notification


//History


//Genre


//Country


//Avatar


//Actor


//Language










module.exports = router;
