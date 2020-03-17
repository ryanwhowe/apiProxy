var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'theAxeRant' });
});

/* GET AccuWeather */
router.post('/api', function(req, res, next){
  if(process.env.THEAXERANT_API_KEY !== req.params.api_key) { 
    res.send(process.env.THEAXERANT_API_KEY + '</br>Weather</br>' + req.params.api_key);
  }
  res.send('No!').status(500); 
  
});

module.exports = router;
