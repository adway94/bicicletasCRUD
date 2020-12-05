const express = require('express')
const router = express.Router()
const bicicletaControler = require('../../controler/api/bicicletaControlerApi')

router.get('/', bicicletaControler.bicicleta_list)
router.post('/create', bicicletaControler.bicicleta_create)
router.delete('/delete', bicicletaControler.bicicleta_delete)

module.exports = router;

