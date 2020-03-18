var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const sha1 = crypto.createHash('sha1');

/**
 * valiate the parameters to the endpoint to ensure the needed parts have been sent
 * @param {*} params 
 */
const validateParams = (params) => {
  params.base_url // required
  params.uri // optional
  params.force_reload // optional
  params.post // optional
}

const generateRequestUrl = (params) => {
  const base_url = params.base_url;

}

/* GET api listing. */
router.get('/api/:application', function(req, res, next) {
  if(!validateParams(req.params)){
    res.status(400).send('Missing required parameters');
  }
  const application = req.params.application;
  if(application === 'weather'){
    const request_key = sha1.update(req.params.base_url + req.params.uri).digest('hex');
    
    if(!req.params.force_reload){
      // check the cache for the response, and serve if available
    }
      // make the request
      // cache the response
    return;
  }
  res.send('respond with a resource');
});

/* fall through for default reaction without an application */
router.get('/api', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
