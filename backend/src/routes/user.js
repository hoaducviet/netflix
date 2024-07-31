const express = require("express");
const router = express.Router();

const MediaController = require("../controllers/MediaController");

const MyListController = require("../controllers/MyListController");


//Media
router.get("/media/byid/:id", MediaController.getMediabyId);
router.get("/media/all", MediaController.getMediaAll);

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

module.exports = router;
