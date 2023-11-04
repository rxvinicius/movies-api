const { MoviesService } = require("../../../services");

const getMoviesList = async (req, res, next) => {
  const { URLMovieDB } = req.query;

  if (!URLMovieDB || URLMovieDB === "" || URLMovieDB === null) {
    res.sendStatus(409);
    next();
    return;
  }

  const movieService = new MoviesService();
  movieService
    .getMoviesList({ route: URLMovieDB })
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(500).send(error))
    .finally(() => next());
};

const getMovie = async (req, res, next) => {
  const { id } = req.params;

  if (!id || id === "" || id === null) {
    res.sendStatus(409);
    next();
    return;
  }

  const movieService = new MoviesService();
  movieService
    .getMovie(id)
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(500).send(error))
    .finally(() => next());
};

const getSearchMovie = async (req, res, next) => {
  const { name } = req.params;
  if (!name || name.trim() === "") {
    res.sendStatus(409);
    next();
    return;
  }

  const movieService = new MoviesService();
  movieService
    .getSearchMovie(name.trim())
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(500).send(error))
    .finally(() => next());
};

module.exports = {
  getMoviesList,
  getMovie,
  getSearchMovie,
};
