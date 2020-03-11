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

    static async create(req, res, next) {
        try {
            const cars = require('../data/cars.json');
            let response; 

            const result = await cars.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch(err){
            next(err);
        }


    }



}

module.exports = CarsController;
