var express = require('express');
var router = express.Router();
var csvtojson = require('csvtojson');
var file_upload = require('express-fileupload');
var bodyParser = require('body-parser');



var mongoConnection = require('../mongoConnection');

var controller = require('../controller/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

router.use(file_upload())
router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: false
    })
);

router.post('/dataset', (req, res)=>{
    let csvDataBuffer = JSON.stringify(req.body);
    let csvData = JSON.parse(csvDataBuffer).data;
    let csvDataString = csvData.toString("utf8");
    console.log(csvDataString);
    return csvtojson()
        .fromString(csvDataString)
        .then(json => {
            return res.status(201).json({csv:csvDataString, json:json})
        });
});

let avengerArray = [
  {id: 1, name:"Iron Man", location: "Asia"},
  {id: 2, name: "Hulk", location: "Australia"},
  {id: 3, name: "Thor", location: "Arctic"}
];
router.get('/test', function(req, res, next) {
  res.send(avengerArray);
});

module.exports = router;
