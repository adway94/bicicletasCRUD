const express = require('express')
const router = express.Router()
const bicicletaControler = require('../controler/bicicleta')

router.get('/', bicicletaControler.bicicleta_list);
router.get('/create', bicicletaControler.bicicleta_create_get);
router.post('/create', bicicletaControler.bicicleta_create_post);

module.exports = router;
