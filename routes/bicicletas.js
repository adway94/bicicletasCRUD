const express = require('express')
const router = express.Router()
const bicicletaControler = require('../controler/bicicleta')

router.get('/', bicicletaControler.bicicleta_list);
//Create
router.get('/create', bicicletaControler.bicicleta_create_get);
router.post('/create', bicicletaControler.bicicleta_create_post);
//Delete
router.post('/:id/delete', bicicletaControler.bicicleta_delete_post);
//Update
router.get('/:id/update', bicicletaControler.bicicleta_update_get);
router.post('/:id/update', bicicletaControler.bicicleta_update_post);

module.exports = router;
