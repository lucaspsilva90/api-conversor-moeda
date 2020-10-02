let express = require('express');
let router = express.Router();

let transactionController = require('../controllers/Transaction')

/* GET users listing. */
router.get('/:userId', transactionController.listByUserId);

module.exports = router;
