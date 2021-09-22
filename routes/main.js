const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debe ingresar un nombre'),
    body('color').notEmpty().withMessage('Debe elegir un color'),
    body('email').notEmpty().withMessage('Debe ingresar un email'),
    body('age').notEmpty().withMessage('Debe ingresar su edad')
]


router.get('/', mainController.index); 
router.post('/', validations, mainController.store); 

module.exports = router;
