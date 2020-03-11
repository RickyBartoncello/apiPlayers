// eslint-disable-next-line
const find = require('lodash/find');

class MoviesController {
    static fetch(req, res, next) {
        try {
            const movies = require('../data/movies.json');

            if (req.query.filter) {
            // Hagan algo para filtrar datos
            }
            res.send(movies);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = MoviesController;
