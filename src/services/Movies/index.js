const dotenv = require("dotenv");
const { create } = require("axios");
dotenv.config();

class MoviesService {
  api;
  default_params;

  constructor() {
    this.api = create({
      baseURL: process.env.THE_MOVIE_DB_URL,
    });
    this.default_params = {
      params: {
        api_key: process.env.API_KEY,
        query: null,
        language: "en-US",
        page: 1,
      },
    };
  }

  getMoviesList = async (route, filters) => {
    const { page } = filters;
    const data = this.default_params;
    data.params.page = page;
    return this.api.get(route, data);
  };

  getMovie = async (id) => {
    return this.api.get(`/movie/${id}`, this.default_params);
  };

  getSearchMovie = async (name) => {
    const data = this.default_params;
    data.params.query = name;
    return this.api.get(`/search/movie`, data);
  };
}

module.exports = MoviesService;
