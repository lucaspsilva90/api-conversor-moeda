let express = require('express');
let router = express.Router();

let transactionController = require('../controllers/Transaction')

//GET
router.get('/:userId', transactionController.listByUserId);

//POST
router.post('/:userId', transactionController.store);

module.exports = router;
