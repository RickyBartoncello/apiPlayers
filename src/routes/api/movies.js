const {MoviesController} = include('controllers');

module.exports = router => {
    router.get('/', MoviesController.fetch);

    return router;
};