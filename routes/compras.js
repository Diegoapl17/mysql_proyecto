const { Router} = require('express');

const { comprasGet,
        comprasPut,
        comprasPost,
        comprasDelete } = require('../controllers/compras');

const router = Router();

router.get('/', comprasGet);

router.put('/:id', comprasPut);

router.post('/', comprasPost );

router.delete('/', comprasDelete);


module.exports = router;