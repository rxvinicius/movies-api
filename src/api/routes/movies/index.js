const { Router } = require('express');
const router = Router();
const { moviesController } = require('../../controllers');

router.get('/get-movie', moviesController.getMovie);

module.exports = router;
