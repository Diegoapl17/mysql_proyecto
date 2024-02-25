const { Router} = require('express');

const { productosGet,
        productosPut,
        productosPost,
        productosDelete } = require('../controllers/productos');

const router = Router();

router.get('/', productosGet);

router.put('/', productosPut);

router.post('/', productosPost );

router.delete('/', productosDelete);


module.exports = router;