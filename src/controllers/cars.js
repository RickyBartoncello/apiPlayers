// eslint-disable-next-line
const find = require('lodash/find');
const filter = require('lodash/filter');
const toNumber = require('lodash/toNumber');
const replace = require('lodash/replace');

class CarsController {
    static fetch(req, res, next) {
        try {
            const cars = require('../data/cars.json');
            let response;

            /*const filteredCars = filter(cars, function(car){
                const priceString = car.price.replace('$', '');
                const price = toNumber(priceString);

                if (price >= 4000 && price <= 7000){
                    return true;
                }else{
                    return false;
                } 
                
                
            });*/
            const {field, min, max} = req.query;

            //Si se pasa el parametro de filtro entonces...
            if (field && min && max) {
                // Hagan algo para filtrar datos

                const fieldStr = field.toString();
                const minNumber = toNumber(min);
                const maxNumber = toNumber(max);

                if(fieldStr === 'price'){
                    response = filter(cars, ({price}) => {
                        //  destructuring
                        
                        const priceWorked = toNumber(replace(price, '$', ''));
        
                        return priceWorked >= minNumber && priceWorked <= maxNumber;
                        
                        
                    });
                }

            }
            else{
                response = cars;
            }

            res.send(response);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = CarsController;
