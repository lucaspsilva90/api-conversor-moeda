let express = require('express');
let router = express.Router();

let userController = require('../controllers/Users')

/* GET users listing. */
router.get('/', userController.listaClientes);

module.exports = router;
