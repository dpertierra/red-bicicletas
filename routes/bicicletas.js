var express = require('express');
var router = express.Router(); 
var bicicletaController = require('../controllers/bicicleta');

router.get('/', bicicletaController.bicicleta_list);
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
router.get('/:id/view', bicicletaController.bicicleta_view_get);
router.get('/:id/update', bicicletaController.bicicleta_update_get);
router.post('/:id/update', bicicletaController.bicicleta_update_post);
router.get('/:id/delete', bicicletaController.bicicleta_delete_get);
module.exports = router;