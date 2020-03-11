const {PrayersController} = include('controllers');

module.exports = router =>{ 
    router.get('/', PrayersController.fetch);

    return router;
};