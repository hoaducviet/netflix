const express = require("express");
const router = express.Router();

const MediaController = require("../controllers/MediaController");
const MyListController = require("../controllers/MyListController");

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


module.exports = router;
