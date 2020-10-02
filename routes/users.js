let express = require('express');
let router = express.Router();

let userController = require('../controllers/Users')

// GET
router.get('/', userController.list);

// POST
router.post('/', userController.store);

module.exports = router;
