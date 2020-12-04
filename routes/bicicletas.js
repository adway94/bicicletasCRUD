const express = require('express')
const router = express.Router()
const bicicletaControler = require('../controler/bicicleta')

router.get('/', bicicletaControler.bicicleta_list);

module.exports = router;
