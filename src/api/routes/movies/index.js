const { Router } = require("express");
const router = Router();
const { moviesController } = require("../../controllers");

router.get("/get-movies-list", moviesController.getMoviesList);
router.get("/get-movie/:id", moviesController.getMovie);
router.get("/get-search-movie/:name", moviesController.getSearchMovie);

module.exports = router;
