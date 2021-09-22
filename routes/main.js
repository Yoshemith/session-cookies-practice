const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

const { body } = require('express-validator');

const validations = [
    body('name').isLength({min:1}).withMessage('Debe ingresar un nombre'),
    body('color').notEmpty().withMessage('Debe elegir un color'),
    body('email').isEmail().withMessage('Debe ingresar un email'),
    body('age').custom(value => {
        if(isNaN(value)){
            throw new Error('El valor ingresado debe ser un numero');
        }else {
            return true;
        }
    })
]

router.get('/', mainController.index); 
router.post('/', validations, mainController.store); 

module.exports = router;
