const { validationResult } = require('express-validator');

const controller = {
	index: (req, res) => {
		res.render('index');
	},
    store: (req, res) => {
		let resultValidation = validationResult(req);
        console.log(resultValidation);

        req.session.color = req.body.color;

        if(resultValidation.errors.length > 0){
            return res.render('index', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }else{
            return res.render('index', {
                data: req.body
            });
        }
	}
};

module.exports = controller;