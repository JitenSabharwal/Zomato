var express = require('express');
var router = express.Router();
const ZomatoApi = require('../controllers/zomato')
/* GET home page. */
router.get('/', function(req, res, next) {
  ZomatoApi(req.query).then((data) => {
    res.json(data)
  })
});

module.exports = router;
