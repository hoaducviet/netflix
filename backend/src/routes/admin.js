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

// Media
router.get("/media/byid/:id", MediaController.getMediabyId);
router.get("/media/all", MediaController.getMediaAll);
router.post("/media/insertmany", MediaController.insertManyMedia);
router.post("/media/insertone", MediaController.insertOneMedia);
router.patch("/media/edit/:id", MediaController.editMedia);
router.delete("/media/delete/:id", MediaController.deleteMedia);

// My List
router.get("/mylist/byiduser/:iduser", MyListController.getMyListbyIdUser);
router.post("/mylist/insertone", MyListController.insertOneMyList);
router.post("/mylist/insertmany", MyListController.insertManyMyList);
router.delete("/mylist/delete", MyListController.deleteOneMyList);

//Account
router.post("/signin", AccountController.signIn);
router.post("/signup", AccountController.signUp);

//User
router.get("/userall/:idaccount", UserController.getUserAllbyAccount);
router.get("/user/:id", UserController.getUserbyId);
router.post("/user/insertone", UserController.insertOneUser);
router.post("/user/insertmany", UserController.insertManyUser);
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
router.get("/history/:iduser", HistoryController.getHistoryAllbyIdUser);
router.post("/history/insertone", HistoryController.insertOneHistory);
router.post("/history/insertmany", HistoryController.insertManyHistory);

//Genre
router.get("/genre/byid/:id", GenreController.getGenrebyId);
router.get("/genre/all", GenreController.getGenreAll);
router.post("/genre/insertone", GenreController.insertOneGenre);
router.post("/genre/insertmany", GenreController.insertManyGenre);

//Country
router.get("/country/byid/:id", CountryController.getCountrybyId);
router.get("/country/all", CountryController.getCountryAll);
router.post("/country/insertmany", CountryController.insertManyCountry);

//Avatar
router.get("/avatar/byid/:id", AvatarController.getAvatarbyId);
router.get("/avatar/all", AvatarController.getAvatarAll);
router.post("/avatar/insertmany", AvatarController.insertManyAvatar);

//MediaActor
router.get(
  "/mediaactor/:idmedia",
  MediaActorController.getMediaActorAllbyIdMedia
);
router.post("/mediaactor/insertone", MediaActorController.insertOneMediaActor);
router.post(
  "/mediaactor/insertmany",
  MediaActorController.insertManyMediaActor
);

//Actor
router.get("/actor/byid/:id", ActorController.getActorbyId);
router.get("/actor/all", ActorController.getActorAll);
router.post("/actor/insertmany", ActorController.insertManyActor);

//Language
router.get("/language/byid/:id", LanguageController.getLanguagebyId);
router.get("/language/all", LanguageController.getLanguageAll);
router.post("/language/insertone", LanguageController.insertOneLanguage);
router.post("/language/insertmany", LanguageController.insertManyLanguage);

module.exports = router;

//Home

// //TV Shows
// router.get("/tvshows/genre/:id", TVShowsController.getTVShowsbyGenre);

// //Movies
// router.get("/movies/genre/:id", MoviesController.getMoviesbyGenre);
// router.get("/movies/nextwatch", MoviesController.getMoviesNextWatch);
// router.get("/movies/watching", MoviesController.getMoviesWatching);

// //NewPopular
// router.get("/new/netflix", NewPopularController.getNewonNetflix);
// router.get(
//   "/new/top10/tvshows/:id",
//   NewPopularController.getTop10TVShowsTodaybyCountry
// );
// router.get(
//   "/new/top10/movies/:id",
//   NewPopularController.getTop10MoviesTodaybyCountry
// );
// router.get("/new/top10/nextweek", NewPopularController.getComingNextWeek);
// router.get("/new/top10/worththewait", NewPopularController.getWorththeWait);
// router.get("/new/top10/thisweek", NewPopularController.getComingThisWeek);

// //My List
// router.get("/mylist", MyListController.getMyListAll);

// //BrowsebyLanguagesController
// router.get("/original/:id", BrowsebyLanguagesController.getMoviesbyOriginal);
// router.get("/audio/:id", BrowsebyLanguagesController.getMoviesbyAudio);
// router.get("/subtitles/:id", BrowsebyLanguagesController.getMoviesbySubtitles);
