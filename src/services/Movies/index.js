const axios = require('axios');
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

class MoviesService {

  constructor() { }

  getMovie = async (params) => {
    const { route } = params;
    return api.get(route, {
      params: {
        api_key: 'e2dec1c9dd6210ab589951041d92ed98',
        language: 'en-US',
        page: 1,
      },
    });
  };
}

module.exports = MoviesService;
