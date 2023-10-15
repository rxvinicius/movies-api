const { MoviesService } = require('../../../services');

const getMovie = async (req, res, next) => {
  const { URLMovieDB } = req.query;

  if (URLMovieDB === '' || URLMovieDB === null || !URLMovieDB) {
    res.sendStatus(409);
    next();
    return;
  }

  const movieService = new MoviesService();
  movieService.getMovie({ route: URLMovieDB })
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error))
    .catch(() => next());
};

module.exports = {
  getMovie,
};
