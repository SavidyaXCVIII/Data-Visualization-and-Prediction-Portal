const express = require('express');
const app = express();
const datasetRoutes = express.Router();

// Require DatasetInfo model in our routes module
let DatasetInfo = require('../models/DatasetInfo');

// Defined store route
datasetRoutes.route('/add').post(function (req, res) {
    let business = new DatasetInfo(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
datasetRoutes.route('/').get(function (req, res) {
    DatasetInfo.find(function (err, businesses){
        if(err){
            console.log(err);
        }
        else {
            res.json(businesses);
        }
    });
});

// Defined edit route
datasetRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    DatasetInfo.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route
datasetRoutes.route('/update/:id').post(function (req, res) {
    DatasetInfo.findById(req.params.id, function(err, next, business) {
        if (!business)
            return next(new Error('Could not load Document'));
        else {
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;

            business.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
datasetRoutes.route('/delete/:id').get(function (req, res) {
    DatasetInfo.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = datasetRoutes;
