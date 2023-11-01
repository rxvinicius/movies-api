const axios = require('axios');
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
const api_key = 'e2dec1c9dd6210ab589951041d92ed98';
const default_params = {
  params: {
    api_key: api_key,
    language: 'en-US',
    page: 1,
  },
};

class MoviesService {

  constructor() { }

  getMoviesList = async (params) => {
    const { route } = params;
    return api.get(route, default_params);
  };

  getMovie = async (id) => {
    return api.get(`/movie/${id}`, default_params);
  };
}

module.exports = MoviesService;
