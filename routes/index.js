var express = require('express');
var router = express.Router();

let counter = require('../controllers/counter');

/*API*/

router.get('/word/:word', counter.getCount);
router.put('/word/:word', counter.addCount);

module.exports = router;
